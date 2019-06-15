import { action } from 'typesafe-actions'

export const SKIP_TARGET_WORD_PRESSED = '[challenge-ui] Skip Current Word Requested'
export const SET_NEW_TARGET_WORD = '[challenge] Set New Target Word'

export const skipWordRequested = () => action(SKIP_TARGET_WORD_PRESSED)
export const setNewTarget = (word: string) => action(SET_NEW_TARGET_WORD, { word })

export type SkipWordRequested = ReturnType<typeof skipWordRequested>
export type SetNewTarget = ReturnType<typeof setNewTarget>
