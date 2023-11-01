import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";
import { oracleFeats } from "../middleware/OracleFeats";
import { oracleFocusSpells } from "../middleware/OracleFocusSpells";

const OraclePage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    oracleFeats
  );

  const [filteredSpellList, setFilteredSpellList] =
    useState<Array<FocusSpell> | null>(oracleFocusSpells);

  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...oracleFeats];
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
    let updatedList = [...oracleFocusSpells];
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
        <h1>Oracle</h1>
        <i>Advanced Player's Guide</i>
        <p className="introduction">
          The oracle is a paradox of divine magic, able to tap into and
          manipulate energies from disparate sources throughout the universe
          that would overwhelm anyone else. These mysteries grant unusual powers
          and revelations, as well as a double-edged curse - which they must
          learn how to simultaneously endure and exploit.
        </p>
        <figure>
          <img
            src={require("../assets/img/oracle_icon.png")}
            alt="Oracle icon"
          />
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
        <img src={require("../assets/img/oracle_00.webp")} alt="Oracle image" />
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
          <li>Trained in one or more skills determined by your mystery</li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Trained in simple weapons</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in light armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Spells</h2>
        <p>Trained in divine spell attack rolls</p>
        <p>Trained in divine spell DCs</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You draw upon your mystery to empower yourself in combat, balancing
            miraculous effects with the increasing severity of your curse as
            conflicting divine demands overtax your physical body. You cast
            spells to aid your allies and devastate your foes, or depending on
            your mystery, you might wade into battle yourself.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You rely upon the insights drawn from your mystery. You might
            leverage your curse to intimidate people or hide its effects to
            better blend in.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You recenter yourself to bring the terrible metaphysical conflicts
            causing your curse back under control so you can draw upon your
            mystery’s power again later. You remain aware of supernatural forces
            acting around you, perhaps peeking into the future to gain insights.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You might seek to learn more about your mystery and the divine
            wellsprings that fuel your power. Associating with others interested
            in the subject of your mystery can make it easier to live with your
            curse. You could associate with an organized religion or even start
            your own faithful following devoted to your mystery.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>View your oracular powers as a blessing, a curse, or both.</li>
        <li>
          Push yourself to the limits of what you can withstand to work great
          acts of magic.
        </li>
        <li>
          Rely on magical items to provide a pool of safer and more reliable
          magic.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Don’t realize your spellcasting draws upon divine power and instead
          believe you command stranger—and possibly evil—powers.
        </li>
        <li>
          Assume you performed some terrible transgression to become cursed by
          the gods.
        </li>
        <li>
          Admire your determination and the sacrifices you make to perform
          wondrous acts.
        </li>
      </ul>

      <h2>Class Features</h2>
      <p>
        You gain these abilities as a monk. Abilities gained at higher levels
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
              <a href="#divine-spellcasting">divine spellcasting</a>,{" "}
              <a href="#spell-repertoire">spell repertoire</a>,{" "}
              <a href="#mystery">pmystery</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#oracle-feat">Oracle feat</a>,{" "}
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
              <a href="#oracle-feat">Oracle feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              3rd-level spells, <a href="#ability-boosts">ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#oracle-feat">Oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              4th-level spells, <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#expert-spellcaster">expert spellcaster</a>,{" "}
              <a href="#resolve">resolve</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#oracle-feat">Oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              5th-level spells, <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#magical-fortitude">magical fortitude</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#oracle-feat">oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              6th-level spells, <a href="#general-feat">general feat</a>,{" "}
              <a href="#alertness">alertness</a>,{" "}
              <a href="#major-curse">major curse</a>,{" "}
              <a href="#weapon-expertise">weapon expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#oracle-feat">Oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              7th-level spells, <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#ligh- armor-specialization-expertise">
                light armor specialization expertise
              </a>
              , <a href="#lightning-reflexes">lightning reflexes</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#oracle-feat">Oracle feat</a>,{" "}
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
              <a href="#oracle-feat">Oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              9th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#extreme-curse">extreme curse</a>,{" "}
              <a href="#greater-resolve">greater resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#oracle-feat">Oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#legendary-spellcaster">legendary spellcaster</a>,{" "}
              <a href="#oracular-clarity">oracular clarity</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#oracle-feat">oracle feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Key Terms</h3>
      <p>You’ll see these key terms in many oracle class features.</p>
      <p>
        <b>Cursebound:</b> Spells with this trait increase the severity of your
        oracular curse when cast. Usually only revelation spells have this
        trait. You can’t cast a cursebound spell if you don’t have an oracular
        curse.
      </p>
      <p>
        <b>Fortune and Misfortune:</b> Fortune and misfortune effects can alter
        how you roll your dice. You can never have more than one fortune and one
        misfortune effect come into play on a single roll. If multiple fortune
        effects would apply, you must pick which to use. If two misfortune
        effects apply, the GM decides which is worse and applies it. If both a
        fortune effect and a misfortune effect would apply to the same roll, the
        two cancel each other out, and you roll normally.
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
        In addition to what you get from your class at 1st level, you have the
        benefits of your selected ancestry and background.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="divine-spellcasting">Divine Spellcasting</h3>
      <p>
        Your mystery provides you with divine magical power. You can cast spells
        using the Cast a Spell activity, and you can supply material, somatic,
        and verbal components when casting spells. Your unconventional access to
        this divine power means you can usually replace material components with
        somatic components, so you don’t need to use a material component pouch
        when casting spells.
      </p>
      <p>
        At 1st level, you can cast up to two 1st-level spells per day. You must
        know spells to cast them, and you learn them via the spell repertoire
        class feature. The number of spells you can cast each day is called your
        spell slots. As you increase in level as an oracle, your number of
        spells per day increases, as does the highest level of spells you can
        cast, as shown on Table 2–3: Oracle Spells per Day.
      </p>
      <p>
        Some of your spells require you to attempt a spell attack roll to see
        how effective they are, or have your enemies roll against your spell DC
        (typically by attempting a saving throw). Since your key ability is
        Charisma, your spell attack rolls and spell DCs use your Charisma
        modifier.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h4>Heightening spells</h4>
          <p>
            When you get spell slots of 2nd level and higher, you can fill those
            slots with stronger versions of lower-level spells. To cast a
            heightened spell, you must have the heightened version in your
            repertoire; for example, you can’t cast a 3rd-level version of a
            spell that is only in your repertoire at 1st level. Many spells have
            specific improvements when they are heightened to certain levels.
            The signature spells class feature lets you heighten certain spells
            freely.
          </p>

          <h4>Cantrips</h4>
          <p>
            A cantrip is a special type of spell that doesn’t use spell slots.
            You can cast a cantrip at will, any number of times per day. A
            cantrip is always automatically heightened to half your level
            rounded up-this is usually equal to the highest level of spell you
            can cast as an oracle. For example, as a 1st-level oracle, your
            cantrips are 1st-level spells, and as a 5th-level oracle, your
            cantrips are 3rd-level spells.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/oracle_01.webp")}
            alt="Oracle example"
          />
        </figure>
      </div>

      <h3 id="spell-repertoire">Spell Repertoire</h3>
      <p>
        The collection of spells you can cast is called your spell repertoire.
        At 1st level, you learn two 1st-level spells of your choice and five
        cantrips of your choice. You choose these from the common spells from
        the divine spell list, or from other divine spells to which you have
        access. You can cast any spell in your spell repertoire by using a spell
        slot of an appropriate spell level.
      </p>
      <p>
        You add to this spell repertoire as you increase in level. Each time you
        get a spell slot (see Table 2–3), you add a spell of the same level to
        your spell repertoire. At 2nd level, you select another 1st-level spell;
        at 3rd level, you select two 2nd-level spells, and so on. When you add
        spells, you might add a higher-level version of a spell you already
        have, so you can cast a heightened version of that spell.
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
        different spell of the same level. You can also instead swap a cantrip.
        You can also swap out spells by retraining during downtime.
      </p>

      <h3 id="mystery">Mystery</h3>
      <p>
        An oracle wields divine power, but not from a single divine being. This
        power could come from a potent concept or ideal, the attention of
        multiple divine entities whose areas of concern all touch on that
        subject, or a direct and dangerous conduit to raw divine power. This is
        the oracle’s mystery, a source of divine magic not beholden to any
        deity.
      </p>
      <p>
        Choose the mystery that empowers your magic. Your mystery grants you
        special spells called revelation spells and might later grant you divine
        domain spells. It dictates the effects of your oracular curse, adds an
        additional cantrip to your repertoire, and gives you one or more trained
        skills. Drawing insight and power from the collective divine influences
        that fuel your magic also provides you with a special benefit.
      </p>
      <p>The following oracle mysteries are available.</p>
      <p>
        <b>Ancestors</b>: Voices of past generations teach and haunt you.
      </p>
      <p>
        <b>Battle</b>: You embody the virtues upheld by heroes of legend.
      </p>
      <p>
        <b>Bones</b>: Death always seems near, and the dead speak to you.
      </p>
      <p>
        <b>Cosmos</b>: You draw power from the stars and the spaces between.
      </p>
      <p>
        <b>Flames</b>: You dance with fire and do your best to remain unscorched
        by it.
      </p>
      <p>
        <b>Life</b>: The teeming energies of life flow through you out into the
        world.
      </p>
      <p>
        <b>Lore</b>: You gain access to unparalleled, overwhelming knowledge.
      </p>
      <p>
        <b>Tempest</b>: Wind, waves, and storms rage at your beck and call.
      </p>
      <p>
        <b>Time</b>: Whether by accident, fate, or purposeful meddling, you
        exist slightly outside of time.
      </p>
      <p>
        <b>Ashes</b>: You see all things in the world as little more than
        fleeting and temporary, waiting to be purified into their base essence:
        the ash left behind after a burning fire.
      </p>

      <h4>Revelation spells</h4>
      <p>
        The powers of your mystery manifest in the form of revelation spells,
        which are a type of focus spell. Casting a revelation spell costs 1
        Focus Point and increases the effects of your oracular curse. You start
        with a focus pool of 2 Focus Points. You refill your focus pool during
        your daily preparations, and you can regain 1 Focus Point by spending 10
        minutes using the Refocus activity to reconcile the conflicting or
        unconventional nature of your divine mystery.
      </p>
      <p>
        Focus spells are automatically heightened to half your level rounded up.
        Focus spells don’t require spell slots, and you can’t cast them using
        spell slots (see Divine Spellcasting). Taking feats can give you more
        focus spells and increase the size of your focus pool, though your focus
        pool can never hold more than 3 Focus Points. The full rules for focus
        spells appear in the Focus Spells section of the Core Rulebook.
      </p>
      <p>
        Revelation spells have the cursebound trait, unlike other focus spells.
        This trait means they increase the severity of your oracular curse (see
        below) when cast. You can’t cast a cursebound spell if you don’t have an
        oracular curse.
      </p>
      <p>
        You learn two revelation spells at 1st level. The first is an initial
        revelation spell determined by your mystery. The second is an initial
        domain spell you select from one of the domains associated with your
        mystery, which you cast as a revelation spell, causing it to gain the
        cursebound trait.
      </p>

      <h4>Ocular curse</h4>
      <p>
        Drawing on multiple disparate sources of power inevitably places an
        incredible stress on your body, manifesting as a supernatural curse. The
        more revelation spells you cast, the worse the effects of your curse,
        but these increasingly conflicting energies can also provide you with
        divine benefits.
      </p>
      <p>
        The specific effects of your curse are tied to your mystery, but all
        curses follow the same progression. A curse continually gives you a mild
        but constant reminder that you carry otherworldly power. As you cast
        revelation spells, your curse intensifies, first to a minor effect and
        then to a moderate effect.
      </p>
      <p>
        Your curse progresses to its minor stage the first time you finish
        casting a revelation spell after your daily preparations. Once your
        minor curse has manifested, it remains in effect until you rest for 8
        hours and again make your daily preparations. If you cast a revelation
        spell while your minor curse is in effect, you progress to the moderate
        curse effect immediately after you finish Casting the Spell. The minor
        effect continues to affect you, though some moderate curse effects might
        alter the specifics of your minor curse. At higher levels, you can cast
        more revelation spells, progressing your curse to its major stage and
        then an extreme stage; these stronger curses are cumulative with the
        effects of the lower stages and can alter them. When you Refocus while
        under the effects of your moderate or stronger curse, you reduce your
        curse’s severity to minor in addition to regaining a Focus Point.
      </p>
      <p>
        Drawing upon your mystery’s power while your curse is at its worst
        causes an irreconcilable conflict between you and the sources of your
        power. Immediately after casting a revelation spell while under the
        moderate effect of your curse, you are overwhelmed. While overwhelmed,
        you can’t Cast or Sustain any revelation spells—you effectively lose
        access to those spells. You can still Refocus to reduce the effects of
        your curse and regain a Focus Point, but doing so doesn’t allow you to
        cast further revelation spells. These effects last until you rest for 8
        hours and make your daily preparations, at which point your curse
        returns to its basic state. At higher levels, you can grow to withstand
        your curse’s major and even extreme effects, enabling you to cast more
        revelation spells without becoming overwhelmed.
      </p>
      <p>
        Your curse has the curse, divine, and necromancy traits. You can’t
        mitigate, reduce, or remove the effects of your oracular curse by any
        means other than Refocusing and resting for 8 hours. For example, if
        your curse makes creatures concealed from you, you can’t negate that
        concealed condition through a magic item or spell, such as true strike
        (though you would still benefit from the other effects of that item or
        spell). Likewise, remove curse and similar spells don’t affect your
        curse at all.
      </p>

      <h3 id="mysteries">Mysteries</h3>
      <p>
        Choose the divine mystery that fuels your mystical power. Your mystery
        might represent a pantheistic devotion to all the deities with power
        over the subject of your mystery, veneration of a particular ideal, or a
        conduit to raw divine energy. Whatever its origin and nature, your
        mystery determines the revelation spells you can cast and the oracular
        curse that overtakes your body when you do. You learn skills related to
        that mystery, gain access to a cantrip, and gain a special benefit drawn
        from the combined divine knowledge and experience of your mystery.
      </p>

      <h4>Reading a mystery entry</h4>
      <p>
        A mystery entry contains the following information, followed by a
        description of that mystery’s curse.
      </p>
      <p>
        <b>Mystery Benefit</b> The mystery benefit is a special ability (or
        abilities) you gain from your mystery.
      </p>
      <p>
        <b>Trained Skill</b> You become trained in the listed skill. A few
        mysteries make you trained in more than one skill.
      </p>
      <p>
        <b>Granted Cantrip</b> You automatically add this cantrip to your spell
        repertoire, in addition to those you gain through divine spellcasting.
      </p>
      <p>
        <b>Revelation Spells</b> You automatically gain your mystery’s initial
        revelation spell at 1st level and can gain more by selecting the
        Advanced Revelation, Greater Revelation, and Diverse Mystery oracle
        feats. These spells appear in the Oracle Focus Spells section.
      </p>
      <p>
        <b>Related Domains</b> These are the cleric domains associated with your
        mystery. You select one initial domain spell from one of these domains
        at 1st level, which you can cast as a revelation spell with the
        cursebound trait. The domains and their domain spells appear in the
        Domains section of the Core Rulebook.
      </p>

      <BaseAccordion
        number={1}
        key={0}
        title="Ancestors"
        text={
          <>
            <p>
              The voices of generations past speak to you, and you hear their
              words. You might resent the constant interruption, or you might
              revere the spirits of those who came before. Perhaps you hail from
              a culture with strong ancestral traditions, such as the Shoanti
              Skoan-Quah (Skull Clan), a traditional dwarven community that
              worships Torag’s family pantheon, or a group that reveres Erastil
              or Pharasma. You might commune with powerful psychopomps who
              shepherd souls to the afterlife, with the River of Souls itself,
              or with those spirits who have become trapped outside of the great
              cycle of spiritual rebirth. You learn from their whispers and the
              fragments of their memories, but opening your mind to their
              knowledge and experience also allows them to meddle in your
              worldly affairs.
            </p>

            <p>
              <b>Mystery Benefit</b> The whispers of your ancestors have
              bestowed additional knowledge upon you. You gain an additional
              ancestry feat at 1st level and another additional ancestry feat at
              11th level. These feats can’t be ones that grant physiological
              effects, such as additional senses or unarmed attacks.
            </p>
            <p>
              <b>Trained Skill</b> Society
            </p>
            <p>
              <b>Granted Cantrip</b> guidance
            </p>
            <p>
              <b>Revelation Spells</b> initial: ancestral touch; advanced:
              ancestral defense; greater: ancestral form
            </p>
            <p>
              <b>Related Domains</b> death, family
            </p>
            <h4>Curse of ancestral meddling</h4>
            <p>
              The ancestral spirits you commune with haunt you and meddle with
              your belongings and actions, either out of a well-intentioned (but
              ultimately detrimental) attempt to assist you, as punishment for
              your audacity in circumventing the traditional means of achieving
              divine power, for their own amusement, or a mixture of the above.
              Your hair, clothing, and belongings constantly shift and stir,
              seemingly of their own volition.
            </p>
            <p>
              <b>Minor Curse</b> One of your ancestors becomes predominant in
              their meddling. The first time you gain this effect each day, roll
              1d4 on Table 2–4: Ancestral Influence to determine which type of
              ancestor becomes predominant. This predominant ancestor guides you
              to use their preferred type of action. When you try to use one of
              the types of actions listed for the other ancestors, you must
              succeed at a DC 4 flat check. On a failure, you spend the action
              but gain no effect (though you don’t lose the spell if you were
              Casting a Spell). If your action would take 1 minute or longer,
              it’s long enough that you can overcome the meddling, and you don’t
              need to attempt a flat check.
            </p>
            <p>
              During combat or another tense, round-by-round encounter, other
              ancestors wrestle for control of your actions. When you roll
              initiative, and then at the end of each of your turns during the
              encounter, roll 1d4 and change your predominant ancestor
              appropriately. Once the encounter ends, you return to the
              influence of the ancestor you first rolled for the day.
            </p>
            <p>
              <b>Moderate Curse</b> The flat check DC to use other actions is 6,
              and you get the moderate curse benefit listed for your predominant
              ancestor in Table 2–4.
            </p>
            <p>
              <b>Major Curse</b> (11th) The flat check DC is 8, and you get the
              major curse benefit listed for your predominant ancestor instead
              of the moderate curse benefit.
            </p>

            <h4>Ancestral influence</h4>
            <table>
              <thead>
                <tr>
                  <th>1d4</th>
                  <th>Ancestor</th>
                  <th>Preferred Action</th>
                  <th>Moderate Curse Benefit</th>
                  <th>Major Curse Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Martial</td>
                  <td>Strikes</td>
                  <td>
                    Your Strikes gain a +1 status bonus to attack rolls and a +2
                    status bonus to damage.
                  </td>
                  <td>
                    Your Strikes gain a +1 status bonus to attack rolls and a +6
                    status bonus to damage.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Skillful</td>
                  <td>Perception and Skill actions</td>
                  <td>
                    You gain a +1 status bonus to skill checks and Perception
                    checks.
                  </td>
                  <td>
                    You gain a +2 status bonus to skill checks and Perception
                    checks.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Spellcasting</td>
                  <td>Cast a Spell</td>
                  <td>
                    Non-cantrip spells without a duration gain a status bonus to
                    their damage and healing equal to the spell’s level.
                  </td>
                  <td>
                    Non-cantrip spells without a duration gain a status bonus to
                    their damage and healing equal to the spell’s level +3.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td colSpan={4}>
                    You choose which ancestor guides your actions.
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        }
      />

      <BaseAccordion
        number={2}
        key={1}
        title="Battle"
        text={
          <>
            <p>
              Warlike forces fill you with physical might and tactical
              knowledge, aiming to have you uphold the glory of combat, fight to
              improve the world, prepare against the necessity of conflict, or
              endure the inevitability of war. You might draw upon deities such
              as Gorum, Iomedae, Rovagug, the Horseman of War Szuriel, the Queen
              of the Night Eiseth, the Vudrani god Diomazul, and others, or you
              might find power in the unending conflict between the armies of
              Heaven and Hell, the Elemental Planes, the Outer Gods, or even the
              collective spirits of those who fought in wars over the ages.
            </p>

            <p>
              <b>Mystery Benefit</b> You are no stranger to the trappings of
              warfare. You are trained in medium and heavy armor. At 13th level,
              if you gain the light armor expertise class feature, you also gain
              expert proficiency in these armors.
            </p>
            <p>
              Choose one weapon group that embodies your mystery. You are
              trained in all martial weapons of that group. At 11th level, if
              you gain the weapon expertise class feature, you also gain expert
              proficiency for martial weapons in your chosen group, and you
              become trained in advanced weapons in that group.
            </p>
            <p>
              <b>Trained Skill</b> Athletics
            </p>
            <p>
              <b>Granted Cantrip</b> shield
            </p>
            <p>
              <b>Revelation Spells</b> initial: call to arms; advanced:
              battlefield persistence; greater: heroic feat
            </p>
            <p>
              <b>Related Domains</b> might, zeal
            </p>
            <h4>Curse of the hero's burden</h4>
            <p>
              You thrive while adrenaline flows and your life depends on your
              might alone, but holding the collective battle prowess of the ages
              within you leaves your body weakened after a fight. You smell
              faintly of steel and blood no matter how you try to remove or mask
              the scent, you appear more muscular than you actually are, and you
              hear the faint clash and clamor of battle in the distance at all
              times.
            </p>
            <p>
              <b>Minor Curse</b> Your body languishes when you aren’t bringing
              harm to your foes. You take a –2 status penalty to AC and saving
              throws, but each time you make a Strike, you can suspend these
              penalties until the start of your next turn.
            </p>
            <p>
              <b>Moderate Curse</b> The strain of conflict wears upon your body,
              even though you gain vitality from it. Making a Strike reduces the
              penalty from your minor curse to –1 rather than suspending it
              entirely. You gain a +2 status bonus to weapon and unarmed damage
              rolls. You also gain fast healing equal to half your level while
              in a non-trivial combat encounter.
            </p>
            <p>
              <b>Major Curse</b> (11th) Your body proves capable of truly heroic
              feats, but doing so interferes with your mental focus. Your
              moderate curse’s fast healing is equal to your level, and its
              damage bonus is +6. You gain a +1 status bonus to weapon and
              unarmed attack rolls, but you are stupefied 2.
            </p>
          </>
        }
      />

      <BaseAccordion
        number={3}
        key={2}
        title="Bones"
        text={
          <>
            <p>
              Your mystery imparts an understanding of death and undeath in all
              their macabre complexity. You might have had a brush with death
              yourself—maybe even dying and returning to life—or carry the touch
              of undeath in your blood. If you commune with deities, you might
              speak with guardians of death like Pharasma and the psychopomp
              ushers (the most powerful among creatures that guide souls through
              the afterlife); a bringer of death like the Mantis God Achaekek or
              the Horseman of the Apocalypse Charon; or a herald of undeath such
              as Urgathoa.
            </p>

            <p>
              <b>Mystery Benefit</b> You can cleverly leverage the subtleties of
              life and death to your benefit. Each day during your preparations,
              you can choose to align yourself in the confluence of positive and
              negative energy so as to gain negative healing, which means you
              are harmed by positive damage and healed by negative effects as if
              you were undead. If you already have negative healing, instead the
              DC of your recovery checks is equal to 9 + your current dying
              value.
            </p>
            <p>
              <b>Trained Skill</b> Medicine
            </p>
            <p>
              <b>Granted Cantrip</b> chill touch
            </p>
            <p>
              <b>Revelation Spells</b> initial: soul siphon; advanced: armor of
              bones; greater: claim undead
            </p>
            <p>
              <b>Related Domains</b> death, undeath
            </p>
            <h4>Curse of living death</h4>
            <p>
              Your body is slowly decaying even though you are alive, and using
              your powers furthers this unnatural living death. You carry a
              touch of the grave about you, manifesting as bloodless pallor, a
              faint smell of earth, or deathly cold skin.
            </p>
            <p>
              <b>Minor Curse</b> Bones protrude through your skin and your flesh
              rots, combining with a stench of decay and an unearthly chill.
              Non-magical effects that would restore your Hit Points only grant
              you half as many HP as normal.
            </p>
            <p>
              <b>Moderate Curse</b> Your dead flesh continues to rot, affecting
              your health. You become drained 1, and this drained condition is
              cumulative with any other drained conditions you gain. This
              drained condition is removed only when you Refocus; effects that
              normally remove the drained condition reduce your drained
              condition to drained 1 instead. In addition, you gain resistance
              to poison equal to half your level. You gain a +4 status bonus to
              saves against diseases, poisons, and death effects, and if you
              roll a success on such a save, you get a critical success instead.
            </p>
            <p>
              <b>Major Curse</b> (11th) You stand just steps from the grave. You
              become wounded 1. This wounded condition is removed only when you
              Refocus; effects that normally remove the wounded condition reduce
              your wounded condition to wounded 1 instead. When you would
              attempt a recovery check, you can choose to get an automatic
              success instead of rolling, and if you roll a critical failure on
              a save against a disease, poison, or death effect, you get a
              failure instead.
            </p>
          </>
        }
      />

      <BaseAccordion
        number={4}
        key={3}
        title="Cosmos"
        text={
          <>
            <p>
              Celestial bodies great and small exert influence on you, giving
              you sublime cosmic power. Perhaps you see the glittering stars as
              a divine blessing, or perhaps you feel drawn to the infinitely
              dark spaces between. You might uphold deities like Desna,
              Sarenrae, or the deific lovers Shizuru and Tsukiyo who represent
              the sun and the moon—or you might draw power from dark entities
              from beyond the stars, like certain Outer Gods, or destructive
              gods of the night like Zon-Kuthon or the rat goddess Lao Shu Po.
            </p>

            <p>
              <b>Mystery Benefit</b> Your body is as much an astronomical one as
              it is physical. You gain resistance equal to 2 + half your level
              against all physical damage.
            </p>
            <p>
              <b>Trained Skill</b> Nature
            </p>
            <p>
              <b>Granted Cantrip</b> dancing lights
            </p>
            <p>
              <b>Revelation Spells</b> initial: spray of stars; advanced:
              interstellar void; greater: moonlight bridge
            </p>
            <p>
              <b>Related Domains</b> darkness, moon
            </p>
            <h4>Curse of the sky's call</h4>
            <p>
              You have your head in the clouds—and not just figuratively. Your
              body is drawn toward the heavens, making you lighter and less
              substantial than you should be. Your eyes glow with starry light,
              and your hair and clothing float and drift around you.
            </p>
            <p>
              <b>Minor Curse</b> Your unnatural lightness makes it hard to keep
              your footing and interact with other physical objects. You are
              enfeebled 1 and take a –2 penalty to saves and DCs against
              Grapple, Shove, and other forms of forced movement.
            </p>
            <p>
              <b>Moderate Curse</b> Your body is drawn further skyward. You are
              enfeebled 2, and the penalty from your minor curse increases to
              –3. You are treated as one size smaller for wind effects. You gain
              a +2 status bonus against Trip attempts, you only take half as
              much damage from falls, and you gain the effects of the Powerful
              Leap and Quick Jump skill feats. You weigh only half as much, and
              your Bulk, should someone need to carry you, is also half as much.
            </p>
            <p>
              <b>Major Curse</b> (11th) As your body rises, you float just above
              the ground beneath you. You become enfeebled 4, and the penalty
              from your minor curse increases to –4. You can walk on liquids as
              if they were solid; you gain the effects of the Cloud Jump skill
              feat; and you don’t leave tracks, trigger weight-sensitive
              pressure plates, or otherwise connect with the ground below you.
            </p>
          </>
        }
      />

      <BaseAccordion
        number={5}
        key={4}
        title="Flames"
        text={
          <>
            <p>
              Fire lives at the center of the world, the center of the sun, and
              the center of civilization. You might revere this elemental force,
              siphon power from the Elemental Plane of Fire, or venerate a
              collection of deities such as Asmodeus, Sarenrae, the Tian goddess
              of disasters and volcanoes Lady Nanbyo, or the elemental lord of
              fire Ymeri.
            </p>

            <p>
              <b>Mystery Benefit</b> Like fire itself, you flicker and dance,
              avoiding effects that would quench your vitality. You have expert
              proficiency in Reflex saves. At 13th level, if you gain the
              lightning reflexes class feature, your proficiency rank for Reflex
              saves increases to master, and when you roll a success on a Reflex
              save, you get a critical success instead.
            </p>
            <p>
              <b>Trained Skill</b> Acrobatics
            </p>
            <p>
              <b>Granted Cantrip</b> produce flame
            </p>
            <p>
              <b>Revelation Spells</b> initial: incendiary aura; advanced:
              whirling flames; greater: flaming fusillade
            </p>
            <p>
              <b>Related Domains</b> fire, sun
            </p>
            <h4>Curse of engulfing flames</h4>
            <p>
              You see flames and smoke wherever you look. These flames might be
              imagined, or they might be a preternatural glimpse of the
              metaphorical fires that empower the entire multiverse—but you
              always see them. Fires flare noticeably (though not dangerously)
              in your presence, you occasionally smoke slightly, and your body
              is almost painfully hot to the touch.
            </p>
            <p>
              <b>Minor Curse</b> The smoke, heat, and crackling flames of your
              curse fill your vision and all your other senses. Creatures
              further than 30 feet are concealed from you. You can’t benefit
              from effects that would allow you to ignore or mitigate this
              concealment, as normal for effects of an oracular curse.
            </p>
            <p>
              <b>Moderate Curse</b> Smoke and flickering visions of flame fill
              your senses more completely, and harmless flickers of obscuring
              flames also fill your space. You are concealed from other
              creatures, though as the other creatures aren’t cursed themselves,
              they can benefit from effects that would allow them to ignore or
              mitigate the concealed condition, as normal. All other creatures
              and objects are concealed from you regardless of distance;
              however, when casting a fire spell, you automatically succeed at
              the flat check for this concealed condition for targets within 30
              feet.
            </p>
            <p>
              All your senses become imprecise beyond 30 feet, meaning
              everything past 30 feet that you’d normally be able to see is
              hidden from you.
            </p>
            <p>
              <b>Major Curse</b> (11th) The flames surrounding you are no longer
              simply visions. An aura of fire surrounds you in a 10-foot
              emanation, dealing 4d6 fire damage (basic Reflex save) to all
              other creatures in the aura at the end of each of your turns. You
              lose 1d6 Hit Points at the end of your turn each round, with no
              save; if you have a weakness to fire, increase the number of HP
              you lose by that weakness.
            </p>
            <p>
              You can suppress your aura until the start of your next turn by
              spending a single action, which has the concentrate trait, to
              diminish the flames, causing neither you nor anyone in the aura to
              take damage. While Refocusing to reduce your curse, you are
              continually diminishing the flames, so you don’t lose HP. The
              flames subside if you fall unconscious, but they resume when you
              wake up unless you rested for long enough to reset your curse. As
              usual for oracular curses, you can’t mitigate or reduce the lost
              Hit Points in any way, though you can still heal the lost HP
              normally after the fact.
            </p>
          </>
        }
      />

      <BaseAccordion
        number={6}
        key={5}
        title="Life"
        text={
          <>
            <p>
              The never-ending flow of positive energy within living beings is
              palpable to you. You might uphold the sanctity of life, or perhaps
              you seek to undermine it. You might draw power from the collective
              vitality of the world’s living creatures, hold some connection to
              the Positive Energy Plane, or revere a collection of deities
              including Irori, Pharasma, Sarenrae, and the god of medicine Qi
              Zhong.
            </p>

            <p>
              <b>Mystery Benefit</b> Your body is a deep reservoir of life
              energy. At each level, you gain Hit Points equal to 10 + your
              Constitution modifier from the oracle class, instead of 8 + your
              Constitution modifier.
            </p>
            <p>
              <b>Trained Skill</b> Medicine
            </p>
            <p>
              <b>Granted Cantrip</b> stabilize
            </p>
            <p>
              <b>Revelation Spells</b> initial: life link; advanced: delay
              affliction; greater: life-giving form
            </p>
            <p>
              <b>Related Domains</b> death, healing
            </p>
            <h4>Curse of outpouring life</h4>
            <p>
              Life energy flows outward from you and connects you to all living
              things, but you expend your vital essence to do so. Your presence
              comforts the ill and injured, causes scars to fade slightly, spurs
              new growth in plants, and otherwise infuses your surroundings with
              vitality.
            </p>
            <p>
              <b>Minor Curse</b> As your life force seeps outward, it becomes
              more difficult to keep your body functioning. Effects that restore
              Hit Points to you take a status penalty equal to half your level
              (minimum 1) to the number of HP you recover.
            </p>
            <p>
              <b>Moderate Curse</b> The flow of life energy away from you can’t
              be reversed. In addition to the effects of your minor curse, you
              can’t be healed by magical effects originating from other
              creatures. However, if you are unconscious, magical effects can
              restore you to 1 HP (but no higher). You are affected normally by
              healing elixirs, potions, and other items. When you cast heal and
              all your targets are living creatures, you roll d12s instead of
              d8s for the amount of healing.
            </p>
            <p>
              Whenever you finish casting a non-cantrip spell, you restore Hit
              Points equal to the spell level to your choice of either one
              target of the spell or the creature nearest to you. You can’t heal
              yourself in this way. This healing has the healing, necromancy,
              and positive traits, as well as the tradition trait of the spell.
            </p>
            <p>
              <b>Major Curse</b> (11th) Life energy tears through you to empower
              your magic. Some of your spells carry positive energy with them.
              Each time you use a spell slot to cast a 5th-level or higher spell
              that takes 2 or more actions to cast, you disperse positive energy
              in a 30-foot burst with the effects of a 3-action heal spell with
              a level 4 lower than that of the spell you cast. This healing
              occurs immediately after you finish Casting the Spell. You don’t
              benefit from this healing. Instead, you lose double the number of
              Hit Points rolled for the heal spell
            </p>
          </>
        }
      />

      <BaseAccordion
        number={7}
        key={6}
        title="Lore"
        text={
          <>
            <p>
              Knowledge and information come freely to you. You might use this
              lore to gain power or perhaps to understand the divine mysteries
              of the multiverse. You might have a conduit to the fabled Akashic
              Record, maintain a subtle telepathic connection to the collective
              subconscious of all living creatures, or follow in the footsteps
              of deities such as Abadar, Irori, Nethys, Irori’s scholarly nephew
              Gruhastha, the fey triune goddess of fate Magdh, or the lawful
              aeon god-figure known as the Monad.
            </p>

            <p>
              <b>Mystery Benefit</b> You hold more mystical knowledge within you
              than most. You have one additional spell in your repertoire of
              each level you can cast.
            </p>
            <p>
              <b>Trained Skill</b> Occultism and one Lore skill of your choice
            </p>
            <p>
              <b>Granted Cantrip</b> read aura
            </p>
            <p>
              <b>Revelation Spells</b> initial: brain drain; advanced: access
              lore; greater: dread secret
            </p>
            <p>
              <b>Related Domains</b> knowledge, truth
            </p>

            <h4>Curse of torrential knowledge</h4>
            <p>
              You have a link to true divine knowledge, but your mortal mind
              struggles to process and act on what you know. Loose materials
              around you, such as dust, grains of rice, and droplets of water,
              slowly shift to form strange runes or faint indecipherable
              writing, and you sometimes speak unintelligible truths or
              statements in unknown languages without realizing it.
            </p>
            <p>
              <b>Minor Curse</b> You take a –4 penalty to initiative, as trying
              to process a surge of information about what’s happening around
              you slows your ability to respond to it.
            </p>
            <p>
              <b>Moderate Curse</b> The flow of information through your mind
              grows. The attention you divert to process this huge influx of
              information means you are always flat-footed. At the start of each
              of your turns, you automatically make one check to Recall
              Knowledge as a free action. This uses a skill of your choice that
              has the Recall Knowledge action, using a result equal to 10 + your
              proficiency bonus in that skill (with no other bonuses, penalties,
              or modifiers).
            </p>
            <p>
              <b>Major Curse</b> The massive flow of information clouding your
              mind overwhelms your ability to communicate with others. You can
              understand all languages, but you can’t speak, use linguistic
              effects, or otherwise communicate with your allies. If you Cast a
              Spell with a verbal component, you must succeed at a DC 5 flat
              check or the spell is lost. You gain a +4 status bonus on saving
              throws against linguistic effects.
            </p>
          </>
        }
      />

      <BaseAccordion
        number={8}
        key={7}
        title="Tempest"
        text={
          <>
            <p>
              Knowledge and information come freely to you. You might use this
              The fury of the wind and waves pounds in your heart, whether your
              power flows from natural storms, a conduit to the elemental Planes
              of Air and Water, or through reverence of deities such as Gozreh,
              the tengu god of storms Hei Feng, the demon lord Dagon, or the
              elemental lords of air and water.
            </p>

            <p>
              <b>Mystery Benefit</b> You can see perfectly through wind and
              water, and you send electric charges through both air and water.
              You never take penalties to Perception from wind, rain, fog, or
              other precipitation, or from looking through water or being
              underwater, and such conditions don’t cause anything to be
              concealed from you.
            </p>
            <p>
              When you deal physical damage with a non-cantrip air or water
              spell, you deal an additional 1 electricity damage per spell
              level.
            </p>
            <p>
              <b>Trained Skill</b> Nature
            </p>
            <p>
              <b>Granted Cantrip</b> electric arc
            </p>
            <p>
              <b>Revelation Spells</b> initial: tempest touch; advanced:
              thunderburst; greater: tempest form
            </p>
            <p>
              <b>Related Domains</b> Air, Water
            </p>

            <h4>Curse of perpetual storm</h4>
            <p>
              You are the center of your own tiny tempest, ever surrounded by
              wind and rain that worsens the more you tap into your elemental
              powers. Even when you are calm and at rest, your hair and clothing
              are blown about by gentle winds, you are slightly damp, and your
              touch often comes with a static shock.
            </p>
            <p>
              <b>Minor Curse</b> An aura of a whirling storm whips up in a
              5-foot emanation around you and in your space. The aura puts out
              small non-magical fires 1 round after they’re lit or brought into
              your aura.
            </p>
            <p>
              Electrical energy builds up within your storm, turning you into a
              lightning rod; you gain weakness 2 to electricity, and electricity
              spells or effects that have additional effects for a creature
              wearing or holding metal treat you as though you were wearing
              metal.
            </p>
            <p>
              <b>Moderate Curse</b> Your minor curse’s aura expands to a 10-foot
              emanation and carries rain on the winds. The whirling winds impose
              a –2 circumstance penalty on ranged attack rolls using physical
              ammunition that target you or originate from you. Your weakness to
              electricity increases to 5 or half your level, whichever is
              greater, but torrential rain grants you an equal amount of fire
              resistance.
            </p>
            <p>
              <b>Major Curse</b> (11th) Your minor curse’s aura expands to a
              15-foot emanation and grows stronger. High winds blowing outward
              in the aura impede creatures’ progress. The aura is difficult
              terrain for Large and smaller creatures on the ground, and for
              Huge or smaller flying creatures. You aren’t affected by this
              difficult terrain.
            </p>
            <p>
              The electricity arcing through you becomes dangerous. Any creature
              that touches you, including with a touch spell or a melee unarmed
              attack, takes 1d6 electricity damage.
            </p>
          </>
        }
      />

      <BaseAccordion
        number={9}
        key={8}
        title="Time"
        text={
          <>
            <i>Dark Archive</i>
            <p>
              Whether by accident, fate, or purposeful meddling, you exist
              slightly outside of time. While initially unmoored by moments, the
              countless march of milliseconds builds up to drift you further and
              further out of sync with your natural timeline, often in
              contradictory directions. You might view this as a blessing,
              perhaps as a sign you’re somehow beyond mortality or you can’t be
              contained within reality’s limitations, or you might view it as a
              cruel curse that causes your own life to slip by adrift even as
              you gain power over time. Many oracles of time are without faith
              and either come to rely upon their own instincts to survive or
              else turn to strange rituals and forbidden magic in an attempt to
              break free of time’s grasp. Those oracles who worship deities most
              often worship Pharasma, goddess of fate who sees all possible
              futures for all who ever lived, or Alseta, goddess of transitions
              and the passage through time.
            </p>

            <p>
              <b>Mystery Benefit</b> Time passes more swiftly for you than it
              does for those around you, enabling you to cover more distance in
              what others perceive as the same amount of time. You gain a
              +10-foot status bonus to your Speed. At 6th level, this increases
              to a +15-foot status bonus; at 10th level, this increases to a
              +20-foot status bonus; at 14th level, this increases to a +25-foot
              status bonus; and at 18th level, it increases to a +30-foot status
              bonus. Your disjointed movement makes it harder for creatures to
              hit you as you move. You gain a +1 status bonus to AC against
              attacks made against you from reactions or free actions while
              you’re moving.
            </p>
            <p>
              When you deal physical damage with a non-cantrip air or water
              spell, you deal an additional 1 electricity damage per spell
              level.
            </p>
            <p>
              <b>Trained Skill</b> Occultism
            </p>
            <p>
              <b>Granted Cantrip</b> time sense
            </p>
            <p>
              <b>Revelation Spells</b> initial: temporal distortion; advanced:
              time skip; greater: manifold lives
            </p>
            <p>
              <b>Related Domains</b> fate, time
            </p>

            <h4>Curse of turbulent moments</h4>
            <p>
              Time passes differently for you than everyone else. You experience
              fluxes that might manifest as minor day-to-day changes in your
              apparent age, such as a gray lock of hair or a disappearing
              wrinkle, or as occasional ghostly temporal afterimages that
              slightly trail your movement.
            </p>
            <p>
              <b>Minor Curse</b> As you draw upon your mystery, time’s passage
              becomes more disjointed, aging, regressing, or warping you out of
              sync. You become enfeebled 1. In addition, you take a –2 penalty
              to saving throws against effects that would make you fatigued or
              slowed.
            </p>
            <p>
              <b>Moderate Curse</b> Time distorts further, increasing your
              muscular atrophy, age regression, or warping while making effects
              pass you by at an increased rate. The value of your enfeebled
              condition increases to 2 and the penalty from your minor curse
              increases to –3. Your status bonus to AC against attacks made
              against you from reactions or free actions while you’re moving
              increases to +2. In addition, spells affecting you last less time;
              their duration is reduced by half, to a minimum of 1 round. This
              doesn’t reduce the spell’s duration for other targets affected by
              the same spell. Finally, all non-permanent conditions affecting
              you that have a duration measured in rounds, minutes, or hours
              have their duration reduced by half, to a minimum of 1 round. Any
              afflictions (such as poisons, diseases, and curses) affecting you
              have their maximum duration, onset time, and time for each stage
              reduced by half. Spells, conditions, and afflictions that last
              “until your next daily preparations” last for 12 hours or until
              your next daily preparations, whichever comes first. This doesn’t
              change the duration you’re temporarily immune, the rate at which
              you can use abilities that have a frequency, or any other features
              based on the passage of time.
            </p>
            <p>
              <b>Major Curse</b> (11th) You become so out of sync with time that
              it’s hard for you to act, but when you do act, you do so with
              incredible speed. You become slowed 1, the value of your enfeebled
              condition increases to 3, and the penalty from your minor curse
              increases to –4. Time passes so much faster for you that your
              steps appear as a blur of motion to others. You gain a +4 status
              bonus to initiative rolls. Whenever you move, you’re concealed
              while you’re moving and until the start of your next turn. As
              normal for concealment where your location is still obvious, you
              can’t use this concealment to Hide or Sneak. Your status bonus to
              AC against attacks made against you from reactions or free actions
              while you’re moving increases to +4.
            </p>
          </>
        }
      />
      <BaseAccordion
        number={10}
        key={9}
        title="Ashes"
        text={
          <>
            <i>Blood Lords #5: A Taste of Ashes</i>
            <p>
              You see all things in the world as little more than fleeting and
              temporary, waiting to be purified into their base essence: the ash
              left behind after a burning fire. While you understand fire is a
              necessary part of this process, you see fire mostly as a tool to
              achieve final purity, not a goal. You have much in common with
              oracles with the flames mystery, but you may consider them to be
              short-sighted, or at best simply lacking in understanding of the
              truths that their burning fires impart.
            </p>
            <p>
              You might see ash as the only true representation of the
              impermanent nature of life and its pointless existence.
              Alternatively, you may see the benefit ash can have on soils and
              farmlands as part of a larger cycle of death and rebirth. Perhaps
              you see the phoenix, with its life cycle of being reduced to ash
              and reborn, as a sacred creature that has achieved a higher state
              of being and worthy of imitation (or maybe you see it as a tragic
              creature that can’t ever reach the goal of perfection). If you
              follow a deity, you might follow gods of fire like Sarenrae, those
              who burn impurities to ash such as Brigh or Torag, or those who
              strive to burn all things to ash, such as the archdevil Moloch or
              the demon lord Flauros.
            </p>

            <p>
              <b>Mystery Benefit</b> Your flesh flows around physical threats
              like a cloud of ash. You gain resistance equal to half your level
              (minimum 1) against all physical damage and you gain a +2
              circumstance bonus to saves and DCs against Grapple, Shove, and
              forced movement.
            </p>
            <p>
              <b>Trained Skill</b> Occultism
            </p>
            <p>
              <b>Granted Cantrip</b> produce flame
            </p>
            <p>
              <b>Revelation Spells</b> initial: ashen wind; advanced: incendiary
              ashes; greater: ash form
            </p>
            <p>
              <b>Related Domains</b> destruction, fire
            </p>

            <h4>Curse of creeping ashes</h4>
            <p>
              Your body is slowly being consumed by the fires of your internal
              power, purifying you with each passing day. You are occasionally
              wracked with dry, wheezing coughs, and wherever you go you leave
              behind a fine trace of ash that falls from your body.
            </p>
            <p>
              <b>Minor Curse</b> The smoldering furnace of power within you
              begins to feed on your body and generate ash, which you inhale
              with every breath and leave behind with every step, impeding your
              footing. You take a –1 penalty on Constitution-based checks, such
              as Fortitude saves, and your Speed is reduced by 10 feet.
            </p>
            <p>
              <b>Moderate Curse</b> The ash you produce intensifies and fills
              the area around you, obscuring details and making the ground
              challenging to navigate. You are dazzled. An aura of ash surrounds
              you in a 10-foot emanation. You and creatures in the aura are
              concealed. If you do not move for 1 round, heaps of ashes settle
              in the aura, creating difficult terrain that lasts until you move
              (when the ashes blow away).
            </p>
            <p>
              <b>Major Curse</b> (11th) You and nearby creatures collapse into
              ash with the slightest flame. Within your moderate curse’s aura,
              you and all creatures gain weakness to fire equal to half your
              level. If a creature other than you in this aura is killed by fire
              damage, its body collapses into ash. Objects and structures in
              your aura halve their Hardness, and any parts of the object or
              structures in your aura that are reduced to 0 Hit Points collapse
              into ash.
            </p>
          </>
        }
      />

      <h3 id="oracle-feat">Oracle Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain an oracle class
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
        Experience enables you to cast some spells more flexibly. For each spell
        level you have access to, choose one spell of that level to be a
        signature spell. You don’t need to learn heightened versions of
        signature spells separately; instead, you can heighten these spells
        freely. If you’ve learned a signature spell at a higher level than its
        minimum, you can also cast all its lower-level versions without learning
        those separately. If you swap out a signature spell, you can replace it
        with any spell you could have chosen when you first selected it (i.e.,
        of the same spell level or lower). You can also retrain specifically to
        change a signature spell to a different spell of that level without
        swapping any spells; this takes as much time as retraining a spell
        normally does.
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
              * The oracular clarity class feature gives you a 10th-level spell
              slot that works differently from other spell slots.
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex">
        <div className="flex-column">
          <h3 id="ability-boosts">Ability Boosts</h3>
          <p>
            At 5th level and every 5 levels thereafter, you boost four different
            ability scores. You can use these ability boosts to increase your
            ability scores above 18. Boosting an ability score increases it by 1
            if it’s already 18 or above, or by 2 if starts out below 18.
          </p>

          <h3 id="ancestry-feat">Ancestry Feats</h3>
          <p>
            In addition to the ancestry feat you started with, you gain an
            ancestry feat at 5th level and every 4 levels thereafter.
          </p>

          <h3 id="expert-spellcaster">Expert spellcaster</h3>
          <p>
            The intricacy of your divine power has grown clearer over time. Your
            proficiency ranks for divine spell attack rolls and spell DCs
            increase to expert.
          </p>

          <h3 id="resolve">Resolve</h3>
          <p>
            You’ve steeled your mind with resolve. Your proficiency rank for
            Will saves increases to master. When you roll a success on a Will
            save, you get a critical success instead.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/oracle_02.webp")}
            alt="oracle example"
          />
        </figure>
      </div>

      <h3 id="magical-fortitude">Magical fortitude</h3>
      <p>
        Magical power has improved your body’s resiliency. Your proficiency rank
        for Fortitude saves increases to expert.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="alertness">Alertness</h3>
          <p>
            You remain alert to threats around you. Your proficiency rank for
            Perception increases to expert.
          </p>

          <h3 id="major-curse">Major curse</h3>
          <p>
            You’ve learned to better balance the conflicting powers wreaking
            havoc on your body. Immediately after completing the casting of a
            revelation spell while you are affected by your moderate curse, your
            curse progresses to its major effect, rather than overwhelming you.
            This effect lasts until you Refocus, which reduces your curse to its
            minor effect. If you cast a revelation spell while under the effects
            of your major curse, you are overwhelmed by your curse.
          </p>
          <p>
            In addition, increase the number of Focus Points in your focus pool
            from 2 to 3. If you spend at least 2 Focus Points before you again
            Refocus, you recover 2 Focus Points when you Refocus instead of 1.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/oracle_03.webp")}
            alt="Oracle example"
          />
        </figure>
      </div>

      <h3 id="weapon-expertise">Weapon expertise</h3>
      <p>
        You’ve dedicated yourself to learning the intricacies of your weapons.
        Your proficiency ranks for simple weapons and unarmed attacks increase
        to expert.
      </p>

      <h3 id="light-armor-expertise">Light armor expertise</h3>
      <p>
        You’ve learned how to dodge while wearing light or no armor. Your
        proficiency rank for light armor and unarmored defense increases to
        expert.
      </p>

      <h3 id="lighting-reflexes">Lighting reflexes</h3>
      <p>
        Your reflexes are lightning fast. Your proficiency rank for Reflex saves
        increases to expert.
      </p>

      <h3 id="weapon-specialization">Weapon specialization</h3>
      <p>
        You’ve learned how to inflict greater injuries with the weapons you know
        best. You deal 2 additional damage with weapons and unarmed attacks in
        which you are an expert. This damage increases to 3 if you’re a master
        and 4 if you’re legendary.
      </p>

      <h3 id="master-spellcaster">Master spellcaster</h3>
      <p>
        You truly understand the deep and complex divine power within your
        mystery. Your proficiency ranks for divine spell attack rolls and spell
        DCs increase to master.
      </p>

      <h3 id="extreme-curse">Extreme curse</h3>
      <p>
        You have mastered a perilous balance between the conflicting divine
        powers of your mystery, gaining the power to change your fate, but
        straining both body and soul. When you cast a revelation spell while
        affected by your major curse, your curse intensifies to an extreme
        effect instead of overwhelming you. All mysteries share the same effects
        for their extreme curse.
      </p>
      <p>
        When affected by your extreme curse, you become doomed 2 (or increase
        your doomed condition by 2 if you were already doomed). Once every 10
        minutes, when you fail an attack roll, skill or Perception check, or
        saving throw, you can reroll it and use the second result. The reroll
        has the fortune trait and doesn’t require you to spend an action,
        meaning you can use the reroll even if you can’t act. These effects are
        in addition to all the effects of your major curse, and they can’t be
        removed by any means until you Refocus to reduce your curse to its minor
        effect.
      </p>
      <p>
        If you cast a revelation spell while under the effects of this extreme
        curse, you are overwhelmed by your curse, and you remain doomed 2 even
        if you Refocus.
      </p>
      <p>
        Additionally, if you spend at least 3 Focus Points before you again
        Refocus, you recover 3 Focus Points when you Refocus instead of 1.
      </p>

      <h3 id="greater-resolve">Greater resolve</h3>
      <p>
        Your unbelievable training grants you mental resiliency. Your
        proficiency rank for Will saves increases to legendary. When you roll a
        success on a Will save, you get a critical success instead. When you
        roll a critical failure on a Will save, you get a failure instead. When
        you fail a Will save against a damaging effect, you take half damage.
      </p>

      <h3 id="legendary-spellcaster">Legendary spellcaster</h3>
      <p>
        You can harness divine power at a level few others can match. Your
        proficiency ranks for divine spell attack rolls and spell DCs increase
        to legendary.
      </p>

      <h3 id="ocular-clarity">Ocular clarity</h3>
      <p>
        You now fully grasp the nature of the divine power behind your mystery,
        allowing you to work magic akin to miracles. Add two common 10th-level
        divine spells to your repertoire. You gain a single 10th-level spell
        slot you can use to cast one of those two spells using oracle
        spellcasting. You don’t gain more 10th-level spells as you level up,
        unlike other spell slots, and you can’t use 10th-level slots with
        abilities that give you more spell slots or that let you cast spells
        without expending spell slots. You can take the Oracular Providence feat
        to gain a second slot.
      </p>

      <h2>Monk Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 5 gp, 5 sp, 2 cp.
        </li>
        <li>
          <b>Bulk:</b> 3 Bulk, 3 light.
        </li>
        <li>
          <b>Money Left Over:</b> 9 gp, 4 sp, 8 cp.
        </li>
        <li>
          <li>
            <b>Armor:</b> studded leather armor.
          </li>
          <b>Weapons:</b> mace, sling with 20 sling bullets
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack
        </li>
        <li>
          <b>Options:</b> steel shield (2 gp), healer’s tools (5 gp)
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
        At every level that you gain an oracle feat, you can select one of the
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
      <p>Oracles can gain the following Revelation spells.</p>
      <p>
        Revelation spells have the cursebound trait, unlike other focus spells.
        This trait means they increase the severity of your oracular curse (see
        below) when cast. You can’t cast a cursebound spell if you don’t have an
        oracular curse.
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

export default OraclePage;
