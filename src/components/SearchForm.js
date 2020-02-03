import React from 'react'

function SearchForm(props) {
  return (
    <div>
      <form >
        <label htmlFor="searchbar">Search:</label>
        <input type="text" onChange={props.searchBook} value={props.booktitle}/>
        <button type="submit" onClick={props.getBooklist}>Search</button>
        
        <label htmlFor="print-type">Print Type:</label>
        <select name="print-type" id="print-type" value={props.filter} onChange={props.printFilter}>
          <option value="all">All</option>
          <option value="ebooks">E-books</option>
          <option value="free-ebooks">Free E-books</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid E-books</option>
          <option value="partial">Partial</option>
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
