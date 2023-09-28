import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const InventorFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Built-in tools",
    action: "",
    tags: ["inventor", "modification"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You’ve built tools into your innovation so you can access and use them
          easily. When you take this feat, choose up to two sets of tools you
          own, such as thieves’ tools or healer’s tools, that weigh a total of 2
          Bulk or less. These tools become part of your innovation. The
          innovation’s Bulk doesn’t increase from this addition. As long as you
          are wielding, wearing, or adjacent to your innovation, you have the
          same quick access to these tools as the tools you are wearing, and
          they don’t count against the usual limit of tools you can wear.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Explosive leap",
    action: "one_action",
    tags: ["inventor", "fire", "move", "unstable"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You aim an explosion from your innovation downward to launch yourself
          into the air. You jump up to 30 feet in any direction without touching
          the ground. You must land on a space of solid ground, or else you fall
          after using your next action. As normal for effects where you fall
          after using your next action, you still fall at the end of your turn,
          even if you don’t use any further actions that turn.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, it can take this action
          rather than you.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Haphazard repair",
    action: "one_action",
    tags: ["inventor", "unstable"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You quickly fix your innovation, at the cost of its stability. You
          Repair your innovation almost immediately. You don’t have to place the
          innovation on a flat surface, but you do need to be adjacent to it
          (including holding or wearing it), as well as having a repair kit as
          normal.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "No! No! I created you!",
    action: "reaction",
    tags: ["inventor", "auditory", "concentrate"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> construct companion.
          <br />
          <b>Frequency</b> once per minute.
          <br />
          <span className="frequency">
            <b>Trigger</b> Your construct companion would become confused or
            controlled.
          </span>
          <br />
          You appeal to your construct companion’s bond with its creator to have
          it break free of a controlling effect. Attempt to counteract the
          effect that confused or controlled your construct companion, using
          your Crafting modifier for the counteract check and half your level
          rounded up for the counteract level.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Prototype companion",
    action: "",
    tags: ["inventor"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You have created a construct companion, and while it might not be an
          innovation, it serves as a trustworthy minion. You gain a prototype
          construct companion.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Tamper",
    action: "one_action",
    tags: ["inventor", "manipulate"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You tamper with a foe’s weapon or armor, using a free hand. Choose
          either a weapon held by an enemy in your reach or a suit of armor worn
          by an enemy in your reach. Attempt a Crafting check against the
          enemy’s Reflex DC.
        </p>
        <p>
          <b>Critical Success</b> Your tampering is incredibly effective. If you
          tampered with a weapon, the enemy takes a –2 circumstance penalty to
          attack rolls and damage rolls with that weapon. If you tampered with
          armor, the armor hampers the enemy’s movement, making the enemy
          flat-footed and inflicting a –10-foot penalty to its Speeds. The
          effect lasts until the enemy Interacts to remove it, regardless of
          which one you used.
        </p>
        <p>
          <b>Success</b> Your tampering is temporarily effective. As critical
          success, but the effect ends at the start of your next turn, even if
          the enemy doesn’t Interact to end it.
        </p>
        <p>
          <b>Critical Failure</b> Your tampering backfires dramatically,
          creating a small explosion from your own tools or gear. You take fire
          damage equal to your level.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Variable core",
    action: "",
    tags: ["inventor", "modification"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You adjust your innovation’s core, changing the way it explodes. When
          you choose this feat, select acid, cold, or electricity. Your
          innovation’s core runs on that power source. When using the Explode
          action, or any time your innovation explodes on a critical failure and
          damages you, change the damage type from fire damage to the type you
          chose.
        </p>
        <p>
          If you have the offensive boost class feature and retrain Variable
          Core to a different damage type, you can also switch to a different
          offensive boost that deals the same damage type if you wish.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Collapse armor",
    action: "one_action",
    tags: ["inventor", "manipulate", "modification"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> armor innovation.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wearing your armor innovation, or
            holding it in both hands in its compact form (see text).
          </span>
          <br />
          You’ve modified your armor innovation to collapse into a more compact
          form so you can don or remove it in an instant. If you’re wearing your
          innovation when you Collapse your Armor, you remove it instantly, and
          it compresses into its compact form, which is held in both of your
          hands (if you don’t have both hands available, it falls to the ground
          in an adjacent space). If you’re holding your armor in compact form
          when you take this action, it unfolds back into its armor form onto
          your body.
        </p>
        <p>
          In compact form, your armor innovation is easier to carry, with a Bulk
          1 lower than the Bulk listed for it, to a minimum of light Bulk
          (carried armor normally has a Bulk 1 higher than listed in the armor
          entry).
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Collapse construct",
    action: "one_action",
    tags: ["inventor", "manipulate", "modification"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> construct innovation.
          </span>
          <br />
          You’ve modified your construct companion and built it out of light
          materials, enabling you to collapse it into a carrying case or other
          compact and innocuous form. Either your construct or you (if you’re
          adjacent to it) can Collapse your Construct to turn it into its
          compact form or back into its normal form.
        </p>
        <p>
          In compact form, your construct can’t act but is easily carried, with
          a Bulk of 2 if it’s Small, 4 if it’s Medium, or 8 if it’s Large. The
          compact form has wheels, so you can easily drag it behind you at half
          your Speed (rather than the usual slower Speed for dragging).
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Reverse engineer",
    action: "",
    tags: ["inventor"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> expert in Crafting.
          </span>
          <br />
          You are incredibly skilled at reverse engineering items to learn their
          formulas, or disassembling them just to disable them. You gain a +2
          circumstance bonus to Crafting checks to reverse engineer a formula
          from an item. If you get a critical success on your Crafting check,
          you can opt to both create the formula and reassemble the original
          item at the same time, leaving you with the formula and the item
          instead of the formula and raw materials equal to half the item’s
          value. Furthermore, you can use Crafting instead of Thievery to
          Disable a Device or Pick a Lock.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Searing restoration",
    action: "one_action",
    tags: ["inventor", "fire", "healing", "manipulate", "unstable"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          They told you there was no way that explosions could heal people, but
          they were fools… Fools who didn’t understand your brilliance! You
          create a minor explosion from your innovation, altering the combustion
          to cauterize wounds using vaporized medicinal herbs. You or a living
          creature adjacent to you regains 1d10 Hit Points. In addition, the
          creature you heal can attempt an immediate flat check to recover from
          a single source of persistent bleed damage, with the DC reduction from
          appropriate assistance.
        </p>
        <p>
          At 3rd level, and every 2 levels thereafter, increase the healing by
          1d10.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, it can take this action
          rather than you, though because it’s not a living creature, it can’t
          use the ability on itself.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Advanced construct companion",
    action: "",
    tags: ["inventor"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> construct companion.
          </span>
          <br />
          You’ve upgraded your construct companion’s power and decision-making
          ability. It becomes an advanced construct companion. During an
          encounter, even if you don’t use the Command a Minion action, your
          construct companion can still use 1 action on your turn that round to
          Stride or Strike.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Diving armor",
    action: "",
    tags: ["inventor", "modification"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> armor innovation.
          </span>
          <br />
          You’ve modified your armor with fins, rotors, and other devices to
          make it easy for you to move through the water, plus mechanical gills
          that can help you extract breathable air from water. While wearing
          your armor innovation, you can breathe underwater and gain a swim
          Speed equal to your land Speed.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Dual-form weapon",
    action: "",
    tags: ["inventor", "modification"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> weapon innovation.
          </span>
          <br />
          You’ve built your innovation with replaceable interlocking pieces that
          you can use to transform it into another type of weapon entirely. When
          you select this feat, choose a level 0 or 1st-level simple or martial
          weapon. It must be either a common weapon or another to which you have
          access. This weapon becomes your innovation’s second configuration.
        </p>
        <p>
          Select a new set of weapon modifications for this new configuration.
          You can spend two Interact actions to switch your weapon innovation
          between the two configurations. These actions don’t need to be taken
          consecutively, but if you’ve provided the first and not the second,
          the weapon is non-functional as it is stranded between states. Your
          weapon’s Bulk is always the greater Bulk of the two configurations,
          regardless of which configuration it’s in—if one weapon is smaller
          than the other, you still need to keep any weapon parts on hand. Any
          runes on your weapon innovation don’t affect the second weapon
          configuration.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Gadget specialist",
    action: "",
    tags: ["inventor"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          Rather than just using your gadgets for various boosts and tweaks, you
          also craft a few specific temporary consumable gadgets each day. You
          gain the formulas for three common or uncommon gadgets. Each day
          during your daily preparations, you can create two temporary gadgets
          from your formula book. Gadgets prepared in this way don’t cost you
          any resources to Craft and don’t have any sale value. They are
          temporary items and fall apart the next time you make your daily
          preparations if you haven’t already used them.
        </p>
        <p>
          If you’re a master in Crafting, you can create three gadgets per day,
          and you gain three additional common or uncommon gadget formulas. If
          you’re legendary in Crafting, you can create four gadgets per day, and
          you gain another additional three common or uncommon gadget formulas,
          for a total of nine.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Megaton strike",
    action: "two_action",
    tags: ["inventor"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> armor, construct, or weapon innovation.
          </span>
          <br />
          You activate gears, explosives, and other hidden mechanisms in your
          innovation to make a powerful attack. You make a Strike, dealing an
          extra die of weapon damage. If you’re at least 10th level, increase
          this to two extra dice, and if you’re at least 18th level, increase it
          to three extra dice. The type of Strike you can make depends on your
          innovation.
        </p>
        <ul>
          <li>
            <b>Armor</b> You Strike with a melee unarmed attack or a melee
            weapon. To use a melee weapon for this, you must have prepared it in
            advance with special contraptions when you make your daily
            preparations.
          </li>
          <li>
            <b>Construct</b> Your minion innovation Strikes.
          </li>
          <li>
            <b>Weapon</b> You Strike with your weapon innovation.
          </li>
        </ul>
        <p>
          <b>Unstable Function</b> You put even more force into the Strike,
          though you risk stress fractures to your innovation. Add the unstable
          trait to Megaton Strike. The Strike deals another extra damage die,
          for a total of two extra dice at 4th level, three at 10th level, and
          four at 18th level.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, it can take this action
          rather than you.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Clockwork celerity",
    action: "",
    tags: ["inventor", "manipulate", "unstable"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> armor, construct, or weapon innovation.
          <br />
          <span className="frequency">
            <b>Trigger</b> Your turn begins.
          </span>
          <br />
          You can use unstable clockwork devices in your innovation to push your
          invention to act more quickly. You are quickened for this turn. How
          you can use the extra action depends on your innovation.
        </p>
        <ul>
          <li>
            <b>Armor</b> You can use the extra action to Step, Stride, or use
            another movement action granted by your innovation (such as Swim if
            you have the Diving Armor feat).
          </li>
          <li>
            <b>Construct</b> You can use the extra action to Command your
            construct innovation (or to provide 1 of the actions if you spend 2
            actions to Command your construct).
          </li>
          <li>
            <b>Weapon</b> You can use the extra action to Strike with your
            innovation or Reload your innovation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 18,
    name: "Construct shell",
    action: "",
    tags: ["inventor"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> construct innovation.
          </span>
          <br />
          You’ve adjusted your construct innovation so that when you ride it,
          special plates, hollows, or similar form partial barriers around you
          to add additional protection. You have lesser cover from all attacks
          when mounted on your construct innovation, not just from attacks where
          the construct would be in the way. Additionally, if your construct
          uses an emanation while you’re riding on it, such as Explode, you can
          choose not to be affected by the emanation.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Megavolt",
    action: "two_action",
    tags: ["inventor", "electricity", "manipulate"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You bleed off some electric power from your innovation in the shape of
          a damaging bolt. Creatures in a 20-foot line from your innovation take
          3d4 electricity damage, with a basic Reflex save against your class
          DC. The electricity damage increases by 1d4 at 8th level and every 2
          levels thereafter.
        </p>
        <p>
          <b>Unstable Function</b> You overload and supercharge the voltage even
          higher. Add the unstable trait to Megavolt. The area increases to a
          60-foot line and the damage increases from d4s to d12s.
        </p>
        <p>
          If you have the breakthrough innovation class feature, you can choose
          a 60-foot or 90-foot line for the area when you use an unstable
          Megavolt; if you also have the revolutionary innovation class feature,
          you can choose a 60-foot, 90-foot, or 120-foot line.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, it can take this action
          rather than you.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Visual fidelity",
    action: "",
    tags: ["inventor"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          YYou’ve found a way to use a hodgepodge combination of devices to
          enhance your visual abilities in every situation. You gain darkvision
          and low-light vision, and you can see invisible creatures and objects
          as translucent shapes, though these shapes are indistinct enough to be
          concealed to you.
        </p>
        <p>
          If an effect would give you the blinded condition, the effect must
          attempt a counteract check against your class DC, with your counteract
          level equaling half your level, rounded up. On a failed counteract
          check, you aren’t blinded—your various devices are able to compensate.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Gigaton strike",
    action: "",
    tags: ["inventor"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Megaton Strike.
          </span>
          <br />
          When you use a full-power Megaton Strike, you can knock your foe back.
          When you succeed at your Strike while using an unstable Megaton
          Strike, your target must attempt a Fortitude save against your class
          DC.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature is pushed back 5 feet.
        </p>
        <p>
          <b>Failure</b> The creature is pushed back 10 feet.
        </p>
        <p>
          <b>Critical Failure</b> The creature is pushed back 20 feet.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, this benefit applies on
          its unstable Megaton Strikes.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Incredible construct companion",
    action: "",
    tags: ["inventor"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Advanced Construct Companion.
          </span>
          <br />
          Thanks to your continual tinkering, your construct companion has
          advanced to an astounding new stage of engineering, enhancing all its
          attributes. Your construct companion becomes an incredible construct
          companion.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Manifold modifications",
    action: "",
    tags: ["inventor", "modification"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> initial modification.
          </span>
          <br />
          You’ve modified your innovation using clever workarounds, so you can
          include another initial modification without compromising its
          structure. Your innovation gains an additional initial modification
          from the list for innovations of its type.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Overdrive ally",
    action: "one_action",
    tags: ["inventor", "manipulate"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> Overdrive.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are currently in overdrive.
          </span>
          <br />
          You quickly fling some of your powered-up mechanisms to an ally,
          sharing your benefits with them briefly. Choose an ally within 30
          feet. Until the end of their next turn, that ally’s Strikes deal
          additional damage equal to half your Intelligence modifier, or your
          full Intelligence modifier if you were in critical overdrive. The ally
          doesn’t gain the increased damage from expert, master, or legendary
          overdrive.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Ubiquitous gadgets",
    action: "",
    tags: ["inventor"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Gadget Specialist.
          </span>
          <br />
          They thought you had used up all your devices, but they thought wrong!
          You have a few more gadgets up your sleeve than others expect.
          Increase the number of temporary gadgets you can create each day by 2.
        </p>
        <p>
          <b>Special</b> You can select this feat a second time if you are 14th
          level or higher.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Distracting explosion",
    action: "reaction",
    tags: ["inventor", "manipulate"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> offensive boost.
          <br />
          <span className="frequency">
            <b>Trigger</b> A creature within your reach uses a concentrate
            action.
          </span>
          <br />
          Your enemies think they can concentrate on something else while you’re
          nearby? Oh, you’ll give them a distraction, all right! Make a melee
          Strike against the triggering creature with a weapon or unarmed attack
          that is benefiting from your offensive boost. This Strike doesn’t
          count toward your multiple attack penalty, and your multiple attack
          penalty doesn’t apply to this Strike.
        </p>
        <p>
          <b>Unstable Function</b> You pull out all the stops to create an
          explosive distraction. Add the unstable trait to Distracting
          Explosion. If the attack hits, you disrupt the triggering concentrate
          action.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, it can take this
          reaction instead of you, even though minions can’t normally take
          reactions or act when it’s not their turn. It uses your reaction for
          the turn to do so.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Electrify armor",
    action: "one_action",
    tags: ["inventor", "manipulate"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> armor innovation.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wearing your armor innovation.
          </span>
          <br />
          You electrify your armor to punish foes who dare to attack you. For 1
          round, any creature that touches you, or that hits you with a melee
          unarmed attack or a non-reach melee weapon attack, takes 1d4
          electricity damage. The effect ends if you cease wearing your armor
          innovation.
        </p>
        <p>
          If you have the revolutionary innovation class feature, the damage
          increases to 2d4.
        </p>
        <p>
          <b>Unstable Function</b> You create an unstable chain reaction,
          sending countless sparks dancing across your armor. Add the unstable
          trait to Electrify Armor. The effects last for 1 minute instead of 1
          round, and the damage dice increase from d4s to d12s.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Helpful tinkering",
    action: "one_action",
    tags: ["inventor", "manipulate"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> offensive boost.
          <br />
          <span className="frequency">
            <b>Frequency</b> once per 10 minutes.
          </span>
          <br />
          You don’t just tinker with your own innovation, you fiddle with your
          allies’ weapons as well (for their benefit, of course). Choose an ally
          in your reach and one of their weapons. Attempt a Crafting check
          against a high DC for your level.
        </p>
        <p>
          <b>Success</b> For 1 minute, the chosen ally’s Strikes with the chosen
          weapon gain the same offensive boost your innovation has.
        </p>
        <p>
          <b>Critical Failure</b> Your ally takes damage of the type and amount
          that your offensive boost normally deals on a successful Strike.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Lock on",
    action: "one_action",
    tags: ["inventor"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> construct innovation.
          </span>
          <br />
          Aha! You lock on to your enemy’s weak point to assist your construct
          companion in destroying it. When you Lock On, designate an enemy you
          can see. If your next action is to Command your construct, the
          construct gains a +2 circumstance bonus to attack rolls against the
          designated enemy until the end of the turn. If you use 2 actions for
          the Command, the bonus is instead a +3 circumstance bonus, or a +4
          circumstance bonus if you’re legendary in Crafting.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Boost modulation",
    action: "",
    tags: ["inventor", "manipulate"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> offensive boost.
          </span>
          <br />
          You aren’t satisfied with keeping to just one kind of boost from your
          constant tinkering, so you’ve learned to modulate between several
          possibilities at once. Choose two additional offensive boosts. You can
          use an Interact action to change the offensive boost currently
          affecting your weapon, choosing between the one you chose for the
          class feature and the two you chose for this modification. If your
          weapon has the modular trait, you can swap the offensive boost as part
          of the Interact action you take to use that trait.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Contingency gadgets",
    action: "",
    tags: ["inventor"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Gadget Specialist.
          </span>
          <br />
          You are too brilliant to be caught off guard, and you always have just
          the right gadget for the situation. When you prepare your gadgets
          during your daily preparations, you can choose to leave one of them as
          a contingency gadget that you keep ready for just this situation,
          rather than declaring which gadget you’re making. You can pull the
          contingency gadget out using an Interact action, at which point you
          must choose which gadget you had prepared as a contingency.
        </p>
        <p>
          If you’re legendary in Crafting, you can leave two contingency gadgets
          during your daily preparations, instead of just one.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Deep freeze",
    action: "two_action",
    tags: ["inventor", "cold", "manipulate"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You vent a jet of supercooled fluid from your innovation, damaging a
          foe and slowing it down. Target one creature within 60 feet. That
          creature takes cold damage equal to your level, with effects depending
          on its Reflex save.
        </p>
        <p>
          <b>Critical Success</b> The target is unaffected.
        </p>
        <p>
          <b>Success</b> The target takes half damage and takes a –5-foot status
          penalty to its Speeds for 1 round.
        </p>
        <p>
          <b>Failure</b> The target takes full damage and takes a –10-foot
          status penalty to its Speeds for 1 round.
        </p>
        <p>
          <b>Critical Failure</b> The target takes double damage, is slowed 1
          for 1 round, and takes a –15-foot status penalty to its Speeds for 1
          round.
        </p>
        <p>
          <b>Unstable Function</b> Your innovation discharges an enormous cone
          of supercooled fluid, potentially causing cascading failures. Add the
          unstable trait to Deep Freeze. The ability affects all creatures
          within a 60-foot cone instead of a single target, and it deals cold
          damage equal to double your level instead of equal to your level.
        </p>
        <p>
          If you have the revolutionary innovation class feature, you can choose
          a 60-foot or 90-foot cone when you use an unstable Deep Freeze.
        </p>
        <p>
          <b>Special</b> If your innovation is a minion, it can take this action
          rather than you.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Gigavolt",
    action: "",
    tags: ["inventor"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Megavolt.
          </span>
          <br />
          When you unleash electricity from your innovation, you can bounce it
          off obstacles, creating a field of electric death. When you use
          Megavolt, each time your line of electricity hits a solid barrier,
          such as a wall, it bounces off at an angle of your choice and
          continues until you have reached the full length of the line. Even if
          a creature is in the area from multiple bounces, it takes the damage
          only once.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Gigavolt",
    action: "",
    tags: ["inventor"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Megavolt.
          </span>
          <br />
          When you unleash electricity from your innovation, you can bounce it
          off obstacles, creating a field of electric death. When you use
          Megavolt, each time your line of electricity hits a solid barrier,
          such as a wall, it bounces off at an angle of your choice and
          continues until you have reached the full length of the line. Even if
          a creature is in the area from multiple bounces, it takes the damage
          only once.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Shared overdrive",
    action: "",
    tags: ["inventor"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Overdrive Ally.
          </span>
          <br />
          You’ve experimented enough on your teammates to transfer a substantial
          number of powered-up gizmos to them, enabling one of your allies to
          benefit from the full effects and duration of your Overdrive. The
          first time you use Overdrive Ally during a given Overdrive, the effect
          lasts for the remainder of the duration of your Overdrive, instead of
          just until the end of the target’s next turn. Any further uses of
          Overdrive Ally during the same Overdrive have their normal duration,
          per Overdrive Ally.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Explosive maneuver",
    action: "one_action",
    tags: ["inventor"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> weapon innovation.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your last action was a successful Strike against
            a foe using your weapon innovation.
          </span>
          <br />
          Thanks to a hidden experimental feature you built into your weapon,
          your weapon explosively deploys levers, tangling hooks, or similar
          mechanisms to provide significant assistance when you perform a combat
          maneuver. When you use Explosive Maneuver, choose Grapple, Shove, or
          Trip. Your weapon innovation must have a weapon trait that matches the
          action you chose (for instance, to choose Grapple, your weapon must
          have the grapple trait). You take the chosen action against the same
          foe as your previous successful Strike, using the same multiple attack
          penalty as your previous successful Strike. You still increase your
          multiple attack penalty after the Grapple, Shove, or Trip, as normal.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Paragon companion",
    action: "",
    tags: ["inventor"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Incredible Companion.
          </span>
          <br />
          Your construct companion has reached the pinnacle of form and
          function. Your construct companion becomes a paragon construct
          companion.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Soaring armor",
    action: "",
    tags: ["inventor", "modification"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> armor innovation.
          </span>
          <br />
          Whether through a release of jets of flame, propeller blades, sonic
          bursts, streamlined aerodynamic structure, electromagnetic fields, or
          some combination of the above, you’ve managed to free your innovation
          from the bonds of gravity! While wearing your innovation, you gain a
          fly Speed equal to your land Speed.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Unstable redundancies",
    action: "",
    tags: ["inventor"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You would attempt the flat check for an unstable
            action, but you haven’t rolled the flat check yet.
          </span>
          <br />
          You’ve built triple redundancies into your innovation and added all
          sorts of buffers to protect it from the harm of your unstable
          experiments. You automatically succeed at the triggering flat check.
        </p>
        <p>
          You can’t rely on your Unstable Redundancies again until you spend 10
          minutes setting them back up. If you spend 10 minutes retuning your
          innovation so you can use unstable actions again, you can set up your
          Unstable Redundancies during the same time.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Just the thing!",
    action: "",
    tags: ["inventor"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Frequency</b> once per hour.
          </span>
          <br />
          Need to balance on a razor’s edge, force open an iron door, or
          persuade a dragon to negotiate? Never fear! No matter the situation,
          you always have just the thing. You attempt a skill action that takes
          1 minute or less to complete, using the same number of actions or
          amount of time as normal. However, as you take the action, describe a
          device you pull out and use to accomplish the skill. The specifics of
          how you accomplish this are up to you, but they should fit the
          challenge at hand. For instance, you might use gravitic stabilizers to
          balance on the razor’s edge, a force battering ram gizmo to open the
          iron door, or a device that produces an aroma with the ability to
          pacify wyrms to persuade the dragon. Using an invention in this way
          lets you alter how you calculate the skill check used in the action.
          Instead of the normal skill modifier associated with that skill
          action, you use your Crafting modifier.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Persistent boost",
    action: "",
    tags: ["inventor"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> offensive boost.
          </span>
          <br />
          Your innovation sets foes on fire, covers them in acid, leaves barbed
          thorns behind, or otherwise deals persistent damage to your foes that
          sticks around long after you deliver your boosted attack. When you or
          your construct innovation damage a foe with offensive boost, that foe
          also takes 1d8 persistent damage of the same damage type as the
          offensive boost damage.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "You failed to account for... this!",
    action: "reaction",
    tags: ["inventor"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> A creature you can see targets you with an attack
            against your AC.
          </span>
          <br />
          When your foes try to attack you, you always seem to have some
          outlandish invention you can pull out at the last second to protect
          you from whatever attack they throw at you. Describe a device you’re
          attempting to use to protect yourself from the foe’s attack—for
          instance, when attacked by a shocker lizard’s shock Strike, you might
          pull out a specially grounded lightning rod from that time you tried
          to power an invention by harnessing a thunderstorm! Using an invention
          to defend in this way means that the attack roll for the triggering
          attack targets your Crafting DC instead of your AC.
        </p>
        <p>
          Since you’re using your Crafting DC instead of your AC, any penalties
          to your AC don’t apply, but this doesn’t remove any conditions or
          other effects that are causing you such penalties. For instance, if
          you were flat-footed and used an invention to defend against a sneak
          attack, you’d still take the extra precision damage if you were hit,
          even though the –2 penalty to AC from being flat-footed wouldn’t apply
          to your Crafting DC.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Devastating weaponry",
    action: "three_action",
    tags: ["inventor"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> weapon innovation.
          </span>
          <br />
          You release a volley of projectiles from your weapon, or power it to
          fly in every direction across the battlefield and Strike multiple
          creatures. Make a Strike with your weapon innovation against each foe
          within 30 feet of you. Don’t increase your multiple attack penalty
          until after making all the attacks. If your innovation is a melee
          weapon and any of the attacks are outside your reach, you Release the
          weapon before the Strikes, and it returns to your grasp after all of
          them. If your hands are full when the weapon returns, it falls to the
          ground in your space. As normal, if your weapon innovation requires
          one or more actions to reload between Strikes, you can’t use it to
          make multiple attacks with Devastating Weaponry.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Engine of destruction",
    action: "three_action",
    tags: ["inventor"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> construct innovation.
          </span>
          <br />
          Your construct unleashes a broad swath of devastation by separating
          its limbs, deploying hidden armaments, or using a similar technique to
          wreak havoc. You Command your innovation. Instead of its normal
          actions, it Strides once, then makes a Strike against each foe within
          30 feet of it with a +2 circumstance bonus to its attack rolls. The
          multiple attack penalty doesn’t increase until after the construct
          makes all the attacks.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Negate damage",
    action: "reaction",
    tags: ["inventor"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> armor innovation.
          <br />
          <span className="frequency">
            <b>Trigger</b> You would take damage.
          </span>
          <br />
          Your armor innovation activates various devices you prepared ahead of
          time, and you use one of them to reduce the damage you would take by
          15.
        </p>
        <p>
          <b>Unstable Function</b> You activate all the precautions at once,
          violently repelling the incoming attack to blunt its force. Add the
          unstable trait to Negate Damage and reduce the damage you would take
          by 50.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Full automation",
    action: "",
    tags: ["inventor"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> armor, construct, or weapon innovation.
          </span>
          <br />
          You become so entwined with your innovations that you can use them
          without a second thought. You’re permanently quickened. How you can
          use the extra action depends on your innovation.
        </p>
        <ul>
          <li>
            <b>Armor</b> Your armor responds to the most subtle stimuli to move
            you in the right direction as long as you are wearing it. You can
            use the extra action to Stride, Step, or use a form of movement
            provided by your innovation (such as Fly or Swim).
          </li>
          <li>
            <b>Construct</b> Your ability to command your construct becomes
            instinctive. You can use the extra action to Command your construct
            innovation (or to provide 1 of the actions if you choose to spend 2
            actions to Command your construct).
          </li>
          <li>
            <b>Weapon</b> Your weapon becomes easier to wield with deadly
            efficacy, almost as if it is an extension of your body. It speeds
            effortlessly toward whatever target you choose as long as you are
            holding it. You can use the extra action to Strike with your
            innovation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 46,
    name: "Ubiquitous overdrive",
    action: "",
    tags: ["inventor"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Shared Overdrive.
          </span>
          <br />
          You prepare a variety of incredible gizmos on each of your allies,
          linking them together through careful modification to enable you to
          power them up all at once. During your daily preparations, select up
          to six willing allies. Whenever you Overdrive, you grant the benefits
          of your overdrive to any of these allies you choose who are within 30
          feet of you. The allies don’t gain the increased damage from expert,
          master, or legendary overdrive.
        </p>
      </>
    ),
  },
];
