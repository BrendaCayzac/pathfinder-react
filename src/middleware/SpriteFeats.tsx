import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const spriteFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Corgi mount",
    action: "",
    tags: ["sprite"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        The smallest of fey have ridden corgis as mounts since time immemorial,
        leading to a pattern on corgis’ backs called a “faerie saddle.” You have
        formed a magical connection with a corgi that can serve as your mount.
        Your corgi familiar is Small rather than Tiny, and it’s appropriate for
        use as your mount, unlike most familiars. It has the scent ability,
        which counts against your limit for familiar and master abilities as
        normal. Furthermore, it can never gain a familiar ability that grants it
        any Speeds other than a land Speed. If you’re a pixie, you can’t ride a
        corgi due to your Size, but you can take this feat to gain a corgi
        familiar.
      </span>
    ),
  },
  {
    id: 2,
    name: "Evanescent wings",
    action: "",
    tags: ["sprite"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve manifested wings that can flutter for brief spurts. You don’t
        need to spend any additional actions to reach something in your space
        that a Medium creature could reach. For instance, if you wanted to open
        a cookie jar located four feet off the ground, you only need to spend a
        single Interact action to do so. When you use Evanescent Wings to
        flutter to a higher place in your space, your action gains the move
        trait.
      </span>
    ),
  },
  {
    id: 3,
    name: "Fey cantrips",
    action: "",
    tags: ["sprite"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve learned the cantrips sprites have used since time immemorial. You
        gain dancing lights and ghost sound as primal innate cantrips. If you
        have the grig heritage, you also gain detect magic, and if you have the
        draxie heritage, you gain prestidigitation.
      </span>
    ),
  },
  {
    id: 4,
    name: "Speak with bats",
    action: "",
    tags: ["sprite"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> nyktera heritage.
        </span>
        <br />
        You can ask questions of, receive answers from, and use the Diplomacy
        skill with bats. You gain a +2 circumstance bonus on all Diplomacy
        checks to Make an Impression on bats or Request something from bats.
      </span>
    ),
  },
  {
    id: 5,
    name: "Sprite's spark",
    action: "",
    tags: ["sprite"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You can fling a portion of your magic at foes. You gain a ranged unarmed
        attack in the sling weapon group with a maximum range of 20 feet that
        deals 1d4 damage. (No ability modifier is added to the damage roll.) The
        damage type and name of the unarmed attack depends on your heritage,
        described below; most sprite heritages not presented in this source also
        use luminous spark. Like other unarmed attacks, you can improve this
        attack with handwraps of mighty blows.
        <ul>
          <li>
            <b>Draxie</b> euphoric spark (mental)
          </li>
          <li>
            <b>Firefly</b> Sprite luminous spark (fire)
          </li>
          <li>
            <b>Grig</b> dissonant note (sonic)
          </li>
          <li>
            <b>Melixie</b> sting shot (poison)
          </li>
          <li>
            <b>Nyktera</b> ultrasonic pulse (sonic)
          </li>
          <li>
            <b>Pixie</b> pixie dust (mental)
          </li>
        </ul>
      </span>
    ),
  },
  {
    id: 7,
    name: "Animal speaker",
    action: "",
    tags: ["sprite"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> ability to communicate with some type of animals
          (such as bats or arthropods).
        </span>
        <br />
        You can speak to all animals, not just a particular subset. You gain a
        +1 circumstance bonus to Make an Impression on animals (which usually
        uses the Diplomacy skill).
      </span>
    ),
  },
  {
    id: 8,
    name: "catchy tune",
    action: "one_action",
    tags: ["auditory", "concentrate", "emotion", "mental", "sprite"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You create a tune so catchy, your foes can’t help but dance along.
        Attempt a Performance check against the Will DCs of all enemies in a
        30-foot emanation.
        <br />
        <br />
        <b>Critical Success:</b> The target takes a –10-foot status penalty to
        its Speed and is flat-footed, both for 1 round.
        <br />
        <br />
        <b>Success:</b> The target takes a –5-foot status penalty to its Speed
        for 1 round.
        <br />
        <br />
        <b>Critical Failure:</b> The target is temporarily immune for 1 hour.
      </span>
    ),
  },
  {
    id: 9,
    name: "fey disguise",
    action: "",
    tags: ["sprite"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You can disguise yourself with magical illusions. You can cast illusory
        disguise once per day as a 1st-level primal innate spell. At 7th level,
        the spell is heightened to 2nd level, and every 2 levels thereafter, the
        spell is heightened an additional spell level.
      </span>
    ),
  },
  {
    id: 10,
    name: "Energize wings",
    action: "one_action",
    tags: ["concentrate", "morph", "primal", "sprite", "transmutation"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b>Evanescent Wings.
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per hour.
        </span>
        <br />
        You stoke your magic to energize your wings, temporarily transforming
        them into glowing, majestic forms. For 1 minute, you gain a fly Speed of
        30 feet.
      </span>
    ),
  },
  {
    id: 11,
    name: "Fey magic",
    action: "",
    tags: ["sprite"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You can use faerie magic to hide yourself and expose hidden foes. You
        can cast faerie fire and invisibility each once per day as primal innate
        spells.
      </span>
    ),
  },
  {
    id: 12,
    name: "Fey skin",
    action: "",
    tags: ["sprite"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        While you are more susceptible to cold iron than most of the Wingless,
        you also have an incredible resilience and a deeper connection to the
        healing energies of the First World. Increase your maximum Hit Points by
        an amount equal to your level. If you rest for 10 minutes, brilliant
        light from the First World seeps into your form from your wings (or the
        spot where your wings would be), causing you to regain a number of Hit
        Points equal to your level; this is cumulative with any Hit Points you
        regain from Treat Wounds. However, you gain weakness 5 to cold iron.
      </span>
    ),
  },
  {
    id: 13,
    name: "Invisible trickster",
    action: "",
    tags: ["sprite"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You have learned how to become invisible and remain so. You can cast
        4th-level invisibility as a primal innate spell once per hour.
      </span>
    ),
  },
  {
    id: 14,
    name: "Hero's wings",
    action: "",
    tags: ["sprite"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Energize Wings.
        </span>
        <br />
        You have begun the final steps to reaching your full potential. Your
        wings are always in their majestic form without you needing to use
        Energize Wings, granting you a permanent fly Speed. Furthermore, sprites
        recognize you as a powerful hero (or villain) by your unique wings and
        are appropriately impressed. You gain a +2 circumstance bonus on all
        Diplomacy and Intimidation checks against sprites and gain the benefits
        of the Glad-Hand skill feat against other sprites, without taking a –5
        penalty to your Diplomacy check.
      </span>
    ),
  },
];
