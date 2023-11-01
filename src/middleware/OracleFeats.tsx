import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const oracleFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Glean lore",
    action: "one_action",
    tags: ["oracle", "divination", "divine", "secret"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You can extend your spells’ range. If the next action you use is to
          Cast a Spell that has a range, increase that spell’s range by 30 feet.
          As is standard for increasing spell ranges, if the spell normally has
          a range of touch, you extend its range to 30 feet.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Reach spell",
    action: "one_action",
    tags: ["oracle", "concentrate", "metamagic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You can extend your spells’ range. If the next action you use is to
          Cast a Spell that has a range, increase that spell’s range by 30 feet.
          As is standard for increasing spell ranges, if the spell normally has
          a range of touch, you extend its range to 30 feet.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Widen spell",
    action: "one_action",
    tags: ["oracle", "manipulate", "metamagic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You manipulate the energy of your spell, causing it to affect a wider
          area. If the next action you use is to Cast a Spell that has an area
          of a burst, cone, or line and doesn’t have a duration, increase the
          area of that spell. Add 5 feet to the radius of a burst that normally
          has a radius of at least 10 feet (a burst with a smaller radius isn’t
          affected). Add 5 feet to the length of a cone or line that is normally
          15 feet long or smaller, and add 10 feet to the length of a larger
          cone or line.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Cantrip expansion",
    action: "",
    tags: ["oracle"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          Study broadens your range of simple spells. Add two additional
          cantrips from your spell list to your repertoire.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Divine aegis",
    action: "reaction",
    tags: ["oracle", "abjuration", "divine"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You attempt a saving throw against a magical effect,
            but you haven’t rolled yet.
          </span>
        </p>
        <p>
          You summon divine energy to shield yourself, offering protection
          against other traditions but leaving you exposed to other divine
          effects. Until the beginning of your next turn, you gain a +1
          circumstance bonus to saving throws against non-divine magical
          effects, but you also take a –1 circumstance penalty to saves against
          divine effects.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Domain acumen",
    action: "",
    tags: ["oracle"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          Every oracle’s mystery touches on a divine domain of the deities that
          fuel it; you can access that power. Choose one of the domains
          associated with your mystery for which you don’t already have an
          initial domain spell. You gain an initial domain spell from that
          domain, which you cast as a revelation spell. It gains the cursebound
          trait. Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Bespell weapon",
    action: "",
    tags: ["oracle"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Frequency</b> once per turn.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your most recent action was to cast a
            non-cantrip spell.
          </span>
        </p>
        <p>
          You siphon the residual energy from the last spell you cast into one
          weapon you’re wielding. Until the end of your turn, the weapon deals
          an extra 1d6 damage of a type depending on the school of the spell you
          just cast.
        </p>
        <ul>
          <li>
            <b>Abjuration</b> force damage
          </li>
          <li>
            <b>Conjuration or Transmutation</b> same type as the weapon
          </li>
          <li>
            <b>Divination, Enchantment, or Illusion</b> mental damage
          </li>
          <li>
            <b>Evocation</b> a type the spell dealt, or force damage if the
            spell didn’t deal damage
          </li>
          <li>
            <b>Necromancy</b> negative damage
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    name: "Divine access",
    action: "",
    tags: ["oracle"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          Your ability to tap into divine magic surpasses the spells
          traditionally available to you (the divine spell list). Choose one
          deity who grants one of your mystery’s granted domains. Add up to
          three cleric spells of your choice granted by that deity to your spell
          list. You can select from these spells when you add or swap spells in
          your spell repertoire.
        </p>
        <p>
          <b>Special</b> You can select this feat more than once. You can’t
          choose the same spells more than once, but you can choose a different
          domain or a different deity with the same domain you’ve previously
          selected with this feat.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Player-touched weapon",
    action: "",
    tags: ["uncommon", "oracle", "cleric"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> divine spells, you follow a good-aligned deity.
          <br />
          <b>Frequency</b> once per turn.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your most recent action was to cast a
            non-cantrip divine spell.
          </span>
        </p>
        <p>
          You coat a weapon you’re wielding in prayers and the divine power
          given to you by your deity. Until the end of your turn, the weapon
          deals an extra 1d6 positive damage. As usual for positive damage, this
          damage harms only undead and creatures with negative healing.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Sacral lord",
    action: "",
    tags: ["rare", "oracle", "champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Occultism or Religion.
          </span>
        </p>
        <p>
          By right of ritual or sheer stubbornness, you have claimed rulership
          of the land. Claim a defined territory, such as a small section of
          forest or river, or a district of a larger city. Within its borders,
          you can cast detect magic, guidance, and sigil as innate divine
          cantrips, and you gain a +1 circumstance bonus to Make an Impression
          on creatures that have the celestial, fiend, fey, monitor, or spirit
          traits.
        </p>
        <p>
          <b>Special</b> You and your land are linked. Changes to one mirror
          themselves on the other—if you’re depressed, gray rain and clammy mist
          might set in. These effects have no immediate mechanical impact, but
          they might give clues about problems afflicting the land.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Undying conviction",
    action: "",
    tags: ["uncommon", "oracle", "aura", "cleric", "necromancy", "wizard"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Book of the Dead</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> able to create or control undead; cleric with a
            negative font, oracle of bones, or necromancer wizard
          </span>
        </p>
        <p>
          Your presence has a bolstering effect on your undead minions. Undead
          creatures under your control and within a 30-foot emanation around you
          gain a +2 status bonus to saving throws to resist positive damage and
          to Will saving throws to resist effects that would make them
          controlled.
        </p>
        <p>
          <b>Special</b> This feat has the trait matching your spellcasting
          tradition.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Vision of weakeness",
    action: "",
    tags: ["oracle"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>

        <p>
          You can call upon divine insights to single out your foes’ weak
          points. You learn the vision of weakness revelation spell. Increase
          the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Advanced revelation",
    action: "",
    tags: ["oracle"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> initial revelation spell.
          </span>
        </p>

        <p>
          You learn an advanced revelation spell associated with your mystery.
          Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Detonating spell",
    action: "one_action",
    tags: [
      "uncommon",
      "oracle",
      "cleric",
      "concentrate",
      "metamagic",
      "sorcerer",
      "witch",
      "wizard",
    ],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
        </p>

        <p>
          Your spell becomes volatile and explosive. If the next action you use
          is to Cast a Spell that deals damage to a single target and the spell
          successfully damages that target, the spell explodes, dealing splash
          damage equal to the level of the spell cast to adjacent creatures.
          Unlike normally, this splash damage doesn’t apply to the target. The
          splash damage dealt is of the same type the spell deals.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Spiritual sense",
    action: "",
    tags: ["oracle", "divination", "divine"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
        </p>

        <p>
          You have a vague connection to the Ethereal Plane that enables you to
          notice spirits. While you’re exploring but not Searching, the GM rolls
          a secret check for you to find haunts that usually require Searching,
          as well as spirits, creatures on the Ethereal Plane, and beings made
          entirely of spiritual essence such as celestials, fiends, and
          monitors.
        </p>
        <p>
          You can also potentially notice ethereal creatures and spirits inside
          solid objects, provided they are within 30 feet of you. This applies
          while Searching, while Seeking, and on the automatic secret check you
          gain while exploring even if you aren’t Searching. You can still
          notice spirits only on a successful check, and you can’t see them if
          they’re more than 5 feet inside an object.
        </p>
        <p>
          When you notice a creature with your Spiritual Sense, you also learn
          its location, making it hidden to you if it had been undetected.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Steady spellcasting",
    action: "",
    tags: ["oracle"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>

        <p>
          Confident in your technique, you don’t easily lose your concentration
          when you Cast a Spell. If another creature’s reaction would disrupt
          your spellcasting action, attempt a DC 15 flat check. If you succeed,
          your action isn’t disrupted.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Debilitating dichotomy",
    action: "",
    tags: ["oracle"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>

        <p>
          You can give others a glimpse of the impossible conflicts and
          unchecked power that courses through your body. You learn the
          debilitating dichotomy revelation spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Read disaster",
    action: "",
    tags: ["oracle", "divination", "exploration", "prediction"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>

        <p>
          You spend 10 minutes and open yourself to the divine mysteries of the
          world, peering into the most sinister portents of the future. You gain
          the effects of augury, except you learn only about the dangers ahead;
          any results of “weal” are instead “nothing,” and results of “weal and
          woe” are instead “woe.” If you are legendary in Religion, you take
          only 1 minute to Read Disaster.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Consecrate spell",
    action: "one_action",
    tags: [
      "uncommon",
      "oracle",
      "cleric",
      "concentrate",
      "metamagic",
      "sorcerer",
    ],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> ability to cast focus spells, divine spells.
          </span>
        </p>

        <p>
          You infuse a spell with the power of your faith, consecrating it. If
          the next action you use is to Cast a Spell that targets a single
          undead, you can expend a Focus Point, channeling the power of your
          focus spells into the primary spell. If you do, the spell you cast
          deals additional good or positive damage (your choice) equal to the
          level of your focus spells. As normal for additional damage, this
          additional damage is doubled if the spell cast requires an attack roll
          and the result of the attack roll is a critical hit, or if the spell
          cast requires a saving throw and the result of the saving throw is a
          critical failure.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Oracular warning",
    action: "",
    tags: ["oracle", "divination", "divine"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You are about to roll initiative.
          </span>
        </p>

        <p>
          You have a flash of insight about impending danger related to one
          ally, and you can shout or gesture to warn that ally of the threat a
          moment before it materializes. One ally of your choice can roll twice
          for initiative and use the better result; this is a fortune effect. If
          you are legendary in Religion, you receive two visions and can warn
          two allies, granting them both this benefit.
        </p>
        <p>
          You are momentarily thrown off by the divine insight, however, and you
          must roll twice for your initiative roll and use the worse result.
          This is a misfortune effect. The two effects are tied together; if you
          would avoid the misfortune effect for any reason, or if any of your
          allies would negate their fortune effect, your Oracular Warning does
          nothing. Depending on whether you use gestures or call out, this
          action gains either the visual or auditory trait, respectively.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Quickened casting",
    action: "",
    tags: ["oracle", "concentrate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Frequency</b> once per day.
          </span>
        </p>

        <p>
          If your next action is to cast an oracle cantrip or an oracle spell
          that is at least 2 levels lower than your highest level spell slot,
          reduce the number of actions to cast it by 1 (minimum 1 action).
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Surging might",
    action: "one_action",
    tags: ["oracle", "manipulate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          With a complex gesture, you focus the divine power of your spell to
          overcome enemies’ resistances. If the next action you use is to Cast a
          Spell, the spell ignores an amount of the target’s resistance equal to
          your level against all the following types of damage: chaotic, evil,
          good, lawful, negative, and positive. This applies to all damage the
          spell deals, including persistent damage and damage caused by an
          ongoing effect of the spell, such as the positive energy within a
          field of life. This doesn’t cause the spell to ignore immunities, only
          resistances.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Domain fluency",
    action: "one_action",
    tags: ["oracle"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> initial domain spell.
          </span>
        </p>
        <p>
          You command a deep understanding of the divine domains related to your
          mystery. Choose one of the domains associated with your mystery for
          which you have an initial domain spell. You gain an advanced domain
          spell from that domain, which you cast as a revelation spell, causing
          it to gain the cursebound trait. Increase the number of Focus Points
          in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Greater revelation",
    action: "",
    tags: ["oracle"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> initial revelation spell.
          </span>
        </p>
        <p>
          You learn a greater revelation spell associated with your mystery.
          Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Magic sense",
    action: "",
    tags: ["oracle", "detection", "divination", "divine"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          You have a literal sixth sense for ambient magic in your vicinity. You
          can sense the presence of magic auras as though you were always using
          a 1st-level detect magic spell. This detects magic in your field of
          vision only. When you Seek, you gain the benefits of a 3rd-level
          detect magic spell on things you see (in addition to the normal
          benefits of Seeking). You can turn this sense off and on with a free
          action at the start or the end of your turn.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Necromancer's visage",
    action: "",
    tags: ["uncommon", "oracle", "cleric", "necromancy", "wizard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Book of the Dead</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> ability to create or control undead; cleric
            with a negative font, oracle of bones, or necromancer wizard.
          </span>
        </p>
        <p>
          Necromantic energy demonstrates your power over undead, creating a
          demeanor that commands their fear and respect. Undead creatures can
          immediately sense your Necromancer’s Visage and tend to act
          accordingly. If you take a hostile action against an undead creature,
          it becomes permanently immune to your Necromancer’s Visage, and your
          Necromancer’s Visage ends. You can spend 10 minutes to restore your
          Necromancer’s Visage, though any creatures that became permanently
          immune remain so.
        </p>
        <p>
          Each time an undead creature 2 or more levels lower than you attacks
          you, it must attempt a Will save against your spell DC. If you’re also
          affected by sanctuary or a similar effect, only one affects the
          attacker (you choose which).
        </p>
        <p>
          <b>Critical Success</b> The creature is permanently immune to your
          Necromancer’s Visage.
        </p>
        <p>
          <b>Success</b> The creature can attempt its attack and any other
          attacks against you this turn.
        </p>
        <p>
          <b>Failure</b> The creature can’t attack you and wastes the action. It
          can’t attempt further attacks against you this turn.
        </p>
        <p>
          <b>Critical Failure</b> The creature wastes the action and can’t
          attempt to attack you as long as your Necromancer’s Visage persists.
        </p>
        <p>
          <b>Special</b> This feat has the trait matching your spellcasting
          tradition.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Necromancer's visage",
    action: "",
    tags: ["oracle", "concentrate", "metamagic"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Frequency</b> once per day.
          </span>
        </p>
        <p>
          You’ve learned to forestall the effects of your curse somewhat. If the
          next action you use is to cast a revelation spell, the severity of
          your curse doesn’t increase.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Mysterious repertoire",
    action: "",
    tags: ["oracle"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          Your mystery holds unknowable depths of magic not always associated
          with the divine. You can have one spell in your spell repertoire not
          on the divine spell list, in addition to spells you’ve added to your
          spell list from feats like Divine Access. You cast that spell as a
          divine spell. You can swap which spell you add and from which
          tradition as you could any other oracle spell, but you can’t use this
          feat to have more than one spell from another tradition in your spell
          repertoire at the same time.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Purifying breeze",
    action: "one_action",
    tags: ["uncommon", "oracle", "cleric", "sorcerer"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
        </p>
        <p>
          <b>Prerequisites</b> divine spells.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your most recent action was to cast a
            non-cantrip spell with the healing trait.
          </span>
        </p>
        <p>
          You transfer the divine essence of your magic to the air around you,
          cleansing it of toxins. Attempt a counteract check against each
          airborne disease or poison effect in a 15-foot radius around you.
          Regardless of your success or failure, until the beginning of your
          next turn, all creatures in the purified area gain a +1 status bonus
          to Fortitude saving throws.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Sacral monarch",
    action: "",
    tags: ["oracle", "champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Sacral Lord, master in Occultism or Religion.
          </span>
        </p>
        <p>
          You have come into your full powers and are truly a monarch of your
          realm, by your own definition at least. While in your territory, you
          can cast banishment and inevitable disaster as innate divine spells,
          each once per day.
        </p>
      </>
    ),
  },
];
