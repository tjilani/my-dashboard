import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";

const Navbar = () => {
  console.log("Navbar");
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
