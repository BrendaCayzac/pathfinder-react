import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const GunslingerFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Blast lock",
    action: "one_action",
    tags: ["gunslinger", "attack"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm.
          </span>
          <br />
          Sometimes taking the shortest distance between two points involves
          removing an obstacle or two. You shoot your firearm at a lock within
          10 feet. Make an attack roll against the DC required to Pick the Lock.
        </p>
        <p>
          <b>Critical Success</b> You open the lock, or you achieve two
          successes toward opening a complex lock.
        </p>
        <p>
          <b>Success</b> You open the lock, or you achieve one success toward
          opening a complex lock.
        </p>
        <p>
          <b>Failure</b> You fail to open the lock, and your shot makes it
          harder to open. Future attempts to Pick the Lock or Blast the Lock
          take a –2 circumstance penalty.
        </p>
        <p>
          <b>Critical Failure</b> You fail to open the lock, and your shot makes
          it much harder to open. Future attempts to Pick the Lock or Blast the
          Lock take a –4 circumstance penalty.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Cover fire",
    action: "one_action",
    tags: ["gunslinger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow.
          </span>
          <br />
          You lay down suppressive fire to protect allies by forcing foes to
          take cover from your wild attacks. Make a firearm or crossbow Strike;
          the target must decide before you roll your attack whether it will
          duck out of the way. If the target ducks, it gains a +2 circumstance
          bonus to AC against your attack, or a +4 circumstance bonus to AC if
          it has cover. It also takes a –2 circumstance penalty to ranged attack
          rolls until the end of its next turn. If the target chooses not to
          duck, you gain a +1 circumstance bonus to your attack roll for that
          Strike.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Crossbow crack shot",
    action: "",
    tags: ["gunslinger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You have a deep understanding of the crossbow. When you’re wielding a
          crossbow and Interact to reload it, including Interact actions as part
          of your slinger’s reload and similar effects, you gain a +2
          circumstance bonus to the damage roll on your next Strike with that
          crossbow. As normal, this isn’t cumulative with the +1 circumstance
          bonus from singular expertise. If the crossbow is a simple crossbow,
          also increase the damage die size for that attack by one step. You
          must make the attack before the end of your turn or these benefits are
          lost.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "dual-weapon reload",
    action: "one_action",
    tags: ["gunslinger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding two one-handed weapons, each in
            a different hand, one of which is a ranged weapon.
          </span>
          <br />
          You carry your ammunition in a way that allows you to reload while
          holding two weapons. You Interact to reload a one-handed ranged weapon
          you’re holding. Unlike most Interact actions, you don’t need a free
          hand to reload your ranged weapon in this way.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Hit the dirt!",
    action: "reaction",
    tags: ["gunslinger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> A creature you can see attempts a ranged Strike
            against you.
          </span>
          <br />
          You fling yourself out of harm’s way. You Leap. Your movement gives
          you a +2 circumstance bonus to AC against the triggering attack.
          Regardless of whether or not the triggering attack hits, you land
          prone after completing your Leap.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Munitions crafter",
    action: "",
    tags: ["gunslinger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          Bullets and bombs can be scarce in some parts, so you’ve learned to
          make your own. You become trained in Crafting and gain the alchemist’s
          infused reagents class feature, gaining a number of reagents each day
          equal to your level. You also gain the Alchemical Crafting feat and
          four additional formulas for 1st-level alchemical items.
        </p>
        <p>
          You gain infused reagents (a pool of reagents usable to make
          alchemical items) and advanced alchemy (allowing you to make
          alchemical items during your daily preparations without the normal
          cost or time expenditure). You gain batches of infused reagents per
          day equal to your level, which you can use to create only bombs or
          alchemical ammunition. Your advanced alchemy level for creating these
          is 1 and doesn’t increase on its own. If you use a batch of infused
          reagents to create basic level-0 ammunition such as black powder
          cartridges or black powder doses, you produce 10 rounds of ammunition.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Sword and pistol",
    action: "",
    tags: ["gunslinger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You’re comfortable wielding a firearm or crossbow in one hand and a
          melee weapon in the other, combining melee attacks with shots from the
          firearm. When you make a successful ranged Strike against an enemy
          within your reach with your one-handed firearm or one-handed crossbow,
          that enemy is flat-footed against your next melee attack with a
          one-handed melee weapon.
        </p>
        <p>
          When you make a successful melee Strike against an enemy with your
          one-handed melee weapon, the next ranged Strike you make against that
          enemy with a one-handed firearm or one-handed crossbow doesn’t trigger
          reactions that would trigger on a ranged attack but not a melee
          attack, such as Attack of Opportunity. Either of these benefits is
          lost if not used by the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Defensive armaments",
    action: "",
    tags: ["gunslinger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You use bulky firearms or crossbows to shield your body from your
          foes’ attacks. Any two-handed firearms and two-handed crossbows you
          wield gain the parry trait. If an appropriate weapon already has the
          parry trait, increase the circumstance bonus to AC it grants when used
          to parry from +1 to +2.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Fake out",
    action: "reaction",
    tags: ["gunslinger", "visual"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Trigger</b> An ally is about to use an action that requires an
          attack roll, targeting a creature within your weapon’s first range
          increment.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow.
          </span>
          <br />
          With a skilled flourish of your weapon, you force an enemy to
          acknowledge you as a threat. Make an attack roll to Aid the triggering
          attack. If you dealt damage to that enemy with the same weapon since
          the start of your last turn, you gain a +1 circumstance bonus to this
          roll.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Pistol twirl",
    action: "one_action",
    tags: ["gunslinger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Deception.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded one-handed ranged
            weapon.
          </span>
          <br />
          Your quick gestures and flair for performance distract your opponent,
          leaving it vulnerable to your follow-up attacks. You Feint against an
          opponent within the required weapon’s first range increment, rather
          than an opponent within melee reach. If you succeed, the foe is
          flat-footed against your melee and ranged attacks, rather than only
          your melee attacks. On a critical failure, you’re flat-footed against
          the target’s melee and ranged attacks, rather than only its melee
          attacks.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Quick draw",
    action: "one_action",
    tags: ["gunslinger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You draw your weapon and attack with the same motion. You Interact to
          draw a weapon, then Strike with that weapon.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Risky reload",
    action: "one_action",
    tags: ["gunslinger", "flourish"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a firearm.
          </span>
          <br />
          You’ve practiced a technique for rapidly reloading your firearm, but
          attempting to use this technique is a dangerous gamble with your
          firearm’s functionality. Interact to reload a firearm, then make a
          Strike with that firearm. If the Strike fails, the firearm misfires.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Warning shot",
    action: "one_action",
    tags: ["gunslinger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Intimidation.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm.
          </span>
          <br />
          Who needs words when the roar of a gun is so much more succinct? You
          attempt to Demoralize a foe by firing your weapon into the air, using
          the firearm’s maximum range rather than the usual range of 30 feet.
          This check doesn’t take the –4 circumstance penalty if the target
          doesn’t share a language with you.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Alchemical shot",
    action: "two_action",
    tags: ["gunslinger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You have an alchemical bomb worn or in one hand,
            and are wielding a firearm or crossbow in the other.
          </span>
          <br />
          You’ve practiced a technique for mixing alchemical bombs with your
          loaded shot. You Interact to retrieve the bomb (if it’s not already in
          your hand) and pour its contents onto your ammunition, consuming the
          bomb. Next, Strike with your firearm. The Strike deals damage of the
          same type as the bomb (for instance, fire damage for alchemist’s
          fire), and it deals an additional 1d6 persistent damage of the same
          type as the bomb. If the Strike is a failure, you take 1d6 damage of
          the same type as the bomb you used, and the firearm misfires.
        </p>
        <p>
          The persistent damage increases to 2d6 if the bomb is 11th level or
          higher, or 3d6 if it’s 17th level or higher.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Black powder boost",
    action: "one_action",
    tags: ["gunslinger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm.
          </span>
          <br />
          You fire your weapon as you jump, using the kickback to go farther.
          You Leap and discharge your firearm to add a +10-foot status bonus to
          the distance traveled. If you spend 2 actions for Black Powder Boost,
          you High Jump or Long Jump instead.
        </p>
        <p>
          <b>Special</b> An ability that allows you to High Jump or Long Jump as
          a single action (like the Quick Jump skill feat) lets you use Black
          Powder Boost as a single action for those jumps as well.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Greenwatch initiate",
    action: "",
    tags: ["rare", "gunslinger", "investigation", "ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Survival.
          </span>
          <br />
          You’ve received the basic training developed for all Greenwatch
          recruits. You become an expert in Survival and gain the Experienced
          Tracker and Survey Wildlife skill feats.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Instant Backup",
    action: "reaction",
    tags: ["gunslinger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> Your attack with a firearm misfires.
          </span>
          <br />
          Even as your firearm misfires, you quickly draw a backup weapon.
          Release the misfired weapon if you so choose, and Interact to draw a
          one-handed weapon.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Instant Backup",
    action: "one_action",
    tags: ["uncommon", "gunslinger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Firebrands</i>
          <br />
          <br />
          <b>Prerequisites</b> trained in Performance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding two one-handed firearms.
          </span>
          <br />
          Every good Firebrand knows that style can be as important as
          substance—so long as you don’t screw up the delivery. Make a
          Performance check against an easy DC for your level as you spin your
          guns around and juggle ammunition to reload them.
        </p>
        <p>
          <b>Critical Success</b> You Interact to reload up to two firearms you
          are currently wielding.
        </p>
        <p>
          <b>Success</b> You Interact to reload a single firearm you are
          currently wielding.
        </p>
        <p>
          <b>Failure</b> You drop one of the required firearms and a round of
          ammunition on the ground in your space.
        </p>
        <p>
          <b>Critical Failure</b> You drop both firearms and two rounds on the
          ground in your space.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Paired shots",
    action: "two_action",
    tags: ["gunslinger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding two weapons, each of which can
            be either a loaded one-handed firearm or loaded one-handed crossbow.
          </span>
          <br />
          Your shots hit simultaneously. Make two Strikes, one with each of your
          two ranged weapons, each using your current multiple attack penalty.
          Both Strikes must have the same target.
        </p>
        <p>
          If both attacks hit, combine their damage and then add any applicable
          effects from both weapons. You add any precision damage, only once, to
          the attack of your choice. Combine the damage from both Strikes and
          apply resistances and weaknesses only once. This counts as two attacks
          when calculating your multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Running reload",
    action: "one_action",
    tags: ["gunslinger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You can reload your weapon on the move. You Stride, Step, or Sneak,
          then Interact to reload.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Advanced shooter",
    action: "",
    tags: ["gunslinger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You’ve dedicated your training to the most complex and weird weapons
          of your favorite group. Choose firearms or crossbows. You gain
          proficiency with all advanced firearms as if they were martial
          firearms or with all advanced crossbows as if they were martial
          crossbows.
        </p>
      </>
    ),
  },
];
