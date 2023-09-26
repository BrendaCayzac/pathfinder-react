import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const GunslingerFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Blast lock",
    action: "one_action",
    tags: ["gunslinger", "attack"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm.
          </span>
          <br />
          Sometimes taking the shortest distance between two points involves
          removing an obstacle or two. You shoot your firearm at a lock within
          10 feet. Make an attack roll against the DC required to Pick the Lock.
        </p>
        <p>
          <b>Critical Success</b> You open the lock, or you achieve two
          successes toward opening a complex lock.
        </p>
        <p>
          <b>Success</b> You open the lock, or you achieve one success toward
          opening a complex lock.
        </p>
        <p>
          <b>Failure</b> You fail to open the lock, and your shot makes it
          harder to open. Future attempts to Pick the Lock or Blast the Lock
          take a –2 circumstance penalty.
        </p>
        <p>
          <b>Critical Failure</b> You fail to open the lock, and your shot makes
          it much harder to open. Future attempts to Pick the Lock or Blast the
          Lock take a –4 circumstance penalty.
        </p>
      </>
    ),
  },
];
