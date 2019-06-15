import { fork, select, put, take, takeLatest } from 'redux-saga/effects'


import { RootState } from 'types'

import { PULSE_ENDED, SILENCE_ENDED, SWITCH_RELEASED, SWITCH_PRESSED } from './actions'
import { DOT, LONG, SPACE, VOID } from './types'
import { appendSignal, endPulse, endSilence, EndPulseAction } from './actions'

let lastEvent = 0
let MARGIN = 0.4

function getNow(): number {
  return new Date().getTime()
}


export function* sendEndEvents() {
  yield takeLatest(SWITCH_RELEASED, function*() {
    const now = getNow()
    if (lastEvent) yield put(endPulse(now - lastEvent))
    lastEvent = now
  })

  while (true) {
    yield take(SWITCH_PRESSED)
    const now = getNow()
    const time = now - lastEvent
    lastEvent = now
      yield put(endSilence(time))
      yield take(SWITCH_RELEASED)
      continue;
    
  }
}

export function* processPulse(action: EndPulseAction) {
  const dotLength = yield select((state: RootState) => state.signal.dotLength)
  const threeLengths = 3 * dotLength
  const time = action.payload.time
  if (time > (1-MARGIN) * dotLength && time < (1+MARGIN) * dotLength) {
    yield put(appendSignal(DOT))
  } else if (time > (1-MARGIN) * threeLengths && time < (1+MARGIN) * threeLengths) {
    yield put(appendSignal(LONG))
  } else {
    yield put(appendSignal(VOID))
  }
}

export function* processSilence() {
  yield put(appendSignal(SPACE))
}

export function* makeSound() {
  const webAudio = yield select((state: RootState) => state.signal.webAudio)
  let running = false
  while (true) {
    const action = yield take([SWITCH_PRESSED, SWITCH_RELEASED]) 
    if (action.type === SWITCH_RELEASED) {
      if (webAudio.context.state === 'running' && running){
        webAudio.oscillator.disconnect(webAudio.context.destination)
        running = false
      }
    }
    if (action.type === SWITCH_PRESSED) {
      if (webAudio.context.state === 'running' && !running) {
        webAudio.oscillator.connect(webAudio.context.destination)
        running = true
      }
    }
  }
}

export function* signalSaga() {
  yield takeLatest(PULSE_ENDED, processPulse)
  yield takeLatest(SILENCE_ENDED, processSilence)
  yield fork(sendEndEvents)
  yield fork(makeSound)
}

