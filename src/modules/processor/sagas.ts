import { select, put, takeEvery } from 'redux-saga/effects'

import { APPEND_SIGNAL } from 'modules/signal/actions'
import { SignalType, DOT, LONG, SPACE } from 'modules/signal/types'

import { CLEAR_CURRENT_INPUT_REQUESTED, updateCurrent } from './actions'
import { clearInput } from './actions'

export const sendClear = function*() {
  yield put(clearInput())
}

const alphabet = {  
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  ".-":"a",
  "-...":"b",
  "-.-.":"c",
  "-..":"d",
  ".":"e",
  "..-.":"f",
  "--.":"g",
  "....":"h",
  "..":"i",
  ".---":"j",
  "-.-":"k",
  ".-..":"l",
  "--":"m",
  "-.":"n",
  "---":"o",
  ".--.":"p",
  "--.-":"q",
  ".-.":"r",
  "...":"s",
  "-":"t",
  "..-":"u",
  "...-":"v",
  ".--":"w",
  "-..-":"x",
  "-.--":"y",
  "--..":"z",
  "/":" ",
  "-·-·--":"!",
  "·-·-·-":".",
  "--··--":","
}

function process(signalArray: SignalType[]): string[] {
  const str = signalArray.map(function(c: string) {
    switch (c) {
      case DOT: return '.'
      case LONG: return '-'
      case SPACE: return ' '
      default: return ''
    }
  }).join('')
  const wait = str.split('   ').map((word: string) => {
    return word.replace(' ', '')
      .replace(' ', '')
      .replace(' ', '')
      .replace(' ', '')
      .replace(' ', '')
      .replace(' ', '')
  }).filter(e => !!e)
  console.log(wait)
  return wait.map(word => alphabet[word])
}

export const updateInput = function*() {
  const signalArray = yield select((state: any) => state.signal.signals)
  yield put(updateCurrent(process(signalArray)))
}

export const processorSaga = function*() {
  yield takeEvery(CLEAR_CURRENT_INPUT_REQUESTED, sendClear)
  yield takeEvery(APPEND_SIGNAL, updateInput)
}
