import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const rangerFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Gravity weapon",
    action: "one_action",
    tags: ["uncommon", "ranger", "evocation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Cast</b> somatic.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
        </p>
        <p>
          You build up gravitational force and funnel it into your blows,
          leading to more powerful attacks with blade and bow alike. On your
          first weapon Strike each round, you gain a status bonus to damage
          equal to twice the number of weapon damage dice.
        </p>
      </>
    ),
  },
];
