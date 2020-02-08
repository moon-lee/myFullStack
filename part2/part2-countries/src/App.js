import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  const [newInputValue, setNewInputValue] = useState({ countryFilter: '' })
  const [countries, setCountries] = useState([])

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => { setCountries(response.data) })
  }

  useEffect(hook, [])

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
      <FilterCountries value={newInputValue} onChange={handleOnChange} />
      <Countries countries={countries} filterName={newInputValue.countryFilter} />
    </div>
  )
}

const FilterCountries = ({ value, onChange }) => {
  return (
    <div>
      Find countries <input type="text" name="countryFilter" value={value.countryFilter} onChange={onChange} />
    </div>
  )
}

const Countries = ({ countries, filterName }) => {

  const filteredCountries = countries.filter(country => country.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)

  const countCountries = filteredCountries.length
  const limitCountries = 100
  const uniqueCountry = 1

  if (countCountries > limitCountries) {
    return (
      <div>Too Many matches, specify another filter</div>
    )
  } else if (countCountries === uniqueCountry) {
    return (
      <DetailCountry country={filteredCountries[0]} />
    )
  } else {
    const listCountry = () => filteredCountries.map(filteredCountry =>
      <Country
        key={filteredCountry.name}
        country={filteredCountry}
      />
    )
    return (
      <div>{listCountry()}</div>
    )
  }
}

const Country = ({country}) => {
  return (
    <div>{country.name}</div>
  )
}

const DetailCountry = ({country}) => {
  console.log(country, country.name)
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <Languages languages={country.languages} />

      <svg width="400" height="300">
        <image href={country.flag} height="300" width="400" />
      </svg>
    </div >
  )
}

const Languages = ({ languages }) => {

  console.log(languages)
  const rows = () => languages.map(language => 
    <Language 
      key={language.name}
      language={language} 
    />)
  return (
    <ul>{rows()}</ul>
  )
}

const Language = ({ language }) => {
  return (
    <li>{language.name}</li>
  )
}
export default App;
