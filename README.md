# @eufemia/eslint-plugin

> ESLint rules for DNB Eufemia

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@eufemia/eslint-plugin`:

```
$ npm install @eufemia/eslint-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@eufemia/eslint-plugin` globally.

## Usage

Add `@eufemia` to the plugins section of your `.eslintrc` configuration file. You can omit `/eslint-plugin`:

```json
{
  "plugins": ["@eufemia"]
}
```

Then configure the rules you want to use under the rules section:

```json
{
  "rules": {
    "@eufemia/calc-arguments": "error"
  }
}
```

## Supported Rules

- [calc-arguments](https://github.com/dnbexperience/eslint-plugin-eufemia/blob/main/docs/rules/calc-arguments.md) (optional)
