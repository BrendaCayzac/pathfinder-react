import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const ExemplarFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Leap the falls",
    action: "",
    tags: ["exemplar"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          Reinforcing your legs with divine energy, you can leap the battlefield
          as powerfully as a salmon clearing a waterfall. Your body ikon gains
          the following ability.
        </p>
        <p>
          <b>Immanence</b> You gain the Powerful Leap and Quick Jump skill
          feats.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Sanctified soul",
    action: "",
    tags: ["exemplar"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          You’ve drawn a line in the sand in the cosmic struggle between good
          and evil and chosen a side. You gain either the holy trait or the
          unholy trait. All your exemplar abilities that deal spirit damage gain
          the sanctified trait, allowing you to apply your holy or unholy trait
          to them to better affect your chosen enemies.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Twin stars",
    action: "one_action",
    tags: ["exemplar"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You have a one-handed weapon ikon.
          </span>
          <br />
          Your divine spark embodies a primordial duality, and your weapon ikon
          splits itself accordingly into two corresponding halves. You split
          your weapon ikon into two copies of itself; these copies are identical
          except for one mirrored feature—such as a sun motif on one and a moon
          motif on another—and both have the twin trait. You can use this
          ability again to fuse the two halves back into their original form. As
          these are both manifestations of the same object, your divine spark
          empowers the two halves as if they were a single ikon.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Vow of mortal defiance",
    action: "one_action",
    tags: ["exemplar", "auditory", "concentrate", "linguistic", "mental"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> You are not sanctified with the holy or unholy
            trait.
          </span>
          <br />
          Having seen the wreckage left by the gods and their servitors as they
          play in their great war of good and evil, you’ve come to the only
          reasonable conclusion: that they all must be cut from their silken
          thrones. You swear a vow to defeat one creature within 60 feet that
          has the holy or unholy trait. The first time each round that you deal
          damage to that creature, you deal an additional 1d6 spirit damage. You
          cannot use Vow of Mortal Defiance again until your or the target is
          defeated, flees, or the encounter ends.
        </p>
        <p>
          <b>Special</b> If you take this feat, you can’t become sanctified with
          the holy or unholy trait. Retraining out of this feat typically
          requires a major change of philosophy.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Claim initiate domain",
    action: "",
    tags: ["exemplar"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          While domain spells usually come from a deity, you’ve learned to tap
          the properties of your own divine spark to manifest domain magic.
          Select any one common domain—a subject of particular interest or
          importance to you—from the list on page 39 of Player Core. You gain
          the initial domain spell for that domain.
        </p>
        <p>
          Domain spells are a type of focus spell. It costs 1 Focus Point to
          cast a focus spell, and you start with a focus pool of 1 Focus Point.
          You refill your focus pool during your daily preparations, and you can
          regain 1 Focus Point by spending 10 minutes using the Refocus activity
          to draw energy from your inexhaustible divine spark and convert it
          into mortal spellcasting energy.
        </p>
        <p>
          Focus spells are automatically heightened to half your level rounded
          up, much like cantrips. Focus spells don’t require spell slots, and
          you can’t cast them using spell slots. Certain feats give you more
          focus spells. The maximum Focus Points your focus pool can hold is
          equal to the number of focus spells you have, but can never be more
          than 3 points. The full rules for focus spells appear on page 298 of
          Player Core.
        </p>
        <p>
          <b>Special</b> You can select this feat multiple times, selecting a
          different domain each time and gaining its domain spell.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Thorns of mortality",
    action: "",
    tags: ["exemplar", "void"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          By channeling your divinity into a creature along with a strike, you
          can disrupt their ability to recover. Your weapon ikon gains the
          following ability.
        </p>
        <p>
          <b>Immanence</b> When you successfully damage an enemy with your
          weapon ikon, your power lingers within them, taking the form of barbs
          and thorns that dig in to prevent healing. When the target would
          regain Hit Points, such as from a healing effect or an ability like
          fast healing or regeneration, it must attempt a Will save against your
          class DC to determine the effects, and then the barbs dissipate. The
          barbs also dissipate after 1 minute.
        </p>
        <p>
          <b>Success</b> The creature regains the full number of Hit Points that
          would be healed.
        </p>
        <p>
          <b>Failure</b> The creature regains only half the number of Hit
          Points.
        </p>
        <p>
          <b>Critical Failure</b> The creature does not regain Hit Points.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Hurl at the horizon",
    action: "",
    tags: ["exemplar"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your weapon ikon is a thrown or melee weapon.
          </span>
          <br />
          Your weapon flies from your hand as if propelled under its own power.
        </p>
        <p>
          <b>Immanence</b> Your weapon gains the thrown 15 feet trait, or
          increases its thrown distance by 10 feet if it already has the thrown
          trait.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Only the worthy",
    action: "",
    tags: ["exemplar"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          You can designate your ikons as movable by only your own hand, leaving
          them fixed in place as surely as if they were lodged in stone.
          Whenever you Release either your worn or weapon ikon, you can spend an
          action to command it to remain motionless. While motionless, the ikon
          can be moved only if 8,000 pounds of pressure are applied to it or if
          a creature uses Athletics to Force Open the ikon with a DC equal to
          your class DC. You can Release your ikon over an adjacent prone enemy
          to hold them down with the ikon’s motionlessness—while so Released,
          you can’t use the ikon, but the enemy must succeed at the Athletics
          check to Stand or to move. The ikon automatically flies back to your
          hand when the effect is broken or if you spend an Interact action to
          hold out a hand and draw it back.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Through the needle's eye",
    action: "",
    tags: ["exemplar"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your weapon ikon is a ranged weapon.
          </span>
          <br />
          Your shot flies with the perfection your will demands.
        </p>
        <p>
          <b>Transcend—Blinding of the Needle</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          Make a Strike with your weapon ikon. If that Strike is successful, the
          target must succeed at a Fortitude save against your class DC or
          become blinded for 1 round or until they use an Interact action to
          clear the blood from their vision.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Binding serpents celestial arrow",
    action: "",
    tags: ["exemplar"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your weapon ikon is ranged or has the thrown
            trait.
          </span>
          <br />
          As you prepare to fire your weapon, you invoke divine serpents that
          bind your enemies. Your weapon ikon gains the following ability.
        </p>
        <p>
          <b>Transcend—Coiling Serpent</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          Make a Strike with your weapon ikon. If the Strike successfully deals
          damage, the target must succeed at a Reflex save against your class DC
          or the arrow transforms into a multitude of ethereal snakes that coil
          around the target, immobilizing it until it succeeds at an Escape
          attempt against your class DC.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Motionless Cutter",
    action: "",
    tags: ["exemplar"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your weapon ikon is a melee weapon that deals
            slashing damage.
          </span>
          <br />
          Your weapon is so sharp even an insect alighting upon its motionless
          blade would be severed. Your weapon ikon gains the following ability.
        </p>
        <p>
          <b>Transcend—Severing Four Dragonfly Wings</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          Make a Strike with your weapon ikon. If that Strike is successful, you
          can immediately make an additional Strike against another target
          within your reach; your multiple attack penalty does not apply to this
          Strike, but you take a –2 penalty to the attack roll for each other
          attack you have made this turn. You can continue making Strikes in
          this manner until you have made a total of four Strikes or you miss
          with a Strike, whichever comes first.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Reactive Strike",
    action: "reaction",
    tags: ["exemplar"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> A creature within your reach uses a manipulate action
            or a move action, makes a ranged attack, or leaves a square during a
            move action it’s using.
          </span>
          <br />
          You swat a foe that leaves an opening. Make a melee Strike against the
          triggering creature. If your attack is a critical hit and the trigger
          was a manipulate action, you disrupt that action. This Strike doesn’t
          count toward your multiple attack penalty, and your multiple attack
          penalty doesn’t apply to this Strike.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Aditional ikon",
    action: "reaction",
    tags: ["exemplar"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          Your story has grown rich enough that three ikons can’t contain its
          full complexity. You gain a fourth ikon, which can be of any type.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Claim advanced domain",
    action: "",
    tags: ["exemplar"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Claim Initiate Domain.
          </span>
          <br />
          Your meditation into your own divine spark has unlocked deeper domain
          magic. You gain an advanced domain spell from one of your domains
          (pages 372–381 of Player Core).
        </p>
        <p>
          <b>Special</b>
          You can select this feat multiple times. Each time, you must select a
          different advanced domain spell from a domain for which you have an
          initial domain spell.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Dominion signifier",
    action: "",
    tags: ["exemplar"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> dominion epithet.
          </span>
          <br />
          Your weapon gains an embellishment that further underscores your
          dominion over godly aspects. You gain the signifier associated with
          your dominion epithet below, which expands the types of damage that
          you can substitute spirit damage for (and what traits replace the
          spirit trait).
        </p>
        <ul>
          <li>
            <b>Born of the Bones of the Earth</b> An obsidian shard emits
            streams of lava that deal fire damage (earth, fire).
          </li>
          <li>
            <b>Restless as the Tide</b> Sea stone or salt rime increases the
            salinity of your water attacks, causing them to instead deal acid
            damage (acid, water).
          </li>
          <li>
            <b>Peerless under Heaven</b> Grim notches or stains channel the
            grudge of the slain, dealing void damage (void).
          </li>
          <li>
            <b>Whose Cry Is Thunder</b> A clear diamond or oak leaf calls
            booming thunder that deals sonic damage (sonic).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 16,
    name: "Fish from the falls' edge",
    action: "reaction",
    tags: ["exemplar", "healing", "vitality"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <b>Trigger</b> A living creature within 30 feet would die.
          <br />
          <span className="frequency">
            <b>Frequency</b> once per day.
          </span>
          <br />
          Seeing your ally fall, you let out a cry, sending your divine spark to
          them temporarily to keep them from tumbling down the River of Souls.
          You prevent the triggering creature from dying and restore 5d8 Hit
          Points to them. The ally is invigorated by the touch of your divine
          power, gaining a +1 status bonus to their saving throws and AC for 1
          round. Your divine spark remains with your ally, preventing you from
          gaining any of your ikons’ immanence effects until the start of your
          next turn, when it returns to an ikon of your choice.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Journey of the sky chariot",
    action: "",
    tags: ["exemplar"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          Small wings, flaming wheels, or another signifier of flight sprout
          from your worn ikon as it gains the power to lift you from the ground.
          Your ikon gains the following immanence effect.
        </p>
        <p>
          <b>Immanence</b> You gain a fly Speed of 20 feet.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Mated birds in paired flight",
    action: "",
    tags: ["exemplar"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> You have two weapon ikons, and both ikons have
            the thrown trait.
          </span>
          <br />
          Your ikons bond like a pair of one-winged birds.
        </p>
        <p>
          <b>Immanence</b> As long as you hold one ikon, the other will return
          to find its partner. Both ikons gain the effects of the returning
          rune.
        </p>
        <p>
          <b>Transcend—Rejoin in Flight</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          You throw your weapon ikons to either side of a creature, and they
          seek each other out, converging on the target. Make two thrown Strikes
          against a target within the first range increment of your weapon
          ikons, each at your current multiple attack penalty. The target is
          flanked for both attacks (typically making them off-guard against both
          attacks), and if both hit, the target also takes an additional die of
          weapon damage. The weapons then return to your hand.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Compliant gold",
    action: "",
    tags: ["exemplar"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your weapon ikon is a melee weapon.
          </span>
          <br />
          You can command your weapon to shrink or grow, for convenience or
          power. Even when your ikon is not empowered, you can shrink it to a
          negligible size and keep it tucked behind an ear, in your hair, or in
          a similar discreet location. You can shrink your weapon or regrow it
          to its normal size as part of drawing or stowing the weapon normally.
        </p>
        <p>
          <b>Immanence</b> Your ikon gains the reach trait. If it already had
          the reach trait, it instead increases your reach by an additional 10
          feet, instead of the usual additional 5 feet.
        </p>
        <p>
          <b>Transcend—Topple the Pillar of Heaven</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          Your ikon extends to an impossible length, striking all its way. You
          deal 6d8 damage to all creatures in a 60-foot line, with a basic
          Reflex save against your class DC. The damage type matches that of
          your weapon. At 14th level and every two levels thereafter, the damage
          increases by 1d8.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Extract vow of nonviolence",
    action: "two_action",
    tags: ["exemplar", "auditory", "concentrate"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          You entice or threaten a weapon, making it swear not to harm you.
          Attempt a Diplomacy check to Request or an Intimidation check to
          Demoralize against one weapon within 60 feet—even though most weapons
          are inanimate and mindless, your words somehow still can affect it as
          if it were living and you shared a language. The DC for this check is
          the Will DC of the creature wielding the weapon or a moderate DC for
          the weapon’s level. The object is then temporarily immune to Extract
          Vow of Nonviolence for one day.
        </p>
        <p>
          <b>Critical Success</b> The object swears not to hurt you. You gain
          resistance to all damage dealt by that specific weapon for 10 minutes
          as the weapon attempts to mitigate harm to you. The resistance is
          equal to half your level.
        </p>
        <p>
          <b>Success</b> As critical success, but each time the weapon damages
          you, the duration of the effect decreases by 1 minute.
        </p>
        <p>
          When you gain this feat, choose cold iron, darkwood, dawnsilver, or
          silver. For some reason—perhaps because you underestimate this
          material, or because you think it a friend—you are forever unable to
          use Extract Vow of Nonviolence on objects composed of the chosen
          material.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Warped by rage",
    action: "",
    tags: ["exemplar", "morph"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          Your rage courses through your body, transforming you into a beast of
          battle. Your body ikon gains the following ability.
        </p>
        <p>
          <b>Immanence</b> You gain the effects of a 4th-rank enlarge.
        </p>
        <p>
          <b>Transcend—Spasm of the Berserker</b>{" "}
          <img
            src={require("../assets/img/one_action.png")}
            alt="one action icon"
          />{" "}
          (morph) Your body warps beyond recognition into a powerful, one-eyed
          form. You remain under the effects of enlarge and also gain the
          effects of a 6th-rank moon frenzy until the end of your next turn,
          except that you can’t attempt to end the effect early.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Destined victory",
    action: "",
    tags: ["exemplar"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          You demand a battle against your chosen enemy. Your worn ikon gains
          the following abilities.
        </p>
        <p>
          <b>Immanence</b> Whenever an enemy successfully Strikes you with a
          melee weapon, you gain a +2 status bonus to your AC against the next
          attack from that enemy before the start of your next turn.
        </p>
        <p>
          <b>Transcend—Only You and I</b>{" "}
          <img
            src={require("../assets/img/one_action.png")}
            alt="one action icon"
          />{" "}
          You draw you foe into a fated conflict, one you know you’ll win.
          Choose an enemy within your reach. Until the end of your next turn,
          that enemy gains a +2 circumstance bonus to attack rolls it makes
          against you, but it must attempt a Will save whenever it tries to move
          away from you, Strike a target other than you, or Cast a Spell that
          doesn’t include you as a target. On a failure, the target loses the
          action or actions related to the failed attempt. Whenever the enemy
          misses you with a Strike while this effect is active, you heal 1d8+5
          Hit Points.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Infinite blades celestial arrow",
    action: "",
    tags: ["exemplar"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b>
            Your weapon ikon is a ranged weapon or a melee weapon with the
            thrown trait.
          </span>
          <br />
          Each shot you fire multiplies itself with spiritual blades, rings, and
          other missiles that shower upon your foes. Your weapon ikon gains the
          following abilities.
        </p>
        <p>
          <b>Immanence</b> Whenever you successfully Strike an enemy with your
          weapon ikon, up to two enemies adjacent to the target take spirit
          damage equal to your weapon ikon’s damage die as they are struck by
          duplicated missiles.
        </p>
        <p>
          <b>Transcend—Heaven Rains an Ending</b>{" "}
          <img
            src={require("../assets/img/three_action.png")}
            alt="three action icon"
          />{" "}
          You fire an arrow that multiplies into a dense cloud of weapons. Make
          a ranged Strike against each enemy you are aware of within your
          weapon’s first range increment. Each attack counts toward your
          multiple attack penalty, but do not increase your penalty until you
          have made all your attacks. All damage dealt by these Strikes is
          spirit damage.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Seven-colored cosmic bridge",
    action: "",
    tags: ["exemplar"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          Your divine spark shines in a riot of shimmering colors, capable of
          carrying you through the world as fast as light itself. Your weapon
          ikon gains the following abilities.
        </p>
        <p>
          <b>Immanence</b> (light, teleportation) Your weapon scatters
          rainbow-colored light across nearby surroundings, each a possible
          destination. When you successfully Strike an enemy, you can choose to
          teleport to an unoccupied location within 10 feet as a free action.
        </p>
        <p>
          <b>Transcend—Fleeting Arc through Heaven and Earth</b>{" "}
          <img
            src={require("../assets/img/three_action.png")}
            alt="three action icon"
          />{" "}
          (light, spirit, teleportation, transcendence) You swing your weapon in
          a wide arc, releasing a blazing rainbow that deals 8d6 spirit damage
          and 8d6 damage of the same type as your weapon to all enemies in a
          60-foot cone, with a basic Fortitude save against your class DC. As
          the rainbow ripples out, you use it as a bridge to teleport to any
          location within the effect’s area.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Strike rivers, seize winds",
    action: "",
    tags: ["exemplar"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <span className="frequency">
            <b>Frequency</b> once per hour, see text.
          </span>
          <br />
          Through sheer physical force, you can wrestle a river, snare the
          winds, punch a hole to the molten center of the earth, or create other
          weather disturbances via nothing but your own strength. You can create
          each of the following spell effects, but you can’t create effects more
          than once per hour and you can’t perform a given effect more than once
          per day: 4th rank hydraulic torrent, 5th rank control water, 6th rank
          howling blizzard, 7th rank volcanic eruption, 8th rank punishing
          winds.
        </p>
        <p>
          Creating the effects requires the same type and number of actions as
          Casting the Spell, and they use the higher of your class DC or spell
          DC when appropriate. Because you are creating these effects with your
          godly might rather than Casting a Spell, they can’t be dispelled or
          countered.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Eternity-incinerating blaze",
    action: "",
    tags: ["exemplar", "spirit", "void"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          The blaze of your divine spark is hot enough that it burns in not just
          the present but the past and future as well. Your weapon ikon gains
          the following abilities.
        </p>
        <p>
          <b>Immanence</b> (spirit, void) Your weapon burns away at the target’s
          future. On a successful critical hit with the weapon, the target
          becomes doomed 1 or increases its doomed condition by 1. If the
          target’s maximum dying value is reduced to 0 by this ability, it
          immediately dies in a flash of spiritual fire that reduces its body to
          ash.
        </p>
        <p>
          <b>Transcend—Burn out of Time</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          (spirit, transcendence, void) An impossible amount of energy blazes in
          a sphere above you before compressing itself into your weapon. Strike
          one creature. The Strike deals an additional 3d8 spirit damage and 3d8
          void damage. If the creature is reduced to 0 Hit Points, it’s
          immediately killed: not in the present, but in the recent past. This
          temporal destruction erases the consequences of their recent actions;
          if a creature died within the last round as a result of the
          incinerated target’s actions, that creature is returned to life with
          5d8 Hit Points at the location that it died as its death is
          retroactively undone.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Sunwrecker",
    action: "",
    tags: ["exemplar"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          Your weapon is capable of striking any light out of the sky. Your
          weapon ikon gains the following abilities
        </p>
        <p>
          <b>Immanence</b> (darkness) On a successful critical hit with the
          weapon, it creates a 2nd-rank darkness effect centered on the target
          of the attack.
        </p>
        <p>
          <b>Transcend—Break the Sun’s Legs</b>{" "}
          <img
            src={require("../assets/img/two_action.png")}
            alt="two action icon"
          />{" "}
          (cold, darkness) You make a slashing motion over the brightest source
          of light, whether it’s a torch or the sun in the sky. A gash appears
          over the light source, visible to all, and devours the light. The
          entire area within a 120-foot burst around you takes the effects of a
          9th-rank darkness spell for 1 minute. The stolen light is channeled to
          your eyes, and you gain greater darkvision for the duration of the
          effect.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "A place beyond mortality",
    action: "",
    tags: ["exemplar"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          <b>Prerequisites</b> Claim Advanced Domain.
          <br />
          <b>Frequency</b> once per day.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have at least 1 Focus Point in your focus
            pool.
          </span>
          <br />
          Your domain is not just a representation of your power but of your
          divine essence and the potential immortality that essence represents.
          You cease aging. When you would die for any reason, you can
          immediately expend all your remaining Focus Points as a free action
          that can be taken at any time and regardless of your current condition
          to survive at 0 Hit Points, purge yourself of any negative conditions.
          When you do, you heal yourself for half of your total Hit Points,
          stand back up in your current square, instantly summon your weapon
          ikon to your hand, and Shift your Immanence to any of your ikons.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Cutting without blade",
    action: "",
    tags: ["exemplar"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>War of immortals Playtest</i>
          <br />
          <br />
          While tales of your divine ikons have spread far and wide, you’ve
          realized that as they are all manifestations of your soul, the object
          itself is unnecessary. Your ikons disintegrate into golden light. You
          can place your divine spark into any object in your possession, even a
          nonthreatening object like a single strand of grass, to transform it
          into a fully functional copy of your ikon made out of pure divine
          radiance. You can do this as a free action immediately before or after
          Striking with or otherwise using the ikon.
        </p>
      </>
    ),
  },
];
