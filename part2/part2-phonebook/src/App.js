import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456'
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345'
    },
    {
      name: 'Mary Poppendieck',
      number: '39-23-6423122'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')


  const addNew = (e) => {
    e.preventDefault()
    const isExist = persons.map(person => person.name).includes(newName)

    if (!isExist) {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handleFilterChange = (e) => {
    setNameFilter(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} onChange={handleFilterChange} />
      <h3>Add a new person</h3>
      <form onSubmit={addNew}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons persons={persons} filterName={nameFilter} />
    </div>
  )
}

const Person = ({ person }) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

const Persons = ({ persons, filterName }) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
  const listPerson = () => filteredPersons.map(filteredPerson =>
    <Person
      key={filteredPerson.name}
      person={filteredPerson}
    />
  )
  return (
    <div>{listPerson()}</div>
  )
}

const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter shown with <Input value={value} onChange={onChange} />
    </div>
  )
}

const Input = ({ value, onChange }) => (<input type="text" value={value} onChange={onChange} />)


export default App