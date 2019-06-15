import * as React from 'react'

import { Props } from './ChallengePanel.types'

import './ChallengePanel.css'

const alphabet = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-·-·--":"!",
    "·-·-·-":".",
    "--··--":","
}
const backphabet = Object.keys(alphabet).reduce(
    (dict, key) => { dict[alphabet[key]] = key; return dict }, {}
)

export class ChallengePanel extends React.PureComponent<Props> {
    how(letter: string) {
        return <div className='Letter'>
            <div className='topLetter'>{letter}</div>
            <div className='bottomLetter'>{backphabet[letter]}</div>
        </div>
    }
    render() {
        return <div className='ChallengePanel'>
            <div>Target: {this.props.target}</div>
            <div className='Targets'>
                { this.props.target && this.props.target.toLowerCase().split('').map(letter => this.how(letter)) }
            </div>
            <div className='Words'>
            { this.props.words.filter(word => !!word).map((word, index) => <div key={index} className='word'>{word}</div>)}
            </div>
            <button onClick={() => this.props.onClearInputRequested()}>Clear Input</button>
            <button onClick={() => this.props.onSkipWordRequested()}>Skip Word</button>
        </div>
    }
}
