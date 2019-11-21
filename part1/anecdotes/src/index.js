import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Votes = ({ votes, selected }) => <p>has {votes[selected]} votes</p>


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voted, setVoted] = useState(0)

    const getRandomSelected = () => {
        const randomSelected = Math.floor(Math.random() * Math.floor(maxSelected))
        setSelected(randomSelected)
    }

    const haveVoted = () => {
        votes[selected] += 1
        setVoted(voted + 1)
    }

    const getMostvoted = votes.reduce((mostVotedIdx, currentVoted, currentIdx, arr) => { return currentVoted > arr[mostVotedIdx] ? currentIdx : mostVotedIdx }, 0
    )



    return (
        <div>
            <h1>Ancedote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <Votes votes={votes} selected={selected} />
            <Button onClick={haveVoted} text='vote' />
            <Button onClick={getRandomSelected} text='next ancedote' />
            <h1>Ancedote with most votes</h1>
            <p>{props.anecdotes[getMostvoted]}</p>
            <Votes votes={votes} selected={getMostvoted} />

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const maxSelected = anecdotes.length
const votes = new Array(maxSelected + 1).join('0').split('').map(parseFloat)


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));


