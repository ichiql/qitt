# Deprecated

このパッケージは非推奨となりました
今後は [anoare](https://github.com/ichiql/anoare) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

## @qitt/spin

```shell
pnpm add @qitt/spin
```

```shell
npm install @qitt/spin
```

```shell
yarn add @qitt/spin
```

stdout へクルクルスピン出力

Crucial spin output to stdout

```js
import { spin, spinEnd } from '@qitt/spin'

spin({ suffix: ' kurukuru' }) // ⠙ kurukuru
spin({ suffix: ' kurukuru' }) // ⠹ kurukuru
spin({ suffix: ' kurukuru' }) // ⠸ kurukuru
spin({ suffix: ' kurukuru' }) // ⠼ kurukuru

spinEnd() // return cursor
```
