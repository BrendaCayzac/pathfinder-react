import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const monkFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Crane stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter the stance of a crane, holding your arms in an imitation of
          a crane’s wings and using flowing, defensive motions. You gain a +1
          circumstance bonus to AC, but the only Strikes you can make are crane
          wing attacks. These deal 1d6 bludgeoning damage; are in the brawling
          group; and have the agile, finesse, nonlethal, and unarmed traits.
        </p>
        <p>
          While in Crane Stance, reduce the DC for High Jump and Long Jump by 5,
          and when you Leap, you can move an additional 5 feet horizontally or 2
          feet vertically.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Dragon stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter the stance of a dragon and make powerful leg strikes like a
          lashing dragon’s tail. You can make dragon tail attacks that deal 1d10
          bludgeoning damage. They are in the brawling group and have the
          backswing, nonlethal, and unarmed traits.
        </p>
        <p>
          While in Dragon Stance, you can ignore the first square of difficult
          terrain while Striding.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Gorilla stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You lower yourself to the ground and take an imposing, knuckle-walking
          stance. While in this stance, the only Strikes you can make are
          gorilla slam unarmed attacks. These deal 1d8 bludgeoning damage; are
          in the brawling group; and have the backswing, forceful, grapple,
          nonlethal, and unarmed traits. While you are in Gorilla Stance, you
          gain a +2 circumstance bonus to Athletics checks to Climb, and if you
          roll a success on an Athletics check to Climb, you get a critical
          success instead.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Ki rush",
    action: "",
    tags: ["monk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You can use ki to move with extraordinary speed and make yourself
          harder to hit. You gain the ki rush ki spell and a focus pool of 1
          Focus Point. The rules for ki spells are summarized in the Key Terms
          sidebar, and the full rules for focus spells appear in the Focus
          Spells section.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Ki strike",
    action: "",
    tags: ["monk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          Your study of the flow of mystical energy allows you to harness it
          into your physical strikes. You gain the ki strike ki spell and a
          focus pool of 1 Focus Point. The rules for ki spells are summarized in
          the Key Terms sidebar, and the full rules for focus spells appear in
          the Focus Spells section.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Monastic archer stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored and wielding a longbow,
            shortbow, or a bow with the monk trait.
          </span>
        </p>
        <p>
          You enter a specialized stance for a unique martial art centered
          around the use of a bow. While in this stance, the only Strikes you
          can make are those using longbows, shortbows, or bows with the monk
          trait. You can use Flurry of Blows with these bows. You can use your
          other monk feats or monk abilities that normally require unarmed
          attacks with these bows when attacking within half the first range
          increment (normally 50 feet for a longbow and 30 feet for a shortbow),
          so long as the feat or ability doesn’t require a single, specific
          Strike.
        </p>
        <p>
          <b>Special</b> When you select this feat, you become trained in the
          longbow, shortbow, and any simple and martial bows with the monk
          trait. If you gain the expert strikes class feature, your proficiency
          rank for these weapons increases to expert, and if you gain the master
          strikes class feature, your proficiency rank for these weapons
          increases to master.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Monastic weaponry",
    action: "",
    tags: ["monk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You have trained with the traditional weaponry of your monastery or
          school. You gain access to uncommon weapons that have the monk trait
          and become trained in simple and martial monk weapons. When your
          proficiency rank for unarmed attacks increases to expert or master,
          your proficiency rank for these weapons increases to expert or master
          as well.
        </p>
        <p>
          You can use melee monk weapons with any of your monk feats or monk
          abilities that normally require unarmed attacks, though not if the
          feat or ability requires you to use a single specific type of attack,
          such as Crane Stance.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Mountain stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored and touching the ground.
          </span>
        </p>
        <p>
          You enter the stance of an implacable mountain—a technique created by
          dwarven monks—allowing you to strike with the weight of an avalanche
          and block blows with your garments. The only Strikes you can make are
          falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are
          in the brawling group; and have the forceful, nonlethal, and unarmed
          traits.
        </p>
        <p>
          While in Mountain Stance, you gain a +4 item bonus to AC and a +2
          circumstance bonus to any defenses against being Shoved or Tripped.
          You have a Dexterity modifier cap to your AC of +0, meaning you don’t
          add your Dexterity to your AC, and your Speeds are all reduced by 5
          feet. The item bonus to AC from Mountain Stance is cumulative with
          armor potency runes on your explorer’s clothing, mage armor, and
          bracers of armor.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Rain of embers stance",
    action: "one_action",
    tags: ["rare", "monk", "fire", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter the stance of an enraged phoenix, holding your fingers as
          rigid as deadly talons while moving with quick, flickering gestures
          that dance with biting flames. The only Strikes you can make are fire
          talon Strikes. These deal 1d4 fire damage; are in the brawling group;
          and have the agile, finesse, fire, nonlethal, and unarmed traits.
        </p>
        <p>
          While in Rain of Embers Stance, you gain a +1 status bonus to AC and
          fire resistance equal to half your level (minimum 1).
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Reflective ripple stance",
    action: "one_action",
    tags: ["monk", "evocation", "water", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter a stance of fluid grace as small amounts of water flow with
          your movements and attacks. You can make flowing wave attacks that
          deal 1d6 bludgeoning damage. They are in the brawling group and have
          the agile, disarm, finesse, nonlethal, trip, unarmed, and water
          traits.
        </p>
        <p>
          While in Reflective Ripple Stance, you gain a +1 circumstance bonus to
          Athletics checks to Disarm, Swim, or Trip, and you gain a +2
          circumstance bonus to your Reflex DC to avoid being Disarmed and
          Tripped.
        </p>
        <p>
          <b>Special</b> This feat gains your choice of either the divine or
          occult trait, matching your ki spell tradition if possible.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Stoked flame stance",
    action: "one_action",
    tags: ["monk", "evocation", "fire", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter a stance of fast, fiery movements. You can make flashing
          spark attacks that deal 1d8 slashing damage. They are in the brawling
          group and have the forceful, nonlethal, sweep, and unarmed traits. If
          you have access to the flashing sparks’ critical specialization
          effect, you can take an alternate effect instead: if your critical
          Strike dealt damage, the target takes 1d6 persistent fire damage.
        </p>
        <p>
          While in Stoked Flame Stance, you gain a +5-foot status bonus to your
          Speed. If you have incredible movement, increase the benefit from
          incredible movement to a +15-foot status bonus plus 5 feet for every 4
          levels beyond 3rd.
        </p>
        <p>
          <b>Special</b> This feat gains your choice of either the divine or
          occult trait, matching your ki spell tradition if possible.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Stumbling stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Deception.
          </span>
        </p>
        <p>
          You enter a seemingly unfocused stance that mimics the movements of
          the inebriated—bobbing, weaving, leaving false openings, and
          distracting your enemies from your true movements. While in this
          stance, you gain a +1 circumstance bonus to Deception checks to Feint.
          The only Strikes you can make are stumbling swing unarmed attacks.
          These deal 1d8 bludgeoning damage; are in the brawling group; and have
          the agile, backstabber, finesse, nonlethal, and unarmed traits. If an
          enemy hits you with a melee Strike while in this stance, it becomes
          flat-footed against the next stumbling swing Strike you make against
          it before the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Tiger stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter the stance of a tiger and can make tiger claw attacks. These
          deal 1d8 slashing damage; are in the brawling group; and have the
          agile, finesse, nonlethal, and unarmed traits. On a critical success
          with your tiger claws, if you deal damage, the target takes 1d4
          persistent bleed damage.
        </p>
        <p>
          As long as your Speed is at least 20 feet while in Tiger Stance, you
          can Step 10 feet.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Wolf stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are unarmored.
          </span>
        </p>
        <p>
          You enter the stance of a wolf, low to the ground with your hands held
          like fanged teeth. You can make wolf jaw unarmed attacks. These deal
          1d8 piercing damage; are in the brawling group; and have the agile,
          backstabber, finesse, nonlethal, and unarmed traits.
        </p>
        <p>
          If you’re flanking a target while in Wolf Stance, your wolf jaw
          unarmed attacks also gain the trip trait.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Ancestral weaponry",
    action: "",
    tags: ["monk"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Monastic Weaponry, a feat granting access to
            all weapons with an ancestry trait (such as elf or orc).
          </span>
        </p>
        <p>
          You blend monastic techniques with the ancestral fighting styles of
          your people. Choose an ancestry for which you have access to all
          weapons with that trait. For you, melee weapons with that ancestry
          trait and either the agile or finesse trait gain the monk trait.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Brawling focus",
    action: "",
    tags: ["monk"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You know how to make the most of your attacks when fighting
          hand-to-hand. You gain access to the critical specialization effects
          of unarmed strikes in the brawling group and weapons in the brawling
          group. If you have Monastic Weaponry, you also gain the critical
          specialization effects of all monk weapons in which you are trained.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Crushing crab",
    action: "",
    tags: ["monk"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          Like a powerful constrictor, you crush targets in your unyielding
          grasp. When you successfully Grapple a creature, you can deal
          bludgeoning damage to that creature equal to your Strength modifier.
          You can make this attack nonlethal with no penalty.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Dancing leaf",
    action: "",
    tags: ["monk"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You are as light as a leaf whirling in the breeze. When you Leap or
          succeed at a High Jump or Long Jump, increase the distance you jump by
          5 feet. When calculating the damage you take from falling, don’t count
          any distance fallen while you are adjacent to a wall.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Elemental fist",
    action: "",
    tags: ["monk"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Ki Strike.
          </span>
        </p>
        <p>
          You call upon the power of the elements, infusing your ki with
          elemental energy and allowing your attacks to deal energy damage. When
          you cast ki strike, in addition to the damage types normally
          available, you can deliver the extra damage in the form of a gust of
          storm-tossed wind (dealing electricity damage and gaining the air
          trait), a chunk of stone (dealing bludgeoning damage and gaining the
          earth trait), a flickering flame (dealing fire damage), or a crashing
          wave of frigid water (dealing cold damage and gaining the water
          trait).
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Shooting star stance",
    action: "",
    tags: ["monk", "stance"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Monastic Weaponry.
          </span>
        </p>
        <p>
          You enter a stance that lets you throw shuriken with lightning speed.
          While in this stance, you can use your monk feats or monk abilities
          that normally require unarmed attacks with shuriken instead.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Stunning fist",
    action: "",
    tags: ["monk"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Flurry of Blows.
          </span>
        </p>
        <p>
          The focused power of your flurry threatens to overwhelm your opponent.
          When you target the same creature with two Strikes from your Flurry of
          Blows, you can try to stun the creature. If either Strike hits and
          deals damage, the target must succeed at a Fortitude save against your
          class DC or be stunned 1 (or stunned 3 on a critical failure). This is
          an incapacitation effect.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Cobra stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You enter a tight stance, coiled up like a lashing cobra with your
          hands poised as venomous fangs. While in this stance, the only Strikes
          you can make are cobra fang unarmed attacks. These deal 1d4 poison
          damage; are in the brawling group; and have the agile, deadly d10,
          finesse, nonlethal, poison, and unarmed traits.
        </p>
        <p>
          While in Cobra Stance, you gain a +1 circumstance bonus to Fortitude
          saves and your Fortitude DC, and you gain poison resistance equal to
          half your level.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Deflect arrow",
    action: "reaction",
    tags: ["monk"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Trigger</b> You are the target of a physical ranged attack.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re aware of the attack, are not flat-footed
            against it, and have a hand free.
          </span>
        </p>
        <p>
          You gain a +4 circumstance bonus to AC against the triggering attack.
          If the attack misses, you have deflected it. You cannot use this feat
          to deflect unusually massive ranged projectiles (such as boulders or
          ballista bolts).
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Flurry of maneuvers",
    action: "",
    tags: ["monk"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> expert in Athletics.
        </p>
        <p>
          You flurry is a combination of maneuvers. You can replace one or both
          of your attacks during a Flurry of Blows with Grapples, Shoves, or
          Trips.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Flying kick",
    action: "two_action",
    tags: ["monk"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You launch yourself at a foe. Make a Leap or attempt a High Jump or
          Long Jump. At the end of the jump, if you’re adjacent to a foe, you
          can immediately Strike that foe with an unarmed attack, even if the
          foe is in midair. You fall to the ground after the Strike. If the
          distance you fall is no more than the height of your jump, you land
          upright and take no damage.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Guarded movement",
    action: "",
    tags: ["monk"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          Your guard is up, even while moving. You gain a +4 circumstance bonus
          to AC against reactions triggered by your movement.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Peafowl stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Monastic Weaponry.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a sword that has the monk trait
            in one hand.
          </span>
        </p>
        <p>
          You enter a tall and proud stance while remaining mobile, with all the
          grace and composure of a peafowl. While in this stance, the only
          Strikes you can make are melee Strikes with the required sword. Once
          per round, after you hit with a monk sword Strike, you can Step as a
          free action as your next action.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Sacred ki",
    action: "",
    tags: ["monk"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Ki Strike, you follow a deity.
          </span>
        </p>
        <p>
          The power of your faith suffuses your ki. When you select this feat,
          choose chaos, evil, good, or law. Your choice must match one of your
          deity’s alignment components.
        </p>
        <p>
          When you cast the ki strike focus spell and damage a creature whose
          alignment is opposite your chosen alignment, you can choose for the ki
          strike damage to be of the chosen type. Additionally, you can
          substitute the damage from ki blast (or other ki spells that deal
          force damage, at the GM’s discretion) with damage of your chosen
          alignment.
        </p>
      </>
    ),
  },
];
