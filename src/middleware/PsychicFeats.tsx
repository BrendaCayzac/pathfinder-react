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
];
