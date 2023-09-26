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
  {
    id: 22,
    name: "Cauterize",
    action: "one_action",
    tags: ["gunslinger", "flourish"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm and you or an
            adjacent ally are taking persistent bleed damage.
          </span>
          <br />
          You use the smoking barrel of your firearm to sear shut a bleeding
          wound. Make a Strike with your firearm. You then press the heated
          barrel to the wounds of you or an ally within reach that is taking
          persistent bleed damage, giving an immediate flat check to end the
          bleed with the lower DC for particularly effective assistance.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Defy fey",
    action: "",
    tags: ["rare", "gunslinger", "investigate", "ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible lands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Greenwatch Initiate.
          </span>
          <br />
          You are keen to the wiles of the fey and can usually shake off their
          magic. Whenever you fail, but don’t critically fail, a save against a
          spell with a duration of at least 1 round cast by a fey creature, you
          can attempt a second save against the original DC at the start of your
          next turn to end any lingering effects the spell might have. This can
          end persistent damage caused by a spell but can’t reverse any effects
          that have been resolved already (such as damage dealt when the spell
          was cast).
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Drifter's juke",
    action: "two_action",
    tags: ["gunslinger", "flourish"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> way of the drifter.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a firearm or crossbow in one
            hand, and your other hand is either wielding a melee weapon or is
            empty.
          </span>
          <br />
          You move in and out of range to complement your attacks. You Step,
          make a Strike, Step, and make another Strike. One Strike must be a
          ranged Strike using your firearm or crossbow, and the other must be a
          melee Strike using your melee weapon or unarmed attack. You can choose
          not to take one or both Steps.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Fey Tracer",
    action: "",
    tags: ["rare", "gunslinger", "investigator", "ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Greenwatch Initiate.
          </span>
          <br />
          You are exceptionally skilled at noticing the subtle techniques fey
          use to avoid notice. You gain a +2 circumstance bonus to Survival
          checks to Track fey creatures, to Perception checks to Seek for hidden
          fey, and to your Perception DC to resist a fey creature’s attempt to
          Create a Diversion.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Munitions Machinist",
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
          <span className="frequency">
            <b>Prerequisites</b> Munitions Crafter, expert in Crafting.
          </span>
          <br />
          You’re particularly adept at crafting ammunition and bombs. Your
          advanced alchemy level for ammunition and bombs increases to your
          level – 3.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Nightwave springing reload",
    action: "one_action",
    tags: ["uncommon", "gunslinger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Firebrands</i>
          <br />
          <br />
          Training with the crew of the Nightwave has taught you their technique
          for reloading while leaping to board another ship. You Leap and then
          Interact to reload, or Interact to reload and then Leap. You can
          perform this ability as a 2-action activity to use your Leap to High
          Jump or Long Jump without needing to Stride at least 10 feet first.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Phalax breaker",
    action: "two_action",
    tags: ["gunslinger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Firebrands</i>
          <br />
          <br />
          <b>Prerequisites</b> way of the vanguard.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a two-handed firearm or a
            two-handed crossbow.
          </span>
          <br />
          You know that to take out an enemy formation, you must punch a hole
          through its center. Make a ranged Strike with the required weapon
          against a target within the weapon’s first range increment. The target
          is pushed directly back 10 feet (20 feet on a critical hit), and if
          this pushes the target into an obstacle, the target takes bludgeoning
          damage equal to half your level.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Pistolero's challenge",
    action: "one_action",
    tags: ["gunslinger", "auditory", "flourish", "linguistic", "mental"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> way of the pistolero.
          </span>
          <br />
          With a stern call, carefully chosen barb, or some other challenging
          declaration, you demand your foe’s attention in a duel. Choose an
          opponent within 30 feet who you can perceive and can hear you, and
          make your choice of a Deception or Intimidation check against the
          target’s Will DC. No matter the result of the check, the foe is
          temporarily immune to your Pistolero’s Challenge until noon the next
          day.
        </p>
        <p>
          <b>Success</b> Both you and the opponent gain a +2 status bonus to
          damage rolls with Strikes made against each other. If you’re a master
          in the skill you used for the check, the status bonus to damage rolls
          increases to +3, and if you’re legendary, it increases to +4.
        </p>
        <p>
          You can have only one challenge in effect at a time; challenging a new
          opponent ends this effect on any current target. Otherwise, the effect
          lasts until one of you is defeated, flees, or the encounter ends.
        </p>
        <p>
          <b>Critical Failure</b> You become frightened 1 and can’t use this
          ability again for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Scatter blast",
    action: "two_action",
    tags: ["gunslinger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm that has the
            scatter trait.
          </span>
          <br />
          You pack your weapon with additional shot and powder, creating a risky
          but devastating wave of destruction. Make a ranged Strike with the
          firearm. The firearm’s range increment increases by 20 feet and the
          radius of its scatter increases by 20 feet. The Strike gains the
          following failure conditions.
        </p>
        <p>
          <b>Failure</b> The firearm misfires, but it doesn’t cause the other
          critical failure effects listed below.
        </p>
        <p>
          <b>Critical Failure</b> The firearm misfires and also explodes. It
          becomes broken, and it deals its normal weapon damage to all creatures
          in a 20-foot burst centered on the firearm, with a basic Reflex save
          against your class DC. This damage includes any from the weapon’s
          fundamental and property runes.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Sniper's aim",
    action: "two_action",
    tags: ["gunslinger", "concentrate"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> way of the sniper.
          </span>
          <br />
          You take an extra moment to carefully sync your aim and breathing,
          then fire a shot with great accuracy. Make a ranged weapon Strike. You
          gain a +2 circumstance bonus to this Strike’s attack roll and ignore
          the target’s concealment. If you’re using a kickback firearm, you
          don’t take the normal circumstance penalty on this Strike for not
          having the required Strength score or firing without using a
          stabilizer.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Triggerbrand salvo",
    action: "one_action",
    tags: ["gunslinger", "flourish"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <b>Prerequisites</b> way of the triggerbrand.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a combination weapon.
          </span>
          <br />
          You slice, stab, or batter your opponent with the melee portion of
          your combination weapon before pulling the trigger at point-blank
          range. Make a melee Strike with your combination weapon. If the Strike
          is successful, you can immediately make a ranged Strike against the
          same target with that combination weapon, and you get a +2
          circumstance bonus to the attack roll. This counts as two attacks
          toward your multiple attack penalty, but you don’t apply the multiple
          attack penalty until after making both attacks.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Bullet split",
    action: "one_action",
    tags: ["gunslinger", "flourish"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a firearm or crossbow in one
            hand and a slashing (or versatile S) melee weapon in the other.
          </span>
          <br />
          You carefully align your weapon with the edge of your blade, splitting
          the projectile in two as you fire to attack two different targets.
          Make two Strikes, one each against two separate targets. The targets
          must be adjacent to each other and within your weapon’s maximum range.
          Each of these attacks takes a –2 penalty to the attack roll, but the
          two count as only one attack when calculating your multiple attack
          penalty.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Greenwatch veteran",
    action: "",
    tags: ["rare", "gunslinger", "investigator", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> Your turn starts, and you’re in combat against a
            creature you spent at least 10 minutes Tracking.
          </span>
          <br />
          Your time spent tracking your target allows you to quickly identify
          its weaknesses and relay them to your allies. Attempt a Recall
          Knowledge check against the creature you were Tracking. On a success,
          you always know the creature’s greatest weakness and highest
          resistance or immunity, in addition to any other information the check
          would typically provide. You immediately use a quick series of hand
          gestures to signal this information to any allies who can see you.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Grit and tenacity",
    action: "reaction",
    tags: ["gunslinger", "fortune"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Frequency</b> once per hour.
          <br />
          <span className="frequency">
            <b>Trigger</b> You fail a Fortitude or Will save.
          </span>
          <br />
          You call upon deep reserves of toughness and mental fortitude to power
          through an otherwise debilitating effect. Reroll the triggering save
          with a +2 circumstance bonus; you must use the second result.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Leap and fire",
    action: "",
    tags: ["gunslinger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Hit the Dirt!
          </span>
          <br />
          You’re quick enough to line up a shot even while diving to the ground.
          When you use your Hit the Dirt! reaction, at any point during your
          Leap you can also make a ranged Strike with a loaded firearm or
          crossbow, targeting the creature whose attack triggered the reaction.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Smoke curtain",
    action: "two_action",
    tags: ["gunslinger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm and are wearing
            or holding a dose of black powder.
          </span>
          <br />
          You load an extra dose of powder into your shot, causing it to belch a
          cloud of smoke. You make a Strike with your firearm and create a cloud
          of smoke in a 20-foot emanation centered on your location. Creatures
          are concealed while within the smoke, and creatures outside the area
          are concealed to creatures within the smoke. The smoke dissipates at
          the start of your next turn. If your Strike is a critical failure,
          your firearm misfires.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Stab and blast",
    action: "one_action",
    tags: ["gunslinger", "flourish"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a firearm with an attached
            bayonet or reinforced stock, a fire lance, or a combination weapon.
          </span>
          <br />
          You slice or smash your opponent with the melee portion of your weapon
          before pulling the trigger at point-blank range. Make a melee Strike
          with the required weapon. If the Strike is successful, you can
          immediately make a ranged Strike against the same target with a +2
          circumstance bonus to the attack roll. This counts as two attacks
          toward your multiple attack penalty, but you don’t apply the multiple
          attack penalty until after making both attacks.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Unseen passage",
    action: "",
    tags: ["rare", "gunslinger", "investigator", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Frequency</b> once per day.
          </span>
          <br />
          You have mastered a magical technique for moving through dangerous
          woodlands unseen. You can cast pass without trace as an innate primal
          spell heightened to a spell level equal to half your level rounded up.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Called shot",
    action: "two_action",
    tags: ["gunslinger", "flourish"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You target a specific area of your foe’s anatomy to debilitating
          effect. Declare a part of your foe’s anatomy to target and make a
          ranged weapon Strike. If you hit and deal damage, the target takes one
          of the following effects, based on the body part you targeted. The GM
          should use the stated effects as a guideline when attacking creatures
          with stranger anatomy—for instance, applying the “arms” effect to a
          creature’s tentacles if those are what the creature uses to attack.
        </p>
        <ul>
          <li>
            <b>Arms</b> The target is enfeebled 2 until the end of your next
            turn. On a critical hit, it’s also enfeebled 1 for 1 minute.
          </li>
          <li>
            <b>Head</b> The target is stupefied 2 until the end of your next
            turn. On a critical hit, it’s also stupefied 1 for 1 minute.
          </li>
          <li>
            <b>Legs</b> The target takes a –10-foot status penalty to its Speeds
            until the end of your next turn. On a critical hit, it also takes a
            –5-foot penalty to its Speeds for 1 minute.
          </li>
          <li>
            <b>Wings</b> If the target is flying using its wings, it immediately
            falls 20 feet, or 40 feet on a critical hit. The fall is gradual
            enough that if the target hits the ground, it takes no damage from
            the fall.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 41,
    name: "Deflecting shot",
    action: "reaction",
    tags: ["gunslinger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Trigger</b> An ally within the first range increment of your
          firearm or crossbow is hit by an attack, and you can see the attacker.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow.
          </span>
          <br />
          You’re always ready to take a quick shot to deflect a weapon or
          distract a foe enough to render them off target. The ally gains a +2
          circumstance bonus to their AC against the triggering attack. You use
          this reaction after the result of the attack roll is revealed, so you
          know whether the +2 will make a sufficient difference.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Greenwatcher",
    action: "",
    tags: ["rare", "gunslinger", "investigation", "ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible lands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Defy Fey.
          </span>
          <br />
          Your experience fighting against and alongside fey creatures is nearly
          unrivaled. Any weapon you wield or unarmed attack you make against a
          fey creature is treated as cold iron. Whenever you critically fail a
          save against a spell cast by a fey creature, it’s instead treated as a
          normal failure. Whenever you critically succeed on a Strike against a
          fey creature, the target is immediately subject to the effects of a
          faerie fire spell. For the purposes of counteracting this effect, it’s
          an innate 2nd-level primal spell.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Penetrating fire",
    action: "two_action",
    tags: ["gunslinger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow.
          </span>
          <br />
          You blast a bullet through one foe and into another. Choose two
          targets, one of which would give the other lesser cover against your
          ranged attacks. Make a single ranged Strike with the required weapon
          against both targets. This attack ignores any lesser cover the nearer
          target provides the other. Roll damage only once and apply it to each
          creature you hit. Penetrating Fire counts as two attacks for your
          multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Precious munitions",
    action: "",
    tags: ["gunslinger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Munitions Machinist.
          </span>
          <br />
          You mix flecks of precious materials you’ve gathered on your journeys
          into your custom bullets to bring out those properties in your
          temporary ammunition. You can use advanced alchemy to create
          standard-grade adamantine, cold iron, or silver ammunition, spending 1
          batch of reagents per piece of ammunition. At 15th level, you can
          create high-grade adamantine, cold iron, or silver ammunition.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Rebounding assault",
    action: "two_action",
    tags: ["gunslinger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or loaded
            crossbow in one hand and a bludgeoning or slashing melee weapon in
            the other.
          </span>
          <br />
          You hurl your melee weapon at an opponent, then fire a bullet into the
          weapon’s hilt, making it deal additional damage and bounce back to
          your grasp. Make a thrown ranged Strike with the melee weapon, then a
          ranged Strike with your firearm. Both Strikes use the same multiple
          attack penalty. If the melee weapon doesn’t already have the thrown
          trait, it gains the thrown 10 feet trait during a Rebounding Assault.
        </p>
        <p>
          If both attacks are successful, the bolt or bullet hits the thrown
          melee weapon instead of your target, adding its force into one attack.
          Combine the damage from both Strikes, using the thrown weapon’s damage
          type, and add an additional 1d6 precision damage. The impact sends the
          melee weapon rebounding off the target and back to your hand.
        </p>
        <p>
          In any circumstance other than both attacks hitting, carry out the
          individual Strikes normally. The thrown weapon doesn’t rebound and
          remains in the target’s space as normal for thrown weapons.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Redirecting shot",
    action: "reaction",
    tags: ["gunslinger", "fortune"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Trigger</b> An ally misses with a ranged attack that uses a thrown
          weapon or ammunition. The ally must be willing to accept your
          assistance, you must see the attack’s target, and the attack’s target
          must be within the first range increment of your firearm or crossbow.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow.
          </span>
          <br />
          Seeing your ally’s attack about to go astray, you fire your weapon to
          right its course. Discharge your firearm and roll a d20. Your ally
          uses this roll instead of their own, and the attack ignores bonuses
          the target would gain against the attack from lesser or standard
          cover.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Trick shot",
    action: "two_action",
    tags: ["gunslinger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded crossbow or firearm.
          </span>
          <br />
          You shoot not at your foe but at an object nearby. Make a Strike with
          your firearm against an AC equal to an easy DC for your level (see
          Table 10-6: DC Adjustments in the Core Rulebook). On a success,
          instead of hitting your foe, your attack hits an object behind or to
          the side of your target, creating one of the following effects. The GM
          might determine that a different AC is appropriate or that a
          particular effect isn’t a valid option, such as using the explosive
          barrel option when there’s no such object on the battlefield. The GM
          should inform you if a Trick Shot is feasible before you spend your
          actions, since your trained eye can easily recognize loose or volatile
          objects.
        </p>
        <ul>
          <li>
            <b>Dislodge Object</b> Your attack knocks an unattended object of no
            more than 2 Bulk out of position, moving it up to 10 feet in a
            direction of your choice. For example, the weapon could knock a
            wizard’s crystal ball off a table.
          </li>
          <li>
            <b>Explosive Barrel</b> Your attack strikes a barrel of expensive
            rum, a vial of volatile alchemical fluids, a demonic pustule
            erupting from the earth, or some other explosive object. The object
            explodes in a 20-foot burst, and creatures in the area take 6d6
            damage with a basic Reflex save against your class DC. The damage
            type is chosen by the GM, based on the exploding object. Increase
            the damage by 1d6 for every 2 levels you have above 10th.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 48,
    name: "Twin shot knockdown",
    action: "two_action",
    tags: ["gunslinger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded crossbow or loaded
            firearm in each hand.
          </span>
          <br />
          You fire at an enemy while targeting a part of its anatomy that will
          disrupt its balance. Make two Strikes against the same target, one
          with each of the required weapons. If both Strikes are successful, the
          target is also knocked prone.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Blood in the air",
    action: "one_action",
    tags: ["gunslinger", "concentrate"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> An enemy you’ve damaged with a ranged weapon
            during the last minute is concealed or hidden from you.
          </span>
          <br />
          Once you’ve locked on to a target, little can obscure your aim. Make a
          ranged weapon Strike against the required target. This Strike ignores
          the target’s concealed condition and reduces the flat check for the
          hidden condition from 11 to 5.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Deadeye",
    action: "one_action",
    tags: ["gunslinger", "concentrate"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You relax your eyes, taking in the smallest movements of objects,
          stirring of grass and leaves, and other signs of the presence of
          hidden things, granting you the ability to locate invisible creatures.
          Until the start of your next turn, you can see invisible creatures and
          objects as silhouettes defined by the movement of air, slight
          depressions in the ground, and other tells that less-keen eyes would
          overlook, which makes them merely concealed from you.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Flesh wound",
    action: "one_action",
    tags: ["gunslinger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You fire to ensure that even if your shot doesn’t land cleanly, it
          still lands close enough to deal some damage. Make a ranged Strike. It
          gains the following effect on a failure (though not a critical
          failure).
        </p>
        <p>
          <b>Failure</b> Though your attack misses, it still deals one die of
          damage plus any damage from your weapon specialization class feature.
          This uses your weapon’s normal damage die and damage type. This attack
          doesn’t add extra damage from any other sources or abilities.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Ricochet shot",
    action: "one_action",
    tags: ["gunslinger", "concentrate"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You bounce your shot off a nearby surface to strike your opponent from
          an unexpected angle. When determining whether a target has cover from
          your ranged attack with a firearm or crossbow, you can choose one
          solid surface within your weapon’s first range increment to ricochet
          your shot off of. If you do, you determine the target’s cover from the
          point where you ricochet your shot instead of from you.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Shattering shot",
    action: "one_action",
    tags: ["gunslinger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or loaded
            crossbow and are wearing or holding an alchemical bomb.
          </span>
          <br />
          You fling a bomb into the air and then shoot it with your gun before
          it falls, raining destruction down over a wide area. If necessary, you
          Interact to draw the bomb and regrip your weapon. You throw your bomb
          to the corner of a square within your firearm’s first range increment
          and shoot it with your firearm. All creatures in a 15-foot burst of
          the bomb take the bomb’s normal damage with a basic Reflex save
          against your class DC. They don’t take any splash or persistent damage
          the bomb would deal normally.
        </p>
      </>
    ),
  },
  {
    id: 54,
    name: "Shooter's camouflage",
    action: "",
    tags: ["gunslinger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> master in Stealth.
          </span>
          <br />
          You specialize in blending into a particular type of environment, able
          to disappear after taking your shot. Choose either natural or urban
          terrain. In the chosen terrain, you can Hide and Sneak even without
          cover or being concealed.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Unshakable grit",
    action: "",
    tags: ["gunslinger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Grit and Tenacity.
          </span>
          <br />
          You’ve become hardened by conflict after everything you’ve faced, and
          you possess a certain intractable stubbornness. If the reroll granted
          to you by your Grit and Tenacity reaction is a success, you get a
          critical success instead; if it’s a critical failure, you get a
          failure instead.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Blast tackle",
    action: "two_action",
    tags: ["gunslinger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> way of the vanguard.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a two-handed crossbow or a
            firearm that has the kickback or scatter trait.
          </span>
          <br />
          You throw yourself at an enemy, bracing your weapon against it and
          pulling it close before releasing a destructive shot. Attempt to
          Grapple; if you’re wielding your weapon in both hands, you Release one
          hand to do so. If your Grapple succeeds, you can immediately Strike
          the target of the Grapple with the required weapon, even if it’s a
          two-handed weapon you’re holding in one hand. This Strike deals an
          additional 3d6 precision damage.
        </p>
        <p>
          As long the creature remains grabbed or restrained, you can use just
          one hand to reload the weapon and Strike that creature with it.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Come at me!",
    action: "",
    tags: ["gunslinger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Pistolero’s Challenge.
          </span>
          <br />
          You’re a legendary duelist, welcoming all challengers, enabling you to
          challenge many foes even while other challenges are active. There is
          no longer a limit to the number of Pistolero’s Challenges you can have
          in effect at one time.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Dance of thunder",
    action: "three_action",
    tags: ["gunslinger", "concentrate"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Frequency</b> once per minute.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow and
            are not fatigued.
          </span>
          <br />
          Your steps echo with the thunderous retort of exploding black powder
          as you dance a dance of death. Take any of the following actions you
          choose in any order: Step, Strike against a target within your
          firearm’s first range increment, and Interact to reload. If you
          attempted a Strike and it succeeded, you can repeat these three
          actions again in any order. If you attempted a Strike in the second
          set and succeeded, you can repeat the actions one last time.
        </p>
        <p>After using Dance of Thunder, you become fatigued for 1 minute.</p>
      </>
    ),
  },
  {
    id: 59,
    name: "Disruptive blur",
    action: "",
    tags: ["gunslinger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> way of the drifter.
          </span>
          <br />
          You use cacophonous blasts from your gun or distracting shots from
          your crossbow to cause momentary diversions, letting you move about
          the battlefield with impunity. After you make a Strike with a firearm
          or crossbow, creatures can’t take reactions that would be triggered by
          your movement for the rest of your turn.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Headshot",
    action: "two_action",
    tags: ["gunslinger", "concentrate"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Prerequisites</b> way of the sniper.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a loaded firearm or crossbow.
          </span>
          <br />
          You attempt to finish your target with a final, well-placed shot. Make
          a crossbow or firearm Strike. If you’ve damaged the target within the
          last minute with the same weapon and you get a critical success on
          your attack roll, the target must succeed at a Fortitude save against
          your class DC or die; this is a death and incapacitation effect. A
          creature that survives is temporarily immune for 1 day. Creatures with
          no head (such as dullahans or oozes) are immune to this ability, and
          creatures with redundant heads (such as ettins) might survive the
          destruction of a head.
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Showstopper",
    action: "",
    tags: ["gunslinger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Pistol Twirl, master in Deception.
          </span>
          <br />
          Your twirling weapons create a grand distraction that’s difficult to
          look away from. When using Pistol Twirl to Feint, you can target all
          enemies within your weapon’s first range increment who you can
          perceive and who can see you. You roll one Deception check and compare
          it against each target’s Perception DC.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Triggerbrand blitz",
    action: "three_action",
    tags: ["gunslinger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <b>Prerequisites</b> way of the triggerbrand.
          <br />
          <b>Frequency</b> once per minute.
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding a combination weapon.
          </span>
          <br />
          You dance through your foes, stabbing and shooting. You Stride, making
          up to three Strikes with your combination weapon at any point during
          your movement, each against a different target. You can make any
          combination of melee and ranged attacks without needing to change
          modes to do so, though typically you can’t make more than one ranged
          attack because of the need to reload. This counts as three attacks
          toward your multiple attack penalty, but you don’t apply the multiple
          attack penalty until after making all three attacks.
        </p>
        <p>After using Triggerbrand Blitz, you become fatigued for 1 minute.</p>
      </>
    ),
  },
  {
    id: 63,
    name: "Two-weapon fusillade",
    action: "one_action",
    tags: ["gunslinger", "flourish"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding two weapons, each in a different
            hand. At least one of these weapons must be a loaded firearm or
            loaded crossbow.
          </span>
          <br />
          You attack with both your weapons in a furious barrage. Strike twice,
          once with each weapon.
        </p>
      </>
    ),
  },
  {
    id: 64,
    name: "Fatal bullet",
    action: "",
    tags: ["gunslinger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You’re especially talented at striking your enemies in their most
          vulnerable areas. When you critically hit with a fatal firearm, you
          deal an additional die of the appropriate size and damage type for the
          fatal trait after doubling the weapon’s damage. For example, after
          getting a critical hit with a fatal d12 weapon, you add an additional
          1d12 damage to the attack after doubling its damage.
        </p>
      </>
    ),
  },
  {
    id: 65,
    name: "Hair Trigger",
    action: "",
    tags: ["gunslinger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> initial deed that allows you to Interact to
            draw a weapon.
          </span>
          <br />
          No one can react faster than you can pull your trigger. When using
          your initial deed, instead of Interacting to draw a weapon, you can
          Strike with a firearm or crossbow you’re already wielding. If this
          Strike hits, the target is also flat-footed until the end of your
          first turn of the encounter.
        </p>
        <p>
          <b>Special</b> If your initial deed allows you to Interact to draw a
          weapon more than once, this feat allows you to replace one of these
          Interact actions and use the other one to draw a weapon. You can’t
          replace both Interact actions with Strikes, but you can draw a loaded
          firearm or crossbow with one of the actions and immediately shoot it
          with the other.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "Instant return",
    action: "",
    tags: ["gunslinger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <b>Trigger</b> An enemy misses you with a ranged attack using a type
          of ammunition appropriate to your weapon (a bullet if you’re wielding
          a firearm).
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding an unloaded firearm or crossbow.
          </span>
          <br />
          With a single fluid gesture, you catch a projectile out of the air,
          load it in your weapon, and shoot it back at the attacker. Interact to
          load the projectile into your weapon, then make a Strike with the
          required weapon against the triggering opponent. Since you’re using
          the foe’s ammunition, this Strike applies any special effects that
          ammunition would have (for instance, if it was explosive ammunition,
          it would explode in a burst of fire if your Strike hits).
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Richochet master",
    action: "",
    tags: ["gunslinger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Ricochet Shot.
          </span>
          <br />
          You have an eye for angles and can find shots that others believe are
          impossible. When using Ricochet Shot, you can bounce your bullet off
          up to two solid surfaces within your weapon’s first range increment
          instead of just one.
        </p>
        <p>
          In addition, a creature is flat-footed the first time you attack it
          with a Ricochet Shot during an encounter.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Final shot",
    action: "three_action",
    tags: ["gunslinger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You’re wielding an unloaded firearm.
          </span>
          <br />
          You jam a triple charge of black powder into your weapon to unleash a
          devastating but risky and inaccurate attack. Interact to reload,
          expending three doses of black powder in addition to your normal black
          powder or ammunition, then Strike with your firearm against a creature
          within the weapon’s first range increment. If you roll a success, the
          attack is instead a critical success, but if you roll a failure, the
          weapon misfires. Regardless of your roll, after the attack you’re
          flat-footed until the start of your next turn and stunned 1.
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Piercing critical",
    action: "",
    tags: ["gunslinger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          Your attacks with your preferred weapons deal especially devastating
          wounds. When you Strike with a firearm or crossbow for which you have
          legendary proficiency, you critically succeed if you roll a 19 on the
          die, as long as that result is a success.
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Reach for the stars",
    action: "",
    tags: ["gunslinger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Black Powder Boost.
          </span>
          <br />
          The sky’s the limit, as long as you’ve got enough black powder. When
          you use Black Powder Boost, you can expend additional black powder or
          ammunition to boost yourself farther. For each dose of black powder or
          piece of firearm ammunition you spend in addition to your shot, you
          add another 10 feet to the height or distance of your Leap, to a
          maximum of 5 boosts (a +50-foot status bonus). You must be wearing a
          dose of black powder or piece of ammunition, or have it in hand, to
          detonate it for a boost.
        </p>
        <p>
          You can choose at which points in your Leap you detonate each boost,
          allowing you to change direction each time. You must then move in a
          straight line until you boost again or end your Leap.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Unerring shot",
    action: "",
    tags: ["gunslinger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          Your senses are finely tuned to the slightest variations in the air,
          so much that you can place your shot exactly where you intend to aim
          it from any range possible with your weapon. When attacking with a
          ranged weapon in which you have master or greater proficiency, ignore
          the penalty from its range increment. (The weapon’s maximum range is
          unchanged.) In addition, if your target has cover against your attack
          with such a weapon, it doesn’t gain the bonus to AC if it has lesser
          cover, gets only the bonus of lesser cover if it has standard cover,
          or gains only the bonus of standard cover if it has greater cover.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Perfect readiness",
    action: "",
    tags: ["gunslinger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          You prepare to fire with an instinctive speed and muscle memory that
          go beyond your conscious thoughts. You’re permanently quickened. You
          can use your extra action only to Step or Interact to reload.
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Ricochet legend",
    action: "",
    tags: ["gunslinger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Ricochet Master.
          </span>
          <br />
          The more obstacles between you and your target, the deadlier your
          shots become, as you ricochet off multiple surfaces to hit them. When
          using Ricochet Shot, your shot can bounce off of any surface within
          your weapon’s first three range increments and the target can’t
          benefit from cover unless they have total cover on all sides.
        </p>
        <p>
          In addition, a creature must attempt a Will save against your class DC
          the first time in an encounter you attack it with a Ricochet Shot. If
          it fails, it’s stunned 2 and is unable to determine where your shot
          originated.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Slinger's reflexes",
    action: "",
    tags: ["gunslinger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Guns & Gears</i>
          <br />
          <br />
          Your ability to react to unexpected circumstances is preternaturally
          sharp. At the start of each enemy’s turn, you gain an additional
          reaction you can use on only that turn to use a gunslinger reaction.
        </p>
      </>
    ),
  },
];
