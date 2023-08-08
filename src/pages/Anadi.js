import React from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";

const AnadiPage = () => {
  return (
    <div className="ancestry-page">
      <Header
        name="anadi"
        book="The Mwangi Expanse"
        tags={["rare", "humanoid"]}
        img="anadi_icon.png"
        alt="Image of an Anadi"
      />
    </div>
  );
};

export default AnadiPage;
