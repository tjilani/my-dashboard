import booksData from "../../data/books.json";
import type { Book } from "./types";

const books = booksData as Book[];

export const getBookById = (id: string): Book | undefined => {
  return books.find((book) => book.work.id === id);
};

export const getAllBooks = (): Book[] => {
  return books;
};
