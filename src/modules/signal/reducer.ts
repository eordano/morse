import { Reducer } from 'redux'

import { SignalType } from './types'

import { ClearInput, CLEAR_CURRENT_INPUT } from 'modules/processor/actions'

import {
  SWITCH_PRESSED,
  SWITCH_RELEASED,
  SILENCE_ENDED,
  PULSE_ENDED,
  APPEND_SIGNAL,
  AppendSignalAction,
  SwitchPressed,
  SwitchReleased,
  EndSilenceAction,
  EndPulseAction
} from './actions'

export type SignalState = {
  webAudio: {
    context: any
    oscillator: any
    analyzer: any
  }
  dotLength: number
  switchPressed: boolean
  signals: SignalType[]
  lastSilences: number[]
  lastPulses: number[]
}

function setupWebAudio() {
  const context = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
  const oscillator = context.createOscillator()
  const analyzer = context.createAnalyser()
  analyzer.set
  analyzer.fftSize = 2048

  oscillator.type = 'square'
  oscillator.frequency.value = 440
  return {
    context, oscillator, analyzer
  }
}

const INITIAL_STATE: SignalState = {
  webAudio: setupWebAudio(),
  dotLength: 100,
  switchPressed: false,
  signals: [],
  lastPulses: [],
  lastSilences: []
}

export type SignalAction = AppendSignalAction | EndSilenceAction | EndPulseAction | SwitchReleased | SwitchPressed | ClearInput

export const signalReducer: Reducer<SignalState> = (
    state = INITIAL_STATE,
    action: SignalAction
): SignalState => {
  switch (action.type) {
    case CLEAR_CURRENT_INPUT:
      return { ...state, signals: [] }
    case SWITCH_RELEASED:
      return { ...state, switchPressed: false }
    case SWITCH_PRESSED:
      return { ...state, switchPressed: true }
    case APPEND_SIGNAL:
      return { ...state, signals: [ ...state.signals, action.payload.signal ] }
    case SILENCE_ENDED:
      return { ...state, lastSilences: [ action.payload.time, ...state.lastSilences ].slice(0, 10) }
    case PULSE_ENDED:
      return { ...state, lastPulses: [ action.payload.time, ...state.lastPulses ].slice(0, 10) }
    default:
      return state
  }
}
