# Deprecated

このパッケージは非推奨となりました
今後は [@ichiql/prettier-config](https://github.com/ichiql/prettier-config) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

## @qitt/config

```shell
pnpm add @qitt/config
```

```shell
npm install @qitt/config
```

```shell
yarn add @qitt/config
```

config file for eslint, prettier, tsconfig...

.eslintrc.js

```js:.eslintrc.js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...require('@qitt/config/eslint.cjs'),
  parserOptions: {
    project: './tsconfig.json',
  },
}
```

package.json

```json:package.json
{
  ~~~
  "prettier": "@qitt/config/prettier"
  ~~~
}
```

tsconfig.json

```json:tsconfig.json
{
  "extends": "@qitt/config/tsconfig",
  "compilerOptions": {
    ~~~
  },
  "include": ["~~~"]
}
```