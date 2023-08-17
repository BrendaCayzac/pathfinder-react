import React from "react";

export const gnollFeats = [
  {
    id: 1,
    name: "Crunch",
    action: "",
    tags: ["gnoll"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your jaws can crush bone and bite through armor. Your jaws unarmed attack deals 1d8 piercing damage instead of 1d6 and gains the grapple trait.",
  },
  {
    id: 2,
    name: "Gnoll lore",
    action: "",
    tags: ["gnoll"],
    level: 1,
    feat: "Feat 1",
    description:
      "You paid attention to your senior hunters to learn their tricks. You gain the trained proficiency rank in Stealth and Survival. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Gnoll Lore.",
  },
  {
    id: 3,
    name: "Gnoll weapon familiarity",
    action: "",
    tags: ["gnoll"],
    level: 1,
    feat: "Feat 1",
    description:
      "You were taught to be a hunter and a raider. You are trained with flails, khopeshes, mambeles (Pathfinder Lost Omens Gods & Magic 120), spears, and war flails.",
  },
  {
    id: 4,
    name: "Hyena familiar",
    action: "",
    tags: ["gnoll"],
    level: 1,
    feat: "Feat 1",
    description:
      "Hyenas serve gnolls as pets, trackers, and in your case, vessels for spirits. You gain a Tiny hyena as a familiar.",
  },
  {
    id: 5,
    name: "Pack hunter",
    action: "",
    tags: ["gnoll"],
    level: 1,
    feat: "Feat 1",
    description:
      "You were taught how to hunt as part of a pack. You gain a +2 circumstance bonus to checks to Aid, and your allies gain a +2 circumstance bonus to checks to Aid you.",
  },
  {
    id: 6,
    name: "Sensitive nose",
    action: "",
    tags: ["gnoll"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your large black nose isn’t just for show. You gain imprecise scent with
        a range of 30 feet.
        <br />
        <br />
        Special You can take this feat only at 1st level, and you can’t retrain
        out of this feat or into this feat.
      </span>
    ),
  },
  {
    id: 7,
    name: "Distant cackle",
    action: "",
    tags: ["gnoll"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> witch gnoll heritage
        </span>
        <br />
        It takes a very brave person to enter the laughter-haunted forest where
        you dwell. You can cast ventriloquism once per day as a 1st-level occult
        innate spell.
      </span>
    ),
  },
  {
    id: 8,
    name: "Gnoll weapon practicality",
    action: "",
    tags: ["gnoll"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Gnoll Weapon Familiarity
        </span>
        <br />
        Whenever you critically hit using flails, khopeshes, mambeles, spears,
        and war flails, you apply the weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 9,
    name: "Pack stalker",
    action: "",
    tags: ["gnoll"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Stealth, Pack Hunter
        </span>
        <br />
        Ambushes are an honored gnoll tradition. You gain the Terrain Stalker
        feat and can extend its effects to a single ally so long as they remain
        within 10 ft. of you. If you have master proficiency in Stealth, you can
        extend the effect to two allies. If you have legendary proficiency in
        Stealth, you can extend it to four allies.
      </span>
    ),
  },
  {
    id: 10,
    name: "Right-hand blood",
    action: "",
    tags: ["gnoll"],
    level: 5,
    feat: "Feat 5",
    description:
      "It’s said that the flesh of the right side of a hyena can heal diseases, but that of the left side is poisonous. You can take 1 damage to feed someone blood from your right side and Administer First Aid or take 2d8 damage to Treat Disease or Treat Wounds; in either case, you don’t need healer’s tools, and gain a +1 item bonus. Blood from your left side causes the check to critically fail automatically.",
  },
  {
    id: 11,
    name: "Breath like honey",
    action: "",
    tags: ["gnoll"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> sweetbreath gnoll heritage
        </span>
        <br />
        You smell of honey and savory things. You can cast enthrall as a
        3rd-level occult innate spell once per day, except the spell has a range
        of 30 feet and the inhaled trait instead of the auditory trait. Targets
        don’t gain any circumstance bonus for disagreeing with you. Your
        circumstance bonus to checks to Make an Impression if the target can
        smell your breath increases to +2.
      </span>
    ),
  },
  {
    id: 12,
    name: "Grandmother's wisdom",
    action: "",
    tags: ["gnoll"],
    level: 9,
    feat: "Feat 9",
    description:
      "You carry the bones of your ancestors with you, and you can ask them for counsel. You can cast augury twice per day as a 2nd-level occult innate spell.",
  },
  {
    id: 13,
    name: "Laughing gnoll",
    action: "",
    tags: ["gnoll"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> master in Intimidation
        </span>
        <br />A gnoll’s sinister giggle is a sound of warning and threat. You
        gain the Battle Cry skill feat. You don’t take a penalty when you
        attempt to Demoralize a creature that doesn’t understand your language.
      </span>
    ),
  },
  {
    id: 14,
    name: "Ancestor's rage",
    action: "",
    tags: ["gnoll"],
    level: 13,
    feat: "Feat 13",
    description:
      "You transform into an enormous otherworldly hyena. You can cast animal form (canine form only) once per day as a 5th-level occult innate spell.",
  },
  {
    id: 15,
    name: "Gnoll weapon expertise",
    action: "",
    tags: ["gnoll"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Gnoll Weapon Practicality
        </span>
        <br />
        Whenever you gain a class feature that grants you expert or greater
        proficiency in a given weapon or weapons, you also gain that proficiency
        in flails, khopeshes, mambeles, spears, and war flails.
      </span>
    ),
  },
];
