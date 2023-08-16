import React from "react";
import "../assets/styles/404.scss";

const ErrorPage: React.ComponentType = () => {
  return (
    <div className="page error">
      <figure>
        <img
          src={require("../assets/img/pf_logo.png")}
          alt="Pathfinder 2nd edition logo"
        />
      </figure>
      <p>Page not found</p>
    </div>
  );
};

export default ErrorPage;
