import React, { useState, useEffect } from 'react';

const App = () => {
  const [newInputValue, setNewInputValue] = useState({countryFilter:""})

  const handleOnChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setNewInputValue({
      ...newInputValue,
      [name]: value
    })
  }
  return (
    <FilterCountries value={newInputValue} onChange={handleOnChange}/>
  )
}

const FilterCountries = ({value, onChange}) => {
  return (
    <div>
      Find countries <input type="text" name="countryFilter" value={value.countryFilter} onChange={onChange}/>
    </div>
  )
}

export default App;
