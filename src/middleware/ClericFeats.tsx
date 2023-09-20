import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const ClericFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Deadly simplicity",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> deity with a simple or unarmed attack favored
            weapon, trained with your deity’s favored weapon.
          </span>
          <br />
          Your deity’s weapon is especially powerful in your hands. When you are
          wielding your deity’s favored weapon, increase the damage die size of
          that weapon by one step.
        </p>
        <p>
          If your deity’s favored weapon is an unarmed attack (such as a fist,
          if you worship Irori) and its damage die is smaller than d6, instead
          increase its damage die size to d6.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Domain initiate",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your deity bestows a special spell related to their powers. Select one
          domain—a subject of particular interest to you within your
          religion—from your deity’s list. You gain an initial domain spell for
          that domain, a spell unique to the domain and not available to other
          clerics. Each domain’s theme and domain spells appear in Table 8–2:
          Domains.
        </p>
        <p>
          Domain spells are a type of focus spell. It costs 1 Focus Point to
          cast a focus spell, and you start with a focus pool of 1 Focus Point.
          You refill your focus pool during your daily preparations, and you can
          regain 1 Focus Point by spending 10 minutes using the Refocus activity
          to pray to your deity or do service toward their causes.
        </p>
        <p>
          Focus spells are automatically heightened to half your level rounded
          up. Focus spells don’t require spell slots, nor can you cast them
          using spell slots. Certain feats can give you more focus spells and
          increase the size of your focus pool, though your focus pool can never
          hold more than 3 Focus Points. The full rules for focus spells appear
          in the Focus Spells section.
        </p>
        <p>
          <b>Special</b> You can select this feat multiple times, selecting a
          different domain each time and gaining its domain spell.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "False faith",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Fires of the Haunted City</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> worshipper of Droskar.
          </span>
          <br />
          Droskar knows you may need to disguise yourself in societies that
          oppose your faith. After spending 1 hour in prayer to Droskar, you can
          cast spells using the religious symbol of a different deity as your
          divine focus, and you can address verbal prayers to that deity.
          Droskar intercepts your prayers and answers them without the named god
          knowing.
        </p>
        <p>
          This ability applies to the religious symbol of only one god at a
          time—making a different religious symbol work in this fashion requires
          another hour of prayer and causes the old one to cease functioning.
          You can always use a religious symbol of Droskar without affecting
          this ability.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Harming hands",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font.
          </span>
          <br />
          The mordant power of your negative energy grows. When you cast harm,
          you roll d10s instead of d8s.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Healing hands",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> healing font.
          </span>
          <br />
          Your positive energy is even more vibrant and restorative. When you
          cast heal, you roll d10s instead of d8s.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Holy castigation",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> good alignment.
          </span>
          <br />
          You combine holy energy with positive energy to damage demons, devils,
          and their evil ilk. Heal spells you cast damage fiends as though they
          were undead.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Premonition of avoidance",
    action: "reaction",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You attempt a saving throw against a hazard, but you
            haven’t rolled yet.
          </span>
          <br />
          Your deity grants you limited foresight, warning you of dangers an
          instant before they occur. You gain a +2 circumstance bonus to the
          triggering saving throw.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Reach spell",
    action: "one_action",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You can extend the range of your spells. If the next action you use is
          to Cast a Spell that has a range, increase that spell’s range by 30
          feet. As is standard for increasing spell ranges, if the spell
          normally has a range of touch, you extend its range to 30 feet.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Splinter faith",
    action: "",
    tags: ["champion", "cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Lost Omens: Gods & Magic</i>
          <br />
          <br />
          Your faith in your deity is represented in an extremely unusual way
          that some might call heretical. When you select this feat, you should
          detail the fundamental tenets of your splinter faith, though it
          shouldn’t affect the deity’s edicts or anathema. Choose four domains.
          These domains must be chosen from among your deity’s domains, your
          deity’s alternate domains, and up to one domain that isn’t on either
          list and isn’t anathematic to your deity. Any domain spell you cast
          from a domain that isn’t on either of your deity’s lists is always
          heightened to 1 level lower than usual for a focus spell. For the
          purpose of abilities that depend on your deity’s domains, the four
          domains you chose are your deity’s domains, and any of your deity’s
          domains you didn’t choose are now among your deity’s alternate
          domains.
        </p>
        <p>
          <b>Special</b> Unless you take this feat at 1st level, changing the
          way you relate to your deity requires retraining, as described in the
          Changing Faith section. If you take this feat and previously benefited
          from any effect that requires a domain your splinter faith doesn’t
          include, such as a domain spell from Domain Initiate, you lose that
          effect.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Syncretism",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Lost Omens: Gods & Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> you follow a deity.
          </span>
          <br />
          You have come to see the overlap between two deities’ teachings.
          Choose a second deity. You must meet their alignment requirements, and
          you are subject to their edicts and anathema. If you are a cloistered
          cleric, select one of that deity’s domains, gaining the benefits of
          the Expanded Domain Initiate feat with that domain. If you are a
          warpriest, you gain the favored weapon of that deity as a second
          favored weapon, and it gains the benefits of feats and abilities you
          have that affect your deity’s favored weapon, such as Deadly
          Simplicity. If you have a different doctrine than cloistered cleric or
          warpriest, either apply whichever of the above options is most
          appropriate for your doctrine, or, at the GM’s discretion, add a
          benefit from the second deity more closely tied to your doctrine.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Vile desecration",
    action: "",
    tags: ["cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> evil alignment.
          </span>
          <br />
          You combine unholy might with negative energy to damage angels,
          archons, and other self-righteous denizens of the Outer Planes. When
          you cast a harm spell, you can change the damage you deal to celestial
          creatures to evil damage instead of negative damage.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Cantrip Expansion",
    action: "",
    tags: ["cleric"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You study a wider range of simple spells. You can prepare two
          additional cantrips each day.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Communal healing",
    action: "",
    tags: ["cleric", "healing", "positive"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You’re a conduit for positive energy, and as you channel it through
          you, it heals some of your minor injuries. When you cast the heal
          spell to heal a single creature other than yourself, you regain Hit
          Points equal to the spell level of the heal spell.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Emblazon armament",
    action: "",
    tags: ["cleric", "exploration"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Carefully etching a sacred image into a physical object, you steel
          yourself for battle. You can spend 10 minutes emblazoning a symbol of
          your deity upon a weapon or shield. The symbol doesn’t fade until 1
          year has passed, but if you Emblazon an Armament, any symbol you
          previously emblazoned and any symbol already emblazoned on that item
          instantly disappears. The item becomes a religious symbol of your
          deity and can be used as a divine focus while emblazoned, and it gains
          another benefit determined by the type of item. This benefit applies
          only to followers of the deity the symbol represents.
        </p>
        <ul>
          <li>
            <b>Shield</b> The shield gains a +1 status bonus to its Hardness.
            (This causes it to reduce more damage with the Shield Block
            reaction.)
          </li>
          <li>
            <b>Weapon</b> The wielder gains a +1 status bonus to damage rolls.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 15,
    name: "Rapid response",
    action: "reaction",
    tags: ["cleric"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> An ally is reduced to 0 Hit Points.
          </span>
          <br />
          You work quickly and efficiently in times of danger to deliver needed
          assistance. You Stride towards the triggering ally. You gain a
          +10-foot circumstance bonus to your Speed during this movement.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Resilient mind",
    action: "",
    tags: ["uncommon", "champion", "cleric"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          You’re firm in your convictions and have girded your mind against
          outside influence. You gain a +1 circumstance bonus to saves against
          mental effects. This bonus increases to +2 against mental effects
          originating from undead.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Sap life",
    action: "",
    tags: ["cleric", "healing"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You draw the life force out of your enemies to heal your own wounds.
          When you cast a harm spell and damage at least one living creature,
          you regain Hit Points equal to the spell level of your harm spell. If
          you aren’t a living creature, you gain no benefit from this feat.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Turn undead",
    action: "",
    tags: ["cleric"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Undead harmed by your positive energy might flee, compelled by an
          innate aversion to the force opposite undeath. When you use a heal
          spell to damage undead, each undead of your level or lower that
          critically fails its save gains the fleeing condition for 1 round.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Versatile font",
    action: "",
    tags: ["cleric"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font or healing font, deity that allows
            clerics to have both fonts.
          </span>
          <br />
          As you explore your deity’s aspects, you move beyond restrictions on
          healing or harming. You can prepare either harm or heal in the spell
          slots gained from the harmful font or healing font.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Channel smite",
    action: "two_action",
    tags: ["cleric", "divine", "necromancy"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> harmful font or healing font.
          <br />
          <span className="frequency">
            <b>Cost</b> Expend a harm or heal spell.
          </span>
          <br />
          You siphon the destructive energies of positive or negative energy
          through a melee attack and into your foe. Make a melee Strike and add
          the spell’s damage to the Strike’s damage. This is negative damage if
          you expended a harm spell or positive damage if you expended a heal
          spell.
        </p>
        <p>
          The spell is expended with no effect if your Strike fails or hits a
          creature that isn’t damaged by that energy type (such as if you hit a
          non-undead creature with a heal spell).
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Command undead",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font, evil alignment.
          </span>
          <br />
          You grasp the animating force within an undead creature and bend it to
          your will. If the next action you use is to cast harm targeting one
          undead creature, you transform the effects of that harm spell. Instead
          of harm's normal effects, the target becomes controlled by you if its
          level is equal to or lower than your level – 3. It can attempt a Will
          saving throw to resist being controlled by you. If the target is
          already under someone else’s command, the controlling creature also
          rolls a saving throw, and the undead uses the better result.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected and is temporarily
          immune for 24 hours.
        </p>
        <p>
          <b>Success</b> The target is unaffected.
        </p>
        <p>
          <b>Failure</b> The undead creature becomes a minion under your
          control. The spell gains a duration of 1 minute, but it is dismissed
          if you or an ally attacks the minion undead.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the duration is 1 hour.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Directed channel",
    action: "",
    tags: ["cleric"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You can shape the energy you channel in a single direction, reaching
          farther and in a more directed fashion. When you cast a version of
          harm or heal that has an area, you can make its area a 60-foot cone
          instead of a 30-foot emanation.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Expanded domain initiate",
    action: "",
    tags: ["cleric"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Gods & Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Domain Initiate.
          </span>
          <br />
          You have long venerated one of your deity’s lesser-known aspects.
          Select one domain from your deity’s alternate domains. You gain access
          to that domain and an initial domain spell for that domain.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Improved communal healing",
    action: "",
    tags: ["cleric"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Communal Healing.
          </span>
          <br />
          You can direct excess channeled energy outward to benefit an ally. You
          can grant the Hit Points you would regain from Communal Healing to any
          one creature within the range of your heal spell instead of yourself.
          You can also use Communal Healing when you target only yourself with a
          heal spell, though if you do, you must grant the additional healing to
          someone other than yourself.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Necrotic infusion",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Communal Healing.
          </span>
          <br />
          You pour negative energy into your undead subject to empower its
          attacks. If the next action you use is to cast harm to restore Hit
          Points to a single undead creature, the target then deals an
          additional 1d6 negative damage with its melee weapons and unarmed
          attacks until the end of its next turn.
        </p>
        <p>
          If the harm spell is at least 5th level, this damage increases to 2d6,
          and if the harm spell is at least 8th level, the damage increases to
          3d6.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Prayer touched weapon",
    action: "",
    tags: ["uncommon", "cleric", "oracle"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <b>Prerequisites</b> divine spells, you follow a good-aligned deity.
          <br />
          <b>Frequency</b> once per turn.
          <br />
          <span className="frequency">
            <b>Requirements</b>
            Your most recent action was to cast a non-cantrip divine spell.
          </span>
          <br />
          You coat a weapon you’re wielding in prayers and the divine power
          given to you by your deity. Until the end of your turn, the weapon
          deals an extra 1d6 positive damage. As usual for positive damage, this
          damage harms only undead and creatures with negative healing.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Radiant infusion",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> good alignment, healing font.
          </span>
          <br />
          You pour invigorating positive energy into a living ally. If the next
          action you use is to cast heal to restore Hit Points to a single
          living creature, the target deals an additional 1d6 positive damage
          with its melee weapons and unarmed attacks until the end of its next
          turn. If the heal spell is at least 5th level, this damage increases
          to 2d6, or 3d6 if the spell is at least 8th level.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Undying conviction",
    action: "",
    tags: ["uncommon", "aura", "cleric", "necromancy", "oracle", "wizard"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Book of the dead</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> able to create or control undead; cleric with a
            negative font, oracle of bones, or necromancer wizard.
          </span>
          <br />
          Your presence has a bolstering effect on your undead minions. Undead
          creatures under your control and within a 30-foot emanation around you
          gain a +2 status bonus to saving throws to resist positive damage and
          to Will saving throws to resist effects that would make them
          controlled.
        </p>
        <p>
          <b>Special</b> This feat has the trait matching your spellcasting
          tradition.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Cast down",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font or healing font.
          </span>
          <br />
          The sheer force of your faith can bring a foe crashing down. If the
          next action you use is to cast harm or heal to damage one creature,
          the target is knocked prone if it takes any damage from the spell. If
          the target critically fails its save against the spell, it also takes
          a –10-foot status penalty to its Speed for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Detonating spell",
    action: "one_action",
    tags: [
      "uncommon",
      "cleric",
      "concentrate",
      "metamagic",
      "oracle",
      "sorcerer",
      "witch",
      "wizard",
    ],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          Your spell becomes volatile and explosive. If the next action you use
          is to Cast a Spell that deals damage to a single target and the spell
          successfully damages that target, the spell explodes, dealing splash
          damage equal to the level of the spell cast to adjacent creatures.
          Unlike normally, this splash damage doesn’t apply to the target. The
          splash damage dealt is of the same type the spell deals.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Divine weapon",
    action: "",
    tags: ["cleric"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Frequency</b> once per turn.
          <br />
          <span className="frequency">
            <b>Trigger</b> You finish Casting a Spell using one of your divine
            spell slots on your turn.
          </span>
          <br />
          You siphon residual spell energy into a weapon you’re wielding. Until
          the end of your turn, the weapon deals an additional 1d4 force damage.
          You can instead deal an additional 1d6 damage of an alignment type
          that matches one of your deity’s alignment components. As usual for
          aligned damage, this can damage only creatures of the opposite
          alignment.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Magic hands",
    action: "",
    tags: ["cleric"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Healing Hands.
          </span>
          <br />
          The blessing of your deity heightens your healing ability, making your
          mundane healing work as if by magic. When you succeed at a Medicine
          check to Treat Wounds, your action gains the divine trait and you heal
          the maximum amount for the 2d8 (or 4d8 on a critical success). If you
          have an ability that adds additional dice to your Treat Wounds, you
          still roll those normally.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Selective Energy",
    action: "",
    tags: ["cleric"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          As you call down divine power, you can prevent some enemies from
          benefiting or some allies from being hurt. When you cast a version of
          harm or heal that has an area, you can designate a number of creatures
          equal to your Charisma modifier (minimum 1) that are not targeted by
          the spell.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Steady spellcasting",
    action: "",
    tags: ["cleric"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Confident in your technique, you don’t lose spells easily. If a
          reaction would disrupt your spellcasting action, attempt a DC 15 flat
          check. If you succeed, your action isn’t disrupted.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Advanced domain",
    action: "",
    tags: ["cleric"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Domain Initiate.
          </span>
          <br />
          Your studies or prayers have unlocked deeper secrets of your deity’s
          domain. You gain an advanced domain spell from one of your domains (as
          listed in Table 8–2: Domains). Increase the number of Focus Points in
          your focus pool by 1.
        </p>
        <p>
          <b>Special</b> You can select this feat multiple times. Each time, you
          must select a different advanced domain spell from a domain for which
          you have an initial domain spell.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Align armament",
    action: "one_action",
    tags: ["cleric", "divine", "evocation"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> chaotic, evil, good, or lawful deity.
          <br />
          <span className="frequency">
            <b>Frequency</b> once per round.
          </span>
          <br />
          You bring a weapon into metaphysical concordance with your deity’s
          beliefs. When you select this feat, choose chaotic, evil, good, or
          lawful. Your choice must match one of your deity’s alignment
          components. This action has the trait corresponding to the chosen
          alignment component.
        </p>
        <p>
          When you use this action, you touch a weapon. For 1 round, that weapon
          deals an additional 1d6 damage of the chosen type to creatures of the
          opposed alignment. For example, if you chose good, the weapon would
          deal an extra 1d6 good damage to evil creatures. If you Align an
          Armament again, any previously aligned armament loses its additional
          damage.
        </p>
        <p>
          <b>Special</b> You can select this feat a second time, choosing your
          deity’s other alignment component. When you Align an Armament, you can
          choose either alignment component.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Channeled succor",
    action: "",
    tags: ["cleric"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> healing font.
          </span>
          <br />
          You can remove conditions with divine grace. You can sacrifice one
          heal spell you’ve prepared in your extra slots from healing font to
          cast one of the following spells instead: remove curse, remove
          disease, remove paralysis, or restoration. The spell is heightened to
          the same level as the heal spell you sacrificed.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Cremate undead",
    action: "",
    tags: ["cleric"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your positive energy sets undead alight. When you use a heal spell to
          damage undead, each undead that takes damage also takes persistent
          fire damage equal to the spell’s level.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Emblazon energy",
    action: "",
    tags: ["cleric"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Emblazon Armament.
          </span>
          <br />
          With elemental forces, you make your emblazoned symbols more potent.
          When you Emblazon an Armament, you can choose from the following
          effects instead of the effects listed in that feat. These effects have
          the same restrictions as the base options.
        </p>
        <ul>
          <li>
            <b>Shield</b> Choose acid, cold, electricity, fire, or sonic. The
            wielder gain the shield’s circumstance bonus to saving throws
            against that damage type and can use Shield Block against damage of
            that type. The shield also gains resistance to that damage type
            equal to half your level if you have a domain spell with a trait
            matching that type (such as fire).
          </li>
          <li>
            <b>Weapon</b> Choose acid, cold, electricity, fire, or sonic. The
            weapon deals an extra 1d4 damage of that type. Increase this extra
            damage to 1d6 if you have a domain spell with a trait matching that
            type (such as fire).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 40,
    name: "Martyr",
    action: "",
    tags: ["cleric", "metamagic"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine font.
          </span>
          <br />
          You go to extreme lengths to support your allies, even when it means
          bringing harm to yourself. If your next action is to cast harm or heal
          from your healing or harmful font to restore Hit Points to a single
          ally, you can channel your own vitality along with the spell. You lose
          1d8 Hit Points per level of the spell, which can’t be reduced or
          mitigated in any way, and your ally regains an equal number of Hit
          Points.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Surging focus",
    action: "",
    tags: ["cleric"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Frequency</b> once per day.
          <br />
          <span className="frequency">
            <b>Trigger</b> An ally you can see falls to 0 Hit Points.
          </span>
          <br />
          When an ally you can see falls in battle, your fight or flight
          response triggers a surge in your deity’s might within you. You
          instantly regain 1 Focus Point.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Castigating weapon",
    action: "",
    tags: ["cleric"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Holy Castigation.
          </span>
          <br />
          The force of your deity’s castigation strengthens your body so you can
          strike down the wicked. After you damage a fiend using a heal spell,
          your weapon or unarmed Strikes deal extra good damage to fiends equal
          to half the level of the heal spell until the end of your next turn.
          This is cumulative with any good damage the weapon already deals (such
          as from a holy rune).
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Consecrate spell",
    action: "one_action",
    tags: [
      "uncommon",
      "cleric",
      "concentrate",
      "metamagic",
      "oracle",
      "sorcerer",
    ],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> ability to cast focus spells, divine spells.
          </span>
          <br />
          You infuse a spell with the power of your faith, consecrating it. If
          the next action you use is to Cast a Spell that targets a single
          undead, you can expend a Focus Point, channeling the power of your
          focus spells into the primary spell. If you do, the spell you cast
          deals additional good or positive damage (your choice) equal to the
          level of your focus spells. As normal for additional damage, this
          additional damage is doubled if the spell cast requires an attack roll
          and the result of the attack roll is a critical hit, or if the spell
          cast requires a saving throw and the result of the saving throw is a
          critical failure.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Heroic recovery",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> healing font, good alignment.
          </span>
          <br />
          The restorative power of your healing invigorates the recipient. If
          the next action you use is to cast heal targeting a single living
          creature and the target regains Hit Points from the spell, it also
          gains three bonuses until the end of its next turn: a +5-foot status
          bonus to its Speed, a +1 status bonus to attack rolls, and a +1 status
          bonus to damage rolls.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Holy light",
    action: "two_action",
    tags: [
      "uncommon",
      "champpion",
      "cleric",
      "concentrate",
      "divine",
      "evocation",
      "light",
    ],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> you follow a good-aligned deity.
          </span>
          <br />
          You raise your arms to the sky and pray fervently, surrounding
          yourself in a beacon of holy light. The beacon sheds bright light in a
          30-foot-radius, 100-foot-high cylinder centered on you until the
          beginning of your next turn. Evil creatures in the area must succeed
          at a Will save equal to your class DC or spell DC (whichever is
          higher) or become dazzled for 1 round.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Improved command undead",
    action: "",
    tags: ["cleric"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font, Command Undead, evil alignment.
          </span>
          <br />
          Undead creatures find it all but impossible to resist your commands.
          When you use Command Undead, if the undead succeeds at its save but
          doesn’t critically succeed, it is your minion for 1 round. If the
          undead fails its save, it is your minion for 10 minutes. If it
          critically fails, it is your minion for 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Replenishment of wat",
    action: "",
    tags: ["cleric"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> expert in your deity’s favored weapon.
          </span>
          <br />
          Striking out against your enemies draws praise and protection from
          your deity. When you damage a creature with a Strike using your
          deity’s favored weapon, you gain a number of temporary Hit Points
          equal to half your level, or equal to your level if the Strike was a
          critical hit. These temporary Hit Points last until the start of your
          next turn.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Shared avoidance",
    action: "",
    tags: ["cleric"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Premonition of Avoidance.
          </span>
          <br />
          You can project your premonitions of danger to your allies. When you
          use Premonition of Avoidance, allies within 15 feet of you who are
          rolling the same saving throw against the same hazard also gain a +2
          circumstance bonus to their saving throws.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Shield of Faith",
    action: "",
    tags: ["cleric"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Domain Initiate.
          </span>
          <br />
          Residual energy from your domain spells bolsters your defenses. When
          you spend a Focus Point to cast a domain spell, you gain a +1 status
          bonus to your AC until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Through spell",
    action: "",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Spells you cast can transform briefly into vital essence, traveling
          harmlessly through living and undead creatures between you and your
          target, blocked only by solid objects. If the next action you use is
          to Cast a Spell that requires a spell attack roll, your targets don’t
          benefit from cover provided by living or undead creatures.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Defensive recovery",
    action: "",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font or healing font.
          </span>
          <br />
          Your faith provides temporary protection in addition to healing. If
          the next action you use is to cast harm or heal on a single target and
          the target regains Hit Points from the spell, it also gains a +2
          status bonus to AC and saving throws for 1 round.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Domain focus",
    action: "",
    tags: ["cleric"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> one or more domain spells.
          </span>
          <br />
          Your devotion to your deity’s domains grows greater, and so does the
          power granted to you. If you have spent at least 2 Focus Points since
          the last time you Refocused, you recover 2 Focus Points when you
          Refocus instead of 1.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Emblazon antimagic",
    action: "",
    tags: ["cleric"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Emblazon Armament.
          </span>
          <br />
          Your deity’s symbol protects against offensive magic. When you
          Emblazon an Armament, you can choose from the following effects
          instead of the effects listed in that feat. These effects have the
          same restrictions as the base options.
        </p>
        <ul>
          <li>
            <b>Shield</b> When the wielder has the shield raised, they gain the
            shield’s circumstance bonus to saving throws against magic, and they
            can use Shield Block against damage from their enemies’ spells.
          </li>
          <li>
            <b>Weapon</b> When the weapon’s wielder critically hits with the
            weapon, they can attempt to counteract a spell on their target,
            using half their level, rounded up, as the counteract level. If they
            attempt to do so, the emblazoned symbol immediately disappears.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 54,
    name: "Miraculous intervention",
    action: "reaction",
    tags: ["uncommon", "champion", "cleric"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> An adjacent fiend or undead begins to use a reaction.
          </span>
          <br />
          Through divine intervention or whispered prayers, you foil an enemy’s
          response. If the triggering creature’s level is equal to or lower than
          yours, you disrupt the triggering reaction. If the triggering
          creature’s level is higher than yours, you must make an attack roll or
          spell attack roll against its AC (your choice). On a success, you
          disrupt the reaction.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Necromancer's visage",
    action: "",
    tags: ["uncommon", "cleric", "necromancy", "oracle", "wizard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Book of the Dead</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> ability to create or control undead; cleric
            with a negative font, oracle of bones, or necromancer wizard.
          </span>
          <br />
          Necromantic energy demonstrates your power over undead, creating a
          demeanor that commands their fear and respect. Undead creatures can
          immediately sense your Necromancer’s Visage and tend to act
          accordingly. If you take a hostile action against an undead creature,
          it becomes permanently immune to your Necromancer’s Visage, and your
          Necromancer’s Visage ends. You can spend 10 minutes to restore your
          Necromancer’s Visage, though any creatures that became permanently
          immune remain so.
        </p>
        <p>
          Each time an undead creature 2 or more levels lower than you attacks
          you, it must attempt a Will save against your spell DC. If you’re also
          affected by sanctuary or a similar effect, only one affects the
          attacker (you choose which).
        </p>
        <p>
          <b>Critical Success</b> The creature is permanently immune to your
          Necromancer’s Visage.
        </p>
        <p>
          <b>Success</b> The creature can attempt its attack and any other
          attacks against you this turn.
        </p>
        <p>
          <b>Failure</b> The creature can’t attack you and wastes the action. It
          can’t attempt further attacks against you this turn.
        </p>
        <p>
          <b>Critical Failure</b> The creature wastes the action and can’t
          attempt to attack you as long as your Necromancer’s Visage persists.
        </p>
        <p>
          <b>Special</b> This feat has the trait matching your spellcasting
          tradition.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Shared replenishment",
    action: "",
    tags: ["cleric"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Replenishment of War.
          </span>
          <br />
          When your deity blesses your warlike acts, you can extend that favor
          to your allies. You can grant the temporary Hit Points from
          Replenishment of War to an ally within 10 feet instead of gaining them
          yourself. You can grant these temporary Hit Points to a different ally
          each time, meaning you might be able to grant them to multiple
          creatures in a single turn.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Deity's protection",
    action: "",
    tags: ["cleric"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Advanced Domain.
          </span>
          <br />
          When you call upon your deity’s power to fulfill the promise of their
          domain, you gain divine protection. After you cast a domain spell, you
          gain resistance to all damage until the start of your next turn. The
          amount of resistance is equal to the level of the domain spell you
          cast.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Ebb and flow",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Versatile Font.
          </span>
          <br />
          You can pull forth both positive and negative energy simultaneously to
          harm your enemies and heal your allies. If your next action is to cast
          a 1-action or 2-action heal or harm spell, choose one creature in
          range that would be harmed by the spell, and choose another creature
          within range that would be healed by the spell. Your heal or harm
          targets both creatures.
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Extend armament alignment",
    action: "",
    tags: ["cleric"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Align Armament.
          </span>
          <br />
          The alignment you impose on a weapon lasts much longer. The duration
          of Align Armament increases to 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Fast Channel",
    action: "",
    tags: ["cleric"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> harmful font or healing font.
          </span>
          <br />
          Divine power is always at your fingertips, swiftly responding to your
          call. When you cast harm or heal by spending 2 actions, you can get
          the effects of the 3-action version instead of the 2-action version.
        </p>
        <p>
          You can do this with harm if you have harmful font or heal if you have
          healing font (or both if you have Versatile Font).
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Premonition of clarity",
    action: "reaction",
    tags: ["cleric", "fortune"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Frequency</b> once per hour.
          <br />
          <span className="frequency">
            <b>Trigger</b> You fail a saving throw against a mental effect.
          </span>
          <br />
          Your deity sends you a vision of faith to steel you against mental
          attacks. Reroll the triggering saving throw with a +2 circumstance
          bonus. You must use the second result, even if it’s worse.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Purifying breeze",
    action: "one_action",
    tags: ["uncommon", "cleric", "oracle", "sorcerer"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <b>Prerequisites</b> divine spells.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your most recent action was to cast a
            non-cantrip spell with the healing trait.
          </span>
          <br />
          You transfer the divine essence of your magic to the air around you,
          cleansing it of toxins. Attempt a counteract check against each
          airborne disease or poison effect in a 15-foot radius around you.
          Regardless of your success or failure, until the beginning of your
          next turn, all creatures in the purified area gain a +1 status bonus
          to Fortitude saving throws.
        </p>
      </>
    ),
  },
  {
    id: 63,
    name: "Sepulchral sublimation",
    action: "one_action",
    tags: [
      "uncommon",
      "cleric",
      "concentrate",
      "metamagic",
      "necromancy",
      "oracle",
      "wizard",
    ],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Book of the Dead</i>
          <br />
          <br />
          <b>Prerequisites</b> ability to permanently create or control undead;
          cleric with a negative font, oracle of bones, or necromancer wizard.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have at least one undead minion that you
            permanently control.
          </span>
          <br />
          You repurpose the negative energy that flows through your minions at a
          moment’s notice. Instantly destroy one undead minion within 60 feet
          that is permanently under your control. If your next action is to cast
          a necromancy spell from a spell slot, you don’t expend the slot. The
          spell’s level must be half the destroyed minion’s level or lower and
          the spell can’t have a duration.
        </p>
        <p>
          <b>Special</b> This feat has the trait matching your spellcasting
          tradition.
        </p>
      </>
    ),
  },
  {
    id: 64,
    name: "Swift banishment",
    action: "reaction",
    tags: ["cleric"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> You critically hit a creature that is not on its
          home plane.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have a banishment spell prepared.
          </span>
          <br />
          The force of your blow sends your victim back to its home plane. You
          expend a banishment spell you have prepared, affecting the creature
          you critically hit without needing to cast the spell. The creature can
          attempt to resist the spell as normal.
        </p>
      </>
    ),
  },
  {
    id: 65,
    name: "Eternal bane",
    action: "",
    tags: ["cleric"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> evil alignment.
          </span>
          <br />A life of evil has made you a nexus for your deity’s vile power.
          You’re continuously surrounded by a bane spell with a spell level
          equal to half your level (rounded up). The radius is 15 feet, and you
          can’t increase it. You can Dismiss the spell; if you do, it returns
          automatically after 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "Eternal blessing",
    action: "",
    tags: ["cleric"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> good alignment.
          </span>
          <br />
          Your good deeds have brought your deity’s grace to you for all of
          eternity. You’re continuously surrounded by a bless spell with a spell
          level equal to half your level (rounded up). The radius is 15 feet,
          and you can’t increase it. You can Dismiss the spell; if you do, it
          returns automatically after 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Remediate",
    action: "",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> harmful font or healing font.
          <br />
          <span className="frequency">
            <b>Frequency</b> once per hour.
          </span>
          <br />
          If your next action is to use your divine font to cast a 3-action heal
          or harm spell to damage creatures, you can harness the residual energy
          to counterbalance opposing forces. You use your heal or harm spell to
          attempt to counteract one effect in the spell’s area with the chaotic,
          evil, good, or lawful trait. The chosen trait must oppose one
          component of your deity’s alignment; if your deity is neutral, you can
          choose any one trait.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Resurrectionist",
    action: "",
    tags: ["cleric"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You can cause a creature you bring back from the brink of death to
          thrive and continue healing. When you restore Hit Points to a dying
          creature or bring a dead creature back to life and restore Hit Points
          to it, you grant that creature fast healing 5 for 1 minute. This fast
          healing ends if the creature is knocked unconscious.
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Domain wellspring",
    action: "",
    tags: ["cleric"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Domain Focus.
          </span>
          <br />
          The intensity of your focus grows from the investment you’ve placed in
          your domains. If you have spent at least 3 Focus Points since the last
          time you Refocused, you recover 3 Focus Points when you Refocus
          instead of 1.
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Echoing channel",
    action: "one_action",
    tags: ["cleric", "concentrate", "metamagic"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          When you pull forth positive or negative energy, you also create a
          smaller pocket of that energy. If the next action you use is to cast a
          2-action harm or heal to heal or damage a single creature, choose one
          additional creature adjacent to either you or the target. Target that
          creature with a 1-action version of the same spell. This spell is the
          same level as the 2-action harm or heal you cast and doesn’t cost
          another spell slot.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Improved swift banishment",
    action: "",
    tags: ["cleric"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Swift Banishment.
          </span>
          <br />
          You easily banish creatures with your weapon. You can use Swift
          Banishment as long as you have a spell slot of 5th level or higher
          remaining, even if you don’t have banishment prepared. You must
          sacrifice a prepared spell of 5th level or higher, and the banishment
          effect you create is heightened to the level of that spell. Your
          weapon serves as the special material component of banishment, causing
          the target to take the –2 penalty to its save against any banishment
          you cast using Swift Banishment.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Miraculous possibility",
    action: "",
    tags: ["cleric"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Your deity empowers you to perform minor miracles, allowing you to
          readily adapt to the fluctuating needs of your duties. Once during
          your daily preparations, you can use a spell slot to hold sheer divine
          potential, rather than using it to prepare a spell. You can use this
          spell slot to cast any spell you know from the divine spell list
          that’s at least 2 levels lower than the slot you designate. The spell
          acts in all ways as a spell of 2 levels lower. You don’t have any
          particular spell prepared in that slot until you cast it.
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Shared clarity",
    action: "",
    tags: ["cleric"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Premonition of Clarity.
          </span>
          <br />
          You can project your premonitions of clarity to your allies. When you
          use Premonition of Clarity, allies within 15 feet of you who failed
          the same saving throw against the same mental effect can also spend
          their reactions to reroll the failed saving throw with a +2
          circumstance bonus.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Avatar's audience",
    action: "",
    tags: ["cleric"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your extensive service has made you a lesser herald of your deity,
          which affords you certain privileges. First, any creature you
          encounter knows instinctively that you speak for your deity. Second,
          if you conduct the commune ritual to contact your deity, you don’t
          have to pay any cost and you automatically get a critical success.
          Third, once per day, you can cast plane shift as a divine innate
          spell, but only to travel to the realm of your deity. When you cast it
          this way, its casting time is 1 minute, your religious symbol is a
          sufficient tuning fork for this spell, and you appear exactly where
          you want to be. If you’re in your deity’s realm due to this spell, you
          can return to the point you left when you cast it by spending a single
          action, which has the concentrate and divine traits.
        </p>
      </>
    ),
  },
  {
    id: 75,
    name: "Dance of intercession",
    action: "three_action",
    tags: ["uncommon", "cleric"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Fists of the Ruby Phoenix Adventure</i>
          <br />
          <br />
          <b>Prerequisites</b> expert in Performance.
          <br />
          <span className="frequency">
            <b>Frequency</b> three times a day.
          </span>
          <br />
          You either performed in or stood witness to the dance used to invoke
          the Celestial Dragon and can harness a sliver of their power. You
          Stride in a dance up to half your Speed, attempting a DC 35
          Performance check. You can perform this dance up to three times per
          day. The second time you do so in the same day, use the degree of
          success one worse than your actual roll on the Performance check. The
          third time in a day, use the degree of success two lower than your
          actual roll.
        </p>
        <p>
          <b>Critical Success</b> You perform the movements of the Dance of
          Intercession so gracefully that you evoke a glimmer of the memory of
          the Celestial Dragon’s awesome power. You cast the 3-action version of
          either 9th-level harm or heal at any point during your Stride. This
          does not use any spell slots.
        </p>
        <p>
          <b>Success</b> As critical success, but the spell is 7th level instead
          of 9th as you stumble through the movements.
        </p>
        <p>
          <b>Failure</b> As critical success, but the spell is 5th level instead
          of 9th as you stumble through the movements.
        </p>
        <p>
          <b>Critical Failure</b> You fail to remember the steps of the dance.
          You gain no additional effect beyond Striding half your Speed, and you
          can’t attempt the Dance of Intercession again until your next daily
          preparations.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Emblazon divinity",
    action: "",
    tags: ["uncommon", "cleric"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Broken Promises</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Emblazon Armament.
          </span>
          <br />
          Your sacred etchings imbue objects with power. It takes you only 1
          minute to emblazon a symbol using Emblazon Armament, and you can have
          up to four symbols emblazoned at a time. Each item can still have only
          one symbol emblazoned upon it, and if you exceed the limit of four,
          the oldest symbol disappears. These symbols can benefit even those who
          don’t follow the deity, provided they aren’t directly opposed (as
          determined by the GM).
        </p>
        <p>
          You can select a different benefit for each emblazoned symbol, chosen
          from any you have from Emblazon Armament or other feats such as
          Emblazon Energy or Emblazon Antimagic.
        </p>
      </>
    ),
  },
  {
    id: 77,
    name: "Marker of miracles",
    action: "",
    tags: ["cleric"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> miraculous spell.
          </span>
          <br />
          You are a conduit for truly deific power. You gain an additional
          10th-level spell slot.
        </p>
      </>
    ),
  },
  {
    id: 78,
    name: "Metamagic channel",
    action: "",
    tags: ["cleric", "concentrate"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Deep understanding of divine revelations into the nature of vital
          essence allows you to freely manipulate the effects of your positive
          or negative energy. Use 1 metamagic action that you can perform that
          normally takes 1 action and can be applied to the harm or heal spell.
          If you use it in this way, its effects apply only to a harm or heal
          spell.
        </p>
      </>
    ),
  },
];
