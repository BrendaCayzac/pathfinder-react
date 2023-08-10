export const androidFeats = [
  {
    id: 1,
    name: "Android Lore",
    action: "",
    tags: ["android"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have a keen interest in the origins of your people. You gain the trained proficiency rank in Crafting and Thievery. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Android Lore.",
  },
  {
    id: 2,
    name: "Cleansing subroutine",
    action: "",
    tags: ["android"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your nanites help purge your body of harmful chemicals and toxins. Each time you succeed at a Fortitude save against an ongoing poison, you reduce its stage by 2, or by 1 against a virulent poison. Each critical success you achieve against an ongoing poison reduces its stage by 3, or by 2 against a virulent poison.",
  },
  {
    id: 3,
    name: "Emotionless",
    action: "",
    tags: ["android"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your malfunctioning emotional processors make it difficult for you to feel strong emotions. You gain a +1 circumstance bonus to saving throws against emotion and fear effects. If you roll a success on a saving throw against an emotion or fear effect, you get a critical success instead.",
  },
  {
    id: 4,
    name: "Internal compartment",
    action: "",
    tags: ["android"],
    level: 1,
    feat: "Feat 1",
    description:
      "You can hide a small object of up to light Bulk inside a hollow cavity on one of your forearms. It takes three Interact actions to store an object in this way. You gain a +4 circumstance bonus to the DCs of checks for others to Seek or Steal objects stored inside your arm. If you store a weapon in your arm, you can use a single action to Interact to draw the weapon into the hand corresponding to your internal cavity, then Strike with the weapon.",
  },
  {
    id: 5,
    name: "Nanite surge",
    action: "reaction",
    tags: ["android", "concentrate"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour
        </span>
        <br />
        <b>Trigger:</b> You attempt a skill check requiring three actions or
        fewer.
        <br />
        <br />
        You stimulate your nanites, forcing your body to temporarily increase
        its efficiency. You gain a +2 status bonus to the triggering skill
        check. In addition, your circuitry glows, lighting a 10-foot emanation
        with dim light for 1 round.
      </span>
    ),
  },
  {
    id: 6,
    name: "Nightvision adaptation",
    action: "",
    tags: ["android"],
    level: 1,
    feat: "Feat 1",
    description:
      "The nanites in your ocular processors have adapted to darkness, enhancing your ability to see in the dark. You gain darkvision.",
  },
  {
    id: 7,
    name: "Proximity alert",
    action: "",
    tags: ["android"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’re unnaturally in tune with your surroundings and react instinctively to danger. You gain a +2 circumstance bonus to Perception checks made as initiative rolls.",
  },
  {
    id: 8,
    name: "Radiant Circuitry",
    action: "one_action",
    tags: ["android", "concentrate", "light"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your biological circuitry emits light like a torch, casting bright light in a 20-foot radius (and dim light for the next 20 feet). The light shuts off when you take this action again or are knocked unconscious.",
  },
  {
    id: 9,
    name: "Advanced targeting system",
    action: "",
    tags: ["android"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your ocular processors are augmented with advanced targeting systems, which allow you to more easily pinpoint your enemy and read their movements. You can cast true strike once per day as a 1st-level arcane innate spell.",
  },
  {
    id: 10,
    name: "Inoculation subroutine",
    action: "",
    tags: ["android"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your nanites reject diseases with ease. Each time you succeed at a Fortitude save against an ongoing disease, you reduce its stage by 2, or by 1 against a virulent disease. Each critical success you achieve against an ongoing disease reduces its stage by 3, or by 2 against a virulent disease.",
  },
  {
    id: 11,
    name: "Nanite Shroud",
    action: "two_action",
    tags: ["android"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Your nanites fly out of your body, swarming around you in a cloud. You
        become concealed for a number of rounds equal to half your level. You
        can’t use this concealment to Hide or Sneak, as normal for concealment
        that makes your position obvious. While Nanite Shroud is active, you
        can’t use other abilities that require the use of your nanites.
      </span>
    ),
  },
  {
    id: 12,
    name: "Protective subroutine",
    action: "",
    tags: ["android"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Nanite surge.
        </span>
        <br />
        Your nanites can augment your defenses. You can choose to activate
        Nanite Surge when you attempt a saving throw, instead of when you
        attempt a skill check. If you do, you gain a +2 status bonus to the
        triggering saving throw.
      </span>
    ),
  },
  {
    id: 13,
    name: "internal respirator",
    action: "",
    tags: ["android"],
    level: 9,
    feat: "Feat 9",
    description:
      "Your body can internally synthesize oxygen for limited periods of time. When you hold your breath, you can do so for an additional hour due to your internal air reservoirs. At the end of this hour, your air reservoirs are expended. Refilling your empty air reservoirs takes 10 minutes of exposure to breathable air.",
  },
  {
    id: 14,
    name: "Offensive subroutine",
    action: "",
    tags: ["android"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Nanite surge.
        </span>
        <br />
        Nanites augment your attacks. You can choose to activate Nanite Surge
        when you attempt an attack roll, instead of when you attempt a skill
        check. If you do, you gain a +1 status bonus to the triggering attack
        roll.
      </span>
    ),
  },
  {
    id: 15,
    name: "Repair module",
    action: "one_action",
    tags: ["android", "concentrate"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        You trigger your body’s repair programming, causing your body’s nanites
        to heal your wounds. You gain fast healing equal to half your level for
        1 minute. While Repair Module is active, you can’t use other abilities
        that require the use of your nanites.
      </span>
    ),
  },
  {
    id: 16,
    name: "Consistent surge",
    action: "",
    tags: ["android"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Nanite Surge
        </span>
        <br />
        Your nanites are incredibly effective, capable of improving your body’s
        efficiency regularly. You can use Nanite Surge with a frequency of once
        per 10 minutes, rather than once per hour.
      </span>
    ),
  },
  {
    id: 17,
    name: "Revivification protocol",
    action: "",
    tags: ["android"],
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
          <b>Trigger:</b> You have the dying condition and are about to attempt
          a recovery check.
        </span>
        <br />
        Your nanites are programmed to automatically revive you. You’re restored
        to 1 Hit Point, lose the dying and unconscious conditions, and can act
        normally on this turn. You gain or increase the wounded condition as
        normal when losing the dying condition in this way.
      </span>
    ),
  },
];
