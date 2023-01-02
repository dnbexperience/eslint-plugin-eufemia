# Choose between styles written as strings or objects (syntax-preference)

## Rule Details

This rule aims to choose between syntaxes.

Examples of **incorrect** code for this rule:

```js
calc('small', 'large')
// --> "large" should come before small
```

Examples of **incorrect** code for this rule:

```js
calc('small large')
// --> Use function arguments instead of whitespaces
```

## When Not To Use It

If you don't want to limit styles to a unique syntax.
