import React from 'react'

function Book(props) {
  return (
    <div>
      <h2>Book</h2>
      <img src={props.url} alt="test" />
  <p>Author: {props.author}</p>
  <p>Price: {props.price}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Book
