import { useParams } from "react-router-dom";
import { getBookById } from "../components/utils/bookService";
import type { Book as BookType } from "../components/utils/types";

const BookDetail = () => {
  const { id } = useParams() as { id: string };
  const book = getBookById(id) as BookType;
  console.log("book:", book);

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div>
      <h1>{book.work.title}</h1>
      <p>{book.work.author}</p>
      <p>{book.work.year}</p>
      <article>
        {book.sections.map((section) => (
          <div key={section.section_id}>
            <h2>{section.type}</h2>
            <p>
              {section.type === "overview" ? (
                section.text
              ) : (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default BookDetail;
