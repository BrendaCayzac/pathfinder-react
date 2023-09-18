import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const BardFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    name: "Counter Performance",
    action: "reaction",
    tags: [
      "uncommon",
      "bard",
      "composition",
      "enchantement",
      "fortune",
      "mental",
    ],
    type: "Focus 1",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        <b>Cast</b> somatic or verbal.
        <br />
        <b>Trigger</b> You or an ally within 60 feet rolls a saving throw
        against an auditory or visual effect.
        <br />
        <span className="frequency">
          <b>Area</b> 60-foot emanation.
        </span>
        <br />
        Your studies make you informed on every subject. You are trained in
        Bardic Lore, a special Lore skill that can be used only to Recall
        Knowledge, but on any topic. If you have legendary proficiency in
        Occultism, you gain expert proficiency in Bardic Lore, but you can’t
        increase your proficiency rank in Bardic Lore by any other means.
      </p>
    ),
  },
  {
    id: 2,
    name: "Hymn of healing",
    action: "two_action",
    tags: [
      "uncommon",
      "bard",
      "composition",
      "healing",
      "necromancy",
      "positive",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> you or 1 ally.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 4 rounds.
          </span>
          <br />
          Your divine singing mends wounds and provides a temporary respite from
          harm. The target gains fast healing 2. When you Cast the Spell and the
          first time each round you Sustain the Spell, the target gains 2
          temporary Hit Points, which last for 1 round.
        </p>
        <p>
          <b>Heightened (+1)</b> The fast healing and temporary Hit Points each
          increase by 2.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Inspire competence",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantment",
      "mental",
    ],
    type: "Cantrip 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <b>Targets</b> 1 ally.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your encouragement inspires your ally to succeed at a task. This
          counts as having taken sufficient preparatory actions to Aid your ally
          on a skill check of your choice, regardless of the circumstances. When
          you later use the Aid reaction, you can roll Performance instead of
          the normal skill check, and if you roll a failure, you get a success
          instead. If you are legendary in Performance, you automatically
          critically succeed.
        </p>
        <p>
          The GM might rule that you can’t use this ability if the act of
          encouraging your ally would interfere with the skill check (such as a
          check to Sneak quietly or maintain a disguise).
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Inspire courage",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantment",
      "mental",
    ],
    type: "Cantrip 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 60 feet emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You inspire yourself and your allies with words or tunes of
          encouragement. You and all allies in the area gain a +1 status bonus
          to attack rolls, damage rolls, and saves against fear effects.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Lingering Composition",
    action: "one_action",
    tags: ["uncommon", "bard", "enchantment", "metamagic"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
          <br />
          You add a flourish to your composition to extend its benefits. If your
          next action is to cast a cantrip composition with a duration of 1
          round, attempt a Performance check. The DC is usually a
          standard-difficulty DC of a level equal to the highest-level target of
          your composition, but the GM can assign a different DC based on the
          circumstances. The effect depends on the result of your check.
        </p>
        <p>
          <b>Critical Success</b> The composition lasts 4 rounds.
        </p>
        <p>
          <b>Success</b> The composition lasts 3 rounds.
        </p>
        <p>
          <b>Failure</b> The composition lasts 1 round, but you don’t spend the
          Focus Point for casting this spell.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Loremaster's etude",
    action: "one_action",
    tags: ["uncommon", "bard", "enchantment", "metamagic"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Trigger</b> You or an ally within range attempts a skill check to
          Recall Knowledge.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> you or the triggering ally.
          </span>
          <br />
          You call upon your muse’s deep mysteries, granting the target a
          greater ability to think and recall information. Roll the triggering
          Recall Knowledge skill check twice and use the better result.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Silver's Refrain",
    action: "one_action",
    tags: ["rare", "abjuration", "bard", "cantrip", "composition"],
    type: "cantrip 1",
    description: (
      <>
        <p>
          <i>Tomorrow Must Burn</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Area</b> 60-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          The “Song of Silver” was an enchanted song used by the Silver Ravens
          to battle diabolic forces. You pull from select verses to temporarily
          replicate some of the legendary song’s benefits, albeit on a much
          smaller scale.
        </p>
        <p>
          Weapon and unarmed attacks by allies in the area are treated as
          silver. In addition, this spell automatically attempts to counteract
          any dimension door cast by a devil within the area or cast by a devil
          attempting to enter the area using dimension door. If a devil attempts
          to enter the area using dimension door and the spell is counteracted,
          the devil remains where it started.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Song of Strength",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantement",
      "mental",
    ],
    type: "cantrip 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Area</b> 60-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You bolster your allies’ physical strength with a hearty exhortation.
          You and your allies gain a +1 status bonus to Athletics checks and to
          their DCs against Athletics skill actions such as Disarm, Shove, and
          Trip.
        </p>
        <p>
          <b>Special</b>
          If you have the <b>inspire heroics</b> composition spell, you can use
          that composition to improve the bonus granted by{" "}
          <b>song of strength</b> in the same way as <b>inspire courage</b> or{" "}
          <b>inspire defense</b>.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Inspire Defence",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantement",
      "mental",
    ],
    type: "cantrip 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Area</b> 60-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You inspire yourself and your allies to protect themselves more
          effectively. You and all allies in the area gain a +1 status bonus to
          AC and saving throws, as well as resistance equal to half the spell’s
          level to physical damage.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Triple time",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantement",
      "mental",
    ],
    type: "cantrip 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Area</b> 60-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You dance at a lively tempo, speeding your allies’ movement. You and
          all allies in the area gain a +10-foot status bonus to all Speeds for
          1 round.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Dirge of doom",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantement",
      "fear",
      "mental",
    ],
    type: "cantrip 3",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Area</b> 30-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Foes within the area are frightened 1. They can’t reduce their
          frightened value below 1 while they remain in the area.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Song of marching",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "enchantement",
      "mental",
    ],
    type: "cantrip 3",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Area</b> 60-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 hour.
          </span>
          <br />
          You maintain a brisk performance that keeps allies on the move. You
          and your allies in the area can Hustle for the spell’s duration, even
          though you are also Sustaining the Spell. You and your allies then
          become temporarily immune for 1 day.
        </p>
        <p>
          <b>Heightened (6th)</b> You can Sustain the Spell for up to 2 hours.
        </p>
        <p>
          <b>Heightened (9th)</b> You can Sustain the Spell for up to 4 hours.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Inspire Heroics",
    action: "one_action",
    tags: ["uncommon", "bard", "enchantement", "metamagic"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
          <br />
          You call upon your muse to greatly increase the benefits you provide
          with your <b>inspire courage</b> or
          <b>inspire defense</b> composition. If your next action is to cast{" "}
          <b>inspire courage</b> or
          <b>inspire defense</b>, attempt a Performance check. The DC is usually
          a very hard DC of a level equal to that of the highest-level target of
          your composition, but the GM can assign a different DC based on the
          circumstances. The effect of your <b>inspire courage</b> or
          <b>inspire defense</b>
          composition depends on the result of your check.
        </p>
        <p>
          <b>Critical Success</b> The status bonus from your{" "}
          <b>inspire courage</b> or
          <b>inspire defense</b> increases to +3.
        </p>
        <p>
          <b>Success</b> The status bonus from <b>inspire courage</b> or
          <b>inspire defense</b> increases to +2.
        </p>
        <p>
          <b>Failure</b> Your <b>inspire courage</b> or
          <b>inspire defense</b> provides only its normal bonus of +1, but you
          don’t spend the Focus Point for casting this spell.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "House of Imaginary walls",
    action: "one_action",
    tags: ["uncommon", "bard", "cantrip", "composition", "illusion", "visual"],
    type: "Cantrip 5",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You mime an invisible 10-foot-by-10-foot wall adjacent to you and
          within your reach. The wall is solid to those creatures that don’t
          disbelieve it, even incorporeal creatures. You and your allies can
          voluntarily believe the wall exists to continue to treat it as solid,
          for instance to climb onto it. A creature that disbelieves the
          illusion is temporarily immune to your <b>
            house of imaginary walls
          </b>{" "}
          for 1 minute. The wall doesn’t block creatures that didn’t see your
          visual performance, nor does it block objects. The wall has AC 10,
          Hardness equal to double the spell’s level, and HP equal to quadruple
          the spell’s level.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Ode to Ouroboros",
    action: "reaction",
    tags: ["uncommon", "bard", "composition", "necromancy"],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Advanced players guide</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Trigger</b> A creature’s dying condition would reach the value at
          which they would die.
          <br />
          <b>Range</b> 60 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> the triggering creature.
          </span>
          <br />
          Your ode temporarily staves off death. The target’s dying condition
          remains 1 below the value at which it dies. This doesn’t help prevent
          death from effects that kill the target without increasing its dying
          condition, such as disintegrate and death effects.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Symphony of the unfettered heart",
    action: "two_action",
    tags: ["uncommon", "abjuration", "bard", "composition"],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Advanced players guide</i>
          <br />
          <br />
          <b>Cast</b> verbal, somatic.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> you or 1 ally.
          </span>
          <br />
          Your symphony lifts listeners from their worldly concerns. Attempt a
          Performance check to counteract one of the following conditions
          affecting the target: grabbed, immobilized, paralyzed, restrained,
          slowed, or stunned. If you fail, you can’t target that effect on the
          target for 1 day. Use the condition’s source to determine the
          counteract DC (for example, the Escape DC for grabbed).
        </p>
        <p>
          <b>Heightened (9th)</b> You can target up to four creatures.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Allegro",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "cantrip",
      "composition",
      "emotion",
      "enchantement",
      "mental",
    ],
    type: "Cantrip 7",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 ally.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You perform rapidly, speeding up your ally. The ally becomes quickened
          and can use the additional action to Strike, Stride, or Step.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Soothing Ballad",
    action: "two_action",
    tags: [
      "uncommon",
      "bard",
      "composition",
      "emotion",
      "enchantement",
      "healing",
      "mental",
    ],
    type: "Focus 7",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> you and up to 9 allies.
          </span>
          <br />
          You draw upon your muse to soothe your allies. Choose one of the
          following three effects:
        </p>
        <ul>
          <li>The spell attempts to counteract fear effects on the targets.</li>
          <li>
            The spell attempts to counteract effects imposing paralysis on the
            targets.
          </li>
          <li>The spell restores 7d8 Hit Points to the targets.</li>
        </ul>
        <p>
          <b>Heightened (+1)</b> When used to heal, soothing ballad restores 1d8
          more Hit Points.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Soothing Ballad",
    action: "one_action",
    tags: [
      "uncommon",
      "bard",
      "composition",
      "death",
      "emotion",
      "enchantement",
      "mental",
    ],
    type: "Focus 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 creature.
          </span>
          <br />
          You perform music so perfect that the target may die of joy or sorrow.
          Once targeted, the creature becomes temporarily immune for 1 minute.
          The effect of the spell depends on the target’s level and current Hit
          Points.
        </p>
        <p>
          <b>16th or Lower</b> The target dies instantly.
        </p>
        <p>
          <b>17th</b> If the target has 50 Hit Points or fewer, it dies
          instantly; otherwise, it drops to 0 Hit Points and becomes dying 1.
        </p>
        <p>
          <b>18th or Higher</b> The target takes 50 damage. If this brings it to
          0 Hit Points, it dies instantly.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Pied Piping",
    action: "two_action",
    tags: [
      "uncommon",
      "bard",
      "composition",
      "enchantement",
      "incapacitation",
      "mental",
      "sonic",
    ],
    type: "Focus 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Area</b> 5-foot emanation.
          <br />
          <b>Saving Throw </b>Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Your performance enraptures those who hear it, compelling them to
          follow you about in admiration. Each creature within the emanation
          must attempt a Will save when you Cast the Spell or the first time
          they enter the area, after which they become temporarily immune for 1
          day. Once per turn, you can spend a single action, which has the
          concentrate trait, to increase the emanation’s radius by 5 feet. You
          can Dismiss the spell.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature is fascinated with you.
        </p>
        <p>
          <b>Failure</b> The creature uses all its actions to move toward you
          and compliment your performance. This effect ends if a hostile action
          is used against the affected creature.
        </p>

        <p>
          <b>Critical Failure</b> The target gains the minion trait and is
          controlled by you. This effect ends if a hostile action is used
          against the affected creature, or if you direct the creature to use
          any action that causes it harm.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Song of the fallen",
    action: "two_action",
    tags: ["uncommon", "bard", "composition", "necromancy"],
    type: "Focus 10",
    description: (
      <>
        <p>
          <i>Broken Promises</i>
          <br />
          <br />
          <b>Cast</b> focus, verbal.
          <br />
          <b>Range</b> 30 feet;.
          <br />
          <b>Targets</b> up to 4 dead creatures or up to 4 undead creatures.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          You chant a dirge or an elegy that either rouses the dead to action or
          reminds undead that they should lay to rest.
        </p>
        <p>
          If you target dead creatures, the bodies animate and can continue
          acting as if they were alive. A creature animated in this way has 60
          temporary Hit Points. The animated creatures are slowed 1 but can
          otherwise act normally. Creatures animated with this spell die again
          once the spell ends.
        </p>
        <p>
          If you target undead creatures, each undead must attempt a basic Will
          save.
        </p>
        <p>
          <b>Critical Success</b> The undead takes 5d6 positive damage.
        </p>
        <p>
          <b>Success</b> The undead takes 10d6 positive damage and is slowed 1
          for 1 round.
        </p>
        <p>
          <b>Failure</b> The undead takes 100 positive damage and is slowed 1
          for 1 minute.
        </p>

        <p>
          <b>Critical Failure</b> The undead is destroyed.
        </p>
      </>
    ),
  },
];
