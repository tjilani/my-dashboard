import React from "react";
import styled from "styled-components";

const Book = ({
  work,
}: {
  work: { id: string; title: string; author: string };
}) => {
  return (
    <StyledBook key={work.id}>
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
`;
