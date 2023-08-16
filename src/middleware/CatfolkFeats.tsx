import React from "react";

export const catfolkFeats = [
  {
    id: 1,
    name: "Cat nap",
    action: "",
    tags: ["catfolk", "concentrate", "exporation"],
    level: 1,
    feat: "Feat 1",
    description:
      "You can briefly sleep to regain your energy quickly. Once per hour, by sleeping for 10 minutes, you can gain temporary Hit Points equal to your level that last for 10 minutes.",
  },
  {
    id: 2,
    name: "Cat's luck",
    action: "",
    tags: ["catfolk", "fortune"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once a day
        </span>
        <br /> <br />
        <span className="frequency">
          <b>Trigger:</b>You fail a Reflex saving throw.
        </span>
        <br />
        You instinctively twist away from danger. You can reroll the triggering
        saving throw and use the better result.
      </span>
    ),
  },
  {
    id: 3,
    name: "Catfolk dance",
    action: "one_action",
    tags: ["catfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have a habit of always being in the way when other creatures attempt
        to move. Attempt an Acrobatics check against an adjacent creature’s
        Reflex DC.
        <br /> <br />
        <span>
          <b>Critical Success:</b> The target creature gains a –2 circumstance
          penalty to Reflex saves and is flat-footed until the start of your
          next turn.
        </span>
        <br /> <br />
        <span>
          <b>Success:</b> The target creature gains a –2 circumstance penalty to
          Reflex saves until the start of your next turn.
        </span>
      </span>
    ),
  },
  {
    id: 4,
    name: "Catfolk lore",
    action: "",
    tags: ["catfolk"],
    level: 1,
    feat: "Feat 1",
    description:
      "Growing up among catfolk has taught you the traditional values of freedom to travel, stewardship of the land, and quick reactions when your curiosity lands you in trouble. You gain the trained proficiency rank in Acrobatics and Survival. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Catfolk Lore.",
  },
  {
    id: 5,
    name: "Catfolk weapon familiarity",
    action: "",
    tags: ["catfolk"],
    level: 1,
    feat: "Feat 1",
    description:
      "You favor weapons that you can use with quick, darting slashes like a cat’s claws. You are trained with the hatchet, kama, kukri, scimitar, and sickle. In addition, you gain access to kama, kukris, and all uncommon catfolk weapons. For you, martial catfolk weapons are simple weapons and advanced catfolk weapons are martial weapons.",
  },
  {
    id: 6,
    name: "Saber teeth",
    action: "",
    tags: ["catfolk"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have long fangs, natural or augmented. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the unarmed trait.",
  },
  {
    id: 7,
    name: "Well-time travceler",
    action: "",
    tags: ["catfolk"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have seen people from so many walks of life in your travels that you naturally adopt a pleasant and affable demeanor when meeting others. You are trained in Diplomacy. If you would automatically become trained in Diplomacy (from your background or class, for example), you instead become trained in a skill of your choice.\n" +
      "\n" +
      "In addition, you gain the Hobnobber skill feat.",
  },
  {
    id: 8,
    name: "Winter cat senses",
    action: "one_action",
    tags: ["catfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> winter catfolk heritage APG.
        </span>
        <br />
        Your eyes are keen and accustomed to winter conditions. You ignore
        concealment caused by ice and snow.
      </span>
    ),
  },
  {
    id: 9,
    name: "Catlfolk weapon rake",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Catfolk Weapon Familiarity
        </span>
        <br />
        You know how to efficiently use weapons that rake across your enemies.
        Whenever you critically hit using a catfolk weapon or one of the weapons
        listed in Catfolk Weapon Familiarity, you apply the weapon’s critical
        specialization effect.
      </span>
    ),
  },
  {
    id: 10,
    name: "Climbing claws",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description:
      "You can extend your claws to aid you in climbing. You gain a climb Speed of 10 feet.",
  },
  {
    id: 11,
    name: "Expanded luck",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cat’s Luck
        </span>
        <br />
        You are luckier even than most catfolk. You can trigger Cat’s Luck when
        you fail or critically fail a Fortitude or Will saving throw in addition
        to Reflex saving throws. You still can use Cat’s Luck only once per day.
      </span>
    ),
  },
  {
    id: 12,
    name: "Focused cat nap",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cat Nap, focus pool
        </span>
        <br />
        When you Cat Nap, you can also Refocus as you dream of a relevant
        activity.
      </span>
    ),
  },
  {
    id: 13,
    name: "Graceful guidance",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description:
      "You can demonstrate how to quickly twist out of the way of dangerous effects. You can use the Aid reaction to grant a bonus to an ally’s Reflex save. As usual for Aid, you need to prepare by using an action on your turn to encourage the ally.",
  },
  {
    id: 14,
    name: "Light paws",
    action: "two_action",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description:
      "You can balance on your toes to step carefully over obstructions. You Stride and then Step, or Step and then Stride, ignoring difficult terrain during this movement.",
  },
  {
    id: 15,
    name: "Lucky break",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cat's luck.
        </span>
        <br />
        You catch yourself as you make a mistake. You can trigger Cat’s Luck
        when you fail or critically fail on an Athletics or Acrobatics skill
        check, in addition to its normal trigger. When you do, you reroll the
        triggering skill check and use the better result. This still counts
        against Cat’s Luck’s frequency, as normal.
      </span>
    ),
  },
  {
    id: 16,
    name: "Pride hunter",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description:
      "You avoid the attention of creatures focused on your allies. You can use lesser cover from your allies to Hide.",
  },
  {
    id: 17,
    name: "Springing leaper",
    action: "",
    tags: ["catfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Athletics.
        </span>
        <br />
        Your powerful legs allow you to make sudden and dramatic leaps. You can
        Leap as a 2-action activity to double the distance you can Leap
        vertically, or Leap as a 3-action activity to triple the distance you
        can Leap vertically. You don’t automatically fail Long Jumps for jumping
        in a different direction than your Stride.
      </span>
    ),
  },
  {
    id: 18,
    name: "Aggravating scratch",
    action: "",
    tags: ["catfolk", "disease"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> claw unarmed attack.
        </span>
        <br />
        Your claws carry an irritant that is harmless to you but can be damaging
        to others. Your claw Strikes deal an additional 1d4 persistent poison
        damage on a critical hit.
      </span>
    ),
  },
  {
    id: 19,
    name: "Evade doom",
    action: "",
    tags: ["catfolk"],
    level: 9,
    feat: "Feat 9",
    description:
      "You can elude supernatural disaster. When you would gain the doomed condition, you can attempt a DC 17 flat check. On a success, you don’t gain the doomed condition.",
  },
  {
    id: 20,
    name: "No evidence",
    action: "",
    tags: ["catfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Survival.
        </span>
        <br />
        You leave little sign when attempting to remain unseen. When you Avoid
        Notice, you also gain the benefits of Cover Tracks unless you choose not
        to.
      </span>
    ),
  },
  {
    id: 21,
    name: "Predator's growl",
    action: "reaction",
    tags: ["catfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> expert in Intimidation.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You successfully Seek a hidden or undetected creature.
        </span>
        <br />
        You give a throaty growl to attempt to Demoralize a creature you just
        found. You don’t take the –4 penalty for not sharing a language with the
        creature.
      </span>
    ),
  },
  {
    id: 22,
    name: "Sense for trouble",
    action: "",
    tags: ["catfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cat's luck.
        </span>
        <br />
        You can tell when something’s off. You can trigger Cat’s Luck after you
        roll initiative, in addition to its normal trigger, to reroll your
        Initiative and take the higher of the two results. This still counts
        against Cat’s Luck’s frequency, as normal.
      </span>
    ),
  },
  {
    id: 23,
    name: "Shared luck",
    action: "",
    tags: ["catfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cat's luck.
        </span>
        <br />
        When you use Cat’s Luck to reroll a Reflex saving throw, any creatures
        you choose within 10 feet who also just failed a Reflex saving throw
        against the same effect (such as a single spell) can also reroll their
        saving throws and use the better result.
      </span>
    ),
  },
  {
    id: 24,
    name: "Silent step",
    action: "one_action",
    tags: ["catfolk", "flourish"],
    level: 9,
    feat: "Feat 9",
    description:
      "You vanish with silent treads. You Step, then Hide or Sneak. You still need to meet the requirements to Hide or Sneak, as normal.",
  },
  {
    id: 25,
    name: "Wary skulker",
    action: "",
    tags: ["catfolk", "flourish"],
    level: 9,
    feat: "Feat 9",
    description:
      "Ever alert, you scout for danger even when you are trying to stay hidden. You can perform the Scout exploration activity at the same time as the Avoid Notice exploration activity.",
  },
  {
    id: 26,
    name: "Well-groomed",
    action: "",
    tags: ["catfolk"],
    level: 9,
    feat: "Feat 9",
    description:
      "You are fastidious about keeping yourself clean, whether licking your fur or carefully using traditional catfolk hygiene products, to salubrious effect. You gain a +1 circumstance bonus to saving throws against diseases. If you roll a success on a saving throw against a disease, you get a critical success instead.",
  },
  {
    id: 27,
    name: "Black cat curse",
    action: "reaction",
    tags: ["catfolk", "divination", "misfortune", "occult"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature within 30 feet you can see would succeed at
          a save.
        </span>
        <br />
        You hiss a spiteful curse at the creature. The target must reroll the
        triggering saving throw and use the worse result.
      </span>
    ),
  },
  {
    id: 28,
    name: "Caterwaule",
    action: "reaction",
    tags: ["auditory", "catfolk", "concentrate", "emotion", "mental"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> An ally within 30 feet would be reduced to 0 HP but
          not immediately killed.
        </span>
        <br />
        You give a daring yowl in the face of adversity, calling your companion
        back from the brink of unconsciousness. Your ally isn’t knocked out and
        remains at 1 Hit Point. Your ally’s wounded condition still increases by
        1 as though they had been dying and recovered.
      </span>
    ),
  },
  {
    id: 29,
    name: "Catfolk weapon expertise",
    action: "",
    tags: ["auditory"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Catfolk Weapon Familiarity.
        </span>
        <br />
        Whenever you gain a class feature that grants you expert or greater
        proficiency in certain weapons, you also gain that proficiency rank in
        all weapons you are trained in from Catfolk Weapon Familiarity.
      </span>
    ),
  },
  {
    id: 30,
    name: "Inspirit hazard",
    action: "reaction",
    tags: ["catfolk", "concentrate", "occult", "transmutation"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span>
          <b>Trigger:</b> You Disable a hazard.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> The hazard isn’t broken.
        </span>
        <br />
        You awaken a spirit of creation within the hazard. You learn the
        hazard’s effects. Once in the next 10 minutes, when you observe a
        creature take an action that would trigger one of the hazard’s reactions
        or free actions if you hadn’t Disabled it, you can use a reaction to
        rearm the hazard, causing the observed creature to trigger it
        immediately.
      </span>
    ),
  },
  {
    id: 31,
    name: "Elude trouble",
    action: "reaction",
    tags: ["catfolk"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> A creature misses you with a melee attack.
        </span>
        <br />
        You slip through your foe’s opening. Stride up to your Speed. This
        movement doesn’t trigger movement-based reactions from the creature that
        missed you.
      </span>
    ),
  },
  {
    id: 31,
    name: "Reliable luck",
    action: "reaction",
    tags: ["catfolk"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cat’s Luck.
        </span>
        <br />
        You have gone well past nine lives to survive danger with surprising
        regularity. You can use Cat’s Luck once per hour, rather than once per
        day.
      </span>
    ),
  },
  {
    id: 32,
    name: "Ten lives",
    action: "",
    tags: ["catfolk"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Evade Doom.
        </span>
        <br />
        When your character would die, you can attempt a DC 17 flat check. On a
        success, you’re instead reduced to 0 HP and a dying value 1 less than
        would normally kill you (typically dying 3). This doesn’t change the
        result for any other creature affected.
      </span>
    ),
  },
];
