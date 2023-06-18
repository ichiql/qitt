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

文字列かどうかを判定する

Determine if it is a string

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