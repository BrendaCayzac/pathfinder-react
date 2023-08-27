import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const ratfolkFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Cheek pouches",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your cheeks are stretchy, and you can store up to four items of light
        Bulk or less in these cheek pouches. None of these items can have a
        dimension longer than 1 foot. As long as you have at least one item in
        your cheek pouches, your speech is noticeably difficult to understand.
        Placing an item in your cheek pouch or retrieving one is an Interact
        action. You can empty your mouth with a single action, causing
        everything you had stored in your cheek pouches to fall to the ground in
        your square.
      </span>
    ),
  },
  {
    id: 2,
    name: "Pack rat",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Years of packing for travel have taught you how to cram vast quantities
        into small spaces. You can fit an additional 50% of the listed Bulk
        capacity into mundane storage containers or vehicles. For example, you
        can fit 6 Bulk in a backpack, or 12 Bulk in a chest. This doesn’t alter
        the items’ Bulk, nor does it change how much you can store in a magical
        or extra dimensional storage space, such as a bag of holding.
      </span>
    ),
  },
  {
    id: 3,
    name: "Rat familiar",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have a pet rat that has become magically bonded to you. You gain a
        familiar using the rules in the Familiar section in the Core Rulebook,
        and this familiar must be a rat. It still gets the benefits of familiar
        abilities, but its base form remains a rat.
      </span>
    ),
  },
  {
    id: 4,
    name: "Ratfolk lore",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Years of experience among ratfolk communities have made you nimble, and
        you’ve learned to run and hide when enemies threaten. You gain the
        trained proficiency rank in Acrobatics and Stealth. If you would
        automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You also become trained in Ratfolk Lore.
      </span>
    ),
  },
  {
    id: 5,
    name: "Ratspeak",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        To you, the squeaking of rats and other rodents makes a strange kind of
        sense. You can ask questions of, receive answers from, and use the
        Diplomacy skill with rodents, including beavers, mice, porcupines, rats,
        and squirrels, but not with other mammals, such as dogs or bats. The GM
        determines which animals count as rodents.
      </span>
    ),
  },
  {
    id: 6,
    name: "Skull creeper",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You wear skulls to demoralize foes. You become trained in Intimidation
        and gain the Intimidating Glare skill feat. If you’re already trained in
        Intimidation, you instead become trained in a skill of your choice. If
        you pay 50 gp for a splendid skull mask, the mask grants you a +1 item
        bonus to Intimidation; its usage is worn (mask).
      </span>
    ),
  },
  {
    id: 7,
    name: "Tinkering fingers",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re good with your hands and can quickly improvise a fix for broken
        or damaged equipment. You’re trained in Crafting. If you would
        automatically become trained in Crafting (from your background or class,
        for example), you instead become trained in a skill of your choice. You
        can Repair an item without using a repair kit without taking the –2
        circumstance penalty, improvising tools from whatever you have at hand.
      </span>
    ),
  },
  {
    id: 8,
    name: "Vicious incisors",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve let your incisors grow long enough to serve as formidable
        weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage.
        Your jaws are in the brawling group and have the finesse and unarmed
        traits. Unlike most creatures, you can file down your teeth and regrow
        them later on, enabling you to select this feat at any level, and to
        retrain into and out of this feat.
      </span>
    ),
  },
  {
    id: 9,
    name: "Warren friend",
    action: "",
    tags: ["downtime", "ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re adept at making contact with other ysoki. When you arrive at a
        new settlement, you automatically find the nearest ratfolk enclave by
        spending 1 day of downtime searching, provided one exists and its
        members aren’t actively hiding from you. Once you’ve made contact, you
        gain a +1 circumstance bonus to Gather Information and Earn Income in
        the settlement.
      </span>
    ),
  },
  {
    id: 10,
    name: "Warren navigator",
    action: "",
    tags: ["ratfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re particularly good at solving mazes and navigating twists and
        turns. You gain the trained proficiency rank in Survival. If you would
        automatically become trained in Survival (from your background or class,
        for example), you become trained in another skill of your choice. When
        you Sense Direction or attempt a roll against a maze spell, you get a
        result one degree of success better than you rolled. You don’t take a
        penalty to Sense Direction when you lack a compass.
      </span>
    ),
  },
  {
    id: 11,
    name: "Cornered fury",
    action: "",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        When physically outmatched, you fight with unexpected ferocity. If a foe
        of a larger size than you critically hits and damages you, that foe is
        flat-footed to you for 1 round.
      </span>
    ),
  },
  {
    id: 12,
    name: "Gnaw",
    action: "three_action",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Vicious Incisors.
        </span>
        <br />
        With enough time and determination, you can chew through nearly
        anything. You deal double your jaws damage to an unattended, inanimate
        object.
      </span>
    ),
  },
  {
    id: 13,
    name: "Lab rat",
    action: "",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve spent more than your share of time in an alchemy lab. You might
        have been an alchemist yourself, an assistant, or perhaps even a test
        subject. Either way, you have been exposed to a wide variety of
        alchemical poisons and elixirs, leaving you with increased tolerance of
        their effects. You have a +1 circumstance bonus to saves against poison
        and harmful effects from elixirs. If you roll a success on your saving
        throw against an elixir or poison, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 14,
    name: "Plague sniffer",
    action: "",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> longsnout rat heritage.
        </span>
        <br />
        You can sniff out the pungent tang of disease. When you detect a
        creature by scent, you can also detect if that creature is suffering
        from a disease at a non-carrier state. If the disease is particularly
        subtle, you might need to attempt a Perception check against the
        disease’s DC (subject to the GM’s discretion).
      </span>
    ),
  },
  {
    id: 15,
    name: "Quick stow",
    action: "",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Prerequisites:</b> Cheek Pouches.
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per round.
        </span>
        <br />
        You are adept at quickly moving items into your cheek pouches. You
        Interact to store one held item in your cheek pouches (provided it
        fits).
      </span>
    ),
  },
  {
    id: 16,
    name: "Rat magic",
    action: "",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        There always seems to be a little rat around to carry messages for you.
        You can cast animal messenger once per day as a primal innate spell.
        When you do, the animal that responds is always a rat. If there are no
        rats within range, the spell is lost.
      </span>
    ),
  },
  {
    id: 17,
    name: "Ratfolk roll",
    action: "two_action",
    tags: ["ratfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your ability to curl up into a tight ball comes in handy. You roll up
        into a ball and move up to four times your Speed in a straight line down
        an incline. If you reach the bottom of the incline or hit an obstacle
        during this first turn of movement, you stop rolling safely. Otherwise,
        you automatically keep rolling at this Speed during subsequent turns
        until you hit the bottom of the incline or an obstacle ends this
        movement (which can happen in the middle of your turn). You’re slowed 2
        each turn after the first that you keep rolling, and if you hit an
        obstacle on a turn after the first, you and the obstacle both take 4d6
        bludgeoning damage and you stop rolling.
      </span>
    ),
  },
  {
    id: 18,
    name: "Big mouth",
    action: "",
    tags: ["ratfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cheek Pouches.
        </span>
        <br />
        Your cheek pouches are especially stretchy. Instead of storing up to
        four items of Light Bulk in your cheek pouches, you can store up to 1
        Bulk worth of items. The maximum size of a given item is unchanged.
      </span>
    ),
  },
  {
    id: 19,
    name: "Overcrowd",
    action: "",
    tags: ["ratfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your physiology is slight, and you can pack into small spaces with
        others of similar stature. As long as you are Small, you can end your
        movement in the same square as a Small ally. Only two creatures total
        can share the same space when using this ability or a similar one.
      </span>
    ),
  },
  {
    id: 20,
    name: "Rat form",
    action: "one_action",
    tags: ["concentrate", "polymorph", "primal", "ratfolk", "transmutation"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You can transform into an innocuous-looking rat to scout an area or slip
        through tight spaces. You gain the effects of a 1st-level pest form
        spell, except that you must assume the battle form of a Tiny rat.
      </span>
    ),
  },
  {
    id: 21,
    name: "Uncanny cheeks",
    action: "",
    tags: ["ratfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You squirrel away useful objects and seem to retrieve them at just the
        right time. You gain the Prescient Consumable and Prescient Planner
        feats, except that you always withdraw the objects from your cheek
        pouches. This means the object you retrieve must fit in your cheek
        pouches; this is generally an item of negligible Bulk unless you also
        have the Cheek Pouches feat.
      </span>
    ),
  },
  {
    id: 22,
    name: "Shin stabber",
    action: "",
    tags: ["ratfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Overcrowd.
        </span>
        <br />
        You can dart around and between your larger allies’ legs without
        tripping them up. As long as you’re Small or smaller, you can end your
        movement in the same square as a Medium or larger ally. Only two
        creatures total can share the same space when using this ability or a
        similar one.
      </span>
    ),
  },
  {
    id: 23,
    name: "Skittering sneak",
    action: "",
    tags: ["ratfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You squish, slink, and skitter from cover to cover with great speed and
        stealth. You can move up to your full Speed when you Sneak.
      </span>
    ),
  },
  {
    id: 24,
    name: "Warren digger",
    action: "",
    tags: ["ratfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You’ve learned to put your sturdy claws to work digging through the
        earth. You gain a burrow Speed of 15 feet.
      </span>
    ),
  },
  {
    id: 25,
    name: "Ratfolk growth",
    action: "",
    tags: ["ratfolk"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You call upon the familial bonds you share with other ysoki to defend
        them in battle. You can cast enlarge as a 6th-level primal innate spell
        once per day. You can target only yourself and other ratfolk with this
        spell.
      </span>
    ),
  },
];
