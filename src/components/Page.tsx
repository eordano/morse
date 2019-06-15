import * as React from 'react'

import ChallengePanel from 'components/ChallengePanel'
import SignalPanel from 'components/SignalPanel'

import './Page.css'

export class Page extends React.Component {
    render() {
        return <div className='container'>
            <ChallengePanel />
            <SignalPanel />
        </div>
    }
}
