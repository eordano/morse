import * as React from 'react'

import SignalTextInfoPanel from './SignalTextInfoPanel'
import SignalGraph from './SignalGraph'
import SignalSwitch from './SignalSwitch'

import { Props } from './SignalPanel.types'
import './SignalPanel.css'

export class SignalPanel extends React.PureComponent<Props> {
  render() {
    const { dotLength, oscillator, lastPulses, lastSilences, switchPressed, context } = this.props
    const { onSwitchPressed, onSwitchReleased } = this.props

    const infoPanelProps = { dotLength, lastPulses, lastSilences }
    const signalSwitchProps = { switchPressed, onSwitchReleased, onSwitchPressed, context, oscillator }

    return <div className='SignalPanel'>
      <SignalTextInfoPanel { ...infoPanelProps } />
      <SignalGraph analyzer={this.props.analyzer} />
      <SignalSwitch { ...signalSwitchProps } />
    </div>
  }
}
