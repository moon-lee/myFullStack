import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <div>
            <h1>Give Feedback</h1>
            <button>good</button>
            <button>neutral</button>
            <button>bad</button>
            <h1>Statistic</h1>
            <table>
                <tr>
                    <td>good</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>4</td>
                </tr>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

