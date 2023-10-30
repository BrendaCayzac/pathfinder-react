import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const monkFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Ki rush",
    action: "one_action",
    tags: ["uncommon", "monk", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <b>Cast</b> verbal.
          <br />
          <span className="frequency">
            <b>Range</b> half your Speed.
          </span>
        </p>
        <p>
          Accelerated by your ki, you move with such speed you become a blur.
          Move two times: two Strides, two Steps, or one Stride and one Step (in
          either order). You gain the concealed condition during this movement
          and until the start of your next turn.
        </p>
      </>
    ),
  },
];
