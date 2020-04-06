import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
    
    static propTypes = {
        updateBook: PropTypes.func.isRequired
    }

    state = {
        results: []
    }

    searchBooks = (query) =>{
        if(query !== ''){
            BooksAPI.search(query)
            .then((results)=>{
                if(results){
                this.setState(() => ({
                results 
                }))}else{
                this.setState(() => ({
                    results: [] 
                }))
                }     
            })
        }else{
            this.setState(() => ({
                results: [] 
            }))
        }
      }
    
    checkIfBookExists = (books, book) => {
        const bookFound = books.filter(b => b.id === book.id)
        const shelf = bookFound.map(o=>o.shelf)[0]
        const result = typeof shelf != "undefined" ? shelf:'none'
        return result
    }

   render(){
        const { books, updateBook} = this.props
        const { results } = this.state
       
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
               ((results.length > 0) &&
               results.map((book, index) => 
                    (<li key={index}>
                        {
                            <Book book={book} shelf={`${this.checkIfBookExists(books, book)}`} updateBook={updateBook}/>
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