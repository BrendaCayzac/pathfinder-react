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
    name: "Fey tracker",
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
];
