import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const nagajiFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Cold minded",
    action: "",
    tags: ["nagaji"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        The subtle strands of beguiling magic leave little impression on your
        mind. You gain a +1 circumstance bonus to saving throws against emotion
        effects, and whenever you roll a success on a saving throw against an
        emotion effect, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 2,
    name: "Nagaji lore",
    action: "",
    tags: ["nagaji"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re the vassal or apprentice of a learned naga, and you’ve studied
        the secrets of naga magic and concocting intricate poisons. You gain the
        trained proficiency rank in Crafting and Occultism. If you would
        automatically become trained in one of those skills (from your
        background or class, for example), you become trained in a skill of your
        choice. You also become trained in your choice of Nagaji Lore or Naga
        Lore.
      </span>
    ),
  },
  {
    id: 3,
    name: "Nagaji spell familiarity",
    action: "",
    tags: ["nagaji"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Either through study, exposure, or familial devotion, you have the magic
        of nagas bubbling in your blood. During your daily preparations, choose
        daze, detect magic, or mage hand. Until your next daily preparations,
        you can cast the chosen spell as an occult innate cantrip. A cantrip is
        heightened to a spell level equal to half your level rounded up.
      </span>
    ),
  },
  {
    id: 4,
    name: "Serpent's tongue",
    action: "",
    tags: ["nagaji"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You subconsciously flick your tongue through the air to taste the world
        around you. You gain imprecise scent with a range of 30 feet.
      </span>
    ),
  },
  {
    id: 5,
    name: "Water nagaji",
    action: "",
    tags: ["nagaji"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Much like a water naga, you’ve formed a connection to a sacred or
        pristine body of water, either as a home or a place to protect. You gain
        the Breath Control general feat as a bonus feat and a swim Speed of 10
        feet.
      </span>
    ),
  },
  {
    id: 6,
    name: "Hypnotic lure",
    action: "",
    tags: [
      "concentrate",
      "enchantement",
      "mental",
      "nagaji",
      "occult",
      "visual",
    ],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per hour.
        </span>
        <br />
        Your unblinking gaze is so intense it can befuddle the mind of others,
        drawing your victims toward you even against their better judgment. You
        stare at a creature within 30 feet. The target must attempt a Will save
        against the higher of your class DC or spell DC.
        <br />
        <br />
        <b>Success:</b> The target is unaffected.
        <br />
        <br />
        <b>Failure:</b> On its turn, the target must spend its first action to
        approach you. It can’t Delay or take reactions until it has done so.
        <br />
        <br />
        <b>Critical Failure:</b> The target must use all its actions on its next
        turn to approach you. It can’t Delay or take any reactions until it has
        reached a space that’s adjacent to you (or as close to you as possible
        if it reaches an impassable barrier).
      </span>
    ),
  },
  {
    id: 7,
    name: "Nagaji spell mysteries",
    action: "",
    tags: ["nagaji"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least one innate spell from a nagaji heritage
          or ancestry feat.
        </span>
        <br />
        You’ve learned more naga magic. During your daily preparations, choose
        charm, fleet step, or heal. You can cast the chosen spell as a 1st-level
        occult innate spell once that day.
      </span>
    ),
  },
  {
    id: 8,
    name: "Skin split",
    action: "two_action",
    tags: ["nagaji"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        You claw open the top layer of your scales and peel off the premature
        shed in order to remove harmful substances from your skin. You
        immediately end all persistent damage from effects that coat your skin
        (such as fire and most persistent acid damage). If you’re suffering from
        an effect other than persistent damage that depends on continuous
        contact with your skin, and if that effect allows a saving throw,
        immediately attempt a new saving throw against that effect.
      </span>
    ),
  },
  {
    id: 9,
    name: "Venom spit",
    action: "",
    tags: ["nagaji"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve learned the art of lobbing toxic spittle at vulnerable spots on
        your foes, especially the eyes. You gain a venomous spit ranged unarmed
        attack with a range increment of 10 feet that deals 1d4 poison damage.
        On a critical hit, the target takes persistent poison damage equal to
        the number of weapon damage dice. Your spit doesn’t have a weapon group,
        nor a critical specialization effect.
        <b>
          <br />
        </b>
        <b>Special:</b> If you have the hooded nagaji heritage, in addition to
        your venomous spit’s normal critical hit effect, the target is also
        dazzled until the start of your next turn.
      </span>
    ),
  },
  {
    id: 10,
    name: "Envenom strike",
    action: "one_action",
    tags: ["nagaji"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> you possess a Strike from a nagaji heritage or
        ancestry feat that deals poison damage
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per 10 minutes.
        </span>
        <br />
        You spit venom onto a weapon you’re holding or a weapon held by a
        willing creature within 30 feet; you can also use this ability to
        envenom your nagaji fangs unarmed attack. If the next Strike with the
        chosen weapon before the start of your next turn hits and deals damage,
        the Strike deals an additional 2d6 poison damage.
      </span>
    ),
  },
  {
    id: 11,
    name: "Guarded thoughts",
    action: "",
    tags: ["nagaji"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your mind, like a dark naga’s, foils attempts to read your thoughts. Any
        effect that specifically attempts to read your mind to glean information
        must succeed at a counteract check against the higher of your class DC
        or your spell DC to do so successfully; otherwise, it gains no
        information. The counteract level is equal to half your level rounded
        up.
      </span>
    ),
  },
  {
    id: 12,
    name: "Serpentcoil slam",
    action: "one_action",
    tags: ["nagaji"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per minute.
        </span>
        <br />
        Your people’s ancient and storied rivalry with garudas led you to
        develop special techniques against flying foes. Make a melee Strike
        against a flying creature up to one size larger than you; if you hit,
        you use your neck or coils to smash the creature into the ground. In
        addition to the normal effects of your Strike, the creature moves to the
        nearest unoccupied ground space adjacent to you and can’t Fly, levitate,
        or otherwise leave the ground for 1 round. On a critical hit, it can’t
        Fly, levitate, or otherwise leave the ground for 1 minute.
      </span>
    ),
  },
  {
    id: 13,
    name: "Serpentine swimmer",
    action: "",
    tags: ["nagaji"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Water Nagaji.
        </span>
        <br />
        You undulate your body in a series of sinuous serpentine motions as you
        swim, drastically improving the speed at which you move through the
        water. Your swim Speed increases from 10 feet to 25 feet.
      </span>
    ),
  },
  {
    id: 14,
    name: "Disruptive stare",
    action: "reaction",
    tags: ["mental", "nagaji", "visual"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> A creature within 30 feet attempts to Cast a Spell
          with the concentrate trait.
        </span>
        <br />
        Your frigid gaze can turn a foe’s blood to ice. The triggering creature
        must attempt a Will save against your class DC or spell DC, whichever is
        higher. It then becomes temporarily immune for 24 hours.
        <br />
        <br />
        <b>Failure:</b> The triggering spell takes a –2 status penalty to its
        spell attack rolls and DCs.
        <br />
        <br />
        <b>Critical Failure:</b> The triggering spell is disrupted.
      </span>
    ),
  },
  {
    id: 15,
    name: "Nagaji spell expertise",
    action: "",
    tags: ["nagaji"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Nagaji Spell Mysteries
        </span>
        <br />
        Your magical skill rivals that of accomplished naga spellcasters. During
        your daily preparations, choose blink, control water, or subconscious
        suggestion. You can Cast this Spell as a 5th-level occult innate spell
        once that day. You become an expert in occult spell DCs and occult spell
        attack rolls.
      </span>
    ),
  },
  {
    id: 16,
    name: "Pit of snakes",
    action: "three_action",
    tags: ["concentrate", "conjuration", "manipulate", "nagaji", "occult"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        Mundane serpents obey your summons. You call forth a writhing mass of
        snakes, raising your hands to cause the snakes to emerge from the ground
        in a 20-foot burst within 120 feet. The snakes appear on all squares of
        the ground in the area and remain for 1 minute. When you use Pit of
        Snakes, all creatures in the area must attempt a Fortitude save against
        the higher of your class DC or spell DC. Any creature that fails is
        grabbed by a snake and takes 3d6 bludgeoning damage. Whenever a creature
        ends its turn in the area, the snakes attempt to Grab that creature if
        they aren’t already grabbing it. Any creature already grabbed instead
        takes 2d6 bludgeoning damage.
        <br />
        <br />
        The snakes’ Escape DC is equal to the higher of your class DC or spell
        DC. A creature can attack a snake in an attempt to release its grip. The
        snake’s AC is equal to the higher of your class DC or spell DC, and it’s
        destroyed if it takes 12 or more damage. Even if a specific snake is
        destroyed, additional snakes continue to cavort in the area until the
        duration ends. You can Dismiss the effect.
      </span>
    ),
  },
  {
    id: 17,
    name: "Breath of calamity",
    action: "",
    tags: ["nagaji"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        Your roar shakes the earth and splits the heavens. Once per day, you can
        cast chain lightning as a 7th-level innate occult spell. Any creature
        that critically fails its save against the spell is blinded and deafened
        for 1 round.
      </span>
    ),
  },
  {
    id: 18,
    name: "Prismatic scales",
    action: "",
    tags: ["nagaji"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You can cause your scales to glow with scintillating, many-hued colors,
        protecting you from energy while dazzling foes. Once per day, you can
        cast prismatic armor as an occult innate spell, except the spell alters
        the coloration of your scales instead of causing you to be clad in
        armor. This difference is cosmetic, and the spell has all the same
        effects as normal.
      </span>
    ),
  },
];
