import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const kashrishiFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Community knowledge",
    action: "reaction",
    tags: ["concentrate", "divination", "kashrishi", "occult"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Frequency:</b> once per hour.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You attempt a skill check requiring 3 actions or
          fewer.
        </span>
        <br />
        You commune with the psychic echoes of your ancestors and community,
        channeling their experiences into yourself. You gain a +2 status bonus
        on the triggering skill check.
      </span>
    ),
  },
  {
    id: 2,
    name: "Crystal illuminance",
    action: "one_action",
    tags: ["concentrate", "kashrishi", "light"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your horn glows with bioluminescent color, casting bright light in a
        20-foot emanation (and dim light for the next 20 feet). This light can
        be any color. The most common colors are blue and purple, except for
        trogloshi, who normally shed white light. The light shuts off when you
        take this action again or fall unconscious.
        <br />
        <br />
        If a spell or ability would activate your glowing horn while Crystal
        Luminescence is active, it instead increases the radius of the bright
        light and dim light by 10 feet each until the start of your next turn.
        This isn’t cumulative, so using another such ability doesn’t increase
        the radius again.
        <br />
        <br />
        <b>Special:</b> If you have the trogloshi heritage, you can select this
        feat a second time (in addition to gaining it automatically from your
        heritage). If you do, you increase the area to a 40-foot emanation (and
        dim light for the next 40 feet). In addition, you can use Crystal
        Luminescence as a free action the first time you use it on each of your
        turns.
      </span>
    ),
  },
  {
    id: 3,
    name: "Emotional partitions",
    action: "",
    tags: ["kashrishi"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have created strong mental partitions in your mind to filter out
        negative emotional influences. You gain a +1 circumstance bonus on
        saving throws against emotion effects. If you roll a success on a saving
        throw against an emotion effect, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 4,
    name: "Mental sustenance",
    action: "",
    tags: ["kashrishi"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You can sustain yourself with the power of your mind. You need only a
        single serving of food and water each week to avoid starvation or
        dehydration. You can hold your breath for an additional 5 rounds before
        running out of air.
      </span>
    ),
  },
  {
    id: 5,
    name: "Open mind",
    action: "",
    tags: ["kashrishi"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have inherent psychic abilities that allow you to tap into the power
        of your mind. Choose one cantrip from the occult spell list. You can
        cast this spell as an occult innate spell at will. A cantrip is
        heightened to a spell level equal to half your level rounded up.
      </span>
    ),
  },
  {
    id: 6,
    name: "Puncturing horn",
    action: "",
    tags: ["kashrishi"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        While many kashrishi never use their horns for more than cracking open
        hard-shelled fruits or amplifying their psychic powers, you’ve practiced
        using yours offensively. You gain a horn unarmed attack that deals 1d6
        piercing damage. Your horn is in the brawling group and has the finesse
        and unarmed traits.
        <br />
        <br />
        <b>Special:</b> If you have the xyloshi heritage, your horn instead
        deals 1d8 piercing damage.
      </span>
    ),
  },
  {
    id: 7,
    name: "Scuttle up",
    action: "reaction",
    tags: ["kashrishi"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> athamasi or xyloshi.
        </span>
        <br />
        Your environment requires you to climb cave walls or tree trunks with
        great regularity. You gain a Climb speed of 10 feet.
      </span>
    ),
  },
  {
    id: 8,
    name: "Tough skin",
    action: "",
    tags: ["kashrishi"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> lethoci heritage or xyloshi heritage.
        </span>
        <br />
        Your skin is medium armor in the plate armor group that grants a +4 item
        bonus to AC, and has a Dex cap of +1, a check penalty of –2, a Speed
        penalty of –5 feet, a Strength value of 16, and the comfort trait. You
        can never wear other armor or remove your hide. You can etch armor runes
        onto your hide.
        <br />
        <br />
        If you’re a lethoci kashrishi who takes this feat, your modifications
        also make you more buoyant, allowing you to Swim across the surface of
        even turbulent bodies of water without needing to make an Athletics
        check.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain into this feat.
      </span>
    ),
  },
  {
    id: 9,
    name: "Emphatic calm",
    action: "",
    tags: ["kashrishi"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Once per day, you can cast either calm emotions or sanctuary as an
        innate occult spell, heightened to half your level rounded up.
      </span>
    ),
  },
  {
    id: 10,
    name: "Fighting horn",
    action: "",
    tags: ["kashrishi"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Puncturing Horn or xyloshi.
        </span>
        <br />
        You can modify the size and shape of your horn over time using your
        mental powers. Choose two of the following weapon traits: disarm,
        grapple, shove, and trip. Your horn gains the chosen traits.
        <br />
        <br />
        <b>Special:</b> You can take this feat a second time, adding the traits
        you didn’t choose when you first took it
      </span>
    ),
  },
  {
    id: 11,
    name: "Skilled climber",
    action: "",
    tags: ["kashrishi"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> athamasi or xyloshi.
        </span>
        <br />
        You can navigate vertical surfaces with ease. You gain a climb Speed of
        10 feet. If you also have the Scuttle Up ancestry feat, your climb Speed
        increases to your land Speed when climbing trees or cavern walls.
      </span>
    ),
  },
  {
    id: 12,
    name: "Unlock secret",
    action: "",
    tags: ["kashrishi"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Open Mind.
        </span>
        <br />
        You delve deeper into your psychic potential. Choose a 1st-level occult
        spell, either a common spell or another to which you have access. You
        can cast that spell once per day as an innate occult spell.
      </span>
    ),
  },
  {
    id: 13,
    name: "Well of potential",
    action: "one_action",
    tags: ["kashrishi"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> focus pool, at least one innate spell from a
          kashrishi heritage or ancestry feat that shares a tradition with at
          least one of your focus spells.
        </span>
        <br />
        Your mind is a deep well of psychic potential. You regain 1 Focus Point,
        up to your usual maximum.
      </span>
    ),
  },
  {
    id: 14,
    name: "Fortified mind",
    action: "",
    tags: ["kashrishi"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        our mind is unusually resilient and resistant to influence. When you
        would gain the fascinated or stupefied condition, you can attempt a DC
        17 flat check. On a success, you don’t gain the fascinated or stupefied
        condition.
      </span>
    ),
  },
  {
    id: 15,
    name: "Telekinetic slip",
    action: "reaction",
    tags: ["evocation", "kashrishi", "occult"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> Your turn begins, and you’re grabbed or restrained.
        </span>
        <br />A thin shell of telekinetic energy pushes from your skin, widening
        your enemy’s grasp enough for you to slip free. You gain a +2 status
        bonus to checks to Escape from whatever has you grabbed or restrained.
        This bonus lasts until either you’re no longer grabbed or restrained, or
        you fall unconscious.
      </span>
    ),
  },
  {
    id: 16,
    name: "Transcendent realization",
    action: "",
    tags: ["kashrishi"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Unlock Secret.
        </span>
        <br />
        You’ve unleashed even more of your mind’s limitless potential. Choose a
        3rd-level occult spell, either a common spell or another to which you
        have access, including a lower-level spell heightened to 3rd level if
        you wish. You can cast that spell once per day as an innate occult
        spell.
      </span>
    ),
  },
  {
    id: 17,
    name: "Kashrishi revivification",
    action: "reaction",
    tags: ["kashrishi"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You have the dying condition and are about to attempt
          a recovery check. You can use Kashrishi Revivification even if you’re
          otherwise unable to act.
        </span>
        <br />
        The well of psychic energy held within your mind can exceed the
        limitations of your physical body. You’re restored to 1 Hit Point, lose
        the dying and unconscious conditions, and can act normally on this turn.
        You gain or increase the wounded condition as normal for losing the
        dying condition.
      </span>
    ),
  },
  {
    id: 18,
    name: "Reimagine",
    action: "",
    tags: ["kashrishi"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Transcendent Realization.
        </span>
        <br />
        You can cast dreaming potential as an innate occult spell. You can cast
        this spell targeting yourself as your last activity before falling
        asleep to receive its normal benefits and effects.
      </span>
    ),
  },
  {
    id: 19,
    name: "Bend space",
    action: "",
    tags: ["uncommon", "kashrishi"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Transcendent Realization.
        </span>
        <br />
        Not even space itself is a match for the unleashed power of your mind.
        You can cast teleport as an innate occult spell. You don’t need to touch
        creatures to target them with this innate spell as long as they’re in
        range of your empathic sense.
      </span>
    ),
  },
  {
    id: 20,
    name: "Cleansing light",
    action: "two_action",
    tags: ["concentrate", "kashrishi", "light", "necromancy", "occult"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />A burst of light from your horn cleanses your allies of ailments
        and sends your foes reeling. You and all allies in a 20-foot emanation
        benefit from a 4th-level restoration spell. All enemies within the
        emanation are dazzled until the end of your next turn.
      </span>
    ),
  },
];
