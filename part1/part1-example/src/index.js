import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}


const Button = ({onClick, text}) =>  <button onClick={onClick}>{text}</button>
 
const App = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0) 
    const [allClicks, setAll] = useState([])

    // const [clicks, setClicks] = useState({left: 0, right: 0})

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left+1)
        // setClicks({...clicks, left: clicks.left+1 })
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right+1)
        // setClicks({ ...clicks, right: clicks.right+1 })
    }

    return (
        <>
            <div>
                {left}
                <Button onClick={handleLeftClick} text='Left' />
                <Button onClick={handleRightClick} text='Right' />
                {right}
                <History allClicks={allClicks} />
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))


