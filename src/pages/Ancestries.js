import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/AncestriesPage.scss";
import AncestryThumbnail from "../components/AncestryThumbnail";
import { ancestries } from "../middleware/AncestriesObject";

const AncestriesPage = () => {
  const [filteredList, setFilteredList] = new useState(ancestries);
  const filterBySearch = (event) => {
    // Input value
    const query = event.target.value;
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
        {Object.keys(filteredList).length === 0 ? (
          <p>No ancestries to show</p>
        ) : (
          filteredList.map((item, index) => (
            <AncestryThumbnail
              key={item.ancestry}
              img={item.img}
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
