import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat } from "../middleware/CutsomTypes";
import { GunslingerFeats } from "../middleware/GunslingerFeats";

const GunslingerPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    GunslingerFeats
  );
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...GunslingerFeats];
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
        <h1>Gunslinger</h1>
        <i>Guns & Gears</i>
        <p className="introduction">
          While most people can fire a gun or crossbow, a gunslinger knows such
          weapons better than anyone. From reloading to customization, a
          gunslinger demands more from their weapons, though demanding too much
          can result in a misfire. Gunslingers remain unrivaled in their skill
          and accuracy with weapons that strike hard from afar.
        </p>
        <figure>
          <img
            src={require("../assets/img/gunslinger_icon.png")}
            alt="gunslinger icon"
          />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Dexterity</b>
          <p>
            At 1st level, your class gives you an ability boost to Dexterity.
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
        <img
          src={require("../assets/img/gunslinger_01.webp")}
          alt="Gunslinger image"
        />
      </figure>
      <h2 id="initial-proficiencies">Initial Proficiencies</h2>
      <p>
        At 1st level you gain the listed proficiency ranks in the following
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
          <li>
            Trained in one or more skills determined by your gunslinger's way
          </li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Expert in simple firearms and crossbows</li>
          <li>EExpert in simple firearms and crossbows</li>
          <li>Expert in simple firearms and crossbows</li>
          <li>Trained in simple weapons</li>
          <li>Trained in martial bombs</li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in light armor</li>
          <li>Trained in medium armor</li>
          <li>Trained in unarmored defense </li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in gunslinger class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You strike from range with your firearms, seeking to defeat your
            opponents before they can pose a true threat. Depending on your
            choice of weapon, you might prefer to strike your opponent from a
            hidden position before they ever realize you’re there, dash through
            a frenzied melee with pistols blazing, or glide effortlessly across
            the battlefield, waiting for the perfect moment to end the conflict
            with a single, well-placed shot.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You have a keen eye and can see things coming from farther than
            most. You might not be the life of the party, but your companions
            know to pay attention when your subtle nod or concerned grunt
            indicates that something’s amiss.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You scout the group’s position for incoming threats and help search
            for secret doors and hidden passages, keeping a weather eye out for
            unexpected threats.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You might craft ammunition or keep your complex weapons clean and
            maintained, and you might look for work that matches your unique
            talents, such as working as a blacksmith, engineer, or part of the
            local watch. You might wander from town to town, or stay put for a
            spell to enjoy the silence that lingers between gunfights.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>
          Seek out areas of great conflict where your unique choice of weaponry
          can help build your reputation.
        </li>
        <li>
          Explore new horizons, trusting your honed senses and deadly weapon to
          keep you safe.
        </li>
        <li>
          Demonstrate extensive knowledge about various types of guns and
          ammunition, along with curiosity about the latest in gun technology.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Assume that since you know how your gun works, you must also
          understand how to resolve other mechanical challenges.
        </li>
        <li>
          Underestimate you at first glance, thinking you rely on your gun
          because you lack any other skills.
        </li>
        <li>
          Respect your eternal vigilance, unyielding grit, and excellent aim.
        </li>
      </ul>

      <h2>Class Features</h2>
      <p>
        You gain these abilities as a gunslinger. Abilities gained at higher
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
              <a href="#gunslingers-way">gunslinger’s way</a>,{" "}
              <a href="#initial-deed">initial deed</a>,{" "}
              <a href="#singular-expertise">singular expertise</a>,{" "}
              <a href="#gunslinger-feat">gunslinger feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#stubborn">Stubborn</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#gunslinger-weapon-mastery">gunslinger weapon mastery</a>
              , <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#vigilant-senses">vigilant senses</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#advanced-deed">Advanced deed</a>,{" "}
              <a href="#gunslinger-expertise">gunslinger expertise</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#gunslinger-feat">gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#evasion">evasion</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>

          <tr>
            <td>12</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#gunslinging-legend,">gunslinging legend,</a>,{" "}
              <a href="#medium-armor-expertise">medium armor expertise</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#greater-deed">greater deed</a>,{" "}
              <a href="#greater-weapon-specialization">
                greater weapon specialization
              </a>
              , <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#juggernaut">juggernaut</a>,{" "}
              <a href="#shootists-edge">shootist’s edge</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#gunslinger-feat">Gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#incredible-senses">incredible senses</a>,{" "}
              <a href="#medium-armor-mastery">medium armor mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#gunslinger-feat">gunslinger feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Key Terms</h3>
      <p>
        You’ll see the following key terms in a number of gunslinger abilities.
      </p>
      <p>
        <b>Flourish:</b> Flourish actions are actions that require too much
        exertion to perform a large number in a row. You can use only 1 action
        with the flourish trait per turn.
      </p>
      <p>
        <b>Misfire:</b> Firearms that are improperly maintained or subjected to
        unusual strain can misfire. If you attempt to fire a firearm that was
        fired the previous day or earlier and hasn’t been cleaned since, roll a
        DC 5 flat check before making your attack roll. If you fail this misfire
        check, the weapon misfires and jams. The attack is an automatic critical
        failure, and you must use an Interact action to clear the jam before the
        weapon can be reloaded and fired again. Once you’ve spent at least an
        hour cleaning a weapon, you don’t need to roll for a misfire until the
        next day unless an effect says otherwise. You can clean multiple
        firearms during this hour, up to a reasonable limit as determined by the
        GM (typically no more than five).
      </p>
      <p>
        Some abilities cause a weapon to misfire as a part of their effects. If
        such a misfire happens as a result of an attack (due to an action that
        causes a misfire on a failed attack, for example), it retroactively
        makes the attack a critical failure.
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to those from your class at 1st level, you have the benefits
        of your selected ancestry and background.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="gunslinger-s-way">Gunslinger's way</h3>
      <p>
        All gunslingers have a particular way they follow, a combination of
        philosophy and combat style that defines both how they fight and the
        weapons they excel with. At 1st level, your way grants you an initial
        deed, a unique reload action called a slinger’s reload, and proficiency
        with a particular skill. You also gain advanced and greater deeds at
        later levels, as well as access to way-specific feats. The gunslinger
        ways are described in detail below.
      </p>
      <ul>
        <li>
          <b>Way of the Drifter:</b> You wander across the battlefield, equally
          at home in and out of the fray.
        </li>
        <li>
          <b>Way of the Pistolero:</b> You carefully maintain your distance at a
          duelist’s 10 paces with pistol in hand.
        </li>
        <li>
          <b>Way of the Sniper:</b> You practice a methodical style of shooting,
          striking from far cover.
        </li>
        <li>
          <b>Way of the Vanguard:</b> You rely on a brutal combat style that
          uses heavy weapons and explosive attacks.
        </li>
      </ul>

      <h4>Gunslinger ways</h4>
      <p>
        You learn a particular fighting style, known as a way. Your way grants a
        series of deeds, access to feats, proficiency with a skill, and a
        special reload action, all of which help shape and influence the way you
        affect the battlefield. The ways available to all gunslingers are
        described below.
      </p>

      <h4>Interacting to reload</h4>
      <p>
        The slinger’s reload action from each gunslinger way, as well as many
        feats, give the ability to Interact to reload a weapon. This is enough
        to reload a weapon that takes 1 Interact action to reload, but only
        provides one of the Interact actions needed to reload a weapon with
        reload 2 or greater. As normal, you can provide the remaining Interact
        actions separately.
      </p>

      <BaseAccordion
        title="Way of the drifter"
        number={1}
        text={
          <>
            <p>
              You’re a wanderer traveling from land to land with your gun and a
              melee weapon as company. Maybe you learned to fight with blade and
              pistol as a Shackles pirate, mastered the hand cannon and katana
              in Minkai, or practiced with a hatchet and clan pistol in Dongun
              Hold. You win battles by relying on mobility and flexible use of
              your weapons.
            </p>
            <p>
              <b>Slinger’s Reload</b> Reloading Strike.
            </p>
            <p>
              <b>Deeds</b> Initial Into the Fray; Advanced Finish the Job;
              Greater Drifter’s Wake.
            </p>
            <p>
              <b>Way Skill</b> Acrobatics.
            </p>

            <h4>Slinger's reload</h4>
            <Spell
              name="reloading strike"
              action="one_action"
              tags={["gunslinger"]}
              type=""
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> You’re wielding a firearm or crossbow
                      in one hand, and your other hand either wields a
                      one-handed melee weapon or is empty.
                    </span>
                    <br />
                    You make a melee attack and then reload your gun in one
                    fluid movement. Strike an opponent within reach with your
                    one-handed melee weapon (or, if your other hand is empty,
                    with an unarmed attack), and then Interact to reload. You
                    don’t need a free hand to reload in this way.
                  </p>
                </>
              }
            />

            <h4>Initial Deed</h4>
            <Spell
              name="Into the fray"
              action="one_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> You roll initiative.
                    </span>
                    <br />
                    You know trouble can lurk around every corner, and your
                    hands never stray far from your holsters. You can Interact
                    to draw a one-handed ranged weapon and can then Interact to
                    draw a one-handed melee weapon. As your first action on your
                    first turn, you can Stride as a free action toward an enemy
                    you can perceive. If you can’t perceive any enemies or can’t
                    end your movement closer to one, you can’t use this Stride.
                  </p>
                </>
              }
            />

            <h4>Advanced Deed</h4>
            <Spell
              name="Finish the job"
              action="one_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> On your last action, you failed (but
                      didn’t critically fail) a Strike with a firearm or
                      crossbow you’re holding in one hand, and your other hand
                      is either wielding a melee weapon or empty.
                    </span>
                    <br />
                    Your last attack failed, but it set you up for another. Make
                    a Strike with your other hand, using a one-handed melee
                    weapon or unarmed attack. This Strike uses the same multiple
                    attack penalty as the Strike that failed on the last action.
                    Afterward, increase your multiple attack penalty normally.
                  </p>
                </>
              }
            />

            <h4>Greater Deed</h4>
            <Spell
              name="Drifter's wake"
              action="three_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    You drift across the battlefield, striking down foes as you
                    go. You Stride, and you can Strike up to three times at any
                    points during your movement. Each attack must target a
                    different enemy and must be made with a one-handed firearm,
                    crossbow, melee weapon, or unarmed attack. Each attack
                    counts toward your multiple attack penalty, but your
                    multiple attack penalty doesn’t increase until you’ve made
                    all your attacks. Your movement doesn’t trigger reactions.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        title="Way of the pistolero"
        number={2}
        text={
          <>
            <p>
              Whether you’re a professional duelist or a pistol-twirling
              entertainer, you have quick feet and quicker hands that never seem
              to let you down, and an equally sharp wit and tongue that jab your
              foes. You might leave a hand free or cultivate the ambidexterity
              for twin weapons. Either way, you stay close enough to your
              enemies to leverage your superior reflexes while leaving enough
              space to safely fire.
            </p>
            <p>
              <b>Slinger’s Reload</b> Raconteur’s Reload.
            </p>
            <p>
              <b>Deeds</b> Initial Ten Paces ; Advanced Pistolero’s Retort;
              Greater Grim Swagger
            </p>
            <p>
              <b>Way Skill</b> choose Deception or Intimidation.
            </p>

            <h4>Slinger's reload</h4>
            <Spell
              name="Raconteur's reload"
              action="one_action"
              tags={["gunslinger"]}
              type=""
              description={
                <>
                  <p>
                    Your rapid or forceful words draw the enemy’s attention away
                    from your hands long enough to chamber another bullet.
                    Interact to reload and then attempt a Deception check to
                    Create a Diversion or an Intimidation check to Demoralize.
                  </p>
                </>
              }
            />

            <h4>Initial Deed</h4>
            <Spell
              name="Ten paces"
              action="one_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> You roll initiative.
                    </span>
                    <br />
                    You react to trouble with lightning speed, positioning
                    yourself just right. You gain a +2 circumstance bonus to
                    your initiative roll, and you can Interact to draw a
                    one-handed firearm or one-handed crossbow. As your first
                    action on your first turn, you can Step up to 10 feet as a
                    free action.
                  </p>
                </>
              }
            />

            <h4>Advanced Deed</h4>
            <Spell
              name="Pistolero's retort"
              action="reaction"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <b>Requirements</b> You’re wielding a one-handed firearm or
                    one-handed crossbow.
                    <br />
                    <span className="frequency">
                      <b>Trigger</b> A foe within the first range increment of
                      the one-handed firearm or one-handed crossbow you’re
                      wielding critically fails an attack roll against you.
                    </span>
                    <br />
                    You punish your foe’s failure with a shot. Make a Strike
                    against the triggering foe with a one-handed firearm or
                    one-handed crossbow.
                  </p>
                </>
              }
            />

            <h4>Greater Deed</h4>
            <Spell
              name="Grim swagger"
              action="two_action"
              tags={[
                "gunslinger",
                "auditory",
                "emotion",
                "fear",
                "mental",
                "linguistic",
              ]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> You have a one-handed firearm or
                      one-handed crossbow visibly worn or wielded.
                    </span>
                    <br />
                    You attempt to clear the room by promising a grim fate to
                    anyone who doesn’t do what you say, and quickly. Attempt a
                    Deception or Intimidation check against the Will DCs of each
                    creature within 30 feet, except for your allies. Regardless
                    of whether you succeed or fail, each subject is temporarily
                    immune to your Grim Swagger for 10 minutes.
                  </p>
                  <p>
                    For example, if you attempt a Deception check, you lie and
                    boast about your prowess or the large group of friends on
                    their way to back you up. If you attempt an Intimidation
                    check, you promise everyone in the room that you’re going to
                    be the last thing they see.
                  </p>
                  <p>
                    <b>Critical Success</b> The creature becomes frightened 3.
                    If it’s lower level than you, it’s also fleeing for 1 round.
                  </p>
                  <p>
                    <b>Success</b> The creature becomes frightened 2.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        title="Way of the sniper"
        number={3}
        text={
          <>
            <p>
              You practice a style of shooting that relies on unerring accuracy
              and perfect placement of your first shot. You keep hidden or at a
              distance, staying out of the fray and bringing unseen death to
              your foes.
            </p>
            <p>
              <b>Slinger’s Reload</b> Covered Reload.
            </p>
            <p>
              <b>Deeds</b> Initial One Shot, One Kill; Advanced Vital Shot;
              Greater Ghost Shot.
            </p>
            <p>
              <b>Way Skill</b> Stealth.
            </p>

            <h4>Slinger's reload</h4>
            <Spell
              name="covered reload"
              action="one_action"
              tags={["gunslinger"]}
              type=""
              description={
                <>
                  <p>
                    You duck into a safe position or minimize your profile while
                    reloading to make your next attack. Either Take Cover or
                    attempt to Hide, then Interact to reload. As normal, you
                    must meet the requirements to Take Cover or Hide; you must
                    be prone, benefiting from cover, or near a feature that
                    allows you to Take Cover, and you need to be benefiting from
                    cover or concealed to a creature to Hide from that creature
                  </p>
                </>
              }
            />

            <h4>Initial Deed</h4>
            <Spell
              name="One shot, one kill"
              action="one_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> You roll Stealth for initiative.
                    </span>
                    <br />
                    Your first shot is the deadliest. Interact to draw a firearm
                    or crossbow. On your first turn, your first Strike with that
                    weapon deals an additional 1d6 precision damage. This
                    precision damage increases to 2d6 at 9th level and 3d6 at
                    15th level.
                  </p>
                </>
              }
            />

            <h4>Advanced Deed</h4>
            <Spell
              name="vital shot"
              action="two_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    Your careful shot against an unsuspecting opponent pierces a
                    vital artery or organ. Make a ranged Strike. If the target
                    is flat-footed, the Strike deals an extra die of weapon
                    damage, and the foe takes persistent bleed damage equal to
                    the amount of precision damage from your One Shot, One Kill.
                  </p>
                </>
              }
            />

            <h4>Greater Deed</h4>
            <Spell
              name="Ghost shot"
              action="one_action"
              tags={["gunslinger", "flourish"]}
              description={
                <>
                  <p>
                    Make a firearm or crossbow Strike. If you’re hidden from or
                    undetected by the target, the Strike adds the additional
                    precision damage from One Shot, One Kill; if you would
                    already receive that additional damage on the Strike, the
                    effects aren’t cumulative. If you were undetected or
                    unnoticed by any creatures, you’re now hidden from them
                    instead, as the origin of the attack is clear.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        title="Way of the Vanguard"
        number={4}
        text={
          <>
            <p>
              You practice a unique combat style originated by dwarven siege
              engineers, using heavy weapons with wide attack areas to blast
              holes through enemy lines, clear an opening for your allies, and
              defend the conquered territory.
            </p>
            <p>
              <b>Slinger’s Reload</b> Clear a Path.
            </p>
            <p>
              <b>Deeds</b> Initial Living Fortification; Advanced Spinning
              Crush; Greater Siegebreaker.
            </p>
            <p>
              <b>Way Skill</b> Athletics.
            </p>

            <h4>Slinger's reload</h4>
            <Spell
              name="Clear path"
              action="one_action"
              tags={["gunslinger"]}
              type=""
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> You’re wielding a two-handed firearm
                      or two-handed crossbow.
                    </span>
                    <br />
                    You push outward with your weapon to clear some space before
                    quickly reloading a fresh round. You make an Athletics check
                    to Shove an opponent within your reach using your weapon,
                    then Interact to reload. For this Shove, you don’t need a
                    free hand, and you add the weapon’s item bonus on attack
                    rolls (if any) to the Athletics check. If your last action
                    was a ranged Strike with the weapon, use the same multiple
                    attack penalty as that Strike for the Shove; the Shove still
                    counts toward your multiple attack penalty on further
                    attacks as normal.
                  </p>
                </>
              }
            />

            <h4>Initial Deed</h4>
            <Spell
              name="Living fortification"
              action="one_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> You roll initiative.
                    </span>
                    <br />
                    You can posture defensively with firearms or crossbows,
                    acting like a walking tower. Interact to draw a firearm or
                    crossbow. You then position that weapon defensively, gaining
                    a +1 circumstance bonus to AC until the start of your first
                    turn, or a +2 circumstance bonus if the chosen weapon has
                    the parry trait.
                  </p>
                </>
              }
            />

            <h4>Advanced Deed</h4>
            <Spell
              name="spinning crush"
              action="three_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> You’re wielding a loaded firearm or
                      loaded crossbow.
                    </span>
                    <br />
                    You go into a vicious spin, smashing your weapon into those
                    nearby and increasing your momentum by firing. All creatures
                    adjacent to you take 1d6 bludgeoning damage plus your
                    Strength modifier; this increases to 2d6 if your firearm has
                    a striking rune, 3d6 if it has a greater striking rune, and
                    4d6 if it has a major striking rune. This ability does not
                    apply other effects that increase damage with your firearm
                    Strikes such as weapon specialization. Creatures affected by
                    this attack must attempt a basic Reflex save. A creature
                    that fails its save is also pushed 5 feet directly away from
                    you.
                  </p>
                </>
              }
            />

            <h4>Greater Deed</h4>
            <Spell
              name="Siegebreaker"
              action="two_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> You’re wielding a firearm that has the
                      kickback or scatter trait, or a two-handed crossbow.
                    </span>
                    <br />
                    With unbelievable force, you charge and smash your weapon
                    into a target before digging in your heels and pulling the
                    trigger. Leap or Stride, then make a Strike with the
                    required firearm or crossbow against an adjacent target.
                    This Strike deals an additional 3d8 bludgeoning damage and
                    ignores 10 points of the target’s Hardness (if any), or of
                    their shield’s Hardness if the target uses Shield Block.
                  </p>
                  <p>
                    After the Strike, you become immobilized and position the
                    required weapon defensively, gaining a +1 circumstance bonus
                    to AC, or a +2 circumstance bonus if the chosen weapon has
                    the parry trait. Both effects last until the start of your
                    next turn. If a force would move you while you’re
                    immobilized in this way, it must succeed at an appropriate
                    check against your class DC.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <BaseAccordion
        title="Way of the Triggerbrand"
        number={5}
        text={
          <>
            <p>
              You prefer firearms that work well as weapons in both melee and
              ranged combat, particularly those that allow you to exercise a bit
              of style and flair. You might be a survivor who cobbled your
              weapon together from the City of Smog’s street scrap or a noble
              wielder of a master smith’s bespoke commission for duels among
              Alkenstar’s elite. In addition to the combination weapons
              presented on pages 158–159 in Pathfinder Guns & Gears, you gain
              access to the triggerbrand combination weapon presented below.
            </p>
            <p>
              <b>Slinger’s Reload</b> Touch and Go.
            </p>
            <p>
              <b>Deeds</b> Initial Spring the Trap; Advanced Wind Them Up;
              Greater Drive Them Down.
            </p>
            <p>
              <b>Way Skill</b> Thievery.
            </p>

            <h4>Slinger's reload</h4>
            <Spell
              name="Touch and go"
              action="one_action"
              tags={["gunslinger"]}
              type=""
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Requirements</b> You’re wielding a combination weapon.
                    </span>
                    <br />
                    Your body’s shadows mask your hands’ steel. You can Step
                    toward an enemy, you can Interact to change your weapon
                    between melee or ranged modes, and you then Interact to
                    reload.
                  </p>
                </>
              }
            />

            <h4>Initial Deed</h4>
            <Spell
              name="Spring the trap"
              action="one_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> You roll initiative.
                    </span>
                    <br />
                    You can Interact to draw a combination weapon and set it to
                    melee or ranged mode. On your first turn, your movement and
                    ranged attacks don’t trigger reactions that are normally
                    triggered by movement or a ranged attack (such as Attack of
                    Opportunity).
                  </p>
                </>
              }
            />

            <h4>Advanced Deed</h4>
            <Spell
              name="Wind them up"
              action="two_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    Should foes parry your blade or dodge your bullets?
                    Neither—they should be watching their purse. Make a melee
                    Strike with your combination weapon, and then attempt a
                    Thievery check with a –5 penalty to Steal from your target;
                    you can’t Steal closely guarded objects or objects that
                    would take a long time to pilfer. You don’t need a free hand
                    to attempt to Steal something in this manner. If your
                    Thievery check succeeds, the target is flat-footed against
                    your ranged attacks until the start of your next turn, and
                    you don’t trigger reactions that are normally triggered by
                    movement or a ranged attack. These effects occur even if
                    your target has no objects to Steal.
                  </p>
                </>
              }
            />

            <h4>Greater Deed</h4>
            <Spell
              name="Break them down"
              action="two_action"
              tags={["gunslinger"]}
              description={
                <>
                  <p>
                    Your foes are but dross from which you carve and shoot your
                    legend. Make a melee Strike and then a ranged Strike with a
                    combination weapon, both against the same enemy; you don’t
                    need to change modes to do so. If the melee Strike hits, you
                    gain a +1 circumstance bonus to the attack roll with the
                    ranged Strike. Each attack counts toward your multiple
                    attack penalty, but your multiple attack penalty doesn’t
                    increase until you’ve made both attacks. If both Strikes
                    hit, you deal an additional 2d6 persistent bleed damage to
                    the enemy, and they’re dazzled until this persistent bleed
                    damage ends.
                  </p>
                </>
              }
            />
          </>
        }
      />

      <h3 id="gunslinger-feat">Gunslinger Feats</h3>
      <p>
        At 1st level and every even-numbered level, you gain a gunslinger class
        feat.
      </p>

      <h3 id="singular-expertise">singular expertise</h3>
      <p>
        You have particular expertise with guns and crossbows that grants you
        greater proficiency with them and the ability to deal more damage. You
        gain a +1 circumstance bonus to damage rolls with firearms and
        crossbows.
      </p>
      <p>
        This intense focus on firearms and crossbows prevents you from reaching
        the same heights with other weapons. Your proficiency with unarmed
        attacks and with weapons other than firearms and crossbows can’t be
        higher than trained, even if you gain an ability that would increase
        your proficiency in one or more other weapons to match your highest
        weapon proficiency (such as the weapon expertise feats many ancestries
        have). If you have gunslinger weapon mastery, the limit is expert, and
        if you have gunslinging legend, the limit is master.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every even-numbered level, you gain a skill feat. You
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
        You can use this increase either to increase your proficiency rank to
        trained in one skill you’re untrained in, or to increase your
        proficiency rank in one skill in which you’re already trained to expert.
      </p>
      <p>
        At 7th level, you can use skill increases to become a master in a skill
        in which you’re already an expert, and at 15th level, you can use them
        to become legendary in a skill in which you’re already a master.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="stubborn">Stubborn</h3>
          <p>
            You don’t like being told what to do, and you don’t give up. Your
            proficiency rank for Will saves increases to expert. When you fail,
            but don’t critically fail, a Will save against an effect that would
            give you the controlled condition, you can attempt a second save
            against the effect at the start of your next turn. On a successful
            second save, the controlled condition ends, though any other effects
            remain. As normal, failing this second save doesn’t allow you to
            attempt a third save on the subsequent turn.
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
            ancestry feat at 5th level and every 4 levels thereafter.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/gunslinger_02.webp")}
            alt="gunslinger example"
          />
        </figure>
      </div>

      <h3 id="gunslinger-weapon-mastery">Gunslinger weapon mastery</h3>
      <p>
        You fully understand the best way to utilize your unique weapons. Your
        proficiency rank increases to master with simple and martial firearms
        and crossbows. Your proficiency rank for advanced firearms and
        crossbows, simple weapons, martial weapons, and unarmed attacks
        increases to expert. You gain access to the critical specialization
        effects for firearms and crossbows.
      </p>

      <h3 id="vigilan- sense">Vigilant sense</h3>
      <p>
        Through your adventures, you’ve developed keen awareness and attention
        to detail. Your proficiency rank for Perception increases to master.
      </p>

      <h3 id="weapon-specialization">Weapon specialization</h3>
      <p>
        You’ve learned how to inflict greater injuries with the weapons you know
        best. You deal 2 additional damage with weapons and unarmed attacks in
        which you are an expert. This damage increases to 3 if you’re a master,
        and 4 if you’re legendary.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="advanced-deed">Advanced deed</h3>
          <p>
            You’ve learned a powerful new technique of your chosen way. You gain
            the advanced deed ability of the way you chose at 1st level.
          </p>

          <h3 id="gunslinger-expertise">Gunslinger expertise</h3>
          <p>
            Your special shots become harder for opponents to predict or resist.
            Your proficiency rank for your gunslinger class DC increases to
            expert.
          </p>

          <h3 id="evasion">Evasion</h3>
          <p>
            You’ve learned to move quickly to avoid explosions, dragon’s breath,
            and worse. Your proficiency rank for Reflex saves increases to
            master. When you roll a success on a Reflex save, you get a critical
            success instead.
          </p>

          <h3 id="gunslinger-legend">Gunslinger legend</h3>
          <p>
            You’ve learned unique techniques for wielding firearms and crossbows
            that give you unmatched skill in their use. Your proficiency rank
            increases to legendary with simple and martial firearms and
            crossbows and to master with advanced firearms and crossbows. Your
            proficiency rank for simple weapons, martial weapons, and unarmed
            attacks increases to expert.
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
            src={require("../assets/img/gunslinger_03.webp")}
            alt="Gunslinger example"
          />
        </figure>
      </div>

      <h3 id="greater-deed">Greater deed</h3>
      <p>
        You’ve mastered the pinnacle technique of your chosen way. You gain the
        greater deed ability of the way you chose at 1st level.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="greater-weapon-specialization">
            Greater weapon specialization
          </h3>
          <p>
            Your damage from weapon specialization increases to 4 with weapons
            and unarmed attacks in which you’re an expert, 6 if you’re a master,
            and 8 if you’re legendary.
          </p>

          <h3 id="juggernaut">Juggernaut</h3>
          <p>
            Your body has become accustomed to physical hazards and resistant to
            ailments. Your proficiency rank for Fortitude saves increases to
            master. When you roll a success on a Fortitude save, you get a
            critical success instead.success on a Reflex save, you get a
            critical success instead.
          </p>

          <h3 id="Shootists-edge">Shootist's edge</h3>
          <p>
            You make shots others find impossible. Your proficiency rank for
            your gunslinger class DC increases to master. When using a ranged
            weapon in which you have master or greater proficiency, you ignore
            the penalty for attacking within the weapon’s second and third range
            increments.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/gunslinger_04.webp")}
            alt="Gunslinger example"
          />
        </figure>
      </div>

      <h3 id="incredible-senses">Incredible senses</h3>
      <p>
        You notice things that most people can’t detect. Your proficiency rank
        for Perception increases to legendary.
      </p>

      <h3 id="medium-armor-mastery">Medium armor mastery</h3>
      <p>
        Your skill with light and medium armor improves, increasing your ability
        to dodge or absorb blows. Your proficiency ranks for light armor, medium
        armor, and unarmored defense increase to master.
      </p>

      <h2>Feats</h2>
      <p>
        At every level that you gain a gunslinger feat, you can select one of
        the following feats. You must satisfy any prerequisites before selecting
        the feat.
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

export default GunslingerPage;
