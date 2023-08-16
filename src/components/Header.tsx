import React from "react";
import "../assets/styles/Header.scss";

interface HeaderProps {
  name: string;
  img: string;
  alt: string;
  book: string;
  tags: Array<string>;
  key?: string;
}

const Header = (props: HeaderProps) => {
  const { name, img, alt, book, tags } = props;

  return (
    <header key={name}>
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
