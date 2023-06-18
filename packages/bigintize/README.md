## @qitt/bigintize

```shell
pnpm add @qitt/bigintize
```

```shell
npm install @qitt/bigintize
```

```shell
yarn add @qitt/bigintize
```

string や number を bigint に変換

Convert string or number to bigint

```js
import bigintize from '@qitt/bigintize'

bigintize('123') // BigInt(123)
bigintize(123) // BigInt(123)
bigintize('$1,000') // BigInt(1000)
bigintize('invalid value') // throw error
bigintize('invalid value', BitInt(1)) // BitInt(1)
```
