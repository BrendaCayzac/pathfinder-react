import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import { ClassFeat } from "../middleware/CutsomTypes";
import { ExemplarFeats } from "../middleware/ExemplarFeats";

const ExemplarPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    ExemplarFeats
  );

  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...ExemplarFeats];
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
        <h1>Exemplar</h1>
        <i>War of Immortals Playtest</i>
        <p className="introduction">
          An imbalance in the Outer Planes has seeded the Material World with
          unearthly power. Somehow, a fragment of divinity rests within your
          body, granting you abilities that reach into the realm previously
          reserved for heroes and legends.
        </p>
        <figure>
          <img
            src={require("../assets/img/exemplar_icon.png")}
            alt="test icon"
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
          <li>Trained in Reflex</li>
          <li>Expert in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Trained in Religion</li>
          <li>Trained in one skill determined by your druidic order</li>
          <li>
            Trained in a number of additional skills equal to 2 plus your
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
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in exemplar class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You fight on the vanguard, scattering lesser foes to the winds. You
            concentrate your divine energy into the right weapon or tool for the
            moment. When an arrow strikes your skin, it stings no more than a
            flea; when your spear strikes forward, it can pierce gods.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You naturally cut a larger-than-life figure. You may use your
            personal magnetism to inspire others, or you might be a lone and
            brooding figure who speaks only seldom. Either way, your actions and
            words hang in the air with weight.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You feel for the flow of fate, knowing that your path will bring you
            to your next quest.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            Inactivity rarely suits an exemplar, so you seek out additional
            deeds or quests to spread your name. You might search for creatures
            to slay, compete in athletic contests, or quest for lost artifacts.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>
          Chase glory across the land, beyond the sea, and over the horizon.
        </li>
        <li>
          Take other heroes under your wing, that your legend may live on
          through them.
        </li>
        <li>Feel the weight of immense expectations and obligation.</li>
      </ul>

      <h2>Others probably...</h2>
      <ul>
        <li>
          Look to you in times of crisis, thinking you can handle any challenge.
        </li>
        <li>Think of you as larger than life, the nexus of any grand tale.</li>
        <li>Mistake your heroism and capability for pride and aloofness.</li>
      </ul>

      <h2>Class Features</h2>
      <p>
        You gain these abilities as an exemplar. Abilities gained at higher
        levels list the level at which you gain them next to the features’
        names.
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
              <a href="#attribute-boosts">attribute boosts</a>,{" "}
              <a href="#divine-spark-and-ikons">divine spark and ikons</a>,{" "}
              <a href="#humble-strikes">humble strikes</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#root epithet">root epithet</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#spirit-striking">spirit striking</a>,{" "}
              <a href="#weapon-expertise">weapon expertise</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#resolve">resolve</a>,{" "}
              <a href="#dominion-epithet">Dominion epithet</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#alertness">alertness</a>,{" "}
              <a href="#divine-premonition">divine premonition</a>,{" "}
              <a href="#godly-expertise">godly expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#exemplar-feat">exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#General-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              7th-level spells,
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#divine-weapon-mastery">divine weapon mastery</a>,{" "}
              <a href="#greater-resolve">greater resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#light-armor-expertise">light armor expertise</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#greater-spirit-striking">greater spirit striking</a>,{" "}
              <a href="#gjuggernaut">juggernaut</a>,{" "}
              <a href="#sovereignty-epithet">sovereignty epithet</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#deific-mastery">deific mastery</a>,{" "}
              <a href="#vigilant-senses">vigilant senses</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#exemplar-feat">Exemplar feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#legendary-spellcaster">light armor mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#exemplar-feat">exemplar feat</a>,{" "}
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

      <h3 id="divine-spark-and-ikons">Divine spark and ikons</h3>
      <p>
        Within your soul is a tiny spark of divine power that belongs not to a
        deity but something all your own. You can manifest this divine power
        through special items known as ikons. Ikons are items intrinsically
        linked to you—sacred vessels crystallized from your divinity that are
        capable of legendary feats in your hands. There are three types of
        ikons: body ikons are a mark on your flesh that shows you as more than
        mortal, worn ikons are sacred clothing or other raiment, and weapon
        ikons let you carve your story onto the world. Choose three ikons, one
        of each type, from the list on pages 22–24. Your body takes on the
        qualities of your chosen body ikon, and you gain non-magical, level-0
        items of your choice that satisfy the requirements for your chosen worn
        ikon and weapon ikon. Providence ensures you come across these items;
        you might be traveling along a path to find a spear in a tree that only
        you can dislodge, or you might awaken holding a gleaming sash you saw in
        your dreams. More information on ikons can be found on page 22.
      </p>
      <p>
        By focusing your divine spark into one of your ikons, you empower that
        ikon to accomplish deeds beyond what it could in mortal hands. As long
        as your divine spark resides in an ikon, you gain that ikon’s immanence
        effect. You can call your spark forth and place it into an ikon by using
        the Shift Immanence action.
      </p>

      <Feat
        id={0}
        name="Shift immanence"
        tags={["divine", "exemplar"]}
        level={0}
        feat=""
        action="one_action"
        description={
          <>
            <p>
              <span className="frequency">
                <b>Frequency</b> once per round.
              </span>
              <br />
              You shift the focus of your divinity, filling one of your ikons
              with your divine spark. That ikon softly glows with radiant light,
              emits subtle chimes as it moves, or is otherwise obviously
              empowered in a way that matches your growing divinity, granting
              the ikon the divine trait and granting you that ikon’s immanence
              effects for as long as your divine spark is empowering it. Your
              spark is indivisible, so it can empower only one ikon at a time.
              You can also Shift Immanence to return your spark to the depths of
              your soul, leaving none of your ikons empowered.
            </p>
            <p>
              <b>Special</b> In addition to the above usage, you can also Shift
              Immanence as a free action triggered when you roll initiative.
            </p>
          </>
        }
      />

      <p>
        While your spark dwells within an ikon, you are also able to channel
        your divinity through the ikon in a powerful transcendence
        ability—though the force of this act will temporarily cast your divine
        spark out of the ikon.
      </p>

      <Feat
        id={0}
        name="Spark transcendence"
        tags={["divine", "exemplar"]}
        level={0}
        feat=""
        action=""
        description={
          <>
            <p>
              <b>Frequency</b> once per round.
              <br />
              <span className="frequency">
                <b>Requirements</b> The ikon must currently house your divine
                spark. You can unleash an ikon’s transcendence ability only if
                you are holding it (if it’s a weapon ikon) or wearing it (if
                it’s a worn ikon).
              </span>
              <br />
              You channel the full might of your divine spark through your ikon
              to briefly surpass mortal limitations and enact a miraculous deed.
              This is a special activity that takes a variable number of
              actions, as listed in the ikon’s stat block. Some ikons are
              activated as a free action or reaction instead of as an activity.
              Immediately after the effects of the transcendence resolve, your
              divine spark is forcefully ejected from that ikon into another
              ikon of your choice.
            </p>
          </>
        }
      />

      <h3 id="humble-strikes">Humble strikes</h3>
      <p>
        Even the most unassuming weapons can accomplish heroic deeds in your
        hands. When you are wielding a simple weapon, increase the damage die
        size of that weapon by one step.
      </p>

      <h3 id="exemplar-feat">Exemplar Feats</h3>
      <p>
        At 2nd level and every even-numbered level, you gain an exemplar class
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

      <h3 id="root-epithet">Root Epithet</h3>
      <p>
        When your divine spark bonded with your soul, it became dyed in your
        personality and qualities. As your deeds give shape to this nascent
        divinity, you come to bear an epithet—a word or phrase that reflects
        your story and that others come to call you by. Your epithets each
        affect one of your ikons, granting it additional capacities.
      </p>
      <p>
        At 3rd level, you gain a root epithet, which describes the core of your
        personality and affects the qualities of your body ikon. If you are
        already trained in the granted skill, you become trained in a different
        skill of your choice, as normal. Choose one epithet from the list below.
      </p>

      <h4>Brave</h4>
      <p>
        Your deeds show fearlessness: when a beast surfaces, you’re there to
        fight it; when someone’s lost in the dark, you’re first to the rescue.
        You’re trained in Athletics. After you Spark Transcendence of your body
        ikon, your body carries you forward, allowing you to Stride up to half
        your Speed in a straight line towards one enemy of your choice.
      </p>

      <h4>Cunning</h4>
      <p>
        Why race a hare across a meadow, or a salmon up a waterfall? Why face a
        titan in a test of strength? Wouldn’t it be better to best your foes
        with a bit of creativity? After all, the stories that echo throughout
        history are always those where wits and trickery, rather than raw talent
        or power, win the day. You are trained in Deception. After you Spark
        Transcendence of your body ikon, you can Feint as a free action.
      </p>

      <h4>Mournful</h4>
      <p>
        To be a hero is to endure countless hardships and stand where others
        have fallen, shouldering dreams and destinies in their stead. Though
        this weight may reach your eyes, you bear this burden so that those
        under you can live smiling. You are trained in Diplomacy. When you Spark
        Transcendence of your body ikon, the act has a bittersweet poignancy to
        it, making one enemy within 30 feet dazzled as tears or memories dance
        in their eyes. This is a mental and emotion effect. The enemy remains
        dazzled until the start of your next turn.
      </p>

      <h4>Radiant</h4>
      <p>
        Heroes live bigger lives than any other, shining so brightly that they
        attract followers, inspire troops, and change the course of kingdoms.
        You are trained in Diplomacy. After you Spark Transcendence of your body
        ikon, you inspire an ally within 30 feet to push on, restoring Hit
        Points equal to 2 + double your level; this is a mental and emotion
        effect. The ally is then temporarily immune for 10 minutes.
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
        feat at 5th level and every 4 levels thereafter.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="spirit-striking">Spirit striking</h3>
          <p>
            Your power can’t be contained, escaping in sparks and embers through
            your weapons as you wreak violence. You deal 2 additional spirit
            damage with weapons and unarmed attacks in which you are an expert.
            This damage increases to 3 if you’re a master, and 4 if you’re
            legendary.
          </p>

          <h3 id="weapon-expertise">Weapon expertise</h3>
          <p>
            You’ve dedicated yourself to learning the intricacies of your
            weapons. Your proficiency ranks for unarmed attacks, simple weapons,
            and martial weapons increase to expert.
          </p>

          <h3 id="dominion-epithet">Dominion epithet</h3>
          <p>
            Your divinity has grown in power along with your deeds, allowing you
            to begin claiming dominion over aspects usually reserved for the
            gods. Choose one of the following epithets, which affect your weapon
            ikon.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/exemplar_01.webp")}
            alt="exemplar example"
          />
        </figure>
      </div>

      <BaseAccordion
        title="Born of the bones of the earth"
        number={1}
        text={
          <>
            <p>
              Your dominion is over stone and soil, the coliseums of creation
              and the pillars holding up the stage of history’s great legends.
              You gain the Hefty Hauler feat. You can choose for any spirit
              damage dealt by your exemplar abilities to instead manifest as
              levitating segments of stone or bone, changing the damage type to
              bludgeoning and replacing the spirit trait with the earth trait.
              Your weapon ikon gains the following abilities.
            </p>
            <p>
              <b>Immanence</b> When you critically succeed on a Strike and the
              target of the critical hit is standing on a surface of earth or
              stone, it is driven down and mired in the ground. The target is
              immobilized and must succeed at an Escape attempt against your
              class DC to end the immobilization. The creature doesn’t become
              stuck if it is incorporeal, is liquid (like a water elemental or
              some oozes), or could otherwise escape without effort.
            </p>
            <p>
              <b>Transcend—Wound the World</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (earth, transcendence) Your weapon pierces the ground below you
              and opens a jagged rift in a 60-foot line. All squares the line
              passes through permanently become difficult terrain, or greater
              difficult terrain if they were already difficult terrain. Each
              creature standing in an affected square at the time of this effect
              must succeed at a Reflex save against your class DC or fall prone.
              Creatures that fall prone take 2d6 bludgeoning damage from the
              roiling earth; this damage increases to 4d6 if you are 12th level
              and 6d6 if you are 17th level.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Restless as the tide"
        number={2}
        text={
          <>
            <p>
              Your dominion is over the ocean, the great source and ultimate
              taker of lives. You gain the Underwater Marauder feat. You can
              choose for any spirit damage dealt by your exemplar abilities to
              instead manifest as surging streams of water, changing the damage
              type to bludgeoning and replacing the spirit trait with the water
              trait. Your weapon ikon gains the following abilities.
            </p>
            <p>
              <b>Immanence</b> When you critically succeed on a Strike, you deal
              splash damage equal to the number of weapon damage dice to all
              creatures within 10 feet. The splash damage is bludgeoning and has
              the water trait.
            </p>
            <p>
              <b>Transcend—Sea’s Claim</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (water, transcendence) A roaring whirlpool swirls around you,
              gathering your enemies together to receive your divine punishment.
              All enemies within 60 feet must succeed at a Fortitude save
              against your class DC or be swept up to 15 feet to another
              location of your choice within the affected area and become
              off-guard until the start of your next turn. This effect is forced
              movement. You then Strike one enemy within your reach.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Peerless under heaven"
        number={3}
        text={
          <>
            <p>
              For as long as there have been gods, they have made war, and you
              aim to stand atop the pile when the fighting’s over. You can
              choose for any spirit damage dealt by your exemplar abilities to
              instead manifest as powerful impacts, cutting slashes, or
              temporarily conjured physical armaments, removing the spirit trait
              and dealing physical damage instead. If dealt as part of a weapon
              attack, this damage is of the same type as the weapon; otherwise
              it is your choice of bludgeoning, slashing, or piercing damage.
              Your weapon ikon gains the following abilities.
            </p>
            <p>
              <b>Immanence</b> Divine skill at arms guides your weapon, granting
              it the critical specialization effect for its weapon group.
            </p>
            <p>
              <b>Transcend—Reap the Field</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (transcendence) Requirements Your previous action was a successful
              Strike, and you have not yet rolled damage; Effect Time seems to
              lag as you blur across the battlefield, deciding the fate of many
              in a moment. Do not roll damage for your Strike. Stride up to half
              your speed and make an attack against a different foe, using the
              same multiple attack penalty. If your second attack is a success,
              you deal damage to both creatures; if it is a miss, you deal
              damage to neither creature.
            </p>
          </>
        }
      />

      <BaseAccordion
        title="Whose cry is thunder"
        number={4}
        text={
          <>
            <p>
              The sky overhead is yours to command as lightning strikes your
              soul. Any bonus to saving throws you gain from an exemplar ability
              also applies against effects with the electricity trait, and any
              resistance applies to electricity damage. You can choose for any
              spirit damage dealt by your exemplar abilities to instead manifest
              as crackling lightning, changing the damage type to electricity
              and replacing the spirit trait with the electricity trait. Your
              weapon ikon gains the following abilities.
            </p>
            <p>
              <b>Immanence</b> When you critically succeed on a Strike,
              lightning strikes a target within 30 feet for 4d6 electricity
              damage (basic Reflex). This damage increases to 7d6 if you are
              12th level and 10d6 if you are 17th level.
            </p>
            <p>
              <b>Transcend—Judgment from Clear Skies</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (electricity, sonic, transcendence) As you fire or hurl your
              weapon, it becomes a line of booming lightning. Make a ranged
              Strike with your ikon against a creature within your weapon’s
              first range increment, or 30 feet, whichever is further. If the
              Strike is successful, the target and each creature within 15 feet
              of it must succeed at a basic Fortitude save against your class DC
              or take 1d6 electricity damage and 1d6 sonic damage from the
              mighty thunderclap of the weapon’s impact; this damage increases
              to 2d6 electricity and 2d6 sonic if you are 12th level, or 3d6
              sonic and 3d6 electricity if you are 17th level. Your ikon then
              returns to your hand.
            </p>
          </>
        }
      />

      <h3 id="resolve">Resolve</h3>
      <p>
        You’ve steeled your mind with resolve. Your proficiency rank for Will
        saves increases to master. When you roll a success at a Will save, you
        get a critical success instead.
      </p>

      <h3 id="alertness">Alertness</h3>
      <p>
        You remain alert to threats around you. Your proficiency rank for
        Perception increases to expert.
      </p>

      <h3 id="divine-premonition">Divine premonition</h3>
      <p>
        A sense of the flow of fate allows you to respond to danger with uncanny
        alacrity. Your proficiency rank for Reflex saves increases to expert.
      </p>

      <h3 id="godly-expertise">Godly Expertise</h3>
      <p>
        Your ability to wield your divine power effectively increases. Your
        proficiency rank for your exemplar class DC increases to expert. If you
        have domain spells, your proficiency rank for spell attacks and spell DC
        increases to expert.
      </p>

      <h3 id="divine-weapon-mastery">Divine Weapon Mastery</h3>
      <p>
        Your skill with weapons is divinely inspired. Your proficiency ranks for
        simple weapons, martial weapons, and unarmed attacks increase to master.
      </p>

      <h3 id="greater-resolve">Greater resolve</h3>
      <p>
        Your unbelievable training grants you mental resiliency. Your
        proficiency rank for Will saves increases to legendary. When you roll a
        success at a Will save, you get a critical success. When you roll a
        critical failure at a Will save, you get a failure instead. When you
        fail a Will save against a damaging effect, you take half damage.
      </p>

      <h3 id="light-armor-expertise">Light Armor Expertise</h3>
      <p>
        You’ve learned how to dodge while wearing light or no armor. Your
        proficiency ranks for light armor and unarmored defense increase to
        expert.
      </p>

      <h3 id="greater-spirit-striking">Greater spirit striking</h3>
      <p>
        Your additional damage from spirit striking increases to 4 with weapons
        and unarmed attacks in which you’re an expert, 6 if you’re a master, and
        8 if you’re legendary.
      </p>

      <h3 id="juggernaut">Juggernaut</h3>
      <p>
        Your body is accustomed to physical hardship and resistant to ailments.
        Your proficiency rank for Fortitude saves increases to master. When you
        roll a success on a Fortitude save, you get a critical success instead.
      </p>

      <h3 id="sovereignty-epithet">Sovereignty Epithet</h3>
      <p>
        The litany of heroic deeds left in your wake has caused your divine
        spark to grow in power, bright enough that it now illuminates your
        legacy. Choose one of the following epithets, which affect your worn
        ikon.
      </p>

      <BaseAccordion
        title="Teacher of heroes"
        number={5}
        text={
          <>
            <p>
              Those who make great names for themselves as heroes are called
              upon to train those who follow them, and such is your destiny—to
              be remembered through your progeny.
            </p>
            <p>
              <b>Immanence</b> The aura granted by your worn ikon increases to
              30 feet. Whenever you fail or deal no damage with a Strike against
              an enemy within your worn ikon’s aura, you can attempt a Recall
              Knowledge check against that target and instantly transmit any
              knowledge you gain as a result to every ally within the aura. The
              first piece of knowledge you gain when Recalling Knowledge in this
              way is always the enemy’s immunities (if any) or greatest
              resistance (if they do not have any immunities). If the target
              does not have any immunities or resistances, you instead learn
              their greatest weakness. If the target does not have any
              immunities, resistances, or weaknesses, you learn what their
              lowest saving throw is.
            </p>
            <p>
              <b>Transcend—Complete the Hero’s Journey </b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (mental, spirit, transcendence) You declare an enemy within the
              area of your worn ikon’s aura to be a heroic test. As long as that
              enemy remains within your worn ikon’s aura, it deals an additional
              10 spirit damage to you with each successful Strike or spell it
              targets you with. Whenever it deals spirit damage to you, each
              ally within the aura can attempt a Reactive Strike against it,
              even if they do not normally have that reaction. If an ally within
              your aura successfully slays the enemy with a Reactive Strike,
              they immediately gain temporary Hit Points equal to their level,
              which persist for 1 minute.
            </p>
          </>
        }
      />

      <BaseAccordion
        title="The Last Ruler"
        number={6}
        text={
          <>
            <p>
              Whether your destiny is monarch or god, the spirit of all true
              rulers that have ever been or shall ever be suffuses your power
              and dominion, granting you an unrivaled commanding presence.
            </p>
            <p>
              <b>Immanence</b> The aura granted by your worn ikon increases to
              30 feet. Whenever an enemy within the aura fails an attack roll
              against you, you can attempt an Intimidation check to Demoralize
              them as a free action as you rebuke them for their foolish attempt
              to stand against you.
            </p>
            <p>
              <b>Transcend—Kneel Before Greatness</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (mental, spirit, transcendence) You demand the fealty that is your
              rightful due. All enemies within your worn ikon’s aura must
              succeed at a Will save against your class DC or immediately kneel,
              dropping prone as a free action. Enemies who critically fail their
              save against this effect also take spirit damage equal to twice
              your level.
            </p>
          </>
        }
      />

      <BaseAccordion
        title="Thief of Moonlight"
        number={7}
        text={
          <>
            <p>
              Your deeds are spoken of in whispers and half-believed rumors. You
              walk unseen, hiding behind stars, capable of taking anything: the
              lights of the heavens themselves are not safe from your avarice.
            </p>
            <p>
              <b>Immanence</b> The aura granted by your worn ikon increases to
              30 feet. Whenever an enemy within the aura fails an attack roll
              against you, you snatch a fragment of the light from their eyes,
              making them dazzled until the end of your next turn.
            </p>
            <p>
              <b>Transcend—All that Shines Belongs to Me</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (illusion, incapacitation, transcendence) You become invisible for
              1 round, then Stride. Each enemy adjacent to you at any point
              during this movement must succeed at a Fortitude save against your
              class DC or become blinded for 1 minute; if a creature critically
              fails their save against this effect, they are permanently blinded
              instead. For each creature blinded by this effect, the duration of
              the granted invisibility increases by 1 round as you hide yourself
              in their stolen light.
            </p>
          </>
        }
      />

      <h3 id="deific-mastery">Deific Mastery</h3>
      <p>
        You have achieved mastery over the divine power that flows through you.
        Your proficiency rank for your exemplar class DC increases to master. If
        you have domain spells, your proficiency rank for spell attacks and
        spell DC increases to master.
      </p>

      <h3 id="vigilant-senses">Vigilant senses</h3>
      <p>
        Through your adventures, you’ve developed keen awareness and attention
        to detail. Your proficiency rank for Perception increases to master.
      </p>

      <h3 id="light-armor-mastery">Light armor mastery</h3>
      <p>
        Your skill with light armor improves, increasing your ability to dodge
        blows. Your proficiency ranks for light armor and unarmored defense
        increase to master.
      </p>

      <h2>Ikons</h2>
      <p>
        As an exemplar, you gain three ikons: one that marks your body as more
        than mortal, one piece of worn raiment, and one weapon to carve your
        story onto the world. Choose one ikon from each category.
      </p>
      <p>
        Your ikons can be etched with runes, upgraded, or otherwise modified as
        normal for items of their type. If you acquire a new object of the same
        general type, you can switch your ikon to the new object by spending 1
        day of downtime with the new ikon as you saturate the object with your
        divine energy. You can use this process to make an existing magic item,
        like a cloak of illusions or a searing blade, into your ikon if the item
        is equal to your level or lower; this makes the item a divine item,
        removing the arcane, occult, primal, or magical trait from the item and
        adding the divine trait, if it didn’t have it already.
      </p>

      <h4>Earning your name</h4>
      <p>
        As you complete deeds and grow in power, so too will your epithets.
        “Brave Nahoa” might become “Brave Nahoa, Born of the Bones of the
        Earth,” before completing his destiny as “Brave Nahoa, Born of the Bones
        of the Earth, Teacher of Heroes.” If you are a GM and one of your PCs is
        playing an exemplar, consider speaking with them to see if there are
        later epithets they are interested in taking for their character. If so,
        you might even place a challenge or encounter in their way so they can
        “earn” their epithet in-story—for example, Nahoa might find himself in
        an encounter where he has to dig his way triumphantly from a cave-in, or
        fight through a harrowing gauntlet of earth elementals. This deed could
        set the stage for him to later take “Born of the Bones of the Earth”
        when he reaches the appropriate level!
      </p>

      <h3>Body Icons</h3>
      <p>
        Body ikons accentuate a physical trait of an exemplar’s body and so
        cannot be stolen, disarmed, dispelled, or otherwise taken away.
      </p>

      <Feat
        id={0}
        name="Eye-catching spot"
        tags={["emotion", "ikon", "mental", "visual"]}
        level={0}
        feat="Body Ikon"
        action=""
        description={
          <>
            <p>
              A fetching beauty spot under an eye or a smile as warm as the sun
              distracts foes and captures hearts alike.
            </p>
            <p>
              <b>Immanence</b> Your beauty becomes supernaturally enhanced,
              distracting foes and imposing a –1 circumstance penalty to melee
              attack rolls against you.
            </p>
            <p>
              <b>Transcend—Captivating Charm</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (emotion, mental, visual) You focus your attention on a creature
              within 30 feet, overwhelming their senses. They must succeed at a
              Will save against your class DC or be fascinated by you until the
              start of your next turn. The condition ends if you use a hostile
              action against the target, but not if you use a hostile action
              against their allies.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Gaze sharp as steel"
        tags={["ikon"]}
        level={0}
        feat="Body Ikon"
        action=""
        description={
          <>
            <p>
              Your eyes glint with an almost-tangible sharpness, letting you
              spot the tiniest dove on the horizon or the swiftest arrow in
              flight.
            </p>
            <p>
              <b>Immanence</b> Your vision sharpens and allows you to sense an
              enemy’s attack almost as soon as it begins, granting you a +1
              status bonus to Perception checks and a +2 status bonus to your AC
              against ranged attacks.
            </p>
            <p>
              <b>Transcend—A Moment Unending</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              (prediction) You take in every movement around you, allowing you
              to react to things you ordinarily couldn’t. You gain the Reactive
              Strike feat until the beginning of your next turn.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Scar if the survivor"
        tags={["ikon"]}
        level={0}
        feat="Body Ikon"
        action=""
        description={
          <>
            <p>
              A scar on your body commemorates a time someone tried to end your
              story and failed—a testament to your resilience and fortitude.
            </p>
            <p>
              <b>Immanence</b> Divine energy spreads outward from your scar,
              reinforcing your flesh. You gain the benefits of the Diehard feat
              and a +1 status bonus to Fortitude saving throws.
            </p>
            <p>
              <b>Transcend—No Scar but This</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="on action icon"
              />{" "}
              (healing) Your wounds knit shut with hardly a scratch. You regain
              1d8 Hit Points. At 3rd level and every two levels thereafter, the
              healing increases by 1d8.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Skin hard as horn"
        tags={["ikon"]}
        level={0}
        feat="Body Ikon"
        action=""
        description={
          <>
            <p>
              Tempered in your spirit, your very skin is as a suit of armor,
              though a single location on your body remains unprotected, a curse
              and a challenge within your legend.
            </p>
            <p>
              <b>Immanence</b> You gain resistance to bludgeoning, slashing, or
              piercing damage equal to half your level. You make this choice
              when you gain this ikon, and it can’t be changed thereafter. This
              resistance doesn’t apply against critical hits, which successfully
              find your unprotected spot.
            </p>
            <p>
              <b>Transcend—Crash against Me</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              Your skin becomes virtually unbreakable until the beginning of
              your next turn. Your resistance increases to a value equal to your
              level. During this time, if a creature fails a melee attack roll
              against you using a weapon dealing the same damage type as your
              resistance, or if they succeed at an attack against you with the
              weapon but your resistance would be enough to reduce the damage
              dealt to 0, that weapon clangs wildly off your skin with a painful
              reverberation, making the attacking enemy off-guard and applying a
              –2 circumstance penalty to attacks with that weapon until the
              beginning of their next turn.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Scar of the survivor"
        tags={["ikon"]}
        level={0}
        feat="Body Ikon"
        action=""
        description={
          <>
            <p>
              A scar on your body commemorates a time someone tried to end your
              story and failed—a testament to your resilience and fortitude.
            </p>
            <p>
              <b>Immanence</b> Divine energy spreads outward from your scar,
              reinforcing your flesh. You gain the benefits of the Diehard feat
              and a +1 status bonus to Fortitude saving throws.
            </p>
            <p>
              <b>Transcend—No Scar but This</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              (healing) Your wounds knit shut with hardly a scratch. You regain
              1d8 Hit Points. At 3rd level and every two levels thereafter, the
              healing increases by 1d8.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Skin hard as horn"
        tags={["ikon"]}
        level={0}
        feat="Body Ikon"
        action=""
        description={
          <>
            <p>
              Tempered in your spirit, your very skin is as a suit of armor,
              though a single location on your body remains unprotected, a curse
              and a challenge within your legend.
            </p>
            <p>
              <b>Immanence</b> You gain resistance to bludgeoning, slashing, or
              piercing damage equal to half your level. You make this choice
              when you gain this ikon, and it can’t be changed thereafter. This
              resistance doesn’t apply against critical hits, which successfully
              find your unprotected spot.
            </p>
            <p>
              <b>Transcend—Crash against Me</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              Your skin becomes virtually unbreakable until the beginning of
              your next turn. Your resistance increases to a value equal to your
              level. During this time, if a creature fails a melee attack roll
              against you using a weapon dealing the same damage type as your
              resistance, or if they succeed at an attack against you with the
              weapon but your resistance would be enough to reduce the damage
              dealt to 0, that weapon clangs wildly off your skin with a painful
              reverberation, making the attacking enemy off-guard and applying a
              –2 circumstance penalty to attacks with that weapon until the
              beginning of their next turn.
            </p>
          </>
        }
      />

      <h3>Weapon Ikons</h3>
      <Feat
        id={0}
        name="Barrow's edge"
        tags={["ikon"]}
        level={0}
        feat="Weapon Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> a melee weapon that deals slashing or piercing
                damage.
              </span>
              <br />
              This blade rattles in its scabbard, as if it wants to be
              unsheathed so it can consume violence.
            </p>
            <p>
              <b>Immanence</b> Your weapon ikon deals 1 persistent spirit damage
              per weapon damage die to creatures it Strikes.
            </p>
            <p>
              <b>Transcend—Crash against Me</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              (healing, vitality) <b>Requirements</b> Your last action was a
              successful Strike with the barrow’s edge; <b>Effect</b> Your blade
              glows as it absorbs your foe’s vitality. You regain Hit Points
              equal to half the damage dealt.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Fated shot"
        tags={["ikon"]}
        level={0}
        feat="Weapon Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> a ranged weapon.
              </span>
              <br />
              Your missiles shine as they fly through the air like falling
              stars.
            </p>
            <p>
              <b>Immanence</b> Your weapon ikon deals 1 additional spirit damage
              per weapon damage die to creatures it Strikes.
            </p>
            <p>
              <b>Transcend—Rain of Seven Lights</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (spirit) You fire a projectile into the air with your weapon ikon,
              which becomes a shower in a 5-foot burst within 60 feet. Each
              creature in the area must succeed at a basic Reflex save against
              your class DC or take spirit damage equal to your normal Strike
              damage with your weapon ikon. If your weapon ikon has the deadly
              or fatal trait, when a creature critically fails their save
              against this effect, roll the spirit damage they take using the
              adjusted Strike damage those traits would normally apply to your
              weapon. You can choose before using this ability to give it the
              nonlethal trait, in which case reducing a creature to 0 Hit Points
              merely places them into a dreamless slumber.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Gleaming Blade"
        tags={["ikon"]}
        level={0}
        feat="Weapon Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> any weapon in the sword or knife group.
              </span>
              <br />
              This sword glitters with such sharpness it seems to cut the very
              air in front of it, the faster it can be drawn.
            </p>
            <p>
              <b>Immanence</b> Your weapon ikon deals 2 additional spirit damage
              per weapon damage die to creatures it Strikes.
            </p>
            <p>
              <b>Transcend—Mirrored Spirit Strike</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (spirit) Make two Strikes with your weapon ikon, each using your
              current multiple attack penalty. Both Strikes must have the same
              target. If the Strikes are made with a weapon that doesn’t have
              the agile trait, the second Strike takes a –2 penalty. If both
              attacks hit, you combine their damage, which is all dealt as
              spirit damage. You add any precision damage only once. Combine the
              damage from both Strikes and apply resistances and weaknesses only
              once. This counts as two attacks when calculating your multiple
              attack penalty.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Noble Branch"
        tags={["ikon"]}
        level={0}
        feat="Weapon Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> any weapon in the spear or polearm weapon group, or
                the staff, bo staff, fighting stick, or khakkara.
              </span>
              <br />
              This simple stick-like weapon has a simplicity and elegance to it
              all its own.
            </p>
            <p>
              <b>Immanence</b> Your weapon ikon deals 2 additional spirit damage
              per weapon damage die to creatures it Strikes.
            </p>
            <p>
              <b>Transcend—Strike, Breathe, Rend</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              (spirit) Requirements Your last action this turn was a successful
              Strike with the noble branch; Effect You channel a pulse of energy
              down your weapon at the moment of contact. The target of the
              required Strike takes spirit damage equal to your weapon damage
              dice.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Titan's Breaker"
        tags={["ikon"]}
        level={0}
        feat="Weapon Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> any melee weapon in the club, hammer, or axe group.
              </span>
              <br />
              You wield a weapon whose blows shatter mountains with ease.
            </p>
            <p>
              <b>Immanence</b> Your weapon ikon deals 2 additional spirit damage
              per weapon damage die to creatures it Strikes. Constructs and
              objects are not immune to this spirit damage and this spirit
              damage automatically bypasses any Hardness they have.
            </p>
            <p>
              <b>Transcend—Fracture Mountains</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              (spirit) Your spirit is so dense it takes on tangible force. Make
              a melee Strike with your weapon ikon. This counts as two attacks
              when calculating your multiple attack penalty. If this Strike
              hits, your additional spirit damage increases to 4 plus an extra
              die of weapon damage. If you’re at least 10th level, increase this
              to 6 spirit damage and two extra dice, and if you’re at least 18th
              level, increase it to 8 spirit damage and three extra dice.
              Constructs and objects are not immune to spirit damage dealt by
              this attack, and this spirit damage automatically bypasses any
              Hardness they have.
            </p>
          </>
        }
      />

      <h3>Worn Ikons</h3>
      <Feat
        id={0}
        name="Palisade Bandles"
        tags={["ikon"]}
        level={0}
        feat="Worn Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> worn bracers.
              </span>
              <br />
              These armbands signify rejection and acceptance; rejection of
              harm, and acceptance of your inevitable dominance over your
              enemies.
            </p>
            <p>
              <b>Immanence</b> (aura) You are surrounded by a 15-foot aura that
              protects you and all allies within the aura from harm, granting a
              +1 circumstance bonus to AC. This bonus increases to +2 for anyone
              in the aura who has a buckler raised, or +3 if they have a shield
              raised.
            </p>
            <p>
              <b>Transcend—Embrace of Destiny</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              (emotion, mental, spirit) You draw an enemy within the aura into
              your reach, moving them directly toward you into a square within
              your melee reach unless they succeed at a Fortitude save against
              your class DC.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Skybearer's belt"
        tags={["ikon"]}
        level={0}
        feat="Worn Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> worn belt.
              </span>
              <br />
              This girdle wraps around your waist, magnifying your strength to
              the point you feel you could carry the sky itself.
            </p>
            <p>
              <b>Immanence</b> (aura) Strength flows outward from you, allowing
              all allies within 15 feet to carry 4 more Bulk than normal before
              becoming encumbered and up to a maximum of 8 more Bulk. You (but
              not your allies) can attempt to Disarm, Grapple, Shove, or Trip
              creatures up to two sizes larger than you.
            </p>
            <p>
              <b>Transcend—Bear Allies’ Burdens</b>{" "}
              <img
                src={require("../assets/img/two_action.png")}
                alt="two action icon"
              />{" "}
              You move with a speed belying your strength, carrying your allies
              as easily as straw dolls. You Stride; at any point you are
              adjacent to a willing ally, you can pick them up, and you can
              deposit them into an adjacent square at any other point during
              your movement. If an ally was benefiting from your immanence aura
              when you began this movement, they do not count against your Bulk
              limits while being carried during the move.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Thousand-league sandals"
        tags={["ikon"]}
        level={0}
        feat="Worn Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> worn shoes.
              </span>
              <br />
              Worn and trustworthy, your sandals have carried you this far, and
              they’ll carry you much further still.
            </p>
            <p>
              <b>Immanence</b> (aura) Your sandals ease your travels on the path
              ahead, granting you and all allies within 15 feet a +10 status
              bonus to your Speed.
            </p>
            <p>
              <b>Transcend—Marathon Dash</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              Your anklets carry you where you need to be. You Stride, and each
              ally within your aura at the start of your movement can Stride as
              a reaction.
            </p>
          </>
        }
      />

      <Feat
        id={0}
        name="Victor's wreath"
        tags={["ikon"]}
        level={0}
        feat="Worn Ikon"
        action=""
        description={
          <>
            <p>
              <span className="frequency">
                <b>Usage</b> worn headwear or worn sash.
              </span>
              <br />
              This symbol of victory—whether a laurel worn around the head or a
              medal that hangs from your neck—reminds you and your allies that
              victory is the only acceptable outcome.
            </p>
            <p>
              <b>Immanence</b> (aura, emotion, mental) You inspire your allies
              to greater glory. You and all allies within 15 feet gain a +1
              status bonus to attack rolls.
            </p>
            <p>
              <b>Transcend—One Moment till Glory</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              (emotion, mental, spirit) You rally your allies, carrying them
              from the brink of disaster to the verge of victory. Each ally in
              your aura immediately makes a new saving throw with a +2 status
              bonus against one ongoing negative effect or condition they are
              currently affected by, even if that effect would not normally
              allow a new saving throw.
            </p>
          </>
        }
      />

      <h2>Feats</h2>
      <p>
        At every level that you gain an exemplar feat, you can select one of the
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

export default ExemplarPage;
