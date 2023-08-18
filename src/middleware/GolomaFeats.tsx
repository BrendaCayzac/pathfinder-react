import React from "react";

export const golomaFeats = [
  {
    id: 1,
    name: "Catch the details",
    action: "",
    tags: ["goloma"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You are quick at recognizing broad details about people and things
        around you. You are trained in Society and gain the Eye for Numbers
        skill feat. If you would automatically become trained in Society (from
        your background or class, for example), you instead become trained in a
        skill of your choice.
      </span>
    ),
  },
  {
    id: 2,
    name: "Goloma courage",
    action: "",
    tags: ["goloma"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        The most important thing you’ve learned living with fear is how to
        overcome it. When you roll a success on a saving throw against a fear
        effect, you get a critical success instead. In addition, you gain a +1
        circumstance bonus to Will saves against fear effects and a +2
        circumstance bonus to your Will DC against attempts to Demoralize you.
      </span>
    ),
  },
  {
    id: 3,
    name: "Goloma lore",
    action: "",
    tags: ["goloma"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You lived an insulated life focused on avoiding danger. You gain the
        trained proficiency rank in Stealth and Survival. If you would
        automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You also become trained in Goloma Lore.
      </span>
    ),
  },
  {
    id: 4,
    name: "Pierce the darkness",
    action: "",
    tags: ["goloma"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> low-light vision
        </span>
        Your eyes have adapted to see in all circumstances, even without the
        assistance of light. You gain darkvision, allowing you to see in
        darkness and dim light just as well as you can in bright light. However,
        in darkness you see in black and white only.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of this feat or into this feat.
      </span>
    ),
  },
  {
    id: 5,
    name: "watchful guess",
    action: "one_action",
    tags: ["concentrate", "goloma"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You use your many eyes to look in all directions at once, making you
        extremely observant for a short period of time. You gain all-around
        vision until the start of your next turn. This lets you see in all
        directions and prevents you from being flanked.
      </span>
    ),
  },
  {
    id: 6,
    name: "Ambush awareness",
    action: "",
    tags: ["goloma"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You gain a +2 circumstance bonus to Perception checks attempted as
        initiative rolls. Additionally, if your initiative roll result is tied
        with that of an opponent, you go first, regardless of whether you rolled
        Perception or not.
      </span>
    ),
  },
  {
    id: 6,
    name: "Protective claws",
    action: "",
    tags: ["goloma"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> vicious goloma heritage
        </span>
        The chitin on your claws is so hard you can defend against attacks with
        them. Your claw unarmed attack from the vicious goloma heritage gains
        the parry weapon trait.
      </span>
    ),
  },
  {
    id: 7,
    name: "Constante gaze",
    action: "",
    tags: ["goloma"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Watchful Gaze
        </span>
        Your eyes keep a continual watch for dangers from all sides. You can’t
        be flanked by creatures of your level or lower, even when you haven’t
        used Watchful Gaze.
      </span>
    ),
  },
  {
    id: 8,
    name: "Defensive instincts",
    action: "one_action",
    tags: ["goloma"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> you are adjacent to at least two enemies.
        </span>
        Your body tenses up when surrounded, putting you on edge just enough to
        anticipate an attack. You gain a +1 circumstance bonus to AC until the
        beginning of your next turn and Step.
      </span>
    ),
  },
  {
    id: 9,
    name: "Arcane sight",
    action: "",
    tags: ["goloma"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> ability to cast the detect magic cantrip.
        </span>
        You’ve trained yourself to constantly be on the lookout for magical
        effects, even when focusing on looking out for other things. When you
        are Searching, you also gain the benefits of Detect Magic unless you
        choose not to. See Exploration Mode in the Core Rulebook for more
        information about exploration activities.
      </span>
    ),
  },
  {
    id: 10,
    name: "See the unseen",
    action: "",
    tags: ["goloma"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You notice things that others can’t see at all. While you’re adjacent to
        an undetected creature of your level or lower, it is instead only hidden
        from you. You only need a successful DC 5 flat check to target a hidden
        creature.
      </span>
    ),
  },
  {
    id: 11,
    name: "True gaze",
    action: "one_action",
    tags: ["arcane", "concentrate", "divination", "goloma"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour
        </span>
        When you focus your eyes carefully, your gaze can pierce through all
        obfuscations, even magical ones. When you use True Gaze, you gain the
        effects of a 6th-level true seeing spell, using your Perception modifier
        for the counteract check.
      </span>
    ),
  },
];
