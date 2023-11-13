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
  {
    id: 11,
    name: "Psi Strikes",
    action: "",
    tags: ["psychic", "mindshift"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Frequency</b> once per turn
          <br />
          <span className="frequency">
            <b>Requirements</b> Your most recent action was to Cast a Spell or
            to Unleash your Psyche.
          </span>
        </p>
        <p>
          You siphon residual psychic energies from your spell into one weapon
          you’re wielding or one of your unarmed attacks and when you unleash
          your mind, the energies flare to match. The attack deals an extra 1d6
          force damage until the end of the current turn. If your Psyche is
          Unleashed, this benefit instead lasts until your psyche subsides.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Thoughtform Summoning",
    action: "",
    tags: ["psychic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You can create a prototypical creature from the depths of your
          imagination instead of calling one from elsewhere. Whenever you summon
          a creature, you can choose to instead create a psychic construct of
          that creature. This grants it resistance to physical damage equal to
          half its level, weakness 5 to force and mental damage, and the ability
          to pass through enemies’ spaces without needing to Tumble Through
          (though it can’t end its turn in an occupied space).
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Violent Unleash",
    action: "",
    tags: ["psychic", "evocation", "mundshift", "occult"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You Unleash your Psyche.
          </span>
        </p>
        <p>
          The force of your mind unleashing itself wracks your enemies with a
          violent shockwave. You deal 2d6 force damage to all creatures in a
          20-foot emanation, with a basic Reflex save. This explosion is taxing,
          making you stunned 1.
        </p>
        <p>
          At 5th level and every 2 levels thereafter, the damage increases by
          1d6.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Inertial Barrier",
    action: "",
    tags: ["psychic", "abjuration", "amp", "occult"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your spell leaves behind barriers that reduce shock and motion. Use
          this amp in place of a psi cantrip’s normal amp entry.
        </p>
        <p>
          <b>Amp</b> You or one target of the spell gains resistance to physical
          damage equal to 2 + the spell’s level until the start of your next
          turn.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Parallel Breakthrough",
    action: "",
    tags: ["psychic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You expand your mind beyond your area of psychic specialty. You gain a
          1st-level psi cantrip for a conscious mind other than your own; this
          can be either the unique surface cantrip or one of the common cantrips
          and the accompanying amp. If you choose a common cantrip, you also
          gain the special benefit granted by that conscious mind when casting
          the cantrip without an amp. You don’t gain any other benefits of that
          conscious mind, such as additional spells known.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Sixth Sense",
    action: "",
    tags: ["psychic", "divination", "occult"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your psychic abilities also allow you to detect the lingering thoughts
          of spirits and similar entities. While you’re exploring but not
          Searching, the GM rolls a secret check for you to find haunts that
          usually require Searching, as well as spirits, creatures on the
          Ethereal Plane, and beings made entirely of spiritual essence, such as
          celestials, fiends, and monitors.
        </p>
        <p>
          You can also potentially notice ethereal creatures and spirits inside
          solid objects, provided they are within 30 feet of you. This applies
          while Searching, Seeking, and on the automatic secret check from Sixth
          Sense. You can still notice spirits only on a successful check, and
          you can’t see them if they’re more than 5 feet inside an object.
        </p>
        <p>
          When you notice a creature with your Sixth Sense, you also learn its
          location, making it hidden to you if it had been undetected.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Steady Spellcasting",
    action: "",
    tags: ["psychic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Confident in your technique, you don’t easily lose your concentration
          when you Cast a Spell. If a reaction would disrupt your spellcasting
          action, attempt a DC 15 flat check. If you succeed, your action isn’t
          disrupted.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Strain Mind",
    action: "",
    tags: ["psychic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Frequency</b> once per hour.
          <br />
          <b>Trigger</b> You cast a psi cantrip.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have 0 Focus Points.
          </span>
        </p>
        <p>
          You strain your body beyond its limits to use an amp even when your
          mental power is depleted. You add an amp that costs 1 Focus Point to
          the spell. Instead of paying the normal Focus Point cost, you lose Hit
          Points equal to four times the spell level of the amped psi cantrip as
          you bleed from your nose or suffer some other visible sign of strain.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Drain brain",
    action: "two_action",
    tags: ["psychic", "divination", "mental", "occult", "psyche"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          With a wresting of will, you siphon off a creature’s mental energy to
          replenish your own. One non-mindless creature within 30 feet must
          attempt a Will save against your spell DC.
        </p>
        <p>
          <b>Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Failure</b> The creature is stupefied 1 for 1 minute, and you
          regain 1 Focus Point, up to your normal maximum. You can’t use Brain
          Drain again until after the next time you make your daily
          preparations.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the creature is stupefied 2.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Dark Persona's presence",
    action: "",
    tags: ["psychic", "aura", "emotion", "enchantement", "fear", "mental"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You Unleash your Psyche.
          </span>
        </p>
        <p>
          When you Unleash your Psyche, all your rage and pain—the portion of
          your psyche dedicated to cruel retribution—come along with it.
        </p>
        <p>
          The force of your dark persona’s negativity batters constantly against
          all creatures in a 30-foot emanation when you Unleash your Psyche and
          for as long as your Psyche is Unleashed. A creature must attempt a
          Will save against your spell DC the first time it enters the
          emanation, or if it’s in the emanation when you take this action; it
          doesn’t need to attempt a save again, even if it leaves the emanation
          and returns. A creature frightened by your Dark Persona’s Presence
          can’t decrease its frightened value below 1 while within the
          emanation.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The target is frightened 1.
        </p>
        <p>
          <b>Failure</b> The target is frightened 2.
        </p>
        <p>
          <b>Critical Failure</b> The target is frightened 3.
        </p>
        <p>
          While your Psyche is Unleashed, your dark persona cares only for
          destruction. You can Cast a Spell only if it can directly damage an
          enemy or object or can impose a detrimental condition or penalty on
          one.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Mental Static",
    action: "reaction",
    tags: ["psychic", "enchantement", "mental", "nonlethal", "occult"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You roll a critical success on a Will save against a
            mental effect from a creature.
          </span>
        </p>
        <p>
          Your thoughts sting back when a lesser mind tries to invade your own.
          You deal mental damage equal to your level to the triggering creature.
          If you so desire, you can also send the creature a single mental image
          to coincide with the damage, such as a watchful eye or the dread of
          floating in an infinite sea.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Remove Presence",
    action: "",
    tags: ["psychic", "amp", "illusion", "mental", "occult"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your spell reaches into the mind of a creature and removes you from
          it. The amped cantrip must be one that has one or more targets and
          must either require a spell attack roll or have a saving throw. Use
          this amp in place of the psi cantrip’s normal amp entry.
        </p>
        <p>
          <b>Amp</b> Choose one target of the spell or one creature in its area.
          If that enemy fails its save or the spell hits it, you become
          undetected by that creature, disappearing from its senses for 1 minute
          or until you use a hostile action. This is similar to being invisible,
          but effects like see invisibility don’t reveal you—you’re affecting
          the target’s mind, not its vision. True seeing can still see through
          this illusion if the counteract check succeeds.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Thoughtsense",
    action: "",
    tags: ["psychic", "divination", "mental", "occult"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You can detect the flickers of mental activity let off by all thinking
          creatures. You gain thoughtsense as a vague sense that has a range of
          30 feet—like all vague senses, it’s only about as precise as an
          average human’s sense of smell, meaning you generally can predict only
          if a creature is present. Your thoughtsense detects only thinking
          creatures, so a creature that is unthinking or otherwise immune to
          mental effects (such as many constructs and oozes) can’t be perceived
          using your thoughtsense, regardless of how precise it is.
        </p>
        <p>
          While your Psyche is Unleashed, your thoughtsense upgrades to an
          imprecise sense, letting you use it to Seek out creatures.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Whispering steps",
    action: "",
    tags: ["psychic", "amp", "enchantement", "mental", "occult"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your spell leaves a lingering connection between you and a
          creature—one through which you can nudge the creature’s mind this way
          or that. The amped cantrip must take 2 or more actions to cast, target
          one or more creatures, and either require a spell attack roll or have
          a saving throw. Use this amp in place of the psi cantrip’s normal amp
          entry.
        </p>
        <p>
          <b>Amp</b> Choose one enemy who is a target of the spell. If that
          enemy fails its save or the spell hits it, you whisper in the
          creature’s mind, forcing it to Step in a direction of your choosing;
          as this is forced movement, you can’t force the creature to Step into
          hazardous terrain, off a ledge, or the like. After it Steps, the
          creature becomes temporarily immune to this amp for 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Dream guise",
    action: "one_action",
    tags: ["psychic", "illusion", "occult", "psyche"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> wandering reverie subconscious mind.
          </span>
        </p>
        <p>
          You Stride into a willing ally’s space, at which point both of your
          appearances shift into a shared third appearance, usually one that
          looks like a mix of the two of you. Then, either you or your ally
          Steps. You each maintain the merged appearance. Creatures who are
          observing this know what happened, but still must Seek or otherwise
          engage with the illusion to attempt to disbelieve it and determine
          which of you is which. Otherwise, they can’t tell the difference and
          have an equal chance to target each of you (DC 11 flat check). This
          illusion ends as soon as either you or the ally you’re merged with
          acts.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Emotional Surge",
    action: "one_action",
    tags: ["psychic", "concentrate", "emotion", "psyche"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> emotional acceptance subconscious mind.
          </span>
        </p>
        <p>
          Your heart soars, increasing your power for a moment. You gain a +2
          status bonus to attack rolls and skill checks until the start of your
          next turn.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Impose Order",
    action: "one_action",
    tags: ["psychic", "fortune", "psyche"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> precise discipline subconscious mind.
          </span>
        </p>
        <p>
          You bring discipline to your mind and magic, ensuring that you don’t
          under-perform. Until the end of your turn, instead of rolling dice for
          damage, count each damage die as average damage rounded up (3 for d4,
          4 for d6, 5 for d8, 6 for d10, and 7 for d12).
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Scour the library",
    action: "one_action",
    tags: ["psychic", "psyche"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> gathered lore subconscious mind.
          </span>
        </p>
        <p>
          Seeing an enemy’s attack, you quickly consult multiple scraps of lore
          in your mind, synthesizing them into the perfect plan. Make a check to
          Recall Knowledge (using an appropriate skill) about one creature
          within 60 feet. On a success, in addition to the normal benefits, you
          gain a +1 circumstance bonus to your next attack roll against that
          creature and to your AC against the creature’s next attack. On a
          critical success, the bonuses are +2.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Signature spell expansion",
    action: "",
    tags: ["psychic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your direct mental grasp of your power lets you cast more spells with
          greater freedom. You gain two additional signature spells, each of
          which must have a minimum level of 3rd or lower.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Foreseen failure",
    action: "",
    tags: ["psychic", "divination", "fortune", "occult"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Frequency</b> once per day.
          <br />
          <span className="frequency">
            <b>Trigger</b> A spell you cast has no effect because you critically
            failed all your spell attack rolls or because all targets critically
            succeeded at their saving throws.
          </span>
        </p>
        <p>
          You see your spell fail to take hold to disastrous end, then snap back
          to reality—it was all a precognition, and you know to try a different
          spell. Your spell is expended, but you can Cast a Spell that requires
          the same number of actions as the triggering spell or fewer to cast.
          The second spell must be a different spell than the first.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "No!!!",
    action: "reaction",
    tags: ["psychic"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> A non-minion ally within 60 feet is reduced to 0 Hit
            Points.
          </span>
        </p>
        <p>
          The shock of seeing your ally near death breaks whatever limits exist
          in your mind, sending your power spilling forth. If your psyche is
          currently unleashed, you can immediately use a psyche action that
          takes 1 action or less to use. If your psyche is not currently
          unleashed, you Unleash your Psyche, which remains unleashed until the
          end of your next turn. You can ignore Unleash Psyche’s requirement of
          needing to have Cast a Spell on your previous turn, but you still
          can’t Unleash your Psyche if you’re stupefied or for 2 rounds after
          your psyche subsides.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Psi catastrophe",
    action: "two_action",
    tags: [
      "psychic",
      "concentrate",
      "evocation",
      "mindshift",
      "occult",
      "psyche",
    ],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You stop holding your power back, unleashing it all in a catastrophic
          blast. All creatures in a 20-foot emanation take 1d6 bludgeoning
          damage per level with a basic Reflex save. Your psyche subsides as
          your power is expended.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Concious spell specialization",
    action: "",
    tags: ["psychic"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          You become more adept with the spells that are always in your mind.
          You gain an additional spell slot of 1st, 2nd, 3rd, and 4th levels.
          You can use these spell slots to cast only a spell granted by your
          conscious mind.
        </p>
        <p>
          At 18th level, you also gain an additional 5th-level spell slot, with
          the same restrictions.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Deep roots",
    action: "",
    tags: ["psychic"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your mind-control spells send burrowing mental roots that tear at your
          target’s mind when they’re removed or run their course. When you Cast
          a Spell that imposes the controlled condition or otherwise forces the
          target to take certain actions (such as command), you can choose one
          target that critically failed its save. When that target finishes
          fulfilling any commands issued by your spell, or when the spell is
          dispelled or counteracted, the target takes 1d6 mental damage per
          level of the spell.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Shatter Space",
    action: "",
    tags: ["psychic", "amp"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          The sheer power of your magic fractures reality. Use this amp in place
          of a psi cantrip’s normal amp entry. The cantrip must be one that
          takes 2 or more actions to cast.
        </p>
        <p>
          <b>Amp</b> You or one target of the spell are surrounded by a spiral
          of torn space. This is an aura, and you choose the radius of the
          emanation, up to 20 feet. A creature that starts its turn in the aura
          or enters the aura during its turn takes 1d6 slashing damage for every
          level of the amped psi cantrip, with a basic Reflex save against your
          spell DC. If the creature critically fails, the torn space throws it
          off balance and it falls prone. The aura lasts until the beginning of
          your next turn. You can choose whether the aura affects the creature
          emitting it.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Constant levitation",
    action: "",
    tags: ["psychic"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your power has unbound you from the earth below. You’re affected by a
          constant fly spell, and when your Psyche is Unleashed, you gain a
          +10-foot status bonus to your fly Speed.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Target of psychic ire",
    action: "",
    tags: ["psychic", "amp", "evocation", "occult"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          Your magic saturates your surroundings with hateful psychic energy.
          Use this amp in place of a psi cantrip’s normal amp entry. The cantrip
          must be one that takes 2 or more actions to cast and targets a
          creature.
        </p>
        <p>
          <b>Amp</b> Choose one target of the spell. Psychic phenomena turn
          themselves on the target—typically, objects fling themselves at the
          creature. At the beginning of each of the target’s turns, it takes 1d4
          bludgeoning damage for each spell level of the psi cantrip this amp
          was added to, with a basic Reflex save. The target remains marked by
          psychic ire for 3 rounds. The effect persists even if you fall
          unconscious or leave the area.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Wandering thoughts",
    action: "",
    tags: ["psychic", "concentrate", "occult", "psyche", "teleportation"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> You used your most recent action to Cast a
            Spell.
          </span>
        </p>
        <p>
          When your Psyche is Unleashed, each burst of magic you cast also folds
          space around you, and you travel through one of those folds. You
          teleport 15 feet to a square you can see.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "All in your head",
    action: "reaction",
    tags: ["psychic", "psyche"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You’re about to attempt a Fortitude save or a Reflex
            save.
          </span>
        </p>
        <p>
          Flames scouring at your body, venom coursing through your veins—you
          refuse to believe they exist, and nothing can affect you if you don’t
          believe in it. You attempt a Will save against the triggering effect,
          instead of a Reflex or Fortitude save. You don’t gain the benefits of
          fortress of will or walls of will on this save.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Cranial detonation",
    action: "reaction",
    tags: ["psychic", "death", "mindshift", "psyche"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Trigger</b> You successfully reduce one or more non-mindless
            enemies to 0 Hit Points with a spell.
          </span>
        </p>
        <p>
          As your overwhelming psyche fells a creature, you use its flickering
          consciousness to detonate psychic energy from the creature’s head.
          Each enemy you reduced to 0 Hit Points dies and its head explodes.
          Each exploding head generates a shockwave in a 15-foot emanation
          around that enemy. Each creature in any of the emanations takes 10d6
          bludgeoning damage with a basic Reflex save. If this damage reduces an
          enemy to 0 Hit Points, its head also explodes, potentially damaging
          more creatures and potentially causing more detonations. A given
          creature can take damage only once from a single use of Cranial
          Detonation.
        </p>
      </>
    ),
  },
];
