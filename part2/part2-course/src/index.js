import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]

        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]

        }
    ]
    return (
        <>
            <Courses courses={courses} />
        </>
    )
}

const Courses = ({ courses }) => {
    const rows = () => courses.map(course =>
        <Course
            key={course.id}
            course={course}
        />
    )
    return (
        <div>
            {rows()}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

const Header = ({ name }) => <h1>{name}</h1>


const Content = ({ parts }) => {
    const rows = () => parts.map(part =>
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

const Part = ({ part }) => <p> {part.name} {part.exercises} </p>

const Total = ({ parts }) => {
    const total = parts.reduce((currentT, part) => {
        return part.exercises + currentT
    }, 0)
    return (
        <b>total of {total} exercises</b>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));


