/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...require('@qitt/config/eslint.cjs'),
  parserOptions: {
    project: './tsconfig.json',
  },
}
