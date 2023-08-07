import "../assets/styles/AncestriesPage.scss";
import AncestryThumbnail from "../components/AncestryThumbnail";
import { ancestries } from "../middleware/AncestriesObject";

export const AncestriesPage = () => {
  return (
    <div className="ancestries">
      {ancestries.map((item) => (
        <AncestryThumbnail
          key={item.ancestry}
          img={item.img}
          ancestry={item.ancestry}
          book={item.book}
          description={item.description}
          abilityBoosts={item.abilityBoosts}
          abilityFlaw={item.abilityFlaw}
        />
      ))}
    </div>
  );
};
