import "../App.scss";
import AncestryThumbnail from "../components/AncestryThumbnail";

export const AncestriesPage = () => {
  const ancestries = [
    {
      img: "Dwarf.png",
      ancestry: "dwarf",
      book: "Core Rulebook",
      description:
        "Dwarves are a short, stocky people who are often stubborn," +
        " fierce, and devoted.",
      abilityBoosts: "Constitution, Wisdom, free",
      abilityFlaw: "Charisma",
    },
    {
      img: "Elf.png",
      ancestry: "elf",
      book: "Core Rulebook",
      description:
        "Elves are a tall, slender, long-lived people with a strong tradition of art and magic.",
      abilityBoosts: "Dexterity, Intelligence, free",
      abilityFlaw: "Constitution",
    },
    {
      img: "Gnome.png",
      ancestry: "gnome",
      book: "Core Rulebook",
      description:
        "Gnomes are short and hardy folk, with an unquenchable curiosity and eccentric habits.",
      abilityBoosts: "Constitution, Charisma, free",
      abilityFlaw: "Strength",
    },
    {
      img: "Goblin.png",
      ancestry: "goblin",
      book: "Core Rulebook",
      description:
        "Goblins are a short, scrappy, energetic people who have spent millennia maligned and feared.",
      abilityBoosts: "Dexterity, Charisma, free",
      abilityFlaw: "Wisdom",
    },
    {
      img: "Halfling.png",
      ancestry: "halfling",
      book: "Core Rulebook",
      description:
        "Halflings are a short, adaptable people who exhibit remarkable curiosity and humor.",
      abilityBoosts: "Dexterity, Wisdom, free",
      abilityFlaw: "Strength",
    },
    {
      img: "Human.png",
      ancestry: "human",
      book: "Core Rulebook",
      description:
        "Humans are incredibly diverse. Some, such as half-elves and half-orcs, even have non-human ancestors.",
      abilityBoosts: "Two free ability boosts",
      abilityFlaw: "—",
    },
  ];

  return (
    <div className="App">
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
