import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const koboldFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "cringe",
    action: "reaction",
    tags: ["emotion", "kobold", "mental", "visual"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> A creature you are aware of critically succeeds on a
          Strike against you and would deal damage to you.
        </span>
        <br />
        With pitiful posturing, you cause your foe to pull back a deadly attack.
        The attacking creature takes a circumstance penalty to the damage of the
        triggering Strike equal to your level + 2. This penalty applies after
        doubling the damage for a critical hit. The attacker is then immune to
        your Cringe for 24 hours.
      </span>
    ),
  },
  {
    id: 2,
    name: "Draconic sycophant",
    action: "",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have an affect that dragonkind find unusually pleasing—and when that
        fails, you know when to duck. You gain a +2 circumstance bonus to
        Perception checks and saving throws against dragons. In addition,
        whenever you meet a creature with the dragon trait in a social
        situation, you can attempt a Diplomacy check to Make an Impression on
        that creature immediately, rather than after conversing for 1 minute;
        you take a –5 penalty to this check. If you fail, you can choose to
        engage in 1 minute of conversation and then attempt a new check rather
        than accept the failure or critical failure result.
        <br />
        <br />
        <b>Special:</b> If you have the Glad-Hand skill feat, you don’t take the
        penalty to your immediate Diplomacy check if the target has the dragon
        trait.
      </span>
    ),
  },
  {
    id: 3,
    name: "Dragon's presence",
    action: "",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        As a member of dragonkind, you project unflappable confidence (that
        collapses catastrophically against the deadliest foes). When you roll a
        success on a saving throw against a fear effect, you get a critical
        success instead. When you roll a failure against a fear effect, you get
        a critical failure instead.
        <br />
        <br />
        In addition, when you attempt to Demoralize a foe of your level or
        lower, you gain a +1 circumstance bonus to the Intimidation check.
      </span>
    ),
  },
  {
    id: 4,
    name: "Kobold's breath",
    action: "two_action",
    tags: ["arcane", "evocation", "kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You channel your draconic exemplar’s power into a gout of energy that
        manifests as a 30-foot line or a 15-foot cone, dealing 1d4 damage. Each
        creature in the area must attempt a basic saving throw against the
        higher of your class DC or spell DC. You can’t use this ability again
        for 1d4 rounds.
        <br />
        <br />
        At 3rd level and every 2 levels thereafter, the damage increases by 1d4.
        The shape of the breath, the damage type, and the saving throw match
        those of your draconic exemplar (see Table 1–1). This ability has the
        trait associated with the type of damage it deals.
      </span>
    ),
  },
  {
    id: 5,
    name: "Kobold Lore",
    action: "",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You attentively learned key kobold survival strategies and mythology
        from your elders. You gain the trained proficiency rank in Stealth and
        Thievery. If you would automatically become trained in one of those
        skills (from your background or class, for example), you instead become
        trained in a skill of your choice. You also become trained in Kobold
        Lore.
      </span>
    ),
  },
  {
    id: 6,
    name: "Kobold Weapon familiarity",
    action: "",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve trained with weapons ideal for subterranean efficiency. You are
        trained with the crossbow, greatpick, light pick, pick, and spear. You
        also gain access to all uncommon kobold weapons. For the purpose of
        determining your proficiency, martial kobold weapons are simple weapons,
        and advanced kobold weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 7,
    name: "Scamper",
    action: "one_action",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Requirements:</b> You are adjacent to at least one enemy.
        </span>
        <br />
        You instinctively know how to flee danger. You Stride up to your Speed,
        with a +5-foot status bonus to your Speed, and you gain a +2
        circumstance bonus to AC against reactions triggered by this movement.
        You must end this movement in a space that’s not adjacent to any enemy.
      </span>
    ),
  },
  {
    id: 8,
    name: "Slither",
    action: "",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You are an expert at moving through extremely tight spaces. You gain the
        Quick Squeeze skill feat, even if you’re not trained in Acrobatics. When
        you roll a success on an Acrobatics check to Squeeze, you get a critical
        success instead.
      </span>
    ),
  },
  {
    id: 9,
    name: "Snare letter",
    action: "",
    tags: ["kobold"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> trained in Crafting.
        </span>
        <br />
        You are adept at the time-honored kobold art of trap making. You gain
        the trained proficiency in Crafting. If you were already trained in
        Crafting, you instead become trained in a skill of your choice. You gain
        access to all uncommon kobold snares. You gain the Snare Crafting feat,
        though when choosing your formulas for that feat, you can also choose
        from uncommon kobold snares, as well as common snares.
      </span>
    ),
  },
  {
    id: 10,
    name: "Ally's shelter",
    action: "reaction",
    tags: ["fortune", "kobold"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You attempt a saving throw while adjacent to one or
          more allies, but you haven’t rolled yet.
        </span>
        <br />
        In stressful circumstances, you find strength in your allies’ example.
        Roll the save using an adjacent ally’s modifier for that type of saving
        throw instead of your own.
      </span>
    ),
  },
  {
    id: 11,
    name: "Grovel",
    action: "one_action",
    tags: ["auditory", "concentrate", "emtoion", "kobold", "mental"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> trained in Deception.
        </span>
        <br />
        With obsequious words and begging gestures, you convince your foe you’re
        less of a threat. You attempt to Feint against a creature. Unlike a
        normal Feint, the creature can be within 30 feet instead of in your
        melee reach, and you make your check against its Will DC instead of its
        Perception DC.
      </span>
    ),
  },
  {
    id: 12,
    name: "Kobold weapon innovator",
    action: "",
    tags: ["kobold"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Kobold Weapon Familiarity.
        </span>
        <br />
        You’ve learned devious tactics with your kobold weapons. Whenever you
        critically hit with a crossbow, greatpick, light pick, pick, spear, or
        kobold weapon, you apply the weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 13,
    name: "Snare genius",
    action: "",
    tags: ["kobold"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Crafting, Snare Crafting.
        </span>
        <br />
        Your expertise makes your snares more powerful, and you can place them
        quickly and efficiently. Each day during your daily preparations, you
        can prepare three snares from your formula book for quick deployment; if
        the snare normally takes 1 minute to Craft, you can Craft it with 3
        Interact actions. Snares prepared in this way don’t cost you any
        resources to Craft. The number of snares you can prepare this way
        increases to four if you are a master in Crafting, and to five if you
        are legendary. When you Craft and deploy a snare that deals damage, any
        creature that critically fails its saving throw against the snare’s
        initial effect and takes damage becomes flat-footed until the end of its
        next turn.
      </span>
    ),
  },
  {
    id: 14,
    name: "Winglets",
    action: "",
    tags: ["kobold"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’re among the few kobolds who grow a set of draconic wings later in
        life. The wings are initially small and weak; while not enough for full
        flight, a strong flap allows you to jump further. When Leaping
        horizontally, you move an additional 5 feet (this additional distance
        isn’t cumulative with the increased Leap distance from the Powerful Leap
        feat). You don’t automatically fail your checks to High Jump or Long
        Jump if you don’t Stride at least 10 feet first. In addition, when you
        attempt a Long Jump, you can jump a distance up to 10 feet longer than
        you normally would based on the result of your Athletics check, though
        you still can’t jump farther than your Speed.
      </span>
    ),
  },
  {
    id: 15,
    name: "Between scales",
    action: "",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Underestimating you is a grave mistake, but it’s one others keep making.
        You’ve learned to take advantage of slips in your foes’ defenses. When
        you Strike a flat-footed creature using a melee weapon or unarmed attack
        that has the agile and finesse traits, it gains the backstabber trait.
      </span>
    ),
  },
  {
    id: 16,
    name: "Briar battler",
    action: "",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You’ve learned to use roots, crevices, uneven ground, and dense
        underbrush to your advantage. When you’re in difficult terrain from an
        environmental feature, you can Take Cover, even if the feature wouldn’t
        ordinarily be large enough for you to Take Cover.
      </span>
    ),
  },
  {
    id: 17,
    name: "Close quarters",
    action: "",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You’ve trained to fight with allies in tunnel warrens, dense
        undergrowth, or similarly cramped terrain. If you are Small or smaller,
        you can end your movement in the same square as a Small or smaller ally.
        No more than two creatures can share the same space when using this
        ability or a similar one.
      </span>
    ),
  },
  {
    id: 18,
    name: "Dracomancer",
    action: "",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your inborn arcane power manifests as your exemplar’s most time-honored
        spells. Choose one 1st-level spell and one 2nd-level spell from those
        listed for a dragon spellcaster of your draconic exemplar’s type, as
        presented in the Dragons sections of the Bestiary (such as alarm, blur,
        invisibility, and true strike for a black dragon exemplar). You can cast
        each of these spells once per day as arcane innate spells. You gain the
        trained proficiency rank in arcane spell attack rolls and spell DCs, and
        your key spellcasting ability is Charisma.
      </span>
    ),
  },
  {
    id: 19,
    name: "Dragon's breath",
    action: "",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Kobold Breath.
        </span>
        <br />
        You can put more effort into your Kobold Breath to channel greater
        draconic power, though it takes more out of you. When you use Kobold
        Breath, you can increase the damage dice to d8s and increase the area to
        60 feet for a line breath weapon or 30 feet for a cone. If you do, you
        can’t use Kobold Breath again for 1 hour.
      </span>
    ),
  },
  {
    id: 20,
    name: "Dragonblood paragon",
    action: "",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> strongjaw kobold heritage, venomtail kobold
          heritage, Dracomancer, or Kobold Breath.
        </span>
        <br />
        Your draconic anatomy becomes especially pronounced. You increase the
        power of one of the following kobold heritages or feats you have.
        <br />
        <br />
        <b>Dracomancer:</b> Increase the number of times you can cast each of
        the granted 1st- and 2nd-level innate spells by 1.
        <br />
        <br />
        <b>Kobold breath:</b>Creatures that critically fail their save against
        your Kobold Breath take 3d4 persistent damage of the type dealt by your
        draconic patron.
        <br />
        <br />
        <b>Strongjaw Kobold:</b> Your jaws unarmed attack gains the deadly d6
        trait.
        <br />
        <br />
        <b>Venomtail Kobold:</b> You produce enough venom to use the Tail Toxin
        action twice per day.
      </span>
    ),
  },
  {
    id: 21,
    name: "Snare commando",
    action: "reaction",
    tags: ["kobold"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> expert in Deception or Intimidation, Snare
        Crafting.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature fails or critically fails a save against
          your snare.
        </span>
        <br />
        Your snares are so befuddling that your victims rarely notice you
        slipping out of sight. If you have expert proficiency in Deception, you
        can Create a Diversion against the triggering creature. If you have
        expert proficiency in Intimidation, you can instead Demoralize the
        triggering creature. If you have both, choose one of the two effects.
      </span>
    ),
  },
  {
    id: 22,
    name: "Elite dracomancer",
    action: "",
    tags: ["kobold"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Dracomancer.
        </span>
        <br />
        Your magic rivals that of lesser dragons. Choose one 3rd-level spell and
        one 4th-level spell from those listed for a dragon spellcaster of your
        draconic exemplar’s type, as in the Dragon sections of the Bestiary
        (such as paralyze and stinking cloud for a black dragon exemplar). You
        can cast each of these spells once per day as arcane innate spells.
      </span>
    ),
  },
  {
    id: 23,
    name: "Hatchling flight",
    action: "one_action",
    tags: ["kobold"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Prerequisites:</b> Winglets.
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per round.
        </span>
        <br />
        You can fly a little! You Fly up to half your Speed. If you don’t end
        your movement on solid ground, you fall at the end of your turn.
      </span>
    ),
  },
  {
    id: 24,
    name: "Kobold weapon expertise",
    action: "",
    tags: ["kobold"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Kobold Weapon Familiarity.
        </span>
        <br />
        Whenever you gain a class feature that grants you expert or greater
        proficiency in a given weapon or weapons, you also gain that proficiency
        in the crossbow, greatpick, light pick, pick, and spear, as well as any
        kobold weapons in which you are trained.
      </span>
    ),
  },
  {
    id: 25,
    name: "Vicious snare",
    action: "",
    tags: ["kobold"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Crafting, Snare Crafting.
        </span>
        <br />
        You’ve learned how to create traps that cause greater injuries. You deal
        an additional 1d6 precision damage with damaging snares you craft. This
        increases to 2d6 additional precision damage if you’re legendary in
        Crafting.
      </span>
    ),
  },
  {
    id: 26,
    name: "Wyrmling flight",
    action: "",
    tags: ["kobold"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Hatchling Flight.
        </span>
        <br />
        Your draconic wings have grown large and strong enough for flight. You
        gain a fly Speed equal to your Speed, using your wings to stay aloft.
      </span>
    ),
  },
];
