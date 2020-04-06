import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
    constructor(props){
        super(props)
        this.state = {
            results: [],
            text:''
        }
    }
    static propTypes = {
        updateBook: PropTypes.func.isRequired
    }

    searchBooks = (query) =>{
        if(query){
            BooksAPI.search(query)
            .then((resultss)=>{
                if(resultss){
                this.setState(() => ({
                results: resultss,
                text: query
                }))}else{
                this.setState(() => ({
                    results: [],
                    text:query 
                }))
                }     
            })
        }else{
            this.setState(() => ({
                results: [],
                text: query 
            }))
        }
      }
    
    

   render(){
        const { books, updateBook} = this.props
        const { results, text } = this.state
       
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'>
                <button className='close-search'>
                    Close
                </button>
            </Link>
              <div className="search-books-input-wrapper"> 
                <input type="text" placeholder="Search by title or author" onChange={(event)=>this.searchBooks(event.target.value)}/>
              </div>
            </div>
            {( text &&
            <div className="search-books-results">
              <ol className="books-grid">
              {  
               ((results.length > 0) &&
               results.map((book, index) => 
                    (<li key={index}>
                        {
                            <Book book={book} books={books} updateBook={updateBook}/>
                        }            
                    </li>))
               )}
              </ol>
            </div>
            )}
          </div>
        )
    }
}

export default SearchBooks;