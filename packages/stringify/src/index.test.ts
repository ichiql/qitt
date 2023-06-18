import { describe, expect, test } from '@jest/globals'
import { stringify } from '.'

describe('Stringify', () => {
  test('basic', async () => {
    expect(stringify({ name: 'sakura' })).toBe('{"name":"sakura"}')
    expect(stringify({ name: 'tomoyo', num: BigInt(10) })).toBe('{"name":"tomoyo","num":"10"}')
  })
})
