import { put, takeEvery } from 'redux-saga/effects'

import { pickRandomWord } from './util'

import { setNewTarget, SKIP_TARGET_WORD_PRESSED } from './actions'

export function* setNewWord() {
  yield put(setNewTarget(pickRandomWord()))
}

export const challengeSaga = function*() {
  yield takeEvery(SKIP_TARGET_WORD_PRESSED, setNewWord)
}
