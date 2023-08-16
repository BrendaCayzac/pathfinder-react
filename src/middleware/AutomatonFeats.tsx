import React from "react";
import Spell from "../components/Spell";

export const automatonFeats = [
  {
    id: 1,
    name: "Arcane communication",
    action: "",
    tags: ["automaton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You can deliver silent messages. You gain touch telepathy, allowing you
        to communicate silently and mentally with any creature you’re touching,
        as long as you share a language.
        <br />
        <br />
        <span>
          {" "}
          <b>Enhancement:</b> You can send your messages even further. Your
          telepathy gains a range of 10 feet, but you still have to share a
          language with your target.
        </span>
      </span>
    ),
  },
  {
    id: 2,
    name: "arcane eye",
    action: "",
    tags: ["automaton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          {" "}
          <b>Prerequisites:</b> low-light vision
        </span>
        <br />
        Your eye has been magically enhanced to pierce darkness. You gain
        darkvision.
        <br />
        <br />
        <span>
          <b>Enhancement:</b> Your eye can see invisible creatures in brief
          spurts. You can cast see invisibility as an arcane innate spell once
          per hour.
        </span>
      </span>
    ),
  },
  {
    id: 3,
    name: "Automaton armament",
    action: "",
    tags: ["automaton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve been provided a body part designed for combat. You gain either a
        claw or pincer unarmed attack. The claw deals 1d4 slashing damage, is in
        the brawling group, and has the agile, finesse, and unarmed traits. The
        pincer deals 1d6 piercing damage, is in the brawling group, and has the
        grapple and unarmed traits. Your body can be reconfigured; you can
        select this feat at any level, and you can retrain into or out of this
        feat or change the type of attack you gain.
        <br />
        <br />
        <span>
          <b>Enhancement:</b> Your attacking part is reinforced. Increase the
          damage die of the unarmed attack you gain from this feat by one step
          (from 1d4 to 1d6, or from 1d6 to 1d8).
        </span>
      </span>
    ),
  },
  {
    id: 4,
    name: "Automaton lore",
    action: "",
    tags: ["automaton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have come to better understand the process that made your body and
        the magic that powers it. You gain the trained proficiency rank in
        Arcana and Crafting. If you would automatically become trained in one of
        those skills (from your background or class, for example), you instead
        become trained in a skill of your choice. You also become trained in
        Automaton Lore.
        <br />
        <br />
        <span>
          <b>Enhancement:</b> Your gain greater understanding. Increase your
          proficiency rank in either Arcana or Crafting, as well as Automaton
          Lore, to expert. If you were already an expert in the chosen skill,
          increase your rank to master instead.
        </span>
      </span>
    ),
  },
  {
    id: 5,
    name: "Energy Beam",
    action: "",
    tags: ["automaton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <br />
        fewer. You can channel your core’s power through the magical gem that
        serves as your eye. You gain an energy beam ranged unarmed attack that
        deals 1d4 fire damage. The energy beam has a range increment of 20 feet.
        On a critical hit, the target takes persistent fire damage equal to the
        number of weapon damage dice. Your eye beam does not add critical
        specialization effects.
        <br />
        <br />
        <b>Enhancement:</b> You channel greater power. Increase the damage die
        of your energy beam by one step, from 1d4 to 1d6.
      </span>
    ),
  },
  {
    id: 6,
    name: "Nightvision adaptation",
    action: "",
    tags: ["automaton"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your body is designed to be particularly resilient. Your chassis is
        medium armor in the plate armor group that grants a +4 item bonus to AC,
        a Dex cap of +1, a check penalty of –2, a speed penalty of –5 feet, and
        a Strength value of 16. You can never wear other armor or remove your
        chassis; however, you still don’t become fatigued from sleeping.
        Finally, you can etch armor runes onto your chassis as normal.
        <br />
        <br />
        <b>Enhancement:</b> Your chassis becomes difficult to overcome. You gain
        the Chassis Deflection reaction.
        <Spell
          name="Chassis Deflection"
          action="reaction"
          description={
            <span>
              <span className="frequency">
                <b>Trigger:</b> A critical hit deals
              </span>
              physical damage to you. Attempt a DC 17 flat check. If you are
              successful, the attack becomes a normal hit.
            </span>
          }
        />
      </span>
    ),
  },
  {
    id: 7,
    name: "Arcane safeguards",
    action: "",
    tags: ["automaton"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        The magic powering you makes it difficult for outside magic to affect
        you. You gain the Resist Magic reaction.
        <br />
        <br />
        <b>Enhancement:</b> Your safeguards improve. When you Resist Magic, you
        gain a number of temporary Hit Points equal to the spell level of the
        triggering effect.
        <Spell
          name="CResist magic"
          action="reaction"
          description={
            <span>
              <span className="frequency">
                <b>Trigger:</b> You attempt a saving throw against a harmful
                magical effect but haven’t rolled yet.
              </span>
              Your innate magic protects you. You gain a +1 circumstance bonus
              to the triggering saving throw. Additionally, if the triggering
              effect is arcane, if you roll a success, you get a critical
              success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    id: 8,
    name: "Integrated armament",
    action: "",
    tags: ["automaton"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your mechanical body houses a weapon or shield that you can quickly draw
        and stow, leaving you prepared for combat at all times. You can use a
        1-minute activity, which has the manipulate trait, to integrate a
        single, one-handed weapon or shield into one of your arms. You can draw
        or stow this item as an Interact action. Creatures don’t automatically
        see this integrated item when it’s stowed and must actively Seek in
        order to find it. They take a –2 circumstance penalty to any checks to
        do so. While you are wielding the item, it can’t be Disarmed and you
        can’t drop or Release it; you must Interact to store the weapon and free
        that hand.
        <br />
        <br />
        A creature determined to retrieve the item can do so, but it requires
        either 1 minute to remove it or extreme violence to your arm—such as
        physically removing portions of the limb. You can only have one
        integrated armament at a time, though you can use the 1-minute activity
        to replace the item or swap the arm in which it’s stored.
        <br />
        <br />
        <b>Enhancement:</b> Your body has more space for integration. You can
        now either integrate two one-handed weapons, a one-handed weapon and a
        shield, or a single two-handed weapon which is split across both arms.
        You can use a single Interact action to draw or store both integrated
        armaments. When you draw a single weapon, you can choose to hold it with
        either one hand or both hands.
      </span>
    ),
  },
  {
    id: 9,
    name: "Integrated armament",
    action: "",
    tags: ["automaton"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your animating magic provides some defense. Choose one of the following
        energy damage types: cold, electricity, or sonic. You gain resistance 5
        to that damage type.
        <br />
        <br />
        <b>Enhancement:</b> You tap deeper into your animating magic, and your
        resistances improve. Choose one of the following benefits: you gain
        resistance 5 to the remaining two damage types from the above list, or
        your chosen resistance increases to a value equal to 1 + half your
        level.
      </span>
    ),
  },
  {
    id: 10,
    name: "Arcane Camouflage",
    action: "",
    tags: ["automaton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> hunter automaton
        </span>
        <br />
        You have developed magical techniques to aid you with stalking your
        prey. You can cast blur and invisibility each once per day as 2nd-level
        arcane innate spells.
        <br />
        <br />
        <b>Enhancement:</b> Your camouflage is more potent. Your blur spell now
        lasts 10 minutes and when you cast invisibility, you can choose to gain
        the effects of the 4th-level version of the spell. In addition, you can
        now cast blur and invisibility each twice per day.
      </span>
    ),
  },
  {
    id: 11,
    name: "Arcane Propulsion",
    action: "two_action",
    tags: ["automaton", "arcane", "transmutation"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> once per day
        </span>
        <br />
        You redirect energy from your core to ports on your back or feet,
        allowing you to fly for a short time. You can maintain this redirected
        energy for 5 minutes. You gain a fly Speed equal to your Speed while
        redirecting the energy.
        <br />
        <br />
        <b>Enhancement:</b> You can maintain your flight for longer. You can
        redirect your energy at all times, allowing you to fly whenever you
        want, rather than just once per day for 5 minutes.
      </span>
    ),
  },
  {
    id: 12,
    name: "Arcane slam",
    action: "two_action",
    tags: ["automaton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> warrior automaton
        <br />
        <span className="frequency">
          <b>Requirements:</b> You have a creature grabbed or restrained.
        </span>
        <br />
        You channel magical power from your core into your arm, empowering your
        attack as you attempt to slam your foe into the ground. Attempt an
        Athletics check against the foe’s Fortitude DC. You take a –2
        circumstance penalty to your check if the target is one size larger than
        you and a –4 circumstance penalty if it’s larger than that. You gain a
        +2 circumstance bonus to your check if the target is one size smaller
        than you and a +4 circumstance bonus if it’s smaller than that.
        <br />
        <br />
        <b>Critical Success:</b> You slam the foe down and the magical energy
        overwhelms it. The creature is knocked prone, becomes dazzled for 1
        round, and takes damage equal to 2d6 plus your Strength modifier. The
        foe is no longer grabbed or restrained by you.
        <br />
        <br />
        <b>Success:</b> You slam the foe down. The creature is knocked prone and
        takes damage equal to your Strength modifier. The foe is no longer
        grabbed or restrained by you.
        <br />
        <br />
        <b>Failure:</b> You are unable to slam the creature, but your hold on
        the creature remains.
        <br />
        <br />
        <b>Critical Failure:</b> The creature breaks free and is no longer
        grabbed or restrained by you.
        <br />
        <br />
        <hr />
        <b>Enhancement:</b> Your arms better channel your core’s power. You no
        longer take penalties for attempting to slam larger foes. Your foe takes
        damage equal to 2d6 plus your Strength modifier on a success (or double
        that on a critical success).
      </span>
    ),
  },
  {
    id: 13,
    name: "Core Attunement",
    action: "",
    tags: ["automaton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> mage automaton
        </span>
        <br />
        Your core allows you to draw more power from it. Select one 1st-level
        arcane spell and one 2nd-level or lower arcane spell, to which you have
        access. You can cast your chosen spells as arcane innate spells each
        once per day.
        <br />
        <br />
        <b>Enhancement:</b> Your attunement grows stronger. Select one 5th-level
        or lower arcane spell and one 6th-level or lower arcane spell, to which
        you have access. You can cast them as arcane innate spells each once per
        day, in addition to the original spells.
      </span>
    ),
  },
  {
    id: 14,
    name: "Lesser Augmentation",
    action: "",
    tags: ["automaton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> mage automaton
        </span>
        <br />
        You’ve focused on enhancing yourself and have received an improvement to
        one of your existing abilities. You gain the enhancement benefits of one
        of your 1st- or 5th-level automaton ancestry feats.
        <br />
        <br />
        You are also capable of reconfiguring your augmentations to meet your
        needs. You can spend one week of downtime to change the enhancement you
        gain with this feat.
        <br />
        <br />
        <b>Enhancement:</b> You gain the enhancement benefits of another 1st- or
        5th-level automaton ancestry feat. Also, your reconfigurations take less
        time. You only need to spend 1 day of downtime to change any of your
        enhancements. If you have multiple enhancements, changing each one
        requires a separate day.
      </span>
    ),
  },
  {
    id: 15,
    name: "rain of bolts",
    action: "two_action",
    tags: ["automaton"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> sharpshooter automaton
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Throughout the day, your body produces powerful projectiles within your
        chassis. You fire them all at once in either a 30-foot cone or a 10-foot
        emanation. Foes in the area take 6d6 piercing damage. This increases to
        7d6 at 12th level, 8d6 at 15th level, and 9d6 at 18th level.
        <br />
        <br />
        <b>Enhancement:</b> The projectiles regenerate quicker, they are much
        more powerful, and you can refine the metallic content to harm certain
        creatures. You can use Rain of Bolts once per hour instead of once per
        day. The damage increases to 12d6 and each time you use the action, you
        can choose adamantine, cold iron, or silver. The damage from Rain of
        Bolts is treated as the metal you chose. At 20th level, the damage
        increases to 13d6.
      </span>
    ),
  },
  {
    id: 16,
    name: "arcane locomotion",
    action: "",
    tags: ["automaton"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You’ve modified your body to allow you to augment your movement. You
        gain either a climb Speed of 20 feet or a swim Speed of 20 feet, your
        choice.
        <br />
        <br />
        <b>Enhancement:</b> Your body allows for even further forms of movement.
        You can either select the option from this feat you haven’t chosen yet
        (climb Speed or swim Speed), or you can increase your land Speed by 5
        feet and increase the Speed you chose from this feat increase to be
        equal to your adjusted land Speed.
      </span>
    ),
  },
  {
    id: 17,
    name: "astral blink",
    action: "",
    tags: ["automaton"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You’ve attuned your core to allow you to phase in and out of the Astral
        Plane, allowing you to teleport periodically. You can cast dimension
        door once per hour as a 4th-level innate arcane spell.
        <br />
        <br />
        <b>Enhancement:</b> YYour attunement allows you to teleport in a series
        of quick jumps rather than in one big leap. You can expend your hourly
        use of dimension door as a free action when you begin your turn. If you
        do, your Strides are augmented until the end of your turn, allowing you
        to instantly teleport to any point you could reach with your Speed
        instead of traversing normally to the location. While augmented, your
        Strides gain the conjuration and teleportation traits. Your augmented
        Strides don’t trigger reactions that can be triggered by move actions or
        upon leaving or entering a square, unless those reactions trigger on
        teleportation.
      </span>
    ),
  },
  {
    id: 18,
    name: "core rejuvenation",
    action: "",
    tags: ["automaton"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Trigger:</b> You have the dying condition and are about to attempt a
        recovery check.
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Your soul taps into your core’s power to push against the grasp of death
        and allow you to recover consciousness. You’re restored to 1 Hit Point,
        lose the dying and unconscious conditions, and can act normally on this
        turn. You gain or increase the wounded condition as normal when losing
        the dying condition in this way.
        <br />
        <br />
        <b>Enhancement:</b> Your soul can draw even more power from your core,
        granting you additional benefits. When you use Core Rejuvenation, you
        also gain a number of temporary Hit Points equal to three times your
        level. These Hit Points remain for 1 minute.
      </span>
    ),
  },
  {
    id: 19,
    name: "Enlarged chassis",
    action: "",
    tags: ["automaton"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Medium or Small size
        </span>
        <br />
        You’ve empowered your core to support a larger body, granting you size
        and additional reach. You gain the effects of enlarge constantly.
        <br />
        <br />
        <b>Enhancement:</b> Your core’s empowerment has stabilized, allowing for
        greater support. You are no longer clumsy due to the effects of enlarge.
      </span>
    ),
  },
  {
    id: 20,
    name: "Axial recall",
    action: "",
    tags: ["uncommon", "automaton"],
    level: 17,
    feat: "Feat 17",
    description:
      "You have reconfigured the magical resonance of your core to attune to the planar energies of Axis. You can cast plane shift twice per week as an arcane innate spell that can only target yourself; you can travel only to Axis or the Material Plane, and your body serves as the focus component.",
  },
  {
    id: 21,
    name: "Core cannon",
    action: "two_action",
    tags: ["arcane", "automaton", "concentrate", "polymorph", "transmutation"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Your body transforms into a powerful magical cannon. While immobile as a
        cannon, you can fire blasts of energy directly from your core,
        devastating your foes. You become immobilized until you use an Interact
        action to revert back to your standard form. While in your cannon form,
        the only actions you can use are to Strike with an energy blast unarmed
        attack or to Interact to revert back to your standard form. You can
        remain in your cannon form for up to 1 minute or until you take the
        action to revert back to your standard form, whichever comes first.
        <br />
        <br />
        Energy blasts are a special ranged unarmed attack. You can only make
        energy blast Strikes while you’re in your cannon form. Your energy
        blasts deal 3d8 fire damage and 3d6 force damage, which increases to 4d8
        fire damage and 3d6 force damage at level 20. You gain the item bonus to
        attack rolls with your energy blasts from the highest potency rune on
        any handwraps of mighty blows you are wearing or any weapon you are
        wielding, but striking and property runes have no effect on your energy
        blasts. Energy blasts have a range increment of 120 feet. On a critical
        hit with an energy blast, the target takes 10 persistent fire damage.
        Your energy blast doesn’t add critical specialization effects. If it
        matters for an effect dependent on weapon damage dice, an energy blast’s
        number of weapon damage dice is three, or four at level 20.
      </span>
    ),
  },
  {
    id: 22,
    name: "Greater augmentation",
    action: "",
    tags: ["automaton"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You’ve greatly improved your abilities and your core can support further
        augmentations. You gain the enhancement benefits of one of your 1st-,
        5th-, 9th-, or 13th-level automaton ancestry feats.
        <br />
        <br />
        You are also capable of reconfiguring your augmentations to meet your
        needs. You can spend one week of downtime to change the enhancement you
        gain with this feat.
      </span>
    ),
  },
];
