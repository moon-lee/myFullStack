import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas'
    },
    {
      name: 'Ada Lovelace'
    }
  ])
  const [newName, setNewName] = useState('')

  const listPerson = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  const addNew = (e) => {
    e.preventDefault()
    console.log('Add button click', e.target)
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{listPerson()}</div>
    </div>
  )
}

const Person = ({ person }) => {
  return (
    <div>{person.name}</div>
  )
}

export default App