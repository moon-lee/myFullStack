import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const course = 'Half Stack application development'
    
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 20
        },
        {
            name: 'State of a component',
            exercises: 30
        }
    ]

    return (
        <>
            <Header course={course} />
            <Content parts={parts} />
            <Total  parts={parts} />
        </>
    )
}

const Header = ({course}) =>  <h1>{course}</h1>
 

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )

}

const Part = ({part, exercises}) => <p> {part} {exercises} </p>

const Total = (props) => {
    const exercisesTotal = props.parts.reduce((currentT, part) => {
        return part.exercises + currentT
    }, 0)
    return (
        <p>Number of exercises {exercisesTotal}</p>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));


