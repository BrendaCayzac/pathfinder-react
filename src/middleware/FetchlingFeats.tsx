import React from "react";

export const fetchlingFeats = [
  {
    id: 1,
    name: "Fetchling Lore",
    action: "",
    tags: ["fetchling"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve learned obscure lessons about your fellow fetchlings. You’re trained in Occultism and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Shadow Plane Lore.",
  },
  {
    id: 2,
    name: "Hard to fool",
    action: "",
    tags: ["fetchling"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’re accustomed to seeing through shifting darkness and bewildering magic. You gain a +1 circumstance bonus on Perception checks against illusions as well as to Will saves against illusions and shadow effects.",
  },
  {
    id: 3,
    name: "Shadow blending",
    action: "reaction",
    tags: ["fetchling", "illusion", "occult", "shadow"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> A creature attempts a flat check to target you while
          you’re concealed or hidden due to dim light or darkness.
        </span>
        <br />
        You draw shadows close to create a shroud. Increase the DC of the flat
        check by 2.
      </span>
    ),
  },
  {
    id: 4,
    name: "Shrouded magic",
    action: "",
    tags: ["fetchling"],
    level: 1,
    feat: "Feat 1",
    description:
      "Choose one cantrip from the occult spell list. You can cast this cantrip as an occult innate spell at will, heightened to a spell level equal to half your level rounded up.",
  },
  {
    id: 5,
    name: "Shrouded mien",
    action: "",
    tags: ["fetchling"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’re used to dealing with dangerous situations and sinister creatures. You become trained in Deception (or another skill of your choice, if you’re already trained in Deception), and you gain the Lengthy Diversion skill feat as a bonus feat.",
  },
  {
    id: 6,
    name: "slink",
    action: "",
    tags: ["fetchling"],
    level: 1,
    feat: "Feat 1",
    description:
      "You can move through gloom with the speed of darkness. You can move 5 feet farther when you take the Sneak action, up to your Speed. In addition, as long as you continue to use Sneak actions and succeed at your Stealth check, you don’t become observed if you end a Sneak action in dim light or darkness, as long as you have cover or greater cover or are concealed at the end of your turn.",
  },
  {
    id: 7,
    name: "clever shadow",
    action: "",
    tags: ["evocation", "fetchling", "ccult", "shadow"],
    level: 5,
    feat: "Feat 5",
    description:
      "You can perform simple Interact actions with your shadow, such as opening an unlocked door. Anything your shadow Interacts with must be within your reach. Your shadow can’t perform actions that require significant manual dexterity, including any action that would require a check to accomplish, and you can’t use it to hold items.",
  },
  {
    id: 8,
    name: "Extinguish light",
    action: "two_action",
    tags: ["darkness", "evocation", "fletching", "occult"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once every 10 minutes
        </span>
        <br />
        You wrap shadow around a single unattended light source within 120 feet
        that’s no larger than a torch. Any non-magical light source you target
        is automatically extinguished. For magical light sources, attempt a
        counteract check using your Fortitude or Thievery modifier against the
        target’s DC. Your counteract level is equal to half your level rounded
        up. Successfully counteracting the light source suppresses its ability
        to produce light for 1 minute, but not any other effects. If you’re in
        dim light or darkness when you Extinguish Light, its range is 240 feet.
      </span>
    ),
  },
  {
    id: 9,
    name: "Lightess litheness",
    action: "",
    tags: ["fetchling"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your body is almost as flexible as your shadow. When you critically fail at Squeezing, you get a failure instead. Additionally, when you roll a success at an Escape check, you get a critical success instead; if you roll a critical success, you can Step instead of Striding up to 5 feet.",
  },
  {
    id: 10,
    name: "Shadowy disguise",
    action: "",
    tags: ["fetchling"],
    level: 5,
    feat: "Feat 5",
    description:
      "You wrap yourself in shadow to change your appearance. You can cast illusory disguise as a 1st-level occult innate spell once per day. This spell gains the shadow trait.",
  },
  {
    id: 11,
    name: "Hefting shadow",
    action: "",
    tags: ["conjuration", "fletching", "occult", "shadow"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Clever Shadow
        </span>
        <br />
        Your shadow can contain objects. You can Interact with your shadow to
        store or retrieve objects, just like you would a mundane container
        (meaning you spend two Interact actions total to store and then retrieve
        the object, for example). Your shadow can contain 2 Bulk of objects,
        which don’t count toward the Bulk you’re carrying. The items remain
        solid but take on a shadowy patina while stored this way. Though the
        items are in your shadow and can be detected normally, you gain a +2
        circumstance bonus to Stealth checks to Conceal the Objects unless
        someone knows to check your shadow for items.
      </span>
    ),
  },
  {
    id: 12,
    name: "Sculpt shadows",
    action: "three_action",
    tags: ["conjuration", "fletching", "occult", "shadow"],
    level: 9,
    feat: "Feat 9",
    description:
      "You coax nearby shadows into the shape of a simple weapon or a simple tool or item, using a tiny piece of your shadow to make it solid; in doing so, you lose 1 Hit Point. You can create only level-0 common, non-consumable weapons, or adventuring gear with no intricate parts, written text, or other complicated components. The item lasts until used for a single activity, until you Sculpt Shadows again, or for 1 minute, whichever comes first. Once the duration expires, the object dissipates, and you regain the lost Hit Point unless the item was Broken or Destroyed. As the object holds a tiny sliver of your shadow, you can’t recover the lost Hit Point until after the object dissipates.",
  },
  {
    id: 13,
    name: "Shadow light",
    action: "one_action",
    tags: ["fletching", "occult", "transmutation"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour
        </span>
        <br />
        You draw on your connection with the Shadow Plane to see through all but
        the deepest darkness. You gain greater darkvision for 1 minute.
      </span>
    ),
  },
  {
    id: 14,
    name: "shadow's assault",
    action: "",
    tags: ["fletching"],
    level: 13,
    feat: "Feat 13",
    description:
      "Your shadow assaults your foes. You can cast shadow blast as a 5th-level occult innate spell once per day. At 17th level, your shadow blast is heightened to 6th level.",
  },
  {
    id: 15,
    name: "skirt the light",
    action: "",
    tags: ["uncommon", "fletching"],
    level: 13,
    feat: "Feat 13",
    description:
      "You can travel the border between the Material and Shadow Planes and even bring others along. You can cast shadow walk as an occult innate spell once per day.",
  },
  {
    id: 16,
    name: "Pierce the light",
    action: "",
    tags: ["uncommon", "fletching"],
    level: 17,
    feat: "Feat 17",
    description:
      "You tear the veil between the Material Plane and its shadow. You can cast plane shift twice per week as an occult innate spell that can only target yourself; you can travel only to the Material or Shadow Planes, and your body serves as the focus component.",
  },
];
