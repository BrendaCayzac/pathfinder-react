import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const lizardfolkFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Bone magic",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your connection to your iruxi ancestors manifests as a simple primal
        spell that you cast using a fragment of an ancestor’s bones. Choose one
        cantrip from the primal spell list. You can cast this cantrip as a
        primal innate spell at will, and it’s heightened to a spell level equal
        to half your level rounded up.
      </span>
    ),
  },
  {
    id: 2,
    name: "Consult the stars",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You find wisdom in the movements of the heavens. Once per day, you can
        spend 10 minutes to draw upon your readings of a recent night’s sky to
        gain the trained proficiency rank in one skill of your choice; the
        chosen skill’s key attribute must be Charisma, Intelligence, or Wisdom.
        This proficiency lasts until your next daily preparation. Since this
        proficiency is temporary, you can’t use it as a prerequisite for a skill
        increase or a permanent character option like a feat.
      </span>
    ),
  },
  {
    id: 3,
    name: "Lighting tongue",
    action: "one_action",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your tongue darts out faster than the eye can see to retrieve loose
        objects. You Interact to pick up a single unattended object of light
        Bulk or less within 10 feet of you. If you don’t have enough hands free
        to hold the object, it falls to the ground in your space.
      </span>
    ),
  },
  {
    id: 4,
    name: "Lizardfolk lore",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You listened carefully to the tales passed down among your community.
        You gain the trained proficiency rank in Nature and Survival. If you
        would automatically become trained in one of those skills (from your
        background or class, for example), you instead become trained in a skill
        of your choice. You also become trained in Iruxi Lore.
      </span>
    ),
  },
  {
    id: 5,
    name: "Marsh runner",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> You have a swim Speed.
        </span>
        <br />
        You are adept at moving through marshy terrain. When you use the Step
        action, you can ignore difficult terrain caused by flooding, swamps, or
        quicksand. In addition, when you use the Acrobatics skill to Balance on
        narrow surfaces or uneven marshy ground, you aren’t flat-footed, and if
        you roll a success on the Acrobatics check, you get a critical success
        instead.
      </span>
    ),
  },
  {
    id: 6,
    name: "Parthenogenic hatchling",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You were hatched from an unfertilized egg during hard times for your
        people, and you are a biological copy of your mother. You gain a +1
        circumstance bonus to saving throws against diseases. Each of your
        successful saving throws against a disease reduces its stage by 2, or by
        1 for a virulent disease. Each critical success against an ongoing
        disease reduces its stage by 3, or by 2 for a virulent disease. You take
        damage only every 2 hours from thirst and every 2 days from starvation,
        rather than every hour and every day.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level.
      </span>
    ),
  },
  {
    id: 7,
    name: "Razor claws",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your have honed your claws to be deadly. Your claw attack deals 1d6
        slashing damage instead of 1d4 and gains the versatile (piercing) trait.
      </span>
    ),
  },
  {
    id: 8,
    name: "Reptile rider",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        To you, crocodilians, giant lizards, and dinosaurs are loyal steeds, not
        monsters. You gain the Ride feat, even if you don’t meet the
        prerequisites. You gain a +1 circumstance bonus to Nature checks to
        Handle an Animal as long as the animal is a reptile, dinosaur, or even a
        non-sapient dragon.
      </span>
    ),
  },
  {
    id: 9,
    name: "Reptile speaker",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You hear the sounds of reptiles as language. You can ask questions of,
        receive answers from, and use the Diplomacy skill with animals that are
        reptiles (the GM determines which animals count as reptiles).
      </span>
    ),
  },
  {
    id: 10,
    name: "Sharp fangs",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your teeth are formidable weapons. You gain a fangs unarmed attack that
        deals 1d8 piercing damage.
      </span>
    ),
  },
  {
    id: 11,
    name: "Tail whip",
    action: "",
    tags: ["lizardfolk"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        By birth or through training, your tail is strong enough to make for a
        powerful melee weapon. You gain a tail unarmed attack that deals 1d6
        bludgeoning damage and has the sweep trait.
      </span>
    ),
  },
  {
    id: 12,
    name: "Envenom fangs",
    action: "one_action",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Prerequisites:</b> Sharp Fangs.
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> a number of times per day equal to your level.
        </span>
        <br />
        You envenom your fangs. If the next fangs Strike you make before the end
        of your next turn hits and deals damage, the Strike deals an additional
        1d6 poison damage. On a critical failure, the poison is wasted as
        normal.
      </span>
    ),
  },
  {
    id: 13,
    name: "Flexible tail",
    action: "",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You can perform simple Interact actions with your tail, such as opening
        an unlocked door. Your tail can’t perform actions that require fingers
        or significant manual dexterity, including any action that would require
        a check to accomplish, and you can’t use it to hold items.
      </span>
    ),
  },
  {
    id: 14,
    name: "Gecko's grip",
    action: "",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> cliffscale lizardfolk.
        </span>
        <br />
        You stick to walls with a preternatural grip. You gain a climb Speed of
        15 feet.
      </span>
    ),
  },
  {
    id: 15,
    name: "Guided by stars",
    action: "",
    tags: ["fortune", "lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You are about to attempt a skill check or saving
          throw.
        </span>
        <br />
        The stars grant you insights that guide your actions. You roll twice and
        take the better result. If it’s night and you can see the stars, you
        gain a +1 circumstance bonus to the triggering roll.
      </span>
    ),
  },
  {
    id: 16,
    name: "Iruxi glide",
    action: "one_action",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> cloudleaper lizardfolk heritage.
        </span>
        <br />
        You glide slowly toward the ground, 5 feet down and up to 25 feet
        forward through the air. As long as you spend at least 1 action gliding
        each round and haven’t yet reached the ground, you remain in the air at
        the end of your turn.
      </span>
    ),
  },
  {
    id: 17,
    name: "Iruxi unarmed cunning",
    action: "",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You make the most of your iruxi unarmed attacks. Whenever you score a
        critical hit with a claw or an unarmed attack you gained from a
        lizardfolk ancestry feat, you apply the unarmed attack’s critical
        specialization effect.
      </span>
    ),
  },
  {
    id: 18,
    name: "Shred tail",
    action: "reaction",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Prerequisites:</b> Tail Whip.
        <br />
        <br />
        <b>Trigger:</b> You become grabbed.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You have a fully grown tail.
        </span>
        <br />
        You can shed your tail to escape. You cease being grabbed, then Stride
        without triggering any reactions from the creature that grabbed you. It
        takes 1 week for your tail to fully grow back. Until it does, you can’t
        use your tail unarmed attack, and you take a –2 circumstance penalty on
        checks to Balance.
      </span>
    ),
  },
  {
    id: 19,
    name: "Swift swimmer",
    action: "",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> wetlander lizardfolk.
        </span>
        <br />
        You swim faster than most iruxi. Your swim Speed increases to 25 feet.
      </span>
    ),
  },
  {
    id: 20,
    name: "Tongue disarm",
    action: "one_action",
    tags: ["lizardfolk"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> trained in Athletics, Lightning Tongue.
        </span>
        <br />
        You lash out with your tongue to disarm your foe. You attempt to Disarm
        a creature within 10 feet, ignoring the requirement that you must have
        at least one hand free.
      </span>
    ),
  },
  {
    id: 21,
    name: "Bone caller",
    action: "",
    tags: ["lizardfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Using a mixture of dinosaur bones and the bones of your ancestors to
        focus your magic, you animate lizards and dinosaurs to carry messages or
        serve as mounts. You can cast animal messenger and phantom steed as
        primal innate spells once per day each. The animal messenger is always a
        Tiny dinosaur or lizard, and your innate spell transforms it from bones
        to flesh, even if there are no dinosaurs or lizards nearby. The phantom
        steed looks like a dinosaur rather than a horse but functions
        identically.
      </span>
    ),
  },
  {
    id: 22,
    name: "Dangle",
    action: "",
    tags: ["lizardfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b>Flexible Tail.
        </span>
        <br />
        You can hang by your tail from any suitable anchor point, such as a tree
        branch, balcony, or rocky outcropping (subject to the GM’s discretion),
        typically while climbing. While hanging, you have free use of all your
        other limbs, so you can perform tasks that require both hands, such as
        firing a bow or swinging a greatsword.
      </span>
    ),
  },
  {
    id: 23,
    name: "Read the stars",
    action: "",
    tags: ["lizardfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> trained in Astrology Lore or Occultism.
        </span>
        <br />
        You’re incredibly skilled in iruxi astrology, and you can gain useful
        (if cryptic) hints from the stars’ alignment. Once per night, if you can
        clearly see the stars, you can spend 1 hour reading the heavens to see
        how they relate to a particular goal, event, or activity that will occur
        within 1 week. The GM rolls a secret check, either a DC 28 Astrology
        Lore check or a DC 32 Occultism check. On a success, you learn a cryptic
        clue or piece of advice that could help with the chosen event, and on a
        critical failure, you learn a misleading cryptic clue or piece of
        advice.
      </span>
    ),
  },
  {
    id: 24,
    name: "Terrain advantage",
    action: "",
    tags: ["lizardfolk"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You can take advantage of the terrain to bypass foes’ defenses.
        Non-lizardfolk creatures in difficult terrain are flat-footed to you. If
        you have a swim Speed, non-lizardfolk creatures that are in water and
        lack a swim Speed are also flat-footed to you.
      </span>
    ),
  },
  {
    id: 25,
    name: "Bone investiture",
    action: "",
    tags: ["lizardfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You encase yourself in spiritual dinosaur bones to become a Huge
        dinosaur. You can cast dinosaur form on yourself as a 5th-level primal
        innate spell once per day.
      </span>
    ),
  },
  {
    id: 26,
    name: "Iruxi power strike",
    action: "",
    tags: ["lizardfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Your iruxi unarmed attacks channel the spiritual energy of your
        ancestors. Any unarmed attacks you acquire from iruxi heritages or
        ancestry feats gain the effects of a ghost touch property rune.
      </span>
    ),
  },
  {
    id: 27,
    name: "Iruxi unarmed expertise",
    action: "",
    tags: ["lizardfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Iruxi Unarmed Cunning.
        </span>
        <br />
        Your unarmed attacks blend tradition and training. Whenever you gain a
        class feature that grants you expert or greater proficiency in certain
        weapons, you also gain that proficiency in the claw and unarmed attacks
        you gained from lizardfolk ancestry feats.
      </span>
    ),
  },
  {
    id: 28,
    name: "Primar rampage",
    action: "",
    tags: ["lizardfolk"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You tap into the unstoppable, primeval strength of your ancient kin. You
        gain freedom of movement and stoneskin as 4th-level primal innate spells
        that you can cast once per day. As a 3-action activity, you can Cast a
        Spell twice to cast both of these innate spells, as long as they are
        both still available for the day
      </span>
    ),
  },
  {
    id: 29,
    name: "Bone rider",
    action: "",
    tags: ["lizardfolk"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        Using your ancestors’ bones, you manifest their spirits around you in a
        fossilized form, terrifying your foes. You can cast mask of terror on
        yourself as a primal innate spell once per day. When you do, you appear
        as a skeletal lizardfolk ancestor, twisted in a way that inspires the
        deepest fears of those who observe you.
      </span>
    ),
  },
  {
    id: 30,
    name: "Scion transformation",
    action: "",
    tags: ["lizardfolk", "primal", "transmutation"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You go into hibernation for 24 hours and perform a ritual dedicated to
        your ancestors, undergoing a one-time metamorphosis. You permanently
        gain the effects of enlarge, and your maximum Hit Points increase by
        your level. The ritual transforms most of your gear to the appropriate
        size for your new body (though powerful items like artifacts or items
        strongly tied to their original size may not transform, at the GM’s
        discretion).
      </span>
    ),
  },
];
