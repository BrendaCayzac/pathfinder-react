import React from "react";
import Feat from "../components/Feat";
import { AncestryFeat } from "./FeatsButtons";

export const skeletonFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "As in life, so in death",
    action: "",
    tags: ["skeleton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Specific memories of your old life are hard to hold onto, but you know
        things without remembering why. You gain the Adopted Ancestry feat. You
        can choose any ancestry, but it is likely to be one that matches both
        your skeleton heritage and who you were in life. As long as your body is
        completely covered by armor or clothing, you do not have to attempt
        Deception checks against a creature’s Perception DC to successfully
        Impersonate yourself as a member of that ancestry. This is a non-magical
        disguise that doesn’t protect against divination. This disguise doesn’t
        provide any benefit against a creature actively attempting a Perception
        check against you.
      </span>
    ),
  },
  {
    id: 2,
    name: "collapse",
    action: "reaction",
    tags: ["skeleton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Frequency:</b> once per 10 minutes,
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> An enemy’s Strike against you is a critical hit.
        </span>
        <br />
        You collapse into a pile of bones, mitigating the worst of the damage
        you would have taken, and the triggering attack deals only the amount it
        would deal on a hit (typically full damage instead of double damage).
        Any other effects caused by a critical hit still occur. While collapsed,
        you’re flat-footed and can’t act except to Stand, which re-forms you
        into a skeleton in a standing position.
      </span>
    ),
  },
  {
    id: 3,
    name: "Play dead",
    action: "",
    tags: ["skeleton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You lie prone and pretend to be an ordinary skeleton. As long as you
        don’t move or take any actions requiring anything other than your mind,
        you appear dead. To see through your ruse, another creature must succeed
        at a check against your Deception DC, either by Seeking or Recalling
        Knowledge (typically using Religion or an appropriate Lore skill). This
        ability doesn’t work against creatures that already know you’re an
        animate undead unless you have changed your appearance.
      </span>
    ),
  },
  {
    id: 4,
    name: "Undead empathy",
    action: "",
    tags: ["skeleton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your relationship with undeath gives you a stronger bond with other
        undead. You can use Diplomacy to Make an Impression on mindless undead
        or make simple requests of them. As long as there aren’t living
        creatures nearby, they usually let you speak. If the undead creature
        currently is in the thrall of a creature whose level is higher than
        yours, you typically need a critical success on your Diplomacy skill
        check.
      </span>
    ),
  },
  {
    id: 5,
    name: "Past Life",
    action: "",
    tags: ["skeleton"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Flashes of your life become clearer and more frequent, allowing you to
        apply skills you developed while alive. You become trained in a skill of
        your choice and gain the Additional Lore feat for a Lore subcategory
        tied to your life.
        <Feat
          id={0}
          name="Additional lore"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Lore.
              </span>
              <br />
              Your knowledge has expanded to encompass a new field. Choose an
              additional Lore skill subcategory. You become trained in it. At
              3rd, 7th, and 15th levels, you gain an additional skill increase
              you can apply only to the chosen Lore subcategory.
              <br />
              <br />
              <b>Special</b> You can select this feat more than once. Each time
              you must select a new subcategory of Lore and you gain the
              additional skill increases to that subcategory for the listed
              levels.
            </span>
          }
        />
      </span>
    ),
  },
  {
    id: 6,
    name: "Well-armed",
    action: "one_action",
    tags: ["skeleton"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your detachable limbs offer flexibility. You Interact to remove your arm
        and wield it in the other one, increasing your reach by 5 feet for any
        one-handed weapon held in that arm. If your next action is a Strike with
        that weapon, creatures that were outside your reach that you can now hit
        are flat-footed against your first attack. You don’t have a free hand
        while holding the arm. You can Interact to reattach the arm while
        holding it.
      </span>
    ),
  },
  {
    id: 7,
    name: "Bone missile",
    action: "",
    tags: ["skeleton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You can remove your ribs to use them as arrows or bolts. When you draw a
        rib, you lose 2 HP, and the projectile deals 2 extra negative damage if
        you Strike with it before the end of your next turn. The HP loss and
        extra damage both increase to 3 at 12th level and 4 at 19th level. Your
        rib cage magically replenishes, and any rib you draw crumbles to dust
        after being used for a Strike or at the end of your next turn, whichever
        comes first.
      </span>
    ),
  },
  {
    id: 8,
    name: "Rejuvenation token",
    action: "",
    tags: ["uncommon", "necromancy", "skeleton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You tie yourself to the Material Plane by implanting a piece of your
        consciousness into a weapon, piece of armor, or other item that’s
        precious to you. As long as this object is intact, even if your body is
        destroyed, you can be restored to the exact state you were in the last
        time you made daily preparations with this object in your possession.
        The soulbound object can be used as a special focus for raise dead,
        resurrect, or similar magic. This warps the spell to bring you back in
        your skeletal undead state rather than bringing you back to life.
        Pharasma can’t prevent you from returning when the spell is modified in
        this way.
        <br />
        <br />
        When you return, you permanently lose a memory that was precious to you,
        in addition to any other side effects of the spell that brought you
        back. Your soulbound object becomes inert until you spend 1 week of
        downtime to anchor yourself to it again, further fragmenting your mind.
      </span>
    ),
  },
  {
    id: 9,
    name: "Skeletal resistance",
    action: "",
    tags: ["skeleton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your body becomes resistant, your hardened bones deflecting weapons and
        other forms of damage. You gain resistance 2 to cold, electricity, fire,
        piercing, and slashing damage. This resistance increases to 3 at 13th
        level and 4 at 17th level.
      </span>
    ),
  },
  {
    id: 10,
    name: "Skeletal transformation",
    action: "",
    tags: ["skeleton"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You rearrange your bones into a bestial shape. Once per day, you can
        cast animal form as a divine innate spell. When you cast it, you choose
        the spell’s level: 3rd, 4th, or 5th. Your battle form looks like a
        skeletal version of the animal. In this form, you retain the benefits of
        any skeleton feats that do not require the use of hands or the ability
        to communicate.
      </span>
    ),
  },
  {
    id: 11,
    name: "Skeleton commander",
    action: "",
    tags: ["uncommon", "skeleton"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b>expert in Religion.
        </span>
        <br />
        You gain the ability to summon your own skeletal minions. You learn the
        create undead rituals to create three types of undead for which you meet
        the prerequisites. These undead must have the skeleton trait or be other
        skeletal undead the GM agrees to. You can’t teach these rituals to
        anyone else, and you can’t participate in either ritual while allowing
        someone else to serve as the primary caster unless they also know the
        ritual.
        <br />
        <br />
        You gain a +2 circumstance bonus to Religion checks for create undead
        rituals. You can also perform the ritual without the aid of a secondary
        caster; in this case, you attempt the secondary check normally performed
        by that caster.
      </span>
    ),
  },
  {
    id: 12,
    name: "Bone swarm",
    action: "two_action",
    tags: ["concentrate", "polymorph", "skeleton", "transmutation"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        You scatter your body and transform into a whirling storm of bones for
        up to 1 minute or until you spend a single action to return to your
        normal shape. You become Huge, gain the swarm trait, and gain a fly
        Speed of 40 feet. As a swarm, you have the following characteristics.
        <ul>
          <li>
            You are immune to the grappled, prone, and restrained conditions.
          </li>
          <li>You have weakness 5 to area and splash damage.</li>
          <li>
            You can occupy the same space as other creatures and must do so to
            use your damaging ability.
          </li>
          <li>
            As a 2-action activity, you can deal 10d6 bludgeoning damage to all
            creatures sharing your space (basic Reflex save with a DC equal to
            your class DC or spell DC, whichever is higher).
          </li>
          <li>
            You can’t speak, Cast Spells, use manipulate actions requiring your
            hands, Activate magic items, or make any Strikes with your normal
            body.
          </li>
          <li>
            You don’t gain the swarm mind ability, so you are still affected
            normally by mental effects. You also retain the benefits of skeleton
            feats that don’t require communication or the use of hands.
          </li>
        </ul>
      </span>
    ),
  },
  {
    id: 13,
    name: "Necromantic heir",
    action: "",
    tags: ["skeleton"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        Your affinity for negative energy spills outward and grants you a
        refilling well of necromantic essence. Once per hour, you can cast harm
        as a 6th-level divine innate spell.
      </span>
    ),
  },
];
