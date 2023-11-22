import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const rangerFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Gravity weapon",
    action: "one_action",
    tags: ["uncommon", "ranger", "evocation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You build up gravitational force and funnel it into your blows,
          leading to more powerful attacks with blade and bow alike. On your
          first weapon Strike each round, you gain a status bonus to damage
          equal to twice the number of weapon damage dice.
        </p>
      </>
    ),
  },
  {
    id: 2,
    level: 1,
    name: "Heal companion",
    action: "one_action",
    tags: ["uncommon", "ranger", "focus", "healing", "vitality"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Range</b> touch or 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> your animal companion.
          </span>
        </p>
        <p>
          You heal your animal companion’s wounds. You restore 1d10 Hit Points
          to your animal companion. The number of actions you spend Casting this
          Spell determines range and other parameters.
        </p>
        <p>
          <img
            src={require("../assets/img/one_action.png")}
            alt="one action icon"
          />{" "}
          <b>(manipulate)</b> The spell has a range of touch.
        </p>
        <p>
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          <b>(concentrate, manipulate)</b> The spell has a range of 30 feet and
          restores an additional 8 Hit Points to the target.
        </p>
        <p>
          <b>Heightened (+1)</b> The amount of healing increases by 1d10, and
          the additional healing for the 2-action version increases by 8.
        </p>
      </>
    ),
  },
  {
    id: 3,
    level: 1,
    name: "Magic Hide",
    action: "one_action",
    tags: ["uncommon", "ranger", "focus", "manipulate"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> your animal companion.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          Your animal companion grows a thicker hide, matted fur, or a harder
          shell, granting it a +1 status bonus to AC.
        </p>
      </>
    ),
  },
  {
    id: 4,
    level: 1,
    name: "Snare Hopping",
    action: "two_action",
    tags: ["uncommon", "ranger", "conjuration", "teleportation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 10 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> one snare you built.
          </span>
        </p>
        <p>
          You may not have placed your snare in the right place, but you can
          magically move it there. You teleport the target snare to another
          unoccupied location in range.
        </p>
        <p>
          <b>Heightened (+1)</b> The range of the spell increases by 10 feet.
        </p>
      </>
    ),
  },
  {
    id: 5,
    level: 2,
    name: "Animal feature",
    action: "one_action",
    tags: ["uncommon", "ranger", "concentrate", "focus", "manipulate", "morph"],
    type: "Focus 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          Without fully transforming your body, you gain one animalistic
          feature, which you select from the list below each time you Cast the
          Spell.
        </p>
        <ul>
          <li>
            <b>Cat Eyes</b> You gain low-light vision.
          </li>
          <li>
            <b>Claws</b> You gain a claw attack that deals 1d6 slashing damage
            and has the agile, finesse, and unarmed traits.
          </li>
          <li>
            <b>Jaws</b> You gain a jaws attack that deals 1d8 piercing damage
            and has the unarmed trait.
          </li>
        </ul>
        <p>
          <b>Heightened (4th)</b> Add the following options to the list.
        </p>
        <ul>
          <li>
            <b>Fish Tail</b> You gain a swim Speed equal to your land Speed.
          </li>
          <li>
            <b>Owl Eyes</b> You gain darkvision.
          </li>
          <li>
            <b>Wings</b> You gain a fly Speed equal to your land Speed.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    level: 2,
    name: "Enlarge companion",
    action: "one_action",
    tags: [
      "uncommon",
      "ranger",
      "concentrate",
      "focus",
      "manipulate",
      "polymorph",
    ],
    type: "Focus 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> your animal companion.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          Your animal companion grows much larger, towering over its foes in
          battle. Your animal companion becomes Large, gaining the effects of a
          2nd-rank enlarge spell.
        </p>
        <p>
          <b>Heightened (4th)</b> Your animal companion instead becomes Huge,
          gaining the benefits of a 4th-rank enlarge spell.
        </p>
      </>
    ),
  },
  {
    id: 7,
    level: 2,
    name: "Hunter's luck",
    action: "",
    tags: ["uncommon", "ranger", "concentrate", "focus", "fortune"],
    type: "Focus 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You attempt a check to Recall Knowledge about a
            creature, but you haven’t rolled yet.
          </span>
        </p>
        <p>
          You have a preternatural ability to remember details about your foes.
          Roll the triggering check twice and use the better result.
        </p>
      </>
    ),
  },
  {
    id: 8,
    level: 2,
    name: "Soothing mist",
    action: "two_action",
    tags: [
      "uncommon",
      "ranger",
      "concentrate",
      "focus",
      "healing",
      "manipulate",
      "vitality",
    ],
    type: "Focus 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 willing living creature or 1 undead creature.
          </span>
        </p>
        <p>
          You call forth a magical mist that envelops a creature. The mist
          restores 2d8 Hit Points to a target living creature and ends one
          source of persistent acid, bleed, fire, poison, or void damage
          affecting it. If the creature is taking persistent damage from
          multiple sources, you select which one is removed. Against an undead
          target, you deal 2d8 vitality damage (basic Fortitude save); if it
          fails the save, it also takes 2 persistent vitality damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The amount of healing (or damage to an undead
          target) increases by 1d8, and the persistent vitality damage to an
          undead creature increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 9,
    level: 3,
    name: "Ephemeral tracking",
    action: "two_action",
    tags: ["uncommon", "ranger", "concentrate", "focus", "manipulate"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Duration</b> 1 hour.
          </span>
        </p>
        <p>
          You can look at currents in the air and water and see tracks that you
          can follow just as you would on land. You can use Survival to Track
          through both air and water, noticing aerial or aquatic “tracks” of all
          creatures who passed nearby in the last hour. It’s more difficult to
          Track in this way: the DC to Track through air or water is always at
          least 30, or higher after precipitation or wind (in the air) or heavy
          tides or currents (in the water). It’s possible to Cover Tracks
          against this spell, but creatures might not realize they need to do
          so.
        </p>
      </>
    ),
  },
  {
    id: 10,
    level: 3,
    name: "Ranger's bramble",
    action: "two_action",
    tags: ["uncommon", "ranger", "concentrate", "focus", "manipulate", "plant"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Range</b> 100 feet.
          <br />
          <b>Area</b> all squares that contain plants in a 5-foot burst.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You cause plants in the area to entangle your foes, with the effects
          of entangling flora. A creature that critically fails the save takes
          2d4 persistent bleed damage in addition to being immobilized. Escaping
          your bramble doesn’t end the bleed damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The bleed damage on a critical failure
          increases by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 11,
    level: 5,
    name: "Hunter's vision",
    action: "one_action",
    tags: ["uncommon", "ranger", "concentrate", "focus"],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 hunted prey.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
        </p>
        <p>
          Your target glows with a magical aura visible only to you and those
          who follow your lead. Your target is visible to you and others sharing
          your Hunt Prey benefits even if it wouldn’t normally be due to
          lighting or the concealed or invisible conditions, though cover from
          opaque objects still blocks your sight. You ignore the flat check
          against the target due to the concealed condition, and the target
          isn’t automatically hidden from you due to darkness or being
          invisible.
        </p>
      </>
    ),
  },
  {
    id: 12,
    level: 5,
    name: "Terrain Transposition",
    action: "one_action",
    tags: [
      "uncommon",
      "ranger",
      "concentrate",
      "focus",
      "manipulate",
      "teleportation",
    ],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Range</b> 90 feet.
          </span>
        </p>
        <p>
          You mystically transpose your current location with another. While in
          a wilderness environment, you transport yourself and items you’re
          holding to a clear space you can see within range. If you have Favored
          Terrain and both your starting and ending position are in your favored
          terrain, the range increases to 180 feet. If you have an animal
          companion and it is adjacent to you, you can transport it along with
          you to an adjacent open space, but if this spell would bring any other
          creature with you, even in an extradimensional container, the spell is
          lost.
        </p>
      </>
    ),
  },
];
