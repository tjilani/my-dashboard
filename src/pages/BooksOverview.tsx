//import books from "../data/books.json";
import { getAllBooks } from "../components/utils/bookService";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import styled from "styled-components";
import type { Book as BookType } from "../components/utils/types";

const books: BookType[] = getAllBooks();

const BooksOverview = () => {
  return (
    <>
      <Link to="/">Home</Link>
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

const StyledBooksOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
