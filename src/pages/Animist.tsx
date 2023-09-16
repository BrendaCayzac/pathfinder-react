import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { AnimistFeats } from "../middleware/AnimistFeats";
import { ClassFeat } from "../middleware/CutsomTypes";

const AnimistPage: React.ComponentType = () => {
  const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
    AnimistFeats
  );
  const filterBySearch = (e: React.ChangeEvent) => {
    // Input value
    const query = (e.target as HTMLInputElement).value;
    // Filtered list
    let updatedList = [...AnimistFeats];
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
        <h1>Animist</h1>
        <i>War of Immortals Playtest</i>
        <p className="introduction">
          You are the interlocutor between the seen and unseen, the voice that
          connects the mortal and the spiritual. You may hold your powers as a
          sacred trust to be kept free of ego and personal desire, or you may
          see your unique abilities as a sign that you’ve been chosen as a
          champion of two worlds.
        </p>
        <figure>
          <img
            src={require("../assets/img/animist_icon.png")}
            alt="animist test icon"
          />
        </figure>
      </header>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Wisdom</b>
          <p>
            At 1st level, your class gives you an attribute boost to Wisdom.
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
          <li>Trained in Nature and Religion</li>
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
          <li>Trained in light armor</li>
          <li>Trained in medium armor</li>
          <li>Trained in unarmored defense</li>
        </ul>
        <h2>Spells</h2>
        <p>Trained in spell attack modifier</p>
        <p>Trained in spell DC</p>
        <h2>Class DC</h2>
        <p>rained in animist class DC</p>
      </div>

      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You channel the power of spiritual entities, called apparitions, to
            cast potent spells and manipulate the battlefield to your advantage.
            You mix your own divine magic and the myriad spells granted to you
            by your attuned apparitions to cast down your enemies, sustain your
            allies, detect hidden threats, and lessen harmful effects.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You watch and listen, letting the whispers of spirits and
            otherworldly beings guide you towards sound judgment. You may call
            upon the wisdom of an apparition particularly attuned to the issue
            at hand, relying on its expertise where your own falls short.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You use your patient attention to detail, alongside clues and
            special senses gifted to you by your spiritual allies, to detect
            threats before they can ambush your companions or notice hidden
            treasures that others might pass by.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You seek out areas close to otherworldly entities who bring you
            strength or comfort. You might tend to grave sites, tread primeval
            wildernesses, or ride the rivers and seas. Animists attuned to
            apparitions of wisdom and knowledge may spend their quiet hours in
            libraries or temples, conversing on simple and complex topics alike
            with fellow scholars both seen and unseen.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>Talk to spiritual entities only you can perceive.</li>
        <li>Prefer to speak in stories and descriptive anecdotes.</li>
        <li>
          Look at the world from a broader or more metaphorical perspective than
          most mortal creatures.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Find you detached or absent-minded due to your focus on things beyond
          their awareness.
        </li>
        <li>
          Mistake you for being cruel or lacking empathy because you give equal
          weight to the material and immaterial.
        </li>
        <li>
          Value your wisdom as someone with access to vast troves of experience
          beyond what a single person could normally accumulate.
        </li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as an animist. Abilities gained at higher
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
              <a href="#attribute-boosts">attribute boosts</a>,{" "}
              <a href="#initial-proficiencies"> initial proficiencies</a>,{" "}
              <a href="apparition-attunement">apparition attunement</a>,{" "}
              <a href="#">animist and apparition spellcasting</a>,{" "}
              <a href="#"> animistic practice,</a> <a href="#">initial boon</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#">2nd-rank spells</a>,{" "}
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#">spiritual fortitude</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
              <a href="third-apparition">third apparition</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#">3rd-rank spells</a>,{" "}
              <a href="#attribute-boosts">Attribute boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#">4th-rank spells</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#expert-spellcaster,">expert spellcaster,</a>,{" "}
              <a href="#">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#">5th-rank spells,</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#apparition-awareness">apparition’s awareness</a>,{" "}
              <a href="#intermediate-boon">intermediate boon</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#advanced-interlocution">advanced interlocution</a>,{" "}
              <a href="#animist-feat">animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#">6th-rank spells</a>,{" "}
              <a href="#">apparition’s warning</a>,{" "}
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#">simple weapon expertise</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>,{" "}
              <a href="#">fourth apparition</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#">7th-rank spells</a>,{" "}
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#">greater boon</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#">8th-rank spells</a>,{" "}
              <a href="#attribute-boost">Attribute boost</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#master-spellcaster">master spellcaster</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#">9th-rank spells,</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#ultimate-boon">ultimate boon</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#animist-feat">Animist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#legendary-spellcaster">legendary spellcaster</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#supreme-incarnation">supreme incarnation</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#attribute-boost">Attribute boost</a>,{" "}
              <a href="#animist-feat">animist feat</a>,{" "}
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

      <h3 id="attribute-boosts">Attribute boosts</h3>
      <p>
        In addition to what you get from your class at 1st level, you have four
        free boosts to different attribute modifiers.
      </p>
      <p>
        At 5th level and every 5 levels thereafter, you get four free boosts to
        different attribute modifiers. If an attribute modifier is already +4 or
        higher, it takes two boosts to increase it; you get a partial boost, and
        must boost that attribute again at a later level to increase it by 1.
      </p>

      <h3 id="initial-proficiencies">Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="apparition-attunement">Apparition attunement</h3>
      <p>
        Animists gain their power by serving as a bridge for spiritual
        entities—known collectively as apparitions—to commune and interact with
        the physical world in a process called attunement. Apparitions are
        myriad and diverse: they may be human spirits lingering on the border
        between becoming phantoms or ghosts, animal spirits with particularly
        strong connections to the physical world but lacking the malice that
        would spur a transition into true undeath, manifestations of natural
        locations grown thought and purpose over time, or a variety of other
        such entities. Some animists attune to one or more specific apparitions
        that accompany them in their travels, forming a deep partnership over
        time, while others adapt to their surroundings by befriending the local
        apparitions who dwell wherever the animist’s journey takes them.
      </p>
      <p>
        Each day during your daily preparations, choose two apparitions from the
        list on page 12 to attune to. Of these, choose one to be your primary
        apparition. Your attuned apparitions each grant you knowledge in the
        form of <b>Lore</b> skills and a repertoire of additional spells you can
        cast using apparition spellcasting (see below), and your primary
        apparition grants you even further power in the form a unique vessel
        focus spell and, when you are higher level, a unique avatar form.
      </p>
      <p>
        When you Refocus (page 5), you can change which of your currently
        attuned apparitions is your primary apparition, selecting from any of
        the apparitions you attuned to during your daily preparations. All your
        apparitions typically remain attuned to you until your next daily
        preparations, but some animist abilities can temporarily disperse them,
        usually in exchange for a powerful boon. If an apparition is dispersed,
        you lose access to its gifts—you forget its apparition skills, its
        spells are removed from your apparition spell repertoire, and you cannot
        use its vessel spell or avatar form—until you attune to it again. When
        you disperse your primary apparition, your remaining apparition becomes
        your primary apparition.
      </p>
      <p>See Animist Apparitions for more information.</p>

      <h2>Animist apparitions</h2>
      <p>
        Choose your apparitions—spiritual entities you attune to, sharing in
        their knowledge and power.
      </p>

      <div className="featured-two">
        <h2>Reading an apparition entry</h2>
        <p>An apparition entry contains the following information:</p>

        <p>
          <b>Apparition Skills:</b> Each apparition has amassed knowledge on a
          particular set of Lore skills that cover their areas of interest and
          expertise. When you are attuned to an apparition, you are trained in
          these Lore skills, channeling the apparition into your body to share
          its knowledge on the subject. At 8th level and beyond, you can draw
          upon even more of the apparition’s knowledge, gaining expert
          proficiency in their apparition skills; at 16th level and beyond, your
          harmony of mind and spirit grants you master proficiency in their
          apparition skills.
        </p>
        <p>
          <b>Apparition Spell Repertoire:</b> Your attuned apparitions each
          contribute a number of spells to your apparition spell repertoire. You
          add the spells of all your attuned apparitions together to create a
          spell repertoire, which you cast with your apparition spellcasting.
        </p>
        <p>
          <b>Vessel Spell:</b> Your primary apparition grants you the listed
          vessel spell at 1st level.
        </p>
        <p>
          <b>Avatar:</b> When you cast avatar using the apparition slot granted
          by the supreme incarnation class feature, you temporarily fuse with
          your primary attuned apparition into a powerful battle form of
          near-deific power, using the stats listed here instead of a deity’s.
        </p>
      </div>

      <br />
      <br />

      <BaseAccordion
        title="Custodian of groves and gardens"
        number={1}
        text={
          <>
            <span>
              Custodians of groves and gardens frequent tended greenery and
              farmlands cared for by loving stewards. These apparitions are
              drawn to peaceful pursuits, study, and quiet reflection. Some
              linger in the mortal realms not because they have lost their way,
              but because they believe they have already found Elysium.
              Custodians of groves and gardens are peaceful, quiet, and averse
              to conflict.
              <br />
              <br />
              <b>Apparition Skills:</b> Farming Lore, Herbalism Lore.
              <br />
              <br />
              <b>Apparition Spells Cantrip:</b> tangle vine; <b>1st</b> wall of
              shrubs RoE; <b>2nd</b> gentle breeze RoE; <b>3rd</b> safe passage;{" "}
              <b>4th</b>
              life-draining roots RoE; <b>5th</b> entwined roots RoE; <b>6th</b>{" "}
              field of life;
              <b>7th</b> dancing fountain RoE; <b>8th</b> moment of renewal;{" "}
              <b>9th</b> overwhelming presence
              <br />
              <br />
              <b>Vessel Spell</b> garden of healing
              <br />
              <br />
              <b>Avatar:</b> Elysian Field Speed 60 feet, ignore difficult
              terrain and greater difficult terrain; <b>Melee</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              garden’s cradle (agile, nonlethal, reach 10 feet, trip),{" "}
              <b>Damage:</b> 6d6+6 bludgeoning plus Grab; Ranged{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              impose peace (nonlethal, range 120 feet), <b>Damage:</b> 6d6+6
              mental
            </span>
            <br />
            <br />
            <h2>Vessel Spell</h2>

            <Spell
              name="Garden of healing"
              action="one_action"
              type="focus 1"
              tags={["uncommon", "animist", "aura", "healing", "vitality"]}
              description={
                <span>
                  <b>Area:</b> 10-foot emanation.
                  <br />
                  <span className="frequency">
                    <b>Duration:</b> sustained up to 1 minute.
                  </span>
                  <br />
                  Spirits of comfort and respite swirl around you, trailing
                  visions of growing grass and blooming blossoms. When you cast
                  this spell and the first time each round you Sustain the Spell
                  thereafter, you generate a pulse of renewing energy that heals
                  each living creature within the emanation for 1d4 Hit Points.
                  <br />
                  <br />
                  <b>Heightened (+1)</b> The healing granted by the spell’s
                  pulse increases by 1d4 Hit Points.
                </span>
              }
            />
          </>
        }
      />
      <BaseAccordion
        title="Imposter in hidden places"
        number={2}
        text={
          <>
            <span>
              Impostors in hidden places whisper in quiet corners where mortal
              voices rarely echo, hoarding secrets and pondering unknowable
              truths. They often bring misfortune to those who disturb them,
              though an animist who can earn their trust will find that they
              make effective allies. Impostors in hidden places are shy and
              occasionally quite spiteful.
              <br />
              <br />
              <b>Apparition Skills:</b> Fortune-Telling Lore, Underworld Lore.
              <br />
              <br />
              <b>Apparition Spells Cantrip:</b> telekinetic hand; <b>1st</b> ill
              omen; <b>2nd</b> invisibility; <b>3rd</b> veil of privacy;{" "}
              <b>4th</b>
              liminal doorway; <b>5th</b> hallucination; <b>6th</b> mislead;
              <b>7th</b> planar palace; <b>8th</b> disappearance; <b>9th</b>{" "}
              phantasmagoria
              <br />
              <br />
              <b>Vessel Spell</b> discomfiting whispers
              <br />
              <br />
              <b>Avatar:</b> Whisper Hiding in Shadows Speed 50 feet, fly Speed
              50 feet; <b>Melee</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              touch of lost futures (versatile cold), <b>Damage:</b> 6d10+6
              void; Ranged{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              whisper of despair (range 120 feet), <b>Damage:</b> 6d6+6 void
            </span>
            <br />
            <br />
            <h2>Vessel Spell</h2>

            <Spell
              name="Discomfiting whispters"
              action="one_action"
              type="focus 1"
              tags={["uncommon", "animist", "aura", "misfortune", "void"]}
              description={
                <span>
                  <b>Area:</b> 5-foot emanation.
                  <br />
                  <span className="frequency">
                    <b>Duration:</b> sustained up to 1 minute.
                  </span>
                  <br />
                  You are surrounded by an aura of spiteful murmurings that
                  incite bad luck and punish failure. Each creature that starts
                  its turn within the area of this spell must roll twice on
                  their first attack roll that round and take the lower result.
                  If an attack roll modified in this way results in a failure,
                  the creature that rolled the failed attack takes 1d6 void
                  damage.
                  <br />
                  <br />
                  <b>Heightened (+2)</b> The void damage dealt on a failure
                  increases by 1d6.
                </span>
              }
            />
          </>
        }
      />
      <BaseAccordion
        title="Stalker in darkened boughs"
        number={3}
        text={
          <>
            <span>
              Stalkers in darkened boughs make their homes in ancient forests
              and jungles unfriendly to humanoids and others who would exert
              control or influence over nature’s designs. These apparitions are
              drawn to animists who harbor violent thoughts or impulses but are
              more likely to linger with animists who can quell their hatred.
              Stalkers in darkened boughs are moody, impulsive, and prone to
              seeing things from the least charitable perspective.
              <br />
              <br />
              <b>Apparition Skills:</b> Forest Lore, Herbalism Lore.
              <br />
              <br />
              <b>Apparition Spells Cantrip:</b> gouging claw; <b>1st</b> runic
              body; <b>2nd</b> entangling flora; <b>3rd</b> wall of thorns;{" "}
              <b>4th</b> speak with plants; <b>5th</b> moon frenzy; <b>6th</b>{" "}
              tangling creepers;
              <b>7th</b> unfettered pack; <b>8th</b> monstrosity form;{" "}
              <b>9th</b> wrathful storm
              <br />
              <br />
              <b>Vessel Spell</b> darkened forest form
              <br />
              <br />
              <b>Avatar:</b> darkened forest form; <b>Melee</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              devouring jaws (deadly d10, reach 15 feet), <b>Damage:</b> 6d10+6
              piercing.
            </span>
            <br />
            <br />
            <h2>Vessel Spell</h2>

            <Spell
              name="Darkened forest form"
              action="one_action"
              type="focus 1"
              tags={["uncommon", "animist", "polymorph"]}
              description={
                <span>
                  <span className="frequency">
                    <b>Duration:</b> sustained up to 1 minute.
                  </span>
                  <br />
                  Your apparition casts a feral shadow over your form,
                  transforming you into another shape. You can polymorph into
                  any form listed in pest form. When you transform into a form
                  granted by a spell, you gain all the effects of the form you
                  chose from a version of the spell heightened to darkened
                  forest form’s rank. The apparition also helps you adapt more
                  quickly to your new form; you gain a +1 status bonus to your
                  attack rolls using the form’s default attack modifier. Each
                  time you Sustain this Spell, you can choose a different shape
                  from those available via the associated spell.
                  <br />
                  <br />
                  <b>Heightened (2nd)</b> You can also transform into the forms
                  listed in animal form.
                  <br />
                  <br />
                  <b>Heightened (5th)</b> You can also transform into the forms
                  listed in elemental form, and the status bonus to your attack
                  rolls when using the form’s default attack modifier is +2.
                </span>
              }
            />
          </>
        }
      />
      <BaseAccordion
        title="Steward of stone and fire"
        number={4}
        text={
          <>
            <span>
              Stewards of stone and fire linger near volcanoes and the deep
              places near the heart of the earth, though particularly old rock
              formations, canyons, and other natural features of earth may also
              spawn or attract them. Stewards of stone and fire are quick to
              anger and slow to forget.
              <br />
              <br />
              <b>Apparition Skills:</b> Mountain Lore, Volcano Lore.
              <br />
              <br />
              <b>Apparition Spells Cantrip:</b> ignition; <b>1st</b> interposing
              earth; <b>2nd</b> exploding earth; <b>3rd</b> firebalt; <b>4th</b>{" "}
              wall of fire; <b>5th</b> wall of stone; <b>6th</b> petrify;
              <b>7th</b> volcanic eruption; <b>8th</b> earthquake; <b>9th</b>{" "}
              falling stars
              <br />
              <br />
              <b>Vessel Spell</b> earth’s bile
              <br />
              <br />
              <b>Avatar:</b> Blood of Planets Speed 50 feet, burrow Speed 50
              feet, ignore difficult terrain and greater difficult terrain;{" "}
              <b>Melee</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              avalanche of molten stone (versatile B), <b>Damage:</b> 6d10+6
              fire;<b>Ranged</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              cleansing eruption (fire, range 120 feet), <b>Damage:</b> 6d6+6
              fire.
            </span>
            <br />
            <br />
            <h2>Vessel Spell</h2>

            <Spell
              name="Earth's bile"
              action="one_action"
              type="focus 1"
              tags={["uncommon", "animist", "earth", "fire"]}
              description={
                <span>
                  <b>Range:</b> 30 feet; Area 10-foot burst.
                  <br />
                  <b>Saving Throw:</b> basic Reflex.
                  <br />
                  <span className="frequency">
                    <b>Duration:</b> sustained up to 1 minute.
                  </span>
                  <br />
                  Your apparition is a conduit for the earth’s molten blood,
                  unleashing a devastating burst of lava at your command. When
                  you Cast this Spell, and the first time you Sustain it each
                  round thereafter, choose an area within range. Each creature
                  in the area takes 1d4 fire damage, 1d4 bludgeoning damage, and
                  1 persistent fire damage (the persistent fire damage is
                  negated on a successful save).
                  <br />
                  <br />
                  <b>Heightened (+2)</b> The fire and bludgeoning damage each
                  increase by 1d4 and the persistent fire damage increases by 1.
                </span>
              }
            />
          </>
        }
      />
      <BaseAccordion
        title="Vanguard of roaring waters"
        number={5}
        text={
          <>
            <span>
              Vanguards of roaring waters are most commonly found where rivers
              carve their way through mountains, creating fearsome rapids. They
              can also be found near bays where rivers meet the sea and create
              turbulent breakers and unpredictable undertows. Vanguards of
              roaring waters encourage chaos and are easily bored.
              <br />
              <br />
              <b>Apparition Skills:</b> Mountain Lore, River Lore.
              <br />
              <br />
              <b>Apparition Spells Cantrip:</b> rousing splash; <b>1st</b>{" "}
              hydraulic push; <b>2nd</b> mist; <b>3rd</b> aqueous orb;{" "}
              <b>4th</b> hydraulic torrent; <b>5th</b> control water; <b>6th</b>{" "}
              personal ocean;
              <b>7th</b> dancing fountain; <b>8th</b> whirlpool; <b>9th</b>{" "}
              wrathful storm
              <br />
              <br />
              <b>Vessel Spell</b> river carving mountains
              <br />
              <br />
              <b>Avatar:</b> River that Splits the World Speed 50 feet, swim
              Speed 70 feet; <b>Melee</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              parting mountains (versatile S, water), <b>Damage:</b> 6d10+6
              bludgeoning, <b>Ranged:</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              crash into the sea (range 120 feet, versatile P, water),{" "}
              <b>Damage:</b> 6d6+6 bludgeoning.
            </span>
            <br />
            <br />
            <h2>Vessel Spell</h2>

            <Spell
              name="River carvin mountains"
              action="one_action"
              type="focus 1"
              tags={["uncommon", "animist", "water"]}
              description={
                <span>
                  <span className="frequency">
                    <b>Duration:</b> sustained up to 1 minute.
                  </span>
                  <br />
                  Your apparition solidifies around you into roaring water and
                  spraying mist. For the duration of this spell, you have lesser
                  cover against ranged attacks and gain a +5-foot status bonus
                  to your Speeds. Once per turn, you can use an action to Stride
                  up to your speed while your apparition fills each square you
                  pass through with the lingering energy of a coursing river.
                  These squares become difficult terrain until the start of your
                  next turn. You can use river carving mountains while
                  Burrowing, Climbing, Flying, or Swimming instead of Striding
                  if you have the corresponding movement type.
                </span>
              }
            />
          </>
        }
      />
      <BaseAccordion
        title="Witness of ancient battles"
        number={6}
        text={
          <>
            <span>
              Witnesses to ancient battles may be the restless souls of warriors
              left unfulfilled by their final contest, valkyries and other
              beings from beyond naturally drawn to sites of death and battle,
              or even the unquiet entity formed from a battle or battlefield
              that has seen so much death and blood it has gained a spiritual
              essence of its own. Witnesses to ancient battles are often somber
              and grim.
              <br />
              <br />
              <b>Apparition Skills:</b> Battlegrounds Lore, Heraldry Lore.
              <br />
              <br />
              <b>Apparition Spells Cantrip:</b> shield; <b>1st</b> runic weapon;{" "}
              <b>2nd</b> enlarge; <b>3rd</b> ghostly weapon; <b>4th</b> weapon
              storm; <b>5th</b> invoke spirits; <b>6th</b> phantasmal calamity;
              <b>7th</b> true target; <b>8th</b> canticle of everlasting grief;{" "}
              <b>9th</b> foresight
              <br />
              <br />
              <b>Vessel Spell</b> embodiment of battle
              <br />
              <br />
              <b>Avatar:</b> General of Endless Battle Speed 70 feet, immune to
              immobilized; <b>Melee</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              final strike (agile, fatal d12, reach 15 feet), <b>Damage:</b>{" "}
              6d10+6 bludgeoning, <b>Ranged:</b>{" "}
              <img
                src={require("../assets/img/one_action.png")}
                alt="one action icon"
              />{" "}
              crash into the sea (range 120 feet, versatile P, water),{" "}
              <b>Damage:</b> 6d8+6 slashing.
            </span>
            <br />
            <br />
            <h2>Vessel Spell</h2>

            <Spell
              name="Embodiment of battle"
              action="one_action"
              type="focus 1"
              tags={["uncommon", "animist"]}
              description={
                <span>
                  <span className="frequency">
                    <b>Duration:</b> sustained up to 1 minute.
                  </span>
                  <br />
                  Your apparition guides your attacks and imparts its skill to
                  your movements. For the duration, your proficiency with
                  martial weapons is equal to your proficiency with simple
                  weapons, you gain a +1 status bonus to attack and damage rolls
                  made with weapons or unarmed attacks, you gain the Reactive
                  Strike reaction (Player Core 138), and you gain the critical
                  specialization effect for any weapon you are wielding when you
                  Cast or Sustain this Spell. The instincts of an apparition of
                  battle run contrary to the use of magic; for the duration of
                  this spell, you take a –2 status penalty to your spell attack
                  modifier and your spell DCs.
                  <br />
                  <br />
                  <b>Heightened (4th)</b> The status bonus to attack and damage
                  rolls granted by this spell is increased to +2.
                  <b>Heightened (7th)</b> The status bonus to attack and damage
                  rolls granted by this spell is increased to +3.
                </span>
              }
            />
          </>
        }
      />

      <h3>Animist and apparition spellcasting</h3>
      <p>
        Your role as a spiritual medium connecting the mortal Universe to the
        realms beyond lets you cast your magic in two distinct ways. You both
        learn and prepare spells from the divine tradition yourself, and you
        also channel the knowledge and power of your attuned apparitions,
        gaining spell slots and a repertoire of spells from them that you can
        cast spontaneously.
      </p>
      <p>
        Regardless of which source you’re drawing on, you are a spellcaster and
        can cast spells of the divine tradition using the Cast a Spell activity.
        As an animist, your incantations might be reciting relevant snippets of
        legends—stories passed down orally—or they might see you calling nearby
        spirits to honor ancient vows; your gestures could take the form of
        elegant dances or full-body convulsions as generations of memories and
        otherworldly energies surge through you.
      </p>
      <p>
        Some of your spells require you to attempt a spell attack to see how
        effective they are, or have your enemies roll against your spell DC
        (typically by attempting a saving throw). Since your key attribute is
        Wisdom, your spell attack modifiers and spell DC use your Wisdom
        modifier.
      </p>
      <p>
        The clearly delineated partnership between an animist and their
        apparitions means you can’t cast your animist spells using your
        apparition spell slots or vice versa—your magics remain complementary
        and harmonious, yet as distinct as the two worlds from which they come.
      </p>

      <h4>Animist spellcasting</h4>
      <p>
        As a keeper of knowledge, you are constantly learning new tales and
        spells. Each day, you can prepare one 1st-rank spell and two cantrips
        from among the common spells on the divine spell list or from other
        divine spells to which you gain access and learn via Learn a Spell.
        Prepared spells remain available to you until you cast them or until you
        prepare your spells again. The number of spells you can prepare is
        called your spell slots.
      </p>
      <p>
        As you increase in level as an animist, the number of spells you can
        prepare each day increases, as does the highest rank of spell you can
        cast, as shown in the Animist Spells per Day table.
      </p>

      <h4>Apparition spellcasting</h4>
      <p>
        You can draw upon your attuned apparitions as a second source of magical
        knowledge and power. You gain additional spell slots and a spell
        repertoire from your attuned apparitions. At first level, you can cast
        one 1st-rank apparition spell per day. You must have the spell in your
        apparition spell repertoire to cast it; this is a collection of spells
        granted to you by all of your attuned apparitions. Any of these spells
        that aren’t normally on the divine list are still divine spells if you
        cast them this way. As you increase in level, you gain further
        apparition spell slots, and your apparitions grant you higher-rank
        apparition spells, as detailed in each apparition entry.
      </p>

      <h4>Heightening spells</h4>
      <p>
        When you gain spell slots of 2nd rank and higher, you can fill those
        slots with stronger versions of lower-rank spells. This increases the
        spell’s rank, heightening it to match the spell slot. Many spells have
        specific improvements when they are heightened to certain ranks.
      </p>
      <p>
        The spirits are not so limited in their magic as mortal spellcasters.
        All of your apparition spells are signature spells. That means that you
        can heighten an apparition spell freely by casting it from a higher-rank
        apparition spell slot, up to the maximum rank of apparition spell you
        can cast.
      </p>

      <h4>Cantrips</h4>
      <p>
        Some of your spells are cantrips. A cantrip is a special type of spell
        that doesn’t use spell slots. You can cast a cantrip at will, any number
        of times per day. A cantrip is automatically heightened to half your
        level rounded up—this is usually equal to the highest rank of animist
        spell slot you have. For example, as a 1st-level animist, your cantrips
        are 1st-rank spells, and as a 5th-level animist, your cantrips are
        3rd-rank spells.
      </p>

      <h4>Vessel spells</h4>
      <p>
        Your primary attuned apparition can use your body as a conduit, allowing
        you to cast a unique vessel spell. Vessel spells are a type of focus
        spell. It costs 1 Focus Point to cast a focus spell, and you start with
        a focus pool of 1 Focus Point. You refill your focus pool during your
        daily preparations, and you can regain 1 Focus Point by spending 10
        minutes using the Refocus activity to treat with nearby spirits,
        meditate on resolving an issue pertaining to the balance of spirits and
        mortals, or telling a story.
      </p>
      <p>
        Focus spells are automatically heightened to half your level rounded up,
        much like cantrips. Focus spells don’t require spell slots, and you
        can’t cast them using spell slots. Certain feats give you more focus
        spells. The maximum Focus Points your focus pool can hold is equal to
        the number of focus spells you have, but can never be more than 3
        points.
      </p>

      <h4>Animist spells per day</h4>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Your Level</th>
            <th>Spell Rank Cantrips</th>
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
            <td>2+2</td>
            <td>1+1</td>
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
            <td>2+2</td>
            <td>2+1</td>
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
            <td>2+2</td>
            <td>2+1</td>
            <td>1+1</td>
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
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
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
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
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
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
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
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>8</td>
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>9</td>
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>10</td>
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>11</td>
            <td>2+3</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>12</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>13</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>14</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>15</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>16</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>17</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>1+1</td>
            <td>—</td>
          </tr>
          <tr>
            <td>18</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>—</td>
          </tr>
          <tr>
            <td>19</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>0+1*</td>
          </tr>
          <tr>
            <td>20</td>
            <td>2+4</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>2+1</td>
            <td>0+1*</td>
          </tr>
          <tr>
            <td colSpan={13}>
              The number before a plus sign indicates your spell slots via
              animist spellcasting, and the number after it your spell slots
              from apparition spellcasting. For instance, a 2nd-level animist
              has “2 + 1” 1st-rank spell slots, meaning they can prepare two
              1st-rank spells via animist spellcasting, and they also have one
              spell slot to spontaneously cast an apparition spell.
            </td>
          </tr>
          <tr>
            <td colSpan={13}>
              *The supreme apparition class feature gives you a 10th-rank
              apparition slot that works a bit differently from other spells.
            </td>
          </tr>
        </tbody>
      </table>

      <h3 id="">animalistic practice</h3>
      <p>
        At 1st level, the animist chooses a practice that influences the way
        their power grows and develops. Choose one of the following practices
        and gain the listed benefits.
      </p>

      <BaseAccordion
        title="Channeler"
        number={7}
        text={
          <>
            <span>
              Channelers tend to associate more freely with a wide array of
              apparitions, as they are naturally skilled at acting as conduits
              for spiritual energy. While they tend not to form deep bonds with
              a single apparition, they are able to wield the power of multiple
              apparitions with great ease. Channelers are often travelers,
              itinerant merchants, or similar drifters, carrying stories from
              town to town. They often associate with apparitions of local
              natural features they find themselves near: for instance, bonding
              with a steward of stone and fire when traversing a volcanic
              caldera.
              <br />
              <br />
              <b>Initial Boon:</b> At 1st level, you gain the Channeler’s Stance
              feat and the Apparition’s Whirl action.
            </span>

            <Spell
              name="Apparition's whirl"
              action="one_action"
              tags={["animist", "apparition", "concentrate"]}
              description={
                <span>
                  <span className="frequency">
                    <b>Frequency:</b> once per round.
                  </span>
                  <br />
                  Your apparitions spiral around you as you replace your bond
                  with your primary apparition with another. Choose another
                  apparition from among those you’ve attuned to; it becomes your
                  primary apparition, replacing your current one.
                </span>
              }
            />

            <span>
              <b>Intermediary Boon:</b> At 9th level, your proficiency rank for
              Fortitude saves increases to master. When you roll a success on a
              Will save, you get a critical success instead.
              <br />
              <br />
              <b>Greater Boon:</b> At 13th level, your proficiency ranks for
              light armor, medium armor, and unarmored defense increase to
              expert.
              <br />
              <br />
              <b>Ultimate Boon:</b> At 17th level, the first time in an
              encounter you enter a specific stance granted by an animist feat,
              you gain a number of temporary Hit Points equal to half your level
              + 2 (minimum 3). These temporary Hit Points last for 1 minute.
            </span>
          </>
        }
      />
      <BaseAccordion
        title="Sage"
        number={8}
        text={
          <>
            <span>
              Sages are particularly sensitive to the presence and influence of
              spirits and undead. They can easily detect lingering spirits and
              help create resolutions between spiritual entities and whatever
              barriers are preventing them from resting peacefully. Some sages
              may even serve as go-betweens for spirits that intentionally
              linger to watch over a site or community, allowing them to speak
              to the people they knew in life. Sages are often community leaders
              or educators and frequently associate with apparitions of fixed
              sites of power, like custodians of groves and gardens or other
              apparitions of knowledge.
              <br />
              <br />
              <b>Initial Boon:</b> At 1st level, your ability to sink into your
              apparition is especially potent. You gain the Apparition Sense
              feat and the Apparition’s Possession action.
            </span>

            <Spell
              name="Apparition's possession"
              action="one_action"
              tags={["animist", "apparition"]}
              description={
                <span>
                  <span className="frequency">
                    <b>Frequency:</b> once per round.
                  </span>
                  <br />
                  You relinquish control of your physical body to an apparition,
                  allowing it to fully unleash its spiritual power at the cost
                  of your own agency. Until the start of your next turn, you are
                  immune to control effects and spells that attempt to influence
                  your actions, such as charm or command, unless its spell rank
                  is more than twice your level. However, the only actions you
                  can take are to Stride, Strike, Cast an apparition Spell, Cast
                  a vessel Spell, or use an action that has the apparition
                  trait.
                </span>
              }
            />

            <span>
              <b>Intermediary Boon:</b> At 9th level, your proficiency ranks for
              light armor, medium armor, and unarmored defense increase to
              expert.
              <br />
              <br />
              <b>Greater Boon:</b> At 13th level, you gain spirit resistance
              equal to half your level and a +2 circumstance bonus to saving
              throws against spirit effects. You are immune to any effect that
              separates your soul from your body against your will, such as the
              seize soul spell.
              <br />
              <br />
              <b>Ultimate Boon:</b> At 17th level, whenever a haunt, spirit,
              undead, or incorporeal creature fails a saving throw against your
              spells, you gain a +2 circumstance bonus to your AC and saving
              throws against all of that entity’s attacks and abilities for the
              next 24 hours. This bonus applies only to the entity that failed
              its save, not others of the same type.
              <br />
              <br />
              In addition, you can select up to two apparitions as your primary
              apparition during your daily preparations.
            </span>
          </>
        }
      />

      <h3>Key Terms</h3>
      <p>
        You’ll see the following new key terms in many animist class features.
      </p>
      <p>
        <b>Apparitions:</b> Apparitions are spiritual entities who generally
        lack the power, cohesiveness, or attachments to enter or affect the
        physical world. Unlike a ghost or phantom, an apparition does not need
        to have ever been a living creature and could be the spiritual memory of
        a particularly meaningful location or event. Apparitions are reliant on
        animists to interact with other people and things, and they generally
        can’t be targeted or affected by spells and abilities other than those
        of the animist they are attuned to. Animist feats and abilities that
        affect spirits affect apparitions only if they specifically say so.
      </p>
      <p>
        Animist abilities with the apparition trait involve one or more of your
        apparitions acting alongside you. You must be attuned to at least one
        apparition to use an apparition ability, and some abilities might state
        in their Requirements more specifically which apparition you must be
        attuned to. Typically, you’re assumed to always attune to your
        apparitions during your daily preparations, but in some rare
        circumstances or as a result of certain animist abilities, your
        apparitions might be dispersed or separated from you for a time.
      </p>
      <p>
        <b>Wandering:</b> Wandering identifies animist feats closely attuned to
        particular types of apparitions. When you make your daily preparations,
        you can retrain any wandering feat you know for any other wandering feat
        available at the level you took the exchanged feat (including
        lower-level wandering feats, as usual). You must meet all the new feat’s
        other prerequisites.
      </p>
      <p>
        In addition, the animist makes use of the stance trait, reprinted below
        for convenience.
      </p>
      <p>
        <b>Stance:</b> A stance is a general combat strategy that you enter by
        using an action with the stance trait, and you remain in for some time.
        A stance lasts until you get knocked out, until its requirements (if
        any) are violated, until the encounter ends, or until you use a stance
        action again, whichever comes first. After you take an action with the
        stance trait, you can’t take another one for 1 round. You can enter or
        be in a stance only in encounter mode. You can Dismiss a stance.
      </p>

      <h3 id="animist-feat">Animist Feats</h3>
      <p>
        At 2nd level and every even-numbered level, you gain an animist class
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

      <h3 id="">Third Apparition</h3>
      <p>
        You’ve learned to shelter more spirits, gaining access to more magic.
        When you attune to apparitions during your daily preparations, you
        choose three apparitions to attune to, with one of them being your
        primary apparition. Increase the number of Focus Points in your focus
        pool by 1.
      </p>

      <h3 id="ancestry-feat">Ancestry Feats</h3>
      <p>
        In addition to the ancestry feat you started with, you gain an ancestry
        feat at 5th level and every 4 levels thereafter.
      </p>
      <div className="flex">
        <div className="flex-column">
          <h3 id="">Expert spellcaster</h3>
          <p>You learn a special discovery depending on your field.</p>
          <p>
            The spirits’ magic flows freely through you. Your proficiency ranks
            for your spell attack modifier and spell DC increase to expert.
          </p>

          <h3 id="">Apparition's awareness</h3>
          <p>
            Your apparitions call attention to minute details you might
            otherwise overlook. Your proficiency rank for Perception increases
            to expert.
          </p>

          <h3 id="">Advanced interlocution</h3>
          <p>
            You channel the power of spiritual forces and entities with
            incredible efficiency. You gain an additional apparition slot for
            each rank of spells you can cast, up to your highest rank of spells
            – 2. For example, a 10th-level animist would have an additional
            1st-, 2nd-, and 3rd-rank apparition slot.
          </p>

          <h3 id="">Apparition's warning</h3>
          <p>
            The spiritual entities that protect you warn you of harm before it
            would occur, giving you more time to react. Your proficiency rank
            for Reflex saves increases to expert.
          </p>

          <h3 id="">Simple weapon expertise</h3>
          <p>
            Training from your spiritual companions has improved your weapon
            technique. Your proficiency rank for simple weapons and unarmed
            attacks increases to expert.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/animist_01.webp")}
            alt="Animist example"
          />
        </figure>
      </div>

      <h3 id="">Fourth apparition</h3>
      <p>
        You’re truly loved by the spirits, with apparitions flocking to you from
        far and wide. When you attune to apparitions during your daily
        preparations, you choose four apparitions to attune to, with one of them
        being your primary apparition.
      </p>

      <h3 id="">Weapon specialization</h3>
      <p>
        You’ve learned how to inflict greater injuries with the weapons you know
        best. You deal 2 additional damage with weapons and unarmed attacks in
        which you are an expert. This damage increases to 3 if you’re a master,
        and 4 if you’re legendary.
      </p>

      <h3 id="">Master spellcaster</h3>
      <p>
        Your affinity with the apparitions you bond to has further enhanced the
        potency of your magic. Your proficiency ranks for spell attack modifier
        and spell DC increase to master.
      </p>

      <h3 id="">Legendary spellcaster</h3>
      <p>
        You are a near-perfect channel for the magical energies of the realms
        beyond. Your proficiency ranks for spell attack modifier and spell DC
        increase to legendary.
      </p>

      <h3>Supreme incarnation</h3>
      <p>
        You become a nexus between the mortal and spiritual realms, capable of
        serving as the channel for your apparition to incarnate its full might
        through you. You gain a 10th-rank apparition spell slot. In addition to
        heightened versions of your apparition spells, you can use this slot to
        cast avatar. When you cast avatar in this way, you do not become an
        avatar of a deity; rather, your primary attuned apparition incarnates
        itself using your body, transforming you into the avatar described in
        your primary attuned apparition’s entry.
      </p>

      <h2>Feats</h2>
      <p>
        At every level that you gain an animist feat, you can select one of the
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
          filteredList.map((AlchemistFeat) => (
            <Feat
              key={AlchemistFeat.id}
              id={AlchemistFeat.id}
              name={AlchemistFeat.name}
              action={AlchemistFeat.action}
              level={AlchemistFeat.level}
              feat={AlchemistFeat.feat}
              description={AlchemistFeat.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AnimistPage;
