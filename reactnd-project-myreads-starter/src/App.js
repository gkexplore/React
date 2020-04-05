import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

const bookShelves = [{titleName:'Currently Reading', titleValue: 'currentlyReading'}, {titleName:'Want to Read', titleValue:'wantToRead'}, {titleName:'Read', titleValue:'read'}]
let searchQuery = ''

class BooksApp extends React.Component {
  state = {
    books:[], 
  }
  
  componentDidMount(){
    this.getBooks()
  }

  updateBook = (book, shelf) =>{
    BooksAPI.update(book, shelf)
    .then(()=> {
      book.shelf = shelf
      searchQuery = ''
      this.setState(state=>({
        books: state.books.filter( b=> b.id !== book.id).concat([book])
      }))
    }
    )
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(()=>({
        books
      }))
    })
    
  }


  render() {
    return (
      <div className="app">  
            <Route exact path="/" render={({ history })=>(
                <ListBooks bookShelves={bookShelves} books={this.state.books} updateBook={(book, shelf) => {
                  this.updateBook(book, shelf) 
                  history.push('/')}} />
            )}/>         
            <Route path='/search' render={({ history }) => (
              <SearchBooks books={this.state.books}
                updateBook={(book, shelf) => {
                  this.updateBook(book, shelf) 
                  history.push('/')}} 
                  searchBooks={this.searchBooks}
                  searchQuery={searchQuery}/>
           )} />
      </div>
    )
  }
}

export default BooksApp
