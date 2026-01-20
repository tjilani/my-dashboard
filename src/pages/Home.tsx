import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/books">Books</Link>
    </>
  );
};

export default Home;
