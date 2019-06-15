export interface Props {
  onNavigate: (location: string) => void
}

export interface StateProps {
}

export type MapStateProps = StateProps
export type MapDispatchProps = Pick<Props, 'onNavigate'>
