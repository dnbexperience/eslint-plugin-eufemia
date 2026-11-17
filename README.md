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
    "@eufemia/calc-arguments": [
      "error",
      { "calcMethodName": "optionalOtherName" }
    ]
  }
}
```

The option `calcMethodName` defaults to `calc`.

## Supported Rules

- [calc-arguments](https://github.com/dnbexperience/eslint-plugin-eufemia/blob/main/docs/rules/calc-arguments.md) (optional)

## License

Licensed under the [Eufemia DNB Project License v1.0](./LICENSE) for DNB Group projects, including internal and customer-facing applications and suppliers working on DNB's behalf. Public access does not permit reuse in unrelated projects.

Third-party materials retain their own terms. Earlier-version rights and separate agreements remain in effect. By submitting a contribution, you agree to the contributor grant in section 3 of the license and confirm that you have the right to grant it.
