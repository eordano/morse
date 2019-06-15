import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { locations } from 'locations'
import HomePage from 'components/HomePage'

export default class Routes extends React.Component {
  renderRoutes() {
    return (
      <Switch>
        <Route exact path={locations.root()} component={HomePage} />
        <Redirect to={locations.root()} />
      </Switch>
    )
  }

  render() {
    return (
      <div>
        {this.renderRoutes()}
      </div>
    )
  }
}
