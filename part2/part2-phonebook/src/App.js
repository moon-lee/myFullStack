import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newInputValue, setNewInputValue] = useState({newName:'', newNumber:'', nameFilter:''})

  const hook = () => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook,[])

  const addNew = (e) => {
    e.preventDefault()
    const isExist = persons.map(person => person.name).includes(newInputValue.newName)

    if (!isExist) {
      const nameObject = {
        name: newInputValue.newName,
        number: newInputValue.newNumber
      }
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${newInputValue.newName} is already added to phonebook`)
    }
    setNewInputValue({...newInputValue, newName:'', newNumber:''})
  }

  const handleOnChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setNewInputValue({
      ...newInputValue,
      [name]: value
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={newInputValue} onChange={handleOnChange} />
      <h3>Add a new person</h3>
        <PersonForm onSubmit={addNew} value={newInputValue} onChange={handleOnChange} />
      <h3>Numbers</h3>
        <Persons persons={persons} filterName={newInputValue.nameFilter} />
    </div>
  )
}

const Person = ({ person }) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

const Persons = ({ persons, filterName }) => {
  console.log(persons, filterName)
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
      filter shown with <input type="text" name="nameFilter" value={value.nameFilter} onChange={onChange} />
    </div>
  )
}

const PersonForm = ({onSubmit, value, onChange}) => {
  return (
    <form onSubmit={onSubmit}>
    <div>
      name: <input type="text" name="newName" value={value.newName} onChange={onChange} />
    </div>
    <div>
      number: <input type="text" name="newNumber" value={value.newNumber} onChange={onChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}


export default App