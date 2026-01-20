import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  console.log("Navbar");
  return (
    <nav>
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
