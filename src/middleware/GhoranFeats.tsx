import React from "react";

export const ghoranFeats = [
  {
    id: 1,
    name: "Ancient memories",
    action: "",
    tags: ["ghoran"],
    level: 1,
    feat: "Feat 1",
    description:
      "In the long years since Ghorus’s day, you’ve done pretty much everything at one time or another. During your daily preparations, you can explore your memories of your past lives to become trained in one skill of your choice. This proficiency lasts until you prepare again. Since this proficiency is temporary, you can’t use it as a prerequisite for a skill increase or a permanent character option like a feat.",
  },
  {
    id: 2,
    name: "Flexible form",
    action: "",
    tags: ["ghoran"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> any heritage except strong oak
        </span>
        <br />
        Your body is as supple as a sapling, capable of bending without
        breaking. You become trained in Acrobatics, and if you roll a success to
        Squeeze, you get a critical success instead. If you would automatically
        become trained in Acrobatics (from your background or class, for
        example), you instead become trained in a skill of your choice.
      </span>
    ),
  },
  {
    id: 3,
    name: "Ghoran lore",
    action: "",
    tags: ["ghoran"],
    level: 1,
    feat: "Feat 1",
    description:
      "The very first memories ghorans have are those of their creation, and even after thousands of years, those memories have never faded for you. You become trained in Arcana and Nature. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Ghoran Lore.",
  },
  {
    id: 4,
    name: "Ghoran weapon familiarity",
    action: "",
    tags: ["ghoran"],
    level: 1,
    feat: "Feat 1",
    description:
      "Over the course of your long, long existence, you’ve had a chance to practice with traditional ghoran weapons. You’re trained with the glaive, greatclub, hatchet, scythe, and sickle. In addition, you gain access to all uncommon ghoran weapons. For the purpose of determining your proficiency, martial ghoran weapons are simple weapons and advanced ghoran weapons are martial weapons.",
  },
  {
    id: 5,
    name: "Hidden thorn",
    action: "",
    tags: ["ghoran"],
    level: 1,
    feat: "Feat 1",
    description:
      "Some flowers can hide their thorns, and yours happen to be hidden along your arms. You gain a thorns unarmed attack that deals 1d6 piercing damage. Your thorns are in the knife weapon group and have the finesse and unarmed traits.",
  },
  {
    id: 6,
    name: "Ghoran weapon practice",
    action: "",
    tags: ["ghoran"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ghoran Weapon Familiarity
        </span>
        <br />
        With plenty of practice, the memories of previous fights from previous
        lives come flooding back. Whenever you critically hit using a glaive,
        greatclub, hatchet, scythe, sickle, or ghoran weapon, you apply the
        weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 7,
    name: "Murderous thorns",
    action: "",
    tags: ["ghoran"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Hidden Thorn or thorned rose
        </span>
        <br />
        Your thorns are many, vicious, and sharp. If you have the Hidden Thorn
        feat, your thorn attack gains the deadly d6 trait. If you have the
        thorned rose heritage, you can use the Wicked Thorns reaction once every
        hour.
      </span>
    ),
  },
  {
    id: 8,
    name: "Speak with flowers",
    action: "",
    tags: ["ghoran"],
    level: 5,
    feat: "Feat 5",
    description:
      "At your very heartwood, you’re a flower animated by elder magic, and with a little effort, you can speak to your kindred. You can ask questions of, receive answers from, and use the Diplomacy skill with flowering plants of all types.",
  },
  {
    id: 9,
    name: "Tree's ward",
    action: "",
    tags: ["ghoran"],
    level: 5,
    feat: "Feat 5",
    description:
      "You’ve lived among trees for so long they recognize your presence and seek to protect you from harm. You can cast protector tree as a primal innate spell once per day.",
  },
  {
    id: 10,
    name: "Endless memory",
    action: "",
    tags: ["ghoran"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ancient Memories
        </span>
        <br />
        You’ve lived a thousand lives and done a hundred-thousand things. When
        you choose a skill in which to become trained with Ancient Memories, you
        can also choose a skill in which you’re already trained and become an
        expert in that skill. This lasts until your Ancient Memories expires.
        When the effects of Ancient Memories and Endless Memories expire, you
        can retrain one of your skill increases. The skill increase you gain
        from this retraining must either make you trained in the skill you chose
        with Ancient Memories or make you an expert in the skill you chose with
        Endless Memories.
      </span>
    ),
  },
  {
    id: 11,
    name: "Flower magic",
    action: "",
    tags: ["ghoran"],
    level: 9,
    feat: "Feat 9",
    description:
      "Certain magics in the world flow easily through your sap. You can cast barkskin and tree shape as 2nd-level arcane innate spells once per day each. A tree shape spell you cast this way transforms you into a Large flowering plant like a rosebush or lilac bush instead of a tree.",
  },
  {
    id: 12,
    name: "Endless memory",
    action: "two_action",
    tags: ["disease", "ghoran"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour
        </span>
        <br />
        You issue a cloud of your fragrance like a full-body sneeze—but one that
        might save your life as the powerful perfume makes your attackers’ eyes
        sting and water. Plants and fungi are immune to this effect, but all
        other creatures in a 10-foot emanation must attempt a Fortitude save
        against your class DC or spell DC (whichever is higher) with the
        following results.
        <br />
        <br />
        <b>Critical Success:</b> No effect.
        <br />
        <br />
        <b>Success:</b> The creature is dazzled for 1 round.
        <br />
        <br />
        <b>Failure:</b> The creature is dazzled and can see only 10 feet away
        for 1 round.
        <br />
        <br />
        <b>Critical Failure:</b> The creature is blinded for 1 round.
      </span>
    ),
  },
  {
    id: 13,
    name: "Solar rejuvenation",
    action: "",
    tags: ["ghoran"],
    level: 9,
    feat: "Feat 9",
    description:
      "The warmth and light of the sun gives you life. If you rest outdoors for 10 minutes during the day, you regain Hit Points equal to your Constitution modifier × half your level. You gain this benefit in addition to any healing from Treat Wounds.",
  },
  {
    id: 14,
    name: "Endless memory",
    action: "",
    tags: ["ghoran"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per hour
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Endless Memories
        </span>
        <br />
        You have lived longer than most realize, and due to your many lifetimes
        of practice you remember almost everything from your previous
        incarnations now. You examine your memories, changing the skills you
        selected with Ancient Memories and Endless Memories.
      </span>
    ),
  },
  {
    id: 15,
    name: "Ghoran weapon expertise",
    action: "",
    tags: ["ghoran"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ghoran Weapon Familiarity
        </span>
        <br />
        It’s as if you’ve been training for a thousand years. Whenever you gain
        a class feature that grants you expert or greater proficiency in a given
        weapon or weapons, you also gain that proficiency in the glaive,
        greatclub, hatchet, scythe, sickle, and ghoran weapons in which you’re
        trained.
      </span>
    ),
  },
  {
    id: 16,
    name: "Look but don't touch",
    action: "two_action",
    tags: ["ghoran", "poison"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Many flowers are beautiful to look upon but deadly to touch—and you’re
        one of them. For 1 minute, any creature that touches you or damages you
        with a melee weapon without the reach trait or with a melee unarmed
        attack takes 3d6 poison damage.
      </span>
    ),
  },
  {
    id: 17,
    name: "Violent vines",
    action: "",
    tags: ["ghoran"],
    level: 13,
    feat: "Feat 13",
    description:
      "When angered, you can imbue nearby vines with your wrath, provoking them into a murderous rampage. Once per hour, you can cast murderous vine as a primal innate spell.",
  },
  {
    id: 18,
    name: "Ghoran's wealth",
    action: "",
    tags: ["ghoran"],
    level: 17,
    feat: "Feat 17",
    description:
      "You have such a strong connection to the natural world that you can inspire it to attack at those who threaten you. You can cast nature’s reprisal once per hour as a primal innate spell.",
  },
];
