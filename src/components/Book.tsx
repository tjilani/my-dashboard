import React from "react";
import styled from "styled-components";

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
      <button>Details</button>
    </StyledBook>
  );
};

export default Book;

const StyledBook = styled.article`
  background-color: #1f7a8c;
  padding: 1rem 1%.5rem;
  border-radius: 5px;
  margin: 1.5rem;
  width: 70vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .image-box {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
  .image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
