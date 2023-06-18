import { describe, expect, test } from '@jest/globals'
import { AbortError } from '../src'

describe('AbortError', () => {
  test('error name', () => {
    expect(new AbortError('message').name).toBe('AbortError')
  })
})
