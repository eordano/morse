import * as React from 'react'

import { SignalTextInfoPanelProps } from 'components/SignalPanel/SignalPanel.types'

export default class SignalTextInfoPanel extends React.PureComponent<SignalTextInfoPanelProps> {

    renderSilences() {
        return (<p>Last Silences: { this.props.lastSilences
                .map((time: number) => `${time} ms`)
                .slice(0,2)
                .join(', ')
        }</p>)
    }

    renderPulses() {
        return (<p>Last Pulses: { this.props.lastPulses
                .map((time: number) => `${time} ms`)
                .slice(0,2)
                .join(', ')
        }</p>)
    }

    render() {
        return <div>
            <p>Dot Length: { this.props.dotLength }</p>
            { this.renderSilences() }
            { this.renderPulses() }
        </div>
    }
}
