import { MiddlewareAPI, AnyAction, Reducer, Store } from 'redux'
import { RouterState } from 'react-router-redux'
import { SignalState } from 'modules/signal/reducer'
import { ProcessorState } from 'modules/processor/reducer'
import { ChallengeState } from 'modules/challenge/reducer'

export type RootState = {
  router: RouterState
  signal: SignalState
  processor: ProcessorState
  challenge: ChallengeState
}

export type RootStore = Store<RootState>

export interface RootDispatch<A = AnyAction> {
  (action: A): A
}

export type RootMiddleware = (
  store: MiddlewareAPI<any>
) => (next: RootDispatch<AnyAction>) => (action: AnyAction) => any

export type RootReducer = Reducer<RootState>
