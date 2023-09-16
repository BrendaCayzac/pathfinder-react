import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const AnimistFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Apparition Sense",
    action: "",
    tags: ["animist", "divine"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          You can see and interact with things others can’t. You have apparition
          sight, an imprecise sense that allows you to detect the presence of
          invisible or hidden spirits, haunts, and undead within 30 feet of you.
        </p>
        <p>
          You can allow a spirit or undead otherwise incapable of speech to
          speak through you as long as you are in direct contact with it. You
          can act as a link between disembodied souls and their mortal bodies;
          as long as you are in contact with both a spirit and a living body
          that belonged to it in life, the spirit can use you to return to that
          body. This doesn’t allow you to bring the dead back to life, but can
          assist in restoring a disembodied soul to a still-living body. If the
          body is occupied by another spirit or soul, that entity must succeed
          at a Will save against your spell DC or be cast from the body when its
          original owner is returned.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Channeler's stance",
    action: "one_action",
    tags: ["animist", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          You enter a stance that allows the power of other levels of existence
          to flow through you more aggressively. While in this stance, whenever
          you cast or Sustain an apparition spell or vessel spell that deals
          energy damage, you gain a status bonus to the spell’s damage equal to
          the spell’s rank. Whenever you Cast a Spell that has the vitality or
          void traits that restores Hit Points, targets gain a status bonus to
          the amount of healing received equal to the spell’s rank.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Intermediary's defences",
    action: "",
    tags: ["animist"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          Your status as an intermediary across planar boundaries grants you
          certain diplomatic privileges you can exert in the face of spiritual
          ailments. You gain void resistance equal to half your level, and you
          gain a +1 status bonus to saving throws against the effects of haunts
          and the abilities of spirits and incorporeal undead.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Spiritual expansion spell",
    action: "one_action",
    tags: ["animist", "apparition", "concentrate", "spellshape"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          Your apparitions briefly manifest to scatter the energy of your spell,
          causing it to spread out and affect a wider area. If the next action
          you use is to Cast a Spell that has an area of a burst, cone, or line
          and doesn’t have a duration, increase the area of that spell. Add 5
          feet to the radius of a burst that normally has a radius of at least
          10 feet (a burst with a smaller radius is not affected). Add 5 feet to
          the length of a cone or line that is normally 15 feet long or smaller,
          and add 10 feet to the length of a larger cone or line.
        </p>
        <p>
          You can use this feat to increase the radius of an emanation spell
          with a duration by 5 feet by dedicating your primary apparition to
          maintaining the spellshape; dedicating the apparition to the spell
          prevents you from using the apparition’s vessel spell, apparition
          skills, or avatar form for the duration of the modified spell.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Conceal spell",
    action: "one_action",
    tags: ["animist", "concentrate", "spellshape"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          You speak with the unheard voice of the spirits instead of your mortal
          words, allowing you to cast unnoticed. If the next action you use is
          to Cast a Spell, the spell gains the subtle trait, hiding the shining
          runes, sparks of magic, and other manifestations that would usually
          give away your spellcasting. The trait hides only the spell’s
          spellcasting actions and manifestations, not its effects, so an
          observer might still see a ray streak out from you or see you vanish
          into thin air.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Embodiment of the balance",
    action: "",
    tags: ["animist"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          Your place in the balance between the forces of life and entropy
          expands the spells you can pull from the spirit realms. You add heal
          and harm to your apparition spell repertoire, allowing you to cast
          them with your apparition spellcasting.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Grasping spirits spell",
    action: "one_action",
    tags: ["animist", "apparition", "concentrate", "spellshape"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Frequency:</b> once per 10 minutes.
          </span>
          <br />
          Your apparitions draw your enemy into range of your spells. If the
          next action you use is to Cast a Spell that has a range and targets
          one creature, you can choose one target for the spell that is up to 30
          feet out of the spell’s normal range. Your apparitions briefly take on
          semi-physical forms and attempt to drag the target into range of the
          spell. The target must attempt a Fortitude saving throw against your
          spell DC; on a failure, it is pulled up to 30 feet directly toward
          you, and then affected by the spell as normal. You don’t need to pull
          the target the full 30 feet, but you must pull it to within the
          spell’s normal range. If the target succeeds at its save to resist
          this forced movement, the actions used to Cast the Spell are wasted,
          but your apparition is able to conserve and cycle the magical energies
          back to you, so you retain any Focus Points or spell slots used to
          Cast the Spell.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Sustaining dance",
    action: "one_action",
    tags: ["animist", "apparition"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          You dance in tune with the rhythms of your spiritual allies, moving
          through a series of steps laden with power. You Step or Leap, and then
          Sustain.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Apparition's enhancement",
    action: "",
    tags: ["animist", "apparition", "divine", "spirit"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <span>
            <b>Frequency:</b> once per turn.
          </span>
          <br />
          <span className="frequency">
            <b>Requirements:</b> Your most recent action was to cast a
            non-cantrip spell.
          </span>
          <br />
          An assisting apparition reaches a hand or other limb into your magic
          as you cast it, then uses it to cover one weapon you’re wielding or
          one unarmed attack you have with additional magical power. Until the
          end of your turn, the weapon or unarmed attack deals an extra 1d6
          spirit damage and gains the divine trait, if it didn’t have it
          already.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Channeled protection",
    action: "one_action",
    tags: ["animist", "apparition", "aura"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <span>
            <b>Prerequisites:</b> Channeler’s Stance
          </span>
          <br />
          <span className="frequency">
            <b>Requirements:</b> You are in Channeler’s Stance, and your last
            action was to Cast a Spell from your spell slots.
          </span>
          <br />
          You feed the excess energy from your spell to your attuned apparition
          in exchange for its protection. You and all adjacent allies gain a +1
          status bonus to AC and to Reflex saving throws until the start of your
          next turn. If the spell was at least 7th rank, the status bonus
          increase to +2.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Divert control",
    action: "reaction",
    tags: ["animist", "apparition", "mental"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Trigger:</b> Your turn begins while you are under the effects of
            charm or a similar spell, or an effect that would give you the
            controlled condition.
          </span>
          <br />
          Your attuned apparition takes control of your body and prevents you
          from acting against your will or better judgment. You ignore the
          effects of the charm spell, the controlled condition, and other spells
          that attempt to dictate your actions until the end of your turn. This
          turn still counts against the spell or effect’s duration.
        </p>
        <p>
          While ignoring an effect in this manner, you can take only a single
          action or activity, chosen by the attuned apparition. This could be to
          use a feat the apparition qualifies you for, to cast one of the
          apparition’s spells, or to take another action in keeping with the
          apparition’s nature as determined by the GM. This action is never one
          taken against your best interests.
        </p>
        <p>
          <b>Special</b> If you have the Apparition’s Possession ability, your
          apparition can instead take up to 2 actions and can use any action
          normally allowed by Apparition’s Possession.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Walk the wilds",
    action: "",
    tags: ["animist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          You know the ways of birds and beasts and have gained the right to
          wear their forms. You add animal form to your apparition spell
          repertoire, allowing you to cast it with your apparition spellcasting.
        </p>
        <p>
          <b>Special</b> If you are attuned to a stalker in darkened boughs,
          increase the duration of your darkened forest form focus spell to
          “sustained up to 5 minutes” when using it to transform into a form
          granted by animal form.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Apparition stabilization",
    action: "",
    tags: ["animist", "apparition", "wandering"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          Your attuned apparition ensures that even if you would be distracted
          or disrupted, your magic doesn’t go to waste. If a reaction would
          disrupt your spellcasting action, attempt a DC 15 flat check. If you
          succeed, your action isn’t disrupted. For each additional attuned
          apparition you have beyond the first, decrease the DC of this flat
          check by 1; for example, an animist with the third apparition class
          feature and three attuned apparitions would need to succeed at only a
          DC 13 flat check to avoid being disrupted.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Blazing spirit",
    action: "reaction",
    tags: ["animist", "apparition", "divine", "fire", "wandering"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <span>
            <b>Frequency:</b> once per 10 minutes.
          </span>
          <br />
          <span>
            <b>Requirements:</b> One of the apparitions you are attuned to
            grants Battleground Lore or Volcano Lore as an apparition skill.
          </span>
          <br />
          <span className="frequency">
            <b>Trigger:</b> An adjacent creature damages you with a melee
            attack, or a creature damages you with a melee unarmed attack.
          </span>
          <br />
          Your attunement to an apparition of burning determination gives you
          enhanced resilience and retaliatory defenses. You gain resistance
          equal to your level against the triggering attack, and the triggering
          creature takes 1d6 fire damage and 1 persistent fire damage. This
          damage increases to 2d6 fire damage and 2 persistent fire damage at
          12th level, and 3d6 fire damage and 3 persistent fire damage at 18th
          level.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Grudge strike",
    action: "two_action",
    tags: ["animist", "apparition", "divine", "wandering"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Requirements:</b> One of the apparitions you are attuned to
            grants Heraldry Lore or Underworld Lore as an apparition skill.
          </span>
          <br />
          You channel the spiritual power of ancient rivalries or spiteful
          grudges into a devastating attack. Make a melee Strike against a
          creature within your reach. You gain a +2 circumstance bonus to this
          attack and deal an additional 2d6 void damage to the target; if the
          target is undead, this Strike instead deals an additional 2d6 vitality
          damage. This ability gains the vitality trait if it deals vitality
          damage, or the void trait if it deals void damage.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Medium's awareness",
    action: "",
    tags: ["animist", "apparition", "divine", "wandering"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          The apparitions you have attuned yourself to help keep watch for
          incoming threats. You gain a +2 status bonus to Perception checks made
          to Seek and when using Perception for your initiative roll. At 12th
          level, this status bonus increases to +3, and at 20th level, to +4.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Roaring heart",
    action: "two_action",
    tags: ["animist", "apparition", "divine", "wandering"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Requirements:</b> One of the apparitions you are attuned to
            grants Mountain Lore as an apparition skill.
          </span>
          <br />
          The apparitions you have attuned yourself to help keep watch for
          incoming threats. You gain a +2 status bonus to Perception checks made
          to Seek and when using Perception for your initiative roll. At 12th
          level, this status bonus increases to +3, and at 20th level, to +4.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Roaring heart",
    action: "one_action",
    tags: ["animist", "apparition", "spellshape"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Frequency:</b> once per hour.
          </span>
          <br />
          You relinquish control to your apparition in exchange for additional
          power. You regain one expended apparition slot that is at least 2
          ranks lower than your highest-rank spell slot. Your apparition then
          immediately uses your body to cast an apparition spell that can be
          cast using that slot. The number of actions required for Possession
          Echo is equal to the action cost of the spell cast. Regaining control
          following the possession is difficult, however, and you are confused
          until the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Soul synchronization",
    action: "one_action",
    tags: ["animist", "apparition"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <span>
            <b>Prerequisites:</b> sage practice.
          </span>
          <br />
          <span className="frequency">
            <b>Requirements:</b> You are currently benefiting from Apparition’s
            Possession.
          </span>
          <br />
          The line between your intentions and those of the apparition
          possessing you blur, leaving you better able to support each other in
          the throes of combat. While your Apparition’s Possession ability is
          active, you gain the following additional benefits.
        </p>
        <ul>
          <li>
            Once per round, you can attempt a Recall Knowledge check as a free
            action, sharing the results with your apparition.
          </li>
          <li>
            All Strikes you make with a weapon or unarmed attack deal an
            additional 2 points of spirit damage.
          </li>
          <li>
            You gain resistance equal to half your level against all physical
            attacks, but you have weakness to spirit damage equal to one-third
            your level.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 20,
    name: "Spirit walk",
    action: "",
    tags: ["animist", "apparition", "exploration", "wandering"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Prerequisites:</b> Apparition Sense or attunement to a spirit
            that grants Fortune-Telling Lore as one of its apparition skills.
          </span>
          <br />
          Your allied apparitions ward you against the predations of their
          restless peers. While Searching or Detecting Magic in exploration
          mode, you and up to 4 allies within 30 feet don’t trigger reactions
          from haunts and spirits. Your apparition sight is now a precise sense,
          and you gain a +2 circumstance bonus to Recall Knowledge checks
          related to any entities you can detect with your apparition sight.
        </p>
        <p>
          After rolling initiative, you and each ally within range of your
          apparition sight gain resistance equal to half your level against
          damage dealt by haunts or spirits until the end of your first turn.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Wind seeker",
    action: "",
    tags: ["animist"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Prerequisites:</b> Walk the Wilds.
          </span>
          <br />
          Wings free you from the shackles of the ground below. You add aerial
          form to your apparition spell repertoire, allowing you to cast it with
          your apparition spellcasting. Whenever you use aerial form to gain a
          form that grants you a specific Acrobatics modifier, you gain a +1
          status bonus to Acrobatics checks.
        </p>
        <p>
          <b>Special</b> If you are attuned to a stalker in darkened boughs, add
          the bat and bird forms in aerial form to your darkened forest form
          lists.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Apparition's quickening",
    action: "",
    tags: ["animist", "apparition", "concentrate", "spellshape"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          If your next action is to cast a cantrip, or a spell that is at least
          2 ranks lower than the highest-rank spell slot you have, you can draw
          power from one of your attuned apparitions to reduce the number of
          actions to cast it by 1 (minimum 1 action). The chosen apparition is
          dispersed until you can re-attune to it at your next daily
          preparations.
        </p>
        <p>
          <b>Special</b> This can only be used on a cantrip or spell from the
          class matching the one you gained this feat from.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Apparition's quickening",
    action: "two_action",
    tags: ["animist", "apparition"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Frequency:</b> once per hour.
          </span>
          <br />
          You align the energy within your physical form to that of one of your
          insubstantial spiritual companions, bonding with their essence to
          become lighter than air. Choose one of your attuned apparitions; for
          10 minutes, you gain a fly Speed equal to your land Speed, but your
          chosen apparition is dispersed for the duration, automatically
          re-attuning to you 10 minutes later.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Overwhelming energy",
    action: "one_action",
    tags: ["animist", "manipulate", "spellshape"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          Your apparitions blend your magic with power drawn from beyond the
          Universe, making your damaging spells harder to resist. If the next
          action you use is to Cast a Spell, the spell ignores an amount of the
          target’s resistance to acid, cold, electricity, fire, sonic, vitality,
          or void damage equal to your level. This applies to all damage the
          spell deals, including persistent damage and damage caused by an
          ongoing effect of the spell, such as the wall created by wall of fire.
          A creature’s immunities are unaffected.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Shadows within shadows",
    action: "reaction",
    tags: ["animist", "apparition", "divine", "misfortune", "wandering"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <span>
            <b>Requirements:</b> You are attuned to an apparition that grants
            Underworld Lore as one of its apparition skills.
          </span>
          <br />
          <span className="frequency">
            <b>Trigger:</b> You would be detected by an enemy Seeking you with
            Perception, or an enemy would succeed with a counteract check to end
            a spell you have used to make yourself hidden, concealed, or
            undetected.
          </span>
          <br />
          Your attuned apparition is extremely hard to reveal, and it extends
          that elusiveness to you. The enemy must reroll the triggering check
          and take the lower result.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Spiritual guidance",
    action: "reaction",
    tags: ["animist", "apparition", "divine", "fortune", "wandering"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <span>
            <b>Trigger:</b> You or an ally would fail, but not critically fail,
            with a Strike or spell attack against an enemy you can perceive.
          </span>
          <br />
          <span className="frequency">
            <b>Frequency:</b> once per 10 minutes.
          </span>
          <br />
          Your attuned apparition guides your attacks home even when you or an
          ally find your hands to be too unsteady. The originator of the
          triggering Strike or spell attack attempts a second attack roll and
          takes the higher result.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Whispers of warning",
    action: "reaction",
    tags: ["animist", "apparition", "divine", "misfortune", "wandering"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <span>
            <b>Prerequisites:</b> Medium’s Awareness.
          </span>
          <br />
          <span>
            <b>Trigger:</b> You would be hit, but not critically hit, by an
            attack.
          </span>
          <br />
          <span className="frequency">
            <b>Frequency:</b> once per 10 minutes.
          </span>
          <br />
          Your protective apparitions’ sharp senses alert them to an incoming
          attack, which they whisper to you. The originator of the triggering
          attack must attempt a second attack roll and take the lower result.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Banish falsehoods of flesh",
    action: "one_action",
    tags: ["animist"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          You leverage your mastery of the supernatural to reveal an enemy’s
          true nature. Attempt a Religion check to counteract a polymorph effect
          currently affecting a creature you are aware of within 30 feet. If you
          know the creature’s true name, you can invoke it as part of this
          action to gain a +2 status bonus to the check. If the target is
          somehow under the effect of multiple polymorph effects, you can choose
          which one to attempt to counteract; the GM chooses randomly if the
          separate effects aren’t obvious. The target is then temporarily immune
          for 1 day.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Cardinal guardians",
    action: "",
    tags: ["animist"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Prerequisites:</b> channeler practice.
          </span>
          <br />
          You have mastered the art of drawing power from the cycle of your
          apparitions, turning the success of one apparition’s magic into a
          chance for the next’s to strike true. Whenever you succeed at a spell
          attack with an apparition spell or vessel spell, or when a creature
          fails its save against such a spell, you gain a +2 status bonus to
          your spell attack modifier against that creature with spells granted
          by any of your other apparitions, and it takes a –2 status penalty to
          its saves against such spells. These benefits last until the end of
          your next turn.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Forest's heart",
    action: "one_action",
    tags: ["animist", "apparition", "divine", "stance", "wandering"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Requirements:</b> You are attuned to an apparition that grants
            Forest Lore or Herbalism Lore as one of its apparition skills.
          </span>
          <br />
          You adopt a stance that allows your spiritual energy to inhabit and
          control roots from the ground you stand on to act as brutal extensions
          of your will. You can make unarmed attacks with roots, vines, and
          other plant growth that share your space. These deal 4d8 bludgeoning
          damage; are in the brawling group; and have the finesse, grapple, and
          reach 30 feet traits. Attacks made with these unarmed attacks do not
          gain additional damage from striking runes, but they can benefit from
          the item bonus to attack rolls and property runes of handwraps of
          mighty blows you are wearing.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Spiritual spellshape stance",
    action: "one_action",
    tags: ["animist", "apparition", "divine", "stance", "wandering"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          Your attuned apparition manifests ethereal limbs that it extends over
          your shoulders, assisting you in more efficiently weaving spells that
          strike at the spirit. While in this stance, once per turn you can use
          a spellshape feat that normally requires one action as a free action
          instead, but only to affect spells that deal spirit, vitality, or void
          damage. This doesn’t allow you to avoid or bypass any other
          restrictions or limitations normally associated with the spellshape
          feat.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Tame the land",
    action: "one_action",
    tags: ["animist", "apparition", "divine", "stance", "wandering"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Requirements:</b> You are attuned to an apparition that grants
            Academia Lore or Farming Lore as one of its apparition skills.
          </span>
          <br />
          You adopt a stance that imposes peace on the earth and air around you.
          You ignore all natural difficult terrain, and you gain resistance
          equal to half your level against damage dealt to you by animals,
          beasts, fey, and plants.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Tame the land",
    action: "one_action",
    tags: ["animist", "apparition", "concentrate", "spellshape"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Prerequisites:</b> Embodiment of the Balance.
          </span>
          <br />
          When you pull forth vitality or void energy, your spiritual allies
          funnel it to another target of your choosing. If the next action you
          use is to cast a 2-action harm or heal to heal or damage a single
          creature, choose yourself or one other additional creature adjacent to
          either you or the target. Target that creature with a 1-action version
          of the same spell, even if it would otherwise be out the spell’s
          range. This spell is the same rank as the 2-action harm or heal you
          cast and doesn’t cost another spell slot.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Soul cycle",
    action: "",
    tags: ["animist", "apparition"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <span>
            <b>Prerequisites:</b> Sustaining Dance, at least one animist stance
            feat.
          </span>
          <br />
          <span className="frequency">
            <b>Trigger:</b> Your turn starts.
          </span>
          <br />
          Your spiritual allies guide your movements, allowing you to prepare
          for the trials before you faster than thought. You Step or Leap, then
          enter an animist stance you know.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Spirit's sacrifice",
    action: "",
    tags: ["animist", "apparition"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Trigger:</b> You would die.
          </span>
          <br />
          Your attuned apparition disperses its own energy to save your life.
          You can use Spirit’s Sacrifice even while unconscious or otherwise
          unable to act. Choose one apparition you have attuned; you do not die,
          your wounded condition is reduced to 1 if it would be higher, and you
          regain a number of Hit Points equal to twice your level. The chosen
          apparition is dispersed until you can re-attune to it at your next
          daily preparations.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Eternal guide",
    action: "",
    tags: ["animist", "apparition"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <span className="frequency">
            <b>Frequency:</b> once per week.
          </span>
          <br />
          The spirits who guide you carry your soul back to the community you
          call home. Choose a single settlement with a population of at least
          100 people. Whenever you die and are not returned to life within 24
          hours by other means, as long as the settlement still exists and there
          are no other claims on your soul (such as a contract with a devil) and
          nothing trapping your soul (such as being slain by a soul eater), your
          attuned apparition magically transports your soul, remains, and all of
          the items you had worn or carried at the time of your death back to
          the chosen settlement, where you are reborn. The nature of this
          rebirth varies between animists; some magically reinvigorate their
          physical forms to return to life in their original bodies, while
          others pass their knowledge and power on to a new inheritor who
          effectively takes their place in the grand story of existence.
          Regardless of the exact nature of your rebirth, you or your inheritor
          are fully restored with your level, experience, and equipment intact
          one week after your death. If you choose an inheritor and their
          ancestry is different than yours, your attribute modifiers don’t
          change, but you can freely retrain your ancestry feats and any other
          feats that relied on them as prerequisites as part of your rebirth.
        </p>
        <p>
          There is no limit to the number of times you can be reborn, but if you
          die before a week has passed since your last rebirth, neither you nor
          your attuned apparitions have recovered enough energy to complete the
          process again, and your soul passes to whatever final reward it has
          earned.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "True channel spell",
    action: "",
    tags: ["animist"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          You are a true conduit for spiritual power, able to unleash the
          greatest spells. You gain a single 10th-rank spell slot and can
          prepare a spell in that slot using animist spellcasting. You can’t use
          10th-rank slots with abilities that give you more spell slots or that
          let you cast spells without expending spell slots.
        </p>
      </>
    ),
  },
];
