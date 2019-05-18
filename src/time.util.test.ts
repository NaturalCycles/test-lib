import { MOCK_TS_2018_06_21, mockTime, mockTimeMillis, resetTime } from './time.util'

const now = Date.now()

beforeEach(() => {
  resetTime()
})

test('mockTime default', () => {
  expect(Date.now()).toBeGreaterThanOrEqual(now)

  mockTime()

  expect(Date.now()).toBe(MOCK_TS_2018_06_21 * 1000)

  resetTime()

  expect(Date.now()).toBeGreaterThanOrEqual(now)

  mockTimeMillis(123456)

  expect(Date.now()).toBe(123456)
})
