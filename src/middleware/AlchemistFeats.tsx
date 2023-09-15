import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const AlchemistFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Alchemical familiar",
    action: "",
    tags: ["alchemist"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You have used alchemy to create life, a simple creature formed from
        alchemical materials, reagents, and a bit of your own blood. This
        alchemical familiar appears to be a small creature of flesh and blood,
        though it might have some unusual or distinguishing aspects depending on
        your creative process. Like other familiars, your alchemical familiar
        assists you in your laboratory and on adventures. The familiar uses your
        Intelligence modifier to determine its Perception, Acrobatics, and
        Stealth modifiers (see the Familiars section for more information).
      </span>
    ),
  },
  {
    id: 2,
    name: "Alchemical Savant",
    action: "",
    tags: ["alchemist"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> trained in Crafting.
        </span>
        You can identify alchemical items quickly. When using the Crafting skill
        to Identify Alchemy on an alchemical item you hold, you can do so as a
        single action, which has the concentrate and manipulate traits, instead
        of spending 10 minutes. If you have the formula for the item you are
        attempting to identify, you gain a +2 circumstance bonus to your check,
        and if you roll a critical failure, you get a failure instead.
      </span>
    ),
  },
  {
    id: 3,
    name: "Far Lobber",
    action: "",
    tags: ["alchemist"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You’ve learned how to throw a longer distance. When you throw an
        alchemical bomb, it has a range increment of 30 feet instead of the
        usual 20 feet.
      </span>
    ),
  },
  {
    id: 4,
    name: "Quick bomber",
    action: "one_action",
    tags: ["alchemist"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You keep your bombs in easy-to-reach pouches from which you draw without
        thinking. You Interact to draw a bomb, then Strike with it.
      </span>
    ),
  },
  {
    id: 5,
    name: "Subtle delivery",
    action: "",
    tags: ["alchemist"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        You can capably deliver toxins with a blowgun. Your blowgun Strikes can
        apply injury poisons even if they deal no damage due to a creature’s
        resistance. If you critically succeed at an attack roll using a blowgun
        loaded with a dart you’ve poisoned and the target rolls a failure on the
        poison’s initial save, the target critically fails instead.
      </span>
    ),
  },
  {
    id: 6,
    name: "Demolition charge",
    action: "",
    tags: ["alchemist"],
    level: 2,
    feat: "Feat 2",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        You can rig your bombs to inanimate objects in order to cause
        destruction to the surrounding area. As an activity that takes 1 minute,
        you attach between one and four bombs to an inanimate object within your
        reach, such as a chest, door, wall, or column. This creates a hazard in
        one square occupied by or adjacent to the inanimate object, and the
        hazard’s Stealth DC to detect it and Thievery DC to disable it are equal
        to your class DC. The hazard has the following reaction, which you can
        also trigger as a single action so long as you are within 30 feet of the
        hazard. The hazard retains its potency until it’s triggered, until the
        inanimate object moves from its space, or until you make your next daily
        preparations, whichever comes first.
        <br />
        <br />
        <b>Fire in the Hole</b>{" "}
        <img src={require("../assets/img/reaction.png")} alt="reaction icon" />
        <br />
        <b>Trigger:</b> A creature moves into the hazard’s space; <b>Effect:</b>{" "}
        The hazard explodes, dealing the bombs’ damage and splash damage to the
        inanimate object. Combine this damage for the purpose of resistances and
        weaknesses, and this damage ignores an amount of the object’s Hardness
        equal to your level. Any creatures adjacent to the hazard take the
        bombs’ splash damage, similarly combined for the purpose of resistances
        and weaknesses. As a reminder, since you didn’t throw the bombs,
        Calculated Splash and similar effects don’t apply.
      </span>
    ),
  },
  {
    id: 7,
    name: "Poison Resistance",
    action: "",
    tags: ["alchemist"],
    level: 2,
    feat: "Feat 2",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Repeated exposure to toxic reagents has fortified your body against
        poisons of all kinds. You gain poison resistance equal to half your
        level, and you gain a +1 status bonus to saving throws against poisons.
      </span>
    ),
  },
  {
    id: 8,
    name: "Revivifying Mutagen",
    action: "",
    tags: ["alchemist"],
    level: 2,
    feat: "Feat 2",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        While under the effect of a mutagen, you can metabolize that mutagen’s
        power to heal yourself. This uses a single action, which has the
        concentrate and manipulate traits. Once the action is complete, you
        regain 1d6 Hit Points for every 2 item levels of the mutagen (minimum
        1d6), but the mutagen’s duration immediately ends, even if you are under
        the effect of Persistent Mutagen.
      </span>
    ),
  },
  {
    id: 9,
    name: "Smoke bomb",
    action: "",
    tags: ["additive 1", "alchemist"],
    level: 2,
    feat: "Feat 2",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Quick Alchemy to craft an alchemical bomb with
          a level at least 1 lower than your advanced alchemy level.
        </span>
        <br />
        You cause the bomb to create a cloud of thick smoke, in addition to its
        normal effects. When thrown, the bomb creates a cloud of smoke in a
        10-foot-radius burst. You choose which corner of the target’s space (or
        the space in which the bomb lands) the cloud is centered on. Creatures
        within that area have the concealed condition, and all other creatures
        are concealed to them. The smoke lasts for 1 minute or until dissipated
        by a strong wind.
      </span>
    ),
  },
  {
    id: 10,
    name: "Calculated splash",
    action: "",
    tags: ["alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You have calculated all the angles to maximize a bomb’s splash. When you
        throw an alchemical bomb with the splash trait, you can cause the bomb
        to deal splash damage equal to your Intelligence modifier (minimum 0)
        instead of the normal amount.
      </span>
    ),
  },
  {
    id: 11,
    name: "Chemical Purification",
    action: "",
    tags: ["uncommon", "additive 2", "alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Lost Omens: Knights of Lastwall</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Quick Alchemy to craft an alchemist’s fire or
          ghost charge APG, and that bomb’s level is at least 2 levels lower
          than your advanced alchemy level.
        </span>
        <br />
        You developed a method to chemically purify and consecrate your bombs on
        the fly. You include this additive mixture when crafting your
        alchemist’s fire or ghost charge. The created bomb deals 1d4 persistent
        positive damage in addition to whatever damage it would normally cause.
        As usual for positive damage, this damage harms only undead and
        creatures with negative healing.
      </span>
    ),
  },
  {
    id: 12,
    name: "Efficient alchemy",
    action: "",
    tags: ["alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Thanks to the time you’ve spent studying and experimenting, you know how
        to scale your formulas into larger batches that don’t require any
        additional attention. When spending downtime to Craft alchemical items,
        you can produce twice as many alchemical items in a single batch without
        spending additional preparatory time. For instance, if you are creating
        elixirs of life, you can craft up to eight elixirs in a single batch
        using downtime, rather than four. This does not reduce the amount of
        alchemical reagents required or other ingredients needed to craft each
        item, nor does it increase your rate of progress for days past the base
        downtime spent. This also does not change the number of items you can
        create in a batch using advanced alchemy.
      </span>
    ),
  },
  {
    id: 13,
    name: "Enduring alchemy",
    action: "",
    tags: ["alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You’ve learned how to make your personal energy last just a little bit
        longer when quickly brewing ad hoc concoctions. When using Quick Alchemy
        to create an alchemical tool or elixir, that tool or elixir remains
        potent until the end of your next turn, instead of losing its potency at
        the start of your next turn.
      </span>
    ),
  },
  {
    id: 14,
    name: "Healing bomb",
    action: "",
    tags: ["additive 1", "alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You craft an elixir of life using Quick Alchemy, and
          that elixir is at least 2 levels lower than your advanced alchemy
          level.
        </span>
        <br />
        By adding a special catalyst, you transform a healing elixir into a
        topical projectile. You grant the elixir the bomb trait. If you throw an
        elixir of life bomb at a willing target, you hit even on a failure,
        though not on a critical failure. If your Strike with this elixir bomb
        hits a living target, the target regains Hit Points as if it had
        consumed the elixir. On a critical success, the target also gains the
        elixir’s item bonus to saving throws against diseases and poisons for 1
        minute.
      </span>
    ),
  },
  {
    id: 15,
    name: "Inured to alchemy",
    action: "",
    tags: ["uncommon", "alchemist", "barbarian", "fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Punks in a Power Keg</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> expert in Fortitude saves; Access You’re from
          Alkenstar or the Mana Wastes.
        </span>
        <br />
        You’ve developed control over how your body processes alchemical poisons
        and drugs. Each of your successful saving throws against an alchemical
        poison, a drug, or an addiction reduces the stage by 2, or by 1 for a
        virulent alchemical poison, drug, or addiction. Each critical success
        reduces the stage by 3, or by 2 for a virulent alchemical poison, drug,
        or addiction.
      </span>
    ),
  },
  {
    id: 16,
    name: "Tenacious toxins",
    action: "",
    tags: ["alchemist"],
    level: 4,
    feat: "Feat 4",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        Your victims tend to expire long before your poisons, since the latter
        have been specifically formulated to last longer. The maximum duration
        of any poison you create increases by an amount equal to the poison’s
        stage 1 interval, to a maximum of twice the poison’s maximum duration.
      </span>
    ),
  },
  {
    id: 17,
    name: "Artoku's fire",
    action: "",
    tags: ["rare", "additive 2", "alchemist"],
    level: 6,
    feat: "Feat 6",
    description: (
      <span>
        <i>Lost Omens: Legends</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Quick Alchemy to craft an alchemist’s fire,
          and that bomb’s level is at least 2 levels lower than your advanced
          alchemy level.
        </span>
        <br />
        Artokus developed a mixture of volatile materials that burns hotter and
        longer than typical alchemist’s fire. You include this additive mixture
        when crafting your alchemist’s fire. The alchemist’s fire deals 1d4
        persistent fire damage in addition to what the alchemist fire would
        normally cause (for instance, a moderate alchemist’s fire deals 1d4+2
        persistent fire damage). A creature taking persistent fire damage from
        the alchemist’s fire requires two successful flat checks to end the
        persistent damage, or one check if the creature had an assisted recovery
        that reduces the flat check to DC 10. The enhanced alchemist’s fire
        burns even underwater, and any attempts to end the persistent damage by
        using water have no effect.
      </span>
    ),
  },
  {
    id: 18,
    name: "Combine Elixirs",
    action: "",
    tags: ["additive 2", "alchemist"],
    level: 6,
    feat: "Feat 6",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Quick Alchemy to craft an alchemical item that
          has the elixir trait and is at least 2 levels lower than your advanced
          alchemy level.
        </span>
        <br />
        You’ve discovered how to mix two elixirs into a single hybrid
        concoction. You can spend 2 additional batches of infused reagents to
        add a second elixir to the one you’re crafting. The second elixir must
        also be at least 2 levels lower than your advanced alchemy level, and
        the combination elixir is an alchemical item two levels higher than the
        higher of the two elixirs’ levels. When this combination elixir is
        consumed, both the constituent elixirs take effect. For example, you can
        combine two elixirs of life to create a combined elixir that heals twice
        the normal amount, or you can combine a lesser darkvision elixir with a
        lesser eagle-eye elixir to both gain darkvision and find secret doors.
      </span>
    ),
  },
  {
    id: 19,
    name: "Debilitating bomb",
    action: "",
    tags: ["additive 2", "alchemist"],
    level: 6,
    feat: "Feat 6",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Quick Alchemy to craft an alchemical bomb that
          is at least 2 levels lower than your advanced alchemy level.
        </span>
        <br />
        Your bombs impose additional effects on your enemies. You mix a
        substance into the bomb that causes one of the following: dazzled,
        deafened, flat-footed, or a –5-foot status penalty to Speeds. If the
        attack with that bomb hits, the target must succeed at a Fortitude
        saving throw or suffer that effect until the start of your next turn.
        Use your class DC for this saving throw (even if someone else throws the
        bomb).
      </span>
    ),
  },
  {
    id: 20,
    name: "Directional bombs",
    action: "",
    tags: ["alchemist"],
    level: 6,
    feat: "Feat 6",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You can lob bombs with great force and a precise trajectory to angle the
        splash in a cone spraying in a single direction. When throwing an
        alchemical bomb with the splash trait, instead of splashing all squares
        adjacent to the target, you can treat the target’s space as the first
        affected square of a 15-foot cone directed away from you, potentially
        allowing you to avoid allies and splash deeper into enemy lines. If the
        target takes up more than a single square, the target’s square closest
        to you is the first affected square of the cone.
      </span>
    ),
  },
  {
    id: 21,
    name: "Sticky poison",
    action: "",
    tags: ["alchemist"],
    level: 6,
    feat: "Feat 6",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />A combination of additional viscosity and careful application
        keeps your weapons poisoned even when suffering significant wear and
        tear. If your Strike with a poisoned weapon would expend its poison
        without your target attempting an initial save (due to resistance or
        your Strike being a critical failure, for example), attempt a DC 5 flat
        check. On a success, your weapon remains poisoned. If your Strike with a
        poisoned weapon succeeds, attempt a DC 17 flat check. On a success, your
        weapon remains poisoned until the end of your next turn.
      </span>
    ),
  },
  {
    id: 22,
    name: "Feral Mutagen",
    action: "",
    tags: ["alchemist"],
    level: 8,
    feat: "Feat 8",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Your bestial mutagen brings out the beast lurking within you, granting
        you especially sharp claws and teeth as well as a ferocious appearance.
        Whenever you’re affected by a bestial mutagen, you gain the mutagen’s
        item bonus to your Intimidation checks. In addition, your claws and jaws
        are increasingly vicious, and they gain the deadly d10 trait. Finally,
        you can increase the mutagen’s penalty to AC from –1 to –2 and, in
        exchange, increase the damage die size of your claws and jaws by one
        step.
      </span>
    ),
  },
  {
    id: 23,
    name: "Perpetual breadth",
    action: "",
    tags: ["alchemist"],
    level: 8,
    feat: "Feat 8",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> perpetual infusions.
        </span>
        <br />
        You have expanded your supply of near-infinite items. Choose a research
        field. Add one item from the list of options available to that field
        from perpetual infusions, or two items if you choose your own field. If
        you have perpetual potency or perpetual perfection, you gain an
        additional item (or items if you chose your own field) appropriate to
        the field you chose, for instance a higher-level version of the bomb you
        chose or a new poison.
      </span>
    ),
  },
  {
    id: 24,
    name: "Pinpoint Poisoner",
    action: "",
    tags: ["alchemist"],
    level: 8,
    feat: "Feat 8",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        Unsuspecting targets are especially vulnerable to your poisons. When you
        successfully Strike a flat-footed creature with a poisoned weapon or
        expose a flat-footed creature to an inhaled poison, the flat-footed
        condition also gives that creature a –2 circumstance penalty to its
        initial save against that poison.
      </span>
    ),
  },
  {
    id: 25,
    name: "Retaliatory cleansing",
    action: "reaction",
    tags: ["uncommon", "alchemist"],
    level: 8,
    feat: "Feat 8",
    description: (
      <span>
        <i>Lost Omens: Knights of Lastwall</i>
        <br />
        <br />
        <b>Trigger:</b> You would take damage from an adjacent creature’s
        Strike.
        <br />
        <span className="frequency">
          <b>Requirements:</b> You’re holding holy water or a bomb that deals
          positive damage in one of your hands.
        </span>
        <br />
        You twist your hand in front of the blow, ensuring the enemy’s attack
        shatters the required holy water or bomb. The creature takes the on-hit
        and splash damage from the holy water or required bomb, not counting any
        additional effects you would add or apply when you throw the bomb, such
        as weapon specialization or Calculated Splash. You’re splashed by the
        holy water or required bomb, although since positive damage harms only
        undead and creatures with negative healing, it’s unlikely you will take
        damage.
      </span>
    ),
  },
  {
    id: 26,
    name: "Sticky bomb",
    action: "",
    tags: ["additive 2", "alchemist"],
    level: 8,
    feat: "Feat 8",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Quick Alchemy to craft an alchemical bomb, and
          that bomb’s level is at least 2 levels lower than your advanced
          alchemy level.
        </span>
        <br />
        You mix in an additive to make your bomb’s contents adhere to the target
        and continue to deal damage. A creature that takes a direct hit from one
        of your sticky bombs also takes persistent damage equal to and of the
        same type as the bomb’s splash damage. If the bomb already deals
        persistent damage, combine the two amounts.
      </span>
    ),
  },
  {
    id: 27,
    name: "Elastic mutagen",
    action: "",
    tags: ["alchemist"],
    level: 10,
    feat: "Feat 10",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You can cause your body to twist and flow like the quicksilver within
        your mutagens. Whenever you are under the effects of a quicksilver
        mutagen, you can stretch your legs and Step up to 10 feet, and you can
        squish and compress your body, allowing you to make it through tight
        spaces as if you were one size smaller, in addition to any effect from
        Squeezing.
      </span>
    ),
  },
  {
    id: 28,
    name: "Expanded splash",
    action: "",
    tags: ["alchemist"],
    level: 10,
    feat: "Feat 10",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Calculated Splash.
        </span>
        <br />
        You can throw bombs at just the right trajectory to create especially
        large and powerful explosions. When you throw an alchemical bomb and
        that bomb has the splash trait, you can add your Intelligence modifier
        to the bomb’s usual splash damage, and it deals splash damage to every
        creature within 10 feet of the target.
      </span>
    ),
  },
  {
    id: 29,
    name: "Greater Debilitating Bomb",
    action: "",
    tags: ["alchemist"],
    level: 10,
    feat: "Feat 10",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Debilitating Bomb.
        </span>
        <br />
        You have learned enhanced techniques and alchemical secrets that allow
        you to expand the range of effects you can impose with your bombs. When
        you use Debilitating Bomb, add the following to the list you can choose
        from: clumsy 1, enfeebled 1, stupefied 1, or –10-foot status penalty to
        Speeds.
      </span>
    ),
  },
  {
    id: 30,
    name: "Greater Debilitating Bomb",
    action: "",
    tags: ["additive 2", "alchemist"],
    level: 10,
    feat: "Feat 10",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You craft an elixir of life using Quick Alchemy, and
          that elixir is at least 2 levels lower than your advanced alchemy
          level.
        </span>
        <br />
        You mix a special additive into your elixir that calms the drinker’s
        body and mind. The elixir of life attempts to counteract one fear effect
        or one effect imposing the paralyzed condition on the drinker, using the
        item’s level and a counteract modifier equal to your class DC – 10.
      </span>
    ),
  },
  {
    id: 31,
    name: "Potent poisoner",
    action: "",
    tags: ["alchemist"],
    level: 10,
    feat: "Feat 10",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> powerful alchemy.
        </span>
        <br />
        By concentrating your poisons’ toxic components, you make them harder
        for victims to resist. When you craft an alchemical item with the poison
        trait by any means, the DC is increased by up to 4, to a maximum of your
        class DC.
      </span>
    ),
  },
  {
    id: 32,
    name: "Unstable concoction",
    action: "",
    tags: ["alchemist"],
    level: 10,
    feat: "Feat 10",
    description: (
      <span>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        You can create extraordinary—albeit volatile—alchemical wonders, though
        they have an unfortunate tendency to violently explode when you use
        them. When you use Quick Alchemy, you can create an alchemical item from
        your formula book whose level is up to 2 higher than your advanced
        alchemy level. You can spend up to 3 additional batches of infused
        reagents when creating this item to stabilize it. Upon activating the
        item, attempt a DC 10 flat check; for every additional batch of infused
        reagents you spent to create the item, reduce this DC by 2. On a
        success, the item functions normally. On a failure, the item explodes,
        dealing force damage to the user equal to twice the item’s level
        (doubled on a critical failure).
      </span>
    ),
  },
  {
    id: 33,
    name: "Extend Elixir",
    action: "",
    tags: ["alchemist"],
    level: 12,
    feat: "Feat 12",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Integrating your own personal energy into the elixirs you create causes
        them to affect you for longer. When you consume one of your alchemical
        items that has the elixir and infused traits and a duration of 1 minute
        or longer, that elixir’s duration is doubled.
      </span>
    ),
  },
  {
    id: 34,
    name: "Invincible Mutagen",
    action: "",
    tags: ["alchemist"],
    level: 12,
    feat: "Feat 12",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Repeated exposure to fortifying additives in mutagens makes your
        juggernaut form impervious. Whenever you’re affected by a juggernaut
        mutagen, you gain resistance to all physical damage equal to your
        Intelligence modifier (minimum 0).
      </span>
    ),
  },
  {
    id: 35,
    name: "Shaped contaminant",
    action: "",
    tags: ["uncommon", "alchemist"],
    level: 12,
    feat: "Feat 12",
    description: (
      <span>
        <i>Against the Scarlet Triad</i>
        <br />
        <br />
        Through a combination of careful manipulation and precise breath
        control, you can deploy inhaled toxins precisely. When you activate an
        inhaled poison, you can cause it to fill a 20-foot line that’s 5 feet
        tall rather than a 10-foot cube. You gain a +3 status bonus to saving
        throws against inhaled poisons that you activate.
      </span>
    ),
  },
  {
    id: 36,
    name: "Uncanny bombs",
    action: "",
    tags: ["alchemist"],
    level: 12,
    feat: "Feat 12",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Far Lobber.
        </span>
        <br />
        You lob bombs unerringly, despite obstructions or distance. When you
        throw an alchemical item with the bomb trait, its range increment
        increases to 60 feet, you reduce any circumstance bonus to the target’s
        AC from cover by 1, and you automatically succeed at the flat check when
        targeting a concealed creature.
      </span>
    ),
  },
  {
    id: 37,
    name: "Glib mutagen",
    action: "",
    tags: ["alchemist"],
    level: 14,
    feat: "Feat 14",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Your silvertongue mutagen transcends languages and plausibility. When
        affected by a silvertongue mutagen you have created, you ignore
        circumstance penalties to Deception, Diplomacy, Intimidation, and
        Performance checks. In addition, your words transcend linguistic
        barriers; everyone listening to you speak hears your words as if you
        were speaking in their own language (though you do not actually speak
        that language, nor does this ability allow you to understand any
        additional languages).
      </span>
    ),
  },
  {
    id: 38,
    name: "Greater merciful elixir",
    action: "",
    tags: ["alchemist"],
    level: 14,
    feat: "Feat 14",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Merciful Elixir.
        </span>
        <br />
        Your silvertongue mutagen transcends languages and plausibility. When
        affected by a silvertongue mutagen you have created, you ignore
        circumstance penalties to Deception, Diplomacy, Intimidation, and
        Performance checks. In addition, your words transcend linguistic
        barriers; everyone listening to you speak hears your words as if you
        were speaking in their own language (though you do not actually speak
        that language, nor does this ability allow you to understand any
        additional languages).
      </span>
    ),
  },
  {
    id: 39,
    name: "True debilitating bomb",
    action: "",
    tags: ["alchemist"],
    level: 14,
    feat: "Feat 14",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Greater Debilitating Bomb.
        </span>
        <br />
        Ever inventive, you have discovered increasingly devastating ways for
        your bombs to impede and hamper your foes. When you use Debilitating
        Bomb, add the following to the list of effects you can choose from:
        enfeebled 2, stupefied 2, or a –15-foot status penalty to Speeds. If you
        instead apply one of the effects listed in Debilitating Bomb, the target
        avoids the effect only if the result of its saving throw is a critical
        success.
      </span>
    ),
  },
  {
    id: 40,
    name: "Chemical contagion",
    action: "reaction",
    tags: ["alchemist"],
    level: 16,
    feat: "Feat 16",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature within 30 feet critically fails its initial
          saving throw against a poison you created.
        </span>
        <br />
        With carefully engineered enzymes, you coax some of your poison to
        infect another target, using the original victim as a carrier. A
        creature adjacent to the triggering creature is exposed to the
        triggering poison.
      </span>
    ),
  },
  {
    id: 41,
    name: "Eternal elixir",
    action: "",
    tags: ["alchemist"],
    level: 16,
    feat: "Feat 16",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Extend Elixir.
        </span>
        <br />
        Your body readily accepts and retains minor changes. When you drink one
        of your alchemical items that has the elixir and infused traits and a
        duration of 1 minute or more, you can make the elixir’s duration
        indefinite. You can do so only if the elixir’s level is half your level
        or lower. If you later consume a different elixir and make it
        indefinite, the effect of the previous indefinite elixir ends.
      </span>
    ),
  },
  {
    id: 42,
    name: "Exploitive Bomb",
    action: "",
    tags: ["additive 2", "alchemist"],
    level: 16,
    feat: "Feat 16",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Frequency:</b> once per round.
        <br />
        <span className="frequency">
          <b>Trigger:</b> You craft an alchemical bomb using Quick Alchemy
          that’s at least 2 levels lower than your advanced alchemy level.
        </span>
        <br />
        You mix a substance into the bomb to foil resistances. The bomb reduces
        any resistance the enemy has to its damage type by an amount equal to
        your level, but only for that attack.
      </span>
    ),
  },
  {
    id: 43,
    name: "Genius Mutagen",
    action: "",
    tags: ["alchemist"],
    level: 16,
    feat: "Feat 16",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Specialized tweaks to your body’s chemical composition considerably
        broaden the benefits you gain from cognitive mutagens. When you’re
        affected by a cognitive mutagen, you also gain the mutagen’s item bonus
        to Deception, Diplomacy, Intimidation, Medicine, Nature, Performance,
        Religion, and Survival checks. In addition, you can communicate
        telepathically with creatures within 60 feet with whom you share a
        language. The communication is two-way once you establish it, so a
        creature you contact can also communicate with you.
      </span>
    ),
  },
  {
    id: 44,
    name: "Persistent Mutagen",
    action: "",
    tags: ["alchemist"],
    level: 16,
    feat: "Feat 16",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites:</b> Extend Elixir.
        </span>
        <br />
        You’ve trained your physical form to remain stable within a given
        altered state. Once per day, when you consume an alchemical item with
        the infused and mutagen traits, you can retain its effects until the
        next time you make your daily preparations instead of its normal
        duration.
      </span>
    ),
  },
  {
    id: 45,
    name: "Improbable elixirs",
    action: "",
    tags: ["alchemist"],
    level: 18,
    feat: "Feat 18",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Your mastery of alchemical secrets enables you to replicate effects most
        believe can be achieved only via magic. Select a number of potions equal
        to your Intelligence modifier (minimum 1); these potions must be of 9th
        level or lower. You gain formulas to create these potions as alchemical
        items with the elixir trait. When making these alchemical elixirs, you
        can substitute alchemical reagents for an equal value of magical
        components, and you can use alchemist’s tools (for Quick Alchemy) or an
        alchemist’s lab (for the Craft activity) instead of any other required
        tool kits. Other than that, the formula does not change. Once you’ve
        chosen the potion formulas, they can’t be changed.
      </span>
    ),
  },
  {
    id: 46,
    name: "Mindblank mutagen",
    action: "",
    tags: ["alchemist"],
    level: 18,
    feat: "Feat 18",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        With the right mindset, consuming a serene mutagen grants you special
        mental protections. When you’re affected by a serene mutagen, detection,
        revelation, and scrying effects of 9th level or lower detect nothing
        from you or your possessions and auras. For instance, detect magic would
        still detect other magic in the area, but not any magic on you.
      </span>
    ),
  },
  {
    id: 47,
    name: "Miracle worker",
    action: "",
    tags: ["alchemist"],
    level: 18,
    feat: "Feat 18",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once every 10 minutes.
        </span>
        <br />
        Your alchemical mastery can resuscitate the recently slain. You can
        administer a true elixir of life to a creature who has been dead for no
        more than 2 rounds. When you do, that creature is immediately returned
        to life with 1 Hit Point and becomes wounded 1.
      </span>
    ),
  },
  {
    id: 48,
    name: "Perfect debilitation",
    action: "",
    tags: ["alchemist"],
    level: 18,
    feat: "Feat 18",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You have perfected the formulas for bombs that impede your enemies. When
        you use Debilitating Bomb, your target avoids the condition the bomb
        imposes only if it critically succeeds at its saving throw.
      </span>
    ),
  },
  {
    id: 49,
    name: "Craft Philosopher's stone",
    action: "",
    tags: ["alchemist"],
    level: 20,
    feat: "Feat 20",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        Your research has paid off, culminating in the legendary philosopher’s
        stone. You learn the formula for the philosopher’s stone and can add it
        to your formula book.
      </span>
    ),
  },
  {
    id: 50,
    name: "Mega bomb",
    action: "one_action",
    tags: ["additive 3", "alchemist"],
    level: 20,
    feat: "Feat 20",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        <b>Prerequisites:</b> Expanded Splash.
        <br />
        <span className="frequency">
          <b>Requirements:</b> You are holding an infused alchemical bomb you
          crafted, with a level at least 3 lower than your advanced alchemy
          level.
        </span>
        <br />
        You add an incredibly powerful additive to a held bomb to create a mega
        bomb, greatly increasing its area and power. You use an Interact action
        to throw the mega bomb, rather than Strike, and you don’t make an attack
        roll. The mega bomb affects creatures in a 30-foot-radius burst,
        centered within 60 feet of you. The bomb deals damage as if each
        creature were the primary target, with a basic Reflex save. On a failed
        save, a creature also takes any extra effects that affect a primary
        target (such as flat-footed from bottled lightning). While all targets
        in the area take splash damage as primary targets, there is no further
        splash beyond that area. If your next action after creating a mega bomb
        isn’t an Interact action to throw it, the mega bomb denatures and loses
        all effects.
      </span>
    ),
  },
  {
    id: 51,
    name: "Perfect mutagen",
    action: "",
    tags: ["alchemist"],
    level: 20,
    feat: "Feat 20",
    description: (
      <span>
        <i>Core Rulebook</i>
        <br />
        <br />
        You have enhanced the formulas for your mutagens, aligning them
        perfectly to your physiology. When under the effect of a mutagen you
        crafted, you do not suffer its drawback.
      </span>
    ),
  },
  {
    id: 52,
    name: "Plum deluge",
    action: "three_action",
    tags: ["uncommon", "alchemist"],
    level: 20,
    feat: "Feat 20",
    description: (
      <span>
        <i>Fists of the Ruby Phoenix Adventure Path</i>
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You have at least three of the same contact
          poison.
        </span>
        <br />
        You have learned to saturate an area with poison in imitation of the
        techniques of your rival, Blue Viper. As part of this ability, you
        Interact to draw three vials of the same contact poison and throw them
        in the air, where they shatter and spread a poisonous deluge affecting a
        20-foot burst within 60 feet. All creatures in the burst are
        automatically exposed to the poison, immediately bypassing any onset
        time, and must attempt a saving throw against that poison. The three
        vials must be identical, even if the poison can come in multiple types
        or different levels.
      </span>
    ),
  },
  {
    id: 53,
    name: "Wish Alchemy",
    action: "",
    tags: ["rare", "alchemist"],
    level: 20,
    feat: "Feat 20",
    description: (
      <span>
        <i>Lost Omens: Legends</i>
        <br />
        <br />
        You have learned Artokus Kirran’s most hidden secrets, granting you the
        ability to create alchemy infused with the power of wishes. Once per day
        when you use advanced alchemy during your daily preparations, you can
        spend a batch of infused reagents to create a wish vial containing a
        single common arcane spell of your choice of 8th level or lower. The
        spell must have a casting time of no more than 3 actions, no Cost, and
        must be able to target you. Only you can Activate the wish vial, which
        takes the same number of Interact actions as the spell’s casting time
        and grants you the effects of the spell.
      </span>
    ),
  },
];
