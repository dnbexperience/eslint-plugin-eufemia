import { ESLintUtils } from '@typescript-eslint/utils'

const getDocsUrl = (name: string): string =>
  `https://github.com/dnbexperience/eslint-plugin-eufemia/blob/main/docs/rules/${name}.md`

export const createRule: ReturnType<typeof ESLintUtils.RuleCreator> = (
  ...args
) => ESLintUtils.RuleCreator(getDocsUrl)(...args)
