import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Classes.scss";

const ClassesPage: React.ComponentType = () => {
  const classPages = [
    "alchemist",
    "animist",
    "barbarian",
    "bard",
    "champion",
    "cleric",
    "druid",
    "exemplar",
    "fighter",
    "gunslinger",
    "inventor",
    "investigator",
    "kineticist",
    "magus",
    "monk",
    "oracle",
    "psychic",
    "ranger",
    "rogue",
    "sorcerer",
    "summoner",
    "swashbuckler",
    "thaumaturge",
    "witch",
    "wizard",
  ];

  return (
    <div className="classes-page">
      <div className="navigation-sub-menu">
        <nav>
          <input type="checkbox" id="touch" />

          <label htmlFor="touch">
            <span>Classes</span>
          </label>
          <ul className="slide">
            {classPages &&
              classPages.map((item, index) => (
                <li key={index}>
                  <NavLink
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 400 : 800,
                      cursor: isActive ? "default" : "pointer",
                      pointerEvents: isActive ? "none" : "auto",
                    })}
                    to={"/" + item}
                  >
                    <img
                      src={require("../assets/img/" + item + "_icon.png")}
                      alt="class icon"
                    />
                    {item}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ClassesPage;
