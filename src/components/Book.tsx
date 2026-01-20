import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import all cover images using Vite's glob import
const coverImages = import.meta.glob("../assets/covers/*.{jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getCoverImage = (path: string): string => {
  console.log("path:", path);
  console.log("coverImage:", coverImages[path]);
  return coverImages[path];
};

const Book = ({
  work,
}: {
  work: { id: string; title: string; author: string; cover_small: string };
}) => {
  const coverImage = getCoverImage(work.cover_small);
  return (
    <StyledBook key={work.id}>
      <div className="image-box">
        <img src={coverImage} alt={work.title} />
      </div>
      <h2>{work.title}</h2>
      <h4>{work.author}</h4>
      <Link to={`/books/${work.id}`}>Details</Link>
    </StyledBook>
  );
};

export default Book;

const StyledBook = styled.article`
  background-color: #1f7a8c;
  padding: 1rem 1%.5rem;
  border-radius: 5px;
  margin: 1.5rem auto;
  width: 75vw;
  //min-height: 100px; // damit werden die child-elements nicht über den container hinausgehen aber Zeilenhöhe unterschiedlich
  height: 10vw;
  display: grid;
  grid-template-columns: 7vw 35vw 15vw 1fr;
  grid-column-gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  .image-box {
    display: block;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
  .image-box img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
