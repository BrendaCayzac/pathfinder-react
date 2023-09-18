import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const BardFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Bardinc lore",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <span className="frequency">
          <b>Prerequisites</b> enigma muse.
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
];
