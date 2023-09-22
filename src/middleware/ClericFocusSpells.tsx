import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const ClericFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Agile feet",
    action: "one_action",
    tags: ["uncommon", "cleric", "transmutation"],
    type: "Focus 1",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        <b>Domain</b> travel.
        <br />
        <b>Cast</b> somatic.
        <br />
        <span className="frequency">
          <b>Duration</b> until the end of the current turn.
        </span>
        <br />
        The blessings of your god make your feet faster and your movements more
        fluid. You gain a +5-foot status bonus to your Speed and ignore
        difficult terrain. As part of casting agile feet, you can Stride or
        Step; you can instead Burrow, Climb, Fly, or Swim if you have the
        appropriate Speed
      </p>
    ),
  },
  {
    id: 2,
    level: 1,
    name: "Appearance of wealth",
    action: "two_action",
    tags: ["uncommon", "cleric", "illusion"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> wealth.
          <br />
          <b>Cast</b> material, verbal.
          <br />
          <b>Area</b> 5-foot burst.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          You create a brief vision of immense wealth filling the spell’s area.
          Each creature within 20 feet of the area that could be enticed by
          material wealth must attempt a Will saving throw. A creature that
          enters the area automatically disbelieves the illusion, and
          disbelieving the illusion ends any fascinated condition imposed by the
          spell. As long as you Sustain the Spell, other creatures react to the
          treasure like they would any other illusion, but they are not at risk
          of becoming fascinated.
        </p>
        <p>
          <b>Critical Success</b> The creature disbelieves the illusion and is
          unaffected by it.
        </p>
        <p>
          <b>Success</b> The creature is fascinated by the wealth until it has
          completed its first action on its next turn.
        </p>
        <p>
          <b>Failure</b> The creature is fascinated by the illusion.
        </p>
      </>
    ),
  },
  {
    id: 3,
    level: 1,
    name: "Athletic rush",
    action: "one_action",
    tags: ["uncommon", "cleric", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> might.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your body fills with physical power and skill. You gain a +10-foot
          status bonus to Speed and a +2 status bonus to Athletics checks. As a
          part of Casting this Spell, you can use a Stride, Leap, Climb, or Swim
          action. The spell’s bonuses apply during that action.
        </p>
      </>
    ),
  },
  {
    id: 4,
    level: 1,
    name: "Bit of luck",
    action: "two_action",
    tags: ["uncommon", "cleric", "divination", "fortune"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> luck.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 willing creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You tilt the scales of luck slightly to protect a creature from
          disaster. When the target would attempt a saving throw, it can roll
          twice and use the better result. Once it does this, the spell ends.
        </p>
        <p>
          If you cast <b>bit of luck</b> again, any previous <b>bit of luck</b>{" "}
          you cast that’s still in effect ends. After a creature has been
          targeted with
          <b>bit of luck</b>, it becomes temporarily immune for 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 5,
    level: 1,
    name: "Blind ambition",
    action: "two_action",
    tags: ["uncommon", "cleric", "emotion", "enchantement", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> ambition.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
          <br />
          You strengthen a target’s ambition, increase its resentment of allies,
          and make its allegiances more susceptible to change. The target must
          attempt a Will save.
        </p>
        <p>
          <b>Critical Successs</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes a –1 status penalty to its saving
          throws and other defenses against attempts to Coerce it, Request
          something of it, or use mental effects to convince it to do something
          (such as a suggestion spell). This penalty applies only if the target
          is being encouraged to advance its own ambitions.
        </p>
        <p>
          <b>Failure</b> As success, but the penalty is –2.
        </p>
        <p>
          <b>Critical Failure</b> The target is overcome with ambition, taking
          whatever actions would advance its own agenda over those of anyone
          else, even without attempts to convince it.
        </p>
      </>
    ),
  },
  {
    id: 6,
    level: 1,
    name: "Charming touch",
    action: "one_action",
    tags: [
      "uncommon",
      "cleric",
      "emotion",
      "enchantement",
      "incapacitation",
      "mental",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> passion.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 creature that could find you attractive.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
          <br />
          You infuse your target with attraction, causing it to act friendlier
          toward you. The target attempts a Will save. It gains a +4
          circumstance bonus to this save if you or your allies recently
          threatened or were hostile to it.
        </p>
        <p>
          <b>Critical Successs</b> The target is unaffected and aware you tried
          to charm it.
        </p>
        <p>
          <b>Success</b> The target is unaffected but thinks your spell was
          something harmless instead of <b>charming touch</b>, unless it
          identifies the spell (see Identifying Spells).
        </p>
        <p>
          <b>Failure</b> The target’s attitude becomes friendly toward you. If
          it was friendly, it becomes helpful. It can’t use hostile actions
          against you.
        </p>
        <p>
          <b>Critical Failure</b> The target is helpful and can’t use hostile
          actions against you.
        </p>
        <p>
          You can Dismiss the spell. If you use hostile actions against the
          target, the spell ends. After the spell ends, the target doesn’t
          necessarily realize it was charmed unless its friendship with you or
          the actions you convinced it to take clash with its expectations,
          which could potentially allow you to convince the target to continue
          being your friend via mundane means.
        </p>
      </>
    ),
  },
  {
    id: 7,
    level: 1,
    name: "Cinder gaze",
    action: "",
    tags: ["uncommon", "cleric", "divination", "prediction"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> fire (apocryphal).
          <br />
          <span className="frequency">
            <b>Cast</b> 1 minute (material, somatic, verbal).
          </span>
          <br />
          You’ve learned to read the future in the patterns of flames and smoke.
          Though inexact and often symbolic, these readings help prepare you for
          upcoming events. When Casting this Spell, you must be near a fire (of
          any size) for the duration. Upon completion, roll 1d4 for your
          prediction. The benefit lasts for 10 minutes or until expended,
          whichever comes first. After casting cinder gaze, you can’t cast it
          again for 10 minutes.
        </p>
        <ol>
          <li>
            <b>Terrible Danger</b> You gain a +2 status bonus to your next
            initiative roll.
          </li>
          <li>
            <b>New Life</b> The next time you take damage, just before taking
            the damage, you gain temporary Hit Points equal to 1 plus your
            spellcasting ability modifier.
          </li>
          <li>
            <b>Vivid Insight</b> (fortune) The next time you attempt a check to
            Recall Knowledge, roll twice and take the higher result.
          </li>
          <li>
            <b>Good Fortune</b> (fortune) The next time you attempt a saving
            throw, roll twice and take the better result.
          </li>
        </ol>
        <p>
          <b>Heightened (+1)</b> The number of temporary Hit Points from new
          life increases by 2.
        </p>
      </>
    ),
  },
  {
    id: 8,
    level: 1,
    name: "Cloak of shadow",
    action: "one_action",
    tags: ["uncommon", "cleric", "darkness", "evocation", "shadow"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> darkness.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 willing creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You drape the target in a mantle of swirling shadows that make it
          harder to see. The cloak reduces bright light within a 20-foot
          emanation to dim light. This is a form of magical darkness and can
          therefore overcome non-magical light or attempt to counteract magical
          light.
        </p>
        <p>
          The target can use concealed condition gained from the shadows to
          Hide, though observant creatures can still follow the moving aura of
          shadow, making it difficult for the target to become completely
          undetected. The target can use an Interact action to remove the cloak
          and leave it behind as a decoy, where it remains, reducing light for
          the rest of the spell’s duration. If anyone picks up the cloak after
          it’s been removed by the original target, the cloak evaporates and the
          spell ends.
        </p>
      </>
    ),
  },
  {
    id: 9,
    level: 1,
    name: "Cry of Destruction",
    action: "two_action",
    tags: ["uncommon", "cleric", "evocation", "sonic"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> destruction.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 15-foot cone.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> basic Fortitude.
          </span>
          <br />
          Your voice booms, smashing what’s in front of you. Each creature and
          unattended object in the area takes 1d8 sonic damage. If you already
          dealt damage to an enemy this turn with a Strike or spell, increase
          the damage dice from this spell to d12s.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1d8.
        </p>
      </>
    ),
  },
  {
    id: 10,
    level: 1,
    name: "Dazzling flash",
    action: "two_action",
    tags: ["uncommon", "cleric", "evocation", "light", "visual"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> sun.
          <br />
          <b>Cast</b> material, verbal.
          <br />
          <b>Area</b> 15-foot cone.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
          <br />
          You raise your religious symbol and create a blinding flash of light.
          Each creature in the area must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature is dazzled for 1 round.
        </p>
        <p>
          <b>Failure</b> The creature is blinded for 1 round and dazzled for 1
          minute. The creature can spend an Interact action rubbing its eyes to
          end the blinded condition.
        </p>
        <p>
          <b>Critical Failure</b> The creature is blinded for 1 round and
          dazzled for 1 hour.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1d8.
        </p>
      </>
    ),
  },
  {
    id: 11,
    level: 1,
    name: "Death's call",
    action: "reaction",
    tags: ["uncommon", "cleric", "necromancy"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> death.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> A living creature within 20 feet of you dies, or an
          undead creature within 20 feet of you is destroyed.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Seeing another pass from this world to the next invigorates you. You
          gain temporary Hit Points equal to the triggering creature’s level
          plus your spellcasting ability modifier. If the triggering creature
          was undead, double the number of temporary Hit Points you gain . These
          last for the duration of the spell, and the spell ends if all the
          temporary Hit Points are depleted earlier.
        </p>
      </>
    ),
  },
  {
    id: 12,
    level: 1,
    name: "Face in the crowd",
    action: "one_action",
    tags: ["uncommon", "cleric", "illusion", "visual"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> cities.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          While in a crowd of roughly similar creatures, your appearance becomes
          bland and nondescript. You gain a +2 status bonus to Deception and
          Stealth checks to go unnoticed among the crowd, and you ignore
          difficult terrain caused by the crowd.
        </p>
        <p>
          <b>Heightened (3rd)</b> The spell gains a range of 10 feet and can
          target up to 10 creatures.
        </p>
      </>
    ),
  },
  {
    id: 13,
    level: 1,
    name: "Fire ray",
    action: "two_action",
    tags: ["uncommon", "attack", "cleric", "evocation", "fire"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> fire.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
          <br />A blazing band of fire arcs through the air. Make a spell attack
          roll. The ray deals 2d6 fire damage.
        </p>
        <p>
          <b>Critical Success</b> The ray deals double damage and 1d4 persistent
          fire damage.
        </p>
        <p>
          <b>Success</b> The ray deals full damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The ray’s initial damage increases by 2d6, and
          the persistent fire damage on a critical success increases by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 14,
    level: 1,
    name: "Forced quiet",
    action: "two_action",
    tags: ["rare", "abjuration", "cleric"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> secrecy.
          <br />
          <b>Cast</b> material, somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Fortitude.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          You quiet the target’s voice, preventing it from giving away valuable
          secrets. This doesn’t prevent the target from talking or providing
          verbal spell components, but no creature more than 10 feet away can
          hear its whispers without succeeding at a Perception check against
          your spell DC, which might interfere with auditory or linguistic
          effects as well as communication. The spell’s duration depends on the
          target’s Fortitude save. After attempting its save, the target becomes
          temporarily immune for 24 hours.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The duration is 1 round.
        </p>
        <p>
          <b>Failure</b> The duration is 1 minute.
        </p>
        <p>
          <b>Critical Failure</b> The duration is 10 minutes.
        </p>
      </>
    ),
  },
  {
    id: 15,
    level: 1,
    name: "Frenzied reverly",
    action: "two_action",
    tags: ["rare", "cleric", "emotion", "enchantement", "metal"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> indulgence (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 5-foot emanation.
          <br />
          <b>Targets</b> you and allies in the area.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You recall memories of hedonistic rites to send yourself into an
          infectious frenzy, dancing and howling wildly to encourage your
          companions to join in. You and your allies gain a +1 status bonus to
          saving throws against mental effects while in the area. Whenever
          someone benefiting from this bonus critically succeeds at a saving
          throw against an enemy’s mental effect, its revelry increases,
          granting it a +1 status bonus to attack rolls and damage rolls for 1
          round.
        </p>
        <p>
          <b>Heightened (4th)</b> The emanation’s radius is 10 feet, and the
          status bonus to saves is +2.
        </p>
        <p>
          <b>Heightened (7th)</b> The emanation’s radius is 15 feet, and the
          status bonus to saves is +3.
        </p>
      </>
    ),
  },
  {
    id: 16,
    level: 1,
    name: "Healer's Blessing",
    action: "one_action",
    tags: ["uncommon", "cleric", "necromancy"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> healing.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 willing living creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Your words bless a creature with an enhanced connection to positive
          energy. When the target regains Hit Points from a healing spell, it
          regains 2 additional Hit Points.
        </p>
        <p>
          The target regains additional Hit Points from healer’s blessing only
          the first time it regains HP from a given healing spell, so a spell
          that heals the creature repeatedly over a duration would restore
          additional Hit Points only once.
        </p>
        <p>
          <b>Heightened (+1)</b> The additional healing increases by 2 HP.
        </p>
      </>
    ),
  },
  {
    id: 17,
    level: 1,
    name: "Hollow heart",
    action: "two_action",
    tags: ["rare", "cleric", "emotion", "enchantement", "fear", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> ambition (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          You stoke the target’s ambition beyond reason, until it believes no
          one is capable of helping it, or that others aren’t to be trusted. The
          target attempts a Will saving throw.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target treats no other creature as an ally for 1
          round.
        </p>
        <p>
          <b>Failure</b> The target treats no other creature as an ally for 3
          rounds.
        </p>
        <p>
          <b>Critical Failure</b> As failure, and the target is frightened 1 as
          it realizes it can’t rely on anyone but itself.
        </p>
      </>
    ),
  },
  {
    id: 18,
    level: 1,
    name: "Hurtling stone",
    action: "one_action",
    tags: ["uncommon", "attack", "cleric", "earth", "evocation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> earth.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
          <br />
          You evoke a magical stone and throw it, with your god’s presence
          guiding your aim. Make a spell attack roll against the target. The
          stone deals bludgeoning damage equal to 1d6 plus your Strength
          modifier.
        </p>
        <p>
          <b>Critical Success</b> The stone deals double damage.
        </p>
        <p>
          <b>Success</b> The stone deals full damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The stone’s damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 19,
    level: 1,
    name: "Magic's vessel",
    action: "one_action",
    tags: ["uncommon", "cleric", "enchantement"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> magic.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute
          </span>
          <br />A creature becomes a receptacle for pure magical energy sent by
          your deity. The target gains a +1 status bonus to saving throws. Each
          time you Cast a Spell from your spell slots, you automatically Sustain
          this Spell and grant its target resistance to damage from spells until
          the start of your next turn. This resistance is equal to the level of
          the spell you cast.
        </p>
      </>
    ),
  },
  {
    id: 20,
    level: 1,
    name: "Moonbeam",
    action: "one_action",
    tags: ["uncommon", "attack", "cleric", "evocation", "fire", "light"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> moon.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 120 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
          <br />
          You shine a ray of moonlight. Make a spell attack roll. The beam of
          light deals 1d6 fire damage. Moonbeam deals silver damage for the
          purposes of weaknesses, resistances, and the like.
        </p>
        <p>
          <b>Critical Success</b> The beam deals double damage, and the target
          is dazzled for 1 minute.
        </p>
        <p>
          <b>Success</b> The beam deals full damage, and the target is dazzled
          for 1 round.
        </p>
        <p>
          <b>Heightened (+1)</b> The ray’s damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 21,
    level: 1,
    name: "Overstuff",
    action: "two_action",
    tags: ["uncommon", "cleric", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> indulgence.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 living creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
          <br />
          Huge amounts of food and drink fill the target. It receives a full
          meal’s worth of nourishment and must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target is sickened 1, but if it spends an action to
          end the condition, it succeeds automatically.
        </p>
        <p>
          <b>Failure</b> The target is sickened 1.
        </p>
        <p>
          <b>Critical Failure</b> The target is sickened 2.
        </p>
        <p>
          A target sickened by this spell takes a –10-foot status penalty to its
          Speed until it’s no longer sickened.
        </p>
      </>
    ),
  },
  {
    id: 22,
    level: 1,
    name: "Perfected Mind",
    action: "one_action",
    tags: ["uncommon", "abjuration", "cleric"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> perfection.
          <br />
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
          <br />
          You meditate upon perfection to remove all distractions from your
          mind. Attempt a new Will save against one mental effect currently
          affecting you that required a Will save. Use the result of this new
          save to determine the outcome of the mental effect, unless the new
          save would have a worse result than the original save, in which case
          nothing happens. You can use perfected mind against a given effect
          only once.
        </p>
      </>
    ),
  },
  {
    id: 23,
    level: 1,
    name: "Practice makes perfect",
    action: "reaction",
    tags: ["uncommon", "cleric", "divination"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Fires of the Haunted City</i>
          <br />
          <br />
          <b>Domain</b> toil.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Trigger</b> You or an ally within range fails a skill check for a
          skill in which you or they are trained.
          <br />
          <span className="frequency">
            <b>Range</b> 30 feet.
          </span>
          <br />
          The target gains a +2 status bonus to the triggering check, or a +3
          bonus if the target has master or better proficiency in the skill.
          This bonus can change the outcome of the target’s check.
        </p>
      </>
    ),
  },
  {
    id: 24,
    level: 1,
    name: "Protector's sacrifice",
    action: "reaction",
    tags: ["uncommon", "abjuration", "cleric"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> protection.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Trigger</b> An ally within 30 feet takes damage.
          <br />
          <span className="frequency">
            <b>Range</b> 30 feet.
          </span>
          <br />
          You protect your ally by suffering in their stead. Reduce the damage
          the triggering ally would take by 3. You redirect this damage to
          yourself, but your immunities, weaknesses, resistances and so on do
          not apply.
        </p>
        <p>
          You aren’t subject to any conditions or other effects of whatever
          damaged your ally (such as poison from a venomous bite). Your ally is
          still subject to those effects even if you redirect all of the
          triggering damage to yourself.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage you redirect increases by 3.
        </p>
      </>
    ),
  },
  {
    id: 25,
    level: 1,
    name: "Pushing gust",
    action: "reaction",
    tags: ["uncommon", "ari", "cleric", "conjuration"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> air.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 500 feet.
          <br />
          <b>Targets</b> 1 creature
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
          <br />
          Giving the air a push, you buffet the target with a powerful gust of
          wind; it must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target is pushed 5 feet away from you.
        </p>
        <p>
          <b>Failure</b> The target is pushed 10 feet away from you.
        </p>
        <p>
          <b>Critical Failure</b> The target is pushed 10 feet away from you and
          knocked prone.
        </p>
      </>
    ),
  },
  {
    id: 26,
    level: 1,
    name: "Read Fate",
    action: "reaction",
    tags: ["uncommon", "ari", "cleric", "conjuration"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> fate.
          <br />
          <b>Cast</b> minute (material, somatic, verbal).
          <br />
          <b>Range</b> 10 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature other than you.
          </span>
          <br />
          You attempt to learn more about the target’s fate in the short term,
          usually within the next day for most prosaic creatures, or the next
          hour or less for someone likely to have multiple rapid experiences,
          such as someone actively adventuring.
        </p>
        <p>
          You learn a single enigmatic word connected to the creature’s fate in
          that time frame. Fate is notoriously inscrutable, and the word isn’t
          necessarily meant to be taken at face value, so the meaning is often
          clear only in hindsight. The GM rolls a secret DC 6 flat check. If the
          creature’s fate is too uncertain, or on a failed flat check, the spell
          yields the word “inconclusive.” Either way, the creature is then
          temporarily immune for 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 27,
    level: 1,
    name: "Savor the sting",
    action: "one_action",
    tags: ["uncommon", "air", "cleric", "conjuration"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> pain.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Will.
          </span>
          <br />
          You inflict pain upon the target and revel in their anguish. This
          deals 1d4 mental damage and 1d4 persistent mental damage; the target
          must attempt a Will save. As long as the target is taking persistent
          damage from this spell, you gain a +1 status bonus to attack rolls and
          skill checks against the target.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes half damage and no persistent damage.
        </p>
        <p>
          <b>Failure</b> The target takes full initial and persistent damage.
        </p>
        <p>
          <b>Critical Failure</b> The target takes double initial and persistent
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The initial damage increases by 1d4 and the
          persistent damage increases by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 28,
    level: 1,
    name: "Scholarly recollection",
    action: "reaction",
    tags: ["uncommon", "cleric", "divination", "fortune"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> knowledge.
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Trigger</b> You attempt a Perception check to Seek, or you
            attempt a skill check to Recall Knowledge with a skill you’re
            trained in.
          </span>
          <br />
          Speaking a short prayer as you gather your thoughts, you’re blessed to
          find that your deity gave you just the right bit of information for
          your situation. Roll the triggering check twice and use the better
          result.
        </p>
      </>
    ),
  },
  {
    id: 29,
    level: 1,
    name: "Soothing words",
    action: "reaction",
    tags: ["uncommon", "cleric", "emotion", "enchantement", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> family.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 ally.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You attempt to calm the target by uttering soothing words in a calm
          and even tone. The target gains a +1 status bonus to Will saving
          throws. This bonus increases to +2 against emotion effects.
        </p>
        <p>
          In addition, when you Cast this Spell, you can attempt to counteract
          one emotion effect on the target.
        </p>
        <p>
          <b>Heightened (5th)</b> The bonus to saves increases to +2, or +3
          against emotion effects.
        </p>
      </>
    ),
  },
  {
    id: 30,
    level: 1,
    name: "Splash of art",
    action: "reaction",
    tags: ["uncommon", "cleric", "illusion", "visual"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Domain</b> creation.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Area</b> 5-foot burst.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />A deluge of colorful illusory paint, tools, or other symbols of
          art and artisanship drift down in the area. Roll 1d4 to determine the
          color of the illusion. Each creature in the area must attempt a Will
          save. A creature is unaffected on a success. On a failure or critical
          failure, the creature takes the results listed on the table relevant
          to the color.
        </p>
        <table>
          <thead>
            <tr>
              <th>1d4</th>
              <th>Color</th>
              <th>Failure</th>
              <th>Critical Failure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>White</td>
              <td>Dazzled 1 round</td>
              <td>Dazzled 1 minute</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Red</td>
              <td>Enfeebled 1 for 1 round</td>
              <td>Enfeebled 2 for 1 round</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Yellow</td>
              <td>Frightened 1</td>
              <td> Frightened 2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Blue</td>
              <td>Clumsy 1 for 1 round</td>
              <td>Clumsy 2 for 1 round</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 31,
    level: 1,
    name: "String of fate",
    action: "one_action",
    tags: ["rare", "abjuration", "cleric", "fortune"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> fate (apocryphal).
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> you and 1 ally.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          You bond yourself to a cherished friend, vowing to share their fate
          for good or for ill. Whenever an effect would require both you and the
          target to attempt a saving throw, if one of you succeeds at your
          saving throw and the other critically fails, you can choose to both
          fail instead. You and the ally must agree to fail; otherwise, use your
          normal save results instead.
        </p>
      </>
    ),
  },
  {
    id: 32,
    level: 1,
    name: "Sudden shift",
    action: "reaction",
    tags: ["uncommon", "abjuration", "cleric", "illusion"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> trickery.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Trigger</b> An enemy misses you with a melee attack.
          <br />
          <span className="frequency">
            <b>Duration</b> until the end of your next turn.
          </span>
          <br />
          You swiftly move from a dangerous spot and veil yourself. You Step and
          become concealed.
        </p>
      </>
    ),
  },
  {
    id: 33,
    level: 1,
    name: "Sweet dream",
    action: "three_action",
    tags: [
      "uncommon",
      "auditory",
      "cleric",
      "enchantment",
      "linguist",
      "mental",
      "sleep",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> dreams.
          <br />
          <b>Cast</b> material, somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 willing creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
          <br />
          With soothing song or tales, you lull the target into an enchanting
          dream. When you cast the spell, the target falls unconscious if it
          wasn’t already. While unconscious, it experiences a dream of your
          choice. If it sleeps for at least 1 minute, it gains the benefit of
          the dream for the remainder of the spell’s duration.
        </p>
        <ul>
          <li>
            <b>Dream of Insight</b> +1 status bonus to Intelligence-based skill
            checks
          </li>
          <li>
            <b>Dream of Glamour</b> +1 status bonus to Charisma-based skill
            checks
          </li>
          <li>
            <b>Dream of Voyaging</b> +5-foot status bonus to Speed
          </li>
        </ul>
        <p>
          If you Cast this Spell again, the effects of any previous sweet dream
          you cast end.
        </p>
      </>
    ),
  },
  {
    id: 34,
    level: 1,
    name: "Tidal surge",
    action: "one_action",
    tags: ["uncommon", "cleric", "evocation", "water"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> dreams.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
          <br />
          You call forth a tremendous wave to move the target either in a body
          of water or on the ground. The target must attempt a Fortitude save.
        </p>
        <p>
          <b>Failure</b> You move the target 5 feet in any direction along the
          ground or 10 feet in any direction through a body of water.
        </p>
        <p>
          <b>Critical Failure</b> You move the target up to 10 feet in any
          direction along the ground or 20 feet in any direction through a body
          of water.
        </p>
      </>
    ),
  },
  {
    id: 35,
    level: 1,
    name: "Touch of obedience",
    action: "one_action",
    tags: ["uncommon", "cleric", "enchantement", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> tyranny.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 living creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          Your imperious touch erodes the target’s willpower, making it easier
          to control. The target attempts a Will save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target is stupefied 1 until the end of your current
          turn.
        </p>
        <p>
          <b>Failure</b> The target is stupefied 1 until the end of your next
          turn.
        </p>
        <p>
          <b>Critical Failure</b> The target is stupefied 1 for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 36,
    level: 1,
    name: "Touch of undeath",
    action: "one_action",
    tags: ["uncommon", "cleric", "necromancy", "negative"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> tyranny.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 living creature.
          <br />
          <span className="frequency">
            <b>Duration</b> Fortitude.
          </span>
          <br />
          You attack the target’s life force with undeath, dealing 1d6 negative
          damage. The target must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes half damage.
        </p>
        <p>
          <b>Failure</b> The target takes full damage, and positive effects heal
          it only half as much as normal for 1 round.
        </p>
        <p>
          <b>Critical Failure</b> The target takes double damage, and positive
          effects heal it only half as much as normal for 1 minute.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 37,
    level: 1,
    name: "Unimpeded stride",
    action: "one_action",
    tags: ["uncommon", "cleric", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> freedom.
          <br />
          <span className="frequency">
            <b>Cast</b> somatic.
          </span>
          <br />
          Nothing can hold you in place. You immediately escape from every
          magical effect that has you immobilized or grabbed unless the effect
          is of a higher level than your unimpeded stride spell. You then
          Stride. During this movement, you ignore difficult terrain and any
          circumstance or status penalties to your Speed.
        </p>
      </>
    ),
  },
  {
    id: 38,
    level: 1,
    name: "Veil of confidence",
    action: "one_action",
    tags: ["uncommon", "cleric", "enchantement", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> confidence.
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You surround yourself in a veil of confidence. You reduce your current
          frightened condition by 1, and whenever you would become frightened
          during the duration, reduce the amount by 1.
        </p>
        <p>
          If you critically fail a save against fear, veil of confidence ends
          immediately, and you increase any frightened condition you gain from
          the critical failure by 1 instead of decreasing it.
        </p>
      </>
    ),
  },
  {
    id: 39,
    level: 1,
    name: "Veil of confidence",
    action: "one_action",
    tags: ["uncommon", "cleric", "morph", "plant", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> nature.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Your body sprouts a coat of brambly thorns that harm those that strike
          you and thrive on life magic. Adjacent creatures that hit you with a
          melee attack, as well as creatures that hit you with unarmed attacks,
          take 1 piercing damage each time they do. Anytime you cast a positive
          spell, the damage from your thorns increases to 1d6 until the start of
          your next turn.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1, or 1d6 after you
          cast a positive spell.
        </p>
      </>
    ),
  },
  {
    id: 40,
    level: 1,
    name: "Victory cry",
    action: "reaction",
    tags: ["uncommon", "cleric", "evocation", "sonic"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> might (apocryphal).
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> An ally within range critically succeeds at a melee
          Strike.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> the triggering ally.
          </span>
          <br />
          Your body sprouts a coat of brambly thorns that harm those that strike
          you and thrive on life magic. Adjacent creatures that hit you with a
          melee attack, as well as creatures that hit you with unarmed attacks,
          take 1 piercing damage each time they do. Anytime you cast a positive
          spell, the damage from your thorns increases to 1d6 until the start of
          your next turn.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1, or 1d6 after you
          cast a positive spell.
        </p>
      </>
    ),
  },
  {
    id: 41,
    level: 1,
    name: "Waking nightmare",
    action: "two_action",
    tags: ["uncommon", "cleric", "emotion", "enchantement", "fear", "metal"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> nightmares.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          You fill the creature’s mind with a terrifying vision out of its
          nightmares. The target must attempt a Will save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target is frightened 1.
        </p>
        <p>
          <b>Failure</b> The target is frightened 2.
        </p>
        <p>
          <b>Critical Failure</b> The target is frightened 3.
        </p>
        <p>
          If the target is unconscious when you Cast this Spell on it, it
          immediately wakes up before attempting its save, and if it fails its
          save, it gains the fleeing condition for 1 round in addition to the
          effects noted above.
        </p>
      </>
    ),
  },
  {
    id: 42,
    level: 1,
    name: "Weapon surge",
    action: "one_action",
    tags: ["uncommon", "cleric", "evocation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> zeal.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b>touch.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 weapon you’re wielding.
          </span>
          <br />
          Holding your weapon aloft, you fill it with divine energy. On your
          next Strike with that weapon before the start of your next turn, you
          gain a +1 status bonus to the attack roll and the weapon deals an
          additional die of damage. If the weapon has a striking rune, this
          instead increases the number of dice from the striking rune by 1 (to a
          maximum of 3 extra weapon dice).
        </p>
        <p>
          If the target weapon leaves your possession, weapon surge immediately
          ends.
        </p>
      </>
    ),
  },
  {
    id: 43,
    level: 1,
    name: "World of truth",
    action: "one_action",
    tags: ["uncommon", "cleric", "divination"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> truth.
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          You speak a statement you believe to be true and that is free of any
          attempt to deceive through twisting words, omission, and so on. The
          statement must be 25 words or fewer. A symbol of your deity glows
          above your head, and anyone who sees you and hears your statement
          knows that you believe it to be true.
        </p>
        <p>Each time you Sustain this Spell, you can repeat this effect.</p>
      </>
    ),
  },
  {
    id: 44,
    level: 4,
    name: "Artistic flourish",
    action: "two_action",
    tags: ["uncommon", "cleric", "transmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> creation.
          <br />
          <b>Cast</b> material, somatic.
          <br />
          <b>Range</b> 15 feet.
          <br />
          <b>Targets</b> 1 item or work of art that fits entirely within the
          range.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
          <br />
          You transform the target to make it match your artisanal and artistic
          vision. If you have expert proficiency in Crafting, the item grants a
          +1 item bonus to attack rolls if it’s a weapon or skill checks if it’s
          a skill tool. The target is a beautiful and impressive piece for its
          new quality, but the effect is obviously temporary, so its monetary
          value doesn’t change.
        </p>
        <p>
          When you cast this spell, any previous artistic flourish you had cast
          ends.
        </p>
        <p>
          <b>Heightened (7th)</b> If you have master proficiency in Crafting,
          the item grants a +2 item bonus instead.
        </p>
        <p>
          <b>Heightened (10th)</b> If you have legendary proficiency in
          Crafting, the item grants a +3 item bonus instead.
        </p>
      </>
    ),
  },
  {
    id: 45,
    level: 4,
    name: "Captivating Adoration",
    action: "two_action",
    tags: ["uncommon", "cleric", "emtoion", "enchantement", "mental", "visual"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> passion.
          <br />
          <b>Cast</b> material, somatic.
          <br />
          <b>Area</b> 15-foot emanation.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You become intensely entrancing, and creatures are distracted by you
          as long as they remain within the area. You can exclude any creatures
          you choose from the effects.
        </p>
        <p>
          When a creature enters the area for the first time, it must attempt a
          Will saving throw. If a creature leaves and reenters, it uses the
          results of its original save.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected and temporarily
          immune for 1 hour.
        </p>
        <p>
          <b>Success</b> The creature is fascinated with you for its next
          action, then is temporarily immune for 1 hour.
        </p>
        <p>
          <b>Failure</b> The creature is fascinated with you.
        </p>
        <p>
          <b>Critical Failure</b> The creature is fascinated with you, and its
          attitude toward you improves by one step.
        </p>
        <p>
          <b>Heightened (+1)</b> Increase the size of the emanation by 15 feet.
        </p>
      </>
    ),
  },
  {
    id: 46,
    level: 4,
    name: "Commanding lash",
    action: "one_action",
    tags: ["uncommon", "cleric", "enchantement", "incapacitation", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> tyranny.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Requirements</b> Your most recent action dealt damage to a target.
          <br />
          <b>Range</b> 100 feet.
          <br />
          <b>Targets</b> A creature you dealt damage to on your most recent
          action.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> until the end of the target’s next turn.
          </span>
          <br />
          With the threat of more pain, you compel a creature you’ve recently
          harmed. You issue a command to the target, with the effects of the
          spell command.
        </p>
      </>
    ),
  },
  {
    id: 47,
    level: 4,
    name: "Competitive edge",
    action: "one_action",
    tags: ["uncommon", "cleric", "emotion", "enchantement", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> ambition.
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          Your competitiveness drives you to prove yourself against the
          opposition. You gain a +1 status bonus to attack rolls and skill
          checks. If an enemy within 20 feet critically succeeds at an attack
          roll or skill check, your status bonus increases to +3 attack rolls or
          that specific skill check (whichever the foe critically succeeded at)
          for 1 round.
        </p>
        <p>
          <b>Heightened (7th)</b> Increase the base bonus to +2 and the
          increased bonus after an enemy critically succeeds to +4.
        </p>
      </>
    ),
  },
  {
    id: 48,
    level: 4,
    name: "Darkened eyes",
    action: "two_action",
    tags: ["uncommon", "cleric", "darkness", "tansmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> darkness.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Fortitude.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          You infuse a creature’s vision with darkness. After attempting its
          save, the target becomes temporarily immune for 24 hours.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target’s darkvision or low-light vision is
          suppressed for 1 round.
        </p>
        <p>
          <b>Failure</b> As success, but the duration is 1 minute.
        </p>
        <p>
          <b>Critical Failure</b> As success, but the duration is 1 minute, and
          the target is also blinded for the duration. It can attempt a new save
          at the end of each of its turns. If it succeeds, it’s no longer
          blinded, but its darkvision or low-light vision remains suppressed.
        </p>
      </>
    ),
  },
  {
    id: 49,
    level: 4,
    name: "Delusional pride",
    action: "two_action",
    tags: ["uncommon", "cleric", "emotion", "enchantement", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> confidence.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          You make the target overconfident, leading it to ascribe failure to
          external factors. If the target fails at an attack roll or skill
          check, it takes a –1 status penalty to attack rolls and skill checks
          until the end of its turn (or the end of its next turn, if it
          attempted the roll outside its turn). If the creature fails a second
          time while taking this penalty, the penalty increases to –2. The
          duration depends on the target’s Will save. After attempting its save,
          the creature becomes temporarily immune for 24 hours.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The duration is 1 round.
        </p>
        <p>
          <b>Failure</b> The duration is 10 minutes.
        </p>
        <p>
          <b>Critical Failure</b> The duration is 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 50,
    level: 4,
    name: "Destructive aura",
    action: "two_action",
    tags: ["uncommon", "cleric", "emotion", "enchantement", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> destruction.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 15-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Swirling sands of divine devastation surround you, weakening the
          defenses of all they touch. Reduce the resistances of yourself and
          creatures in the area by 2.
        </p>
        <p>
          <b>Heightened (+2)</b> Reduce the resistances by an additional 2.
        </p>
      </>
    ),
  },
  {
    id: 51,
    level: 4,
    name: "Disperse into air",
    action: "reaction",
    tags: ["uncommon", "air", "cleric", "polymorph", "transmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> air.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Trigger</b> You take damage from an enemy or a hazard.
          </span>
          <br />
          After taking the triggering damage, you transform into air. Until the
          end of the current turn, you can’t be attacked or targeted, you don’t
          take up space, you can’t act, and any auras or emanations you have are
          suppressed. At the end of the turn, you re-form in any space you can
          occupy within 15 feet of where you were when you dispersed. Any auras
          or emanations you had are restored as long as their duration didn’t
          run out while you were dispersed.
        </p>
      </>
    ),
  },
  {
    id: 52,
    level: 4,
    name: "Downpour",
    action: "two_action",
    tags: ["uncommon", "cleric", "evocation", "water"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> water.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 120 feet.
          <br />
          <b>Area</b> 30-foot burst.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You call forth a torrential downpour, which extinguishes non-magical
          flames. Creatures in the area are concealed and gain fire resistance
          10. Creatures outside the area are concealed to those inside the area.
          Creatures with weakness to water that end their turns in the area take
          damage equal to their weakness.
        </p>
        <p>
          <b>Heightened (+1)</b> The fire resistance increases by 2.
        </p>
      </>
    ),
  },
  {
    id: 53,
    level: 4,
    name: "Dreamer's call",
    action: "two_action",
    tags: ["uncommon", "cleric", "enchantement", "incapacitation", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> dreams.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> until the end of the target’s next turn.
          </span>
          <br />
          The target becomes distracted and suggestible, inundated by vivid
          daydreams.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target’s attention wavers. It becomes flat-footed
          and fascinated by its daydreams.
        </p>
        <p>
          <b>Failure</b> As success, except that you appear in the dream and
          give a suggestion. This can be to approach you, run away (as if it had
          the fleeing condition), Release what it’s holding, Drop Prone, or
          stand in place. The creature follows this course of action as its
          first action after you Cast the Spell.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the target follows the course
          of action for as many actions as possible for the spell’s duration,
          and it does nothing else.
        </p>
      </>
    ),
  },
  {
    id: 54,
    level: 4,
    name: "Enduring might",
    action: "reaction",
    tags: ["uncommon", "abjuration", "cleric"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> might.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Trigger</b> An attack or effect would deal damage to you.
          </span>
          <br />
          Your own might mingles with divine power to protect you. You gain
          resistance equal to 8 plus your Strength modifier against all damage
          from the triggering attack or effect.
        </p>
        <p>
          <b>Heightened (+1)</b> The resistance increases by 2.
        </p>
      </>
    ),
  },
  {
    id: 55,
    level: 4,
    name: "Enduring might",
    action: "two_action",
    tags: ["uncommon", "cleric", "necromancy", "positive"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> death.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 30-foot cone.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> basic Fortitude.
          </span>
          <br />A massive deluge of life energy causes the undead to fall apart.
          Each undead creature in the area takes 4d12 positive damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1d12.
        </p>
      </>
    ),
  },
  {
    id: 56,
    level: 4,
    name: "Euphoric renewal",
    action: "two_action",
    tags: ["rare", "cleric", "necromancy"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> death (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
          <br />
          You view death not as an ending but a beginning, and you delight in
          dancing on its edge. Each time you gain the dying condition and then
          regain consciousness while under the effect of euphoric renewal, you
          gain three benefits.
        </p>
        <ul>
          <li>
            You’re quickened on your next turn. You can use the extra action
            only to Stand.
          </li>
          <li>You gain a +1 circumstance bonus to saves for 1 minute.</li>
          <li>You gain 8 temporary Hit Points that last for 1 minute.</li>
        </ul>
        <p>
          <b>Heightened (+1)</b> The number of temporary HP increases by 2.
        </p>
      </>
    ),
  },
  {
    id: 57,
    level: 4,
    name: "Flame barrier",
    action: "reaction",
    tags: ["rare", "abjuration", "cleric"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> fire.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> An effect would deal fire damage to either you or an
          ally within range.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> the creature that would take fire damage.
          </span>
          <br />
          You swiftly deflect incoming flames. The target gains fire resistance
          15 against the triggering effect.
        </p>
        <p>
          <b>Heightened (+2)</b> The resistance increases by 5.
        </p>
      </>
    ),
  },
  {
    id: 58,
    level: 4,
    name: "Glimpse of the truth",
    action: "reaction",
    tags: ["rare", "cleric", "divination", "revelation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> truth.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Area</b> 30-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Divine insight lets you see things as they truly are. The GM attempts
          a secret counteract check against each illusion that is at least
          partially within the area. Instead of counteracting the illusion, you
          see through it (for instance, if the check succeeds against an
          illusory disguise spell, you see the creature’s true form but illusory
          disguise doesn’t end).
        </p>
        <p>
          The area moves with you for the duration of the spell, and the GM
          attempts a secret counteract check each time a new illusion is within
          the area.
        </p>
        <p>
          <b>Heightened (7th)</b> You can allow everyone to see through
          illusions you succeed against, not just yourself.
        </p>
      </>
    ),
  },
  {
    id: 59,
    level: 4,
    name: "Inevitable destination",
    action: "two_action",
    tags: ["rare", "cleric", "conjuration"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark archive</i>
          <br />
          <br />
          <b>Domain</b> travel (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> you and 1 enemy.
          <br />
          <span className="frequency">
            <b>Duration</b> 2 rounds.
          </span>
          <br />
          You twist the paths of the target, ensuring that each one leads to
          you. The target attempts a Will saving throw.
        </p>
        <p>
          <b>Critical Success</b> The spell has no effect.
        </p>
        <p>
          <b>Success</b> Your pull hampers the target’s footsteps. It takes a
          –10-foot circumstance penalty to its Speeds until the end of its next
          turn.
        </p>
        <p>
          <b>Failure</b> The target can’t move any farther from you than it was
          when you Cast the Spell, though it can move in such a way that it
          maintains an equal distance. If you move farther away from the target
          than the initial distance, the spell ends. The targeted foe can
          attempt to Escape against your spell DC. If it succeeds, the spell
          ends.
        </p>
        <p>
          <b>Critical Success</b> As failure, plus the target is pulled 10 feet
          closer to you and falls prone, tripping in its haste to move toward
          you.
        </p>
      </>
    ),
  },
  {
    id: 60,
    level: 4,
    name: "Isolation",
    action: "two_action",
    tags: ["rare", "cleric", "illusion"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark archive</i>
          <br />
          <br />
          <b>Domain</b> darkness (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 3 rounds.
          </span>
          <br />
          You summon a tangible manifestation of loneliness to cloak the target
          from view as surely as if it were wreathed in darkness. The target
          attempts a Will saving throw.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target becomes invisible, but only to its allies.
          Any creature not allied with the target can see it normally. Effects
          such as see invisibility enable an ally to see the target. The
          target’s allies still know the target is present and can still see all
          the effects of the target’s actions.
        </p>
        <p>
          <b>Failure</b> As success, except the target also becomes inaudible to
          its allies and imperceptible to them through any other senses. ends.
        </p>
      </>
    ),
  },
  {
    id: 61,
    level: 4,
    name: "Know the enemy",
    action: "reaction",
    tags: ["uncommon", "cleric", "divination", "fortune"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> knowledge.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Trigger</b> You roll initiative and can see a creature, you
            succeed at an attack roll against a creature, or a creature fails a
            saving throw against one of your spells.
          </span>
          <br />
          You quickly remind yourself of useful information. Use a Recall
          Knowledge action, rolling the appropriate skill check to identify the
          triggering creature’s abilities. You can roll your check twice and use
          the better result.
        </p>
      </>
    ),
  },
  {
    id: 62,
    level: 4,
    name: "Localized quake",
    action: "two_action",
    tags: ["uncommon", "cleric", "earth", "transmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> knowledge.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 15-foot emanation or 15-foot cone.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Reflex.
          </span>
          <br />
          You shake the earth, toppling nearby creatures. Choose whether the
          spell’s area is a 15-foot emanation or a 15-foot cone when you cast
          it. Each creature in the area standing on solid ground may take 4d6
          bludgeoning damage and must attempt a Reflex saving throw.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and falls prone.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and falls
          prone.
        </p>
        <p>
          <b>Heightened (+1)</b> Increase the damage by 2d6.
        </p>
      </>
    ),
  },
  {
    id: 63,
    level: 4,
    name: "Lucky break",
    action: "reaction",
    tags: ["uncommon", "cleric", "divination", "fortune"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> luck.
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Trigger</b> You fail (but don’t critically fail) a saving throw.
          </span>
          <br />
          Reroll the saving throw and use the better result. You then become
          temporarily immune for 10 minutes.
        </p>
      </>
    ),
  },
  {
    id: 64,
    level: 4,
    name: "Malignant sustenance",
    action: "two_action",
    tags: ["uncommon", "cleric", "necromancy", "negative"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> undeath.
          <br />
          <b>Cast</b> somatic, verbal .
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 willing undead creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You embed a seed of negative energy in an undead creature, restoring
          its unnatural vigor. The target gains fast healing 7. This healing
          comes from negative energy, so it heals the undead rather than
          damaging it.
        </p>
        <p>
          <b>Heightened (+1)</b> The fast healing increases by 2.
        </p>
      </>
    ),
  },
  {
    id: 65,
    level: 4,
    name: "Mystic beacon",
    action: "one_action",
    tags: ["uncommon", "cleric", "evocation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> magic.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 willing creature.
          <br />
          <span className="frequency">
            <b>Duration</b> until the start of your next turn.
          </span>
          <br />
          The next damaging or healing spell the target casts before the start
          of your next turn deals damage or restores Hit Points as if the spell
          were heightened 1 level higher than its actual level. The spell
          otherwise functions at its actual level. Once the target casts the
          spell, mystic beacon ends.
        </p>
      </>
    ),
  },
  {
    id: 66,
    level: 4,
    name: "Nature's bounty",
    action: "one_action",
    tags: ["uncommon", "cleric", "conjuration", "plant", "positive"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> nature.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have a free hand.
          </span>
          <br />A palm-sized raw fruit or vegetable appears in your open hand.
          You choose the specific type of food. A creature can consume the food
          with an Interact action to regain 3d10+12 Hit Points and be nourished
          as if it had eaten a meal. If uneaten, the food rots and crumbles to
          dust after 1 minute.
        </p>
        <p>
          <b>Heightened (+1)</b> The Hit Points restored increase by 6.
        </p>
      </>
    ),
  },
  {
    id: 67,
    level: 4,
    name: "Perfected form",
    action: "reaction",
    tags: ["uncommon", "abjuration", "cleric", "fortune"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> perfection.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Trigger</b> You fail a saving throw against a morph,
            petrification, or polymorph effect.
          </span>
          <br />
          Reroll the saving throw and use the better result.
        </p>
      </>
    ),
  },
  {
    id: 68,
    level: 4,
    name: "Positive luminance",
    action: "one_action",
    tags: ["uncommon", "cleric", "light", "necromancy", "positive"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> sun.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Drawing life force into yourself, you become a beacon of positive
          energy. You glow with bright light in a 10-foot emanation, and you
          gain an internal pool of light called a luminance reservoir, which
          begins with a value of 4. At the start of each of your turns, you can
          use a free action to increase the luminance reservoir by 4. If you do,
          the radius of your light increases by 10 feet.
        </p>
        <p>
          If an undead creature damages you with an attack or spell while it’s
          within the area of your light, that creature takes positive damage
          equal to half your luminance reservoir value. It takes this damage
          only the first time it damages you in a round.
        </p>
        <p>
          You can Dismiss this Spell. When you do, you can target a creature
          within your light and direct the positive energy into it. The target
          must be a willing living creature or an undead creature. This heals a
          living target or damages an undead target by an amount equal to your
          luminance reservoir’s value.
        </p>
        <p>
          When you cast <b>positive luminance</b>, any other{" "}
          <b>positive luminance</b> spell you already had in effect ends.
        </p>
        <p>
          <b>Heightened (+1)</b> Both the initial value of your luminance
          reservoir and the amount you gain each turn increase by 1.
        </p>
      </>
    ),
  },
  {
    id: 69,
    level: 4,
    name: "Precious metals",
    action: "one_action",
    tags: ["uncommon", "cleric", "transmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> wealth.
          <br />
          <b>Cast</b> material.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 metal weapon, up to 10 pieces of metal or
          metal-tipped ammunition, 1 suit of metal armor, or up to 1 bulk of
          metal material (such as coins).
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Your deity blesses base metals to transform them into precious
          materials. The target item transforms from its normal metal into cold
          iron, copper, gold, iron, silver, or steel (the details for these
          metals are found in the Materials section). An item transmuted in this
          way deals damage according to its new material. For example, a steel
          sword transmuted to cold iron would deal additional damage to a
          creature with a weakness to cold iron.
        </p>
        <p>
          This change is clearly magical and temporary, so the item’s monetary
          value doesn’t change; you couldn’t transmute copper coins to gold and
          use those coins to purchase something or as a cost for a spell.
        </p>
        <p>
          <b>Heightened (8th)</b> Add adamantine and mithral to the list of
          metals you can transform the item into.
        </p>
      </>
    ),
  },
  {
    id: 70,
    level: 4,
    name: "Protector's sphere",
    action: "one_action",
    tags: ["uncommon", "abjuration", "cleric", "aura"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> protection.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 15-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />A protective aura emanates out from you, safeguarding you and
          your allies. You gain resistance 3 to all damage. Your allies also
          gain this resistance while they are within the area.
        </p>
        <p>
          <b>Heightened (+1)</b> The resistance increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 71,
    level: 4,
    name: "Pulse of the city",
    action: "three_action",
    tags: ["uncommon", "cleric", "divination", "scrying"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> cities.
          <br />
          <b>Cast</b> material, somatic, verbal.
          <br />
          <span className="frequency">
            <b>Range</b> 25 miles.
          </span>
          <br />
          You tap into the zeitgeist of the nearest settlement in range (if
          any). You learn the name of the settlement, and you can utter a
          special word to learn a brief summary of one significant event
          happening in the settlement. Choose one of the following words, which
          indicates the type of people involved and type of event you learn
          about.
        </p>
        <ul>
          <li>
            <b>Wardens</b> city guards, barristers, and judges (criminal
            reports, busts, changes in routines, legal trials)
          </li>
          <li>
            <b>Titles</b> nobles and politicians (high society weddings, elite
            soirees, political rallies)
          </li>
          <li>
            <b>Masses</b> common folk and merchants (gathering mobs, major
            sales)
          </li>
        </ul>
        <p>
          When uttering your word, you can exclude events you already know
          about, whether you know about them from this spell or from other
          experiences. If you cast pulse of the city again within 24 hours, you
          can say “echo” instead of another word to get an update on the event
          you learned about the last time you Cast the Spell.
        </p>
        <p>
          <b>Pulse of the city</b> reveals only publicly available or observable
          information. You never learn clandestine movements or other details
          people are specifically trying to hide. The spell is also notoriously
          bad at overcoming magic meant to avoid detection; it automatically
          fails to reveal information about events involving creatures, places,
          or objects affected by spells that could prevent or counteract{" "}
          <b>pulse of the city</b> (such as <b>nondetection</b>).
        </p>
        <p>
          <b>Heightened (5th)</b> The range increases to 100 miles.
        </p>
      </>
    ),
  },
  {
    id: 72,
    level: 4,
    name: "Purifying veil",
    action: "two_action",
    tags: ["rare", "cleric", "evocation", "good", "water"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> water (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> 1 Large or smaller creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Drawing on the purifying powers of water, you call forth a veil of
          fine water droplets suffused with holy energy. The veil surrounds the
          target. Everything on each side of the veil is concealed from
          creatures on the opposite side, but the water doesn’t impede attacks
          or movement across the veil. If the target moves through the veil, it
          takes 4d6 good damage with a basic Will save. If the target leaves the
          veil, the spell ends.
        </p>
        <p>
          <b>Heightened (+1)</b> The good damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 73,
    level: 4,
    name: "Rebuke death",
    action: "one_action",
    tags: ["uncommon", "cleric", "healing", "necromancy", "positive"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> healing.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Area</b> 20-foot emanation.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 living creature per action spent to cast this
            spell.
          </span>
          <br />
          You snatch creatures from the jaws of death. You can spend 1 to 3
          actions Casting this Spell, and you can target a number of creatures
          equal to the actions spent. Each target regains 3d6 Hit Points. If the
          target had the dying condition, coming back from dying due to this
          healing doesn’t increase its wounded condition.
        </p>
        <p>
          <b>Heightened (+1)</b> Increase the healing by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 74,
    level: 4,
    name: "Retributive pain",
    action: "reaction",
    tags: ["uncommon", "abjuration", "cleric", "mental", "nonlethal"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> pain.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Trigger</b> A creature in range damages you.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> the triggering creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> basic Fortitude.
          </span>
          <br />
          You vengefully reflect your pain upon your tormentor. The target takes
          mental damage equal to half the amount it dealt to you when it
          triggered the spell.
        </p>
      </>
    ),
  },
  {
    id: 75,
    level: 4,
    name: "Safeguard secret",
    action: "",
    tags: ["uncommon", "abjuration", "cleric", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> secrecy.
          <br />
          <b>Cast</b> 1 minute (somatic, verbal).
          <br />
          <b>Range</b> 10 feet.
          <br />
          <b>Targets</b> you and any number of willing allies.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 hour.
          </span>
          <br />
          You ensure a secret remains safe from prying spies. Choose one piece
          of information that at least some of the targets know; you can target
          a creature only if it remains within range for the full minute during
          which you Cast the Spell. The spell grants those who know the piece of
          knowledge you have chosen a +4 status bonus to skill checks (typically
          Deception checks) to conceal this knowledge and to saving throws
          against spells that specifically attempt to obtain this knowledge from
          them and effects that would force them to reveal it.
        </p>
        <p>
          If you Cast this Spell again, any previous <b>safeguard secret</b> you
          had cast ends.
        </p>
      </>
    ),
  },
  {
    id: 76,
    level: 4,
    name: "Shaken confidence",
    action: "reaction",
    tags: ["rare", "cleric", "emotion", "enchantement", "mental", "misfortune"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> confidence (apocryphal).
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> An enemy within 30 feet of you critically fails an
          attack roll, Perception check, or skill check.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          You mock the target for all its failings, twisting its self-confidence
          into doubt. The enemy attempts a Will saving throw.
        </p>
        <p>
          <b>Success</b> The target is unaffected.
        </p>
        <p>
          <b>Failure</b> The target is briefly shaken and unsure of its
          abilities. It must roll twice and take the worse result on the next
          roll of the same type as the critical failure that triggered the spell
          (such as the target’s next Acrobatics check if the spell’s trigger was
          a critical failure on an Acrobatics check). If the target doesn’t
          attempt any qualifying checks, the spell ends at the end of the
          target’s next turn.
        </p>
      </>
    ),
  },
  {
    id: 77,
    level: 4,
    name: "Shared nightmare",
    action: "two_action",
    tags: [
      "rare",
      "cleric",
      "emotion",
      "enchantement",
      "incapacitation",
      "mental",
    ],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> nightmares.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
          <br />
          Merging minds with the target, you swap disorienting visions from one
          another’s nightmares. One of you will become confused, but which it’ll
          be depends on the target’s Will save.
        </p>
        <p>
          <b>Critical Success</b> You are confused for 1 round.
        </p>
        <p>
          <b>Success</b> At the start of your next turn, you spend your first
          action with the confused condition, then act normally.
        </p>
        <p>
          <b>Failure</b> As success, but the target is affected instead of you,
          spending its first action each turn confused. The duration is 1
          minute.
        </p>
        <p>
          <b>Critical Failure</b> The target is confused for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 78,
    level: 4,
    name: "Takes its course",
    action: "two_action",
    tags: ["rare", "cleric", "necromancy"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> indulgence.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> touch.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
          <br />
          When someone has overindulged, you can hasten them past the worst of
          their affliction or intensify their misery. This spell attempts to
          progress a disease affliction, a poison affliction, or persistent
          poison damage affecting the target. If the target is affected by more
          than one of these, you can choose from among those you are aware of;
          otherwise the GM chooses randomly. An unwilling target can attempt a
          Will save to negate <b>take its course</b>.
        </p>
        <p>
          The effect of this spell depends on whether you’re attempting to end
          an affliction or persistent poison damage, and whether you are
          attempting to help or hinder the target’s recovery.
        </p>

        <ul>
          <li>
            <b>Affliction</b> The target immediately attempts its next saving
            throw against the affliction. You can grant the creature your choice
            of a +2 status bonus or a –2 status penalty to its saving throw
            against the affliction.
          </li>
          <li>
            <b>Persistent Poison</b> You can cause the target take the
            persistent poison damage immediately when you Cast this Spell (in
            addition to taking it at the end of its next turn). Whether or not
            you do so, the target attempts an additional flat check against the
            persistent poison damage. You can set the DC of that flat check to 5
            or 20 instead of the normal DC.
          </li>
        </ul>
        <p>
          <b>Heightened (7th)</b> You can attempt to progress any number of the
          target’s eligible afflictions and persistent poison damage.
        </p>
      </>
    ),
  },
  {
    id: 79,
    level: 4,
    name: "Tempt fate",
    action: "reaction",
    tags: ["rare", "cleric", "divination", "fortune"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> fate.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Trigger</b> You or an ally within range attempts a saving throw.
          <br />
          <b>Range</b> 120 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> the triggering creature.
          </span>
          <br />
          You twist the forces of fate to make a moment dire or uneventful, with
          no in-between. The target gains a +1 status bonus to the triggering
          saving throw. If the saving throw’s result is a success, it becomes a
          critical success. If it’s a failure, it becomes a critical failure,
          and the critical failure can’t be reduced by abilities that usually
          reduce critical failure, such as improved evasion.
        </p>
        <p>
          If the triggering ability did not have both a critical success and
          critical failure condition, <b>tempt fate</b> fails, but you don’t
          expend the Focus Point for Casting this Spell.
        </p>
        <p>
          <b>Heightened (8th)</b> The bonus on the saving throw is +2.
        </p>
      </>
    ),
  },
  {
    id: 80,
    level: 4,
    name: "Touch of the moon",
    action: "reaction",
    tags: ["rare", "cleric", "enchantement", "light"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> moon.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Target</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          When you touch the target, a symbol of the moon appears on its
          forehead, glowing with soft moonlight. The target glows with dim light
          in a 20-foot radius. It also gets a benefit based on a phase of the
          moon, starting with the new moon and changing to the next phase at the
          end of each of its turns.
        </p>
        <ul>
          <li>
            <b>New Moon</b> The target receives no benefit.
          </li>
          <li>
            <b>Waxing Moon</b> The target gains a +1 status bonus to attack
            rolls and a +4 status bonus to damage rolls.
          </li>
          <li>
            <b>Full Moon</b> The target gains a +1 status bonus to attack rolls,
            AC, and saves, and a +4 status bonus to damage.
          </li>
          <li>
            <b>Waning Moon</b> The target gains a +1 status bonus to AC and
            saving throws. After this phase, return to the new moon.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 81,
    level: 4,
    name: "Traveler's transit",
    action: "two_action",
    tags: ["rare", "cleric", "evocation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> travel.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You add power to your muscles, allowing you to swim or climb walls
          with ease. When you cast this spell, you gain either a climb Speed or
          a swim Speed. The Speed is equal to your land Speed.
        </p>
        <p>
          <b>Heightened (5th)</b> You can choose to gain a fly Speed.
        </p>
      </>
    ),
  },
  {
    id: 82,
    level: 4,
    name: "Trickster's twin",
    action: "two_action",
    tags: ["rare", "cleric", "illusion", "visual"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> trickery.
          <br />
          <b>Cast</b> material, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You rarely settle for being in just one place. Choose a location
          within 100 feet of the target that the target can see. You create an
          illusion of yourself there that only it can see and that mimics all
          your actions. The target must attempt a Will save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target believes you’re in the designated location
          and can’t see you in your actual location. The target automatically
          disbelieves the illusion when you use an action that doesn’t make
          sense in the illusion’s position, or if the target attacks, touches,
          Seeks, or otherwise engages with the illusion. If you use a hostile
          action against the target, the spell ends.
        </p>
        <p>
          <b>Failure</b> As success, but the target must succeed at a Will save
          to disbelieve the illusion when one of the listed events occurs.
        </p>
        <p>
          <b>Critical Failure</b> As success, but the target must critically
          succeed at a Will save to disbelieve when one of the listed events
          occurs.
        </p>
      </>
    ),
  },
  {
    id: 83,
    level: 4,
    name: "Unity",
    action: "reaction",
    tags: ["rare", "abjuration", "cleric", "fortune"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> family.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> You and 1 or more allies within range are targeted by a
          spell or ability that allows a saving throw.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> each ally targeted by the triggering spell.
          </span>
          <br />
          You put up a united defense. Each ally can use your saving throw
          modifier instead of its own against the triggering spell. Each ally
          decides individually which modifier to use.
        </p>
      </>
    ),
  },
  {
    id: 84,
    level: 4,
    name: "Weaponize secret",
    action: "two_action",
    tags: ["rare", "cleric", "divination", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> secrecy (apocryphal).
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> up to 3 creatures.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute or until discharged.
          </span>
          <br />
          You understand that holding a secret is in itself a kind of power.
          Each target must attempt a Will save.
        </p>
        <p>
          <b>Success</b> The target is unaffected.
        </p>
        <p>
          <b>Failure</b> A rune symbolizing a secret the target is keeping (at
          the GM’s discretion) appears floating in front of you. If that
          creature attempts a Strike or spell attack against you while you hold
          their secret, you can discharge the rune as a reaction to deal 7d6
          mental damage to the creature.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the target becomes convinced
          you know their secret and takes 1d6 persistent mental damage from
          worry. If the rune with the secret is discharged while the creature is
          still taking the persistent mental damage, the persistent mental
          damage immediately ends.
        </p>
        <p>
          <b>Heightened (+1)</b> The mental damage increases by 2d6, and the
          persistent mental damage on a critical failure increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 85,
    level: 4,
    name: "Weaponize secret",
    action: "",
    tags: ["rare", "cleric", "enchantement", "linguistic"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <b>Domain</b> air (apocryphal).
          <br />
          <b>Cast</b> 1 hour (material, somatic, verbal).
          <br />
          <span className="frequency">
            <b>Range</b> 1 mile.
          </span>
          <br />
          You call forth numerous breezes in which you weave gossip, whispering
          subtly into the ears of those around. Choose a rumor or information
          you wish to spread, which may or may not be true, about a single
          subject. Those within range of the spell overhear the rumor at some
          point over the next hour, though they’ll be unable to pin it down to a
          source. Attempt a check with a modifier equal to your spell DC – 10
          against a hard DC for your level. The GM might modify the DC depending
          on how plausible the rumor is. Repeated castings to spread the same
          rumor or information have no effect unless circumstances have
          substantially changed, as determined by the GM.
        </p>
        <p>
          <b>Critical Success</b> Your rumor spreads far and wide, and it’s at
          the tip of people’s tongues. For 1 week, anyone who succeeds at a
          check to Gather Information on the specific subject learns your rumor
          in preference to other rumors about the subject. Skill checks to
          convince people that the rumor is true get a +2 circumstance bonus.
        </p>
        <p>
          <b>Success</b>Enough people take note of the rumor that it begins to
          spread, though those who heard the rumor aren’t necessarily convinced.
          For 1 week, anyone who succeeds at a check to Gather Information on
          the specific subject adds your rumor to the list of rumors they could
          learn about the subject, and skill checks to convince people that the
          rumor is true get a +1 circumstance bonus.
        </p>
        <p>
          <b>Failure</b> Most in the area dismiss the rumor as wild gossip and
          pay it little mind, granting no effect.
        </p>
        <p>
          <b>Critical Failure</b> The winds’ gossip is misinterpreted and
          spreads information contradictory to the rumor you were attempting to
          spread. A contradictory rumor spreads, and skill checks to convince
          others that your original rumor is true take a –2 circumstance
          penalty.
        </p>
      </>
    ),
  },
  {
    id: 86,
    level: 4,
    name: "Word of freedom",
    action: "one_action",
    tags: ["rare", "cleric", "enchantement", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> freedom.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You utter a liberating word of power that frees a creature. You
          suppress one of the following conditions of your choice: confused,
          frightened, grabbed, paralyzed, or restrained. The target isn’t
          affected by the chosen condition, and if you suppress the grabbed or
          restrained condition, the target automatically breaks free from the
          grab or restraint when you Cast the Spell.
        </p>
        <p>
          If you don’t remove the effect that provided the condition, the
          condition returns after the spell ends. For example, if a spell was
          making the target confused for 1 minute, word of freedom would let the
          target act normally for a round, but the confused condition would
          return afterward.
        </p>
      </>
    ),
  },
  {
    id: 87,
    level: 4,
    name: "Worthsmith",
    action: "three_action",
    tags: ["rare", "cleric", "transmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Dark archive</i>
          <br />
          <br />
          <b>Domain</b> knowledge (apocryphal).
          <br />
          <b>Cast</b> material, somatic, verbal.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 document written by a single author and comprised of
          written text in a single language.
          <br />
          <span className="frequency">
            <b>Duration</b> until the next time you Refocus.
          </span>
          <br />
          You’re a devotee of knowledge with an unmatched command of the
          language used to spread that knowledge, and you can reshape the
          written word into a form more understandable to your audience. The
          language of the target’s written text shifts to a language you know.
          This shift doesn’t change the text’s contents beyond minor translation
          differences, nor does it grant the reader any understanding of the
          original language.
        </p>
      </>
    ),
  },
  {
    id: 88,
    level: 4,
    name: "Zeal for battle",
    action: "reaction",
    tags: ["rare", "cleric", "emotion", "enchantement", "fortune", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Domain</b> zeal.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> You and at least 1 ally are about to roll initiative.
          <br />
          <b>Range</b> 10 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> you and the triggering ally.
          </span>
          <br />
          You stoke the righteous anger within yourself and an ally. You and the
          target ally each roll a d20 and use the higher result for both your
          initiative rolls. You each still use your own Perception modifier or
          other statistic to determine your results.
        </p>
      </>
    ),
  },
];
