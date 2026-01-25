import { useParams } from "react-router-dom";
import { getBookById } from "../components/utils/bookService";
import type { Book as BookType } from "../components/utils/types";

const BookDetail = () => {
  const { id } = useParams() as { id: string };
  const book = getBookById(id) as BookType;
  const { work, sections, chapters } = book;

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div>
      <h1>{work.title}</h1>
      <p>{work.author}</p>
      <p>{work.year}</p>
      <article>
        {sections.map((section) => (
          <div key={section.section_id}>
            <h2>{section.type === "overview" ? "Overview" : "Key Points"}</h2>
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
      <article>
        <h2>Chapters</h2>
        {chapters.map((chapter) => (
          <div key={chapter.chapter_id}>
            <h3>{chapter.title}</h3>
            <ul>
              {chapter.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </div>
  );
};

export default BookDetail;
