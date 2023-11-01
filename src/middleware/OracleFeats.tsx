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
];
