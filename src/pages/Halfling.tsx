import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { halflingFeats } from "../middleware/HalflingFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const HalflingPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(halflingFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(halflingFeats);
  };

  function filterFeats(featLevel: string) {
    return halflingFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="halfling"
        book="Core Rulebook"
        tags={["halfling", "humanoid"]}
        img="halfling_icon.png"
        alt="Image of a halfling"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Claiming no place as their own, halflings control few settlements
            larger than villages. Instead, they frequently live among humans
            within the walls of larger cities, carving out small communities
            alongside taller folk. Many halflings lead perfectly fulfilling
            lives in the shadows of their larger neighbors, while others prefer
            a nomadic existence, traveling the world and taking advantage of
            opportunities and adventures as they come.
          </p>
          <p>
            Optimistic and cheerful, blessed with uncanny luck, and driven by
            powerful wanderlust, halflings make up for their short stature with
            an abundance of bravado and curiosity. At once excitable and
            easygoing, they are the best kind of opportunists, and their
            passions favor joy over violence. Even in the jaws of danger,
            halflings rarely lose their sense of humor.
          </p>
          <p>
            Many taller people dismiss halflings due to their size or, worse,
            treat them like children. Halflings use these prejudices and
            misconceptions to their advantage, gaining access to opportunities
            and performing deeds of daring mischief or heroism. A halfling’s
            curiosity is tempered by wisdom and caution, leading to calculated
            risks and narrow escapes.
          </p>
          <p>
            While their wanderlust and curiosity sometimes drive them toward
            adventure, halflings also carry strong ties to house and home, often
            spending above their means to achieve comfort in their homelife.
          </p>
          <p>
            If you want to play a character who must contend with these opposing
            drives toward adventure and comfort, you should play a halfling.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Get along well with a wide variety of people and enjoy meeting new
              friends.
            </li>
            <li>
              Find it difficult to resist indulging your curiosity, even when
              you know it’s going to lead to trouble.
            </li>
            <li>
              Hold a deep and personal hatred of the practice of slavery and
              devote yourself to freeing those who still labor against their
              will.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Appreciate your ability to always find a silver lining or
              something to laugh about, no matter how dire the situation.
            </li>
            <li>Think you bring good luck with you.</li>
            <li>
              Underestimate your strength, endurance, and fighting prowess.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Halflings are short humanoids who look vaguely like smaller humans.
            They rarely grow to be more than 3 feet in height. Halfling
            proportions vary, with some looking like shorter adult humans with
            slightly larger heads and others having proportions closer to those
            of a human child.
          </p>
          <p>
            Most halflings prefer to walk barefoot rather than wearing shoes,
            and those who do so develop roughly calloused soles on their feet
            over time. Tufts of thick, often-curly hair warm the tops of their
            broad, tanned feet. Halfling skin tones tend toward rich, tawny
            shades like amber or oak, and their hair color ranges from a light
            golden blond to raven black.
          </p>
          <p>
            Halflings reach physical adulthood around the age of 20. A typical
            halfling can live to be around 150 years old.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Despite their jovial and friendly nature, halflings don’t
                usually tend to congregate. They have no cultural homeland in
                the Inner Sea region, and they instead weave themselves
                throughout the societies of the world. Halflings eke out
                whatever living they can manage, many performing menial labor or
                holding simple service jobs. Some halflings reject city life,
                instead turning to the open road and traveling from place to
                place in search of fortune and fame. These nomadic halflings
                often travel in small groups, sharing hardships and simple
                pleasures among close friends and family.
              </p>
              <p>
                Wherever halflings go, they seamlessly blend into the society
                they find themselves in, adapting to the culture of the
                predominant ancestry around them and adding their uniquely
                halfling twists, creating a blend of cultural diffusion that
                enriches both cultures.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Halfling_02.png")}
                alt="Halfling image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Halflings are loyal to their friends and their family, but they
            aren’t afraid to do what needs to be done in order to survive.
            Halfling alignments vary, typically closely in keeping with the
            alignment of the other ancestries that live around them. Halflings
            favor gods that either grant luck, like Desna, or encourage guile,
            like Norgorber, and many appreciate Cayden Cailean’s role as a
            liberator, as well as any religions common among other ancestries
            around them.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Halfling names are usually two to three syllables, with a gentle
              sound that avoids hard consonants. Preferring their names to sound
              humble, halflings see overly long or complex names as a sign of
              arrogance. This goes only for their own people, however—halflings
              have names that suit them, and they understand that elves and
              humans might have longer names to suit their own aesthetics.
              Humans in particular have a tendency to refer to halflings by
              nicknames, with “Lucky” being common to the point of absurdity.
            </p>
            <p>
              <b>Sample names:</b> Anafa, Antal, Bellis, Boram, Etune, Filiu,
              Jamir, Kaleb, Linna, Marra, Miro, Rillka, Sistra, Sumak, Yamyra
            </p>
          </div>
          <h2>Halfling heritages</h2>
          <p>
            Living across the land, halflings of different heritages might
            appear in regions far from are their ancestors lived. Choose one of
            the following halfling heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Gutsy</label>
            <div className="content">
              <p className="text">
                Your family line is known for keeping a level head and staving
                off fear when the chips were down, making them wise leaders and
                sometimes even heroes. When you roll a success on a saving throw
                against an emotion effect, you get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Hillock</label>
            <div className="content">
              <p className="text">
                Accustomed to a calm life in the hills, your people find rest
                and relaxation especially replenishing, particularly when
                indulging in creature comforts. When you regain Hit Points
                overnight, add your level to the Hit Points regained. When
                anyone uses the Medicine skill to Treat your Wounds, you can eat
                a snack to add your level to the Hit Points you regain from
                their treatment.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Nomadic</label>
            <div className="content">
              <p className="text">
                Your ancestors have traveled from place to place for
                generations, never content to settle down. You gain two
                additional languages of your choice, chosen from among the
                common and uncommon languages available to you, and every time
                you take the Multilingual feat, you gain another new language.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Twilight</label>
            <div className="content">
              <p className="text">
                Your ancestors performed many secret acts under the concealing
                cover of dusk, whether for good or ill, and over time they
                developed the ability to see in twilight beyond even the usual
                keen sight of halflings. You gain low-light vision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Wildwood</label>
            <div className="content">
              <p className="text">
                You hail from deep in a jungle or forest, and you’ve learned how
                to use your small size to wriggle through undergrowth, vines,
                and other obstacles. You ignore difficult terrain from trees,
                foliage, and undergrowth.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Jinxed</label>
            <div className="content">
              <p className="text">
                You were born with a strange blessing: bereft of the typical
                halfling luck, you can instead manipulate the fortunes of
                others. You can never take the Halfling Luck feat, and you gain
                the Jinx action.
              </p>
              <Spell
                name="jinx"
                action="two_action"
                tags={["curse", "necromancy", "occult"]}
                description={
                  <span>
                    <span className="frequency">
                      <b>Frequency:</b> once per day
                    </span>
                    <br />
                    You can curse another creature with clumsiness. This curse
                    has a range of 30 feet, and you must be able to see your
                    target. The target gets a Will saving throw to resist this
                    jinx, using your class DC or spell DC, whichever is higher.
                    <br />
                    <br />
                    <b>Success:</b> The target is unaffected and is temporarily
                    immune for 24 hours.
                    <br />
                    <br />
                    <b>Failure:</b> The target is clumsy 1 for 1 minute.
                    <br />
                    <br />
                    <b>Critical Failure:</b> The target is clumsy 2 for 1
                    minute.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Observant</label>
            <div className="content">
              <p className="text">
                Your finely honed senses quickly clue you in to danger or
                trickery. You gain a +1 circumstance bonus to your Perception
                DC, though not to your Perception checks.
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
              <li>Wisdom</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Strength</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Halfling</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Dwarven, Elven, Gnomish, Goblin, and any
                other languages to which you have access (such as the languages
                prevalent in your region).
              </li>
            </ul>
            <h2>Keen eyes</h2>
            <p>
              Your eyes are sharp, allowing you to make out small details about
              concealed or even invisible creatures that others might miss. You
              gain a +2 circumstance bonus when using the Seek action to find
              hidden or undetected creatures within 30 feet of you. When you
              target an opponent that is concealed from you or hidden from you,
              reduce the DC of the flat check to 3 for a concealed target or 9
              for a hidden one.
            </p>
          </div>
          <h2>Halfling Adventurers</h2>
          <p>
            Halflings’ natural wanderlust and opportunistic nature make them
            ideal adventurers. Many people put up with their vivacious attitudes
            in return for the natural talents they provide and the popular
            superstition that traveling with a halfling is good luck.
            <br />
            <br />
            Typical backgrounds for halflings include acrobat, criminal,
            emissary, entertainer, laborer, and street urchin. Halflings make
            great clerics and rogues, but many also become monks or rangers.
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

export default HalflingPage;
