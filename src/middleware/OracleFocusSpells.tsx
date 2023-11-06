import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const oracleFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Ancestral touch",
    action: "one_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "emotion",
      "enchantement",
      "fear",
      "mental",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> ancestors.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 living creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Will.
          </span>
        </p>
        <p>
          You touch a creature and force them to see and feel the ancestors
          surrounding you. The target takes 1d4 mental damage, with results
          depending on a Will save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes half damage.
        </p>
        <p>
          <b>Failure</b> The target is frightened 1 and takes full damage.
        </p>
        <p>
          <b>Critical Failure</b> The target is frightened 2 and takes double
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The mental damage increases by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 2,
    level: 1,
    name: "Ashen wind",
    action: "two_action",
    tags: ["uncommon", "oracle", "conjuration", "cursebound"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>A Taste of Ashes</i>
        </p>
        <p>
          <b>Mystery</b> ashes.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 120 feet.
          <br />
          <b>Area</b> 10-foot burst.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          You conjure a swirling wind of ashes that blows through the area. Each
          creature in the area must attempt a Fortitude save or get the cloying
          ash in its lungs.
        </p>
        <p>
          <b>Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Failure</b> The creature is sickened 1.
        </p>
        <p>
          <b>Critical Failure</b> The creature is sickened 2.
        </p>
      </>
    ),
  },
  {
    id: 3,
    level: 1,
    name: "Brain drain",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "enchantement", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> lore.
          <br />
          <b>Cast</b> material, somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Will.
          </span>
        </p>
        <p>
          You probe the target’s mind to glean knowledge. This deals 1d8 mental
          damage with a basic Will save. If the target fails the save, you sort
          through the stolen memories to attempt a single check to Recall
          Knowledge. Choose a skill that has the Recall Knowledge action, and
          use the target’s skill modifier for the check.
        </p>
        <p>
          <b>Heightened (+1)</b> The mental damage increases by 1d8.
        </p>
      </>
    ),
  },
  {
    id: 4,
    level: 1,
    name: "Call to Arms",
    action: "reaction",
    tags: ["uncommon", "oracle", "cursebound", "enchantement", "mental"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> lore.
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> You are about to roll for initiative.
          <br />
          <b>Area</b> 20-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You cry out a call to arms, inspiring your allies to enter the fray.
          Each ally in the area gains a +2 status bonus to their initiative roll
          and gains temporary Hit Points equal to the spell’s level; these
          temporary Hit Points last for the spell’s duration.
        </p>
        <p>
          <b>Heightened (6th)</b> The bonus increases to +3.
        </p>
        <p>
          <b>Heightened (9th)</b> The bonus increases to +4.
        </p>
      </>
    ),
  },
  {
    id: 5,
    level: 1,
    name: "Incendiary Aura",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "evocation", "fire"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> flames.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 10-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You surround yourself with a combustible aura. Each time a creature
          within the emanation takes fire damage, it catches on fire, taking 2d4
          persistent fire damage.
        </p>
        <p>
          <b>Heightened (+2)</b> Increase the persistent damage by 1d4 and the
          radius of the emanation by 5 feet.
        </p>
      </>
    ),
  },
  {
    id: 6,
    level: 1,
    name: "Life Link",
    action: "one_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "healing",
      "necromancy",
      "positive",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> life.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature other than you.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You forge a connection of life energy between you and your target,
          distributing harm between both of you. When you first Cast the Spell,
          the target recovers 1d4 Hit Points. The first time each round that the
          target takes damage, reduce the damage it takes by 3 (to a minimum of
          0 damage). You lose 3 Hit Points each time, or the total damage dealt,
          if less than 3; this damage ignores any immunities or resistances you
          have and can’t otherwise be mitigated in any way.
        </p>
        <p>
          The spell ends immediately if you fall unconscious. You can Dismiss
          the spell.
        </p>
        <p>
          <b>Heightened (3rd)</b> You can target 2 creatures other than you.
          Increase the initial healing to 3d4 and the maximum damage reduced and
          Hit Points lost to 5.
        </p>
        <p>
          <b>Heightened (6th)</b> You can target 3 creatures other than you.
          Increase the initial healing to 6d4 and the maximum damage reduced and
          Hit Points lost to 10.
        </p>
        <p>
          <b>Heightened (9th)</b> You can target 4 creatures other than you.
          Increase the initial healing to 9d4 and the maximum damage reduced and
          Hit Points lost to 15.
        </p>
      </>
    ),
  },
  {
    id: 7,
    level: 1,
    name: "Soul Siphon",
    action: "one_action",
    tags: ["uncommon", "oracle", "cursebound", "necromancy", "negative"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> bones.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 living creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          You siphon off a portion of the target’s soul to bolster your own
          vitality. The target must attempt a Fortitude save or take 1d4
          negative damage. You gain temporary Hit Points equal to the total
          amount of HP the target loses, including the HP lost from becoming
          drained.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and becomes drained 1.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and becomes
          drained 2.
        </p>
        <p>
          <b>Heightened (+1)</b> Increase the damage by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 8,
    level: 1,
    name: "Spray of Stars",
    action: "two_action",
    tags: [
      "uncommon",
      "oracle",
      "cold",
      "cursebound",
      "evocation",
      "fire",
      "light",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> cosmos.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 15-foot cone.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Reflex.
          </span>
        </p>
        <p>
          You fling a spray of tiny shooting stars, dealing 1d4 fire damage.
          Each creature in the area must attempt a Reflex save.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage and is dazzled for 1
          round.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and is dazzled for 3
          rounds.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and is
          dazzled for 1 minute.
        </p>
        <p>
          <b>Heightened (+1)</b> Increase the damage by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 9,
    level: 1,
    name: "Tempest Touch",
    action: "one_action",
    tags: ["uncommon", "oracle", "cold", "cursebound", "evocation", "water"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> tempest.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          Your touch calls forth a churning mass of icy water that clings to
          your target, dealing 1d4 bludgeoning damage and 1d4 cold damage. The
          target must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes half damage and a –5-foot circumstance
          penalty to its Speeds until the end of your next turn.
        </p>
        <p>
          <b>Failure</b> The target takes full damage and a –10-foot
          circumstance penalty to its Speeds until the end of your next turn.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the target takes double
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The bludgeoning and cold damage each increase
          by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 10,
    level: 1,
    name: "Temporal Distortion",
    action: "one_action",
    tags: ["uncommon", "oracle", "cursebound", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Mystery</b> time.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Will.
          </span>
        </p>
        <p>
          You share some of your own temporal distortions with a foe, altering
          their mind and body unpredictably as they’re thrown backward or
          forward in time. Roll 1d4. On a 1, the foe becomes clumsy; on a 2, it
          becomes enfeebled; on a 3, it becomes stupefied; and on a 4, you
          choose which condition applies.
        </p>
        <p>
          <b>Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Failure</b> The creature is either clumsy 1, enfeebled 1, or
          stupefied 1 for 4 rounds, depending on the result of the d4.
        </p>
        <p>
          <b>Critical Failure</b>As failure, but the time warp is stronger,
          increasing the condition’s effects but making it run its course
          faster. The condition’s value is 3, and the condition lasts for 2
          rounds.
        </p>
      </>
    ),
  },
  {
    id: 11,
    level: 2,
    name: "Vision of weakness",
    action: "one_action",
    tags: ["uncommon", "oracle", "cursebound", "divination"],
    type: "Focus 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
        </p>
        <p>
          You focus your gaze on a creature and gain a flash of divine insight
          into its nature. If the creature has any weaknesses, you learn them,
          as well as which of its three saving throw modifiers is lowest. You
          also learn an inherent understanding of its movements and gain a +2
          status bonus to your next attack roll (or skill check made as part of
          an attack action) against that foe before the end of your turn. The
          target is then temporarily immune to vision of weakness for 1 day.
        </p>
      </>
    ),
  },
  {
    id: 12,
    level: 3,
    name: "Access Lore",
    action: "one_action",
    tags: ["uncommon", "oracle", "cursebound", "divination", "fortune"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> lore.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You sift through the multiverse’s divine knowledge, seeking out
          tidbits related to a particular subject. Choose one Lore skill. You
          temporarily gain the same proficiency rank in that Lore skill as your
          proficiency rank for your oracle spellcasting.
        </p>
      </>
    ),
  },
  {
    id: 13,
    level: 3,
    name: "Ancestral Defense",
    action: "reaction",
    tags: [
      "uncommon",
      "oracle",
      "abjuration",
      "cursebound",
      "fortune",
      "mental",
    ],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> ancestors.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Trigger</b> You are about to attempt a Will save.
          </span>
        </p>
        <p>
          Your ancestor protects you against those who would bend your will. You
          roll the triggering save twice and use the better result. If you’re in
          an encounter when you cast this spell, you immediately roll to change
          your predominant ancestor.
        </p>
      </>
    ),
  },
  {
    id: 14,
    level: 3,
    name: "Armor of Bones",
    action: "reaction",
    tags: ["uncommon", "oracle", "cursebound", "necromancy"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> bones.
          <br />
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You ossify your physical form, mimicking the durability of bone. You
          gain resistance 3 to cold, electricity, fire, piercing, and slashing
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> Increase the resistance by 1.
        </p>
      </>
    ),
  },
  {
    id: 15,
    level: 3,
    name: "Battlefield Persistance",
    action: "reaction",
    tags: ["uncommon", "oracle", "cursebound", "divination", "divine"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> battle.
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Trigger</b> You are about to attempt a saving throw, but you
            haven’t rolled yet.
          </span>
        </p>
        <p>
          You’re difficult to remove from battle. You gain a +2 status bonus to
          the triggering save, and if the triggering save is against an
          incapacitation effect, it treats you as if you were 2 levels higher.
        </p>
      </>
    ),
  },
  {
    id: 16,
    level: 3,
    name: "Delay Affliction",
    action: "two_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "healing",
      "necromancy",
      "positive",
    ],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> life.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
        </p>
        <p>
          With a surge of healing energy, you push back against an affliction
          threatening the target and grant a small amount of healing. The target
          recovers 3d8 Hit Points. You attempt to counteract any one affliction
          you are aware the target has, suspending its effects for 1 hour on a
          success rather than removing it. The target is then temporarily immune
          to delay affliction for 1 day. You don’t need to have identified the
          name of the specific affliction, but you do need to be aware of it;
          for instance, you couldn’t delay an ingested poison during its onset
          period unless you were aware of the poison.
        </p>
        <p>
          <b>Heightened (+1)</b> The target recovers an additional 1d8 Hit
          Points and you can attempt to suspend an additional affliction.
        </p>
      </>
    ),
  },
  {
    id: 17,
    level: 3,
    name: "Incendiary Ashes",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "evocation", "fire"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Taste of Ashes</i>
        </p>
        <p>
          <b>Mystery</b> ashes.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 120 feet.
          <br />
          <b>Area</b> 20-foot burst.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          A cloud of magical ashes descends upon creatures in the area. The
          ashes scour flesh and linger in the wounds, igniting upon the
          slightest flicker of flame. Creatures in the area take 4d6 slashing
          damage and must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage and has weakness to fire
          3 until the start of its next turn.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and has weakness to fire
          3 for 1 minute. If the creature is killed by fire during this time
          it’s reduced to ashes, though its gear remains.
        </p>
        <p>
          <b>Critical Failure</b> As failure, except the creature takes double
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The slashing damage increases by 2d6 and
          weakness to fire increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 18,
    level: 3,
    name: "Interestellar Void",
    action: "two_action",
    tags: ["uncommon", "oracle", "cold", "cursebound", "evocation"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> cosmos.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Fortitude.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
        </p>
        <p>
          You call upon the frigid depths of outer space to bring a terrible
          chill to your enemy. The target is cloaked in the freezing void, which
          deals 3d6 cold damage immediately and the first time each round you
          Sustain the Spell on future turns, with a basic Fortitude save. The
          target is fatigued for as long as the effect persists.
        </p>
        <p>
          <b>Heightened (+1)</b> The cold damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 19,
    level: 3,
    name: "Thunderburst",
    action: "two_action",
    tags: ["uncommon", "oracle", "air", "cursebound", "evocation", "sonic"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> tempest.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 100 feet.
          <br />
          <b>Area</b> 20-foot burst.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          You create a powerful blast of air and a loud peal of thunder, dealing
          2d6 bludgeoning damage and 2d6 sonic damage. Each creature in the area
          must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and is deafened for 1
          minute.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and is
          deafened for 1 hour.
        </p>
        <p>
          <b>Heightened (+2)</b> Increase each type of damage by 2d6 and the
          area by 5 feet.
        </p>
      </>
    ),
  },
  {
    id: 20,
    level: 3,
    name: "Time Skip",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "transmutation"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Mystery</b> time.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 willing creature other than yourself.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
        </p>
        <p>
          You manipulate time around your ally, pushing them forward a few
          moments in time. The target is quickened on its next turn and can use
          the action only to Step, Stride, or Strike.
        </p>
        <p>
          <b>Heightened (+1)</b> You can one additional willing creature other
          than yourself within range.
        </p>
      </>
    ),
  },
  {
    id: 21,
    level: 3,
    name: "Whirling Flames",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "evocation", "fire"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> flames.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Area</b> up to two 5-foot bursts that don’t overlap.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> basic Reflex.
          </span>
        </p>
        <p>
          You call forth a storm of whirling flames, engulfing all creatures in
          that area and dealing 5d6 fire damage with a basic Reflex save.
        </p>
        <p>
          <b>Heightened (+2)</b> The damage increases by 3d6, and you can add
          another nonoverlapping 5-foot burst to the area.
        </p>
      </>
    ),
  },
  {
    id: 22,
    level: 4,
    name: "Debilitating Dichotomy",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "evocation", "mental"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature other than you.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Will.
          </span>
        </p>
        <p>
          You reveal a glimpse of the impossible conflicts between the divine
          anathema behind your curse, forcing you to reckon with another’s
          conflicts as well. You and the target each take 9d6 mental damage with
          a basic Will save, and the target is stunned 1 if it critically fails
          its save. You get a degree of success one better than you rolled for
          your saving throw.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 3d6.
        </p>
      </>
    ),
  },
  {
    id: 23,
    level: 6,
    name: "Ancestral Form",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "transmutation"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> ancestors.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
        </p>
        <p>
          You take the form of your ancestral spirits, becoming invisible and
          quasi-corporeal. You gain resistance 10 to all damage (except force
          and damage from Strikes with the ghost touch property rune), and this
          resistance is doubled against non-magical and precision damage. You
          gain a fly Speed equal to your land Speed; when Flying, moving upward
          isn’t difficult terrain for you. You can’t move through solid objects,
          but you can float through tiny gaps. You can’t Cast Spells (but you
          can Sustain Spells), activate items, or use actions that have the
          attack or manipulate trait.
        </p>
        <p>
          <b>Heightened (+2)</b> The resistance increases by 5.
        </p>
      </>
    ),
  },
  {
    id: 24,
    level: 6,
    name: "Ash Form",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "transmutation"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Taste of Ashes</i>
        </p>
        <p>
          <b>Mystery</b> ashes.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You take the form of a cloud of minuscule ash particles. You gain fast
          healing 3, resistance 10 to piercing and slashing damage, and immunity
          to bleed, falling damage, and precision damage. You can’t move through
          solid objects, but you can stream through tiny gaps as if they were
          difficult terrain. Any ability with the air trait that involves
          blowing or shifting wind (such as gust of wind) deals you 1d6
          bludgeoning damage per level of the spell each round you are in its
          area, in addition to its normal effects.
        </p>
        <p>
          <b>Heightened (9th)</b> The resistance increases to 15.
        </p>
      </>
    ),
  },
  {
    id: 25,
    level: 6,
    name: "Claim Undead",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "incapacitation", "necromancy"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> bones.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 undead creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
        </p>
        <p>
          You attempt to wrest control of a target undead or force it to
          recognize you as its master. If the target is controlled by another
          creature, that controller attempts a Will saving throw to retain
          control; otherwise, the target must attempt a Will save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target is stunned 1 as it fights off your commands.
        </p>
        <p>
          <b>Failure</b> The target becomes controlled by you and follows your
          orders. It (or the creature previously controlling it) can attempt a
          new Will save at the end of each of its turns, and the spell ends on a
          success. If you issue an obviously self-destructive order, the target
          doesn’t act until you issue a new order.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the target (or the creature
          previously controlling it) receives a new save only if you give it a
          new order that is against its nature.
        </p>
      </>
    ),
  },
  {
    id: 26,
    level: 6,
    name: "Dread Secret",
    action: "two_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "divination",
      "emotion",
      "fear",
      "mental",
    ],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> lore.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> up to 6 creatures.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> until the start of your next turn.
          </span>
        </p>
        <p>
          You utter a powerful secret at odds with the fundamental nature of the
          target creatures. Choose a specific resistance or weakness that you
          believe one or more of the targets have due to Recall Knowledge or
          previous experience with the targets, such as resistance to fire or
          weakness to silver. If the information is incorrect for a given
          target, the spell has no effect on that target. Affected targets must
          attempt a Will saving throw.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes 1 damage of the type of weakness you
          chose (thus triggering the creature’s weakness), or loses its
          resistance until the end of your next turn if you chose a resistance.
        </p>
        <p>
          <b>Failure</b> As success, and the creature becomes frightened 1 from
          the revelation of its dread secret.
        </p>
        <p>
          <b>Critical Failure</b> As failure, except the creature is frightened
          3.
        </p>
      </>
    ),
  },
  {
    id: 27,
    level: 6,
    name: "Flaming Fusillade",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "evocation", "fire"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> flames.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You call upon an endless barrage of flames, producing miniature
          fireballs in your hands to hurl at foes. You cast produce flame as
          part of casting flaming fusillade. For the duration of flaming
          fusillade, produce flame’s casting time is reduced from 2 actions to
          1.
        </p>
        <p>
          <b>Heightened (9th)</b> For the duration, you also gain a status bonus
          to the damage dealt by produce flame equal to flaming fusillade’s
          spell level.
        </p>
      </>
    ),
  },
  {
    id: 28,
    level: 6,
    name: "Heroic Feat",
    action: "two_action",
    tags: ["uncommon", "oracle", "cursebound", "divination", "mental"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> battle.
          <br />
          <span className="frequency">
            <b>Cast</b> somatic, verbal.
          </span>
        </p>
        <p>
          You gain the ability to perform a specialized combat technique from
          the vast wealth of martial knowledge your mystery provides. When you
          Cast this Spell, you use the action granted by one common fighter feat
          from the Fighter Feats section of the Core Rulebook or the Fighter
          Feats section of this source (your GM might add feats to this list).
          If you Cast this Spell using 2 actions, the granted action must be a
          single action, and if you Cast this Spell using 3 actions, you can
          instead choose a feat that grants a 2-action activity. The chosen
          feat’s level can be no higher than heroic feat’s spell level. The feat
          can’t have a Frequency entry, and you must meet its prerequisites and
          requirements in order to select it.
        </p>
      </>
    ),
  },
  {
    id: 29,
    level: 6,
    name: "Life-giving Form",
    action: "two_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "healing",
      "light",
      "necromancy",
      "positive",
    ],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> life.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You transcend your physical form, becoming a beacon of healing energy.
          Your body exudes bright light like a torch. You gain resistance 5 to
          precision damage and weakness 5 to negative damage, and your unarmed
          Strikes deal an extra 1d4 positive damage.
        </p>
        <p>
          You can touch a living creature with an Interact action to restore 6d8
          Hit Points to it, and when a creature touches you with an Interact
          action you can allow it to gain the same healing; either way, the
          creature becomes temporarily immune to life-giving form’s healing for
          1 minute. This is a positive healing effect. You can’t heal yourself
          with life-giving form. A creature harmed by positive damage (such as
          an undead) that touches you or damages you with an unarmed attack or
          non-reach melee weapon instead takes 3d4 positive damage, and it
          doesn’t become temporarily immune.
        </p>
        <p>You can Dismiss this spell.</p>
        <p>
          <b>Heightened (+1)</b> Increase the Hit Points restored with an
          Interact action by 1d8, the positive damage by 1, and the resistance
          and weakness by 1.
        </p>
      </>
    ),
  },
  {
    id: 30,
    level: 6,
    name: "Manifold Lives",
    action: "two_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "divination",
      "emotion",
      "mental",
    ],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Mystery</b> time.
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <span className="frequency">
            <b>Duration</b> varies.
          </span>
        </p>
        <p>
          You cast a creature’s mind back through time, forcing them to take
          other paths and make other choices, experiencing countless alternate
          lives in an instant. The creature becomes overwhelmed with regret over
          paths untraveled, lives unlived, and times unrealized. The creature
          takes 6d6 mental damage and must attempt a Will save. After the effect
          is resolved, the target is then temporarily immune for 1 day.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage and is stupefied 2 for 1
          round.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and is stupefied 2 for 1
          minute. While affected, the creature must attempt another save at the
          start of its turn; on a failure, it’s slowed 1 for that turn as it
          sobs uncontrollably.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and for 1
          minute, it’s stupefied 4 and slowed 1 as it sobs uncontrollably.
        </p>
        <p>
          <b>Heightened (+1)</b> The mental damage increases by 1d6.
        </p>
      </>
    ),
  },
];
