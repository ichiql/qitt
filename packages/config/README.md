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
module.exports = {
  root: true,
  extends: [
    '@qitt/config/eslint',
  ],
};
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
}
```