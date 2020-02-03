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
      error: null
    };
  }

  searchBook() {}

  getBooklist() {}

  componentDidMount() {
    const bookUrl =
      "https://www.googleapis.com/books/v1/volumes?q='mockingbird'";

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
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    } else if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header />
        <SearchForm />
        <BookList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
