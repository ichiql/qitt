export const stringify = (obj: unknown, space?: string | number | undefined): string => {
  return JSON.stringify(
    obj,
    (_, value) => {
      if (typeof value === 'bigint') {
        return value.toString()
      }
      return value
    },
    space
  )
}
