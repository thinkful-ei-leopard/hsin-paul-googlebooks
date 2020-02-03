import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import BookList from './components/Booklist';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      list: [],
      error: null,
      booktitle: '',
      filter: null
    };
  }

  searchBook = event => {
    this.setState({
      booktitle: event.target.value
    });
  };

  printFilter = event => {
    this.setState({
      filter: event.target.value.toUpperCase()
    });
  };

  getBooklist = event => {
    event.preventDefault();
    const { booktitle } = this.state;
    const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${booktitle}`;

    fetch(bookUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        console.log(res);
        return res.json();
      })
      .then(list => this.setState({ list: list.items, loading: false }))
      .catch(error => this.setState({ error, loading: false }));

    console.log(this.state);
  };

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    } else if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header />

        <SearchForm
          searchBook={this.searchBook}
          getBooklist={this.getBooklist}
          booktitle={this.state.booktitle}
          printFilter={this.printFilter}
        />
        <BookList list={this.state.list} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
