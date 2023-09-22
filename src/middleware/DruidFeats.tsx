import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const DruidFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Animal companion",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> animal order.
          </span>
          <br />
          You gain the service of a young animal companion that travels with you
          on your adventures and obeys any simple commands you give it to the
          best of its abilities.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Fire lung",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> flame order.
          </span>
          <br />A lifetime of proximity to flames has inured your lungs and eyes
          to smoke. You can breathe normally in areas of ash and smoke without
          risk of suffocation, and you ignore the concealed condition from
          smoke. You need only a successful DC 10 flat check to recover from
          persistent fire damage, rather than DC 15 (and the DC when receiving
          particularly effective assistance is 5 instead of 10).
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Leshy familiar",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> leaf order.
          </span>
          <br />
          You gain a leshy familiar, a Tiny plant (or fungus for a fungus leshy)
          that embodies one of the many spirits of nature. Other than taking the
          form of a plant instead of an animal, this familiar uses all the same
          rules as other familiars, which are detailed in the Familiars section.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Reach spell",
    action: "one_action",
    tags: ["druid", "concentrate", "metamagic"],
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
    id: 5,
    name: "Shore step",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> wave order.
          </span>
          <br />
          The shallows and tide pools have always called to you and let you pass
          unhindered. You ignore difficult terrain resulting from shallow water.
          In addition, if you roll a success on an Acrobatics check to Balance
          on a slippery or wet surface, or on an Athletics check to Swim, you
          get a critical success instead.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Steadying stone",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> stone order.
          </span>
          <br />
          The earth has taught you how to remain unyielding and firm. If you
          roll a success on an Acrobatics check made to Balance on uneven ground
          composed of earth or rock, you get a critical success instead. As long
          as you remain on the ground, you gain a +2 circumstance bonus to your
          Fortitude or Reflex DC against attempts to Shove or Trip you. This
          bonus also applies to saving throws against spells or effects that
          would attempt to knock you prone. If you’re a rock dwarf, this bonus
          increases to +3.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Storm born",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> storm order.
          </span>
          <br />
          You are at home out in the elements, reveling in the power of nature
          unleashed. You do not take circumstance penalties to ranged spell
          attacks or Perception checks caused by weather, and your targeted
          spells don’t require a flat check to succeed against a target
          concealed by weather (such as fog).
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Verdant weapon",
    action: "",
    tags: ["druid", "exploration"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You cultivate a seed that can sprout into a wooden staff, vine whip,
          or another weapon. You spend 10 minutes focusing primal energy into a
          seed, imprinting it with the potential of a single level 0 weapon you
          are trained with and that has no mechanical parts or metal components.
          When holding the imprinted seed, you can spend a single Interact
          action to cause it to immediately grow into that weapon; a second
          Interact action returns it to seed form. Your verdant weapon functions
          as the imprinted weapon and can be etched with runes or affixed with
          talismans as normal, which are suppressed when the weapon is in seed
          form. It also becomes a primal focus.
        </p>
        <p>
          You can have only one verdant seed at a time. If you prepare a second,
          your first verdant seed immediately becomes a mundane specimen; any
          runes on the previous seed that are valid for the new seed transfer
          between them at no cost, but you lose any inapplicable runes unless
          you transfer them to a runestone or another weapon.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Widen spell",
    action: "one_action",
    tags: ["druid", "manipulate", "metamagic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You manipulate the energy of your spell, causing it to spread out and
          affect a wider area. If the next action you use is to Cast a Spell
          that has an area of a burst, cone, or line and does not have a
          duration, increase the area of that spell. Add 5 feet to the radius of
          a burst that normally has a radius of at least 10 feet (a burst with a
          smaller radius is not affected). Add 5 feet to the length of a cone or
          line that is normally 15 feet long or smaller, and add 10 feet to the
          length of a larger cone or line.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Wild shape",
    action: "",
    tags: ["druid"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> wild order.
          </span>
          <br />
          You are one with the wild, always changing and adapting to meet any
          challenge. You gain the wild shape order spell, which lets you
          transform into a variety of forms that you can expand with druid
          feats.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Call of the wind",
    action: "",
    tags: ["druid"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You call upon the creatures of nature to come to your aid. You can
          spend 10 minutes in concert with nature to replace one of the spells
          you’ve prepared in one of your druid spell slots with a summon animal
          or summon plant or fungus spell of the same level.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Enhanced familiar",
    action: "",
    tags: ["druid"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> a familiar.
          </span>
          <br />
          You infuse your familiar with additional primal energy, increasing its
          abilities. You can select four familiar or master abilities each day,
          instead of two.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Order explorer",
    action: "",
    tags: ["druid"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You have learned the secrets of another druidic order, passing
          whatever rites of initiation that order requires and gaining access to
          its secrets. Choose an order other than your own. You gain a 1st-level
          feat that lists that order as a prerequisite, and you are now a member
          of that order for the purpose of meeting feat prerequisites. If you
          commit acts anathema to your new order, you lose all feats and
          abilities requiring that order but retain your other druid feats and
          abilities. You don’t gain any of the other benefits of the order you
          chose.
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times. Each time you
          do, you must choose a different order other than your own.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Poison resistance",
    action: "",
    tags: ["druid"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your affinity for the natural world grants you protection against some
          of its dangers. You gain poison resistance equal to half your level,
          and you gain a +1 status bonus to saving throws against poisons.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Cryptic spell",
    action: "one_action",
    tags: ["druid", "concentrate", "manipulate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re in natural terrain.
          </span>
          <br />
          You hide your magic in the croak of a frog, in the sway of the trees,
          in the howl of the wind, and the flicker of the will-o’-wisp. If the
          next action you take is to Cast a Spell, attempt a Nature check
          against all observers’ Perception DCs. If you succeed at your check
          against an observer’s Perception DC, that observer doesn’t notice that
          you’re Casting a Spell, even though verbal, somatic, and material
          components are usually noticeable, and spells normally have sensory
          manifestations that would make spellcasting obvious to those nearby.
          All of these are instead hidden in the natural sights and sounds of
          the environment.
        </p>
        <p>
          This ability hides only the spell’s spellcasting actions and
          manifestations, not its effects, so an observer might still see you
          transform into a giant bear.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Elemental summons",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You can call the four elements to you. You can spend 10 minutes in
          concert with nature to replace one of the spells you’ve prepared in
          one of your druid spell slots with a summon elemental spell of the
          same level.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Fire resistance",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> flame order.
          </span>
          <br />
          Your connection to heat and flame means that fire is reluctant to
          bring its full force to bear against you. You gain fire resistance
          equal to half your level, and you gain a +1 circumstance bonus to
          saving throws against fire effects.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Form control",
    action: "one_action",
    tags: ["druid", "manipulate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Strength 14, Wild Shape.
          </span>
          <br />
          With additional care and effort, you can take on an alternate form for
          a longer period of time. If your next action is to cast wild shape,
          wild shape's spell level is 2 lower than normal (minimum 1st level),
          but you can remain transformed for up to 1 hour or the listed duration
          (whichever is longer). You can still Dismiss the form at any time, as
          permitted by the spell.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Leshy familiar secrets",
    action: "",
    tags: ["druid", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> leaf order.
          </span>
          <br />
          The leaf order’s secrets allow your familiar to take advantage of its
          leshy form. You can select one additional familiar ability each day,
          which must be one of the following leshy familiar abilities. You can’t
          select more than one leshy familiar ability at a time.
        </p>
        <ul>
          <li>
            <b>Grasping Tendrils</b> Your familiar can extend vines or similar
            tendrils, increasing its reach to 15 feet.
          </li>
          <li>
            <b>Purify Air</b> Your familiar recycles air, providing enough
            oxygen for a Medium creature in areas with stale air, such as a
            sealed chamber or extradimensional space. If the leshy is within the
            area of an inhaled poison effect or an effect that relies on smell,
            creatures within a 15-foot emanation from the leshy gain a +2
            circumstance bonus to their saving throws against the effect.
          </li>
          <li>
            <b>Verdant Burst</b> When your familiar dies, it releases its primal
            energy to cast the 3-action version of heal, heightened to a level 1
            lower than your highest-level spell slot. The heal spell gains a
            status bonus equal to twice the spell’s level to the Hit Points it
            restores to plants. You must be able to cast 2nd-level spells using
            spell slots to select this familiar ability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 20,
    name: "Mature animal companion",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Animal Companion.
          </span>
          <br />
          Your animal companion grows up, becoming a mature animal companion,
          which grants it additional capabilities. See the animal companion
          rules for more information. Your animal companion is better trained
          than most. During an encounter, even if you don’t use the Command an
          Animal action, your animal companion can still use 1 action on your
          turn that round to Stride or Strike.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Natural swimmer",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> wave order.
          </span>
          <br />
          Water flows around you, letting you cut through the waves as if born
          to it. You gain a swim Speed of 15 feet. If you already have a
          permanent swim Speed, swimming up or down isn’t difficult terrain.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Order magic",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Order Explorer.
          </span>
          <br />
          You have delved deeper into the teaching of a new order, gaining
          access to a coveted order spell. Choose an order you have selected
          with Order Explorer. You gain the initial order spell from that order.
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times. Each time you
          do, you must choose a different order you have selected with Order
          Explorer.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Sheltering cave",
    action: "",
    tags: ["druid", "conjuration", "earth", "exploration", "primal"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <b>Prerequisites</b> stone order.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re standing on ground composed of earth,
            stone, or a similar material.
          </span>
          <br />
          You spend 10 minutes communing with spirits of earth and stone,
          requesting shelter. At the end of this time, the earth rises and
          opens, forming a small cave or earthen mound 20 feet in diameter and
          10 feet high. This cave has the structure trait and the same
          restrictions as structures created by magic items. The cave has a
          single entrance and provides shelter from the elements. The cave
          remains for 12 hours or until you spend 10 minutes coaxing the earth
          to close.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Thousand faces",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Wild Shape.
          </span>
          <br />
          Your form is as mutable as the weather, changing to meet your whim.
          You add the forms listed in humanoid form to your wild shape list.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Woodland stride",
    action: "",
    tags: ["druid"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> leaf order.
          </span>
          <br />
          You can always find a path, almost as if foliage parted before you.
          You ignore any difficult terrain caused by plants and fungi, such as
          bushes, vines, and undergrowth. Even plants and fungi manipulated by
          magic don’t impede your progress.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Advanced elemental spell",
    action: "",
    tags: ["druid"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> flame order, stone order, storm order, or wave
            order.
          </span>
          <br />
          Your connection to one of the great elemental aspects of nature
          deepens, allowing you further control over its powers. You gain the
          advanced order spell associated with your order: if you’re a member of
          the flame order, you gain combustion; if you’re a member of the stone
          order, you gain stone lance; if you’re a member of the storm order,
          you gain powerful inhalation; if you’re a member of the wave order,
          you gain pulverizing cascade. Increase the number of Focus Points in
          your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Current spell",
    action: "one_action",
    tags: ["druid", "abjuration", "concentrate", "metamagic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          As you use your magic to manipulate air or water, you divert some of
          its currents to form a barrier around you. If your next action is to
          Cast a Spell with the air or water trait, until the start of your next
          turn, you gain a +1 circumstance bonus to AC or a +2 circumstance
          bonus against ranged attacks. This effect has the air or water trait,
          or both, depending on the traits of the spell you cast. You also gain
          a +1 circumstance bonus to all saves against effects with the air
          trait, water trait, or both until the start of your next turn,
          depending on the spell’s traits.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Green empathy",
    action: "",
    tags: ["druid"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> leaf order.
          </span>
          <br />
          You can communicate with plants and fungi on a basic level and use
          Diplomacy to Make an Impression on them and to make very simple
          Requests of them. Non-creature plants and fungi typically can’t
          fulfill most requests you might ask of them unless you have access to
          other magic such as speak with plants. Because of your affiliation
          with the leaf order, plants and fungi have a sense that you support
          them, so you gain a +2 circumstance bonus on your check to Make a
          Request of a plant or fungus using Green Empathy.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Insect shape",
    action: "",
    tags: ["druid"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Wild Shape.
          </span>
          <br />
          Your understanding of life expands, allowing you to mimic a wider
          range of creatures. Add the forms in insect form to your wild shape
          list. Whenever you use wild shape to polymorph into the non-flying
          insect form listed in pest form, the duration is 24 hours instead of
          10 minutes.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Steady spellcasting",
    action: "",
    tags: ["druid"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
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
    id: 31,
    name: "Storm retribution",
    action: "reaction",
    tags: ["druid"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> storm order, tempest surge order spell.
          <br />
          <b>Trigger</b> An opponent adjacent to you critically hits you with a
          melee weapon or melee unarmed attack.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have at least 1 available Focus Point.
          </span>
          <br />
          You lash out, directing a burst of storming fury toward a creature
          that has harmed you. You cast tempest surge on the triggering opponent
          and push that creature, moving it 5 feet away from you if it fails its
          Reflex save, or 10 feet if it critically fails. This movement is
          forced movement.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Can't you see",
    action: "",
    tags: ["druid", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Occultism, expert in Stealth.
          </span>
          <br />
          The eye rebels, the mind recoils—no matter how much those who can see
          you try to explain what’s there, their friends’ gazes just skitter
          over you, like a bird afraid to land. A character who attempts to
          Point Out your location must attempt a DC 14 flat check. If they fail,
          their allies misunderstand them and aren’t sure where you are. On a
          critical failure, their allies think they pointed you out in a
          different location entirely, chosen by the GM. Similarly, when a
          creature critically fails to Seek you while you’re hidden to or
          undetected by it, it thinks you’re in a different location chosen by
          the GM. In either case, you appear to be hidden to a creature that
          thinks you’re in a different location, though you’re actually
          undetected by it for targeting and further uses of the Seek action.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Deimatic display",
    action: "one_action",
    tags: ["druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Intimidation.
          </span>
          <br />
          Imitating animal threat displays, you make yourself appear larger and
          more imposing. Roll one Intimidation check to Demoralize and compare
          the result to the Will DC of each animal, fungus, and plant creature
          in a 15-foot cone. When you do, Demoralize gains the visual trait, and
          creatures are affected if they can see you. You don’t take a penalty
          if the creature doesn’t understand your language.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Eerie environs",
    action: "",
    tags: ["druid", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Intimidation, trained in Stealth.
          </span>
          <br />
          The natural world can be scary to those not used to it—and you make it
          scarier still. If you’re hidden from a creature, you can attempt to
          Demoralize it without losing your hidden condition—imitating the
          sounds of strange beasts or causing the foliage to rustle menacingly.
          When you do so, you don’t take a penalty to your check if the target
          doesn’t understand your language.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Eerie traces",
    action: "",
    tags: ["druid", "concentrate", "exploration", "move", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Intimidation, trained in Survival.
          </span>
          <br />
          The natural world can be scary to those not used to it—and you make it
          scarier still. If you’re hidden from a creature, you can attempt to
          Demoralize it without losing your hidden condition—imitating the
          sounds of strange beasts or causing the foliage to rustle menacingly.
          When you do so, you don’t take a penalty to your check if the target
          doesn’t understand your language.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Ferocious shape",
    action: "",
    tags: ["druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Wild Shape.
          </span>
          <br />
          You have mastered the shape of ferocious dinosaurs. Add the forms
          listed in dinosaur form to your wild shape list. Whenever you use wild
          shape to take a form that grants you a specific Athletics modifier,
          you gain a +1 status bonus to your Athletics checks.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Fey caller",
    action: "",
    tags: ["druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You have learned some of the tricks the fey use to bend primal magic
          toward illusions and trickery. Add illusory disguise, illusory object,
          illusory scene, and veil to your spell list as primal spells.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Fiery retort",
    action: "reaction",
    tags: ["druid", "evocation", "fire"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Secrets of Magic</i>
          <br />
          <br />
          <b>Prerequisites</b> flame order.
          <br />
          <b>Trigger</b> An opponent adjacent to you hits you with a melee
          weapon or a melee unarmed attack.
          <br />
          <span className="frequency">
            <b>Frequency</b> once per minute.
          </span>
          <br />
          Ignoring your pain, you sear your attacker with a wave of flame. The
          triggering opponent takes fire damage equal to your level.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Forgotten presence",
    action: "",
    tags: ["uncommon", "druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          The world conspires to keep you forgotten and unnoticed—memories
          cloud, ink stains out your name in ledgers, and portraits of you crack
          and warp over your face. Characters attempting to Recall Knowledge
          about you take a –2 circumstance penalty. Add modify memory to your
          spell list as a primal spell.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Incredible companion",
    action: "",
    tags: ["druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Mature Animal Companion.
          </span>
          <br />
          Your animal companion continues to grow and develop. It becomes a
          nimble or savage animal companion (your choice), gaining additional
          capabilities determined by the type of companion.
        </p>
      </>
    ),
  },
];
