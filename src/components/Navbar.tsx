import React from "react";
import { NavLink } from "react-router-dom";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? 300 : 800,
                cursor: isActive ? "default" : "pointer",
                pointerEvents: isActive ? "none" : "auto",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? 300 : 800,
                cursor: isActive ? "default" : "pointer",
                pointerEvents: isActive ? "none" : "auto",
              })}
              to="ancestries"
            >
              Ancestries
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/BrendaCayzac/pathfinder-react"
              target="_blank"
            >
              Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
