import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/AncestriesPage.scss";
import AncestryThumbnail from "../components/AncestryThumbnail";
import { ancestries, AncestryObject } from "../middleware/AncestriesObject";
import React from "react";

const AncestriesPage = () => {
  const [filteredList, setFilteredList] =
    useState<Array<AncestryObject> | null>(ancestries);
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...ancestries];
    // Update list with elements containing the query
    updatedList = updatedList.filter((ancestry) => {
      return ancestry.ancestry.indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated list
    setFilteredList(updatedList);
  };
  return (
    <div className="ancestries">
      <form>
        <label className="visually-hidden" htmlFor="search">
          Search
        </label>
        <input
          name="search"
          type="search"
          className="search"
          placeholder="Search in ancestries"
          onChange={filterBySearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      <div className="ancestries-list">
        {filteredList && Object.keys(filteredList).length === 0 ? (
          <p>No ancestries to show</p>
        ) : (
          filteredList &&
          filteredList.map((item, index) => (
            <AncestryThumbnail
              key={item.ancestry}
              img={item.img}
              alt={item.alt}
              ancestry={item.ancestry}
              book={item.book}
              description={item.description}
              abilityBoosts={item.abilityBoosts}
              abilityFlaw={item.abilityFlaw}
              link={item.link}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AncestriesPage;
