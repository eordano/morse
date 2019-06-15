import { connect } from 'react-redux'
import { RootDispatch, RootState } from 'types'

import { SignalPanel } from './SignalPanel'
import { switchPressed, switchReleased, SwitchPressed, SwitchReleased } from 'modules/signal/actions'

import { MapDispatchProps, MapStateProps } from './SignalPanel.types'

const mapState = (state: RootState): MapStateProps => {
  const analyzer = state.signal.webAudio.analyzer
  const oscillator = state.signal.webAudio.oscillator
  const dotLength = state.signal.dotLength
  const context = state.signal.webAudio.context
  const lastPulses = state.signal.lastPulses
  const switchPressed = state.signal.switchPressed
  const lastSilences = state.signal.lastSilences

  return {
    dotLength,
    analyzer,
    oscillator,
    context,
    lastPulses,
    lastSilences,
    switchPressed
  }
}

const mapDispatch = (
  dispatch: RootDispatch<
    SwitchPressed | SwitchReleased
  >
): MapDispatchProps => ({
  onSwitchPressed: () => dispatch(switchPressed()),
  onSwitchReleased: () => dispatch(switchReleased()),
})

export default connect(
  mapState,
  mapDispatch
)(SignalPanel)
