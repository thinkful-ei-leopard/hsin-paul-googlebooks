import React from 'react';
import Book from './Book';

function Booklist(props) {
  const list = props.list.map(book => (
    <Book book={book}/>
  ));

  return (
    <div>
      <ul>
      {list}
      </ul>
    </div>
  );
}

export default Booklist;
