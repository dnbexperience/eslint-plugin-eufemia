import type { TSESTree, TSESLint } from '@typescript-eslint/utils'

type MessageIds = 'order' | 'whitespaces'

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Helps to keep consistent code.',
      url: 'https://github.com/dnbexperience/eslint-plugin-eufemia/blob/main/docs/rules/calc-arguments.md',
      recommended: false,
    },
    fixable: 'code',
    messages: {
      order: '"{{type}}" should come before "{{prev}}".',
      whitespaces: 'Use function arguments instead of whitespaces.',
    },
  },
  create(context) {
    const correctOrder = [
      'xx-large',
      'x-large',
      'large',
      'medium',
      'small',
      'x-small',
    ]

    return {
      CallExpression(node: TSESTree.CallExpression) {
        const callee = node.callee as TSESTree.Identifier

        if (callee.name === 'calc') {
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
} as TSESLint.RuleModule<MessageIds, Options>

type Options = [
  {
    // someOption?: '' | ''
  }
]
