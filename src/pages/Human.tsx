import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import {
  humanFeats,
  halfElfFeats,
  halfOrcFeats,
} from "../middleware/HumanFeats";
import { elfFeats } from "../middleware/ElfFeats";
import { orcFeats } from "../middleware/OrcFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const HumanPage: React.ComponentType = () => {
  let concatinatedFeats = humanFeats.concat(
    elfFeats,
    halfElfFeats,
    halfOrcFeats,
    orcFeats
  );

  concatinatedFeats = concatinatedFeats.sort(function (a, b) {
    return a.id - b.id;
  });

  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(concatinatedFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(concatinatedFeats);
  };

  function filterFeats(featLevel: string) {
    return concatinatedFeats.filter(
      (feat) => feat.level === parseInt(featLevel)
    );
  }

  return (
    <div className="ancestry-page">
      <Header
        name="human"
        book="Core Rulebook, Pathfinder Primer"
        tags={["human", "humanoid"]}
        img="human_icon.png"
        alt="Image of a human"
      />

      <section>
        <div className="content">
          <p className="introduction">
            As unpredictable and varied as any of Golarion’s peoples, humans
            have exceptional drive and the capacity to endure and expand. Though
            many civilizations thrived before humanity rose to prominence,
            humans have built some of the greatest and the most terrible
            societies throughout the course of history, and today they are the
            most populous people in the realms around the Inner Sea.
          </p>
          <p>
            Humans’ ambition, versatility, and exceptional potential have led to
            their status as the world’s predominant ancestry. Their empires and
            nations are vast, sprawling things, and their citizens carve names
            for themselves with the strength of their sword arms and the power
            of their spells. Humanity is diverse and tumultuous, running the
            gamut from nomadic to imperial, sinister to saintly. Many of them
            venture forth to explore, to map the expanse of the multiverse, to
            search for long-lost treasure, or to lead mighty armies to conquer
            their neighbors—for no better reason than because they can.
            <br />
            <br />
            If you want a character who can be just about anything, you should
            play a human.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Strive to achieve greatness, either in your own right or on behalf
              of a cause.
            </li>
            <li>Seek to understand your purpose in the world.</li>
            <li>Cherish your relationships with family and friends.</li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Respect your flexibility, your adaptability, and—in most
              cases—your open-mindedness.
            </li>
            <li>
              Distrust your intentions, fearing you seek only power or wealth.
            </li>
            <li>
              Aren’t sure what to expect from you and are hesitant to assume
              your intentions.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Humans’ physical characteristics are as varied as the world’s
            climes. Humans have a wide variety of skin and hair colors, body
            types, and facial features. Generally speaking, their skin has a
            darker hue the closer to the equator they or their ancestors lived.
          </p>
          <p>
            Humans reach physical adulthood around the age of 15, though mental
            maturity occurs a few years later. A typical human can live to be
            around 90 years old. Humans often intermarry with people of other
            ancestries, giving rise to children who bear the traits of both
            parents. The most notable half-humans are half-elves and half-orcs.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Human variety also manifests in terms of their governments,
                attitudes, and social norms. Though the oldest of human cultures
                can trace their shared histories thousands of years into the
                past, when compared to the societies of the elves or dwarves,
                human civilizations seem in a state of constant flux as empires
                fragment and new kingdoms subsume the old.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Human_02.png")}
                alt="Human image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Humanity is perhaps the most heterogeneous of all the ancestries,
            with a capacity for great evil and boundless good. Some humans
            assemble into vast raging hordes, while others build sprawling
            cities. Considered as a whole, most humans are neutral, yet they
            tend to congregate into nations or communities of a shared
            alignment, or at least a shared tendency toward an alignment. Humans
            also worship a wide range of gods and practice many different
            religions, tending to seek favor from any divine being they
            encounter.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Unlike many ancestral cultures, which generally cleave to specific
              traditions and shared histories, humanity’s diversity has resulted
              in a near-infinite set of names. The humans of northern tribes
              have different names than those dwelling in southern
              nation-states. Humans throughout much of the world speak Common
              (though some continents on Golarion have their own regional common
              languages), yet their names are as varied as their beliefs and
              appearances.
            </p>
          </div>
          <h2>Human ethnicities</h2>
          <p>
            A variety of human ethnic groups—many of which have origins on
            distant lands—populates the continents bordering Golarion’s Inner
            Sea. Human characters can be any of these ethnicities, regardless of
            what lands they call home. Information about Golarion’s human
            ethnicities appears in Chapter 8.
          </p>
          <p>
            Characters of human ethnicities in the Inner Sea region speak Common
            (also known as Taldane), and some ethnicities grant access to an
            uncommon language.
          </p>

          <h2>Human Heritages</h2>
          <p>
            Unlike other ancestries, humans don’t have significant physiological
            differences defined by their lineage. Instead, their heritages
            either reveal their potential as a people or reflect lineages from
            multiple ancestries. Choose one of the following human heritages at
            1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Half-elves</label>
            <div className="content">
              <p className="text">
                A half-elf is born to an elf and a human, or to two half-elves.
                The life of a half-elf can be difficult, often marked by a
                struggle to fit in. Half-elves don’t have their own homeland on
                Golarion, nor are populations of half-elves particularly tied to
                one another, since they often have very disparate human and
                elven traditions. Instead, most half-elves attempt to find
                acceptance in either human or elven settlements.
                <br />
                <br />
                Half-elves often appear primarily human, with subtly pointed
                ears and a taller stature than most full-blooded humans.
                Half-elves lack the almost alien eyes of their elf parents,
                though they do have a natural presence—and often a striking
                beauty—that leads many to become artists or entertainers.
                Despite this innate appeal, many half-elves have difficulty
                forming lasting bonds with either humans or elves due to the
                distance they feel from both peoples as a whole.
                <br />
                <br />
                Half-elves live longer than other humans, often reaching an age
                around 150 years. This causes some of them to fear friendship
                and romance with humans, knowing that they’ll likely outlive
                their companions.
                <h2>Playing a half-elf</h2>
                You can create a half-elf character by selecting the half-elf
                heritage at 1st level. This gives you access to elf and half-elf
                ancestry feats in addition to human ancestry feats.
                <h2>You might...</h2>
                <ul>
                  <li>
                    Keep to yourself and find it difficult to form close bonds
                    with others.
                  </li>
                  <li>
                    Strongly embrace or reject one side or the other of your
                    parentage.
                  </li>
                  <li>
                    Identify strongly with and relate to other people with mixed
                    ancestries.
                  </li>
                </ul>
                <h2>Others probably...</h2>
                <ul>
                  <li>
                    Find you more attractive than humans and more approachable
                    than elves.
                  </li>
                  <li>
                    Dismiss your human ethnicity and culture in light of your
                    elven heritage.
                  </li>
                  <li>
                    Downplay the challenges of being caught between two
                    cultures.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Half-orcs</label>
            <div className="content">
              <p className="text">
                A half-orc is the offspring of a human and an orc, or of two
                half-orcs. Because some intolerant people see orcs as more akin
                to monsters than people, they sometimes hate and fear half-orcs
                simply due to their lineage. This commonly pushes half-orcs to
                the margins of society, where some find work in manual labor or
                as mercenaries, and others fall into crime or cruelty. Many who
                can’t stand the indignities heaped on them in human society find
                a home among their orc kin or trek into the wilderness to live
                in peace, apart from society’s judgment.
                <br />
                <br />
                Humans often assume half-orcs are unintelligent or uncivilized,
                and half-orcs rarely find acceptance among societies with many
                such folk. To an orc tribe, a half-orc is considered smart
                enough to make a good war leader but weaker physically than
                other orcs. Many half-orcs thus end up having low status among
                orc tribes unless they can prove their strength.
                <br />
                <br />A half-orc has a shorter lifespan than other humans,
                living to be roughly 70 years old. their companions.
                <h2>Playing a half-orc</h2>
                You can create a half-orc character by selecting the half-orc
                heritage at 1st level. This gives you access to orc and half-orc
                ancestry feats in addition to human ancestry feats.
                <h2>You might...</h2>
                <ul>
                  <li>
                    Ignore, embrace, or actively counter the common stereotypes
                    about half-orcs.
                  </li>
                  <li>
                    Make the most of your size and strength, either physically
                    or socially.
                  </li>
                  <li>
                    Keep your distance from people of most other ancestries, in
                    case they unfairly reject you due to your orc ancestors.
                  </li>
                </ul>
                <h2>Others probably...</h2>
                <ul>
                  <li>
                    Assume you enjoy and excel at fighting but aren’t inclined
                    toward magical or intellectual pursuits.
                  </li>
                  <li>
                    Pity you for the tragic circumstances they assume were
                    involved in your birth.
                  </li>
                  <li>
                    Get out of your way and back down rather than face your
                    anger.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <h2>Other halves</h2>
          <p>
            By default, half-elves and half-orcs descend from humans, but your
            GM might allow you to be the offspring of an elf, orc, or different
            ancestry. In these cases, the GM will let you select the half-elf or
            half-orc heritage as the heritage for this other ancestry. The most
            likely other parent of a half-elf are gnomes and halflings, and the
            most likely parents of a half-orc are goblins, halflings, and
            dwarves.
          </p>
          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Skilled heritage</label>
            <div className="content">
              <p className="text">
                Your ingenuity allows you to train in a wide variety of skills.
                You become trained in one skill of your choice. At 5th level,
                you become an expert in the chosen skill.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Versatile</label>
            <div className="content">
              <p className="text">
                Humanity’s versatility and ambition have fueled its ascendance
                to be the most common ancestry in most nations throughout the
                world. Select a general feat of your choice for which you meet
                the prerequisites (as with your ancestry feat, you can select
                this general feat at any point during character creation)
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Wintertouched</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                The power of winter flows through you. This heritage is most
                common among the Jadwiga of Irrisen, due to their descent from
                Baba Yaga, and certain Erutaki touched by the spirits. You gain
                cold resistance equal to half your level (minimum 1), and you
                treat environmental cold effects as if they were one step less
                extreme (incredible cold becomes extreme, extreme cold becomes
                severe, and so on).
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
              <li>Free</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from the list of common languages and any
                other languages to which you have access (such as the languages
                prevalent in your region).
              </li>
            </ul>
          </div>
          <h2>Feats</h2>
          <p>
            A human with elf or orc blood is called a half-elf or half-orc,
            respectively, which is represented by the corresponding heritage. If
            you have the half-elf or half-orc heritage, you can select from
            additional ancestry feats not available to other humans.
          </p>
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

export default HumanPage;
