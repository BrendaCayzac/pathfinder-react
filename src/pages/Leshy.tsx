import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { leshyFeats } from "../middleware/LeshyFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const LeshyPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(leshyFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(leshyFeats);
  };

  function filterFeats(featLevel: string) {
    return leshyFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="leshy"
        book="Lost Omens: Character Guide"
        tags={["uncommon", "leshy", "plant"]}
        img="leshy_icon.png"
        alt="Image of a leshy"
      />

      <section>
        <div className="content">
          <div className="flex-column">
            <div>
              <p className="introduction">
                Guardians and emissaries of the environment, leshies are
                immortal spirits of nature temporarily granted a physical form.
              </p>
              <p>
                Leshies are “born” when a skilled druid or other master of
                primal magic conducts a ritual to create a suitable vessel, and
                then a spirit chooses that vessel to be their temporary home.
                Leshies are self-sufficient from the moment the ritual ends, and
                so they do not depend upon these druids for care, though it is
                not uncommon for leshies to maintain lifelong bonds with their
                creators.
              </p>
              <p>
                Not all leshies have a strong enough spirit to strike off
                completely on their own, however. Weaker nature spirits can form
                only tenuous bonds that are just strong enough to animate Tiny
                bodies. These spirits become leshy familiars, acting as
                companions to their druid creators. Independent leshies are
                often protective of such leshy familiars, advocating for them to
                be treated with dignity and respect.
              </p>
              <h2>You might...</h2>
              <ul>
                <li>
                  Act as a traveling agent for natural guardians who are unable
                  to leave their territories.
                </li>
                <li>
                  Encourage civilizations you encounter to cooperate with nature
                  and build their cities in ecologically friendly ways.
                </li>
                <li>
                  Become attached to new friends you make on your journeys.
                </li>
              </ul>
              <h2>Others probably...</h2>
              <ul>
                <li>
                  Think of you as a curiosity due to your spiritual origins.
                </li>
                <li>
                  Judge you by your looks, treating you sweetly if you are cute
                  or reacting with horror if you are frightening.
                </li>
                <li>
                  Assume you know only about nature and are unfamiliar with
                  civilization and society.
                </li>
              </ul>
            </div>
            <figure>
              <img
                src={require("../assets/img/Leshy_02.png")}
                alt="Leshy image"
              />
            </figure>
          </div>

          <h2>Physical Description</h2>
          <p>
            Leshies are as varied as the material used to create their vessels,
            usually appearing as a bizarre mishmash of various plants or fungi.
            Their bodies are vaguely humanoid in shape, with numerous
            characteristics of the plant or fungus from which they were made. A
            typical leshy is about 3 feet tall. Due to the nature of the ritual
            used to create a leshy, leshies begin their lives as adults. As
            spirits, they do not age, and a leshy could potentially remain in
            the same vessel forever—though leshies rarely consider this outcome
            to be desirable.
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
                Though guardian leshies often congregate, traveling leshies are
                not naturally drawn to others of their own kind. To most
                leshies, the concept of family is not a matter of birth, but
                rather determined by bonds of loyalty and friendship. Leshies
                are dedicated allies, but they have little tolerance for those
                who would despoil nature. As much as they are happy to accept
                someone who earns their trust into their family, they expect
                family members to look out for them and their natural wards in
                return. A betrayed leshy might not directly attack those who
                slight them, but they might withdraw support at a critical
                moment or leave their betrayers to get lost in the wilderness.
              </p>
              <p>
                Leshies are grouped into categories akin to ethnicities, but
                these are not connected to physical features; rather, they
                represent broad categories of characteristics of their spirits.
                Certain spirits are more likely to gravitate toward particular
                physical bodies, though those familiar with leshies know that
                this predisposition is far from absolute. Leshies often take
                pride in their own appearances and appreciate beauty of all
                kinds in others, but they rarely form judgments based on
                physical appearance. Leshies’ genders are determined by the
                spirits that inhabit their bodies. Leshies tend to gravitate
                toward plant bodies that match their genders. Some leshies are
                exclusively male or female, while many consider themselves both.
                Others, particularly fungus leshies, tend toward far more
                complex expressions of gender, or eschew the concept entirely.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Leshy_03.png")}
                alt="Leshy image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            A leshy can be of any alignment, depending on what spirit inhabits
            their body, but their outlook often includes a neutral element.
            Religion is not particularly significant to most leshies. Those with
            a philosophical bent lean toward the Green Faith, and Gozreh is the
            most popular deity among faithful leshies. Some leshies also
            venerate green men, powerful spirits of nature that act as regional
            guardians.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Leshies choose and change their names multiple times throughout
              their lives. These names often represent a facet of their
              personalities or values, though another common naming convention
              is to use descriptions of a natural feature they admire. Some
              leshies even use a cycle of names that changes to align with
              natural phenomena, such as names based upon the season or the time
              of day.
            </p>
            <p>
              <b>Sample names:</b> Scarlet in Summer, Verdant Taleweaver,
              Lurking Hunter, Masterful Sun Drinker, Noon Sky Evening Song,
              Snowy Pine Branch, Cascading Rapids
            </p>
          </div>

          <h2>Kobold heritages</h2>
          <p>
            A leshy’s heritage represents the benefits they gain from their
            body. Choose one of the following leshy heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Fongus</label>
            <div className="content">
              <p className="text">
                Your body was made from fungi that grows in the shade of caves
                and trees, and you are at home in dark caverns and warrens. You
                gain darkvision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Gourd</label>
            <div className="content">
              <p className="text">
                You have a large gourd for a skull. Your knowledge comes from
                within your spirit, rather than a physical brain, and you have
                found a handier use for the space inside your head. You can
                store a collection of up to 1 Bulk of objects within your head.
                The DC of checks to Steal objects from inside your head
                increases by 4. Additionally, if you store only one object
                within your head, you can draw it effortlessly into your hand as
                part of another action to use the object. Drawing the item
                grants this other action the manipulate trait.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Leaf</label>
            <div className="content">
              <p className="text">
                Your body is made mostly from natural foliage, and like a leaf
                tumbling from a tree, you land from falls with particular grace.
                You take no damage from falling, regardless of the distance you
                fall.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Vine</label>
            <div className="content">
              <p className="text">
                The prehensile vines woven into your body grant you unmatched
                skill at climbing. You do not need to have any hands free to
                Climb. Additionally, if you roll a success on an Athletics check
                to Climb, you get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Cactus</label>
            <div className="content">
              <p className="text">
                Spines cover your body. You gain a spine unarmed attack that
                deals 1d6 piercing damage. Your spines are in the brawling group
                and have the finesse and unarmed traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Fruit</label>
            <div className="content">
              <p className="text">
                Your body continually produces small fruits imbued with primal
                magic. At dawn each day, a new fruit ripens. You or an ally can
                remove this fruit as an Interact action. If a living creature
                that can derive sustenance from fruit consumes it as an Interact
                action within the next hour, they regain 1d8 Hit Points, plus an
                additional 1d8 Hit Points for every 2 of your levels beyond 1st.
                This effect has the healing, necromancy, positive, and primal
                traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Lotus</label>
            <div className="content">
              <p className="text">
                Your body continually produces small fruits imbued with primal
                magic. At dawn each day, a new fruit ripens. You or an ally can
                remove this fruit as an Interact action. If a living creature
                that can derive sustenance from fruit consumes it as an Interact
                action within the next hour, they regain 1d8 Hit Points, plus an
                additional 1d8 Hit Points for every 2 of your levels beyond 1st.
                This effect has the healing, necromancy, positive, and primal
                traits
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Root</label>
            <div className="content">
              <p className="text">
                Your body is made from hardy roots that attach you firmly to the
                ground. You gain 10 Hit Points from your ancestry instead of 8.
                You can go without sunlight for 2 weeks before you begin to
                starve. You gain a +2 circumstance bonus to your Fortitude or
                Reflex DC against attempts to Shove or Trip you. This bonus also
                applies to saving throws against spells or effects that attempt
                to move you or knock you prone.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-8" />
            <label htmlFor="heritage-8">Seaweed</label>
            <div className="content">
              <p className="text">
                Your body is made from woven seaweed, and you’re just as
                comfortable underwater as on land. You gain a swim Speed of 20
                feet, and you can always breathe underwater. However, your land
                Speed is reduced by 5 feet (to 20 feet for most seaweed leshys).
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Small</p>
            <h2>Speed</h2>
            <p>25 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Constitution</li>
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
              <li>Sylvan</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Elven, Gnomish, Goblin,
                Halfling, Undercommon, and any other languages to which you have
                access (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Plant nourishment</h2>
            <p>
              You gain nourishment in the same way that the plants or fungi that
              match your body type normally do, through some combination of
              photosynthesis, absorbing minerals with your roots, or scavenging
              decaying matter. You typically do not need to pay for food. If you
              normally rely on photosynthesis and go without sunlight for 1
              week, you begin to starve. You can derive nourishment from
              specially formulated bottles of sunlight instead of natural
              sunlight, but these bottles cost 10 times as much as standard
              rations (or 40 sp).
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

export default LeshyPage;
