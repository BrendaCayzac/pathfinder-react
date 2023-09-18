import React from "react";
import "../assets/styles/Feat.scss";
import { AncestryFeat } from "../middleware/FeatsButtons";

const Feat = (props: AncestryFeat) => {
  const { id, name, feat, action, description, tags } = props;
  return (
    <div className="feat" key={id}>
      <div className="headline">
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
        <h4>{feat}</h4>
      </div>
      <div className={tags ? "tags" : "hidden"}>
        {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>
      <div className="feat-description">{description}</div>
    </div>
  );
};

export default Feat;
