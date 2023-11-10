import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat } from "../middleware/CutsomTypes";
import { psychicFeats } from "../middleware/PsychicFeats";

const PsychicPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    psychicFeats
  );

  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...psychicFeats];
    // Update list with elements containing the query
    updatedList = updatedList.filter((feats) => {
      return feats.name.indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated list
    setFilteredList(updatedList);
  };

  return (
    <div className="class">
      <header>
        <h1>Psychic</h1>
        <i>Dark Archive</i>
        <p className="introduction">
          The mind can perceive truths hidden to fine-tuned instruments, house
          more secrets than any tome, and move objects and hearts more deftly
          than any lever. By delving into both the conscious and subconscious
          aspects of your inner self, you have awoken to the might of psychic
          magic, allowing you to cast spells not through incantations or
          gestures but by the power of your will alone. While the thin line
          between your mind and reality means that a single errant thought could
          have unintended consequences for yourself and your companions, you
          know that anything is possible, if you can imagine it.
        </p>
        <figure>
          <img
            src={require("../assets/img/psychic_icon.png")}
            alt="Pyschic icon"
          />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Intelligence or Charisma</b>
          <p>
            At 1st level, your class gives you an ability boost to Intelligence
            or Charisma, as determined by your choice of subconscious mind.
          </p>
        </div>
        <div className="column">
          <h2>Hit points</h2>
          <b>6 plus your Constitution modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>

      <figure className="figure-one">
        <img
          src={require("../assets/img/psychic_01.webp")}
          alt="Psychic image"
        />
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
          <li>Trained in Occultism</li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
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
          <li>Untrained in all armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Spells</h2>
        <p>Trained in occult spell attack rolls</p>
        <p>Trained in occult spell DCs</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You rely on your collection of psychic cantrips as a mainstay,
            choosing where and when to amplify them for maximum effect. You
            weave your more conventional spells into the fray where more complex
            magic is needed, unleashing your mind’s full potential in a blaze of
            power when the time is right.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You navigate situations guided by the source of your subconscious
            power. If your power springs from your personality, you might
            maneuver with empathy and sociability; if it’s more cerebral, you
            might provide a steady logical front.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You keep your mind’s eye open for the many paranormal threats that
            those who are less sensitive might not detect. Typically, you either
            scan for magic or investigate for psychic impressions, veiled
            thoughts, and wandering spirits.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You strive to learn more about the depths of the mind, seeking out
            new spells and phenomena to uncover, knowing that as you gain a
            deeper understanding of yourself, you can access more of the power
            within. You test the limits of your adaptability by retraining to
            fit your evolving understanding of your potential.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>
          Show a preference for learning, meditation, dreams, or other
          intangible manifestations of thought over the immediacy of the
          physical world.
        </li>
        <li>
          Learn new things about yourself, just when you thought you knew it
          all.
        </li>
        <li>
          Think of your psychic magic as so much a part of you that you use it
          even when normal methods suffice, perhaps preferring to communicate
          via mental messages or levitating an object to a companion at the
          opposite end of a table.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Are awed by your mental abilities, especially when your psyche is
          unleashed.
        </li>
        <li>
          Have difficulty understanding that the magic you perform with your
          mind comes from the same source as more conventional spellcasting.
        </li>
        <li>
          Wonder if you might be a monster in disguise, possessed by spirits,
          chosen by the gods, or have some other unusual reason for your strange
          powers.
        </li>
      </ul>

      <h2>Class Features</h2>
      <p>
        You gain these abilities as a psychic. Abilities gained at higher levels
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
              <a href="#psychic-spellcasting">psychic spellcasting</a>,{" "}
              <a href="#spell-repertoire">spell repertoire</a>,{" "}
              <a href="#psi-cantrips-and-psi-amps">psi cantrips and psi amps</a>
              , <a href="#unleash-psyches">Unleash Psyche</a>,{" "}
              <a href="#subconscious-mind">subconscious mind</a>,{" "}
              <a href="#conscious-mind">conscious mind</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              2nd-level spells, <a href="#general-feat">general feat</a>,{" "}
              <a href="#signature-spells">signature spells</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              3rd-level spells, <a href="#ability-boosts">ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#clarity-of-focus">clarity of focus</a>,{" "}
              <a href="#precognitive-reflexes">precognitive reflexes</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              4th-level spells, <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#expert-spellcaster">expert spellcaster</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              5th-level spells, <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#great-fortitude">great fortitude</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#psychic-feat">psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              6th-level spells, <a href="#general-feat">general feat</a>,{" "}
              <a href="#extrasensory-perception">extrasensory perception</a>,{" "}
              <a href="#walls-of-will">walls of will</a>,{" "}
              <a href="#weapon-expertise">weapon expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              7th-level spells, <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#personal-barrier">personal barrier</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>

          <tr>
            <td>14</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              8th-level spells, <a href="#ability-boost">ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#master-spellcaster">master spellcaster</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              9th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#fortress-of-will">fortress of will</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#psychic-feat">Psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#legendary-spellcaster">legendary spellcaster</a>,{" "}
              <a href="#infinite-mind">infinite mind</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#psychic-feat">psychic feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to what you get from your class at 1st level, you have the
        benefits of your selected ancestry and background.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="psychic-spellcasting">Psychic Spellcasting</h3>
      <p>
        You access the vast well of power that resides within your own mind,
        calling forth psychic magic with nothing but thought and will. You can
        cast occult spells using the Cast a Spell activity. You alter some of
        the standard spell components when casting spells you know from your
        psychic spellcasting. Instead of speaking, you substitute any verbal
        components with a special mental component determined by your
        subconscious mind class feature. This represents how you exert your mind
        toward your intended effect. Any of these components impart the
        concentrate trait to the spell you’re casting. You also substitute any
        material components with somatic components, though these tend to be
        simple movements of the hand or head compared to those used by other
        spellcasters. Your spells still have clear and noticeable visual and
        auditory manifestations, as normal for a spellcaster.
      </p>
      <p>
        Each day, you can cast one 1st-level spell. You must know spells to cast
        them, and you learn them via the spell repertoire class feature. The
        number of spells you can cast each day is called your spell slots.
      </p>
      <p>
        As you increase in level as a psychic, your number of spells per day
        increases, as does the highest level of spells you can cast, as shown on
        Table 2: Psychic Spells per Day.
      </p>
      <p>
        Some of your spells require you to attempt a spell attack roll to see
        how effective they are, or have your enemies roll against your spell DC
        (typically by attempting a saving throw). Since your key ability is
        determined by your subconscious mind, your spell attack rolls and spell
        DCs use the modifier for the ability stated in your subconscious mind.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h4>Heightening spells</h4>
          <p>
            When you get spell slots of 2nd level and higher, you can fill those
            slots with stronger versions of lower-level spells. This increases
            the spell’s level to match the spell slot. You must have a spell in
            your spell repertoire at the level you want to cast to heighten it
            to that level. Many spells have specific improvements when
            heightened to certain levels. The signature spells class feature
            lets you heighten certain spells freely.
          </p>

          <h4>Cantrips</h4>
          <p>
            Some of your spells are cantrips. A cantrip is a special type of
            spell that doesn’t use spell slots. You can cast a cantrip at will,
            any number of times per day. A cantrip is automatically heightened
            to half your level rounded up—this is usually equal to the highest
            level of psychic spell slot you have. For example, as a 1st-level
            psychic, your cantrips are 1st-level spells, and as a 5th-level
            psychic, your cantrips are 3rd-level spells.
          </p>
          <p>
            As a psychic, you get the ability to improve some of your cantrips
            with special benefits and psi amps. Over the course of your career,
            your choice of conscious mind class feature gives you extra
            cantrips, benefits and psi amps for cantrips, and a collection of
            unique psi cantrips.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/psychic_02.webp")}
            alt="Psychic example"
          />
        </figure>
      </div>

      <h4>Psychic Powers per Day</h4>
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
            <td>3*</td>
            <td>1</td>
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
            <td>3*</td>
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
            <td>3</td>
            <td>3*</td>
            <td>2</td>
            <td>1</td>
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
            <td>3*</td>
            <td>2</td>
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
            <td>5</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
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
            <td>3*</td>
            <td>2</td>
            <td>2</td>
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
            <td>7</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>8</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>9</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>10</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>11</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>12</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>13</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>14</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>15</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>16</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>17</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
          </tr>
          <tr>
            <td>18</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>—</td>
          </tr>
          <tr>
            <td>19</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1†</td>
          </tr>
          <tr>
            <td>20</td>
            <td>3*</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1†</td>
          </tr>
          <tr>
            <td colSpan={13}>
              * The <b>concious mind</b> gives you three additional cantrips
              with amps. One cantrip is unique to your conscious mind.
            </td>
          </tr>
          <tr>
            <td colSpan={13}>
              † The <b>infinite mind</b> class feature gives you a 10th-level
              spell slot that works a bit differently from other spell slots.
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="spell-repertoire">Spell Repertoire</h3>
      <p>
        The collection of spells you can cast is called your spell repertoire.
        At 1st level, you learn one 1st-level occult spell of your choice and
        three occult cantrips of your choice. You choose these from the common
        spells from the occult list or from other occult spells to which you
        have access. You can cast any spell in your spell repertoire by using a
        spell slot of an appropriate spell level. Your choice of conscious mind
        also grants you additional spells in your repertoire, starting with an
        additional 1st-level spell and two cantrips listed in your conscious
        mind, which you cast as psi cantrips (see below).
      </p>
      <p>
        You add to this spell repertoire as you increase in level. Each time you
        get a spell slot (see Table 2), you add a spell to your spell repertoire
        of the same level. At 2nd level, you select another 1st-level spell; at
        3rd level, you select one 2nd-level spell, and so on. When you add
        spells, you might add a higher-level version of a spell you already
        have, so you can cast a heightened version of that spell. Your conscious
        mind also adds additional spells to your repertoire as you gain spells
        of higher levels.
      </p>
      <p>
        Though you gain them at the same rate, your spell slots and the spells
        in your spell repertoire are separate. If a feat or other ability adds a
        spell to your spell repertoire, such as the spells you gain from your
        conscious mind, it wouldn’t give you another spell slot, and vice versa.
      </p>

      <h4>Swapping spells in your repertoire</h4>
      <p>
        As you gain new spells in your repertoire, you might want to replace
        some of the spells you previously learned. Each time you gain a level
        and learn new spells, you can swap out one of your old spells for a
        different spell of the same level. This spell can be a cantrip. You can
        also swap out spells by retraining during downtime.
      </p>

      <h3>Key Terms</h3>
      <p>You’ll see the following key terms in many psychic class features.</p>
      <p>
        <b>Amp:</b> Amps are special thoughtforms that modify the properties of
        your psi cantrips. You can apply an amp only to a psi cantrip, which is
        called the amped cantrip. Applying an amp to a psi cantrip costs 1 Focus
        Point and is part of the actions needed to Cast the Spell. The singular
        focus required to amp a psi cantrip means that unless otherwise noted,
        you can apply only one amp to a given psi cantrip, and you can’t apply
        both an amp and a metamagic ability to a cantrip at the same time. If
        both an amp and the amped cantrip deal damage of the same type, combine
        their damage for the purpose of resistances and weaknesses. Feats with
        the amp trait provide different amps you can apply to psi cantrips in
        place of their normal amps. If an amp has its own effect, its level is
        the same as the amped cantrip’s.
      </p>
      <p>
        <b>Amp Heightened:</b> Many amps have heightened entries similar to
        spells. Add the amp’s heightened effects when you cast the cantrip at
        that level or higher. These are in addition to any heightened effects of
        the cantrip, though some adjust the cantrip’s normal heightened entry
        (typically in the case of damage increases).
      </p>
      <p>
        <b>Mindshift:</b> An action with this trait can always be altered to use
        the raw power of your mind. When you take this action, you can choose to
        replace any damage it deals with mental damage, give it the mental
        trait, and replace any save it requires with a Will save. The action
        loses any traits matching damage types it no longer deals.
      </p>
      <p>
        <b>Psyche:</b> Your psyche must be unleashed to use abilities that have
        the psyche trait, and they end automatically when your unleashed psyche
        subsides.
      </p>

      <h3 id="psi-cantrips-and-amps">Psi Cantrips and Amps</h3>
      <p>
        The magic of your mind manifests as psi cantrips, which you can modify
        by spending Focus Points. Like other cantrips, you can cast psi cantrips
        as often as you like, and they are automatically heightened to half your
        level rounded up. Your psi cantrips are in addition to the cantrips you
        choose from the occult list as part of your psychic spellcasting.
        Generally, only feats can give you more psi cantrips. Unlike other
        cantrips, you can’t swap out psi cantrips gained from psychic feats at a
        later level, unless you swap out the specific feat via retraining. At
        1st level, you learn three psi cantrips determined by your choice of
        conscious mind; one is a unique psi cantrip and two are common cantrips,
        typically from the occult spellcasting tradition, that you always cast
        as psi cantrips. You automatically gain more psi cantrips as you
        progress in your career as a psychic.
      </p>
      <p>
        You start with a focus pool of 2 Focus Points. However, unlike other
        spellcasters, you don’t gain focus spells that cost Focus Points to
        cast. Instead, you use your Focus Points to boost or modify your psi
        cantrips by applying amps—specialized thoughtforms that alter the
        expression of your psychic power. Each of your psi cantrips has a
        special amp heading. Whenever you cast a psi cantrip, you can amp it by
        spending 1 Focus Point to add the amp effect. You can also gain
        additional amps through feats, allowing you to substitute a psi
        cantrip’s normal amp effect for another one. You choose which amp to
        use, if you choose to use any, each time you cast a psi cantrip. Unless
        otherwise noted, you can apply only one amp to a given psi cantrip.
      </p>
      <p>
        You refill your focus pool during your daily preparations, and you can
        regain Focus Points by spending 10 minutes using the Refocus activity to
        explore your mind, whether via meditation, practicing a craft or
        activity that gives you the mental space to self-reflect, or talking
        through your thoughts and feelings with yourself or another. If you’ve
        spent Focus Points only to amp psi cantrips or fuel psychic abilities
        since the last time you Refocused, you regain 2 Focus Points when you
        Refocus, up to your maximum of 2. If you’ve spent Focus Points on focus
        spells or abilities other than those from the psychic class (for
        instance, to cast a focus spell you gained from an archetype), you
        regain only 1 Focus Point.
      </p>

      <h3 id="unleash-psyche">Unleash psyche</h3>
      <p>
        When one thins the barrier between their inner mind and the outer world,
        one can unleash true psychic power. However, the mind wasn’t meant to
        tap its full strength for long, leading to backlash once your unleashed
        psyche ends.
      </p>

      <Spell
        name="Unleash psyche"
        action="one_action"
        tags={["psychic"]}
        description={
          <>
            <p>
              <b>Trigger</b> Your turn begins.
              <br />
              <span className="frequency">
                <b>Requirements</b> You’re in an encounter, you Cast a Spell on
                your previous turn, and you aren’t stupefied.
              </span>
            </p>
            <p>
              You call on the depths of your mind and let psychic power flood
              through. Your Psyche remains Unleashed for 2 rounds or until your
              fall unconscious, whichever comes first. You can’t voluntarily
              quell your unleashed psyche. While your Psyche is Unleashed, the
              following effects occur.
            </p>
            <ul>
              <li>
                You’re constantly surrounded by the visual manifestation of your
                psychic magic.
              </li>
              <li>
                When you cast a damaging spell, you gain a status bonus to its
                damage equal to double the spell’s level. This applies only to
                spells that don’t have a duration and that you cast using
                psychic spellcasting.
              </li>
              <li>You can use actions that have the psyche trait.</li>
            </ul>
            <p>
              After your unleashed psyche subsides, your mind must recover from
              the strain of channeling its full power. You can’t use Unleash
              Psyche again for 2 rounds, and you’re stupefied 1 for 2 rounds.
            </p>
          </>
        }
      />

      <h3 id="subconcious-mind">Subconcious mind</h3>
      <p>
        Thaleon SUBCONSCIOUS MIND A psychic’s power is born in the depths of
        their psyche, far from the surface. Your subconscious mind might
        represent the way your power comes to you naturally, or it may be a
        framework you use to safely access the infinite potential of your mind.
        Either way, your subconscious mind fundamentally shapes how you access
        and wield psychic magic. Choose a subconscious mind from the options
        starting in the Subconcious Mind section, or options from other sources
        to which you have access. This choice will determine your key ability,
        special spellcasting components you use, and an action you can take
        while you have Unleashed your Psyche. The following options are
        presented in the Dark Archive.
      </p>
      <p>
        <b>Emotional Acceptance (Cha):</b> Throwing yourself headlong into your
        emotions is what lets you access your power.
      </p>
      <p>
        <b>Gathered Lore (Int):</b> Tutors taught you specific axioms and
        lessons to help you harness your mind.
      </p>
      <p>
        <b>Precise Discipline (Int):</b> Meticulously aligning your thoughts
        brings your mental power into reality.
      </p>
      <p>
        <b>Wandering Reverie (Cha):</b> Your imagination fuels your magic
        through instinct and free association.
      </p>

      <h4>Subconcious mind</h4>
      <p>
        The core of how you cast spells comes from the subconscious portions of
        your mind. Because you cast spells using the power of your subconscious
        mind, you replace verbal components of spells with thought components.
        Thought components add the concentrate trait to the spell like verbal
        components do, but they don’t require you to speak. Details of each
        subconscious mind’s thought components appear in its entry. You select
        your subconscious mind at 1st level, and it determines the following.
      </p>
      <p>
        <b>Key Ability</b> You gain an ability boost to your key ability score
        and use this ability modifier to determine your spell attack rolls and
        spell DCs.
      </p>
      <p>
        <b>Psyche Action</b> This is a unique ability you can use while your
        Psyche is Unleashed.
      </p>

      <BaseAccordion
        number={1}
        key={0}
        title="Emotional Acceptance"
        text={
          <>
            <p>
              The mind’s truths come not in learned words or mathematical
              formulas but in deeper feelings and sensations. Emotions unlock
              the door to your power—you might consider your heart the source of
              your strength, or you might find that the infinite complexity felt
              in a moment expresses your power more efficiently than any string
              of mystic words ever could.
            </p>
            <p>
              Your thought components are emotions. You might summon the sense
              of freedom to buoy you through the air or let fear grip your heart
              even as you plant it in another’s mind. Emotion components tend to
              impart abstract or vivid effects to your visual and auditory spell
              manifestations as well as more intangible flashes of emotion, such
              as swirls of joyous color or a sense of growing melancholy.
            </p>
            <p>
              <b>Key Ability</b> Your key ability score is Charisma.
            </p>
            <p>
              <b>Granted Cantrip</b> guidance
            </p>
            <p>
              <b>Psyche Action</b> Restore the Mind
            </p>
            <Spell
              name="Restore the mind"
              action="one_action"
              tags={[
                "psychic",
                "emotion",
                "enchantement",
                "healing",
                "mental",
                "psu=yche",
              ]}
              description={
                <>
                  <p>
                    Your unleashed psyche gives you closer connections to the
                    emotions of your allies, letting you project reassurance and
                    strength that replenishes their mind and body. Choose one of
                    the two benefits to grant one ally within 30 feet that you
                    can see. That ally is then temporarily immune for 10
                    minutes.
                  </p>
                  <ul>
                    <li>
                      The ally gains a +1 status bonus to saving throws against
                      mental effects until your psyche ends.
                    </li>
                    <li>
                      The ally regains Hit Points equal to 2 + double your
                      level.
                    </li>
                  </ul>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={2}
        key={1}
        title="Gathered lore"
        text={
          <>
            <p>
              Many psychics are self-taught, frantically improvising how to best
              control their abilities before their power overwhelms them. Not
              you. Tutored by a mentor or classically trained at a facility for
              psychic development, you’ve learned techniques and teachings for
              best harnessing the mind, cataloging each expression of psychic
              power with a specific teaching, anecdote, or phrase.
            </p>
            <p>
              Your thought components are mantras you associate with a given
              spell, which you mentally repeat as you cast. You might silently
              utter a teaching of resilience as you spin force into a barrier or
              hear the first three notes of a traveling song as you slip through
              space. Mantra components often produce runes or symbols from your
              learnings that are unique to each spell you cast, causing your
              spell manifestations to resemble those of conventional
              spellcasters to a much greater degree than those of other
              psychics.
            </p>
            <p>
              <b>Key Ability</b> Your key ability score is Intelligence.
            </p>
            <p>
              <b>Psyche Action</b> Recall the Teachings
            </p>

            <Spell
              name="Recall the teachings"
              action="one_action"
              tags={["psychic", "divination", "occult", "psyche"]}
              description={
                <>
                  <p>
                    The heightened power of your psyche lets you recall every
                    lesson you’ve ever learned. You search your mind for the
                    right teaching, which at first seems cryptic but comes into
                    clarity when it’s most relevant. Until the start of your
                    next turn, you count as having prepared to Aid all allies
                    within 30 feet of you. If you use the Aid reaction to help
                    one of them during that time, you roll an Occultism check
                    for Aid as you recall a lesson to help them. Most lessons
                    take the form of short axioms, parables, or sayings, meaning
                    that conveying them to your ally usually grants your Aid
                    reaction the auditory and linguistic traits.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={3}
        key={2}
        title="Precise Discipline"
        text={
          <>
            <p>
              Determine intended outcome. Align thoughts. Identify and resolve
              distractions. Manifest. Intentional focus is the key to unleashing
              your abilities, whether that’s because your power naturally tends
              to precise, discrete effects, or because you’ve adopted strict
              discipline to ensure your mind can change the world only when you
              intend it to.
            </p>
            <p>
              Your thought components are calculations you make to determine the
              forces you need to call upon. Perhaps you mentally weigh the mass
              of an object against the force of gravity to levitate it or you
              might determine exactly how much energy is needed for an object to
              combust. Calculation components tend to impart ordered visual and
              auditory effects to your spell manifestation, such as regular
              tessellations of light, mathematical spirals, or harmonic tones.
            </p>
            <p>
              <b>Key Ability</b> Your key ability score is Intelligence.
            </p>
            <p>
              <b>Psyche Action</b> Calculate Threats
            </p>

            <Spell
              name="Calculate threats"
              action="one_action"
              tags={["psychic", "mental", "psyche"]}
              description={
                <>
                  <p>
                    Your subconscious automatically calculates vectors and
                    forces when your mind is unleashed, showing you the likely
                    path of incoming attacks to avoid. You gain a +2
                    circumstance bonus to AC and Reflex saves until the
                    beginning of your next turn.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={4}
        key={3}
        title="Wandering Reverie"
        text={
          <>
            <p>
              The subconscious is by definition buried below the surface. Thus,
              only by stripping away the clamor and interference of everyday
              thought can you bring this more fundamental part of your mind to
              bear. Whether through sleep, self-hypnosis, or special exercises
              to empty your mind, you’ve found a way to access a deeper, more
              chaotic state of free association that better channels your
              psychic power.
            </p>
            <p>
              Your thought components come from your imagination, images, and
              sensations your mind freely associates. You might have a passing
              daydream of small creatures bringing you an object as you
              telekinetically attract it or you may blink to find you’ve
              teleported to your desired location. Spell manifestations from
              imagination components have surreal or indistinct qualities, and
              the exact details fade quickly from observers’ memory, as
              sensations from a dream.
            </p>
            <p>
              <b>Key Ability</b> Your key ability score is Charisma.
            </p>
            <p>
              <b>Psyche Action</b> Fade into Daydreams
            </p>
            <Spell
              name="Fade into daydreams"
              action="one_action"
              tags={["psychic", "illusion", "psyche"]}
              description={
                <>
                  <p>
                    Your flights of imagination spill into the real world,
                    causing you to become indistinct, hazy, or cloaked in
                    figments. You become concealed until the start of your next
                    turn. This concealment can’t be used to Hide, as normal for
                    concealing effects that leave your location obvious.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <h3 id="concious-mind">Concious Mind</h3>
      <p>
        Whatever the subconscious source of a psychic’s power, all find that a
        specific external manifestation of their magic comes most easily to
        them. This conscious outward expression adds several additional spells
        to your spell repertoire and grants you three psi cantrips. Two of these
        cantrips are common spells, though you gain an extra benefit with them
        that other spellcasters don’t get, and the last is unique to your
        conscious mind. You also get two more unique psi cantrips at higher
        levels. Choose a conscious mind from the options starting in the
        Conscious Mind section, or options from other sources to which you have
        access. The following options are presented in this book.
      </p>
      <p>
        <b>The Distant Grasp:</b> Manipulate physical objects with telekinesis.
      </p>
      <p>
        <b>The Infinite Eye:</b> Observe the world and weaponize your knowledge.
      </p>
      <p>
        <b>The Oscillating Wave:</b> Redistribute thermal energy to create
        blazing heat and bone-chilling cold.
      </p>
      <p>
        <b>The Silent Whisper:</b> Tap into the thoughts of those around you to
        soothe or influence.
      </p>
      <p>
        <b>The Tangible Dream:</b> Weave your imagination into creations of
        force and light.
      </p>
      <p>
        <b>The Unbound Step:</b> Bend and traverse space with teleportation and
        phasing.
      </p>

      <h4>Concious mind</h4>
      <p>
        Specific spells you learn come from your conscious mind, which shapes
        the raw psychic power from your subconscious into the forms and
        phenomena that you intentionally cast. You select your conscious mind at
        1st level, and it determines the following.
      </p>
      <p>
        <b>Granted Spells</b> You automatically add the spells listed here to
        your spell repertoire, in addition to those you gain through psychic
        spellcasting. At 1st level, you gain a 1st-level spell, and you learn
        the other spells on the list as soon as you gain the ability to cast
        psychic spells of that level, learning the 2nd-level spell at 3rd level,
        the 3rd-level spell at 5th level, and so on.
      </p>
      <p>
        <b>Standard Psi Cantrips</b> These are two common cantrips you
        automatically gain at 1st level. While these are the same cantrips used
        by other spellcasters, you cast them as psi cantrips, enabling you to
        amp them for greater effect. Your mastery of psychic magic also grants
        you a passive benefit that applies every time you cast these cantrips,
        even when you haven’t amped them. These benefits apply only with
        cantrips you gain from your conscious mind; you would cast a cantrip you
        gained with your psychic spellcasting class feature, for example, as
        normal even if it appears in a different conscious mind.
      </p>
      <p>
        <b>Unique Psi Cantrips</b> These psi cantrips are unique to your
        conscious mind. You automatically gain the surface psi cantrip at 1st
        level, automatically gain the deeper psi cantrip at 6th level, and
        automatically gain the deepest psi cantrip at 10th level.
      </p>

      <BaseAccordion
        number={5}
        key={4}
        title="The Distant Grasp"
        text={
          <>
            <p>
              Motion characterizes the physical—a boulder falls, creatures move,
              the world turns. You believe the truest form of mind over matter
              is therefore to move things as well, wielding telekinesis as an
              arm that can grasp the furthest and finest of objects.
            </p>

            <p>
              <b>Granted Spells 1st:</b> kinetic ram; 2nd: telekinetic maneuver;
              3rd: levitate; 4th: fly; 5th: telekinetic haul; 6th: poltergeist’s
              fury; 7th: telekinetic bombardment; 8th: falling sky; 9th:
              implosion
            </p>
            <p>
              <b>Standard</b> Psi Cantrips mage hand and telekinetic projectile
            </p>
            <p>
              <b>Unique Psi Cantrips surface:</b> telekinetic rend; deeper:
              vector screen; deepest: dancing blade
            </p>
            <h4>Mage hand</h4>
            <p>
              Your mage hand can carry up to 1 Bulk instead of only light Bulk.
              If the spell is heightened to 3rd level or higher, its maximum
              Bulk is 2. If the spell is heightened to 7th level or higher, its
              maximum Bulk is 3. It also gains the following amp.
            </p>
            <p>
              <b>Amp</b> You create a multitude of telekinetic hands that grip
              onto a creature and move it about. Target a creature of Medium
              size or smaller with the amped spell instead of an object. You
              attempt to Shove the target in a direction of your choice, rolling
              a spell attack roll against its Fortitude DC instead of an
              Athletics check. The creature takes a –10-foot circumstance
              penalty to its Speeds until the spell ends. Starting the round
              after you Cast the Spell, the first time each round you Sustain
              the Spell, you can attempt to Shove the creature again.
            </p>
            <p>
              <b>Amp Heightened (4th)</b> You can attempt to Disarm the creature
              instead of attempting to Shove it. If you knock an item out of the
              creature’s grasp in this way, the mage hand immediately grabs it.
              Any effect of the mage hand on the creature ends, and the spell
              now carries the item, just like you had picked it up with an
              unamped mage hand.
            </p>
            <h4>Telekinetic projectile</h4>
            <p>
              Your telekinetic projectiles can fly much further away. Increase
              the range of telekinetic projectile to 60 feet. It also gains the
              following amp.
            </p>
            <p>
              <b>Amp</b> You fling objects with even more force, driving your
              opponents backwards in a hail of objects. On a success, you push
              the target 5 feet away from you, and on a critical success, you
              push the target 10 feet away from you in addition to dealing
              double damage.
            </p>
            <p>
              <b>Amp Heightened (+1)</b> The damage increases by 2d6 instead of
              by 1d6.
            </p>

            <Spell
              name="Telekinetic rend"
              action="two_action"
              tags={["uncommon", "psychic", "cantrip", "evocation"]}
              type="Cantrip 1"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal.
                    <br />
                    <b>Range</b> 60 feet.
                    <br />
                    <b>Area</b> 2 non-overlapping 5-foot bursts.
                    <br />
                    <span className="frequency">
                      <b>Saving Throw</b> basic Fortitude.
                    </span>
                  </p>
                  <p>
                    Your mind creates a violent axis of motion in a nearby
                    space. You deal your choice of 1d6 bludgeoning or 1d6
                    slashing damage to all creatures in the area, with a basic
                    Fortitude save. A creature large enough to be in more than
                    one of the bursts takes damage only once.
                  </p>
                  <p>
                    <b>Heightened (+2)</b> The damage increases by 1d6.
                  </p>
                  <p>
                    <b>Amp</b> Your thoughts expand in scope and power. The
                    bursts deal 1d6 bludgeoning damage and 1d6 slashing damage,
                    instead of the usual damage. A creature that critically
                    fails its save is also stunned 1.
                  </p>
                  <p>
                    <b>Amp Heightened (+2)</b> Both types of damage increase by
                    1d6 instead of just one. Add a third non-overlapping 5-foot
                    burst to the area.
                  </p>
                </>
              }
            />
            <Spell
              name="Vector screen"
              action="two_action"
              tags={["uncommon", "psychic", "abjuration", "cantrip"]}
              type="Cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal.
                    <br />
                    <b>Range</b> 60 feet.
                    <br />
                    <b>Area</b> one 5-foot square.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> until the start of your next turn.
                    </span>
                  </p>
                  <p>
                    You set up a transparent, rippling screen of telekinetic
                    energy that seizes small, fast-moving projectiles. Creatures
                    can pass through the screen, but ammunition from physical
                    ranged attacks—such as arrows, bolts, sling bullets, and
                    other objects of similar size—is automatically trapped in
                    the screen, clattering to the ground once the spell ends.
                    Attacks with bigger ranged weapons, such as javelins, take a
                    –2 circumstance penalty to their attack rolls if their paths
                    pass through the screen. Massive ranged weapons and spell
                    effects that don’t create physical objects pass through the
                    screen with no penalty.
                  </p>
                  <p>
                    <b>Heightened (5th)</b> The screen is 10 feet wide.
                  </p>
                  <p>
                    <b>Heightened (6th)</b> The screen is 10 feet wide and can
                    interfere even with massless attacks, like magical blasts or
                    gouts of flame. The screen imposes a –2 circumstance penalty
                    to the attack rolls of spell effects even if they don’t
                    create physical objects. It also protects against area
                    effects that pass through the screen, granting standard
                    cover to creatures on the opposite side of the screen from
                    the center or origin point of an area.
                  </p>
                  <p>
                    <b>Amp</b> Your screen persists for longer, and you can
                    detonate it in an explosive counterattack. The duration of
                    the spell increases to 1 minute. You can Dismiss the spell.
                    If there are any projectiles trapped in the screen, you can
                    cast telekinetic projectile to fire them at one creature as
                    part of Dismissing the spell. Measure the range for the
                    telekinetic projectile from where the vector screen was,
                    instead of from you.
                  </p>
                </>
              }
            />
            <Spell
              name="Dabncing blade"
              action="two_action"
              tags={["uncommon", "psychic", "cantrip", "evocation"]}
              type="Cantrip 5"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal.
                    <br />
                    <b>Range</b> 30 feet.
                    <br />
                    <b>Targets</b> 1 creature.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> sustained up to 1 minute.
                    </span>
                  </p>
                  <p>
                    You telekinetically animate a weapon that’s unattended or on
                    your person. It brandishes itself at a foe of your choice as
                    if wielded by an invisible duelist. When you first Cast the
                    Spell, the weapon automatically flies to the target and
                    Strikes. It moves along with its target, always remaining
                    within reach. Each time you Sustain the Spell, the weapon
                    either Changes Partners or Strikes. The weapon’s attacks use
                    and contribute to your multiple attack penalty.
                  </p>
                  <ul>
                    <li>
                      <b>Change Partners</b> Change the weapon’s target to a
                      different creature within 30 feet. The weapon flies to its
                      new target.
                    </li>
                    <li>
                      <b>Strike</b> (attack) The weapon attacks its target using
                      your spell attack roll. On a hit, the weapon deals damage
                      equal to 2d6 plus your spellcasting ability modifier, of a
                      type determined by the weapon (if the weapon has the
                      versatile trait or can otherwise deal multiple types of
                      damage, you choose each time you attack).
                    </li>
                  </ul>
                  <p>
                    <b>Heightened ((+2))</b> The damage increases by 1d6.
                  </p>
                  <p>
                    <b>Amp</b> The weapon’s attacks increase in strength, and
                    your control is fine enough for advanced technique. The
                    damage dice for the weapon’s Strike change from d6s to d10s.
                    When you Cast or Sustain the spell, you can choose from the
                    following options in addition to the standard ones.
                  </p>
                  <ul>
                    <li>
                      <b>Guard</b> Rather than attacking, the weapon grants a +2
                      circumstance bonus to AC against melee attacks to the
                      creature it’s following. The bonus lasts until the start
                      of your next turn or until the weapon Changes Partners,
                      whichever comes first.
                    </li>
                    <li>
                      <b>Push</b> (attack) The weapon attempts to Push its
                      target, using your spell attack roll instead of an
                      Athletics check to determine the results of the Push.
                    </li>
                  </ul>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={6}
        key={5}
        title="The Indefinite Eye"
        text={
          <>
            <p>
              The true strength of the mind lies in the knowledge it contains,
              with each new observation contributing to the totality of its
              experiences. To grow your experiences—and with them, your
              power—you devote yourself to observing as much as possible,
              casting your senses through space and time with clairvoyance and
              precognition.
            </p>

            <p>
              <b>Granted Spells</b> 1st: true strike; 2nd: augury; 3rd:
              organsight; 4th: clairvoyance; 5th: prying eye; 6th: true seeing;
              7th: true target; 8th: unrelenting observation; 9th: foresight
            </p>
            <p>
              <b>Standard Psi Cantrips</b> detect magic and guidance
            </p>
            <p>
              <b>Granted Cantrip</b> stabilize
            </p>
            <p>
              <b>Unique Psi Cantrips</b> surface: glimpse weakness; deeper:
              omnidirectional scan; deepest: foresee the path
            </p>
            <h4>Detect Magic</h4>
            <p>
              You have the kind of fine control that other spellcasters can only
              dream of. When you cast detect magic, you’re aware of any creature
              in the emanation affected by a spell or carrying a magic item, and
              you determine the main location of magic within any magical hazard
              in the emanation (with the normal restrictions on detecting
              illusions). This typically manifests as an alteration to your
              vision, such as seeing a soft aura around the creature or hazard.
              Sensing these phenomena doesn’t make it clear which spell is on a
              creature, nor which of its items are magical. Your detect magic
              also gains the following amp.
            </p>
            <p>
              <b>Amp</b> Your pulse of detection magic helps you gain a sense of
              nearby magic’s strengths or weaknesses. When you detect the
              presence of magic on an enemy or hazard, you gain a +1 status
              bonus to saves against magic originating from that enemy or hazard
              for 3 rounds. If you find magic from multiple sources with a
              single casting of detect magic, you get the bonus against all of
              them.
            </p>
            <p>
              <b>Amp Heightened (7th)</b> The status bonus to saves against
              magic increases to +2.
            </p>

            <h4>Guidance</h4>
            <p>
              You have eyes everywhere, allowing you to guide people from a
              great distance. The range of guidance increases to 120 feet. It
              also gains the following amp.
            </p>
            <p>
              <b>Amp</b> You can project a flash of insight to your ally in the
              nick of time to save them from failure. Amped guidance doesn’t
              cause a creature to become temporarily immune to guidance, and a
              creature can be targeted by amped guidance even if it is
              temporarily immune to guidance.
            </p>
            <p>
              You can cast an amped guidance spell as a reaction triggered when
              your ally fails or critically fails an attack roll, Perception
              check, saving throw, or skill check, and the bonus from guidance
              would change the failure to a success or the critical failure to a
              normal failure. The bonus from guidance applies retroactively to
              their check.
            </p>
            <p>
              <b>Amp Heightened (6th)</b> The bonus from the spell increases to
              +2.
            </p>

            <Spell
              name="Glimpse weakness"
              action="one_action"
              tags={["uncommon", "psychic", "cantrip", "divination"]}
              type="cantrip 1"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Range</b> 60 feet.
                    <br />
                    <b>Targets</b> 1 creature.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> 1 minute.
                    </span>
                  </p>
                  <p>
                    You glimpse a loose scale, a seam in a foe’s armor, or a
                    similar weakness, aiding your allies in landing a precise
                    hit. The first ally that hits the target with a successful
                    Strike deals additional precision damage equal to 1 + this
                    spell’s level, and then the spell ends.
                  </p>
                  <p>
                    <b>Amp</b> The additional precision damage is 1d4+1.
                  </p>
                  <p>
                    <b>Amp Heightened (+2)</b> The additional precision damage
                    increases by 1d4+1.
                  </p>
                </>
              }
            />

            <Spell
              name="Omnidirectional scan"
              action="one_action"
              tags={["uncommon", "psychic", "cantrip", "divination", "scrying"]}
              type="cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Area</b> 30-foot emanation.
                    <br />
                    <b>Targets</b> 1 ally and 1 enemy.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> until the start of your next turn.
                    </span>
                  </p>
                  <p>
                    You quickly view your surroundings from a variety of angles,
                    your senses constructing an overall mental picture. You can
                    choose to Seek the entire emanation of the spell.
                  </p>
                  <p>
                    Regardless of whether you Seek, target one ally and one
                    enemy in the area; if a target is concealed or hidden from
                    you, you automatically succeed at the flat check to target
                    it with this spell. You prepare to Aid the target ally on an
                    attack roll against the target enemy. If you take this Aid
                    reaction, you use your spell attack modifier and proficiency
                    rank on your check to Aid. If you critically fail the roll
                    to Aid, you get a failure instead.
                  </p>
                  <p>
                    <b>Amp</b> Your scans are so minute that you can project
                    your foe’s likely strengths and weaknesses. You learn which
                    of the target enemy’s saving throws is highest and which is
                    lowest, and you and all allies within 30 feet gain a +1
                    circumstance bonus to attacks and damage against the
                    creature.
                  </p>
                  <p>
                    If you take the Aid reaction you prepared for and succeed at
                    your roll, these bonuses increase to +2 on the attack you’re
                    Aiding. On a critical success, they increase to +3, or to +4
                    if you have legendary proficiency in spell attack rolls.
                  </p>
                </>
              }
            />

            <Spell
              name="Foresee the path"
              action="one_action"
              tags={["uncommon", "psychic", "cantrip", "divination"]}
              type="cantrip 5"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Range</b> 60 feet.
                    <br />
                    <b>Targets</b> 1 ally and 1 enemy.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> sustained up to 1 minute.
                    </span>
                  </p>
                  <p>
                    You see just a split second into the future and glean how an
                    enemy will move, making it easier for your allies to strike
                    it mid-action. Make a Perception check against the target
                    enemy’s Will DC or Deception DC, whichever is higher. The GM
                    may judge a different DC is more appropriate if it’s higher;
                    for instance, using the Warfare Lore DC of a military
                    captain. The target is then temporarily immune for 1 minute.
                  </p>
                  <p>
                    <b>Critical Success</b> The target ally gains a reaction
                    that lets it make a melee Strike against the target enemy,
                    triggered if the enemy leaves a square within the ally’s
                    reach. If the ally already has an ability that lets it make
                    melee Strikes as a reaction, such as Attack of Opportunity,
                    the ally can forgo gaining the temporary reaction to instead
                    gain a +2 status bonus to melee Strikes it makes as
                    reactions.
                  </p>
                  <p>
                    <b>Success</b> As critical success, but the status bonus an
                    ally gets if it forgoes the reaction is +1.
                  </p>
                  <p>
                    <b>Failure</b> The spell has no effect.
                  </p>
                  <p>
                    <b>Amp</b> The spell has the same result on a failure as on
                    a success (but still no effect on a critical failure). Each
                    time you Sustain the Spell, you can choose an additional
                    ally to target, granting them the same benefit as the
                    initial target ally.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={7}
        key={6}
        title="The Oscillating Wave"
        text={
          <>
            <p>
              At the heart of all things is energy. Though it may change its
              form or resting place, it is eternal, fundamental, the purest of
              building blocks. Your powers let you shift energy—either
              concentrating it in a single point to explosive end or freezing
              objects by plundering it away—in an endless oscillation of
              temperature.
            </p>

            <p>
              <b>Granted Spells</b> 1st: burning hands; 2nd: heat metal; 3rd:
              fireball; 4th: fire shield; 5th: cone of cold; 6th: flame vortex;
              7th: fiery body; 8th: polar ray; 9th: meteor swarm
            </p>
            <p>
              <b>Standard Psi Cantrips</b> produce flame and ray of frost
            </p>
            <p>
              <b>Unique Psi Cantrips</b> surface: thermal stasis; deeper:
              entropic wheel; deepest: redistribute potential
            </p>

            <h4>Conservation of Energy</h4>
            <p>
              Energy can’t be created or destroyed, only transferred or changed.
              Whenever you use your magic to add or remove energy, you must then
              balance it with the opposing force. The first time in an encounter
              that you cast a granted spell from your conscious mind or a psi
              cantrip, decide whether you’re adding energy or removing it. Once
              you add energy, you must remove energy the next time you cast one
              of these spells. When you Refocus, you restore yourself to a
              neutral state, allowing you to once again freely choose whether
              you add or remove energy on your next spell.
            </p>
            <p>
              <b>Adding Energy:</b> The ability gains the fire trait, any damage
              it deals is fire damage, and any resistance it grants is to cold
              damage. It loses any traits matching damage types it no longer
              deals.
            </p>
            <p>
              <b>Removing Energy:</b> The ability gains the cold trait, any
              damage it deals is cold damage, and any resistance it grants is to
              fire damage. It loses any traits matching damage types it no
              longer deals. Fiery body grants ray of frost instead of produce
              flame when cast this way.
            </p>
            <p>
              <b>Mindshift:</b> When you use an action that has the mindshift
              trait, you can choose to add or remove energy to it instead of
              making it mental. Alter it as normal for adding or removing energy
              and change any save it requires to a Reflex save.
            </p>

            <h4>Produce Flame</h4>
            <p>
              You can drastically increase the heat against adjacent targets.
              When using produce flame as a melee attack, increase the damage
              dice of the initial damage (but not the persistent damage) from
              d4s to d6s. Your produce flame also gains the following amp.
            </p>
            <p>
              <b>Amp</b> You project pure heat that causes a target to combust.
              The initial damage changes to 1d10 fire damage (not adding your
              ability modifier) plus 1 fire splash damage. When using amped
              produce flame as a melee attack, increase the damage dice of the
              initial damage from d10s to d12s. You are not harmed by splash
              damage from amped produce flame.
            </p>
            <p>
              <b>Amp Heightened (+1)</b> Instead of using produce flame’s normal
              heightened entry, the initial damage increases by 1d10 (1d12 for
              melee) and the splash damage increases by 1. The persistent fire
              damage on a critical hit increases by 1d4.
            </p>

            <h4>Ray of Frost</h4>
            <p>
              Your ray of frost reaches even further. The range increases to 180
              feet. Your ray of frost also gains the following amp.
            </p>
            <p>
              <b>Amp</b> You drain thermal energy at a distance, using what you
              plunder to replenish yourself. The ray deals 1d10 cold damage. You
              gain temporary Hit Points equal to half the damage the target
              takes (after applying resistances and the like). You lose any
              remaining temporary Hit Points after 1 minute.
            </p>
            <p>
              <b>Amp Heightened (+1)</b> The initial damage increases by 1d10
              instead of 1d4.
            </p>

            <Spell
              name="Therman stasis"
              action="one_action"
              tags={["uncommon", "psychic", "abjuration", "cantrip"]}
              type="Cantrip 1"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Range</b> 60 feet.
                    <br />
                    <b>Targets</b> 1 creature.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> until the start of your next turn.
                    </span>
                  </p>

                  <p>
                    The same abilities that let you raise or lower thermal
                    energy also let you keep it at a safe medium. The target
                    gains resistance 2 against fire damage and resistance 2
                    against cold damage.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> Each resistance increases by 2.
                  </p>
                  <p>
                    <b>Amp</b> The spell’s duration becomes 1 minute.
                  </p>
                </>
              }
            />

            <Spell
              name="Entropic wheel"
              action="reaction"
              tags={[
                "uncommon",
                "psychic",
                "cantrip",
                "cold",
                "evocation",
                "fire",
              ]}
              type="Cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Trigger</b> You deal cold or fire damage to an enemy.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> 1 minute.
                    </span>
                  </p>

                  <p>
                    You stockpile thermal energy in a magical wheel-like
                    construct that lets you burn opponents with cold or freeze
                    their bodies with heat. When you Cast the Spell, the wheel
                    has one mote of thermal energy, and when you use a cold or
                    fire effect or deal cold or fire damage, the wheel spins,
                    siphoning off a bit of energy and gaining another mote. The
                    wheel can’t gain motes more than once on a given turn, and
                    the maximum number of motes is equal to entropic wheel’s
                    level.
                  </p>
                  <p>
                    When you Cast a Spell that deals fire damage, the target
                    also takes cold damage equal to the number of motes in the
                    entropic wheel. When you Cast a Spell that deals cold
                    damage, the target also takes fire damage equal to the
                    number of motes in the entropic wheel. This applies only to
                    the initial damage of the spell, not to any persistent
                    damage or ongoing effects.
                  </p>
                  <p>
                    <b>Amp</b> You gain two motes instead of one when you Cast
                    the Spell and each time the wheel gains another mote.
                  </p>
                </>
              }
            />

            <Spell
              name="Redistribute Potential"
              action="reaction"
              tags={[
                "uncommon",
                "psychic",
                "cantrip",
                "cold",
                "evocation",
                "fire",
              ]}
              type="Cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal.
                    <br />
                    <b>Range</b> 60 feet.
                    <br />
                    <b>Area</b> 2 adjacent 5-foot squares.
                    <br />
                    <span className="frequency">
                      <b>Saving Throw</b> basic Fortitude.
                    </span>
                  </p>

                  <p>
                    Energy attempts to balance out, but with your magic, you can
                    shunt all the energy in one area to another. Creatures in
                    either area take 4d4 damage with a basic Fortitude save.
                    Choose one of the squares to steal heat, dealing cold
                    damage, and the other to concentrate the stolen heat,
                    dealing fire damage. A creature that fails its save also
                    becomes clumsy 1 from numbness if it’s in the area of stolen
                    heat or enfeebled 1 from heat stroke if it’s in the area of
                    concentrated heat; these conditions last until the start of
                    your next turn. If a creature is large enough to be in both
                    squares, you choose only one of the areas for it to attempt
                    its save against; it’s unaffected by the other area.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> The damage increases by 1d4.
                  </p>
                  <p>
                    <b>Amp</b> You can affect the flow of energy on a much
                    grander scale. Instead of two 5-foot squares, you create two
                    10-foot bursts. They still must be adjacent to one another
                    and can overlap. A creature in both areas can still be
                    affected by only one of your choice. The spell’s damage
                    increases to 6d6. The conditions last for 1 minute.
                  </p>
                  <p>
                    <b>Amp Heightened (+1)</b> Increase the damage by 2d6
                    instead of 1d4.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={8}
        key={7}
        title="The Silent Whisper"
        text={
          <>
            <p>
              Every mind murmurs constantly, and the static from those nearby
              reverberates in your head like wind through leaves. What better
              focus for your magic then, than the very thoughts of those around
              you? Your versatile telepathic abilities let you soothe and
              communicate with your allies or control your enemies.
            </p>

            <p>
              <b>Granted Spells</b> 1st: mindlink; 2nd: touch of idiocy; 3rd:
              heroism; 4th: telepathy; 5th: synaptic pulse; 6th: sending; 7th:
              visions of danger; 8th: uncontrollable dance; 9th: telepathic
              demand
            </p>
            <p>
              <b>Standard Psi Cantrips</b> daze and message
            </p>
            <p>
              <b>Unique Psi Cantrips</b> surface: forbidden thought; deeper:
              shatter mind; deepest: contagious idea
            </p>

            <h4>Daze</h4>
            <p>
              You can daze from a great distance. The range increases to 120
              feet. Your daze also gains the following amp.
            </p>
            <p>
              <b>Amp</b> Your spell cracks the target’s mental defenses, leaving
              it susceptible to further psychic attack. The spell’s damage
              changes to 1d10. If the target fails its Will save, until the end
              of its next turn, it gains weakness 1 to mental damage and takes a
              –1 status penalty to Will saves. On a critical failure, the
              weakness is 3 (in addition to the target being stunned 1). The
              weakness applies before daze deals damage.
            </p>
            <p>
              <b>Amp Heightened (+2)</b> The spell’s damage increases by 2d10,
              and the weakness on a failure or critical failure increases by 1.
            </p>

            <h4>Message</h4>
            <p>
              Your message is not so easily bound by obstacles. The spell can
              travel up to 120 feet to reach the target, bending around walls
              and obstacles; this means you don’t need a straight line of effect
              or line of sight to cast message as long as you know the target’s
              space and there is an unblocked path of 120 feet or less that can
              reach them. It also gains the following amp.
            </p>
            <p>
              <b>Amp</b> Your telepathic message allows you to coordinate your
              actions while you pass on information. The target of the message
              can immediately spend its reaction to Step or Stride.
            </p>
            <p>
              <b>Amp Heightened (4th)</b> The target of the message can choose
              to Shove, Strike, or Trip with its reaction instead.
            </p>

            <Spell
              name="Fobbiden thought"
              action="two_action"
              tags={[
                "uncommon",
                "psychic",
                "cantrip",
                "enchantement",
                "mental",
              ]}
              type="Cantrip 1"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal
                    <br />
                    <b>Range</b> 30 feet.
                    <br />
                    <b>Targets</b> 1 creature.
                    <br />
                    <span className="frequency">
                      <b>Saving Throw</b> Will.
                    </span>
                  </p>
                  <p>
                    You place a psychic lock in a foe’s mind that prevents it
                    from a specific action. Choose “Strike,” “Stride,” “Cast a
                    Spell,” or a specific action you know the creature to have
                    (such as “Breath Weapon” against a dragon). If the creature
                    attempts that action on its next turn, it must surmount your
                    lock to do so, causing it to take 1d6 mental damage plus
                    your spellcasting ability modifier (with a basic Will save).
                    The target is then temporarily immune for 1 minute.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> The damage increases by 1d6.
                  </p>
                  <p>
                    <b>Amp</b> Your telepathic push is particularly shocking to
                    those who resist it. If the target fails its save, it’s also
                    stunned 1.
                  </p>
                </>
              }
            />

            <Spell
              name="Shatter Mind"
              action="two_action"
              tags={["uncommon", "psychic", "cantrip", "evocation", "mental"]}
              type="Cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal
                    <br />
                    <b>Area</b> 15-foot cone.
                    <br />
                    <span className="frequency">
                      <b>Saving Throw</b> Will.
                    </span>
                  </p>
                  <p>
                    You telepathically assail the minds of your foes. You deal
                    mental damage equal to 2d4 plus your spellcasting ability
                    modifier to all enemies in the area, with a basic Will save.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> The damage increases by 1d4.
                  </p>
                  <p>
                    <b>Amp</b> You increase the area of the spell to your choice
                    of a 30-foot cone or 60-foot cone, and the damage dice for
                    the spell change to d10s. Creatures that fail are stupefied
                    1 until the start of your next turn (or stupefied 2 on a
                    critical failure).
                  </p>
                </>
              }
            />

            <Spell
              name="Contagious Idea"
              action="two_action"
              tags={[
                "uncommon",
                "psychic",
                "cantrip",
                "emotion",
                "enchantement",
                "mental",
              ]}
              type="Cantrip 5"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal
                    <br />
                    <b>Range</b> 30 feet (see text).
                    <br />
                    <span className="frequency">
                      <b>Targets</b> 1 or 2 creatures other than yourself (see
                      text).
                    </span>
                  </p>
                  <p>
                    Nothing is so contagious as a thought. You place either a
                    pleasant thought or a terrifying one in a creature’s mind.
                    You can then plant the same thought in a second creature’s
                    mind. You can’t choose a creature that’s already been a
                    target of this casting of contagious idea, nor can you
                    choose yourself. The second target can be beyond the range
                    of the spell, but it must be within 30 feet of the first
                    target.
                  </p>
                  <ul>
                    <li>
                      <b>Pleasant Thought</b> The target is soothed, gaining 5
                      temporary Hit Points that last for 1 minute.
                    </li>
                    <li>
                      <b>Terrifying Thought</b> The target must attempt a Will
                      save.
                    </li>
                  </ul>
                  <p>
                    <b>Critical Success</b> The target is unaffected and is
                    temporarily immune for 1 minute.
                  </p>
                  <p>
                    <b>Success</b> The target is frightened 1 and is then
                    temporarily immune for 1 minute.
                  </p>
                  <p>
                    <b>Failure</b> The target becomes frightened 2.
                  </p>
                  <p>
                    <b>Critical Failure</b> The target becomes frightened 3.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> The temporary Hit Points for a
                    pleasant thought increase by 1.
                  </p>
                  <p>
                    <b>Amp</b> You can choose to spread the thought from the
                    second target to a third target, in the same manner as
                    spreading it from the first target to the second. A pleasant
                    thought grants twice as many temporary Hit Points (10, plus
                    an additional 2 for each level heightened).
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={9}
        key={8}
        title="Tangible Dream"
        text={
          <>
            <p>
              You pull colors and shapes from the depth of your mind, projecting
              impossible creations into the world as tapestries of astral thread
              or sculptures of force and light.
            </p>

            <p>
              <b>Granted Spells</b> 1st: color spray; 2nd: mirror image; 3rd:
              sea of thought; 4th: resilient sphere; 5th: etheric shards; 6th:
              blade barrier; 7th: project image; 8th: scintillating pattern;
              9th: prismatic sphere
            </p>
            <p>
              <b>Standard Psi Cantrips</b> dancing lights and shield
            </p>
            <p>
              <b>Unique Psi Cantrips</b> surface: imaginary weapon; deeper:
              astral rain; deepest: hologram cage
            </p>

            <h4>Dancing Lights</h4>
            <p>
              Your dancing lights can float wherever you like. After creating
              the lights, they can move more than 10 feet from the other lights,
              and more than 120 feet from you. Your dancing lights also gain the
              following amp.
            </p>
            <p>
              <b>Amp</b> Your lights whirl together, dazzlingly and
              hypnotically. When you amp the spell, you create a flashing
              display comprised of all four lights in an unoccupied 5-foot
              square. If you move the lights when you Sustain the Spell, the
              lights must remain together. The spell gains the visual trait.
              Each creature in a 5-foot emanation around the lights when you
              Cast the Spell must attempt a Fortitude save.
            </p>
            <p>
              <b>Success</b> The creature is dazzled until the start of your
              next turn and then becomes temporarily immune for 1 minute.
            </p>
            <p>
              <b>Failure</b> The creature is dazzled until the start of your
              next turn and must attempt a new save against the spell whenever
              it starts its turn adjacent to the lights.
            </p>
            <p>
              <b>Critical Failure</b> As failure, but the creature is also
              fascinated by the lights until the start of your next turn.
            </p>

            <h4>Shield</h4>
            <p>
              Your shield spell can be deployed on behalf of others. When you
              cast shield, you can choose a target ally within 30 feet to gain
              the benefits of the spell instead of you. The option to Shield
              Block with the spell is up to you and uses your reaction, not the
              target’s. Your shield also gains the following amp.
            </p>
            <p>
              <b>Amp</b> You create a layered barrier of three shields to
              improve your defenses. The duration increases to sustained up to 1
              minute. The shield still lowers at the start of each of your
              turns, but you can raise it again when you Sustain the Spell.
            </p>
            <p>
              When you Shield Block with this spell, one of the three layers
              breaks and you cease to gain the bonus to AC, but the spell
              doesn’t end. You can keep using the spell until the final layer
              breaks; once it does, the spell ends and you can’t cast shield or
              amped shield again for 10 minutes. You can choose to break
              additional layers when you Shield Block with this spell to improve
              your defenses. If you break two layers instead of one, increase
              the Hardness to 1-1/2 × the normal amount (7 at 1st level, 15 at
              3rd level, 22 at 5th level, 30 at 7th level, and 37 at 9th level).
              If you break all three layers, increase the Hardness to double the
              normal amount.
            </p>

            <Spell
              name="Imaginary Weapon"
              action="two_action"
              tags={[
                "uncommon",
                "psychic",
                "attack",
                "cantrip",
                "avocation",
                "force",
              ]}
              type="Cantrip 1"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal
                    <br />
                    <b>Range</b>touch.
                    <br />
                    <span className="frequency">
                      <b>Targets</b> 1 creature.
                    </span>
                  </p>
                  <p>
                    You create a simple weapon of force. Make a melee spell
                    attack roll against your target’s AC. If you hit, you deal
                    your choice of bludgeoning or slashing damage equal to 1d8
                    plus your spellcasting ability modifier. On a critical
                    success, you deal double damage and can choose to detonate
                    your weapon to push the target 10 feet away from you.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> The damage increases by 1d8.
                  </p>
                  <p>
                    <b>Amp</b> You form multiple force weapons to lash out at
                    multiple foes. You make two imaginary weapon Strikes, each
                    against a different target. Your multiple attack penalty
                    doesn’t increase until you’ve made both Strikes.
                  </p>
                  <p>
                    <b>Amp Heightened (+1)</b> The damage increases by 2d8
                    instead of 1d8.
                  </p>
                </>
              }
            />

            <Spell
              name="Astral Rain"
              action="two_action"
              tags={["uncommon", "psychic", "cantrip", "evocation", "force"]}
              type="Cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal
                    <br />
                    <b>Range</b>60 feet.
                    <br />
                    <b>Area</b> one 5-foot cube.
                    <br />
                    <span className="frequency">
                      <b>Saving Throw</b> Reflex.
                    </span>
                  </p>
                  <p>
                    You fling a mass of furious thoughts into the air, where
                    they expand into numerous blades or other shapes that rain
                    down. Any creature that’s in the area or enters the area
                    before the start of your next turn takes your choice of
                    bludgeoning or piercing damage equal to 2d4 plus your
                    spellcasting ability modifier, with a basic Reflex saving
                    throw.
                  </p>
                  <p>
                    <b>Heightened (+1)</b> The damage increases by 1d4.
                  </p>
                  <p>
                    <b>Amp</b> The area changes to a 5-foot burst, and you can
                    Sustain the Spell up to 1 minute. The first time each round
                    that you Sustain the Spell, you can move the burst up to 20
                    feet.
                  </p>
                </>
              }
            />

            <Spell
              name="Hologram Cage"
              action="three_action"
              tags={["uncommon", "psychic", "cantrip", "illusion", "light"]}
              type="Cantrip 5"
              description={
                <>
                  <p>
                    <b>Cast</b> material, somatic, verbal.
                    <br />
                    <b>Range</b>60 feet.
                    <br />
                    <b>Area</b> 1 cube 20 feet on each side.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> 1 minute.
                    </span>
                  </p>
                  <p>
                    You weave light into a cube of vivid and fantastic patterns.
                    The walls shed bright light for 10 feet (and dim light for
                    the next 20 feet) and completely block line of sight;
                    creatures within the cage can’t be seen by creatures outside
                    of it, though they can see each other, and creatures outside
                    of it can’t see into it. You can Dismiss the spell, and if
                    you Cast the Spell again, your previous hologram cage ends.
                  </p>
                  <p>
                    <b>Heightened (7th)</b> The range of the spell increases to
                    80 feet, and you can expand the cube to be 25 feet on each
                    side.
                  </p>
                  <p>
                    <b>Amp</b> Force walls make the cage’s barrier physical as
                    well as visual. Each 10-foot-by-10-foot section of the
                    cage’s wall has AC 10, Hardness equal to double the spell’s
                    level, and HP equal to quadruple the spell’s level. The
                    spell is disrupted if any of its walls would pass through a
                    creature when you cast it.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        number={10}
        key={9}
        title="The Hunbound Step"
        text={
          <>
            <p>
              The mind can flit from thought to thought; why too shouldn’t you?
              You focus on motion in a higher order of spatial dimensions, not
              just the typical three, allowing for versatile abilities that
              alter positioning.
            </p>
            <p>
              <b>Granted Spells</b> 1st: thoughtful gift; 2nd: enlarge; 3rd:
              rally point; 4th: dimension door; 5th: strange geometry; 6th:
              collective transposition; 7th: momentary recovery; 8th: maze; 9th:
              bilocation
            </p>

            <p>
              <b>Standard Psi Cantrips</b> phase bolt and warp step
            </p>
            <p>
              <b>Unique Psi Cantrips</b> surface: distortion lens; deeper:
              ghostly shift; deepest: tesseract tunnel
            </p>

            <h4>Phase Bolt</h4>
            <p>
              Your phase bolt temporarily sends the target’s cover out of phase
              if it hits. On a success, reduce the target’s circumstance bonus
              to AC (if any) by 1 until the beginning of your next turn. Your
              phase bolt also gains the following amp.
            </p>
            <p>
              <b>Amp</b> Your bolt leaves phase completely, becoming invisible
              and intangible until it’s already embedded in the target—giving
              the impression it simply teleported itself into place. The target
              is flat-footed against the attack. Additionally, the bolt ignores
              an amount of Hardness or resistance to piercing damage equal to
              half the spell’s level. On a critical success, the target can’t be
              affected by teleportation effects until the start of your next
              turn.
            </p>
            <p>
              <b>Amp Heightened (+1)</b> The bolt’s damage increases by 2d4
              instead of 1d4.
            </p>

            <h4>Wrap Step</h4>
            <p>
              You warp space more compactly, granting you a +10-foot status to
              your Speed instead of a +5-foot status bonus when you warp step.
              The spell also gains the following amp.
            </p>
            <p>
              <b>Amp</b> Space contracts with hardly a thought, letting you Cast
              the Spell as a single action.
            </p>
            <p>
              <b>Amp Heightened (4th)</b> You twist space so completely you
              don’t need to travel the interposing distance. You can choose to
              instead teleport to a space within your line of sight and line of
              effect with a range equal to your double your Speed (after
              applying the status bonus from warp step). This grants the spell
              the teleportation trait.
            </p>

            <Spell
              name="Distortion Lens"
              action="one_action"
              tags={["uncommon", "psychic", "cantrip", "conjuration"]}
              type="Cantrip 1"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Range</b>30 feet.
                    <br />
                    <b>Area</b> one 5-foot square.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> sustained up to 1 minute.
                    </span>
                  </p>
                  <p>
                    You create a magical lens that distorts space as best suits
                    you. You create the lens in a space in range, even suspended
                    in midair. If your or an ally’s ranged attack passes through
                    the lens, the attack gains an additional 10 feet of range;
                    if an enemy’s ranged attack would pass through the lens, it
                    requires an additional 10 feet of range to move through,
                    though the enemy knows before using its ability whether the
                    interference puts the target out of range. An ally whose
                    space overlaps the lens can increase the range of its ranged
                    attacks, but an enemy whose space overlaps the lens doesn’t
                    reduce the range of its ranged attacks.
                  </p>
                  <p>
                    The first time each round you Sustain the Spell, you can
                    choose to relocate it to another square within range. The
                    lens disappears if you cast distortion lens again.
                  </p>
                  <p>
                    <b>Heightened (+3)</b> The lens increases or decreases the
                    range of abilities by an additional 5 feet.
                  </p>
                  <p>
                    <b>Amp</b> The lens can interfere with creatures as well as
                    attacks. Once during a Medium or smaller ally’s move action,
                    the ally can move into and out of the lens’s square without
                    that square counting against the total distance moved.
                    Conversely, the lens is difficult terrain for your enemies.
                  </p>
                </>
              }
            />

            <Spell
              name="Ghostly Shift"
              action="one_action"
              tags={["uncommon", "psychic", "cantrip", "conjuration"]}
              type="Cantrip 3"
              description={
                <>
                  <p>
                    <b>Cast</b> verbal.
                    <br />
                    <b>Range</b> 30 feet.
                    <br />
                    <b>Targets</b> 1 creature.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> sustained up to 1 minute.
                    </span>
                  </p>
                  <p>
                    Your body becomes insubstantial as you partially phase out.
                    You gain resistance 2 to all damage (except force).
                  </p>
                  <p>
                    <b>Heightened (+2)</b> The resistance increases by 1.
                  </p>
                  <p>
                    <b>Amp</b> Your insubstantiality is complete enough that you
                    can pass through other creatures, causing painful
                    interference effects when you do so. Once each round when
                    you Stride, Burrow, Swim, or Fly, you can pass through one
                    creature’s space during that action without needing to
                    attempt a check to Tumble Through, though you can’t end your
                    turn in its space. When you pass through a creature’s space
                    in this way, you deal 2d6 force damage to that creature,
                    with a basic Fortitude save.
                  </p>
                  <p>
                    <b>Amp Heightened (+2)</b> Increase the damage dealt by
                    phasing through a creature by 1d6.
                  </p>
                </>
              }
            />

            <Spell
              name="Tesseract tunnel"
              action="two_action"
              tags={[
                "uncommon",
                "psychic",
                "cantrip",
                "conjuration",
                "teleportation",
              ]}
              type="Cantrip 5"
              description={
                <>
                  <p>
                    <b>Cast</b> somatic, verbal.
                    <br />
                    <span className="frequency">
                      <b>Duration</b> sustained up to 1 minute.
                    </span>
                  </p>
                  <p>
                    You race from point to point, tearing open a tunnel in
                    space. You create a portal in your current space and then
                    Stride, creating another portal in the space you end your
                    Stride. Until the beginning of your next turn, any creature
                    that enters the first portal can immediately transport
                    itself to the exit portal as part of its move action, which
                    adds the teleportation trait to its movement.
                  </p>
                  <p>
                    You can have only one tesseract tunnel open at a time;
                    creating another causes the first to immediately close. You
                    can use tesseract tunnel while Burrowing, Climbing, Flying,
                    or Swimming instead of Striding if you have the
                    corresponding movement type.
                  </p>
                  <p>
                    <b>Amp</b> Physical movement is no longer necessary to
                    connect two points in space. When you cast tesseract tunnel,
                    you simply create a tunnel that ends in a square within a
                    range equal to your Speed; you can choose to immediately
                    teleport to the space at the far end of the tunnel.
                    Furthermore, the tunnel can be traversed in both directions,
                    instead of only from entrance to exit. Finally, the spell’s
                    duration changes to 1 minute. You can Dismiss the spell.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <h3 id="psychic-feat">Psychic Feats</h3>
      <p>
        At 2nd level and every even-numbered level, you gain a psychic class
        feat.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. You
        must be trained or better in the corresponding skill to select a skill
        feat.
      </p>

      <h3 id="general-feat">General Feats</h3>
      <p>
        At 3rd level and every 4 levels thereafter, you gain a general feat.
      </p>

      <h3 id="skill-increase">Skill Increases</h3>
      <p>
        At 3rd level and every 2 levels thereafter, you gain a skill increase.
        You can use this increase to either become trained in one skill you’re
        untrained in, or become an expert in one skill in which you’re already
        trained.
      </p>
      <p>
        At 7th level, you can use skill increases to become a master in a skill
        in which you’re already an expert, and at 15th level, you can use them
        to become legendary in a skill in which you’re already a master.
      </p>

      <h3 id="signature-spells">Signature spells</h3>
      <p>
        You’ve learned to cast some of your spells more flexibly. For each spell
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

      <div className="flex">
        <div className="flex-column">
          <h3 id="ability-boosts">Ability Boosts</h3>
          <p>
            At 5th level and every 5 levels thereafter, you boost four different
            ability scores. You can use these ability boosts to increase your
            ability scores above 18. Boosting an ability score increases it by 1
            if it’s already 18 or above, or by 2 if it starts out below 18.
          </p>

          <h3 id="ancestry-feat">Ancestry Feats</h3>
          <p>
            In addition to the ancestry feat you started with, you gain an
            ancestry feat at 5th level and every 4 levels thereafter.
          </p>

          <h3 id="clarity-of-focus">Clarity of Focus</h3>
          <p>
            Your deepening connection to your mind grants you more power to fuel
            your psi amps. Increase the number of Focus Points in your focus
            pool by 1. This ability doesn’t change the number of Focus Points
            you regain when you Refocus. As normal, this ability can’t increase
            the size of your focus pool above 3 points.
          </p>

          <h3 id="precognitive-reflexes">Precognitive Reflexes</h3>
          <p>
            Minor precognition ensures you can react to threats slightly before
            they occur. Your proficiency rank for Reflex saves increases to
            expert.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/psychic_03.webp")}
            alt="psychic example"
          />
        </figure>
      </div>

      <h3 id="expert-spellcaster">Expert spellcaster</h3>
      <p>
        Self-reflection has brought you greater knowledge of yourself and, with
        it, psychic power. Your proficiency ranks for occult spell attack rolls
        and spell DCs increase to expert.
      </p>

      <h3 id="great-fortitude">Great fortitude</h3>
      <p>
        Your mind holds your body to a subconscious mental image of yourself.
        Your proficiency rank for Fortitude saves increases to expert.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="extrasensory-perception">Extrasensory Perception</h3>
          <p>
            11TH Minor applications of clairvoyance let you know when danger is
            near. Your proficiency rank for Perception increases to expert.
          </p>

          <h3 id="walls-of-wills">Walls of Wills</h3>
          <p>
            Your practiced mind resists external influence. Your proficiency
            rank for Will saves increases to master. When you succeed at a Will
            save, you get a critical success instead.
          </p>

          <h3 id="weapon-expertise">Weapon expertise</h3>
          <p>
            Training and magic have improved your weapon technique. Your
            proficiency rank for simple weapons and unarmed attacks increases to
            expert.
          </p>

          <h3 id="personal-barrier">Personal Barrier</h3>
          <p>
            Subtle telekinetic fields dampen and deflect incoming blows. Your
            proficiency rank in unarmored defense increases to expert.
          </p>

          <h3 id="weapon-specialization">Weapon specialization</h3>
          <p>
            As you touch a weapon, you glimpse the hands that made and wielded
            it, teaching you how to inflict greater injuries. You deal 2
            additional damage with weapons and unarmed attacks in which you are
            an expert. This damage increases to 3 if you’re a master, and 4 if
            you’re legendary.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/psychic_04.webp")}
            alt="Psychic example"
          />
        </figure>
      </div>

      <h3 id="master-spellcaster">Master spellcaster</h3>
      <p>
        You’ve gained access to the deepest corners of your own mind. Your
        proficiency ranks for occult spell attack rolls and spell DCs increase
        to master.
      </p>

      <h3 id="fortress-of-will">Fortress of Will</h3>
      <p>
        Your trained mind is as a fortress that none can breach. Your
        proficiency rank for Will saves increases to legendary. When you
        critically fail a Will save, you get a failure instead. When you fail a
        Will save against a damaging effect, you take half damage.
      </p>

      <h3 id="infinite-mind">Infinite mind</h3>
      <p>
        Anything you can imagine is now within the realm of possibility. Add two
        common 10th-level occult spells to your repertoire; you gain a single
        10th-level spell slot you can use to cast one of those two spells using
        psychic spellcasting. You don’t gain more 10th-level spells as you level
        up, unlike other spell slots, and you can’t use 10th-level slots with
        abilities that give you more spell slots or that let you cast spells
        without expending spell slots. You can take the Mind over Matter psychic
        feat to gain a second slot.
      </p>

      <h3 id="legendary-spellcaster">Legendary spellcaster</h3>
      <p>
        As your training reaches its peak, you understand not just your own
        mind, but the collective unconscious from which all psychic power stems.
        Your proficiency ranks for occult spell attack rolls and spell DCs
        increase to legendary.
      </p>

      <h2>Feats</h2>
      <p>
        At every level that you gain a psychic feat, you can select one of the
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
    </div>
  );
};

export default PsychicPage;
