import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";
import { rangerFeats } from "../middleware/RangerFeats";
import { rangerFocusSpells } from "../middleware/RangerFocusSpells";

const RangerPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    rangerFeats
  );

  const [filteredSpellList, setFilteredSpellList] =
    useState<Array<FocusSpell> | null>(rangerFocusSpells);

  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...rangerFeats];
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
    let updatedList = [...rangerFocusSpells];
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
        <h1>Ranger</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          Resourceful and cunning, the ranger is a hunter, tracker, and warrior
          who preserves the natural world and protects civilization from its
          ravages. Whether they use a bow, crossbow, a pair of weapons, or
          snares, the ranger is a fearsome enemy and great ally in the wild.
        </p>
        <figure>
          <img
            src={require("../assets/img/ranger_icon.png")}
            alt="Ranger icon"
          />
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
          <b>10 plus your Constitution modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>

      <figure className="figure-one">
        <img src={require("../assets/img/ranger_00.webp")} alt="Ranger image" />
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
          <li>Expert in Fortitude</li>
          <li>Expert in Reflex</li>
          <li>Trained in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Trained in Nature</li>
          <li>Trained in Survival</li>
          <li>
            Trained in a number of additional skills equal to 4 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Trained in simple weapons</li>
          <li>Trained in martial weapons</li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in light armor</li>
          <li>Trained in medium armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in ranger class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You can single out particular foes to hunt, making you better at
            defeating them. You target and brutalize your chosen foe with either
            a bow or melee weapons, while supporting your allies with your
            skills.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            When you speak, it’s with the voice of practical experience,
            especially involving wilderness exploration.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You guide your allies through the wilderness or follow tracks. You
            keep an eye out for trouble, constantly alert for danger even when
            it’s not overt.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You craft weapons and train animals in preparation for your next
            venture. If you prefer to get outside, you might go on hunts or
            scout nearby areas to better understand your environment.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>
          Respect the raw power of nature and understand how to make the best of
          its bounty.
        </li>
        <li>Enjoy the thrill of the hunt.</li>
        <li>
          Scout out ahead of the party, reconnoitering dangers before combat
          begins.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Call upon you to protect them from the wilds or the encroachment of
          civilization.
        </li>
        <li>Expect you to be a quiet or taciturn loner.</li>
        <li>Think there is something dangerous and wild about you.</li>
      </ul>

      <h2>Class Features</h2>
      <p>
        You gain these abilities as a ranger. Abilities gained at higher levels
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
              <a href="#hunt-prey">hunt prey</a>,{" "}
              <a href="#hunters-edge">hunter’s edge</a>,{" "}
              <a href="#ranger-feat">ranger feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              2nd-level spells, <a href="#general-feat">general feat</a>,{" "}
              <a href="#iron-will">iron will</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#ranger-weapon-expertise">ranger weapon expertise</a>,{" "}
              <a href="#trackless-step">trackless step</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#evasion">Evasion</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#vigilant-senses">vigilant senses</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#natures-edge">nature’s edge</a>,{" "}
              <a href="#ranger-expertise">ranger expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#ranger-feat">ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#juggernaut">juggernaut</a>,{" "}
              <a href="#medium-armor-expertise">medium armor expertise</a>,{" "}
              <a href="#wild-stride">wild stride</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-mastery">weapon mastery</a>,{" "}
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#greater-weapon-specialization">
                greater weapon specialization
              </a>
              , <a href="#improved-evasion">improved evasion</a>,{" "}
              <a href="#incredible-senses">incredible senses</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#masterful-hunter">masterful hunter</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#ranger-feat">Ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#second-skin">second skin</a>,{" "}
              <a href="#swift-prey">swift prey</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#ranger-feat">ranger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Key Terms</h3>
      <p>You’ll see these key terms in many ranger class features.</p>
      <p>
        <b>Flourish:</b> Actions with this trait are special techniques that
        require too much exertion for you to perform frequently. You can use
        only 1 action with the flourish trait per turn.
      </p>
      <p>
        <b>Open:</b> These maneuvers work only as the first salvo in the attacks
        you make on your turn. You can use an action with the open trait only if
        you haven’t used an action with the attack or open trait yet this turn.
      </p>
      <p>
        <b>Press:</b> Actions with this trait allow you to follow up earlier
        attacks. An action with the press trait can be used only if you are
        currently affected by a multiple attack penalty. You can’t use a press
        action when it’s not your turn, even if you use the Ready activity.
      </p>
      <p>
        Some actions with the press trait also grant an effect on a failure. The
        effects that are added on a failure don’t apply on a critical failure.
        If your press action succeeds, you can choose to apply the failure
        effect instead. (For example, you may wish to do this when an attack
        deals no damage due to resistance.)
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to what you get from your class at 1st level, you have the
        benefits of your selected ancestry and background, as described in
        Chapter 2.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="hunt-prey">Hunt prey</h3>
      <p>
        When you focus your attention on a single foe, you become unstoppable in
        your pursuit. You gain the Hunt Prey action.
      </p>

      <Spell
        name="Hunt Prey"
        action="one_action"
        tags={["concentrate", "ranger"]}
        description={
          <>
            <p>
              You designate a single creature as your prey and focus your
              attacks against that creature. You must be able to see or hear the
              prey, or you must be tracking the prey during exploration.
            </p>
            <p>
              You gain a +2 circumstance bonus to Perception checks when you
              Seek your prey and a +2 circumstance bonus to Survival checks when
              you Track your prey. You also ignore the penalty for making ranged
              attacks within your second range increment against the prey you’re
              hunting.
            </p>
            <p>
              You can have only one creature designated as your prey at a time.
              If you use Hunt Prey against a creature when you already have a
              creature designated, the prior creature loses the designation and
              the new prey gains the designation. Your designation lasts until
              your next daily preparations.
            </p>
          </>
        }
      />

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="hunters-edge">Hunter's edge</h3>
          <p>
            You have trained for countless hours to become a more skilled hunter
            and tracker, gaining an additional benefit when you Hunt Prey
            depending on the focus of your training. Choose a hunter’s edge.
          </p>
          <p>
            <b>Flurry:</b> You have trained to unleash a devastating flurry of
            attacks upon your prey. Your multiple attack penalty for attacks
            against your hunted prey is –3 (–2 with an agile weapon) on your
            second attack of the turn instead of –5, and –6 (–4 with an agile
            weapon) on your third or subsequent attack of the turn, instead of
            –10.
          </p>
          <p>
            <b>Precision:</b> You have trained to aim for your prey’s weak
            points. The first time you hit your hunted prey in a round, you also
            deal 1d8 additional precision damage. (Precision damage increases
            the damage you already deal, using the same type, but is ineffective
            against creatures that lack vital organs or weak points.) At 11th
            level, the extra damage increases to 2d8 precision damage, and at
            19th level, the extra damage increases to 3d8 precision damage.
          </p>
          <p>
            <b>Outwit:</b> You are talented at outwitting and evading your prey.
            You gain a +2 circumstance bonus to Deception checks, Intimidation
            checks, Stealth checks, and any checks to Recall Knowledge about the
            prey, and a +1 circumstance bonus to AC against your prey’s attacks.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/ranger_01.webp")}
            alt="ranger example"
          />
        </figure>
      </div>

      <h3 id="ranger-feat">Ranger Feats</h3>
      <p>
        At 1st level and every even-numbered level, you gain a ranger class
        feat. Ranger feats are listed beginning in the Ranger Feats table.
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

      <h3 id="skill-increase">Skill Increases</h3>
      <p>
        At 3rd level and every 2 levels thereafter, you gain a skill increase.
        You can use this increase to either become trained in one skill, or
        become an expert in one skill in which you’re already trained.
      </p>
      <p>
        At 7th level, you can use skill increases to become a master in a skill
        in which you’re already an expert, and at 15th level, you can use them
        to become legendary in a skill in which you’re already a master.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="iron-will">Iron will</h3>
          <p>
            Your training has hardened your resolve. Your proficiency rank for
            Will saves increases to expert.
          </p>

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
            ancestry feat at 5th level and every 4 levels thereafter. The list
            of ancestry feats available to you can be found in your ancestry’s
            entry in Chapter 2.
          </p>

          <h3 id="ranger-weapon-expertise">Ranger weapon expertise</h3>
          <p>
            You’ve dedicated yourself to mastering your weapons. Your
            proficiency ranks for simple weapons, martial weapons, and unarmed
            attacks increase to expert. You gain access to the critical
            specialization effects of all such weapons and unarmed attacks when
            attacking your hunted prey.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/ranger_02.webp")}
            alt="ranger example"
          />
        </figure>
      </div>

      <h3 id="trackless-step">Trackless step</h3>
      <p>
        When you move through natural terrains, you are difficult to track. You
        always gain the benefits of the Cover Tracks action in such terrains,
        without moving at half your Speed.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="evasion">Evasion</h3>
          <p>
            You’ve learned to move quickly to avoid explosions, dragons’ breath,
            and worse. Your proficiency rank for Reflex saves increases to
            master. When you roll a success on a Reflex save, you get a critical
            success instead.
          </p>

          <h3 id="vigilant-senses">Vigilant senses</h3>
          <p>
            Through your adventuring, you’ve developed keen awareness and
            attention to detail. Your proficiency rank for Perception increases
            to master.
          </p>

          <h3 id="weapon-specialization">Weapon specialization</h3>
          <p>
            You’ve learned how to inflict greater injuries with the weapons you
            know best. You deal 2 additional damage with weapons and unarmed
            attacks in which you are an expert. This damage increases to 3 if
            you’re a master, and to 4 if you’re legendary.
          </p>

          <h3 id="natures-edge">Nature's edge</h3>
          <p>
            You always find the weak points in your foes’ defenses when they’re
            on unfavorable terrain. Enemies are flat-footed to you if they’re in
            natural difficult terrain or in difficult terrain resulting from a
            snare.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/ranger_03.webp")}
            alt="Ranger example"
          />
        </figure>
      </div>

      <h3 id="ranger-expertise">Ranger Expertise</h3>
      <p>
        You’ve practiced your techniques to make them harder to resist. Your
        proficiency rank for your ranger class DC increases to expert.
      </p>

      <h3 id="juggernaut">Juggernaut</h3>
      <p>
        Your body is accustomed to physical hardship and resistant to ailments.
        Your proficiency rank for Fortitude saves increases to master. When you
        roll a success on a Fortitude save, you get a critical success instead.
      </p>

      <h3 id="medium-armor-expertise">Medium armor expertise</h3>
      <p>
        You’ve learned to defend yourself better against attacks. Your
        proficiency ranks for light armor, medium armor, and unarmored defense
        increase to expert.
      </p>

      <h3 id="wild-stride">Wild stride</h3>
      <p>
        You move quickly through obstacles, whether they’re tumbled stone,
        tangled undergrowth, or sucking mud. You can ignore the effects of
        non-magical difficult terrain. As normal for ignoring difficult terrain,
        this also lets you treat the hindrances of greater difficult terrain as
        those of difficult terrain.
      </p>

      <h3 id="weapon-mastery">Weapon mastery</h3>
      <p>
        You fully understand the intricacies of your weapons. Your proficiency
        ranks for simple weapons, martial weapons, and unarmed attacks increase
        to master.
      </p>

      <h3 id="greater-weapon-specialization">Greater weapon specialization</h3>
      <p>
        Your damage from weapon specialization increases to 4 with weapons and
        unarmed attacks in which you’re an expert, 6 if you’re a master, and 8
        if you’re legendary.
      </p>

      <h3 id="improved-evasion">Improved evasion</h3>
      <p>
        Your ability to elude danger is matchless. Your proficiency rank for
        Reflex saves increases to legendary. When you roll a critical failure on
        a Reflex save, you get a failure instead. When you roll a failure on a
        Reflex save against a damaging effect, you take half damage.
      </p>

      <h3 id="incredible-senses">Incredible Sense</h3>
      <p>
        You notice things almost impossible for an ordinary person to detect.
        Your proficiency rank for Perception increases to legendary.
      </p>

      <h3 id="masterful-hunter">Masterful hunter</h3>
      <p>
        You have honed your abilities as a hunter to incredible levels. Your
        proficiency rank for your ranger class DC increases to master. When
        using a ranged weapon that you have master proficiency in, you can
        ignore the penalty if attacking your hunted prey within the weapon’s
        second and third range increments.
      </p>
      <p>
        If you have master proficiency in Perception, you gain a +4 circumstance
        bonus to Perception checks when you Seek your prey, and if you have
        master proficiency in Survival, you gain a +4 circumstance bonus to
        Survival checks when you Track your prey.
      </p>
      <p>
        You also gain an additional benefit depending on your hunter’s edge.
      </p>
      <p>
        <b>Flurry:</b> You can blend your weapon mastery with skillful targeting
        to make a series of precise attacks. If you have master proficiency with
        your weapon, your multiple attack penalty for attacks against your
        hunted prey is –2 (–1 with an agile weapon) on your second attack of the
        turn, and –4 (–2 with an agile weapon) on your third and subsequent
        attacks of the turn.
      </p>
      <p>
        <b>Precision:</b> Your weapon mastery allows you to hit your prey’s
        vital areas multiple times. The second time in a round you hit your
        hunted prey, you also deal 1d8 precision damage. At 19th level, your
        second hit in a round against your hunted prey deals 2d8 precision
        damage, and your third hit in a round against your hunted prey deals 1d8
        precision damage.
      </p>
      <p>
        <b>Outwit:</b> Your mastery of skills allows you to overwhelm your prey.
        If you have master proficiency in Deception, Intimidation, Stealth, or
        the skill you use to Recall Knowledge about your prey, increase the
        circumstance bonus against the prey with that skill from +2 to +4. If
        you have master proficiency with your armor, increase the circumstance
        bonus to AC against the prey from +1 to +2.
      </p>

      <h3 id="second-skin">Second skin</h3>
      <p>
        Your armor has become akin to a second skin for you. Your proficiency
        ranks for light armor, medium armor, and unarmored defense increase to
        master. When wearing light or medium armor, you can rest normally,
        rather than receiving poor rest that leaves you fatigued.
      </p>

      <h3 id="swift-prey">Swift prey</h3>
      <p>
        You size up your prey with only a glance. You can use Hunt Prey as a
        free action if it’s your first action of your turn.
      </p>

      <h2>Ranger Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 3 gp, 7 sp.
        </li>
        <li>
          <b>Bulk:</b> 2 Bulk, 1 light.
        </li>
        <li>
          <b>Money Left Over:</b> 11 gp, 3 sp.
        </li>
        <li>
          <b>Armor:</b> leather armor.
        </li>
        <li>
          <b>Weapons:</b> dagger.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack.
        </li>
        <li>
          <b>Options:</b> longbow with 20 arrows (6 gp, 2 sp), longsword and
          steel shield (3 gp), 2 shortswords (1 gp, 8 sp), snare kit (5 gp).
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
        At every level that you gain a ranger feat, you can select one of the
        following. You must satisfy any prerequisites before taking the feat.
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
        As a ranger, certain feats grant you warden spells, which are a type of
        focus spells. It costs 1 Focus Point (FP) to cast a focus spell. When
        you gain your first warden spell, you also gain a focus pool of 1 FP.
        You refill your focus pool during your daily preparations, and you
        regain 1 FP by spending 10 minutes using the Refocus activity to commune
        with nature.
      </p>
      <p>
        Your warden spells are primal spells. When you first gain a warden
        spell, you become trained in primal spell attacks and spell DCs. Your
        spellcasting ability is Wisdom.
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

export default RangerPage;
