import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (prop) => {
    return (
        <div>
            <p>Hello {prop.name}, you are {prop.age} years old</p>
        </div>
    )
}

const App = () => {
    const name = "Peter"
    const age = 10
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Moon Lee" age={20 + 10} />
            <Hello name={name} age={age} />
            <Footer />
        </>
    )
}

const Footer = () => {
    return (
        <div>
            Greeting app created by
            <a href="https://github.com/moon-lee">Moon Lee</a>
        </div>

    )
}


ReactDOM.render(<App />, document.getElementById('root'));
