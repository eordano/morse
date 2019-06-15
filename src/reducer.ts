import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { RootState } from 'types'
import { challengeReducer as challenge } from 'modules/challenge/reducer'
import { signalReducer as signal } from 'modules/signal/reducer'
import { processorReducer as processor } from 'modules/processor/reducer'

// TODO: Consider spliting individual reducers into { data, loading, error }
export const rootReducer = combineReducers<RootState>({
  challenge,
  signal,
  processor,
  router
})
