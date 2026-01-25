import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getBookById } from "../components/utils/bookService";
import type { Book as BookType } from "../components/utils/types";

const BookDetail = () => {
  const { id } = useParams() as { id: string };
  const book = getBookById(id) as BookType;
  const { work, sections, chapters, analysis } = book;

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <StyledBookDetail>
      <div className="book-detail-title">
        <h1>{work.title}</h1>
        <p>{work.author}</p>
        <p>{work.year}</p>
      </div>
      <article className="book-detail-overview">
        {sections.map((section) => (
          <div key={section.section_id} className="book-detail-section">
            <h2>{section.type === "overview" ? "Overview" : "Key Points"}</h2>

            {section.type === "overview" ? (
              <article className="book-detail-section-text">
                {section.text}
              </article>
            ) : (
              <ul className="book-detail-section-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>

      <article className="book-detail-analysis">
        <h2>Zusammenfassung</h2>
        <div>
          {analysis.summary.map((summary, index) => (
            <p key={index} className="book-detail-analysis--text">
              {summary}{" "}
            </p>
          ))}
        </div>
        <h2>Kontext</h2>
        <div>
          {analysis.context.map((context, index) => (
            <p key={index} className="book-detail-analysis--text">
              {context}
            </p>
          ))}
        </div>
        <h2>Kritik</h2>
        <div>
          {analysis.critique.map((critique, index) => (
            <p key={index} className="book-detail-analysis--text">
              {critique}
            </p>
          ))}
        </div>
      </article>
      <article className="book-detail-chapters">
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
    </StyledBookDetail>
  );
};

export default BookDetail;

const StyledBookDetail = styled.div`
  padding: 1.5rem 1rem;
  width: 75vw;
  margin: 0 auto;
  h2 {
    padding: 0.5rem 5rem;
    background-color: #f5e6ad;
    border-radius: 0.5rem;
  }
  .book-detail-title {
    height: 10vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
  }
  .book-detail-overview {
    width: 75vw;
    line-height: 2;
    margin-bottom: 1.5rem;
  }
  .book-detail-section {
  }
  .book-detail-section-text {
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
  }
  .book-detail-section-list {
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
  }
  .book-detail-chapters {
    h2 {
      padding: 0.5rem 5rem;
      line-height: 2;
      border-radius: 0.5rem;
    }
    h3 {
      padding: 0.5rem 1.5rem;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
    }
    li {
      padding: 0.5rem 1.5rem;
      margin: 1rem 0 1rem 1.5rem;
      border-radius: 5px;
      background-color: #fbe9d7;
      width: 30rem;
    }
  }
  .book-detail-analysis--text {
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
