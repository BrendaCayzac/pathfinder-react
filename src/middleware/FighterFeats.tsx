import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const FighterFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Agile Shield Grip",
    action: "one_action",
    tags: ["uncommon", "fighter", "champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Lost Omens: Knight of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield with a shield boss or
            shield spikes in one hand.
          </span>
          <br />
          You change your grip on the shield, allowing you to combine rapid
          attacks with your shield boss or shield spikes and your main weapon’s
          Strikes in a series of swift motions. You reduce your shield boss and
          shield spikes weapon damage die to 1d4. As long as the weapon damage
          die is 1d4, your shield boss and shield spike Strikes gain the agile
          weapon trait. You can use Agile Shield Grip again to switch to a
          normal grip, returning the damage to the usual amount and removing the
          agile trait.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Combat assessment",
    action: "one_action",
    tags: ["fighter"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You make a telegraphed attack to learn about your foe. Make a melee
          Strike. On a hit, you can immediately attempt a check to Recall
          Knowledge about the target. On a critical hit, you gain a +2
          circumstance bonus to the check to Recall Knowledge. The target is
          temporarily immune to Combat Assessment for 1 day.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Double slice",
    action: "two_action",
    tags: ["fighter"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, each in a
            different hand.
          </span>
          <br />
          You lash out at your foe with both weapons. Make two Strikes, one with
          each of your two melee weapons, each using your current multiple
          attack penalty. Both Strikes must have the same target. If the second
          Strike is made with a weapon that doesn’t have the agile trait, it
          takes a –2 penalty.
        </p>
        <p>
          If both attacks hit, combine their damage, and then add any other
          applicable effects from both weapons. You add any precision damage
          only once, to the attack of your choice. Combine the damage from both
          Strikes and apply resistances and weaknesses only once. This counts as
          two attacks when calculating your multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Everstand stance",
    action: "one_action",
    tags: ["uncommon", "fighter", "champion", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield.
          </span>
          <br />
          You brace your shield with both hands, enhancing its potential for
          both offense and defense. When in this stance, you wield the shield
          with both hands. When wielding a shield this way, increase the weapon
          damage die of the shield’s boss or spikes by one step, and increase
          the shield’s Hardness by 2 when using the Shield Block reaction.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Exacting strike",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          You make a controlled attack, fully accounting for your momentum. Make
          a Strike. The Strike gains the following failure effect.
        </p>
        <p>
          <b>Failure</b> This attack does not count toward your multiple attack
          penalty.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Point-blank shot",
    action: "one_action",
    tags: ["fighter", "open", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon.
          </span>
          <br />
          You take aim to pick off nearby enemies quickly. When using a ranged
          volley weapon while you are in this stance, you don’t take the penalty
          to your attack rolls from the volley trait. When using a ranged weapon
          that doesn’t have the volley trait, you gain a +2 circumstance bonus
          to damage rolls on attacks against targets within the weapon’s first
          range increment.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Power attack",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          You unleash a particularly powerful attack that clobbers your foe but
          leaves you a bit unsteady. Make a melee Strike. This counts as two
          attacks when calculating your multiple attack penalty. If this Strike
          hits, you deal an extra die of weapon damage. If you’re at least 10th
          level, increase this to two extra dice, and if you’re at least 18th
          level, increase it to three extra dice.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Reactive shield",
    action: "reaction",
    tags: ["fighter"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <b>Trigger</b> An enemy hits you with a melee Strike.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield.
          </span>
          <br />
          You can snap your shield into place just as you would take a blow,
          avoiding the hit at the last second. You immediately use the Raise a
          Shield action and gain your shield’s bonus to AC. The circumstance
          bonus from the shield applies to your AC when you’re determining the
          outcome of the triggering attack.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Snagging strike",
    action: "one_action",
    tags: ["fighter"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You have one hand free, and your target is
            within reach of that
          </span>
          <br />
          You combine an attack with quick grappling moves to throw an enemy off
          balance as long as it stays in your reach. Make a Strike while keeping
          one hand free. If this Strike hits, the target is flat-footed until
          the start of your next turn or until it’s no longer within the reach
          of your hand, whichever comes first.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Sudden charge",
    action: "two_action",
    tags: ["fighter", "flourish", "open"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
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
    id: 11,
    name: "Aggressive block",
    action: "",
    tags: ["fighter"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You use the Shield Block reaction, and the opponent
            that triggered Shield Block is adjacent to you and is your size or
            smaller.
          </span>
          <br />
          You push back as you block, knocking your foe away or off balance. You
          use your shield to push the triggering creature, either automatically
          Shoving it 5 feet or causing it to become flat-footed until the start
          of your next turn. The triggering creature chooses whether to be moved
          or become flat-footed. If it chooses to be moved, you choose the
          direction. If the Shove would cause it to hit a solid object, enter a
          square of difficult terrain, or enter another creature’s space, it
          must become flat-footed instead of being moved.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Assisting shot",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon.
          </span>
          <br />
          With a quick shot, you interfere with a foe in combat. Make a Strike
          with a ranged weapon. If the Strike hits, the next creature other than
          you to attack the same target before the start of your next turn gains
          a +1 circumstance bonus to their roll, or a +2 circumstance bonus if
          your Strike was a critical hit.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Brutish shove",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a two-handed melee weapon.
          </span>
          <br />
          Throwing your weight behind your attack, you hit your opponent hard
          enough to make it stumble back. Make a Strike with a two-handed melee
          weapon. If you hit a target that is your size or smaller, that
          creature is flat-footed until the end of your current turn, and you
          can automatically Shove it, with the same benefits as the Shove action
          (including the critical success effect, if your Strike was a critical
          hit). If you move to follow the target, your movement doesn’t trigger
          reactions.
        </p>
        <p>This Strike has the following failure effect.</p>
        <p>
          <b>Failure</b> The target becomes flat-footed until the end of your
          current turn.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Combat grab",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You have one hand free, and your target is
            within reach of that hand.
          </span>
          <br />
          You swipe at your opponent and grab at them. Make a melee Strike while
          keeping one hand free. If the Strike hits, you grab the target using
          your free hand. The creature remains grabbed until the end of your
          next turn or until it Escapes, whichever comes first.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Devoted guardian",
    action: "one_action",
    tags: ["uncommon", "fighter", "champion"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your last action was to Raise a Shield.
          </span>
          <br />
          You adopt a wide stance, ready to defend both yourself and your chosen
          ward. Select one adjacent creature. As long as your shield is raised
          and the creature remains adjacent to you, the creature gains a +1
          circumstance bonus to their AC, or a +2 circumstance bonus if the
          shield you raised was a tower shield.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Dragging strike",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your last action was to Raise a Shield.
          </span>
          <br />
          You aim your weapon to snag a foe’s armor, clothing, or flesh to pull
          them closer. Make a melee Strike. If you hit a target that is your
          size or smaller, that creature is flat-footed until the end of your
          current turn, and you can move it 5 feet toward you. When you move the
          creature, you can move the same distance in the same direction as it,
          even if you’re adjacent to the target. This movement doesn’t trigger
          reactions.
        </p>
        <p>This Strike has the following failure effect.</p>
        <p>
          <b>Failure</b> The target becomes flat-footed until the end of your
          current turn.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Dueling parry",
    action: "one_action",
    tags: ["fighter"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebooks</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding only a single one-handed melee
            weapon and have your other hand or hands free.
          </span>
          <br />
          You can parry attacks against you with your one-handed weapon. You
          gain a +2 circumstance bonus to AC until the start of your next turn
          as long as you continue to meet the requirements.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Intimidating strike",
    action: "two_action",
    tags: ["fighter", "emotion", "fear", "mental"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebooks</i>
          <br />
          <br />
          Your blow not only wounds creatures but also shatters their
          confidence. Make a melee Strike. If you hit and deal damage, the
          target is frightened 1, or frightened 2 on a critical hit.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Lunge",
    action: "one_action",
    tags: ["fighter"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebooks</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a melee weapon.
          </span>
          <br />
          Extending your body to its limits, you attack an enemy that would
          normally be beyond your reach. Make a Strike with a melee weapon,
          increasing your reach by 5 feet for that Strike. If the weapon has the
          disarm, shove, or trip trait, you can use the corresponding action
          instead of a Strike.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Lunge",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a thrown weapon.
          </span>
          <br />
          You bounce your weapon off one foe to strike another. Make a ranged
          Strike with a thrown weapon. If this Strike hits, the weapon rebounds
          toward an enemy within 10 feet of the original target. Make an
          additional Strike against this second target. Both attacks count
          toward your multiple attack penalty, but the penalty doesn’t increase
          until after you’ve made both attacks.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "United assault",
    action: "one_action",
    tags: ["uncommon", "fighter", "flourish", "ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          Through countless battles, you’ve learned you’re stronger when working
          alongside your allies. Make a Strike. Your Strike gains a circumstance
          bonus to damage rolls equal to the number of other different creatures
          that damaged the target since the end of the target’s last turn, to a
          maximum of a +4 circumstance bonus.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Barreling change",
    action: "two_action",
    tags: ["fighter", "flourish"],
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
          attempting to move through your enemies’ spaces, and make a melee
          Strike. Roll an Athletics check and compare the result to the
          Fortitude DC of each creature whose space you attempt to move through
          during your Stride, moving through their space on a success but ending
          your movement before entering their space on a failure. You can use
          Barreling Charge to Burrow, Climb, Fly, or Swim instead of Stride if
          you have the corresponding movement type.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Double shot",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon with reload 0.
          </span>
          <br />
          You shoot twice in blindingly fast succession. Make two Strikes, each
          against a separate target and with a –2 penalty. Both attacks count
          toward your multiple attack penalty, but the penalty doesn’t increase
          until after you’ve made both of them.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Dual-handed assault",
    action: "one_action",
    tags: ["fighter", "flourish"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a one-handed melee weapon and
            have a free hand.
          </span>
          <br />
          You snap your free hand over to grip your weapon just long enough to
          add momentum and deliver a more powerful blow to your opponent. Make a
          Strike with the required weapon. You quickly switch your grip during
          the Strike in order to make the attack with two hands. If the weapon
          doesn’t normally have the two-hand trait, increase its weapon damage
          die by one step for this attack. (Rules on increasing die size appear
          in the Damage Dice section.) If the weapon has the two-hand trait, you
          gain the benefit of that trait and a circumstance bonus to damage
          equal to the weapon’s number of damage dice. When the Strike is
          complete, you resume gripping the weapon with only one hand. This
          action doesn’t end any stance or fighter feat effect that requires you
          to have one hand free.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Everstand strike",
    action: "one_action",
    tags: ["uncommon", "fighter", "champion", "press"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> Everstand Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield in two hands.
          </span>
          <br />
          Your follow-up blow leaves you an opening to set your shield. Make a
          Strike with the wielded shield. If the Strike hits and deals damage,
          you also Raise your Shield.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Farabellus flip",
    action: "reaction",
    tags: ["uncommon", "fighter", "barbarian", "ranger"],
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
    id: 27,
    name: "Inured to alchemy",
    action: "",
    tags: ["uncommon", "fighter", "barbarian", "alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Punks in a Power Keg</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> expert in Fortitude saves; Access You’re from
            Alkenstar or the Mana Wastes.
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
    id: 28,
    name: "Knock sense",
    action: "one_action",
    tags: ["uncommon", "fighter", "champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          You attack carefully to knock some sense into a creature whose actions
          aren’t their own. Make a Strike against a confused ally. The Strike is
          nonlethal and doesn’t take a –2 penalty for using a weapon without the
          nonlethal trait; if you hit and deal damage, your ally automatically
          succeeds at the flat check to remove the confused condition when
          taking damage.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Knockdown",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Athletics.
          </span>
          <br />
          You make an attack to knock a foe off balance, then follow up
          immediately with a sweep to topple them. Make a melee Strike. If it
          hits and deals damage, you can attempt an Athletics check to Trip the
          creature you hit. If you’re wielding a two-handed melee weapon, you
          can ignore Trip’s requirement that you have a hand free. Both attacks
          count toward your multiple attack penalty, but the penalty doesn’t
          increase until after you’ve made both of them.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Parting shot",
    action: "two_action",
    tags: ["fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a loaded ranged weapon or a
            ranged weapon with reload 0.
          </span>
          <br />
          You jump back and fire a quick shot that catches your opponent off
          guard. You Step and then make a ranged Strike with the required
          weapon. Your target is flat-footed against the attack.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Powerful shove",
    action: "",
    tags: ["fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Aggressive Block or Brutish Shove.
          </span>
          <br />
          You can push larger foes around with your attack. You can use
          Aggressive Block or Brutish Shove against a creature up to two sizes
          larger than you.
        </p>
        <p>
          When a creature you Shove has to stop moving because it would hit an
          object, it takes damage equal to your Strength modifier (minimum 1).
          This happens regardless of how you Shoved the creature.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Quick reversal",
    action: "one_action",
    tags: ["fighter", "flourish", "press"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are flanked by at least two enemies.
          </span>
          <br />
          You turn your foes’ flanking against them with a quick reverse. Make a
          melee Strike against one of the flanking enemies and make a second
          Strike with the same weapon or unarmed attack against a different
          enemy that is flanking you. This second Strike has the same multiple
          attack penalty of the initial attack and doesn’t count toward your
          multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Shielded stride",
    action: "",
    tags: ["fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          When your shield is up, your enemies’ blows can’t touch you. When you
          have your shield raised, you can Stride to move half your Speed
          without triggering reactions that are triggered by your movement (such
          as Attacks of Opportunity). You can use Shielded Stride while Flying
          or Swimming instead of Striding if you have the corresponding movement
          type.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Swipe",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          When your shield is up, your enemies’ blows can’t touch you. When you
          have your shield raised, you can Stride to move half your Speed
          without triggering reactions that are triggered by your movement (such
          as Attacks of Opportunity). You can use Shielded Stride while Flying
          or Swimming instead of Striding if you have the corresponding movement
          type.
        </p>
        <p>
          You make a wide, arcing swing. Make a melee Strike and compare the
          attack roll result to the AC of up to two foes, each of whom must be
          within your melee reach and adjacent to each other. Roll damage only
          once and apply it to each creature you hit. A Swipe counts as two
          attacks for your multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Twin parry",
    action: "two_action",
    tags: ["fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, one in each
            hand.
          </span>
          <br />
          You use your two weapons to parry attacks. You gain a +1 circumstance
          bonus to AC until the start of your next turn, or a +2 circumstance
          bonus if either weapon has the parry trait. You lose this circumstance
          bonus if you no longer meet this feat’s requirement.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Advanced weapon training",
    action: "",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You’ve studied the art of wielding an advanced weapon. Choose a weapon
          group. You gain proficiency with all advanced weapons in that group as
          if they were martial weapons of their weapon group.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Advantageous assault",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          When an enemy’s movement is compromised, you deliver a more deadly
          blow. Make a Strike against a creature that is grabbed, prone, or
          restrained. You gain a circumstance bonus to damage on this Strike
          equal to the number of weapon damage dice, or that number + 2 if
          you’re wielding the weapon in two hands. The Strike gains the
          following failure effect.
        </p>
        <p>
          <b>Failure</b> You deal damage to the target equal to the number of
          weapon damage dice, or that number + 2 if you’re wielding the weapon
          in two hands. This damage has the same damage type as the weapon.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Dazing blow",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You have a creature grabbed.
          </span>
          <br />
          You pummel a held foe, hoping to stagger them. Make a melee Strike
          against a creature you have grabbed. The weapon damage from this
          Strike is bludgeoning damage. If the Strike hits, the creature must
          attempt a Fortitude save against your class DC; this is an
          incapacitation effect.
        </p>
        <p>
          <b>Critical Success</b> The creature is unaffected.
        </p>
        <p>
          <b>Success</b> The creature is stunned 1.
        </p>
        <p>
          <b>Failure</b> The creature is stunned 2.
        </p>
        <p>
          <b>Critical Failure</b> The creature is stunned 3.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Disarming stance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Athletics.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding only a single one-handed melee
            weapon and have your other hand or hands free.
          </span>
          <br />
          You adopt a fencing stance that improves your control over your
          weapon. While you are in this stance, you gain a +1 circumstance bonus
          to Athletics checks to Disarm and a +2 circumstance bonus to your
          Reflex DC when defending against checks to Disarm you. In addition,
          you can attempt to Disarm creatures up to two sizes larger than you.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Furious focus",
    action: "",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Power Attack.
          </span>
          <br />
          You’ve learned to maintain your balance even when swinging furiously.
          When you make a Power Attack with a melee weapon you’re wielding in
          two hands, it counts as one attack toward your multiple attack penalty
          instead of two.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Guardian's deflection",
    action: "reaction",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Trigger</b> An ally within your melee reach is hit by an attack,
          you can see the attacker, and the ally gaining a +2 circumstance bonus
          to AC would turn the critical hit into a hit or the hit into a miss.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a single one-handed melee
            weapon and have your other hand or hands free.
          </span>
          <br />
          You use your weapon to deflect the attack against your ally, granting
          a +2 circumstance bonus to their Armor Class against the triggering
          attack. This turns the triggering critical hit into a hit, or the
          triggering hit into a miss.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Pain tolerance",
    action: "",
    tags: ["uncommon", "fighter", "barbarian"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Punk in a Power Keg</i>
          <br />
          <br />
          <b>Prerequisites</b> expert in Fortitude saves
          <br />
          <span className="frequency">
            <b>Access</b> You’re from Alkenstar or the Mana Wastes.
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
    id: 43,
    name: "Reflexive shield",
    action: "",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You can use your shield to fend off the worst of area effects and
          other damage. When you Raise your Shield, you gain your shield’s
          circumstance bonus to Reflex saves. If you have the Shield Block
          reaction, damage you take as a result of a Reflex save can trigger
          that reaction, even if the damage isn’t physical damage.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Revealing stab",
    action: "two_action",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You drive your piercing weapon into an imperceptible foe, revealing
          its location to your allies. Make a Strike with the required melee
          weapon. You don’t have to attempt a flat check to hit a concealed
          creature, and you have to succeed at only a DC 5 flat check to target
          a hidden creature. If you hit and deal damage, you can drive the
          required weapon into a corporeal target, revealing its current
          position. You Release the weapon, and it becomes lodged in the target.
          If the target is concealed, other creatures don’t need to succeed at a
          flat check to hit it. If the target is hidden, other creatures have to
          succeed at only a DC 5 flat check to target it. The creatures need to
          be able to see your weapon to gain any of these benefits, and the
          target can’t become undetected to anyone who sees your weapon. If the
          target is invisible, the weapon remains visible while lodged in it.
        </p>
        <p>
          This benefit lasts until the weapon is removed from the creature. An
          adjacent creature or the target can remove the weapon with 2 Interact
          actions.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Ricochet stance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You adopt a stance designed to rebound your thrown weapons back toward
          you. While you are in this stance, any thrown weapons you use as part
          of a ranged Strike to deal bludgeoning or slashing damage immediately
          return to your hand, enabling you to use them for additional Strikes.
          You must be within the weapon’s listed range increment and have a hand
          free to catch the weapon. If you make a ranged Strike with a thrown
          weapon outside of its listed range increment, it instead flies back
          toward you a number of feet equal to its listed range increment and
          then falls to the ground.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Shatter defence",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> A frightened creature is in your melee reach.
          </span>
          <br />
          Your offense exploits your enemy’s fear. Make a melee Strike against a
          frightened creature. If you hit and deal damage, the target becomes
          flat-footed until its frightened condition ends. If the target was
          already flat-footed to you when you damaged it with this Strike, it
          can’t reduce its frightened value below 1 until the start of your next
          turn.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Shield wall",
    action: "reaction",
    tags: ["uncommon", "fighter", "champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> Your shield is raised and an adjacent ally Raises a
            Shield.
          </span>
          <br />
          You use your shield in tandem with an ally’s, forming a barricade.
          Both you and the triggering creature have standard cover as long as
          you remain adjacent to each other and you both have your shields
          raised; when this is no longer the case, the effect ends. You and your
          ally can’t use this cover to Hide, as it’s obvious you’re standing
          there holding your shields, but you and your ally can use it to Take
          Cover. Normally, if you and your ally don’t move, Shield Wall lasts
          until the beginning of your next turn, when your shield is no longer
          raised.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Shield warden",
    action: "",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> shield block.
          </span>
          <br />
          You use your shield to protect your allies. When you have a shield
          raised, you can use your Shield Block reaction when an attack is made
          against an ally adjacent to you. If you do, the shield prevents that
          ally from taking damage instead of preventing you from taking damage,
          following the normal rules for Shield Block.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Triple shot",
    action: "",
    tags: ["fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Double Shot.
          </span>
          <br />
          You can quickly fire multiple shots with greater control. When you use
          Double Shot, you can make the attacks against the same target. You can
          add an additional action to Double Shot to make three ranged Strikes
          instead of two. If you do, the penalty is –4. All attacks count toward
          your multiple attack penalty, but the penalty doesn’t increase until
          after you’ve made all of them.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Blind-fight",
    action: "",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> master in Perception.
          </span>
          <br />
          Your battle instincts make you more aware of concealed and invisible
          opponents. You don’t need to succeed at a flat check to target
          concealed creatures. You’re not flat-footed to creatures that are
          hidden from you (unless you’re flat-footed to them for reasons other
          than the hidden condition), and you need only a successful DC 5 flat
          check to target a hidden creature.
        </p>
        <p>
          While you’re adjacent to an undetected creature of your level or
          lower, it is instead only hidden from you.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Disorienting opening",
    action: "",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Attack of Opportunity.
          </span>
          <br />
          You use your foes’ openings to expose even greater weaknesses. When
          you hit a creature as part of an Attack of Opportunity, that creature
          becomes flat-footed until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Dueling Riposte",
    action: "reaction",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> Dueling Parry.
          <br />
          <b>Trigger</b> A creature within your reach critically fails a Strike
          against you.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are benefiting from Dueling Parry.
          </span>
          <br />
          You riposte against your flailing enemy. Make a melee Strike against
          or attempt to Disarm the triggering creature.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Felling strike",
    action: "two_action",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your attack can ground an airborne foe. Make a Strike. If it hits and
          deals damage to a flying target, the target falls up to 120 feet. The
          fall is gradual enough that if it causes the target to hit the ground,
          the target takes no damage from the fall. If the attack is a critical
          hit, the target can’t Fly, Leap, levitate, or otherwise leave the
          ground until the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 54,
    name: "Impassable walls stance",
    action: "one_action",
    tags: ["uncommon", "fighter", "champion", "stance"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Attack of Opportunity.
          </span>
          <br />
          Your attack can ground an airborne foe. Make a Strike. If it hits and
          deals damage to a flying target, the target falls up to 120 feet. The
          fall is gradual enough that if it causes the target to hit the ground,
          the target takes no damage from the fall. If the attack is a critical
          hit, the target can’t Fly, Leap, levitate, or otherwise leave the
          ground until the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "incredible aim",
    action: "two_action",
    tags: ["fighter", "concentrate"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          By spending a moment to focus, you can ensure your attack strikes
          true. Make a ranged weapon Strike. On this Strike, you gain a +2
          circumstance bonus to the attack roll and ignore the target’s
          concealed condition.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Knight's retaliation",
    action: "reaction",
    tags: ["uncommon", "fighter", "swashblucker"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Athletics.
          <br />
          <span className="frequency">
            <b>Trigger</b> An undead creature within your reach critically fails
            a Strike against you.
          </span>
          <br />
          You knock the enemy’s blow aside and twist, unbalancing your foe. You
          attempt to Disarm, Shove, or Trip the triggering creature.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Mobile shot stance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your shots become nimble and deadly. While you’re in this stance, your
          ranged Strikes don’t trigger Attacks of Opportunity or other reactions
          that are triggered by a ranged attack.
        </p>
        <p>
          If you have Attack of Opportunity, you can use it with a loaded ranged
          weapon you’re wielding. The triggering creature must be within 5 feet
          of you for you to do so.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Positioning assault",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a two-handed melee weapon and
            your target is within your reach.
          </span>
          <br />
          With punishing blows, you force your opponent into position. Make a
          Strike with the required weapon. If you hit, you move the target 5
          feet into a space in your reach. This follows the forced movement
          rules.
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Quick shield block",
    action: "",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Shield Block.
          </span>
          <br />
          You can bring your shield into place with hardly a thought. At the
          start of each of your turns, you gain an additional reaction that you
          can use only to Shield Block.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Resounding bravery",
    action: "",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> bravery.
          </span>
          <br />
          Even your fears serve as fuel for your fighting spirit. When you
          critically succeed at a Will save against a foe’s ability, you gain a
          +1 status bonus to saves and a number of temporary Hit Points equal to
          half your level for 1 minute. These benefits are doubled if you
          critically succeed against a fear effect.
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Sudden leap",
    action: "two_action",
    tags: ["fighter"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You make an impressive leap and swing while you soar. Make a Leap,
          High Jump, or Long Jump and attempt one melee Strike at any point
          during your jump. Immediately after the Strike, you fall to the ground
          if you’re in the air, even if you haven’t reached the maximum distance
          of your jump. If the distance you fall is no more than the height of
          your jump, you take no damage and land upright.
        </p>
        <p>
          When attempting a High Jump or Long Jump during a Sudden Leap,
          determine the DC using the Long Jump DCs, and increase your maximum
          distance to double your Speed.
        </p>
        <p>
          <b>Special</b> If you have Felling Strike, you can spend 3 actions to
          make a Sudden Leap and use Felling Strike instead of a normal Strike.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Agile grace",
    action: "",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your graceful moves with agile weapons are beyond compare. Your
          multiple attack penalty with agile weapons and agile unarmed attacks
          becomes –3 for your second attack and –6 for subsequent attacks
          (rather than –4 and –8).
        </p>
      </>
    ),
  },
  {
    id: 63,
    name: "Certain strike",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Even when you don’t hit squarely, you can still score a glancing blow.
          Make a melee Strike. It gains the following failure effect.
        </p>
        <p>
          <b>Failure</b> Your attack deals any damage it would have dealt on a
          hit, excluding all damage dice. (This removes damage dice from weapon
          runes, spells, and special abilities, in addition to weapon damage
          dice.)
        </p>
      </>
    ),
  },
  {
    id: 64,
    name: "Combat reflexes",
    action: "",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You are particularly swift at punishing foes who leave you openings.
          At the start of each of your turns when you regain your actions, you
          gain an additional reaction that can be used only to make an Attack of
          Opportunity.
        </p>
      </>
    ),
  },
  {
    id: 65,
    name: "Cut from the air",
    action: "reaction",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Trigger</b> You are the target of a physical ranged Strike.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re aware of the attack, not flat-footed
            against it, and either have a hand free or are wielding a melee
            weapon.
          </span>
          <br />
          You can knock aside ranged attacks. You gain a +4 circumstance bonus
          to AC against the triggering attack. If the attack misses, you knocked
          or cut it out of the air.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "Dazzling display",
    action: "one_action",
    tags: ["fighter", "ranger", "rogue", "swashbuckler"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Firebrands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> expert in Intimidation.
          </span>
          <br />
          You perform a bewildering show of prowess, such as by whirling and
          flashing a weapon, that unnerves foes. Attempt Intimidation checks to
          Demoralize each enemy within 30 feet. If your last action was a
          critical hit against an enemy or reduced an enemy to 0 Hit Points, you
          gain a +1 circumstance bonus to your Intimidation checks. Regardless
          of the results of your checks, each creature is then temporarily
          immune to Dazzling Display for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Debilitating shot",
    action: "two_action",
    tags: ["fighter", "flourish"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Aiming for a weak point, you impede your foe with a precise shot. Make
          a ranged weapon Strike. If it hits and deals damage, the target is
          slowed 1 until the end of its next turn.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Disarming twist",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Athletics.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding only a single one-handed melee
            weapon and have your other hand or hands free.
          </span>
          <br />
          After your initial attack redirects your foe’s defenses, your
          follow-up wrests their weapon from their grasp. Make a melee Strike
          with the required weapon. In addition to its other effects, this
          Strike gains the success and critical success effects of the Disarm
          action. The Strike also has the following failure effect.
        </p>
        <p>
          <b>Failure</b> The target is flat-footed until the end of your current
          turn.
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Disruptive stance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          The slightest distraction can provoke your wrath, and you’re prepared
          to foil enemies’ actions. As long as you are in this stance, you can
          use Attack of Opportunity when a creature within your reach uses a
          concentrate action, in addition to manipulate and move actions.
          Furthermore, you disrupt a triggering concentrate or manipulate action
          if your Strike hits (not only if it’s a critical hit).
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Fearsome brute",
    action: "",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Fear makes your foes weak and more vulnerable to your attacks. You
          gain a circumstance bonus to damage rolls for Strikes against
          frightened creatures. The bonus is equal to double the target’s
          frightened value.
        </p>
        <p>
          If you have master proficiency in Intimidation, increase the bonus to
          triple the target’s frightened value.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Improved knockdown",
    action: "",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Knockdown.
          </span>
          <br />
          You can dash your foe to the ground with a single blow. When you use
          Knockdown, instead of making a Strike followed by a Trip, you can
          attempt a single Strike. If you do and your Strike hits, instead of
          rolling a check for your Trip attempt, you automatically apply the
          critical success effect of a Trip. If you used a two-handed melee
          weapon for the Strike, you can use the weapon’s damage die size
          instead of the regular die size for the damage from a critical Trip.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Mirror shield",
    action: "reaction",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Trigger</b> An opponent casting a spell that targets you critically
          fails a spell attack roll against your AC.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have a shield raised.
          </span>
          <br />
          You reflect the spell back against the triggering opponent. Make a
          ranged attack against the triggering creature using your highest
          proficiency with a ranged weapon. If you can cast spells, you can make
          a spell attack roll instead. If you succeed, your opponent takes the
          effects of a successful spell attack roll for their own spell (or the
          effects of a critical success if your attack roll was a critical
          success).
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Overpowering charge",
    action: "",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Barreling Charge.
          </span>
          <br />
          You trample foes as you charge past. When you use Barreling Charge and
          successfully move through a creature’s space, that creature takes
          bludgeoning damage equal to your Strength modifier. On a critical
          success, the creature takes double damage and is flat-footed until the
          end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Twin riposte",
    action: "reaction",
    tags: ["fighter"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Trigger</b> A creature within your reach critically fails a Strike
          against you.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are benefiting from Twin Parry.
          </span>
          <br />A clever parry with one weapon leaves your opponent open to an
          attack with the other weapon. Make a melee Strike or use a Disarm
          action against the triggering opponent.
        </p>
      </>
    ),
  },
  {
    id: 75,
    name: "Brutal finish",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a melee weapon in two hands.
          </span>
          <br />
          Your final blow can make an impact even if it rebounds off a foe’s
          defenses. Make a Strike with the required weapon. After the Strike,
          your turn ends. The Strike deals one extra weapon damage die, or two
          extra weapon damage dice if you’re at least 18th level. The Strike
          also gains the following failure effect.
        </p>
        <p>
          <b>Failure</b> You deal damage equal to one weapon damage die of the
          required weapon. Increase this to two dice if you’re at least 18th
          level.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Dueling dance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> Dueling Parry.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding only a single one-handed melee
            weapon and have your other hand or hands free.
          </span>
          <br />
          Using your free hand as pivot and balance, you both attack and defend
          with your weapon. While you are in this stance, you constantly have
          the benefits of Dueling Parry.
        </p>
      </>
    ),
  },
  {
    id: 77,
    name: "Flinging shove",
    action: "",
    tags: ["fighter"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Aggressive Block or Brutish Shove.
          </span>
          <br />
          Increase the distance you Shove your opponent with Aggressive Block or
          Brutish Shove to 10 feet on a success or 20 feet on a critical
          success. When you use Aggressive Block, you can choose whether the
          target is flat-footed or Shoved. When you make a Brutish Shove, you
          also Shove the target 5 feet on a failure.
        </p>
      </>
    ),
  },
  {
    id: 78,
    name: "Improved dueling riposte",
    action: "",
    tags: ["fighter"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Dueling Riposte.
          </span>
          <br />
          Your weapon whirls and darts, striking foes whenever the opportunity
          presents itself. At the start of each of your turns, you gain an
          additional reaction that you can use only to make a Dueling Riposte.
          You can use this extra reaction even if you are not benefiting from
          Dueling Parry.
        </p>
      </>
    ),
  },
  {
    id: 79,
    name: "Incredible ricochet",
    action: "one_action",
    tags: ["fighter", "concentrate", "press"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Incredible Aim.
          </span>
          <br />
          After your first shot singles out your opponent’s position, you direct
          another that ricochets around obstacles and strikes unerringly. Make a
          ranged weapon Strike against a creature you previously attacked this
          turn. You ignore the target’s concealed condition and all cover.
        </p>
      </>
    ),
  },
  {
    id: 80,
    name: "Lunging stance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> attack of opportunity, Lunge.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a melee weapon.
          </span>
          <br />
          Your body coiled to strike, you can lash out at distant enemies. While
          you are in this stance, you can use Attack of Opportunity against a
          creature that is outside your reach but within the reach you would
          have with a Lunge. If you do, you increase your range with the Strike
          by 5 feet.
        </p>
      </>
    ),
  },
  {
    id: 81,
    name: "Paragon's guard",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield.
          </span>
          <br />
          Once you’ve had a moment to set your stance, you always have your
          shield ready without a thought. While you are in this stance, you
          constantly have your shield raised as if you’d used the Raise a Shield
          action, as long as you meet that action’s requirements.
        </p>
      </>
    ),
  },
  {
    id: 82,
    name: "Spring attack",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are adjacent to an enemy.
          </span>
          <br />
          Springing away from one foe, you Strike at another. Stride up to your
          Speed, but you must end that movement within melee reach of a
          different enemy. At the end of your movement, make a melee Strike
          against an enemy now within reach. You can use Spring Attack while
          Burrowing, Climbing, Flying, or Swimming instead of Striding if you
          have the corresponding movement type.
        </p>
      </>
    ),
  },
  {
    id: 83,
    name: "Desperate finisher",
    action: "reaction",
    tags: ["fighter"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Trigger</b> You complete the last action on your turn, and your
          turn has not ended yet.
          <br />
          <span className="frequency">
            <b>Requirements</b> You meet the requirements to use an action with
            the press trait.
          </span>
          <br />
          You throw everything into one last press. Use a single action that you
          know with the press trait as part of Desperate Finisher. You forgo the
          ability to use reactions until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 84,
    name: "Determination",
    action: "one_action",
    tags: ["fighter", "concentrate"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Frequency</b> once per day.
          </span>
          <br />
          Your training allows you to shrug off your foes’ spells and conditions
          when the need is dire. Choose a single nonpermanent spell or condition
          that is affecting you. If you chose a condition, its effect on you
          ends. If you chose a spell, attempt to counteract the spell (your
          counteract level is equal to half your level, rounded up, and you
          attempt a Will save as your counteract check).
        </p>
        <p>
          This doesn’t remove any Hit Point damage normally dealt by the spell
          or condition, and it doesn’t prevent the spell or debilitating effect
          from affecting other allies or the environment around you. It can’t
          remove an ongoing affliction or prevent such an affliction from
          inflicting conditions on you later. It can’t remove conditions from
          the situation (such as prone or flanked). If the effect comes from a
          creature, hazard, or item of 20th level or higher, Determination can’t
          remove its effect on you.
        </p>
      </>
    ),
  },
  {
    id: 85,
    name: "Guiding finish",
    action: "one_action",
    tags: ["fighter", "press"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding only a single one-handed melee
            weapon and have your other hand or hands free.
          </span>
          <br />
          Using your weapon as a lever, you force your opponent to end up right
          where you want them. Make a Strike with the required weapon. If the
          Strike hits, you can move the target up to 10 feet into a space in
          your reach. You can move the target through your space during this
          movement. This follows the forced movement rules. Your Strike gains
          the following failure effect.
        </p>
        <p>
          <b>Failure</b> You can force the creature to move as you would on a
          success, but you can move the target only 5 feet.
        </p>
      </>
    ),
  },
  {
    id: 86,
    name: "Guiding riposte",
    action: "",
    tags: ["fighter"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Dueling Riposte.
          </span>
          <br />
          By shifting your weight and angling your weapon, you guide your
          opponent to a more favorable position. When you use Dueling Riposte to
          Strike and you hit, you can move the target up to 10 feet into a space
          in your reach. This follows the forced movement rules.
        </p>
      </>
    ),
  },
  {
    id: 87,
    name: "Improved twin riposte",
    action: "",
    tags: ["fighter"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Twin Riposte.
          </span>
          <br />
          Your weapons are a blur, blocking and biting at your foes. At the
          start of each of your turns, you gain an additional reaction that you
          can use only to perform a Twin Riposte. You can use this extra
          reaction even if you are not benefiting from Twin Parry.
        </p>
      </>
    ),
  },
  {
    id: 88,
    name: "Stance savant",
    action: "",
    tags: ["fighter"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You roll initiative.
          </span>
          <br />
          When there’s imminent danger, you drop into a stance with a mere
          thought. Use an action that has the stance trait.
        </p>
      </>
    ),
  },
  {
    id: 89,
    name: "Two-weapon flurry",
    action: "one_action",
    tags: ["fighter", "flourish", "press"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two weapons, each in a
            different hand.
          </span>
          <br />
          You lash out with both your weapons in a sudden frenzy. Strike twice,
          once with each weapon.
        </p>
      </>
    ),
  },
  {
    id: 90,
    name: "Whirlwind strike",
    action: "three_action",
    tags: ["fighter", "flourish", "open"],
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
    id: 91,
    name: "Graceful poise",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Double Slice.
          </span>
          <br />
          With the right positioning, your off-hand weapon can strike like a
          scorpion’s stinger. While you are in this stance, if you make your
          second Strike from Double Slice with an agile weapon, Double Slice
          counts as one attack when calculating your multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 92,
    name: "Improved reflexive shield",
    action: "",
    tags: ["fighter"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Reflexive Shield.
          </span>
          <br />
          Your shield can help save nearby allies. When you use Shield Block
          against damage resulting from a Reflex save, adjacent allies who would
          take damage due to Reflex saves against the same effect also benefit
          from the damage reduction.
        </p>
      </>
    ),
  },
  {
    id: 93,
    name: "Multishot stance",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> Triple Shot.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon with reload 0.
          </span>
          <br />
          You lock yourself in a stable position so you can fire swiftly and
          accurately. While you are in this stance, your penalty for Double Shot
          is reduced to –1, or –2 if you add the extra action to make three
          Strikes. If you move from your position, this stance ends.
        </p>
      </>
    ),
  },
  {
    id: 94,
    name: "Overwhelming blow",
    action: "three_action",
    tags: ["fighter"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You throw your weight into a powerful attack that leaves you
          vulnerable. Make a melee Strike. This counts as three attacks when
          calculating your multiple attack penalty. If this Strike hits, you get
          a critical hit. If you roll a critical hit, your attack also gains the
          deadly d12 trait. Whether or not you hit, you become stunned 1 and are
          flat-footed until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 95,
    name: "Twinned defense",
    action: "one_action",
    tags: ["fighter", "stance"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> Twin Parry.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, one in each
            hand.
          </span>
          <br />
          You’re always ready to use your off-hand weapon to interfere with
          attacks against you. While you are in this stance, you constantly gain
          the benefits of the Twin Parry action.
        </p>
      </>
    ),
  },
  {
    id: 96,
    name: "Impossible volley",
    action: "three_action",
    tags: ["fighter", "flourish", "open"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon with the volley
            trait and reload 0.
          </span>
          <br />
          You fire a volley at all foes in an area. Make one Strike with a –2
          penalty against each enemy within a 10-foot-radius burst centered at
          or beyond your weapon’s volley range. Roll the damage only once for
          all targets.
        </p>
        <p>
          Each attack counts toward your multiple attack penalty, but do not
          increase your penalty until you have made all your attacks.
        </p>
      </>
    ),
  },
  {
    id: 97,
    name: "Savage critical",
    action: "",
    tags: ["fighter"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          The wounds you inflict are grievous. When you Strike with a weapon or
          unarmed attack for which you have legendary proficiency, you
          critically succeed if you roll a 19 on the die as long as that result
          is a success. This has no effect on a 19 if the result would be a
          failure.
        </p>
      </>
    ),
  },
  {
    id: 98,
    name: "Smash from the air",
    action: "",
    tags: ["fighter"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Cut From the Air.
          </span>
          <br />
          Your expertise enables you to knock away spells. You can use Cut from
          the Air against ranged spell attack rolls.
        </p>
      </>
    ),
  },
  {
    id: 99,
    name: "Boundless reprisals",
    action: "",
    tags: ["fighter"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          With a sixth sense for the flow of combat, you can quickly react to
          any situation as required. At the start of each enemy’s turn, you gain
          a reaction you can use only during that turn for any reaction from a
          fighter feat or class feature.
        </p>
      </>
    ),
  },
  {
    id: 100,
    name: "Sever space",
    action: "two_action",
    tags: ["uncommon", "fighter", "conjuration", "flourish", "teleportation"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a weapon that deals slashing
            damage or have an unarmed Strike that deals slashing damage.
          </span>
          <br />
          You destroy the space between you and your targets, allowing you to
          strike with your melee weapons at great range. Make a melee Strike
          with the required weapon or unarmed attack. The attack gains an
          80-foot reach for this Strike.
        </p>
        <p>
          After the Strike, regardless of whether it succeeded, the world rushes
          to fill the space you destroyed, bringing you and the target adjacent
          to each other. You can choose to teleport to the closest space
          adjacent to the target or to attempt to teleport the target adjacent
          to you. If you choose the target, they can negate the teleportation if
          they succeed at a Fortitude save against your class DC.
        </p>
      </>
    ),
  },
  {
    id: 101,
    name: "Ultimate Flexibility",
    action: "",
    tags: ["fighter"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> improved flexibility.
          </span>
          <br />
          Your experience keeps you on your toes, making you adaptable to even
          the most dangerous challenges. When you gain a fighter feat using
          combat flexibility, you gain three fighter feats instead of two. While
          the first feat must still be 8th level or lower, the second feat can
          be up to 14th level, and the third feat can be up to 18th level. You
          can use the first feat to meet the prerequisites of the second or
          third feats and the second feat to meet the prerequisites of the third
          feat. You must meet all feats’ prerequisites. In addition, you can
          adapt to the battlefield’s challenges by spending 1 hour to train. If
          you do, you can reselect the feats chosen with combat flexibility as
          if you had made your daily preparations. You can’t trade out
          limited-use abilities that you’ve already used, such as Determination.
        </p>
      </>
    ),
  },
  {
    id: 102,
    name: "Weapon supremacy",
    action: "",
    tags: ["fighter"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your skill with weapons lets you attack swiftly at all times. You’re
          permanently quickened. You can use your extra action only to Strike.
        </p>
      </>
    ),
  },
];
