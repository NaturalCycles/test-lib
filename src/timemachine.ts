export interface TimemachineLib {
  config (options?: TimemachineOptions): void
  reset (): void
}

export interface TimemachineOptions {
  dateString?: string
  timestamp?: number
  difference?: number
  tick?: boolean
  keepTime?: boolean
}

export const timemachine: TimemachineLib = require('./lib/timemachine')
