import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const BardFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Bardinc lore",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> enigma muse.
        </span>
        <br />
        Your studies make you informed on every subject. You are trained in
        Bardic Lore, a special Lore skill that can be used only to Recall
        Knowledge, but on any topic. If you have legendary proficiency in
        Occultism, you gain expert proficiency in Bardic Lore, but you can’t
        increase your proficiency rank in Bardic Lore by any other means.
      </p>
    ),
  },
  {
    id: 2,
    name: "Hymn of healing",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        You learn the hymn of healing composition spell, which imbues your music
        with rich melodies that help your allies recover from harm.
      </p>
    ),
  },
  {
    id: 3,
    name: "Lingering composition",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> maestro muse.
        </span>
        <br />
        By adding a flourish, you make your compositions last longer. You learn
        the lingering composition focus spell. Increase the number of Focus
        Points in your focus pool by 1.
      </p>
    ),
  },
  {
    id: 4,
    name: "Martial performance",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> warrior muse.
        </span>
        <br />
        Your muse has taught you how to handle a wider variety of weapons than
        most bards, empowering you to effortlessly blend your performance into
        combat even with the most inelegant tools. You become trained with all
        martial weapons. If you gain the bard weapon expertise class feature,
        your proficiency rank with martial weapons increases to expert.
      </p>
    ),
  },
  {
    id: 5,
    name: "Reach spell",
    action: "one_action",
    tags: ["bard", "concentrate", "metamagic"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        You can extend your spells’ range. If the next action you use is to Cast
        a Spell that has a range, increase that spell’s range by 30 feet. As is
        standard for increasing spell ranges, if the spell normally has a range
        of touch, you extend its range to 30 feet.
      </p>
    ),
  },
  {
    id: 6,
    name: "Versatile performance",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> polymath muse.
        </span>
        <br />
        You can rely on the grandeur of your performances rather than ordinary
        social skills. You can use Performance instead of Diplomacy to Make an
        Impression and instead of Intimidation to Demoralize. You can also use
        an acting Performance instead of Deception to Impersonate. You can use
        your proficiency rank in Performance to meet the requirements of skill
        feats that require a particular rank in Deception, Diplomacy, or
        Intimidation.
      </p>
    ),
  },
  {
    id: 7,
    name: "Well-versed",
    action: "",
    tags: ["bard"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        You’re resilient to performative influences that aren’t your own. You
        gain a +1 circumstance bonus to saving throws against effects with the
        auditory, illusion, linguistic, sonic, or visual traits.
      </p>
    ),
  },
  {
    id: 8,
    name: "Cantrip expansion",
    action: "",
    tags: ["bard"],
    level: 2,
    feat: "Feat 2",
    description: (
      <p>
        <i>Core rulebook</i>
        <br />
        <br />
        Study broadens your range of simple spells. Add two additional cantrips
        from your spell list to your repertoire.
      </p>
    ),
  },
  {
    id: 9,
    name: "Directed audience",
    action: "",
    tags: ["bard"],
    level: 2,
    feat: "Feat 2",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        You can shape the area of your composition spells. Whenever you cast a
        composition spell whose area is an emanation, you can change the spell’s
        area to a cone 10 feet larger, to a maximum of twice the original area.
        For example, you could modify a composition spell that affects a 30-foot
        emanation to affect a 40-foot cone, but a 5-foot emanation could only
        become a 10-foot cone.
      </p>
    ),
  },
  {
    id: 10,
    name: "Esoteric polymath",
    action: "",
    tags: ["bard"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> polymath muse.
          </span>
          <br />
          You keep a book of occult spells, similar to a wizard’s spellbook, and
          can use its spells to supplement your spell repertoire. Add all the
          spells in your repertoire to this book for free. You can use the
          Occultism skill to Learn Spells and add them to your spellbook by
          paying the appropriate cost, similar to a wizard.
        </p>
        <p>
          During your daily preparations, choose any one spell from your book of
          occult spells. If that spell is already in your spell repertoire, you
          can treat it as an additional signature spell that day. If it isn’t in
          your repertoire, treat it as though it were until your next daily
          preparations.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Inspire competence",
    action: "",
    tags: ["bard"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> maestro muse.
          </span>
          <br />
          You learn the inspire competence composition cantrip, which aids your
          allies’ skills.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Loremaster's etude",
    action: "",
    tags: ["bard", "fortune"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> enigma muse.
          </span>
          <br />
          You magically unlock memories, making them easier to recall. You learn
          the loremaster’s etude composition spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Multifarious muse",
    action: "",
    tags: ["bard"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          Your muse doesn’t fall into a single label. Choose a type of muse
          other than that of your own. You gain a 1st-level feat that requires
          that muse, and your muse is now also a muse of that type, allowing you
          to take feats with the other muse as a prerequisite. You don’t gain
          any of the other effects of the muse you chose.
        </p>
        <p>
          <b>Special</b> You can take this feat multiple times. Each time you
          do, you must choose a different type of muse other than that of your
          own.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Reliable squire",
    action: "",
    tags: ["uncommon", "bard", "champion"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          You know the path to victory isn’t traveled alone, and you lend aid to
          your companions whenever you can. You gain a +2 circumstance bonus to
          checks to Aid. If you roll a critical failure on a check to Aid, you
          get a failure instead.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Song of strength",
    action: "",
    tags: ["bard"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> warrior muse.
          </span>
          <br />
          Your performances inspire strength in your allies. You learn the song
          of strength composition cantrip.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Combat reading",
    action: "one_action",
    tags: ["bard", "secret"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You use a performer’s cold reading techniques, aura reading, and other
          tricks to discover your foe’s strengths and weaknesses. The GM rolls a
          secret Occultism check for you against the Deception or Stealth DC
          (whichever is higher) of an enemy of your choice who is engaged in
          combat and isn’t concealed from you, hidden from you, or undetected by
          you. The GM might apply a penalty for the distance between you and the
          enemy. The enemy is then temporarily immune to your Combat Reading for
          1 day.
        </p>
        <p>
          <b>Critical Success</b> The GM chooses and tells you two of the
          following pieces of information about the enemy: which of the enemy’s
          weaknesses is highest, which of the enemy’s saving throws has the
          lowest modifier, one immunity the enemy has, or which of the enemy’s
          resistances is highest. In the event of a tie, the GM should pick one
          at random.
        </p>
        <p>
          <b>Success</b> The GM chooses one piece of information from the above
          list to tell you about the enemy.
        </p>
        <p>
          <b>Critical Failure</b> The GM gives you false information (the GM
          makes up the information).
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Courageous advance",
    action: "one_action",
    tags: ["auditory", "bard", "concentrate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> warrior muse.
          </span>
          <br />
          With a rousing call, you exhort an ally to advance. If your next
          action is to cast the inspire courage composition cantrip, one ally
          who gains a status bonus from the spell can immediately use a reaction
          to Stride.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Inspire defence",
    action: "",
    tags: ["bard"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> maestro muse.
          </span>
          <br />
          You learn the inspire defense composition cantrip, which protects you
          and allies.
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Inspire defence",
    action: "reaction",
    tags: ["uncommon", "bard", "champion", "emotion", "mental"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You and at least one other creature become the target
            of a spell or effect with the emotion, fear, or mental trait that
            allows a saving throw, and you haven’t rolled the save yet.
          </span>
          <br />
          You show defiance in times of hardship and inspire your companions to
          persevere. Allies within 30 feet of you gain a +1 circumstance bonus
          to their Will save against the triggering effect, or a +2 circumstance
          bonus if the effect originated from an undead.
        </p>
      </>
    ),
  },
  {
    id: 20,
    name: "Inspire defence",
    action: "one_action",
    tags: ["rare", "bard", "rogue", "stance", "swashbuckler"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Performance.
          </span>
          <br />
          You have mastered the opening steps to the Masquerade of Seasons, a
          dance that channels the power of spring, summer, winter, and autumn.
          Choose one of the following traits: water, fire, negative, or cold.
          You gain resistance 5 to damage dealt by effects with the chosen
          trait. You can use an action to reenter this stance at any time,
          changing the granted resistance to another of the available options.
          If you are at least 12th level, the granted resistance increases to be
          equal to half your level.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Melodious spell",
    action: "one_action",
    tags: ["bard", "concentrate", "manipulate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          You subtly weave your spellcasting into your performance. If the next
          action you take is to Cast a Spell, attempt a Performance check
          against all observers’ Perception DCs. If your Performance check is
          successful against an observer’s Perception DC, that observer doesn’t
          notice that you are Casting a Spell, even though normally spells have
          sensory manifestations that would make spellcasting obvious to those
          around you, and verbal, somatic, and material components are extremely
          overt. You hide all of these as part of an ordinary performance.
        </p>
        <p>
          This hides only the spell’s spellcasting actions and manifestations,
          not its effects, so an observer might still see a ray streak out from
          you or see you vanish.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Ritual researcher",
    action: "",
    tags: ["uncommon", "bard"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> enigma muse, expert in Occultism.
          </span>
          <br />
          Careful research into the art of rituals has made you better at
          performing them. You gain a +2 circumstance bonus to all primary and
          secondary checks you attempt as part of casting a ritual.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Triple time",
    action: "",
    tags: ["bard"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          You learn the triple time composition cantrip, which speeds up you and
          your allies for a round.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Versatile signature",
    action: "",
    tags: ["bard"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> polymath muse.
          </span>
          <br />
          While most bards are known for certain signature performances and
          spells, you’re always tweaking your available repertoire. When you
          make your daily preparations, you can change one of your signature
          spells to a different spell of that level from your repertoire.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Assured knowledge",
    action: "",
    tags: ["bard"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> enigma muse.
          </span>
          <br />
          You can procure information with confidence. Whenever you Recall
          Knowledge using any skill (including Bardic Lore), you can forgo
          rolling your check to instead receive a result of 10 + your
          proficiency bonus (don’t apply any other bonuses, penalties, or
          modifiers). As long as you are an expert in a skill, you meet the
          prerequisites for the Automatic Knowledge skill feat in that skill,
          even if you don’t have Assurance in that skill.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Defensive coordination",
    action: "one_action",
    tags: ["auditory", "bard", "concentrate", "metamagic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Adavnced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> warrior muse, Inspire Defense.
          </span>
          <br />
          Like the storied heroes who persist in the face of overwhelming odds,
          you and your allies will hold the line. If your next action is to cast
          the inspire defense composition cantrip, you can Raise a Shield, and
          one ally who gains a status bonus from the spell can immediately use a
          reaction to Raise a Shield.
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Dirge of doom",
    action: "",
    tags: ["bard"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          You learn the dirge of doom composition cantrip, which frightens your
          enemies.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Educate allies",
    action: "reaction",
    tags: ["abjuration", "bard", "concentrate"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> Well-Versed.
          <br />
          <span className="frequency">
            <b>Trigger</b> An ally benefiting from one of your composition
            spells is subject to an effect with the auditory, illusion,
            linguistic, sonic, or visual trait.
          </span>
          <br />
          You tweak the properties of your composition spell to convey a bit of
          your defensive knowledge. All allies affected by your composition
          spell gain your +1 circumstance bonus from Well-Versed until the start
          of your next turn. Teaching your allies also bolsters your own skills;
          your personal circumstance bonus from Well-Versed also increases to +2
          until the start of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Harmonize",
    action: "one_action",
    tags: ["bard", "concentrate", "manipulate", "metamagic"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> maestro muse.
          </span>
          <br />
          You can perform multiple compositions simultaneously. If your next
          action is to cast a composition, it becomes a harmonized composition.
          Unlike a normal composition, a harmonized composition doesn’t end if
          you cast another composition, and you can cast another composition on
          the same turn as a harmonized one. Casting another harmonized
          composition ends any harmonized composition you have in effect.
        </p>
      </>
    ),
  },
  {
    id: 30,
    name: "Pirouette",
    action: "reaction",
    tags: ["rare", "bard", "rogue", "swashbuckler"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <b>Prerequisites</b> Masquerade of Seasons Stance.
          <br />
          <b>Requirements</b> You’re in Masquerade of Seasons Stance.
          <br />
          <span className="frequency">
            <b>Trigger</b> An enemy targets you with a Strike.
          </span>
          <br />
          You twirl gracefully, spinning on one foot to evade your opponent’s
          attack. You gain a +2 circumstance bonus to AC against the triggering
          attack. If the attack misses you, you can immediately Step. If the
          attack hits you anyway, reduce the damage it deals by an amount equal
          to half your level; this reduction in damage is applied after
          calculating immunities, resistances, and weakness.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Song of marching",
    action: "",
    tags: ["bard"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You learn the song of marching composition cantrip, which enables you
          and your allies to cross vast distances without strain.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Steady Spellcasting",
    action: "",
    tags: ["bard"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You don’t lose spells easily. If a reaction would disrupt your
          spellcasting action, attempt a DC 15 flat check. If you succeed, your
          action isn’t disrupted.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Accompany",
    action: "reaction",
    tags: ["bard", "concentrate", "manipulate"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> An ally within 30 feet Casts a Spell.
          </span>
          <br />
          You use your performances to supplement an ally’s spellcasting,
          providing magical energy for their spells. Attempt a Performance
          check, using a very high DC for the ally’s level (see Adjusting
          Difficulty section), and either spend a Focus Point (if the triggering
          spell is a focus spell) or expend a spell slot at least 1 level higher
          than the triggering spell. If you succeed at the Performance check,
          your ally’s spell doesn’t cost the Focus Point or spell slot.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Call and response",
    action: "one_action",
    tags: ["auditory", "bard", "concentrate", "metamagic"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Your composition takes the form of a call-and-response chant, which
          lets your allies continue the effect without you. If your next action
          is to cast a composition cantrip with a duration of 1 round, it
          becomes a call. While the spell is active, one ally affected by the
          spell can respond to your call as a single action that has the
          auditory and concentrate traits to extend the spell’s duration by 1
          round. Only one ally can respond to a given call, and responding to
          the ally’s response has no additional effect.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Courageous opportunity",
    action: "reaction",
    tags: ["auditory", "bard", "concentrate"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites:</b> warrior muse.
          <br />
          <b>Trigger:</b> A creature within your reach uses an auditory effect,
          manipulate action, or move action; makes a ranged attack; or leaves a
          square during its move action.
          <br />
          <span className="frequency">
            <b>Trigger:</b> You are affected by inspire courage.
          </span>
          <br />
          You bellow a ferocious call to arms, inspiring yourself to lash out at
          a foe. Make a melee Strike against the triggering creature. If the
          attack is a critical hit and the trigger was a manipulate action, the
          action is disrupted.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Eclectic Skill",
    action: "",
    tags: ["bard"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> polymath muse, master in Occultism.
          </span>
          <br />
          Your broad experiences translate to a range of skills. Your
          proficiency bonus to untrained skill checks is equal to your level.
          You can attempt any skill check that normally requires you to be
          trained, even if you are untrained. If you have legendary proficiency
          in Occultism, you can attempt any skill check that normally requires
          you to have expert proficiency, even if untrained or trained.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Grand dance",
    action: "two_action",
    tags: ["rare", "bard", "rogue", "swashbuckler"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Impossible Lands</i>
          <br />
          <br />
          <b>Prerequisites:</b> Masquerade of Seasons Stance.
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> You’re in Masquerade of Seasons Stance.
          </span>
          <br />
          You can summon the full magic of Bhopan’s grand dance. Stride up to
          your Speed; during this Stride, you can walk on air as if it were
          solid ground. You can ascend and descend in this way at a maximum of a
          45-degree angle. You must end your Stride on a surface that can
          support you or you fall.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Helt's spelldance",
    action: "three_action",
    tags: ["uncommon", "bard", "sorcerer", "witch", "wizard"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Firebrands</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> expert in Performance.
          </span>
          <br />
          Ranik Helt knows a special technique to hide his spells as part of a
          performance, and you’ve learned this technique. Ostentatiously
          performing, you move across the battlefield, taking foes aback and
          creating an opening for your spell. Attempt a Performance check
          against all observers’ Perception DCs. Then, Stride once or twice.
          During this movement, you don’t trigger reactions that are triggered
          by your movement from the creatures against which you succeeded on
          your Performance check. After your movement, you can Cast a Spell. If
          you used one Stride, you can cast either a 1-action or a 2-action
          spell; if you used two Strides, you can only cast a 1-action spell. If
          you critically succeed on your check against any creature, they take a
          –1 circumstance penalty to their saving throws against any spell you
          cast as part of your Helt’s Spelldance due to your distracting
          performance. All creatures that observed you become temporarily immune
          to your Helt’s Spelldance for 10 minutes.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Inspire Heroics",
    action: "",
    tags: ["bard"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> maestro muse.
          </span>
          <br />
          Your performances inspire even greater deeds in your allies. You learn
          the inspire heroics metamagic focus spell. Increase the number of
          Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Know-it-all",
    action: "",
    tags: ["bard"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> enigma muse.
          </span>
          <br />
          When you succeed at a Knowledge check, you gain additional information
          or context. When you critically succeed at a Knowledge check, at the
          GM’s discretion you might gain even more additional information or
          context than normal.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Soulsight",
    action: "",
    tags: ["bard"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          Your muse has opened your senses to the world beyond. You gain
          spiritsense as an imprecise sense with a range of 60 feet. Spiritsense
          enables you to sense the spirits of creatures, including living
          creatures, most non-mindless undead, and haunts within the listed
          range. As with your hearing and other imprecise senses, you still need
          to Seek to locate an undetected creature. As spiritsense detects
          spiritual essence, not physical bodies, it can detect spirits
          projected by spells such as project image or possessing otherwise
          soulless objects. It can’t detect soulless bodies, constructs, or
          objects, and like most senses, it doesn’t penetrate through solid
          objects.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Annotate composition",
    action: "",
    tags: ["bard", "exploration", "linguistic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          By putting composition to paper, you can create a source of stirring
          words or song that others can read and understand. You spend 10
          minutes and 1 Focus Point to transpose a composition spell on a
          special scroll that you or another creature can later activate. This
          composition spell must take a single action to cast. If the chosen
          composition spell requires a Performance check as part of the casting,
          the GM rolls this check as a secret check when you annotate your
          score. If you have inspire heroics or lingering performance and the
          chosen composition spell allows, you can also use one of those spells
          to modify the annotated composition, with the GM rolling the secret
          Performance check. If you do, you spend an additional Focus Point,
          even if the secret check fails.
        </p>
        <p>
          Any creature that can read the language you used when annotating your
          composition can Activate the Item by spending a single action, which
          has the concentrate trait. This produces the effects of the
          composition as though the activating creature had Cast the Spell.
        </p>
        <p>
          A composition you create this way loses its power the next time you
          make your daily preparations. While the composition is in your
          possession, you can render it inert using a single action that has the
          concentrate trait. You can’t regain the Focus Points you spent to
          create the annotated composition until it is activated or loses its
          magic.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Courageous assault",
    action: "one_action",
    tags: ["auditory", "bard", "concentrate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> warrior muse.
          </span>
          <br />
          With a mighty shout, you can stir an ally to attack. If your next
          action is to cast the inspire courage composition cantrip, one ally
          who gains a status bonus from the spell can immediately use a reaction
          to make a melee Strike.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "House of Imaginary Walls",
    action: "",
    tags: ["bard"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You erect an imaginary barrier others believe to be real. You learn
          the house of imaginary walls composition cantrip.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Ode to ouroboros",
    action: "",
    tags: ["bard"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You learn the ode to ouroboros composition spell, which enables you to
          temporarily spare your allies from death.
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Quickened casting",
    action: "",
    tags: ["bard", "concentrate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Frequency:</b> once per day.
          </span>
          <br />
          If your next action is to cast a bard cantrip or a bard spell that is
          at least 2 levels lower than the highest-level bard spell slot you
          have, reduce the number of actions to cast it by 1 (minimum 1 action).
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Symphony of the unfettered heart",
    action: "",
    tags: ["bard"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You learn the symphony of the unfettered heart composition spell,
          which enables you to protect an ally against incapacitating
          conditions.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Unusual compositon",
    action: "one_action",
    tags: ["bard", "concentrate", "manipulate", "metamagic"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> polymath muse.
          </span>
          <br />
          You can translate the emotion and power of a composition to other
          mediums. If your next action is to cast a composition spell, you can
          use a different kind of performance than usual for the composition to
          change any of its somatic components to verbal components or vice
          versa. As usual for composition spells, this changes whether the
          composition is auditory or visual.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Eclectic polymath",
    action: "",
    tags: ["bard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Esoteric Polymath.
          </span>
          <br />
          Your flexible mind can quickly shift spells. If you add a spell to
          your repertoire during your daily preparations using Esoteric
          Polymath, when you prepare again, you can choose to keep the new spell
          from Esoteric Polymath in your repertoire and instead lose access to
          another spell of the same level in your repertoire.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Enigma's knowledge",
    action: "",
    tags: ["bard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Assured Knowledge.
          </span>
          <br />
          Your muse whispers knowledge to you at all the right times. You gain
          the benefits of the Automatic Knowledge skill feat with any skill you
          can use to Recall Knowledge. As per the special clause in the
          Automatic Knowledge feat, you can still only use Automatic Knowledge
          once per round.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Inspirational focus",
    action: "",
    tags: ["bard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your connection to your muse has granted you unusual focus. If you
          have spent at least 2 Focus Points since the last time you Refocused,
          you recover 2 Focus Points when you Refocus instead of 1.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Reverberate",
    action: "reaction",
    tags: ["bard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> You would take sonic damage from a spell.
          </span>
          <br />
          You can manipulate the acoustics around you to deflect sonic damage
          back at its source. Attempt a Performance check against the spell DC
          of the creature that cast the triggering spell.
        </p>
        <p>
          <b>Critical Success</b> You reduce the triggering damage by an amount
          up to four times your level. The caster takes sonic damage equal to
          the amount of damage you reduced in this way.
        </p>
        <p>
          <b>Success</b> As critical success, but you reduce the triggering
          damage by an amount up to twice your level.
        </p>
        <p>
          <b>Critical Failure</b> You misdirect the sonic waves at yourself,
          taking twice the triggering damage.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Shared Assault",
    action: "",
    tags: ["bard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Courageous Assault.
          </span>
          <br />
          In the triumph of battle, you can share the glory with another ally.
          When the ally you chose for Courageous Assault critically succeeds at
          the Strike granted by that action, another ally affected by your
          inspire courage composition spell can immediately use a reaction to
          make a melee Strike. Since the second ally wasn’t the ally you chose
          for Courageous Assault, this effect doesn’t continue to a third ally,
          even if the second ally also critically succeeds at their Strike.
        </p>
      </>
    ),
  },
  {
    id: 54,
    name: "Shared Light",
    action: "one_action",
    tags: ["uncommon", "bard", "concentrate", "metamagic", "sorcerer"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Soulsight.
          </span>
          <br />
          You bestow the mystical vision granted to you by your muse upon your
          allies. If your next action is to cast a non-cantrip spell that
          affects one or more of your allies, all affected allies gain your
          spiritsense for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Silver's refrain",
    action: "",
    tags: ["rare", "bard"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Tomorrow must burn</i>
          <br />
          <br />
          You learn the <b>silver’s refrain</b> composition cantrip, which aids
          you when fighting devils.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Allegro",
    action: "",
    tags: ["bard"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You can quicken your allies with a fast-paced performance. You learn
          the <b>allegro</b> composition cantrip.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Earworm",
    action: "",
    tags: ["bard", "exploration"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          By endlessly repeating a motif, you implant an earworm, a memorable
          song that repeats over and over again in your allies’ heads, preparing
          them to respond to it later. Choose a composition cantrip and spend 10
          minutes repeating a melody, chant, speech, series of motions, or a
          similar performance that embodies that cantrip. This activity gains
          the traits appropriate to the type of performance. You implant the
          earworm within all allies who can see or hear you (as appropriate for
          the type of performance) for the entire activity.
        </p>
        <p>
          Once you’ve created the earworm, you can attempt a Performance check
          as a free action to activate it. This check uses a very hard DC of a
          level equal to that of the highest-level target of the earworm present
          at the time of activation (see Adjusting Difficulty section). On a
          success, you cast the cantrip on all allies who learned the earworm
          and can perceive your performance; on a failure, the earworm is
          corrupted and lost. Because it is based on the earlier repetitions,
          you can’t use further free actions like lingering performance or
          inspire heroics to modify the activated earworm. Allies forget the
          earworm after it is activated, if you spend 10 minutes to implant
          another earworm, or during your next daily preparations, whichever
          comes first.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Soothing Ballad",
    action: "",
    tags: ["bard"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          You soothe your allies’ wounds with the power of your performance. You
          learn the soothing ballad composition spell. Increase the number of
          Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Triumphant inspiration",
    action: "",
    tags: ["bard"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> warrior muse.
          <br />
          <span className="frequency">
            <b>Trigger:</b> You critically hit a foe with a melee weapon Strike
            or a melee unarmed attack.
          </span>
          <br />
          With a triumphant shout, you inspire your allies. You cast a
          composition cantrip you know that normally takes a single action to
          cast.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "True Hypercognition",
    action: "one_action",
    tags: ["bard"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> enigma muse.
          </span>
          <br />
          Your mind works at an incredible pace. You instantly use up to five
          Recall Knowledge actions. If you have any special abilities or free
          actions that would normally be triggered when you Recall Knowledge,
          you can’t use them for these actions.
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Vigorous Inspiration",
    action: "one_action",
    tags: ["auditory", "bard", "concentrate", "metamagic"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You instill magical vigor in your allies when you inspire them to
          attack. If your next action is to cast the inspire courage composition
          cantrip, you and all affected allies gain temporary Hit Points equal
          to 3 + your Charisma modifier that last for 1 minute.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Corageous onslaught",
    action: "one_action",
    tags: ["auditory", "bard", "concentrate", "metamagic"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Courageous Advance, Courageous Assault.
          </span>
          <br />
          You use your performance to orchestrate an onslaught against your
          enemies. If your next action is to cast the inspire courage
          composition cantrip, one ally who gains a status bonus from the spell
          can immediately use a reaction to Stride and then make a melee Strike.
        </p>
      </>
    ),
  },
  {
    id: 63,
    name: "Courageous onslaught",
    action: "",
    tags: ["bard"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> Your turn begins.
          </span>
          <br />
          You can maintain a spell with hardly a thought. You immediately gain
          the effects of the Sustain a Spell action, allowing you to extend the
          duration of one of your active bard spells.
        </p>
      </>
    ),
  },
  {
    id: 64,
    name: "Resounding finale",
    action: "reaction",
    tags: ["abjuration", "bard", "concentrate"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites:</b> maestro muse.
          <br />
          <span className="frequency">
            <b>Trigger:</b> You or an ally benefiting from your composition
            spell would take sonic damage.
          </span>
          <br />
          You bring your performance to a sudden, dramatic finish, drowning out
          other sounds. Your composition spell ends immediately, and all allies
          that had been benefiting from the spell’s effects gain sonic
          resistance against the triggering damage equal to twice the
          composition spell’s level.
        </p>
      </>
    ),
  },
  {
    id: 65,
    name: "Studious capacity",
    action: "",
    tags: ["bard"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> enigma muse, legendary in Occultism.
          </span>
          <br />
          Your continued study of occult magic has increased your magical
          capacity, allowing you to cast spells even when it seems impossible.
          You can cast one spell each day even after you’ve run out of spell
          slots of the appropriate spell level, but you can’t use this ability
          to cast a spell of your highest spell level.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "All in my head",
    action: "reaction",
    tags: ["bard", "illusion", "mental"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger:</b> You would take damage from a Strike or spell that
            doesn’t have the death trait or otherwise cause instant death (such
            as disintegrate).
          </span>
          <br />
          Using your occult connections and incredible powers of persuasion, you
          convince yourself that the triggering damage is a figment of your
          imagination. The damage changes from its usual damage type to mental
          damage, and the damaging effect gains the nonlethal trait. You can’t
          use this reaction if you are immune to mental effects or mental
          damage.
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Deep lore",
    action: "",
    tags: ["bard"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> enigma muse, legendary in Occultism
          </span>
          <br />
          Your repertoire is vast, containing far more spells than usual. Add
          one spell to your repertoire of each level you can cast.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Discordant voice",
    action: "",
    tags: ["bard", "evocation", "sonic"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> inspire courage.
          </span>
          <br />
          Your inspire courage lets loose a discordant shriek that imbues your
          allies’ attacks with powerful sonic reverberations. While your allies
          are affected by your inspire courage, their weapon Strikes and unarmed
          attacks deal an additional 1d6 sonic damag
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Eternal composition",
    action: "",
    tags: ["bard"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> maestro courage.
          </span>
          <br />
          The world is a stage upon which you are always playing. You are
          permanently quickened; you can use your extra action only to cast a
          composition cantrip that requires 1 action to cast. While in
          exploration mode, you can declare that you are performing an eligible
          composition cantrip while using any exploration tactic. Even before
          your first turn in a combat encounter, that cantrip is active as if
          you had cast it on your previous turn.
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Impossible polymath",
    action: "",
    tags: ["bard"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> trained in Arcana, Nature, or Religion;
            Esoteric Polymath.
          </span>
          <br />
          Your esoteric formulas are so unusual that they allow you to dabble in
          magic from diverse traditions that other bards don’t understand. As
          long as you’re trained in Arcana, you can add arcane spells to your
          book from Esoteric Polymath; as long as you’re trained in Nature, you
          can add primal spells to your book; and as long as you are trained in
          Religion, you can add divine spells to your book.
        </p>
        <p>
          Like your other spells in your book, you can add one of these spells
          from another tradition to your repertoire as an occult spell each day
          using Esoteric Polymath, but you can’t retain any spells from another
          tradition when you prepare again, even if you have Eclectic Polymath.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Fatal aria",
    action: "",
    tags: ["bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          Your songs overwhelm the target with unbearable emotion, potentially
          striking them dead on the spot. You learn the fatal aria composition
          spell. Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Head of the night parade",
    action: "three_action",
    tags: ["uncommon", "bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Fists of the Ruby Phoenix Adventures</i>
          <br />
          <br />
          You remember the revelry of the Night Parade and call them to your aid
          in a riotous display. You Perform and cast 8th-level mad monkeys three
          times, except that the spell calls various apparitions such as dancing
          tsukumogami or drinking oni rather than monkeys. Each casting can
          produce a different kind of mischief. You can Sustain all three Spells
          each round using a single Perform action.
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Perfect encore",
    action: "",
    tags: ["bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> magnum opus.
          </span>
          <br />
          You develop another incredible creation. You gain an additional
          10th-level spell slot.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Pied piping",
    action: "",
    tags: ["bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You learn the pied piping composition spell, which enables you to
          control the actions of weak-minded individuals.
        </p>
      </>
    ),
  },
  {
    id: 75,
    name: "Song of the Fallen",
    action: "",
    tags: ["uncommon", "bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Broken Promises</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> focus pool.
          </span>
          <br />
          The moving power of your songs can stir the spirits of the dead to
          rise once more and fight alongside you. You learn the song of the
          fallen composition spell. Increase the number of Focus Points in your
          focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Symphony of the muse",
    action: "",
    tags: ["bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Harmonize.
          </span>
          <br />
          You have learned how to weave countless performances together into a
          solo symphony with multitudinous effects. You are no longer limited to
          a single composition each turn or a single composition at a time; when
          you use a new composition, all previous compositions’ effects continue
          for their remaining duration.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Symphony of the muse",
    action: "",
    tags: ["bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> Harmonize.
          </span>
          <br />
          You have learned how to weave countless performances together into a
          solo symphony with multitudinous effects. You are no longer limited to
          a single composition each turn or a single composition at a time; when
          you use a new composition, all previous compositions’ effects continue
          for their remaining duration.
        </p>
      </>
    ),
  },
  {
    id: 77,
    name: "Ultimate Polymath",
    action: "",
    tags: ["bard"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites:</b> polymath muse.
          </span>
          <br />
          You can flexibly cast all of your spells, granting a dizzying array of
          possible options. All of the spells in your repertoire are signature
          spells for you.
        </p>
      </>
    ),
  },
];
