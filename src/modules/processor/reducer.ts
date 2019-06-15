import { Reducer } from 'redux'

import {
  CLEAR_CURRENT_INPUT,
  UPDATE_CURRENT_INPUT,
  ClearInput,
  ClearInputRequest,
  UpdateCurrent
} from './actions'

export type ProcessorAction = ClearInputRequest | ClearInput | UpdateCurrent

export type ProcessorState = {
  words: string[]
}

const INITIAL_STATE = {
  words: ['']
}

export const processorReducer: Reducer<ProcessorState> = (
  state: ProcessorState = INITIAL_STATE,
  action: ProcessorAction
) => {
  switch (action.type) {
    case CLEAR_CURRENT_INPUT:
      return INITIAL_STATE
    case UPDATE_CURRENT_INPUT:
      return { ...state, words: action.payload.words }
    default:
      return state
  }
}
