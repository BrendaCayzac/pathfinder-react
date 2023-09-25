import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import Feat from "../components/Feat";
import { ClassFeat } from "../middleware/CutsomTypes";
import { FighterFeats } from "../middleware/FighterFeats";

const FighterPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    FighterFeats
  );
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...FighterFeats];
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
        <h1>Fighter</h1>
        <i>Core Rulebook, Pathfinder primer</i>
        <p className="introduction">
          With calculated daring and fearless determination, the fighter tracks
          down and confronts their enemies while defending allies from harm. A
          master of the battlefield, the fighter is quick to exploit
          opportunities and strike any who stumble within reach of their sword
          or bow.
        </p>
        <figure>
          <img
            src={require("../assets/img/fighter_icon.png")}
            alt="fighter icon"
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
        <img
          src={require("../assets/img/fighter_01.webp")}
          alt="Fighter image"
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
        <p>Expert in Perception</p>
        <h2>Saving Throws</h2>
        <ul>
          <li>Expert in Fortitude</li>
          <li>Expert in Reflex</li>
          <li>Trained in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Trained in your choice of Acrobatics or Athletics</li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Expert in simple weapons</li>
          <li>Expert in martial weapons</li>
          <li>Trained in advanced weapons</li>
          <li>Expert in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in all armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in fighter class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You strike with unmatched accuracy and use specialized combat
            techniques. A melee fighter stands between allies and enemies,
            attacking foes who try to get past. A ranged fighter delivers
            precise shots from a distance.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You can be an intimidating presence. This can be useful when
            negotiating with enemies, but is sometimes a liability in more
            genteel interactions.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You keep up your defenses in preparation for combat, and keep an eye
            out for hidden threats. You also overcome physical challenges in
            your way, breaking down doors, lifting obstacles, climbing adeptly,
            and leaping across pits.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You might perform manual labor or craft and repair armaments. If you
            know techniques you no longer favor, you might train yourself in new
            ones. If you’ve established your reputation, you might build an
            organization or a stronghold of your own.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>
          Know the purpose and quality of every weapon and piece of armor you
          own.
        </li>
        <li>
          Recognize that the danger of an adventurer’s life must be balanced out
          with great revelry or ambitious works.
        </li>
        <li>
          Have little patience for puzzles or problems that require detailed
          logic or study.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Find you intimidating until they get to know you—and maybe even after
          they get to know you.
        </li>
        <li>Expect you’re all brawn and no brains.</li>
        <li>
          Respect your expertise in the art of warfare and value your opinion on
          the quality of armaments.
        </li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as a fighter. Abilities gained at higher levels
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
              <a href="#attack-of-opportunity">attack of opportunity</a>,{" "}
              <a href="shield-block">shield block</a>,{" "}
              <a href="#fighter-feat">fighter feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#bravery">Bravery</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#fighter-weapon-mastery">fighter weapon mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#battlefield-surveyor">battlefield surveyor</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#juggernaut">Juggernaut</a>,{" "}
              <a href="#combat-flexibility">combat flexibility</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#fighter-feat">fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#armor-expertise">armor expertise</a>,{" "}
              <a href="#fighter-expertise">fighter expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-legend">weapon legend</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#greater-weapon-specialization">
                greater weapon specialization
              </a>
              , <a href="#evasion">evasion</a>, ,{" "}
              <a href="#improved-flexibility">improved flexibility</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#armor-mastery">armor mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>

          <tr>
            <td>18</td>
            <td>
              <a href="#fighter-feat">Fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#versatile-legend">versatile legend</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#fighter-feat">fighter feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Key Terms</h3>
      <p>You’ll see the following key terms in many fighter class features.</p>
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
      <p>
        <b>Stance:</b> A stance is a general combat strategy that you enter by
        using an action with the stance trait, and you remain in for some time.
        A stance lasts until you get knocked out, until its requirements (if
        any) are violated, until the encounter ends, or until you enter a new
        stance, whichever comes first. After you take an action with the stance
        trait, you can’t take another one for 1 round. You can enter or be in a
        stance only in encounter mode.
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="attack-of-opportunity">Attack of Opportunity</h3>
      <p>
        Ever watchful for weaknesses, you can quickly attack foes that leave an
        opening in their defenses. You gain the Attack of Opportunity reaction.
      </p>

      <Feat
        id={0}
        name="Attack of opportunity"
        action="reaction"
        level={1}
        feat="Feat 1"
        description={
          <>
            <p>
              <span className="frequency">
                <b>Trigger:</b> A creature within your reach uses a manipulate
                action or a move action, makes a ranged attack, or leaves a
                square during a move action it’s using.
              </span>
              <br />
              You lash out at a foe that leaves an opening. Make a melee Strike
              against the triggering creature. If your attack is a critical hit
              and the trigger was a manipulate action, you disrupt that action.
              This Strike doesn’t count toward your multiple attack penalty, and
              your multiple attack penalty doesn’t apply to this Strike.
            </p>
          </>
        }
      />

      <h3 id="fighter-feat">Fighter Feats</h3>
      <p>
        At 1st level and every even-numbered level thereafter, you gain a
        fighter class feat. Fighter class feats are described beginning in the
        Fighter Feats section.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. Skill
        feats can be found in Chapter 5 and have the skill trait. You must be
        trained or better in the corresponding skill to select a skill feat.
      </p>

      <h3 id="shield-block">Shield block</h3>
      <p>
        You gain the Shield Block general feat, a reaction that lets you reduce
        damage with your shield.
      </p>

      <h3 id="general-feat">General Feats</h3>
      <p>
        At 3rd level and every 4 levels thereafter, you gain a general feat.
        General feats are listed in Chapter 5.
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

      <div className="flex">
        <div className="flex-column">
          <h3 id="bravery">Bravery</h3>
          <p>
            Having faced countless foes and the chaos of battle, you have
            learned how to stand strong in the face of fear and keep on
            fighting. Your proficiency rank for Will saves increases to expert.
            When you roll a success at a Will save against a fear effect, you
            get a critical success instead. In addition, anytime you gain the
            frightened condition, reduce its value by 1.
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
        </div>

        <figure>
          <img
            src={require("../assets/img/fighter_02.webp")}
            alt="Fighter example"
          />
        </figure>
      </div>

      <h3 id="fighter-weapon-mastery">Fighter weapon mastery</h3>
      <p>
        Hours spent training with your preferred weapons, learning and
        developing new combat techniques, have made you particularly effective
        with your weapons of choice. Choose one weapon group. Your proficiency
        rank increases to master with the simple weapons, martial weapons, and
        unarmed attacks in that group, and to expert with the advanced weapons
        in that group. You gain access to the critical specialization effects of
        all weapons and unarmed attacks for which you have master proficiency.
      </p>

      <h3 id="battlefield-surveyor">Battlefield surveyor</h3>
      <p>
        Whether taking stock of an enemy army or simply standing guard, you
        excel at observing your foes. Your proficiency rank for Perception
        increases to master. In addition, you gain a +2 circumstance bonus to
        Perception checks for initiative, making you faster to react during
        combat.
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
          <h3 id="combat-flexibility">Combat flexibility</h3>
          <p>
            Through your experience in battle, you can prepare your tactics to
            suit different situations. When you make your daily preparations,
            you gain one fighter feat of 8th level or lower that you don’t
            already have. You can use that feat until your next daily
            preparations. You must meet all of the feat’s other prerequisites.
          </p>

          <h3 id="medium-armor-expertise">Medium armor expertise</h3>
          <p>
            You’ve learned to defend yourself better against attacks. Your
            proficiency ranks for light armor, medium armor, and unarmored
            defense increase to expert.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/fighter_03.webp")}
            alt="Fighter example"
          />
        </figure>
      </div>

      <h3 id="juggernaut">Juggernaut</h3>
      <p>
        Your body is accustomed to physical hardship and resistant to ailments.
        Your proficiency rank for Fortitude saves increases to master. When you
        roll a success on a Fortitude save, you get a critical success instead.
      </p>

      <h3 id="armor-expertise">Armor expertise</h3>
      <p>
        You have spent so much time wearing armor that you know how to make the
        most of its protection. Your proficiency rank for light, medium, and
        heavy armor, as well as for unarmored defense, increase to expert. You
        gain the armor specialization effects of medium and heavy armor.
      </p>

      <h3 id="fighter expertise">Fighter expertise</h3>
      <p>
        Your practiced techniques are hard to resist. Your proficiency rank for
        your fighter class DC increases to expert.
      </p>

      <h3 id="heightened-senses">Heightened Senses</h3>
      <p>
        Your instinct heightens each of your senses further. Your proficiency
        rank for Perception increases to master.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="weapon-legend">Weapon legend</h3>
          <p>
            You’ve learned fighting techniques that apply to all armaments, and
            you’ve developed unparalleled skill with your favorite weapons. Your
            proficiency ranks for simple weapons, martial weapons, and unarmed
            attacks increase to master. Your proficiency rank for advanced
            weapons increases to expert.
          </p>
          <p>
            You can select one weapon group and increase your proficiency ranks
            to legendary for all simple weapons, martial weapons, and unarmed
            attacks in that weapon group, and to master for all advanced weapons
            in that weapon group.
          </p>

          <h3 id="evasion">Evasion</h3>
          <p>
            You’ve learned to move quickly to avoid explosions, a dragon’s
            breath, and worse. Your proficiency rank for Reflex saves increases
            to master. When you roll a success on a Reflex save, you get a
            critical success instead.
          </p>

          <h3 id="greater-weapon-specialization">
            Greater weapon specialization
          </h3>
          <p>
            Your damage from weapon specialization increases to 4 with weapons
            and unarmed attacks in which you’re an expert, 6 if you’re a master,
            and 8 if you’re legendary.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/fighter_04.webp")}
            alt="Fighter example"
          />
        </figure>
      </div>

      <h3 id="improved-weapon-flexibility">Improved weapon flexibility</h3>
      <p>
        Your extensive experience gives you even greater ability to adapt to
        each day’s challenges. When you use combat flexibility, you can gain two
        fighter feats instead of one. While the first feat must still be 8th
        level or lower, the second feat can be up to 14th level, and you can use
        the first feat to meet the prerequisites of the second feat. You must
        meet all of the feats’ prerequisites.
      </p>

      <h3 id="armor-mastery">Armor mastery</h3>
      <p>
        Your skill with armor improves, increasing your ability to prevent
        blows. Your proficiency ranks for light, medium, and heavy armor, as
        well as for unarmored defense, increase to master.
      </p>

      <h3 id="versatile-legend">Versatile legend</h3>
      <p>
        You are nigh-unmatched with any weapon. Your proficiency ranks for
        simple weapons, martial weapons, and unarmed attacks increase to
        legendary, and your proficiency rank for advanced weapons increases to
        master. Your proficiency rank for your fighter class DC increases to
        master.
      </p>

      <h2>Barbarian Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 3 gp, 8 sp.
        </li>
        <li>
          <b>Bulk:</b> 3 Bulk, 2 light.
        </li>
        <li>
          <b>Money Left Over:</b> 11 gp, 2 sp.
        </li>
        <li>
          <b>Armor:</b> hide armor.
        </li>
        <li>
          <b>Weapons:</b> dagger.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, grappling hook.
        </li>
        <li>
          <b>Options:</b> greatsword (2 gp), longbow with 20 arrows (6 gp, 2
          sp), or longsword and steel shield (3 gp) .
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
        At each level that you gain a fighter feat, you can select one of the
        following feats. You must satisfy any prerequisites before taking the
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

export default FighterPage;
