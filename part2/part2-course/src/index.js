import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 17,
                id: 3
            }
        ]
    
    } 
    return (
        <>
            <Course course={course} />
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

const Header = ({name}) =>  <h1>{name}</h1>
 

const Content = ({parts}) => {
    const rows = () => parts.map(part=> 
        <Part 
            key={part.id}
            part={part} 
        />
    )

    return (
        <div>
            {rows()}
        </div>
    )

}

const Part = ({part}) => <p> {part.name} {part.exercises} </p>

const Total = ({parts}) => {
    const exercisesTotal = parts.reduce((currentT, part) => {
        return part.exercises + currentT
    }, 0)
    return (
        <p>Number of exercises {exercisesTotal}</p>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));


