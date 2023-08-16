import React from "react";
import "../App.scss";
import "../assets/styles/HomePage.scss";

const Home = () => {
  return (
    <div className="page home">
      <figure>
        <img
          src={require("../assets/img/pf_logo.png")}
          alt="Pathfinder 2nd edition logo"
        />
      </figure>
      <p>
        This website is a compilation of information for the Pathfinder
        Community.
      </p>
    </div>
  );
};

export default Home;
