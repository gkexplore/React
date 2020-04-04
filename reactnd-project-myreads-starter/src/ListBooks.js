import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component{
    render(){
        const {shelf, books} = this.props
        return(
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.titleName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map((book) => 
                                (<li key={book.id}>
                                {(book.shelf === shelf.titleValue &&
                                    <Book book={book} shelf={shelf}/>
                                )}   
                               </li>)
                            )
                        }
                    </ol>
                  </div>
                </div>
             </div>
            </div>
        
        )
    }
}

export default ListBooks;