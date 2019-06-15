
export type SignalTextInfoPanelProps = {
  dotLength: number
  lastPulses: Array<number>
  lastSilences: Array<number>
}

export type Props = {
  dotLength: number
  lastPulses: Array<number>
  lastSilences: Array<number>
  analyzer: any
  context: any
  oscillator: any
  switchPressed: boolean
  onSwitchPressed: Function
  onSwitchReleased: Function
}

export type MapStateProps = Pick<
  Props,
  'analyzer' | 'dotLength' | 'oscillator' | 'lastPulses' | 'lastSilences' | 'switchPressed' | 'context'
>

export type MapDispatchProps = Pick<
  Props,
  'onSwitchReleased' | 'onSwitchPressed'
>
