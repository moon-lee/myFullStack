import React from 'react';
import ReactDOM from 'react-dom';

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-12-31T15:20:56.961Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only javascript',
        date: '2019-12-31T15:20:40.270Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocal',
        date: '2019-12-31T15:22:14.015Z',
        important: true
    },
]

const App = (props) => {

    const { notes } = props
    const rows = () => notes.map(note => <li key={note.id}>{note.content}</li>)

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {rows()}
            </ul>
        </div>
    )
}

ReactDOM.render(<App notes={notes} />, document.getElementById('root'));


