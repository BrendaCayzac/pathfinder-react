import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const ChampionFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Lay on Hands",
    action: "one_action",
    tags: ["uncommon", "champion", "healing", "necromancy", "positive"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <span className="frequency">
            <b>Targets</b> 1 willing living creature or 1 undead creature
          </span>
          <br />
          Your hands become infused with positive energy, healing a living
          creature or damaging an undead creature with a touch. If you use lay
          on hands on a willing living target, you restore 6 Hit Points; if the
          target is one of your allies, they also gain a +2 status bonus to AC
          for 1 round. Against an undead target, you deal 1d6 damage and it must
          attempt a basic Fortitude save; if it fails, it also takes a –2 status
          penalty to AC for 1 round.
        </p>
        <p>
          <b>Heightened (+1)</b> The amount of healing increases by 6, and the
          damage to an undead target increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 2,
    level: 3,
    name: "Litany against wrath",
    action: "one_action",
    tags: ["uncommon", "champion", "evocation", "good", "litany"],
    type: "Focus 3",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 evil creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your litany rails against the sin of wrath, punishing the target for
          attacking good creatures. The target must attempt a Will save. A
          particularly wrathful creature, such as a wrath demon, uses the
          outcome one degree of success worse than the result of its saving
          throw. The target then becomes temporarily immune to all of your
          litanies for 1 minute.
          <br />
          <br />
          <b>Critical Success</b> The target is unaffected.
          <br />
          <br />
          <b>Success</b> The first time the target uses an action that deals
          damage to at least one good creature, the target takes 3d6 good
          damage.
          <br />
          <br />
          <b>Failure</b> Each time the target uses an action that deals damage
          to at least one good creature, the target takes 3d6 good damage.
          <br />
          <br />
          <b>Critical Failure</b> The target is enfeebled 2. Each time it uses
          an action that deals damage to at least one good creature, the target
          takes 3d6 good damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The damage increases by 1d6.
        </p>
      </>
    ),
  },
  {
    id: 3,
    level: 5,
    name: "Litany against sloth",
    action: "one_action",
    tags: ["uncommon", "champion", "evocation", "good", "litany"],
    type: "Focus 5",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 evil creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your litany rails against the sin of sloth, interfering with the
          target’s ability to react. The target must attempt a Will save. A
          particularly slothful creature, such as a sloth demon, uses the
          outcome one degree of success worse than the result of its saving
          throw. The target becomes temporarily immune to all of your litanies
          for 1 minute.
          <br />
          <br />
          <b>Critical Success</b> The target is unaffected.
          <br />
          <br />
          <b>Success</b> The target is unaffected.
          <br />
          <br />
          <b>Failure</b> The target can’t use reactions and is slowed 1.
          <br />
          <br />
          <b>Critical Failure</b> The target can’t use reactions and is slowed
          2.
        </p>
      </>
    ),
  },
  {
    id: 4,
    level: 5,
    name: "Litany against self-interest",
    action: "one_action",
    tags: ["uncommon", "champion", "enchantement", "evil", "litany", "mental"],
    type: "Focus 5",
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
          <b>Targets</b> 1 creature.
          <br />
          <b>Saving Throw</b> Will.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          You give a speech that fills your target with a drive to improve
          themself to the exclusion of assisting others. A creature that wants
          to gain the benefit of this spell and doesn’t care about its
          limitations can voluntarily fail the save. The target then becomes
          temporarily immune to all your litanies for 1 minute.
          <br />
          <br />
          <b>Success</b> The target is unaffected.
          <br />
          <br />
          <b>Failure</b> The target gains a +2 status bonus to attack rolls,
          Perception checks, saving throws, and skill checks. The target can’t
          Aid other creatures, consider any creature an ally, or use spells or
          abilities that directly benefit another creature (as determined by the
          GM), even if they also benefit the target. Other creatures allied with
          the spell’s target can still consider the target an ally and affect it
          accordingly.
        </p>
        <p>
          <b>Heightened (8th)</b> The status bonus increases to +3.
        </p>
      </>
    ),
  },
  {
    id: 5,
    level: 6,
    name: "Champion's sacrifice",
    action: "one_action",
    tags: ["uncommon", "champion", "evil", "evocation", "lithany"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 good creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your litany calls into question the morals your foe claims to hold
          dear. The target gains weakness 7 to evil, then becomes temporarily
          immune to all your litanies for 1 minute.
        </p>
        <p>
          <b>Heightened (+1)</b> The weakness increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 6,
    level: 7,
    name: "Lithany of depravity",
    action: "one_action",
    tags: ["uncommon", "champion", "evil", "evocation", "lithany"],
    type: "Focus 7",
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
          <b>Targets</b> 1 good creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your litany calls into question the morals your foe claims to hold
          dear. The target gains weakness 7 to evil, then becomes temporarily
          immune to all your litanies for 1 minute.
        </p>
        <p>
          <b>Heightened (+1)</b> The weakness increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 7,
    level: 7,
    name: "Lithany of righteousness",
    action: "one_action",
    tags: ["uncommon", "champion", "evocation", "good", "lithany"],
    type: "Focus 7",
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
          <b>Targets</b> 1 evil creature.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 round.
          </span>
          <br />
          Your litany denounces an evildoer, rendering it susceptible to the
          powers of good. The target gains weakness 7 to good. The target then
          becomes temporarily immune to all of your litanies for 1 minute.
        </p>
        <p>
          <b>Heightened (+1)</b> The weakness increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 8,
    level: 10,
    name: "Hero's defiance",
    action: "one_action",
    tags: ["uncommon", "champion", "healing", "necromancy", "positive"],
    type: "Focus 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Trigger</b> An attack would bring you to 0 Hit Points.
          </span>
          <br />
          You shout in defiance, filling you with a sudden burst of healing.
          Just before applying the attack’s damage, you recover 10d4+20 Hit
          Points. If this is enough to prevent the attack from bringing you to 0
          Hit Points, you don’t become unconscious or dying. Either way,
          cheating death is difficult, and you can’t use hero’s defiance again
          until you Refocus or the next time you prepare. Hero’s defiance cannot
          be used against effects with the death trait or that would leave no
          remains, such as disintegrate.
        </p>
      </>
    ),
  },
];
