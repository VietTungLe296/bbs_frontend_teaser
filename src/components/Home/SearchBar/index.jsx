import React from "react"
import "./styles.css"

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => (
  <div className='searchBar-wrapper'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search by Topic'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Search</button>
    </form>
  </div>
)

export default SearchBar
