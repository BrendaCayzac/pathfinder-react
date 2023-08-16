import React from "react";

export const azarketiFeats = [
  {
    id: 1,
    name: "Alghollthu bound",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "Although you may not even be aware, the alghollthus your ancestors once served maintain a stranglehold on the deepest, tethered parts of your mind. You receive a +2 circumstance bonus to Will saves against mental effects that would make you controlled, and if you roll a success against such an effect, you get a critical success instead. However, you gain none of these benefits against effects originating from alghollthus and instead take a –2 circumstance penalty against mental effects from alghollthus.",
  },
  {
    id: 2,
    name: "Ancestral insight",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have extensive knowledge of your ancestors’ ancient origins. You gain the trained proficiency rank in Alghollthu Lore and Azlanti Lore. If you roll a critical failure on an Alghollthu Lore or Azlanti Lore check to Recall Knowledge, you get a failure instead.",
  },
  {
    id: 3,
    name: "Azarketi Lore",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have learned the history and origins of your people and how to connect to both your land and sea heritage. You become trained in Athletics and Nature. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Azarketi Lore.",
  },
  {
    id: 4,
    name: "Azarketi weapon familiarity",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You are familiar with weapons that excel underwater. You are trained with crossbows, hand crossbows, longspears, spears, and tridents.\n" +
      "\n" +
      "In addition, you gain access to all uncommon azarketi weapons. For the purpose of determining your proficiency, martial azarketi weapons are simple weapons and advanced azarketi weapons are martial weapons.",
  },
  {
    id: 5,
    name: "Cynical",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve been approached with suspicion and distrust throughout your life and return these sentiments back to the strangers you encounter. As a result, you are difficult to deceive. You gain a +1 circumstance bonus to your Perception DC against Lies and Impersonations.",
  },
  {
    id: 6,
    name: "Hydraulic deflection",
    action: "one_action",
    tags: ["azarketi", "abjuration", "oncentrate", "primal", "water"],
    level: 1,
    feat: "Feat 1",
    description:
      "Drawing moisture from the atmosphere, you create a disc of hovering water that deflects attacks. You gain a +1 circumstance bonus to AC until the start of your next turn.",
  },
  {
    id: 7,
    name: "Pelagic attitude",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve learned special tricks to survive underwater. You gain the trained proficiency rank in Survival. When in an aquatic environment, if you roll a critical failure on a Survival skill check to Sense Direction or Subsist, you get a failure instead.",
  },
  {
    id: 8,
    name: "Perfect dive",
    action: "one_action",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You dive into the water with exceptional skill and connection to the waves, urging the water itself to cushion your fall. You intentionally Leap or otherwise fall into the water, taking no falling damage regardless of the distance.",
  },
  {
    id: 9,
    name: "Striking retribution",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have an appropriately intense hatred for alghollthus. You gain a +2 circumstance bonus to damage with weapons and unarmed attacks against creatures from the alghollthu family and those that serve alghollthus (the GM determines which creatures serve an alghollthu). In addition, if an alghollthu successfully affects you or one of your allies within 60 feet with an enchantment, your circumstance bonus to damage against that alghollthu increases to +4 for 1 minute.",
  },
  {
    id: 10,
    name: "Surface skimmer",
    action: "",
    tags: ["azarketi"],
    level: 1,
    feat: "Feat 1",
    description:
      "By sinking gently beneath the waves, you obscure your presence and utilize the water as a barrier between you and land combatants. While you are submerged just below the water’s surface, you have cover from attacks made by creatures out of the water.",
  },
  {
    id: 11,
    name: "aquatic conversationalist",
    action: "",
    tags: ["azarketi"],
    level: 5,
    feat: "Feat 5",
    description:
      "You can ask questions of, receive answers from, and use the Diplomacy skill with animals with the amphibious or aquatic traits. You gain a +1 circumstance bonus to Make an Impression on such animals.",
  },
  {
    id: 12,
    name: "Azarketi weapon aptitude",
    action: "",
    tags: ["azarketi"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Azarketi Weapon Familiarity
        </span>
        <br />
        You become familiar with using your weapons both in and out of water.
        Whenever you critically hit using an azarketi weapon or one of the
        weapons listed in Azarketi Weapon Familiarity, you apply the weapon’s
        critical specialization effect.
      </span>
    ),
  },
  {
    id: 13,
    name: "Drag down",
    action: "two_action",
    tags: ["azarketi"],
    level: 5,
    feat: "Feat 5",
    description:
      "While swimming in water at least 10 feet deep, you grasp an adjacent creature (on nearby land or in the water) and pull it below the surface. Attempt an Athletics check to Grapple the creature. On a success, if the creature is on land, in addition to the normal effects of Grapple, you pull the creature into the water in a space adjacent to you. If the creature is already in the water, on a success, in addition the normal effects of Grapple, you drag the creature 10 feet deeper into the water, moving 10 feet with the creature. Moving a creature into water or deeper into water using Drag Down is forced movement for the creature but not for you.",
  },
  {
    id: 14,
    name: "Marine ally",
    action: "",
    tags: ["azarketi"],
    level: 5,
    feat: "Feat 5",
    description:
      "You’ve befriended a sea creature, which becomes magically bonded to you. You gain a familiar. The type of creature is up to you, but one of its abilities must always be a swim Speed or the amphibious familiar ability.",
  },
  {
    id: 15,
    name: "Water conjuration",
    action: "",
    tags: ["azarketi"],
    level: 5,
    feat: "Feat 5",
    description:
      "You carry the ocean with you wherever you go. You can cast create water as a primal innate spell once per day. Each time you cast create water, you choose if you create fresh water or salt water.",
  },
  {
    id: 16,
    name: "Aboleth transmutation",
    action: "",
    tags: ["azarketi"],
    level: 9,
    feat: "Feat 9",
    description:
      "You have tapped into the ancient magic used by alghollthu masters (also known as aboleths) to mold the flesh of your ancestors. You can use this magic to transfigure other beings. You gain 3rd-level feet to fins and 2nd-level water breathing as arcane innate spells. You can cast each of these arcane innate spells once per day.",
  },
  {
    id: 17,
    name: "Azarketi purification",
    action: "",
    tags: ["azarketi"],
    level: 9,
    feat: "Feat 9",
    description:
      "You can cast purify food and drink as a primal innate spell, but only on liquids. You can cast this spell once every 10 minutes. You can also use your innate purify food and drink on a touched creature instead of a liquid to purify their blood, giving that creature a +2 status bonus for 1 minute on their ongoing saves against poisons already present in their body when you cast the spell.",
  },
  {
    id: 18,
    name: "Replenishing hydration",
    action: "",
    tags: ["azarketi"],
    level: 9,
    feat: "Feat 9",
    description:
      "You draw life from the water around you. If you submerge in water and rest for 10 minutes, you regain Hit Points equal to your Constitution modifier × half your level.",
  },
  {
    id: 19,
    name: "Riptide",
    action: "reaction",
    tags: ["azarketi"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Drag Down, expert in Athletics
        </span>
        <br />
        <span>
          <b>Requirements:</b> You are within 10 feet of water at least 10 feet
          deep, and your Speed is sufficient to reach the water in one Stride.
        </span>
        <br />
        <span className="frequency">
          <b>Trigger:</b> AYou successfully Grapple a creature of the same size
          as you or smaller.
        </span>
        <br />
        You Stride up to 10 feet to enter the water, bringing the grabbed
        creature with you into the water.
      </span>
    ),
  },
  {
    id: 20,
    name: "Water dancer",
    action: "",
    tags: ["azarketi"],
    level: 9,
    feat: "Feat 9",
    description:
      "You glide through the water with graceful ease. When in an aquatic or swamp environment, you ignore the effects of non-magical difficult terrain. In addition, swimming up or down isn’t difficult terrain for you.",
  },
  {
    id: 21,
    name: "Water strider",
    action: "two_action",
    tags: ["azarketi", "primal", "transmutation", "water"],
    level: 9,
    feat: "Feat 9",
    description:
      "Water cradles your every step, allowing you to walk on its surface. Stride up to your Speed. During your movement, you can move across liquids that don’t support your weight. If you end your movement on a surface that can’t support you, you fall into the liquid at the end of your movement. You can increase the number of actions to 3 to Stride up to three times your Speed.",
  },
  {
    id: 22,
    name: "Aquatic adaptation",
    action: "",
    tags: ["azarketi", "concentrate", "primal", "ransmutation", "water"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        If you and up to four other creatures are in contact with a body of
        water deep enough for you to fully submerge, you can spend 10 minutes
        adapting the creatures to that specific body of water. This allows them
        to breathe normally while within that body of water and protects them
        from deep ocean pressure. These effects last until the creatures are no
        longer in contact with that body of water or until you use this ability
        again, whichever comes first for each creature.
      </span>
    ),
  },
  {
    id: 23,
    name: "Aquatic Camouflage",
    action: "",
    tags: ["azarketi"],
    level: 13,
    feat: "Feat 13",
    description:
      "You blend into the waves. While fully submerged in water, as long as an observer is at least 20 feet away from you, you don’t need cover from that observer to Hide or Sneak.",
  },
  {
    id: 24,
    name: "Azarketi weapon expertise",
    action: "",
    tags: ["azarketi"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Azarketi Weapon Familiarity
        </span>
        <br />
        Your mastery with weapons both above and below water is unmatched.
        Whenever you gain a class feature that grants you expert or greater
        proficiency in certain weapons, you also gain that proficiency in
        crossbows, hand crossbows, longspears, spears, tridents, and all
        azarketi weapons in which you are trained.
      </span>
    ),
  },
  {
    id: 25,
    name: "Hydraulic maneuvers",
    action: "one_action",
    tags: [
      "azarketi",
      "concentrate",
      "manipulate",
      "primal",
      "transmutation",
      "water",
    ],
    level: 13,
    feat: "Feat 13",
    description:
      "You batter your foes with a torrent of water siphoned from your surroundings. If the next action you take is an Athletics check to Disarm, Shove, or Trip, that action has a range of 15 feet. You don’t receive any item bonuses to that check or any circumstance bonuses related to your physical body, but if you roll a critical failure on that Athletics check, you get a failure instead.",
  },
  {
    id: 26,
    name: "Mist strider",
    action: "",
    tags: ["azarketi"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Water Strider
        </span>
        <br />
        You condense the moisture in the air, solidifying it so it can hold your
        weight. When you use Water Strider, you can walk on air. You can ascend
        and descend at a maximum of a 45-degree angle. You still fall at the end
        of your movement if you don’t end on a surface that can support you, as
        normal for Water Strider.
      </span>
    ),
  },
  {
    id: 27,
    name: "Rehydration",
    action: "",
    tags: ["azarketi", "primal", "transmutation", "water"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once a day
        </span>
        <br />
        You surround your body with a thin layer of water drawn from the
        moisture in the air. You can spend one hour resting to rehydrate your
        gills and skin, which counts as submerging your body in water. At the
        GM’s discretion, incredibly dry areas, such as deserts, might not have
        enough moisture in the air for your Rehydration to work.
      </span>
    ),
  },
  {
    id: 28,
    name: "Underwater volcano",
    action: "",
    tags: ["azarketi"],
    level: 17,
    feat: "Feat 17",
    description:
      "You can cast volcanic eruption as a 7th-level primal innate spell once per day, except that you can only evoke the volcano on the floor of a body of water, and the effects that normally happen to flying creatures happen to swimming creatures instead.",
  },
];
