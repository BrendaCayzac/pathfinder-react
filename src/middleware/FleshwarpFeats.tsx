import React from "react";

export const fleshwrapFeats = [
  {
    id: 1,
    name: "Aberration kinship",
    action: "",
    tags: ["fleshwrap"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your mind resonates with the inscrutable thought processes that" +
      " inhuman aberrations use to communicate. You can cast mindlink as an innate occult spell once per day, but you can target only aberrations.",
  },
  {
    id: 2,
    name: "Aberration kinship",
    action: "",
    tags: ["fleshwrap"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your mind resonates with the inscrutable thought processes that" +
      " inhuman aberrations use to communicate. You can cast mindlink as an innate occult spell once per day, but you can target only aberrations.",
  },
  {
    id: 3,
    name: "Embodied Legionary subjectivity",
    action: "",
    tags: ["uncommon", "fleshwrap"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Access:</b> You’re from Nex.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> cataphract fleshwarp heritage
        </span>
        <br />
        Nex’s Fleshforges shaped you not to achieve individual greatness at
        arms, but rather to become a part of a legion, a modular piece integral
        to the combined arms stratagems of Nexian battlemages. You become
        trained in Arcana and Athletics. If you would automatically become
        trained in one of those skills, you instead gain the trained rank in
        another skill of your choice. You also become trained in Warfare Lore.
      </span>
    ),
  },
  {
    id: 4,
    name: "Living weapon",
    action: "",
    tags: ["fleshwrap"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve learned to use part of your form as a weapon. When you select
        this feat, you gain a claws unarmed attack that deals 1d4 slashing
        damage and has the agile and finesse traits; a horn, jaws, or tusk
        unarmed attack that deals 1d6 piercing damage and has the versatile S
        trait; or a tail unarmed attack that deals 1d6 bludgeoning damage and
        has the backswing trait. Each of these unarmed attacks is in the
        brawling weapon group.
        <br />
        <br />
        Your features are mutable; you can select this feat at any level, and
        you can retrain into or out of this feat or change the type of attack
        you gain.
        <br />
        <br />
        <b>SpecialL</b>You can take this feat multiple times. Each time you do,
        select a new attack from the options above.
      </span>
    ),
  },
  {
    id: 5,
    name: "Startling appearance",
    action: "",
    tags: ["fleshwrap"],
    level: 1,
    feat: "Feat 1",
    description:
      "You are trained in Intimidation (or another skill of your choice, if you were already trained in Intimidation) and gain the Intimidating Glare skill feat as a bonus feat.",
  },
  {
    id: 6,
    name: "Embodied Dreadnought subjectivity",
    action: "",
    tags: ["uncommon", "fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Access:</b> You’re from Nex.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> cataphract fleshwarp heritage
        </span>
        <br />
        Your colossal might marks you as a behemoth, the pride of Nex’s
        Fleshforges, and the heaviest ordnance is a child’s toy in your
        monumental grasp. You’re a dreadnought, a living siege weapon, albeit
        one that wields other siege weapons in battle as your endoskeleton and
        flesh toughens. You gain the Hefty Hauler skill feat, and your maximum
        Bulk limit further increases by 3, for a total of 2 to your encumbered
        limit and 5 to your maximum limit.
      </span>
    ),
  },
  {
    id: 5,
    name: "Finned ridges",
    action: "",
    tags: ["fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description:
      "The ridges and flaps of your skin steer you through the water. You gain a swim Speed of 15 feet.",
  },
  {
    id: 6,
    name: "Gaping flesh",
    action: "reaction",
    tags: ["fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per day.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature you are aware of damages you with a melee
          Strike.
        </span>
        <br />
        Your wound yawns open, appalling your attacker. The attacker must
        succeed at a Fortitude saving throw against your class DC or spell DC,
        whichever is higher, or become sickened 1 (sickened 2 on a critical
        failure). It can’t recover from the sickened condition while it’s
        adjacent to you.
      </span>
    ),
  },
  {
    id: 7,
    name: "Mutant Weapon",
    action: "one_action",
    tags: ["fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Living Weapon
        </span>
        <br />
        Select one unarmed attack you gained with Living Weapon. The damage die
        for that attack increases by one step until the end of your turn. In
        addition, choose to either have the attack gain a reach of 10 feet until
        the end of your turn or for you to gain a +1 status bonus to attack
        rolls with the chosen unarmed attack until the end of your turn.
      </span>
    ),
  },
  {
    id: 8,
    name: "Powerful guts",
    action: "",
    tags: ["fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your stomach is particularly durable. When you succeed at a Fortitude save to reduce your sickened value, you reduce it by 2 (or by 3 on a critical success).",
  },
  {
    id: 9,
    name: "Transposable compliance",
    action: "",
    tags: ["fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your protean vitality is fecund and many-succoring: your veins run with life-giving ichor that adapts to the blood and physiology of any body, and your skin molts on command, creating wound-stanching sheaths of tissue for yourself and others. You become trained in Medicine. If you were already trained in Medicine, you instead become trained in a skill of your choice. You can Administer First Aid without healer’s tools by using your physiology instead, but you must take 1 damage to make the attempt. Similarly, you can Treat Wounds without healer’s tools but take 2d8 damage. You gain a +1 circumstance bonus on all Medicine checks to Administer First Aid and Treat Wounds using your own physiology.",
  },
  {
    id: 10,
    name: "Uncanny awareness",
    action: "",
    tags: ["fleshwrap"],
    level: 5,
    feat: "Feat 5",
    description:
      "You have a keen sense of movement around you. You gain motion sense as an imprecise sense out to 30 feet. Motion sense allows you to detect nearby motion through vibration and air movement.",
  },
  {
    id: 11,
    name: "Captivating curiosity",
    action: "",
    tags: ["fleshwrap"],
    level: 9,
    feat: "Feat 9",
    description:
      "You can snare the attentions of onlookers with your unique appearance. You can cast enthrall as a 3rd-level occult innate spell once per day.",
  },
  {
    id: 12,
    name: "Coating of slime",
    action: "",
    tags: ["fleshwrap"],
    level: 9,
    feat: "Feat 9",
    description:
      "An acidic ooze coats your limbs. Your unarmed attacks deal an additional 1d4 persistent acid damage on a critical hit.",
  },
  {
    id: 13,
    name: "Eerie compression",
    action: "",
    tags: ["fleshwrap"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Medium sie
        </span>
        <br />
        Your limbs and even your torso can collapse in on themselves, allowing
        you to fit through tight spaces as though you were a Small creature. You
        can move at full Speed while Squeezing.
      </span>
    ),
  },
  {
    id: 14,
    name: "Embodied Dragoon subjectivity",
    action: "",
    tags: ["fleshwrap"],
    level: 9,
    feat: "Feat 9",
    description:
      "When your allies call for swift reinforcements or lightning raids, you’re ready to answer. Your titanic form encompasses both cavalry and rider so that you’re able to traverse vast distances and exploit opportunities in the theater of war. Your pores distend and extrude copious amounts of blood, subcutaneous fat, and lymphatic fluid for you to harden and flash-sculpt into gliding wings or a swift-hurtling mount. You can cast feather fall and phantom steed each once per day as innate occult spells. When you cast feather fall in this way, gliding wings slow your fall, and when you cast phantom steed in this way, the steed physically protrudes from your own lower body. Neither of these cosmetic changes alter the spells’ effects; for example, foes can still attack the phantom steed as normal.",
  },
  {
    id: 15,
    name: "Grippling limbs",
    action: "",
    tags: ["fleshwrap"],
    level: 9,
    feat: "Feat 9",
    description:
      "Nodules, hooks, or claws on your limbs allow you to cling to surfaces with ease. You gain a climb Speed of 15 feet.",
  },
  {
    id: 16,
    name: "Slip the grasp",
    action: "one_action",
    tags: ["fleshwrap", "flourish"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Requirements:</b> You are grabbed, immobilized, or restrained.
        </span>
        <br />
        You have some feature that allows you to quickly evade effects that
        restrain you. Attempt a check to Escape. If you succeed, you can Stride,
        Step, or make a Strike with a melee unarmed attack targeting the
        creature you Escaped from. If you fail, you instead attempt to Escape a
        second time.
        <br />
        <br />
        You increase your multiple attack penalty as appropriate for the actions
        you took, but only after completing both actions.
      </span>
    ),
  },
  {
    id: 17,
    name: "Augment senses",
    action: "one_action",
    tags: ["fleshwrap"],
    level: 13,
    feat: "Feat 13",
    description:
      "You open vestigial eyes, unfurl tympanic flaps of skin, or otherwise enhance your senses. Until the start of your next turn, you gain the following benefits: you can’t be flanked; when you Seek for creatures, you can scan a 60-foot cone or a 30-foot burst instead of the normal area; and when you Seek for hidden objects, you can search a 15-foot square instead of the normal area.",
  },
  {
    id: 18,
    name: "Spew tentacles",
    action: "",
    tags: ["fleshwrap"],
    level: 13,
    feat: "Feat 13",
    description:
      "You can open your mouth to an immense size and spew forth an impossibly large field of tentacles. You can cast black tentacles once per day as an innate occult spell, though when you do so, you spew them from your mouth out to the appropriate range, where they take root and begin Grappling creatures as usual. The tentacles recognize you as a part of them and don’t attempt to Grapple you, even if you are in the area.",
  },
];
