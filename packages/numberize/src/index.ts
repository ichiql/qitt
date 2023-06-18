const MIN_NUM = BigInt(Number.MIN_SAFE_INTEGER)
const MAX_NUM = BigInt(Number.MAX_SAFE_INTEGER)

export const numberize = (v: unknown, d?: number): number => {
  const def = d ?? Number.NaN
  switch (typeof v) {
    case 'number':
      return v
    case 'string': {
      const pd = v.replace(/[\\¥$%, ]/g, '')
      return pd === '' ? def : Number(pd)
    }
    case 'bigint':
      if (v < MIN_NUM) return Number.MIN_SAFE_INTEGER
      if (v > MAX_NUM) return Number.MAX_SAFE_INTEGER
      try {
        return parseInt(v.toString())
      } catch (e) {
        return def
      }
    default:
      return def
  }
}

export default numberize
