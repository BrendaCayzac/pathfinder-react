import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const rangerFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Animal companion",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You gain the service of a young animal companion that travels with you
          and obeys simple commands as best as it can. See Animal Companions.
          When you Hunt Prey, your animal companion gains the action’s benefits
          and your hunter’s edge benefit if you have one.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Crossbow ace",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You have a deep understanding of the crossbow. When you’re wielding a
          crossbow and use Hunt Prey or use Interact to reload your crossbow,
          you gain a +2 circumstance bonus to the damage roll on your next
          Strike with that crossbow. If the crossbow is a simple crossbow, also
          increase the damage die size for that attack by one step. You must
          make the attack before the end of your next turn or these benefits are
          lost.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Gravity Weapon",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          Your expertise with your weapons and commitment to taking out your
          targets lends you magical power. You gain the gravity weapon warden
          spell and a focus pool of 1 Focus Point.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Heal companion",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion.
          </span>
        </p>
        <p>
          You have a deep devotion to your animal companion that enables you to
          magically heal their wounds. You gain the heal companion warden spell
          and a focus pool of 1 Focus Point.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Hunted shot",
    action: "one_action",
    tags: ["ranger", "flourish"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon with reload 0.
          </span>
        </p>
        <p>
          You take two quick shots against the one you hunt. Make two Strikes
          against your prey with the required weapon. If both hit the same
          creature, combine their damage for the purpose of resistances and
          weaknesses. Apply your multiple attack penalty to each Strike
          normally.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Monster hunter",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          You swiftly assess your prey and apply what you know. As part of the
          action used to Hunt your Prey, you can attempt a check to Recall
          Knowledge about your prey. When you critically succeed at identifying
          your hunted prey with Recall Knowledge, you note a weakness in the
          creature’s defenses. You and allies you tell gain a +1 circumstance
          bonus to your next attack roll against that prey. You can give bonuses
          from Monster Hunter only once per day against a particular creature.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Twin takedown",
    action: "one_action",
    tags: ["ranger", "flourish"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, each in a
            different hand.
          </span>
        </p>

        <p>
          You swiftly attack your hunted prey with both weapons. Make two
          Strikes against your hunted prey, one with each of the required
          weapons. If both hit the same hunted prey, combine their damage for
          the purpose of its resistances and weaknesses. Apply your multiple
          attack penalty to each Strike normally.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Favored terrain",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          You have studied a specific terrain to overcome its challenges. Choose
          aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or
          underground as your favored terrain. When in that terrain, you can
          ignore the effects of non-magical difficult terrain. If you have the
          wild stride class feature, you gain a second benefit while in your
          favored terrain, depending on your choice.
        </p>
        <ul>
          <li>
            <b>Aquatic</b> You gain a swim Speed equal to your Speed. If you
            already had a swim Speed, you gain a +10-foot status bonus to your
            swim Speed.
          </li>
          <li>
            <b>Arctic</b> You need to eat and drink only one-tenth as much as
            usual, you aren’t affected by severe or extreme cold, and you can
            walk across ice and snow at full Speed without needing to Balance.
          </li>
          <li>
            <b>Desert</b> You need to eat and drink only one-tenth as much as
            usual, you aren’t affected by severe or extreme heat, and you can
            walk along sand at full Speed without needing to Balance.
          </li>
          <li>
            <b>Forest, Mountain, or Underground</b> You gain a climb Speed equal
            to your Speed. If you already had a climb Speed, you gain a +10-foot
            status bonus to your climb Speed.
          </li>
          <li>
            <b>Plains</b> You gain a +10-foot status bonus to your land Speed.
          </li>
          <li>
            <b>Sky</b> You gain a +10-foot status bonus to your fly Speed, if
            you have one.
          </li>
          <li>
            <b>Swamp</b> You can move across bogs at full Speed, even if they
            are deep enough to be greater difficult terrain or to normally
            require you to Swim.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    name: "Hunter's aim",
    action: "two_action",
    tags: ["ranger", "concentrate"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          When you focus on aiming, your attack becomes particularly accurate.
          Make a ranged weapon Strike against your hunted prey. On this Strike,
          you gain a +2 circumstance bonus to the attack roll and ignore your
          prey’s concealed condition.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Magic hide",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion, warden spells.
          </span>
        </p>
        <p>
          You can defend your companion in battle. You gain the magic hide
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
];
