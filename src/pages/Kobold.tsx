import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { koboldFeats } from "../middleware/KoboldFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const KoboldPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(koboldFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(koboldFeats);
  };

  function filterFeats(featLevel: string) {
    return koboldFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="kobold"
        book="Advanced Players Guide"
        tags={["uncommon", "kobold", "humanoid"]}
        img="kobold_icon.png"
        alt="Image of a kobold"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Every kobold knows that their slight frame belies true, mighty
            draconic power. They are ingenious crafters and devoted allies
            within their warrens, but those who trespass into their territory
            find them to be inspired skirmishers, especially when they have the
            backing of a draconic sorcerer or true dragon overlord. However,
            these reptilian opportunists prove happy to cooperate with other
            humanoids when it’s to their benefit, combining caution and cunning
            to make their fortunes in the wider world.
          </p>
          <p>
            Kobolds are resourceful survivors whose snare-guarded warrens and
            opportunistic scavenging have cast them as villains to most other
            humanoids, with their draconic reverence lending them a reputation
            as mere minions and nuisances. Yet some kobolds have emerged from
            their secluded warrens seeking the relative safety of surface
            settlements, the lucrative prospects of the adventuring life, or
            validating awe from followers of their own.
          </p>
          <p>
            If you want a character with oversized confidence, deadly cunning,
            and the ancient power of dragons flowing through their veins, you
            should play a kobold.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Take pride in your draconic connections, whether you believe
              dragons are your ancestors or simply patrons.
            </li>
            <li>
              Analyze your surroundings, always looking for ambushes,
              advantageous terrain, and escape routes.
            </li>
            <li>
              Naturally observe, adopt, and respect group dynamics, whether as
              leader, subordinate, or equal.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Assume that you are cowardly and won’t stick around in the face of
              danger.
            </li>
            <li>
              Appreciate your ingenuity and resourcefulness, especially when it
              comes to building defenses.
            </li>
            <li>
              Consider your claims of draconic power to be overblown,
              delusional, or endearing.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Kitsune have alert vulpine ears, pointed snouts, and short,
            semi-retractable claws on their fingers and toes. Their fur is
            dense, countershaded, and most often red, tan, black, or white in
            color. Kitsune have bushy tails that grow in number as they hone
            their innate magical abilities, to as many as nine.
          </p>
          <p>
            The color of a kobold’s scales can vary widely. Most often, they
            mimic the hues of chromatic or metallic dragons, with a mix of
            slightly darker or lighter scales that create a mottled appearance.
            The scales of newly hatched kobolds often reflect the community’s
            draconic exemplar, whether that’s the dragon they currently serve or
            the dragon type from which they’re descended.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Kobolds have an ingrained cautiousness that keeps them alive.
                They’re secretive or subservient around powerful creatures to
                avoid becoming victims. This meekness fades once kobolds secure
                either a formidable patron (like a dragon) or a potent source of
                supernatural power (like an artifact or sorcerous leader). They
                often achieve an unshakable fervor and loyalty to their new
                cause or leader. However, kobolds are infamous for sensing a
                proverbial sinking ship, and once their source of power fails or
                seems doomed, their morale breaks swiftly.
              </p>
              <p>
                Whether led by a dragon or not, kobolds almost always identify
                themselves with a type of dragon that serves as their spiritual
                exemplar. Their societies regularly adopt laws and cultural
                norms inspired by the exemplar’s personality.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Kobold_02.png")}
                alt="Kobold image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            All but the most iconoclastic kobolds have a natural respect for
            hierarchies and rules, and so kobolds are rarely chaotic. Kobold
            adventurers tend to be lawful neutral or neutral, relying on their
            ancestral social strategies for survival.
          </p>
          <p>
            Organized religion feels natural for most kobolds, especially when a
            deity assumes a commanding or tyrannical disposition. Many gravitate
            toward Abadar’s order or Shelyn’s artistic flair. More sinister
            communities uphold Asmodeus and other archdevils as common patrons.
            The dragon deities Apsu and Dahak are also common subjects of
            worship (for more about these two deities, see Pathfinder Lost Omens
            Gods and Magic page 130). Kobolds also often find themselves drawn
            to cults, particularly those with dragons or devils as figureheads.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              A young kobold’s given name is rarely more than a syllable or two.
              However, as they age, achieve status, and accomplish great deeds,
              kobolds add more syllables to their names, imitating a common
              draconic practice. Kobolds rarely have surnames except in an
              effort to better fit into a community, in which case they
              typically adopt the surname of an inspiring figure in that group.
            </p>
            <p>
              <b>Sample names:</b> Azrnak, Draahzin, Enga, Fazgyn, Fazij,
              Jekkajak, Kib, Kirrok, Mirkol, Tarka, Urkak, Varshez, Vroklan,
              Zekstikah, Zgaz
            </p>
          </div>

          <h2>Kobold heritages</h2>
          <p>
            Proud, opportunistic, and crafty, kobolds manifest draconic power
            and diminutive tenacity. Choose one of the following kobold
            heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Cavern</label>
            <div className="content">
              <p className="text">
                You hatched into a warren among narrow tunnels and countless
                kin. Your body is flexible. When Climbing rock walls,
                stalactites, and other natural stone features, you move at half
                your Speed on a success and at full Speed on a critical success
                (and you move at full Speed on a success if you have Quick
                Climb). This doesn’t affect you if you’re using a climb Speed.
                If you roll a success on an Acrobatics check to Squeeze, you get
                a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Dragonscaled</label>
            <div className="content">
              <p className="text">
                Your scales are especially colorful, possessing some of the same
                resistance a dragon possesses. You gain resistance equal to half
                your level (minimum 1) to the damage type associated with your
                draconic exemplar (see Table 1–1). Double this resistance
                against dragons’ Breath Weapons.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Spellscale</label>
            <div className="content">
              <p className="text">
                A trace of draconic magic flows through your veins. Choose one
                cantrip from the arcane spell list (see Arcane Spells in the
                Core Rulebook). You can Cast this Spell as an arcane innate
                spell at will. A cantrip is heightened to a spell level equal to
                half your level rounded up. You gain the trained proficiency
                rank in arcane spell attack rolls and spell DCs, and your key
                spellcasting ability is Charisma.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Strong jaw</label>
            <div className="content">
              <p className="text">
                Your bloodline is noted for their powerful jaws and sharp teeth.
                You gain a jaws unarmed attack that deals 1d6 piercing damage.
                Your jaws are in the brawling group and have the finesse and
                unarmed traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Venomtail</label>
            <div className="content">
              <p className="text">
                A vestigial spur in your tail secretes one dose of deadly venom
                each day. You gain the Tail Toxin action.
                <Spell
                  name="Tail toxin"
                  action="one_action"
                  tags={["kobold", "poison"]}
                  description={
                    <span>
                      <b>Frequency:</b> once per day.
                      <br />
                      <br />
                      <span className="frequency">
                        <b>Requirements:</b> You are wielding a piercing or
                        slashing weapon.
                      </span>
                      <br />
                      You apply your tail’s venom to a piercing or slashing
                      weapon. If your next Strike with that weapon before the
                      end of your next turn hits and deals damage, you deal
                      persistent poison damage equal to your level to the
                      target.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Cave climber</label>
            <div className="content">
              <p className="text">
                You live in a vertically-oriented home, and you’re a consummate
                climber. You gain the Combat Climber skill feat, even if you
                don’t meet the prerequisites. You can use your clawed feet and
                tail to Climb, leaving your hands free. Additionally, if you
                succeed at an Athletics check to Climb, you critically succeed
                instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Tunnelflood</label>
            <div className="content">
              <p className="text">
                You grew up in a warren crisscrossed by underwater passages,
                whether natural or excavated. You gain a swim Speed of 15 feet.
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
              <li>Charisma</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Constitution</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Draconic</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Dwarven, Gnomish, Infernal, Terran,
                Undercommon and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Darkvision</h2>
            <p>
              You can see in darkness and dim light just as well as you can see
              in bright light, though your vision in darkness is in black and
              white.
            </p>
            <h2>Draconic exemplar</h2>
            <p>
              You draw minor powers from your draconic exemplar. Choose a type
              of chromatic or metallic dragon to be your exemplar. This
              determines your scale color and appearance, and dragons sometimes
              look more favorably upon those kobolds who resemble them, at the
              GM's discretion. Your exemplar may also determine details of other
              abilities you have, using the Draconic Exemplars table.
            </p>
          </div>
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>Dragon</th>
                <th>Breath weapon shape</th>
                <th>Samage type</th>
                <th>Saving throw</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Black</td>
                <td>Line</td>
                <td>Acid</td>
                <td>Reflex</td>
              </tr>
              <tr>
                <td>Blue</td>
                <td>Line</td>
                <td>Electricity</td>
                <td>Reflex</td>
              </tr>
              <tr>
                <td>Green</td>
                <td>Cone</td>
                <td>Poison</td>
                <td>Fortitude</td>
              </tr>
              <tr>
                <td>Red</td>
                <td>Cone</td>
                <td>Fire</td>
                <td>Reflex</td>
              </tr>
              <tr>
                <td>White</td>
                <td>Cone</td>
                <td>Cold</td>
                <td>Reflex</td>
              </tr>
              <tr>
                <td>Brass</td>
                <td>Line</td>
                <td>Fire</td>
                <td>Reflex</td>
              </tr>
            </tbody>
          </table>

          <h2>Kobold Adventurers</h2>
          <p>
            Kobolds often adventure in pursuit of the power, lore, and treasure
            that they feel befit their disproportionately large egos. When
            adventurers, militias, or careless tyrants shatter a kobold
            community, the survivors often latch onto new families, seeking
            emotional solace - and sometimes revenge.
            <br />
            <br />
            Typical kobold backgrounds include artisan, artist, criminal,
            hunter, miner, scout, and tinker from the Core Rulebook, plus
            bandit, cultist, scavenger, and servant from this source. Kobolds
            excel as bards, rangers, rogues, and sorcerers, though they also
            often channel their ingenuity as alchemists or wizards.
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

export default KoboldPage;
