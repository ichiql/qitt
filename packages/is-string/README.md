# Deprecated

このパッケージは非推奨となりました
今後は [anoare](https://github.com/ichiql/anoare) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

## @qitt/is-string

```shell
pnpm add @qitt/is-string
```

```shell
npm install @qitt/is-string
```

```shell
yarn add @qitt/is-string
```

文字列かどうかを判定する(use zod)

Determine if it is a string(use zod)

```js
import { isString, isStrings } from '@qitt/is-string'

isString('ABC') // true
isString(1) // false
isString({}) // false
isString(undefined) // false
isStrings(['A', 'B', 'C']) // true
isStrings([]) // true
isStrings([1, 2]) // false
```
