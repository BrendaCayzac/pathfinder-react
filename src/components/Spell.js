import React from "react";
import "../assets/styles/Spell.scss";

const Spell = (props) => {
  const { name, description, action, tags } = props;
  return (
    <div className="spell" key={name}>
      <h4>
        {name}
        {action !== "" ? (
          <img
            src={require("../assets/img/" + action + ".png")}
            alt="action value"
          />
        ) : (
          ""
        )}
      </h4>
      <div className={tags ? "tags" : "hidden"}>
        {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>
      <div className="spell-description">{description}</div>
    </div>
  );
};

export default Spell;
