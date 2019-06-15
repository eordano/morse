import { connect } from 'react-redux'
import { RootDispatch, RootState } from 'types'

import { ChallengePanel } from './ChallengePanel'

import { skipWordRequested, SkipWordRequested } from 'modules/challenge/actions'

import { MapDispatchProps, MapStateProps } from './ChallengePanel.types'

import { clearInputRequest, ClearInputRequest } from 'modules/processor/actions'

const mapState = (state: RootState): MapStateProps => {
  const words = state.processor.words
  const target = state.challenge.targetWord

  return {
      words, target
  }
}

const mapDispatch = (
  dispatch: RootDispatch<
    ClearInputRequest | SkipWordRequested
  >
): MapDispatchProps => ({
  onClearInputRequested: () => dispatch(clearInputRequest()),
  onSkipWordRequested: () => dispatch(skipWordRequested()),
})

export default connect(
  mapState,
  mapDispatch
)(ChallengePanel)
