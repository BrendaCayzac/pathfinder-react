import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { conrasuFeats } from "../middleware/ConrasuFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const ConrasuPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(conrasuFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(conrasuFeats);
  };

  function filterFeats(featLevel: string) {
    return conrasuFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="conrasu"
        book="Lost Omens: The Mwangi Expanse"
        tags={["rare", "aeon", "conrasu", "plant"]}
        img="conrasu_icon.png"
        alt="Image of a conrasu"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Conrasus are shards of cosmic force given consciousness who
            construct intricate exoskeletons to interface with the mortal world.
            Both an integral part of the underlying processes of the universe
            and strangely set apart, conrasus look to aeons to understand their
            existence.
          </p>

          <p>
            Conrasus aren’t entirely clear on their own origins. Some historians
            think them a failed experiment of a wizardly cabal—possibly a
            splinter of artificers from the ancient Jitska Imperium—who
            desperately hoped to bind a pleroma to bolster their army but who
            accidentally conjured shattered scraps of the aeon instead. Others
            believe conrasus were built by their ancestors using an accelerated,
            iterative evolution process as natural as one designed by those who
            build portions of their own bodies could ever hope to achieve. Most
            likely, it is a mix of the two.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Do your best to determine and act upon the will of your guiding
              aeon.
            </li>
            <li>
              Use rituals and repetitive actions as a means to meditate and
              reflect on your purpose.
            </li>
            <li>
              Have difficulty applying your cosmic instincts and senses to a
              physical existence.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              View you as part of a hivemind at best or lacking in free will at
              worst.
            </li>
            <li>
              Have trouble understanding your perspective or attempts at
              communication.
            </li>
            <li>
              Look to you as the expert on any matters involving aeons or
              related beings.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            The true form of a conrasu is an abstract chunk of spiritual
            essence. While their being exists beyond the truth of humanoid
            senses, to the mortal eye, their body usually resembles a globe of
            light, darkness, or space. Floating, internal pinpricks of
            illumination sit inside the ball, slightly obscured as if peeking
            through a gelatinous substance. These “cores” surround themselves
            with bodies made out of still-living wood, creating the form that
            most people recognize as a conrasu. Conrasus themselves are called
            to a path and, once they find it, shape frames to create a suitable
            form, leading to a wide variety of appearances.
          </p>
          <p>
            As a conrasu ages, the supple green wood of their body hardens,
            causing their limbs to lose mobility. Conrasus must constantly grow
            new arms and roots for their living exoskeleton, leaving their
            frozen limbs as immobile effigies along their shell.
          </p>
          <p>
            Conrasus can’t maintain their integrity without their wooden
            exoskeletons. A conrasu that loses its exoskeleton dissipates and
            dies, though they can be returned to life with magic like other
            beings.
          </p>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                There are three distinct types of conrasus. Maintainers tend and
                care for others, believing they must cultivate a proper balance
                between various forces. Shapers build and direct those around
                them, and feel that balance is maintained by those who strive to
                preserve the world’s equilibrium. Lastly, correctors fix
                problems of all sorts, often acting as stalwart bastions of law
                who perceive the world in absolutes, with few to no shades of
                gray. True balance can be achieved only in cases where pressure
                and force have been applied to make necessary changes.
              </p>
              <p>
                On rare occasions, a conrasu may hear and heed the call of
                another form of extraplanar being. One might serve a psychopomp,
                another an archon, and yet another might become a witch and
                adopt an unknown figure as a patron.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Conrasu_02.png")}
                alt="Conrasu image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Many conrasus consider themselves bound to a specific aeon,
            following them like a deity and doing what they believe to be the
            aeon’s bidding. As a result, almost all conrasus are lawful neutral
            in alignment.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Conrasus have little in the way of consciousness as others
              understand it before they self-actualize and leave the
              nursery-towns where they sprouted. That includes a name, a concept
              of gender, and even the passage of time beyond their little
              bubbles—these are picked up in the wider world. As a result, a
              conrasu might have nearly any appellation.
            </p>
            <p>
              <b>Sample names:</b> Automa, Azubu, Dumi, Emeka, Ganizadi, Locu,
              Incanes, Radi, Shell, Weave
            </p>
          </div>

          <h2>Conrasu heritages</h2>
          <p>
            As a conrasu grows, they take part in a rite that changes and
            enhances their form. Each rite has different benefits, which
            manifest as specific heritages. Choose one of the following conrasu
            heritages at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Rite of knowing</label>
            <div className="content">
              <p className="text">
                You enhanced your exoskeleton with a connection to Axis,
                allowing you to tap into the infinite knowledge of the plane.
                You gain the Call to Axis action.
              </p>

              <Spell
                name="CALL TO AXIS"
                action="one_action"
                description={
                  <span>
                    <span>
                      <b>Frequency:</b>ce per day
                    </span>
                    <br />
                    <br />
                    <span className="frequency">
                      <b>
                        Trigger: You are about to attempt a check to Recall
                        Knowledge.
                      </b>
                    </span>
                    <br />
                    You call upon the knowledge of Axis to ensure the accuracy
                    of your information. You roll a second time and use the
                    higher result. If you roll a critical failure, you get a
                    failure instead. If you roll a success, you get a critical
                    success instead.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Rite of Light</label>
            <div className="content">
              <p className="text">
                Your exoskeleton bears small shoots that can share life. When
                using your Sunlight Healing, you can restore the Hit Points of
                an adjacent ally instead of yourself. That ally becomes
                temporarily immune to all uses of Sunlight Healing for 1 day.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Rite of Passage</label>
            <div className="content">
              <p className="text">
                Your exoskeleton remains connected with the plants that created
                it. You can ignore difficult terrain and uneven ground caused by
                undergrowth. In addition, when you use the Acrobatics skill to
                Balance on narrow surfaces or uneven ground within forests, you
                aren’t flat-footed. When you roll a success attempting one of
                these Acrobatics checks, you get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Rite of Invocation</label>
            <div className="content">
              <p className="text">
                You augmented your exoskeleton with magic. You gain one cantrip
                from the arcane or occult spell list. You can cast this spell as
                an innate spell at will. A cantrip is heightened to a spell
                level equal to half your level rounded up.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>10</p>
            <h2>Size</h2>
            <p>Medium</p>
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
              <li>Charisma</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Mwangi</li>
              <li>Rasu</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Celestial, Elven, Iruxi, Sylvan, Terran,
                Utopian, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Sunlight healing</h2>
            <p>
              A conrasu can enter a meditative, healing state as a 10-minute
              activity when exposed to direct sunlight, in which case they
              recover 1d8 Hit Points. At 3rd level, and every 2 levels
              thereafter, this healing increases by 1d8. Once a conrasu has
              recovered Hit Points in this way, they are temporarily immune to
              further uses of Sunlight Healing for 1 day..
            </p>
          </div>

          <h2>Catfolk Adventurers</h2>
          <p>
            Maintainers who become adventurers are often wizards, bards, or
            clerics who offer their magic and knowledge to the group and subtly
            nudge the party as needed. Correctors tend to become champions,
            clerics, and fighters, forming heavy and hard living wood armor
            around themselves to keep them safe from harm. The rare shaper might
            travel with a group as a druid or even a bard, usually to accomplish
            a goal they believe lies outside of the enclaves.
          </p>

          <p>
            No matter the path a conrasu finds themselves on, they tend to come
            from similar backgrounds. Field medic and herbalist tend to fit
            those who find themselves comfortable in their homes and with those
            of their nursery while conrasus of nomad or emissary backgrounds
            tend to enjoy roaming from place to place.
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

export default ConrasuPage;
