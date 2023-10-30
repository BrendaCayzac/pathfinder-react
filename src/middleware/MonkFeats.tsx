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
          <i>Advanced Player's Guide</i>
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
          <i>Lost Omens: Gods & Magic</i>
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
  {
    id: 29,
    name: "Stand Still",
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
          <span className="frequency">
            <b>Trigger</b> A creature within your reach uses a move action or
            leaves a square during a move action it’s using.
          </span>
        </p>
        <p>
          You strike out when your foe tries to flee. Make a melee Strike
          against the triggering creature. If the attack is a critical hit and
          the trigger was a move action, you disrupt that action.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Wholeness of body",
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
            <b>Prerequisites</b> ki spells.
          </span>
        </p>
        <p>
          You can restore your health by tapping into your ki. You gain the
          wholeness of body ki spell. Increase the number of Focus Points in
          your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Abundant step",
    action: "",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> incredible movement, ki spells.
          </span>
        </p>
        <p>
          You can teleport yourself a short distance. You gain the abundant step
          ki spell. Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Align ki",
    action: "reaction",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advaned Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> ki spells.
          <br />
          <b>Frequency</b> once per hour.
          <br />
          <span className="frequency">
            <b>Trigger</b> You Cast a Spell that has the monk trait.
          </span>
        </p>
        <p>
          The power of your ki soothes your wounds and energizes you for battle.
          You regain Hit Points equal to your level plus your Wisdom modifier.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Blazing talon surge",
    action: "two_action",
    tags: ["monk", "fire", "flourish"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Pathfinder Society Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> Rain of Embers Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Rain of Embers Stance.
          </span>
        </p>
        <p>
          You rush forward and latch onto your enemy with talons of hungering
          fire. Stride once. If you end your movement within reach of at least
          one enemy, you can make a fire talon Strike against that enemy that
          deals an additional 1d4 persistent fire damage. If it hits and deals
          damage, you can attempt an Athletics check to Grapple the creature you
          hit.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Crane flutter",
    action: "reaction",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Crane Stance.
          <br />
          <b>Trigger</b> You are targeted with a melee attack by an attacker you
          can see.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Crane Stance.
          </span>
        </p>
        <p>
          You interpose your arm between yourself and your opponent. Your
          circumstance bonus to AC from Crane Stance increases to +3 against the
          triggering attack. If the attack misses you, you can immediately make
          a crane wing Strike against the attacker at a –2 penalty, even if the
          attacker isn’t within your reach.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Dragon roar",
    action: "one_action",
    tags: ["monk", "auditory", "emotioon", "fear", "mental"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Dragon Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Dragon Stance.
          </span>
        </p>
        <p>
          You bellow, instilling fear in your enemies. Enemies within a 15-foot
          emanation must succeed at a Will save against your Intimidation DC or
          be frightened 1 (frightened 2 on a critical failure). When a creature
          frightened by the roar begins its turn adjacent to you, it can’t
          reduce its frightened value below 1 on that turn. Your first attack
          that hits a frightened creature after you roar and before the end of
          your next turn gains a +4 circumstance bonus to damage.
        </p>
        <p>
          After you use Dragon Roar, you can’t use it again for 1d4 rounds. Its
          effects end immediately if you leave Dragon Stance. Creatures in the
          area of your roar are then temporarily immune for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Gorilla pound",
    action: "one_action",
    tags: ["monk", "emotioon", "flourish", "mental"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advaned Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> expert in Intimidation, Gorilla Stance
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Gorilla Stance.
          </span>
        </p>
        <p>
          You pound your chest before slamming into your foes. Attempt an
          Intimidation check to Demoralize, then make one gorilla slam Strike
          against the same target. If your Strike hits, you gain a circumstance
          bonus to the damage roll equal to triple the value of the target’s
          frightened condition.
        </p>
        <p>
          <b>Special</b> If you have this feat, while you are in Gorilla Stance,
          you gain a climb Speed of 15 feet.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Inner fire",
    action: "",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Stoked Flame Stance.
          </span>
        </p>
        <p>
          While you’re in Stoked Flame Stance, you have cold and fire resistance
          equal to half your level, and any creature that hits you with an
          unarmed attack, tries to Grab or Grapple you, or otherwise touches you
          takes fire damage equal to your Wisdom modifier (minimum 1). A
          creature can take this damage no more than once per turn.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Ki Blast",
    action: "",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Ki spells.
          </span>
        </p>
        <p>
          You can unleash an impactful cone of force by channeling your ki. You
          gain the ki blast ki spell. Increase the number of Focus Points in
          your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Mountain stronghold",
    action: "one_action",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Mountain Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Mountain Stance.
          </span>
        </p>
        <p>
          You focus on your connection to the earth and call upon the mountain
          to block attacks against you. You gain a +2 circumstance bonus to AC
          until the beginning of your next turn.
        </p>
        <p>
          <b>Special</b> If you have this feat, the Dexterity modifier cap to
          your AC while you’re in Mountain Stance increases from +0 to +1.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "One-inch punch",
    action: "two_action",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert strikes.
          </span>
        </p>
        <p>
          You put all your force into a single mighty, carefully controlled
          blow. Make an unarmed Strike. If you spend two actions and this Strike
          hits, you deal an extra die of weapon damage. You can instead spend 3
          actions to perform an even more powerful attack, dealing a second
          additional die of weapon damage on a hit.
        </p>
        <p>
          If you’re at least 10th level, the number of additional dice you add
          from this feat doubles, for a total of 2 additional dice if you spend
          2 actions or 4 additional dice if you spend 3 actions. If you’re at
          least 18th level, the number of additional dice you add from this feat
          triples, for a total of 3 additional dice if you spend 2 actions or 6
          additional dice if you spend 3 actions.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Return fire",
    action: "",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> Deflect Arrow, Monastic Archer Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Monastic Archer Stance, are wielding
            a bow, and have a free hand.
          </span>
        </p>
        <p>
          Snatching an arrow out of the air, you instantly put it to your bow
          and return fire. When you successfully Deflect an Arrow, as part of
          that reaction you can immediately make a ranged bow Strike by firing
          the arrow you deflected from your own bow.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Symbling feint",
    action: "",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> expert in Deception, Stumbling Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Stumbling Stance.
          </span>
        </p>
        <p>
          You lash out confusingly with what seems to be a weak move but instead
          allows you to unleash a dangerous flurry of blows upon your
          unsuspecting foe. When you use Flurry of Blows, you can attempt a
          check to Feint as a free action just before the first Strike. On a
          success, instead of making the target flat-footed against your next
          attack, they become flat-footed against both attacks from the Flurry
          of Blows.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Tiger slash",
    action: "two_action",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Tiger Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Tiger Stance.
          </span>
        </p>
        <p>
          You make a fierce swipe with both hands. Make a tiger claw Strike. It
          deals two extra weapon damage dice (three extra dice if you’re 14th
          level or higher), and you can push the target 5 feet away as if you
          had successfully Shoved them. If the attack is a critical success and
          deals damage, add your Strength modifier to the persistent bleed
          damage from your tiger claw.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Water step",
    action: "",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You can Stride across liquid and surfaces that don’t support your
          weight. This benefit lasts only during your movement. If you end your
          movement on a surface that can’t support you, you fall in or it
          collapses as normal.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Whirling throw",
    action: "one_action",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You have a creature grabbed or restrained.
          </span>
        </p>
        <p>
          You propel your grabbed or restrained foe a great distance. You can
          throw the creature any distance up to 10 feet, plus 5 feet × your
          Strength modifier. If you successfully throw the creature, it takes
          bludgeoning damage equal to your Strength modifier plus 1d6 per 10
          feet you threw it.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Wolf drag",
    action: "two_action",
    tags: ["monk"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Wolf Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Wolf Stance.
          </span>
        </p>
        <p>
          You rip your enemy off their feet. Make a wolf jaw Strike. Your wolf
          jaw gains the fatal d12 trait for this Strike, and if the attack
          succeeds, you knock the target prone.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Arrow snatching",
    action: "",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Deflect Arrow.
          </span>
        </p>
        <p>
          You pluck missiles from the air and hurl them back at their source.
          When you successfully deflect an attack with Deflect Arrow, as part of
          that reaction, you can immediately make a ranged Strike against the
          attacker using the projectile you deflected. This is a thrown weapon
          with the same range increment and effect on a hit as the triggering
          attack.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Clinging shadows initiate",
    action: "",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Ki spells.
          </span>
        </p>
        <p>
          You learn a mystical stance that transforms your ki into sticky smoke
          that shrouds your limbs, clinging to everything you touch. You gain
          the clinging shadows stance ki spell. Increase the number of Focus
          Points in your focus pool by 1. While entering the stance uses a ki
          spell, the shadow grasp attacks it grants are not, so you can use them
          as often as you like while in the stance.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Ironblood stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 8,
    feat: "Feat 8",
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
          You enter the stance of impenetrable iron, refusing to yield to any
          blow. You can make iron sweep unarmed attacks. These deal 1d8
          bludgeoning damage; are in the brawling group; and have the nonlethal,
          parry, sweep, and unarmed traits.
        </p>
        <p>
          While in Ironblood Stance, you gain resistance 2 to all damage. The
          resistance increases to 3 at 12th level, to 4 at 16th level, and to 5
          at 20th level.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Jellyfish stance",
    action: "one_action",
    tags: ["uncommon", "monk", "stance"],
    level: 8,
    feat: "Feat 8",
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
          You relax your posture and loosen your joints, allowing yourself to
          move with incredible fluidity. You can make stinging lash attacks that
          deal 1d6 slashing damage. These attacks are in the brawling group, and
          have the finesse, nonlethal, reach, and unarmed traits.
        </p>
        <p>
          While in Jellyfish Stance, you gain a +2 circumstance bonus to Reflex
          saves and on checks to Escape and Squeeze.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Mixed maneuver",
    action: "two_action",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisite</b> master in Athletics.
          </span>
        </p>
        <p>
          You combine two different maneuvers together into a single flowing
          whole. Choose any two of Grapple, Shove, and Trip. Attempt both of the
          attacks you chose against the same or different creatures, but don’t
          apply the multiple attack penalty until after resolving both attacks.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Pinning fire",
    action: "",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You use Flurry of Blows to make two ranged piercing
            weapon Strikes against the same target.
          </span>
        </p>
        <p>
          You target your opponent’s clothing, equipment, or loose flesh with
          piercing projectiles to pin them to the ground or a nearby surface. If
          both your attacks hit, the target must succeed at a Reflex save
          against your class DC or become immobilized until it or an adjacent
          creature succeeds at a DC 10 Athletics check to remove the pinning
          projectiles. The creature doesn’t become stuck if it is incorporeal,
          is liquid (like a water elemental or some oozes), or could otherwise
          escape without effort.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Rippling spin",
    action: "reaction",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
        </p>
        <p>
          <b>Prerequisites</b> Reflective Ripple Stance.
          <br />
          <b>Trigger</b> You are hit by a physical melee attack by an attacker
          you can see that’s in reach.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re in Reflective Ripple Stance.
          </span>
        </p>
        <p>
          After the triggering attack is done, Step. You must end this Step
          within the attacker’s reach. Then, you can attempt an Athletics check
          to Disarm or Trip the attacker.
        </p>
      </>
    ),
  },
  {
    id: 54,
    name: "Tangled forest stance",
    action: "one_action",
    tags: ["monk", "stance"],
    level: 8,
    feat: "Feat 8",
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
          You extend your arms like gnarled branches to interfere with your
          foes’ movements. You can make lashing branch unarmed attacks. These
          deal 1d8 slashing damage; are in the brawling group; and have the
          agile, finesse, nonlethal, and unarmed traits.
        </p>
        <p>
          While you’re in Tangled Forest Stance and can act, every enemy in your
          reach that tries to move away from you must succeed at a Reflex save,
          Acrobatics check, or Athletics check against your class DC or be
          immobilized for that action. If you prefer, you can allow the enemy to
          move.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Wall run",
    action: "one_action",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You defy gravity, traversing vertical planes as easily as the ground.
          Stride up to your Speed. You must start your movement on a horizontal
          surface. During this movement, you can run up vertical surfaces, like
          walls, at your full Speed. If you end the Stride off the ground, you
          fall after taking your next action or when your turn ends, whichever
          comes first (though you can Grab an Edge, if applicable). If you have
          Water Step or a similar ability, Wall Run lets you run along flimsy
          vertical surfaces, as well as vertical liquids, such as a waterfall.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Wild winds initiate",
    action: "",
    tags: ["monk"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> ki spells.
          </span>
        </p>
        <p>
          You learn a mystical stance that lets you attack from a distance. You
          gain the wild winds stance ki spell. Increase the number of Focus
          Points in your focus pool by 1. While entering the stance is a ki
          spell, the wind crash Strikes the stance grants are not, so you can
          use them as often as you like while in the stance.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Blazing streak",
    action: "three_action",
    tags: ["monk", "flourish"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
        </p>
        <p>
          <b>Prerequisites</b> Stoked Flame Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re in Stoked Flame Stance.
          </span>
        </p>
        <p>
          Stride twice, making Strikes against up to four different creatures
          within reach at any point during your movement. Flashing sparks
          Strikes made during Blazing Streak deal fire damage instead of
          slashing.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Cobra envenom",
    action: "one_action",
    tags: ["monk", "poison"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> Cobra Stance, expert in unarmed attacks
          <br />
          <b>Frequency</b> once per minute.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are in Cobra Stance.
          </span>
        </p>
        <p>
          You lash out with devious intent and the power to envenom your foe.
          Make a cobra fang Strike. Your reach with this Strike is 5 feet
          greater than normal. If this Strike hits, the target takes 1d4
          persistent poison damage per weapon damage die.
        </p>
        <p>
          <b>Special</b> If you have this feat, the circumstance bonus to
          Fortitude saves and Fortitude DC granted by Cobra Stance increases
          from +1 to +2.
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Entwined energy ki",
    action: "",
    tags: ["uncommon", "monk"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You can transform your inner power into a type of energy to empower
          your ki abilities. When you gain this feat, choose either acid, cold,
          electricity, fire, or sonic damage. When you cast ki blast, you can
          choose to have the spell deal the type of damage you chose instead of
          force damage. When you cast ki form or ki strike, add the type of
          damage you chose to the list of damage types you can select for the
          spell.
        </p>
        <p>
          <b>Special</b> At the GM’s discretion, this feat can alter other ki
          spells.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Knockback strike",
    action: "two_action",
    tags: ["monk", "concentrate"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You focus your strength into a blow powerful enough to push an enemy
          away from you. Make an unarmed Strike. If you hit, attempt an
          Athletics check to Shove the target. This attack uses the same
          multiple attack penalty as your Strike, and doesn’t count toward your
          multiple attack penalty.
        </p>
      </>
    ),
  },
];
