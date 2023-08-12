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
      {tags ? (
        <div className="tags">
          tags.map((tag)=><span>tag</span>)
        </div>
      ) : (
        ""
      )}
      <div className="spell-description">{description}</div>
    </div>
  );
};

export default Spell;
