import React from "react";
import Feat from "../components/Feat";
import { AncestryFeat } from "./FeatsButtons";

export const vanaraFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Canopy sight",
    action: "",
    tags: ["vanara"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You can see equally well even in dense jungles where only a small amount
        of light shines through. You gain low-light vision.
      </span>
    ),
  },
  {
    id: 2,
    name: "Climbing tail",
    action: "",
    tags: ["vanara"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your tail makes it much easier for you to climb. You gain a +2
        circumstance bonus to Athletics checks to Climb, you gain the Combat
        Climber skill feat, and you reduce the number of free hands required to
        Climb or Trip by one.
        <Feat
          id={0}
          name="Combat
        Climber"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              Your techniques allow you to fight as you climb. You’re not
              flat-footed while Climbing and can Climb with a hand occupied. You
              must still use another hand and both legs to Climb.
            </span>
          }
        />
      </span>
    ),
  },
  {
    id: 3,
    name: "Sudden mindfulness",
    action: "reaction",
    tags: ["vanara"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You roll a success on a saving throw against an effect
          that would make you fascinated or dazzled.
        </span>
        <br />
        Your mind retains full awareness despite the best attempts of others,
        and your focus throws others off-balance. You get a critical success on
        the triggering saving throw, and if the triggering effect was caused by
        a creature, that creature is flat-footed to you until the end of your
        next turn.
      </span>
    ),
  },
  {
    id: 4,
    name: "Vanara lore",
    action: "",
    tags: ["vanara"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You attained the cultural training of a ba-sadhak, a seeker of treasures
        and rare delights. You become trained in Survival and Thievery. If you
        would automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You’re also trained in the Vanara Lore skill.
      </span>
    ),
  },
  {
    id: 5,
    name: "Vanara weapon familiarity",
    action: "",
    tags: ["vanara"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You favor weapons steeped in vanaran tradition. You gain access to, and
        are trained with, the bo staff, chakram, katar, panabas, and urumi. In
        addition, you gain access to all uncommon vanara weapons. For the
        purpose of determining your proficiency, martial vanara weapons are
        simple weapons, and advanced vanara weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 6,
    name: "Whitecape",
    action: "",
    tags: ["vanara"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re shorter and wider than many vanaras of your heritage, and the
        hair on your shoulders and your head is particularly thick and
        luxurious, like a majestic cape. This hair grows back supernaturally
        quickly if shorn. You gain the Steady Balance skill feat, even if you
        aren’t trained in Acrobatics, and you can Step into difficult terrain
        caused by uneven ground.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of or into this feat.
      </span>
    ),
  },
  {
    id: 7,
    name: "Darting monkey",
    action: "",
    tags: ["vanara"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You have a heightened awareness in combat, and your darting strikes
        prevent your foes from distracting you or breaking your focus. When you
        hit a creature of your level or lower while that creature is flanking
        you, flanking doesn’t make you flat-footed to that creature. This
        benefit lasts until the start of your next turn or until the creature
        moves, whichever comes first. The creature can still help its other
        allies flank.
      </span>
    ),
  },
  {
    id: 8,
    name: "Jungle runner",
    action: "",
    tags: ["vanara"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You run through the jungle as easily as you would through an open field.
        You ignore difficult terrain from underbrush within forests and jungles.
        You can always use the Take Cover action when you’re within forest or
        jungle terrain to gain cover, even if you aren’t adjacent to an obstacle
        you can Take Cover behind.
      </span>
    ),
  },
  {
    id: 9,
    name: "Ragdya's revelry",
    action: "reaction",
    tags: ["vanara"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> An adjacent creature you can see fails an attack roll
          against you.
        </span>
        <br />
        You dart away from your foe’s attack with a casual laugh, using the
        opening to cause mischief. You attempt to Steal an item from the
        triggering creature, ignoring the usual restriction that the creature
        can’t be in combat.
      </span>
    ),
  },
  {
    id: 10,
    name: "Skillful climber",
    action: "",
    tags: ["vanara"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You can scamper up or down surfaces as nimbly as a monkey. You gain a
        climb Speed of 10 feet. If you have the Climber’s Tail ancestry feat,
        your total climb Speed increases to your land Speed when climbing trees.
      </span>
    ),
  },
  {
    id: 11,
    name: "Tail snatch",
    action: "one_action",
    tags: ["vanara"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You can whip your tail around to lash items from the unwary’s grip. You
        attempt to Disarm a creature, ignoring the requirement that you must
        have at least one hand free. As normal, your tail can’t hold the items
        it disarms.
      </span>
    ),
  },
  {
    id: 12,
    name: "Vanara weapon trickery",
    action: "",
    tags: ["vanara"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Vanara Weapon Familiarity.
        </span>
        <br />
        You’ve learned how to trick your foes using vanara weapons. Whenever you
        critically hit using a bo staff, chakram, katar, panabas, urumi, or
        vanara weapon, you apply the weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 13,
    name: "Dangle",
    action: "one_action",
    tags: ["move", "vanara"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Climbing Tail.
        </span>
        <br />
        You can hang by your tail from any suitable anchor point, such as a tree
        branch, balcony, or rocky outcropping (subject to the GM’s discretion),
        typically while climbing. While hanging, you have free use of all your
        other limbs, so you can perform tasks that require both hands, such as
        firing a bow or swinging a bo staff. You can Release your tail to drop
        down, and you cease hanging if you take an action with the move trait.
      </span>
    ),
  },
  {
    id: 14,
    name: "Legendary size",
    action: "",
    tags: ["vanara"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        The vanaras of old were tricksters able to step across wide rivers or
        slip into impossibly small spaces. You can cast enlarge and shrink once
        per day each as 2nd-level divine innate spells. You can target only
        yourself and other vanaras with these spells.
      </span>
    ),
  },
  {
    id: 15,
    name: "Ragdya's dance",
    action: "reaction",
    tags: ["vanara"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Frequency:</b> once per hour.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> An adjacent observed creature succeeds at an attack
          roll against you.
        </span>
        <br />
        Even when faced with deadly danger, you fight with the rapturous
        laughter of Ragdya in your heart and can play impossible tricks. After
        resolving the successful attack, the triggering creature must attempt a
        Will save against the higher of your class DC or your spell DC. On a
        failure, you and the triggering creature switch places. You and the
        triggering creature must each be able to fit in the new space, and your
        positions must be unoccupied.
      </span>
    ),
  },
  {
    id: 16,
    name: "Rakshasa ravaged",
    action: "",
    tags: ["vanara"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Occultism.
        </span>
        <br />
        You and your family know well the ravages of rakshasa predations, and
        you know how to best defend yourself against their growing corruption in
        the world. You gain a +1 circumstance bonus to saving throws against
        occult spells.
      </span>
    ),
  },
  {
    id: 17,
    name: "Monkey spirits",
    action: "",
    tags: ["vanara"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Vanaras generally consider the spirits of departed monkeys to be less
        informative or interesting than their own ancestors traveling the cycles
        of existence, yet these monkey spirits can prove useful when the
        situation is dire. You can cast mad monkeys once per day as a 5th-level
        primal innate spell. You become an expert in primal spell DCs and primal
        spell attack rolls. If you choose flagrant burglary for this casting of
        mad monkeys, you can have the monkeys use your Thievery modifier instead
        of your spell DC – 10.
      </span>
    ),
  },
  {
    id: 18,
    name: "Unbound freedom",
    action: "",
    tags: ["vanara"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Your future is no other person’s to control, and the cycles of your fate
        sometimes step in to protect you when that control would be taken from
        you. Whenever you would gain the controlled condition, you can attempt a
        DC 17 flat check. On a success, you don’t gain the condition.
      </span>
    ),
  },
  {
    id: 19,
    name: "Vanara battle clarity",
    action: "",
    tags: ["vanara"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Your focus in combat is practically unshakable. While you can act, you
        aren’t flat-footed to hidden, undetected, or flanking creatures of your
        level or lower, or to creatures of your level or lower using surprise
        attack.
      </span>
    ),
  },
  {
    id: 20,
    name: "Vanara weapon expertise",
    action: "",
    tags: ["vanara"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Vanara Weapon Familiarity.
        </span>
        <br />
        Thanks to numerous joyous practice exercises, you’ve become an expert in
        vanara weapons. Whenever you gain a class feature that grants you expert
        or greater proficiency in a given weapon or weapons, you also gain that
        proficiency in the bo staff, chakram, katar, panabas, urumi, and all
        vanara weapons in which you’re trained.
      </span>
    ),
  },
  {
    id: 21,
    name: "Unfettering prankster",
    action: "",
    tags: ["vanara"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You can uplift all around you with your pranks, causing you and your
        allies to receive divine guidance in all your movements to effortlessly
        avoid environmental hindrances. Once per day, you can cast unfettered
        pack as a divine innate spell. When you do so, you cast the spell by
        performing a divinely inspired prank.
      </span>
    ),
  },
];
