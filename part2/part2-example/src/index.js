import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

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
    }
]


ReactDOM.render(<App notes={notes} />, document.getElementById('root'));

