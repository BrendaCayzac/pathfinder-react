import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClericFeats } from "../middleware/ClericFeats";
import { ChampionFocusSpells } from "../middleware/ChampionFocusSpells";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";

const ClericPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    ClericFeats
  );

  const [filteredSpellList, setFilteredSpellList] =
    useState<Array<FocusSpell> | null>(ChampionFocusSpells);
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...ClericFeats];
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
    let updatedList = [...ChampionFocusSpells];
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
        <h1>Cleric</h1>
        <i>Core Rulebook, Pathfinder Primer</i>
        <p className="introduction">
          The cleric is dedicated to the worship of a single deity and draws
          divine magic from this devotion. Clerics can be vastly different
          depending on who they worship, and whether they’re cloistered clerics
          who pursue one of their deity’s domains or war priests who serve as
          the sword arm of their god.
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
        <img src={require("../assets/img/cleric_01.webp")} alt="Cleric image" />
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
          <li>Trained in Religion</li>
          <li>Trained in one skill determined by your choice of deity</li>
          <li>
            Trained in a number of additional skills equal to 2 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Trained in simple weapons</li>
          <li>
            Trained in the favored weapon of your deity. If your deity’s favored
            weapon is uncommon, you also gain access to that weapon.
          </li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Untrained in all armor, though your doctrine might alter this</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Spells</h2>
        <p>Trained in divine spell attacks</p>
        <p>Trained in divine spell DCs</p>
      </div>
      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            If you’re a warpriest, you balance between casting spells and
            attacking with weapons—typically the favored weapon of your deity.
            If you’re a cloistered cleric, you primarily cast spells. Most of
            your spells can boost, protect, or heal your allies. Depending on
            your deity, you get extra spells to heal your allies or harm your
            enemies.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You might make diplomatic overtures or deliver impressive speeches.
            Because you’re wise, you also pick up on falsehoods others tell.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You detect nearby magic and interpret any religious writing you come
            across. You might also concentrate on a protective spell for your
            allies in case of attack. After a battle or hazard, you might heal
            anyone who was hurt.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You might perform services at a temple, travel to spread the word of
            your deity, research scripture, celebrate holy days, or even found a
            new temple.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>
          Visit the temples and holy places sacred to your faith, and have an
          immediate affinity with other worshippers of your deity.
        </li>
        <li>
          Know the teachings of your religion’s holy texts and how they apply to
          a dilemma.
        </li>
        <li>
          Cooperate with your allies, provided they don’t ask you to go against
          divine will.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Find your devotion impressive, even if they don’t understand it.
        </li>
        <li>Expect you to heal their wounds.</li>
        <li>Rely on you to interact with other religious figures.</li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as a cleric. Abilities gained at higher levels
        list requisite levels next to their names.
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
              <a href="#deity">deity</a>,{" "}
              <a href="divine-spellcasting">divine spellcasting</a>,{" "}
              <a href="#divine-font">divine font</a>,{" "}
              <a href="#doctrine">doctrine</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              2nd-level spells,
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#second-doctrine">second doctrine</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
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
              <a href="#alertness">alertness</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              4th-level spells,
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#third-doctrine">third doctrine</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              5th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#resolve">resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#cleric-feat">cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              6th-level spells,
              <a href="#fourth-doctrine">fourth doctrine</a>, ,{" "}
              <a href="#general-feat">general feat</a>, ,{" "}
              <a href="#lightning-reflexes">lightning reflexes</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              7th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#divine-defense">divine defense</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              8th-level spells,
              <a href="#ability-boost">ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#fifth \-doctrine">fifth doctrine</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>

          <tr>
            <td>16</td>
            <td>
              <a href="#cleric-feat">Cleric feat</a>,{" "}
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
              <a href="#cleric-feat">Cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#final-doctrine,"> Final doctrine,</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#miraculous-spell">miraculous spell</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#cleric-feat">cleric feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Key Terms</h2>
      <p>You’ll see the following term in many cleric class features.</p>
      <p>
        <b>Metamagic:</b> These actions tweak your spells. You must use a
        metamagic action directly before Casting the Spell you want to alter. If
        you use any action (including free actions and reactions) other than
        Cast a Spell directly after, you waste the benefits of the metamagic
        action. Effects added by a metamagic action are part of the spell’s
        effect, not of the metamagic action.
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training, noted at the start of this class.
      </p>

      <h3 id="deity">Deity</h3>
      <p>
        As a cleric, you are a mortal servitor of a deity you revere above all
        others. The most common deities in Pathfinder appear in the Deities
        section, along with their alignments, areas of concern, and the benefits
        you get for being a cleric of that deity. Your alignment must be one
        allowed by your deity, as listed in their entry. Your deity grants you
        the trained proficiency rank in one skill and with the deity’s favored
        weapon. If the favored weapon is uncommon, you also get access to that
        weapon.
      </p>
      <p>
        Your deity also adds spells to your spell list. You can prepare these
        just like you can any spell on the divine spell list, once you can
        prepare spells of their level as a cleric. Some of these spells aren’t
        normally on the divine list, but they’re divine spells if you prepare
        them this way.
      </p>

      <h4>Anathema</h4>
      <p>
        Acts fundamentally opposed to your deity’s alignment or ideals are
        anathema to your faith. Learning or casting spells, committing acts, and
        using items that are anathema to your deity remove you from your deity’s
        good graces.
      </p>
      <p>
        Casting spells with the evil trait is almost always anathema to good
        deities, and casting good spells is likewise anathema to evil deities;
        similarly, casting chaotic spells is anathema to lawful deities, and
        casting lawful spells is anathema to chaotic deities. A neutral cleric
        who worships a neutral deity isn’t limited this way, but their alignment
        might change over time if they frequently cast spells or use abilities
        with a certain alignment. Similarly, casting spells that are anathema to
        the tenets or goals of your faith could interfere with your connection
        to your deity. For example, casting a spell to create undead would be
        anathema to Pharasma, the goddess of death. For borderline cases, you
        and your GM determine which acts are anathema.
      </p>
      <p>
        If you perform enough acts that are anathema to your deity, or if your
        alignment changes to one not allowed by your deity, you lose the magical
        abilities that come from your connection to your deity. The class
        features that you lose are determined by the GM, but they likely include
        your <b>divine font</b> and all <b>divine spellcasting</b>. These
        abilities can be regained only if you demonstrate your repentance by
        conducting an <b>atone</b>
        ritual.
      </p>

      <h3 id="divine-spellcasting">Divine Spellcasting</h3>
      <p>
        Your deity bestows on you the power to cast divine spells. You can cast
        divine spells using the Cast a Spell activity, and you can supply
        material, somatic, and verbal components when casting spells (see
        <b>Casting Spells</b>). Because you’re a cleric, you can usually hold a
        divine focus (such as a <b>religious symbol</b>) for spells requiring
        material components instead of needing to use a{" "}
        <b>material component pouch</b>.
      </p>
      <p>
        At 1st level, you can prepare two 1st-level spells and five cantrips
        each morning from the common spells on the <b>divine spell list</b> in
        this source or from other divine spells to which you gain access and
        learn via Learn a Spell. Prepared spells remain available to you until
        you cast them or until you prepare your spells again. The number of
        spells you can prepare is called your spell slots.
      </p>
      <p>
        As you increase in level as a cleric, the number of spells you can
        prepare each day increases, as does the highest level of spell you can
        cast, as shown in Table 3–9: Cleric Spells per Day.
      </p>
      <p>
        Some of your spells require you to attempt a spell attack roll to see
        how effective they are, or your enemies to roll against your spell DC
        (typically by attempting a saving throw). Since your key ability is
        Wisdom, your spell attack rolls and spell DCs use your Wisdom modifier.
        Details on calculating these statistics appear in the{" "}
        <b>Spell Attack Rolls</b> section.
      </p>

      <h4>Heightening spells</h4>
      <p>
        When you get spell slots of 2nd level and higher, you can fill those
        slots with stronger versions of lower-level spells. This increases the
        spell’s level, heightening it to match the spell slot. Many spells have
        specific improvements when they are heightened to certain levels.
      </p>

      <h4>Cantrips</h4>
      <p>
        A cantrip is a special type of spell that doesn’t use spell slots. You
        can cast a cantrip at will, any number of times per day. A cantrip is
        always automatically heightened to half your level rounded up—this is
        usually equal to the highest level of cleric spell slot you have. For
        example, as a 1st-level cleric, your cantrips are 1st-level spells, and
        as a 5th-level cleric, your cantrips are 3rd-level spells.
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>2*</td>
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
            <td>3*</td>
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
            <td>1*^</td>
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
            <td>1*^</td>
          </tr>
          <tr>
            <td colSpan={13}>
              * Your <b>divine font</b> gives you additional <b>heal</b> or{" "}
              <b>harm</b> spells of this level. The number is equal to 1 + your
              Charisma modifier.
            </td>
          </tr>
          <tr>
            <td colSpan={13}>
              ^ The <b>miraculous spell</b> class feature gives you a 10th-level
              spell slot that works a bit differently from other spell slots.
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="divine-font">Divine Font</h3>
      <p>
        Through your deity’s blessing, you gain additional spells that channel
        either the life force called positive energy or its counterforce,
        negative energy. When you prepare your spells each day, you can prepare
        additional <b>heal</b> or <b>harm</b> spells, depending on your{" "}
        <b>deity</b>. The divine font spell your deity provides is listed in the
        Divine Font entry for your deity; if both are listed, you can choose
        between heal or harm. Once you choose, you can’t change your choice
        short of an ethical shift or divine intervention.
      </p>
      <p>
        <b>Healing Font:</b> You gain additional spell slots each day at your
        highest level of cleric spell slots. You can prepare only heal spells in
        these slots, and the number of slots is equal to 1 plus your Charisma
        modifier.
      </p>
      <p>
        <b>Harmful Font:</b> You gain additional spell slots each day at your
        highest level of cleric spell slots. You can prepare only harm spells in
        these slots, and the number of slots is equal to 1 plus your Charisma
        modifier.
      </p>

      <h3 id="doctrine">Doctrine</h3>
      <p>
        Even among followers of the same deity, there are numerous doctrines and
        beliefs, which sometimes vary wildly between clerics. At 1st level, you
        select a doctrine and gain the benefits of its first doctrine. The
        doctrines presented in this book are cloistered cleric and warpriest.
        Each doctrine grants you initial benefits at 1st level. At 3rd, 7th,
        11th, 15th, and 19th levels, you gain the benefits granted by your
        doctrine’s second, third, fourth, fifth, and final doctrines
        respectively.
      </p>

      <BaseAccordion
        title="Cloistered cleric"
        number={1}
        text={
          <>
            <p>
              You are a cleric of the cloth, focusing on divine magic and your
              connection to your deity’s domains.
            </p>
            <p>
              <b>First Doctrine (1st):</b> You gain the Domain Initiate cleric
              feat.
            </p>
            <p>
              <b>Second Doctrine (3rd):</b> Your proficiency rank for Fortitude
              saves increases to expert.
            </p>
            <p>
              <b>Third Doctrine (7th):</b> Your proficiency ranks for divine
              spell attack rolls and spell DCs increase to expert.
            </p>
            <p>
              <b>Fourth Doctrine (11th):</b> You gain expert proficiency with
              your deity’s favored weapon, simple weapons, and unarmed attacks.
              When you critically succeed at an attack roll using your deity’s
              favored weapon, you apply the weapon’s critical specialization
              effect; use your divine spell DC if necessary.
            </p>
            <p>
              <b>Fifth Doctrine (15th):</b> Your proficiency ranks for divine
              spell attack rolls and spell DCs increase to master.
            </p>
            <p>
              <b>Final Doctrine (19th):</b> Your proficiency ranks for divine
              spell attack rolls and spell DCs increase to legendary.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Warpriest"
        number={2}
        text={
          <>
            <p>
              You have trained in the more militant doctrine of your church,
              focusing on both spells and battle.
            </p>
            <p>
              <b>First Doctrine (1st):</b> You’re trained in light and medium
              armor, and you have expert proficiency in Fortitude saves. You
              gain the Shield Block general feat, a reaction to reduce damage
              with a shield. If your deity’s favored weapon is a simple weapon
              or an unarmed attack, you gain the Deadly Simplicity cleric feat.
              At 13th level, if you gain the divine defense class feature, you
              also gain expert proficiency in light and medium armor.
            </p>
            <p>
              <b>Second Doctrine (3rd):</b> You’re trained in martial weapons.
            </p>
            <p>
              <b>Third Doctrine (7th):</b> You gain expert proficiency with your
              deity’s favored weapon, simple weapons, and unarmed attacks. When
              you critically succeed at an attack roll using your deity’s
              favored weapon, you apply the weapon’s critical specialization
              effect; use your divine spell DC if necessary.
            </p>
            <p>
              <b>Fourth Doctrine (11th):</b> Your proficiency ranks for divine
              spell attack rolls and spell DCs increase to expert.
            </p>
            <p>
              <b>Fifth Doctrine (15th):</b> Your proficiency rank for Fortitude
              saves increases to master. When you roll a success at a Fortitude
              save, you get a critical success instead.
            </p>
            <p>
              <b>Final Doctrine (19th):</b> Your proficiency ranks for divine
              spell attack rolls and spell DCs increase to master.
            </p>
          </>
        }
      />

      <h3 id="cleric-feat">Cleric Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a cleric class
        feat.
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

      <h3 id="alertness">Alertness</h3>
      <p>
        You remain alert to threats around you. Your proficiency rank for
        Perception increases to expert.
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
          <h3 id="resolve">Resolve</h3>
          <p>
            You’ve steeled your mind with resolve. Your proficiency rank for
            Will saves increases to master. When you roll a success at a Will
            save, you get a critical success instead.
          </p>

          <h3 id="lightning-reflexes">Lightning reflexes</h3>
          <p>
            Your reflexes are lightning fast. Your proficiency rank for Reflex
            saves increases to expert.
          </p>

          <h3 id="divine-defense">Divine Defense</h3>
          <p>
            Your training and your deity protect you from harm. Your proficiency
            rank in unarmored defense increases to expert.
          </p>

          <h3 id="weapon-specialization">Weapon specialization</h3>
          <p>
            You’ve learned how to inflict greater injuries with your weapons.
            You deal 2 additional damage with weapons and unarmed attacks in
            which you are an expert. This damage increases to 3 if you’re a
            master, and to 4 if you’re legendary.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/cleric_02.webp")}
            alt="cleric example"
          />
        </figure>
      </div>

      <h3 id="miraculous-spells">Miraculous spell</h3>
      <p>
        You’re exalted by your deity and gain truly incredible spells. You gain
        a single 10th-level spell slot and can prepare a spell in that slot
        using divine spellcasting. You can’t use this spell slot for abilities
        that let you cast spells without expending spell slots or that give you
        more spell slots. You don’t gain more 10th-level spells as you level up,
        though you can take the Maker of Miracles feat to gain a second slot.
      </p>

      <h2>Cleric Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 2 gp, 2 sp.
        </li>
        <li>
          <b>Bulk:</b> 1 Bulk, 3 light.
        </li>
        <li>
          <b>Money Left Over:</b> 12 gp, 8 sp.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, 2 sets of caltrops , religious symbol
          (wooden).
        </li>
        <li>
          <b>Options</b> your deity’s favored weapon (see the deity entries; use
          the Price listed in this chapter), hide armor (2 gp).
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
        At each level that you gain a cleric feat, you can select one of the
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
      <p>Champions can gain the following devotion spells.</p>
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

export default ClericPage;
