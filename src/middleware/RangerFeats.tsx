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
  {
    id: 11,
    name: "Animal empathy",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          You have a connection to the creatures of the natural world that
          allows you to communicate with them on a rudimentary level. You can
          use Diplomacy to Make an Impression on animals and to make very simple
          Requests of them. In most cases, wild animals will give you time to
          make your case.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Monster warden",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Monster Hunter.
          </span>
        </p>
        <p>
          You understand how to defend yourself and others against your prey.
          When you grant bonuses from Monster Hunter, you and your allies also
          each gain a +1 circumstance bonus to your next saving throw against
          that particular creature and to your AC against that creature’s next
          attack against you.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Quick draw",
    action: "one_action",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You draw your weapon and attack with the same motion. You Interact to
          draw a weapon, then Strike with that weapon.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Relentless stalker",
    action: "reaction",
    tags: ["uncommon", "ranger", "move"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> An adjacent creature you are hunting attempts to move
            away from you using an action that has the move trait.
          </span>
        </p>
        <p>
          Your hunted prey cannot escape your relentless pursuit. Stride up to
          your Speed in tandem with the triggering creature, remaining adjacent
          to the foe throughout its movement until it stops moving or you run
          out of movement. You can ignore difficult terrain during this movement
          unless the difficult terrain is caused by a magical effect.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Snare hopping",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Snare Crafting, warden spells.
          </span>
        </p>
        <p>
          You can magically move your snares around. You gain the snare hopping
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "United Assault",
    action: "one_action",
    tags: ["uncommon", "ranger", "fighter", "flourish"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
        </p>
        <p>
          Through countless battles, you’ve learned you’re stronger when working
          alongside your allies. Make a Strike. Your Strike gains a circumstance
          bonus to damage rolls equal to the number of other different creatures
          that damaged the target since the end of the target’s last turn, to a
          maximum of a +4 circumstance bonus.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Wild empathy",
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
          You have a connection to the creatures of the natural world that
          allows you to communicate with them on a rudimentary level. You can
          use Diplomacy to Make an Impression on animals and to make very simple
          Requests of them. In most cases, wild animals will give you time to
          make your case.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Advanced warden",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Initiate Warden.
          </span>
        </p>
        <p>
          You unlock more powerful primal spells. You gain your choice of one
          warden spell from the advanced warden spells (or another you have
          access to).
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times, choosing a
          different advanced warden spell each time.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Animal feature",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          You are so connected with the animal world that you can grant yourself
          an animal’s features and abilities. You gain the animal feature warden
          spell. Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Companion's cry",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion.
          </span>
        </p>
        <p>
          You can urge your companion to do its utmost. You can spend 2 actions
          to Command an Animal instead of 1 when commanding your animal
          companion. If you do, your animal companion uses an additional action.
        </p>
      </>
    ),
  },
];
