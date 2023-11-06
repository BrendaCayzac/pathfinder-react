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
];
