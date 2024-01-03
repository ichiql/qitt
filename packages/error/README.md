# Deprecated

このパッケージは非推奨となりました
今後は [anoare](https://github.com/ichiql/anoare) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

## @qitt/error

```shell
pnpm add @qitt/error
```

```shell
npm install @qitt/error
```

```shell
yarn add @qitt/error
```

あったらうれしいエラークラス(ほぼ extends Error)

Error class that would be nice to have (almost extends Error)

```js
import { AbortError } from '@qitt/error'

throw new AbortError('message')
```
