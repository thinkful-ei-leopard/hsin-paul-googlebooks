import React from 'react';
import Book from './Book';

function Booklist(props) {
  let list;

  if (props.filter === null) {
    list = props.list.map((book, idx) => (
      <Book book={book} key={idx} filter={props.filter} />
    ));
  } else {
    list = props.list
      .filter(book => {
        console.log(book.accessInfo.viewability, props.filter);
        return book.accessInfo.viewability === props.filter;
      })
      .map((book, idx) => <Book book={book} key={idx} filter={props.filter} />);
  }

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}

export default Booklist;
