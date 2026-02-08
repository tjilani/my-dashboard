import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="link-container">
        <Link to="/books">Books</Link>
        <Link to="/css">CSS</Link>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  .dashboard-title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 600;
    color: #585050;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    /*     text-decoration: underline;
    text-decoration-thickness: 0.1em; */
  }
  .link-container {
    display: grid;
    grid-template-columns: 10rem 10rem;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    a {
      text-decoration: none;
      color: #000;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #f5e6ad;
      border: 1px solid #585050;
      transition: all 0.3s ease;
      text-align: center;
    }
    a:hover {
      background-color: #fbe9d7;
    }
  }
`;
