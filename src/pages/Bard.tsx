import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { BardFeats } from "../middleware/BardFeats";
import { BardFocusSpells } from "../middleware/BardFocusSpells";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";

const BardPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    BardFeats
  );
  const [filteredSpellList, setFilteredSpellList] =
    useState<Array<FocusSpell> | null>(BardFocusSpells);
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...BardFeats];
    // Update list with elements containing the query
    updatedList = updatedList.filter((feats) => {
      return feats.name.indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated list
    setFilteredList(updatedList);
  };

  const filterSpellsBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...BardFocusSpells];
    // Update list with elements containing the query
    updatedList = updatedList.filter((feats) => {
      return feats.name.indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated list
    setFilteredSpellList(updatedList);
  };

  return (
    <div className="class">
      <header>
        <h1>Bard</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          An artist and a scholar, the bard uses performance and esoteric
          learning to bolster their companions and foil their enemies. Sometimes
          sneaky and quite often charming, the bard adventures with pizzazz and
          talent backed up by an impressive repertoire of occult magic.
        </p>
        <figure>
          <img src={require("../assets/img/bard_icon.png")} alt="bard icon" />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Charisma</b>
          <p>
            At 1st level, your class gives you an ability boost to Charisma.
          </p>
        </div>
        <div className="column">
          <h2>Hit points</h2>
          <b>8 plus your Constitution Modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>
      <figure className="figure-one">
        <img src={require("../assets/img/bard_01.webp")} alt="Bard image" />
      </figure>
      <h2 id="initial-proficiencies">Initial Proficiencies</h2>
      <p>
        At 1st level, you gain the listed proficiency ranks in the following
        statistics. You are untrained in anything not listed unless you gain a
        better proficiency rank in some other way.
      </p>
      <div className="featured-two">
        <h2>Perception</h2>
        <p>Expert in Perception</p>
        <h2>Saving Throws</h2>
        <ul>
          <li>Trained in Fortitude</li>
          <li>Trained in Reflex</li>
          <li>Expert in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Trained in Occultism</li>
          <li>Trained in Performance</li>
          <li>
            Trained in a number of additional skills equal to 4 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Trained in simple weapons</li>
          <li>
            Trained in the longsword, rapier, sap, shortbow, shortsword, and
            whip
          </li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in light armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in occult spell attacks</p>
        <p>Trained in occult spell DCs</p>
      </div>
      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You use magical performances to alter the odds in favor of your
            allies. You confidently alternate between attacks, healing, and
            helpful spells as needed.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>You persuade, prevaricate, and threaten with ease.</p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You’re a font of knowledge, folktales, legends, and lore that
            provide a deeper context and helpful reconnaissance for the group’s
            adventure. Your spells and performances inspire your allies to
            greater discovery and success.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You can earn money and prestige with your performances, gaining a
            name for yourself and acquiring patrons. Eventually, tales of your
            talents and triumphs might attract other bards to study your
            techniques in a bardic college.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>
          Have a passion for your art so strong that you forge a spiritual
          connection with it.
        </li>
        <li>Take point when tact and nonviolent solutions are required.</li>
        <li>
          Follow your muse, whether it’s a mysterious fey creature, a
          philosophical concept, a psychic force, or a deity of art or music,
          and with its aid learn secret lore that few others have.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Relish the opportunity to invite you to social events, either as a
          performer or a guest, but consider you to be something of a curiosity
          in their social circles.
        </li>
        <li>
          Underestimate you compared to other spellcasters, believing you are
          little more than a foppish minstrel and overlooking the subtle power
          of your magic.
        </li>
        <li>
          Respond favorably to your social charm and abilities, but remain
          suspicious of your beguiling magic.
        </li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as a bard. Abilities gained at higher levels
        list the requisite levels next to the features’ names.
      </p>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Class Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a href="#ancestry-and-background">Ancestry and background</a>,{" "}
              <a href="#initial-proficiencies">initial proficiencies</a>,{" "}
              <a href="#occult-spellcasting">occult spellcasting</a>,{" "}
              <a href="spell-repertoire">spell repertoire</a>,{" "}
              <a href="#composition-spells">composition spells</a>,{" "}
              <a href="#muse">muse</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              2nd-level spells,
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#lightning-reflexes">lightning reflexes</a>,{" "}
              <a href="#signature-spells">signature spells</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              3rd-level spells,
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              4th-level spells,
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#expert-spellcaster">expert spellcaster</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              5th-level spells,
              <a href="#great-fortitude">great fortitude</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#resolve">resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#bard-feat">bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              6th-level spells,
              <a href="#bard-weapon-expertise">bard weapon expertise</a>,{" "}
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#vigilant-senses">vigilant senses</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              7th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#light-armor-expertise">light armor expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              8th-level spells,
              <a href="#ability-boost">ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#master-spellcaster">master spellcaster</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              9th-level spells,
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#greater-resolve">greater resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#bard-feat">Bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#legendary-spellcaster">legendary spellcaster</a>,{" "}
              <a href="#magnum-opus">magnum opus</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#bard-feat">bard feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Key Terms</h2>
      <p>You’ll see the following key terms in many bard class features.</p>
      <p>
        <b>Composition:</b> To cast a composition cantrip or focus spell, you
        use a type of Performance. If the spell includes a verbal component, you
        must use an auditory performance, and if it includes a somatic
        component, you must use a visual one. The spell gains all the traits of
        the performance you used. You can cast only one composition spell each
        turn, and you can have only one active at a time. If you cast a new
        composition spell, any ongoing effects from your previous composition
        spell end immediately.
      </p>
      <p>
        <b>Metamagic:</b> Actions with the metamagic trait tweak the properties
        of your spells. These actions usually come from metamagic feats. You
        must use a metamagic action directly before Casting the Spell you want
        to alter. If you use any action (including free actions and reactions)
        other than Cast a Spell directly after, you waste the benefits of the
        metamagic action. Any additional effects added by a metamagic action are
        part of the spell’s effect, not of the metamagic action itself.
      </p>
      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>
      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level you gain a number of proficiencies, representing your basic
        training. These are noted at the start of this class.
      </p>
      <h3 id="occult-spellcasting">Occult spellcasting</h3>
      <p>
        You draw upon magic from esoteric knowledge. You can cast occult spells
        using the Cast a Spell activity, and you can supply material, somatic,
        and verbal components when casting spells (see Casting Spells). Because
        you’re a bard, you can usually play an instrument for spells requiring
        somatic or material components, as long as it takes at least one of your
        hands to do so. If you use an instrument, you don’t need a{" "}
        <b>material component</b> pouch or another hand free. You can usually
        also play an instrument for spells requiring verbal components, instead
        of speaking.
      </p>
      <p>
        Each day, you can cast up to two 1st-level spells. You must know spells
        to cast them, and you learn them via the <b>spell repertoire</b> class
        feature. The number of spells you can cast each day is called your spell
        slots.
      </p>
      <p>
        As you increase in level as a bard, your number of spells per day
        increases, as does the highest level of spells you can cast, as shown on
        <b>Bard Spells</b> per Day.
      </p>
      <p>
        Some of your spells require you to attempt a spell attack roll to see
        how effective they are, or have your enemies roll against your spell DC
        (typically by attempting a saving throw). Since your key ability is
        Charisma, your spell attack rolls and spell DCs use your Charisma
        modifier. Details on calculating these statistics appear in the
        <b>Spell Attack Rolls</b> section.
      </p>
      <table>
        <thead>
          <tr>
            <th>Your level</th>
            <th>Cantrips</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>6th</th>
            <th>7th</th>
            <th>8th</th>
            <th>9th</th>
            <th>10th</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>3</td>
            <td>5</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>5</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>6</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>7</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>8</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>9</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>10</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>11</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>12</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>13</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>14</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>15</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>16</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>17</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
          </tr>
          <tr>
            <td>18</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
          </tr>
          <tr>
            <td>19</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1*</td>
          </tr>
          <tr>
            <td>20</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1*</td>
          </tr>
          <tr>
            <td colSpan={13}>
              * The <b>magnum opus</b> class feature gives you a 10th-level
              spell slot that works a bit differently from other spell slots.
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Heightening spells</h4>
      <p>
        When you get spell slots of 2nd level and higher, you can fill those
        slots with stronger versions of lower-level spells. This increases the
        spell’s level to match the spell slot. You must have a spell in your
        spell repertoire at the level you want to cast in order to heighten it
        to that level. Many spells have specific improvements when they are
        heightened to certain levels. The signature spells class feature lets
        you heighten certain spells freely.
      </p>
      <h4>Cantrips</h4>
      Some of your spells are cantrips. A cantrip is a special type of spell
      that doesn’t use spell slots. You can cast a cantrip at will, any number
      of times per day. A cantrip is automatically heightened to half your level
      rounded up—this is usually equal to the highest level of bard spell slot
      you have. For example, as a 1st-level bard, your cantrips are 1st-level
      spells, and as a 5th-level bard, your cantrips are 3rd-level spells.
      <h3 id="spell-repertoire">Spell repertoire</h3>
      <p>
        The collection of spells you can cast is called your spell repertoire.
        At 1st level, you learn two 1st-level occult spells of your choice and
        five occult cantrips of your choice. You choose these from the common
        spells from the <b>occult list</b> or from other occult spells to which
        you have access. You can cast any spell in your spell repertoire by
        using a spell slot of an appropriate spell level.
      </p>
      <p>
        You add to this spell repertoire as you increase in level. Each time you
        get a spell slot (see Bard Spells Per Day), you add a spell to your
        spell repertoire of the same level. At 2nd level, you select another
        1st-level spell; at 3rd level, you select two 2nd-level spells, and so
        on. When you add spells, you might add a higher-level version of a spell
        you already have, so you can cast a heightened version of that spell.
      </p>
      <p>
        Though you gain them at the same rate, your spell slots and the spells
        in your spell repertoire are separate. If a feat or other ability adds a
        spell to your spell repertoire, it wouldn’t give you another spell slot,
        and vice versa.
      </p>
      <h4>Swapping spells in your repertoire</h4>
      <p>
        As you gain new spells in your repertoire, you might want to replace
        some of the spells you previously learned. Each time you gain a level
        and learn new spells, you can swap out one of your old spells for a
        different spell of the same level. This spell can be a cantrip. You can
        also swap out spells by retraining during downtime.
      </p>
      <h3 id="composition-spells">Composition spells</h3>
      <p>
        You can infuse your performances with magic to create unique effects
        called compositions. <b>Compositions</b> are a special type of spell
        that often require you to use the Performance skill when casting them.
        Composition spells are a type of focus spell. It costs 1 Focus Point to
        cast a focus spell, and you start with a focus pool of 1 Focus Point.
        You refill your focus pool during your daily preparations, and you can
        regain 1 Focus Point by spending 10 minutes using the Refocus activity
        to perform, write a new composition, or otherwise engage your muse.
      </p>
      <p>
        Focus spells are automatically heightened to half your level rounded up,
        much like cantrips. Focus spells don’t require spell slots, and you
        can’t cast them using spell slots. Taking feats can give you more focus
        spells and increase the size of your focus pool, though your focus pool
        can never hold more than 3 Focus Points. The full rules for focus spells
        appear in the <a href="#focus-spells">Focus Spells</a> section.
      </p>
      <p>
        You learn the <b>counter performance</b> composition spell, protecting
        against auditory and visual effects.
      </p>
      <h4>Composition cantrips</h4>
      <p>
        Composition cantrips are special composition spells that don’t cost
        Focus Points, so you can use them as often as you like. Composition
        cantrips are in addition to the cantrips you choose from the occult
        list. Generally, only feats can give you more composition cantrips.
        Unlike other cantrips, you can’t swap out composition cantrips gained
        from bard feats at a later level, unless you swap out the specific feat
        via <b>retraining</b>.
      </p>
      <p>
        You learn the inspire courage composition cantrip, which boosts your
        allies’ attacks, damage, and defense against fear.
      </p>
      <h3 id="muse">Muses</h3>
      <p>
        As a bard, you select one muse at 1st level. This muse leads you to
        great things, and might be a physical creature, a deity, a philosophy,
        or a captivating mystery.
      </p>
      <BaseAccordion
        title="Enigma"
        number={1}
        text={
          <>
            <p>
              Your muse is a mystery, driving you to uncover the hidden secrets
              of the multiverse. If your muse is a creature, it might be a
              dragon or otherworldly being; if a deity, it might be Irori or
              Nethys. You gain the Bardic Lore feat and add true strike to your
              spell repertoire.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Maestro"
        number={2}
        text={
          <>
            <p>
              Your muse is a virtuoso, inspiring you to greater heights. If it’s
              a creature, it might be a performance-loving creature such as a
              choral angel or lillend azata; if a deity, it might be Shelyn. As
              a bard with a maestro muse, you are an inspiration to your allies
              and confident of your musical and oratorical abilities. You gain
              the Lingering Composition feat and add soothe to your spell
              repertoire.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Polymath"
        number={3}
        text={
          <>
            <p>
              Your muse is a jack of all trades, flitting between skills and
              pursuits. If it’s is a creature, it might be an eclectic creature
              like a fey; if a deity, it might be Desna or Calistria. As a bard
              with a polymath muse, you are interested in a wide array of topics
              but rarely dedicated to any one, and you rarely make up your
              mind—you want to try everything. You gain the Versatile
              Performance feat and add unseen servant to your spell repertoire.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Warrior"
        number={4}
        text={
          <>
            <p>
              <i>Advanced Player's Guide</i>
              The battlefield is your stage, the clang of steel, your song. Your
              muse engages in countless battles, whether reveling in combat or
              resigned to its necessity. If your muse is a creature, it might be
              an otherworldly soldier, such as a planetar, archon, cornugon, or
              purrodaemon. If it’s a deity, it might be Gorum. As a bard with a
              warrior muse, you train for battle in addition to performance, and
              you prepare your allies for the dangers of battle. You might even
              wade into the thick of things with them. You gain the Martial
              Performance feat and add fear to your spell repertoire.
            </p>
          </>
        }
      />
      <h3 id="bard-feat">Bard Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a bard class feat.
      </p>
      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. Skill
        feats can be found in Chapter 5 and have the skill trait. You must be
        trained or better in the corresponding skill to select a skill feat.
      </p>
      <h3 id="general-feat">General Feats</h3>
      <p>
        At 3rd level and every 4 levels thereafter, you gain a general feat.
        General feats are listed in Chapter 5.
      </p>
      <h3 id="lighting-reflexes">Lighting reflexes</h3>
      <p>
        Your reflexes are lightning fast. Your proficiency rank in Reflex saves
        increases to expert.
      </p>
      <h3 id="signature-spells">Signature spells</h3>
      <p>
        Experience allows you to cast some spells more flexibly. For each spell
        level you have access to, choose one spell of that level to be a
        signature spell. You don’t need to learn heightened versions of
        signature spells separately; instead, you can heighten these spells
        freely. If you’ve learned a signature spell at a higher level than its
        minimum, you can also cast all its lower-level versions without learning
        those separately. If you swap out a signature spell, you can choose a
        replacement signature spell of the same spell level at which you learned
        the previous spell. You can also retrain specifically to change a
        signature spell to a different spell of that level without swapping any
        spells; this takes as much time as retraining a spell normally does.
      </p>
      <h3 id="skill-increase">Skill Increases</h3>
      <p>
        At 3rd level and every 2 levels thereafter, you gain a skill increase.
        You can use this increase either to increase your proficiency rank to
        trained in one skill you’re untrained in, or to increase your
        proficiency rank in one skill in which you’re already trained to expert.
      </p>
      <p>
        At 7th level, you can use skill increases to increase your proficiency
        rank to master in a skill in which you’re already an expert, and at 15th
        level, you can use them to increase your proficiency rank to legendary
        in a skill in which you’re already a master.
      </p>
      <h3 id="ability-boosts">Ability Boosts</h3>
      <p>
        At 5th level and every 5 levels thereafter, you boost four different
        ability scores. You can use these ability boosts to increase your
        ability scores above 18. Boosting an ability score increases it by 1 if
        it’s already 18 or above, or by 2 if it starts out below 18.
      </p>
      <h3 id="ancestry-feat">Ancestry Feats</h3>
      <p>
        In addition to the ancestry feat you started with, you gain an ancestry
        feat at 5th level and every 4 levels thereafter. The list of feats is in
        your ancestry’s entry in Chapter 2.
      </p>
      <div className="flex">
        <div className="flex-column">
          <h3 id="expert-spellcaster">Expert spellcaster</h3>
          <p>
            Your proficiency ranks for occult spell attack rolls and spell DCs
            increase to expert.
          </p>

          <h3 id="great-fortitude">Great fortitude</h3>
          <p>
            Your physique is incredibly hardy. Your proficiency rank for
            Fortitude saves increases to expert.
          </p>

          <h3 id="resolve">Resolve</h3>
          <p>
            You’ve steeled your mind with resolve. Your proficiency rank for
            Will saves increases to master. When you roll a success at a Will
            save, you get a critical success instead.
          </p>

          <h3 id="bard-weapon-expertise">Bard weapon expertise</h3>
          <p>
            You have become thoroughly adept with bardic weapons. You gain
            expert proficiency in simple weapons and unarmed attacks, plus the
            longsword, rapier, sap, shortbow, shortsword, and whip. When you
            critically succeed at an attack roll using one of these weapons or
            an unarmed attack while one of your compositions is active, you
            apply the critical specialization effect for that weapon or unarmed
            attack.
          </p>
        </div>

        <figure>
          <img src={require("../assets/img/bard_02.webp")} alt="bard example" />
        </figure>
      </div>
      <h3 id="vigilant-senses">Vigilant senses</h3>
      <p>
        Through your adventures, you’ve developed keen awareness and attention
        to detail. Your proficiency rank for Perception increases to master.
      </p>
      <h3 id="light-armor-expertise">Light armor expertise</h3>
      <p>
        You’ve learned how to dodge while wearing light or no armor. Your
        proficiency ranks for light armor and unarmored defense increase to
        expert.
      </p>
      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="weapon-specialization">Weapon specialization</h3>
          <p>
            You’ve learned how to inflict greater injuries with the weapons you
            know best. You deal 2 additional damage with weapons and unarmed
            attacks in which you are an expert. This damage increases to 3
            damage if you’re a master, and 4 damage if you’re legendary.
          </p>

          <h3 id="medium-armor-expertise">Medium armor expertise</h3>
          <p>
            You’ve learned to defend yourself better against attacks. Your
            proficiency ranks for light armor, medium armor, and unarmored
            defense increase to expert.
          </p>

          <h3 id="master-spellcaster">Master Spellcaster</h3>
          <p>
            You’ve mastered the occult. Your proficiency ranks for occult spell
            attack rolls and spell DCs increase to master.
          </p>

          <h3 id="greater-resolve">Greater resolve</h3>
          <p>
            Your unbelievable training grants you mental resiliency. Your
            proficiency rank for Will saves increases to legendary. When you
            roll a success on a Will save, you get a critical success. When you
            roll a critical failure on a Will save, you get a failure instead.
            When you roll a failure on a Will save against a damaging effect,
            you take half damage.
          </p>
        </div>

        <figure>
          <img src={require("../assets/img/bard_03.webp")} alt="Bard example" />
        </figure>
      </div>
      <h3 id="magnum-opus">Magnum Opus</h3>
      <p>
        You have tuned your spellcasting to the highest caliber. Add two common
        10th-level occult spells to your repertoire. You gain a single
        10th-level spell slot you can use to cast one of those two spells using
        bard spellcasting. You don’t gain more 10th-level spells as you level
        up, unlike other spell slots, and you can’t use 10th-level slots with
        abilities that give you more spell slots or that let you cast spells
        without expending spell slots.
      </p>
      <h3 id="legendary-spellcaster">Legendary spellcaster</h3>
      <p>
        Your command of occult magic is the stuff of legends. Your proficiency
        ranks for occult spell attack rolls and spell DCs increase to legendary.
      </p>
      <h2>Barbarian Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 7 gp, 5 sp, 2 cp.
        </li>
        <li>
          <b>Bulk:</b> 4 Bulk, 4 light.
        </li>
        <li>
          <b>Money Left Over:</b> 7 gp, 4 sp, 8 cp.
        </li>
        <li>
          <b>Armor:</b> studded leather armor.
        </li>
        <li>
          <b>Weapons:</b> dagger, rapier, sling with 20 sling bullets.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, handheld instrument.
        </li>
      </ul>
      <h2>Feats</h2>
      <p>
        At every level that you gain a bard feat, you can select one of the
        following feats. You must satisfy any prerequisites before selecting the
        feat.
      </p>
      <form>
        <label className="visually-hidden" htmlFor="search">
          Search
        </label>
        <input
          name="search"
          type="search"
          className="search"
          placeholder="Search in feats"
          onChange={filterBySearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      <div className="feat-list">
        {filteredList && Object.keys(filteredList).length === 0 ? (
          <p>No feats to show</p>
        ) : (
          filteredList &&
          filteredList.map((ClassFeat) => (
            <Feat
              key={ClassFeat.id}
              id={ClassFeat.id}
              name={ClassFeat.name}
              action={ClassFeat.action}
              tags={ClassFeat.tags}
              level={ClassFeat.level}
              feat={ClassFeat.feat}
              description={ClassFeat.description}
            />
          ))
        )}
      </div>
      <br />
      <br />
      <h2 id="focus-spells">Focus Spells</h2>
      <p>
        Bards can gain the following composition spells. This section also
        includes their composition cantrips.
      </p>
      <form>
        <label className="visually-hidden" htmlFor="search">
          Search
        </label>
        <input
          name="search"
          type="search"
          className="search"
          placeholder="Search in spells"
          onChange={filterSpellsBySearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      <div className="spell-list">
        {filteredSpellList && Object.keys(filteredSpellList).length === 0 ? (
          <p>No spells to show</p>
        ) : (
          filteredSpellList &&
          filteredSpellList.map((focusSpell) => (
            <Spell
              level={focusSpell.level}
              name={focusSpell.name}
              type={focusSpell.type}
              action={focusSpell.action}
              tags={focusSpell.tags}
              description={focusSpell.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BardPage;
