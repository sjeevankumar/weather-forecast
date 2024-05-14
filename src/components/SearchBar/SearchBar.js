import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ submitHandler, countryName, setCountryName }) => {

  return (
    <div className='searchbar-container'>
      <form className='form-container' onSubmit={submitHandler}>
        <input type="text" placeholder='Please Enter City Name/ US Zip Code/ Canada Postal Code/ UK PostCode/ ip/ metar/ etx'
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          required />
      </form>
    </div>
  )
}

export default SearchBar
