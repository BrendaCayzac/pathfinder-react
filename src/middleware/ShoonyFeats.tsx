import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const shoonyFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Dig quickly",
    action: "two_action",
    tags: ["manipulate", "shoony"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have an amazing memory for sound. You gain the Assurance
        (Performance) feat. With a successful DC 8 flat check, you can
        accurately recall a sound or a snippet of conversation you heard within
        the last week. You are memorizing by rote rather than content, and can’t
        use this to cram facts, so this doesn’t grant you any extra ability to
        Recall Knowledge.
      </span>
    ),
  },
  {
    id: 2,
    name: "Esteemed visitor",
    action: "",
    tags: ["shoony"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your polite manners and natural ability to comfort others make it easy
        for you to break down cultural barriers and earn strangers’ trust. While
        you are in a settlement, when you roll a critical failure on a Diplomacy
        check to Gather Information or Make an Impression, you get a failure
        instead.
      </span>
    ),
  },
  {
    id: 3,
    name: "Handy with Your Paws",
    action: "",
    tags: ["shoony"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You gain a +1 circumstance bonus to Crafting checks to Repair
        non-magical items, and you don’t need a repair kit for such repairs as
        long as you have any amount of junk, spare parts, or debris at your
        disposal.
      </span>
    ),
  },
  {
    id: 4,
    name: "Improvisational Defender",
    action: "",
    tags: ["shoony"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You are always prepared for fights that frequently disrupt seemingly
        peaceful times. When you use an improvised weapon or a shoddy weapon,
        you don’t take the –2 item penalty to attack rolls.
      </span>
    ),
  },
  {
    id: 5,
    name: "Scamper Underfoot",
    action: "",
    tags: ["shoony"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You are used to ducking under foes and can scurry around the battlefield
        with ease. You gain a +1 circumstance bonus to Acrobatics checks to
        Tumble Through the spaces of Medium or larger enemies, and the presence
        of an enemy doesn’t make the squares difficult terrain.
      </span>
    ),
  },
  {
    id: 6,
    name: "Shoony Lore",
    action: "",
    tags: ["shoony"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Growing up in shoony society, you learned the value of honesty,
        friendship, and hard work, even during trying times. You gain the
        trained proficiency rank in Diplomacy and Survival. If you would
        automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You also become trained in Shoony Lore.
      </span>
    ),
  },
  {
    id: 7,
    name: "Fey Influence",
    action: "",
    tags: ["rare", "shoony"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You have been exposed to powerful fey magic. You become trained in
        primal DCs and spell attack rolls. You gain the fey trait and one of the
        following features that grants an innate primal spell that can be used
        once per day.
        <br />
        <br />
        <ul>
          <li>
            <b>Anteater:</b> You can launch your tongue forward as a deadly
            attack, gaining grim tendrils.
          </li>
          <li>
            <b>Cat Sith:</b> You have catlike features and can appear as a
            mundane cat with pest form (cat only).
          </li>
          <li>
            <b>Cursed Bluebird:</b> You have blue feathers or wings. It's
            terrible luck to harm a bluebird, and you can manifest that power as
            ill omen.
          </li>
          <li>
            <b>Dryad:</b> Your body is covered in elegant vines, granting you
            summon plant or fungus.
          </li>
          <li>
            <b>Faun:</b> Your legs and feet are swift and possibly hooved,
            granting you fleet step.
          </li>
          <li>
            <b>Gremlin:</b>
            You have long, bat-like ears and gain bane.
          </li>
          <li>
            <b>Monarch:</b> You have vestigial, insectile features and gain
            spider sting.
          </li>
          <li>
            <b>Unicorn:</b> You have a magical horn or a prominent symbol of one
            on your forehead, which you can use to cast heal.
          </li>
        </ul>
        <br />
        <b>Special:</b>This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
  {
    id: 8,
    name: "Loyal Empath",
    action: "",
    tags: ["shoony"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You have incredible empathy for your friends and family, and you have an
        innate timing for helping others in distress. You can use the Aid
        reaction to grant a bonus to another creature’s Will saving throw. As
        usual for Aid, you need to prepare by using an action on your turn to
        encourage the creature to bravely withstand the effect.
      </span>
    ),
  },
  {
    id: 9,
    name: "Practiced Paddler",
    action: "",
    tags: ["shoony"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Paddler Shoony heritage.
        </span>
        <br />
        You’re skilled at navigating bogs and marshes, even for a paddler
        shoony. You gain a swim Speed of 15 feet.
      </span>
    ),
  },
  {
    id: 10,
    name: "Tough Tumbler",
    action: "",
    tags: ["shoony"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Scamper Underfoot.
        </span>
        <br />
        You’ve taken your share of licks while scurrying around the battlefield
        and know how to defend yourself against opportunistic attackers. Your
        movement ends only when you critically fail an Acrobatics check to
        Tumble Through an enemy’s space (or when you don’t have enough Speed to
        move all the way through its space). You still trigger reactions on a
        failure to Tumble Through, but you gain a +1 circumstance bonus to AC
        against attacks that you trigger in this way.
      </span>
    ),
  },
  {
    id: 11,
    name: "Drain emotion",
    action: "two_action",
    tags: ["rare", "enchantement", "mental", "shoony"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Fey Influence.
        </span>
        <br />
        You touch an adjacent creature and attempt to draw out its excess
        emotion. Attempt a counteract check against a single emotion or fear
        effect affecting the touched creature. If you succeed, you gain
        temporary Hit Points equal to your level for a number of rounds equal to
        your Charisma modifier (minimum 1 round).
        <br />
        <br />
        <b>Special</b> This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
  {
    id: 12,
    name: "Fey Ascension",
    action: "two_action",
    tags: ["rare", "shoony"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Fey Influence.
        </span>
        <br />
        The fey influence on your form and features grows even more powerful and
        notable. You gain one of the following features and abilities; this must
        be the same animal or fey type as you chose for Fey Influence.
        <br />
        <br />
        <ul>
          <li>
            <b>Anteater:</b> You become an expert in primal DCs and spell attack
            rolls. You can cast slow as an innate primal spell once per day.
          </li>
          <li>
            <b>Cat Sith:</b> You laugh off the outraged curses of those you have
            tricked or wronged. Whenever a creature targets you with a
            misfortune effect, make a DC 13 flat check. On a success, you are
            unaffected.
          </li>
          <li>
            <b>Cursed Bluebird:</b> You have enough control over your curse to
            turn a bane into a minor blessing. Once per day, you can temporarily
            transform yourself or an ally into a blue bird, as a 4th-level pest
            form (bird only) targeting one willing creature.bird, and you can
            manifest that power as ill omen.
          </li>
          <li>
            <b>Dryad:</b> Your hair becomes intermixed with delicate but
            razor-edged leaves that move as you command. You gain a leaves
            ranged unarmed attack that deals 1d6 slashing damage. Your leaves
            are in the dart weapon group and have the magical and unarmed
            traits.
          </li>
          <li>
            <b>Faun:</b> You can cast charm, sleep, and triple time as innate
            primal spells once per day each. Whenever you cast one of these
            spells, you can Step or Stride as part of the activity.
          </li>
          <li>
            <b>Gremlin:</b>
            You become an expert in primal DCs and spell attack rolls. You can
            cast mad monkeys as an innate primal spell once per day.
          </li>
          <li>
            <b>Monarch:</b> Once per day, you gain the ability to manifest a
            pair of exquisite butterfly wings. These wings remain for 10
            minutes. You gain a fly Speed equal to your Speed while you've
            manifested your wings.
          </li>
          <li>
            <b>Unicorn:</b> You become trained in Medicine, or an expert if you
            were already trained. You gain a +2 status bonus to saves against
            poison and charm effects.
          </li>
        </ul>
        <br />
        <b>Special:</b> This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
  {
    id: 13,
    name: "Improvisational Warrior",
    action: "",
    tags: ["shoony"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Improvisational Defender.
        </span>
        <br />
        When you use an improvised weapon, you apply the critical specialization
        of a brawling weapon to it. Depending on the shape and nature of the
        improvised weapon, your GM might determine another weapon group’s
        critical specialization is more appropriate.
      </span>
    ),
  },
  {
    id: 14,
    name: "Sodbuster",
    action: "",
    tags: ["shoony"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Years toiling in soil have made you an expert digger. You gain a burrow
        Speed of 10 feet through loose soil or dirt.
      </span>
    ),
  },
  {
    id: 15,
    name: "Cannibalize Magic",
    action: "",
    tags: ["shoony"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Frequency</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Fey Influence.
        </span>
        <br />
        The fey magic inside of you is a vital part of your body, and you can
        steal other sources of magic to replenish yours. You can draw power from
        your magical equipment to replenish your health. You drain one of your
        invested items, in the process regaining Hit Points equal to double the
        item's level.
        <br />
        <br />
        In addition, you can attempt a counteract check with a total bonus equal
        to 10 + the drained item's level against one effect that gave you the
        drained, doomed, enfeebled, fatigued, or slowed condition. If you
        succeed, you reduce the chosen condition's value by 1.
        <br />
        <br />
        An item drained by this action becomes non-magical until the next time
        you make your daily preparations.
        <br />
        <br />
        <b>Special:</b> This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
  {
    id: 16,
    name: "Eldritch Calm",
    action: "",
    tags: ["shoony"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Fey Influence.
        </span>
        <br />
        Your fey heritage has altered your mindset to more resemble the uncanny
        perspective of the fey. While you are not emotionless, and indeed might
        be prone to fits of odd moods and tempers, many perceive you as having
        an aura of unshakable tranquility. When you roll a critical failure
        against an emotion or fear effect, you get a failure instead. Once per
        day in place of attempting a saving throw against an emotion or fear
        effect, you can automatically treat your result as though you had rolled
        a 20; this is a fortune effect.
        <br />
        <br />
        However, your extraordinary emotional detachment makes it difficult to
        encourage you. You reduce any bonus you gain from an emotion effect by
        1.
        <br />
        <br />
        <b>Special:</b> This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
  {
    id: 17,
    name: "Glamour",
    action: "",
    tags: ["rare", "shoony"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Fey Influence.
        </span>
        <br />
        You unlock a new level of fey power and can manipulate the perceptions
        of others using a font of First World magic. You gain the fey glamour
        focus spell as a primal spell that doesn't have the sorcerer trait. If
        you don't already have a focus pool, you gain a focus pool of 1 Focus
        Point.
        <br />
        <br />
        <b>Special:</b> This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
  {
    id: 18,
    name: "Steadfast Ally",
    action: "",
    tags: ["shoony"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Loyal Empath.
        </span>
        <br />
        Your presence alone is enough to provide your allies with emotional
        support. You can use the Aid reaction to grant a bonus to another
        creature’s Will saving throw even when you haven’t prepared to help.
      </span>
    ),
  },
  {
    id: 19,
    name: "Unrivaled Builder",
    action: "",
    tags: ["shoony"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Unrivaled Builder.
        </span>
        <br />
        Building things is like solving a puzzle, and you know how to use
        anything at your disposal to get the job done. You gain creation as a
        5th-level innate primal spell. You must have an equivalent Bulk of
        material to create an item, such as wood or scrap metal to make a
        wheelbarrow. You can cast this spell once each day.
      </span>
    ),
  },
  {
    id: 20,
    name: "Fey transcendence",
    action: "",
    tags: ["shoony"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Fey Influence.
        </span>
        <br />
        You become a powerful fey creature, gaining strengths tied to the First
        World but also some of the weakness against which all fey must contend.
        You gain a +2 status bonus to saves against illusion, emotion, and
        enchantment effects, and you can use Diplomacy to Make an Impression on
        and to make very simple Requests of animals and plants. You regain twice
        the number of Hit Points when resting in a natural wooded area, such as
        a forest or jungle. You have weakness to cold iron equal to half your
        level.
        <br />
        <br />
        <b>Special:</b> This feat gains the trait appropriate for your ancestry
        (human for human, goblin for goblin, etc.).
      </span>
    ),
  },
];
