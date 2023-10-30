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
          <i>Advanced Player's Guide</i>
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
];
