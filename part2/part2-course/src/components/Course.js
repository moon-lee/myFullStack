import React from 'react'

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

export default  Course