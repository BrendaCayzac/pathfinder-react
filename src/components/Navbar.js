import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const activeNavLink = ({ isActive }) => {
    return {
      fontWeight: isActive ? 300 : 800,
      cursor: isActive ? "default" : "pointer",
      pointerEvents: isActive ? "none" : "auto",
    };
  };

  return (
    <nav>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <NavLink style={activeNavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={activeNavLink} to="ancestries">
              Ancestries
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
