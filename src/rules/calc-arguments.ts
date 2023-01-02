export default {
  meta: {
    fixable: 'code',
  },

  // @ts-ignore
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
      // @ts-ignore
      CallExpression(node) {
        if (node.callee.name === 'calc') {
          for (let i = 0, l = node.arguments.length; i < l; i++) {
            const type = node.arguments[i]
            const prev = node.arguments[i - 1]

            if (type.value.includes(' ')) {
              context.report({
                node: type,
                message: 'Use function arguments instead of whitespaces.',
              })
              break
            }

            if (prev) {
              const orderIndex = correctOrder.indexOf(prev.value)
              const typeIndex = correctOrder.indexOf(type.value)

              if (orderIndex > typeIndex) {
                context.report({
                  node: type,
                  message: `\`${type.value}\` should come before \`${prev.value}\`.`,
                })
              }
            }
          }
        }
      },
    }
  },
}
