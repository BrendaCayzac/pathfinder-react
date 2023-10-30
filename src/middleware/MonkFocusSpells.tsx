import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const monkFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Ki rush",
    action: "one_action",
    tags: ["uncommon", "monk", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
        </p>
        <p>
          Accelerated by your ki, you move with such speed you become a blur.
          Move two times: two Strides, two Steps, or one Stride and one Step (in
          either order). You gain the concealed condition during this movement
          and until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 2,
    level: 1,
    name: "Ki stroke",
    action: "one_action",
    tags: ["uncommon", "monk", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
        </p>
        <p>
          You focus your ki into magical attacks. Make an unarmed Strike or
          Flurry of Blows (this doesn’t change the limit on using only one
          flourish per turn). You gain a +1 status bonus to your attack rolls
          with the Strikes, and the Strikes deal 1d6 extra damage. This damage
          can be any of the following types of your choice, chosen each time you
          Strike: force, lawful (only if you’re lawful), negative, or positive.
        </p>
        <p>
          <b>Heightened (+4)</b> The extra damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 3,
    level: 2,
    name: "Wholesness of body",
    action: "one_action",
    tags: ["uncommon", "monk", "healing", "necromany", "positive"],
    type: "Focus 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
        </p>
        <p>
          You heal yourself in one of the following ways, chosen by you when you
          cast the spell.
        </p>
        <ul>
          <li>You regain 8 Hit Points.</li>
          <li>
            You attempt to cure one poison or disease afflicting you; attempt to
            counteract the affliction.
          </li>
        </ul>
        <p>
          <b>Heightened (+1)</b> If you choose to regain Hit Points, the Hit
          Points regained increase by 8.
        </p>
      </>
    ),
  },
  {
    id: 4,
    level: 3,
    name: "Ki Blast",
    action: "one_action",
    tags: ["uncommon", "monk", "evocation", "force"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 15-foot cone or more.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          You unleash your ki as a powerful blast of force that deals 2d6 force
          damage. If you use 2 actions to cast ki blast, increase the size of
          the cone to 30 feet and the damage to 3d6. If you use 3 actions to
          cast ki blast, increase the size of the cone to 60 feet and the damage
          to 4d6. Each creature in the area must attempt a Fortitude saving
          throw.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and is pushed 5 feet.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and is pushed
          10 feet.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1d6, or by 2d6 if you
          use 2 or 3 actions.
        </p>
      </>
    ),
  },
  {
    id: 5,
    level: 4,
    name: "Abundant step",
    action: "one_action",
    tags: ["uncommon", "monk", "conjuration", "teleportation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Range</b> 15 feet or more.
          </span>
        </p>
        <p>
          You move so fast you blur across planar boundaries. You teleport up to
          a distance equal to your Speed within your line of sight.
        </p>
      </>
    ),
  },
  {
    id: 6,
    level: 4,
    name: "Abundant step",
    action: "one_action",
    tags: ["uncommon", "monk", "evocation", "shadow", "stance"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> until you leave the stance.
          </span>
        </p>
        <p>
          You adopt the stance of clinging shadows. You can make shadow grasp
          Strikes. These deal 1d4 negative damage; are in the brawling group;
          and have the agile, grapple, reach, and unarmed traits.
        </p>
        <p>
          While in clinging shadows stance, you gain a +2 circumstance bonus to
          Athletics checks to Grapple, and to the DC for creatures to Escape
          from you.
        </p>
      </>
    ),
  },
  {
    id: 7,
    level: 4,
    name: "Wind stance",
    action: "one_action",
    tags: ["uncommon", "monk", "air", "evocation", "stance"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> until you leave the stance.
          </span>
        </p>
        <p>
          You take on the stance of the flowing winds, sending out waves of
          energy at a distance. You can make wind crash unarmed Strikes as
          ranged Strikes against targets within 30 feet. These deal 1d6
          bludgeoning damage, use the brawling group, and have the agile,
          nonlethal, propulsive, and unarmed traits. Wind crash Strikes ignore
          concealment and all cover.
        </p>
        <p>
          While in wild winds stance, you gain a +2 circumstance bonus to AC
          against ranged attacks.
        </p>
      </>
    ),
  },
  {
    id: 8,
    level: 5,
    name: "Wind jump",
    action: "one_action",
    tags: ["uncommon", "monk", "air", "transmutation"],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You gain a fly Speed equal to your Speed. You must end your turn on
          solid ground, or you fall.
        </p>
        <p>
          <b>Heightened (6th)</b> At the end of your turn, you can attempt a DC
          30 Acrobatics check to find purchase in midair. If you succeed, you
          don’t fall.
        </p>
      </>
    ),
  },
  {
    id: 9,
    level: 5,
    name: "Wronged Monk's Wrath",
    action: "one_action",
    tags: ["uncommon", "monk", "electricity", "evocation", "force"],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Fists of the Ruby Phoenix Adventure Path</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 5-foot emanation or more.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Reflex.
          </span>
        </p>
        <p>
          You unleash your ki as a powerful storm of force and lightning,
          dealing 2d6 force damage and 2d12 electricity damage to creatures in
          the area. If you use 2 actions to cast the spell, increase the size of
          the emanation to 10 feet and the damage to 3d6 force damage and 3d12
          electricity damage. If you use 3 actions to cast the spell, increase
          the size of the emanation to 20 feet and the damage to 4d6 force and
          4d12 electricity damage. Each creature attempts one basic Reflex save
          that applies to both types of damage On a failed save, the creature is
          deafened for 1 round; on a critical failure, the creature also takes
          2d12 persistent electricity damage and is deafened for 1 minute.
        </p>
        <p>
          <b>Heightened (+2)</b> The force damage increases by 1d6 and the
          electricity damage by 1d12, or 2d6 and 2d12 if you use 2 or 3 actions.
        </p>
      </>
    ),
  },
  {
    id: 10,
    level: 7,
    name: "Shadow's web",
    action: "two_action",
    tags: ["uncommon", "monk", "evocation"],
    type: "Focus 7",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> 30-foot burst.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Fortitude.
          </span>
        </p>
        <p>
          Grasping darkness surges from you, dealing 14d4 negative damage. Each
          creature in the area must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature takes half damage and is enfeebled 1 for 1
          round.
        </p>
        <p>
          <b>Failure</b> The creature takes full damage and is enfeebled 2 for 1
          round.
        </p>
        <p>
          <b>Critical Failure</b> The creature takes double damage and is
          stunned 1, enfeebled 2 for 1 round, and immobilized for 1 round or
          until it Escapes, whichever comes first.
        </p>
        <p>
          <b>Heightened (+1)</b> The negative damage increases by 2d4.
        </p>
      </>
    ),
  },
  {
    id: 11,
    level: 8,
    name: "Medusa's wrath",
    action: "two_action",
    tags: ["uncommon", "monk", "transmutation"],
    type: "Focus 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Cast</b> somatic, verbal.
          </span>
        </p>
        <p>
          You make an attack filled with a medusa’s petrifying power. Make an
          unarmed Strike with the following additional effects.
        </p>
        <p>
          <b>Critical Success</b> The target is slowed 2 and must attempt a
          Fortitude save at the end of each of its turns; this ongoing save has
          the incapacitation trait. On a failed save, the slowed condition
          increases by 1 (2 on a critical failure). A successful save reduces
          the slowed condition by 1. When a creature is unable to act due to the
          slowed condition from medusa’s wrath, it is petrified permanently. The
          spell ends if the creature is petrified or the slowed condition is
          removed.
        </p>
        <p>
          <b>Success</b> As critical success, but the target is initially slowed
          1.
        </p>
      </>
    ),
  },
  {
    id: 12,
    level: 8,
    name: "Quivering Palm",
    action: "two_action",
    tags: ["uncommon", "monk", "incapacitation", "necromancy"],
    type: "Focus 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Saving Throw</b> Fortitude.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 month.
          </span>
        </p>
        <p>
          Make a melee unarmed Strike. If you hit and the target is alive,
          anytime during the duration, you can spend a single action, which has
          the auditory and concentrate traits, to speak a word of death that
          could instantly slay it. The target must attempt a Fortitude save.
        </p>
        <p>
          <b>Critical Success</b> The target survives, the spell ends, and the
          target is then temporarily immune for 24 hours.
        </p>
        <p>
          <b>Success</b> The target is stunned 1 and takes 40 damage, the spell
          ends, and the target is then temporarily immune for 24 hours. 1.
        </p>
        <p>
          <b>Failure</b> The target is stunned 3 and takes 80 damage. The
          spell’s duration continues, but the target is then temporarily immune
          for 24 hours against being killed by quivering palm.
        </p>
        <p>
          <b>Critical Failure</b> The target dies.
        </p>
        <p>
          If you cast quivering palm again, the effects of any quivering palm
          you had previously cast end.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 10 on a failure, or 5
          on a success.
        </p>
      </>
    ),
  },
  {
    id: 13,
    level: 9,
    name: "Empty body",
    action: "two_action",
    tags: ["uncommon", "monk", "conjuration", "teleportation"],
    type: "Focus 9",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You turn ethereal, with the effects of ethereal jaunt, but you don’t
          need to concentrate.
        </p>
      </>
    ),
  },
  {
    id: 14,
    level: 9,
    name: "Ki form",
    action: "one_action",
    tags: ["uncommon", "monk", "polymorph"],
    type: "Focus 9",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          Drawing from deep wells of spiritual power, you take on a special ki
          form. In your ki form, your hair, feathers, skin, or scales change
          color and begin to glow. In this form you gain a fly Speed equal to
          your land Speed. Choose force, lawful (only if you are lawful),
          negative, or positive damage. All your Strikes deal 1d6 additional
          damage of the chosen type. Your entire body is also surrounded by a
          glowing corona of the same color as your inner ki; this is a light
          effect. Your corona is a 5-foot emanation that deals 2d6 damage of the
          chosen type to creatures who start their turn within the emanation. If
          the emanation overlaps with a darkness effect, the corona’s glow
          attempts to counteract the darkness effect. Regardless of the outcome,
          the corona can’t attempt to counteract that effect again for 1 day. As
          a single action, which has the concentrate trait, you can flare your
          corona out to become a 30-foot emanation.
        </p>
        <p>
          In your ki form, your emotions surge to the forefront and it’s
          difficult to moderate your attacks. Your weapons and unarmed attacks
          lose the nonlethal trait. You take a –2 status penalty to saves
          against emotion effects but gain a +2 status bonus to saves against
          all other mental effects.
        </p>
      </>
    ),
  },
];
