import React from 'react'
import Book from './Book'

function Booklist(props) {
  return (
    <div>
      <ul>
      <Book list={props.list}/>
      </ul>
    </div>
  )
}

export default Booklist
