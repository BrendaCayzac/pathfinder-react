import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { grippliFeats } from "../middleware/GrippliFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const GrippliPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(grippliFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(grippliFeats);
  };

  function filterFeats(featLevel: string) {
    return grippliFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="grippli"
        book="Lost Omens: The Mwangi Expanse"
        tags={["uncommon", "grippli", "humanoid"]}
        img="grippli_icon.png"
        alt="Image of a grippli"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Gripplis are a shy and cautious people who generally seek to avoid
            being drawn into the complicated and dangerous affairs of others.
            Despite their outlook and small stature, gripplis often take bold
            and noble action when the situation demands it.
          </p>
          <p>
            Reclusive and canny, gripplis are treetop survivalists who harvest
            their homes’ bounty and defend themselves against terrible threats.
            Their reliance on cunning and simple tools has led to gripplis being
            mischaracterized as primitive, yet this overlooks their shaping of
            the land with hidden orchards and camouflaged causeways that allow
            gripplis to live in prosperous peace. Gripplis are most likely to
            emerge from their forest homes to trade, explore, and combat threats
            that would despoil the world.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Seek out clever ways to exploit your environment when overcoming
              challenges.
            </li>
            <li>
              Make friends slowly, concerned by cautionary tales of exploitative
              strangers.
            </li>
            <li>Be fiercely protective of your home or community.</li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Assume that you are simple-minded, savage, or both.</li>
            <li>
              Trust in your impartial, measured approach to understanding
              situations and solving problems.
            </li>
            <li>
              Give you space, fearing that touching you would prove toxic.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Gripplis resemble humanoid tree frogs, with oversized eyes, wide
            mouths, and gangly physiques. Their slight frames and large toes
            afford excellent grip while climbing, while their colorful skin
            provides reliable camouflage that varies by their home
            environment—green and brown for jungle-dwelling groups, blue and
            orange for riparian communities, and many other colors between. A
            grippli grows quickly, reaching adult size of about 2 feet in height
            about 3 years after hatching, though they’re only considered adults
            around age 12. Gripplis rarely live beyond 60 years, though
            exceptional individuals occasionally live as long as a century.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Gripplis lead a sophisticated hunter-gatherer lifestyle with
                which they reshape the landscape to suit their needs: building
                spillways to trap fish, seeding fruit-bearing trees, sowing
                cover-granting foliage for future hunts, and more techniques
                that often escape an agriculturist’s eye. These strategies rely
                on community cooperation as well as dispersed populations, so
                gripplis commonly live in small villages, each part of a complex
                web of alliances and relationships. Reclusiveness has preserved
                grippli lives and lifestyles for millennia, yet they
                increasingly find themselves threatened by ancient evils and new
                explorers alike.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Grippli_02.png")}
                alt="Grippli image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Taught to wait, observe, and respect natural processes of life and
            death, many gripplis adopt neutral alignments. Those who take a more
            active role suppressing evils that take refuge in the jungles are
            often neutral good, most notably those rare fiend-keepers who absorb
            an evil being into their soul to contain and eventually transform
            its villainy through virtuous acts. Nature deities such as Gozreh or
            Erastil often earn gripplis’ respect, yet communities often prefer
            less prominent, more intimate divinities such as empyreal lords,
            psychopomp ushers, or the fey Eldest.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Grippli names often include resonant vowels and chirped consonants
              that remain difficult for non-gripplis to vocalize properly.
              Gripplis that travel widely often adopt one or more names more
              easily replicated by their associates.
            </p>
            <p>
              <b>Sample names:</b> Aalpo’ol, Bogwynne, Ctaprak, Eegru, Gpoun,
              Gruoksh, Hrrauti, Iopo, Iykiki, Kyrsiik, Mhruugu, Oplugo, Quaasol,
              Yolkuu, Ztaal
            </p>
          </div>
          <h2>Grippli heritages</h2>
          <p>Choose one of the following grippli heritages at 1st level.</p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Poisonhide</label>
            <div className="content">
              <p className="text">
                You may be small, but the poison glands concealed across your
                body hide a deadly defense. You gain the Toxic Skin reaction.
              </p>

              <Spell
                name="toxic skin"
                tags={[]}
                action="reaction"
                description={
                  <span>
                    <span className="frequency">
                      <b>Frequency:</b> once per hour
                    </span>
                    <br />
                    Trigger A creature touches you, such as by Grappling you,
                    successfully hitting you with an unarmed attack, or using a
                    touch-range spell against you.
                    <br />
                    <br />
                    You exude a deadly toxin. The triggering creature takes 1d4
                    poison damage (basic Fortitude save using your class DC or
                    spell DC, whichever is higher). At 3rd level and every 2
                    levels thereafter, the damage increases by 1d4.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Snaptongue</label>
            <div className="content">
              <p className="text">
                Your tongue is especially long, and you can launch it with
                extraordinary range and precision. You can use your tongue to
                deliver touch-range spells and perform extremely simple Interact
                actions, such as opening some types of unlocked doors. Your
                tongue can’t perform actions that require fingers or significant
                manual dexterity, including any action that would require a
                check to accomplish, and you can’t use it to hold items.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Stickytoe</label>
            <div className="content">
              <p className="text">
                Your hands and feet exude a film that helps them adhere to
                surfaces. You gain a +2 circumstance bonus to your Fortitude and
                Reflex DC against attempts to Disarm, Shove, or Trip you. When
                ascending trees, vines, and other foliage, if you roll a success
                on the Athletics check to Climb, you get a critical success
                instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Windweb</label>
            <div className="content">
              <p className="text">
                Tough webbing along your hands and toes can slow any fall. As
                long as you have one hand free, you take no falling damage,
                regardless of the distance you fall.
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
              <li>Grippli</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Abyssal, Aquan, Boggard, Draconic, Elven,
                Iruxi, Sylvan, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
          </div>
          <h2>Grippli Adventurers</h2>
          <p>
            For the many gripplis who hail from remote regions, wilderness
            backgrounds like hunter, nomad, or scout are excellent fits. Those
            more accustomed to urban areas might be animal whisperers, bounty
            hunters, and herbalists. Hermits are common, and emissaries are
            critical to maintaining relationships with other peoples.
            <br />
            <br />
            Thanks to their deep cultural connections to nature, gripplis make
            excellent druids and rangers. Their musical traditions are a great
            fit for bards. Gripplis’ natural agility and perceptiveness also
            make them capable clerics, monks, and rogues.
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

export default GrippliPage;
