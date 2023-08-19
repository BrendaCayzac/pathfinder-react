import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const humanFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Adapted Cantrip",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> spellcasting class feature
        </span>
        Through study of multiple magical traditions, you’ve altered a spell to
        suit your spellcasting style. Choose one cantrip from a magical
        tradition other than your own. If you have a spell repertoire or a
        spellbook, replace one of the cantrips you know or have in your
        spellbook with the chosen spell. If you prepare spells without a
        spellbook (if you’re a cleric or druid, for example), one of your
        cantrips must always be the chosen spell, and you prepare the rest
        normally. You can cast this cantrip as a spell of your class’s
        tradition.
        <br />
        <br />
        If you swap or retrain this cantrip later, you can choose its
        replacement from the same alternate tradition or a different one.
      </span>
    ),
  },
  {
    id: 2,
    name: "Arcane tattoos",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Varisian ethnicity or New Thassilon nationality
        </span>
        TYou have tattoos on your body corresponding to one of the ancient
        Thassilonian schools of magic. Choose one of the following schools of
        magic: abjuration (shield), conjuration (tanglefoot), enchantment
        (daze), evocation (electric arc), illusion (ghost sound), necromancy
        (chill touch), or transmutation (sigil). You can cast the associated
        cantrip (listed in parentheses) as an innate arcane spell at will.
      </span>
    ),
  },
  {
    id: 3,
    name: "Cooperative nature",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        The short human life span lends perspective and has taught you from a
        young age to set aside differences and work with others to achieve
        greatness. You gain a +4 circumstance bonus on checks to Aid.
      </span>
    ),
  },
  {
    id: 4,
    name: "Courteous comeback",
    action: "",
    tags: ["uncommon", "fortune", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Access:</b> Keleshite nationality
        <br />
        <br />
        <b>Trigger:</b> You critically fail a Diplomacy check.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b>You’re in a settlement or community, and you
          haven’t used Courteous Comeback in this settlement or community within
          the past month.
        </span>
        <br />
        You grew up in the proud Padishah Empire, where even insults have a
        certain poetic wit. Reroll the triggering Diplomacy check, using the
        second result.
      </span>
    ),
  },
  {
    id: 5,
    name: "Devil's advocate",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Chelaxian nationality
        </span>
        <br />
        You know more about the habits of devils than is entirely safe. You gain
        a +2 circumstance bonus to Perception checks against devils and saving
        throws against their abilities. In addition, whenever you meet a devil
        in a social situation, you can immediately attempt a Diplomacy check to
        Make an Impression on that creature rather than needing to converse for
        1 minute. You take a –5 penalty to the check. If you fail, you can
        engage in 1 minute of conversation and attempt a new check at the end of
        that time rather than accepting the failure or critical failure result.
        <br />
        <br />
        <b>Special:</b> If you have the Glad-Hand skill feat, you don’t take the
        penalty to your immediate Diplomacy check if the target is a devil.
      </span>
    ),
  },
  {
    id: 6,
    name: "Dagonb's pit",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Tian-Dan ethnicity
        </span>
        <br />
        Many Tian-Dan claim to have dragon blood in their veins, and in your
        case, this is true—you can spit energy, and you might have an especially
        visible sign of your draconic heritage. Choose one of the following
        cantrips: acid splash, electric arc, produce flame, or ray of frost. You
        can cast this spell as an innate arcane spell at will, and when you cast
        it, the spell’s energy emerges from your mouth
      </span>
    ),
  },
  {
    id: 7,
    name: "General training",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your adaptability manifests in your mastery of a range of useful
        abilities. You gain a 1st-level general feat. You must meet the feat’s
        prerequisites, but if you select this feat during character creation,
        you can select the feat later in the process in order to determine which
        prerequisites you meet.
        <br />
        <br />
        <b>Special:</b>
        You can select this feat multiple times, choosing a different feat each
        time.
      </span>
    ),
  },
  {
    id: 8,
    name: "Gloomseer",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Nidalese ethnicity
        </span>
        <br />
        Gloom holds few terrors for you, and the pall of darkness over Nidal has
        made you comfortable in dim light. You gain low-light vision.
      </span>
    ),
  },
  {
    id: 9,
    name: "Haughty obstinacy",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your powerful ego makes it harder for others to order you around. If you
        roll a success on a saving throw against a mental effect that attempts
        to directly control your actions, you critically succeed instead. If a
        creature rolls a failure on a check to Coerce you using Intimidation, it
        gets a critical failure instead (so it can’t try to Coerce you again for
        1 week).
      </span>
    ),
  },
  {
    id: 10,
    name: "Keep appearances",
    action: "reaction",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Access:</b> Taldan nationality
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b>You are affected by an emotion effect.
        </span>
        <br />
        Taldan pride means you never show weakness. Roll a Deception check and
        compare the result to any observing creatures’ Perception DCs. On a
        success, that creature believes you were unaffected by the emotion
        effect. A creature tricked in this manner can’t benefit from the emotion
        effect and can’t use abilities that require you to be under this emotion
        effect; for example, if you successfully use this ability to trick a
        will-o’-wisp into believing you aren’t under a fear effect, it can’t use
        its Feed on Fear ability on you.
      </span>
    ),
  },
  {
    id: 11,
    name: "Know oneself",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Access:</b> Vudrani ethnicity.
        <br />
        <br />
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You roll a critical failure on a saving throw against
          an emotion effect.
        </span>
        <br />
        You center yourself and call to mind the Vudrani monastic ideals of
        mindfulness and self-knowledge. You fail the save against the emotion
        effect instead of critically failing.
      </span>
    ),
  },
  {
    id: 12,
    name: "Natural ambition",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You were raised to be ambitious and always reach for the stars, leading
        you to progress quickly in your chosen field. You gain a 1st-level class
        feat for your class. You must meet the prerequisites, but you can select
        the feat later in the character creation process in order to determine
        which prerequisites you meet.
      </span>
    ),
  },
  {
    id: 13,
    name: "Natural skill",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your ingenuity allows you to learn a wide variety of skills. You gain
        the trained proficiency rank in two skills of your choice.
      </span>
    ),
  },
  {
    id: 14,
    name: "Quah bond",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Access:</b>Shoanti ethnicity.
        </span>
        <br />
        You grew up among the Shoanti tribes, with the spirits watching over
        you, and they offer you guidance. You gain the trained proficiency rank
        in the skill listed for your quah (or another skill of your choice, if
        you’re already trained in that skill). You gain the Assurance skill feat
        in that skill, as the spirits’ help guides your actions.
        <br />
        <br />
        <b>Lyrune-Quah</b> Religion
        <br />
        <br />
        <b>Shadde-Quah</b> Athletics
        <br />
        <br />
        <b>Shriikirri-Quah</b> Nature
        <br />
        <br />
        <b>Shundar-Quah</b> Diplomacy
        <br />
        <br />
        <b>Sklar-Quah</b> Intimidation
        <br />
        <br />
        <b>Skoan-Quah</b> Medicine
        <br />
        <br />
        <b>Tamiir-Quah</b> Acrobatics
      </span>
    ),
  },
  {
    id: 15,
    name: "Saoc astrology",
    action: "one_action",
    tags: ["uncommon", "concentrate", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Access:</b> Lirgeni nationality.
        <br />
        <br />
        <b>Frequency:</b> 3 times per day.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You must spend 10 minutes just after your daily
          preparations examining the sky or consulting a star chart or you can’t
          use this action that day.
        </span>
        <br />
        The ancient Saoc Brethren were the masters of astrology, and while your
        knowledge may be but a pale shadow of their wisdom, it still comes in
        handy. You recall the stars’ predictions about your current situation.
        If your next action requires you to attempt one or more skill checks,
        roll 1d8. On a result of 6, 7, or 8, you gain a +2 circumstance bonus to
        the first such skill check you attempt. On a 3, 4, or 5, you gain a +1
        circumstance bonus. On a 2, you gain nothing. On a 1, you take a –1
        circumstance penalty to the skill check.
      </span>
    ),
  },
  {
    id: 16,
    name: "Tupilaq carver",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <b>Access:</b> Erutaki ethnicity.
        <br />
        <br />
        <span className="frequency">
          <b>Requirements:</b> You have a spellcasting class feature with the
          divine or primal tradition
        </span>
        <br />
        You know the truth behind old stories that tell of sending a fetish of
        bone and sinew to seek vengeance. These old magics allow you to conjure
        constructs with ease. Add the summon construct spell to your spell list.
        The constructs you summon have a distinct ivory scrimshaw appearance,
        and if you include a drop of blood, lock of hair, or other portion of a
        creature’s body as part of the spell’s material component, the summoned
        construct gains a +4 status bonus to Perception checks to sense or
        locate that creature.
      </span>
    ),
  },
  {
    id: 17,
    name: "Unconventional weaponry",
    action: "",
    tags: ["human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve familiarized yourself with a particular weapon, potentially from
        another ancestry or culture. Choose an uncommon simple or martial weapon
        with a trait corresponding to an ancestry (such as dwarf, goblin, or
        orc) or that is common in another culture. You gain access to that
        weapon, and for the purpose of determining your proficiency, that weapon
        is a simple weapon.
        <br />
        <br />
        If you are trained in all martial weapons, you can choose an uncommon
        advanced weapon with such a trait. You gain access to that weapon, and
        for the purpose of determining your proficiency, that weapon is a
        martial weapon.
      </span>
    ),
  },
  {
    id: 18,
    name: "Viking shieldbearer",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Ulfen ethnicity
        </span>
        <br />
        You trained with shields and weapons as soon as you were old enough to
        hold them, eager to win honor and glory for yourself. You gain the
        Shield Block reaction and are trained in your choice of the battle axe
        or longsword.
      </span>
    ),
  },
  {
    id: 19,
    name: "Witch warden",
    action: "",
    tags: ["uncommon", "human"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Access:</b> Kellid ethnicity
        </span>
        <br />
        You and your family have fought long and hard against witches,
        particularly the winter witches of Irrisen, and you’ve learned to be
        wary of their curses and the otherworldly powers their patrons grant.
        You gain a +1 circumstance bonus to saving throws against curses, and to
        saving throws against spells cast by a witch or hag. If you roll a
        success on a saving throw against a curse or a spell cast by a witch or
        hag, you get a critical success instead.
      </span>
    ),
  },
  {
    id: 20,
    name: "Adaptive adept",
    action: "",
    tags: ["human"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Adapted Cantrip, can cast 3rd-level spells
        </span>
        <br />
        You’ve continued adapting your magic to blend your class’s tradition
        with your adapted tradition. Choose a cantrip or 1st-level spell from
        the same magical tradition as your cantrip from Adapted Cantrip. You
        gain that spell, adding it to your spell repertoire, spellbook, or
        prepared spells just like the cantrip from Adapted Cantrip. You can cast
        this spell as a spell of your class’s magical tradition. If you choose a
        1st-level spell, you don’t gain access to the heightened versions of
        that spell, meaning you can’t prepare them if you prepare spells and you
        can’t learn them or select the spell as a signature spell if you have a
        spell repertoire.
      </span>
    ),
  },
  {
    id: 21,
    name: "Clever improviser",
    action: "",
    tags: ["human"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve learned how to handle situations when you’re out of your depth.
        You gain the Untrained Improvisation general feat. In addition, you can
        attempt skill actions that normally require you to be trained, even if
        you are untrained.
      </span>
    ),
  },
  {
    id: 22,
    name: "Darkseer",
    action: "",
    tags: ["human"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Gloomseer.
        </span>
        <br />
        Zon-Kuthon smiles upon you—even if you curse his name—granting you
        pitch-black eyes that allow you to see in shadows and darkness. You gain
        darkvision
      </span>
    ),
  },
  {
    id: 23,
    name: "Ornate tattoo",
    action: "",
    tags: ["human"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Arcane tattoos.
        </span>
        <br />
        You expand your tattoos to encompass greater magic. Choose a 1st-level
        arcane spell from the same school as your Arcane Tattoos, either a
        common spell or another to which you have access. You can cast that
        spell once per day as an innate arcane spell.
      </span>
    ),
  },
  {
    id: 24,
    name: "Sense allies",
    action: "",
    tags: ["human"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Like many humans raised in a close-knit community, you have always been
        strongly attuned to the presence of others. Willing allies that you are
        aware of within 60 feet that would otherwise be undetected by you are
        instead hidden from you. The flat check for you to target willing allies
        within 60 feet that are hidden from you is 5 instead of 11.
      </span>
    ),
  },
  {
    id: 25,
    name: "Wavetouched paragon",
    action: "",
    tags: ["human"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Bonuwat ethnicity.
        </span>
        <br />
        You have been blessed by the sea, granting you the ability to swim like
        a fish. You gain a 15-foot swim Speed.
        <br />
        <br />
        <b>Special:</b> If you have the Bonuwat Wavetouched background, you can
        take this feat at 1st level instead of 5th.
      </span>
    ),
  },
  {
    id: 26,
    name: "Cooperative soul",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Cooperative Nature.
        </span>
        <br />
        You have developed a soul-deep bond with your comrades and maintain an
        even greater degree of cooperation with them. If you are at least an
        expert in the skill you are Aiding, you get a success on any outcome
        rolled to Aid other than a critical success.
      </span>
    ),
  },
  {
    id: 27,
    name: "Dragon prince",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Dragon spit.
        </span>
        <br />
        The blood of the Dragon Kings runs strong in your veins. Your draconic
        heritage is clearly visible, with hair that is almost entirely crimson,
        azure, or the like, and that shines like a dragon’s scales. You can cast
        the dragon breath sorcerer bloodline spell as an innate arcane spell
        once per day, but you can use only the dragon breath that is associated
        with your heritage and that matches the energy type of your Dragon Spit
        feat. At 12th level and every 3 levels thereafter, the spell is
        heightened by an additional spell level.
      </span>
    ),
  },
  {
    id: 28,
    name: "Group aid",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Your upbringing emphasized teamwork and helping your allies comes
        naturally to you. After you Aid an ally at a skill check that doesn’t
        have the attack trait, you can also Aid any other ally who attempts the
        same skill check for the same purpose that round. You do so as a free
        action rather than a reaction.
        <br />
        <br />
        The preparation you did to help must still apply to the other allies,
        and you can Aid each ally only once. For example, if you helped lift up
        an ally to Aid them on an Athletics check to scale a wall, you could
        keep the same posture to give a boost to other allies attempting to
        scale the wall in the same round.
      </span>
    ),
  },
  {
    id: 29,
    name: "Hardy traveler",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        There’s no journey too far or burden too heavy when your friends are at
        your side. Increase your maximum and encumbered Bulk limits by 1. In
        addition, you gain a +10-foot circumstance bonus to your Speed during
        overland travel.
      </span>
    ),
  },
  {
    id: 30,
    name: "Heir of Saoc",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Saoc Astrology.
        </span>
        <br />
        In the past, you would have been a proud initiate of the Saoc Brethren.
        Today, you carry on their legacy. When you use Saoc Astrology, roll 1d4
        instead; on a 1, you take a –1 penalty to the skill check. On any other
        result, you gain a circumstance bonus of that value (for instance, a +3
        circumstance bonus on a 3).
      </span>
    ),
  },
  {
    id: 31,
    name: "Incredible improvisation",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> Clever Improviser.
        <br />
        <br />
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You attempt a check using a skill you’re untrained in.
        </span>
        <br />A stroke of brilliance gives you a major advantage with a skill
        despite your inexperience. Gain a +4 circumstance bonus to the
        triggering skill check.
      </span>
    ),
  },
  {
    id: 32,
    name: "Multitalented",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        You’ve learned to split your focus between multiple classes with ease.
        You gain a 2nd-level multiclass dedication feat (for more about
        multiclass archetypes, see Chapter 3), even if you normally couldn’t
        take another dedication feat until you take more feats from your current
        archetype.
        <br />
        <br />
        If you’re a half-elf, you don’t need to meet the feat’s ability score
        prerequisites.
      </span>
    ),
  },
  {
    id: 33,
    name: "Shory aeromancer",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Garundi, Mauxi, or Tian-Yae ethnicity.
        </span>
        <br />
        Your ancestors hailed from the flying cities of the Shory, and a few
        simple tricks have come down through the ages to you. You can cast
        4th-level fly on yourself as an innate arcane spell once per day.
      </span>
    ),
  },
  {
    id: 34,
    name: "Virtue forged tattoos",
    action: "",
    tags: ["human"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Ornate Tattoo.
        </span>
        <br />
        Your tattoos are a work of eldritch genius, a masterpiece of art, magic,
        and skin. Choose a 3rd-level arcane spell from the same school as your
        Arcane Tattoos, either a common spell or another to which you have
        access, including a lower-level spell heightened to 3rd level if you
        wish. You can cast that spell once per day as an innate arcane spell.
      </span>
    ),
  },
  {
    id: 35,
    name: "Advanced general training",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Over the course of adventuring, your adaptability has let you pick up
        numerous useful abilities. You gain a general feat of 7th level or
        lower. You must meet the feat’s prerequisites.
        <br />
        <br />
        <b>Special:</b> You can select this feat multiple times, choosing a
        different feat each time.
      </span>
    ),
  },
  {
    id: 36,
    name: "Bounce back",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You lose the dying condition.
        </span>
        You recover from near-death experiences with astounding resilience.
        Don’t increase the value of your wounded condition due to losing the
        dying condition.
      </span>
    ),
  },
  {
    id: 37,
    name: "Irriseny ice-witch",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Jadwiga ethnicity, wintertouched human heritage.
        </span>
        You can trace your direct descent from one of the Queens of Irrisen and
        thus from Baba Yaga herself. Your resistance to cold increases to 5 +
        half your level, and you can cast 5th-level wall of ice as an innate
        arcane spell once per day.
      </span>
    ),
  },
  {
    id: 38,
    name: "Shadow pact",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Nidalese ethnicity.
        </span>
        Thousands of years ago, your ancestors made a pact with Zon-Kuthon. He
        has not forgotten, even if you might wish he had. You can take 1 damage
        to mix blood and shadows to cast 5th-level creation as an innate divine
        spell. You can use this ability as often as you wish, but you can have
        only one such object in existence at a time. If the object encounters
        bright light, the spell ends and the object dissolves into shadows.
      </span>
    ),
  },
  {
    id: 39,
    name: "Shory Aerialist",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Garundi, Mauxi, or Tian-Yae ethnicity; Shory
          Aeromancer or ability to cast fly.
        </span>
        Unique in Golarion’s history, the Shory people developed fighting styles
        dedicated to combat in the air. You gain a +2 circumstance bonus to
        Acrobatics checks to Maneuver in Flight and a +5-foot status bonus to
        your fly Speed whenever you are flying via magic.
      </span>
    ),
  },
  {
    id: 40,
    name: "Stubborn persistance",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        Humans are renowned for their ability to persist through the most
        grueling of trials. When you would become fatigued, attempt a DC 17 flat
        check. On a success, you aren’t fatigued. If the fatigued condition has
        an underlying cause that you don’t address, such as lack of rest, you
        must attempt the check again at an interval determined by the GM until
        you fail the flat check or address the underlying cause.
      </span>
    ),
  },
  {
    id: 41,
    name: "Unconventional expertise",
    action: "",
    tags: ["human"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Unconventional Weaponry, trained in the weapon
          you chose for Unconventional Weaponry.
        </span>
        You’ve continued to advance your powers using your unconventional
        weapon. Whenever you gain a class feature that grants you expert or
        greater proficiency in certain weapons, you also gain that proficiency
        in the weapon you chose for Unconventional Weaponry.
      </span>
    ),
  },
  {
    id: 42,
    name: "Heroic presence",
    action: "one_action",
    tags: ["emotion", "human", "mental"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        The blood of heroes courses through your veins, and you inspire your
        allies to dig deep and find a new level of resolve. You grant up to 10
        willing creatures within 30 feet the effects of a 6th-level zealous
        conviction, though the effect automatically ends on a target if you give
        that target a command they would normally find repugnant. This action
        has the auditory trait or visual trait, depending on how you inspire
        your allies.
      </span>
    ),
  },
];

