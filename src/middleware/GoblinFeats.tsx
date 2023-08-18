import React from "react";

export const goblinFeats = [
  {
    id: 1,
    name: "Bouncy goblin",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> unbreakable goblin heritage
        </span>
        <br />
        You have a particular elasticity that makes it easy for you to bounce
        and squish. You gain the trained proficiency rank in Acrobatics (or
        another skill of your choice, if you were already trained in
        Acrobatics). You also gain a +2 circumstance bonus to Acrobatics checks
        to Tumble Through a foe’s space.
      </span>
    ),
  },
  {
    id: 2,
    name: "Burn it!",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description:
      "Fire fascinates you. Your spells and alchemical items that deal fire damage gain a status bonus to damage equal to half the spell’s level or one-quarter the item’s level (minimum 1). You also gain a +1 status bonus to any persistent fire damage you deal.",
  },
  {
    id: 3,
    name: "City scavenger",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You know that the greatest treasures often look like refuse, and you
        scoff at those who throw away perfectly good scraps. You gain a +1
        circumstance bonus to checks to Subsist, and you can use Society or
        Survival when you Subsist in a settlement.
        <br />
        <br />
        When you Subsist in a city, you also gather valuable junk that silly
        longshanks threw away. You can Earn Income using Society or Survival in
        the same time as you Subsist, without spending any additional days of
        downtime. You also gain a +1 circumstance bonus to this check.
        <br />
        <br />
        <b>Special:</b> If you have the irongut goblin heritage, increase the
        bonuses to +2.
      </span>
    ),
  },
  {
    id: 4,
    name: "Extra squishy",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> unbreakable goblin heritage
        </span>
        <br />
        Your rubbery physique makes it easier for you to wedge yourself into
        tight spaces and more difficult for your enemies to dislodge you. You
        become trained in Acrobatics. If you would automatically become trained
        in Acrobatics (from your background or class, for example), you instead
        become trained in a skill of your choice. If you roll a success to
        Squeeze, you get a critical success instead. While you’re Squeezing, you
        gain a +4 circumstance bonus to your Fortitude or Reflex DCs against
        attempts to Shove you or otherwise move you from your space.
      </span>
    ),
  },
  {
    id: 5,
    name: "Fang sharpener",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> irongut goblin or razortooth goblin heritage
        </span>
        <br />
        You have filed your teeth into jagged points and have an unusually
        powerful jaw, making your mouth a dangerous weapon. If you’re an irongut
        goblin, you gain a jaws unarmed attack that deals 1d4 piercing damage,
        and if you’re a razortooth goblin, your jaws unarmed attack deals 1d8
        piercing damage and loses the finesse trait. Whenever you score a
        critical hit with your jaws unarmed attack, your target takes 1
        persistent bleed damage per weapon damage die.
      </span>
    ),
  },
  {
    id: 6,
    name: "Goblin lore",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve picked up skills and tales from your goblin community. You gain the trained proficiency rank in Nature and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Goblin Lore.",
  },
  {
    id: 7,
    name: "Goblin scuttle",
    action: "reaction",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> An ally ends a move action adjacent to you.
        </span>
        <br />
        You take advantage of your ally’s movement to adjust your position. You
        Step.
      </span>
    ),
  },
  {
    id: 8,
    name: "Goblin song",
    action: "one_action",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You sing annoying goblin songs, distracting your foes with silly and
        repetitive lyrics. Attempt a Performance check against the Will DC of a
        single enemy within 30 feet. This has all the usual traits and
        restrictions of a Performance check.
        <br />
        <br />
        You can affect up to two targets within range if you have expert
        proficiency in Performance, four if you have master proficiency, and
        eight if you have legendary proficiency.
        <br />
        <br />
        <b>Critical Success:</b> The target takes a –1 status penalty to
        Perception checks and Will saves for 1 minute.
        <br />
        <br />
        <b>Success:</b> The target takes a –1 status penalty to Perception
        checks and Will saves for 1 round.
        <br />
        <br />
        <b>Critical Failure:</b> The target is temporarily immune to attempts to
        use Goblin Song for 1 hour.
      </span>
    ),
  },
  {
    id: 9,
    name: "Goblin weapon familiarity",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Others might look upon them with disdain, but you know that the weapons
        of your people are as effective as they are sharp. You are trained with
        the dogslicer and horsechopper.
        <br />
        <br />
        In addition, you gain access to all uncommon goblin weapons. For the
        purpose of determining your proficiency, martial goblin weapons are
        simple weapons and advanced goblin weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 10,
    name: "Hard tail",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> tailed goblin heritage.
        </span>
        <br />
        Your tail is much stronger than most, and you can lash out with it with
        the strength of a whip. You gain a tail unarmed attack that deals 1d6
        bludgeoning damage.
      </span>
    ),
  },
  {
    id: 11,
    name: "Junk tinker",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You can make useful tools out of even twisted or rusted scraps. When
        using the Crafting skill to Craft, you can make level 0 items, including
        weapons but not armor, out of junk. This reduces the Price to
        one-quarter the usual amount but always results in a shoddy item. Shoddy
        items normally give a penalty, but you don’t take this penalty when
        using shoddy items you made.
        <br />
        <br />
        You can also incorporate junk to save money while you Craft any item.
        This grants you a discount on the item as if you had spent 1 additional
        day working to reduce the cost, but the item is obviously made of junk.
        At the GM’s discretion, this might affect the item’s resale value
        depending on the buyer’s tastes.
      </span>
    ),
  },
  {
    id: 12,
    name: "Rough rider",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description:
      "You are especially good at riding traditional goblin mounts. You gain the Ride feat, even if you don’t meet the prerequisites. You gain a +1 circumstance bonus to Nature checks to use Command an Animal on a goblin dog or wolf mount. You can always select a wolf as your animal companion, even if you would usually select an animal companion with the mount special ability, such as for a champion’s steed ally.",
  },
  {
    id: 13,
    name: "Twitchy",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description:
      "You are naturally suspicious and wary of danger, especially when you suspect someone might be leading you into an ambush. You gain a +1 circumstance bonus to AC and saves against hazards, and to all of your initiative rolls. If at least one of your opponents is using Deception or Diplomacy to determine their initiative, your bonus to initiative from this feat increases to +4.",
  },
  {
    id: 14,
    name: "Very sneaky",
    action: "",
    tags: ["goblin"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Taller folk rarely pay attention to the shadows at their feet, and you
        take full advantage of this. You can move 5 feet farther when you take
        the Sneak action, up to your Speed.
        <br />
        <br />
        In addition, as long as you continue to use Sneak actions and succeed at
        your Stealth check, you don’t become observed if you don’t have cover or
        greater cover and aren’t concealed at the end of the Sneak action, as
        long as you have cover or greater cover or are concealed at the end of
        your turn.
      </span>
    ),
  },
  {
    id: 15,
    name: "Ankle bite",
    action: "reaction",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Fang Sharpener or razortooth goblin heritage.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A foe gives you the grabbed or restrained condition
          using a part of its body.
        </span>
        <br />
        Whenever someone grabs onto you, you instinctively bite down hard.
        Sometimes that makes them let go, and sometimes it just makes them
        angrier, but either way, it’s both satisfying and tasty. Make a jaws
        Strike against the triggering foe. On a critical hit, you are no longer
        grabbed. This Strike doesn’t count toward your multiple attack penalty,
        and your multiple attack penalty doesn’t apply to this Strike.
      </span>
    ),
  },
  {
    id: 16,
    name: "Chosen of lamashtu",
    action: "",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> worshipper of Lamashtu
        </span>
        <br />
        You bear the favor and blessings of Lamashtu, the Mother of Monsters.
        She has bestowed a mutation upon you, granting you the benefits of
        another heritage. Choose one goblin heritage that you do not already
        have; you gain that heritage and its benefits.
      </span>
    ),
  },
  {
    id: 17,
    name: "Goblin weapon frenzy",
    action: "",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Goblin Weapon Familiarity
        </span>
        <br />
        You know how to wield your people’s vicious weapons. Whenever you score
        a critical hit using a goblin weapon, you apply the weapon’s critical
        specialization effect.
      </span>
    ),
  },
  {
    id: 18,
    name: "Kneecap",
    action: "one_action",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description:
      "You deliver a punishing blow to an enemy’s knee, shin, or other vulnerable anatomy within your reach. Make a Strike with one of your melee weapons or melee unarmed attacks. This attack doesn’t deal damage. On a hit, the target takes a –10-foot status penalty to its Speed or a –15-foot status penalty on a critical hit. This penalty applies only if the target has a land Speed and depends on legs or other targetable appendages to use its land Speed. As with all penalties to Speed, this can’t reduce a creature’s Speed below 5 feet. This penalty lasts for 1 round.",
  },
  {
    id: 19,
    name: "Loud singer",
    action: "",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Goblin Song
        </span>
        <br />
        Staying on pitch, proper breath control, and remembering the words are
        all less important than the real measure of a good singer: volume! The
        range of your Goblin Song is increased to 60 feet, and you can target
        one additional enemy when you use it.
      </span>
    ),
  },
  {
    id: 20,
    name: "Tail spin",
    action: "two_action",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> tailed goblin heritage, Hard Tail
        </span>
        <br />
        You excel at using your tail as a weapon to upend your foes. Attempt a
        single Athletics check to Trip up to two adjacent creatures. If you roll
        a success against a target, you get a critical success against that
        target instead.
      </span>
    ),
  },
  {
    id: 21,
    name: "Torch goblin",
    action: "one_action",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> charhide goblin heritage
        </span>
        <br />
        You’ve spent enough time on fire that you know how to use it to your
        advantage. You can light yourself thoroughly on fire with a held torch,
        a bottle of alchemist’s fire, or a similar incendiary, dealing yourself
        1d6 persistent fire damage. As long as you are suffering persistent fire
        damage, all your melee attacks against adjacent creatures deal an
        additional 1 fire damage per weapon damage die. Any creature that
        successfully Grapples, Shoves, or Trips you takes 1d6 fire damage; if it
        uses a weapon for that action, the weapon takes the damage instead. You
        must still attempt the flat check to remove the persistent fire damage
        each round, as normal.
      </span>
    ),
  },
  {
    id: 22,
    name: "Tree climber",
    action: "",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> tailed goblin or treedweller goblin heritage
        </span>
        <br />
        Your time in forest or jungle canopies has taught you how to scramble
        across branches with sure feet. You gain a climb Speed of 10 feet. If
        you also have the Cave Climber ancestry feat, your total climb Speed
        increases to your land Speed when climbing trees.
      </span>
    ),
  },
  {
    id: 23,
    name: "Vandal",
    action: "",
    tags: ["goblin"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You have a knack for breaking and dismantling things. Putting them back
        together is the boring part, so you largely don’t bother with that. You
        become trained in Thievery. If you would automatically become trained in
        Thievery (from your background or class, for example), you instead
        become trained in a skill of your choice.
        <br />
        <br />
        In addition, whenever you hit with a Strike against a trap or an
        unattended object, you ignore the first 5 points of the object’s
        Hardness.
      </span>
    ),
  },
  {
    id: 24,
    name: "Cave climber",
    action: "",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description:
      "After years of crawling and climbing through caverns, you can climb easily anywhere you go. You gain a climb Speed of 10 feet.",
  },
  {
    id: 25,
    name: "Cling",
    action: "one_action",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Your last action was a successful Strike.
        </span>
        <br />
        You hang onto a foe to harry them into submission. If your target moves
        while you’re hanging onto it, you can choose to move with the target.
        The target is released if you choose not to move with it, at the start
        of your next turn, or if the target Escapes. Attempts to Escape from a
        Cling follow the rules for Escape, but use your Acrobatics DC and end
        the Cling instead of the conditions normally ended by the Escape action.
        <br />
        <br />
        <b>Special:</b> You can use this action without a free hand if your
        preceding Strike was made with your jaws or a similar unarmed attack you
        could use to hang on. The GM determines which unarmed attacks apply.
        Hanging on in this way prevents you from using that unarmed attack.
      </span>
    ),
  },
  {
    id: 26,
    name: "Freeze it!",
    action: "one_action",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> snow goblin heritage
        </span>
        <br />
        You are no rime hag or Jadwiga, but the magic of the north has still
        left a mark on you. Frigid ice runs through your veins, and you can
        expel frost from your body to freeze your foes. Attempt an Athletics
        check against the Fortitude DC of an adjacent foe. If you have master
        proficiency in Athletics, you can affect up to two adjacent foes,
        rolling one Athletics check against each foe.
        <br />
        <br />
        <b>Critical Success:</b> The target becomes clumsy 2 for 1 round.
        <br />
        <br />
        <b>Success:</b> The target becomes clumsy 1 for 1 round.
        <br />
        <br />
        <b>Critical Failure:</b> The target is temporarily immune for 1 minute.
      </span>
    ),
  },
  {
    id: 27,
    name: "Hungry goblin",
    action: "",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Fang Sharpener
        </span>
        <br />
        You’ll eat anything and anyone. Whenever you inflict persistent bleed
        damage with your jaws unarmed attack, you gain temporary Hit Points
        equal to half your level for 1 minute.
      </span>
    ),
  },
  {
    id: 27,
    name: "Roll with it",
    action: "reaction",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> unbreakable goblin heritage, Bouncy Goblin
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A foe hits you with a melee weapon or unarmed attack.
        </span>
        <br />
        When you take a big hit, your foe bounces you around like a rubber ball,
        but you escape the worst of the blow. Your foe can move you any distance
        of its choice up to 30 feet in a direction of its choice (this is not
        forced movement, and it triggers reactions as normal). You fall prone
        and are stunned 1. Attempt a DC 6 flat check. On a success, you take
        minimum damage from the attack, and on a critical success, if the attack
        was a critical hit, you don’t take double damage from the critical hit.
      </span>
    ),
  },
  {
    id: 28,
    name: "Scalding pit",
    action: "",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Torch Goblin
        </span>
        <br />
        Your bodily fluids burn with surprising volatility, as if you ran on oil
        instead of blood. As long as you are taking persistent fire damage, you
        gain a boiling spit ranged unarmed attack with a range of 30 feet that
        deals 1d6 fire damage.
      </span>
    ),
  },
  {
    id: 29,
    name: "Skittering scuttle",
    action: "",
    tags: ["goblin"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Goblin Scuttle
        </span>
        <br />
        You can scuttle farther and faster when maneuvering alongside allies.
        When you use Goblin Scuttle, you can Stride up to half your Speed
        instead of Stepping.
      </span>
    ),
  },
  {
    id: 30,
    name: "Goblin weapon expertise",
    action: "",
    tags: ["goblin"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Goblin Weapon Familiarity
        </span>
        <br />
        Your goblin affinity blends with your class training, granting you great
        skill with goblin weapons. Whenever you gain a class feature that grants
        you expert or greater proficiency in a given weapon or weapons, you also
        gain that proficiency in the dogslicer, horsechopper, and all goblin
        weapons in which you are trained.
      </span>
    ),
  },
  {
    id: 30,
    name: "Unbreakable-er goblin",
    action: "",
    tags: ["goblin"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> unbreakable goblin heritage
        </span>
        <br />
        As hard as most unbreakable goblins are to break, you are that much
        harder to break. You gain 20 Hit Points from your ancestry instead of
        10. When you fall, you take no falling damage. If you have the Bouncy
        Goblin feat, after falling or jumping from a height of at least 20 feet,
        you can bounce back into the air, up to half the distance you fell (and
        half as far forward if you jumped). These bounces continue until you
        bounce less than 20 feet.
      </span>
    ),
  },
  {
    id: 31,
    name: "Very, very sneaky",
    action: "",
    tags: ["goblin"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Very Sneaky
        </span>
        <br />
        You can move up to your Speed when you use the Sneak action, and you no
        longer need to have cover or greater cover or be concealed to Hide or
        Sneak.
      </span>
    ),
  },
  {
    id: 32,
    name: "Reckless abandon",
    action: "",
    tags: ["fortune", "goblin"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Despite a lifetime filled with questionable decisions, you’ve managed to
        survive, as though you have uncanny luck that lets you avoid the
        consequences of your own actions. For the remainder of your turn, if you
        roll a failure or critical failure on a saving throw against a harmful
        effect, you get a success instead. Further, enemies and hazards that
        would damage you this turn roll the minimum possible damage.
        <br />
        <br />
        These benefits apply only to harmful effects incurred entirely during
        your turn in which you activate Reckless Abandon, such as running
        through a prismatic wall. Persistent damage and conditions that were
        applied prior to your turn proceed normally, and as soon as your turn
        ends you are subject to the full consequences of any dangers still
        threatening you.
      </span>
    ),
  },
];
