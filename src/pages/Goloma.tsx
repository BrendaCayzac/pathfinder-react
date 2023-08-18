import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { golomaFeats } from "../middleware/GolomaFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const GolomaPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(golomaFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(golomaFeats);
  };

  function filterFeats(featLevel: string) {
    return golomaFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="goloma"
        book="Lost Omens: The Mwangi Expanse"
        tags={["rare", "goblin", "humanoid"]}
        img="goloma_icon.png"
        alt="Image of a goloma"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Golomas fear most other people and deliberately use their unusual
            biology to frighten off those they consider to be dangerous
            predators. Rarely seen and poorly understood, golomas’ many-eyed and
            wooden faced visages instill terror in most they meet.
          </p>
          <p>
            Though just as capable of being dangerous as any intelligent
            creature on Golarion, golomas have a deep-rooted psychological
            understanding that they are prey, and that all two-eyed people are
            predators. As a result, golomas rarely reveal themselves to others,
            and when they do, they often adopt threatening personas as a means
            to protect themselves. Even those few golomas who venture out into
            greater Mwangi society often have trouble relating to other
            ancestries, due to their strong differences in perception and
            mindset.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Instinctively process large amounts of disparate information
              quickly and efficiently.
            </li>
            <li>
              Project an air of intimidation to conceal your nervous
              disposition.
            </li>
            <li>
              Have difficulty distinguishing individual objects or people from
              others that are similar.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Are frightened by your strange physiology.</li>
            <li>
              Mistake your difficulties with identifying distinct people from
              one another as indifference.
            </li>
            <li>
              Mistake your difficulties with identifying distinct people from
              one another as indifference.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Golomas are humanoids with rough skin that ranges in color from warm
            brown to ebony, although sickly gray or white individuals with
            albinism are not uncommon. Their fingers and feet are coated with a
            thin layer of chitin. A goloma’s face is an oblong wedge made of
            smooth chitin, almost resembling a wooden mask. Protruding from this
            face are eight gelatinous, shining eyes. A goloma’s mouth and jaw
            are located beneath their face-plate, and a bony crest juts from the
            top of their chitinous visage. The back of a goloma’s head and neck
            is coated in black hair that is filled with thousands of tiny,
            peering eyes. These eyes tend to glow and squirm as they look
            around—an unsettling sight for most.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                An ancient goloma story states that during a calamity unleashed
                long ago, gods and demons burst forth from the earth to steal
                the eyes from other creatures. Only the golomas and others who
                were in hiding were spared—yet golomas soon began to be hunted
                by the now two-eyed people, who were hungry to take goloma eyes
                to replace what they had lost. This accurately sums up most
                golomas’ mentalities: to be exposed is to be vulnerable, and to
                trust a stranger is deadly. Golomas usually travel and live with
                groups of other golomas, as this is where they feel most
                comfortable.
              </p>
              <p>
                Golomas learn at a young age to be vigilant at all times,
                observing the environment for any irregularities and then
                reacting with quick, calculated instinct rather than
                deliberative action. Other ancestries often perceive golomas to
                be paranoid and hypervigilant. Golomas are also better at
                wide-scale observation than observation of specific things—they
                can easily notice commonalities across large fields but have
                difficulty remembering what a specific object or creature looked
                like. This only increases their paranoia, as they have trouble
                visually distinguishing known friends from potentially hostile
                foes.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Goloma_02.png")}
                alt="Goblin image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Golomas tend to focus on their own survival and thus are typically
            neutral, though those who find more comfort in conformity than
            others trend toward lawful alignments. Golomas often pay homage to
            Kalekot, a deity of protective fear, as the guardian of their
            people, though not one to be trusted. Kalekot is called upon to
            curse those who victimize golomas, as most feel that justice can
            only be attained using supernatural means. Other popular gods
            include Mazludeh and Grandmother Spider, who encourage the strength
            of community, though a typical goloma’s idea of community is often
            very insular.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              A goloma’s true name is kept among golomas, as there are hundreds
              of cautionary tales of what could happen if another creature
              learns a goloma’s true name. Names tend to lack soft syllables,
              which golomas often struggle to pronounce, and typically consist
              of hard consonants and individually enunciated vowels instead.
              Among other people, golomas tend to use names that are intended to
              be intimidating, taking elements and sounds from Aklo, Necril, or
              words from local languages that seem to cause strong reactions.
            </p>
            <p>
              <b>Sample names:</b> Biqkuul, Ehbouja, Haamaah, Kouzo, Quaerjii,
              Tebaazu, Uruueda, Zekuukeu
            </p>
          </div>
          <h2>Goloma heritages</h2>
          <p>Choose one of the following goloma heritages at 1st level.</p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Charhide</label>
            <div className="content">
              Your ancestors have always had a connection to fire and a thicker
              skin, which allows you to resist burning. You gain fire resistance
              equal to half your level (minimum 1). You can also recover from
              being on fire more easily. Your flat check to remove persistent
              fire damage is DC 10 instead of DC 15, which is reduced to DC 5 if
              another creature uses a particularly appropriate action to help.
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Farsight</label>
            <div className="content">
              <p className="text">
                Your eyes have adapted to see more in less than favorable
                conditions. You gain low-light vision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Frigthful</label>
            <div className="content">
              <p className="text">
                Your face has a particularly off-putting appearance. You are
                trained in Intimidation (or another skill of your choice if you
                were already trained in Intimidation) and gain the Intimidating
                Glare skill feat as a bonus feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Insightful</label>
            <div className="content">
              <p className="text">
                You’ve learned to watch for telltale signs of dangerous
                sentiments to help you avoid trouble. You gain a +1 circumstance
                bonus to your Perception DC against attempts to Lie to you and
                your Perception checks to Sense Motive.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Vicious</label>
            <div className="content">
              <p className="text">
                The chitin on your hands forms powerful claws that allow you to
                defend yourself. You gain a claw unarmed attack that deals 1d6
                slashing damage. Your claws are in the brawling group and have
                the agile, finesse, and unarmed traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Vigilant</label>
            <div className="content">
              <p className="text">
                You’ve learned to be aware of not just obvious physical dangers,
                but also noticeable magical threats. You can cast the detect
                magic cantrip as an arcane innate spell at will. A cantrip is
                heightened to a spell level equal to half your level rounded up.
                In addition, your awareness allows you to notice magical traps
                easier than others. Your proficiency rank in Perception is
                considered one step better when attempting to detect magical
                traps. (Trained is considered expert, expert is considered
                master, and master is considered legendary).
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>30 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Wisdom</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Goloma</li>
              <li>Mwangi</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Abyssal, Aklo, Draconic, Elven, Halfling,
                Necril, Orcish, Sylvan, and any other languages to which you
                have access (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Eyes in the back</h2>
            <p>
              You have eyes that point in several different directions and
              instinctively notice movement in the peripheries of your vision.
              When you use the Seek basic action, you can look for creatures in
              two areas instead of one. If precision is necessary, you can
              select two 30-foot cones or 15-foot bursts within line of sight
              instead of one.
            </p>
          </div>
          <h2>Goloma Adventurers</h2>
          <p>
            Golomas keep to themselves in self-sufficient societies, and
            commonly possess backgrounds such as hunter, laborer, artist, or
            farmhand. Golomas who keep a lookout for their communities might be
            scouts or acolytes. They make excellent clerics of more unusual
            gods—those who are less attuned to a typical humanoid mindset and
            seek worshippers who can truly understand them. Druids are not
            uncommon among golomas, and they also make excellent investigators.
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

export default GolomaPage;
