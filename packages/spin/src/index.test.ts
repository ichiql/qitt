import { describe, test } from '@jest/globals'
import { spin, spinEnd } from '.'

describe('Spin', () => {
  test('basic', async () => {
    let i = 0
    while (i < 1000) {
      spin({ suffix: ' test' })
      i++
    }
    spinEnd()
  })
})
