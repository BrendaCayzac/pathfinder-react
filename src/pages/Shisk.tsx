import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { shiskFeats } from "../middleware/ShiskFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const ShiskPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(shiskFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(shiskFeats);
  };

  function filterFeats(featLevel: string) {
    return shiskFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="shisk"
        book="Lost Omens: The Mwangi Expanse"
        tags={["rare", "shisk", "humanoid"]}
        img="shisk_icon.png"
        alt="Image of a shisk"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Shisks are secretive mountain-dwellers, bone-feathered humanoids who
            lurk underground in dark tunnels and caverns. Their fascination with
            collecting and protecting esoteric knowledge is one of the few
            things that can persuade them to explore the outside world.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Shisks rarely encounter other peoples, even in the Mwangi
                Expanse. Shisks subsist on low-calorie diets of vegetables and
                insects, causing them to rarely compete with others for
                resources or seek out people to trade. They have a tight-knit
                society, wary of outsiders, though they don’t outright attack
                visitors. Their history is passed down verbally and musically,
                and they rarely maintain written records in order to keep their
                knowledge safe. Often the only proof that shisks exist comes
                from explorers finding signs of their architecture: organic and
                low-impact adobe buildings carved out of mountains rather than
                built atop them.
              </p>

              <h2>You might...</h2>
              <ul>
                <li>
                  See yourself as a part of nature and avoid taking anything you
                  don’t need.
                </li>
                <li>
                  Be wary of others getting one over on you by tricking you into
                  revealing something.
                </li>
                <li>
                  Love warmth and enjoy sunbathing despite your subterranean
                  nature.
                </li>
              </ul>
              <h2>Others probably...</h2>
            </div>
            <figure>
              <img
                src={require("../assets/img/Shisk_02.png")}
                alt="Shisk image"
              />
            </figure>
          </div>
          <ul>
            <li>Are concerned by your diet and how little you eat.</li>
            <li>
              Become confused or annoyed by your refusal to give information
              freely.
            </li>
            <li>Appreciate your incredible memory and knowledge.</li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Shisks have features and skin-tones similar to humans, usually
            ranging from deep tan to deep black. They are lighter than their
            body size might indicate, due to having hollow bones. Shisks have no
            body hair—instead, their backs are covered in vestigial plumage that
            now grow only as bony quills that resemble calcified pin feathers.
            Though shisks can’t fly, these spines are longer around their arms,
            as if they once had wings. A shisk’s eyes contract into slits in the
            sunlight and are typically warmly colored, from hazel and brown to
            more unique colors like red or amber. Shisks have two prominent
            narrow fangs as the front teeth on their upper jaw, causing some
            people to mistake them for asanbosams or vampires.
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
                Though rarely encountered, shisks are willing to speak, host,
                and trade with outsiders. Their economy might be confusing to
                others: they greatly eschew materialism in favor of information
                and the arts. They freely give away material goods for knowledge
                or even performances, considering themselves on the “winning”
                side of a bargain if people are willing to take material things
                in exchange for valuable information. They never give away
                information for material goods, only for other knowledge, and
                they rarely ask for material goods in trades.
              </p>
              <p>
                Shisk are so paranoid that different communities of shisks have
                been known to clash with one another over secrets. Wars are
                fought not over territory or resources, but over coveted
                information. On a few occasions, when shisk sages or diplomats
                convinced different groups of shisks to put aside their
                differences and collaborate, great puzzles and mysteries of
                Golarion have been solved in a matter of hours.
              </p>
            </div>
            <figure>
              <img src={require("../assets/img/Shisk.png")} alt="Shisk image" />
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
            Seeing themselves as part of the natural world and typically focused
            on their own pursuits instead of society, most shisks adopt neutral
            alignments. Some shisks are patrons of gods that have been long
            forgotten. Many shisks worship the sun god Chohar, a fact which
            might seem odd for people who dwell underground. The Green Faith is
            highly common among shisks, but when seeking out personal gods to
            revere, most shisks prefer gods of knowledge and secrets such as
            Irez, Nethys, or Norgorber.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Shisk names are usually granted by their parents, though these
              names often have secret meanings known only to their families.
              They are often filled with sibilant syllables, occasionally
              punctuated by sharp vowels.
            </p>
            <p>
              <b>Sample names:</b> Adomssha, Asjossa, Chishinsa, Dalissho,
              Lessia, Lishassha, Somissu, Quinshu
            </p>
          </div>

          <h2>Shisk heritages</h2>
          <p>Choose one of the following shisk heritages at 1st level.</p>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Lorekeeper</label>
            <div className="content">
              <p className="text">
                You grew up surrounded by knowledge and secrets. You become
                trained in one Lore skill and one other Intelligence- or
                Wisdom-based skill of your choice. At 5th level, you become
                expert in the chosen skills.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Quillcoat</label>
            <div className="content">
              <p className="text">
                Your body has adapted a defensive mechanism to break off your
                quills in an attacker, allowing you to defend yourself against
                aggressive predators, though it takes a while for the quills to
                grow back. You gain the Barbed Quills reaction.
              </p>
              <Spell
                name="Barbed quills"
                action="reaction"
                description={
                  <span>
                    <b>Frequency:</b> once per day.
                    <br />
                    <br />
                    <span className="frequency">
                      <b>Trigger:</b> You are hit with an unarmed strike or a
                      strike with a non-reach melee weapon.
                    </span>
                    <br />
                    You break off quills in your attacker’s flesh. You deal 1d8
                    piercing damage to the triggering creature (basic Reflex
                    save using your class DC or spell DC, whichever is higher.)
                    On a critical failure, the creature also takes 1d4
                    persistent bleed damage as your quills hook into its flesh.
                    At 3rd level, and every 2 levels thereafter, this damage
                    increases by 1d8 and the persistent piercing damage
                    increases by 1.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Spellkeeper</label>
            <div className="content">
              <p className="text">
                Your magical knowledge allows you to cast simple spells. Choose
                occult or primal. You gain one cantrip from that magical
                tradition’s spell list. You can cast this spell as an innate
                spell at will, as a spell of your chosen tradition. A cantrip is
                heightened to a spell level equal to half your level rounded up.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Stronggut</label>
            <div className="content">
              <p className="text">
                Your metabolism is slow, allowing you to go for days without
                food and process maladies at a slower rate. You can go for 1
                week without food before you begin to starve (see Starvation and
                Thirst section in the Core Rulebook). Additionally, the onset
                times and lengths of stages for all diseases and poisons that
                affect you are increased by 50%. If the onset time or stage is
                instant or lasts only 1 round, this ability has no effect.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Stonestep</label>
            <div className="content">
              <p className="text">
                Navigating mountains and other rocky terrain is second nature to
                you. You can ignore non-magical difficult terrain caused by
                rubble and uneven ground made of stone and earth.
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
              <li>Intelligence</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Mwangi</li>
              <li>Shisk</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from any Common language, and any other
                languages to which you have access (such as the languages
                prevalent in your region).
              </li>
            </ul>
            <h2>Darkvision</h2>
            <p>
              You can see in darkness and dim light just as well as you can see
              in bright light, though your vision in darkness is in black and
              white.
            </p>
          </div>

          <h2>Shisk adventurers</h2>
          <p>
            With a cultural obsession around learning and secrets, shisks are
            perfect fits for the scholar background. They are also reclusive in
            their tasks, making hermits and nomads common. Their love of
            histories spread through song makes them ideal entertainers, while
            shisks’ coexistence with nature means they are ideal herbalists and
            animal whisperers. Shisks make excellent bards and wizards, as they
            excel at focus and long hours of research. Those who venture into
            other societies to learn are also great fits for the investigator
            class.
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

export default ShiskPage;
