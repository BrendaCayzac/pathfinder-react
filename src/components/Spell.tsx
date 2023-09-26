import React from "react";
import "../assets/styles/Spell.scss";

interface SpellProps {
  name: string;
  description: string | React.JSX.Element;
  action: string;
  tags?: Array<string>;
  type?: string;
  level?: number;
}

const Spell = (props: SpellProps) => {
  const { name, description, action, tags, type, level } = props;
  return (
    <div className="spell" key={name}>
      <div className={level ? "level" : "hidden"}>
        <p>lvl</p>
        <h4>{level}</h4>
      </div>
      <div className="spell-content">
        <div className="title">
          <div>
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
          </div>
          <h4 className={type ? "" : "hidden"}>{type}</h4>
        </div>
        <div className={tags ? "tags" : "hidden"}>
          {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </div>
        <div className="spell-description">{description}</div>
      </div>
    </div>
  );
};

export default Spell;
