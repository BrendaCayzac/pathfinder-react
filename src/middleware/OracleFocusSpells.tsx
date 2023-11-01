import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const oracleFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Ancestral touch",
    action: "one_action",
    tags: [
      "uncommon",
      "oracle",
      "cursebound",
      "emotion",
      "enchantement",
      "fear",
      "mental",
    ],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Mystery</b> ancestors.
          <br />
          <b>Cast</b> somatic.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 living creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Will.
          </span>
        </p>
        <p>
          You touch a creature and force them to see and feel the ancestors
          surrounding you. The target takes 1d4 mental damage, with results
          depending on a Will save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes half damage.
        </p>
        <p>
          <b>Failure</b> The target is frightened 1 and takes full damage.
        </p>
        <p>
          <b>Critical Failure</b> The target is frightened 2 and takes double
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The mental damage increases by 1d4.
        </p>
      </>
    ),
  },
];
