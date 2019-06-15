import { Reducer } from 'redux'
import { pickRandomWord } from './util'

import { SkipWordRequested, SetNewTarget, SET_NEW_TARGET_WORD } from './actions'

export type ChallengeAction = SkipWordRequested | SetNewTarget

export type ChallengeState = {
  targetWord: string
}

export const INITIAL_STATE = {
  targetWord: ''
}

export const challengeReducer: Reducer<ChallengeState> = (
    state = INITIAL_STATE,
    action: ChallengeAction
) => {
  if (state === null) {
    return { targetWord: pickRandomWord() }
  }
  switch (action.type) {
    case SET_NEW_TARGET_WORD:
      return { targetWord: pickRandomWord() }
    default:
      return state
  }
}
