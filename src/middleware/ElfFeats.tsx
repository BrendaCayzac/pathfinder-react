import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const elfFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Ancestral linguistics",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least 100 years old.
        </span>
        <br />
        Over your extensive lifespan, you’ve studied many languages. During your
        daily preparations, you can recede into old memories to become fluent in
        one common language or one other language you have access to. You know
        this language until you prepare again. Since this knowledge is
        temporary, you can’t use it as a prerequisite for a permanent character
        option.
      </span>
    ),
  },
  {
    id: 2,
    name: "Ancestral longevity",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least 100 years old.
        </span>
        <br />
        You have accumulated a vast array of lived knowledge over the years.
        During your daily preparations, you can reflect upon your life
        experiences to gain the trained proficiency rank in one skill of your
        choice. This proficiency lasts until you prepare again. Since this
        proficiency is temporary, you can’t use it as a prerequisite for a skill
        increase or a permanent character option like a feat.
      </span>
    ),
  },
  {
    id: 3,
    name: "Demonbane warrior",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against demons. If your attack would deal more than one weapon die of damage (as is common at higher levels than 1st), the bonus is equal to the number of weapon dice or unarmed attack dice. If your actions force a demon to take damage from its sin vulnerability, increase that damage by 2.",
  },
  {
    id: 4,
    name: "Elemental wrath",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You are so attuned to the land that you can call forth a bolt of energy from your surroundings. When you gain this feat, select acid, cold, electricity, or fire. You can call to the land to cast the acid splash cantrip as an innate primal spell at will, except the spell has only verbal components and deals the type of damage you chose instead of acid damage; the spell gains the trait appropriate to its damage instead of the acid trait. A cantrip is heightened to a spell level equal to half your level rounded up.",
  },
  {
    id: 5,
    name: "Elven aloofness",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "As much as you might care for them, you’ve come to terms with the ephemeral nature of non-elves, and it makes their threats feel less troublesome. If a non-elf rolls a failure on a check to Coerce you using Intimidation, it gets a critical failure instead (and thus can’t try to Coerce you again for 1 week). When a non-elf attempts to Demoralize you, you become temporarily immune for 1 day, instead of 10 minutes.",
  },
  {
    id: 6,
    name: "Elven lore",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve studied in traditional elven arts, learning about arcane magic and the world around you. You gain the trained proficiency rank in Arcana and Nature. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Elven Lore.",
  },
  {
    id: 7,
    name: "Elven verve",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "While all elves are immune to the paralyzing touch of ghouls, you can shake off flesh-numbing magic of all kinds. You gain a +1 circumstance bonus to saves against effects that would impose the immobilized, paralyzed, or slowed conditions. When you would be immobilized, paralyzed, or slowed for at least 2 rounds, reduce that duration by 1 round.",
  },
  {
    id: 8,
    name: "Elven weapin familiarity",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You favor bows and other elegant weapons. You are trained with longbows,
        composite longbows, longswords, rapiers, shortbows, and composite
        shortbows.
        <br />
        <br />
        In addition, you gain access to all uncommon elf weapons. For the
        purpose of determining your proficiency, martial elf weapons are simple
        weapons and advanced elf weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 9,
    name: "Forlorn",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "Watching your friends age and die fills you with moroseness that protects you against harmful emotions. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.",
  },
  {
    id: 10,
    name: "Know your own",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve spent countless hours studying the history of elves on your world and beyond and are a studied expert in your people’s ways. If you critically fail a check to Recall Knowledge about elves, elven society, or elven history, you get a failure instead.",
  },
  {
    id: 11,
    name: "Nimble elf",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your muscles are tightly honed. Your Speed increases by 5 feet.",
  },
  {
    id: 12,
    name: "Otherworldy magic",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your elven magic manifests as a simple arcane spell, even if you aren’t formally trained in magic. Choose one cantrip from the arcane spell list. You can cast this cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
  },
  {
    id: 13,
    name: "Share throughts",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Mualijae, Ilverani, or Vourinoi ethnicity
        </span>
        <br />
        You have an uncanny knack of communicating with other elves without
        speaking, though this habit that is often uncomfortable to observers.
        You can cast mindlink as an innate occult spell once per day, but you
        can target only other elves or half-elves.
      </span>
    ),
  },
  {
    id: 14,
    name: "Unwavering mien",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your mystic control and meditations allow you to resist external
        influences upon your consciousness. Whenever you are affected by a
        mental effect that lasts at least 2 rounds, you can reduce the duration
        by 1 round.
        <br />
        <br />
        You still require natural sleep, but you treat your saving throws
        against effects that would cause you to fall asleep as one degree of
        success better. This protects only against sleep effects, not against
        other forms of falling unconscious.
      </span>
    ),
  },
  {
    id: 14,
    name: "Wildborn magic",
    action: "",
    tags: ["uncommon", "elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Mualijae ethnicity
        </span>
        <br />
        You have learned to access the old magic of wild places. Choose one
        cantrip from the primal spell list. You can cast this cantrip as an
        innate primal spell at will. A cantrip is heightened to a spell level
        equal to half your level rounded up.
      </span>
    ),
  },
  {
    id: 15,
    name: "Woodcraft",
    action: "",
    tags: ["elf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have a innate familiarity with forested areas. When in a forest or jungle environment, if you roll a critical failure on a Survival skill check to Sense Direction, Subsist, or Cover Tracks, you get a failure instead, and if you roll a success, you get a critical success instead.",
  },
  {
    id: 16,
    name: "Ageless patience",
    action: "",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You work at a pace born from longevity that enhances your thoroughness.
        You can voluntarily spend twice as much time as normal on a Perception
        check or skill check to gain a +2 circumstance bonus to that check. You
        also don’t treat a natural 1 as worse than usual on these checks; you
        get a critical failure only if your result is 10 lower than the DC. For
        example, you could get these benefits if you spent 2 actions to Seek,
        which normally takes 1 action. You can get these benefits during
        exploration by taking twice as long exploring as normal, or in downtime
        by spending twice as much downtime.
        <br />
        <br />
        The GM might determine a situation doesn’t grant you a benefit if a
        delay would be directly counterproductive to your success, such as a
        tense negotiation with an impatient creature.
      </span>
    ),
  },
  {
    id: 16,
    name: "Ancestral suspicion",
    action: "",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description:
      "Long-lived elves have seen civilizations rise and fall, often at the hands of outside forces. As a result, they have developed a wariness of others who might seek to influence or control them. You’ve been trained to resist such manipulation, gaining a +2 circumstance bonus to saving throws against effects that would make you controlled, such as dominate, and to Perception checks to Sense Motive when trying to determine if a creature is under the influence of such an effect. When you roll a success on a saving throw against such an effect, you get a critical success instead.",
  },
  {
    id: 17,
    name: "Defiance unto death",
    action: "",
    tags: ["uncommon", "elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Spiresworn elf
        </span>
        <br />
        You loathe the alghollthus and their mind magic, and you’ve been trained
        to be willing to die rather than give into mental manipulation. If you
        would start your turn confused, controlled, or fleeing due to a failed
        Will save, you can attempt a Will save against the same DC; on a
        success, you become paralyzed until your next turn, rather than act
        against your will.
      </span>
    ),
  },
  {
    id: 18,
    name: "Elven instincts",
    action: "",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your senses let you react rapidly. You gain a +2 circumstance bonus to Perception checks made as initiative rolls. Additionally, if your initiative roll result is tied with that of an opponent, you go first, regardless of whether you rolled Perception or not.",
  },
  {
    id: 19,
    name: "Elven weapon elegance",
    action: "",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Elven Weapon Familiarity
        </span>
        <br />
        You are attuned to the weapons of your elven ancestors and are
        particularly deadly when using them. Whenever you critically hit using
        an elf weapon or one of the weapons listed in Elven Weapon Familiarity,
        you apply the weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 20,
    name: "Forest stealth",
    action: "one_action",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Expert in Stealth
        </span>
        <br /> <br />
        <span className="frequency">
          <b>Requirements:</b> You are in a forest or jungle environment near an
          environmental feature that would allow you to Take Cover
        </span>
        <br />
        You are skilled at quickly hiding behind bits of underbrush or foliage.
        You Take Cover and then use that cover to Hide.
      </span>
    ),
  },
  {
    id: 21,
    name: "Martial experience",
    action: "",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve crossed blades with a wide variety of foes wielding a wide
        variety of weapons, and you’ve learned the basics of fighting with
        nearly any of them. When wielding a weapon you aren’t proficient with,
        treat your level as your proficiency bonus.
        <br />
        <br />
        At 11th level, you become trained in all weapons.
      </span>
    ),
  },
  {
    id: 22,
    name: "Wildborn adept",
    action: "one_action",
    tags: ["elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Wildborn Magic
        </span>
        <br />
        The whispers of the jungle grant you more diverse access to simple
        primal magic. You can cast dancing lights, disrupt undead, and
        tanglefoot as innate primal spells at will. If you chose one of those
        spells with Wildborn Magic, you can select a new spell for Wildborn
        Magic.
      </span>
    ),
  },
  {
    id: 23,
    name: "Brightness seeker",
    action: "",
    tags: ["elf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Once per day, you can spend 10 minutes studying your surroundings in
        search of omens related to a particular course of action to cast augury
        as an innate divine spell. Unless the result of the augury was
        “nothing,” you gain the following reaction for the next 30 minutes:
        <br />
        <br />
        Call Upon the Brightness (concentrate) Trigger You attempt an attack
        roll, skill check, or saving throw while performing the course of action
        from your augury, but you haven’t rolled yet; Effect You gain a +1
        status bonus to the triggering check, or a +2 status bonus if the result
        of the augury was “woe” and you proceeded anyway.
      </span>
    ),
  },
  {
    id: 24,
    name: "Elf-step",
    action: "one_action",
    tags: ["elf"],
    level: 9,
    feat: "Feat 9",
    description:
      "You move in a graceful dance, and even your steps are broad. You Step 5 feet twice.",
  },
  {
    id: 25,
    name: "Expert longevity",
    action: "",
    tags: ["elf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ancestral Longevity
        </span>
        <br />
        You’ve continued to refine the knowledge and skills you’ve gained
        through your life. When you choose a skill in which to become trained
        with Ancestral Longevity, you can also choose a skill in which you are
        already trained and become an expert in that skill. This lasts until
        your Ancestral Longevity expires.
        <br />
        <br />
        When the effects of Ancestral Longevity and Expert Longevity expire, you
        can retrain one of your skill increases. The skill increase you gain
        from this retraining must either make you trained in the skill you chose
        with Ancestral Longevity or make you an expert in the skill you chose
        with Expert Longevity.
      </span>
    ),
  },
  {
    id: 26,
    name: "Otherworldly acumen",
    action: "",
    tags: ["elf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least one innate spell gained from an elf
          ancestry feat
        </span>
        <br />
        The arcane magic you possess grows in power and complexity. Choose one
        common 2nd-level spell from the same tradition as an innate spell you
        previously gained from another elf ancestry feat (from the arcane list
        if you have Otherworldly Magic, for example). You can cast that spell as
        an innate spell once per day, using the same tradition as the list you
        chose the spell from.
        <br />
        <br />
        Your magic is adaptable. By spending 1 day of downtime, you can change
        the spell you chose to a different common 2nd-level spell from the same
        tradition.
      </span>
    ),
  },
  {
    id: 27,
    name: "Sense thoughts",
    action: "",
    tags: ["uncommon", "elf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Share thoughts
        </span>
        <br />
        You have an even stranger knack for knowing what other people are
        thinking. You can cast mind reading as an innate occult spell once per
        day.
      </span>
    ),
  },
  {
    id: 28,
    name: "Tree climber",
    action: "",
    tags: ["elf"],
    level: 9,
    feat: "Feat 9",
    description:
      "You’ve spent much of your life among the treetops and have become an expert at quickly and safely climbing them. You gain a climb Speed of 10 feet.",
  },
  {
    id: 29,
    name: "Avenge ally",
    action: "",
    tags: ["elf", "fortune"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once every 10 minutes.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You are adjacent to an ally with the dying
          condition.
        </span>
        <br />
        Though you know that you will eventually outlive your companions, seeing
        them at death's door brings clarity to your attacks. Make a Strike. Roll
        twice on the attack roll and use the higher result.
      </span>
    ),
  },
  {
    id: 30,
    name: "Elven weapon expertise",
    action: "",
    tags: ["elf"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Elven Weapon Familiarity
        </span>
        <br />
        Your elven affinity blends with your class training, granting you great
        skill with elven weapons. Whenever you gain a class feature that grants
        you expert or greater proficiency in certain weapons, you also gain that
        proficiency in longbows, composite longbows, longswords, rapiers,
        shortbows, composite shortbows, and all elf weapons in which you are
        trained.
      </span>
    ),
  },
  {
    id: 31,
    name: "Universal longevity",
    action: "one_action",
    tags: ["elf", "fortune"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Expert Longevity
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        You’ve perfected your ability to keep up with all the skills you’ve
        learned over your long life, so you’re almost never truly untrained at a
        skill. You reflect on your life experiences, changing the skills you
        selected with Ancestral Longevity and Expert Longevity.
      </span>
    ),
  },
  {
    id: 32,
    name: "Wondering heart",
    action: "one_action",
    tags: ["elf", "fortune"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> arctic elf, cavern elf, desert elf, woodland
          elf, or any other elf heritage based on adapting to an environment
        </span>
        <br />
        While all elves adapt to their environments over time, you have traveled
        so widely and become attuned to so many environs that your body now
        changes more rapidly than other elves. After spending a week in an
        environment associated with an elf heritage (such as snow for arctic
        elf, or a forest or jungle for woodland elf) your heritage automatically
        changes to become that heritage. This never causes you to change to an
        elf heritage that isn’t related to an environment, such as ancient elf,
        seer elf, or whisper elf.
      </span>
    ),
  },
  {
    id: 33,
    name: "Magic rider",
    action: "",
    tags: ["elf"],
    level: 17,
    feat: "Feat 17",
    description:
      "Your people used powerful magic to travel between distant worlds, and the remnants of that magic make such transportation easier for you. When you are the target of a teleportation spell that transports more than one person, it can affect an additional person beyond the normal limit, chosen by the caster. Additionally, when you’re the target of a teleport spell, you and the other targets arrive no farther than 1 mile off target, regardless of distance traveled.",
  },
];
