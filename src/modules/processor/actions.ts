import { action } from 'typesafe-actions'

export const CLEAR_CURRENT_INPUT_REQUESTED = '[processor-ui] Clear Current Input Requested'
export const CLEAR_CURRENT_INPUT = '[processor] Clear Current Input'
export const UPDATE_CURRENT_INPUT = '[processor] Update Current Input'

export const clearInputRequest = () => action(CLEAR_CURRENT_INPUT_REQUESTED)
export const clearInput = () => action(CLEAR_CURRENT_INPUT)
export const updateCurrent = (words: string[]) => action(UPDATE_CURRENT_INPUT, { words })

export type ClearInputRequest = ReturnType<typeof clearInputRequest>
export type ClearInput = ReturnType<typeof clearInput>
export type UpdateCurrent = ReturnType<typeof updateCurrent>
