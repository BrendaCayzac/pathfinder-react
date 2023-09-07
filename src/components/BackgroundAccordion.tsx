import React from "react";
import "../assets/styles/BackgroundAccordion.scss";
import { BackgroundObject } from "../middleware/Backgrounds";

const BackgroundAccordion = (props: BackgroundObject) => {
  const { name, source, tags, abilityBoost, skillTraining, feat, description } =
    props;

  return (
    <div className="background-accordion" key={name}>
      <input type="checkbox" id="heritage-5" />
      <label htmlFor="heritage-5">{name}</label>
      <div className="content">
        <div className="summary">
          <i>{source}</i>
          <div className={tags ? "tags" : "hidden"}>
            {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
          <div className="lists">
            <h1>Ability Boosts</h1>
            <ul>
              {abilityBoost &&
                abilityBoost.map((ability, index) => (
                  <li key={index}>{ability}</li>
                ))}
            </ul>
            <h1>Skill Training</h1>
            <ul>
              {skillTraining &&
                skillTraining.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
          </div>
          <h1>Feat</h1>
          <p>{feat}</p>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default BackgroundAccordion;
