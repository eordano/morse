import { all } from 'redux-saga/effects'
import { challengeSaga } from 'modules/challenge/sagas'
import { signalSaga } from 'modules/signal/sagas'
import { processorSaga } from 'modules/processor/sagas'

export function* rootSaga() {
  yield all([
    challengeSaga(),
    signalSaga(),
    processorSaga()
  ])
}
