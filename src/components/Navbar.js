import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="ancestries">Ancestries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
