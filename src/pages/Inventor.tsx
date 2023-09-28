import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat } from "../middleware/CutsomTypes";
import { InventorFeats } from "../middleware/InventorFeats";

const InventorPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    InventorFeats
  );
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...InventorFeats];
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
        <h1>Inventor</h1>
        <i>Guns & Gears</i>
        <p className="introduction">
          Any tinkerer can follow a diagram to make a device, but the inventor
          creates the impossible and challenges the boundaries of reality. An
          inventor remains on the verge of the next great breakthrough, and
          every trial and tribulation presents another opportunity to test and
          tune their contraptions.
        </p>
        <figure>
          <img
            src={require("../assets/img/inventor_icon.png")}
            alt="inventor icon"
          />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Intelligence</b>
          <p>
            At 1st level, your class gives you an ability boost to Intelligence.
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
          src={require("../assets/img/inventor_01.webp")}
          alt="Inventor image"
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
          <li>Trained in Crafting</li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
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
        <p>Trained in inventor class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You rely on your inventions as much as possible, testing their
            functionalities under a variety of conditions. You don’t set out to
            achieve anything as banal as simply winning a fight; you seek to
            collect valuable data that can be used to improve your creations!
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You provide useful context when discussing a variety of academic
            topics, particularly when speaking about those subjects related to
            crafting and invention. You might often look for opportunities to
            acquire patronage to fund some of your more expensive or unorthodox
            experiments. After all, the materials needed to assemble your
            inventions don’t pay for themselves!
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You study the design and construction of the environments you
            explore ardently, making note of clever traps, ingenious mechanisms,
            or especially keen architecture you come across for later.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You brainstorm new designs, bringing them to fruition through
            careful crafting and meticulous attention to detail. You might also
            modify previous inventions to adjust for data you’ve collected in
            the field. You might work as a local smith or tinker where your
            skills are needed, or you might keep a workshop on the edge of town
            where the clank and clatter of your experiments attracts less
            attention.
          </p>
        </div>
      </div>

      <h2>You might...</h2>
      <ul>
        <li>Enjoy creating new things the world has never seen before.</li>
        <li>
          Be willing to take a chance on a theory, testing to see if your
          hypothesis proves accurate. If not, you probably record the results to
          try again later.
        </li>
        <li>
          Wear clothes spattered with oil and grime, or venture off on excited
          and technical tangents when asked simple questions.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Marvel at your inventions and the variety of unbelievable wonder they
          can bring.
        </li>
        <li>
          Believe that you’re a genius whose work is beyond understanding.
        </li>
        <li>Worry that your inventions might backfire or explode.</li>
      </ul>

      <h2>Class Features</h2>
      <p>
        YYou gain these abilities as an inventor. Abilities gained at higher
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
              <a href="#overdrive">overdrive</a>,{" "}
              <a href="#innovation">innovation</a>,{" "}
              <a href="#explode">explode</a>,{" "}
              <a href="#peerless-inventor">peerless inventor</a>,{" "}
              <a href="#shield-block">shield block</a>,{" "}
              <a href="#inventor-feat">inventor feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#expert-overdrive">Expert overdrive</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#reconfigure">reconfigure</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#inventor-weapon-mastery">inventor weapon mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#breakthrough-innovation">Breakthrough innovation</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#lightning-reflexes">lightning reflexes</a>,{" "}
              <a href="#master-overdrive">master overdrive</a>,{" "}
              <a href="#weapon-specialization">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#offensive-boost">Offensive boost</a>,{" "}
              <a href="#inventive-expertise">inventive expertise</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#inventor-feat">inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#medium-armor-expertise">medium armor expertise</a>,{" "}
              <a href="#resolve">resolve</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#alertness">alertness</a>,{" "}
              <a href="#complete-reconfiguration">complete reconfiguration</a>,{" "}
              <a href="#inventor-weapon-mastery">inventor weapon mastery</a>,{" "}
              <a href="#medium-armor-expertise">medium armor expertise</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#legendary-overdrive">legendary overdrive</a>,{" "}
              <a href="#greater-weapon-specialization">
                greater weapon specialization
              </a>
              , <a href="#revolutionary-innovation">revolutionary innovation</a>
              , <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#juggernaut">juggernaut</a>,{" "}
              <a href="#inventive-mastery">inventive mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#inventor-feat">Inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#infinite-invention">infinite invention</a>,{" "}
              <a href="#medium-armor-mastery">medium armor mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#inventor-feat">inventor feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Key Terms</h3>
      <p>
        <b>Gadget:</b> Gadgets are consumable technological inventions with
        innovative uses.
      </p>
      <p>
        <b>Modification:</b> An ability with this trait alters your innovation’s
        construction. If you have the reconfigure class feature, you can retrain
        these feats more easily.
      </p>
      <p>
        <b>Unstable:</b> To take an unstable action, you must be using your
        innovation (for example, wearing an armor innovation or wielding a
        weapon innovation). If you have a minion innovation, some unstable
        actions are taken by the minion instead of you. In these cases, only the
        minion can take that action, and the minion needs to have been Commanded
        that turn to take the action. If you critically fail the flat check, the
        minion takes the damage instead of you.
      </p>
      <p>
        Some actions have an Unstable Function entry, which you can use to add
        the unstable trait for a bigger benefit. If you’re unable to use
        unstable actions, you can still use the action normally, but you can’t
        use the unstable function.
      </p>

      <h4>Equipment traits</h4>
      <p>
        Your inventor abilities might grant your equipment the following traits,
        which are reprinted here for convenience.
      </p>
      <p>
        <b>Climbing:</b> The hand wielding the weapon is available to Climb.
      </p>
      <p>
        <b>Hampering:</b> A weapon with the hampering trait includes a
        disruptive limb or flange. You can use an Interact action to thrash the
        weapon in a square within the weapon’s reach. That square becomes
        difficult terrain until you attack with the weapon, move, would
        otherwise stop thrashing it, or at the beginning of your next turn.
      </p>
      <p>
        <b>Ranged Trip:</b> The weapon can be used to Trip with Athletics up to
        the weapon’s first range increment. The skill check takes a –2
        circumstance penalty. You can add the weapon’s item bonus to attack
        rolls as a bonus to the check. As with using a melee weapon to Trip, a
        ranged trip weapon doesn’t deal any damage when used to Trip. This trait
        usually appears only on a thrown weapon.
      </p>
      <p>
        <b>Tethered:</b> If you have a free hand while wielding this weapon, you
        can Interact to pull the weapon back to your grasp after you throw or
        shoot it as a ranged attack, or after it has been disarmed (unless it is
        being held by another creature).
      </p>

      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to what you gain from your chosen class at 1st level, you
        have the benefits of your selected ancestry and background.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="overdrive">Overdrive</h3>
      <p>
        You have a bevy of smaller devices of your own invention, from muscle
        stimulants to concussive pistons. When it’s necessary, you can throw
        them into overdrive to assist you in combat.
      </p>

      <Spell
        name="overdrive"
        action="one_action"
        tags={["inventor", "manipulate"]}
        description={
          <>
            <p>
              <span className="frequency">
                <b>Frequency</b> once per round.
              </span>
              <br />
              Temporarily cranking the gizmos on your body into overdrive, you
              try to add greater power to your attacks. Attempt a Crafting check
              that has a standard DC for your level.
            </p>
            <p>
              <b>Critical Success</b> Your gizmos go into a state of incredible
              efficiency called critical overdrive, adding great power to your
              attacks. Your Strikes deal additional damage equal to your
              Intelligence modifier for 1 minute. After the Overdrive ends, your
              gizmos become unusable as they cool down or reset, and you can’t
              use Overdrive for 1 minute.
            </p>
            <p>
              <b>Success</b> Your gizmos go into overdrive, adding power to your
              attacks. As critical success, except the additional damage is
              equal to half your Intelligence modifier.
            </p>
            <p>
              <b>Failure</b> You make a miscalculation and nothing happens.
            </p>
            <p>
              <b>Critical Failure</b> Whoops! Something explodes. You take fire
              damage equal to your level, and you can’t use Overdrive again for
              1 minute as your gizmos cool down and reset.
            </p>
            <p>
              <b>Special</b> When under the effects of Overdrive, you can still
              use the Overdrive action. You can’t extend your Overdrive’s
              duration this way, but you can turn an overdrive into a critical
              overdrive if you critically succeed. A failure has no effect on
              your current Overdrive, and you end your Overdrive on a critical
              failure.
            </p>
          </>
        }
      />

      <h3 id="innovation">Innovation</h3>
      <p>
        While you’re always creating inventions, there’s one that represents
        your preeminent work, the one that you hope—with refinement—might change
        the world. Choose one of the below innovations. Your innovation’s level
        is equal to your level. If your innovation is destroyed, you can spend 1
        day of downtime and attempt a Crafting check with a high DC for your
        level; on a success, you rebuild it. An innovation only works due to
        your constant maintenance and tinkering, and therefore has no market
        Price.
      </p>
      <p>The innovations you can choose from are as follows.</p>

      <table>
        <thead>
          <tr>
            <th>Medium Armor</th>
            <th>AC Bonus</th>
            <th>Dex Cap</th>
            <th>Check Penalty</th>
            <th>Speed Penalty</th>
            <th>Strength</th>
            <th>Bulk</th>
            <th>Group</th>
            <th>Armor Traits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Power suit</td>
            <td>+4</td>
            <td>+1</td>
            <td>–2</td>
            <td>–5 feet</td>
            <td>16</td>
            <td>2</td>
            <td>composite</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Subterfuge suit</td>
            <td>+1</td>
            <td>+4</td>
            <td>–1</td>
            <td>—</td>
            <td>10</td>
            <td>1</td>
            <td>composite</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <BaseAccordion
        title="Armor"
        number={1}
        text={
          <>
            <p>
              Your innovation is a cutting-edge suit of medium armor with a
              variety of attached gizmos and devices. Choose one of the sets of
              statistics on Table 2–2: Innovation Armor Statistics for your
              innovation armor (or choose another set of innovation armor
              statistics to which you have access).
            </p>
            <p>
              Your innovation armor can have fundamental and property runes
              added to it in the same way as ordinary armor. Because of the
              unique features of your innovation, everyone except you is
              untrained in it, even if they would normally be trained (or
              better) in medium armor.
            </p>
            <p>
              Choose one initial armor modification to apply to your innovation,
              either from the following or from other initial armor
              modifications to which you have access.
            </p>
            <ul>
              <li>
                <b>Harmonic Oscillator:</b> You designed your armor to inaudibly
                thrum at just the right frequency to create interference against
                force and sound waves. You gain resistance equal to 3 + half
                your level to force and sonic damage. When under the effects of
                Overdrive, the resistance increases by 2.
              </li>
              <li>
                <b>Metallic Reactance:</b> The metals in your armor are
                carefully alloyed to ground electricity and protect from acidic
                chemical reactions. You gain resistance equal to 3 + half your
                level to acid and electricity damage. When under the effects of
                Overdrive, the resistance increases by 2.
              </li>
              <li>
                <b>Muscular Exoskeleton (Power Suit Only):</b> Your armor
                supports your muscles with a carefully crafted exoskeleton. When
                you send your armor into overdrive, the exoskeleton supplements
                your feats of athletics as well. When under the effects of
                Overdrive, you gain a +1 circumstance bonus to Athletics checks;
                if you’re a master in Crafting, this increases to a +2
                circumstance bonus.
              </li>
              <li>
                <b>Otherworldly Protection:</b> Just because you use science
                doesn’t mean you can’t build your armor with carefully chosen
                materials and gizmos designed to protect against otherworldly
                attacks. You gain resistance equal to 3 + half your level to
                negative damage, or to positive damage if you have negative
                healing (such as if you’re a dhampir). You gain the same amount
                of resistance to any types of alignment damage—good, evil,
                chaotic, lawful—that can damage you (note that creatures don’t
                take a given type of alignment damage unless they are of the
                opposing alignment; for instance, you can take evil damage only
                if you are good in alignment).
              </li>
              <li>
                <b>Phlogistonic Regulator:</b> A layer of insulation within your
                armor protects you from rapid temperature fluctuations. You gain
                resistance equal to half your level to cold and fire damage.
                When under the effects of Overdrive, the resistance increases by
                2.
              </li>
              <li>
                <b>Speed Boosters:</b> You have boosters in your armor that
                increase your Speed. You gain a +5-foot status bonus to your
                Speed, which increases to a +10-foot status bonus when under the
                effects of Overdrive.
              </li>
              <li>
                <b>Subtle Dampeners (Subterfuge Suit Only):</b> You’ve designed
                your armor to help you blend in and dampen noise slightly. When
                you send your armor into overdrive, the dampeners increase their
                effect, improving your Stealth. When under the effects of
                Overdrive, you gain a +1 circumstance bonus to Stealth checks.
                If you’re a master in Crafting, this increases to a +2
                circumstance bonus.
              </li>
            </ul>

            <h4>Breakthrough armor modifications</h4>
            <ul>
              <li>
                <b>Antimagic Plating:</b> Whether you used some clever
                adaptation of the magic-negating skymetal known as noqual or
                created magical protections of your own design, you’ve
                strengthened your armor against magic. While wearing the armor,
                you gain a +1 circumstance bonus to all saving throws against
                spells and to AC against spells. Against spells that target the
                armor directly (like heat metal), you instead gain a +4
                circumstance bonus to all saving throws and to AC.
              </li>
              <li>
                <b>Camouflage Pigmentation (Subterfuge Suit Only):</b> You’ve
                modified your armor’s exterior to let you blend into your
                surroundings with ease, as long as you stay still. While wearing
                your armor, you can Hide even without cover or concealment, as
                the pigmentation shifts to match your surroundings.
              </li>
              <li>
                <b>Dense Plating:</b> You have encased your armor in robust
                plating. While wearing your armor, you gain resistance to
                slashing damage equal to half your level.
              </li>
              <li>
                <b>Enhanced Resistance:</b> You’ve improved upon your initial
                modification’s ability to resist damage. The resistance from
                your initial armor modification adds your full level, instead of
                half your level (for instance, phlogistonic regulator’s
                resistance would increase to your level). If you have more than
                one initial modification that gives resistance, choose which one
                this applies to.
              </li>
              <li>
                <b>Heavy Construction (Power Suit Only):</b> You’ve expanded
                your innovation into a heavy bulwark, and your groundbreaking
                design ensures you don’t take any of the drawbacks for such
                heavy defenses. Your innovation becomes heavy armor, and your
                proficiency in your innovation armor (but no other heavy armor)
                advances to be equal to your proficiency in medium armor. If
                your Strength score is at least 16, you remove the Speed penalty
                entirely instead of reducing it to –5 feet. The armor’s adjusted
                statistics are: AC Bonus +5; Dex Cap +1; Check Penalty –2; Speed
                Penalty –10 feet; Strength 16; Bulk 3; Group composite; Armor
                Traits bulwark.
              </li>
              <li>
                <b>Hyper Boosters:</b> You’ve improved your speed boosters’
                power through a breakthrough that significantly increases the
                energy flow without risking exploding. You gain a +10-foot
                status bonus to your Speed, which increases to a +20-foot status
                bonus when you’re in Overdrive. If you’re legendary in Crafting,
                it instead increases to a +30-foot status bonus when you’re in
                Overdrive. You must have the speed boosters modification to
                select this modification.
              </li>
              <li>
                <b>Layered Mesh:</b> You’ve woven an incredibly powerful network
                of interlocking mesh around your armor, which catches piercing
                attacks and diffuses them. While wearing your armor, you gain
                resistance to piercing damage equal to half your level.
              </li>
              <li>
                <b>Tensile Absorption:</b> You’ve enhanced the tensile
                capabilities of your armor, enabling it to bend with bludgeoning
                attacks. While wearing your armor, you gain resistance to
                bludgeoning damage equal to half your level.
              </li>
            </ul>

            <h4>Revolutionary armor modifications</h4>
            <ul>
              <li>
                <b>Automated Impediments:</b> Your armor uses electromagnetic
                fields, subharmonic distortions, or other techniques to make it
                difficult for those close to you to move unless you allow it.
                While wearing your armor, all spaces adjacent to you are
                difficult terrain for your enemies.
              </li>
              <li>
                <b>Energy Barrier:</b> Your armor’s defenses ablate any kind of
                energy coming your way. While wearing your armor, you gain
                resistance to all energy damage (acid, cold, electricity, fire,
                force, negative, positive, and sonic damage) equal to 2 + half
                your level. You must have the harmonic oscillator, metallic
                reactance, or phlogistonic regulator modification to select this
                modification.
              </li>
              <li>
                <b>Incredible Resistance:</b> You’ve improved upon your
                breakthrough modification’s ability to resist damage. Choose one
                of the following breakthrough modifications your innovation has:
                dense plating, layered mesh, or tensile absorption. Increase the
                resistance you gain from that modification to be equal to your
                level, instead of half your level.
              </li>
              <li>
                <b>Multisensory Mask (Subterfuge Suit Only):</b> You’ve built a
                multisensory mask over your armor that protects you by
                distorting your figure from all senses, leaving behind only a
                hazy image, muffled sounds, and so forth. While wearing the
                armor, you gain concealment against all creatures, even if they
                are using a nonvisual precise sense, such as a bat’s
                echolocation. As normal for effects that leave your location
                obvious, you can’t use this concealment to Hide or Sneak. If you
                use a hostile action, the concealment ends until you restore the
                mask as a single action, which has the manipulate trait.
              </li>
              <li>
                <b>Perfect Fortification (Power Suit Only):</b> You’ve outfitted
                your armor with such heavy fortifications that deadly attacks
                often lose their edge. Each time you’re critically hit while
                wearing the armor, attempt a DC 13 flat check. On a success, it
                becomes a normal hit. This isn’t cumulative with fortification
                runes or other abilities that reduce critical hits with a flat
                check. Additionally, you gain resistance 2 + half your level
                against precision damage.
              </li>
              <li>
                <b>Physical Protections:</b> Your armor has so many adjustments
                and precautions that it can guard against all physical damage.
                While wearing your armor, you gain resistance to all physical
                damage (bludgeoning, piercing, and slashing damage, as well as
                persistent bleed damage) equal to half your level. You must have
                the dense plating, layered mesh, or tensile absorption
                breakthrough modification to select this modification.
              </li>
              <li>
                <b>Rune Capacity:</b> Whether you’ve done some dabbling in
                orichalcum alloys or found another engineering solution, you’ve
                built your innovation in such a way that it can hold an
                additional property rune. Your innovation can have one more
                property rune than a normal item of its kind (to a maximum of
                four property runes with a +3 potency armor).
              </li>
            </ul>
          </>
        }
      />
      <BaseAccordion
        title="Construct"
        number={2}
        text={
          <>
            <p>
              Your innovation is a mechanical creature, such as a clockwork
              construct made of cogs and gears. It’s a prototype construct
              companion, and you can adjust most of its base statistics by
              taking feats at higher levels, such as Advanced Companion. If you
              use the Overdrive action, your construct gains the same Overdrive
              benefits you do, and it also takes the same amount of fire damage
              on a critical failure.
            </p>
            <p>
              You know how to spend additional time directing, controlling, or
              programming your construct innovation for a more complex plan of
              action. You can spend 2 actions to Command instead of 1 when
              commanding your construct companion; your construct companion can
              then use an additional action (normally 3 actions, rather than 2).
            </p>
            <p>
              Choose one initial construct modification to apply to your
              innovation, either from the following or from other initial
              construct modifications to which you have access. These
              modifications alter the construct’s abilities or form.
            </p>
            <ul>
              <li>
                <b>Accelerated Mobility:</b> Actuated legs, efficient gears in
                the wheels or treads, or add-on boosters make your construct
                faster. Your innovation’s Speed increases to 40 feet.
              </li>
              <li>
                <b>Amphibious Construction:</b> Increased buoyancy, rudders, and
                a means of propulsion like a fluked tail or powerful propeller
                make your construct able to travel in water. Your innovation
                gains a swim Speed of 25 feet.
              </li>
              <li>
                <b>Increased Size:</b> You built your construct innovation
                bigger than most. Your construct is Large. If you have this
                modification and your construct innovation becomes an advanced
                construct companion or otherwise gains the ability to become
                Large, you can immediately change increased size to a different
                initial construct modification.
              </li>
              <li>
                <b>Manual Dexterity:</b> Your construct innovation has
                articulated hands or similar appendages with significant manual
                dexterity. It can perform manipulate actions with up to two of
                its limbs. As normal for a companion, it still can’t wield
                weapons or held items that don’t have the companion trait, and
                it can’t activate items.
              </li>
              <li>
                <b>Projectile Launcher:</b> Your construct has a mounted dart
                launcher, embedded cannon, or similar armament. Your innovation
                gains a ranged unarmed attack that deals 1d4 bludgeoning or
                piercing damage (you choose when you pick this modification).
                The attack has the propulsive trait and a range increment of 30
                feet.
              </li>
              <li>
                <b>Sensory Array:</b> Additional sensory devices give your
                innovation low-light vision and darkvision, as well as imprecise
                tremorsense out to a range of 30 feet.
              </li>
              <li>
                <b>Wonder Gears:</b> You map specialized skills into your
                construct’s crude intelligence. Your innovation becomes trained
                in Intimidation, Stealth, and Survival.
              </li>
            </ul>

            <h4>Breakthrough armor modifications</h4>
            <ul>
              <li>
                <b>Advanced Weaponry:</b> You’ve powered up your construct’s
                weaponry. Choose one of your construct’s unarmed attacks to gain
                your choice of one initial weapon modification, chosen from the
                Weapon list or from other initial weapon modifications to which
                you have access. The unarmed attack must meet any requirements
                for the chosen traits (such as being a melee attack for
                entangling form), and since it’s an unarmed attack, it can never
                meet certain requirements, such as being a simple weapon for
                complex simplicity.
              </li>
              <li>
                <b>Antimagic Construction:</b> Whether you used some clever
                adaptation of the magic-negating skymetal known as noqual or
                created magical protections entirely of your own devising,
                you’ve made your innovation highly resilient to spells. Your
                construct innovation gains a +2 circumstance bonus to all saving
                throws and AC against spells.
              </li>
              <li>
                <b>Climbing Limbs:</b> With appendages that can claw or create
                suction, your construct becomes a capable climber. Your
                innovation gains a climb Speed equal to half its land Speed.
              </li>
              <li>
                <b>Durable Construction:</b> Your innovation is solidly built;
                it can take significant punishment before being destroyed.
                Increase its maximum HP by your level.
              </li>
              <li>
                <b>Marvelous Gears:</b>
                Your innovation gains expert proficiency in Intimidation,
                Stealth, and Survival. For any of these skills in which it was
                already an expert (because of being an advanced construct
                companion, for example), it gains master proficiency instead. If
                you have the revolutionary innovation class feature, these
                proficiencies improve to master, or legendary if your construct
                innovation was already an expert. You must have the wonder gears
                modification to select this modification.
              </li>
              <li>
                <b>Turret Configuration:</b> Your innovation can transform from
                a mobile construct to a stationary turret. Your construct
                companion can transform as a single action, which has the
                manipulate trait, turning into a turret in its space (or
                transforming back from a turret into its normal configuration).
                While it’s a turret, your innovation is immobilized, but the
                damage die from its projectile launcher increases to 1d6 and the
                range increment increases to 60 feet. You must have the
                projectile launcher modification to select this modification.
              </li>
            </ul>

            <h4>Revolutionary armor modifications</h4>
            <ul>
              <li>
                <b>Flight Chassis:</b> You fit your construct with a means of
                flight, such as adding rotors or rebuilding it with wings and a
                lightweight construction. Your innovation gains a fly Speed of
                25 feet.
              </li>
              <li>
                <b>Miracle Gears:</b> As you perfect your innovation’s cortex,
                it becomes much more intelligent. Its Intelligence modifier
                increases by 2, and it learns a language of your choice from
                among the languages you know. Your construct gains the ability
                to use actions that require greater Intelligence, like Coerce
                and Decipher Writing. Finally, your construct becomes legendary
                in two Intelligence- or Charisma-based skills of your choice.
                You must have the marvelous gears modification to select this
                modification.
              </li>
              <li>
                <b>Resistant Coating:</b> Your innovation is hard to damage by
                any means. It gains resistance 5 to all damage (except
                adamantine).
              </li>
              <li>
                <b>Runic Keystone:</b>
                You’ve incorporated a device similar to a runestone into your
                innovation, allowing it to hold a property rune, even though it
                isn’t a weapon or suit of armor. An armor property rune affects
                your innovation itself if it would affect the wearer of the
                armor. A weapon property rune grants whatever properties it
                would normally grant to a weapon to your innovation’s unarmed
                attacks, following all the requirements as normal (for instance,
                a vorpal rune would only apply to slashing melee unarmed
                attacks); if the rune affects only ranged attacks, it has no
                effect unless your innovation has a built-in ranged attack (from
                the projectile launcher initial modification, for example). If
                the rune would affect the physical shape or appearance of the
                weapon or armor itself, like glamered, the rune has no effect
                when etched into your construct.
              </li>
              <li>
                <b>Wall Configuration:</b> Your innovation can transform from a
                mobile construct to a stationary battlefield emplacement. It can
                unfold as a 2-action activity that has the manipulate trait,
                changing from its usual form into a thin, straight wall of metal
                and gears up to 10 feet tall and 30 feet long. The wall must
                extend through your innovation’s original space. While your
                construct is a wall, it can’t take any actions except to use the
                same activity to transform back, and it can’t defend itself
                easily, making it flat-footed and giving it an additional –2
                status penalty to its AC. The wall blocks line of sight and
                effect unless your innovation has half its maximum HP or fewer,
                at which point holes in the wall allow creatures to see through
                and attack with cover, and Tiny creatures to slip through.
              </li>
            </ul>
          </>
        }
      />
      <BaseAccordion
        title="Weapon"
        number={2}
        text={
          <>
            <p>
              Your innovation is an impossible-looking weapon augmented by
              numerous unusual mechanisms. It begins with the same statistics as
              a level 0 common simple or martial weapon of your choice, or
              another level 0 simple or martial weapon to which you have access.
              You can instead use the statistics of a 1st-level common simple or
              martial weapon of your choice, or another 1st-level simple or
              martial weapon to which you have access, but you must pay the
              monetary Price for the weapon. An innovation weapon can have
              fundamental and property runes added to it in the same way as an
              ordinary weapon. Because of the unique features of your
              innovation, everyone except you is untrained in it, even if they
              would normally be trained (or better) in simple or martial
              weapons. If you use the Overdrive action, you can choose to change
              the additional damage from Overdrive to fire damage.
            </p>
            <p>
              Choose one initial weapon modification to apply to your
              innovation, either from the following or from other initial weapon
              modifications to which you have access. These modifications grant
              additional weapon traits, sometimes with extra abilities. A
              modification might give your weapon the versatile trait with a
              damage type that the weapon could already deal, either from its
              base damage type or from an existing versatile trait. In that
              case, if you select that modification, you can instead choose to
              give the weapon the versatile trait for a different damage type:
              bludgeoning, piercing, or slashing.
            </p>
            <ul>
              <li>
                <b>Blunt Shot (Ranged Only):</b> Your weapon innovation can file
                the edges off your ammunition and adjust the blunt force of the
                shot to deliver a bludgeoning attack when necessary, as well as
                to avoid striking a lethal blow with an otherwise deadly shot.
                Your innovation gains the nonlethal and versatile B traits. You
                can choose whether to apply the nonlethal trait on each attack
                with your innovation.
              </li>
              <li>
                <b>Complex Simplicity (Simple Weapon Only):</b> Increase your
                innovation’s weapon damage die by one step (d4 to d6, d6 to d8,
                d8 to d10, d10 to d12). In addition, it gains one of the
                following traits of your choice: versatile B, versatile P, or
                versatile S.
              </li>
              <li>
                <b>
                  Dynamic Weighting (One-handed Melee Weapon Only; Can’t Have
                  the Agile, Attached, or Free-hand Trait):
                </b>{" "}
                Your weapon’s modified weight distribution can increase power in
                exchange for taking more hands to wield. Your innovation gains
                the two-hand trait, with a damage die one size higher than the
                weapon’s normal weapon damage die size (for instance, a
                longsword would gain the two-hand d10 trait). Your innovation
                also gains the versatile B trait.
              </li>
              <li>
                <b>Entangling Form (Melee Only):</b> You’ve altered your weapon
                to including tangling wires or straps, or to have a flexible
                construction. Your innovation gains the grapple and trip traits.
              </li>
              <li>
                <b>Hampering Spikes (Melee Only):</b> You’ve added long,
                snagging spikes to your weapon, which you can use to impede your
                foes’ movement. Your innovation gains the hampering and
                versatile P traits.
              </li>
              <li>
                <b>Hefty Composition (Melee Only):</b> Blunt surfaces and sturdy
                construction make your weapon hefty and mace-like. Your
                innovation gains the shove and versatile B traits.
              </li>
              <li>
                <b>Modular Head:</b> You’ve constructed a multi-purpose,
                adjustable striking surface for your weapon, or you’ve made
                special ammunition you can swiftly alter. Your innovation gains
                the modular trait for bludgeoning, piercing, and slashing. When
                you Interact to use the modular trait, you can also choose to
                give the weapon the nonlethal trait if it doesn’t currently have
                it, or to remove that trait if it’s currently nonlethal.
              </li>
              <li>
                <b>Pacification Tools (Melee Only):</b> Softer materials make
                your weapon suited to knock out instead of kill, and special
                protrusions let you catch weapons and disarm your foes. Your
                innovation gains the disarm and nonlethal traits. You can choose
                whether to apply the nonlethal trait on each attack with your
                innovation.
              </li>
              <li>
                <b>Razor Prongs (Melee Only):</b> You can knock down and slash
                your foes with sharp, curved blades added to your weapon. Your
                innovation gains the trip and versatile S traits.
              </li>
              <li>
                <b>Segmented Frame:</b> Hinges, clamps, and telescoping parts
                make your innovation collapsible and adjustable. It gains the
                modular trait for bludgeoning, piercing, and slashing. You can
                Interact to collapse the item down to light Bulk or to return it
                to your normal form. When it’s collapsed to light Bulk, it has
                the concealable trait, which grants you a +2 circumstance bonus
                to Stealth checks and DCs to hide or conceal the weapon.
              </li>
            </ul>

            <h4>Breakthrough armor modifications</h4>
            <ul>
              <li>
                <b>Advanced Rangefinder (Ranged Only):</b> A carefully tuned
                scope or targeting device makes your weapon especially good at
                hitting weak points. Your innovation gains the backstabber trait
                and increases its range increment by 10 feet.
              </li>
              <li>
                <b>Aerodynamic Construction (Melee Only):</b> You carefully
                engineer the shape of your weapon to maintain its momentum in
                attacks against successive targets. Your innovation gains the
                sweep trait and the versatile S trait.
              </li>
              <li>
                <b>Inconspicuous Appearance (Melee Only):</b> Your innovation is
                built for easy concealment and surprise attacks. It gains the
                backstabber and versatile P traits. If the weapon has light
                Bulk, it also gains the concealable trait.
              </li>
              <li>
                <b>Durable Construction:</b> Your innovation is solidly built;
                it can take significant punishment before being destroyed.
                Increase its maximum HP by your level.
              </li>
              <li>
                <b>
                  Integrated Gauntlet (One-Handed Weapon Only; Can’t Have the
                  Two-Hand Trait):
                </b>
                Combining your weapon with a gauntlet, you make it so you can
                quickly switch between attacking with your weapon and tinkering
                using your hands. Your innovation gains the free-hand trait.
              </li>
              <li>
                <b>Manifold Alloy:</b> You’ve devised several alloys that
                contain useful properties of various metals, and you replace a
                number of parts of your weapon or its ammunition with pieces
                from these alloys. Your weapon innovation is cold iron and
                silver. This means you deal more damage to a variety of
                supernatural creatures, such as demons, devils, and fey.
              </li>
              <li>
                <b>Rope Shot (Ranged Only):</b> Your weapon can shoot
                projectiles that split into simple ropes or nets around your
                foes’ legs to trip your targets, and you can climb using the
                grappling hooks built into the weapon. Your weapon innovation
                gains the climbing and ranged trip traits (see the Key Terms
                sidebar).
              </li>
              <li>
                <b>Tangle Line (Thrown Only):</b> Your weapon has an extensible
                line that you can use to knock your enemies over and quickly
                recall the weapon back to your hand. Your innovation gains the
                ranged trip trait and the tethered trait (see the Key Terms
                sidebar).
              </li>
            </ul>

            <h4>Revolutionary armor modifications</h4>
            <ul>
              <li>
                <b>Attack Refiner:</b> Your weapon makes minute recalibrations
                after every missed attack to ensure the next lands true. Your
                innovation gains the backswing and shove traits.
              </li>
              <li>
                <b>Deadly Strike:</b> Through precise calculation, you’ve found
                the perfect shape for your weapon to deal extreme damage on a
                well-placed strike. Your innovation gains the deadly d8 trait.
                If your innovation was already deadly, it increases its deadly
                die to d12 instead of gaining deadly d8.
              </li>
              <li>
                <b>Enhanced Damage:</b> You’ve made your innovation more
                powerful than other weapons of its kind. Increase your
                innovation’s weapon damage die by one step (d4 to d6, d6 to d8,
                d8 to d10, d10 to d12). As normal, you can’t increase your die
                by more than one size, so this modification isn’t cumulative
                with complex simplicity.
              </li>
              <li>
                <b>Extensible Weapon (Melee only):</b>
                You’ve found a way to construct your weapon so that it can
                extend while leaving its balance unchanged. Your innovation
                gains the reach trait. If the weapon already had the reach
                trait, it increases your reach by an additional 10 feet, instead
                of the usual additional 5 feet.
              </li>
              <li>
                <b>Impossible Alloy:</b> Other inventors claim it’s not even
                technically possible, but you’ve managed to create several metal
                alloys that seem to work for only you. These alloys can damage
                opponents vulnerable to any one of the seven skymetals. Your
                innovation is treated as all seven skymetals (abysium,
                adamantine, djezet, inubrix, noqual, orichalcum, and siccatite).
                This means you deal more damage to a variety of creatures,
                though you don’t apply any of the other special effects for
                weapons made of those skymetals.
              </li>
              <li>
                <b>Momentum Retainer (Melee only):</b> A special weighted device
                lets your weapon retain more of its momentum when you attack.
                Your innovation gains the forceful and versatile B traits.
              </li>
              <li>
                <b>Omnirange Stabilizers (Ranged only):</b> You’ve modified your
                innovation to be dangerous and effective at any range. If your
                innovation had the volley trait, remove the volley trait.
                Otherwise, increase your innovation’s range increment by 50 feet
                or an amount equal to the weapon’s base range increment,
                whichever is more.
              </li>
              <li>
                <b>
                  Rune Capacity: Whether you’ve dabbled with orichalcum or found
                  another engineering solution, you’ve built your innovation in
                  such a way that it can hold an additional property rune. Your
                  innovation can have one more property rune than a normal item
                  of its kind (to a maximum of four property runes with a +3
                  potency weapon).
                </b>
              </li>
            </ul>
          </>
        }
      />

      <h3 id="explode">Explode</h3>
      <p>
        Your innovation is a creation barely held together by your own
        engineering, always on the edge of completely falling apart. Though this
        adds risk, it also means you can coax it to perform far beyond its
        design specifications using special unstable actions. See the Key Terms
        sidebar for the definition of the unstable trait and how it affects your
        innovation.
      </p>
      <p>
        While inventors can learn various unstable actions over their career,
        all at least know how to make their innovation Explode.
      </p>

      <Spell
        name="explode"
        action="two_action"
        tags={["inventor", "fire", "manipulate", "unstable"]}
        description={
          <>
            <p>
              You intentionally take your innovation beyond normal safety
              limits, making it explode and damage nearby creatures without
              damaging the innovation... hopefully. The explosion deals 2d6 fire
              damage with a basic Reflex save to all creatures in a 5-foot
              emanation around you (if you’re wearing or holding the innovation)
              or around your innovation (if your innovation is a minion).
            </p>
            <p>
              At 3rd level, and every level thereafter, increase your
              explosion’s damage by 1d6.
            </p>
            <p>
              If you have the breakthrough innovation class feature, you can
              choose either a 5-foot or 10-foot emanation for the area when you
              use Explode; if you have the revolutionary innovation class
              feature, you can choose a 5-foot, 10-foot, or 15-foot emanation.
            </p>
          </>
        }
      />

      <h3 id="Peerless-inventor">Peerless inventor</h3>
      <p>
        You are constantly inventing, and your skill at crafting is
        unimpeachable. You gain the Inventor skill feat, even if you don’t meet
        its prerequisites.
      </p>

      <h3 id="shield-block">Shield Block</h3>
      <p>
        You gain the Shield Block general feat, a reaction that lets you reduce
        damage with your shield.
      </p>

      <h3 id="inventor-feat">Inventor Feats</h3>
      <p>
        At 1st level and every even-numbered level, you gain an inventor class
        feat. Some features and feats use an assortment of gizmos you keep on
        your person. For simplicity, these are left abstract, but if you are
        deprived of your gear for some reason, you might lose access to many
        feats and features, subject to GM discretion.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. You
        must be trained or better in the corresponding skill to select a skill
        feat.
      </p>

      <h3 id="expert-overdrive">Expert overdrive</h3>
      <p>
        You’ve increased your skill in crafting, and you can put your devices
        into a more powerful state of overdrive. You become an expert in
        Crafting, and on a successful use of Overdrive, you increase the
        additional damage by 1.
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
          <h3 id="reconfigure">Reconfigure</h3>
          <p>
            You’ve become an expert in all crafts and are always adjusting your
            inventions. You can attempt to change the modifications on your
            innovation by spending 1 day of downtime tinkering with it and
            attempting a Crafting check, with a high DC for your level. On a
            success, you can change one modification you’ve chosen for your
            innovation to a different modification of the same kind (initial,
            breakthrough, or revolutionary).
          </p>
          <p>
            If you have any modification feats, on a successful check you can
            choose to instead retrain a modification feat to a different
            modification feat. The new feat has to meet the standard
            restrictions for retraining.
          </p>

          <h3 id="ability-boosts">Ability Boosts</h3>
          <p>
            At 5th level and every 5 levels thereafter, you boost four different
            ability scores. You can use these ability boosts to increase your
            ability scores above 18. Boosting an ability score increases it by 1
            if it’s already 18 or above, or by 2 if it starts out below 18.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/inventor_02.webp")}
            alt="Inventor example"
          />
        </figure>
      </div>

      <h3 id="ancestry-feat">Ancestry Feats</h3>
      <p>
        In addition to the ancestry feat you started with, you gain an ancestry
        feat at 5th level and every 4 levels thereafter.
      </p>

      <h3 id="inventor-weapon-mastery">Inventor weapon mastery</h3>
      <p>
        You develop tricks for using your weapons more effectively. Your
        proficiency ranks for simple and martial weapons and unarmed attacks
        increase to expert.
      </p>
      <p>
        If you have a weapon innovation, you gain access to the critical
        specialization effect with your innovation.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="breakthrough-innovation">Breakthrough innovation</h3>
          <p>
            You’ve made a breakthrough in your field of study and discovered a
            powerful new way to enhance your innovation. Choose a breakthrough
            modification of your innovation’s type to apply to your innovation.
            You can choose an initial modification of your innovation’s type
            instead if you prefer.
          </p>

          <h3 id="lightning-reflexes">Lightning reflexes</h3>
          <p>
            Your reflexes are lightning fast. Your proficiency rank for Reflex
            saves increases to expert.
          </p>

          <h3 id="master-overdrive">Master overdrive</h3>
          <p>
            Your mastery of invention and crafting enhances your Overdrive even
            further. You become a master in Crafting, and on a successful
            Overdrive, you increase the additional damage by a total of 2,
            replacing the increase from expert overdrive.
          </p>

          <h3 id="weapon-specialization">Weapon specialization</h3>
          <p>
            You’ve learned how to inflict greater injuries with the weapons you
            know best. You deal 2 additional damage with weapons and unarmed
            attacks in which you are an expert. This damage increases to 3 if
            you’re a master, and 4 if you’re legendary.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/inventor_03.webp")}
            alt="Inventor example"
          />
        </figure>
      </div>

      <h3 id="inventive-expertise">Inventive expertise</h3>
      <p>
        Through innovation and experimentation, you’ve made your inventions more
        effective and reliable. Your proficiency rank for your inventor class DC
        increases to expert.
      </p>

      <h3 id="offensive-boost">Offensive boost</h3>
      <p>
        You’ve made additions to your innovation to upgrade your offensive
        capabilities. Your improvements make any Strikes that rely on your
        innovation deal an additional 1d6 damage, with a type determined by the
        boost you choose. If your innovation is armor, the boost applies to your
        melee unarmed Strikes and to your melee Strikes with one weapon you
        choose during daily preparations; if your innovation is a construct, the
        boost applies to your construct companion’s Strikes; and if your
        innovation is a weapon, the boost applies to your Strikes with your
        innovation. You can spend downtime to switch to a different boost in the
        same way as switching your modification. Choose one of the following
        boosts, with the damage type in parentheses.
      </p>
      <ul>
        <li>
          <b>Chill (Cold):</b> Your innovation rapidly absorbs heat, creating an
          intense chill.
        </li>
        <li>
          <b>Ignition (Fire):</b> Your innovation shoots out jets of searing
          flame.
        </li>
        <li>
          <b>Jolt (Electricity):</b> Your innovation jolts foes with charges of
          electricity.
        </li>
        <li>
          <b>Momentum (Bludgeoning):</b> Your innovation slams into foes with
          added momentum.
        </li>
        <li>
          <b>Saws (Slashing):</b> Your innovation reveals spinning sawblades
          during your attacks.
        </li>
        <li>
          <b>Spike (Piercing):</b> Your innovation reveals wicked spikes during
          your attacks.
        </li>
        <li>
          <b>Vitriol (Acid):</b> Your innovation releases spurts of caustic
          acid.
        </li>
      </ul>

      <h3 id="medium-armor-expertise">Medium armor expertise</h3>
      <p>
        You’ve learned to better defend yourself against attacks. Your
        proficiency ranks for light armor, medium armor, and unarmored defense
        increase to expert.
      </p>
      <p>
        If you have a medium or heavy armor innovation, you gain access to the
        critical specialization effect with your armor innovation.
      </p>

      <h3 id="resolve">Resolve</h3>
      <p>
        You’ve steeled your mind with resolve. Your proficiency rank for Will
        saves increases to master. When you roll a success on a Will save, you
        get a critical success instead.
      </p>

      <h3 id="alertness">Alertness</h3>
      <p>
        Your attention to detail lets you remain alert to threats around you.
        Your proficiency rank for Perception increases to expert.
      </p>

      <h3 id="complete-reconfiguration">Complete reconfiguration</h3>
      <p>
        When it comes to crafting and tinkering, you’ve become incredibly adept
        at changing your modifications to adjust your innovation’s
        functionality. When you spend downtime to reconfigure your innovation
        and succeed at your Crafting check, you can swap any number of
        modifications, swap your offensive boost, or retrain any number of
        modification feats, rather than one. You still must swap a modification
        only with one of the same type (initial, breakthrough, or
        revolutionary).
      </p>

      <h3 id="inventor-weapon-mastery">Inventor weapon mastery</h3>
      <p>
        You fully understand your weapons. Your proficiency ranks for simple and
        martial weapons and unarmed attacks increase to master.
      </p>

      <h3 id="greater-weapon-specialization">Greater weapon specialization</h3>
      <p>
        Your damage from weapon specialization increases to 4 with weapons and
        unarmed attacks in which you’re an expert, 6 if you’re a master, and 8
        if you’re legendary.
      </p>

      <h3 id="legendary-overdrive">Legendary overdrive</h3>
      <p>
        Your peerless inventing and Crafting ability has supercharged your
        Overdrives. You become legendary in Crafting, and on a successful
        Overdrive, you increase the additional damage by a total of 3, replacing
        the increase from master overdrive.
      </p>

      <h3 id="revolutionary-innovation">Revolutionary innovation</h3>
      <p>
        You are an unparalleled genius and have discovered a technique that will
        revolutionize your chosen field—or at least for the time being, your
        innovation! Choose a revolutionary modification to apply to your
        innovation. You can also choose an initial or breakthrough modification
        of the same type instead, if you prefer.
      </p>

      <h3 id="inventive-mastery">Inventive mastery</h3>
      <p>
        Your inventions are incredibly effective. Your proficiency rank for your
        inventor class DC increases to master.
      </p>

      <h3 id="juggernaut">Juggernaut</h3>
      <p>
        Your body is accustomed to physical hardship and resistant to ailments.
        Your proficiency rank for Fortitude saves increases to master. When you
        roll a success on a Fortitude save, you get a critical success instead.
      </p>

      <h3 id="infinite-invention">Infinite invention</h3>
      <p>
        Your ability to adjust your innovation has reached impossible heights,
        and you can use these skills to make major adjustments in your spare
        time. During your daily preparations, you automatically fix your
        innovation if it’s destroyed or broken, and you can change to a
        different innovation (armor, construct, weapon, or other type you have
        access to) and change your modifications and offensive boost.
      </p>
      <p>
        If you have any feats that had your previous innovation as a
        prerequisite, you can’t use them until you retrain the feats as normal.
        However, it takes you only 1 day of downtime to retrain such a feat into
        a feat that has your new innovation as a prerequisite, instead of 1
        week.
      </p>

      <h3 id="medium-armor-mastery">Medium armor mastery</h3>
      <p>
        Your skill with armor improves, helping you avoid more blows. Your
        proficiency ranks for light and medium armor, as well as for unarmored
        defense, increase to master.
      </p>

      <h2>Feats</h2>
      <p>
        At every level that you gain an inventor feat, you can select one of the
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

export default InventorPage;
