import { useParams } from "react-router-dom";
import { getBookById } from "../components/utils/bookService";

const BookDetail = () => {
  const { id } = useParams();
  const book = getBookById(id);
  console.log("book:", book);

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div>
      <h1>{book!.work.title}</h1>
      <p>{book!.work.author}</p>
      <p>{book!.work.year}</p>
      <article>
        {book!.sections.map((section) => (
          <div key={section.section_id}>
            <h2>{section.type}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default BookDetail;
