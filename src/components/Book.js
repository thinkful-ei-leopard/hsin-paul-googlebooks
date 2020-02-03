import React from 'react';

function Book(props) {
  return (
    <li>
    {props.book.volumeInfo.title}
    <br></br>
    {props.book.volumeInfo.authors[0]}
    <br></br>
    {props.book.volumeInfo.description}
    <br></br>
  </li>
  );
}

export default Book;
