import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const psychicFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Ancestral Mind",
    action: "",
    tags: ["psychic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          By unraveling memories and connections passed down from your
          progenitors and buried within your unconscious mind, you learn to
          convert your inherent magic into psychic power. You can cast any
          innate spells you know from an ancestry feat or heritage using your
          psychic spellcasting components. When you do so, the spell’s tradition
          becomes occult, if it wasn’t already, and you can use your psychic
          spellcasting ability modifier instead of Charisma to determine your
          spell attack roll and spell DC.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Counter Thought",
    action: "reaction",
    tags: ["psychic", "abjuration", "occult"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Trigger</b> A creature Casts a Spell with the mental trait.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have an unexpended spell slot you could use
            to Cast a Spell with the mental trait.
          </span>
        </p>
        <p>
          When a foe Casts a Spell that has the mental trait and you can see its
          manifestations, you can use your own mental magic to disrupt it. You
          expend one of your spell slots to counter the triggering creature’s
          casting of a spell with the mental trait. You lose your spell slot as
          if you had cast the triggering spell; this spell slot must be one for
          which you could Cast a Spell with the mental trait. You then attempt
          to counteract the triggering spell.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Mental Buffer",
    action: "",
    tags: ["psychic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your mind deflects some amount of harm from attacks that induce pain
          or manipulate your mind directly. You gain resistance to mental damage
          equal to half your level (minimum 1). This resistance increases to
          equal to your level while your Psyche is Unleashed.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Psychic Rapport",
    action: "",
    tags: ["psychic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your telepathic sensitivity intensifies when you’re affected by mental
          magic, making it easier for you to link to other creatures. After you
          Cast a Spell with the mental trait, until the start of your next turn,
          you gain a +1 circumstance bonus to Deception, Diplomacy, and
          Intimidation checks, and to Perception checks to Sense Motive.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Cantrip Expansion",
    action: "",
    tags: ["psychic"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You expand what your mind can accomplish. Add two additional occult
          cantrips to your repertoire.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Mental Balm",
    action: "",
    tags: ["psychic", "amp", "emotion", "mental"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your spells release soothing mental waves. Use this amp in place of a
          psi cantrip’s normal amp entry. You can use this amp only on a psi
          cantrip that targets or affects you or one or more of your allies and
          doesn’t target or affect any enemies.
        </p>
        <p>
          <b>Amp</b> Your spells release soothing mental waves. Use this amp in
          place of a psi cantrip’s normal amp entry. You can use this amp only
          on a psi cantrip that targets or affects you or one or more of your
          allies and doesn’t target or affect any enemies.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Psi Burst",
    action: "one_action",
    tags: [
      "psychic",
      "concentrate",
      "evocation",
      "Mindshift",
      "occult",
      "psyche",
    ],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Frequency</b> once per round
          </span>
        </p>
        <p>
          With a passing thought, you direct violent psychic energies at a
          nearby creature. Target one creature within 30 feet. It takes 1d4
          bludgeoning damage with a basic Reflex save. At 3rd level and every 2
          levels thereafter, the damage increases by 1d4.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Wrap Space",
    action: "",
    tags: ["psychic", "amp"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You use your magic to bend space, causing your spell to strike from a
          strange vector. Use this amp in place of a psi cantrip’s normal amp
          entry. The amped psi cantrip must have a range.
        </p>
        <p>
          <b>Amp</b> Choose a square within 30 feet to which you have line of
          effect and line of sight. Determine your spell’s line of effect and
          line of sight from there, as well as whether creatures have cover
          against the spell. The spell can exceed its normal range as measured
          from you, as long as it’s within its normal range from the square you
          chose.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Astral Tether",
    action: "one_action",
    tags: ["psychic", "abjuration", "occult"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You spin out a thread of psychic energy that connects you to an ally,
          using it as a conduit for your abilities. Choose a willing creature
          within 60 feet and connect to it. Whenever you would gain a benefit
          from a psychic amp, you can have the amp affect the tethered creature
          instead. You can do so only if the amp grants a distinct benefit, not
          if it alters the amped spell.
        </p>
        <p>
          The tether can’t be severed physically but breaks if the distance
          between you and the tethered ally ever exceeds 60 feet, if you become
          unconscious, or if you use Astral Tether again.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Homing Beacon",
    action: "",
    tags: ["psychic", "abjuration", "occult"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          As your spell strikes a target, you plant a beacon in the target’s
          mind that announces its presence to those nearby. Use this amp in
          place of a psi cantrip’s normal amp entry. The amped cantrip must be
          one that has one or more targets and must either require a spell
          attack roll or have a saving throw.
        </p>
        <p>
          <b>Amp</b> Choose one creature hit by the spell (if the spell has a
          spell attack roll) or that fails its save against the spell (if the
          spell requires a save). A psychic beacon emits from the creature’s
          location, making it easier to notice the creature as the mind and
          attention of onlookers is subtly drawn to it. For 1 minute, if the
          target would be invisible, it’s instead merely concealed, and if it
          would be concealed, it’s no longer concealed.
        </p>
      </>
    ),
  },
];
