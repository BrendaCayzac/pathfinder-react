import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClericFocusSpells } from "../middleware/ClericFocusSpells";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";
import { DruidFeats } from "../middleware/DruidFeats";

const DruidPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    DruidFeats
  );

  const [filteredSpellList, setFilteredSpellList] =
    useState<Array<FocusSpell> | null>(ClericFocusSpells);
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...DruidFeats];
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
    let updatedList = [...ClericFocusSpells];
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
        <h1>Druid</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          The druid walks the wild, primordial places of the world without fear,
          harnessing the primal magic of nature and controlling it with calm
          purpose. A devotee of the wilderness, the druid finds nourishment in
          its power, allies among its creatures, and strength in its fury.
        </p>
        <figure>
          <img
            src={require("../assets/img/cleric_icon.png")}
            alt="cleric icon"
          />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Wisdom</b>
          <p>At 1st level, your class gives you an ability boost to Wisdom.</p>
        </div>
        <div className="column">
          <h2>Hit points</h2>
          <b>8 plus your Constitution modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>
      <figure className="figure-one">
        <img src={require("../assets/img/druid_01.webp")} alt="Druid image" />
      </figure>

      <h2 id="initial-proficiencies">Initial Proficiencies</h2>
      <p>
        At 1st level, you gain the listed proficiency ranks in the following
        statistics. You are untrained in anything not listed unless you gain a
        better proficiency rank in some other way.
      </p>

      <div className="featured-two">
        <h2>Perception</h2>
        <p>Trained in Perception</p>
        <h2>Saving Throws</h2>
        <ul>
          <li>Trained in Fortitude</li>
          <li>Trained in Reflex</li>
          <li>Expert in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Trained in Nature</li>
          <li>Trained in one skill determined by your druidic order</li>
          <li>
            Trained in a number of additional skills equal to 2 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Trained in simple weapons</li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in light armor</li>
          <li>Trained in medium armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Spells</h2>
        <p>Trained in primal spell attacks</p>
        <p>Trained in primal spell DCs</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You call upon the forces of nature to defeat your enemies and
            protect your allies. You cast spells that draw upon primal magic to
            protect yourself and your friends, heal their wounds, or summon
            deadly animals to fight at your side. Depending on your bond to
            nature, you might call upon powerful elemental magic or change shape
            into a terrifying beast.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You represent balance and a reasoned approach to problems, looking
            for solutions that not only are best for the natural world, but also
            allow the creatures within it to live in harmony and peace. You
            often propose compromises that allow both sides to gain what they
            truly need, even if they can’t have all that they desire.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            Your nature skills are invaluable. You track down enemies, navigate
            the wilderness, and use spells to detect magical auras around you.
            You might even ask wild animals to lend their extraordinary senses
            and scouting abilities to your group.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You might craft magic items or potions. Alternatively, your tie to
            nature might lead you to tend a wilderness area, befriending beasts
            and healing the wounds caused by civilization. You might even teach
            sustainable farming and animal husbandry techniques that allow
            others to subsist off the land without harming the natural balance.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>Have a deep and meaningful respect for the power of nature.</li>
        <li>
          Be in constant awe of the natural world, eager to share it with others
          but wary of their influence upon it.
        </li>
        <li>
          Treat plants and animals as allies, working with them to reach your
          goals.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          View you as a representative of nature, and are sure you can control
          it.
        </li>
        <li>
          Assume you’re a recluse who avoids society and cities and prefers to
          live in the wild.
        </li>
        <li>
          Consider you a mystic, similar to a priest, but answering only to the
          forces of nature.
        </li>
      </ul>

      <h2>Class Features</h2>
      <p>
        You gain these abilities as a druid. Abilities gained at higher levels
        list the level at which you gain them next to the features’ names.
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
              <a href="#primal-spellcasting">primal spellcasting</a>,{" "}
              <a href="#anathema">anathema</a>,{" "}
              <a href="#druidic-language">druidic language</a>,{" "}
              <a href="#druidic-order">druidic order</a>,{" "}
              <a href="#shield-block">shield block</a>,{" "}
              <a href="#wild-empathy">shield block</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              2nd-level spells,
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#alertness">alertness</a>,{" "}
              <a href="#great-fortitude">great fortitude</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              3rd-level spells,
              <a href="#ability-boosts">ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#lightning-reflexes">lightning reflexes</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              4th-level spells,
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#expert-spellcaster">expert spellcaster</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              5th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#druid-feat">druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              6th-level spells,
              <a href="#druid-weapon-expertise">druid weapon expertise</a>, ,{" "}
              <a href="#general-feat">general feat</a>, ,{" "}
              <a href="#resolve">resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              7th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#medium-armor-expertise">medium armor expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              8th-level spells,
              <a href="#ability-boost">ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#master-spellcasterf">master spellcaster</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              9th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#druid-feat">Druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#legendary-spellcaster">legendary spellcaster,</a>,{" "}
              <a href="#primal-hierophant">primal hierophant</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#druid-feat">druid feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Key Terms</h2>
      <p>You’ll see the following key term in many druid class features.</p>
      <p>
        <b>Metamagic:</b> Actions with the metamagic trait tweak the properties
        of your spells. These actions usually come from metamagic feats. You
        must use the metamagic action directly before Casting the Spell you want
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
        training. These proficiencies are noted at the start of this class.
      </p>

      <figure className="figure-one">
        <img src={require("../assets/img/druid_02.webp")} alt="Druid image" />
      </figure>

      <h3 id="primal-spellcasting">Primal Spellcasting</h3>
      <p>
        The power of the wild world flows through you. You can cast primal
        spells using the Cast a Spell activity, and you can supply material,
        somatic, and verbal components when casting spells (see{" "}
        <b>Casting Spells</b>). Because you’re a druid, you can usually hold a
        primal focus (such as
        <b>holly and mistletoe</b>) for spells requiring material components
        instead of needing to use a <b>material component pouch</b>.
      </p>
      <p>
        At 1st level, you can prepare two 1st-level spells and five cantrips
        each morning from the common spells on the primal spell list in this
        source, or from other primal spells to which you gain access and learn
        via Learn a Spell. Prepared spells remain available to you until you
        cast them or until you prepare your spells again. The number of spells
        you can prepare is called your spell slots.
      </p>
      <p>
        As you increase in level as a druid, the number of spells you can
        prepare each day increases, as does the highest level of spell you can
        cast, as shown in Table 3–11: Druid Spells per Day.
      </p>
      <p>
        Some of your spells require you to attempt a spell attack roll to see
        how effective they are, or have your enemies roll against your spell DC
        (typically by attempting a saving throw). Since your key ability is
        Wisdom, your spell attack rolls and spell DCs use your Wisdom modifier.
        Details on calculating these statistics appear in the Spell Attack Rolls
        section.
      </p>

      <h4>Heightening spells</h4>
      <p>
        When you gain spell slots of 2nd level and higher, you can fill those
        slots with stronger versions of lower-level spells. This increases the
        spell’s level, heightening it to match the spell slot. Many spells have
        specific improvements when they are heightened to certain levels.
      </p>

      <h4>Cantrips</h4>
      <p>
        A cantrip is a special type of spell that doesn’t use spell slots. You
        can cast a cantrip at will, any number of times per day. A cantrip is
        always automatically heightened to half your level rounded up—this is
        usually equal to the highest level of druid spell slot you have. For
        example, as a 1st-level druid, your cantrips are 1st-level spells, and
        as a 5th-level druid, your cantrips are 3rd-level spells.
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
              * The primal hierophant class feature gives you a 10th-level spell
              slot that works a bit differently from other spell slots.
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="anathema">Anathema</h3>
      <p>
        As stewards of the natural order, druids find affronts to nature
        anathema. If you perform enough acts that are anathema to nature, you
        lose your magical abilities that come from the druid class, including
        your primal spellcasting and the benefits of your order. These abilities
        can be regained only if you demonstrate your repentance by conducting an
        atone ritual.
      </p>
      <p>The following acts are anathema to all druids:</p>
      <ul>
        <li>Using metal armor or shields.</li>
        <li>Despoiling natural places.</li>
        <li>Teaching the Druidic language to non-druids.</li>
      </ul>
      <p>
        Each druidic order also has additional anathema acts, detailed in the
        order’s entry.
      </p>

      <h3 id="druidic-language">Druidic language</h3>
      <p>
        You know Druidic, a secret language known to only druids, in addition to
        any languages you know through your ancestry. Druidic has its own
        alphabet. Teaching the Druidic language to non-druids is anathema.
      </p>

      <h3 id="druidic-order">Druidic order</h3>
      <p>
        Upon becoming a druid, you align yourself with a druidic order, which
        grants you a class feat, an order spell (see below), and an additional
        trained skill tied to your order. While you’ll always be a member of
        your initial order, it’s not unheard of for a druid to request to study
        with other orders in search of greater understanding of the natural
        world, and PC druids are among the most likely to blend the powers of
        different orders.
      </p>
      <p>
        Order spells are a type of focus spell. It costs 1 Focus Point to cast a
        focus spell, and you start with a focus pool of 1 Focus Point. You
        refill your focus pool during your daily preparations, and you can
        regain 1 Focus Point by spending 10 minutes using the Refocus activity
        to commune with local nature spirits or otherwise tend to the wilderness
        in a way befitting your order.
      </p>
      <p>
        Focus spells are automatically heightened to half your level rounded up,
        much like cantrips. Focus spells don’t require spell slots to cast, and
        you can’t cast them using spell slots. Selecting druid feats can give
        you more focus spells and increase the size of your focus pool, though
        your focus pool can never hold more than 3 points. The full rules for
        focus spells appear in Chapter 7.
      </p>

      <BaseAccordion
        title="Animal"
        number={1}
        text={
          <>
            <p>
              You have a strong connection to beasts, and you are allied with a
              beast companion. You are trained in Athletics. You also gain the
              Animal Companion druid feat. You gain the heal animal order spell.
              Committing wanton cruelty to animals or killing animals
              unnecessarily is anathema to your order. (This doesn’t prevent you
              from defending yourself against animals or killing them cleanly
              for food.)
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Leaf"
        number={2}
        text={
          <>
            <p>
              You revere plants and the bounty of nature, acting as both a
              gardener and warden for the wilderness, teaching sustainable
              techniques to communities, and helping areas regrow after
              disasters or negligent humanoid expansion. You are trained in
              Diplomacy. You also gain the Leshy Familiar druid feat. You gain
              the goodberry order spell, and you increase the number of Focus
              Points in your focus pool by 1. Committing wanton cruelty to
              plants or fungi or killing them unnecessarily is anathema to your
              order. (This doesn’t prevent you from defending yourself against
              plants or fungi or harvesting them when necessary for survival.)
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Storm"
        number={3}
        text={
          <>
            <p>
              You carry the fury of the storm within you, channeling it to
              terrifying effect and riding the winds through the sky. You are
              trained in Acrobatics. You also gain the Storm Born druid feat.
              You gain the tempest surge order spell, and you increase the
              number of Focus Points in your focus pool by 1. Polluting the air
              or allowing those who cause major air pollution or climate shifts
              to go unpunished is anathema to your order. (This doesn’t force
              you to take action against merely potential harm to the
              environment or to sacrifice yourself against an obviously superior
              foe.)
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Wild"
        number={4}
        text={
          <>
            <p>
              The savage, uncontrollable call of the natural world infuses you,
              granting you the ability to change your shape and take on the
              ferocious form of a wild creature. You are trained in
              Intimidation. You also gain the Wild Shape druid feat. You gain
              the wild morph order spell. Becoming fully domesticated by the
              temptations of civilization is anathema to your order. (This
              doesn’t prevent you from buying and using processed goods or
              staying in a city for an adventure, but you can never come to rely
              on these conveniences or truly call such a place your permanent
              home.)
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Flame"
        number={4}
        text={
          <>
            <p>
              <i>Secrets of Magic</i>
              <br />
              <br />
              You feel a kinship with flames and can use them for succor and
              destruction. You’re trained in Acrobatics. You also gain the Fire
              Lung druid feat. You gain the wildfire order spell. Allowing
              unnatural fires to spread or preventing natural fires from
              occurring in a way that harms the environment are anathema to your
              order (this doesn’t prevent you from using fire destructively or
              force you to combat a controlled or natural fire).
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Stone"
        number={5}
        text={
          <>
            <p>
              <i>Secrets of Magic</i>
              <br />
              <br />
              You’re as enduring as stone, and you take comfort in its steadfast
              presence, both natural and worked. You’re trained in Crafting. You
              also gain the Steadying Stone druid feat. You gain the crushing
              ground order spell. Poisoning or polluting the land and heedlessly
              carving the earth to plunder its natural resources are anathema to
              your order (this doesn’t prevent you from responsibly digging or
              mining).
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Wave"
        number={5}
        text={
          <>
            <p>
              <i>Secrets of Magic</i>
              <br />
              <br />
              Water is the source of life, and you’ve learned to shape how it
              flows. You’re trained in Medicine. You also gain the Shore Step
              druid feat. You gain the rising surf order spell. Polluting water
              or allowing those who pollute water sources to go unpunished is
              anathema to your order (this doesn’t force you to take action
              against potential water pollution or to sacrifice yourself against
              an obviously superior foe).
            </p>
          </>
        }
      />

      <h3 id="shield-block">Shield Block</h3>
      <p>
        You gain the Shield Block general feat, a reaction that lets you reduce
        damage with your shield.
      </p>

      <h3 id="wild-empathy">Wild Empathy</h3>
      <p>
        You have a connection to the creatures of the natural world that allows
        you to communicate with them on a rudimentary level. You can use
        Diplomacy to Make an Impression on animals and to make very simple
        Requests of them. In most cases, wild animals will give you time to make
        your case.
      </p>

      <h3 id="druid-feat">Druid Feats</h3>
      <p>
        At 2nd level and every even-numbered level, you gain a druid class feat.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. Skill
        feats appear in Chapter 5 and have the skill trait. You must be trained
        or better in the corresponding skill to select a skill feat.
      </p>

      <h3 id="general-feat">General Feats</h3>
      <p>
        At 3rd level and every 4 levels thereafter, you gain a general feat.
        General feats are listed in Chapter 5.
      </p>

      <h3 id="alertness">Alertness</h3>
      <p>
        Experience has made you increasingly aware of threats around you, and
        you react more quickly to danger. Your proficiency rank for Perception
        increases to expert.
      </p>

      <h3 id="skill-increase">Skill Increases</h3>
      <p>
        At 3rd level and every 2 levels thereafter, you gain a skill increase.
        You can use this increase to either become trained in one skill you’re
        untrained in, or become an expert in one skill in which you’re already
        trained.
      </p>
      <p>
        You can use any of these skill increases you gain at 7th level or higher
        to become a master in a skill in which you’re already an expert, and any
        of these skill increases you gain at 15th level or higher to become
        legendary in a skill in which you’re already a master.
      </p>

      <h3 id="ability-boosts">Ability Boosts</h3>
      <p>
        At 5th level and every 5 levels thereafter, you boost four different
        ability scores. You can use these ability boosts to increase your
        ability scores above 18. Boosting an ability score increases it by 1 if
        it’s already 18 or above, or by 2 if it starts out below 18.
      </p>

      <h3 id="great-fortitude">Great fortitude</h3>
      <p>
        Your physique is incredibly hardy. Your proficiency rank for Fortitude
        saves increases to expert.
      </p>

      <h3 id="ancestry-feat">Ancestry Feats</h3>
      <p>
        In addition to the ancestry feat you started with, you gain an ancestry
        feat at 5th level and every 4 levels thereafter. The list of ancestry
        feats available to you can be found in your ancestry’s entry in Chapter
        2.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="lightning-reflexes">Lightning Reflexes</h3>
          <p>
            Your reflexes are lightning fast. Your proficiency rank for Reflex
            saves increases to expert.
          </p>

          <h3 id="expert-spellcaster">Expert spellcaster</h3>
          <p>
            Your command of primal forces has deepened, empowering your spells.
            Your proficiency ranks for primal spell attack rolls and spell DCs
            increase to expert.
          </p>

          <h3 id="druid-weapon-expertis">Druid weapon expertise</h3>
          <p>
            You have become thoroughly familiar with the weapons of your trade.
            Your proficiency ranks for all simple weapons and unarmed attacks
            increase to expert.
          </p>

          <h3 id="resolve">Resolve</h3>
          <p>
            You’ve steeled your mind with incredible resolve. Your proficiency
            rank for Will saves increases to master. When you roll a success at
            a Will save, you get a critical success instead.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/druid_03.webp")}
            alt="druid example"
          />
        </figure>
      </div>

      <h3 id="medium-armor-expertise">Medium Armor Expertise</h3>
      <p>
        You’ve learned to defend yourself better against attacks. Your
        proficiency ranks for light armor, medium armor, and unarmored defense
        increase to expert.
      </p>

      <h3 id="weapon-specialization">Weapon specialization</h3>
      <p>
        You’ve learned how to inflict greater injuries with the weapons you know
        best. You deal 2 additional damage with weapons and unarmed attacks in
        which you are an expert. This damage increases to 3 if you’re a master,
        and to 4 if you’re legendary.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="master-spellcaster">Master spellcaster</h3>
          <p>
            Primal magic answers your command. Your proficiency ranks for primal
            spell attack rolls and spell DCs increase to master.
          </p>

          <h3 id="legendary-spellcaster">Legendary Spellcaster</h3>
          <p>
            You have developed an unparalleled rapport with the magic of nature.
            Your proficiency ranks for primal spell attack rolls and spell DCs
            increase to legendary.
          </p>

          <h3 id="primal-hierophant">Primal hierophant</h3>
          <p>
            You command the most potent forces of primal magic and can cast a
            spell of truly incredible power. You gain a single 10th-level spell
            slot and can prepare a spell in that slot using primal spellcasting.
            You can’t use this spell slot for abilities that let you cast spells
            without expending spell slots or that give you more spell slots. You
            don’t gain more 10th-level spells as you level up, though you can
            take the Hierophant’s Power feat to gain a second slot.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/druid_04.webp")}
            alt="druid example"
          />
        </figure>
      </div>

      <h2>Druid Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 4 gp, 4 sp.
        </li>
        <li>
          <b>Bulk:</b> 4 Bulk, 4 light.
        </li>
        <li>
          <b>Money Left Over:</b> 10 gp, 6 sp.
        </li>
        <li>
          <b>Armor:</b> leather armor.
        </li>
        <li>
          <b>Weapon:</b> 4 javelins, longspear.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, holly and mistletoe.
        </li>
        <li>
          <b>Options</b> healer’s tools (5 gp).
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
        At every level that you gain a druid feat, you can select one of the
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
      <p>Druids can gain the following order spells.</p>
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
              key={focusSpell.id}
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

export default DruidPage;
