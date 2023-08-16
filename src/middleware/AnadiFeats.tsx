import React from "react";

export const anadiFeats = [
  {
    id: 1,
    name: "Anadi Lore",
    action: "",
    tags: ["anadi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve learned how to provide for your community, be it through hard-earned sustenance or useful crafts. You gain the trained proficiency rank in Crafting and Survival. If you would automatically become trained in one of those skills (from your background or class, for example), you become trained in a skill of your choice. You also become trained in Anadi Lore.",
  },
  {
    id: 2,
    name: "Reassuring presence",
    action: "reaction",
    tags: ["anadi", "auditory", "visual"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Trigger:</b> An ally within 30 feet gains the frightened condition.
        <br />
        <br />
        ou serve as an anchor to your close companions, calming them in times of
        stress. Decrease the value of the triggering ally’s frightened condition
        by 1. The ally is then temporarily immune to your Reassuring Presence
        for 1 hour.
      </span>
    ),
  },
  {
    id: 3,
    name: "Skitter talk",
    action: "",
    tags: ["anadi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You can ask questions of, receive answers from, and use the Diplomacy skill with spiders and other arachnids. The GM determines which creatures count for this ability.",
  },
  {
    id: 4,
    name: "Studious magic",
    action: "",
    tags: ["anadi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve taken an interest in anadi arcane traditions. Choose one cantrip from the arcane spell list. You can cast this spell as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
  },
  {
    id: 5,
    name: "Web walker",
    action: "",
    tags: ["anadi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have plenty of practice navigating webs. You gain a +2 circumstance bonus to saves and AC against the web spell, natural webbing, and effects that entrap you in webbing, as well as a +1 circumstance bonus against other effects that snare and entangle you, like the entangle spell. Whenever you roll a success on a saving throw against an effect involving a web, you get a critical success instead.",
  },
  {
    id: 6,
    name: "Web weaver",
    action: "",
    tags: ["anadi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You can produce a soft silk to weave into useful items. You gain the Specialty Crafting feat with a specialty in weaving. You can use your webbing to Craft simple, nonconsumable threaded items, such as clothing and rope, at zero cost as long as their base Price is 1 sp or less. These items have no resale value, and they naturally degrade after 24 hours without regular (if minor) maintenance. You can maintain up to 10 such items at a time; if you create a new one, your oldest creation breaks down from neglect. These temporary items take you only 1 day to Craft instead of 4. If you’re an expert in Crafting, you can Craft these items in 1 hour; if you’re a master, you can Craft them in 10 minutes; if you’re legendary, you can Craft them in 1 minute.",
  },
  {
    id: 7,
    name: "Friend form",
    action: "",
    tags: ["anadi"],
    level: 5,
    feat: "Feat 5",
    description:
      "The shared bond between you and your allies allows you to act on their behalf. During your daily preparations, you can perform a simple ritual with up to five willing Small or Medium humanoids, where participants exchange minor tokens of personal significance. As long as you hold onto a participant’s token, you can assume their form with your Change Shape ability, gaining a +4 status bonus to Deception checks to pass as that person and adding your level to the check even if you’re untrained. You lose access to a participant’s form if they’re not carrying your token or if you use the ritual again.",
  },
  {
    id: 8,
    name: "Hunter's fangs",
    action: "",
    tags: ["anadi"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your fangs are exceptionally painful. Whenever you score a critical hit with your fangs unarmed attack, you apply the unarmed attack’s critical specialization effect.",
  },
  {
    id: 9,
    name: "Hybrid shape",
    action: "",
    tags: ["anadi"],
    level: 5,
    feat: "Feat 5",
    description:
      "Mastery of your shapeshifting lets you combine the best features of your humanoid and spider forms. When using your Change Shape ability, you can assume a bipedal hybrid shape. This form gains all the benefits of your spider shape as well as the ability to use items and take manipulate actions just as easily as your human shape.",
  },
  {
    id: 10,
    name: "Disorienting venom",
    action: "",
    tags: ["anadi"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> Venomous Anadi.
        <br />
        <br />
        The venom injected by your fangs disorients your foes. A creature
        damaged by your anadi venom must attempt a Fortitude save against your
        class DC or spell DC, whichever is higher, or become flat-footed for 1
        round.
      </span>
    ),
  },
  {
    id: 11,
    name: "Stand strider",
    action: "",
    tags: ["anadi"],
    level: 9,
    feat: "Feat 9",
    description:
      "Your eight legs serve you well when climbing walls and webs alike. You gain a climb speed of 25 feet in your spider shape.",
  },
  {
    id: 12,
    name: "Studious adept",
    action: "",
    tags: ["anadi"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> Studious Magic.
        <br />
        <br />
        You achieve a breakthrough in your exploration of magic. You gain
        humanoid form and mirror image as 2nd-level arcane innate spells. You
        can cast each of these arcane innate spells once per day.
      </span>
    ),
  },
  {
    id: 13,
    name: "Web hunter",
    action: "",
    tags: ["anadi"],
    level: 9,
    feat: "Feat 9",
    description:
      "Through the careful cultivation of highly sensitive hairs, you’ve developed the ability to sense creatures without seeing them. You gain imprecise tremorsense at a range of 15 feet. When you and a creature are both touching the same anchored, threadlike object (such as a rope, webbing, or wire), your imprecise tremorsense can sense that creature at a range of 60 feet.",
  },
  {
    id: 14,
    name: "Webslinger",
    action: "three_action",
    tags: ["anadi"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per 10 minutes.
        </span>
        <br />
        Your natural ability to create silken webs blends with your magical
        powers, allowing you to create impossibly large webs with great
        frequency. This has the effects of a 2nd-level web spell using your
        class DC or spell DC, whichever is higher.
      </span>
    ),
  },
];