export const halfElfFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Rounded ears",
    action: "",
    tags: ["half-elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your elven lineage is subtle enough that you look barely different from
        other humans, and you’ve learned to use that to your advantage. You gain
        the trained proficiency rank in Deception (or another skill of your
        choice, if you were already trained in Deception). You gain a +4
        circumstance bonus to Impersonate checks to pretend you aren’t a
        half-elf. Observers are never granted circumstance bonuses to Perception
        checks due to you Impersonating a full-blooded human, and you never take
        circumstance penalties due to you Impersonating a full-blooded human.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of this feat or into this feat.
      </span>
    ),
  },
  {
    id: 2,
    name: "Sociable",
    action: "",
    tags: ["half-elf"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re extremely extroverted, and you often spend your time carousing or
        otherwise socializing. You are trained in Diplomacy (or another skill of
        your choice if you were already trained in Diplomacy), and you gain the
        Hobnobber skill feat.
      </span>
    ),
  },
  {
    id: 3,
    name: "Inspire imitation",
    action: "",
    tags: ["half-elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Your own actions inspire your allies to great achievements. Whenever you
        critically succeed at a skill check, you automatically qualify to use
        the Aid reaction when attempting to help an ally using the same skill,
        even without spending an action to prepare to do so.
      </span>
    ),
  },
  {
    id: 4,
    name: "Supernatural charm",
    action: "",
    tags: ["half-elf"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        The elven magic in your blood manifests as a force you can use to become
        more appealing or alluring. You can cast 1st-level charm as an arcane
        innate spell once per day.
      </span>
    ),
  },
  {
    id: 5,
    name: "Pinch time",
    action: "",
    tags: ["half-elf"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        One of your parents has a human life span and another an elven life
        span, with your own somewhere between. As a result, you have an unusual
        perspective on time, which you’ve learned to manifest to aid yourself in
        moments of stress. You gain haste as a 3rd-level arcane innate spell,
        though you can target only yourself. You can Cast this Spell once per
        day.
      </span>
    ),
  },
];

