import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const BarbarianFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Acute vision",
    action: "",
    tags: ["barbarian"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core Rulebook</i>
        <br />
        <br />
        When you are raging, your visual senses improve, granting you
        darkvision.
      </p>
    ),
  },
  {
    id: 2,
    name: "Adrenaline Rush",
    action: "",
    tags: ["barbarian", "rage"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        In the heat of battle, you are capable of amazing feats of strength.
        While you are raging, increase your encumbered and maximum Bulk limits
        by 2; you also gain a +1 status bonus to Athletics checks to lift heavy
        objects, Escape, and Force Open.
      </p>
    ),
  },
  {
    id: 3,
    name: "Draconic Arrogance",
    action: "",
    tags: ["barbarian", "rage"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> dragon instinct.
          </span>
          <br />
          Few can sway you from your goals while the fury of combat fills you.
          While raging, you gain a +2 status bonus to saving throws against
          emotion effects.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Moment of Clarity",
    action: "one_action",
    tags: ["barbarian", "concentrate", "rage"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You push back your rage for a moment in order to think clearly. Until
          the end of this turn, you can use actions with the concentrate trait
          even if those actions don’t have the rage trait.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Raging intimidation",
    action: "",
    tags: ["barbarian"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your fury fills your foes with fear. While you are raging, your
          Demoralize and Scare to Death actions (from the Intimidation skill and
          an Intimidation skill feat, respectively) gain the rage trait,
          allowing you to use them while raging. As soon as you meet the
          prerequisites for the skill feats Intimidating Glare and Scare to
          Death, you gain these feats.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Raging tower",
    action: "",
    tags: ["barbarian"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Thrown weapons become especially deadly in your fury. You apply the
          additional damage from Rage to your thrown weapon attacks. If you have
          the Brutal Critical feat or the devastator class feature, apply their
          benefits to thrown weapon attacks.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Sudden charge",
    action: "two_action",
    tags: ["barbarian", "flourish", "open"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          With a quick sprint, you dash up to your foe and swing. Stride twice.
          If you end your movement within melee reach of at least one enemy, you
          can make a melee Strike against that enemy. You can use Sudden Charge
          while Burrowing, Climbing, Flying, or Swimming instead of Striding if
          you have the corresponding movement type.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Acute scent",
    action: "",
    tags: ["barbarian", "flourish", "open"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Acute Vision or darkvision.
          </span>
          <br />
          When you Rage, your sense of smell improves. You gain imprecise scent
          with a range of 30 feet.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Bashing charge",
    action: "",
    tags: ["barbarian", "flourish"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> trained in Athletics.
          </span>
          <br />
          You smash, bust, and charge through solid obstacles without
          hesitation. Stride twice. Once during your movement, if your movement
          passes through or ends adjacent to a door, window, fence, wall, or
          similar obstacle, you can attempt an Athletics check to Force Open the
          obstacle with a +1 circumstance bonus to the roll; on a failure, your
          movement ends at that obstacle.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Elemental Evolution",
    action: "",
    tags: ["barbarian"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Rage Elements</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> elemental instinct.
          </span>
          <br />
          The elemental power within you is more mutable and versatile than
          most. Choose a second damage type for your element. Whenever you Rage,
          you can choose that type instead of the damage type you would normally
          gain. The new damage type can be the one you did not choose when you
          selected the element initially if you had multiple options available
          for your element, or one of the following types: air cold, earth
          poison, fire cold, metal electricity, water acid, wood poison.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Furious Finish",
    action: "one_action",
    tags: ["barbarian", "rage"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Desperate to finish the fight, you pour all your rage into one final
          blow. Make a Strike. If it hits, you gain a circumstance bonus to
          damage equal to the number of rounds remaining in your Rage (maximum
          10). After this Strike, your Rage immediately ends, and you are
          fatigued until you rest for at least 10 minutes.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "No escape",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> A foe within reach attempts to move away from you.
          </span>
          <br />
          You keep pace with a retreating foe. Stride up to your Speed,
          following the foe and keeping it in reach throughout its movement
          until it stops moving or you’ve moved your full Speed. You can use No
          Escape to Burrow, Climb, Fly, or Swim instead of Stride if you have
          the corresponding movement type.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Second wind",
    action: "",
    tags: ["barbarian"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You can enter a second rage, but afterward you need to catch your
          breath. You can Rage without waiting for 1 minute after the previous
          Rage (or 1 round, with quick rage), but when you end this second Rage,
          you’re fatigued until you rest for 10 minutes.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Shake it off",
    action: "one_action",
    tags: ["barbarian", "concentrate", "rage"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You concentrate on your rage, overcoming fear and fighting back
          sickness. Reduce your frightened condition value by 1, and attempt a
          Fortitude save to recover from the sickened condition as if you had
          spent an action retching; you reduce your sickened condition value by
          1 on a failure (but not on a critical failure), by 2 on a success, or
          by 3 on a critical success.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Barreling change",
    action: "two_action",
    tags: ["barbarian", "flourish"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Athletics.
          </span>
          <br />
          You rush forward, moving enemies aside to reach your foe. You Stride,
          attempting to move through your enemies’ spaces and make a melee
          Strike. Roll an Athletics check and compare the result to the
          Fortitude DC of each creature whose space you attempt to move through
          during your Stride, moving through its space on a success but ending
          your movement before entering its space on a failure. You can use
          Barreling Charge to Burrow, Climb, Fly, or Swim instead of Stride, as
          long as you have the corresponding movement type.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Farabellus flip",
    action: "reaction",
    tags: ["uncommon", "barbarian", "fighter", "ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Pathfinder Society Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Acrobatics and medium armor.
          <br />
          <span className="frequency">
            <b>Trigger</b> An enemy targets you with a melee Strike.
          </span>
          <br />
          Surprisingly agile even in a breastplate and carrying a full rucksack,
          Marcos Farabellus developed this evasive maneuver during one of his
          many adventures. Flinging your body into a twisting somersault, you
          gain a +2 circumstance bonus to your AC against the triggering attack.
          If the attack still hits you, you can Step to an open space that’s
          still within the triggering enemy’s reach, turning the impact of the
          blow into momentum.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Fast Movement",
    action: "",
    tags: ["barbarian"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          While raging, you gain a +10-foot status bonus to your Speed.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Ghost wrangler",
    action: "one_action",
    tags: ["uncommon", "barbarian", "divine", "instinct", "necromancy", "rage"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Knight of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> spirit instinct.
          </span>
          <br />
          Spirits around you coalesce upon your fists, enabling you to seize and
          harm other ghosts and spirits. Until the beginning of your next turn,
          your fists gain the effects of the ghost touch property rune, and you
          can make Strength-based skill checks against incorporeal creatures.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Inured to alchemy",
    action: "one_action",
    tags: ["uncommon", "alchemist", "barbarian", "fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Punks in a Powder Keg</i>
          <br />
          <br />
          <b>Prerequisites</b> expert in Fortitude saves.
          <br />
          <span className="frequency">
            <b>Access</b> You’re from Alkenstar or the Mana Wastes.
          </span>
          <br />
          You’ve developed control over how your body processes alchemical
          poisons and drugs. Each of your successful saving throws against an
          alchemical poison, a drug, or an addiction reduces the stage by 2, or
          by 1 for a virulent alchemical poison, drug, or addiction. Each
          critical success reduces the stage by 3, or by 2 for a virulent
          alchemical poison, drug, or addiction.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Oversized throw",
    action: "two_action",
    tags: ["barbarian", "rage"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You have one or more hands free.
          </span>
          <br />
          With a great heave, you seize a piece of your surroundings, such as a
          boulder, log, table, wagon, or chunk of earth, and hurl it at your
          foes. The object must be your size or one size smaller than you, and
          it must not have too much Bulk for you to lift it in the first place.
          Make a ranged Strike with the object; regardless of the result, the
          object takes the same amount of damage it would deal on a success. The
          object is a simple ranged weapon that deals 1d10 bludgeoning damage,
          has a range increment of 20 feet, and has the thrown weapon trait. The
          damage increases to 2d10 if you have weapon specialization in simple
          weapons, or 3d10 if you have greater weapon specialization.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Raging Athlete",
    action: "",
    tags: ["barbarian"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> expert in Athletics.
          </span>
          <br />
          Physical obstacles can’t hold back your fury. While you are raging,
          you gain a climb Speed and swim Speed equal to your land Speed and the
          DC of High Jumps and Long Jumps decreases by 10. Your distance for a
          vertical Leap increases to 5 feet vertically, and your distance for a
          horizontal Leap increases to 15 feet if your Speed is at least 15 feet
          and to 20 feet if your Speed is at least 30 feet.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Spiritual guides",
    action: "reaction",
    tags: ["barbarian", "concentrate", "fortune"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> spirit instinct
          <br />
          <b>Frequency</b> once per day.
          <br />
          <span className="frequency">
            <b>Trigger</b> You fail, but don’t critically fail, a Perception
            check or a skill check.
          </span>
          <br />
          Though no one sees them and only you can hear them, the spirits around
          you constantly chatter, save when you are raging. Sometimes they’re
          even helpful. You can heed the spirits’ guidance to reroll the
          triggering check, using the second result even if it’s worse.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Supernatural senses",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Acute Scent or precise or imprecise scent.
          </span>
          <br />
          TYour scent is preternaturally sharp, and you can always rely on your
          sense of smell to help guide you when your vision is compromised. When
          you target a concealed or hidden opponent while you are raging, you
          reduce the DC of the flat check to 3 for a concealed target or to 9
          for a hidden one.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Swipe",
    action: "two_action",
    tags: ["barbarian", "flourish"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You make a wide, arcing swing. Make a single melee Strike and compare
          the attack roll result to the ACs of up to two foes, each of whom must
          be within your melee reach and adjacent to the other. Roll damage only
          once and apply it to each creature you hit. A Swipe counts as two
          attacks for your multiple attack penalty.
        </p>
        <p>
          If you’re using a weapon with the sweep trait, its modifier applies to
          all your Swipe attacks.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Wounded rage",
    action: "reaction",
    tags: ["barbarian"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> You take damage and are capable of entering a rage.
          </span>
          <br />
          You roar in pain, awakening the rage within you. You Rage.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Animal skin",
    action: "",
    tags: ["barbarian", "morph", "primal", "transmutation"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> animal instinct.
          </span>
          <br />
          Your proficiency in unarmored defense increases to expert. When you
          are raging and unarmored, your skin transforms into a thick hide. You
          gain a +2 item bonus to AC (+3 if you have the greater juggernaut
          class feature). The thickness of your hide gives you a Dexterity
          modifier cap to your AC of +3. This item bonus to AC is cumulative
          with armor potency runes on your explorer’s clothing, mage armor, and
          bracers of armor.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Attack of opportunity",
    action: "reaction",
    tags: ["barbarian"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> A creature within your reach uses a manipulate
            action or a move action, makes a ranged attack, or leaves a square
            during a move action it’s using.
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
    id: 28,
    name: "Brutal Bully",
    action: "",
    tags: ["barbarian"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> expert in Athletics.
          </span>
          <br />
          You push your foes around and leave bruises. While raging, when you
          successfully Disarm, Grapple, Shove, or Trip a foe, you deal that foe
          bludgeoning damage equal to your Strength modifier; add this to the
          damage from a critical success to Trip.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Cleave",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> Your melee Strike kills a creature or knocks it
            unconscious, and another foe is adjacent to that creature.
          </span>
          <br />
          You swing clear through one foe and into another. Make a melee Strike
          against the second foe.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Dragon's rage breath",
    action: "two_action",
    tags: ["arcane", "barbarian", "concentrate", "evocation", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites:</b> dragon instinct.
          <br />
          <span className="frequency">
            <b>Requirements:</b> You haven’t used this ability since you last
            Raged.
          </span>
          <br />
          You breathe deeply and exhale powerful energy in a 30-foot cone or
          60-foot line, dealing 1d6 damage per level. The area and damage type
          match those of your dragon (see Table 3–4). If you used this ability
          in the last hour, the area and the damage are halved (15-foot cone or
          30-foot line; 1d6 damage for every 2 levels). Each creature in the
          area must attempt a basic Reflex save.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Elemental explosion",
    action: "two_action",
    tags: ["barbarian", "concentrate", "primal", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Rage of Elements</i>
          <br />
          <br />
          <b>Prerequisites:</b> elemental instinct.
          <br />
          <span className="frequency">
            <b>Requirements:</b> You’re raging, and you haven’t used this
            ability since you last Raged.
          </span>
          <br />
          You unleash the energy roiling within you, exploding elemental matter
          in a 15-foot emanation. Each creature in the area takes 1d8 damage per
          level you possess, with the same type you chose for elemental rage.
          Each creature in the area must attempt a basic Reflex save against
          your class DC. Elemental Explosion gains the trait of your element.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Giant's stature",
    action: "one_action",
    tags: ["barbarian", "polymorph", "primal", "rage", "transmutation"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites:</b> giant instinct.
          <br />
          <span className="frequency">
            <b>Requirements:</b> You are Medium or smaller.
          </span>
          <br />
          You grow to incredible size. You become Large, increasing your reach
          by 5 feet and gaining the clumsy 1 condition until you stop raging.
          Your equipment grows with you.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Inner strength",
    action: "one_action",
    tags: ["barbarian", "concentrate", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Your strength is part of your rage, so as long as your anger remains,
          you can gather your strength and rage to overcome any sort of
          enfeeblement. You reduce your enfeebled condition’s value by 1.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Mage hunter",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          {" "}
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites:</b> superstition instinct.
          <br />
          <span className="frequency">
            <b>Requirements:</b> A creature within your reach Casts a Spell.
          </span>
          <br />
          You use your hatred of magic to lash out at the sight of spellcasting,
          allowing you to interrupt an enemy’s spell. Make a melee Strike
          against the triggering creature. If the attack is a critical hit, you
          disrupt the spell.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Nocturnal sense",
    action: "",
    tags: ["barbarian", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Acute Scent, or precise or imprecise scent and
            low-light vision
          </span>
          <br />
          Your senses gain even greater clarity. While raging, you gain
          darkvision if you don’t already have it, and the range of your
          imprecise scent increases to 60 feet.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Pain tolerance",
    action: "reaction",
    tags: ["uncommon", "barbarian", "fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Punks in a Powder Keg</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> expert in Fortitude saves; Access You’re from
            Alkenstar or the Mana Wastes.
          </span>
          <br />
          You gain resistance to mental damage equal to half your level and a +1
          circumstance bonus to saving throws against effects that would make
          you clumsy, drained, or enfeebled.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Scouring Rage",
    action: "",
    tags: ["barbarian"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <b>Prerequisites:</b> an instinct that allows you to change your
          additional damage from Rage to a different damage type
          <br />
          <span className="frequency">
            <b>Trigger:</b> You Rage.
          </span>
          <br />
          You emit a powerful surge of instinctual energy when you unleash your
          potential. Each adjacent creature takes damage equal to your level
          (basic Fortitude save against your class DC) of the same type as your
          additional damage during that Rage.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Spirit's interference",
    action: "one_action",
    tags: ["barbarian", "divine", "necromancy", "rage"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> spirit instinct
          </span>
          <br />
          You call forth protective spirits to ward off ranged attacks. Until
          your rage ends, anyone making a ranged attack against you must succeed
          at a DC 5 flat check or the attack misses with no effect.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Animal rage",
    action: "one_action",
    tags: [
      "barbarian",
      "concentrate",
      "polymorph",
      "primal",
      "rage",
      "transmutation",
    ],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> animal instinct.
          </span>
          <br />
          You transform into your animal. You gain the effects of the 3rd-level
          animal form spell except you use your own statistics, temporary Hit
          Points, and unarmed attacks instead of those granted by animal form.
          You also retain the constant abilities of your gear. If your animal is
          a frog, your tongue’s reach increases to 15 feet. Dismissing the
          transformation gains the rage trait.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Disarming assault",
    action: "one_action",
    tags: ["barbarian", "flourish", "rage"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> trained in Athletics.
          </span>
          <br />
          You attack with enough force to knock the weapon out of your foe’s
          hands. Make a melee Strike; if you hit, you can attempt an Athletics
          check to Disarm that foe.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Follow-up assault",
    action: "one_action",
    tags: ["barbarian", "rage"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You used your previous action to make a melee
            Strike that missed.
          </span>
          <br />
          Even in the face of failure you press the attack, determined to
          succeed. Make a Strike with the same weapon, adding the effects of the
          backswing and forceful weapon traits.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Friendly Toss",
    action: "two_action",
    tags: ["barbarian", "manipulate", "rage"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You are adjacent to an ally and have one or
            more hands free.
          </span>
          <br />
          You toss your friends around the battlefield. Pick up an adjacent ally
          of your size or smaller and throw them to an unoccupied space you can
          see within 30 feet. Their movement doesn’t trigger reactions. Your
          ally ends this movement on their feet and doesn’t take damage from the
          fall. If your ally ends this movement within melee reach of at least
          one enemy, they can make a melee Strike against an enemy within their
          reach as a reaction.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "furious Bully",
    action: "",
    tags: ["barbarian"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> master in Athletics.
          </span>
          <br />
          You bully foes across the battlefield. While raging, you gain a +2
          circumstance bonus to Athletics checks for attack actions.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Instinctive strike",
    action: "two_action",
    tags: ["barbarian", "manipulate", "rage"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Players Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Acute Scent or precise or imprecise scent.
          </span>
          <br />
          You trust your instincts and your sense of smell, using all of your
          senses to pinpoint your opponent’s location. Make a melee Strike
          against an opponent that isn’t hiding its scent with an effect like
          negate aroma. This attack ignores any flat check required due to the
          target being concealed or hidden.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Renewed vigor",
    action: "one_action",
    tags: ["barbarian", "concentrate", "rage"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You pause to recover your raging vigor. You gain temporary Hit Points
          equal to half your level plus your Constitution modifier.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Share rage",
    action: "one_action",
    tags: ["auditory", "barbarian", "rage", "visual"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You haven’t used this ability since you last
            Raged.
          </span>
          <br />
          You stoke an ally’s fury. While you are raging, one willing creature
          within 30 feet gains the effects of the Rage action, except it can
          still use concentrate actions.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Sudden leap",
    action: "two_action",
    tags: ["barbarian"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You swing at a foe while mid-leap. Make a Leap, High Jump, or Long
          Jump and attempt one melee Strike at any point during your jump.
          Immediately after the Strike, you fall to the ground if you’re in the
          air, even if you haven’t reached the maximum distance of your jump. If
          the distance you fall is no more than the height of your jump, you
          take no damage and land upright.
        </p>
        <p>
          When attempting a High Jump or Long Jump during a Sudden Leap,
          determine the DC using the Long Jump DCs, and increase your maximum
          distance to double your Speed.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Thrash",
    action: "one_action",
    tags: ["barbarian", "rage"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You have a foe grabbed.
          </span>
          <br />
          You thrash the grabbed foe around. It takes bludgeoning damage equal
          to your Strength modifier plus your weapon specialization damage plus
          your Rage damage. The foe must attempt a basic Fortitude save against
          your class DC.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Come and get me",
    action: "one_action",
    tags: ["barbarian", "concentrate", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You open yourself to attacks so you can respond in turn. Until your
          rage ends, you are flat-footed, and damage rolls against you gain a +2
          circumstance bonus. If a creature hits you, that creature is
          flat-footed to you until the end of your next turn. If you hit it
          before the end of your next turn, you gain temporary Hit Points equal
          to your Constitution modifier, or double that on a critical hit. These
          temporary Hit Points last until the end of your rage.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Corpse-killer defiance",
    action: "reaction",
    tags: ["uncommon", "barbarian", "swashbuckler"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost OmensL Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You destroy an undead foe.
          </span>
          <br />
          You defy Tar-Baphon with every undead you destroy, using your victory
          to rally your allies. Allies that can see you gain a +1 status bonus
          to attack and damage rolls against undead for 1 round, or a +2 status
          bonus to attack and damage rolls against undead for 2 rounds if the
          undead foe destroyed was a creature of your level or higher.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Determined dash",
    action: "two_action",
    tags: ["barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Nothing can keep you from your enemy. Stride twice. During this
          movement you ignore difficult terrain, greater difficult terrain, and
          any effects that would impose a penalty to Speed. You can attempt an
          Athletics check instead of an Acrobatics check to Balance when moving
          across narrow surfaces or uneven ground, using the same DC. This
          doesn’t prevent you from being harmed by hazardous terrain. You can
          increase the number of actions this activity takes to 3 to Stride
          three times instead.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Furious sprint",
    action: "two_action",
    tags: ["barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You rush forward. Stride up to five times your Speed in a straight
          line. You can increase the number of actions this activity takes to 3
          to Stride up to eight times your Speed in a straight line instead.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Great cleave",
    action: "",
    tags: ["barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Cleave.
          </span>
          <br />
          Your fury carries your weapon through multiple foes. When you Cleave,
          if your Strike also kills or knocks the target unconscious, you can
          continue to make melee Strikes until you make a Strike that doesn’t
          kill or knock a creature unconscious, or until there are no creatures
          adjacent to the most recent creature you attacked while Cleaving,
          whichever comes first.
        </p>
      </>
    ),
  },
  {
    id: 54,
    name: "Impressive landing",
    action: "reaction",
    tags: ["barbarian"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You fall at least 10 feet and land on a solid
            surface.
          </span>
          <br />
          You slam into the ground, shattering it around you. Treat the fall as
          10 feet shorter. You land on your feet. All adjacent spaces become
          difficult terrain, and creatures in those spaces when you land take 5
          bludgeoning damage as the debris hits them and are flat-footed until
          the start of their next turn.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Knockback",
    action: "one_action",
    tags: ["barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Your last action was a successful Strike.
          </span>
          <br />
          The weight of your swing drives your enemy back. You push the foe back
          5 feet, with the effects of a successful Shove. You can follow the foe
          as normal for a successful Shove.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Overpowering charge",
    action: "",
    tags: ["barbarian"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Barreling Charge.
          </span>
          <br />
          You trample your foes as you charge past them. When you use Barreling
          Charge and successfully move through a creature’s space, that creature
          takes bludgeoning damage equal to your Strength modifier. If you
          critically succeed, the creature takes twice this amount of damage and
          becomes flat-footed until the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Resounding blow",
    action: "two_action",
    tags: ["barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You are wielding a melee weapon that deals
            bludgeoning damage.
          </span>
          <br />
          You strike your enemy in the head with such force that their ears
          ring. Make a melee Strike. If the Strike hits and deals damage, the
          target is deafened until the start of your next turn (or for 1 minute
          on a critical hit).
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Silencing strike",
    action: "one_action",
    tags: ["barbarian", "incapacitation", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />A quick strike to the face or mouth silences your opponent. Make
          a melee Strike against a foe. The foe must succeed at a Fortitude save
          against your class DC.
        </p>
        <p>
          <b>Success</b> The target is unaffected.
        </p>
        <p>
          <b>Failure</b> The target is dazed and can barely vocalize. It’s
          stunned 1 and its speech is raspy and hard to understand. It must
          succeed at a DC 11 flat check to use linguistic actions or supply
          verbal spellcasting components until the end of its next turn.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the creature is stunned 3
          instead of stunned 1.
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Tangle of battle",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> You critically hit an adjacent enemy.
          </span>
          <br />
          Your incredibly vicious Strike pulls you right in close, giving you
          the opportunity to grab your foe. Attempt to Grapple the triggering
          enemy.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Terrifying howl",
    action: "one_action",
    tags: ["auditory", "barbarian", "rage"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Intimidating Glare.
          </span>
          <br />
          You unleash a terrifying howl. Attempt Intimidate checks to Demoralize
          each enemy within 30 feet. Regardless of the results of your checks,
          each creature is then temporarily immune to Terrifying Howl for 1
          minute.
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Dragon's rage wings",
    action: "one_action",
    tags: ["barbarian", "morph", "primal", "rage", "transmutation"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> dragon instinct.
          </span>
          <br />
          You sprout dragon wings from your back of the same color as your
          chosen dragon. While you are raging, you gain a fly Speed equal to
          your land Speed. If you are flying when your rage ends, you start to
          fall but the transformation only completes at the last moment, so you
          take no damage from the fall and land standing up.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Embrace the pain",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> A creature damages you with a melee attack.
          </span>
          <br />
          Ignoring your pain, you reach out and grab the creature or weapon that
          caused you harm. Attempt an Athletics check to Grapple the triggering
          creature or to Disarm the creature of the triggering weapon.
        </p>
      </>
    ),
  },
  {
    id: 63,
    name: "Furious grab",
    action: "one_action",
    tags: ["barbarian", "rage"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements:</b> Your last action was a successful Strike, and
            either you have a hand free or your Strike used a grapple weapon.
          </span>
          <br />
          You grab your foe while it’s distracted by your attack. The foe you
          hit becomes grabbed, as if you had succeeded at an Athletics check to
          Grapple the foe.
        </p>
      </>
    ),
  },
  {
    id: 64,
    name: "Predator's pounce",
    action: "one_action",
    tags: ["barbarian", "flourish", "open", "rage"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites:</b> animal instinct.
          <br />
          <span className="frequency">
            <b>Requirements:</b> You are unarmored or wearing light armor.
          </span>
          <br />
          You close the distance to your prey in a blur, pouncing on the
          creature before it can react. You Stride up to your Speed and make a
          Strike at the end of your movement.
        </p>
      </>
    ),
  },
  {
    id: 65,
    name: "Spirit's wrath",
    action: "one_action",
    tags: ["attack", "barbarian", "concentrate", "rage"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements:</b> spirit instinct.
          </span>
          <br />
          You call forth an ephemeral apparition, typically the ghost of an
          ancestor or a nature spirit, which takes the form of a wisp. The
          spirit wisp makes a melee wisp rush unarmed attack against an enemy
          within 120 feet of you. The wisp’s attack modifier is equal to your
          proficiency bonus for martial weapons plus your Strength modifier plus
          a +2 item bonus, and it applies the same circumstance and status
          bonuses and penalties that you have. On a hit, the wisp deals damage
          equal to 4d8 plus your Constitution modifier. The damage is your
          choice of negative or positive damage; don’t apply your Rage damage or
          your weapon specialization damage, but circumstance and status bonuses
          and penalties that would also affect the wisp’s damage apply. If your
          wisp’s Strike is a critical hit, the target becomes frightened 1. This
          attack uses and counts toward your multiple attack penalty as if you
          were the one attacking.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "Sunder spell",
    action: "two_action",
    tags: ["attack", "barbarian", "concentrate", "rage"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Adavnced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements:</b> superstition instinct.
          </span>
          <br />
          You draw upon your superstitious fury to destroy a spell. Make a
          Strike with a melee weapon or an unarmed attack against a creature,
          object, or a spell manifestation (such as the wall created by wall of
          fire or the guardian from spiritual guardian). If your Strike hits,
          you can attempt to counteract a single spell or magical effect on the
          target. Your counteract level for this attempt is equal to half your
          level rounded up, and you use the result of your attack roll for the
          counteract check. If you're targeting something that doesn't have an
          AC listed, its AC is usually 10 against this Strike for targets that
          are very easy to hit, like a wall, or a different AC determined by the
          GM.
        </p>
        <p>
          Whether or not you succeed at your Strike, the target becomes
          temporarily immune to your Sunder Spell for 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Titan's stature",
    action: "",
    tags: ["barbarian", "polymorph", "transmutation"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements:</b> giant instinct, Giant’s Stature.
          </span>
          <br />
          You grow to even greater size. When using Giant’s Stature, you can
          instead become Huge (increasing your reach by 10 feet if you were
          Medium or smaller) while you are raging. You have the clumsy 1
          condition as long as you are Huge.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Unbalancing sweep",
    action: "three_action",
    tags: ["barbarian", "flourish", "open"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You make a great sweep about yourself, knocking creatures off their
          feet and away from you. Choose up to three adjacent foes and choose
          whether to Shove or Trip all three of them. Whichever of the two
          options you choose, roll a separate Athletics check against each foe,
          performing the same action against each foe. Each attempt counts
          toward your multiple attack penalty, but don’t increase your penalty
          until you have made all the attempts.
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Awesome blow",
    action: "",
    tags: ["barbarian", "concentrate", "rage"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Knockback.
          </span>
          <br />
          Your attacks are so powerful, they can flatten your opponents. When
          you use Knockback, you can attempt an Athletics check against your
          target’s Fortitude DC.
        </p>
        <p>
          <b>Critical Success</b> You gain the critical success effect of a
          Shove, then the critical success effect of a Trip against the target.
        </p>
        <p>
          <b>Success</b> You gain the success effect of a Shove, then the
          success effect of a Trip against the target.
        </p>
        <p>
          <b>Failure</b> You gain the normal effect of Knockback.
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Awesome blow",
    action: "one_action",
    tags: ["barbarian", "concentrate", "rage"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> giant instinct
          </span>
          <br />
          You extend your body and prepare to attack foes outside your normal
          reach. Until your rage ends, all your melee weapons and unarmed
          attacks gain reach 10. This doesn’t increase the reach of any weapon
          or unarmed attack that already has the reach trait, but it does
          combine with abilities that increase your reach due to increased size,
          such as Giant’s Stature.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Impaling thrust",
    action: "two_action",
    tags: ["barbarian", "rage"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements:</b> You are wielding a melee weapon that deals
            piercing damage.
          </span>
          <br />
          You impale your enemy and hold them in place with your weapon. Make a
          melee Strike with the required weapon. If the Strike hits and deals
          damage, your target is grabbed until they successfully Escape, you
          attack with the required weapon, or you Release the required weapon,
          whichever comes first. When the target is no longer grabbed, they take
          persistent bleed damage equal to the number of weapon damage dice.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Sunder enchantement",
    action: "",
    tags: ["barbarian"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Sunder Spell.
          </span>
          <br />
          You can focus your superstition to break the magic of an item, in
          addition to destroying freestanding spells and those active on
          creatures. When you Sunder a Spell, you can instead attempt to
          counteract either an unattended magic item or one of your target’s
          magic items. If your counteract attempt succeeds, the item becomes a
          mundane item of its type for 10 minutes. If you target an artifact, an
          intelligent item, or a particularly powerful item, your counteract
          attempt automatically fails.
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Vengeful strike",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites:</b> Come and Get Me
          <br />
          <b>Trigger:</b> A creature within your reach succeeds or critically
          succeeds at an attack against you.
          <br />
          <span className="frequency">
            <b>Requirements:</b> You’re under the effect of Come and Get Me.
          </span>
          <br />
          When struck by an enemy, you respond in turn. Make a melee Strike
          against the triggering creature. This Strike doesn’t count toward your
          multiple attack penalty, and your multiple attack penalty doesn’t
          apply to this Strike.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Whirlwind strike",
    action: "three_action",
    tags: ["barbarian", "flourish", "open"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You attack all nearby adversaries. Make a melee Strike against each
          enemy within your melee reach. Each attack counts toward your multiple
          attack penalty, but do not increase your penalty until you have made
          all your attacks.
        </p>
      </>
    ),
  },
  {
    id: 75,
    name: "Collateral thrash",
    action: "",
    tags: ["barbarian", "rage"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Thrash.
          </span>
          <br />
          When you Thrash a grabbed foe, you smack that foe into another nearby.
          Another foe adjacent to the grabbed foe also takes your Thrash damage,
          with a basic Reflex save against your class DC.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Dragon transformation",
    action: "one_action",
    tags: [
      "barbarian",
      "concentrate",
      "polymorph",
      "primal",
      "rage",
      "transmutation",
    ],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> dragon instinct, Dragon’s Rage Wings.
          </span>
          <br />
          You transform into a ferocious Large dragon, gaining the effects of
          6th-level dragon form except that you use your own AC and attack
          modifier, you apply your extra damage from Rage, and the Breath Weapon
          uses your class DC. The action to Dismiss the transformation gains the
          rage trait.
        </p>
        <p>
          At 18th level, you gain a +20-foot status bonus to your fly Speed,
          your damage bonus with dragon Strikes increases to +12, and you gain a
          +14 status bonus to your breath weapon damage.
        </p>
      </>
    ),
  },
  {
    id: 77,
    name: "Furious vengeance",
    action: "reaction",
    tags: ["barbarian", "rage"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites:</b> fury instinct.
          <br />
          <span className="frequency">
            <b>Trigger:</b> An enemy within your melee reach critically hits you
            with a melee Strike.
          </span>
          <br />
          Your enemy’s blow fuels your rage and provokes your immediate
          retaliation. Make a melee Strike against the triggering enemy.
        </p>
      </>
    ),
  },
  {
    id: 78,
    name: "Penetrating projectile",
    action: "two_action",
    tags: ["barbarian", "flourish", "rage"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements:</b> You are wielding a ranged or thrown weapon that
            deals piercing damage.
          </span>
          <br />
          Your projectiles are unhindered by flesh and bone. Make a ranged
          Strike against each creature in a 30-foot line. These attacks ignore
          lesser cover, cover, and greater cover granted by creatures. Roll
          damage only once and apply it to each creature you hit. Each attack
          counts toward your multiple attack penalty, but don’t increase your
          penalty until you have made all your attacks.
        </p>
      </>
    ),
  },
  {
    id: 79,
    name: "Reckless abandon",
    action: "",
    tags: ["barbarian", "rage"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> Your turn begins, and you are at half or fewer Hit
            Points.
          </span>
          <br />
          Your blood boils when you take a beating, and you throw caution to the
          wind to finish the fight. You gain a +2 circumstance bonus to attack
          rolls, a –2 penalty to AC, and a –1 penalty to saves. These bonuses
          and penalties last until your Rage ends or until you are above half
          Hit Points, whichever comes first.
        </p>
      </>
    ),
  },
  {
    id: 80,
    name: "Shattering blows",
    action: "",
    tags: ["barbarian", "rage"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Your forceful blows shatter objects with ease. While you are raging,
          your melee Strikes ignore 5 points of an object’s Hardness. If you
          have the devastator class feature, you instead ignore 10 points of an
          object’s Hardness.
        </p>
      </>
    ),
  },
  {
    id: 81,
    name: "Brutal critical",
    action: "",
    tags: ["barbarian"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your critical hits are particularly devastating. On a critical hit
          with a melee Strike, add one extra damage die. This is in addition to
          any extra dice you gain if the weapon is deadly or fatal. The target
          also takes persistent bleed damage equal to two damage dice.
        </p>
      </>
    ),
  },
  {
    id: 82,
    name: "Perfect clarity",
    action: "reaction",
    tags: ["barbarian", "concentrate", "fortune", "rage"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> You fail or critically fail an attack roll or Will
            save.
          </span>
          <br />
          You burn out all of your rage to ensure that your attack lands and
          your mind remains free. Reroll the triggering attack roll or Will save
          with a +2 circumstance bonus, use the better result, and resolve the
          effect. You then immediately stop raging.
        </p>
      </>
    ),
  },
  {
    id: 83,
    name: "Vicious evisceration",
    action: "two_action",
    tags: ["barbarian", "rage"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You make a vicious attack that maims your enemy. Make a melee Strike.
          If the Strike hits and deals damage, the target is drained 1, or
          drained 2 on a critical success.
        </p>
      </>
    ),
  },
  {
    id: 84,
    name: "Contagious rage",
    action: "",
    tags: ["auditory", "barbarian", "rage", "visual"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Share Rage.
          </span>
          <br />
          You can drive your allies into a frenzy, granting them incredible
          benefits. You can ignore the requirements on Share Rage, using it
          multiple times in a Rage. Allies affected by Share Rage who accept
          your anathema for the duration of the Rage gain your instinct ability
          and the specialization ability it gains from weapon specialization,
          but not greater weapon specialization.
        </p>
      </>
    ),
  },
  {
    id: 85,
    name: "Invulnerable juggernaut",
    action: "",
    tags: ["uncommon", "barbarian"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Broken promises</i>
          <br />
          <br />
          You are unstoppable, able to shrug off mortal wounds with ease. You
          gain resistance equal to 3 + your Constitution modifier to all damage,
          and your resistance from raging resistance increases to 8 + your
          Constitution modifier.
        </p>
        <p>
          In addition, if you are reduced to 0 Hit Points, you can end your rage
          as a reaction to stay at 1 Hit Point. If you do, you become wounded 2
          (or increase your wounded condition by 2 if you are already wounded).
        </p>
      </>
    ),
  },
  {
    id: 86,
    name: "Quaking stomp",
    action: "one_action",
    tags: ["barbarian", "manipulate", "rage"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Frequency:</b> once per 10 minutes.
          </span>
          <br />
          You stomp the ground with such force that it creates a minor
          earthquake, with the effects of the earthquake spell.
        </p>
      </>
    ),
  },
  {
    id: 87,
    name: "Unstoppable",
    action: "",
    tags: ["barbarian"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You have become a brutal, unstoppable force of nature, able to shrug
          off mortal wounds with ease. You gain resistance equal to 3 + your
          Constitution modifier to all damage, and your resistance from raging
          increases to 8 + your Constitution modifier.
        </p>
      </>
    ),
  },
  {
    id: 88,
    name: "Whirlwind toss",
    action: "",
    tags: ["uncommon", "barbarian", "rage"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Fists of Ruby Phoenix Adventures</i>
          <br />
          <br />
          <b>Prerequisites:</b> Collateral Thrash
          <br />
          <span className="frequency">
            <b>Requirements:</b> You have a foe grabbed.
          </span>
          <br />
          You whirl a foe to smash into all nearby creatures before throwing
          them far away in imitation of the techniques of your rival, Ran-To.
          You Thrash. During this Thrash, your Collateral Thrash feat applies to
          all foes adjacent to you. You can then throw the grabbed creature 10
          feet, where they fall prone.
        </p>
        <p>
          If the foe you choose for Collateral Thrash is also adjacent to you,
          they attempt only one save and take the damage only once.
        </p>
      </>
    ),
  },
];
