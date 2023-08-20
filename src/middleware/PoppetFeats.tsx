import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const poppetFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Harmless doll",
    action: "",
    tags: ["poppet"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You look like nothing more than an ordinary toy, doll, or statuette, and
        you can fool others with your innocuous appearance. You gain the trained
        proficiency rank in Deception (or another skill if you’re already
        trained in Deception), and you can Impersonate an inanimate toy or a
        mindless poppet. You can Hide without any cover or concealment from
        creatures that don’t realize you’re alive, so long as you’re in a
        location where a toy of your shape wouldn’t be out of place, like a
        carnival booth, city street, or toy shop (at the GM’s discretion). If
        you succeed, onlookers still see you, but they mistake you for an
        inanimate toy. After being fooled once, they realize you’re alive, and
        you can’t Hide from them in that way again.
      </span>
    ),
  },
  {
    id: 2,
    name: "Helpful poppet",
    action: "",
    tags: ["poppet"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re particularly skilled at helping others with a task. You gain a +2
        circumstance bonus on checks to Aid, and you don’t give your ally a –1
        circumstance penalty to their check if you critically fail your attempt
        to Aid.
      </span>
    ),
  },
  {
    id: 3,
    name: "Quadrupled",
    action: "",
    tags: ["poppet"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You were crafted in a form with four legs rather than two. Your Speed is
        30 feet.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain into or out of this feat.
      </span>
    ),
  },
  {
    id: 4,
    name: "Shiny button eyes",
    action: "",
    tags: ["poppet"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve polished your eyes to reflect the smallest details in dimmest
        light. You gain the Canny Acumen skill feat as a bonus feat, but you
        must choose Perception. Additionally, you gain a +1 circumstance bonus
        to Perception checks against visual illusions.
      </span>
    ),
  },
  {
    id: 5,
    name: "Wash out",
    action: "",
    tags: ["poppet"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Toxins seep out of your artificial body quickly. Each time you succeed
        at a Fortitude save against an ongoing poison, you reduce its stage by
        2, or by 1 against a virulent poison. Each critical success you achieve
        against an ongoing poison reduces its stage by 3, or by 2 against a
        virulent poison.
      </span>
    ),
  },
  {
    id: 6,
    name: "Cunning tinker",
    action: "",
    tags: ["poppet"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Time spent tending to your own form has unlocked your ability to fix
        other things. You can cast 1st-level mending once per day as an arcane
        innate spell. At 7th level, the spell is heightened to 2nd level, and
        every 3 levels thereafter, the spell is heightened an additional spell
        level. Even though you’re alive and not an object, and you can’t
        normally recover Hit Points from effects that repair objects (like the
        Repair skill), you can target yourself with this innate spell and use it
        to recover Hit Points.
      </span>
    ),
  },
  {
    id: 7,
    name: "Histrionic injury",
    action: "reaction",
    tags: ["mental", "poppet"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per hour.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature you can see damages you with a melee
          Strike.
        </span>
        <br />
        You respond with a startled look, dramatic pratfall, or theatrical
        arm-flailing that stymies your attacker. The attacker must succeed at a
        Will saving throw against your class DC or spell DC, whichever is
        higher, or become stupefied 1 for 1 round (stupefied 2 on a critical
        failure).
      </span>
    ),
  },
  {
    id: 8,
    name: "Nothing but fluff",
    action: "",
    tags: ["poppet"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> stuffed poppet heritage.
        </span>
        <br />
        Your fluffy interior lacks specific organs and struts, with few weak
        spots to injure. You gain resistance to precision damage equal to half
        your level.
      </span>
    ),
  },
  {
    id: 9,
    name: "Sealed poppet",
    action: "",
    tags: ["poppet"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve reinforced your interior parts with sealant or other
        flame-retardant materials, protecting you from fire. You no longer have
        the weakness to fire from the flammable ability.
        <br />
        <br />
        <b>Special:</b> You can’t take this feat if you’re a stuffed poppet.
      </span>
    ),
  },
  {
    id: 10,
    name: "Spark of independence",
    action: "two_action",
    tags: ["poppet"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You touch a creature with the minion trait and share the heightened
        sense of autonomy you’ve discovered. The minion is quickened for 1 round
        and is then temporarily immune for 10 minutes. It can use this extra
        action to Step, Stride, or Strike.
      </span>
    ),
  },
  {
    id: 11,
    name: "Swimming poppet",
    action: "",
    tags: ["poppet"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your fins, flippers, or other accessories assist with steering you
        through water. You gain a swim Speed of 15 feet.
      </span>
    ),
  },
  {
    id: 12,
    name: "Scaling poppet",
    action: "",
    tags: ["poppet"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your construction integrates ropes, hooks, or other tools to help you
        move across steep surfaces. You gain a climb Speed of 15 feet.
      </span>
    ),
  },
  {
    id: 13,
    name: "Wheedle and jig",
    action: "",
    tags: ["poppet"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You make capering motions and silly sounds to captivate onlookers. You
        can cast enthrall as a 3rd-level arcane innate spell once per day.
      </span>
    ),
  },
  {
    id: 14,
    name: "Impossible gossip",
    action: "",
    tags: ["uncommon", "poppet"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You can speak to inanimate objects, finding a magical spark within them
        similar to the one that animated you. You can cast stone tell once per
        day as an arcane innate spell, but instead of speaking with natural or
        worked stone, you speak with toys, statues, or other three-dimensional
        inanimate objects crafted to mimic a creature’s appearance, regardless
        of their composition. The GM has discretion over which objects you can
        speak with and what they know, although objects generally have a good
        opinion of those who have cared for them and a poor opinion of those who
        have neglected or ignored them.
      </span>
    ),
  },
  {
    id: 15,
    name: "Reanimating spark",
    action: "",
    tags: ["poppet"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You have the dying condition and are about to attempt
          a recovery check. Strike.
        </span>
        <br />
        The magic that animates you strains to keep you alive. You’re restored
        to 1 Hit Point, lose the dying and unconscious conditions, and can act
        normally on this turn. You gain or increase the wounded condition as
        normal when losing the dying condition in this way.
      </span>
    ),
  },
  {
    id: 16,
    name: "Squirm free",
    action: "reaction",
    tags: ["poppet"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> A creature grabs, immobilizes, or restrains you.
        </span>
        <br />
        You’re used to slipping out of a bigger creature’s grasp or escaping a
        child’s overly enthusiastic hug. You attempt to Escape.
      </span>
    ),
  },
  {
    id: 17,
    name: "Restitch",
    action: "",
    tags: ["poppet"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You’ve learned how to sew even the most terrible tears and wounds
        together. You can cast regenerate as a 7th-level arcane innate spell
        once per day.
      </span>
    ),
  },
  {
    id: 18,
    name: "Soaring poppet",
    action: "",
    tags: ["poppet"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        Your construction has flaps of cloth or wicker that can keep you aloft.
        You gain a fly Speed of 15 feet.
      </span>
    ),
  },
];
