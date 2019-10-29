import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeural] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeural(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    const all = good + neutral + bad
    const average = () => {
        if (all === 0) return 0
        return (
            (good * 1 + neutral * 0 + bad * -1) / all
        )
    }
    const positive = () => {
        if (all === 0) return 0
        return (
            good / all * 100
        )
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <h1>Statistic</h1>
            <table>
                <tbody>
                    <tr>
                        <td>good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                        <td>bad</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>all</td>
                        <td>{all}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{average()}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{positive()} %</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