export const halfOrcFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Monstrous peacemaker",
    action: "",
    tags: ["half-orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your dual human and orc nature has given you a unique perspective,
        allowing you to bridge the gap between humans and the many intelligent
        creatures in the world that humans consider monsters. You gain a +1
        circumstance bonus to Diplomacy checks against non-humanoid intelligent
        creatures and against humanoids that are marginalized in human society
        (at the GM’s discretion, but typically at least including giants,
        goblins, kobolds, and orcs). You also gain this bonus on Perception
        checks to Sense the Motives of such creatures.
      </span>
    ),
  },
  {
    id: 2,
    name: "Orc sight",
    action: "",
    tags: ["half-orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> low-light vision.
        </span>
        <br />
        Your orc blood is strong enough to grant you the keen vision of your orc
        forebears. You gain darkvision, allowing you to see in darkness and dim
        light just as well as you can in bright light. However, in darkness, you
        see in black and white only.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of this feat or into this feat.
      </span>
    ),
  },
  {
    id: 3,
    name: "Overlooked mastermind",
    action: "",
    tags: ["half-orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Many consider half-orcs little more than dumb brutes. This is offensive
        to you, but it can occasionally be useful. You are trained in Deception
        (or another skill of your choice if you were already trained in
        Deception), and you gain a +2 circumstance bonus to Deception checks to
        Lie when specifically claiming ignorance and to Deception DCs against
        Sense Motive checks to uncover such lies.
      </span>
    ),
  },
  {
    id: 4,
    name: "Tusks",
    action: "",
    tags: ["half-orc"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Most half-orcs have visible tusks, but yours are particularly large and
        sharp, capable of gouging deep wounds. You gain a jaws unarmed attack
        that deals 1d6 piercing damage.
        <br />
        <br />
        <b>Special:</b> You can take this feat only at 1st level, and you can’t
        retrain out of this feat or into this feat.
      </span>
    ),
  },
];
