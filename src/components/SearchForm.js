import React from 'react'

function SearchForm(props) {
  return (
    <div>
      <form >
        <label htmlFor="searchbar">Search:</label>
        <input type="text" value={props.title}/>
        <button type="submit" onClick={props.getBooklist}>Search</button>
        
        <label htmlFor="print-type">Print Type:</label>
        <select name="print-type" id="print-type">
          <option value="all">All</option>
        </select>

        <label htmlFor="book-type">Book Type:</label>
        <select name="book-type" id="book-type">
          <option value="no-filter">No Filter</option>
        </select>

      </form>
    </div>
  )
}

export default SearchForm
