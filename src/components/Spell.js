import React from "react";
import "../assets/styles/Spell.scss";

const Spell = (props) => {
  const { name, duration, frequency, description, action } = props;
  return (
    <div className="spell">
      <h4>
        {name}{" "}
        <img
          src={require("../assets/img/" + action + ".png")}
          alt="action value"
        />
      </h4>
      {frequency ? (
        <p className="frequency">
          <b>Frequency:</b> {frequency}
        </p>
      ) : (
        ""
      )}
      <p className="description">{description}</p>
    </div>
  );
};

export default Spell;
