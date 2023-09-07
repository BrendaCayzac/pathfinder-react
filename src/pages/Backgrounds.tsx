import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/BackgroundsPage.scss";
import { backgrounds, BackgroundObject } from "../middleware/Backgrounds";
import BackgroundAccordion from "../components/BackgroundAccordion";
import React from "react";

const BackgroundsPage: React.ComponentType = () => {
  const [filteredBackgrounds, setFilteredList] =
    useState<Array<BackgroundObject> | null>(backgrounds);

  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    // Filtered list
    let updatedList = [...backgrounds];
    // Update list with elements containing the query
    updatedList = updatedList.filter((background) => {
      return background.name.indexOf(query) !== -1;
    });
    // Trigger render with updated list
    setFilteredList(updatedList);
  };
  return (
    <div className="backgrounds">
      <form>
        <label className="visually-hidden" htmlFor="search">
          Search
        </label>
        <input
          name="search"
          type="search"
          className="search"
          placeholder="Search in backgrounds"
          onChange={filterBySearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      <div className="backgrounds-list">
        {filteredBackgrounds &&
        Object.keys(filteredBackgrounds).length === 0 ? (
          <p>No backgrounds to show</p>
        ) : (
          filteredBackgrounds &&
          filteredBackgrounds.map((item, index) => (
            <BackgroundAccordion
              key={index}
              name={item.name}
              source={item.source}
              tags={item.tags}
              abilityBoost={item.abilityBoost}
              skillTraining={item.skillTraining}
              feat={item.feat}
              description={item.description}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BackgroundsPage;
