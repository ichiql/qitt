# Deprecated

このパッケージは非推奨となりました
今後は [anoare](https://github.com/ichiql/anoare) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

## @qitt/numberize

```shell
pnpm add @qitt/numberize
```

```shell
npm install @qitt/numberize
```

```shell
yarn add @qitt/numberize
```

string や bitint を number に変換する。

Convert string or bitint to number.

```js
import numberize from '@qitt/numberize'

numberize('123') // 123
numberize(BigInt(123)) // 123
numberize('$1,000') // 1000
numberize('invalid value') // NaN
```
