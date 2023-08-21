import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const shiskFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Eidetic ear",
    action: "",
    tags: ["Shisk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have an amazing memory for sound. You gain the Assurance
        (Performance) feat. With a successful DC 8 flat check, you can
        accurately recall a sound or a snippet of conversation you heard within
        the last week. You are memorizing by rote rather than content, and can’t
        use this to cram facts, so this doesn’t grant you any extra ability to
        Recall Knowledge.
      </span>
    ),
  },
  {
    id: 3,
    name: "Spelunker",
    action: "",
    tags: ["Shisk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Living underground, you have learned to find your way without landmarks
        or even solid ground. If you roll a success on an Survival check to
        Sense Direction or an Athletics check to Climb, you get a critical
        success instead. You’re not flat-footed when you attempt to Climb.
      </span>
    ),
  },
  {
    id: 4,
    name: "Spine stabber",
    action: "",
    tags: ["Shisk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        The quills on your arms are particularly sharp and sturdy. You gain a
        quills unarmed attack that deals 1d6 piercing damage. Your quills are in
        the knife weapon group and have the finesse and unarmed traits.
      </span>
    ),
  },
  {
    id: 5,
    name: "Bristle",
    action: "one_action",
    tags: ["Shisk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You curl into a posture that splays out your bone spines. You gain a +1
        circumstance to AC until the start of your next turn.
        <br />
        <br />
        <b>Special:</b> If you have the Barbed Quills reaction or a quills
        unarmed attack, each gains a +1 circumstance bonus to damage rolls until
        the start of your next turn.
      </span>
    ),
  },
  {
    id: 6,
    name: "Injured to the heat",
    action: "",
    tags: ["Shisk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You have a love for extreme heat. You gain resistance 4 to fire. You
        treat environmental heat effects as if they were one step less extreme
        (incredible heat becomes extreme, extreme heat becomes severe, and so
        on).
      </span>
    ),
  },
  {
    id: 7,
    name: "Renewing quills",
    action: "",
    tags: ["Shisk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> quillcoat shisk.
        </span>
        <br />
        Your spines grow back much faster than other shisks. You can use the
        Barbed Quills reaction once every 10 minutes.
      </span>
    ),
  },
  {
    id: 8,
    name: "Dig up secrets",
    action: "",
    tags: ["Shisk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You are an endless well of knowledge and can remember several vital
        pieces of information at once. You can cast hypercognition as an innate
        occult spell once per day.
      </span>
    ),
  },
  {
    id: 9,
    name: "Piercing quills",
    action: "",
    tags: ["Shisk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Spine Stabber.
        </span>
        <br />
        Your quills can dig particularly deep into the flesh of your opponents.
        Your quills unarmed attack deals 1d4 persistent bleed damage on a
        critical hit.
      </span>
    ),
  },
  {
    id: 10,
    name: "Quill spray",
    action: "two_action",
    tags: ["Shisk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> quillcoat shisk or quill unarmed attack.
        </span>
        <br />
        You can launch a mass of quills at opponents. You spray quills in a
        30-foot cone, dealing 5d8 piercing damage. Each creature in the area
        must attempt a basic saving throw against the higher of your class DC or
        spell DC. On a critical failure, a creature also takes 5 persistent
        bleed damage. At 11th level and every even level thereafter, the
        piercing damage increases by 1d8 and the persistent bleed damage
        increases by 1.
      </span>
    ),
  },
  {
    id: 11,
    name: "Delver",
    action: "",
    tags: ["Shisk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Subterranean life taught you to swim through the ground like water. You
        gain a burrow Speed of 10 feet through loose soil or dirt.
      </span>
    ),
  },
  {
    id: 12,
    name: "None shall know",
    action: "",
    tags: ["Shisk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Even magical means have a hard time prying information from you. You
        gain nondetection as an innate occult spell once per day, which can only
        be cast on yourself and is automatically heightened to half your level
        rounded up.
      </span>
    ),
  },
  {
    id: 13,
    name: "Secret eyes",
    action: "",
    tags: ["Shisk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You can call forth an invisible eye to let you peek on secrets. Once per
        day, you can cast prying eye as an innate occult spell.
      </span>
    ),
  },
  {
    id: 14,
    name: "Fountain of secrets",
    action: "",
    tags: ["Shisk"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per round.
        </span>
        <br />
        You constantly remember details about the world. You attempt a check to
        Recall Knowledge. If you succeed, you gain additional information or
        context. If you critically succeed, at the GM’s discretion you might
        gain even more additional information or context than normal.
      </span>
    ),
  },
];
