import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const vishkanyaFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Alabaster eyes",
    action: "",
    tags: ["vishkanya"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        In place of the normal vishkanyan golden eyes, you were born with
        especially perceptive snow-white eyes. You gain darkvision.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of this feat or into this feat.
      </span>
    ),
  },
  {
    id: 2,
    name: "Lesser enhance venom",
    action: "",
    tags: ["vishkanya"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Envenom.
        </span>
        <br />
        Your venom grows deadlier and more plentiful. You upgrade the vishkanyan
        venom you can apply with Envenom to lesser vishkanyan venom. Envenom’s
        frequency becomes once per hour.
        <br />
        <br />
        <b>Lesser Vishkanyan Venom </b>(level 1) <b>Saving Throw</b> Fortitude;{" "}
        <b>Maximum Duration</b> 6 rounds; Stage 1 1d6 poison damage (1 round);
        Stage 2 1d6 poison damage (1 round); Stage 3 2d6 poison damage (1 round)
      </span>
    ),
  },
  {
    id: 3,
    name: "Social camouflage",
    action: "",
    tags: ["vishkanya"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have the uncanny ability to quickly blend into the lifestyle of
        whatever settlement in which you find yourself. After residing in a
        particular settlement for at least 1 day, you gain a +1 circumstance
        bonus to checks to Impersonate to pass yourself off as a resident of
        that settlement. Additionally, you can use Deception in place of
        Diplomacy to Gather Information while in that settlement. The GM might
        decide you need more time in particularly large settlements to gain
        these benefits, or might decide you gain the benefits only while in a
        specific district or part of the settlement.
      </span>
    ),
  },
  {
    id: 4,
    name: "SVishkanya lore",
    action: "",
    tags: ["vishkanya"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You deeply understand vishkanyan strengths and cultural traditions. You
        gain the trained proficiency rank in Performance and Stealth. If you
        would automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You also become trained in Vishkanya Lore.
      </span>
    ),
  },
  {
    id: 5,
    name: "Vishkanya weapon familiarity",
    action: "",
    tags: ["vishkanya"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You favor weapons historically used in subtle work and in ceremony. You
        gain access to and are trained with the blowgun, fighting fan, kris,
        kukri, and shuriken. In addition, you gain access to all uncommon
        vishkanyan weapons. For the purpose of determining your proficiency,
        martial vishkanyan weapons are simple weapons and advanced vishkanyan
        weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 6,
    name: "Debilitating venom",
    action: "",
    tags: ["vishkanya"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your venom is particularly potent, affecting targets in different ways.
        When you gain this feat, select one of the following debilitations. When
        you use Envenom, you can choose to apply a debilitation to your venom to
        adjust its effects. The changes to each stage of the venom are listed.
        You can apply only one debilitation to your venom.
        <ul>
          <li>
            <b>Hampering</b> (level 5) Stage 1 –5-foot status penalty to Speed;
            Stage 2 –5-foot status penalty to Speed; Stage 3 –10-foot status
            penalty to Speed
          </li>
          <li>
            <b>Stumbling</b> (level 5) Stage 1 no adjustment; Stage 2
            flat-footed; Stage 3 flat-footed and a –5-foot penalty to Speed
          </li>
        </ul>
        <b>Special:</b> You can select this feat a second time to gain the other
        debilitation.
      </span>
    ),
  },
  {
    id: 7,
    name: "Restoring blood",
    action: "",
    tags: ["vishkanya"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Envenom.
        </span>
        <br />
        Your body can process an alternative to your venom that heals wounds.
        You can use your Envenom action to produce a blood restorative instead
        of vishkanyan venom. You can make a blood restorative at most once per
        10 minutes, even if your Envenom action can be used more frequently. You
        or an adjacent creature can Interact to consume the restorative to
        regain 3d6 Hit Points. This is a positive healing effect. A restorative
        spoils at the start of your next turn.
        <br />
        <br />
        When you reach 15th level, the restorative restores 5d6 Hit Points
        instead.
      </span>
    ),
  },
  {
    id: 8,
    name: "Vishkanya weapon arts",
    action: "",
    tags: ["vishkanya"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Vishkanya Weapon Familiarity.
        </span>
        <br />
        You are graceful and efficient in the use of vishkanyan weapons.
        Whenever you critically hit using a blowgun, fighting fan, kris, kukri,
        shuriken, or vishkanya weapon, you apply the weapon’s critical
        specialization effect.
      </span>
    ),
  },
  {
    id: 9,
    name: "Alluring performance",
    action: "two_action",
    tags: ["incapacitation", "mental", "vishkanya", "visual"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Requirements:</b> trained in Performance
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        You command the attention of those around you with an elegant display.
        Attempt a Performance check and compare it to the Will DC of each
        creature in a 15-foot emanation.
        <br />
        <br />
        <b>Critical Success:</b> The target is fascinated with you for as long
        as you perform (unless it breaks from the fascination, as normal for the
        condition) and is dazzled for 1 round or as long as it’s fascinated,
        whichever is longer.
        <br />
        <br />
        <b>Success:</b> The target is fascinated for 1 round and is dazzled for
        1 round.
        <br />
        <br />
        <b>Failure:</b> The target is dazzled for 1 round.
        <br />
        <br />
        <b>Critical Failure:</b> The target is unaffected.
      </span>
    ),
  },
  {
    id: 10,
    name: "Moderate enhance venom",
    action: "",
    tags: ["vishkanya"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Lesser Enhance Venom.
        </span>
        <br />
        You upgrade the vishkanyan venom you can apply with Envenom to moderate
        vishkanyan venom. Envenom’s frequency becomes once per 10 minutes.
        <br />
        <br />
        <b>Moderate Vishkanyan Venom</b> (level 9) Frequency once per 10
        minutes; <b>Saving Throw</b> Fortitude; <b>Maximum Duration</b> 6
        rounds; <b>Stage 1</b> 3d6 poison damage (1 round); <b>Stage 2</b> 4d6
        poison damage (1 round); <b>Stage 3</b> 5d6 poison damage (1 round)
      </span>
    ),
  },
  {
    id: 11,
    name: "Swift application",
    action: "one_action",
    tags: ["vishkanya"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Envenom.
        </span>
        <br />
        You expertly combine the motions of attacking and coating your weapon
        with venom. You Envenom a weapon or piece of ammunition, and then Strike
        with that weapon. This counts against your uses of Envenom normally and
        can’t be used if your venom is exhausted.
      </span>
    ),
  },
  {
    id: 12,
    name: "Viper trike",
    action: "two_action",
    tags: ["vishkanya"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per minute.
        </span>
        <br />
        You move and attack with a swiftness that most can’t follow. You Stride
        and then Strike. Your movement doesn’t trigger reactions based on
        movement.
      </span>
    ),
  },
  {
    id: 13,
    name: "Stronger debilitating venom",
    action: "two_action",
    tags: ["vishkanya"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Debilitating Venom, Moderate Enhance Venom.
        </span>
        <br />
        Add one of the following to the debilitations from which you can choose
        when you Envenom. These debilitations reduce the damage of all stages as
        noted.
        <ul>
          <li>
            <b>Bungling</b> (level 13) Reduce damage by 1 die; <b>Stage 1</b> no
            effect; <b>Stage 2</b> clumsy 1; <b>Stage 3</b> clumsy 2
          </li>
          <li>
            <b>Devitalizing</b> (level 13) Reduce damage by 3 dice;
            <b>Stage 1</b> no effect; <b>Stage 2</b> drained 1; <b>Stage 3</b>{" "}
            drained 2
          </li>
          <li>
            <b>Nauseating</b> Reduce damage by 2 dice;
            <b>Stage 1</b> no effect; <b>Stage 2</b> sickened 1; <b>Stage 3</b>{" "}
            sickened 2
          </li>
          <li>
            <b>Weakening</b> (level 13) Reduce damage by 1 die;
            <b>Stage 1</b> enfeebled 1; <b>Stage 2</b> enfeebled 1;{" "}
            <b>Stage 3</b> enfeebled 2
          </li>
        </ul>
        <b>Special:</b> You can select this feat multiple times, choosing a
        different debilitation each time.
      </span>
    ),
  },
  {
    id: 14,
    name: "Venom purge",
    action: "one_action",
    tags: ["vishkanya"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Prerequisites:</b> trained in Medicine.
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        You produce a specialized venom that burns out other toxins and
        impurities in your body. For each disease or poison currently affecting
        you, attempt a Medicine check to counteract that disease or poison. As
        normal, your counteract level is equal to half your level rounded up.
      </span>
    ),
  },
  {
    id: 15,
    name: "Vishkanya weapon expertise",
    action: "",
    tags: ["vishkanya"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Vishkanya Weapon Familiarity.
        </span>
        <br />
        Extensive training has granted you an elegant control in the use of
        vishkanyan weapons. Whenever you gain a class feature that grants you
        expert or greater proficiency in a given weapon or weapons, you also
        gain that proficiency in the blowgun, fighting fan, kris, kukri,
        shuriken, and all vishkanyan weapons in which you are trained.
      </span>
    ),
  },
  {
    id: 16,
    name: "Greater enhance venom",
    action: "",
    tags: ["vishkanya"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Moderate Enhance Venom.
        </span>
        <br />
        You upgrade the vishkanyan venom you can apply with Envenom to greater
        vishkanyan venom. Envenom’s frequency becomes once per minute.
        <br />
        <br />
        <b>Greater Vishkanyan Venom </b>(level 17) <b>Frequency</b> once per
        minute; <b>Saving Throw</b> Fortitude; <b>Maximum Duration</b> 6 rounds;{" "}
        <b>Stage 1</b> 7d6 poison damage (1 round); <b>Stage 2</b> 9d6 poison
        damage (1 round); <b>Stage 3</b> 11d6 poison damage (1 round)
      </span>
    ),
  },
  {
    id: 17,
    name: "Vicious venom",
    action: "",
    tags: ["vishkanya"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Envenom.
        </span>
        <br />
        The venom you produce is exceptionally potent and difficult to overcome.
        Your vishkanyan venom gains the virulent trait, requiring two
        consecutive saves to reduce the venom’s stage by 1. A critical success
        reduces your venom’s stage by only 1 instead of by 2.
      </span>
    ),
  },
];
