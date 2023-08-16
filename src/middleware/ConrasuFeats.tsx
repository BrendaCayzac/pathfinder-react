import React from "react";

export const conrasuFeats = [
  {
    id: 1,
    name: "Ceremony of protection",
    action: "one_action",
    tags: ["conrasu", "manipulation"],
    level: 1,
    feat: "Feat 1",
    description:
      "You manipulate your exoskeleton to overlap itself. You gain a +1 circumstance bonus to AC until the start of your next turn.",
  },
  {
    id: 2,
    name: "Ceremony of evened hand",
    action: "",
    tags: ["conrasu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have cultivated your exoskeleton’s form for close combat, using
        knots, whorls, and reinforced branches. When you select this feat, you
        gain a claws unarmed attack that deals 1d4 slashing damage and has the
        agile and finesse traits or a branch unarmed attack that deals 1d6
        bludgeoning damage and has the backswing trait. Each of these unarmed
        attacks is in the brawling weapon group and uses one of your hands.
        Special You can select this feat twice, choosing the other unarmed
        attack the second time you take it.
        <br />
        <br />
        <b>Special:</b> You can select this feat twice, choosing the other
        unarmed attack the second time you take it.
      </span>
    ),
  },
  {
    id: 3,
    name: "Conrasu lore",
    action: "",
    tags: ["conrasu"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have learned about your history and your people from shapers. You gain the trained proficiency rank in Crafting and Occultism. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Conrasu Lore.",
  },
  {
    id: 4,
    name: "Conrasu Weapin Familiarity",
    action: "",
    tags: ["conrasu"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have taken it upon yourself to learn the ways of combat to aid with your tasks, perhaps in a role as a corrector. You are trained with the composite shortbow, glaive, longspear, longsword, shortbow, and spear. You also gain access to all uncommon conrasu weapons (see Ancestral Gear in Pathfinder Lost Omens Ancestry Guide ). For the purpose of determining your proficiency, martial conrasu weapons are simple weapons and advanced conrasu weapons are martial weapons.",
  },
  {
    id: 5,
    name: "Ceremony of knowledge",
    action: "",
    tags: ["conrasu"],
    level: 5,
    feat: "Feat 5",
    description:
      "You tap into aeon knowledge. You gain the Untrained Improvisation general feat. In addition, you can attempt skill actions that normally require you to be trained, even if you are untrained.",
  },
  {
    id: 6,
    name: "Ceremony of sunlight",
    action: "",
    tags: ["conrasu"],
    level: 5,
    feat: "Feat 5",
    description:
      "You have learned how to master the power contained within sunlight, just like the trees that form your body. Your Sunlight Healing recovers 1d8 Hit Points per level.",
  },
  {
    id: 7,
    name: "Conrasu weapon understanding",
    action: "",
    tags: ["conrasu"],
    level: 5,
    feat: "Feat 5",
    description:
      "You have come to know conrasu weapons as you know yourself. Whenever you critically hit using a composite shortbow, glaive, longspear, longsword, shortbow, spear, or a conrasu weapon, you apply the weapon’s critical specialization effect.",
  },
  {
    id: 8,
    name: "Ceremony of Aeon's guidance",
    action: "",
    tags: ["conrasu"],
    level: 9,
    feat: "Feat 9",
    description:
      "Your patron aeon has allowed you to call upon their gifts to serve their ends. You can cast augury and calm emotions each once per day as 2nd-level divine innate spells.",
  },
  {
    id: 9,
    name: "Ceremony of Aeon's shield",
    action: "",
    tags: ["conrasu"],
    level: 9,
    feat: "Feat 9",
    description:
      "Your patron aeon graced you with powers of protection. You can cast resist energy and shield other each once per day as 2nd-level divine innate spells.",
  },
  {
    id: 10,
    name: "Ceremony of fortification",
    action: "",
    tags: ["conrasu"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ceremony of Protection
        </span>
        Your exoskeleton arranges itself into an optimal defensive shape. When
        you use your Ceremony of Protection, you also gain resistance to either
        bludgeoning, piercing, or slashing damage equal to half your level
        against the next Strike that hits you and deals one of those types of
        damage until the start of your next turn.
      </span>
    ),
  },
  {
    id: 11,
    name: "Ceremony of strengthen hand",
    action: "",
    tags: ["conrasu"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ceremony of the Evened Hand
        </span>
        Your exoskeleton’s weapons are even more potent. If you have a claws
        unarmed attack, it gains the deadly d8 trait. If you have a branch
        unarmed attack, it gains the shove and trip traits.
      </span>
    ),
  },
  {
    id: 12,
    name: "Ceremony of growth",
    action: "",
    tags: ["conrasu"],
    level: 13,
    feat: "Feat 13",
    description:
      "You can alter your exoskeleton’s size. You constantly gain the effects of enlarge. You can dismiss or resume these effects as an action, which has the concentrate trait.",
  },
  {
    id: 13,
    name: "Conrasu weapon expertise",
    action: "",
    tags: ["conrasu"],
    level: 13,
    feat: "Feat 13",
    description:
      "Whenever you gain a class feature that grants you expert or greater proficiency in certain weapons, you also gain that proficiency for composite shortbow, glaive, longspear, longsword, shortbow, spear, and all conrasu weapons in which you are trained.",
  },
  {
    id: 14,
    name: "Ceremony of Sun's gift",
    action: "",
    tags: ["conrasu"],
    level: 17,
    feat: "Feat 17",
    description:
      "Your connection to the sun has become an unbreakable bond. You don’t become temporarily immune to the effects of your Sunlight Healing, and instead of rolling to recover Hit Points, you gain the maximum number of HP possible (for example, 64 HP instead of 8d8).",
  },
];
