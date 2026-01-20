import books from "../../data/books.json";

export const getBookById = (id: any) => {
  return books.find((book) => book.work.id === id);
};

export const getAllBooks = () => {
  return books;
};
