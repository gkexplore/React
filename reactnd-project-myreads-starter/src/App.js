import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const bookShelves = [{titleName:'Currently Reading', titleValue: 'currentlyReading'}, {titleName:'Want to Read', titleValue:'wantToRead'}, {titleName:'Read', titleValue:'read'}]
class BooksApp extends React.Component {
  
  state = {
    books:[], //this shoulf hold book details and shelf
  }
  
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(()=>({
        books
      }))
    })
  }

  updateBook = (book, shelf) =>{
    BooksAPI.update(book, shelf)
    .then(
      this.setState(()=>({
        state: this.state
      }))
    )
  }

  getBook = (bookId) => {
    BooksAPI.get(bookId)
    .then(
      this.setState(() => (
        {
          state: this.state
        }))
    )
  }


  render() {
    return (
      <div className="app">
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           
            <Route exact path="/" render={()=>(
              bookShelves.map(shelf=>(
                <ListBooks key={shelf.titleValue} shelf={shelf} books={this.state.books} updateBook={this.updateBook}/>
              ))
            )}/>
            
            <Route exact path="/" render={()=>(
              <div className="open-search">
                <Link to='/search'><button >Add a book</button></Link>
              </div>
              )
            }/>
            
            <Route path='/search' render={({ history }) => (
              <SearchBooks updateBook={this.updateBook}
                onSearchBook={(book) => {
                  this.searchBook(book)
                  history.push('/')
                }}
              />
           )} />

        </div>
      </div>
    )
  }
}

export default BooksApp
