import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ChampionFeats } from "../middleware/ChamptionFeats";
import { ChampionFocusSpells } from "../middleware/ChampionFocusSpells";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";

const ChampionPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    ChampionFeats
  );

  const [filteredSpellList, setFilteredSpellList] =
    useState<Array<FocusSpell> | null>(ChampionFocusSpells);
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...ChampionFeats];
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
        <h1>Champion</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          A defender of good who straps on armor and wields a righteous weapon,
          the champion protects the innocent and vanquishes evil. Steadfast in
          their beliefs, and devoted to both a deity and an aspect of good, they
          follow a strict code as they fight to make the world a better place.
        </p>
        <figure>
          <img
            src={require("../assets/img/champion_icon.png")}
            alt="champion icon"
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
          src={require("../assets/img/champion_01.webp")}
          alt="Champion image"
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
          <li>Expert in Fortitude</li>
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
          <li>Trained in martial weapons</li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in all armor</li>
          <li>Trained in champion class DC</li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in divine spell attacks</p>
        <p>Trained in divine spell DCs</p>
      </div>
      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You confront enemies in hand-to-hand combat while carefully
            positioning yourself to protect your allies.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You are a voice of hope, striving to reach a peaceful solution that
            strengthens bonds and yields good results for all.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You overcome barriers both physical and spiritual, providing
            inspiration to your allies through your actions and—when your fellow
            adventurers ask for it—providing moral and ethical guidance.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You spend much of your time in solemn prayer and contemplation,
            rigorous training, charity work, and fulfilling the tenets of your
            code, but that doesn’t mean there isn’t time to take up a craft or
            hobby.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>
          Believe there is always hope that good will triumph over evil, no
          matter how grim the odds.
        </li>
        <li>
          Know the ends don’t justify the means, since evil acts increase the
          power of evil.
        </li>
        <li>
          Have a strong sense of right and wrong, and grow frustrated when greed
          or shortsightedness breeds evil.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          See you as a symbol of hope, especially in a time of great need.
        </li>
        <li>
          Worry you secretly despise them for not living up to your impossible
          standard, or that you are unwilling to compromise when necessary.
        </li>
        <li>
          Know that you’ve sworn divine oaths of service they can trust you to
          keep.
        </li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as a champion. Abilities gained at higher
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
              <a href="#champions-code">champion’s code</a>,{" "}
              <a href="deity-and-cause">deity and cause</a>,{" "}
              <a href="#deific-weapon">deific weapon</a>,{" "}
              <a href="#champions-reaction">champion’s reaction</a>,{" "}
              <a href="#devotion-spells">devotion spells</a>,{" "}
              <a href="#champion-feat">champion feat</a>,{" "}
              <a href="#shield-block">shield block</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#divine-ally">Divine ally</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-expertise">weapon expertise</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#armor-expertise">Armor expertise</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-specialization">weapon specializationr</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#champion-expertise">champion expertise</a>,{" "}
              <a href="#divine-smite">divine smite</a>,{" "}
              <a href="#juggernaut">juggernaut</a>,{" "}
              <a href="#lightning-reflexes">lightning reflexes</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#champion-feat">champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#alertness">Alertness</a>,{" "}
              <a href="#divine-will">divine will</a>, <a href="#exalt">exalt</a>
              , <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#armor-mastery">armor mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#weapon-mastery">weapon mastery</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
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
              , <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#champion-mastery">champion mastery</a>,{" "}
              <a href="#legendary-armor">legendary armor</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#champion-feat">Champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#heros-defiance">hero’s defiance</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#champion-feat">champion feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Key Terms</h2>
      <p>You’ll see these terms in many champion abilities.</p>
      <p>
        <b>Flourish:</b> Flourishes are techniques that require too much
        exertion to perform a large number in a row. You can use only 1 action
        with the flourish trait per turn.
      </p>
      <p>
        <b>Metamagic:</b> These actions tweak your spells. You must use a
        metamagic action directly before Casting the Spell you want to alter. If
        you use any action (including free actions and reactions) other than
        Cast a Spell directly after, you waste the benefits of the metamagic
        action. Effects added by a metamagic action are part of the spell’s
        effect, not of the metamagic action.
      </p>
      <p>
        <b>Oath:</b> Oaths add an additional tenet to your code. You can usually
        have only one feat with this trait.
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
      <h3 id="champions-code">Champion's code</h3>
      <p>
        You follow a code of conduct, beginning with tenets shared by all
        champions of an alignment (such as good), and continuing with tenets of
        your cause. Deities often add additional strictures (for instance,
        Torag’s champions can’t show mercy to enemies of their people, making it
        almost impossible for them to follow the redeemer cause). Only rules for
        good champions appear in this book. Tenets are listed in order of
        importance, starting with the most important. If a situation places two
        tenets in conflict, you aren’t in a no-win situation; instead, follow
        the more important tenet. For instance, as a paladin, if an evil king
        asked you if you’re hiding refugees so he could execute them, you could
        lie to him, since the tenet against lying is less important than
        preventing harm to innocents. Trying to subvert your code by creating a
        situation that forces a higher tenet to override a lower tenet (for
        example, promising not to respect authorities and then, to keep your
        word, disrespecting authorities) is a violation of the champion code.
      </p>
      <p>
        If you stray from your alignment or violate your code of conduct, you
        lose your <b>focus pool</b> and <b>divine ally</b> until you demonstrate
        your repentance by conducting an <b>atone</b> ritual, but you keep any
        other champion abilities that don’t require those class features. If
        your alignment shifts but is still one allowed by your deity, your GM
        might let you retrain your cause while still following the same deity.
      </p>
      <h3>The tenets of good</h3>
      <p>All champions of good alignment follow these tenets.</p>
      <ul>
        <li>
          You must never perform acts anathema to your deity or willingly commit
          an evil act, such as murder, torture, or the casting of an evil spell.
        </li>
        <li>
          You must never knowingly harm an innocent, or allow immediate harm to
          one through inaction when you know you could reasonably prevent it.
          This tenet doesn’t force you to take action against possible harm to
          innocents at an indefinite time in the future, or to sacrifice your
          life to protect them.
        </li>
      </ul>
      <h4>The tenets of evil</h4>
      <i>Advanced Player's Guide</i>
      <br />
      <br />
      <p>All champions of evil alignment follow these tenets.</p>
      <ul>
        <li>
          You must never perform acts anathema to your deity or willingly commit
          a purely good act, such as giving something solely out of charity,
          casting a good spell, or using a good item.
        </li>
        <li>
          You must never put another person’s needs before your own, and you
          must never put your own needs before those of your deity. Though you
          can perform acts others might consider helpful, it must be done with
          the expectation that it ultimately furthers your own goals or those of
          your master.
        </li>
      </ul>

      <h3 id="deity-and-cause">Deity and cause</h3>
      <p>
        Champions are divine servants of a <b>deity</b>. Choose a deity to
        follow; your alignment must be one allowed for followers of your deity.
        Actions fundamentally opposed to your deity’s ideals or alignment are
        anathema to your faith. A few examples of acts that would be considered
        anathema appear in each deity’s entry. You and your GM determine whether
        other acts are anathema.
      </p>

      <h4>Good Causes</h4>
      <p>
        You have one of the following causes. Your cause must match your
        alignment exactly. Your cause determines your champion’s reaction,
        grants you a devotion spell, and defines part of your champion’s code.
      </p>
      <BaseAccordion
        title="Paladin (Lawful good)"
        number={1}
        text={
          <>
            <p>
              You’re honorable, forthright, and committed to pushing back the
              forces of cruelty. You gain the Retributive Strike champion’s
              reaction and the lay on hands devotion spell. After the tenets of
              good, add these tenets:
            </p>
            <ul>
              <li>
                You must act with honor, never taking advantage of others,
                lying, or cheating.
              </li>
              <li>
                You must respect the lawful authority of legitimate leadership
                wherever you go, and follow its laws.
              </li>
            </ul>
            <Spell
              name="Retributibe strike"
              action="reaction"
              tags={["champion"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> An enemy damages your ally, and both are
                      within 15 feet of you.
                    </span>
                    <br />
                    You protect your ally and strike your foe. The ally gains
                    resistance to all damage against the triggering damage equal
                    to 2 + your level. If the foe is within reach, make a melee
                    Strike against it.
                  </p>
                </>
              }
            />
            <p>
              <b>Divine Smite:</b> You surround evil targets in a punishing
              halo. If you hit with your Retributive Strike, the target takes
              persistent good damage equal to your Charisma modifier.
            </p>
            <p>
              <b>Exalt:</b> When you use Retributive Strike, each ally within 15
              feet of you with the target in their melee reach can spend a
              reaction to Strike the target with a –5 penalty.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Redeemer (Neutral good)"
        number={2}
        text={
          <>
            <p>
              You’re full of kindness and forgiveness. You gain the Glimpse of
              Redemption champion’s reaction and the lay on hands devotion
              spell. After the tenets of good, add these:
            </p>
            <ul>
              <li>
                You must first try to redeem those who commit evil acts, rather
                than killing them or meting out punishment. If they then
                continue on a wicked path, you might need to take more extreme
                measures.
              </li>
              <li>
                You must show compassion for others, regardless of their
                authority or station.
              </li>
            </ul>

            <Spell
              name="Glimpse of redemption"
              action="reaction"
              tags={["champion"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> An enemy damages your ally, and both are
                      within 15 feet of you.
                    </span>
                    <br />
                    Your foe hesitates under the weight of sin as visions of
                    redemption play in their mind’s eye. The foe must choose one
                    of the following options:
                    <ul>
                      <li>The ally is unharmed by the triggering damage.</li>
                      <li>
                        The ally gains resistance to all damage against the
                        triggering damage equal to 2 + your level. After the
                        damaging effect is applied, the enemy becomes enfeebled
                        2 until the end of its next turn.
                      </li>
                    </ul>
                  </p>
                </>
              }
            />
            <p>
              <b>Divine Smite:</b> A guilty conscience assails foes who spurn
              your Glimpse of Redemption. A foe that responds to your Glimpse of
              Redemption by dealing damage takes persistent good damage equal to
              your Charisma modifier.
            </p>
            <p>
              <b>Exalt:</b> You protect multiple allies. You can apply the
              resistance granted by Glimpse of Redemption to yourself and all
              allies within 15 feet of you, including the triggering ally,
              except the resistance is reduced by 2 for all.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Liberator (Chaotic Good)"
        number={3}
        text={
          <>
            <p>
              You defend the freedom of others. You gain the Liberating Step
              champion’s reaction and the lay on hands devotion spell. After the
              tenets of good, add these tenets:
            </p>
            <ul>
              <li>
                You must respect the choices others make over their own lives,
                and you can’t force someone to act in a particular way or
                threaten them if they don’t.
              </li>
              <li>
                You must demand and fight for others’ freedom to make their own
                decisions. You may never engage in or countenance slavery or
                tyranny.
              </li>
            </ul>
            <Spell
              name="Liberating step"
              action="reaction"
              tags={["champion"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> An enemy damages, Grabs, or Grapples your
                      ally, and both are within 15 feet of you.
                    </span>
                    <br />
                    You free an ally from restraint. If the trigger was an ally
                    taking damage, the ally gains resistance to all damage
                    against the triggering damage equal to 2 + your level. The
                    ally can attempt to break free of effects grabbing,
                    restraining, immobilizing, or paralyzing them. They either
                    attempt a new save against one such effect that allows a
                    save, or attempt to Escape from one effect as a free action.
                    If they can move, the ally can Step as a free action, even
                    if they didn’t need to escape.
                  </p>
                </>
              }
            />
            <p>
              <b>Divine Smite:</b> You punish those who ensnare your allies in
              bondage. If the triggering enemy was using any effects to make
              your ally grabbed, restrained, immobilized, or paralyzed when you
              used Liberating Step, that enemy takes persistent good damage
              equal to your Charisma modifier.
            </p>
            <p>
              <b>Exalt:</b> You can help your whole group get into position.
              When you use Liberating Step, if your ally doesn’t attempt to
              break free of an effect, you and all allies within 15 feet can
              Step, in addition to the triggering ally.
            </p>
          </>
        }
      />

      <h4>Evil Causes</h4>
      <p>
        As an evil champion, you must select one of the following causes. Your
        cause must match your alignment exactly. Your cause determines your
        champion’s reaction (see below), grants you a devotion spell, and
        defines part of your champion’s code.
      </p>
      <BaseAccordion
        title="Tyrant (Lawful evil)"
        number={4}
        text={
          <>
            <i>Advaned Player's Guide</i>
            <br />
            <br />
            <p>
              Might makes right, and you subjugate the weak to keep them in
              their proper place. You gain the Iron Command champion’s reaction
              and the touch of corruption devotion spell. After the tenets of
              evil, add these tenets.
            </p>
            <ul>
              <li>
                Let no one who is lesser than you wield power over you or lead
                you.
              </li>
              <li>
                Mercilessly enforce established hierarchies of masters and
                servants. Topple or seize control of illegitimate hierarchies,
                such as democratic governments or the arrogant echelons of the
                celestial planes, and fill power vacuums by taking that power
                for yourself.
              </li>
              <li>
                Bind the weak to serve you. This tenet doesn’t require you to
                spare foes’ lives if you think they would be disloyal if pressed
                into servitude, nor does it require you to keep more servants
                than you find practical or useful.
              </li>
            </ul>
            <Spell
              name="Iron command"
              action="reaction"
              tags={[
                "uncommon",
                "champion",
                "divine",
                "emotion",
                "enchantement",
                "mental",
              ]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> An enemy within 15 feet damages you.
                    </span>
                    <br />
                    You put an impertinent foe who dared harm you in their
                    proper place. You command your enemy to kneel before you in
                    obedience. If they dare to refuse, they must pay the price
                    in pain and anguish. The foe must choose one of the
                    following options.
                  </p>
                  <ul>
                    <li>The enemy kneels, dropping prone as a free action.</li>
                    <li>
                      The enemy refuses, and you deal 1d6 mental damage to it.
                      This damage increases to 2d6 at 5th level, 3d6 at 9th
                      level, 4d6 at 12th level, 5d6 at 16th level, and 6d6 at
                      19th level.
                    </li>
                  </ul>
                  <p>
                    In addition, your Strikes against the triggering creature
                    deal 1 extra damage until the end of your next turn. You
                    choose whether the damage type is evil or negative each time
                    you use this reaction. This extra damage increases to 2 at
                    9th level and 3 at 16th level.
                  </p>
                </>
              }
            />
            <p>
              <b>Divine Smite:</b>
              The regrets of disobedience linger. If an enemy refuses your Iron
              Command, it takes persistent evil damage equal to your Charisma
              modifier.
            </p>
            <p>
              <b>Exalt:</b> When you use Iron Command, each enemy within 15 feet
              of you other than the triggering creature must also either drop
              prone or take mental damage (the enemy chooses). These creatures
              take only minimum damage (typically 3 damage at 11th level, 4 at
              12th, 5 at 16th, and 6 at 19th), and the effects they take can’t
              be adjusted by anything that changes your Iron Command. For
              instance, the <b>Iron Repercussions</b> feat couldn’t turn the
              damage into persistent mental damage for creatures other than the
              triggering creature.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Desecrator (Neutral Evil)"
        number={5}
        text={
          <>
            <i>Advanced Player's Guide</i>
            <br />
            <br />
            <p>
              You always take what pleases you, no matter who it hurts, and you
              spread the influence of evil across all you touch. You gain the
              Selfish Shield champion’s reaction and the touch of corruption
              devotion spell. After the tenets of evil, add this tenet.
            </p>
            <ul>
              <li>
                Subvert or corrupt everything in your path that is pure and
                good, and sow doubt among those upholding such ideals.
              </li>
            </ul>
            <Spell
              name="Selfish shield"
              action="reaction"
              tags={["uncommon", "champion"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> An enemy within 15 feet damages you.
                    </span>
                    <br />
                    Your self-interest keeps you safe. You gain resistance
                    against the triggering damage equal to 2 + half your level,
                    regardless of damage type.
                  </p>
                  <p>
                    In addition, your Strikes against the triggering creature
                    deal 1 extra damage until the end of your next turn. You
                    choose whether this extra damage is evil or negative each
                    time you use this reaction. This extra damage increases to 2
                    at 9th level and 3 at 16th level.
                  </p>
                </>
              }
            />
            <p>
              <b>Divine Smite:</b> If your Charisma modifier is +2 or greater,
              your resistance against the triggering damage equals your Charisma
              modifier + half your level.
            </p>
            <p>
              <b>Exalt:</b> When you use Selfish Shield, each enemy within 15
              feet of you takes a –1 status penalty to attack rolls against you
              until the start of your next turn.
            </p>
          </>
        }
      />
      <BaseAccordion
        title="Antipaladin (Chaotic Evil)"
        number={6}
        text={
          <>
            <i>Advanced Player's Guide</i>
            <br />
            <br />
            <p>
              You’re dishonorable, dishonest, and committed to breaking the
              false hopes of kindness. You gain the Destructive Vengeance
              champion’s reaction and the touch of corruption devotion spell.
              After the tenets of evil, add these tenets.
            </p>
            <ul>
              <li>
                You must not bind yourself with any law or oath beyond that of
                your code (though you can still select a champion feat with the
                oath trait). Act dishonorably, take advantage of others, lie,
                cheat, and steal to get what you want.
              </li>
              <li>
                You must destroy that which offends you and that which stands in
                your way, including—and perhaps especially—the forces of good
                and law that oppose you. This tenet doesn’t force you to take
                action immediately if it could mean your destruction, nor does
                it require you to destroy something that might be useful if
                corrupted toward your ends.
              </li>
            </ul>
            <Spell
              name="Destructive vengance"
              action="reaction"
              tags={["uncommon", "champion"]}
              description={
                <>
                  <p>
                    <span className="frequency">
                      <b>Trigger</b> An enemy within 15 feet damages you.
                    </span>
                    <br />
                    Bloodshed begets bloodshed as you drag your enemy toward
                    oblivion. You increase the amount of damage you take by 1d6,
                    and you deal 1d6 damage to the triggering enemy, choosing
                    evil or negative damage to deal to the enemy each time you
                    use this reaction. In addition, until the end of your next
                    turn, your Strikes against the triggering creature deal 2
                    extra damage of the type you chose.
                  </p>
                  <p>
                    The damage you take and deal when you use this reaction
                    increases to 2d6 at 5th level, 3d6 at 9th level, 4d6 at 12th
                    level, 5d6 at 16th level, and 6d6 at 19th level. The extra
                    damage on your Strikes increases to 4 at 9th level and 6 at
                    16th level.
                  </p>
                </>
              }
            />
            <p>
              <b>Divine Smite:</b> An enemy damaged by the initial damage from
              your Destructive Vengeance also takes persistent evil damage equal
              to your Charisma modifier. This applies only to the damage the
              reaction itself deals to the triggering creature, not the damage
              you deal with subsequent Strikes.
            </p>
            <p>
              <b>Exalt:</b> When you use Destructive Vengeance, each enemy
              within 15 feet of you other than the triggering creature takes
              half the damage you deal to the triggering enemy, of the same
              damage type you chose.
            </p>
          </>
        }
      />
      <h3 id="deific-weapon">Deific Weapon</h3>
      <p>
        You zealously bear your deity’s favored weapon. If it’s uncommon, you
        gain access to it. If it’s an unarmed attack with a d4 damage die or a
        simple weapon, increase the damage die by one step (d4 to d6, d6 to d8,
        d8 to d10, d10 to d12).
      </p>
      <h3 id="deific-weapon">Deific Weapon</h3>
      <p>
        You zealously bear your deity’s favored weapon. If it’s uncommon, you
        gain access to it. If it’s an unarmed attack with a d4 damage die or a
        simple weapon, increase the damage die by one step (d4 to d6, d6 to d8,
        d8 to d10, d10 to d12).
      </p>
      <h3 id="champions-reaction">Champion's Reaction</h3>
      <p>
        Your cause gives you a special reaction: Retributive Strike for paladin,
        Glimpse of Redemption for redeemer, or Liberating Step for liberator.
      </p>
      <h3 id="devotion-spells">Devotion spells</h3>
      <p>
        Your deity’s power grants you special divine spells called devotion
        spells, which are a type of focus spell. It costs 1 Focus Point to cast
        a focus spell, and you start with a focus pool of 1 Focus Point. You
        refill your focus pool during your daily preparations, and you regain 1
        Focus Point by spending 10 minutes using the Refocus activity to pray to
        your deity or do service toward their causes.
      </p>
      <p>
        Focus spells are automatically heightened to half your level rounded up.
        Certain feats can give you more focus spells and increase the size of
        your focus pool, though your focus pool can never hold more than 3 Focus
        Points. The full rules are in the Focus Spells section. You gain a
        devotion spell depending on your cause, and you are trained in divine
        spell attack rolls and spell DCs. Your spellcasting ability is Charisma.
      </p>
      <h3 id="champion-feat">Champion Feats</h3>
      <p>
        At 1st level and every even-numbered level thereafter, you gain a
        champion class feat.
      </p>
      <h3 id="shield-block">Shield Block</h3>
      <p>
        You gain the Shield Block general feat, a reaction that lets you reduce
        damage with your shield.
      </p>
      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. Skill
        feats can be found in Chapter 5 and have the skill trait. You must be
        trained or better in the corresponding skill to select a skill feat.
      </p>
      <h3 id="divine-ally">Divine Ally</h3>
      <p>
        Your devotion attracts a spirit of your deity’s alignment. Once you
        choose an ally, your choice can’t be changed.
      </p>
      <p>The following are divine allies:</p>
      <p>
        <b>Blade Ally:</b> A spirit of battle dwells within your armaments.
        Select one weapon or <b>handwraps of mighty blows</b> when you make your
        daily preparations. In your hands, the item gains the effect of a
        property rune. For a champion following the tenets of good, choose{" "}
        <b>disrupting</b>,<b>ghost touch</b>, <b>returning</b>, or{" "}
        <b>shifting</b>. You also gain the weapon’s critical specialization
        effect.
      </p>
      <p>
        If you are a champion following the tenets of evil and choose a blade
        ally as your divine ally, you can choose the following property runes:
        <b>fearsome</b>, <b>returning</b>, or <b>shifting</b>.
      </p>
      <p>
        <b>Shield Ally:</b> A spirit of protection dwells within your shield. In
        your hands, the shield’s Hardness increases by 2 and its HP and BT
        increase by half.
      </p>
      <p>
        <b>Steed Ally:</b> You gain a <b>young animal</b> companion as a mount.
        Ordinarily, your animal companion is one that has the mount special
        ability, such as a horse. You can select a different animal companion
        (GM’s discretion), but this ability doesn’t grant it the mount special
        ability.
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
        At 5th level and every 5 levels thereafter, boost four different ability
        scores. You can use these boosts to increase ability scores above 18.
        Boosting an ability score increases it by 1 if it’s already 18 or above,
        or by 2 if it starts out below 18.
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
          <h3 id="weapon-expertise">Weapon Expertise</h3>
          <p>
            You’ve dedicated yourself to learning the intricacies of your
            weapons. Your proficiency ranks for simple weapons, martial weapons,
            and unarmed attacks increase to expert.
          </p>

          <h3 id="armor-expertise">Armor Expertise</h3>
          <p>
            You have spent so much time in armor that you know how to make the
            most of its protection. Your proficiency ranks for light, medium,
            and heavy armor, as well as for unarmored defense, increase to
            expert. You gain the armor specialization effects of medium and
            heavy armor.
          </p>

          <h3 id="weapon-specialization">Weapon Specialization</h3>
          <p>
            You’ve learned how to inflict greater injuries with the weapons you
            know best. You deal 2 additional damage with weapons and unarmed
            attacks in which you are an expert. This damage increases to 3 if
            you’re a master, and to 4 if you’re legendary.
          </p>

          <h3 id="champion-expertise">Champion expertise</h3>
          <p>
            Prayers strengthen your divine power. Your proficiency ranks for
            your champion class DC and divine spell attack rolls and DCs
            increase to expert.
          </p>

          <h3 id="divine-smite">Divine Smite</h3>
          <p>
            Your champion’s reaction improves. See Deity and Causes section for
            specifics.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/champion_02.webp")}
            alt="champion example"
          />
        </figure>
      </div>
      <h3 id="juggernaut">Juggernaut</h3>
      <p>
        Your body is accustomed to physical hardship and resistant to ailments.
        Your proficiency rank for Fortitude saves increases to master. When you
        roll a success on a Fortitude save, you get a critical success instead.
      </p>
      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="lightning-reflexes">Lightning reflexes</h3>
          <p>
            Your reflexes are lightning fast. Your proficiency rank for Reflex
            saves increases to expert.
          </p>

          <h3 id="alertness">Alertness</h3>
          <p>
            You remain alert to threats around you. Your proficiency rank for
            Perception increases to expert.
          </p>

          <h3 id="divine-will">Divine will</h3>
          <p>
            Your faith grants mastery of your will. Your proficiency rank for
            Will saves increases to master. When you roll a success on a Will
            save, you get a critical success instead.
          </p>

          <h3 id="exalt">Exalt</h3>
          <p>
            Your champion’s reaction exalts nearby allies, allowing them to
            benefit as well. See Deity and Cause for specifics.
          </p>

          <h3 id="armor-mastery">Armor Mastery</h3>
          <p>
            Your skill with armor improves, helping you avoid more blows. Your
            proficiency ranks for light, medium, and heavy armor, as well as for
            unarmored defense, increase to master.
          </p>

          <h3 id="weapon-mastery">Weapon Mastery</h3>
          <p>
            You fully understand your weapons. Your proficiency ranks for simple
            weapons, martial weapons, and unarmed attacks increase to master.
          </p>

          <h3 id="greater-weapon-specialization">
            Greater Weapon Specialization
          </h3>
          <p>
            Your damage from weapon specialization increases to 4 with weapons
            and unarmed attacks in which you’re an expert, 6 if you’re a master,
            and 8 if you’re legendary.
          </p>

          <h3 id="champion-mastery">Champion mastery</h3>
          <p>
            You’ve mastered your arsenal of champion techniques and divine
            spells. Your proficiency ranks for your champion class DC and for
            divine spell attack rolls and spell DCs increase to master.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/champion_03.webp")}
            alt="cahmpion example"
          />
        </figure>
      </div>

      <h3 id="legendary-armor">Legendary Armor</h3>
      <p>
        You shield yourself with steel as easily as with faith. Your proficiency
        ranks for light, medium, and heavy armor, as well as for unarmored
        defense, increase to legendary.
      </p>

      <h3 id="heros-defiance">Hero's defiance</h3>
      <p>
        You can defy fate and continue fighting as long as you have divine
        energy. You gain the hero’s defiance devotion spell.
      </p>

      <h2>Champion Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 4 gp, 7 sp.
        </li>
        <li>
          <b>Bulk:</b> 3 Bulk, 7 light.
        </li>
        <li>
          <b>Money Left Over:</b> 10 gp, 3 sp.
        </li>
        <li>
          <b>Armor:</b> hide armor.
        </li>
        <li>
          <b>Weapons:</b> dagger, 4 javelins.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, crowbar, grappling hook.
        </li>
        <li>
          <b>Options</b> steel shield (2 gp), your deity’s favored weapon (see
          the deity entries; use the Price listed in this chapter)
        </li>
      </ul>
      <h2>Feats</h2>
      <p>
        At each level that you gain a champion feat, you can select one of the
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

export default ChampionPage;
