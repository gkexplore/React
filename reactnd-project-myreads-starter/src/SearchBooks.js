import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
    state = {
        books:[], //this shoulf hold book details and shelf
    }

    searchBooks = (query) =>{
        if(query!==null && query!==''){
            BooksAPI.search(query)
            .then((books)=>{
                this.setState(() => ({
                    books 
                    }))
                }
            )
        }else{
            this.setState(() => (
                {
                    books: []
                }
            )

            )
        }  
    }

    render(){
        const {books} = this.state
        const {updateBook} = this.props
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'>
            <button
                className='close-search'
                >
                    Close
                </button>
                </Link>
              <div className="search-books-input-wrapper"> 
                <input type="text" placeholder="Search by title or author" onChange={(event)=>this.searchBooks(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
               (books.length > 0 &&
                books.map((book, index) => 
                    (<li key={index}>
                        {
                            <Book book={book} updateBook={updateBook}/>
                        }            
                    </li>))
               )}
                
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks;