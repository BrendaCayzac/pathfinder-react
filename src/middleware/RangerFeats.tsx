import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const rangerFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Animal companion",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You gain the service of a young animal companion that travels with you
          and obeys simple commands as best as it can. See Animal Companions.
          When you Hunt Prey, your animal companion gains the action’s benefits
          and your hunter’s edge benefit if you have one.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Crossbow ace",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You have a deep understanding of the crossbow. When you’re wielding a
          crossbow and use Hunt Prey or use Interact to reload your crossbow,
          you gain a +2 circumstance bonus to the damage roll on your next
          Strike with that crossbow. If the crossbow is a simple crossbow, also
          increase the damage die size for that attack by one step. You must
          make the attack before the end of your next turn or these benefits are
          lost.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Gravity Weapon",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          Your expertise with your weapons and commitment to taking out your
          targets lends you magical power. You gain the gravity weapon warden
          spell and a focus pool of 1 Focus Point.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Heal companion",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion.
          </span>
        </p>
        <p>
          You have a deep devotion to your animal companion that enables you to
          magically heal their wounds. You gain the heal companion warden spell
          and a focus pool of 1 Focus Point.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Hunted shot",
    action: "one_action",
    tags: ["ranger", "flourish"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon with reload 0.
          </span>
        </p>
        <p>
          You take two quick shots against the one you hunt. Make two Strikes
          against your prey with the required weapon. If both hit the same
          creature, combine their damage for the purpose of resistances and
          weaknesses. Apply your multiple attack penalty to each Strike
          normally.
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Initiate Warden",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          You’ve trained with one of the ranger sects known as wardens, who
          practice a specialized type of primal magic. You gain your choice of
          one warden spell from the initial warden spells (or another you have
          access to).
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times, choosing a
          different initial warden spell each time.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Monster hunter",
    action: "",
    tags: ["ranger"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          You swiftly assess your prey and apply what you know. As part of the
          action used to Hunt your Prey, you can attempt a check to Recall
          Knowledge about your prey. When you critically succeed at identifying
          your hunted prey with Recall Knowledge, you note a weakness in the
          creature’s defenses. You and allies you tell gain a +1 circumstance
          bonus to your next attack roll against that prey. You can give bonuses
          from Monster Hunter only once per day against a particular creature.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Twin takedown",
    action: "one_action",
    tags: ["ranger", "flourish"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, each in a
            different hand.
          </span>
        </p>

        <p>
          You swiftly attack your hunted prey with both weapons. Make two
          Strikes against your hunted prey, one with each of the required
          weapons. If both hit the same hunted prey, combine their damage for
          the purpose of its resistances and weaknesses. Apply your multiple
          attack penalty to each Strike normally.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Favored terrain",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          You have studied a specific terrain to overcome its challenges. Choose
          aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or
          underground as your favored terrain. When in that terrain, you can
          ignore the effects of non-magical difficult terrain. If you have the
          wild stride class feature, you gain a second benefit while in your
          favored terrain, depending on your choice.
        </p>
        <ul>
          <li>
            <b>Aquatic</b> You gain a swim Speed equal to your Speed. If you
            already had a swim Speed, you gain a +10-foot status bonus to your
            swim Speed.
          </li>
          <li>
            <b>Arctic</b> You need to eat and drink only one-tenth as much as
            usual, you aren’t affected by severe or extreme cold, and you can
            walk across ice and snow at full Speed without needing to Balance.
          </li>
          <li>
            <b>Desert</b> You need to eat and drink only one-tenth as much as
            usual, you aren’t affected by severe or extreme heat, and you can
            walk along sand at full Speed without needing to Balance.
          </li>
          <li>
            <b>Forest, Mountain, or Underground</b> You gain a climb Speed equal
            to your Speed. If you already had a climb Speed, you gain a +10-foot
            status bonus to your climb Speed.
          </li>
          <li>
            <b>Plains</b> You gain a +10-foot status bonus to your land Speed.
          </li>
          <li>
            <b>Sky</b> You gain a +10-foot status bonus to your fly Speed, if
            you have one.
          </li>
          <li>
            <b>Swamp</b> You can move across bogs at full Speed, even if they
            are deep enough to be greater difficult terrain or to normally
            require you to Swim.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 10,
    name: "Hunter's aim",
    action: "two_action",
    tags: ["ranger", "concentrate"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          When you focus on aiming, your attack becomes particularly accurate.
          Make a ranged weapon Strike against your hunted prey. On this Strike,
          you gain a +2 circumstance bonus to the attack roll and ignore your
          prey’s concealed condition.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Magic hide",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>

        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion, warden spells.
          </span>
        </p>
        <p>
          You can defend your companion in battle. You gain the magic hide
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Animal empathy",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          You have a connection to the creatures of the natural world that
          allows you to communicate with them on a rudimentary level. You can
          use Diplomacy to Make an Impression on animals and to make very simple
          Requests of them. In most cases, wild animals will give you time to
          make your case.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Monster warden",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Monster Hunter.
          </span>
        </p>
        <p>
          You understand how to defend yourself and others against your prey.
          When you grant bonuses from Monster Hunter, you and your allies also
          each gain a +1 circumstance bonus to your next saving throw against
          that particular creature and to your AC against that creature’s next
          attack against you.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Quick draw",
    action: "one_action",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You draw your weapon and attack with the same motion. You Interact to
          draw a weapon, then Strike with that weapon.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Relentless stalker",
    action: "reaction",
    tags: ["uncommon", "ranger", "move"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> An adjacent creature you are hunting attempts to move
            away from you using an action that has the move trait.
          </span>
        </p>
        <p>
          Your hunted prey cannot escape your relentless pursuit. Stride up to
          your Speed in tandem with the triggering creature, remaining adjacent
          to the foe throughout its movement until it stops moving or you run
          out of movement. You can ignore difficult terrain during this movement
          unless the difficult terrain is caused by a magical effect.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Snare hopping",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Snare Crafting, warden spells.
          </span>
        </p>
        <p>
          You can magically move your snares around. You gain the snare hopping
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "United Assault",
    action: "one_action",
    tags: ["uncommon", "ranger", "fighter", "flourish"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
        </p>
        <p>
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
    id: 18,
    name: "Wild empathy",
    action: "",
    tags: ["ranger"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You have a connection to the creatures of the natural world that
          allows you to communicate with them on a rudimentary level. You can
          use Diplomacy to Make an Impression on animals and to make very simple
          Requests of them. In most cases, wild animals will give you time to
          make your case.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Advanced warden",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Initiate Warden.
          </span>
        </p>
        <p>
          You unlock more powerful primal spells. You gain your choice of one
          warden spell from the advanced warden spells (or another you have
          access to).
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times, choosing a
          different advanced warden spell each time.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Animal feature",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          You are so connected with the animal world that you can grant yourself
          an animal’s features and abilities. You gain the animal feature warden
          spell. Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Companion's cry",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion.
          </span>
        </p>
        <p>
          You can urge your companion to do its utmost. You can spend 2 actions
          to Command an Animal instead of 1 when commanding your animal
          companion. If you do, your animal companion uses an additional action.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Disrupt Prey",
    action: "reaction",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> Your hunted prey is within your reach, and it uses a
            manipulate action, uses a move action, or leaves a square during a
            move action it’s using.
          </span>
        </p>
        <p>
          Make a melee Strike against your prey. If the attack is a critical
          hit, you disrupt the triggering action.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Far shot",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          Your experience in the field has taught you how to focus your aim at a
          distance, increasing your accuracy. Double your weapons’ range
          increments.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Farabellus flip",
    action: "reaction",
    tags: ["uncommon", "ranger", "barbarian", "fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Pathfinder Society Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> trained in Acrobatics and medium armor.
          <br />
          <span className="frequency">
            <b>Trigger</b> An enemy targets you with a melee Strike.
          </span>
        </p>
        <p>
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
    id: 25,
    name: "Favored enemy",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You have studied a specific type of wild creature and can hunt it more
          easily. When you gain this feat, choose animals, beasts, dragons, or
          both fungi and plants as your favored enemy. When you roll initiative
          and can see an enemy that belongs to the chosen category, you can Hunt
          Prey as a free action, designating that enemy.
        </p>
        <p>
          You can use this free action even if you haven’t identified the
          creature yet with Recall Knowledge. The benefit doesn’t apply against
          favored enemies disguised as other creatures, and the GM determines
          whether it applies against a creature disguised as a favored enemy.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Favored prey",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          You have studied a specific type of wild creature and can hunt it more
          easily. When you gain this feat, choose animals, beasts, dragons, or
          both fungi and plants as your favored prey. When you roll initiative
          and can see an enemy that belongs to the chosen category, you can Hunt
          Prey as a free action, designating that enemy.
        </p>
        <p>
          You can use this free action even if you haven’t identified the
          creature yet with Recall Knowledge. The benefit doesn’t apply against
          favored enemies disguised as other creatures, and the GM determines
          whether it applies against a creature disguised as a favored prey.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Giant hunter",
    action: "",
    tags: ["rare", "ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Kingmaker Companion Guide</i>
        </p>
        <p>
          You have studied giants and hunt them with efficiency. When you roll
          initiative and can see a giant, you can Hunt Prey as a free action,
          designating that enemy as your prey.
        </p>
        <p>
          You can use this free action even if you haven’t identified the giant
          yet with Recall Knowledge. The benefit doesn’t apply against giants
          disguised as other creatures, and the GM determines whether it applies
          against a creature disguised as a giant.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Greenwatch initiate",
    action: "",
    tags: ["rare", "ranger", "gunslinger", "investigator"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>KLost Omens: Impossible Lands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Survival.
          </span>
        </p>
        <p>
          You’ve received the basic training developed for all Greenwatch
          recruits. You become an expert in Survival and gain the Experienced
          Tracker and Survey Wildlife skill feats.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Hunter's Luck",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          Your recollection of monsters is magically enhanced by luck. You gain
          the monster hunter’s luck warden spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Running Reload",
    action: "one_action",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You can reload your weapon on the move. You Stride, Step, or Sneak,
          then Interact to reload.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Scout's warning",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You are about to roll a Perception or Survival check
            for initiative.
          </span>
        </p>
        <p>
          You visually or audibly warn your allies of danger, granting them each
          a +1 circumstance bonus to their initiative rolls. Depending on
          whether you use gestures or call out, this action gains either the
          visual or the auditory trait, respectively.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Snare specialist",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert in Crafting, Snare Crafting.
          </span>
        </p>
        <p>
          You specialize in creating quick traps to obstruct your enemies on the
          battlefield. If your proficiency rank in Crafting is expert, you gain
          the formulas for three common or uncommon snares. If your rank is
          master, you gain 6. If your rank is legendary, you gain 9.
        </p>
        <p>
          Each day during your daily preparations, you can prepare four snares
          from your formula book for quick deployment; if they normally take 1
          minute to Craft, you can Craft them with 3 Interact actions. The
          number of snares increases to six if you have master proficiency in
          Crafting and eight if you have legendary proficiency in Crafting.
          Snares prepared in this way don’t cost you any resources to Craft.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Soothing mist",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          You have a connection to the healing properties of nature and can
          produce a magical mist to heal damage and stop burning or bleeding.
          You gain the soothing mist warden spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Twin Parry",
    action: "one_action",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, one in each
            hand.
          </span>
        </p>
        <p>
          You can use two weapons to deflect attacks. You gain a +1 circumstance
          bonus to AC until the start of your next turn, or a +2 circumstance
          bonus if either weapon has the parry trait. You lose this circumstance
          bonus if you no longer meet this feat’s requirement.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Wolf in sheep's clothing",
    action: "",
    tags: ["ranger"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Deception.
          </span>
        </p>
        <p>
          With a bit of hide, some antlers, and some cast-off fur, you can
          create a disguise that will fool even an experienced hunter. You can
          Impersonate creatures with the animal, beast, or plant traits, so long
          as they are either the same size or one size larger than you and have
          a body shape that conforms at least vaguely to your own (in other
          words, a typical humanoid could Impersonate a bear or an arboreal, but
          not a horse, giant scorpion, or assassin vine). Impersonating a larger
          creature doesn’t change your actual size.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Additional recollection",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You succeed or critically succeed at a check to
            Recall Knowledge on your hunted prey.
          </span>
        </p>
        <p>
          You scan the battlefield quickly, remembering critical details about
          multiple opponents you face. You immediately attempt a check to Recall
          Knowledge about a different creature you can perceive.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Defy fey",
    action: "",
    tags: ["rare", "ranger", "gunslinger", "investigator"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Greenwatch Initiate.
          </span>
        </p>
        <p>
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
    id: 38,
    name: "Ephemeral tracking",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert in Survival, warden spells.
          </span>
        </p>
        <p>
          You are able to track your quarry through impossible places. You gain
          the ephemeral tracking warden spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Fey tracker",
    action: "",
    tags: ["rare", "ranger", "gunslinger", "investigator"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Greenwatch Initiate.
          </span>
        </p>
        <p>
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
    id: 40,
    name: "Masterful warden",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Initiate Warden.
          </span>
        </p>
        <p>
          Your mastery of warden magic increases. You gain your choice of one
          warden spell from the master warden spells (or another you have access
          to).
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times, choosing a
          different master warden spell each time.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Mature animal companion",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Animal Companion.
          </span>
        </p>
        <p>
          Your animal companion becomes a mature animal companion and gains
          additional capabilities.
        </p>
        <p>
          Your animal companion has greater independence. During an encounter,
          even if you don’t use the Command an Animal action, your animal
          companion can still use 1 action that round on your turn to Stride or
          Strike. It can do this at any point during your turn, as long as you
          aren’t currently taking an action. If it does, that’s all the actions
          it gets that round—you can’t Command it later.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Quick snares",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert in Crafting, Snare Specialist.
          </span>
        </p>
        <p>
          You can rig a snare in only moments. You can Craft snares that
          normally take 1 minute to Craft with 3 Interact actions, even if you
          haven’t prepared them.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Ranger's bramble",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          You can cause plants to grow and trap your foes with thorns. You gain
          the ranger’s bramble warden spell. Increase the number of Focus Points
          in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Skirmish strike",
    action: "one_action",
    tags: ["ranger", "flourish"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          Your feet and weapon move in tandem. Either Step and then Strike, or
          Strike and then Step.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Snap shot",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You can react with ranged weapons when a creature is in close
          quarters. You can use a reaction that normally allows you to make a
          melee weapon Strike to instead make a ranged weapon Strike. You must
          be Striking an adjacent target. If necessary for the reaction’s
          trigger, you treat your ranged weapon as if it had a reach of 5 feet.
          If the reaction has other requirements, such as wielding a specific
          kind of weapon, Snap Shot doesn’t allow you to ignore them; it allows
          you only to replace a melee weapon Strike with a ranged weapon Strike.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Swift tracker",
    action: "",
    tags: ["ranger"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert in Survival, Experienced Tracker.
          </span>
        </p>
        <p>
          Your keen eyes catch signs of passage even when you’re moving. You can
          move at your full Speed while you Track. If you have master
          proficiency in Survival, you don’t need to attempt a new Survival
          check every hour while Tracking. If you have legendary proficiency in
          Survival, you can use another exploration activity while Tracking.
        </p>
        <p>
          If you roll Survival for initiative while tracking your hunted prey,
          when you start your first turn of the encounter, you can Stride toward
          your hunted prey as a free action.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Blind-fight",
    action: "",
    tags: ["ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Perception.
          </span>
        </p>
        <p>
          Your heightened senses allow you to instinctively detect unseen
          opponents. You don’t need to succeed at a flat check to target
          concealed creatures. You’re not off-guard to creatures that are hidden
          from you (unless you’re off-guard to them for reasons other than the
          hidden condition), and you need only a successful DC 5 flat check to
          target a hidden creature.
        </p>
        <p>
          While you’re adjacent to an undetected creature of your level or
          lower, it is instead only hidden from you.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Can't you see?",
    action: "",
    tags: ["ranger", "druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Occultism, expert in Stealth.
          </span>
        </p>
        <p>
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
    id: 49,
    name: "Deadly aim",
    action: "one_action",
    tags: ["ranger", "flourish"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> weapon specialization.
          </span>
        </p>
        <p>
          You aim for your prey’s weak spots, making your shot more challenging
          but dealing more damage if you hit. Make a ranged Strike against your
          hunted prey at a –2 penalty. You gain a +4 circumstance bonus to
          damage on that Strike. This bonus increases to +6 at 11th level and +8
          at 15th level.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Eerie environs",
    action: "",
    tags: ["ranger", "druid"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Intimidation, trained in Stealth.
          </span>
        </p>
        <p>
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
    id: 51,
    name: "Eerie traces",
    action: "",
    tags: ["ranger", "concentrate", "druid", "exploration", "move"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> trained in Intimidation, trained in Survival.
          </span>
        </p>
        <p>
          The tracks you leave behind are strange, somehow disconcerting and
          unnerving—they might travel backward, or through places no one would
          think to pass through. You change your tracks into eerie traces,
          moving up to half your travel speed as you do so. You don’t need to
          attempt a Survival check to change your tracks, but anyone tracking
          you must attempt a Will save against the higher of your class DC or
          spell DC.
        </p>
        <p>
          <b>Success</b> The tracker is unaffected.
        </p>
        <p>
          <b>Failure</b> The tracker becomes frightened 1 for as long as it
          follows your tracks. This condition doesn’t decrease until the tracker
          stops following you, and it comes back if the tracker resumes
          following your tracks. If the tracker enters into an encounter with
          you after following your tracks, it begins the encounter frightened 1.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but your disturbing traces cause
          the tracker to be frightened 2 instead.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Enlarge companion",
    action: "",
    tags: ["ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion, warden spells.
          </span>
        </p>
        <p>
          You make your companion enormous. You gain the enlarge companion
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Greenwatch veteran",
    action: "",
    tags: ["rare", "ranger", "gunslinger", "investigator"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> Your turn starts, and you’re in combat against a
            creature you spent at least 10 minutes Tracking.
          </span>
        </p>
        <p>
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
    id: 54,
    name: "Hamstringing strike",
    action: "one_action",
    tags: ["rare", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Kingmaker Companion Guide</i>
        </p>
        <p>
          You slow your foes with a well-aimed attack. Make a Strike against
          your hunted prey with a –2 penalty. If you hit your prey, the creature
          takes a –5-foot status penalty to Speed. If you critically hit your
          prey, the creature takes a –10-foot status penalty to Speed. A
          creature immune to bleed damage does not take this penalty. The
          penalty can be removed using any method that removes persistent bleed
          damage or offers a flat check to do so, such as Administer First Aid.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Hazard finder",
    action: "",
    tags: ["ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You have an intuitive ability to sense hazards. You gain a +1
          circumstance bonus to Perception checks to find traps and hazards, to
          AC against their attacks, and to saves against their effects. You can
          find hazards that would normally require you to Search even if you
          aren’t Searching.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Powerful snares",
    action: "",
    tags: ["ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Crafting, Snare Specialist.
          </span>
        </p>
        <p>
          Your snares are particularly difficult for enemies to avoid. When you
          set a snare, the saving throw DC for that snare is equal to its normal
          DC or your class DC, whichever is higher.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Terrain master",
    action: "",
    tags: ["ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Survival, Favored Terrain.
          </span>
        </p>
        <p>
          You are able to adapt to your surroundings in any natural terrain. You
          can spend 1 hour practicing in your current terrain in order to make
          it your favored terrain, replacing your current favored terrain
          temporarily. If you spend a full day out of the new favored terrain,
          your favored terrain reverts back to your original choice when you
          took the Favored Terrain feat.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "The harder they fall",
    action: "",
    tags: ["rare", "ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Kignmaker Companion Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Titan Wrestler.
          </span>
        </p>
        <p>
          You know how to make a larger creature hurt when it falls to the
          ground. If you successfully Trip a foe that’s larger than you, it
          takes 1d8 bludgeoning damage (or 2d8 bludgeoning damage on a critical
          success). If you are master in Athletics, the damage increases to 2d8
          bludgeoning (or 4d8 bludgeoning on a critical success).
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Unseen passage",
    action: "",
    tags: ["rare", "ranger", "gunslinger", "investigator"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Frequency</b> once per day.
          </span>
        </p>
        <p>
          You have mastered a magical technique for moving through dangerous
          woodlands unseen. You can cast pass without trace as an innate primal
          spell heightened to a spell level equal to half your level rounded up.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Warden's boon",
    action: "one_action",
    tags: ["ranger"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You point out vulnerabilities present in your hunted prey, granting
          the benefits listed in Hunt Prey and your hunter’s edge to an ally
          until the end of their next turn. Depending on whether you call out or
          use gestures, this action gains either the auditory or visual trait.
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Camouflage",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Stealth.
          </span>
        </p>
        <p>
          You alter your appearance to blend in to the wilderness. In natural
          terrain, you can Hide and Sneak even without cover or being concealed.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Dazzling display",
    action: "one_action",
    tags: ["ranger", "fighter", "rogue", "swashbuckler"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Firebrands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert in Intimidation.
          </span>
        </p>
        <p>
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
    id: 63,
    name: "Eerie proclamation",
    action: "one_action",
    tags: [
      "uncommon",
      "ranger",
      "auditory",
      "concentrate",
      "curse",
      "druid",
      "linguistic",
      "manipulate",
      "necromancy",
      "primal",
    ],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <b>Prerequisites</b> expert in Occultism, expert in Survival.
          <br />
          <b>Frequency</b> once per hour.
          <br />
          <span className="frequency">
            <b>Requirements</b> You must be in either natural terrain or in
            abandoned or relatively unused artificial terrain (such as a
            darkened alley or haunted house).
          </span>
        </p>
        <p>
          You know there are places in the world that are just wrong—places
          where the birds don’t sing and where you always feel like you’re being
          watched. You can spot these places, and you can awaken them. To do so,
          you must gesture toward a 10-foot by 10-foot square you can see and
          make an ominous proclamation of some manner (i.e. “This is cursed
          ground,” “That is an ill-omened place.”). The next creature that
          enters the marked territory must attempt a Will save against your
          spell DC (if you’re a druid) or class DC (if you’re a ranger).
        </p>
        <p>
          <b>Success</b> The target is unaffected.
        </p>
        <p>
          <b>Failure</b> Something goes horribly awry for the victim in the
          cursed ground. The details are up to the GM—it can be a purely
          “natural” accident (they step into an old bear trap, perhaps) or
          something stranger and more spectral. The target gains a condition for
          2 rounds. Roll 1d4 on the table and use the failure column to
          determine which condition.
        </p>
        <p>
          <b>Critical Failure</b> As failure, but the effect is astonishingly
          gruesome. Use the critical failure column, and the condition lasts for
          1 minute.
        </p>
        <table>
          <thead>
            <tr>
              <th>d4</th>
              <th>Failure</th>
              <th>Critical Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Clumsy 2</td>
              <td>Clumsy 3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Enfeebled 2</td>
              <td>Enfeebled 3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Stupefied 2</td>
              <td>Stupefied 3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Dazzled</td>
              <td> Blinded for 1 round, then dazzled</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 64,
    name: "Greenwatcher",
    action: "",
    tags: ["rare", "ranger", "gunslinger", "investigator"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Impoossible Lands</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Defy Fey.
          </span>
        </p>
        <p>
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
    id: 65,
    name: "Hunter's vision",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          You are so focused on your hunted prey that you can see it clearly
          even beyond the limits of your senses. You gain the hunter’s vision
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "Incredible companion",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Mature Animal Companion.
          </span>
        </p>
        <p>
          Your animal companion continues to grow and develop. It becomes a
          nimble or savage animal companion (your choice), gaining additional
          capabilities determined by the type of companion.
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Master monster hunter",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Nature, Monster Hunter.
          </span>
        </p>
        <p>
          You have a nearly encyclopedic knowledge of all creatures of the
          world. You can use Nature to Recall Knowledge to identify any
          creature. In addition, you gain the benefits of Monster Hunter (and
          Monster Warden, if you have it) on a success as well as a critical
          success.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Peerless warden",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Initiate Warden.
          </span>
        </p>
        <p>
          Your mastery of primal magic has given you access to the greatest
          secrets of warden magic. You gain your choice of one warden spell from
          the peerless warden spells (or another you have access to).
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times, choosing a
          different peerless warden spell each time.
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Penetrating shot",
    action: "two_action",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Ruelbook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon.
          </span>
        </p>
        <p>
          You shoot clear through an intervening creature to hit your prey.
          Choose a target that is giving lesser cover to your hunted prey. Make
          a single ranged Strike with the required weapon against the chosen
          target and your hunted prey. This attack ignores any lesser cover the
          chosen target provides your hunted prey. Roll damage only once, and
          apply it to each creature you hit. A Penetrating Shot counts as two
          attacks for your multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Terrain transposition",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          You are so connected to the wilderness that you can magically jump
          from place to place within it. You gain the terrain transposition
          warden spell. Increase the number of Focus Points in your focus pool
          by 1.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Twin riposte",
    action: "reaction",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <b>Prerequisites</b> Twin Parry.
          <br />
          <b>Trigger</b> A creature within your reach critically fails a Strike
          against you.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are benefiting from Twin Parry.
          </span>
        </p>
        <p>
          A clever parry with one weapon leaves your opponent open to an attack
          with the other weapon. Make a melee Strike or use a Disarm action
          against the triggering opponent.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Warden's step",
    action: "",
    tags: ["ranger"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Stealth.
          </span>
        </p>
        <p>
          You can guide your allies to move quietly through the wilderness. When
          you Avoid Notice during exploration in natural terrain, you can
          designate any number of your allies to gain the benefits as if they
          were using that activity during that exploration. This requires no
          action on their part.
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Distracting shot",
    action: "",
    tags: ["ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          The sheer power of your attacks, or the overwhelming number of them,
          leaves an enemy flustered. If you critically hit your hunted prey with
          a ranged weapon, or hit it at least twice on the same turn with a
          ranged weapon, it’s off-guard until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Double prey",
    action: "",
    tags: ["ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You can focus on two foes at once, hunting both of them down. When you
          use the Hunt Prey action, you can pick two creatures as your prey.
        </p>
      </>
    ),
  },
  {
    id: 75,
    name: "Lightning snares",
    action: "",
    tags: ["ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> master in Crafting, Quick Snares, Snare
            Specialist.
          </span>
        </p>
        <p>
          You can rig a trap with incredible speed. When you create a snare that
          normally takes 1 minute to Craft, you can Craft it using a single
          Interact action instead.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Obscured emergence",
    action: "",
    tags: ["ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> expert in Stealth.
          </span>
        </p>
        <p>
          You are, by nature, a thing of gloomy woods and barren wilds, and when
          you choose show yourself, a bit of this gloom clings to you, obscuring
          your form with strange distortions or mist. When you stop being hidden
          due to your own actions (not due to someone successfully finding you),
          you gain concealment until the start of your next turn as people’s
          eyes find it oddly hard to focus on you. As usual for concealment
          involving an obvious visual manifestation, you can’t use this
          concealment to Hide.
        </p>
      </>
    ),
  },
  {
    id: 77,
    name: "Roll with it",
    action: "reaction",
    tags: ["rare", "ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Kingmaker Companion Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> Giant Hunter.
          <br />
          <span className="frequency">
            <b>Trigger</b> Your hunted prey, which must be a giant, hits you
            with a melee attack.
          </span>
        </p>
        <p>
          You can dodge attacks from giants. Attempt a Reflex save using 10 +
          the giant’s attack bonus as the save DC. If the result allows you to
          Stride as part of the reaction, you may instead Fly or Swim if you
          have the corresponding movement type.
        </p>
        <p>
          <b>Critical Success</b> The attack misses you (or if the attack was a
          critical hit, it becomes a regular hit). You can Stride up to 10 feet
          as part of the reaction; if you do so, the reaction gains the move
          trait.
        </p>
        <p>
          <b>Success</b> The attack deals half damage. You can Stride up to 5
          feet as part of the reaction, but you must end this movement adjacent
          to the triggering giant. If you do so, the reaction gains the move
          trait.
        </p>
        <p>
          <b>Critical Failure</b> You fail to avoid the attack and are knocked
          prone by the blow.
        </p>
      </>
    ),
  },
  {
    id: 78,
    name: "Second sting",
    action: "one_action",
    tags: ["ranger", "press"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, each in a
            different hand.
          </span>
        </p>
        <p>
          You read your prey’s movements and transform them into openings, so
          failures with one weapon set up glancing blows with the other. Make a
          melee Strike with one of the required weapons against your hunted
          prey. The Strike gains the following failure effect.
        </p>
        <p>
          <b>Failure</b> You deal the damage the other required weapon would
          have dealt on a hit, excluding all damage dice. (This removes dice
          from weapon runes, spells, and special abilities, not just weapon
          damage dice.)
        </p>
      </>
    ),
  },
  {
    id: 79,
    name: "Side by side",
    action: "",
    tags: ["ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> an animal companion.
          </span>
        </p>
        <p>
          You and your animal companion fight in tandem. Whenever you and your
          animal companion are adjacent to the same foe, you are both flanking
          that foe with each other, regardless of your actual positions.
        </p>
      </>
    ),
  },
  {
    id: 80,
    name: "Warden's focus",
    action: "",
    tags: ["ranger"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden spells.
          </span>
        </p>
        <p>
          Your connection with your surroundings deepens and expands, allowing
          you to draw in more of nature’s primal power as you focus. When you
          Refocus, you regain all your Focus Points instead of 1.
        </p>
      </>
    ),
  },
  {
    id: 81,
    name: "Sense the unseen",
    action: "reaction",
    tags: ["ranger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Trigger</b> You fail a check to Seek.
          </span>
        </p>
        <p>
          When you look for foes, you can catch even the slightest cues, such as
          their minute movements or the shifting of air currents on your skin.
          Even though you failed at the triggering check, you automatically
          sense any undetected creatures in the area where you’re Seeking,
          making them merely hidden to you.
        </p>
      </>
    ),
  },
  {
    id: 82,
    name: "Shared prey",
    action: "",
    tags: ["ranger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Double Prey, Warden’s Boon.
          </span>
        </p>
        <p>
          Hunting as a duo, you and your ally both single out your prey. When
          you use Hunt Prey and select only one prey, you can grant your Hunt
          Prey benefits and hunter’s edge to an ally in addition to gaining them
          yourself. The ally retains these benefits until you use Hunt Prey
          again.
        </p>
      </>
    ),
  },
  {
    id: 83,
    name: "Stealthy companion",
    action: "",
    tags: ["ranger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Animal Companion, Camouflage.
          </span>
        </p>
        <p>
          You’ve trained your animal companion to blend in to its surroundings.
          Your animal companion gains the benefit of the Camouflage feat. If
          your companion is a specialized ambusher, its proficiency rank for
          Stealth increases to master (or legendary if it was already master).
        </p>
      </>
    ),
  },
  {
    id: 84,
    name: "Targeting shot",
    action: "one_action",
    tags: ["ranger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Hunter’s Aim.
          </span>
        </p>
        <p>
          You carefully track your prey’s position and defenses, allowing you to
          follow up around obstacles that block your shot. Make a ranged weapon
          Strike against your hunted prey. You ignore the target’s concealed
          condition and all cover.
        </p>
      </>
    ),
  },
  {
    id: 85,
    name: "Warden's guidance",
    action: "",
    tags: ["ranger"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          You convey your prey’s location to your allies with a series of
          careful words or gestures. As long as your hunted prey is observed by
          you, all your allies who roll failures and critical failures when
          Seeking it get a success instead. Your allies need to be able to see
          or hear you to gain this benefit. You have to be able to call out or
          make visible gestures for your allies to get this benefit.
        </p>
      </>
    ),
  },
  {
    id: 86,
    name: "Giant slayer",
    action: "",
    tags: ["rare", "ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Kingmaker Companion Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Giant Hunter.
          </span>
        </p>
        <p>
          Your well-placed blows can fell mighty giants. If you critically hit
          the same giant twice on the same turn, the target must succeed at a
          Fortitude saving throw or die. Use your class DC for this saving
          throw.
        </p>
      </>
    ),
  },
  {
    id: 87,
    name: "Greater distracting shot",
    action: "",
    tags: ["ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Distracting Shot.
          </span>
        </p>
        <p>
          Even a single missile can throw off your enemy’s balance, and more
          powerful attacks leave it flustered for longer. If you hit your hunted
          prey with a ranged weapon, it’s off-guard until the start of your next
          turn. If you critically hit your prey or hit it twice on the same turn
          with a ranged weapon, it’s off-guard until the end of your next turn
          instead.
        </p>
      </>
    ),
  },
  {
    id: 88,
    name: "Improved riposted",
    action: "",
    tags: ["ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Twin Riposte.
          </span>
        </p>
        <p>
          At the start of each of your turns, you gain an additional reaction
          that you can use only to perform a Twin Riposte. You can use this
          extra reaction even if you are not benefiting from Twin Parry.
        </p>
      </>
    ),
  },
  {
    id: 89,
    name: "Legendary Monster Hunter",
    action: "",
    tags: ["ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> legendary in Nature, Master Monster Hunter.
          </span>
        </p>
        <p>
          Your knowledge of monsters is so incredible that it reveals glaring
          flaws in your prey. Your bonus from Monster Hunter (and the bonus from
          Monster Warden if you have it) increases from +1 to +2 for you and any
          allies who benefit.
        </p>
      </>
    ),
  },
  {
    id: 90,
    name: "Specialized Companion",
    action: "",
    tags: ["ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Incredible Companion.
          </span>
        </p>
        <p>
          Your animal companion continues to grow in power and ability, and it
          is now cunning enough to become specialized. Your animal companion
          gains one specialization of your choice.
        </p>
        <p>
          <b>Special</b> You can select this feat up to three times. Each time,
          add a different specialization to your companion.
        </p>
      </>
    ),
  },
  {
    id: 91,
    name: "Ubiquitous snares",
    action: "",
    tags: ["ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Snare Specialist.
          </span>
        </p>
        <p>
          You can prepare a seemingly impossible number of snares in advance,
          and you’re ready to spring them on unsuspecting foes. Double the
          number of prepared snares from Snare Specialist.
        </p>
      </>
    ),
  },
  {
    id: 92,
    name: "Warden's reload",
    action: "",
    tags: ["ranger"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Player Core</i>
        </p>
        <p>
          <b>Frequency</b> once per round.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your last action or activity this turn was to
            cast a warden spell.
          </span>
        </p>
        <p>
          Your mastery of magic and weapons like the crossbow allow you to wield
          both with equal ease. Interact to reload a weapon you are currently
          wielding.
        </p>
      </>
    ),
  },
  {
    id: 93,
    name: "Impossible flurry",
    action: "three_action",
    tags: ["ranger", "flourish"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, each in a
            different hand.
          </span>
        </p>
        <p>
          You forgo precision to attack at an impossible speed. Make three melee
          Strikes with each of the required weapons. Your first attack with each
          weapon takes the multiple attack penalty as though you had already
          made one attack this turn. All of the remaining Strikes take the
          maximum multiple attack penalty.
        </p>
      </>
    ),
  },
  {
    id: 94,
    name: "Impossible volley",
    action: "three_action",
    tags: ["ranger", "flourish"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are wielding a ranged weapon with the volley
            trait and reload 0.
          </span>
        </p>
        <p>
          You fire a volley at all foes in an area. Make one Strike with a –2
          penalty against each enemy within a 10-foot burst centered at or
          beyond your weapon’s volley range. Roll the damage only once for all
          targets.
        </p>
        <p>
          Each attack counts toward your multiple attack penalty, but do not
          increase your penalty until you have made all your attacks.
        </p>
      </>
    ),
  },
  {
    id: 95,
    name: "Manifold edge",
    action: "",
    tags: ["ranger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> hunter’s edge, masterful hunter.
          </span>
        </p>
        <p>
          You’ve learned to leverage every possible edge. When you use Hunt
          Prey, you can gain a different hunter’s edge benefit instead of the
          one you selected at 1st level. If you do, you don’t gain the
          additional benefit from masterful hunter.
        </p>
      </>
    ),
  },
  {
    id: 96,
    name: "Masterful companion",
    action: "",
    tags: ["ranger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> masterful hunter, Animal Companion.
          </span>
        </p>
        <p>
          Your animal companion shares your incredible hunting skills, allowing
          it to take down your shared prey with ease. When you Hunt Prey, your
          animal companion gains the masterful hunter benefit associated with
          your hunter’s edge, rather than just your original hunter’s edge
          benefit.
        </p>
      </>
    ),
  },
  {
    id: 97,
    name: "Perfect shot",
    action: "three_action",
    tags: ["ranger", "flourish"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Requirements</b> You are wielding a loaded ranged weapon with
            reload 1 or more, and you have not reloaded your weapon since your
            last turn.
          </span>
        </p>
        <p>
          After watching the motions of combat with incredible intensity and
          precision, you fire at your prey at the perfect moment to deliver
          maximum pain. Make a ranged Strike with the required weapon against
          your hunted prey. If you hit, the Strike deals maximum damage. After
          the Strike, your turn ends.
        </p>
      </>
    ),
  },
  {
    id: 98,
    name: "Shadow hunter",
    action: "",
    tags: ["ranger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Camouflage.
          </span>
        </p>
        <p>
          You blend in to your surroundings so well that others have trouble
          telling you apart from the terrain. While in natural terrain, you’re
          always concealed from all foes if you choose to be, except for your
          hunted prey.
        </p>
      </>
    ),
  },
  {
    id: 99,
    name: "Warden's Wellspring",
    action: "",
    tags: ["ranger"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> warden’s focus.
          </span>
        </p>
        <p>
          You command unparalleled focus when you commune with the world around
          you. If you have spent at least 3 Focus Points since the last time you
          Refocused, you recover 3 Focus Points when you Refocus instead of 1.
        </p>
      </>
    ),
  },
  {
    id: 100,
    name: "Accurate flurry",
    action: "",
    tags: ["ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <b>Prerequisites</b> Impossible Flurry.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding two melee weapons, each in a
            different hand.
          </span>
        </p>
        <p>
          You refine the precision of your unbelievable storm of blows. When you
          perform an Impossible Flurry, your first attack with each weapon
          instead takes the multiple attack penalty as though you had already
          made one attack this turn. All subsequent attacks take the maximum
          multiple attack penalty, as though you had already made two or more
          attacks this turn.
        </p>
      </>
    ),
  },
  {
    id: 101,
    name: "Impossible snares",
    action: "",
    tags: ["ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Ubiquitous Snares.
          </span>
        </p>
        <p>
          You can create endless shorter-lived snares, protecting your lair or
          using them against foes. Once per minute, you can Craft one of the
          snares you’ve prepared for quick deployment without expending the
          prepared snare. Once deployed, such a snare lasts for 10 minutes
          before losing its effectiveness.
        </p>
      </>
    ),
  },
  {
    id: 102,
    name: "Legendary shot",
    action: "",
    tags: ["ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> legendary in Perception, Far Shot.
          </span>
        </p>
        <p>
          You focus on your hunted prey, perceiving angles, air resistance, and
          every variable that would affect your ranged attack. If you have
          master proficiency with your ranged weapon, you can ignore the penalty
          for attacking up to five range increments away when attacking your
          hunted prey.
        </p>
      </>
    ),
  },
  {
    id: 103,
    name: "Superior sight",
    action: "",
    tags: ["uncommon", "ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Broken Promises</i>
        </p>
        <p>
          Your senses are peerless. You gain a +2 circumstance bonus to
          Perception checks, and you gain low-light vision. If you already have
          low-light vision, gain darkvision instead. Furthermore, when you
          target an enemy, you automatically succeed at the flat check if that
          enemy is concealed, hidden, or undetected.
        </p>
      </>
    ),
  },
  {
    id: 104,
    name: "Time dilation cascade",
    action: "three_action",
    tags: ["uncommon", "ranger", "flourish"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Fists of the Ruby Phoenix Adventure Path</i>
        </p>
        <p>
          You borrow a bit of time from the future to act now. Make six Strikes.
          Your multiple attack penalty applies normally to these Strikes. If you
          successfully hit a creature with multiple Strikes, combine those
          Strikes’ damage for the purpose of resistances and weaknesses. On your
          next turn, you regain 1 action instead of 3. This is before any
          alteration in your actions due to the quickened, slowed, and stunned
          conditions.
        </p>
      </>
    ),
  },
  {
    id: 105,
    name: "To the ends of the Earth",
    action: "",
    tags: ["ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> legendary in Survival.
          </span>
        </p>
        <p>
          Your ability to track your prey has surpassed explanation, allowing
          you to trace your prey’s movements and predict its location with ease.
          When you use Hunt Prey on a creature within 100 feet, you can follow
          that creature’s movements, allowing you to know the creature’s exact
          location no matter how far away it becomes, as long as it remains your
          prey. You must be legendary in Nature to track your prey’s location
          across teleportation or planar travel. This feat gains the detection
          and primal traits if you’re legendary in Nature.
        </p>
      </>
    ),
  },
  {
    id: 106,
    name: "Triple threat",
    action: "",
    tags: ["ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> Shared Prey.
          </span>
        </p>
        <p>
          You can divide your attention three ways when hunting. When you use
          Hunt Prey, you can designate three creatures as prey, designate two
          creatures as prey and share the effect with one ally (as Shared Prey),
          or designate one creature as prey and share the effect with two
          allies.
        </p>
      </>
    ),
  },
  {
    id: 107,
    name: "Ultimate skirmisher",
    action: "",
    tags: ["ranger"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
        </p>
        <p>
          <span className="frequency">
            <b>Prerequisites</b> unimpeded journey.
          </span>
        </p>
        <p>
          You are so skilled at navigating the wild, your movement is completely
          unaffected by terrain. You ignore the effects of all difficult
          terrain, greater difficult terrain, and hazardous terrain, and you
          don’t trigger traps and hazards that are triggered by moving into an
          area (such as trip wires and pressure plates), unless you want to.
        </p>
      </>
    ),
  },
];
