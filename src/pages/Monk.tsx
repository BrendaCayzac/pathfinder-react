import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";
import { magusFeats } from "../middleware/MagusFeats";

const MonkPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    magusFeats
  );

  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...magusFeats];
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
        <h1>Monk</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          The strength of your fist flows from your mind and spirit. You seek
          perfection—honing your body into a flawless instrument and your mind
          into an orderly bastion of wisdom. You’re a fierce combatant renowned
          for martial arts skills and combat stances that grant you unique
          fighting moves. While the challenge of mastering many fighting styles
          drives you to great heights, you also enjoy meditating on
          philosophical questions and discovering new ways to obtain peace and
          enlightenment.
        </p>
        <figure>
          <img src={require("../assets/img/monk_icon.png")} alt="Monk icon" />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Strength or Dexterity</b>
          <p>
            At 1st level, your class gives you an ability boost to your choice
            of Strength or Dexterity.
          </p>
        </div>
        <div className="column">
          <h2>Hit points</h2>
          <b>810plus your Constitution Modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>

      <figure className="figure-one">
        <img src={require("../assets/img/monk_01.webp")} alt="Magus image" />
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
          <li>Expert in Fortitude</li>
          <li>Expert in Reflex</li>
          <li>Expert in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>
            Trained in a number of skills equal to 4 plus your Intelligence
            modifier
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
          <li>Expert in unarmored defense</li>
        </ul>
        <h2>Spells</h2>
        <p>Trained in monk class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You speed into the fray, dodging or leaping past obstacles with
            acrobatic maneuvers. You strike opponents in a rapid flurry of
            attacks, using your bare fists or wielding specialized weapons that
            you mastered during your monastic training. Stances let you change
            up your combat style for different situations, and ki abilities
            allow you to perform mystic feats like healing yourself and soaring
            through the air.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            Your perceptiveness lets you see through falsehoods, and your
            philosophical training provides insight into any situation.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You climb up walls, dodge traps, overcome obstacles, and leap over
            pits. You usually stay toward the outside of the group to protect
            more vulnerable members, and you’re well suited to looking for
            danger or moving stealthily.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You diligently exercise, eat healthy foods, meditate, and study
            various philosophies. You might also take up a craft that you strive
            to perfect.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>Maintain a regimen of physical training and meditation.</li>
        <li>
          Face adversity with a calm and measured approach, never panicking or
          succumbing to despair.
        </li>
        <li>
          Look to the future for ways you can improve, while remaining at peace
          with your present self.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>Marvel at your feats of physical prowess.</li>
        <li>
          Think you’re more than a bit uptight, given your vows and tenets.
        </li>
        <li>Come to you for philosophical advice.</li>
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
              <a href="#flurry-of-blows">flurry of blows</a>,{" "}
              <a href="#monk-feat">monk feat</a>,{" "}
              <a href="#powerful-fist">powerful fist</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#incredible-movement">incredible movement</a> +10 feet,{" "}
              <a href="#mystic-strikes">mystic strikes</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#alertness">alertness</a>,{" "}
              <a href="#expert-strikes">expert strikes</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#incredible-movement">incredible movement</a> +15 feet,{" "}
              <a href="#path-to-perfection">path to perfection</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#metal-strikes">metal strikes</a>,{" "}
              <a href="#monk-expertise">monk expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#monk-feat">monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#incredible-movement">incredible movement</a> +20 feet,{" "}
              <a href="#second-path to-perfection">second path to perfection</a>
              , <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#graceful-mastery">graceful mastery</a>,{" "}
              <a href="#master-strikes">master strikes</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#greater-weapon-specialization">
                greater weapon specialization
              </a>
              ,<a href="#incredible-movement">incredible movement</a> +25 feet,
              <a href="#third-path-to-perfection">
                third path to perfection
              </a>, <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              9th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#adamantine -trikes">adamantine strikes</a>,{" "}
              <a href="#graceful-legend">graceful legend</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#monk-feat">Monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#incredible-movement">incredible movement</a> +30 feet,{" "}
              <a href="#perfected-form">perfected form</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#monk-feat">monk feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Key Terms</h3>
      <p>You’ll see the following key terms in many monk abilities.</p>
      <p>
        <b>Flourish:</b>Actions with this trait are special techniques that
        require too much exertion for you to perform frequently. You can use
        only 1 action with the flourish trait per turn.
      </p>
      <p>
        <b>Incapacitation:</b> An ability with this trait can take a character
        out of the fight. But when you use an incapacitation effect against a
        creature of higher level than you, you reduce the degree of success of
        your attack roll by one step, and that creature improves the degree of
        success of its saving throws for that effect by one step.
      </p>
      <p>
        <b>Ki Spells:</b> By tapping into a supernatural inner reserve called
        ki, you can create magical effects. Certain feats grant you special
        spells called ki spells, which are a type of focus spell. It costs 1
        Focus Point to cast a focus spell. When you gain your first ki spell,
        you also gain a focus pool of 1 Focus Point. You refill your focus pool
        during your daily preparations, and you regain 1 Focus Point by spending
        10 minutes using the Refocus activity to meditate in order to reach
        inner peace.
      </p>
      <p>
        Focus spells are automatically heightened to half your level rounded up.
        Taking feats can give you more focus spells and increase the size of
        your focus pool, though your focus pool can never hold more than 3
        points. See the Focus Spells section.
      </p>
      <p>
        When you first gain a ki spell, decide whether your ki spells are divine
        or occult spells. You are trained in spell attack rolls and spell DCs of
        that tradition, and your key spellcasting ability is Wisdom.
      </p>
      <p>
        <b>Stance:</b> A stance is a general combat strategy that you enter by
        using an action with the stance trait, and that you remain in for some
        time. A stance lasts until you get knocked out, until its requirements
        (if any) are violated, until the encounter ends, or until you enter a
        new stance, whichever comes first. After you take an action that has the
        stance trait, you can’t take another one for 1 round. You can enter or
        be in a stance only in encounter mode.
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies representing your basic
        training, which are noted at the start of this class.
      </p>

      <h3 id="flurry-of-blows">Flurry of blows</h3>
      <p>
        You can attack rapidly with fists, feet, elbows, knees, and other
        unarmed attacks. You gain the Flurry of Blows action.
      </p>

      <Spell
        name="Flurry of blows"
        action="one_action"
        tags={["flourish", "monk"]}
        description={
          <>
            <p>
              Make two unarmed Strikes. If both hit the same creature, combine
              their damage for the purpose of resistances and weaknesses. Apply
              your multiple attack penalty to the Strikes normally. As it has
              the flourish trait, you can use Flurry of Blows only once per
              turn.
            </p>
          </>
        }
      />

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="monk-feat">Monk Feats</h3>
          <p>
            At 1st level and every even-numbered level thereafter, you gain a
            monk class feat.
          </p>

          <h3 id="powerful-fist">Powerful fist</h3>
          <p>
            You know how to wield your fists as deadly weapons. The damage die
            for your fist increases to 1d6 instead of 1d4. Most people take a –2
            circumstance penalty when making a lethal attack with nonlethal
            unarmed attacks, because they find it hard to use their fists with
            deadly force. You don’t take this penalty when making a lethal
            attack with your fist or any other unarmed attacks.
          </p>

          <h3 id="skill-feat">Skill Feats</h3>
          <p>
            At 2nd level and every 2 levels thereafter, you gain a skill feat.
            Skill feats are listed in Chapter 5 and have the skill trait. You
            must be trained or better in the corresponding skill to select a
            skill feat.
          </p>
        </div>

        <figure>
          <img src={require("../assets/img/monk_02.webp")} alt="Monk example" />
        </figure>
      </div>

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
        At 7th level, you can use skill increases to become a master in a skill
        in which you’re already an expert, and at 15th level, you can use them
        to become legendary in a skill in which you’re already a master.
      </p>

      <h3 id="incredible-movement">Incredible movement</h3>
      <p>
        You move like the wind. You gain a +10-foot status bonus to your Speed
        whenever you’re not wearing armor. The bonus increases by 5 feet for
        every 4 levels you have beyond 3rd.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="mystic-strikes">Mystic strikes</h3>
          <p>
            Focusing your will into your physical attacks imbues them with
            mystical energy. Your unarmed attacks become magical, allowing them
            to get past resistances to non-magical attacks. However, you still
            need an item such as handwraps of mighty blows to gain an item bonus
            to attack rolls or increase your attacks’ weapon damage dice.
          </p>

          <h3 id="ability-boosts">Ability Boosts</h3>
          <p>
            At 5th level and every 5 levels thereafter, you boost four different
            ability scores. You can use these ability boosts to increase your
            ability scores above 18. Boosting an ability score increases it by 1
            if it’s already 18 or above, or by 2 if it starts out below 18.
          </p>

          <h3 id="alertness">Alertness</h3>
          <p>
            You remain alert to threats around you. Your proficiency rank for
            Perception increases to expert.
          </p>

          <h3 id="ancestry-feat">Ancestry Feats</h3>
          <p>
            In addition to the ancestry feat you started with, you gain an
            ancestry feat at 5th level and every 4 levels thereafter. The list
            of ancestry feats available to you can be found in your ancestry’s
            entry in Chapter 2.
          </p>
        </div>

        <figure>
          <img src={require("../assets/img/monk_03.webp")} alt="monk example" />
        </figure>
      </div>

      <h3 id="expert-strike">Expert strike</h3>
      <p>
        You’ve practiced martial arts and have now surpassed your former skill.
        Your proficiency ranks for unarmed attacks and simple weapons increase
        to expert.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="weapon-specialization">Weapon specialization</h3>
          <p>
            You’ve learned how to inflict greater injuries with the weapons you
            know best. You deal 2 additional damage with weapons and unarmed
            attacks in which you are an expert. This damage increases to 3 if
            you’re a master, and 4 if you’re legendary.
          </p>

          <h3 id="path-to-perfection">Path to perfection</h3>
          <p>
            You have progressed along your own path to enlightenment. Choose
            your Fortitude, Reflex, or Will saving throw. Your proficiency rank
            for the chosen saving throw increases to master. When you roll a
            success on the chosen saving throw, you get a critical success
            instead.
          </p>

          <h3 id="metal-strikes">Metal strikes</h3>
          <p>
            You can adjust your body to make unarmed attacks infused with the
            mystic energy of rare metals. Your unarmed attacks are treated as
            cold iron and silver. This allows you to deal more damage to a
            variety of supernatural creatures, such as demons, devils, and fey.
          </p>

          <h3 id="monk-expertise">Monk expertise</h3>
          <p>
            Your proficiency rank for your monk class DC increases to expert. If
            you have ki spells, your proficiency rank for spell attacks and
            spell DCs with the tradition of magic you use for your ki spells
            increases to expert.
          </p>
        </div>

        <figure>
          <img src={require("../assets/img/monk_04.webp")} alt="Monk example" />
        </figure>
      </div>

      <table>
        <thead>
          <tr>
            <th>Attack</th>
            <th>Damage</th>
            <th>Group</th>
            <th>Traits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Crane wing</td>
            <td>1d6 B</td>
            <td>Brawling</td>
            <td>Agile, finesse, nonlethal, unarmed</td>
          </tr>
          <tr>
            <td>Dragon tail</td>
            <td>1d10 B</td>
            <td>Brawling</td>
            <td>Backswing, nonlethal, unarmed</td>
          </tr>
          <tr>
            <td>Falling stone</td>
            <td>1d8 B</td>
            <td>Brawling</td>
            <td>Forceful, nonlethal, unarmed</td>
          </tr>
          <tr>
            <td>Iron sweep</td>
            <td>1d8 B</td>
            <td>Brawling</td>
            <td>Nonlethal, parry, sweep, unarmed</td>
          </tr>
          <tr>
            <td>Lashing branch</td>
            <td>1d8 S</td>
            <td>Brawling</td>
            <td>Agile, finesse, nonlethal, unarmed</td>
          </tr>
          <tr>
            <td>Tiger claw</td>
            <td>1d8 S</td>
            <td>Brawling</td>
            <td>Agile, finesse, nonlethal, unarmed</td>
          </tr>
          <tr>
            <td>Wind crash*</td>
            <td>1d6 S</td>
            <td>Brawling</td>
            <td>Agile, nonlethal, propulsive, unarmed</td>
          </tr>
          <tr>
            <td>Wolf jaw</td>
            <td>1d8 P</td>
            <td>Brawling</td>
            <td>Agile, backstabber, finesse, nonlethal, unarmed</td>
          </tr>
          <tr>
            <td colSpan={4}>
              * Wild winds stance is a ki spell, so you can find out more about
              wind crash in the spell description.
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="second-path-to-perfection">Second path to perfection</h3>
      <p>
        You’ve learned to find perfection in every success. Choose a different
        saving throw than the one you chose for your path to perfection. Your
        proficiency rank for the chosen saving throw increases to master. If you
        roll a success with the chosen saving throw, you instead critically
        succeed.
      </p>

      <h3 id="graceful-mastery">Graceful mastery</h3>
      <p>
        You move with perpetual grace in battle, eluding and turning aside
        blows. Your proficiency rank for unarmored defense increases to master.
      </p>

      <h3 id="master-strikes">Master strikes</h3>
      <p>
        You have honed your skill in using your body as a weapon. Your
        proficiency ranks for unarmed attacks and simple weapons increase to
        master.
      </p>

      <h3 id="greater-weapon-specialization">Greater weapon specialization</h3>
      <p>
        Your damage from weapon specialization increases to 4 with weapons and
        unarmed attacks in which you’re an expert, 6 if you’re a master, and 8
        if you’re legendary.
      </p>

      <h3 id="third-path-to-prefection">Third path to prefection</h3>
      <p>
        You have made great progress in your personal studies of enlightenment.
        Choose one of the saving throws you selected for path to perfection or
        second path to perfection. Your proficiency rank for the chosen type of
        save increases to legendary. When you roll a critical failure on the
        chosen type of save, you get a failure instead. When you roll a failure
        on the chosen type of save against an effect that deals damage, you take
        half damage.
      </p>

      <h3 id="adamantine-strikes">Adamantine strikes</h3>
      <p>
        When you focus your will into your limbs, your blows are as unyielding
        as the hardest of metals. Your unarmed attacks are treated as
        adamantine.
      </p>

      <h3 id="graceful-legend">Graceful legend</h3>
      <p>
        Your sublime movement grants you unparalleled protection and offense.
        Your proficiency rank for unarmored defense increases to legendary, and
        your proficiency rank for your monk class DC increases to master. If you
        have ki spells, your proficiency rank for spell attack rolls and spell
        DCs with the tradition of magic you use for your ki spells increases to
        master.
      </p>

      <h3 id="perfected-form">Perfected form</h3>
      <p>
        You have purged incompetence from your techniques. On your first Strike
        of your turn, if you roll lower than 10, you can treat the attack roll
        as a 10. This is a fortune effect.
      </p>

      <h2>Monk Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 5 gp, 3 sp.
        </li>
        <li>
          <b>Bulk:</b> 3 Bulk, 2 light.
        </li>
        <li>
          <b>Money Left Over:</b> 9 gp, 7 sp.
        </li>
        <li>
          <b>Weapons:</b> 10 darts.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, climbing kit, grappling hook, lesser
          smokestick.
        </li>
        <li>
          <b>Options:</b> staff (0 sp), longspear (5 sp).
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
       Every level at which you gain a monk feat, select one of the following feats. You must satisfy any prerequisites before taking the feat.
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

export default MonkPage;
