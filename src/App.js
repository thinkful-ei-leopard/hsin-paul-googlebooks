import React, { Component } from 'react'
import Header from './components/Header';
import SearchForm from './components/SearchForm'
import BookList from './components/Booklist'
import './App.css';


export class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }
}


  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <BookList />
      </div>
    )
  }
}

export default App

