import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { shoonyFeats } from "../middleware/ShoonyFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const ShoonyPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(shoonyFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(shoonyFeats);
  };

  function filterFeats(featLevel: string) {
    return shoonyFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="shoony"
        book="Life’s Long Shadows"
        tags={["rare", "shoony", "humanoid"]}
        img="shoony_icon.png"
        alt="Image of a shoony"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Diminutive humanoids who resemble squat, bipedal dogs, shoonies are
            sometimes mistaken for weak and insular pacifists. However, their
            sheer perseverance, incredible work ethic, and resourceful use of
            diplomacy make shoonies far from helpless.
          </p>
          <div className="flex-column">
            <div>
              <p>
                According to shoonies, Aroden created their kind to provide him
                with pleasant company soon after he created the Isle of Kortos.
                Shoony culture is rooted in this myth and its implications,
                which help to explain the ancestry’s long reputation for
                hospitality, good will, and pacifism. War is antithetical to the
                shoony way of life; shoonies rely on cooperation and persistence
                to make their way through a world that can seem at times
                hellbent on destroying them. Shoonies are unflappable in their
                optimism and always see the best in others, even when faced with
                frequent subjugation and exploitation that might create
                bitterness or xenophobia among other societies. To shoonies,
                peace is a goal always worth striving for, and no villain is
                beyond redemption, so they aim to resolve problems with peaceful
                solutions.
              </p>

              <h2>You might...</h2>
              <ul>
                <li>
                  Fight to protect those you care about and strive to do the
                  right thing.
                </li>
                <li>
                  Work hard for long hours in a focused pursuit of distant
                  goals.
                </li>
                <li>
                  Provide comfort, necessities such as food, and a sense of
                  kinship to those in distress.
                </li>
              </ul>
            </div>
            <figure>
              <img
                src={require("../assets/img/Shoony_02.png")}
                alt="Shoony image"
              />
            </figure>
          </div>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Involuntarily fawn over (or recoil from) your physical appearance.
            </li>
            <li>
              Protect you from scary situations or terrifying phenomena, out of
              either friendship or overprotectiveness.
            </li>
            <li>
              Appreciate your pragmatism and natural ability to care for others.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Shoonies are squat, furry humanoids with flattened canid faces and
            wet, black eyes. Their fur can be a variety of hues and patterns,
            with the most common colors being fawn or black, and their loose
            skin gives even the fittest shoony a pudgy appearance. Shoonies have
            short, curly tails that sometimes wag involuntarily when the shoony
            is content or particularly excited or pleased. Like canines,
            shoonies cannot sweat; they pant to mitigate heat and exertion, and
            it is not uncommon to see a shoony with a perpetually lolling
            tongue.
          </p>
          <p>
            A shoony reaches maturity after just 8 to 10 years, and the elders
            of their villages rarely reach the age of 50. Little differentiates
            male and female shoonies except during the late stages of pregnancy,
            and as they age, both sexes develop graying facial fur, wrinkled
            skin, and frail joints. The average shoony is 3-1/2 feet tall and
            weighs 100 pounds.
          </p>

          <div
            className="flex-column"
            style={{
              flexDirection: "row-reverse",
            }}
          >
            <div>
              <h2>Society</h2>
              <p>
                Despite the shoony drive toward communal living, most shoony
                settlements are farming villages with populations of no more
                than a hundred. Shoonies work hard to make their lands bountiful
                and recognize that large, dense populations can negatively
                affect the ecosystem. Monster attacks, natural disasters, and
                exploitation from stronger cultures have all also limited the
                spread of shoonies across the Inner Sea region.
              </p>
              <p>
                Despite their short lifespans, shoonies are happy-go-lucky
                people with an irrepressible love for the land and their fellow
                shoonies, and remain optimistic even under the worst
                circumstances. The simple pleasures of living on this beautiful
                world, engaging in hard work, and surrounding themselves with
                loved ones motivate shoonies to push through the hardships that
                all too often befall their people.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Shoony.png")}
                alt="Shoony image"
              />
            </figure>
          </div>
          <p>
            Shisk clothing is loose and breathable, and often minimal to avoid
            catching on their bony feathers. Due to their society’s disregard
            for materialism, the shisk live in great harmony with nature around
            them, taking only what they need. Shisk often take up simple
            hobbies, such as sunbathing.
          </p>

          <h2>Alignment and religion</h2>
          <p>
            Most shoony societies encourage empathy and loyalty, so they’re
            rarely evil, but they’re also practical, traditional, and timid.
            Most shoony adventurers are neutral good or lawful good. Religion is
            a cornerstone of shoony village life; shoonies primarily worshipped
            Aroden until his apparent death. In his absence, many shoonies have
            adopted Erastil as their patron deity because his emphasis on
            family, community, and living off the land naturally meshes with
            typical shoony values. Noble shoonies— especially warriors—sometimes
            look to Iomedae as an exemplar of integrity, hard work, and
            sacrifice.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              With their strong family values and emphasis on found friends,
              it’s no wonder that shoonies take particular pride in naming their
              children after other loved ones. Shoony names are short, guttural,
              and often sound like loose strings of unassociated vowels and soft
              consonants to people of other ancestries. Shoonies value names and
              take great care to learn and speak the correct pronunciations of
              their friends’ names.
            </p>
            <p>
              <b>Sample names:</b> Ahogo, Arnbin, Bighmor, Bondin, Domwurd,
              Ebmeur, Gopor, Gurna, Hiemgur, Mufurlo, Oriog, Pulumar, Raliamar,
              Ruggion, Uhulrig, Ungrin.
            </p>
          </div>

          <h2>Shoony heritages</h2>
          <p>
            You select a heritage at 1st level to reflect abilities passed down
            to you from your ancestors or common among those of your ancestry in
            the environment where you were born or grew up. You have only one
            heritage and can’t change it later. A heritage is not the same as a
            culture or ethnicity, though some cultures or ethnicities might have
            more or fewer members from a particular heritage..
          </p>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Bloodhound</label>
            <div className="content">
              <p className="text">
                Your ancestors were famous trackers, and you carry in your blood
                that same gift of the hunt. You gain a special sense: imprecise
                scent with a range of 30 feet. This means you can use your sense
                of smell to determine the location of a creature, but it remains
                hidden. In addition, you gain a +2 circumstance bonus to
                Survival checks to Track creatures that you have previously
                sensed with your scent.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Fishseeker</label>
            <div className="content">
              <p className="text">
                You come from a long line of fisherfolk and have inherited the
                quick reflexes necessary to nab and reel in big game. If you
                roll a success on an attempt to Grab an Edge, you get a critical
                success instead; if you roll a critical failure, you get a
                failure instead. A creature that rolls a failure on a check to
                Disarm you gets a critical failure instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Paddler</label>
            <div className="content">
              <p className="text">
                You hail from shoonies who have lived long and successfully
                among the reeds and cattails of swamps and marshes, and have
                adapted to the challenges of living near waterlogged areas. You
                ignore difficult terrain and greater difficult terrain from
                bogs. When you roll a success to Swim, you get a critical
                success instead.
                <Feat
                  id={0}
                  name="Practiced paddler"
                  action=""
                  tags={["Shoony"]}
                  level={5}
                  feat="Feat 5"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites:</b> Paddler Shoony.
                      </span>
                      <br />
                      You’re skilled at navigating bogs and marshes, even for a
                      paddler shoony. You gain a swim Speed of 15 feet.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Thickcoat</label>
            <div className="content">
              <p className="text">
                You are a rare shoony who hails from colder climes. You gain
                cold resistance equal to half your level (minimum 1), and you
                treat environmental cold effects as if they were one step less
                extreme (incredible cold becomes extreme, extreme cold becomes
                severe, and so on). You don’t need to succeed at a flat check to
                target a concealed creature if that creature is concealed only
                by snow. Unless you wear protective gear or take shelter,
                environmental heat effects are one step more extreme for you.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>6</p>
            <h2>Size</h2>
            <p>Small</p>
            <h2>Speed</h2>
            <p>25 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Dexterity</li>
              <li>Charisma</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Constitution</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Shoony</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Dwarven, Gnomish, Goblin, Halfling,
                Terran, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Blunt snout</h2>
            <p>
              Your small, blunt snout and labyrinthine sinus system make you
              resistant to phenomena that assail the nose. When you roll a
              saving throw against inhaled threats (such as inhaled poisons) and
              olfactory effects (such as xulgath stench), you get the outcome
              one degree of success better than the result of your roll.
            </p>
          </div>

          <h2>Shoony adventurers</h2>
          <p>
            Few shoonies willingly choose to leave their homeland and friends in
            favor of facing the unknown, and the circumstances that lead a
            shoony to adventure are often dramatic and life-altering, if not
            tragic. That said, some shoonies do travel the world in search of
            riches to bring back to their village or to avenge their kinfolk,
            and shoony adventurers who show bravery or ingenuity are sure to
            earn a place in the legends of their people.
            <br />
            <br />
            Typical shoonies have the acolyte, farmhand, hunter, laborer, or
            warrior backgrounds from the Core Rulebook, or the animal wrangler
            or rigger backgrounds from the Extinction Curse Player’s Guide. Many
            shoony adventurers are fighters who hone their skills to become
            stalwart defenders of their friends. Some shoonies pursue religious
            study and become clerics or champions, while others develop their
            foraging and hunting skills as talented druids and rangers.
          </p>

          <h2>Feats</h2>
          <div className="feat-section">
            <div className="feat-filter">
              {featsButtons &&
                featsButtons.map((type, index) => (
                  <button key={index} value={type.value} onClick={handleFeats}>
                    {type.name}
                  </button>
                ))}
            </div>
            <div className="feat-list">
              {filteredFeats &&
                filteredFeats.length !== 0 &&
                filteredFeats.map((feat, index) => (
                  <Feat
                    key={index}
                    name={feat.name}
                    feat={feat.feat}
                    action={feat.action}
                    tags={feat.tags}
                    description={feat.description}
                    level={feat.level}
                    id={index}
                  />
                ))}
              {filteredFeats && filteredFeats.length === 0 ? (
                <p className="no-feats">No feats match level</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoonyPage;
