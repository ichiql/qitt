## @qitt/is-number

```shell
pnpm add @qitt/is-number
```

```shell
npm install @qitt/is-number
```

```shell
yarn add @qitt/is-number
```

数値かどうかを判定する(use zod)

Determine if it is a number(use zod)

```js
import { isNumber, isNumbers } from '@qitt/is-number'

isNumber(1) // true
isNumber('ABC') // false
isNumber({}) // false
isNumber(undefined) // false
isNumbers([1, 2]) // true
isNumbers([]) // true
isNumbers(['A', 'B', 'C']) // false
```
