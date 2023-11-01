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
          You tap into the collected lore of the divine, accessing a variety of
          potentially useful information. Attempt a Religion check to understand
          the information you gain. The GM sets the DC (similar to the DC to
          Recall Knowledge), potentially adjusting the DC of the check for
          topics far removed from your mystery.
        </p>
        <p>
          <b>Critical Success</b> You comprehend the lore accurately or gain a
          useful clue from the divine about your situation.
        </p>
        <p>
          <b>Success</b> You learn two pieces of information about the topic,
          one true and one erroneous, but you don’t know which is which.
        </p>
        <p>
          <b>Failure</b> You recall incorrect information or gain an erroneous
          or misleading clue.
        </p>
        <p>
          <b>Critical Failure</b> You recall two pieces of incorrect information
          or gain two erroneous or misleading clues.
        </p>
      </>
    ),
  },
];
