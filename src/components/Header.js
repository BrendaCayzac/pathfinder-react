import React from "react";
import "../assets/styles/Header.scss";

const Header = (props) => {
  const { name, img, alt, book, tags, key } = props;

  return (
    <header key={key}>
      <div>
        <h1>{name}</h1>
        <p>{book}</p>
        <div className={tags ? "tags" : "hidden"}>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <figure>
        <img src={require("../assets/img/" + img)} alt={alt} />
      </figure>
    </header>
  );
};

export default Header;
