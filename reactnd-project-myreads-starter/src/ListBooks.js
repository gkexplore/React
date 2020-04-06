import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

class ListBooks extends Component{

    static propTypes = {
        bookShelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render(){
        const {bookShelves, books, updateBook} = this.props
        return(
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                {bookShelves.map(shelf=>(
                <div key={shelf.titleValue} className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.titleName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                books.map((book) => 
                                    (<li key={book.id}>
                                    {(book.shelf === shelf.titleValue &&
                                        <Book book={book} books={books} updateBook={updateBook}/>
                                    )}   
                                </li>)
                                )
                            }
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                ))}      
            <div className="open-search">
                <Link to='/search'><button >Add a book</button></Link>
            </div> 
         </div>
        )
    }
}

export default ListBooks;