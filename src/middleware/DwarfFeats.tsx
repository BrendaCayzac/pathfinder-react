import React from "react";

export const dwarfFeats = [
  {
    id: 1,
    name: "Adaptive vision",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        After years of using black powder weaponry in dimly lit spaces, you’ve
        become accustomed to dazzling flashes of light and sudden shifts in
        illumination. You gain a +1 circumstance bonus to saving throws against
        visual effects. If you roll a success on a saving throw against a visual
        effect, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 2,
    name: "Avenge in glory",
    action: "reaction",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Access:</b> mountain dwarf ethnicity.
        </span>
        <br />
        <br />
        <span>
          <b>Frequency:</b> once per day.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> An ally within 30 feet gains the dying condition.
        </span>
        <br />
        You honor your ally’s life, gaining temporary Hit Points equal to your
        level for 1 minute. As long as you have these temporary Hit Points, you
        gain a +1 circumstance bonus to attack and damage rolls.
      </span>
    ),
  },
  {
    id: 3,
    name: "Clan lore",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your identity as a member of your clan is as central to your sense of
        self as your dwarven ancestry. You gain the trained proficiency rank in
        the two skills of your clan. If you would automatically become trained
        in one of these skills (from your background or class, for example), you
        instead become trained in a skill of your choice. You also become
        trained in the listed Lore for your clan. If you come from a clan not
        listed here, you become trained in an appropriate selection of skills as
        determined by your GM. Since the trade of a clan takes a while to learn,
        these skills don’t automatically change should you ever leave your clan
        and join another, though your GM might allow you to change these skills
        as part of retraining during downtime.
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Clan</th>
              <th>Skills</th>
              <th>Lore</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clan Aringeld</td>
              <td>Diplomacy and Society</td>
              <td>Mercantile Lore</td>
            </tr>
            <tr>
              <td>Clan Breakiron</td>
              <td>Crafting and Survival</td>
              <td>Alchemy Lore</td>
            </tr>
            <tr>
              <td>Clan Firecask</td>
              <td>Crafting and Nature</td>
              <td>Alcohol Lore</td>
            </tr>
            <tr>
              <td>Clan Gelderon</td>
              <td>Athletics and Nature</td>
              <td>Farming Lore</td>
            </tr>
            <tr>
              <td>Clan Grimmark</td>
              <td>Crafting and Society</td>
              <td>Architecture Lore</td>
            </tr>
            <tr>
              <td>Clan Ironfist</td>
              <td>Crafting and Medicine</td>
              <td>Smelting Lore</td>
            </tr>
            <tr>
              <td>Clan Molgrade</td>
              <td>Crafting and Thievery</td>
              <td>Smithing Lore</td>
            </tr>
            <tr>
              <td>Clan Oriddus</td>
              <td>Religion and Society</td>
              <td>Dwarven Pantheon Lore</td>
            </tr>
            <tr>
              <td>Clan Runebinder</td>
              <td>Arcana and Occultism</td>
              <td>Academia Lore</td>
            </tr>
            <tr>
              <td>Clan Stonefist</td>
              <td>Athletics and Intimidation</td>
              <td>Warfare Lore</td>
            </tr>
            <tr>
              <td>Clan Tolorr</td>
              <td>Diplomacy and Society</td>
              <td>Library Lore</td>
            </tr>
            <tr>
              <td>Clan Vanderholl</td>
              <td>Athletics and Crafting</td>
              <td>Labor Lore</td>
            </tr>
          </tbody>
        </table>
      </span>
    ),
  },
  {
    id: 4,
    name: "Clan pistol",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        Raised in the ancient halls of Dongun Hold or the surrounding region,
        you display your lineage with a clan pistol, rather than a clan dagger.
        You get one clan pistol of your clan for free, as it was given to you at
        birth. This replaces your clan dagger. Selling this pistol is a terrible
        taboo and earns you the disdain of other dwarves. You are trained with
        the clan pistol. In addition, when your clan pistol is visible, you gain
        a +1 circumstance bonus on checks to Gather Information or Make an
        Impression when interacting with citizens of Alkenstar, Dongun Hold, or
        their allies.
      </span>
    ),
  },
  {
    id: 5,
    name: "Clan's edge",
    action: "two_action",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> trained in clan daggers
        </span>
        <br />
        By moving your clan dagger with rapid precision, you can protect
        yourself more effectively. Make two clan dagger Strikes against
        different targets. Your multiple attack penalty applies normally to
        these Strikes. You then use an Interact action to gain the +1
        circumstance bonus to your AC from your clan dagger’s parrying trait.
      </span>
    ),
  },
  {
    id: 6,
    name: "Drongun education",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        You’re knowledgeable in trades that are important to your people’s
        survival and commercial interests. Pick two of the following Lore
        skills: Engineering Lore, Explosive Lore, or Firearm Lore. At 2nd level,
        you gain expert proficiency in these Lore skills; at 7th level, you gain
        master proficiency in these Lore skills; and at 15th level, you gain
        legendary proficiency in them.
      </span>
    ),
  },
  {
    id: 7,
    name: "Dwarven doughtiness",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You are either naturally calm and collected in the face of imminent danger, or you are very good at faking it. At the end of your turn, reduce your frightened condition by 2 instead of 1.",
  },
  {
    id: 8,
    name: "Dwarven lore",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You eagerly absorbed the old stories and traditions of your ancestors, your gods, and your people, studying in subjects and techniques passed down for generation upon generation. You gain the trained proficiency rank in Crafting and Religion. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Dwarven Lore.",
  },
  {
    id: 9,
    name: "Dwarven weapon familiarity",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms. You are trained with the battle axe, pick, and warhammer.\n" +
      "\n" +
      "You also gain access to all uncommon dwarf weapons. For the purpose of determining your proficiency, martial dwarf weapons are simple weapons and advanced dwarf weapons are martial weapons.",
  },
  {
    id: 10,
    name: "Explosive savant",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />A lifetime wielding firearms and explosive ordinance amid the
        chaos of battle has granted you great skill with volatile weapons. You
        become trained in simple and martial bombs and firearms.
      </span>
    ),
  },
  {
    id: 11,
    name: "Eye for treasure",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You know good artisanship when you see it and can wax poetic about crafting techniques and forms. You become trained in Crafting and gain a +1 circumstance bonus on all Crafting checks made to Recall Knowledge. If you would automatically become trained in Crafting (from your background or class, for example), you instead become trained in a skill of your choice. In addition, you gain the Crafter’s Appraisal skill feat, enabling you to identify magic items using the Crafting skill.",
  },
  {
    id: 12,
    name: "Fire savvy",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        You’ve grown up around a forge and are well-suited to dealing with smoke
        and flame. Your flat check to remove persistent fire damage is DC 10
        instead of DC 15, which is reduced to DC 5 with appropriate assistance.
        In addition, if you roll a success on a saving throw against suffocation
        or choking due to smoke or ash, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 13,
    name: "Forge-day's rest",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> underground dwarf ethnicity.
        </span>
        <br />
        Your unusual rest cycle allows you to recover faster. As long as you
        rest for 12 hours, you gain the effects of the Fast Recovery general
        feat and you can go 20 hours without resting before becoming fatigued.
      </span>
    ),
  },
  {
    id: 14,
    name: "Rivethun disciple",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Rivethun Adherent background (Lost Omens World Guide)
          or you are a member of the Rivethun.
        </span>
        <br />
        By studying with the dwarven shamans of Highhelm, you have become aware
        of the friction between your body and spirit. With some concentration,
        you can make the best of this dichotomy. You gain a +1 circumstance
        bonus to Crafting, Deception, Intimidation, and Medicine as long as you
        have the clumsy, drained, or enfeebled conditions. You also gain a +1
        circumstance bonus to Athletics, Stealth, and Thievery checks as long as
        you have the immobilized, slowed, or stupefied conditions.
      </span>
    ),
  },
  {
    id: 15,
    name: "Rock runner",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your innate connection to stone makes you adept at moving across uneven surfaces. You can ignore difficult terrain caused by rubble and uneven ground made of stone and earth. In addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground made of stone or earth, you aren’t flat-footed, and when you roll a success at one of these Acrobatics checks, you get a critical success instead.",
  },
  {
    id: 16,
    name: "Stone cunning",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You have a knack for noticing even small inconsistencies and craftsmanship techniques in the stonework around you. You gain a +2 circumstance bonus to Perception checks to notice unusual stonework. This bonus applies to checks to discover mechanical traps made of stone or hidden within stone.\n" +
      "\n" +
      "If you aren’t using the Seek action or searching, the GM automatically rolls a secret check for you to notice unusual stonework anyway. This check doesn’t gain the circumstance bonus, and it takes a –2 circumstance penalty.",
  },
  {
    id: 17,
    name: "Surface culture",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> any surface dwarf ethnicity.
        </span>
        <br />
        Your interactions with other cultures on the surface have not only
        taught you about many other ancestries, but have also helped you realize
        the value of your own. You gain the trained proficiency rank in the
        Society skill (or another skill of your choice if you were already
        trained in Society), and you gain the Additional Lore skill feat for the
        Lore corresponding to your culture (for instance, Ouat Lore or Pahmet
        Lore).
      </span>
    ),
  },
  {
    id: 18,
    name: "Unburdened iron",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description:
      "You’ve learned techniques first devised by your ancestors during their ancient wars, allowing you to comfortably wear massive suits of armor. Ignore the reduction to your Speed from any armor you wear.\n" +
      "\n" +
      "In addition, any time you’re taking a penalty to your Speed from some other reason (such as from the encumbered condition or from a spell), deduct 5 feet from the penalty. For example, the encumbered condition normally gives a –10-foot penalty to Speed, but it gives you only a –5-foot penalty. If your Speed is taking multiple penalties, pick only one penalty to reduce.",
  },
  {
    id: 19,
    name: "Vengeful atred",
    action: "",
    tags: ["dwarf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your heart aches for vengeance against those who have wronged your
        people. Choose one of the following dwarven ancestral foes when you gain
        Vengeful Hatred: drow, duergar, giant, or orc. You gain a +1
        circumstance bonus to damage with weapons and unarmed attacks against
        creatures with that trait. If your attack would deal more than one
        weapon die of damage (as is common at higher levels than 1st), the bonus
        is equal to the number of weapon dice or unarmed attack dice.
        <br />
        <br />
        In addition, if a creature critically succeeds at an attack against you
        and deals damage to you, you gain your bonus to damage against that
        creature for 1 minute regardless of whether it has the chosen trait.
        <br />
        <br />
        <span>
          <b>Special:</b> Your GM can add appropriate creature traits to the
          ancestral foes list if your character is from a community that
          commonly fights other types of enemies.
        </span>
      </span>
    ),
  },
  {
    id: 20,
    name: "Blast resistance",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        You’re used to the clamor of steel, the crack of a firearm, and the
        thunderous blast of explosions. You gain resistance 3 to sonic. If you
        roll a success on a saving throw against an auditory effect that causes
        the deafened condition, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 21,
    name: "Boulder roll",
    action: "two_action",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Rock Runner
        </span>
        <br />
        Your dwarven build allows you to push foes around, just like a mighty
        boulder tumbles through a subterranean cavern. Take a Step into the
        square of a foe that is your size or smaller, and the foe must move into
        the empty space directly behind it. The foe must move even if doing so
        places it in harm’s way. The foe can attempt a Fortitude saving throw
        against your Athletics DC to block your Step. If the foe attempts this
        saving throw, unless it critically succeeds, it takes bludgeoning damage
        equal to your level plus your Strength modifier.
        <br />
        <br />
        If the foe can’t move into an empty space (if it is surrounded by solid
        objects or other creatures, for example), your Boulder Roll has no
        effect.
      </span>
    ),
  },
  {
    id: 22,
    name: "Clan protector",
    action: "",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description:
      "Your clan dagger can protect your allies as easily as yourself. When you use an Interact action to gain a circumstance bonus to AC from your clan dagger’s parry trait, you can grant the circumstance bonus to an adjacent ally instead of gaining it yourself. You can use multiple Interact actions to protect multiple allies, or to protect yourself and an ally. The ally benefits from the bonus to AC only when they are adjacent to you.",
  },
  {
    id: 23,
    name: "Defy the darkness",
    action: "",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> darkvision
        </span>
        <br />
        Using ancient dwarven methods developed to fight enemies wielding
        magical darkness, you’ve honed your darkvision and sworn not to use such
        magic yourself. You gain greater darkvision, enabling you to see through
        magical darkness even if it normally hampers darkvision (such as the
        darkness created by a 4th-level darkness spell). You can’t cast spells
        with the darkness trait, use item activations with the darkness trait,
        or use any other ability with the darkness trait.
      </span>
    ),
  },
  {
    id: 24,
    name: "Dwarven reinforcements",
    action: "",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> expert in Crafting
        </span>
        <br />
        You can use your knowledge of engineering and metalwork to temporarily
        strengthen thick objects and structures. By spending 1 hour working on
        an item, you can give it a +1 circumstance bonus to its Hardness for 24
        hours. If you’re a master in Crafting, the bonus is +2, and if you’re
        legendary, the bonus is +3. You can reinforce a portion of a structure,
        though 1 hour usually reinforces only a door, a few windows, or another
        section that fits within a 10-foot cube.
      </span>
    ),
  },
  {
    id: 25,
    name: "Dwarven weapon cunning",
    action: "",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Dwarven Weapon Familiarity
        </span>
        <br />
        You’ve learned cunning techniques to get the best effects out of your
        dwarven weapons. Whenever you critically hit using a battle axe, pick,
        warhammer, or a dwarf weapon, you apply the weapon’s critical
        specialization effect.
      </span>
    ),
  },
  {
    id: 26,
    name: "Protective sheath",
    action: "",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Clan’s Edge
        </span>
        <br />
        When you lash out with your clan dagger, you keep its sheath close at
        hand. When you use Clan’s Edge, if the hand you’re not holding the
        dagger with is empty, you can use your clan dagger’s sheath to block
        attacks as well. The circumstance bonus to your AC from parrying
        increases to a +2 against any target you hit with a Strike this turn.
      </span>
    ),
  },
  {
    id: 27,
    name: "Sheltering slab",
    action: "",
    tags: ["dwarf"],
    level: 5,
    feat: "Feat 5",
    description:
      "The stone around you is your ally, and you have learned to use it to shore up your weaknesses. As long as you remain on the ground and are adjacent to a vertical stone wall that rises to your height or taller, you aren’t flat-footed against attacks as a result of being flanked. This works even if you are at the outside corner of the wall.",
  },
  {
    id: 28,
    name: "Spark fist",
    action: "",
    tags: ["uncommon", "dwarf", "fire", "manupulate"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> expert in Crafting
        </span>
        <br />
        <br />
        <span>
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per minute
        </span>
        <br />
        You dust explosive black powder on your fist or glove before attacking,
        which combusts as you hit an opponent. The resulting pops of flame harm
        both you and your enemy. Until the end of your next turn, your fist
        loses the nonlethal trait and deals an additional 1 fire damage on a
        successful Strike. Each time you succeed on a fist Strike, you take 1
        fire damage. If your fist would deal more than one weapon damage die,
        the fire damage dealt on a successful Strike, to both you and your
        opponent, is equal to the number of weapon damage dice.
      </span>
    ),
  },
  {
    id: 29,
    name: "Tomb watcher's glare",
    action: "",
    tags: ["divine", "dwarf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> death warden dwarf heritage
        </span>
        <br />
        When you critically hit an undead creature, or an undead creature
        critically fails a saving throw against one of your abilities, you drive
        your divine wrath home in your enemy’s heart. The undead is enfeebled 1
        for 1 round.
      </span>
    ),
  },
  {
    id: 30,
    name: "Battleforger",
    action: "",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> master in Crafting
        </span>
        <br />
        You can sharpen weapons, polish armor, and apply special techniques to
        temporarily gain better effects from your armaments. By spending 1 hour
        working on a weapon or armor, you can grant it the effects of a +1
        potency rune until your next daily preparations, gaining a +1 item bonus
        to attack rolls for a weapon or increasing armor’s item bonus to AC by
        1. This has no effect if the weapon or armor already had a potency rune.
      </span>
    ),
  },
  {
    id: 31,
    name: "Demolitionist",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        You know how to destroy objects with a well-placed explosion. Whenever
        you hit with a bomb Strike against a trap or an unattended object, you
        ignore the first 5 points of the object’s Hardness.
      </span>
    ),
  },
  {
    id: 32,
    name: "Echoes in stone",
    action: "one_action",
    tags: ["concentrate", "dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Requirements:</b> You are standing on a stone or earthen surface.
        </span>
        <br />
        You pause a moment to attune your senses to the stone around you. Until
        the start of your next turn, you gain a new sense: imprecise tremorsense
        with a range of 20 feet.
      </span>
    ),
  },
  {
    id: 33,
    name: "Energy blessed",
    action: "",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> elemental heart dwarf heritage
        </span>
        <br />
        Energy runs through your blood more powerfully. When you use Energy
        Emanation, you can create an emanation of 5 feet, 10 feet, or 15 feet.
        The damage increases to 6d6 plus an additional 1d6 for every level you
        have above 9th, instead of 1d6 plus an additional 1d6 for every 2 levels
        above 1st.
      </span>
    ),
  },
  {
    id: 34,
    name: "Heroes' call",
    action: "",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description:
      "The songs of ancient heroes echo through your mind and quicken your pulse, especially in dire straits. You gain heroism as a 3rd-level innate occult spell that you can cast once per day. If you Cast the Spell when you have half or fewer Hit Points, you also gain temporary Hit Points equal to twice your level.",
  },
  {
    id: 35,
    name: "Kneel for no god",
    action: "",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> ancient-blooded dwarf heritage
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Access:</b> Vahird ethnicity
        </span>
        <br />
        Your ancestors’ defiance of magic and your people’s strictly egalitarian
        mindset mean that certain forms of magic have little effect on you. When
        you use your Call on Ancient Blood reaction against a divine spell and
        roll a critical failure on the saving throw against that spell, you get
        a failure instead.
      </span>
    ),
  },
  {
    id: 36,
    name: "Mountain stoutness",
    action: "",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description:
      "Your hardiness lets you withstand more punishment than most before going down. Increase your maximum Hit Points by your level. When you have the dying condition, the DC of your recovery checks is equal to 9 + your dying value (instead of 10 + your dying value).\n" +
      "\n" +
      "If you also have the Toughness feat, the Hit Points gained from it and this feat are cumulative, and the DC of your recovery checks is equal to 6 + your dying value.",
  },
  {
    id: 37,
    name: "Returning throw",
    action: "two_action",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description:
      "You have mastered the technique of arcing a projectile so that it returns to your hand after being thrown, though this requires a moment to precisely calculate the trajectory and possible ricochets. Make a ranged Strike with a thrown weapon. Once the Strike is complete, the weapon arcs or ricochets back to your hand. If your hands are full when the weapon returns, it falls to the ground in your space.",
  },
  {
    id: 38,
    name: "Rivethun spiritual attunement",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Rivethun Adherent background (World Guide) or you are a
          member of the Rivethun.
        </span>
        <br />
        Your time spent among the Rivethun has heightened your awareness of
        animate spirits around you, giving you the ability to sense them
        briefly. Once per day, you can use an action, which has the concentrate
        trait, to gain spiritsense as an imprecise sense with a range of 60 feet
        for 1 minute. You can sense the presence of spirits as described in the
        Soulsight feat (Advanced Player’s Guide).
      </span>
    ),
  },
  {
    id: 39,
    name: "Smoke sight",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        You’re used to fighting and hiding in a haze of smoke and flame. You
        automatically succeed at the DC 5 flat check to target a concealed
        creature if that creature is concealed only by smoke. When you are
        concealed or hidden in smoke, increase the DC of the flat check to
        target you to 6 if you’re concealed or 12 if you’re hidden.
      </span>
    ),
  },
  {
    id: 40,
    name: "Stone bones",
    action: "reaction",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You are struck by a critical hit that deals physical
          damage.
        </span>
        <br />
        Your intractable nature can help you shrug off even the most grievous
        injuries. Attempt a DC 17 flat check. If you are successful, the attack
        becomes a normal hit.
      </span>
    ),
  },
  {
    id: 41,
    name: "Stone walker",
    action: "",
    tags: ["dwarf"],
    level: 9,
    feat: "Feat 9",
    description:
      "You have a deep reverence for and connection to stone. You gain meld into stone as a 3rd-level divine innate spell that you can cast once per day.\n" +
      "\n" +
      "If you have the Stonecunning dwarf ancestry feat, you can attempt to find unusual stonework and stonework traps that require legendary proficiency in Perception. If you have both Stonecunning and legendary proficiency in Perception, when you’re not Seeking and the GM rolls a secret check for you to notice unusual stonework, you keep the bonus from Stonecunning and don’t take the –2 circumstance penalty.",
  },
  {
    id: 42,
    name: "Crafter's instinct",
    action: "reaction",
    tags: ["uncommon", "dwarf", "fortune"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> master in Crafting
        </span>
        <br />
        <br />
        <span>
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        <br />
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You misfire with a firearm or you roll a failure on a
          Strike with a ranged weapon.
        </span>
        <br />
        You sense a minor flaw in the weapon as you fire it, and quickly adjust
        your aim on the fly to avoid the flaw. If the triggering Strike was a
        misfire, you get a normal failure instead. If the triggering Strike was
        a failure, it becomes a glancing blow that deals minimum damage for the
        Strike (adding any bonuses as normal but getting a result of 1 for all
        damage dice that would be rolled on a success). The glancing blow does
        not apply other effects that would normally happen only on a hit.
      </span>
    ),
  },
  {
    id: 43,
    name: "Dwarven weapon expertise",
    action: "",
    tags: ["dwarf"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Dwarven Weapon Familiarity
        </span>
        <br />
        Your dwarven affinity blends with your training, granting you great
        skill with dwarven weapons. Whenever you gain a class feature that
        grants you expert or greater proficiency in certain weapons, you also
        gain that proficiency for battle axes, picks, warhammers, and all
        dwarven weapons in which you are trained.
      </span>
    ),
  },
  {
    id: 44,
    name: "Explosive expert",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Explosive Savant
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        You have continued training in volatile weapons and gained a deeper
        understanding. Whenever you gain a class feature that grants you expert
        or greater proficiency in certain weapons, you also gain that
        proficiency for simple and martial bombs and firearms.
      </span>
    ),
  },
  {
    id: 45,
    name: "Scrutinizing gaze",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        Your family’s traditions of defending against Geb’s undead have granted
        you a sixth sense for detecting spirits, haunts, and other restless
        dead, no matter their form or the strength of their presence. You gain a
        +2 circumstance bonus to Perception checks to Sense Motive when trying
        to determine if a creature is possessed or under the influence of an
        effect that would make them controlled, a +2 circumstance bonus to
        Perception checks made to see through disguises worn by undead, and a +2
        circumstance bonus when using the Seek action to find hidden or
        undetected haunts or undead within 30 feet of you.
        <br />
        <br />
        If you aren’t using the Seek action or searching, the GM automatically
        rolls a secret check for you to notice haunts or undead within 30 feet
        anyway. This check doesn’t gain the usual +2 circumstance bonus, and
        instead takes a –2 circumstance penalty.
      </span>
    ),
  },
  {
    id: 46,
    name: "Telluric power",
    action: "",
    tags: ["dwarf"],
    level: 13,
    feat: "Feat 13",
    description:
      "You channel strength from the earth beneath your feet to pummel your enemies. When making a melee Strike against a target who is standing on the same earth or stone surface as you are, you gain a circumstance bonus to the damage roll equal to the number of weapon damage dice.",
  },
  {
    id: 47,
    name: "Forge-blessed shot",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> worshipper of Torag or Angradd
        </span>
        <br />
        <br />
        <span>
          <b>Access:</b> You are from Dongun Hold or Alkenstar.
        </span>
        <br />
        <br />
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You attempt a ranged Strike.
        </span>
        <br />
        You intone a prayer to the dwarven deities Torag or Angradd, willing a
        higher power to guide your aim in the heat of battle. On your next
        Strike with a ranged weapon before the end of your turn, you gain a +2
        circumstance bonus to your attack roll and ignore your target’s
        concealed condition, as well as your target’s lesser, standard, and
        greater cover.
      </span>
    ),
  },
  {
    id: 48,
    name: "Stonegate",
    action: "",
    tags: ["uncommon", "dwarf"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Stonewalker
        </span>
        <br />
        Earthen barriers no longer impede your progress. You gain passwall as a
        7th-level divine innate spell that you can cast once per day. Unlike the
        spell, however, this ability can be used only to open passages through
        barriers of earth or stone.
      </span>
    ),
  },
];
