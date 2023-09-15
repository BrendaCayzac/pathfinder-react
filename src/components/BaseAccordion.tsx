import React from "react";
import "../assets/styles/BaseAccordion.scss";

const BaseAccordion = (props: {
  title: string;
  text: React.JSX.Element;
  number: number;
}) => {
  const { title, text, number } = props;

  return (
    <div className="accordion">
      <input type="checkbox" id={"heritage-" + number} />
      <label htmlFor={"heritage-" + number}>{title}</label>
      <div className="content">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default BaseAccordion;
