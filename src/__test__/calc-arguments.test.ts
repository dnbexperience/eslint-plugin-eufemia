import { it } from 'vitest'
import { RuleTester } from 'eslint'
import { rule } from '../rules/calc-arguments'

const ruleTester = new RuleTester()

it('calc-arguments', () => {
  // @ts-ignore
  ruleTester.run('calc-arguments', rule, {
    valid: [
      {
        code: `calc('large', 'small')`,
      },
      {
        code: `calc('2rem', '1rem')`,
      },
    ],

    invalid: [
      {
        code: `calc('small', 'large')`,
        errors: [
          {
            message: '"large" should come before "small".',
            type: 'Literal',
          },
        ],
      },
      {
        code: `calc('large small')`,
        errors: [
          {
            message: 'Use function arguments instead of whitespaces.',
            type: 'Literal',
          },
        ],
      },
    ],
  })
})
