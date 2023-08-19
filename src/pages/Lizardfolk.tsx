import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { lizardfolkFeats } from "../middleware/LizardfolkFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const LizardfolkPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(lizardfolkFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(lizardfolkFeats);
  };

  function filterFeats(featLevel: string) {
    return lizardfolkFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="lizardfolk"
        book="Lost Omens: Character Guide"
        tags={["uncommon", "lizardfolk", "humanoid"]}
        img="lizardfolk_icon.png"
        alt="Image of a lizardfolk"
      />

      <section>
        <div className="content">
          <div className="flex-column">
            <div>
              <p className="introduction">
                Lizardfolk are consummate survivors, heirs to empires considered
                ancient even by the elves.
              </p>
              <p>
                LLizardfolk move through the societies of other humanoids with
                the steely reserve of born predators. They have a well-deserved
                reputation as outstanding rangers and unsentimental fighters.
                Though lizardfolk have adapted to many different environments,
                many of them still prefer to remain near bodies of water, using
                their ability to hold their breath to their advantage. As a
                result, lizardfolk usually prefer equipment that is not easily
                damaged by moisture, eschewing leather and metal for gear made
                of stone, ivory, glass, and bone.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Lizardfolk_02.png")}
                alt="Lizardfolk image"
              />
            </figure>
          </div>

          <h2>You might...</h2>
          <ul>
            <li>Demonstrate extreme patience, even when pressured to act.</li>
            <li>
              Hold your people’s history in high regard and look to the past for
              solutions to present problems.
            </li>
            <li>
              Strive to adapt perfectly to your environment while also keeping
              your culture and traditions intact.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Assume you are beholden to tradition and have ancient knowledge.
            </li>
            <li>
              See you as cold-blooded and callous due to your subdued physical
              reactions.
            </li>
            <li>
              Respect your impressive strength and your knowledge of natural
              areas.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Lizardfolk vary depending on their environment, but share toothy
            snouts and long and powerful tails. Those from temperate or desert
            regions tend toward gray, green, or brown scales that aid in
            camouflage, while those from tropical climes are brightly colored.
            Many sport dorsal spikes or garish neck frills that hint at their
            clan lineage. Lizardfolk reach physical adulthood at age 15 and live
            up to 120 years. The average lizardfolk stands 6 to 7 feet tall, but
            grows throughout their lifetime, gaining strength and size with age.
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
                Known among themselves as iruxi, lizardfolk are raised
                communally from the moment they break from their shells. They
                have an oral tradition stretching back thousands of years,
                brought to life through epic poems, evocative carvings, and
                ancestral rites performed among fields of fossilized bone.
                Lizardfolk are passionate astrologers with one eye on the
                future. If they seem slow to act, it is because their long
                history has taught them the value of patience.
              </p>
              <p>
                The simple villages most outsiders associate with iruxi are the
                homes of migrants in outlying regions. True iruxi settlements
                are often overlooked, as they are partially or mostly submerged
                in water. These glass and stone complexes bear the mark of every
                generation of lizardfolk that lived within them, and lizardfolk
                bones often adorn the walls, as many lizardfolk believe these
                remains can be animated by ancestral spirits when the residents
                are in danger.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Lizardfolk.png")}
                alt="Lizardfolk image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Most iruxi are unconcerned with heavy questions of morality and are
            therefore usually neutral in alignment. Adventuring iruxi who leave
            their people to travel might have any number of reasons for doing so
            and can be of any alignment. Iruxi religion plays a large role in
            their culture, but it is heavily practical, blending animism and
            ancestor worship with druidic rites. Of the gods, only Gozreh is
            commonly revered, but lizardfolk may call upon other powers devoted
            to ancient wyrms, astrology, nature, rivers, and might of arms, from
            kindly Desna to cruel Hanspur and certain demon lords.
          </p>

          <h2>Enclaves</h2>
          <p>
            Within Avistan, most lizardfolk dwell in camouflaged ring forts
            organized into loose confederacies common in the River Kingdoms and
            Varisia’s Mushfens. Eastern Avistan also hosts pockets of
            color-shifting lizardfolk. Most of the iruxi in the Sodden Lands
            along Garund’s eastern coast have fallen under the sway of the Terwa
            Lords, militaristic warrior-kings and shamans whose rise has pressed
            other iruxi and their Lirgeni human neighbors east toward Jaha in
            the Mwangi Expanse. The flower of iruxi culture is Droon, a vast
            empire of dinosaur riders in southern Garund.
          </p>

          <h2>Astrology</h2>
          <p>
            Lizardfolk civilizations were among the first to master telling time
            and navigating via the stars, and their shamans and sages ardently
            pursued the art of astrological prognostication, often studying side
            by side with green dragons and naga diviners. Today, astrology is
            integrated into the fabric of iruxi life, and lizardfolk hesitate to
            make major decisions without performing auguries first.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Lizardfolk names come from their ancient language and tend to be
              traditional. Names are typically chosen by the clan’s astrologer
              in accordance to omens and which star signs are ascendant when an
              iruxi egg hatches, though occasionally an iruxi’s parents may name
              a hatchling for an ancestor or a beloved historical hero
            </p>
            <p>
              <b>Sample names:</b> Arasheg, Barashk, Essaru, Enshuk, Gishkim,
              Hazi, Inishish, Kutak, Nasha, Shulkuru, Tizkar, Utakish, Zelkekek
            </p>
          </div>

          <h2>Lizardfolk heritages</h2>
          <p>
            While most lizardfolk prefer wetlands, eons of evolution and
            cultural adaptation enable them to live in more challenging
            environments. Choose one of the following lizardfolk heritages at
            1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Cliffscale</label>
            <div className="content">
              <p className="text">
                Your toes are adapted for gripping and climbing. You gain the
                Combat Climber feat as a bonus feat, and as long as you aren’t
                wearing footwear, you can use the sticky pads on your feet to
                climb, leaving your hands free. Additionally, if you roll a
                success on an Athletics check to climb, you get a critical
                success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Frilled</label>
            <div className="content">
              <p className="text">
                You can flare your neck frill and flex your dorsal spines,
                Demoralizing your foes. When you do, Demoralize loses the
                auditory trait and gains the visual trait, and you don’t take a
                penalty when you attempt to Demoralize a creature that doesn’t
                understand your language. You also gain the Threatening Approach
                action.
              </p>
              <Spell
                name="Threatening approach"
                action="two_action"
                description={
                  <span>
                    You Stride to be adjacent to a foe and Demoralize that foe.
                    If you succeed, the foe is frightened 2 instead of
                    frightened 1.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Sandstrider</label>
            <div className="content">
              <p className="text">
                Your thick scales help you retain water and combat the sun’s
                glare. You gain fire resistance equal to half your level
                (minimum 1). Environmental heat effects are one step less
                extreme for you, and you can go 10 times as long as normal
                before you are affected by starvation or thirst. However, unless
                you wear protective gear or take shelter, environmental cold
                effects are one step more extreme for you.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Unseen</label>
            <div className="content">
              <p className="text">
                You can change your skin color to blend in with your
                surroundings, making minor shifts with a single action and
                dramatic changes over the course of an hour. When you’re in an
                area where your coloration is roughly similar to the environment
                (for instance, forest green in a forest), you can use the minor,
                single-action application of this ability to make localized
                changes that help you blend into your surroundings, gaining a +2
                circumstance bonus to Stealth checks until your surroundings
                change in coloration or pattern.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Wetlander</label>
            <div className="content">
              <p className="text">
                Your family is descended from the most common lizardfolk
                heritage, and you are accustomed to aquatic environments. You
                gain a 15-foot swim Speed.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Cloudleaper</label>
            <div className="content">
              <p className="text">
                Lost Omens: Ancestry Guide
                <br />
                <br />
                Your body is light with flaps of skin along your limbs that
                catch the air that passes beneath you. As long as you can act
                and have enough room, you can open the flaps to slow any fall
                just enough to avoid taking damage (whether you have the room to
                do so depends on the GM’s discretion).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Woodstalker</label>
            <div className="content">
              <p className="text">
                Lost Omens: Ancestry Guide
                <br />
                <br />
                You move easily through thick forest and jungle, using every
                branch or bush. You can always use the Take Cover action when in
                forest or jungle terrain to gain cover, even if you’re not next
                to an obstacle you would normally be able to Take Cover behind.
                You gain the Terrain Stalker feat, even if you’re not trained in
                Stealth, and you must choose underbrush as your chosen terrain.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>25 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Strength</li>
              <li>Wisdom</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Intelligence</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Iruxi</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aquan, Boggard, Draconic, Elven, Jotun,
                Sylvan, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Claws</h2>
            <p>
              Your sharp claws offer an alternative to the fists other humanoids
              bring to a fight. You have a claw unarmed attack that deals 1d4
              slashing damage and has the agile and finesse traits.
            </p>
            <h2>Aquatic adaptation</h2>
            <p>
              Your reptilian biology allows you to hold your breath for a long
              time. You gain the Breath Control general feat as a bonus feat.
            </p>
          </div>

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

export default LizardfolkPage;
