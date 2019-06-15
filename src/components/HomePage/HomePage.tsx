import * as React from 'react'

import './HomePage.css'

import ChallengePanel from 'components/ChallengePanel'
import SignalPanel from 'components/SignalPanel'

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="HomePage">
        <ChallengePanel />
        <SignalPanel />
      </div>
    )
  }
}
