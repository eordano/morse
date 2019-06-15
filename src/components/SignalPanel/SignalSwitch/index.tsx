import * as React from 'react'

import { SignalSwitchProps } from './SignalSwitch.types'

export default class SignalSwitch extends React.PureComponent<SignalSwitchProps> {
    press: any
    release: any

    constructor(props: any, ...args: any[]) {
        super(props, ...args)
        this.press = (ev: any) => {
            ev.preventDefault()
            if (this.props.context.state === 'suspended') {
                this.props.context.resume()
                this.props.oscillator.start()
            }
            this.props.onSwitchPressed()
        }
        
        this.release = (ev: any) => {
            ev.preventDefault()
            this.props.onSwitchReleased()
        }
    }
    

    render() {
        return <button className='Switch' onMouseDown={this.press} onMouseUp={this.release} onTouchStart={this.press} onTouchEnd={this.release}></button>
    }
}
