import React from "react";

export const grippliFeats = [
  {
    id: 1,
    name: "Grippli lore",
    action: "",
    tags: ["grippli"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You are well versed in grippli culture and tactics. You gain the trained
        proficiency in Nature and Stealth. If you would automatically become
        trained in one of those skills, you instead become trained in a skill of
        your choice. You also become trained in Grippli Lore.
      </span>
    ),
  },
  {
    id: 2,
    name: "Grippli weapon familiarity",
    action: "",
    tags: ["grippli"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve trained with weapons ideally suited to marshes and dense forests.
        You are trained with blowguns, hatchets, scythes, shortbows, and
        composite shortbows.
        <br />
        <br />
        You also gain access to all uncommon grippli weapons. For the purpose of
        determining your proficiency, martial grippli weapons are simple
        weapons, and advanced grippli weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 3,
    name: "Hunter's defense",
    action: "reaction",
    tags: ["grippli"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> trained in Nature
        </span>
        <br />
        <br />
        <span>
          <b>Frequency:</b> once per hour
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature with the animal, beast, elemental, fey,
          fungus, or plant trait attacks you, and you can see the attacker.
        </span>
        <br />
        Your canny understanding of natural and primal creatures helps you
        predict and dodge their attacks. The triggering attack roll targets your
        Nature DC instead of your AC. Though this allows you to avoid taking
        penalties to your AC, it doesn’t remove any conditions or other effects
        causing such penalties. For example, an enemy with sneak attack would
        still deal extra damage to you for being flat-footed, even though you
        wouldn’t take the –2 circumstance penalty against the attack.
      </span>
    ),
  },
  {
    id: 4,
    name: "Jungle strider",
    action: "",
    tags: ["grippli"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You are adept at dodging roots, foliage, and other jungle obstacles. You
        ignore difficult terrain in forests and jungles. In addition, when you
        use the Acrobatics skill to Balance on narrow surfaces or uneven ground
        made of plant material, you aren’t flat-footed, and when you roll a
        success at one of these Acrobatics checks, you get a critical success
        instead.
      </span>
    ),
  },
  {
    id: 5,
    name: "Nocturnal grippli",
    action: "",
    tags: ["grippli"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You tend to do most of your hunting and work at night and have adapted
        to the requirements of nocturnal life. You gain darkvision, allowing you
        to see in darkness and dim light just as well as you can in bright
        light. However, in darkness, you see in black and white only.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of this feat or into this feat.
      </span>
    ),
  },
  {
    id: 6,
    name: "Grippli glide",
    action: "one_action",
    tags: ["grippli"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> windweb grippli
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You must have at least one hand free.
        </span>
        <br />
        You can use your webbed feet to guide your fall. You glide slowly toward
        the ground, 5 feet down (10 feet if you don’t have both hands free) and
        up to 25 feet forward through the air. As long as you spend at least 1
        action gliding each round and have not yet reached the ground, you
        remain in the air at the end of your turn.
      </span>
    ),
  },
  {
    id: 7,
    name: "Grippli weapon innovator",
    action: "",
    tags: ["grippli"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Grippli Weapon Familiarity
        </span>
        <br />
        You’ve learned devious ways to make the most of your grippli weapons.
        Whenever you critically hit using a blowgun, hatchet, scythe, shortbow,
        composite shortbow, or grippli weapon, you apply the weapon’s critical
        specialization effect.
      </span>
    ),
  },
  {
    id: 8,
    name: "Long tongue",
    action: "",
    tags: ["grippli"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> snaptongue grippli
        </span>
        <br />
        You’ve learned to stretch your exceptionally long tongue beyond its
        original limits. When you use your tongue to deliver touch range spells
        or perform very simple Interact actions, you can do so at a distance
        that is 5 feet beyond your usual reach.
      </span>
    ),
  },
  {
    id: 9,
    name: "Tennacious net",
    action: "",
    tags: ["grippli"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Escaping your nets is no simple task. The Athletics DC to Force Open or
        Escape your nets increases from 16 to 18. After a creature you grabbed
        with a net Escapes or Forces Open the net, stray strands of the net
        cling to the creature, causing them to remain flat-footed until the
        beginning of their next turn.
      </span>
    ),
  },
  {
    id: 10,
    name: "Absorb toxin",
    action: "reaction",
    tags: ["grippli"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> You are not immune to diseases or poisons
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You attempt a saving throw against a disease or poison
          effect that affects an area.
        </span>
        <br />
        Your skin readily absorbs poison and can consciously draw toxins into
        your body to spare others. Attempt a counteract check against the
        triggering effect; your counteract level equals half your level (rounded
        up), and for the roll use either your class DC –10 or your spellcasting
        ability modifier plus your spellcasting proficiency bonus. If you
        counteract the triggering effect, you end the effect for all other
        creatures in the area; however, you must still save against the effect
        with a –2 penalty to the initial save.
      </span>
    ),
  },
  {
    id: 11,
    name: "Ricocheting leap",
    action: "",
    tags: ["grippli"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> master in Athletics, Wall Jump
        </span>
        <br />
        You quickly use your momentum to topple and spring off of foes. You can
        use Wall Jump to make additional jumps off of creatures larger than you
        as if they were walls. Once per turn when you make an additional jump
        off of a creature in this way, you can also attempt to Shove or Trip
        that creature as a free action.
      </span>
    ),
  },
  {
    id: 11,
    name: "Tongue tether",
    action: "",
    tags: ["grippli"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> snaptongue grippli
        </span>
        <br />
        Your tongue can momentarily latch on as readily as your hands. So long
        as you can freely open your mouth, you do not need free hands in order
        to Disarm, Grab an Edge, or Trip. If you have the Long Tongue feat, you
        can Disarm, Grab an Edge, and Trip with your tongue at a distance that
        is 5 feet beyond your normal reach.
      </span>
    ),
  },
  {
    id: 12,
    name: "Envenomed edge",
    action: "",
    tags: ["grippli"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        With a combination of your poison glands and herbal concoctions, you can
        consistently deliver venomous attacks when you hit an enemy’s weak
        points. When you critically hit using a Strike with a weapon or unarmed
        attack and deal slashing or piercing damage with that Strike, you deal
        an additional 1d4 persistent poison damage to your target.
      </span>
    ),
  },
  {
    id: 13,
    name: "Grippli weapon expertise",
    action: "",
    tags: ["grippli"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Grippli Weapon Familiarity
        </span>
        You fight with effortless expertise with grippli weapons. Whenever you
        gain a class feature that grants you expert or greater proficiency in a
        given weapon or weapons, you also gain that proficiency in the blowgun,
        hatchet, scythe, shortbow, composite shortbow, or grippli weapons in
        which you are trained.
      </span>
    ),
  },
];
