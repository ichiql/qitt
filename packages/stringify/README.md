# Deprecated

このパッケージは非推奨となりました
今後は [anoare](https://github.com/ichiql/anoare) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

## @qitt/stringify

```shell
pnpm add @qitt/stringify
```

```shell
npm install @qitt/stringify
```

```shell
yarn add @qitt/stringify
```

なにかを文字列化する(bigint supported JSON.stringify)

String something (bigint supported JSON.stringify)

```js
import stringify from '@qitt/stringify'

await stringify({ name: 'haruhi', num: BigInt(8) }) // { "name": "haruhi", "num": "8" }
```
