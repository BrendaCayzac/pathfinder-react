import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { spriteFeats } from "../middleware/SpriteFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const SpritePage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(spriteFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(spriteFeats);
  };

  function filterFeats(featLevel: string) {
    return spriteFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="sprite"
        book="Lost Omens: Ancestry Guide"
        tags={["rare", "sprite", "fey"]}
        img="sprite_icon.png"
        alt="Image of a sprite"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Sprites are diminutive, whimsical, and exuberant creatures from the
            fey realm known as the First World. They love playing pranks,
            exploring new things, and embracing everything to do with magic.
          </p>
          <div className="flex-column">
            <div>
              <p>
                When most people picture a fey, chances are they’re thinking of
                a sprite. The majority of sprites remain in the First World,
                where they are essentially immortal, reincarnating to a new form
                of fey when their life eventually comes to an end. Some even
                meld together with others to form a more substantial body or
                split apart into multiple smaller fey. However, sprites are
                incredibly curious about all forms of magic, leading a
                significant number to risk the mortal world to explore the new
                possibilities offered by the unusually static nature of mortal
                existence. These creatures mix in with other, smaller groups of
                Material Plane comrades, including exiles from the First World,
                those whose family swore pacts to mortals, and even
                contemplative individuals curious to enter the mortal cycle of
                souls.
              </p>
              <p>
                The first generation of Material Plane sprites were content to
                guard magical locations or objects, learn music, and play pranks
                on the unsuspecting. Panic struck when children born in the
                mortal world didn’t form wings upon adulthood—some sprites
                transitioning to the mortal world likewise lost their wings
                after a time. Believing this to be a sign that the mortal world
                was too alien for them to live there, many of the initial sprite
                explorers returned to the safety of the First World.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Sprite_02.png")}
                alt="Sprite image"
              />
            </figure>
          </div>

          <p>
            However, their wingless children exhibited a potential unmatched by
            any of their ancestors, as well as a particular magical affinity for
            the mortal world. They became the mightiest of sprite heroes, but
            also, on occasion, the most dangerous villains. As they came close
            to reaching their full strength, many of them did grow their wings
            at long last: larger, unique, and more vibrant than any from the
            First World had seen before, a sign of their limitless potential.
          </p>
          <p>
            If you want a character who is tiny, mercurial, and curious, you
            should play a sprite.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Play good-natured pranks on those around you, intended to teach a
              lesson, aid in locating a lost item, or even help find love.
            </li>
            <li>
              Become sidetracked by something new and eye-catching before you
              have fully followed through on your previous plan.
            </li>
            <li>
              Find something magical that’s so important to you, you can’t help
              but protect it with every ounce of your strength.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Expect you to know strange fey mysteries and perform fantastical
              primal magic well beyond your actual abilities.
            </li>
            <li>
              Consider you the prime suspect whenever unexplained hijinks or
              serendipity comes their way.
            </li>
            <li>
              Misconstrue the way your mind works, seeing your flitting
              attention as a sign of being scatterbrained.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Sprites are tiny faeries whose features vary wildly based on their
            heritage. The Wingless—those with the potential to become powerful
            heroes and villains, including all PC sprites—slowly grow their
            wings over time as their magical potential manifests, though some
            never grow wings at all. Those sprites with humbler destinies
            typically grow wings when reaching full adulthood and mastering
            their innate magic. Sprites reach adulthood at around the same rate
            as humans do, but a typical fey who can manage to stay out of
            mischief and danger can live 1,000 years or more. Material Plane
            sprites who sense their time is coming to an end usually return to
            the First World to be reborn and start their adventure all over
            again.
          </p>

          <div className="featured">
            <h2>Tiny PCs</h2>
            <p>
              PCs are typically Small or Medium size, but most sprite PCs are
              Tiny instead! Being Tiny comes with its own set of rules about
              space and reach. Your Tiny sprite can enter another creature’s
              space, which is important because your melee Strikes typically
              have no reach, meaning you must enter their space to attack them.
              Like other Tiny creatures, you don’t automatically receive lesser
              cover from being in a larger creature’s space, but circumstances
              might allow you to Take Cover. You can purchase weapons, armor,
              and other items for your size with the same statistics as normal
              gear, except that melee weapons have a reach of 0 for you (or a
              reach 5 feet shorter than normal if they have the reach trait).
              Remember to adjust the Bulk of items and your Bulk limit for Tiny
              size (see Items and Sizes section in the Core Rulebook).
            </p>
          </div>

          <div
            className="flex-column"
            style={{
              flexDirection: "row-reverse",
            }}
          >
            <div>
              <h2>Society</h2>
              <p>
                Sprites habitually live in tiny, reclusive villages in areas
                with abundant magic, natural beauty, or other curiosities of
                interest. Other sprites live as loners or with small family or
                peer groups, traveling across the land in search of excitement.
              </p>
              <div className="featured">
                <h2>Sprites in society</h2>
                <p>
                  Sprites who mingle openly among mortals find that mortal
                  superstitions about fey regularly color their interactions
                  with sprites, for both good and ill. Mortals often believe
                  half-remembered tales, frequently about a different sort of
                  fey altogether; most sprites find this hilarious and play
                  along. Mortals uninterested in sprites’ pranks tend to view
                  them as nuisances and treat them accordingly. Additionally,
                  sprites’ small stature and excitable natures sometimes cause
                  mortals to treat them like children. Sprites vary in their
                  reactions to this sort of treatment from annoyance to good
                  humor, and sometimes even a realization that they can get away
                  with more this way.
                </p>
              </div>
            </div>
            <figure>
              <img
                src={require("../assets/img/Sprite.png")}
                alt="Sprite image"
              />
            </figure>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            Sprites run the gamut of alignments but are rarely lawful or evil.
            They are far more likely to worship the Eldest—the peculiar deities
            of the fey—than those of the mortal world. They have a particular
            affinity for Shyka, the many-formed Eldest of time, and the Lantern
            King, the trickster among their ranks. Among mortal deities, sprites
            appreciate Desna the most, and due to her iconic depiction as a
            butterfly-winged woman, some Desnan sprites claim her as one of
            their own. Sprites also readily comprehend the doctrines of Cayden
            Cailean and Shelyn, and the goddess of beauty and art is a
            particular favorite among grigs.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Sprite names are based entirely on their parents’ whimsy. Sprites
              often adopt additional monikers later in life or change those
              assigned to them at birth; this is neither frowned upon nor
              considered abnormal.
            </p>
            <p>
              <b>Sample names:</b> Bree, Plumgrass, Cowrie, Flit, Moth, Zephyr,
              Naatalu, Pinebrush, Zandivar
            </p>
          </div>

          <h2>Skeleton heritages</h2>
          <p>
            Sprite heritages have wide variations in appearance and are
            considered by some mortal scholars to be different “creatures,” a
            taxonomy that sprites find adorably naive. Choose one of the
            following sprite heritages at 1st level.
          </p>

          <div className="featured">
            <h2>Riding PCs</h2>
            <p>
              As a Tiny creature, a sprite PC weighs so little and takes up so
              little Bulk that it doesn’t cause issues to hitch a ride in a
              sack, shoulder, or other position on another PC. However, the
              amount of coordination required to ensure you don’t get in each
              other’s way or jostle each other into losing actions makes this
              tactic unfavorable for most fellow adventurers during combat. If
              you’re riding along with another PC or similar non-minion
              intelligent creature, roll both your initiatives and use the lower
              of the two results. You act in either order on the same initiative
              count. While traveling in this way, you each gain two actions at
              the start of your turn, instead of three, since they spend one
              action keeping you balanced on their back, and you spend one
              action maintaining your grip.
            </p>
          </div>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Draxie</label>
            <div className="content">
              <p className="text">
                You are kin to faerie dragons, tracing your heritage back to the
                death of the mightiest faerie dragon in the First World. You
                gain touch telepathy, allowing you to communicate silently and
                purely mentally with any creature you’re touching, as long as
                you share a language.
              </p>
              <Spell
                name="Telepathy"
                tags={["divination", "linguistic", "mental"]}
                action="two_action"
                description={
                  <span>
                    <span className="frequency">
                      <b>Duration</b> 10 minutes.
                    </span>
                    <br />
                    You can communicate telepathically with creatures within 30
                    feet. Once you establish a connection by communicating with
                    a creature, the communication is two-way. You can
                    communicate only with creatures that share a language with
                    you.
                    <br />
                    <br />
                    Heightened (6th) Telepathy loses the linguistic trait. You
                    can communicate telepathically with creatures using shared
                    mental imagery even if you don’t share a language.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Grig</label>
            <div className="content">
              <p className="text">
                You have the hindquarters of a cricket and adore art and music.
                Your cricket legs grant you a +2 circumstance bonus on Athletics
                checks to High Jump or Long Jump, and you gain ghost sound as a
                primal innate cantrip.
              </p>
              <Spell
                name="Ghost sound"
                tags={["auditory", "cantrip", "illusion"]}
                action="two_action"
                description={
                  <span>
                    <b>Range</b> 30 feet.
                    <br />
                    <br />
                    <span className="frequency">
                      <b>Duration</b> 10 sustained.
                    </span>
                    <br />
                    You create an auditory illusion of simple sounds that has a
                    maximum volume equal to four normal humans shouting. The
                    sounds emanate from a square you designate within range. You
                    can’t create intelligible words or other intricate sounds
                    (such as music).
                    <br />
                    <br />
                    <span className="frequency">
                      Heightened (3rd) The range increases to 60 feet.
                    </span>
                    <br />
                    <span className="frequency">
                      Heightened (5th) The range increases to 120 feet.
                    </span>
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Luminous</label>
            <div className="content">
              <p className="text">
                You glow with magical luminance. You naturally shed light as a
                torch; this light has the evocation, light, and primal traits.
                You can extinguish, rekindle, or change the color of this light
                using a single action, which has the concentrate trait.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Melixi</label>
            <div className="content">
              <p className="text">
                You have the features of a bee, butterfly, or other insect that
                loves sweets. You can ask questions of and receive answers from
                arthropods (insects, spiders, scorpions, crabs, and similar
                invertebrate animals), as well as use Diplomacy to Make an
                Impression on and Request things of them. Most bees,
                butterflies, moths, and beetles have an indifferent or friendly
                starting attitude toward you and give you time to make your
                case, though other arthropods react to you like any other
                adventurer.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Nyktera</label>
            <div className="content">
              <p className="text">
                You have batlike features, an affinity for batkind, and hearing
                that is second to none. As long as you can hear normally, you
                can use the Seek action to sense undetected creatures in a
                60-foot cone instead of a 30-foot cone. You also gain a +2
                circumstance bonus to locate undetected creatures that you could
                hear within 30 feet with a Seek action.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Pixie</label>
            <div className="content">
              <p className="text">
                You are larger than other sprites. Instead of Tiny, your size is
                Small.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>6</p>
            <h2>Size</h2>
            <p>Tiny</p>
            <h2>Speed</h2>
            <p>20 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Intelligence</li>
              <li>Dexterity</li>
              <li>Free</li>
            </ul>
            <h2>Ability Flaw</h2>
            <ul>
              <li>Strength</li>
            </ul>
            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Sylvan</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Celestial, Draconic, Elven, Gnomish,
                Goblin, Jotun, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
          </div>

          <h2>Sprite Adventurers</h2>
          <p>
            While PCs sprites are marked from adulthood as destined for great
            things, their childhoods before that point vary as widely as any
            other ancestry. That said, the tendency of most sprites to live
            either apart from civilization or in small villages means they
            rarely have backgrounds related to cities or large organizations and
            more likely were acrobats, animal whisperers, artists, entertainers,
            gamblers, herbalists, hermits, nomads, or scouts. Sprites are most
            often bards, rogues, or sorcerers, though sprite rangers and druids
            do exist and tap into their love of the natural world. Likewise,
            sprite witchesAPG and wizards are even more enthusiastic about
            learning the secrets of magic, and sprite oraclesAPG approach the
            contradictions of their mystery from the experience of living the
            contradictions between the fey and mortal worlds.
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

export default SpritePage;
