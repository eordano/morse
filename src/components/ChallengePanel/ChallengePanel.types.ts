
export type Props = {
    words: string[]
    target: string
    onSkipWordRequested: Function
    onClearInputRequested: Function
}

export type MapStateProps = Pick<
    Props,
    'words' | 'target'
>

export type MapDispatchProps = Pick<
    Props,
    'onSkipWordRequested' | 'onClearInputRequested'
>
  