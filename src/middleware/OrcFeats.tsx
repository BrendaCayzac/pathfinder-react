import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const orcFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Beast trainer",
    action: "",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have an impressive innate ability to tame and command ferocious
        beasts. You become trained in the Nature skill and gain the Train Animal
        skill feat.
      </span>
    ),
  },
  {
    id: 2,
    name: "Iron fists",
    action: "",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your fists have been forged by battle, your naturally tough skin and
        dense bone further hardened by conflict. Your fist unarmed attacks no
        longer have the nonlethal trait and gain the shove weapon trait.
      </span>
    ),
  },
  {
    id: 3,
    name: "Orc ferocity",
    action: "reaction",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You would be reduced to 0 Hit Points but not
          immediately killed.
        </span>
        <br />
        Fierceness in battle runs through your blood, and you refuse to fall
        from your injuries. You avoid being knocked out and remain at 1 Hit
        Point, and your wounded condition increases by 1.
      </span>
    ),
  },
  {
    id: 4,
    name: "Orc lore",
    action: "",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        The hold elders taught you your people’s histories, told tales of great
        athletic feats, and shared with you the hardships your ancestors endured
        so that you can pass this wisdom down to future generations. You become
        trained in Athletics and Survival. If you would automatically become
        trained in one of those skills (from your background or class, for
        example), you instead become trained in a skill of your choice. You also
        become trained in Orc Lore.
      </span>
    ),
  },
  {
    id: 5,
    name: "Orc superstition",
    action: "reaction",
    tags: ["concentrate", "orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You attempt a saving throw against a spell or magical
          effect, before rolling.
        </span>
        <br />
        You defend yourself against magic by relying on techniques derived from
        orc cultural superstitions. You gain a +1 circumstance bonus to your
        saving throw against the triggering spell or magical effect.
      </span>
    ),
  },
  {
    id: 6,
    name: "Orc warmask",
    action: "",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You paint your face to create a warmask, an invested magic item of
        negligible Bulk with an item level equal to your level and a usage of
        worn (mask). It has the divination trait and a magical tradition trait
        depending on its type. Donning or removing your warmask requires 1
        minute of work, though you don’t need to Invest the mask each time. The
        warmask is unique to you and might signify your hold, your
        accomplishments, or your faith. While creating your mask, you must
        choose the source of your warmask’s power from the options below. This
        source determines the mask’s associated skill as well as magical
        tradition. Once you select this source, it can’t be changed. You become
        trained in the associated skill, and you gain the Dubious Knowledge
        skill feat as a bonus feat. You can spend 1 hour performing a ceremony
        that costs 50 gp to attune yourself more deeply with your warmask. If
        you do, you gain a +1 item bonus to the associated skill whenever you
        wear the warmask.
        <ul>
          <li>
            <b>The Gods</b> Religion, divine tradition
          </li>
          <li>
            <b>The Land</b> Nature, primal tradition
          </li>
          <li>
            <b>Magic</b> Arcana, arcane tradition
          </li>
          <li>
            <b>The Unknown</b> Occultism, occult tradition
          </li>
        </ul>
      </span>
    ),
  },
  {
    id: 7,
    name: "Orc weapon familiarity",
    action: "",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        In combat, you favor the brutal weapons that are traditional for your
        orc ancestors. You are trained with the falchion and greataxe. In
        addition, you gain access to all uncommon orc weapons. For the purpose
        of determining your proficiency, martial orc weapons are simple weapons
        and advanced orc weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 8,
    name: "Tusks",
    action: "",
    tags: ["orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have particularly long, jagged tusks perfect for tearing meat from
        bone. You gain a tusks unarmed attack that deals 1d6 piercing damage.
        Your tusks are in the brawling group and have the finesse and unarmed
        traits.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain into this feat. You can retrain out of this feat only through
        drastic measures such as breaking or filing your tusks.
      </span>
    ),
  },
  {
    id: 9,
    name: "Athletic might",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Surviving in hostile terrain has given you a great talent for mobility.
        Whenever you roll a success on an Athletics check to Climb or Swim, you
        get a critical success instead.
      </span>
    ),
  },
  {
    id: 10,
    name: "Bloody blows",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your lethal unarmed attacks leave bloody gouges or cause severe internal
        bleeding. When you critically hit with a Strike using an unarmed attack
        that isn’t nonlethal, the target takes 1d4 persistent bleed damage. This
        can be because you’re taking the penalty to use a fist for a lethal
        attack or because you have an unarmed attack without the nonlethal trait
        due to Iron Fists, Tusks, or a similar ability.
      </span>
    ),
  },
  {
    id: 11,
    name: "Defy death",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Ferocity.
        </span>
        <br />
        You’re exceptionally difficult to kill. The DC of your recovery checks
        is equal to 9 + your dying value, or 8 + your dying value if you have
        the Toughness general feat. In addition, whenever someone returns you to
        life using magic that would normally leave you debilitated for a week
        (such as raise dead or the resurrect ritual), you don’t suffer that
        condition.
      </span>
    ),
  },
  {
    id: 12,
    name: "Demonblood frenzy",
    action: "reaction",
    tags: ["uncommon", "orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Access:</b> Matanji ethnicity.
        <br />
        <br />
        <b>Prerequisites:</b> tusks unarmed attack.
        <br />
        <br />
        <b>Frequency:</b> once per minute.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You successfully Strike a living creature that has the
          fiend trait with your tusks unarmed attack.
        </span>
        <br />
        Just the taste of fiendish blood is enough to send blood rushing through
        your veins in a supernatural fury. You become quickened until the end of
        your next turn and you can use the extra action to make a tusks Strike,
        Stride, or Step.
      </span>
    ),
  },
  {
    id: 13,
    name: "Hold mask",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You bear scars or tattoos enhanced by the mark of your community’s
        prowess. When you select this feat, choose one of the options below.
        When you critically hit using a weapon of the listed group, you apply
        the weapon’s critical specialization effect. You gain a large brand or
        tattoo in the shape of the chosen emblem or a similar image (for
        example, the axe could be a bear or other symbol of ferocious strength,
        while the shield might be a turtle or another symbol associated with a
        strong defense) and gain the listed benefit.
        <ul>
          <li>
            <b>Axe</b> axe or pick
          </li>
          <li>
            <b>Shield</b> hammer or shield
          </li>
          <li>
            <b>Torch</b> bomb or knife
          </li>
        </ul>
      </span>
    ),
  },
  {
    id: 14,
    name: "Mask of power",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Warmask.
        </span>
        <br />
        Your warmask sharpens your connection to the source of your mask’s
        power. During your daily preparations, choose fear, phantom pain, or
        true strike. Until your next daily preparations, you can cast this spell
        as a 1st-level innate spell once per day; the spell’s tradition is
        determined by the tradition tied to your warmask. You must be wearing
        your warmask to Cast the Spell.
      </span>
    ),
  },
  {
    id: 15,
    name: "Mask of rejection",
    action: "reaction",
    tags: ["fortune", "orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Prerequisites:</b> Orc Warmask.
        <br />
        <br />
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <b>Trigger:</b> You fail a saving throw against an effect from your
        warmask’s magical tradition.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You’re wearing your warmask.
        </span>
        <br />
        Your warmask projects a white-hot fury that attempts to vaporize the
        offending magic. You reroll the triggering check with a +2 circumstance
        bonus, but you must use the new result, even if it’s worse than your
        first roll.
      </span>
    ),
  },
  {
    id: 16,
    name: "Orc weapon carnage",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Weapon Familiarity
        </span>
        <br />
        You are brutally efficient with the weapons of your orc ancestors.
        Whenever you critically hit using a falchion, a greataxe, or an orc
        weapon, you apply the weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 17,
    name: "Scar thick skin",
    action: "",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Glorious, storied scars cover and protect much of your body. Your DC on
        flat checks to end persistent bleed damage is reduced from 15 to 10, or
        from 10 to 5 after receiving especially appropriate assistance.
      </span>
    ),
  },
  {
    id: 18,
    name: "Victorious vigor",
    action: "reaction",
    tags: ["orc"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You bring a foe to 0 Hit Points.
        </span>
        <br />
        Your victories in battle fill you with pride and imbue you with the
        energy to fight a bit longer despite your wounds. You gain temporary Hit
        Points equal to your Constitution modifier until the end of your next
        turn.
      </span>
    ),
  },
  {
    id: 19,
    name: "Death drums",
    action: "",
    tags: ["orc"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your life has been spent challenging death itself, and proximity to that
        implacable foe only makes your heart beat harder. When you are taking
        persistent damage or your wounded value is 1 or greater, you gain a +2
        circumstance bonus to Fortitude saving throws.
      </span>
    ),
  },
  {
    id: 20,
    name: "Dragon grip",
    action: "",
    tags: ["uncommon", "orc"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Beast Trainer.
        </span>
        <br />
        Your hold has a unique draconic connection. You gain a +2 circumstance
        bonus when you attempt to Make an Impression on a creature with the
        dragon trait. You gain access to the Riding Drake animal companion.
      </span>
    ),
  },
  {
    id: 21,
    name: "Mask of pain",
    action: "reaction",
    tags: ["fortune", "orc"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> expert in Intimidation, Orc Warmask.
        <br />
        <br />
        <b>Trigger:</b> You succeed at a Demoralize check.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You’re wearing your warmask.
        </span>
        <br />
        Your mask has grown into a manifestation of your pain, which you can
        release. The creature you successfully Demoralized takes 2d6 mental
        damage, or 4d6 mental damage if you’re legendary in Intimidation. The
        target is then temporarily immune to additional damage from Mask of Pain
        for 24 hours.
      </span>
    ),
  },
  {
    id: 22,
    name: "Pervasive superstition",
    action: "",
    tags: ["orc"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Superstition.
        </span>
        <br />
        You steep yourself in superstition and practice ancient orc mental
        exercises for shrugging off the effects of magic. You gain a +1
        circumstance bonus to saving throws against spells and magical effects
        at all times.
      </span>
    ),
  },
  {
    id: 23,
    name: "Undying ferocity",
    action: "",
    tags: ["orc"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Ferocity.
        </span>
        <br />
        You resist death’s clutches with supernatural vigor. When you use Orc
        Ferocity, you gain temporary Hit Points equal to your level.
      </span>
    ),
  },
  {
    id: 24,
    name: "Ferocious beast",
    action: "",
    tags: ["orc"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Beast Trainer or animal companion, Orc Ferocity.
        </span>
        <br />
        Since ancient times, the mightiest orc beast tamers would draw out the
        true fighting spirit of their companion beasts by feeding the creatures
        a draft incorporating the orc’s own blood. Animal companions or bonded
        animals you have gain the Orc Ferocity feat, and they gain a reaction
        they can use only for Orc Ferocity. If you have the Undying Ferocity
        ancestry feat, all animal companions or bonded animals you have also
        gain the benefits of that feat when using the Orc Ferocity reaction.
      </span>
    ),
  },
  {
    id: 25,
    name: "Incredible ferocity",
    action: "",
    tags: ["orc"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Ferocity.
        </span>
        <br />
        Given time to collect yourself after a near-death scrape, you can
        rebuild your ferocity and withstand additional finishing blows. You can
        use Orc Ferocity with a frequency of once per hour, rather than once per
        day.
      </span>
    ),
  },
  {
    id: 26,
    name: "Lifeblood's call",
    action: "",
    tags: ["orc"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        The impulse to survive and continue fighting resonates deep within you.
        You gain a circumstance bonus to damage rolls on your melee Strikes
        equal to twice the sum of your wounded and doomed conditions (to a
        maximum of a +8 circumstance bonus to damage) whenever you have one or
        both conditions.
      </span>
    ),
  },
  {
    id: 27,
    name: "Mask of fear",
    action: "",
    tags: ["orc"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Prerequisites:</b> Orc Warmask.
        <br />
        <br />
        <b>Trigger:</b> You start your turn with the frightened condition.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You’re wearing your warmask.
        </span>
        <br />
        Your warmask burns off of your face, releasing your apprehension. You
        remove the frightened condition. Your warmask is destroyed, and you
        can’t reapply it until your next daily preparations.
        <br />
        <br />
        <b>Special:</b> You can use this free action even if you have a
        condition tied to the frightened condition that would normally prevent
        you from using a free action, such as “fleeing as long as you’re
        frightened” or “paralyzed as long as you’re frightened.”
      </span>
    ),
  },
  {
    id: 28,
    name: "Orc weapon expertise",
    action: "",
    tags: ["orc"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Orc Weapon Familiarity.
        </span>
        <br />
        Your orc affinity blends with your class training, granting you great
        skill with orc weapons. Whenever you gain a class feature that grants
        you expert or greater proficiency in a given weapon or weapons, you also
        gain that proficiency in the falchion, the greataxe, and all orc weapons
        in which you are trained.
      </span>
    ),
  },
  {
    id: 29,
    name: "Spell devourer",
    action: "",
    tags: ["orc"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Pervasive Superstition.
        </span>
        <br />
        You don’t just resist magic; you devour it. Whenever you succeed at a
        saving throw against a spell or magical effect, you gain temporary Hit
        Points equal to double the spell’s level, or equal to the level if the
        magical effect isn’t a spell. These temporary Hit Points last until the
        end of your next turn.
      </span>
    ),
  },
  {
    id: 30,
    name: "Spell devourer",
    action: "",
    tags: ["orc"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <b>Prerequisites:</b> Orc Ferocity.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You use Orc Ferocity.
        </span>
        <br />
        You lash out viciously even as you fend off death. Make a single melee
        Strike. If this Strike brings a foe to 0 Hit Points, this activation of
        Orc Ferocity doesn’t count against its frequency.
      </span>
    ),
  },
];
