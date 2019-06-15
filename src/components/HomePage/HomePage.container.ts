import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { push } from 'react-router-redux'

import HomePage from './HomePage'
import { MapStateProps, MapDispatchProps } from './HomePage.types'

const mapState = (): MapStateProps => ({})

const mapDispatch = (dispatch: Dispatch<AnyAction>): MapDispatchProps => ({
  onNavigate: (location: string) => dispatch(push(location))
})

export default connect(
  mapState,
  mapDispatch
)(HomePage)
