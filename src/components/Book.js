import React from 'react';

function Book(props) {
  let amount = props.book.saleInfo.listPrice ? `$ ${props.book.saleInfo.listPrice.amount}` : 'Not For Sale';
  return (
    <li>
    <h3>{props.book.volumeInfo.title}</h3>
    <br></br>
    <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt="bookImage"/>
    <br></br>
    Author: {props.book.volumeInfo.authors[0]}
    <br></br>
    Price: {amount}
    <br></br>
    {props.book.searchInfo ? props.book.searchInfo.textSnippet : props.book.volumeInfo.description }

    <br></br>
  </li>
  );
}

export default Book;
