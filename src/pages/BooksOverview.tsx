import React from 'react'
import books from '../data/books.json'
import Book from '../components/Book'

const BooksOverview = () => {
  return (
    <div>
        {books.map((book) => (
            <Book key={book.work.id} work={book.work}  />
        ))}
    </div>
  )
}

export default BooksOverview