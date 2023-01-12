import type { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/RuleCreator'

type Options = [
  {
    calcMethodName?: string
  }
]

type MessageIds = 'order' | 'whitespaces'

export const rule = createRule<Options, MessageIds>({
  defaultOptions: [{ calcMethodName: 'calc' }],
  name: 'calc-arguments',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Helps to keep consistent code.',
      recommended: false,
    },
    fixable: 'code',
    messages: {
      order: '"{{type}}" should come before "{{prev}}".',
      whitespaces: 'Use function arguments instead of whitespaces.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          calcMethodName: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context, options) {
    const correctOrder = [
      'xx-large',
      'x-large',
      'large',
      'medium',
      'small',
      'x-small',
      'xx-small',
    ]

    return {
      CallExpression(node) {
        const callee = node.callee as TSESTree.Identifier

        if (callee.name === options?.[0]?.calcMethodName) {
          for (let i = 0, l = node.arguments.length; i < l; i++) {
            const type = node.arguments[i] as TSESTree.StringLiteral
            const prev = node.arguments[i - 1] as TSESTree.StringLiteral

            if (type.value.includes(' ')) {
              context.report({
                node: type,
                messageId: 'whitespaces',
              })
              break
            }

            if (prev) {
              const orderIndex = correctOrder.indexOf(prev.value)
              const typeIndex = correctOrder.indexOf(type.value)

              if (orderIndex > typeIndex) {
                context.report({
                  node: type,
                  data: { type: type.value, prev: prev.value },
                  messageId: 'order',
                })
              }
            }
          }
        }
      },
    }
  },
})
