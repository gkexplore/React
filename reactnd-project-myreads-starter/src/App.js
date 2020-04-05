import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const bookShelves = [{titleName:'Currently Reading', titleValue: 'currentlyReading'}, {titleName:'Want to Read', titleValue:'wantToRead'}, {titleName:'Read', titleValue:'read'}]
let searchQuery = ''
class BooksApp extends React.Component {
  state = {
    books:[], //this shoulf hold book details and shelf
  }
  
  componentDidMount(){
    this.getBooks()
  }

  updateBook = (book, shelf) =>{
    BooksAPI.update(book, shelf)
    .then(this.getBooks())
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(()=>({
        books
      }))
    })
    searchQuery = ''
  }

  searchBooks = (query) =>{
    searchQuery = query;
    if(query!==null && query!==''){
        BooksAPI.search(query)
        .then((books)=>{
            this.setState(() => ({
                books 
                }))
            })
    }else{
        this.setState(() => (
            {
                books: []
            }
        ))
    }  
  }

  render() {
    return (
      <div className="app">
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           
            <Route exact path="/" render={({ history })=>(
              bookShelves.map(shelf=>(
                <ListBooks key={shelf.titleValue} shelf={shelf} books={this.state.books} updateBook={(book, shelf) => {
                  this.updateBook(book, shelf) 
                  history.push('/')}} />
              ))
            )}/>
            
            <Route exact path="/" render={()=>(
              <div className="open-search">
                <Link to='/search'><button >Add a book</button></Link>
              </div>
              )
            }/>
            
            <Route path='/search' render={({ history }) => (
              <SearchBooks books={this.state.books}
                updateBook={(book, shelf) => {
                  this.updateBook(book, shelf) 
                  history.push('/')}} 
                  searchBooks={this.searchBooks}
                  searchQuery={searchQuery}/>
           )} />

        </div>
      </div>
    )
  }
}

export default BooksApp
