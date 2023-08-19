import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const leshyFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Ageless spirit",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You remember more about your previous incarnations than most leshys.
        During your daily preparations, you can meditate upon fragmentary
        memories of your past lives to gain the trained proficiency rank in one
        skill of your choice. This proficiency lasts until you prepare again.
        Since this proficiency is temporary, you can’t use it as a prerequisite
        for a skill increase or a permanent character option like a feat.
      </span>
    ),
  },
  {
    id: 2,
    name: "Grasping reach",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You can extend a tangle of vines or tendrils to support your arms and
        extend your reach. When you wield a melee weapon that requires two
        hands, doesn’t have reach, and deals at least 1d6 damage, you can change
        between a typical two-handed grip and an extended two-handed grasp using
        an Interact action. Weapons wielded in your extended grasp gain reach of
        10 feet. This grasp is less stable and powerful than a typical grip,
        reducing the weapon’s damage die by 1 step.
      </span>
    ),
  },
  {
    id: 3,
    name: "Harmless lute",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your size and demeanor make it easy for you to convince others that you
        mean no harm. You gain the Shameless Request skill feat as a bonus feat.
        Additionally, you gain a +1 circumstance bonus to initiative checks when
        you roll Deception for initiative.
      </span>
    ),
  },
  {
    id: 4,
    name: "Leshy lore",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You deeply understand your people’s cultural traditions and innate
        strengths. You gain the trained proficiency rank in Nature and Stealth.
        If you would automatically become trained in one of those skills (from
        your background or class, for example), you instead become trained in a
        skill of your choice. You also become trained in Leshy Lore.
      </span>
    ),
  },
  {
    id: 5,
    name: "Leshy superstition",
    action: "reaction",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You attempt a saving throw against a spell or magical
          effect, but haven’t rolled yet.
        </span>
        <br />
        You notice spirits that inhabit objects, learning which bring good
        fortune and which are unlucky. You focus on the power of a lucky object,
        granting you a +1 circumstance bonus to your saving throw against the
        triggering effect.
      </span>
    ),
  },
  {
    id: 6,
    name: "Seedpod",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your body produces a nearly endless supply of hard seedpods. You gain a
        seedpod ranged unarmed attack with a range increment of 10 feet that
        deals 1d4 bludgeoning damage; these Strikes have the manipulate trait.
        On a critical hit, a seedpod bursts, issuing forth a tangle of
        vegetation that imposes a –10-foot circumstance penalty on the target’s
        Speed for 1 round. Seedpods do not add critical specialization effects.
      </span>
    ),
  },
  {
    id: 7,
    name: "Shadow of the wilds",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        It’s difficult to notice your passage through wild areas. As long as
        you’re not in an urban environment, you’re always considered to be
        Covering Tracks, even if you chose a different activity in exploration
        mode.
      </span>
    ),
  },
  {
    id: 8,
    name: "Undaunted",
    action: "",
    tags: ["leshy"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your spirit has endured many challenges over its long existence, and you
        are certain you can overcome whatever hardships life throws your way.
        You gain a +1 circumstance bonus to saves against emotion effects. If
        you roll a success on a saving throw against an emotion effect, you get
        a critical success instead.
      </span>
    ),
  },
  {
    id: 9,
    name: "Anchoring roots",
    action: "",
    tags: ["leshy"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Small roots sprout from your feet, steadying you as you move. You gain
        the Steady Balance skill feat, even if you aren’t trained in Acrobatics,
        and you can use the Anchor action.
        <br />
        <br />
        Anchor Effect{" "}
        <img
          width="20px"
          src={require("../assets/img/one_action.png")}
          alt="one acition"
        />{" "}
        You send your roots deeper into the ground, making it harder for you to
        stumble. Until you move, you gain a +2 circumstance bonus to your
        Fortitude or Reflex DC against attempts to Shove or Trip you (or a +4
        circumstance bonus if you’re a root leshy). This bonus also applies to
        saving throws against spells or effects that attempt to move you or
        knock you prone. If an effect forces you to move, you move only half the
        normal distance, as some of the effort goes to tearing out the roots. At
        the GM’s discretion, this ability might not work on ground that’s more
        resilient than stone, such as metal flooring or magically-reinforced
        masonry.
      </span>
    ),
  },
  {
    id: 10,
    name: "Leshy glide",
    action: "one_action",
    tags: ["leshy"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> leaf leshy heritage or Cat Fall skill feat.
        </span>
        <br />
        Using your own leaves, you can control your descent. You glide slowly
        toward the ground, 5 feet down and up to 25 feet forward through the
        air. As long as you spend at least 1 action gliding each round and have
        not yet reached the ground, you remain in the air at the end of your
        turn.
      </span>
    ),
  },
  {
    id: 11,
    name: "Ritual reversion",
    action: "two_action",
    tags: ["leshy", "polymorph", "primal", "transmutation"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You can temporarily revert to a less conspicuous form without
        diminishing your senses. You take the form of an ordinary specimen of
        the type of plant or fungus that most closely resembles you, reverting
        to your body’s appearance just before your spirit joined with it. This
        otherwise has the effects of tree shape, except that your size remains
        Small.
      </span>
    ),
  },
  {
    id: 12,
    name: "Speak with kindred",
    action: "",
    tags: ["leshy"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You have a connection with creatures that share your physiology. You can
        ask questions of, receive answers from, and use the Diplomacy skill with
        plants or fungi that match your leshy heritage. Generally, fungus
        leshies can speak to mushrooms and fungi; gourd leshies can speak to
        gourds, melons, and similar fruiting plants; leaf leshies can speak with
        deciduous trees; and vine leshies can speak with vines and climbing
        plants. The GM determines which plants or fungi count for this ability.
      </span>
    ),
  },
  {
    id: 13,
    name: "Bark and tendril",
    action: "",
    tags: ["leshy"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You wield primal magic. You can cast barkskin and entangle as 2nd-level
        primal innate spells once per day each.
      </span>
    ),
  },
  {
    id: 14,
    name: "Lucky keepsake",
    action: "",
    tags: ["leshy"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Leshy Superstition
        </span>
        <br />
        You have a keepsake that grants you luck. You gain a +1 circumstance
        bonus to saves against spells and magical effects at all times, not just
        when you use Leshy Superstition. If you lose the keepsake, you lose the
        bonus until you designate a new keepsake, typically over the course of a
        week.
      </span>
    ),
  },
  {
    id: 15,
    name: "Solar rejuvenation",
    action: "",
    tags: ["leshy"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        If you rest outdoors for 10 minutes during the day, you regain Hit
        Points equal to your Constitution modifier × half your level. You gain
        this benefit in addition to any healing from Treat Wounds. Leshies whose
        plant nourishment does not rely on photosynthesis require a similarly
        suitable environment. For example, fungus leshies need dark, damp
        environments and a pile of decaying plant matter.
      </span>
    ),
  },
  {
    id: 16,
    name: "Spore cloud",
    action: "two_action",
    tags: ["leshy"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour.
        </span>
        <br />
        You unleash a cloud of pollen or similar spores. All creatures in a
        10-foot emanation around you must attempt a Fortitude save using your
        class DC or spell DC (whichever is higher) with the following results.
        Plants and fungi are immune to this effect.
        <br />
        <br />
        <b>Critical Success:</b> No effect.
        <br />
        <br />
        <b>Success:</b> The creature is dazzled for 1 round.
        <br />
        <br />
        <b>Failure</b> The creature is dazzled and can see only 10 feet away for
        1 round.
        <br />
        <br />
        <b>Critical Failure:</b> The creature is blinded for 1 round.
      </span>
    ),
  },
  {
    id: 17,
    name: "Thorned seedpod",
    action: "",
    tags: ["leshy"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Seedpod.
        </span>
        <br />
        When your seedpods strike a felling blow, they burst into viciously
        thorny vines. When you critically succeed at a seedpod Strike, vines
        twist and stab your foe, dealing 1d4 persistent piercing damage.
      </span>
    ),
  },
  {
    id: 18,
    name: "Call of the greenman",
    action: "",
    tags: ["leshy"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You can call forth nearby nature spirits to augment your body. Once per
        day, you can cast plant form as a 5th-level primal innate spell. When
        you reach 17th level, this spell can be heightened to 6th level.
      </span>
    ),
  },
  {
    id: 19,
    name: "Cloak of poison",
    action: "two_action",
    tags: ["leshy"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        You secrete a cloak of concentrated poison that harms any who dare
        attack you. For 1 minute, any creature that touches you or damages you
        with an unarmed attack or melee weapon without the reach trait takes 3d6
        poison damage.
      </span>
    ),
  },
  {
    id: 20,
    name: "Flourish and run",
    action: "",
    tags: ["leshy"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You can call upon the vital essence of your spirit to restore life to
        your allies and call forth vines to ensnare and bludgeon your foes. You
        can cast field of life and tangling creepers as 6th-level primal innate
        spells once per day each. You become an expert in primal spell attack
        rolls and primal spell DCs.
      </span>
    ),
  },
  {
    id: 21,
    name: "Regrowth",
    action: "",
    tags: ["leshy"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        Your command over your vital essence allows you or an ally to recover
        from grievous wounds. You can cast regenerate as a 7th-level primal
        innate spell once per day.
      </span>
    ),
  },
];
