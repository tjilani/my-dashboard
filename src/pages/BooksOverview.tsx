//import books from "../data/books.json";
import { getAllBooks } from "../components/utils/bookService";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import type { Book as BookType } from "../components/utils/types";

const books: BookType[] = getAllBooks();

const BooksOverview = () => {
  return (
    <>
      <h1>Books Overview</h1>
      <div>
        {books.map((book: BookType) => (
          <Book key={book.work.id} {...book} />
        ))}
      </div>
    </>
  );
};

export default BooksOverview;
