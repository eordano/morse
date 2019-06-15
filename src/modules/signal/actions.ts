import { action } from 'typesafe-actions'

import { SignalType } from './types'

export const SWITCH_PRESSED = '[signal-ui] Switch Pressed'
export const SWITCH_RELEASED = '[signal-ui] Switch Released'

export const APPEND_SIGNAL = '[signal] Append Signal'
export const SILENCE_ENDED = '[signal] Silence Ended'
export const PULSE_ENDED = '[signal] Pulse Ended'

export const switchPressed = () => action(SWITCH_PRESSED)
export const switchReleased = () => action(SWITCH_RELEASED)

export const appendSignal = (signal: SignalType) => action(APPEND_SIGNAL, { signal })

export const endSilence = (time: number) => action(SILENCE_ENDED, { time })
export const endPulse = (time: number) => action(PULSE_ENDED, { time })

export type SwitchPressed = ReturnType<typeof switchPressed>
export type SwitchReleased = ReturnType<typeof switchReleased>
export type AppendSignalAction = ReturnType<typeof appendSignal>
export type EndSilenceAction = ReturnType<typeof endSilence>
export type EndPulseAction = ReturnType<typeof endPulse>
