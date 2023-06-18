export const bigintize = (v: unknown, d?: bigint): bigint => {
  try {
    switch (typeof v) {
      case 'number':
        return BigInt(v)
      case 'string': {
        const pd = v.replace(/[\\¥$%, ]/g, '')
        return BigInt(pd)
      }
      case 'bigint':
        return v
      default:
        throw new Error('invalid value')
    }
  } catch (e) {
    if (d === undefined) throw e
    return d
  }
}

export default bigintize
