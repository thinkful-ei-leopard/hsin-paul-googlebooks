import React, { Component } from 'react'
import Header from './components/Header';
import SearchForm from './components/SearchForm'
import BookList from './components/Booklist'
import './App.css';


export class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     loading: false,
     title: " ",
     list:[]

  }
}

searchBook(){

}

 getBooklist(){
   
}

componentDidMount() {
  const bookUrl = "https://www.googleapis.com/books/v1/volumes?q='mockingbird'"
   fetch(bookUrl) 
    .then(res=>{
      if(!res.ok){
        throw new Error ('Something went wrong, please try again later' );
      }
      return res.json();
    })
    .then(list => this.setState({list, loading:false }))
    .catch(error => this.setState({error, loading :false}));
      }
    
   


  render() {
    if(this.state.error){
    return <div>Error: {this.state.error}</div>
    }
    else if(this.state.loading){
       return <div>Loading...</div>
    }
  const list= this.state.list.items.map(list => <li>{list.volumeInfo.authors[0]}</li>)

    return (
      <div>
        <Header />
        <SearchForm />
        <BookList list={list}/>
      </div>
    )
  }
}

export default App

