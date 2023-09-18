import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { BarbarianFeats } from "../middleware/BarbarianFeats";
import { ClassFeat } from "../middleware/CutsomTypes";

const BarbarianPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    BarbarianFeats
  );
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...BarbarianFeats];
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
        <h1>Barbarian</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          The barbarian is a fearsome embodiment of rage, focusing the deadly
          power of their anger against anyone who stands in their way. A
          barbarian is quick to enter battle and, once their fury has been
          unleashed, is immensely strong, often unpredictable, and nearly
          unstoppable.
        </p>
        <figure>
          <img
            src={require("../assets/img/barbarian_icon.png")}
            alt="barbarian icon"
          />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Strength</b>
          <p>
            At 1st level, your class gives you an ability boost to Strength.
          </p>
        </div>
        <div className="column">
          <h2>Hit points</h2>
          <b>12 plus your Constitution Modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>

      <figure className="figure-one">
        <img
          src={require("../assets/img/barbarian_01.webp")}
          alt="Alchemist explosion"
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
          <li>Trained in Reflex</li>
          <li>Expert in Will</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Trained in Athletics</li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
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
        <p>Trained in barbarian class DC</p>
      </div>
      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You summon your rage and rush to the front lines to smash your way
            through. Offense is your best defense—you’ll need to drop foes
            before they can exploit your relatively low defenses.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You use intimidation to get what you need, especially when gentler
            persuasion can’t get the job done.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You look out for danger, ready to rush headfirst into battle in an
            instant. You climb the challenging rock wall and drop a rope for
            others to follow, and you wade into the risky currents to reach the
            hidden switch beneath the water’s surface. If something needs
            breaking, you’re up to the task!
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            YYou might head to a tavern to carouse, build up the fearsome legend
            of your mighty deeds, or recruit followers to become a warlord in
            your own right.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>Have a deep-seated well of anger, hatred, or frustration.</li>
        <li>
          Prefer a straightforward approach to one requiring patience and
          tedium.
        </li>
        <li>
          Engage in a regimen of intense physical fitness—and punch anyone who
          says this conflicts with your distaste for patience and tedium.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Rely on your courage and your strength, and trust that you can hold
          your own in a fight.
        </li>
        <li>
          See you as uncivilized or a boorish lout unfit for high society.
        </li>
        <li>
          Believe that you are loyal to your friends and allies and will never
          relent until the fight is done.
        </li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as a barbarian. Abilities gained at higher
        levels list the requisite levels next to their names.
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
              <a href="#rage">rage</a>, <a href="instinct">instinct</a>,{" "}
              <a href="#barbarian-feat">barbarian feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#deny-advantage">Deny advantage</a>,{" "}
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#barbarian">Barbarian</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              , <a href="#general-feat">general feat</a>,{" "}
              <a href="#juggernaut">juggernaut</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#lighting-reflexes">Lighting reflexes</a>,{" "}
              <a href="#raging-resistance">raging resistance</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#barbarian-feat">barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#juggernaut">mighty rage</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#greater-juggernaut">greater juggernaut</a>,{" "}
              <a href="#medium-armor-expertise">medium armor expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-fury">weapon fury</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
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
              , <a href="#indomitable-will">indomitable will</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#heightened-senses">heightened senses</a>,{" "}
              <a href="#quick-rage">quick rage</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#barbarian-feat">Barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#armor-of-fury">Armor of fury</a>,{" "}
              <a href="#devastator">Devastator</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#barbarian-feat">barbarian feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Key Terms</h3>
      <p>
        You’ll see the following key terms in many barbarian class features.
      </p>
      <p>
        <b>Flourish:</b> Flourish actions are techniques that require too much
        exertion to perform a large number in a row. You can use only 1 action
        with the flourish trait per turn.
      </p>
      <p>
        <b>Open:</b> These maneuvers work only as your first salvo on your turn.
        You can use an open action only if you haven’t used an action with the
        attack or open trait yet this turn.
      </p>
      <p>
        <b>Rage:</b> You must be raging to use abilities with the rage trait,
        and they end automatically when you stop raging.
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>

      <h3 id="rage">Rage</h3>
      <p>You gain the Rage action, which lets you fly into a frenzy.</p>

      <Feat
        id={0}
        name="Rage"
        tags={["barbarian", "concentrate", "emotion", "mental"]}
        action=""
        level={1}
        feat="Feat 1"
        description={
          <>
            <p>
              <span className="frequency">
                <b>Requirements:</b> You aren’t fatigued or raging.
              </span>
              <br />
              You tap into your inner fury and begin raging. You gain a number
              of temporary Hit Points equal to your level plus your Constitution
              modifier. This frenzy lasts for 1 minute, until there are no
              enemies you can perceive, or until you fall unconscious, whichever
              comes first. You can’t voluntarily stop raging. While you are
              raging:
            </p>
            <ul>
              <li>
                You deal 2 additional damage on melee Strikes. This additional
                damage is halved if your weapon or unarmed attack is agile.
              </li>
              <li>You take a –1 penalty to AC.</li>
              <li>
                You can’t use actions with the concentrate trait unless they
                also have the rage trait. You can Seek while raging.
              </li>
            </ul>
            <p>
              After you stop raging, you lose any remaining temporary Hit Points
              from Rage, and you can’t Rage again for 1 minute.
            </p>
          </>
        }
      />

      <h3 id="instinct">Instinct</h3>
      <p>
        Your rage wells up from a dominant instinct—one you learned from a
        tradition or that comes naturally to you. Your instinct gives you an
        ability, requires you to avoid certain behaviors, grants you increased
        damage and resistances at higher levels, and allows you to select feats
        tied to your instinct. For more information, see below.
      </p>
      <p>
        You channel your rage through an instinct. You decide what your instinct
        means to you. It could be a creature or symbol beloved by your clan, or
        a purely internal source or filter of your rage, such as a belief,
        curse, heritage, or state of mind. Each instinct grants an instinct
        ability, plus more abilities you can gain via feats that list that
        instinct as a prerequisite. It also determines what damage you resist
        with raging resistance and, at higher levels, increases the additional
        damage you deal when you Rage.
      </p>
      <p>
        Each instinct lists acts that are anathema to it. Whenever you perform
        such acts, you lose the instinct’s abilities and any feats that list
        your instinct as a prerequisite until you spend 1 day of downtime
        re-centering yourself, though you keep all of your other barbarian
        abilities.
      </p>

      <BaseAccordion
        title="Animal instinct"
        number={1}
        text={
          <>
            <p>
              The fury of a wild predator fills you when you <b>Rage</b>,
              granting you ferocious unarmed attacks. Cultures that revere
              vicious animals (such as apes or bears) give rise to barbarians
              with this instinct. You might also be at war with an
              uncontrollable, animalistic side of your personality, or you might
              be a descendant of a werewolf or another werecreature. Select an
              animal from <b>Animal Instincts</b> that best matches your chosen
              animal.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Animal</th>
                  <th>Attack</th>
                  <th>Damage</th>
                  <th>Traits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ape</td>
                  <td>Fist</td>
                  <td>1d10 B</td>
                  <td>Grapple, unarmed</td>
                </tr>
                <tr>
                  <td>Bear</td>
                  <td>
                    <li>Jaws</li>
                    <li>Caws</li>
                  </td>
                  <td>
                    <li>1d10 P</li>
                    <li>1d6 S</li>
                  </td>
                  <td>
                    <li>Unarmed</li>
                    <li>Agile. unarmed</li>
                  </td>
                </tr>
                <tr>
                  <td>Bull</td>
                  <td>Horn</td>
                  <td>1d10 P</td>
                  <td>Shoved, unarmed</td>
                </tr>
                <tr>
                  <td>Cat</td>
                  <td>
                    <li>Jaws</li>
                    <li>Caws</li>
                  </td>
                  <td>
                    <li>1d10 P</li>
                    <li>1d6 S</li>
                  </td>
                  <td>
                    <li>Unarmed</li>
                    <li>Agile. unarmed</li>
                  </td>
                </tr>
                <tr>
                  <td>Deer</td>
                  <td>Antler</td>
                  <td>1d10 P</td>
                  <td>Grappled, unarmed</td>
                </tr>
                <tr>
                  <td>Frog</td>
                  <td>
                    <li>Jaws</li>
                    <li>Tongue</li>
                  </td>
                  <td>
                    <li>1d10 P</li>
                    <li>1d4 B</li>
                  </td>
                  <td>
                    <li>Unarmed</li>
                    <li>Agile. unarmed</li>
                  </td>
                </tr>
                <tr>
                  <td>Shark</td>
                  <td>Jaws</td>
                  <td>1d10 P</td>
                  <td>Grappled, unarmed</td>
                </tr>
                <tr>
                  <td>Snake</td>
                  <td>Fangs</td>
                  <td>1d10 P</td>
                  <td>Grappled, unarmed</td>
                </tr>
                <tr>
                  <td>Wolf</td>
                  <td>Jaws</td>
                  <td>1d10 P</td>
                  <td>Trip, unarmed</td>
                </tr>
              </tbody>
            </table>

            <h4>Anathema</h4>
            <p>
              Flagrantly disrespecting an animal of your chosen kind is anathema
              to your instinct, as is using weapons while raging.
            </p>

            <h4>Bestial rage (instinct ability)</h4>
            <p>
              When you Rage, you gain your chosen animal’s unarmed attack (or
              attacks). The specific attack gained, the damage it deals, and its
              traits are listed on Animal Instincts. These attacks are in the
              brawling group. Your Rage action gains the morph, primal, and
              transmutation traits.
            </p>

            <h4>Specialization ability</h4>
            <p>
              When you Rage, you gain your chosen animal’s unarmed attack (or
              attacks). The specific attack gained, the damage it deals, and its
              traits are listed on Animal Instincts. These attacks are in the
              brawling group. Your Rage action gains the morph, primal, and
              transmutation traits.
            </p>

            <h4>Raging resistance</h4>
            <p>You resist piercing and slashing damage.</p>
          </>
        }
      />

      <BaseAccordion
        title="Dragon instinct"
        number={2}
        text={
          <>
            <p>
              You summon the fury of a mighty dragon and manifest incredible
              abilities. Perhaps your culture reveres draconic majesty, or you
              gained insights by drinking or bathing in dragon’s blood or
              watching a marauding wyrm burn your village. Select a type of
              dragon from Dragon Instincts as your instinct’s dragon type.
              Chromatic dragons tend to be evil, and metallic dragons tend to be
              good.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Dragon type</th>
                  <th>Category</th>
                  <th>Breath Weapon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Black</td>
                  <td>Chromatic</td>
                  <td>Line of acid</td>
                </tr>
                <tr>
                  <td>Blue</td>
                  <td>Chromatic</td>
                  <td>Line of electricity</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>Chromatic</td>
                  <td>Cone of poison</td>
                </tr>
                <tr>
                  <td>Red</td>
                  <td>Chromatic</td>
                  <td>Cone of fire</td>
                </tr>
                <tr>
                  <td>White</td>
                  <td>Chromatic</td>
                  <td>Cone of cold</td>
                </tr>
                <tr>
                  <td>Brass</td>
                  <td>Metallic</td>
                  <td>Line of fire</td>
                </tr>
                <tr>
                  <td>Bronze</td>
                  <td>Metallic</td>
                  <td>Line of electricity</td>
                </tr>
                <tr>
                  <td>Copper</td>
                  <td>Metallic</td>
                  <td>Line of acid</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Metallic</td>
                  <td>Line of fire</td>
                </tr>
                <tr>
                  <td>Silver</td>
                  <td>Metallic</td>
                  <td>Line of cold</td>
                </tr>
              </tbody>
            </table>

            <h4>Anathema</h4>
            <p>
              Letting a personal insult against you slide is anathema to your
              instinct. Choose whether your character respects or abhors your
              dragon type. If you respect it, defying such a dragon is anathema,
              and if you abhor it, failing to defeat such a dragon you come
              across is anathema.
            </p>

            <h4>Draconic Rage (instinct ability)</h4>
            <p>
              While raging, you can increase the additional damage from Rage
              from 2 to 4 and change its damage type to match that of your
              dragon’s breath weapon instead of the damage type for your weapon
              or unarmed attack. If you do this, your Rage action gains the
              arcane and evocation traits, as well as the trait matching the
              damage type.
            </p>

            <h4>Specialization ability</h4>
            <p>
              When you use draconic rage, you increase the additional damage
              from Rage from 4 to 8. If you have greater weapon specialization,
              instead increase the damage from Rage when using draconic rage
              from 8 to 16.
            </p>

            <h4>Raging Resistance</h4>
            <p>
              You resist piercing damage and the damage type of your dragon’s
              breath weapon.
            </p>
          </>
        }
      />

      <BaseAccordion
        title="Fury instinct"
        number={3}
        text={
          <>
            <p>
              Your rage comes from a deep and purely personal well within you.
              You use your rage as you choose.
            </p>

            <h4>Anathema and instinct ability</h4>
            <p>
              You don’t have an anathema or an instinct ability. Instead, you
              gain an additional 1st-level barbarian feat.
            </p>

            <h4>Specialization ability</h4>
            <p>
              Increase the additional damage from Rage from 2 to 6. If you have
              greater weapon specialization, instead increase the additional
              damage from Rage to 12.
            </p>

            <h4>Raging resistance</h4>
            <p>
              You resist physical weapon damage, but not physical damage from
              other sources (such as unarmed attacks).
            </p>
          </>
        }
      />

      <BaseAccordion
        title="Giant instinct"
        number={4}
        text={
          <>
            <p>
              Your rage gives you the raw power and size of a giant. This
              doesn’t necessarily mean you revere giants—you might scoff at them
              or even aspire to slay them! You could instead seem like a giant
              to other people due to your exceptional strength or
              larger-than-life emotions and ego.
            </p>

            <h4>Anathema</h4>
            <p>Failing to face a personal challenge of strength is anathema.</p>

            <h4>Titan mauler (Instinct Ability)</h4>
            <p>
              You can use a weapon built for a Large creature if you are Small
              or Medium (both normally and when raging). If you’re not Small or
              Medium, you can use a weapon built for a creature one size larger
              than you. You gain access to this larger weapon, which can be of
              any weapon type otherwise available at character creation. It has
              the normal Price and Bulk for a weapon of its size. When wielding
              such a weapon in combat, increase your additional damage from Rage
              from 2 to 6, but you have the clumsy 1 condition because of the
              weapon’s unwieldy size. You can’t remove this clumsy condition or
              ignore its penalties by any means while wielding the weapon.
            </p>

            <h4>Specialization ability</h4>
            <p>
              Increase the damage from Rage when using a larger weapon from 6 to
              10; if you have greater weapon specialization, increase it from 10
              to 18.
            </p>

            <h4>Raging resistance</h4>
            <p>
              You resist bludgeoning damage and your choice of cold,
              electricity, or fire, chosen when you gain raging resistance.
            </p>
          </>
        }
      />

      <BaseAccordion
        title="Spirit instinct"
        number={5}
        text={
          <>
            <p>
              Whether you are emotionally sensitive to the spirits around you;
              worship ancestors or apparitions; or are haunted by the specter of
              an ancestor, relative, friend, or foe, your rage takes the form of
              a spiritual possession.
            </p>

            <h4>Anathema</h4>
            <p>
              Disrespecting corpses or spirits is anathema to your instinct;
              defending yourself against undead creatures is not.
            </p>

            <h4>Spirit Rage (Instinct Ability)</h4>
            <p>
              While raging, you can increase the additional damage from Rage
              from 2 to 3 and change its damage type to negative or positive,
              instead of the damage type for your weapon or unarmed attack
              (choose each time you Rage). If you choose to deal negative or
              positive damage, your weapon or unarmed attack gains the effects
              of the ghost touch property rune, which makes it more effective
              against incorporeal creatures, and your Rage action gains the
              divine and necromancy traits, plus negative or positive, as
              appropriate.
            </p>

            <h4>Specialization ability</h4>
            <p>
              When using spirit rage, increase the damage from Rage from 3 to 7.
              If you have greater weapon specialization, instead increase the
              damage when using spirit rage to 13.
            </p>

            <h4>Raging resistance</h4>
            <p>
              You resist negative damage, as well as damage dealt by the attacks
              and abilities of undead creatures, regardless of the damage type.
            </p>
          </>
        }
      />

      <BaseAccordion
        title="Supersition instinct"
        number={6}
        text={
          <>
            <i>Advanced Player's Guide</i>
            <p>
              A deep distrust of magic drives you to forgo and counter the
              metaphysical nonsense of spellcasters. Whether you’re a member of
              a superstitious family or culture that distrusts magic, a warrior
              in constant battle against wizards and witches, a survivor of a
              magical accident that instilled an intense aversion in your mind
              and body, or a scion of a bloodline known for its magic
              resistance, your rage is inimical to magic. This makes you an
              excellent mage hunter but slow to trust practitioners of magical
              arts. Your extremely restrictive anathema grants you powers beyond
              those of other instincts.
            </p>

            <h4>Anathema</h4>
            <p>
              Willingly accepting the effects of magic spells (including from
              scrolls, wands, and the like), even from your allies, is anathema
              to your instinct. You can still drink potions and invest and
              activate most magic items you find, though items that cast spells
              are subject to the same restrictions as all other spells. If an
              ally insists on using magic on you despite your unwillingness, and
              you have no reason to believe they will stop, continuing to travel
              with that ally of your own free will counts as willingly accepting
              their spells (as do similar circumstances) and thus is also
              anathema to your instinct.
            </p>

            <h4>Spirit Rage (Instinct Ability)</h4>
            <p>
              While raging, you gain a +2 status bonus to all saves against
              magic. Increase your damage from Rage from 2 to 4 against
              creatures that can cast spells. Once every 10 minutes, when you
              Rage, you regain Hit Points equal to the temporary Hit Points you
              gain from that Rage action.
            </p>

            <h4>Specialization ability</h4>
            <p>
              Increase the damage from Rage from 4 to 8 against creatures that
              can cast spells. If you have greater raging specialization,
              instead increase the damage from Rage to 12 against creatures with
              spells and 8 against other creatures.
            </p>

            <h4>Raging resistance</h4>
            <p>
              Choose two associated magical traditions: arcane and occult,
              arcane and primal, divine and occult, or divine and primal. The
              resistance from your raging resistance class feature applies
              against all damage you take from spells cast with these two
              traditions of magic, regardless of the type of damage dealt by the
              spell.
            </p>
          </>
        }
      />
      <h3 id="barbarian-feat">Barbarian Feats</h3>
      <p>
        At 1st level and every even-numbered level thereafter, you gain a
        barbarian class feat. Barbarian class feats are described in the
        Barbarian Feats section.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. Skill
        feats appear in Chapter 5 and have the skill trait. You must be trained
        or better in the corresponding skill to select a skill feat.
      </p>

      <h3 id="deny-advantage">Deny Advantage</h3>
      <p>
        Your foes struggle to pass your defenses. You aren’t flat-footed to
        hidden, undetected, or flanking creatures of your level or lower, or
        creatures of your level or lower using surprise attack. However, they
        can still help their allies flank.
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
        feat at 5th level and every 4 levels thereafter. The list of ancestry
        feats available to you can be found in your ancestry’s entry in Chapter
        2.
      </p>
      <div className="flex">
        <div className="flex-column">
          <h3 id="brutality">Brutality</h3>
          <p>
            Your fury makes your weapons lethal. Your proficiency ranks for
            simple weapons, martial weapons, and unarmed attacks increase to
            expert. While raging, you gain access to the critical specialization
            effects for melee weapons and unarmed attacks.
          </p>

          <h3 id="juggernaut">Juggernaut</h3>
          <p>
            Your body is accustomed to physical hardship and resistant to
            ailments. Your proficiency rank for Fortitude saves increases to
            master. When you roll a success on a Fortitude save, you get a
            critical success instead.
          </p>

          <h3 id="weapon-specialization">Weapon Specialization</h3>
          <p>
            Your rage helps you hit harder. You deal an additional 2 damage with
            weapons and unarmed attacks in which you have expert proficiency.
            This damage increases to 3 if you’re a master, and 4 if you’re
            legendary. You gain your instinct’s specialization ability.
          </p>

          <h3 id="lighting-reflexes">Lighting Relflexes</h3>
          <p>
            Your reflexes are lightning fast. Your proficiency rank for Reflex
            saves increases to expert.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/barbarian_02.webp")}
            alt="Barbarian example"
          />
        </figure>
      </div>

      <h3 id="raging-resistance">Raging resistance</h3>
      <p>
        Repeated exposure and toughened skin allow you to fend off harm. While
        raging, you gain resistance equal to 3 + your Constitution modifier to
        damage types based on your instinct.
      </p>

      <h3 id="mighty-rage">Mighty Rage</h3>
      <p>
        Your rage intensifies and lets you burst into action. Your proficiency
        rank for your barbarian class DC increases to expert. You gain the
        Mighty Rage free action.
      </p>
      <Spell
        name="Mighty rage"
        action="one_action"
        tags={["barbarian"]}
        description={
          <>
            <span className="frequency">
              <b>Trigger:</b> You use the Rage action on your turn.
            </span>
            <p>
              Use an action that has the rage trait. Alternatively, you can
              increase the actions of the triggering Rage to 2 to instead use a
              2-action activity with the rage trait.
            </p>
          </>
        }
      />

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="greater-juggernaut">Greater Juggernaut</h3>
          <p>
            You have a stalwart physiology. Your proficiency rank for Fortitude
            saves increases to legendary. When you roll a critical failure on a
            Fortitude save, you get a failure instead. When you roll a failure
            on a Fortitude save against an effect that deals damage, you halve
            the damage you take.
          </p>

          <h3 id="medium-armor-expertise">Medium armor expertise</h3>
          <p>
            You’ve learned to defend yourself better against attacks. Your
            proficiency ranks for light armor, medium armor, and unarmored
            defense increase to expert.
          </p>

          <h3 id="weapon-fury">Weapon fury</h3>
          <p>
            Your rage makes you even more effective with the weapons you wield.
            Your proficiency ranks for simple weapons, martial weapons, and
            unarmed attacks increase to master.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/barbarian_03.webp")}
            alt="Barbarian example"
          />
        </figure>
      </div>

      <h3 id="greater-weapon-specialization">Greater weapon specialization</h3>
      <p>
        The weapons you’ve mastered become truly fearsome in your hands. Your
        damage from weapon specialization increases to 4 with weapons and
        unarmed attacks in which you’re an expert, 6 if you’re a master, and 8
        if you’re legendary. You gain a greater benefit from your instinct’s
        specialization ability.
      </p>

      <h3 id="indomitable-will">Indomitable will</h3>
      <p>
        Your rage makes it difficult to control you. Your proficiency rank for
        Will saves increases to master. When you roll a success on a Will save,
        you get a critical success instead.
      </p>

      <h3 id="heightened-senses">Heightened Senses</h3>
      <p>
        Your instinct heightens each of your senses further. Your proficiency
        rank for Perception increases to master.
      </p>

      <h3 id="quick-rage">Quick Rage</h3>
      <p>
        You recover from your Rage quickly, and are soon ready to begin anew.
        After you spend a full turn without raging, you can Rage again without
        needing to wait 1 minute.
      </p>

      <h3 id="armor-of-fury">Armor of Fury</h3>
      <p>
        Your Strikes are so devastating that you hardly care about resistance,
        and your barbarian abilities are unparalleled. Your proficiency rank for
        your barbarian class DC increases to master. Your melee Strikes ignore
        10 points of a creature’s resistance to their physical damage.
      </p>

      <h2>Barbarian Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 4gp.
        </li>
        <li>
          <b>Bulk:</b> 3 Bulk, 5 light.
        </li>
        <li>
          <b>Money Left Over:</b> 11 gp.
        </li>
        <li>
          <b>Armor:</b> hide armor.
        </li>
        <li>
          <b>Weapons:</b> 4 javelins.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, grappling hook.
        </li>
        <li>
          <b>Options:</b> greataxe (2 gp), greatclub (1 gp), greatsword (2 gp),
          or battle axe and steel shield (3 gp).
        </li>
      </ul>

      <h2>Feats</h2>
      <p>
        At every level that you gain a barbarian feat, you can select one of the
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

export default BarbarianPage;
