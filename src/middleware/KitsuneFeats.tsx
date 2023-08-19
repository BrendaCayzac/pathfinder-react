import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const kistuneFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Foxfire",
    action: "",
    tags: ["kistune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        A crack of your tail sparks wisps of blue energy. Choose either
        electricity or fire when you gain this feat. You gain a foxfire ranged
        unarmed attack with a maximum range of 20 feet. The attack deals 1d4
        damage of the chosen type (no ability modifier is added to the damage
        roll). Your foxfire attack is in the sling weapon group and has the
        magical trait. Like other unarmed attacks, you can improve this attack
        with handwraps of mighty blows.
        <br />
        <br />
        <b>Special:</b> If you are a frozen wind kitsune, your foxfire deals
        cold damage instead of electricity or fire.
      </span>
    ),
  },
  {
    id: 2,
    name: "Kitsune lore",
    action: "",
    tags: ["kistune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You excel at navigating social situations and keeping secrets. You gain
        the trained proficiency rank in Diplomacy and Deception. If you would
        automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You also become trained in Kitsune Lore.
      </span>
    ),
  },
  {
    id: 3,
    name: "Kitsune spell familiarity",
    action: "",
    tags: ["kistune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve picked up a few magical tricks. During your daily preparations,
        choose daze, forbidding ward, or ghost sound. Until your next daily
        preparations, you can cast this cantrip as a divine innate spell at
        will. A cantrip is heightened to a spell level equal to half your level
        rounded up.
      </span>
    ),
  },
  {
    id: 4,
    name: "Retractable claws",
    action: "",
    tags: ["kistune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You gain a claw unarmed attack that deals 1d4 slashing damage. Your
        claws are in the brawling group and have the agile, finesse, and unarmed
        traits.
      </span>
    ),
  },
  {
    id: 5,
    name: "Shapechanger's intuition",
    action: "",
    tags: ["kistune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        A lifetime of experience helps you see through disguises. When you come
        within 10 feet of a creature that is transformed into another form or is
        Impersonating a specific creature, the GM rolls a secret Perception
        check for you to realize that the creature is transformed, even if you
        didn’t spend an action to Seek against that creature.
      </span>
    ),
  },
  {
    id: 6,
    name: "Star orb",
    action: "",
    tags: ["kistune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        A lifetime of experience helps you see through disguises. When you come
        within 10 feet of a creature that is transformed into another form or is
        Impersonating a specific creature, the GM rolls a secret Perception
        check for you to realize that the creature is transformed, even if you
        didn’t spend an action to Seek against that creature.
      </span>
    ),
  },
  {
    id: 7,
    name: "Hybrid form",
    action: "",
    tags: ["kistune"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        When you Change Shape, you retain elements of your kitsune form,
        allowing you to speak in a fox form, use kitsune unarmed attacks in a
        tailless form, or gain a tail in your tailless form to use abilities
        that require one. You can Change Shape to alter the details of your
        hybrid form without fully changing into your true form or your alternate
        form. While in hybrid form, your foxlike features make it obvious that
        you aren’t a normal humanoid.
      </span>
    ),
  },
  {
    id: 8,
    name: "Kitsune spell mysteries",
    action: "",
    tags: ["kistune"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least one innate spell from a kitsune
          heritage or ancestry feat.
        </span>
        <br />
        You know more kitsune magic. During your daily preparations, choose
        bane, illusory object, or sanctuary. You can cast this as a 1st-level
        divine innate spell once that day.
      </span>
    ),
  },
  {
    id: 9,
    name: "Myriad forms",
    action: "",
    tags: ["kistune"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        With a bit of self-discovery, you find a new form. You gain the
        alternate form of a kitsune heritage other than your own, adding it to
        the options for your Change Shape.
      </span>
    ),
  },
  {
    id: 10,
    name: "Shifting faces",
    action: "",
    tags: ["kistune"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Prerequisites:</b> tailless alternate form.
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        You wear many faces, even those that don’t belong to you. When you
        Change Shape into your tailless form, you gain the effects of 3rd-level
        illusory disguise for 1 hour or until you shift back, except it’s a
        transmutation effect rather than an illusion.
      </span>
    ),
  },
  {
    id: 11,
    name: "Fox trick",
    action: "",
    tags: ["kistune"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour.
        </span>
        <br />
        You always have time for a joke or prank. You Create a Diversion,
        Conceal an Object, or Hide. All creatures who witnessed your Fox Trick
        then wise up to it, becoming temporarily immune to your Fox Trick for 24
        hours.
      </span>
    ),
  },
  {
    id: 12,
    name: "Killing stone",
    action: "",
    tags: ["kistune"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Star Orb.
        </span>
        <br />
        Your star orb hides a deadly miasma. You can cast 5th-level cloudkill as
        a divine innate spell once per day. The spell’s normal components are
        replaced with a focus component (your star orb) and a somatic component
        to aim the orb towards the location for the spell.
      </span>
    ),
  },
  {
    id: 13,
    name: "Kitsune spell expertise",
    action: "",
    tags: ["kistune"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Kitsune Spell Mysteries.
        </span>
        <br />
        Your tails show your magical mastery. During your daily preparations,
        choose confusion, death ward, or illusory scene. You can Cast this Spell
        as a 5th-level divine innate spell once that day. You become an expert
        in divine spell DCs and divine spell attack rolls.
      </span>
    ),
  },
  {
    id: 14,
    name: "Rampaging form",
    action: "",
    tags: ["kistune"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Change Shape with a fox alternate form.
        </span>
        <br />
        Once per day, when you Change Shape into a fox, you can instead gain the
        effects of both the canine form of 5th-level animal form and 7th-level
        fiery body for 1 minute or until you shift back, whichever comes first.
        You can cast produce flame from the fiery body effect even though you’re
        in a battle form.
        <br />
        <br />
        <b>Special:</b> If you are a frozen wind kitsune, your form is ice
        instead of fire. This changes the immunity and damage from the fiery
        body effect to cold, changes the weakness to fire, and changes produce
        flame to ray of frost.
      </span>
    ),
  },
];
