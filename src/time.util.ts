import * as timemachine from 'timemachine'

export const MOCK_TS_2018_06_21 = 1529539200

/**
 * Locks time-related functions to return always same time.
 * For deterministic tests.
 */
export function mockTime (ts = MOCK_TS_2018_06_21): void {
  mockTimeMillis(ts * 1000)
}

export function mockTimeMillis (millis = MOCK_TS_2018_06_21 * 1000): void {
  timemachine.config({
    timestamp: millis,
  })
}

export function resetTime (): void {
  timemachine.reset()
}
