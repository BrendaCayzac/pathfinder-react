import React from "react";
import "../assets/styles/AncestryThumbnail.scss";

const AncestryThumbnail = (props) => {
  const { ancestry, alt, img, book, description, abilityBoosts, abilityFlaw } =
    props;

  return (
    <div className="thumbnail" id={ancestry} key={ancestry}>
      <figure>
        <img src={require("../assets/img/" + img)} alt={alt} />
      </figure>
      <div className="content">
        <h2>{ancestry}</h2>
        <h3>{book}</h3>
        <hr />
        <p>{description}</p>
        <h4>Ability Boosts</h4>
        <p>{abilityBoosts}</p>
        <h4>Ability Flaw</h4>
        <p>{abilityFlaw}</p>
      </div>
      <button onClick={() => console.log("hello")}>Read more</button>
    </div>
  );
};
export default AncestryThumbnail;
