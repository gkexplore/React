import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component{

    static propTypes = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render(){
        const {shelf, books, updateBook} = this.props
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
                                    <Book book={book} updateBook={updateBook}/>
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