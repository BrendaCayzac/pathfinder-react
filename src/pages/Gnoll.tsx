import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ghoranFeats } from "../middleware/GhoranFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const GnollPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(ghoranFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(ghoranFeats);
  };

  function filterFeats(featLevel: string) {
    return ghoranFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="gnoll"
        book="Lost Omens: The Mwangi Expanse"
        tags={["uncommon", "gnoll", "humanoid"]}
        img="gnoll_icon.png"
        alt="Image of a gnoll"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Powerfully-built humanoids that resemble hyenas, gnolls are cunning
            warriors and hunters. Their frightening visage and efficient tactics
            have given them an ill-starred reputation.
          </p>
          <p>
            In lands to the east, such as Katapesh, gnolls have earned
            themselves well-deserved reputations as brutal slavers and
            demon-worshippers. Even in the Mwangi Expanse, many outsiders
            believe that gnolls are witches, cannibals, and worse. The truth is
            more complex.
          </p>
          <p>
            Mwangi gnolls, known to themselves as “kholo,” are eminently
            practical and pragmatic hunters and raiders. To gnolls, honor is
            just another word for pointless risk. Any loss of a gnoll affects
            not just the individual, but their packmates and kin as well.
            Wasting time on anything but victory, whether it’s mercy or cruelty,
            is seen as little shy of immoral. Gnolls see effectiveness as a
            cardinal virtue and believe that the best fight is one that never
            gives the opponent a chance to strike back. Mwangi gnolls are
            masters of ambushes, tactical feints, and psychological warfare—none
            of which endears them to their neighbors.
          </p>
          <p>
            Equally misunderstood is the gnoll practice of ancestor worship and
            endocannibalism. Gnolls consume their dead as a sign of reverence,
            holding a grand feast and transforming the bones of the fallen into
            art or weapons. Gnolls extend this honor to respected foes, hoping
            to bring their enemy’s cunning or strength into the clan. While it’s
            a sign of admiration, not everyone sees it that way.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>Always try to work smarter, not harder.</li>
            <li>
              Be very physically demonstrative—often hugging, punching, or
              licking your friends.
            </li>
            <li>Keep a bone from a favorite relative to ask for advice.</li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Are intimidated by your size, teeth, and eerie laugh.</li>
            <li>Assume that you are dishonorable or worse.</li>
            <li>Respect the brutal efficiency of your hunting style.</li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Gnolls are large, hyena-like humanoids with short muzzles, sharp
            teeth, and large and expressive round ears. Their bodies are covered
            in shaggy fur, rougher on the back and softer and lighter on the
            stomach and throat, usually in an off-white, tan, or brown
            shade—spots and stripes are both common. Gnolls typically stand
            between six and seven feet tall. Women are usually about a head
            taller than men, and correspondingly stronger. Gnolls are considered
            adults at fifteen, and live about 60 years on average, though some
            can reach a hundred or more in good health.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Kholo generally live in clans of 10 to 20 interrelated family
                groups, containing between 100 to 200 gnolls. They are ruled by
                a council of female gnolls, typically selected from the oldest
                members of each family. This council of elders selects one of
                their number as a Chief Elder, who is essentially the first
                among equals and sets the agenda. The council is advised by the
                clan’s bonekeeper and storyteller, as well as one or more
                younger gnolls who lead hunting and raiding packs.
              </p>
              <p>
                Bonekeepers focus on tending to the wishes of gnoll ancestors
                and gods—they take their name from the ancestral bones that
                festoon their clothing and homes. Storytellers serve as teachers
                and sages, and are expected to have an encyclopedic knowledge of
                clan history, regional lore, and anything else relevant to the
                clan. They usually speak several languages.
              </p>
              <p>
                Kholo women typically work as hunters, warriors, and leaders,
                while men become artisans, caretakers, and gatherers. However,
                adherence to gender roles varies from clan to clan. Members of
                either gender can become bonekeepers or storytellers, and these
                positions often routes to authority for male gnolls.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Gnoll_02.png")}
                alt="Gnoll image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Mwangi gnolls have an unsentimental, matter-of-fact approach to
            life, and prioritize results over methods. They are usually loyal
            and generous to their people and ruthless toward outsiders—gnolls
            are typically chaotic neutral but can skew good or evil depending on
            who they view as “their people.”
          </p>
          <p>
            Gnolls appeal to their ancestors on a day-to-day basis, invoking
            their kin to bless cubs, ward off disease, or grant luck on hunts.
            Gnolls call upon the gods on special occasions or in times of great
            crisis. Most kholo give homage to Calistria and Shelyn as the Elder
            and Younger Sisters, twin goddesses of power and beauty. Nethys, the
            Brother, is the patron of bonekeepers, and Lamashtu, while a popular
            deity in other gnoll societies, is propitiated as the Old Mother, a
            goddess called upon only as a very last resort, and otherwise begged
            to stay away.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Newborn kholo are given a root name, typically that of a bone,
              plant, or animal (though never Hyena, as this is considered
              narcissistic and arrogant). As a gnoll reaches certain milestones
              in life, they add descriptors to their name. Root names are often
              passed down through families, while descriptors are chosen to fit
              the gnoll’s personality, usually in raucous ceremonies.
            </p>
            <p>
              <b>Sample names:</b> Baobab, Jackal, Onyx Elephant in Shadows, Red
              Thorn, Unbent Iron Reed, White Acacia, Wistful Tooth, Woodpecker
            </p>
          </div>
          <h2>Gnoll heritages</h2>
          <p>
            Gnoll physiology can vary greatly across the vast swaths of the
            Mwangi Expanse. Choose one of the following gnoll heritages at 1st
            level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Ant</label>
            <div className="content">
              You’re a sharp-featured, big-eared gnoll about three feet tall.
              Many are skeptical that you are in fact a gnoll. Your size is
              Small instead of Medium. You are trained in Deception (or another
              skill if you were already trained in Deception). You gain a +1
              circumstance bonus to Deception checks to Lie when specifically
              claiming innocence, to Deception DCs against Sense Motive checks
              to uncover such lies, and to initiative checks when you roll
              Deception for initiative.
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Sweetbreath</label>
            <div className="content">
              <p className="text">
                You’re a striped, pale-furred gnoll with oddly pleasant breath,
                which you can use to entrance your prey. You are trained in
                Diplomacy (or another skill if you were already trained in
                Diplomacy). You also gain a +1 circumstance bonus to checks to
                Make an Impression if the target can smell your breath.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Witch</label>
            <div className="content">
              <p className="text">
                You’re a shaggy, dark-furred gnoll capable of making some truly
                uncanny sounds. You can cast the ghost sound cantrip as an
                occult innate spell at will. A cantrip is heightened to a spell
                level equal to half your level rounded up. In addition, you gain
                a +1 circumstance bonus to checks to Impersonate and Create a
                Diversion when using only your voice.
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
              <li>Intelligence</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Wisdom</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Gnoll</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Elven, Iruxi, Necril, Orcish,
                Sylvan, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Bite</h2>
            <p>
              Your sharp teeth and powerful jaws are fearsome weapons. You have
              a jaws unarmed attack that deals 1d6 piercing damage. Your jaws
              are in the brawling group.
            </p>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
          </div>
          <h2>Gnoll Adventurers</h2>
          <p>
            Some gnolls leave their clans to work as mercenaries and
            adventurers, learning new skills, earning wealth, and gaining allies
            that will one day benefit their people. Other adventuring gnolls are
            without clans, left orphaned by some disaster or exiled, fairly or
            not, for some crime. All gnolls are strongly pack-minded and tend to
            adopt their friends as honorary gnolls and packmates.
            <br />
            <br />
            Gnolls usually hail from the animal whisperer, entertainer,
            herbalist, hunter, nomad, scout, and warrior backgrounds. The ranger
            is the archetypal gnoll class, a cunning warrior of the wilderness,
            but gnolls also make excellent barbarians and fighters, and their
            love of clever tricks make them outstanding rogues. Bonekeepers are
            usually witches, treating ancestral spirits more like squabbling
            colleagues than objects of worship, while storytellers are typically
            bards.
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

export default GnollPage;
