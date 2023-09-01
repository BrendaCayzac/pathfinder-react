import React from "react";
import Feat from "../components/Feat";

export interface Background {
  name: string;
  source: string;
  tags: Array<string>;
  abilityBoost: Array<string>;
  skillTraining: Array<string>;
  feat: string;
  description: React.JSX.Element;
}

export const backgrounds: Array<Background> = [
  {
    name: "Abadar's avenger",
    source: "Fists of the Ruby Phoenix: Player's guide",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Goka lore", "Religion"],
    feat: "Assurance",
    description: (
      <span>
        Hao Jin really has some nerve for a supposed disciple of Abadar. First,
        she dares to start a collection of trinkets in hopes of emulating the
        great Abadar’s unsurpassable First Vault. As if that weren’t enough, she
        also sets up a contest to give away her most powerful treasures to
        anyone who can throw a punch! Abadar hasn’t directly told you as much,
        per se, but surely this kind of hubris can’t sit well with your beloved
        deity, regardless of Hao Jin’s own supposed ties to the Master of the
        First Vault. At the very least, someone’s got to check out this shoddy
        imitation of the First Vault and write a report for the church of
        Abadar—and you’ve decided that someone is you.
        <br />
        <br />
        With or without the blessing of an actual priest of Abadar, you’ve taken
        it upon yourself to investigate Hao Jin’s “wondrous” vault by winning
        her Ruby Phoenix Tournament. You read a few flyers about the
        tournament’s home city and joined the first team that could handle your
        righteous zealotry, but any more preparation would be a waste of time.
        You clearly have the divine will of Abadar on your side (but again, no
        actual proof of this), which is all you’ll need to win this tournament
        and dispel any notions of Hao Jin’s ties to your patron deity.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in Religion and the Goka Lore skill. You gain the
        Assurance skill feat with Religion.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers). Special You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Able Carter",
    source: "Blood lords: Player's guide",
    tags: ["Uncommon"],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: [
      "Deception",
      "Diplomacy",
      "Graydirge lore",
      "Mechitar lore",
      "Yled lore",
    ],
    feat: "Charming liar or Hobnobber",
    description: (
      <span>
        Hao Jin really has some nerve for a supposed disciple of Abadar. First,
        she dares to start a collection of trinkets in hopes of emulating the
        great Abadar’s unsurpassable First Vault. As if that weren’t enough, she
        also sets up a contest to give away her most powerful treasures to
        anyone who can throw a punch! Abadar hasn’t directly told you as much,
        per se, but surely this kind of hubris can’t sit well with your beloved
        deity, regardless of Hao Jin’s own supposed ties to the Master of the
        First Vault. At the very least, someone’s got to check out this shoddy
        imitation of the First Vault and write a report for the church of
        Abadar—and you’ve decided that someone is you.
        <br />
        <br />
        With or without the blessing of an actual priest of Abadar, you’ve taken
        it upon yourself to investigate Hao Jin’s “wondrous” vault by winning
        her Ruby Phoenix Tournament. You read a few flyers about the
        tournament’s home city and joined the first team that could handle your
        righteous zealotry, but any more preparation would be a waste of time.
        You clearly have the divine will of Abadar on your side (but again, no
        actual proof of this), which is all you’ll need to win this tournament
        and dispel any notions of Hao Jin’s ties to your patron deity.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in Religion and the Goka Lore skill. You gain the
        Assurance skill feat with Religion.
        <Feat
          id={0}
          name="Charming liar"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              <br />
              Your charm allows you to win over those you lie to. When you get a
              critical success using the Lie action, the target’s attitude
              toward you improves by one step, as though you’d succeeded at
              using Diplomacy to Make an Impression. This works only once per
              conversation, and if you critically succeed against multiple
              targets using the same result, you choose one creature’s attitude
              to improve. You must be lying to impart seemingly important
              information, inflate your status, or ingratiate yourself, which
              trivial or irrelevant lies can’t achieve.
            </span>
          }
        />
        <Feat
          id={0}
          name="Hobnobber"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              You are skilled at learning information through conversation. The
              Gather Information exploration activity takes you half as long as
              normal (typically reducing the time to 1 hour). If you’re a master
              in Diplomacy and you Gather Information at the normal speed, when
              you attempt to do so and roll a critical failure, you get a
              failure instead. There is still no guarantee that a rumor you
              learn with Gather Information is accurate.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Academy dropout",
    source: "Secrets of magic",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Arcana", "Academia lore"],
    feat: "Dubious Knowledge",
    description: (
      <span>
        You were enrolled at a prestigious magical academy, but you’ve since
        dropped out. Maybe there was a momentous incident, maybe you had to
        return to other responsibilities, or perhaps it was just too much for
        you. Whatever the case, your exit from the academy has shaped your life
        as much as your entrance and led you to a life of adventure.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Arcana and Academia Lore. You gain the Dubious
        Knowledge skill feat.
        <Feat
          id={0}
          name="Dubious Knowledge"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in a skill with the Recall
                Knowledge action.
              </span>
              <br />
              You’re a treasure trove of information, but not all of it comes
              from reputable sources. When you fail (but don’t critically fail)a
              Recall Knowledge check using any skill, you learn a bit of true
              knowledge and a bit of erroneous knowledge, but you don’t have any
              way to differentiate which is which.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Acolyte",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Religion", "Scribing lore"],
    feat: "Student of the Canon",
    description: (
      <span>
        You spent your early days in a religious monastery or cloister. You may
        have traveled out into the world to spread the message of your religion
        or because you cast away the teachings of your faith, but deep down
        you’ll always carry within you the lessons you learned.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Religion skill and the Scribing Lore skill. You
        gain the Student of the Canon skill feat.
        <Feat
          id={0}
          name="Student of the Canon"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Religion.
              </span>
              <br />
              You’ve researched many faiths enough to recognize notions about
              them that are unlikely to be true. If you roll a critical failure
              at a Religion check to Decipher Writing of a religious nature or
              to Recall Knowledge about the tenets of faiths, you get a failure
              instead. When attempting to Recall Knowledge about the tenets of
              your own faith, if you roll a failure, you get a success instead,
              and if you roll a success, you get a critical success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Acrobat",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Acrobatics", "Circus Lore"],
    feat: "Steady Balance",
    description: (
      <span>
        In a circus or on the streets, you earned your pay by performing as an
        acrobat. You might have turned to adventuring when the money dried up,
        or simply decided to put your skills to better use.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Dexterity, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Acrobatics skill and the Circus Lore skill. You
        gain the Steady Balance skill feat.
        <Feat
          id={0}
          name="Steady Balance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Acrobatics.
              </span>
              <br />
              You can keep your balance easily, even in adverse conditions.
              Whenever you roll a success using the Balance action, you get a
              critical success instead. You’re not flat-footed while attempting
              to Balance on narrow surfaces and uneven ground. Thanks to your
              incredible balance, you can attempt an Acrobatics check instead of
              a Reflex save to Grab an Edge.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Auidara Seeker",
    source: "Broken Promises",
    tags: ["rare"],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Arcana", "Portal Lore"],
    feat: "Quick Identification",
    description: (
      <span>
        The aiudara of Alseta’s Ring have become more well known, and you are
        interested in learning more about them.
        <br />
        <br />
        Choose two ability boosts. One must be in Intelligence or Wisdom, and
        the other is a free ability boost.
        <br />
        <br />
        You’re trained in the Arcana skill and the Portal Lore skill. You gain
        the Quick Identification skill feat.
        <Feat
          id={0}
          name="Quick Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Arcana, Nature, Occultism or
                Religion.
              </span>
              <br />
              You can Identify Magic swiftly. You take only 1 minute when using
              Identify Magic to determine the properties of an item, ongoing
              effect, or location, rather than 10 minutes. If you’re a master,
              it takes a 3-action activity, and if you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Alkenstar Outlaw",
    source: "Guns & Gears",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Dexterity", "Constitution"],
    skillTraining: ["Thievery", "Underworld Lore"],
    feat: "Subtle Theft",
    description: (
      <span>
        You’re an outlaw whose first crime was stealing the guns from
        Alkenstar’s Gunworks which allowed you to commence a crime spree of epic
        proportions. You don’t know where your road ends, but it’s probably
        going to be a bloody affair. The life of an adventurer might even be a
        relief compared to a life forever on the run from Alkenstar authorities
        and their allies.
        <br />
        <br />
        Choose two ability boosts. One boost must be to Dexterity or
        Constitution, and one is a free ability boost.
        <br />
        <br />
        You’re trained in Thievery and Underworld Lore. You gain the Subtle
        Theft skill feat.
        <Feat
          id={0}
          name="Subtle Theft"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Thievery.
              </span>
              <br />
              When you successfully Steal something, observers (creatures other
              than the creature you stole from) take a –2 circumstance penalty
              to their Perception DCs to detect your theft. Additionally, if you
              first Create a Diversion using Deception, taking a single Palm an
              Object or Steal action doesn’t end your undetected condition.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Alkenstar Sojourner",
    source: "Guns & Gears",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Society", "Engineering Lore"],
    feat: "Streetwise",
    description: (
      <span>
        You came to Alkenstar because you heard they had guns, but you stayed
        because of the atmosphere. Or the guns. Either way, journalism and
        scientific curiosity opened the door to a life of adventure. Now you
        continue to adventure in the Alkenstar area, using your skills to deal
        with whatever situations present themselves.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Society and Engineering Lore. You gain the Streetwise
        skill feat.
        <Feat
          id={0}
          name="Streetwise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You know about life on the streets and feel the pulse of your
              local settlement. You can use your Society modifier instead of
              your Diplomacy modifier to Gather Information. In any settlement
              you frequent regularly, you can use the Recall Knowledge action
              with Society to know the same sorts of information that you could
              discover with Diplomacy to Gather Information. The DC is usually
              significantly higher, but you know the information without
              spending time gathering it. If you fail to recall the information,
              you can still subsequently attempt to Gather Information normally.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Alkenstar Tinker",
    source: "Lost Omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Crafting", "Engineering Lore"],
    feat: "Alchemical Crafting",
    description: (
      <span>
        Your dedication to the scientific inquiry of your native Alkenstar
        provides great insight into mechanical and chemical innovation.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Engineering Lore skill. You
        gain the Alchemical Crafting skill feat.
        <Feat
          id={0}
          name="Alchemical Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              You can use the Craft activity to create alchemical items. When
              you select this feat, you immediately add the formulas for four
              common 1st-level alchemical items to your formula book.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Alloy smith",
    source: "Rage of elements",
    tags: [],
    abilityBoost: ["Free", "Strength", "Intelligence"],
    skillTraining: ["Crafting", "Plane of Metal Lore"],
    feat: "Specialty Crafting",
    description: (
      <span>
        Blacksmithing might be an ancient profession, but you are its cutting
        edge. You’ve studied the properties of different metals, experimented
        with them by combining them, exposing them to different elements and
        processes, and have even delved into the metaphysical nature of metal in
        your quest to master it. You might have taken up adventuring to acquire
        more funding and materials or to test your designs.
        <br />
        <br />
        Choose two attribute boosts. One must be to Strength or Intelligence,
        and one is a free attribute boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Plane of Metal Lore skill.
        You gain the Specialty Crafting skill feat with the blacksmithing
        specialty.
        <Feat
          id={0}
          name="Specialty Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              Your training focused on Crafting one particular kind of item.
              Select one of the specialties listed below; you gain a +1
              circumstance bonus to Crafting checks to Craft items of that type.
              If you are a master in Crafting, this bonus increases to +2. If
              it’s unclear whether the specialty applies, the GM decides. Some
              specialties might apply only partially. For example, if you were
              making a morningstar and had specialty in woodworking, the GM
              might give you half your bonus because the item requires both
              blacksmithing and woodworking.
              <b>Blacksmithing:</b> Durable metal goods, including metal armor.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Amnesiac",
    source: "Advanced player's guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Free", "Free"],
    skillTraining: [],
    feat: "—",
    description: (
      <span>
        Your background is… well… honestly, you can’t remember! You might have
        inklings deep within your mind, undercurrents of unusual emotions or
        unexpected responses to certain people or situations, but ultimately you
        don’t know who you once were. You might be adventuring specifically to
        help discover yourself. It’s up to you and the GM how to handle the
        truth of your character’s backstory. You could leave it to the GM so
        it’s a secret, work together with the GM, or even choose to leave it
        undecided until later. In any case, you and your GM should determine a
        few noteworthy details about your character or their belongings to get
        the first clues to your past.
        <br />
        <br />
        You gain three free ability boosts. You choose two, and the GM chooses
        the third based on their first inklings of your character’s possible
        history.
      </span>
    ),
  },
  {
    name: "Animal whisperer",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Nature", "Lore"],
    feat: "Train Animal",
    description: (
      <span>
        You have always felt a connection to animals, and it was only a small
        leap to learn to train them. As you travel, you continuously encounter
        different creatures, befriending them along the way.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Nature skill and a Lore skill related to one
        terrain inhabited by animals you like (such as Plains Lore or Swamp
        Lore). You gain the Train Animal skill feat.
        <Feat
          id={0}
          name="Train Animal"
          tags={["downtime", "general", "manipulate", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              You spend time teaching an animal to do a certain action. You can
              either select a basic action the animal already knows how to do
              (typically those listed in the Command an Animal action) or
              attempt to teach the animal a new basic action. The GM determines
              the DC of any check required and the amount of time the training
              takes (usually at least a week). It’s usually impossible to teach
              an animal a trick that uses critical thinking. If you’re expert,
              master, or legendary in Nature, you might be able to train more
              unusual creatures, at the GM’s discretion.
              <br />
              <br />
              <b>Success"</b> The animal learns the action. If it was an action
              the animal already knew, you can Command the Animal to take that
              action without attempting a Nature check. If it was a new basic
              action, add that action to the actions the animal can take when
              Commanded, but you must still roll.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Anti-magical",
    source: "Secrets of magic",
    tags: ["rare"],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Lore"],
    feat: "—",
    description: (
      <span>
        Magic has never worked quite right around you. Perhaps you have become a
        magic-user in spite of that, or perhaps you use your unique ability to
        fight magic-users.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in a Lore skill of your choice, though it can’t be about
        a magical subject (as determined by the GM if it’s unclear). Whenever
        you would be affected by magic, even your own magic or that of an ally,
        the originator of the effect must attempt a DC 3 flat check. On a
        failure, the magic doesn’t affect you (though it still has its normal
        effects on anyone else). On a success, the magic affects you and there
        is no need to attempt further flat checks for the same magical effect,
        even if it affects you again later.
      </span>
    ),
  },
  {
    name: "Anti-tech activist",
    source: "Guns & gears",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Intimidation", "Guild Lore"],
    feat: "Coercion skill",
    description: (
      <span>
        You’ve seen the sorts of things that technology brings—polluted
        environments, workers put out of their jobs or horribly injured, and the
        slow erosion of society—and you’ve vowed to inform the larger world of
        these ills. You do so with long, impassioned speeches on street corners
        and village squares and by talking personally with the heads of various
        guilds. Adventuring into the wider world could help spread your message
        even farther.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Guild Lore skill. You
        gain the Group Coercion skill feat.
        <Feat
          id={0}
          name="Group Coercion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              When you Coerce, you can compare your Intimidation check result to
              the Will DCs of two targets instead of one. It’s possible to get a
              different degree of success for each target. The number of targets
              you can Coerce in a single action increases to four if you’re an
              expert, 10 if you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Archaeologist",
    source: "Lost omens: Pathfinder Society guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Society", "Architecture Lore"],
    feat: "Additional Lore",
    description: (
      <span>
        You’ve excavated enough sites to know that ancient civilizations aren’t
        lost; they’re merely buried and waiting for the right scholar to unearth
        them and tell their story. You might have worked as a laborer or local
        guide before learning formal archaeological techniques.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Architecture Lore skill. You
        gain the Additional Lore skill feat related to an ancient culture or the
        history of a culture you’ve studied (such as Azlanti Lore or Osirian
        History Lore).
        <Feat
          id={0}
          name="Additional Lore"
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
              <b>Special:</b> You can select this feat more than once. Each time
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
    name: "Artisan",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Strength", "Intelligence"],
    skillTraining: ["Crafting", "Guild Lore"],
    feat: "Specialty Crafting",
    description: (
      <span>
        As an apprentice, you practiced a particular form of building or
        crafting, developing specialized skill. You might have been a
        blacksmith’s apprentice toiling over the forge for countless hours, a
        young tailor sewing garments of all kinds, or a shipwright shaping the
        hulls of ships.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Guild Lore skill. You gain
        the Specialty Crafting skill feat.
        <Feat
          id={0}
          name="Specialty Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              Your training focused on Crafting one particular kind of item.
              Select one of the specialties listed below; you gain a +1
              circumstance bonus to Crafting checks to Craft items of that type.
              If you are a master in Crafting, this bonus increases to +2. If
              it’s unclear whether the specialty applies, the GM decides. Some
              specialties might apply only partially. For example, if you were
              making a morningstar and had specialty in woodworking, the GM
              might give you half your bonus because the item requires both
              blacksmithing and woodworking.
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Specialty</th>
                    <th>Applicable items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alchemy*</td>
                    <td>Alchemical items such as elixirs</td>
                  </tr>
                  <tr>
                    <td>Artistry</td>
                    <td>Fine art, including jewelry</td>
                  </tr>
                  <tr>
                    <td>Blacksmithing</td>
                    <td>Durable metal goods, including metal armor</td>
                  </tr>
                  <tr>
                    <td>Bookmaking</td>
                    <td>Books and paper</td>
                  </tr>
                  <tr>
                    <td>Glassmaking</td>
                    <td>Glass, including glassware and windows</td>
                  </tr>
                  <tr>
                    <td>Leatherworking</td>
                    <td>Leather goods, including leather armor</td>
                  </tr>
                  <tr>
                    <td>Pottery</td>
                    <td>Ceramic goods</td>
                  </tr>
                  <tr>
                    <td>Shipbuilding</td>
                    <td>Ships and boats</td>
                  </tr>
                  <tr>
                    <td>Stonemasonry</td>
                    <td>Stone goods and structures</td>
                  </tr>
                  <tr>
                    <td>Tailoring</td>
                    <td>Clothing</td>
                  </tr>
                  <tr>
                    <td>Weaving</td>
                    <td>Textiles, baskets, and rugs</td>
                  </tr>
                  <tr>
                    <td>Woodworking</td>
                    <td>Wooden goods and structures</td>
                  </tr>
                  <tr>
                    <td>
                      * You must have the Alchemical Crafting skill feat to
                      Craft alchemical items
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Artist",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Crafting", "Art Lore"],
    feat: "Specialty Crafting",
    description: (
      <span>
        Your art is your greatest passion, whatever form it takes. Adventuring
        might help you find inspiration, or simply be a way to survive until you
        become a world-famous artist.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Art Lore skill. You gain
        the Specialty Crafting skill feat.
        <Feat
          id={0}
          name="Specialty Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              Your training focused on Crafting one particular kind of item.
              Select one of the specialties listed below; you gain a +1
              circumstance bonus to Crafting checks to Craft items of that type.
              If you are a master in Crafting, this bonus increases to +2. If
              it’s unclear whether the specialty applies, the GM decides. Some
              specialties might apply only partially. For example, if you were
              making a morningstar and had specialty in woodworking, the GM
              might give you half your bonus because the item requires both
              blacksmithing and woodworking.
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Specialty</th>
                    <th>Applicable items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alchemy*</td>
                    <td>Alchemical items such as elixirs</td>
                  </tr>
                  <tr>
                    <td>Artistry</td>
                    <td>Fine art, including jewelry</td>
                  </tr>
                  <tr>
                    <td>Blacksmithing</td>
                    <td>Durable metal goods, including metal armor</td>
                  </tr>
                  <tr>
                    <td>Bookmaking</td>
                    <td>Books and paper</td>
                  </tr>
                  <tr>
                    <td>Glassmaking</td>
                    <td>Glass, including glassware and windows</td>
                  </tr>
                  <tr>
                    <td>Leatherworking</td>
                    <td>Leather goods, including leather armor</td>
                  </tr>
                  <tr>
                    <td>Pottery</td>
                    <td>Ceramic goods</td>
                  </tr>
                  <tr>
                    <td>Shipbuilding</td>
                    <td>Ships and boats</td>
                  </tr>
                  <tr>
                    <td>Stonemasonry</td>
                    <td>Stone goods and structures</td>
                  </tr>
                  <tr>
                    <td>Tailoring</td>
                    <td>Clothing</td>
                  </tr>
                  <tr>
                    <td>Weaving</td>
                    <td>Textiles, baskets, and rugs</td>
                  </tr>
                  <tr>
                    <td>Woodworking</td>
                    <td>Wooden goods and structures</td>
                  </tr>
                  <tr>
                    <td>
                      * You must have the Alchemical Crafting skill feat to
                      Craft alchemical items
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Aspiring free captain",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Intimidation", "Sailing Lore"],
    feat: "Group Coercion",
    description: (
      <span>
        You seek to join the Free Captains of the Shackles and have learned
        everything you need to know about sailing and bossing people around. Now
        you just need a crew and a ship.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Sailing Lore skill. You
        gain the Group Coercion skill feat.
        <Feat
          id={0}
          name="Group Coercion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              When you Coerce, you can compare your Intimidation check result to
              the Will DCs of two targets instead of one. It’s possible to get a
              different degree of success for each target. The number of targets
              you can Coerce in a single action increases to four if you’re an
              expert, 10 if you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Aspiring river monarch",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Society", "Politics Lore"],
    feat: "Courtly Graces",
    description: (
      <span>
        New realms rise constantly in the River Kingdoms, and you intend to lead
        one of them. Making your reign last, however, will require both strength
        and grace.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You're trained in the Society skill and the Politics Lore skill. You
        gain the Courtly Graces skill feat.
        <Feat
          id={0}
          name="Courtly Graces"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You were raised among the nobility or have learned proper
              etiquette and bearing, allowing you to present yourself as a noble
              and play games of influence and politics. You can use Society to
              Make an Impression on a noble, as well as with Impersonate to
              pretend to be a noble if you aren’t one. If you want to
              impersonate a specific noble, you still need to use Deception to
              Impersonate normally, and to Lie when necessary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Astrologer",
    source: "Secrets of Magic",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Occultism", "Astrology Lore"],
    feat: "Oddity Identification",
    description: (
      <span>
        Astrologers look to the stars for signs and portents, using their
        positions to chart courses for those living beneath them. As the
        celestial spheres move, so does fate itself. You studied the stars and
        learned to divine your path based on their guidance. Whether the stars
        directly called you to a life of adventure or you use the stars to guide
        your wanderlust, you’re living out the stars’ guidance in a life of
        adventure.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Occultism and Astrology Lore. You gain the Oddity
        Identification skill feat.
        <Feat
          id={0}
          name="Oddity Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Occultism.
              </span>
              <br />
              You have a sense for spells that twist minds or reveal secrets.
              You gain a +2 circumstance bonus to Occultism checks to Identify
              Magic with the mental, possession, prediction, or scrying traits.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Astrological Augur",
    source: "Lost omens: travel guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Astrology Lore"],
    feat: "—",
    description: (
      <span>
        During your formative years, you learned the stars are a gateway to
        mystical power or glimpses into the future. Perhaps you grew up
        surrounded by Iruxi culture or were raised in one of the remaining
        Lirgeni sanctuaries. You’ve studied the constellations, using their
        alignment to predict fortune (or misfortune) and gaining magical powers
        unlike any of the other astrologers you know. Your readings might
        primarily focus on the Cosmic Caravan, or perhaps you use other stars to
        guide you, like the zodiac of Tian Xia.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in Astrology Lore. You can cast augury as a divine innate
        spell once per week, and the spell’s effects can see up to 1 hour in the
        future rather than 30 minutes.
      </span>
    ),
  },
  {
    name: "Attention addict",
    source: "Fists of the Ruby Phoenix: Player's guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Performance", "Gladiatorial Lore"],
    feat: "Impressive Performance",
    description: (
      <span>
        A roaring crowd chanting your name. Your face plastered all over the
        city. Fawning fans begging for your autograph. Jealous rivals. Endless
        fame. The promise of all this and more is what drove you to enter this
        year’s Ruby Phoenix Tournament, and with your prodigious star power it’s
        no wonder why they selected you for the prequalifier on Danger Island.
        You’ve got champion stamped all over you. Obviously, the organizers knew
        a winner when they saw one.
        <br />
        <br />
        It’s already clear that you’ll be named Ruby Phoenix Champion—the
        challenges leading up to your prize ceremony are mere formalities, but
        you’re happy to indulge the impassioned masses. After all, the people
        want a show, and what kind of celebrity would you be if you denied them?
        You might even deign to compete in some fights, too, as long as your
        hair doesn’t get mussed.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in Performance and the Gladiatorial Lore skill. You gain
        the Impressive Performance skill feat.
        <Feat
          id={0}
          name="Impressive Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              <br />
              Your performances inspire admiration and win you fans. You can
              Make an Impression using Performance instead of Diplomacy.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Atteran rancher",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Nature", "Animal Lore"],
    feat: "Train Animal",
    description: (
      <span>
        You grew up breeding and training the famous horses of the Atteran
        Ranches in northern Nidal. You may even be sympathetic to the Desnan
        dissidents who hide there from the Umbral Court.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Dexterity, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Nature skill and the Animal Lore skill. You gain
        the Train Animal skill feat.
        <Feat
          id={0}
          name="Train Animal"
          tags={["downtime", "general", "manipulate", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Nature.
              </span>
              <br />
              You spend time teaching an animal to do a certain action. You can
              either select a basic action the animal already knows how to do
              (typically those listed in the Command an Animal action) or
              attempt to teach the animal a new basic action. The GM determines
              the DC of any check required and the amount of time the training
              takes (usually at least a week). It’s usually impossible to teach
              an animal a trick that uses critical thinking. If you’re expert,
              master, or legendary in Nature, you might be able to train more
              unusual creatures, at the GM’s discretion.
              <br />
              <br />
              <b>Success:</b> The animal learns the action. If it was an action
              the animal already knew, you can Command the Animal to take that
              action without attempting a Nature check. If it was a new basic
              action, add that action to the actions the animal can take when
              Commanded, but you must still roll.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Back-alley doctor",
    source: "Guns & Gears",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Medicine", "Underworld Lore"],
    feat: "Risky Surgery",
    description: (
      <span>
        You’re the medic many turn to when a more official clinic or healer
        might not be available. You may specialize in stitching up bullet wounds
        or have a standing, confidential deal with a criminal syndicate to
        provide your services any time of day or night. In either case, you’ve
        perhaps turned to the adventuring life because a former client is
        unhappy with your work or members of the local constabulary have been
        asking too many questions.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill and the Underworld Lore skill. You
        gain the Risky Surgery skill feat.
        <Feat
          id={0}
          name="Risky Surgery"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Medicine.
              </span>
              <br />
              Your surgery can bring a patient back from the brink of death, but
              might push them over the edge. When you Treat Wounds, you can deal
              1d8 slashing damage to your patient just before applying the
              effects of Treat Wounds. If you do, you gain a +2 circumstance
              bonus to your Medicine check to Treat Wounds, and if you roll a
              success, you get a critical success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Bandit",
    source: "Advanced player's guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Intimidation", "Lore"],
    feat: "Group Coercion",
    description: (
      <span>
        Your past includes no small amount of rural banditry, robbing travelers
        on the road and scraping by. Whether your robbery was sanctioned by a
        local noble or you did so of your own accord, you eventually got caught
        up in the adventuring life. Now, adventure is your stock and trade, and
        years of camping and skirmishing have only helped.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and a Lore skill related to the
        terrain you worked in (such as Desert Lore or Plains Lore). You gain the
        Group Coercion skill feat.
        <Feat
          id={0}
          name="Group Coercion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              When you Coerce, you can compare your Intimidation check result to
              the Will DCs of two targets instead of one. It’s possible to get a
              different degree of success for each target. The number of targets
              you can Coerce in a single action increases to four if you’re an
              expert, 10 if you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Banished Brighte",
    source: "Outlaws of Alkenstar: Player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Religion", "Brigh Lore"],
    feat: "Quick Identification",
    description: (
      <span>
        Once, you were a dedicated and important priest of Brigh, goddess of
        clockwork and invention, based out of the largest church to your deity,
        the Temple of Brigh in Alkenstar. Here, you made important discoveries
        in the annals of your religion’s canon and furthered the Bronze Lady’s
        agendas of innovation and creation. Your future seemed bright, and you
        predicted that it was only a matter of time until you ascended to the
        rank of primary cog or, someday, grand cog.
        <br />
        <br />
        Then, your years of devout service were undone in an instant. A man
        named Ambrost Mugland came to the Temple and demanded not only access to
        the religious formulas you’d been uncovering, but exclusive rights to
        the precious knowledge. When you refused, Mugland sent word to the
        church’s leaders that you’d been meddling in heretical doctrine. He also
        implicated you in the theft of church funds that had mysteriously gone
        missing as of late. Sure enough, you found yourself being asked to hand
        in your robes. Your church colleagues didn’t turn you in, but they told
        you in no uncertain terms that you wouldn’t be able to find sanctuary
        for your alleged crimes in the halls of the Temple of Brigh.
        <br />
        <br />
        On the run and with nowhere to turn, your faith has been thoroughly
        tested, though so far you’ve remained true to your religion and
        maintained your sacred skills and divine powers. It’s unclear what the
        Bronze Lady has in store for you, but at least one thing’s for certain:
        Ambrost Mugland will pay for what he did.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Religion skill and the Brigh Lore skill. You gain
        the Quick Identification skill feat.
        <Feat
          id={0}
          name="Quick Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Arcana, Nature, Occultism or
                Religion.
              </span>
              <br />
              You can Identify Magic swiftly. You take only 1 minute when using
              Identify Magic to determine the properties of an item, ongoing
              effect, or location, rather than 10 minutes. If you’re a master,
              it takes a 3-action activity, and if you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Barber",
    source: "Advanced player's guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Wisdom"],
    skillTraining: ["Medicine", "Surgery Lore"],
    feat: "Risky Surgery",
    description: (
      <span>
        Haircuts, dentistry, bloodletting, and surgery—if it takes a steady hand
        and a razor, you do it. You may have taken to the road to expand your
        skills, or to test yourself against a world that leaves your patients so
        battered and bruised.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Wisdom, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill and the Surgery Lore skill. You
        gain the Risky Surgery skill feat.
        <Feat
          id={0}
          name="Risky Surgery"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Medicine.
              </span>
              <br />
              Your surgery can bring a patient back from the brink of death, but
              might push them over the edge. When you Treat Wounds, you can deal
              1d8 slashing damage to your patient just before applying the
              effects of Treat Wounds. If you do, you gain a +2 circumstance
              bonus to your Medicine check to Treat Wounds, and if you roll a
              success, you get a critical success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Barkeep",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Diplomacy", "Alcohol Lore"],
    feat: "Hobnobber",
    description: (
      <span>
        You have five specialties: hefting barrels, drinking, polishing steins,
        drinking, and drinking. You worked in a bar, where you learned how to
        hold your liquor and rowdily socialize.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Alcohol Lore skill. You
        gain the Hobnobber skill feat.
        <Feat
          id={0}
          name="Hobnobber"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              You are skilled at learning information through conversation. The
              Gather Information exploration activity takes you half as long as
              normal (typically reducing the time to 1 hour). If you’re a master
              in Diplomacy and you Gather Information at the normal speed, when
              you attempt to do so and roll a critical failure, you get a
              failure instead. There is still no guarantee that a rumor you
              learn with Gather Information is accurate.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Barrister",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Diplomacy", "Legal Lore"],
    feat: "Group Impression",
    description: (
      <span>
        Piles of legal manuals, stern teachers, and experience in the courtroom
        have instructed you in legal matters. You’re capable of mounting a
        prosecution or defense in court, and you tend to keep abreast of local
        laws, as you never can tell when you might need to know them on short
        notice.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Legal Lore skill. You gain
        the Group Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Beast blessed",
    source: "Lost omens: Firebrand",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity", "Wisdom"],
    skillTraining: ["Survival"],
    feat: "—",
    description: (
      <span>
        You once freed a magical beast from captivity and, whether it was
        intentional or a byproduct of another action, the grateful creature
        bestowed a blessing of freedom upon you. Your blessing manifests
        physically, perhaps as elongated canines, fingernails that grow to a
        sharp point, excess body hair, or some other feature. This physical
        manifestation is cosmetic and provides no benefit.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Wisdom, and one
        is a free ability boost.
        <br />
        <br />
        You are trained in the Survival skill. You gain the Bestial Clarity
        reaction.
        <br />
        <br />
        Bestial Clarity{" "}
        <img src={require("../assets/img/reaction.png")} alt="reaction icon" />
        <br />
        <br />
        <b>Frequency:</b> once per day; <b>Trigger:</b> You fail a saving throw
        against an enchantment effect; Effect Your bestial manifestation becomes
        more pronounced, and your mind gains a flash of clarity as your
        instincts take over. You can reroll the triggering saving throw with a
        +2 circumstance bonus, but you must use the new result. This is a
        fortune effect.
      </span>
    ),
  },
  {
    name: "Bekyar destroyer",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Diplomacy", "Abyss Lore"],
    feat: "Group Impression",
    description: (
      <span>
        Though many Bekyars worship demons, you seek to pave a different path
        for yourself and your kindred, while also attempting to change other
        Mwangi’s treatment of your culture.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Abyss Lore skill. You gain
        the Group Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Belkzen slayer",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Intimidation", "Orc Lore"],
    feat: "Intimidating Glare",
    description: (
      <span>
        You are a fearsome warrior from the Hold of Belkzen, and your clan
        counts on you for support, counsel, and defense. With the rising threat
        of the Whispering Tyrant threatening the safety of your home, you must
        not let your people down.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Orc Lore skill. You
        gain the Intimidating Glare skill feat.
        <Feat
          id={0}
          name="Intimidating Glare"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              You can Demoralize with a mere glare. When you do, Demoralize
              loses the auditory trait and gains the visual trait, and you don’t
              take a penalty if the creature doesn’t understand your language.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Belllower agent",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Stealth", "Underworld Lore"],
    feat: "Intimidating Glare",
    description: (
      <span>
        You joined a secret society dedicated to freeing halfling slaves, most
        likely from the cruelty of Chelish reign. You know how to smuggle people
        in and out of countries.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Stealth skill and the Underworld Lore skill. You
        gain the Experienced Smuggler skill feat.
        <Feat
          id={0}
          name="Experienced Smuggler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Stealth.
              </span>
              <br />
              You often smuggle things past the authorities. When the GM rolls
              your Stealth check to see if a passive observer notices a small
              item you have concealed, the GM uses the number rolled or
              10—whichever is higher—as the result of your die roll, adding it
              to your Stealth modifier to determine your Stealth check result.
              If you’re a master in Stealth, the GM uses the number rolled or
              15, and if you’re legendary in Stealth, you automatically succeed
              at hiding a small concealed item from passive observers. This
              provides no benefits when a creature attempts a Perception check
              while actively searching you for hidden items. Due to your
              smuggling skill, you’re more likely to find more lucrative
              smuggling jobs when using Underworld Lore to Earn Income.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Bibliophilee",
    source: "Ruins of Gauntlight, AbominationVaults: Player's Guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Arcana", "Library Lore"],
    feat: "Arcane Sense",
    description: (
      <span>
        You love few things more than a good book, and as a result, Odd Stories
        is your favorite shop in Otari. The bookseller Morlibint supplies you
        with fiction, anthologies, and other delightful reads, and he’s always
        eager to discuss his latest finds with you. You know that imagination is
        the greatest magic, but a working knowledge of actual magic helps, too.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost. b<br />r You’re trained in the Arcana skill
        and the Library Lore skill. You gain the Arcane Sense skill feat.
        <Feat
          id={0}
          name="Arcane Sense"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Arcana.
              </span>
              <br />
              Your study of magic allows you to instinctively sense its
              presence. You can cast 1st-level detect magic at will as an arcane
              innate spell. If you’re a master in Arcana, the spell is
              heightened to 3rd level; if you’re legendary, it is heightened to
              4th level.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Black market smuggler",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Stealth", "Underworld Lore"],
    feat: "Experienced Smuggler",
    description: (
      <span>
        You know how to work the less-than-legal side of the region’s markets
        and know how to slip contraband past the authorities.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Stealth skill and the Underworld Lore skill. You
        gain the Experienced Smuggler skill feat.
        <Feat
          id={0}
          name="Experienced Smuggler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Stealth.
              </span>
              <br />
              You often smuggle things past the authorities. When the GM rolls
              your Stealth check to see if a passive observer notices a small
              item you have concealed, the GM uses the number rolled or
              10—whichever is higher—as the result of your die roll, adding it
              to your Stealth modifier to determine your Stealth check result.
              If you’re a master in Stealth, the GM uses the number rolled or
              15, and if you’re legendary in Stealth, you automatically succeed
              at hiding a small concealed item from passive observers. This
              provides no benefits when a creature attempts a Perception check
              while actively searching you for hidden items. Due to your
              smuggling skill, you’re more likely to find more lucrative
              smuggling jobs when using Underworld Lore to Earn Income.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Blessed",
    source: "Advanced player's guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Lore"],
    feat: "—",
    description: (
      <span>
        You have been blessed by a divinity. For an unknown reason, and
        irrespective of your actual beliefs, a deity has granted you a boon to
        use for good or ill. Your blessing grants wisdom and insight to aid you
        in your struggles. You may or may not even know the identity of the
        being who blessed you, and the blessing might come with a cost you
        discover later on.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You are trained in a Lore skill associated with the deity who blessed
        you (such as Shelyn Lore) if you know their identity, or else in a Lore
        skill of the GM’s choice if you don’t. Either you can cast guidance as a
        divine innate spell at will, or you gain a similar blessing determined
        by the GM.
      </span>
    ),
  },
  {
    name: "Bonuwat wavetouched",
    source: "Lost omens: World guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Wisdom"],
    skillTraining: ["Athletics", "Ocean Lore"],
    feat: "Underwater Marauder",
    description: (
      <span>
        You are a child of the Bonuwat people, and the sea’s salt flows through
        your veins. You’ve taken to sailing and swimming gracefully and with
        ease, earning you the honorific “wavetouched.”
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Ocean Lore skill. You gain
        the Underwater Marauder skill feat.
        <Feat
          id={0}
          name="Underwater Marauder"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You’ve learned to fight underwater. You are not flat-footed while
              in water, and you don’t take the usual penalties for using a
              bludgeoning or slashing melee weapon in water.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Bookish providence",
    source: "Stolen fate: player's guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Intelligence"],
    skillTraining: ["Academia Lore"],
    feat: "Multilingual",
    description: (
      <span>
        You have always been interested in knowledge and learned to read from a
        very young age. Perhaps one or both of your parents were librarians or
        scholars, or maybe the local bookshop or university was a place you felt
        safe at. Or, you could simply have been an avid reader of stories.
        Whatever the case, books have always brought you peace and comfort, and
        you try to never travel without a few packed away in your belongings.
        Since not every book is written in the same language, you’ve also picked
        up a few extra languages along the way. Your interest in the written
        word hasn’t always been a positive, though. You might have been bullied
        or tormented by your peers for being more interested in reading than
        other pursuits. Or maybe you had some unsettling experiences with
        misinformation or knowledge that sent you in pursuit of something
        dangerous. Try to come up with one event from your past where your
        pursuit of books or the testing of knowledge learned from them placed
        you in danger, but also keep in mind that you managed to escape this
        danger because of what you’ve learned from your voracious reading
        habits!
        <br />
        <br />
        This background is associated with the suit of Books.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence, and one is a
        free ability boost.
        <br />
        <br />
        You gain the Multilingual skill feat, are trained in the Academia Lore
        skill, and gain the following free action.
        <br />
        <br />
        Recall Under Pressure{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one action icon"
        />{" "}
        (fortune)
        <br />
        <br />
        <b>Trigger:</b> You attempt to Recall Knowledge during a combat;
        <b>Frequency:</b> once per day; Effect Rather than roll a different
        skill to Recall Knowledge during the fight, your memory flashes back to
        something you read in some old book. You instead attempt this Recall
        Knowledge check with an Academia Lore check. If the information you
        recall ends up being helpful and positive in an obvious way before you
        take your next turn, draw a random harrow card. You gain a +1 status
        bonus to saving throws for the remainder of the combat encounter as your
        morale soars or a +2 status bonus if the card you drew was from the suit
        of Books.
      </span>
    ),
  },
  {
    name: "Bookkepper",
    source: "Advanced player's guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Society", "Accounting Lore"],
    feat: "Eye for Numbers",
    description: (
      <span>
        You ran the numbers on a large farm, for a merchant’s endeavors, or with
        a major guild in the city. You kept track of expenses, payroll, profits,
        and anything else that had to do with money, for better or worse. If
        better, you might be adventuring to learn how others ply this trade. If
        worse, you may be fleeing from impending consequences, in the hope that
        no one finds you.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Accounting Lore skill. You
        gain the Eye for Numbers skill feat.
        <Feat
          id={0}
          name="Eye for Numbers"
          tags={["general", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You’ve learned to subitize, quickly estimating the number of items
              in a group with relative accuracy at only a glance. You
              immediately learn the number of visually similar items in a group
              you can see (such as coins, books, or people), rounded to the
              first digit in the total number. For example, you could look at a
              case of potion vials and learn that it held about 30 vials, but
              you wouldn’t know that it was exactly 33 vials, how many different
              types of potions there were, or how many of which type. Similarly,
              you could look at a pile of 2,805 coins and know that there were
              about 3,000 coins in all. You can use this ability only on items
              that can typically be counted, so you can’t use it on grains of
              sand or stars in the sky, for example.
              <br />
              <br />
              In addition, when you attempt to Decipher Writing that is
              primarily numerical or mathematical, you gain a +2 circumstance
              bonus to your check.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Borderlands pioneer",
    source: "Kingmaker Adventure path",
    tags: ["rare"],
    abilityBoost: ["Free", "Strength", "Wisdom"],
    skillTraining: ["Nature", "Lore"],
    feat: "Train Animal",
    description: (
      <span>
        You have long lived along the southern border of Brevoy, in the shadow
        of the wilderness known as the Stolen Lands. Life has been hard, but
        through hunting, trapping, trading, and coaxing crops from the ground,
        you’ve learned how to survive on the rugged frontier. Whether because of
        your personal expertise and familiarity with the borderlands or in order
        to reclaim your family’s land, you’ve joined the expedition into the
        Stolen Lands.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Nature skill and a Lore skill associated with a
        particular type of wilderness (choose from forest, hills, mountains,
        plains, rivers, or swamp). You gain the Train Animal skill feat.
        <Feat
          id={0}
          name="Train Animal"
          tags={["downtime", "general", "manipulate", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Nature.
              </span>
              <br />
              You spend time teaching an animal to do a certain action. You can
              either select a basic action the animal already knows how to do
              (typically those listed in the Command an Animal action) or
              attempt to teach the animal a new basic action. The GM determines
              the DC of any check required and the amount of time the training
              takes (usually at least a week). It’s usually impossible to teach
              an animal a trick that uses critical thinking. If you’re expert,
              master, or legendary in Nature, you might be able to train more
              unusual creatures, at the GM’s discretion.
              <br />
              <br />
              <b>Success:</b> The animal learns the action. If it was an action
              the animal already knew, you can Command the Animal to take that
              action without attempting a Nature check. If it was a new basic
              action, add that action to the actions the animal can take when
              Commanded, but you must still roll.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Bounty hunter",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Strength", "Wisdom"],
    skillTraining: ["Survival", "Lore"],
    feat: "Experienced Tracker",
    description: (
      <span>
        Bringing in lawbreakers lined your pockets. Maybe you had an altruistic
        motive and sought to bring in criminals to make the streets safer, or
        maybe the coin was motivation enough. Your techniques for hunting down
        criminals transfer easily to the life of an adventurer.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Wisdom, and one is
        a free ability boost.
        <br />
        <br /> You’re trained in the Survival skill and the Legal Lore skill.
        You gain the Experienced Tracker skill feat.
        <Feat
          id={0}
          name="Experienced Tracker"
          tags={["downtime", "general", "manipulate", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              Tracking is second nature to you, and when necessary you can
              follow a trail without pause. You can Track while moving at full
              Speed by taking a –5 penalty to your Survival check. If you’re a
              master in Survival, you don’t take the –5 penalty. If you’re
              legendary in Survival, you no longer need to roll a new Survival
              check every hour when tracking, though you still need to roll
              whenever there are significant changes in the trail.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Brevic noble",
    source: "Kingmaker Adventure path",
    tags: ["rare"],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Survival", "Lore"],
    feat: "Experienced Tracker",
    description: (
      <span>
        You claim a tangential but legitimate connection to one of Brevoy’s
        noble families. If you aren’t human, you were adopted by one of Brevoy’s
        nobles or were perhaps a favored servant or even a childhood friend of a
        noble scion. Whatever the case, you’ve had a comfortable life, though
        still a far cry from the one your distant cousins or close associates
        know. An expedition into the storied Stolen Lands seems like just the
        test to see if you really are worthy of the “noble” title.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        Choose one of the Brevic lineages below.
        <br />
        <br />
        <b>Garess:</b> Family ties to the Golushkin Mountain dwarves left its
        mark. Your family motto is “Strong as the Mountains.” You’re trained in
        the <b>Crafting skill</b> and the <b>Architecture Lore</b> skill. You
        gain the <b>Specialty Crafting</b> skill feat.
        <br />
        <br />
        <b>Lebeda:</b> Your family’s history of trading along the shores of Lake
        Reykal pervades your blood. Your family motto is “Success through
        Grace.” You’re trained in the Society skill and the{" "}
        <b>Mercantile Lore</b> skill. You gain the <b>Multilingual</b> skill
        feat.
        <br />
        <br />
        <b>Lodovka:</b> Your family has made a living off the coasts of the Lake
        of Mists and Veils since before Brevoy existed. Your family motto is
        “The Waters, Our Fields.” You’re trained in the <b>Athletics</b> skill
        and the <b>Fishing Lore</b> skill. You gain the{" "}
        <b>Underwater Marauder</b> skill feat.
        <br />
        <br />
        <b>Medvyed:</b> Your family has a deep respect for the wilderness and is
        skilled at hunting and surviving off the land. Your family motto is
        “Endurance Overcomes All.” You’re trained in the <b>Survival</b> skill
        and the <b>Hunting Lore</b> skill. You gain the <b>Terrain Expertise</b>{" "}
        skill feat (choose your terrain from aquatic, forest, mountain, plains,
        or swamp).
        <br />
        <br />
        <b>Orlovsky:</b> Your family has a reputation for avoiding conflicts.
        Your family motto is “High Above.” You’re trained in the{" "}
        <b>Diplomacy skill</b> and the <b>Brevoy Lore</b> skill. You gain the
        Group
        <b>Impression </b>skill feat.
        <br />
        <br />
        <b>Surtova:</b> Your family is well known for their political agility
        and scheming nature. Your family motto is “Ours Is the Right.” You’re
        trained in the <b>Deception</b> skill and the <b>Politics</b> Lore
        skill. You gain the <b>Charming Liar</b> skill feat.
      </span>
    ),
  },
  {
    name: "Brevic outcast",
    source: "Kingmaker Adventure path",
    tags: ["rare"],
    abilityBoost: ["Free", "Charisma", "Constitution"],
    skillTraining: ["Politics Lore"],
    feat: "Haughty Obstinacy",
    description: (
      <span>
        One of your parents was a member of one of the great families of Brevoy,
        perhaps even of the line of Rogarvia itself. Yet you have no substantive
        proof of your nobility, and you’ve learned that claiming such without
        evidence is a fool’s game. Whether a recent attempt to prove your
        heritage brought down the wrath of a noble family or you seek to prove
        the worth of the blood in your veins, you’ve joined an expedition into
        the Stolen Lands, hoping to make a name all your own.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Politics Lore skill. You take a –1 penalty on all
        Charisma-based skill checks attempted when dealing with members of the
        nobility, but gain the Haughty Obstinacy human ancestry feat, even if
        you aren’t a human. If you manage to establish yourself as a true noble
        or secure a leadership role in a kingdom, you no longer take the penalty
        to Charisma-based checks.
        <Feat
          id={0}
          name="Haughty Obstinacy"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              Your powerful ego makes it harder for others to order you around.
              If you roll a success on a saving throw against a mental effect
              that attempts to directly control your actions, you critically
              succeed instead. If a creature rolls a failure on a check to
              Coerce you using Intimidation, it gets a critical failure instead
              (so it can’t try to Coerce you again for 1 week).
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Bright lion",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Deception", "Mzali Lore"],
    feat: "Lie to Me",
    description: (
      <span>
        You are a member of the Bright Lions and seek to overthrow the
        tyrannical reign of Walkena and free Mzali from his cruel whims. You’re
        experienced operating undercover and have had to be cautious of what you
        say and who you trust, lest you fall afoul of the god-king’s terrible
        punishments.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Deception skill and the Mzali Lore skill. You gain
        the Lie to Me skill feat.
        <Feat
          id={0}
          name="Lie to Me"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              You can use Deception to weave traps to trip up anyone trying to
              deceive you. If you can engage in conversation with someone trying
              to Lie to you, use your Deception DC if it is higher than your
              Perception DC to determine whether they succeed. This doesn’t
              apply if you don’t have a back-and-forth dialogue, such as when
              someone attempts to Lie during a long speech.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Cannoner",
    source: "Guns & gears",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Strength"],
    skillTraining: ["Athletics", "Warfare Lore"],
    feat: "Hefty Hauler",
    description: (
      <span>
        You served as a crewmate aboard a military vessel or pirate ship and
        were responsible for the use and maintenance of the ship’s cannons. A
        strong back and quick reflexes were equally important to you in your
        duties, and you know your way around explosives and the dangers that lie
        therein. These skills serve you well in your new life as an adventurer,
        as compared to the weight of a cannon, a gear load that makes your
        allies blanche just makes you laugh instead.
        <br />
        <br />
        Choose two ability boosts. One boost must be to Dexterity or Strength,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Warfare Lore skill. You
        gain the Hefty Hauler skill feat.
        <Feat
          id={0}
          name="Hefty Hauler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              You can carry more than your frame implies. Increase your maximum
              and encumbered Bulk limits by 2.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Charlatan",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Deception", "Underworld Lore"],
    feat: "Charming Liar",
    description: (
      <span>
        You traveled from place to place, peddling false fortunes and snake oil
        in one town, pretending to be royalty in exile to seduce a wealthy heir
        in the next. Becoming an adventurer might be your next big scam or an
        attempt to put your talents to use for a greater cause. Perhaps it’s a
        bit of both, as you realize that after pretending to be a hero, you’ve
        become the mask.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Deception skill and the Underworld Lore skill. You
        gain the Charming Liar skill feat.
        <Feat
          id={0}
          name="Charming Liar"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              Your charm allows you to win over those you lie to. When you get a
              critical success using the Lie action, the target’s attitude
              toward you improves by one step, as though you’d succeeded at
              using Diplomacy to Make an Impression. This works only once per
              conversation, and if you critically succeed against multiple
              targets using the same result, you choose one creature’s attitude
              to improve. You must be lying to impart seemingly important
              information, inflate your status, or ingratiate yourself, which
              trivial or irrelevant lies can’t achieve.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Chelish rebel",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Society", "Kintargo Lore"],
    feat: "Streetwise",
    description: (
      <span>
        You joined the fight against House Thrune. You may have helped liberate
        the nation of Ravounel, or you might be involved in another rebellion,
        such as Pezzack’s, that studied Ravounel’s successes.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Kintargo Lore skill. You
        gain the Streetwise skill feat.
        <Feat
          id={0}
          name="Streetwise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              You know about life on the streets and feel the pulse of your
              local settlement. You can use your Society modifier instead of
              your Diplomacy modifier to Gather Information. In any settlement
              you frequent regularly, you can use the Recall Knowledge action
              with Society to know the same sorts of information that you could
              discover with Diplomacy to Gather Information. The DC is usually
              significantly higher, but you know the information without
              spending time gathering it. If you fail to recall the information,
              you can still subsequently attempt to Gather Information normally.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Chelish rebel",
    source: "Sky King's Tomb: Player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: [
      "Diplomacy or Intimidation",
      "Genealogy Lore or Underworld Lore",
    ],
    feat: "Group Impression or Intimidating Glare",
    description: (
      <span>
        One or more of your ancestors committed a grave atrocity, and even
        though you’ve tried to live your own life, your family’s grim past looms
        over you like a relentless shadow. You might have traveled a thousand
        miles to escape the legends, learned how to ingratiate yourself to
        others, just tried to ignore the everyday accusing glances, or even
        accepted the notoriety just to be left alone. You didn’t commit the
        crime, yet it haunts you. Whether you’re proving the world wrong,
        proving to yourself that you’re no monster, earning wealth to pay
        reparations, or just driven to do some good with your life, it’s time to
        break free of the past. That journey begins with understanding.
        <br />
        <br />
        Clan Tolorr preserves the deeds and misdeeds of dwarven legend. With
        their help, you might not only understand dwarven crimes and
        reparations, but also learn how to accept your past and leave the world
        a little better than when you found it. You’ve corresponded with Clan
        Tolorr, but your most recent message came instead from one of the clan’s
        guests: a lizardfolk mystic named Valahask who studies the dead and is
        eager to meet you. He has lobbied on your behalf, earning you an
        invitation to Clan Tolorr’s upcoming Family Festival.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        Choose whether you’ve navigated your past through kindness or notoriety
        thus far. For the former, you’re trained in the Diplomacy skill and the
        Genealogy Lore skill, and you gain the Group Impression skill feat. For
        the latter, you’re trained in the Intimidation skill and the Underworld
        Lore skill, and you gain the Intimidating Glare skill feat.
        <br />
        <br />
        <b>Connection:</b> Valahask, an iruxi mystic.
        <b>Reputation Points:</b> –1.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
        <br />
        <Feat
          id={0}
          name="Intimidating Glare"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              You can Demoralize with a mere glare. When you do, Demoralize
              loses the auditory trait and gains the visual trait, and you don’t
              take a penalty if the creature doesn’t understand your language.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Child of the puddles",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Acrobatics", "Absalom Lore"],
    feat: "Steady Balance",
    description: (
      <span>
        You grew up in the soggy, squalid quarter of Absalom known as the
        Puddles. You’re at home in tightly packed urban environments.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Acrobatics skill and the Absalom Lore skill. You
        gain the Steady Balance skill feat.
        <Feat
          id={0}
          name="Steady Balance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Acrobatics.
              </span>
              <br />
              You can keep your balance easily, even in adverse conditions.
              Whenever you roll a success using the Balance action, you get a
              critical success instead. You’re not flat-footed while attempting
              to Balance on narrow surfaces and uneven ground. Thanks to your
              incredible balance, you can attempt an Acrobatics check instead of
              a Reflex save to Grab an Edge.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Child of the puddles",
    source: "Dark Archive",
    tags: ["rare"],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Diplomacy", "Dreamlands Lore"],
    feat: "Steady Balance",
    description: (
      <span>
        You were born in a village where everyone has a twin with a special
        link. You have moved to the wider world for reasons of your own, but you
        still have an unbreakable connection to your twin through your dreams.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Diplomacy and Dreamlands Lore. You gain the ability to
        communicate with your twin in your dreams. You and your twin gain the
        effects of dream message every night, only between the two of you; this
        isn’t a spell, but a natural effect. Unless your twin is another PC,
        your GM roleplays your twin or summarizes your interaction during these
        dreams.
      </span>
    ),
  },
  {
    name: "Child of Westcrown",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Diplomacy", "Westcrown Lore"],
    feat: "Group Impression",
    description: (
      <span>
        Whether you come from Westcrown or elsewhere, you hold the values of
        pre-Thrune Cheliax dear. You disdain the infernal government, but you
        are proud of your country and do not consider yourself a rebel.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Westcrown Lore skill. You
        gain the Group Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Chosen one",
    source: "Secrets of magic",
    tags: ["rare"],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Diplomacy", "Westcrown Lore"],
    feat: "Fortune-Telling Lore ",
    description: (
      <span>
        Your birth has fulfilled a prediction, and people close to you are
        counting on you to do great things. There’s intense pressure on you to
        be up to the task, and the fickle nature of prophecy complicates your
        path.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        br Decide with your GM the basics of the prophecy in which you’re meant
        to play a major part. You’re trained in one skill related to the
        prophecy, and the Fortune-Telling Lore skill. You gain the Prophecy’s
        Pawn free action.
        <br />
        <br />
        Prophecy’s Pawn{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one action icon"
        />{" "}
        (abjuration, divine, fortune)
        <br />
        <br />
        <b>Trigger</b> You fail a saving throw, attack roll, or skill check;
        Effect You twist the prophecy in your favor, which will have
        consequences later. Reroll the failed check. You must use the result of
        the second roll.
        <br />
        <br />
        For 24 hours afterward, the GM can force you to reroll a successful
        saving throw, attack roll, or skill check as fate balances the scale.
        This is a misfortune effect. You can’t use prophecy’s pawn again until
        the GM uses this option or 24 hours pass, whichever comes first.
      </span>
    ),
  },
  {
    name: "Circuit job",
    source: "Guns & gears",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Deception", "Legal Lore"],
    feat: "Lie to Me",
    description: (
      <span>
        You’re a circuit judge, a courtroom on horseback who serves a group of
        communities out in the Mana Wastes or a similar backwoods region. You
        show up every couple of months, hear the cases that have piled up since
        your last visit, give verdicts, and then it’s on to the next town in
        your itinerary. It’s not the easiest life in the world, but it’s an
        interesting one, and you hear some mighty strange cases. Chances are, it
        was one of those cases that set you on the road to adventure.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Deception and Legal Lore. You gain the Lie to Me skill
        feat.
        <Feat
          id={0}
          name="Lie to Me"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              You can use Deception to weave traps to trip up anyone trying to
              deceive you. If you can engage in conversation with someone trying
              to Lie to you, use your Deception DC if it is higher than your
              Perception DC to determine whether they succeed. This doesn’t
              apply if you don’t have a back-and-forth dialogue, such as when
              someone attempts to Lie during a long speech.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Clan associate",
    source: "Sky king's tomb:Player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Society", "Highhelm Lore"],
    feat: "Multilingual",
    description: (
      <span>
        You already have a close connection to Clan Tolorr, such as having been
        born into the clan, worked as an esteemed contractor for them, or
        married into the clan (even if you chose to retain your prior clan
        affiliation). Whether through dedicated study or just overhearing your
        fellows’ academic debates, you’ve absorbed boundless trivia about
        history—especially local lore. Beyond Tolorr halls, your affiliation
        earns you respect in Highhelm. Your clan expects you to behave well, as
        your actions reflect on them.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Highhelm Lore skill. You
        gain the Multilingual skill feat.
        <br />
        <br />
        <b>Connection: </b>You have no special connection or sponsor in Clan
        Tolorr.
        <br />
        <br />
        <b>Reputation Points:</b> +2
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Clockfighter",
    source: "Guns & gears",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Society", "Engineering Lore"],
    feat: "Eye for Numbers",
    description: (
      <span>
        New forms of clockwork technology are incredibly interesting to you, and
        you’ve been studying examples of them to see where else they might be
        best put to use. You might eventually develop a new prototype machine or
        find a way to make related technologies practical enough for everyone to
        benefit. Though before you do, you must continue your research!
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Engineering Lore skill. You
        gain the Eye for Numbers skill feat.
        <Feat
          id={0}
          name="Eye for Numbers"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Lore.
              </span>
              You carefully safeguard your professional endeavors to prevent
              disaster. When you use Lore to Earn Income, if you roll a critical
              failure, you instead get a failure. If you’re an expert in Lore,
              you gain twice as much income from a failed check to Earn Income,
              unless it was originally a critical failure.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Clockfighter",
    source: "Guns & gears",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Crafting", "Gladiatorial Lore"],
    feat: "Experienced Professional",
    description: (
      <span>
        While others choose to use their engineering ability to heal the injured
        or make brilliant innovations, you’ve used your skill to repair and
        modify clockwork constructs that battle in gladiatorial combat. You know
        how to get a crowd electrified for your clockwork gladiator, win or
        lose, and you know how to repair it when it gets damaged. These skills
        serve you well as an adventurer.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Gladiatorial Lore skill.
        You gain the Experienced Professional skill feat.
        <Feat
          id={0}
          name="Experienced Professional"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Lore.
              </span>
              You carefully safeguard your professional endeavors to prevent
              disaster. When you use Lore to Earn Income, if you roll a critical
              failure, you instead get a failure. If you’re an expert in Lore,
              you gain twice as much income from a failed check to Earn Income,
              unless it was originally a critical failure.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Clockwork researcher",
    source: "Guns & gears",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Crafting", "Gladiatorial Lore"],
    feat: "Experienced Professional",
    description: (
      <span>
        While others choose to use their engineering ability to heal the injured
        or make brilliant innovations, you’ve used your skill to repair and
        modify clockwork constructs that battle in gladiatorial combat. You know
        how to get a crowd electrified for your clockwork gladiator, win or
        lose, and you know how to repair it when it gets damaged. These skills
        serve you well as an adventurer.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Gladiatorial Lore skill.
        You gain the Experienced Professional skill feat.
        <Feat
          id={0}
          name="Eye for Numbers"
          tags={["general", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You’ve learned to subitize, quickly estimating the number of items
              in a group with relative accuracy at only a glance. You
              immediately learn the number of visually similar items in a group
              you can see (such as coins, books, or people), rounded to the
              first digit in the total number. For example, you could look at a
              case of potion vials and learn that it held about 30 vials, but
              you wouldn’t know that it was exactly 33 vials, how many different
              types of potions there were, or how many of which type. Similarly,
              you could look at a pile of 2,805 coins and know that there were
              about 3,000 coins in all. You can use this ability only on items
              that can typically be counted, so you can’t use it on grains of
              sand or stars in the sky, for example.
              <br />
              <br />
              In addition, when you attempt to Decipher Writing that is
              primarily numerical or mathematical, you gain a +2 circumstance
              bonus to your check.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Codebreaker",
    source: "Guns & gears",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Society", "Cryptography Lore"],
    feat: "Glean Contents",
    description: (
      <span>
        Whether you’re employed by a military organization to decipher coded
        messages sent by enemy factions or work independently to crack an enigma
        created by a past civilization, you have a head for patterns and
        linguistics. You might even use new clockwork devices to aid you in your
        efforts.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Cryptography Lore skill. You
        gain the Glean Contents skill feat.
        <Feat
          id={0}
          name="Glean Contents"
          tags={["general", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You are adept at quickly scanning loose papers and carefully
              discerning the contents of sealed letters without damaging the
              seal. You can attempt Society checks to Decipher Writing on a
              message that is only partially glimpsed, upside down or reversed
              from your perspective, or even sealed. However, on a critical
              failure, the recipient is made aware of your efforts (for
              instance, you damage the seal or disturb the papers in some way).
              When using this feat to decipher sealed letters, your attempt to
              Decipher Writing gains the manipulate trait. This feat doesn’t
              prevent witnesses from noticing your efforts, particularly with
              sealed letters which you must manipulate directly in order to
              read; you might need to attempt Deception or Stealth checks to
              avoid being noticed.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Concordance researcher",
    source: "Rage of elements",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: [
      "Society",
      "Plane of Air Lore, Plane of Earth" +
        " Lore, Plane of Fire" +
        " Lore," +
        " Plane of Metal Lore," +
        " Plane of Water Lore or Plane of Wood Lore",
    ],
    feat: "uncommon",
    description: (
      <span>
        Tasked by the Concordance of Elements to research a variety of enigmatic
        planar phenomena, you’ve acquired very specific knowledge about the
        planes and the interactions between them. While being a researcher is
        usually a peaceful profession, the Concordance might require you to go
        out into the field and research unstable planar situations.
        <br />
        <br />
        Choose two attribute boosts. One must be to Intelligence or Wisdom, and
        one is a free attribute boost.
        <br />
        <br />
        You’re trained in four of the following: Plane of Air Lore, Plane of
        Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of Water
        Lore, or Plane of Wood Lore.
      </span>
    ),
  },
  {
    name: "Concordance scout",
    source: "Rage of elements",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: [
      "Diplomacy",
      "Plane of Air Lore," +
        " Plane of Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of" +
        " Water Lore, or Plane of Wood Lore",
    ],
    feat: "Hobnobber",
    description: (
      <span>
        You were hired by the Concordance of Elements to seek out rumors of
        planar breaches or other evidence of planar imbalances. After reporting
        back to the Concordance, they’d send agents more well equipped to deal
        with the situation. Still, this job has led you into more trouble than
        your employers suspect, and you’ve learned how to get your information
        quickly and get out relatively unscathed.
        <br />
        <br />
        Choose two attribute boosts. One must be to Constitution or Charisma,
        and one is a free attribute boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and one of the following lore
        skills: Plane of Air Lore, Plane of Earth Lore, Plane of Fire Lore,
        Plane of Metal Lore, Plane of Water Lore, or Plane of Wood Lore. You
        gain the Hobnobber skill feat.
        <Feat
          id={0}
          name="Hobnobber"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              You are skilled at learning information through conversation. The
              Gather Information exploration activity takes you half as long as
              normal (typically reducing the time to 1 hour). If you’re a master
              in Diplomacy and you Gather Information at the normal speed, when
              you attempt to do so and roll a critical failure, you get a
              failure instead. There is still no guarantee that a rumor you
              learn with Gather Information is accurate.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Conservator",
    source: "Sky king's tomb: player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: [
      "Crafting or Thievery",
      "Accounting Lore or Underworld Lore",
    ],
    feat: "Quick Repair or Assurance",
    description: (
      <span>
        Some history survives only so long as its physical remains do. You’ve
        developed robust museum skills to identify relics, preserve artifacts,
        recreate ancient technologies, and even rebuild shattered
        treasures—often with painstaking patience, a steady hand, and even a
        little magic. Your contributions don’t end there, as whether you’ve
        mastered diligent recordkeeping or helped uncover smuggling rings that
        are looting archaeological sites, you’ve made an impression. Hearing of
        your promising abilities, representatives from Clan Tolorr contacted
        you, inviting you to study with their museum masters and share your own
        techniques, all while helping preserve over 10,000 years of history!
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in either the Crafting skill or the Thievery skill, and
        you’re trained in either the Accounting Lore or the Underworld Lore
        skill. If you selected Crafting, you gain the Quick Repair skill feat.
        If you chose Thievery, you gain the Assurance (Thievery) skill feat.
        <br />
        <br />
        <b>Connection:</b> Ria, an oread gnome curator who studies rivethun
        traditions
        <br />
        <br />
        <b>Reputation Points:</b> +1
        <Feat
          id={0}
          name="Quick Repair"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              You take 1 minute to Repair an item. If you’re a master in
              Crafting, it takes 3 actions. If you’re legendary, it takes 1
              action.
            </span>
          }
        />
        <br />
        <Feat
          id={0}
          name="Assurance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers).
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Construction occultist",
    source: "Blood lords: player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Intelligence", "Strength"],
    skillTraining: ["Athletics or Occultism", "Architecture Lore"],
    feat: "Hefty Hauler or Oddity Identification",
    description: (
      <span>
        You helped to build and design buildings and public works on behalf of
        Geb’s architectural faction, the Builders League. You’ve been taught
        that creating bridges, gatehouses, roads, walls, and more is as much
        about planning as it is about brute labor. You learned that the Builders
        League has plans of occult significance for many of its construction
        projects and might have even aided them in the way you laid stones or
        designed walls (although you never learned the great design behind those
        secret plans). Although you’ve left construction behind, the skills in
        long-term planning and leveraging effort remain with you.
        <br />
        <br />
        You are still well-regarded by the Builders League. Your party gains 1
        Reputation Point with the Builders League at the start of the campaign.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Strength, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in your choice of the Athletics or Occultism skill. You
        gain a skill feat: Hefty Hauler if you chose Athletics or Oddity
        Identification if you chose Occultism. You’re also trained in
        Architecture Lore.
        <Feat
          id={0}
          name="Hefty Hauler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can carry more than your frame implies. Increase your maximum
              and encumbered Bulk limits by 2.
            </span>
          }
        />
        <Feat
          id={0}
          name="Oddity
        Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Occultism.
              </span>
              <br />
              You have a sense for spells that twist minds or reveal secrets.
              You gain a +2 circumstance bonus to Occultism checks to Identify
              Magic with the mental, possession, prediction, or scrying traits.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Cook",
    source: "Advanced player's guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Survival", "Cooking Lore"],
    feat: "Seasoned",
    description: (
      <span>
        You grew up in the kitchens of a tavern or other dining establishment
        and excelled there, becoming an exceptional cook. Baking, cooking, a
        little brewing on the side—you’ve spent lots of time out of sight. It’s
        about time you went out into the world to catch some sights for
        yourself.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Cooking Lore skill. You
        gain the Seasoned skill feat.
        <Feat
          id={0}
          name="Seasoned"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Alcohol Lore, Cooking Lore, or
                Crafting.
              </span>
              <br />
              You’ve mastered the preparation of many types of food and drink.
              You gain a +1 circumstance bonus to checks to Craft food and
              drink, including potions. If you are a master in one of the
              prerequisite skills, this bonus increases to +2.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Corpse Stitcher",
    source: "Blood lords: player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Medicine", "Zombie Lore"],
    feat: "Risky Surgery or Stitch Flesh",
    description: (
      <span>
        The number of zombies working across Geb as farmhands, laborers, or
        shambling soldiers seems nearly uncountable. None of these zombies can
        do their work if they fall to pieces, so the Reanimators maintain
        legions of surgeons and tailors to keep zombies stitched together and
        suitable for service. You were one of these corpse stitchers, working
        long hours to ensure that Geb’s mindless workforce could perform at its
        best. On the day you saw some of your friends come under your needle,
        you realized how expendable Geb’s fleshy population truly is, and you
        decided that you should seek out a different line of work.
        <br />
        <br />
        The Reanimators appreciate your past service. Your party gains 1
        Reputation Point with the Reanimators at the start of the campaign.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill. You gain your choice of either the
        Risky Surgery or Stitch Flesh skill feats. You’re also trained in Zombie
        Lore.
        <Feat
          id={0}
          name="Risky Surgery"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Medicine.
              </span>
              <br />
              Your surgery can bring a patient back from the brink of death, but
              might push them over the edge. When you Treat Wounds, you can deal
              1d8 slashing damage to your patient just before applying the
              effects of Treat Wounds. If you do, you gain a +2 circumstance
              bonus to your Medicine check to Treat Wounds, and if you roll a
              success, you get a critical success instead.
            </span>
          }
        />
        <Feat
          id={0}
          name="Stitch Flesh"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Medicine.
              </span>
              <br />
              You can use Treat Wounds to restore Hit Points to undead
              creatures, not just living ones. The techniques you use to do so
              vary, but all require sutures, bandages, and other tools included
              in healer’s tools. Some conditions that might raise the DC of
              treating undead’s wounds differ from that of living creatures. For
              instance, the GM might increase the DC if the undead being treated
              is in a church of Pharasma or the wounds were caused by powerful
              positive energy.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Courrier",
    source: "Advanced player's guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Society", "Lore"],
    feat: "Glean Contents",
    description: (
      <span>
        In your youth, you earned coin running messages for persons of wealth
        and influence, darting through crowded cobblestone streets. Your dogged
        commitment to deliver your message was good training for the life of an
        adventurer.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Lore skill for the city in
        which you were raised. You gain the Glean Contents skill feat.
        <Feat
          id={0}
          name="Glean Contents"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You are adept at quickly scanning loose papers and carefully
              discerning the contents of sealed letters without damaging the
              seal. You can attempt Society checks to Decipher Writing on a
              message that is only partially glimpsed, upside down or reversed
              from your perspective, or even sealed. However, on a critical
              failure, the recipient is made aware of your efforts (for
              instance, you damage the seal or disturb the papers in some way).
              When using this feat to decipher sealed letters, your attempt to
              Decipher Writing gains the manipulate trait. This feat doesn’t
              prevent witnesses from noticing your efforts, particularly with
              sealed letters which you must manipulate directly in order to
              read; you might need to attempt Deception or Stealth checks to
              avoid being noticed.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Criminal",
    source: "Core rulebook",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Stealth", "Underworld Lore"],
    feat: "Experienced Smuggler",
    description: (
      <span>
        As an unscrupulous independent or as a member of an underworld
        organization, you lived a life of crime. You might have become an
        adventurer to seek redemption, to escape the law, or simply to get
        access to bigger and better loot.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Stealth skill and the Underworld Lore skill. You
        gain the Experienced Smuggler skill feat.
        <Feat
          id={0}
          name="Experienced Smuggler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Stealth.
              </span>
              <br />
              You often smuggle things past the authorities. When the GM rolls
              your Stealth check to see if a passive observer notices a small
              item you have concealed, the GM uses the number rolled or
              10—whichever is higher—as the result of your die roll, adding it
              to your Stealth modifier to determine your Stealth check result.
              If you’re a master in Stealth, the GM uses the number rolled or
              15, and if you’re legendary in Stealth, you automatically succeed
              at hiding a small concealed item from passive observers. This
              provides no benefits when a creature attempts a Perception check
              while actively searching you for hidden items. Due to your
              smuggling skill, you’re more likely to find more lucrative
              smuggling jobs when using Underworld Lore to Earn Income.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Crown of chaos",
    source: "Stolen fate: player's guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Charisma"],
    skillTraining: ["Lore"],
    feat: "Charming Liar",
    description: (
      <span>
        Your life was one of tumult and mayhem, but you don’t see this as a bad
        thing. Perhaps you lived life on the road as part of an ever-changing
        group, such as being a member of a traveling circus or part of a
        years-long pilgrimage with a group of explorers. Maybe you were a member
        of a large family and found the best way to get attention was to be
        unpredictable. Or you could have grown up in a region where society had
        collapsed, such as a war zone or ruined city after a disaster, where you
        were forced to constantly think on your feet to handle unexpected
        situations. One thing you’ve certainly excelled at is developing the
        skill of lying to strangers in order to put them at ease. Is it really a
        bad thing to lie, after all, if the end result is good for both sides?
        Or at the very least, good for you?
        <br />
        <br />
        This background is associated with the suit of Crowns.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma, and one is a free
        ability boost.
        <br />
        <br />
        You gain the Charming Liar skill feat and are trained in a Lore about a
        specific terrain, as befits where you spent most of your childhood
        growing up. You also gain the following free action.
        <br />
        <br />
        Chaotic Destiny{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one action icon"
        />{" "}
        (fortune)
        <br />
        <br />
        <b>Trigger:</b> You fail a saving throw during a combat;{" "}
        <b>Frequency:</b> once per day; Effect Chaos intervenes on your behalf
        at the last instant as you fail a saving throw. Draw a harrow card and
        reroll the saving throw you failed. You must take the result of the
        reroll, but if you drew a card from the suit of Crowns, improve the
        result by one degree of success.
        <Feat
          id={0}
          name="Charming Liar"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              <br />
              Your charm allows you to win over those you lie to. When you get a
              critical success using the Lie action, the target’s attitude
              toward you improves by one step, as though you’d succeeded at
              using Diplomacy to Make an Impression. This works only once per
              conversation, and if you critically succeed against multiple
              targets using the same result, you choose one creature’s attitude
              to improve. You must be lying to impart seemingly important
              information, inflate your status, or ingratiate yourself, which
              trivial or irrelevant lies can’t achieve.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Crystal Healer",
    source: "Rage of Elements",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Nature", "Plane of Earth Lore"],
    feat: "Natural Medicine",
    description: (
      <span>
        Mineral formations can be beautiful things, sparkling and arrayed in
        geometric configurations. To you, they are also potent natural healing
        aids. You may have taken up adventuring to prove yourself by healing the
        ailing or to find new crystals with unique properties to add to your
        growing collection.
        <br />
        <br />
        Choose two attribute boosts. One must be to Wisdom or Charisma and one
        is a free attribute boost.
        <br />
        <br />
        You’re trained in the Nature skill and the Plane of Earth Lore skill.
        You gain the Natural Medicine skill feat.
        <Feat
          id={0}
          name="Natural Medicine"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Nature.
              </span>
              <br />
              You can apply natural cures to heal your allies. You can use
              Nature instead of Medicine to Treat Wounds. If you’re in the
              wilderness, you might have easier access to fresh ingredients,
              allowing you to gain a +2 circumstance bonus to your check to
              Treat Wounds using Nature, subject to the GM’s determination.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Cultist",
    source: "Advanced player's guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Occultism", "Lore"],
    feat: "Schooled in Secrets",
    description: (
      <span>
        You were (or still are) a member of a cult whose rites may involve
        sacred dances to ensure a strong harvest or dire rituals that call upon
        dark powers. You might have taken up adventuring to further your cult’s
        aims, to initiate yourself into the world’s grander mysteries, or to
        flee unsavory practices or strictures.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Occultism skill and the Lore skill related to your
        deity or cult. You gain the Schooled in Secrets skill feat.
        <Feat
          id={0}
          name="Schooled in Secrets"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Occultism.
              </span>
              <br />
              You notice the signs and symbols that members of mystery cults and
              other secret societies use to declare their affiliation to fellow
              members. You can use Occultism in place of Diplomacy to Gather
              Information about such groups. If you belong to a secret cult,
              lodge, sect, or similar organization, you automatically recognize
              members of your group unless they are specifically attempting to
              conceal their presence from you.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Curandero",
    source: "Book of the dead",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Medicine", "Herbalism Lore"],
    feat: "Inoculation",
    description: (
      <span>
        You learned the healing arts of your community wielding your ceremonial
        chonta, a tool you carved yourself and imbued with sacred oils and
        herbs. This process opened your eyes to ailments of a more mystical
        nature: malefic spirits, haunts, possession, and more. You likely took
        up adventuring to combat these horrors, or you may have fled an evil
        beyond your power to vanquish.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill and the Herbalism Lore skill. You
        gain the Inoculation skill feat.
        <Feat
          id={0}
          name="Inoculation"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Medicine.
              </span>
              <br />
              You have practice combating plague, and your patients are less
              likely to succumb to the same disease again for a time. When you
              successfully Treat a Disease on someone and they fully recover
              from the disease, they gain a +2 circumstance bonus to saving
              throws against that same disease for 1 week.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Cursed",
    source: "Advanced player's guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Occultism", "Curse Lore"],
    feat: "Inoculation",
    description: (
      <span>
        You are the victim of a personal or hereditary curse. Through great
        effort and occult study, you have learned to fend off the curse’s worst
        effects and, by extension, you can protect yourself against other
        harmful magic. However, the curse still hangs over you and sometimes
        manifests in dangerous ways.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You are trained in Occultism and Curse Lore. You gain the Warding Sign
        reaction. You and the GM should determine the full effects of the curse,
        though you’ve staved most of them off for now. The GM determines the
        curse’s lingering manifestations on you, which usually include at least
        a constant or very frequent thematic effect and occasional more
        dangerous effects.
        <br />
        <br />
        Warding Sign{" "}
        <img
          src={require("../assets/img/reaction.png")}
          alt="reaction icon"
        />{" "}
        (concentrate)
        <br />
        <br />
        <b>Frequency:</b> once per minute; <b>Trigger:</b> You attempt a saving
        throw against a magical effect, but you haven’t rolled yet;{" "}
        <b>Effect:</b> You call on the power of a personal, eldritch sign of
        protection, which flares brightly before slowly fading. You gain a +2
        circumstance bonus to the triggering saving throw, or a +3 circumstance
        bonus if the effect is a curse.
      </span>
    ),
  },
  {
    name: "Cursed family",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Occultism", "Curse Lore"],
    feat: "Oddity Identification",
    description: (
      <span>
        Rumors abound that your family is cursed. While that would explain
        several unfortunate events in your family history, you may or may not
        believe it. Regardless, odd coincidences plague your lineage, and
        perhaps even appear in your own life, and you have become used to
        spotting strangeness around you.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Occultism skill and the Curse Lore skill. You gain
        the Oddity Identification skill feat.
        <Feat
          id={0}
          name="Oddity Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Occultism.
              </span>
              <br />
              You have a sense for spells that twist minds or reveal secrets.
              You gain a +2 circumstance bonus to Occultism checks to Identify
              Magic with the mental, possession, prediction, or scrying traits.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Dauntless",
    source: "Lost omens: Firebrands",
    tags: ["rare"],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Diplomacy"],
    feat: "—",
    description: (
      <span>
        As a child, you chose to face each of your deepest fears and, time and
        again, emerged victorious. You have learned to conquer fear itself, and
        by sheer force of will and determination, you’re able to brush off
        frightening experiences more easily than most. Others find it difficult
        to intimidate you into backing down from whatever you’ve set your mind
        to.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You are trained in the Diplomacy skill. You gain the Indomitable Act
        reaction.
        <br />
        <br />
        Indomitable Act{" "}
        <img src={require("../assets/img/reaction.png")} alt="reaction icon" />
        <br />
        <br />
        <b>Frequency:</b> once per day; <b>Trigger:</b> You are about to attempt
        a check;
        <b>Requirements:</b> You are frightened; <b>Effect:</b> You lean into
        your fear, using it to embolden you. You can roll the triggering check
        twice and take the higher result. This is a fortune effect.
      </span>
    ),
  },
  {
    name: "Dedicated deliver",
    source: "Sky king's tomb: player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Athletics or Survival", "Cave Lore"],
    feat: "Combat Climber or Terrain Expertise",
    description: (
      <span>
        Filled with predators, pitfalls, and other perils, the Darklands
        rightfully scares off most travelers. Not you! Whether you’re a veteran
        Darklands caravanner, a cartographer seeking safer paths through
        dangerous territory, or just a spelunker who loves to escape the surface
        and hear the caverns sing, you’re adept at navigating underground
        obstacles and finding your way back to civilization.
        <br />
        <br />
        Clan Tolorr specializes more in studying the past than extracting it
        from dangerous areas. Its leader, Arghan Tolorr, was an avid explorer in
        his youth, and he’s begun an initiative to befriend, recruit, and train
        subterranean daredevils who can extract relics responsibly. You’re one
        of his candidates for this pilot program. Helping administrate recruits
        is Ria, a gnome curator and close Tolorr confidante who helped arrange
        your travel to Highhelm.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Dexterity, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in either the Athletics skill or the Survival skill, and
        you’re trained in the Cave Lore skill. If you selected Athletics, you
        gain the Combat Climber skill feat. If you chose Survival, you gain the
        Terrain Expertise (Underground) skill feat.
        <br />
        <br />
        <b>Connection:</b> Ria, an oread gnome curator who studies rivethun
        traditions
        <br />
        <br />
        <b>Reputation Points:</b> +0
        <Feat
          id={0}
          name="Combat Climber"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              Your techniques allow you to fight as you climb. You’re not
              flat-footed while Climbing and can Climb with a hand occupied. You
              must still use another hand and both legs to Climb.
            </span>
          }
        />
        <Feat
          id={0}
          name="Terrain Expertise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              Your experience in navigating a certain type of terrain makes you
              supremely confident while doing so. You gain a +1 circumstance
              bonus to Survival checks in one of the following types of terrain,
              chosen when you select this feat: aquatic, arctic, desert, forest,
              mountain, plains, sky, swamp, or underground.
              <br />
              <br />
              <b>Special:</b> You can select this feat more than once, choosing
              a different type of terrain each time.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Deep sea diver",
    source: "Rage of elements",
    tags: [],
    abilityBoost: ["Free", "Strength", "Wisdom"],
    skillTraining: ["Athletics", "Plane of Water Lore"],
    feat: "Underwater Marauder",
    description: (
      <span>
        The sapphire depths of the seas and the mysteries they hold beneath
        their surface have always piqued your interest. Your obsession with the
        ocean depths cannot be contained to one world alone, and you’ve read
        tomes and journals about the source of all water, everywhere, hoping to
        one day understand the watery secrets of the great unknown.
        <br />
        <br />
        Choose two attribute boosts. One must be to Strength or Wisdom, and one
        is a free attribute boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Plane of Water Lore skill.
        You gain the Underwater Marauder skill feat.
        <Feat
          id={0}
          name="Underwater Marauder"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You’ve learned to fight underwater. You are not flat-footed while
              in water, and you don’t take the usual penalties for using a
              bludgeoning or slashing melee weapon in water.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Dendrologist",
    source: "Rage of elements",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Survival", "Plane of Wood Lore"],
    feat: "Terrain Expertise",
    description: (
      <span>
        Trees grow in every biome, and your awe at their ability to conquer
        terrain has inspired deeper study into their workings. There are trees
        everywhere, and your study of them will inevitably take you ever further
        afield in search of new varieties, perhaps even to the Plane of Wood
        itself.
        <br />
        <br />
        Choose two attribute boosts. One must be to Intelligence or Wisdom, and
        one is a free attribute boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Plane of Wood Lore skill.
        You gain the Terrain Expertise skill feat for forests.
        <Feat
          id={0}
          name="Terrain Expertise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              Your experience in navigating a certain type of terrain makes you
              supremely confident while doing so. You gain a +1 circumstance
              bonus to Survival checks in one of the following types of terrain,
              chosen when you select this feat: aquatic, arctic, desert, forest,
              mountain, plains, sky, swamp, or underground.
              <br />
              <br />
              <b>Special:</b> You can select this feat more than once, choosing
              a different type of terrain each time.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Deputy",
    source: "Guns & Gears",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Wisdom"],
    skillTraining: ["Survival", "Hunting Lore"],
    feat: "Experienced Tracker",
    description: (
      <span>
        While your life may have taken some twists and turns in the intervening
        years, you were once deputized as the lawful protector of a community.
        While the role was temporary and you’ve since turned in your badge, that
        responsibility shaped you. Whenever a community is in trouble, and the
        sheriff is nowhere to be found, residents call on you to capture a
        criminal, rescue the mayor’s offspring from bandits, or go toe to toe
        with outlaws.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Wisdom, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Hunting Lore skill. You
        gain the Experienced Tracker skill feat.
        <Feat
          id={0}
          name="Experienced Tracker"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              Tracking is second nature to you, and when necessary you can
              follow a trail without pause. You can Track while moving at full
              Speed by taking a –5 penalty to your Survival check. If you’re a
              master in Survival, you don’t take the –5 penalty. If you’re
              legendary in Survival, you no longer need to roll a new Survival
              check every hour when tracking, though you still need to roll
              whenever there are significant changes in the trail.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Desert tracker",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Survival", "Desert Lore"],
    feat: "Experienced Tracker",
    description: (
      <span>
        You’re at home blazing trails in the burning sands, and you made a
        living guiding or following creatures in the desert. You might be a
        native nomad, an experienced desert guide, a naturalist, a bandit driven
        into the dunes by the law—or all of the above.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Desert Lore skill. You gain
        the Experienced Tracker skill feat.
        <Feat
          id={0}
          name="Experienced Tracker"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              Tracking is second nature to you, and when necessary you can
              follow a trail without pause. You can Track while moving at full
              Speed by taking a –5 penalty to your Survival check. If you’re a
              master in Survival, you don’t take the –5 penalty. If you’re
              legendary in Survival, you no longer need to roll a new Survival
              check every hour when tracking, though you still need to roll
              whenever there are significant changes in the trail.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Detective",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Society", "Underworld Lore"],
    feat: "Streetwise",
    description: (
      <span>
        You solved crimes as a police inspector or took jobs for wealthy clients
        as a private investigator. You might have become an adventurer as part
        of your next big mystery, but likely it was due to the consequences or
        aftermath of a prior case.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Underworld Lore skill. You
        gain the Streetwise skill feat.
        <Feat
          id={0}
          name="Streetwise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You know about life on the streets and feel the pulse of your
              local settlement. You can use your Society modifier instead of
              your Diplomacy modifier to Gather Information. In any settlement
              you frequent regularly, you can use the Recall Knowledge action
              with Society to know the same sorts of information that you could
              discover with Diplomacy to Gather Information. The DC is usually
              significantly higher, but you know the information without
              spending time gathering it. If you fail to recall the information,
              you can still subsequently attempt to Gather Information normally.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Diobel pearl diver",
    source: "Lost omens: world guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Dexterity"],
    skillTraining: ["Athletics", "Ocean Lore"],
    feat: "Underwater Marauder",
    description: (
      <span>
        You spent a portion of your youth diving and gathering precious pearls
        under the attentive eyes of Kortos Consortium merchants.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Dexterity, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Ocean Lore skill. You gain
        the Underwater Marauder skill feat.
        <Feat
          id={0}
          name="Underwater Marauder"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You’ve learned to fight underwater. You are not flat-footed while
              in water, and you don’t take the usual penalties for using a
              bludgeoning or slashing melee weapon in water.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Discarded duplicate",
    source: "Guns & gears",
    tags: [],
    abilityBoost: ["Free", "Free", "Free"],
    skillTraining: [],
    feat: "—",
    description: (
      <span>
        Someone created you for a specific purpose. Some important person, be
        they a storied royal, a contentious politician, or a stark military
        leader, needed a body double for their most dangerous appearances. Using
        a mixture of fringe science and magic, you were commissioned and trained
        to emulate this person in every way, and have stood in for them in
        countless deadly circumstances. You may or may not know the reason
        behind your decommissioning, but whoever discarded you didn’t finish you
        off. Now, the world is yours to explore—but “you” may have a bold or
        brutish reputation, or the individual you were duplicating may be long
        dead. Regardless of the fate of this individual, your way of life has
        changed drastically.
        <br />
        <br />
        You and the GM can work out how to incorporate your previous life into
        your story. The GM can keep this knowledge hidden even from you, or you
        or another character know what happened. You and the GM can also leave
        the information unspecified and fill it in later.
        <br />
        <br />
        You gain three free ability boosts. You choose two, and the GM chooses
        one based on the attributes of the character you were built to
        duplicate.
      </span>
    ),
  },
  {
    name: "Disciple of the gear",
    source: "Guns & Gears",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Crafting", "Lore"],
    feat: "Quick Repair",
    description: (
      <span>
        While many regard science and faith as incompatible, you believe
        scientific advancement is your deity’s will. Perhaps you’re a follower
        of Brigh, Casandalee, or some other god of technology, or perhaps you
        see the furnaces and sparks of modernity as the latest manifestation of
        Sarenrae’s flame or Gozreh’s lightning—whatever the case, you’re always
        willing to spread the word of your deity, and you’ve learned some basic
        tinkering to show how your deity’s focus can increase the common
        standard of living.
        <br /> <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Lore skill for the deity
        you worship. You gain the Quick Repair skill feat.
        <Feat
          id={0}
          name="Quick Repair"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              You take 1 minute to Repair an item. If you’re a master in
              Crafting, it takes 3 actions. If you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Doomcaller",
    source: "Lost omens: travel guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Occultism", "Star Lore"],
    feat: "Quick Repair",
    description: (
      <span>
        In the stars you see not guidance or wisdom but a twinkling door to the
        impending end of all things. You might have been raised in this
        ideology, gleaned it from superstition, or received a prophetic vision.
        Regardless, you’ve come to view the stars and whatever power they evoke
        as a path to doom, a curse to warn the masses. Others might spurn your
        warnings, while some might join you in enlightening the ignorant. To
        you, there’s no greater truth than the coming end, and you know that
        whatever the cause for it will come from the stars—or perhaps the stars
        are just a gate to a more terrifying beyond.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Occultism and Star Lore. You also gain the Stellar
        Misfortune action.
        <br />
        <br />
        Stellar Misfortune{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one action icon"
        />{" "}
        (divination, misfortune, occult)
        <br />
        <br />
        <b>Frequency:</b> once per day; <b>Trigger:</b> A creature you can see
        is about to attempt a saving throw, attack roll, or skill check;{" "}
        <b>Requirements:</b> You must be under the night sky with the stars
        visible; <b>Effect:</b> You call upon the power of a dooming star,
        exacerbating the target’s bad luck. The target must roll the triggering
        check twice and take the worse result.
      </span>
    ),
  },
  {
    name: "Dragon scholar",
    source: "Age of ashes: player's guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Intimidation", "Dragon Lore"],
    feat: "Intimidating Glare",
    description: (
      <span>
        Dragons have fascinated you for as long as you can remember. The potent
        power they possess, the long lives they lead, the ancient traditions
        they inspire—whatever the source of your interest, you’ve spent much of
        your life to this point immersed in all things draconic. These studies
        have bolstered your self-confidence and given you a wide range of
        methods and tactics you can use to impose your will on others.
        <br />
        <br />
        You’ve likely chosen to attend the Call for Heroes as a way to seek
        funds as an adventurer to afford more texts about dragons or perhaps out
        of a desire to encounter one in real life.
        <br />
        <br />
        Choose two ability boosts. One must be Strength or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Dragon Lore skill. You
        gain the Intimidating Glare skill feat.
        <Feat
          id={0}
          name="Intimidating Glare"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              You can Demoralize with a mere glare. When you do, Demoralize
              loses the auditory trait and gains the visual trait, and you don’t
              take a penalty if the creature doesn’t understand your language.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Dreams of vengance",
    source: "Gatewalkers player's guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Constitution", "Strength"],
    skillTraining: ["Athletics", "Gladiator Lore"],
    feat: "Blasting Beams & Titan Wrestler",
    description: (
      <span>
        You’ve known strife your whole life, whether on the battlefield, in the
        arena, or simply living your day-to-day life. When you’re not thinking
        about your next brawl, you’re turning over memories of traitorous rivals
        and troublesome betrayers who’ve wronged you in the past. The sight of
        your enemies broken and maimed, then, greatly appealed to you when you
        glimpsed through a mysterious glowing archway during the Missing Moment.
        But when you stepped through the gate, you found yourself back where you
        started, with no indications of your exacted revenge anywhere in sight.
        You nearly burned down the countryside in frustrated rage, only
        realizing afterward the magnitude of the fiery new power you wielded.
        Fiery rays of energy you could shoot from your eyes—these, no doubt,
        would come in handy.
        <br />
        <br />
        Your deviant abilities are of the dragon classification. You gain the
        Blasting Beams deviant feat with the fire type. As a quirk, your pupils
        are shaped like curved arches. When you use a deviant ability, the
        centers of your pupils shine with light, like the glowing gateways of
        the Missing Moment.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Strength, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Gladiator Lore skill. You
        gain the Titan Wrestler skill feat.
        <Feat
          id={0}
          name="Blasting Beams"
          tags={["rare", "attack", "deviant", "evocation", "magical"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              A directed beam of heat or an arc of lightning is one of the
              simplest ways to project energy. You fire a blast or beam from one
              hand. Make an attack roll against a creature within 30 feet. If
              you succeed, the beam deals 1d6 damage for every 2 levels you have
              to the target, or double damage on a critical success.
              <br />
              <br />
              <b>Awakening:</b> Your beams blast through targets. Instead of
              making an attack roll to damage a single creature within 30 feet,
              you can use Blasting Beams as a 2-action activity to damage all
              creatures in a 60-foot line, with a basic Reflex save.
              <br />
              <br />
              <b>Awakening:</b> You can choose to launch smaller, quicker beams
              from your eyes instead. These deal d4s instead of d6s, but the
              attack has the agile trait, and you don’t need a hand free to make
              it, though your eyes must be uncovered.
            </span>
          }
        />
        <Feat
          id={0}
          name="Titan Wrestler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can attempt to Disarm, Grapple, Shove, or Trip creatures up to
              two sizes larger than you, or up to three sizes larger than you if
              you’re legendary in Athletics.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Driver",
    source: "Guns & Gears",
    tags: [],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Acrobatics", "Piloting Lore"],
    feat: "Assurance",
    description: (
      <span>
        You practically live behind the controls of a vehicle, and can handle
        just about anything the road, waves, and sky can throw at you. You
        likely adventure to test your skills in unusual environments and new and
        interesting vehicles.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Dexterity, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Acrobatics skill and the Piloting Lore skill. You
        gain the Assurance skill feat with Piloting Lore.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers).
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Droskari disciple",
    source: "Fires of the Haunted City",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Droskar Lore"],
    feat: "Skill Training",
    description: (
      <span>
        You grew up in the church of the Dark Smith, where you learned the value
        of hard work and achieving vocational mastery.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You gain the Skill Training skill feat, and you’re trained in the
        Droskar Lore skill.
        <Feat
          id={0}
          name="Skill Training"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> Intelligence 12.
              </span>
              <br />
              You become trained in the skill of your choice.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times, choosing
              a new skill to become trained in each time.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Eclectic scholar",
    source: "Sky king's tomb: player's guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Occultism", "Dwarven Pantheon Lore"],
    feat: "Quick Identification",
    description: (
      <span>
        Understanding history isn’t just about translating old laws and reading
        about who invaded whom; it’s also packed with magical outbursts,
        extraplanar interventions, and unexplained oddities not yet understood
        by modern science. You have a knack for absorbing esoteric trivia and
        unraveling past supernatural events. Your studies recently drew you to
        the dwarven city of Tar-Kazmukh, whose Blue Warders maintain an
        eclectically magical library. Perusing its shelves didn’t answer your
        most burning questions, but it did earn you some friends, expose you to
        a dizzying array of dwarven religious lore, and introduce you to some
        intriguing mysteries buried in Highhelm’s history.
        <br />
        <br />
        Believing that Highhelm might provide you with greater opportunities, a
        Blue Warder named Rosha Coppervein facilitated introductions between you
        and their adoptive clan, Clan Tolorr. It seems your credentials and
        whatever Rosha wrote on your behalf made an impression; within a week,
        you received an invitation to Highhelm and travel funds to study with
        Tolorr sages! The shy Rosha has stayed in Tar-Kazmukh for now, enjoying
        its relative quiet, but you know that they’ll join you in a few weeks
        for Tolorr’s Family Festival.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Occultism skill and the Dwarven Pantheon Lore
        skill, an uncommonly broad Lore skill that pertains to Torag’s faith and
        those faiths of his divine family. You gain the Quick Identification
        skill feat.
        <br />
        <br />
        <b>Connection:</b> Rosha Coppervein, a Blue Warder who married into Clan
        Tolorr
        <br />
        <br />
        <b>Reputation Points:</b> +0
        <Feat
          id={0}
          name="Quick Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Arcana, Nature, Occultism or
                Religion.
              </span>
              <br />
              You can Identify Magic swiftly. You take only 1 minute when using
              Identify Magic to determine the properties of an item, ongoing
              effect, or location, rather than 10 minutes. If you’re a master,
              it takes a 3-action activity, and if you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Eclipseborn",
    source: "lost omens: travel guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Charisma", "Constitution"],
    skillTraining: ["Lore"],
    feat: "—",
    description: (
      <span>
        You were born at the exact moment of a solar or lunar eclipse. At the
        eclipse’s junction, or not long after, a catastrophe fell upon the area
        of your birth—perhaps it affected only the people around you, a city, or
        even spanned the entire region. Whatever the scope, those present at
        your arrival came to believe the eclipse was the omen of ill fortune,
        and you were its harbinger. You grew up distinctly aware others viewed
        you as a child of misfortune and, to a certain extent, they were right.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        Decide with the GM what catastrophic event coincided with your birth;
        you’re trained in a Lore skill related to that event. You can cast ill
        omen as an occult innate spell once per day. After you Cast this Spell,
        but before you regain the ability to cast it the following day, the GM
        can force you to reroll a successful saving throw, attack roll, or skill
        check as misfortune finds its way back to you. This is a misfortune
        effect. If this effect causes you to fail the associated saving throw,
        attack roll, or skill check, you can cast ill omen again a second time
        that day.
      </span>
    ),
  },
  {
    name: "Eclectic scholar",
    source: "Sky king's tomb: player's guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Occultism", "Dwarven Pantheon Lore"],
    feat: "Quick Identification",
    description: (
      <span>
        Understanding history isn’t just about translating old laws and reading
        about who invaded whom; it’s also packed with magical outbursts,
        extraplanar interventions, and unexplained oddities not yet understood
        by modern science. You have a knack for absorbing esoteric trivia and
        unraveling past supernatural events. Your studies recently drew you to
        the dwarven city of Tar-Kazmukh, whose Blue Warders maintain an
        eclectically magical library. Perusing its shelves didn’t answer your
        most burning questions, but it did earn you some friends, expose you to
        a dizzying array of dwarven religious lore, and introduce you to some
        intriguing mysteries buried in Highhelm’s history.
        <br />
        <br />
        Believing that Highhelm might provide you with greater opportunities, a
        Blue Warder named Rosha Coppervein facilitated introductions between you
        and their adoptive clan, Clan Tolorr. It seems your credentials and
        whatever Rosha wrote on your behalf made an impression; within a week,
        you received an invitation to Highhelm and travel funds to study with
        Tolorr sages! The shy Rosha has stayed in Tar-Kazmukh for now, enjoying
        its relative quiet, but you know that they’ll join you in a few weeks
        for Tolorr’s Family Festival.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Occultism skill and the Dwarven Pantheon Lore
        skill, an uncommonly broad Lore skill that pertains to Torag’s faith and
        those faiths of his divine family. You gain the Quick Identification
        skill feat.
        <br />
        <br />
        <b>Connection:</b> Rosha Coppervein, a Blue Warder who married into Clan
        Tolorr
        <br />
        <br />
        <b>Reputation Points:</b> +0
        <Feat
          id={0}
          name="Quick Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Arcana, Nature, Occultism or
                Religion.
              </span>
              <br />
              You can Identify Magic swiftly. You take only 1 minute when using
              Identify Magic to determine the properties of an item, ongoing
              effect, or location, rather than 10 minutes. If you’re a master,
              it takes a 3-action activity, and if you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Eidolon contact",
    source: "Secrets of magic",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Arcana, Nature, Occultism, or Religion", "Lore"],
    feat: "Dubious Knowledge",
    description: (
      <span>
        You’ve come into contact with a disembodied being of magical essence
        known as an eidolon. You might have forged a powerful conduit with that
        eidolon, allowing you to manifest it as a summoner, but it’s much more
        likely that you lost contact over time, though not before learning a few
        half-remembered secrets. If you lost contact, you might have become an
        adventurer to try to reach the eidolon again, or to be sure that you’re
        rid of it forever.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in your choice of Arcana, Nature, Occultism, or Religion,
        and a Lore skill for the creature associated with your contacted eidolon
        (such as Angel Lore or Dragon Lore). You gain the Dubious Knowledge
        skill feat.
        <Feat
          id={0}
          name="Dubious Knowledge"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in a skill with the Recall
                Knowledge action.
              </span>
              <br />
              You’re a treasure trove of information, but not all of it comes
              from reputable sources. When you fail (but don’t critically fail)a
              Recall Knowledge check using any skill, you learn a bit of true
              knowledge and a bit of erroneous knowledge, but you don’t have any
              way to differentiate which is which.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Eldrich anatomist",
    source: "Ruins of Gauntlight, AbominationVaults: Player's Guide",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Medicine", "Fleshwarp Lore"],
    feat: "Assurance",
    description: (
      <span>
        You’re a trained physician who can ably tend wounds of many kinds. But
        more than a practitioner, you’re a scholar. Some cultures shape flesh to
        extreme degrees, creating aberrations from humanoid forms. The
        fleshforges of distant Nex practice this fleshwarping, as do certain
        subterranean societies you hope to one day study—preferably from a safe
        and clinical distance.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill and the Fleshwarp Lore skill. You
        gain the Assurance skill feat with Medicine.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers).
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Elementally infused",
    source: "Rage of elements",
    tags: ["rare"],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Medicine", "Lore"],
    feat: "—",
    description: (
      <span>
        You were exposed to a strong burst of elemental essence originating
        directly from an elemental plane, most likely caused by a planar breach.
        Your body absorbed the elemental essence with no ill effects, and now it
        coalesces within you. With time, you’ve learned to project elemental
        power in a manner safe to you but still deadly to others.
        <br /> <br />
        Choose two attribute boosts. One must be to Constitution or Charisma,
        and one is a free attribute boost.
        <br />
        <br />
        Choose one elemental plane: Air, Earth, Fire, Metal, Water, or Wood. You
        are trained in the corresponding Lore skill: Plane of Air Lore, Plane of
        Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of Water
        Lore, or Plane of Wood Lore. You also gain a cantrip according to your
        chosen plane: air gale blast SoM; Earth: scatter scree SoM; Fire:
        ignition; Metal: needle darts; Water spout SoM, or wood root reading.
        You can cast this spell as a primal innate spell at will.
      </span>
    ),
  },
  {
    name: "Emancipated",
    source: "Age of Ashes: Player's Guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Stealth", "Kintargo Lore"],
    feat: "Terrain Stalker",
    description: (
      <span>
        Until recently, the nation of Ravounel was part of the larger nation of
        Cheliax, where the church of Asmodeus is the law and slaves are traded
        freely in the open market. You had the poor fortune to be born into
        slavery, but the good luck to have grown up in the city of Kintargo.
        When Ravounel seceded from Cheliax, the leaders of this new nation freed
        all slaves, and you’ve wasted no time in exploring and establishing your
        new life. How and why you’ve come to Breachill is left to you to
        decide—but the fact that you feel empowered to determine your own
        destiny continues to drive you!
        <br />
        <br />
        The chance to become an adventurer has excited you for some time, as you
        hope to build a new life for yourself as a hero rewarded with fame and
        fortune. Joining the Call for Heroes is a great opportunity to find a
        group to adventure with.
        <br />
        <br />
        Choose two ability boosts. One must be Dexterity or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Stealth skill and the Kintargo Lore skill. You
        gain the Terrain Stalker skill feat.
        <Feat
          id={0}
          name="Terrain Stalker"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Stealth.
              </span>
              <br />
              Select one type of difficult terrain from the following list:
              rubble, snow, or underbrush. While undetected by all non-allies in
              that type of terrain, you can Sneak without attempting a Stealth
              check as long as you move no more than 5 feet and do not move
              within 10 feet of an enemy at any point during your movement. This
              also allows you to automatically approach creatures to within 15
              feet while Avoiding Notice during exploration as long as they
              aren’t actively Searching or on guard.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, choose a different type of terrain.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Emissary",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Society", "Lore"],
    feat: "Multilingual",
    description: (
      <span>
        As a diplomat or messenger, you traveled to lands far and wide.
        Communicating with new people and forming alliances were your stock and
        trade.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and a Lore skill related to one city
        you’ve visited often. You gain the Multilingual skill feat.
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Empty Whispters",
    source: "Dark Archive",
    tags: ["rare"],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Occultism", "Planar Rift Lore"],
    feat: "—",
    description: (
      <span>
        You knew someone once, and now you know only a life stitched together
        and healed over, nary even a scar remaining. You hear voices of souls
        that have fallen through the cracks of reality, creatures who have been
        removed from memory, banished planar entities, and similar. Their
        whispers guide you.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Occultism skill and the Planar Rift Lore skill.
        You get a Planar Rift Lore check to sense planar rifts, even if you
        aren’t specifically Investigating or Searching for them, as well as
        locations where magic has been used to remove the memory of an object or
        creature from existence.
      </span>
    ),
  },
  {
    name: "Energy scarred",
    source: "Secrets of Magic",
    tags: ["rare", "pervasive magic"],
    abilityBoost: ["Free", "Constitution"],
    skillTraining: ["Lore"],
    feat: "—",
    description: (
      <span>
        Exposure to a significant magical event overloaded you with magical
        energy. Perhaps you were exposed to dangerous levels of magical energy
        that left you near death, or it built up over long-term exposure to a
        powerful source of magic.
        <br />
        <br />
        Choose two ability boosts. One must be Constitution and one is a free
        ability boost.
        <br />
        <br />
        Your innate magical trait is primal. Choose acid, cold, electricity,
        fire, force, negative, positive, or sonic. You are trained in a Lore
        skill associated with the chosen energy (such as Fire Lore) and you gain
        resistance to that energy type equal to half your level (minimum 1).
      </span>
    ),
  },
  {
    name: "Entertainer",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Performance", "Theater Lore"],
    feat: "Fascinating Performance",
    description: (
      <span>
        Through an education in the arts or sheer dogged practice, you learned
        to entertain crowds. You might have been an actor, a dancer, a musician,
        a street magician, or any other sort of performer.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Performance skill and the Theater Lore skill. You
        gain the Fascinating Performance skill feat.
        <Feat
          id={0}
          name="Fascinating Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              <br />
              When you Perform, compare your result to the Will DC of one
              observer. If you succeed, the target is fascinated by you for 1
              round. If the observer is in a situation that demands immediate
              attention, such as combat, you must critically succeed to
              fascinate it and the Perform action gains the incapacitation
              trait. You must choose which creature you’re trying to fascinate
              before you roll your check, and the target is then temporarily
              immune for 1 hour.
              <br />
              <br />
              If you’re an expert in Performance, you can fascinate up to four
              observers; if you’re a master, you can fascinate up to 10
              observers; and if you’re legendary, you can fascinate any number
              of observers at the same time.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Ex-con token guard",
    source: " trained in Arcana, Nature, Occultism, or Religion",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Thievery", "Legal Lore"],
    feat: "Pickpocket",
    description: (
      <span>
        Not everyone starts life on easy street—your own experience is testament
        to that. You took a wrong turn at some point early on and became a
        career criminal. Perhaps you were a petty pickpocket, or maybe you’ve
        even murdered someone. Either way, your crimes landed you with a
        transformative prison sentence in the Brine prison. Only then did you
        realize that something needed to change. After your release, you
        dedicated yourself to helping other downtrodden individuals and those
        forced to resort to crime to survive. You joined the Coins District
        Guard, but soon learned that this precinct was a haven for the very
        corruption you sought to undo. Your efforts at reform never took root
        and you feared that your decision to become an officer of the law was a
        huge mistake.
        <br />
        <br />
        You transferred to the Edgewatch, the Precipice Quarter’s new precinct,
        in the hope that you might meet others who sought to help—not
        exploit—Absalom’s misguided.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Thievery skill and your choice of Legal Lore or
        Underworld Lore. You gain a +1 circumstance bonus to Deception,
        Diplomacy, and Intimidation checks to interact with Token Guards and
        convicted criminals such as prison inmates. You gain the Pickpocket
        skill feat.
        <Feat
          id={0}
          name="Pickpocket"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Thievery.
              </span>
              <br />
              You can Steal or Palm an Object that’s closely guarded, such as in
              a pocket, without taking the –5 penalty. You can’t steal objects
              that would be extremely noticeable or time consuming to remove
              (like worn shoes or armor or actively wielded objects). If you’re
              a master in Thievery, you can attempt to Steal from a creature in
              combat or otherwise on guard. When doing so, Stealing requires 2
              manipulate actions instead of 1, and you take a –5 penalty.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "False Medium",
    source: "Secrets of Magic",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Occultism", "Fortune-Telling Lore"],
    feat: "Deceptive Worship",
    description: (
      <span>
        There are people in this world who possess the ability to pierce the
        veil between the world of the living and the world of the dead, allowing
        them to communicate with spirits. You... are not one of them. But you
        know enough about the occult, as well as cold reading tricks and various
        practices from local religions, to scam your way into people’s
        coinpurses. Unlike a through-and-through charlatan, there’s some real
        occult methodology behind your flimflam, but that’s likely cold comfort
        to the people you swindle. Whether you decided to take a more righteous
        path, were caught and pledged to make it right, or still slip in a few
        “séances” between adventures, you’ve taken to an adventuring lifestyle
        as you move from place to place.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in Occultism and Fortune-Telling Lore. You gain the
        Deceptive Worship skill feat.
        <Feat
          id={0}
          name="Deceptive Worship"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Occultism.
              </span>
              <br />
              Members of your cult frequently pass themselves off as worshippers
              of other religions. You can use Occultism instead of Deception to
              Impersonate a typical worshipper of another faith or to Lie
              specifically to claim you are a member of the faith you are
              Impersonating. You still need to use the Deception skill to
              Impersonate a specific worshipper or to perform other deceptive
              actions, such as attempting to Lie about any other matter.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Farmhand",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Athletics", "Farming Lore"],
    feat: "Assurance",
    description: (
      <span>
        With a strong back and an understanding of seasonal cycles, you tilled
        the land and tended crops. Your farm could have been razed by invaders,
        you could have lost the family tying you to the land, or you might have
        simply tired of the drudgery, but at some point you became an
        adventurer.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Farming Lore skill. You
        gain the Assurance skill feat with Athletics.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers).
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Farmsteader",
    source: "Guns & Gears",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Survival", "Farming Lore"],
    feat: "Forager",
    description: (
      <span>
        You built your house using wood from the trees surrounding it. Raised it
        up from the dirt and called it home. You thought that it would be where
        you would grow old and die. But despite your best efforts, you were
        wrong. The land that once gave you food fell fallow, and dust took to
        the air and choked the livestock. Now you wander the world as an
        adventurer. Are you in search of a new place to settle down and try
        again, or have you become disillusioned by your old dreams, leading you
        to seek out a new purpose?
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Farming Lore skill. You
        gain the Forager skill feat.
        <Feat
          id={0}
          name="Forager"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              While using Survival to Subsist, if you roll any result worse than
              a success, you get a success. On a success, you can provide
              subsistence living for yourself and four additional creatures, and
              on a critical success, you can take care of twice as many
              creatures as on a success.
              <br />
              <br />
              Each time your proficiency rank in Survival increases, double the
              number of additional creatures you can take care of on a success
              (to eight if you’re an expert, 16 if you’re a master, or 32 if
              you’re legendary). You can choose to care for half the number of
              additional creatures and provide a comfortable living instead of
              subsistence living.
              <br />
              <br />
              Multiple smaller creatures or creatures with significantly smaller
              appetites than a human are counted as a single creature for this
              feat, and larger creatures or those with significantly greater
              appetites each count as multiple creatures. The GM determines how
              much a non-human creature needs to eat.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Feral child",
    source: "Advanced Player's Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Strength", "Dexterity", "Constitution"],
    skillTraining: ["Nature", "Survival"],
    feat: "Forager",
    description: (
      <span>
        You spent your youth in the wilderness, living close to or perhaps
        raised by animals. You have a close, mystical connection with these
        animals and gained certain abilities from them, though this limited your
        well-roundedness in mental pursuits.
        <br />
        <br />
        Choose one ability boost. It must be Strength, Dexterity, or
        Constitution. b<br />r You are trained in Nature and Survival. You gain
        low-light vision (or darkvision if you already had low-light vision),
        imprecise scent with a range of 30 feet, and the Forager skill feat.
        <Feat
          id={0}
          name="Forager"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              While using Survival to Subsist, if you roll any result worse than
              a success, you get a success. On a success, you can provide
              subsistence living for yourself and four additional creatures, and
              on a critical success, you can take care of twice as many
              creatures as on a success.
              <br />
              <br />
              Each time your proficiency rank in Survival increases, double the
              number of additional creatures you can take care of on a success
              (to eight if you’re an expert, 16 if you’re a master, or 32 if
              you’re legendary). You can choose to care for half the number of
              additional creatures and provide a comfortable living instead of
              subsistence living.
              <br />
              <br />
              Multiple smaller creatures or creatures with significantly smaller
              appetites than a human are counted as a single creature for this
              feat, and larger creatures or those with significantly greater
              appetites each count as multiple creatures. The GM determines how
              much a non-human creature needs to eat.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Feybound",
    source: "Advanced Player's Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Fey Lore"],
    feat: "—",
    description: (
      <span>
        You have spent time in the First World or another realm of the fey and
        aren’t entirely the same person you were before. Perhaps you made a
        purchase at the legendary Witchmarket or partook deeply of fey food and
        wine. Whatever the case, willingly or inadvertently, you made a bargain
        with the fey, the benefits of which come at a price.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br /> <br />
        You are trained in Fey Lore and gain the Fey’s Fortune free action. You
        must follow some rule or limitation as part of your pact with the fey.
        If you violate the rule, you lose Fey’s Fortune until you receive the
        effects of a successful atone ritual using the Nature skill. The exact
        limitation is up to you and the GM, but the most common requirement is
        that you must fulfill a single request from any fey who knows your name.
        <br />
        <br />
        Fey’s Fortune{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one action icon"
        />{" "}
        (concentrate, fortune)
        <br />
        <br />
        <b>Frequency:</b> once per day; <b>Trigger:</b> You attempt a skill
        check and haven’t yet rolled; <b>Effect:</b> Roll the skill check twice
        and use the better result.
      </span>
    ),
  },
  {
    name: "Field medic",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Medicine", "Warfare Lore"],
    feat: "Battle Medicine",
    description: (
      <span>
        In the chaotic rush of battle, you learned to adapt to rapidly changing
        conditions as you administered to battle casualties. You patched up
        soldiers, guards, or other combatants, and learned a fair amount about
        the logistics of war.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill and the Warfare Lore skill. You
        gain the Battle Medicine skill feat.
        <Feat
          id={0}
          name="Battle Medicine"
          tags={["general", "healing", "manipulate", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <b>Prerequisites:</b> trained in Medicine.
              <br />
              <br />
              <span className="frequency">
                <b>Requirements:</b> You’re holding or wearing healer’s tools.
              </span>
              <br />
              You can patch up wounds, even in combat. Attempt a Medicine check
              with the same DC as for Treat Wounds and restore the corresponding
              amount of HP; this doesn’t remove the wounded condition. As with
              Treat Wounds, you can attempt checks against higher DCs if you
              have the minimum proficiency rank. The target is then temporarily
              immune to your Battle Medicine for 1 day.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Fightbreaker",
    source: "Lost Omens: Highhelm",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Diplomacy", "Lore"],
    feat: "Group Impression",
    description: (
      <span>
        You have a knack for picking up on simmering tensions and calming frayed
        nerves. You rely on your intuition to discern how and when violence is
        imminent, and on your skills—diplomatic and otherwise—to deescalate
        tense situations. You might choose the adventuring life to tackle new
        and unfamiliar conflicts, or be trying to escape retaliation from those
        who thrive on violence and resent your ability to keep the peace.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Lore skill for the city or
        settlement you lived in when you became a Fightbreaker. You gain the
        Group Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Final blade survivor",
    source: "Lost Omens: World Guide",
    tags: [],
    abilityBoost: ["Free", "Charisma", "Wisdom"],
    skillTraining: ["Deception", "Revolution Lore"],
    feat: "Charming Liar",
    description: (
      <span>
        You fell prey to the whims of the Galtan mob and were scheduled for
        execution by final blade, but through skill—or sheer luck—you managed to
        talk your way out of it.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Deception skill and the Revolution Lore skill. You
        gain the Charming Liar skill feat.
        <Feat
          id={0}
          name="Charming liar"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              <br />
              Your charm allows you to win over those you lie to. When you get a
              critical success using the Lie action, the target’s attitude
              toward you improves by one step, as though you’d succeeded at
              using Diplomacy to Make an Impression. This works only once per
              conversation, and if you critically succeed against multiple
              targets using the same result, you choose one creature’s attitude
              to improve. You must be lying to impart seemingly important
              information, inflate your status, or ingratiate yourself, which
              trivial or irrelevant lies can’t achieve.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Fire warden",
    source: "Rage of Elements",
    tags: [],
    abilityBoost: ["Free", "Strength", "Constitution"],
    skillTraining: ["Athletics", "Plane of Fire Lore"],
    feat: "Breath Control",
    description: (
      <span>
        Whether you fought against fires in the wilderness or in crowded city
        streets, you’ve had your fair share of dealing with uncontrolled flames.
        Battling thick smoke and toxic fumes, you’ve broken down obstacles to
        save trapped people from a fiery grave, and you’ve studied the nature
        and source of fire itself to try and better learn how to fight it.
        <br />
        <br />
        Choose two attribute boosts. One must be to Strength or Constitution,
        and one is a free attribute boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Plane of Fire Lore skill.
        You gain the Breath Control feat.
        <Feat
          id={0}
          name="Breath Control"
          tags={["general"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              You have incredible breath control, which grants you advantages
              when air is hazardous or sparse. You can hold your breath for 25
              times as long as usual before suffocating. You gain a +1
              circumstance bonus to saving throws against inhaled threats, such
              as inhaled poisons, and if you roll a success on such a saving
              throw, you get a critical success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Firebrand follower",
    source: "Lost Omens: Firebrands",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Athletics or Performance", "Firebrand Lore"],
    feat: "Assurance",
    description: (
      <span>
        You were once rescued or liberated from a hopeless situation by a group
        of Firebrands, and you have since aspired to become a Firebrand to
        continue their legacy. You still follow news of their adventures, and
        you hope to one day meet your heroes as comrades.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You are trained in your choice of the Athletics or Performance skill as
        well as the Firebrand Lore skill. You gain the Assurance skill feat in
        your chosen skill.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers). Special You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Fireworks performers",
    source: "Guns & Gears",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Performance", "Engineering Lore"],
    feat: "Fascinating Performance",
    description: (
      <span>
        Few celebrations in Tian-Xia are complete without a show of fireworks,
        and your job is to make sure they go off without a hitch. You load the
        fireworks, set the fuses, and choreograph the performance, bringing the
        show together in a finale of lights and explosions. Then it’s time to
        pack up your gear and move on to the next civic holiday or religious
        festival. Of course, someone who travels the roads with a pack full of
        high explosives is bound to run into an adventure or two along the way,
        and so over time, your fireworks have been spent in support of that
        life.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Performance skill and the Engineering Lore skill.
        You gain the Fascinating Performance skill feat.
        <Feat
          id={0}
          name="Fascinating Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              <br />
              When you Perform, compare your result to the Will DC of one
              observer. If you succeed, the target is fascinated by you for 1
              round. If the observer is in a situation that demands immediate
              attention, such as combat, you must critically succeed to
              fascinate it and the Perform action gains the incapacitation
              trait. You must choose which creature you’re trying to fascinate
              before you roll your check, and the target is then temporarily
              immune for 1 hour.
              <br />
              <br />
              If you’re an expert in Performance, you can fascinate up to four
              observers; if you’re a master, you can fascinate up to 10
              observers; and if you’re legendary, you can fascinate any number
              of observers at the same time.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Fogfen Tale-teller",
    source: "Ruins of Gauntlight, AbominationVaults: Player's Guide",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Athletics", "Swamp Lore"],
    feat: "Titan Wrestler",
    description: (
      <span>
        You know there are monstrous things out in the swamp known as Fogfen;
        you’ve seen these things through the mist, gliding through the murky
        water and heaving themselves over sodden bits of land. No one in Otari
        believes your tales of swamp monsters from the depths, even when you
        embellish the creatures of your stories with fangs, wings, or tentacles.
        You’ll just have to prove to them that there are truly monsters out
        there, and that they were wrong to doubt you.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in Athletics and the Swamp Lore skill. You gain the Titan
        Wrestler skill feat.
        <Feat
          id={0}
          name="Titan Wrestler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can attempt to Disarm, Grapple, Shove, or Trip creatures up to
              two sizes larger than you, or up to three sizes larger than you if
              you’re legendary in Athletics.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Food trader",
    source: "Blood Lords: Player's Guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Crafting or Society", "Mercantile Lore"],
    feat: "Seasoned or Streetwise",
    description: (
      <span>
        In your past, you accompanied caravans, ships, or both hauling
        foodstuffs out of Geb for export. You might be a Gebbite or a foreigner
        who has decided to work in Geb because of the undeniable opportunities.
        In any case, you’ve traveled between Geb and other nations of the Inner
        Sea and seen firsthand that many nations view Geb with a combination of
        barely disguised revulsion and eagerness for its bountiful food exports.
        Even though you aren’t in that line of business any longer, you
        understand how vital this international trade is to Geb’s prosperity and
        appreciate the hardworking people who work in it.
        <br />
        <br />
        You are still highly regarded by the Export Guild for your past journeys
        on the nation’s behalf. Your party gains 1 Reputation Point with the
        Export Guild at the start of the campaign.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in your choice of the Crafting or Society skill. You gain
        a skill feat: Seasoned if you chose Crafting or Streetwise if you chose
        Society. You’re also trained in Mercantile Lore.
        <Feat
          id={0}
          name="Seasoned"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Alcohol Lore, Cooking Lore, or
                Crafting.
              </span>
              <br />
              You’ve mastered the preparation of many types of food and drink.
              You gain a +1 circumstance bonus to checks to Craft food and
              drink, including potions. If you are a master in one of the
              prerequisite skills, this bonus increases to +2.
            </span>
          }
        />
        <Feat
          id={0}
          name="Streetwise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You know about life on the streets and feel the pulse of your
              local settlement. You can use your Society modifier instead of
              your Diplomacy modifier to Gather Information. In any settlement
              you frequent regularly, you can use the Recall Knowledge action
              with Society to know the same sorts of information that you could
              discover with Diplomacy to Gather Information. The DC is usually
              significantly higher, but you know the information without
              spending time gathering it. If you fail to recall the information,
              you can still subsequently attempt to Gather Information normally.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Fortune Teller",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Occultism", "Fortune-Telling Lore"],
    feat: "Identification",
    description: (
      <span>
        The strands of fate are clear to you, as you have learned many
        traditional forms by which laypeople can divine the future. You might
        have used these skills to guide your community, or simply to make money.
        But even the slightest peek into these practices connects you to the
        occult mysteries of the universe.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Occultism skill and the Fortune-Telling Lore
        skill. You gain the Oddity Identification skill feat.
        <Feat
          id={0}
          name="Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Occultism.
              </span>
              <br />
              You have a sense for spells that twist minds or reveal secrets.
              You gain a +2 circumstance bonus to Occultism checks to Identify
              Magic with the mental, possession, prediction, or scrying traits.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Framed in Ferrous Quarter",
    source: "Outlaws of Alkenstar: Player's Guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Dexterity", "Constitution"],
    skillTraining: ["Crafting", "Engineering Lore"],
    feat: "Specialty Crafting",
    description: (
      <span>
        Everyone knows that Ferrous Quarter isn’t exactly the nicest part of
        Alkenstar. Hard-working laborers, gunsmiths suffering from black lung,
        and red-eyed tinkerers alike can toil their entire lives on these grimy
        streets and still wind up dead in an alley with nothing to show for it.
        You were once one of these humble artisans, until one day, out of
        nowhere, things broke bad.
        <br />
        <br />
        Maybe you hung out with the wrong crowd. Maybe it was just bad luck.
        Whatever the case, you were framed for a crime you didn’t
        commit—larceny, smuggling, possibly even murder. You didn’t stick around
        long enough to find out what, exactly, the shieldmarshals banging on
        your door were charging you with. Now, you’re on the lam, uncertain
        where you’ll be able to get a good night’s sleep, let alone your next
        meal.
        <br />
        <br />
        At least one thing’s for sure, though: before you turned heel and ran
        into the streets, you saw a telltale signature on the arrest warrant. It
        was the scrawl of a corrupt shieldmarshal who’s framed countless other
        hardworking folks in your neighborhood on the basis of cooked-up
        evidence. Yes, you’re sure of it—the crooked guard who took you down is
        none other than Deputy Anjelique Loveless, and you’re determined to
        return the favor.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Engineering Lore skill. You
        gain the Specialty Crafting skill feat.
        <Feat
          id={0}
          name="Specialty Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              Your training focused on Crafting one particular kind of item.
              Select one of the specialties listed below; you gain a +1
              circumstance bonus to Crafting checks to Craft items of that type.
              If you are a master in Crafting, this bonus increases to +2. If
              it’s unclear whether the specialty applies, the GM decides. Some
              specialties might apply only partially. For example, if you were
              making a morningstar and had specialty in woodworking, the GM
              might give you half your bonus because the item requires both
              blacksmithing and woodworking.
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Specialty</th>
                    <th>Applicable items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alchemy*</td>
                    <td>Alchemical items such as elixirs</td>
                  </tr>
                  <tr>
                    <td>Artistry</td>
                    <td>Fine art, including jewelry</td>
                  </tr>
                  <tr>
                    <td>Blacksmithing</td>
                    <td>Durable metal goods, including metal armor</td>
                  </tr>
                  <tr>
                    <td>Bookmaking</td>
                    <td>Books and paper</td>
                  </tr>
                  <tr>
                    <td>Glassmaking</td>
                    <td>Glass, including glassware and windows</td>
                  </tr>
                  <tr>
                    <td>Leatherworking</td>
                    <td>Leather goods, including leather armor</td>
                  </tr>
                  <tr>
                    <td>Pottery</td>
                    <td>Ceramic goods</td>
                  </tr>
                  <tr>
                    <td>Shipbuilding</td>
                    <td>Ships and boats</td>
                  </tr>
                  <tr>
                    <td>Stonemasonry</td>
                    <td>Stone goods and structures</td>
                  </tr>
                  <tr>
                    <td>Tailoring</td>
                    <td>Clothing</td>
                  </tr>
                  <tr>
                    <td>Weaving</td>
                    <td>Textiles, baskets, and rugs</td>
                  </tr>
                  <tr>
                    <td>Woodworking</td>
                    <td>Wooden goods and structures</td>
                  </tr>
                  <tr>
                    <td>
                      * You must have the Alchemical Crafting skill feat to
                      Craft alchemical items
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Free Spirit",
    source: "Lost Omens: Firebrands",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Survival", "Lore"],
    feat: "Forager",
    description: (
      <span>
        You’ve always lived your life straying from the path laid before you.
        Like a leaf blowing in the wind, your journey takes you where it will,
        providing you with a lifestyle free from the bonds of expectation. While
        you might have friends and family in specific towns or cities, you’ve
        chosen not to put down roots in favor of going wherever—and doing
        whatever—you want.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You are trained in the Survival skill and a Lore skill about a specific
        settlement or terrain you have traveled through. You gain the Forager
        skill feat.
        <Feat
          id={0}
          name="Forager"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              While using Survival to Subsist, if you roll any result worse than
              a success, you get a success. On a success, you can provide
              subsistence living for yourself and four additional creatures, and
              on a critical success, you can take care of twice as many
              creatures as on a success.
              <br />
              <br />
              Each time your proficiency rank in Survival increases, double the
              number of additional creatures you can take care of on a success
              (to eight if you’re an expert, 16 if you’re a master, or 32 if
              you’re legendary). You can choose to care for half the number of
              additional creatures and provide a comfortable living instead of
              subsistence living.
              <br />
              <br />
              Multiple smaller creatures or creatures with significantly smaller
              appetites than a human are counted as a single creature for this
              feat, and larger creatures or those with significantly greater
              appetites each count as multiple creatures. The GM determines how
              much a non-human creature needs to eat.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Freed Slave of Absalom",
    source: "Lost Omens: World Guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Society", "Absalom Lore"],
    feat: "Streetwise",
    description: (
      <span>
        As a recently freed slave in Absalom, you belong to a new, close-knit
        social class at the heart of the city’s most important trades.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Absalom Lore skill. You gain
        the Streetwise skill feat.
        <Feat
          id={0}
          name="Streetwise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You know about life on the streets and feel the pulse of your
              local settlement. You can use your Society modifier instead of
              your Diplomacy modifier to Gather Information. In any settlement
              you frequent regularly, you can use the Recall Knowledge action
              with Society to know the same sorts of information that you could
              discover with Diplomacy to Gather Information. The DC is usually
              significantly higher, but you know the information without
              spending time gathering it. If you fail to recall the information,
              you can still subsequently attempt to Gather Information normally.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Friendly Darkmoon Kobold",
    source: "Crown of the Kobold King",
    tags: [],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Diplomacy", "Kobold Lore"],
    feat: "Group Impression",
    description: (
      <span>
        It has taken time, but over the years, you’ve managed to find a place
        among the citizens of Falcon’s Hollow. While many still distrust
        kobolds, they at least see you as a fellow villager, if not a friend,
        and you’ve got quite the talent for quickly convincing larger groups of
        people that you mean them no harm.
        <br />
        <br />
        Choose any two ability boosts. One must be to Wisdom or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and Kobold Lore skill. You gain
        the Group Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Gambler",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Deception", "Games Lore"],
    feat: "Lie to Me",
    description: (
      <span>
        The thrill of the win drew you into games of chance. This might have
        been a lucrative sideline that paled in comparison to the real risks of
        adventuring, or you might have fallen on hard times due to your gambling
        and pursued adventuring as a way out of a spiral.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Deception skill and the Games Lore skill. You gain
        the Lie to Me skill feat.
        <Feat
          id={0}
          name="Lie to Me"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              You can use Deception to weave traps to trip up anyone trying to
              deceive you. If you can engage in conversation with someone trying
              to Lie to you, use your Deception DC if it is higher than your
              Perception DC to determine whether they succeed. This doesn’t
              apply if you don’t have a back-and-forth dialogue, such as when
              someone attempts to Lie during a long speech.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Geb crusader",
    source: "Lost Omens: World Guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Religion", "Undead Lore"],
    feat: "Student of the Canon",
    description: (
      <span>
        You grew up considering the existence of the undead nation of Geb an
        atrocity and trained to one day take part in destroying it and putting
        its vile inhabitants to their final rest. Key to your preparations is a
        thorough study of Pharasma, Urgathoa, and other undead-related deities
        and their philosophies.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Religion skill and the Undead Lore skill. You gain
        the Student of the Canon skill feat.
        <Feat
          id={0}
          name="Student of the Canon"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Religion.
              </span>
              You’ve researched many faiths enough to recognize notions about
              them that are unlikely to be true. If you roll a critical failure
              at a Religion check to Decipher Writing of a religious nature or
              to Recall Knowledge about the tenets of faiths, you get a failure
              instead. When attempting to Recall Knowledge about the tenets of
              your own faith, if you roll a failure, you get a success instead,
              and if you roll a success, you get a critical success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Genie Blessed",
    source: "Secrets of Magic",
    tags: ["rare"],
    abilityBoost: ["Free", "Charisma"],
    skillTraining: ["Diplomacy", "Genie Lore"],
    feat: "",
    description: (
      <span>
        You’ve sought out a powerful genie and requested their blessing, hoping
        to increase your fortune. Your wish was vague, but fortune and the genie
        favored you with a more powerful effect than an ordinary wish, granting
        you bits of wish-twisted luck throughout the rest of your life.
        Meanwhile, other genies of the same kind recognize you as one blessed by
        one of their most powerful nobles, and might treat you with greater
        respect or envy.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma, and one is a free
        ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Genie Lore skill. You gain
        the Wish for Luck free action.
        <br />
        <br />
        Wish for Luck{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one icon icon"
        />{" "}
        (arcane, auditory, divination, fortune)
        <br />
        <br />
        <b>Frequency:</b> once per day; <b>Trigger:</b> You are about to roll an
        attack roll, saving throw, or skill check; <b>Effect:</b> You wish aloud
        for success. Roll the check twice and take the higher result.
      </span>
    ),
  },
  {
    name: "Gladiator",
    source: "Core Rulebook",
    tags: [],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Performance", "Gladiatorial Lore"],
    feat: "Impressive Performance",
    description: (
      <span>
        The bloody games of the arena taught you the art of combat. Before you
        attained true fame, you departed—or escaped—the arena to explore the
        world. Your skill at drawing both blood and a crowd’s attention pay off
        in a new adventuring life.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Performance skill and the Gladiatorial Lore skill.
        You gain the Impressive Performance skill feat.
        <Feat
          id={0}
          name="Impressive Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              Your performances inspire admiration and win you fans. You can
              Make an Impression using Performance instead of Diplomacy.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Goblinblood Orphan",
    source: "Lost Omens: World Guide",
    tags: [],
    abilityBoost: ["Free", "Dexterity", "Constitution"],
    skillTraining: ["Survival", "Goblin Lore"],
    feat: "Assurance",
    description: (
      <span>
        Your family, whether goblin, hobgoblin, or human, died in the
        Goblinblood Wars. Though you were marked by these losses, you managed to
        survive through your own resilience and resourcefulness.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Goblin Lore skill. You gain
        the Assurance skill feat with Survival.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers). Special You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Godless Graycloak",
    source: "Agents of Edgewatch: Player's Guide",
    tags: [],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Religion", "Lore"],
    feat: "Quick Identification",
    description: (
      <span>
        You were a member of a church once, and you saw some things among
        Absalom’s religious elite that put you off piety for good. Maybe it was
        one too many beggars turned away at the temple’s front door, or maybe it
        was a high-ranking priests consistent abuses of power. What got to you
        most, though, was that according to just about every belief system out
        there, sinners and saints, priests and paupers were all alike in one key
        way: they never saw retribution or accolades until buried 6 feet under.
        You wanted more from Absalom. You wanted more from the world. You wanted
        justice now, on this plane, not in some indeterminate afterlife. So you
        left the church and wandered the city, a ghost of your former self.
        <br />
        <br />
        You finally found a like mind in Captain Runewulf, “the Unbeliever,”
        whose reputation and similar distaste for religion inspired you to join
        the Graycloaks. As a sworn protector of the Ascendant Court, you didn’t
        differentiate between Sarenites or Pharasmins, Iomedaeans or
        Norgorberites; if you saw someone in danger, you put your life on the
        line to save them, whatever their place within or outside a church.
        <br />
        <br />
        Your good record has earned you a transfer—temporary or not, the choice
        is yours—to the newly formed Edgewatch, where you’ll use your authority
        to guard the lives of not just Absalomians, but all who have come to
        your grand city to experience its wonders. Choose two ability boosts.
        One must be to Constitution or Wisdom, and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Religion skill and your choice of a specific
        religion Lore skill (such as Iomedae Lore or Norgorber Lore). You gain a
        +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks
        to interact with Graycloaks, priests, and clerics. You gain the Quick
        Identification feat.
        <Feat
          id={0}
          name="Quick Identification"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Arcana, Nature, Occultism or
                Religion.
              </span>
              <br />
              You can Identify Magic swiftly. You take only 1 minute when using
              Identify Magic to determine the properties of an item, ongoing
              effect, or location, rather than 10 minutes. If you’re a master,
              it takes a 3-action activity, and if you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Goldhand arms dealer",
    source: "LGuns & Gears",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Diplomacy", "Mercantile Lore"],
    feat: "Group Impression",
    description: (
      <span>
        You’re a dwarven agent of the Goldhand Lodge, a collection of dwarven
        merchants based out of Dongun Hold who seeks to sell guns far and wide.
        High King Anong Arunak hasn’t expressed approval for such a method of
        distribution yet, but in the meantime you’re still out and about,
        talking up your wares and occasionally providing visceral demonstrations
        of the overwhelming stopping power of your firearms. These
        demonstrations and sales have given you a taste for adventure, and the
        constant threat of piracy has convinced you of the importance of
        adventuring with a group.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in Diplomacy and Mercantile Lore. You gain the Group
        Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Grand council bureaurat",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Charisma", "Intelligence"],
    skillTraining: ["Diplomacy", "Government Lore"],
    feat: "Group Impression",
    description: (
      <span>
        You spent years working as a clerk to a functionary in Absalom’s
        government. Your service taught you a thing or two about rousing
        speeches and manipulating the city’s bureaucracy.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Government Lore skill. You
        gain the Group Impression skill feat.
        <Feat
          id={0}
          name="Group Impression"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              When you Make an Impression, you can compare your Diplomacy check
              result to the Will DCs of two targets instead of one. It’s
              possible to get a different degree of success for each target. The
              number of targets increases to four if you’re an expert, 10 if
              you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Grave robber",
    source: "Book of the Dead",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Stealth", "Underworld Lore"],
    feat: "Experienced Smuggler",
    description: (
      <span>
        Resurrectionist. Body snatcher. No matter what you’re called, you know
        where the bodies are buried, and how many coins they’ll fetch when dug
        up. Adventuring comes naturally to you—in your mind dungeons are just
        oversized tombs—as does returning home with your loot undetected.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Dexterity, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Stealth skill and the Underworld Lore skill. You
        gain the Experienced Smuggler skill feat.
        <Feat
          id={0}
          name="Experienced Smuggler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Stealth.
              </span>
              <br />
              You often smuggle things past the authorities. When the GM rolls
              your Stealth check to see if a passive observer notices a small
              item you have concealed, the GM uses the number rolled or
              10—whichever is higher—as the result of your die roll, adding it
              to your Stealth modifier to determine your Stealth check result.
              If you’re a master in Stealth, the GM uses the number rolled or
              15, and if you’re legendary in Stealth, you automatically succeed
              at hiding a small concealed item from passive observers. This
              provides no benefits when a creature attempts a Perception check
              while actively searching you for hidden items. Due to your
              smuggling skill, you’re more likely to find more lucrative
              smuggling jobs when using Underworld Lore to Earn Income.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Grizzled muchrucker",
    source: "Agents of Edgewatch: Player's Guide",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Survival", "Labor Lore or Underworld Lore"],
    feat: "Experienced Tracker",
    description: (
      <span>
        You’ve served on the Muckruckers, the unofficial guards of the flooded
        Puddles district. The pay’s no good, the conditions are squalid, and
        you’ve seen things during your time on the force that’ve made you
        question your career entirely. Perhaps you joined the group out of a
        sense of duty to your fellow Absalomians, or maybe you felt an
        obligation to help restore your apocalyptic home district to some
        semblance of normalcy. Either way, the traumas you’ve endured, the
        double-crossers who’ve betrayed you, the wretched monsters that have
        crawled out of the muck to assail you—it’s enough to turn an officer to
        weary cynicism or self-destruction through merciful drink.
        <br />
        <br />
        Thankfully, you found an out: an invitation to transfer to the newly
        formed Edgewatch. You accepted the offer in the hope that some fresh
        experience in a new district, surrounded by new people, might reignite
        the hope and passion you felt for the job so long ago.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill, as well as either Labor Lore or
        Underworld Lore. You gain a +1 circumstance bonus to Deception,
        Diplomacy, and Intimidation checks to interact with Muckruckers,
        mercenaries, and adventurers. You gain the Experienced Tracker skill
        feat.
        <Feat
          id={0}
          name="Experienced Tracker"
          tags={["downtime", "general", "manipulate", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              Tracking is second nature to you, and when necessary you can
              follow a trail without pause. You can Track while moving at full
              Speed by taking a –5 penalty to your Survival check. If you’re a
              master in Survival, you don’t take the –5 penalty. If you’re
              legendary in Survival, you no longer need to roll a new Survival
              check every hour when tracking, though you still need to roll
              whenever there are significant changes in the trail.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Guard",
    source: "Core Rulebook",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Intimidation", "Legal Lore or Warfare Lore"],
    feat: "Quick Coercion",
    description: (
      <span>
        You served in the guard, out of either patriotism or the need for coin.
        Either way, you know how to get a difficult suspect to talk. However you
        left the guard, you might think of adventuring as a way to use your
        skills on a wider stage.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Legal Lore or Warfare
        Lore skill. You gain the Quick Coercion skill feat.
        <Feat
          id={0}
          name="Quick Coercion"
          tags={["downtime", "general", "manipulate", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              You can bully others with just a few choice implications. You can
              Coerce a creature after 1 round of conversation instead of 1
              minute. You still can’t Coerce a creature in the midst of combat,
              or without engaging in a conversation.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Gunsmith",
    source: "Guns & Gears",
    tags: [""],
    abilityBoost: ["Free", "Intelligence", "Dexterity"],
    skillTraining: ["Crafting", "Engineering Lore"],
    feat: "Quick Repairn",
    description: (
      <span>
        From a young age, you apprenticed to an experienced gunsmith and over
        time your skill and knowledge rose to match that of your master. Today,
        you can easily repair, modify, or improve nearly any firearm you’ve seen
        before, and even if you haven’t seen it, you’ll break it down to learn
        about what makes it tick in no time. You’ve taken those skills on the
        road, using them to assist yourself and your allies as an adventurer
        when it comes to maintaining their weapons, shields, armor, and more.
        <br />
        <br />
        Choose two ability boosts. One of these boosts must be to Intelligence
        or Dexterity, and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Engineering Lore skill. You
        gain the Quick Repair skill feat.
        <Feat
          id={0}
          name="Quick Repair"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              You take 1 minute to Repair an item. If you’re a master in
              Crafting, it takes 3 actions. If you’re legendary, it takes 1
              action.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hammered by fate",
    source: "Stolen Fate: Player's Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Strength"],
    skillTraining: ["Daemon Lore, Demon Lore, or Devil Lore"],
    feat: "Hefty Hauler",
    description: (
      <span>
        Your life has been difficult, in no small part due to the influence of
        all things fiendish in your past. You might be a tiefling whose heritage
        has resulted in you being shunned or ostracized by society, or you could
        be any ancestry who grew up in a land where fiendish influence
        lingers—such as devil-haunted Cheliax or the realm of Sarkoris Scar,
        where the influence of the Worldwound and its demonic invaders yet
        linger. Perhaps you carry an old scar or wound from a frightening
        encounter with a demon, have a fiend-related element as part of your
        class (such as a sorcerer bloodline or a fiendish patron whom you
        worship), or endured a long‑term affliction from a fiendish source that
        only recently has been alleviated. Whatever the case, fate has thrown
        horror and terror at you at every turn, and that’s taught you to always
        be ready for whatever those fiends might have in store for you next.
        <br />
        <br />
        This background is associated with the suit of Hammers.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength, and one is a free
        ability boost.
        <br />
        <br />
        You gain the Hefty Hauler skill feat and are trained in one of the
        following Lore skills, as fits your history: Daemon Lore, Demon Lore, or
        Devil Lore. You also gain the following free action.
        <br />
        <br />
        Harrow the Fiend{" "}
        <img
          src={require("../assets/img/one_action.png")}
          alt="one action icon"
        />{" "}
        (fortune)
        <br />
        <br />
        <b>Trigger:</b> You start your turn in combat against a foe or foes you
        recognize to be fiends; <b>Frequency:</b> once per day; <b>Effect:</b>{" "}
        You gain a +1 status bonus on all Strikes or spell attack rolls against
        fiends for the duration of combat. Once during combat, you can draw a
        harrow card after you determine if a Strike or spell attack on a fiend
        hits but before you determine damage or effects caused to the fiend. If
        you draw a card from the suit of Hammers, increase the degree of success
        of your Strike or spell attack by one.
        <Feat
          id={0}
          name="Hefty Hauler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can carry more than your frame implies. Increase your maximum
              and encumbered Bulk limits by 2.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Harbor Guard Moonlighter",
    source: "Agents of Edgewatch: Player's Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Strength", "Constitution"],
    skillTraining: ["Athletics", "Sailing Lore or Hunting Lore"],
    feat: "Quick Jump",
    description: (
      <span>
        The Harbor Guard isn’t known for being the most honorable precinct in
        town. A few years after you joined the force, you became disillusioned
        by the rampant corruption within the precinct and the district at large.
        One night, you stumbled on an ad for a local monster hunter’s guild. You
        joined on a whim, but fell in love with the swashbuckling lifestyle of
        an independent bounty hunter. You’ve since earned quite a reputation for
        your nocturnal adventures; everyone still knows that you’re a Harbor
        Guard, but stories of your dungeondelving adventures have long
        overshadowed that facet of your life. Unfortunately, long nights of
        monster‑hunting have negatively impacted your performance at your day
        job, so maybe it wasn’t a surprise when your supervising officer put in
        a transfer request for you, spelling the end of your plucky nighttime
        antics with that particular guild.
        <br />
        <br />
        Despite the decline in your performance, Lieutenant Lavarsus of
        Edgewatch sees potential (and even, maybe, a bit of himself) in you.
        You’re eager to be on a new unit and for the chance to bring your
        monster-hunting skills to a district that has been plagued by such
        supernatural beasts for far too long.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and your choice of Sailing Lore or
        Hunting Lore. You gain a +1 circumstance bonus to Deception, Diplomacy,
        and Intimidation checks to interact with Harbor Guards, ship captains,
        and freelance adventurers. You gain the Quick Jump skill feat.
        <Feat
          id={0}
          name="Quick Jump"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can use High Jump and Long Jump as a single action instead of
              2 actions. If you do, you don’t perform the initial Stride (nor do
              you fail if you don’t Stride 10 feet).
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Harrow-chosen",
    source: "The Worst of All Possible Worlds",
    tags: ["rare"],
    abilityBoost: [
      "Free",
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma",
    ],
    skillTraining: [],
    feat: "",
    description: (
      <span>
        Unbeknownst to you, a powerful divination has confirmed that you’re
        destined for greatness. This divination hints at a great potential
        you’re only just beginning to understand.
        <br />
        <br />
        Select one card from the harrow deck and note its suit and alignment.
        The suit is connected to a specific ability score (hammers [Strength],
        keys [Dexterity], shields [Constitution], books [Intelligence], stars
        [Wisdom], crowns [Charisma]).
        <br />
        <br />
        Choose two ability boosts. One must be to the ability score tied to your
        card’s suit and one is a free ability boost.
        <br />
        <br />
        You gain the ability to cast a common occult innate cantrip of your
        choice and can cast the cantrip at will. A cantrip is heightened to a
        spell level equal to half your level rounded up. When casting the
        cantrip, you can empower it as a free action, tapping into the power of
        the harrow to grant you additional benefits while drawing a card from a
        harrow deck as part of the actions taken to Cast the Spell. This benefit
        is determined by alignment of the card you draw from the deck. The card
        can match both alignment components with yours (true match), match a
        single alignment component with yours (partial match), have no matching
        alignment components (unmatched), or have a diametrically opposed
        alignment to yours (misaligned). If you empower your cantrip in this
        way, you can’t cast that cantrip again until your next daily
        preparations.
        <br />
        <br />
        <b>True match:</b> You gain a +1 circumstance bonus to a saving throw of
        your choice (Fortitude, Reflex, or Will) for 1 minute.
        <br />
        <br />
        <b>Partial match:</b> You gain resistance to one energy type (acid,
        cold, electricity, fire, or sonic) equal to your level for 1 minute.
        <br />
        <br />
        <b>Unmatched:</b> You gain temporary Hit Points equal to twice your
        level. The temporary Hit Points remain for 1 minute.
        <br />
        <br />
        <b>Misaligned:</b> You gain a +5-foot circumstance bonus to your Speeds
        for 1 minute.
      </span>
    ),
  },
  {
    name: "Harrow-led",
    source: "Assault on Hunting Lodge",
    tags: [""],
    abilityBoost: ["Free", "Free"],
    skillTraining: ["Occultism, Performance, or Society", "Harrow Lore"],
    feat: "Dubious Knowledge",
    description: (
      <span>
        You were the subject of a harrow reading at a pivotal point in your
        life, such as on an important birthday, or upon reaching adulthood. The
        reading was eerily accurate and has been relevant, for good or ill, at
        more points in your life than you could call mere coincidence.
        <br />
        <br />
        Randomly determine two harrow suits tied to your character, each
        reflecting a specific ability score. You can do so by drawing cards from
        a harrow deck or by rolling a d6: 1 = hammers (Strength), 2 = keys
        (Dexterity), 3 = shields (Constitution), 4 = books (Intelligence), 5 =
        stars (Wisdom), 6 = crowns (Charisma). The first suit is your aligned
        score, and the second suit is your misaligned score.
        <br />
        <br />
        Choose two ability boosts. One must be to your aligned or misaligned
        score, and one is a free ability boost.
        <br />
        <br />
        You’re trained in your choice of the Occultism, Performance, or Society
        skill and the Harrow Lore skill. You gain the Dubious Knowledge skill
        feat.
        <Feat
          id={0}
          name="Dubious Knowledge"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in a skill with the Recall
                Knowledge action.
              </span>
              <br />
              You’re a treasure trove of information, but not all of it comes
              from reputable sources. When you fail (but don’t critically fail)a
              Recall Knowledge check using any skill, you learn a bit of true
              knowledge and a bit of erroneous knowledge, but you don’t have any
              way to differentiate which is which.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Haunted",
    source: "Agents of Edgewatch: Player's Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Occultism", "Additional Skill"],
    feat: "",
    description: (
      <span>
        You are followed by a spirit or entity, either from childhood or since a
        traumatic or momentous event. You may have seen this entity. Others may
        have seen it as well. You have studied esoteric subjects trying to
        understand your situation, but this presence in your life remains a
        mystery. Whatever this entity is or wants, it influences your life in
        subtle ways, not always good. Sometimes the entity helps you, but at
        other times, its influence is malevolent or harmful. The entity is most
        likely to surface in stressful situations.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You are trained in Occultism and an additional skill in which the
        haunting entity is well-versed, determined by the GM. Any time you
        attempt a skill check for the entity’s skill, the GM can offer you a +1
        circumstance bonus to the check, as though the entity were Aiding you.
        If you accept but fail the check, you are frightened 2 (frightened 4 on
        a critical failure). The initial frightened value can’t be reduced by
        effects that would reduce or prevent the condition (such as a fighter’s
        bravery).
      </span>
    ),
  },
  {
    name: "Haunted citizen",
    source: "Book of the Dead",
    tags: [""],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Diplomacy", "Lore"],
    feat: "No Cause for Alarm",
    description: (
      <span>
        You grew up in a region where undead lurk everywhere. This could be a
        domain as small as a vampire’s fief or as vast as the nation of Ustalav.
        As an ever-present concern, the undead greatly shaped your life. Living
        with fear became an everyday skill... as did pleading for your life.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Lore skill for your home
        settlement. You gain the No Cause for Alarm skill feat.
        <Feat
          id={0}
          name="No Cause for Alarm"
          tags={[
            "auditory",
            "concentrate",
            "emotion",
            "general",
            "linguistic",
            "mental",
            "skill",
          ]}
          action="three_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              You attempt to reduce panic. Attempt a Diplomacy check, comparing
              it to the Will DC of creatures in a 10-foot emanation around you
              who are frightened. Each of them is temporarily immune for 1 hour.
              <br />
              <br />
              <b>Critical Success:</b> Reduce the creature’s frightened value by
              2.
              <br />
              <br />
              <b>Success:</b> Reduce the creature’s frightened value by 1.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Haunting vision",
    source: "Age of Ashes: Player's Guide",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Religion", "Dahak Lore"],
    feat: "Student of the Canon",
    description: (
      <span>
        You’ve been haunted by frightening dreams of fires your whole life. This
        could be the result of a past, near-death experience with fire or it
        might have no obvious source that you know of. Recently, you stumbled
        upon an image, story, or other omen featuring the dragon god of
        destruction, Dahak, and you were struck with an unnerving sense of deja
        vu—you’ve come to think that the draconic deity might have something to
        do with your dreams, and as such have been studying all you can about
        the god. Your visions have bolstered your faith as well; even if you
        don’t worship a specific deity, you have a deep passion for matters of
        faith.
        <br />
        <br />
        Your latest dream, for the first time, had enough details to identify
        its setting—in this last dream, you saw the town of Breachill burning.
        You’ve decided to join the Call for Heroes hoping to save the town you
        fear might burn to the ground soon.
        <br />
        <br />
        Choose two ability boosts. One must be Constitution or Wisdom, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Religion skill and the Dahak Lore skill. You gain
        the Student of the Canon skill feat.
        <Feat
          id={0}
          name="Student of the Canon"
          tags={["general", "skill"]}
          action="three_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Religion.
              </span>
              <br />
              You’ve researched many faiths enough to recognize notions about
              them that are unlikely to be true. If you roll a critical failure
              at a Religion check to Decipher Writing of a religious nature or
              to Recall Knowledge about the tenets of faiths, you get a failure
              instead. When attempting to Recall Knowledge about the tenets of
              your own faith, if you roll a failure, you get a success instead,
              and if you roll a success, you get a critical success instead.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hellknight Historian",
    source: "Age of Ashes: Player's Guide",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Intelligence"],
    skillTraining: ["Society", "Architecture Lore"],
    feat: "Courtly Graces",
    description: (
      <span>
        The various Hellknight Orders intrigue you, whether you seek to become
        one of their number yourself, wish to oppose their goals at every turn,
        or are merely inspired by or curious to learn more about them. You’ve
        heard that when the Order of the Nail abandoned Citadel Altaerein, they
        left behind the deed to the castle so anyone brave enough to explore the
        ruins and the defenses no doubt left behind would be rewarded with
        ownership of the abandoned fortress.
        <br />
        <br />
        You decided to join the Call for Heroes to hoping to gain an opportunity
        to explore Citadel Altaerein.
        <br />
        <br />
        Choose two ability boosts. One must be Strength or Intelligence, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Architecture Lore skill. You
        gain the Courtly Graces skill feat.
        <Feat
          id={0}
          name="Courtly Graces"
          tags={["general", "skill"]}
          action="three_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You were raised among the nobility or have learned proper
              etiquette and bearing, allowing you to present yourself as a noble
              and play games of influence and politics. You can use Society to
              Make an Impression on a noble, as well as with Impersonate to
              pretend to be a noble if you aren’t one. If you want to
              impersonate a specific noble, you still need to use Deception to
              Impersonate normally, and to Lie when necessary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Herbalist",
    source: "Core Rulebook",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Nature", "Herbalism Lore"],
    feat: "Natural Medicine",
    description: (
      <span>
        As a formally trained apothecary or a rural practitioner of folk
        medicine, you learned the healing properties of various herbs. You’re
        adept at collecting the right natural cures in all sorts of environments
        and preparing them properly.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Nature skill and the Herbalism Lore skill. You
        gain the Natural Medicine skill feat.
        <Feat
          id={0}
          name="Natural Medicine"
          tags={["general", "skill"]}
          action="three_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Nature.
              </span>
              <br />
              You can apply natural cures to heal your allies. You can use
              Nature instead of Medicine to Treat Wounds. If you’re in the
              wilderness, you might have easier access to fresh ingredients,
              allowing you to gain a +2 circumstance bonus to your check to
              Treat Wounds using Nature, subject to the GM’s determination.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hermean Expatriate",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Society", "Dragon Lore"],
    feat: "Skill Training",
    description: (
      <span>
        You have been exiled from Hermea, perhaps of your own accord or perhaps
        because you didn’t measure up. However, you take with you some of the
        benefits of the excellent education afforded to its citizenry.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Dragon Lore skill. You gain
        the Skill Training skill feat.
        <Feat
          id={0}
          name="Skill Training"
          tags={["general", "skill"]}
          action="three_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> Intelligence 12.
              </span>
              <br />
              You become trained in the skill of your choice.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times, choosing
              a new skill to become trained in each time.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hermean Heritor",
    source: "Broken Promises",
    tags: ["rare"],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Society", "Legal Lore"],
    feat: "Multilingual or Assurance",
    description: (
      <span>
        With the restrictions on Hermean citizenship lifted, you may have fled
        the city of Promise or have spent some of your childhood in the company
        of someone who did.
        <br />
        <br />
        Choose two ability boosts. One must be in Constitution or Wisdom, and
        the other is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Legal Lore skill. You gain
        the Multilingual skill feat or the Assurance skill feat for Society.
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers). Special You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hermit",
    source: "Core Rulebook",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Occultism", "Lore"],
    feat: "Dubious Knowledge",
    description: (
      <span>
        In an isolated place—like a cave, remote oasis, or secluded mansion—you
        lived a life of solitude. Adventuring might represent your first foray
        out among other people in some time. This might be a welcome reprieve
        from solitude or an unwanted change, but in either case, you’re likely
        still rough around the edges.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Nature or Occultism skill, plus a Lore skill
        related to the terrain you lived in as a hermit (such as Cave Lore or
        Desert Lore). You gain the Dubious Knowledge skill feat.
        <Feat
          id={0}
          name="Dubious Knowledge"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in a skill with the Recall
                Knowledge action.
              </span>
              <br />
              You’re a treasure trove of information, but not all of it comes
              from reputable sources. When you fail (but don’t critically fail)a
              Recall Knowledge check using any skill, you learn a bit of true
              knowledge and a bit of erroneous knowledge, but you don’t have any
              way to differentiate which is which.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Highborn Snoop",
    source: "Lost Omens: Highhelm",
    tags: [""],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Society", "Guild Lore"],
    feat: "Courtly Graces",
    description: (
      <span>
        The machinations and scheming of King’s Crown have trained you to be on
        the lookout for those who seem out of place. You’ve learned to spot when
        the person pouring your tea has sword calluses—or when the person
        wearing a guard’s uniform doesn’t.
        <br />
        <br />
        Choose two ability boosts. One must be Dexterity or Intelligence, and
        the other is a free boost.
        <br />
        <br />
        You’re trained in the Society skill, and the Guild Lore skill. You gain
        the Courtly Graces skill feat.
        <Feat
          id={0}
          name="Courtly Graces"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in a skill with the Recall
                Knowledge action.
              </span>
              <br />
              You’re a treasure trove of information, but not all of it comes
              from reputable sources. When you fail (but don’t critically fail)a
              Recall Knowledge check using any skill, you learn a bit of true
              knowledge and a bit of erroneous knowledge, but you don’t have any
              way to differentiate which is which.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hired killer",
    source: "Guns & Gears",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Stealth", "Underworld Lore"],
    feat: "Terrain Stalker",
    description: (
      <span>
        Your life truly began after your first kill. Maybe you killed in
        self-defense, maybe it was a crime of passion, or maybe it was just an
        accident and you were a kid in the wrong place at the wrong time. In the
        end, the why doesn’t matter. You got away with it. And then you found
        that maybe it didn’t bother you as much as it should have. And maybe,
        just maybe, you had a talent you could use to forge a life for yourself.
        A blood-soaked talent and a blood-soaked life, sure. But it’s yours.
        <br />
        <br />
        Choose two ability boosts. One boost must be to Strength or Dexterity,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Stealth skill and the Underworld Lore skill. You
        gain the Terrain Stalker skill feat, choosing a terrain appropriate for
        where you make your kills.
        <Feat
          id={0}
          name="Terrain Stalker"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Stealth.
              </span>
              <br />
              Select one type of difficult terrain from the following list:
              rubble, snow, or underbrush. While undetected by all non-allies in
              that type of terrain, you can Sneak without attempting a Stealth
              check as long as you move no more than 5 feet and do not move
              within 10 feet of an enemy at any point during your movement. This
              also allows you to automatically approach creatures to within 15
              feet while Avoiding Notice during exploration as long as they
              aren’t actively Searching or on guard.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, choose a different type of terrain.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Historical Reenactor",
    source: "Sky King's Tomb: Player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Strength", "Dexterity"],
    skillTraining: ["Performance or Society", "Dwarf Lore"],
    feat: "Impressive Performance or Dubious Knowledge",
    description: (
      <span>
        To Clan Tolorr, history shouldn’t be dry and boring; it deserves to be
        engaging and made relevant to the living. You couldn’t agree more!
        Whether it’s your hobby or career, you’ve developed a reputation for
        translating the past into the present through demonstrations, period
        performances, acting out famous events, donning replica armor, and other
        feats of living history—filling in a few historical blanks if it makes a
        better show. Having learned of your passion, Clan Tolorr has sponsored
        your visit to Highhelm so that you can learn from each other. It’s a
        wonderful opportunity, and Tolorr puppetry arts, storytelling, props,
        and historical rigor are the stuff of legends. Already, you’ve begun
        researching dwarven history so that you’re prepared for whatever lies
        ahead.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in either the Performance skill or the Society skill, and
        you’re trained in the Dwarf Lore skill. If you selected Performance, you
        gain the Impressive Performance skill feat. If you chose Society, you
        gain the Dubious Knowledge skill feat.
        <br />
        <br />
        <b>Connection:</b> Bulgra Veldollow, a matriarch in Clan Tolorr and
        accomplished puppeteer
        <br />
        <br />
        <b>Reputation Points:</b> +0
        <Feat
          id={0}
          name="Impressive Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              <br />
              Your performances inspire admiration and win you fans. You can
              Make an Impression using Performance instead of Diplomacy.
            </span>
          }
        />
        <Feat
          id={0}
          name="Dubious Knowledge"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in a skill with the Recall
                Knowledge action.
              </span>
              <br />
              You’re a treasure trove of information, but not all of it comes
              from reputable sources. When you fail (but don’t critically fail)a
              Recall Knowledge check using any skill, you learn a bit of true
              knowledge and a bit of erroneous knowledge, but you don’t have any
              way to differentiate which is which.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hounded thief",
    source: "Guns & Gears",
    tags: [""],
    abilityBoost: ["Free", "Dexterity", "Wisdom"],
    skillTraining: ["Thievery", "Underworld Lore"],
    feat: "Pickpocket",
    description: (
      <span>
        Some time ago, you stole a unique item from a strange individual. It
        might have been a piece of clockwork from a far-off land or some other
        bit of strange technology. You might still have it or you might have
        sold it, but either way, you can’t shake the feeling that you’re being
        followed and watched, likely by forces who want to retrieve what you
        took. Luckily, a life of adventure keeps you on the move.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Wisdom, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Thievery skill and the Underworld Lore skill. You
        gain the Pickpocket skill feat.
        <Feat
          id={0}
          name="Impressive Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              <br />
              Your performances inspire admiration and win you fans. You can
              Make an Impression using Performance instead of Diplomacy.
            </span>
          }
        />
        <Feat
          id={0}
          name="Pickpocket"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Thievery.
              </span>
              <br />
              You can Steal or Palm an Object that’s closely guarded, such as in
              a pocket, without taking the –5 penalty. You can’t steal objects
              that would be extremely noticeable or time consuming to remove
              (like worn shoes or armor or actively wielded objects). If you’re
              a master in Thievery, you can attempt to Steal from a creature in
              combat or otherwise on guard. When doing so, Stealing requires 2
              manipulate actions instead of 1, and you take a –5 penalty.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Hunter",
    source: "Core Rulebook",
    tags: [""],
    abilityBoost: ["Free", "Dexterity", "Wisdom"],
    skillTraining: ["Survival", "Tanning Lore"],
    feat: "Survey Wildlife",
    description: (
      <span>
        You stalked and took down animals and other creatures of the wild.
        Skinning animals, harvesting their flesh, and cooking them were also
        part of your training, all of which can give you useful resources while
        you adventure.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Wisdom, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and the Tanning Lore skill. You
        gain the Survey Wildlife skill feat.
        <Feat
          id={0}
          name="Survey Wildlife"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              You can study details in the wilderness to determine the presence
              of nearby creatures. You can spend 10 minutes assessing the area
              around you to find out what creatures are nearby, based on nests,
              scat, and marks on vegetation. Attempt a Survival check against a
              DC determined by the GM based on how obvious the signs are. On a
              success, you can attempt a Recall Knowledge check with a –2
              penalty to learn more about the creatures just from these signs.
              If you’re a master in Survival, you don’t take the penalty.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Inexplicably Expelled",
    source: "Outlaws of Alkenstar: Player's guide",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Crafting", "Academia Lore"],
    feat: "Alchemical Crafting",
    description: (
      <span>
        Gaining admission to Blythir College is a difficult task, even for
        Alkenstar’s most well-to-do families. In the magic-warped Mana Wastes,
        it’s next to impossible to fake arcane talents or alchemical aptitude.
        So when you were accepted to the school, it was one of the most
        triumphant moments of your life.
        <br />
        <br />
        Unfortunately, your victory was short-lived. Just as you were you making
        significant headway on a promising series of explosive experiments, you
        found a letter on your desk informing you that, effective immediately,
        you were permanently expelled from Blythir College. As bogus as the
        punishment was, the charges leveled against you were even more puzzling:
        theft of property, both intellectual and physical. And just like that,
        you found your prestigious honors replaced with a ruined reputation, and
        your colleagues and mentors became bitter rivals and accusers. In an
        instant, you’d gone from promising scholar to wanted criminal.
        <br />
        <br />
        You followed the money for answers and learned that a shady financier
        named Ambrost Mugland didn’t want you to finish your research at
        Blythir. He’d learned that you were on the brink of a great
        discovery—one that even you weren’t fully aware of—and he decided that
        your imminent breakthrough would be bad for business. Unfortunately for
        Mugland, he chose the wrong student to destroy. Now, you’ll do
        whatever’s necessary to get your revenge on the villain who stole the
        future you had worked so hard to build for yourself.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Academia Lore skill. You
        gain the Alchemical Crafting skill feat.
        <Feat
          id={0}
          name="Alchemical Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              You can use the Craft activity to create alchemical items. When
              you select this feat, you immediately add the formulas for four
              common 1st-level alchemical items to your formula book.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Inlander",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Survival", "Lore"],
    feat: "Survey Wildlife",
    description: (
      <span>
        You grew up in an untamed region of the Isle of Kortos, and you know how
        to survive in the wild.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Survival skill and a Lore skill related to the
        terrain type associated with your home region (such as Hills Lore or
        Mountains Lore). You gain the Survey Wildlife skill feat.
        <Feat
          id={0}
          name="Survey Wildlife"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Survival.
              </span>
              <br />
              You can study details in the wilderness to determine the presence
              of nearby creatures. You can spend 10 minutes assessing the area
              around you to find out what creatures are nearby, based on nests,
              scat, and marks on vegetation. Attempt a Survival check against a
              DC determined by the GM based on how obvious the signs are. On a
              success, you can attempt a Recall Knowledge check with a –2
              penalty to learn more about the creatures just from these signs.
              If you’re a master in Survival, you don’t take the penalty.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Insurgent",
    source: "Advanced Player's Guide",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Wisdom"],
    skillTraining: ["Deception", "Warfare Lore"],
    feat: "Lengthy Diversion",
    description: (
      <span>
        You were more than a rebel; you were a revolutionary, fighting for the
        promise of a new or better country. You may or may not still believe in
        the cause, or perhaps victory or exile has led you on this new journey
        to trumpet your glory... or to escape the consequences of your defeat.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Deception skill and the Warfare Lore skill. You
        gain the Lengthy Diversion skill feat.
        <Feat
          id={0}
          name="Lengthy Diversion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              <br />
              When you critically succeed to Create a Diversion, you continue to
              remain hidden after the end of your turn. This effect lasts for an
              amount of time that depends on the diversion and situation, as
              determined by the GM (minimum 1 additional round).
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Issian Partisan",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Intelligence", "Charisma"],
    skillTraining: ["Deception", "Underworld Lore"],
    feat: "Charming Liar",
    description: (
      <span>
        You grew up among the northern houses of Brevoy in old Issia. Steeped in
        the cultural legacy of pirates and smugglers, you rely on your
        cleverness and charm as you make your way throughout the world.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Charisma, and
        one is a free ability boost.
        <br />
        <br />
        You're trained in the Deception skill and the Underworld Lore skill. You
        gain the Charming Liar skill feat.
        <Feat
          id={0}
          name="Charming liar"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Deception.
              </span>
              <br />
              Your charm allows you to win over those you lie to. When you get a
              critical success using the Lie action, the target’s attitude
              toward you improves by one step, as though you’d succeeded at
              using Diplomacy to Make an Impression. This works only once per
              conversation, and if you critically succeed against multiple
              targets using the same result, you choose one creature’s attitude
              to improve. You must be lying to impart seemingly important
              information, inflate your status, or ingratiate yourself, which
              trivial or irrelevant lies can’t achieve.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Issian Patriot",
    source: "Kingmaker Adventure path",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Society", "Legal Lore"],
    feat: "Streetwise",
    description: (
      <span>
        You grew up in northern Brevoy, but the call for heroes willing to help
        take back your country’s rightful holdings in the Stolen Lands has
        inflamed your dreams of profit and possibilities, and you have joined an
        expedition journeying south.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Legal Lore skill. You gain
        the Streetwise skill feat.
        <Feat
          id={0}
          name="Streetwise"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You know about life on the streets and feel the pulse of your
              local settlement. You can use your Society modifier instead of
              your Diplomacy modifier to Gather Information. In any settlement
              you frequent regularly, you can use the Recall Knowledge action
              with Society to know the same sorts of information that you could
              discover with Diplomacy to Gather Information. The DC is usually
              significantly higher, but you know the information without
              spending time gathering it. If you fail to recall the information,
              you can still subsequently attempt to Gather Information normally.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Junk collector",
    source: "Guns & Gears",
    tags: [""],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Crafting", "Engineering Lore or Mining Lore"],
    feat: "Crafter’s Appraisal",
    description: (
      <span>
        You live by the adage that one person’s trash is another’s treasure.
        Whether by sifting through scrap heaps or digging up old battlefields,
        you remain on the lookout for lost or discarded objects that you might
        be able to turn into something useful. More often than not, what you
        find is just junk... but you’re convinced that one of these days, you’re
        going to hit the jackpot. You’ve even taken up adventuring as a means to
        supercharge your access to all sorts of junk, gear, and loot.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and your choice of either the
        Engineering Lore or Mining Lore skill. You gain the Crafter’s Appraisal
        skill feat.
        <Feat
          id={0}
          name="Crafter’s Appraisal"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              Your knowledge of items’ construction allows you to discern their
              magical effects as well. You can use Crafting instead of a skill
              associated with a magic tradition to Identify Magic on magic
              items, though not on any other sorts of magic.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Junker",
    source: "Guns & Gears",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Wisdom"],
    skillTraining: ["Athletics", "Lore"],
    feat: "Hefty Hauler",
    description: (
      <span>
        You live on the outskirts of civilization, combing through the detritus
        left behind for interesting trinkets to sell or use in your own
        crafting. Though you have a preferred terrain to search, you know that
        the greatest treasures occur where people make greater use of
        technology.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Wisdom, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Lore skill of the terrain
        in which you scavenge. You gain the Hefty Hauler skill feat.
        <Feat
          id={0}
          name="Hefty Hauler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can carry more than your frame implies. Increase your maximum
              and encumbered Bulk limits by 2
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Kalistrade follower",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Intelligence"],
    skillTraining: ["Diplomacy", "Kalistrade Lore"],
    feat: "Bargain Hunter",
    description: (
      <span>
        You follow the philosophy of the Prophecies of Kalistrade, seeking to
        build up your wealth in this life so that you might meet the next world
        on your own terms.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Intelligence,
        and one is a free ability boost.
        <br />
        <br />
        You’re trained in the Diplomacy skill and the Kalistrade Lore skill. You
        gain the Bargain Hunter skill feat.
        <Feat
          id={0}
          name="Bargain Hunter"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              You can Earn Income using Diplomacy, spending your days hunting
              for bargains and reselling at a profit. You can also spend time
              specifically sniffing out a great bargain on an item; this works
              as if you were using Earn Income with Diplomacy, except instead of
              gaining money, you purchase the item at a discount equal to the
              money you would have gained, gaining the item for free if your
              earned income equals or exceeds its cost. Finally, if you select
              Bargain Hunter during character creation at 1st level, you start
              play with an additional 2 gp.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Keys to destiny",
    source: "Stolen Fate: Player's Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity"],
    skillTraining: [
      "Diplomacy",
      "Art Lore, Engineering Lore, Farming Lore, Herbalism Lore, Labor\n" +
        "        Lore, Mercantile Lore, Scribing Lore, Theater Lore, or Warfare Lore",
    ],
    feat: "Assurance",
    description: (
      <span>
        From as far back as you can remember, it seems you were always meant to
        enter a specific industry or profession, be it artistry, engineering,
        farming, herbalism, labor, merchantry, scribing, theater, or warfare.
        Perhaps your parents belonged to this profession and encouraged you to
        follow in their footsteps, or maybe a personal hero of yours inspired
        you to take up their calling in honor of their accomplishments. Whatever
        the reason, the skills associated with that profession came naturally to
        you, but as time wore on and you grew older, you began to realize that
        this profession, while interesting to you, isn’t what you want to do
        with your life. The lure of glory and adventure beckons. You can always
        go back to the studio, farm, or stage once you retire, after all!
        <br />
        <br />
        This background is associated with the suit of Keys.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity, and one is a free
        ability boost.
        <br />
        <br />
        You gain the Assurance general skill feat and are trained in one of the
        following Lore skills associated with a profession, as befits your
        history: Art Lore, Engineering Lore, Farming Lore, Herbalism Lore, Labor
        Lore, Mercantile Lore, Scribing Lore, Theater Lore, or Warfare Lore. You
        also gain the following free action.
        <br />
        <br />
        Lucky Break <img
          src={require("../assets/img/one_action.png")}
          alt=""
        />{" "}
        (fortune)
        <br />
        <br />
        <b>Trigger:</b> You attempt a skill check during Exploration or
        Downtime; <b>Frequency:</b> once per day; <b>Effect:</b> Draw a harrow
        card, then reroll the skill check. If you draw a card from the suit of
        Keys, add a +4 status bonus to the original roll and your reroll, then
        take the result you prefer as your actual result. If you drew any other
        card, you gain no bonus and must take the result of the rerolled skill
        check.
        <Feat
          id={0}
          name="Assurance"
          tags={["fortune", "general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in at least one skill.
              </span>
              <br />
              Even in the worst circumstances, you can perform basic tasks.
              Choose a skill you’re trained in. You can forgo rolling a skill
              check for that skill to instead receive a result of 10 + your
              proficiency bonus (do not apply any other bonuses, penalties, or
              modifiers). Special You can select this feat multiple times. Each
              time, choose a different skill and gain the benefits for that
              skill.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Kyonin Emissary",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Charisma", "Intelligence"],
    skillTraining: ["Society", "Politics Lore"],
    feat: "Assurance",
    description: (
      <span>
        You were trained to be an ambassador of the elven land of Kyonin, and
        you have now been sent out into the wider world to build alliances
        between Kyonin and the neighboring kingdoms.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Politics Lore skill. You
        gain the Multilingual skill feat.
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Kyonin Emissary",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Charisma", "Intelligence"],
    skillTraining: ["Society", "Politics Lore"],
    feat: "Assurance",
    description: (
      <span>
        You were trained to be an ambassador of the elven land of Kyonin, and
        you have now been sent out into the wider world to build alliances
        between Kyonin and the neighboring kingdoms.
        <br />
        <br />
        Choose two ability boosts. One must be to Charisma or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Politics Lore skill. You
        gain the Multilingual skill feat.
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Labrorer",
    source: "Core Rulebook",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Constitution"],
    skillTraining: ["Athletics", "Labor Lore"],
    feat: "Hefty Hauler",
    description: (
      <span>
        You’ve spent years performing arduous physical labor. It was a difficult
        life, but you somehow survived. You may have embraced adventuring as an
        easier method to make your way in the world, or you might adventure
        under someone else’s command.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Athletics skill and the Labor Lore skill. You gain
        the Hefty Hauler skill feat.
        <Feat
          id={0}
          name="Hefty Hauler"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Athletics.
              </span>
              <br />
              You can carry more than your frame implies. Increase your maximum
              and encumbered Bulk limits by 2.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Lastwall Survivor",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Wisdom"],
    skillTraining: ["Medicine", "Undead Lore"],
    feat: "Battle Medicine",
    description: (
      <span>
        You managed to escape the devastation that the Whispering Tyrant brought
        to your nation, but you lost everything to the lich-king’s minions,
        including your home and many friends and family.
        <br />
        <br />
        Choose two ability boosts. One must be to Constitution or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Medicine skill and the Undead Lore skill. You gain
        the Battle Medicine skill feat.
        <Feat
          id={0}
          name="Battle Medicine"
          tags={["general", "healing", "manipulate", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <b>Prerequisites:</b> trained in Medicine.
              <br />
              <br />
              <span className="frequency">
                <b>Requirements:</b> You’re holding or wearing healer’s tools.
              </span>
              <br />
              You can patch up wounds, even in combat. Attempt a Medicine check
              with the same DC as for Treat Wounds and restore the corresponding
              amount of HP; this doesn’t remove the wounded condition. As with
              Treat Wounds, you can attempt checks against higher DCs if you
              have the minimum proficiency rank. The target is then temporarily
              immune to your Battle Medicine for 1 day.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Learned guard prodigy",
    source: "Agents of Edgewatch: Player's Guide",
    tags: [""],
    abilityBoost: ["Free", "Intelligence", "Wisdom"],
    skillTraining: ["Arcana or Occultism", "Legal Lore"],
    feat: "Recognize Spell",
    description: (
      <span>
        For some, the nuts and bolts of keeping the peace are practically second
        nature. Such is the case for you, a member of the Learned Guard with an
        incredible mind for investigation as well as a gift for understanding
        magic. You probably aren’t a hit with your peers, who find your
        intellect and natural gift of deduction perhaps a bit off-putting, but
        when left to your own devices you excel, and you get along well with
        professors and mages such as those who work in Forae Logos or the
        Arcanamirium.
        <br />
        <br />
        After no shortage of debating the pros and cons, you decided to transfer
        to the Edgewatch precinct. Sure, you have a keen understanding of the
        theories and principles behind law enforcement, but you’ve reasoned that
        in order to be a truly effective guard you’ll need some first-hand
        experience in a high-risk area nabbing suspects and protecting
        innocents— all the while taking fastidious notes and writing your grand
        thesis on the merits and shortcomings of Absalom’s laws.
        <br />
        <br />
        Choose two ability boosts. One must be to Intelligence or Wisdom, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in your choice of the Arcana or Occultism skill, as well
        as Legal Lore. You gain a +1 circumstance bonus to Deception, Diplomacy,
        and Intimidation checks to interact with Learned Guards and with
        academics such as librarians and scholars. You gain the Recognize Spell
        skill feat.
        <Feat
          id={0}
          name="Recognize Spell"
          tags={["general", "secret", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <b>Prerequisites:</b> trained in Arcana, Nature, Occultism, or
              Religion.
              <br />
              <br />
              <span className="frequency">
                <b>Trigger:</b> A creature within line of sight casts a spell
                that you don’t have prepared or in your spell repertoire, or a
                trap or similar object casts such a spell. You must be aware of
                the casting.
              </span>
              <br />
              If you are trained in the appropriate skill for the spell’s
              tradition and it’s a common spell of 2nd level or lower, you
              automatically identify it (you still roll to attempt to get a
              critical success, but can’t get a worse result than success). The
              highest level of spell you automatically identify increases to 4
              if you’re an expert, 6 if you’re a master, and 10 if you’re
              legendary. The GM rolls a secret Arcana, Nature, Occultism, or
              Religion check, whichever corresponds to the tradition of the
              spell being cast. If you’re not trained in the skill, you can’t
              get a result better than failure.
              <br />
              <br />
              <b>Critical Success:</b> You correctly recognize the spell and
              gain a +1 circumstance bonus to your saving throw or your AC
              against it.
              <br />
              <br />
              <b>Success:</b> You correctly recognize the spell.
              <br />
              <br />
              <b>Failure:</b> You fail to recognize the spell.
              <br />
              <br />
              <b>Critical Failure:</b> You misidentify the spell as another
              spell entirely, of the GM’s choice.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Legacy of the hammer",
    source: "Dark Archive",
    tags: ["uncommon"],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Thievery", "Engineering Lore"],
    feat: "Concealing Legerdemain",
    description: (
      <span>
        Your introduction to the criminal life was spurred forward by a
        seemingly innocuous hammer that provided you with all kinds of
        innovative criminal ideas. It has since left your possession, but every
        now and then you hear a faint whisper urging you toward crime.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Thievery skill and Engineering Lore. You gain the
        Concealing Legerdemain skill feat.
        <Feat
          id={0}
          name="Concealing Legerdemain"
          tags={["general", "skill"]}
          action="one_action"
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Thievery
              </span>
              <br />
              Rather than hide an object somewhere the inspectors won’t search,
              you’re skilled at keeping the object on the move so it’s never
              where they look. When you Conceal an Object of light Bulk or less,
              you can use Thievery instead of Stealth for your checks and for
              the DC of an active searcher’s Perception check. You roll the
              check only once, but you must continue to use actions to Conceal
              an Object throughout the process.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Legendary parents",
    source: "Broken Promises",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Intimidation", "Genealogy Lore"],
    feat: "Group Coercion",
    description: (
      <span>
        One or more of your parents (either biological or adoptive) were heroes
        of the Age of Ashes Adventure Path. Others tend to treat you with a bit
        more respect, or perhaps fear your connections to people of great power.
        <br />
        <br />
        Choose two ability boosts. One must be in Dexterity or Charisma, and the
        other is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Genealogy Lore skill.
        You gain the Group Coercion skill feat.
        <Feat
          id={0}
          name="Group Coercion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              When you Coerce, you can compare your Intimidation check result to
              the Will DCs of two targets instead of one. It’s possible to get a
              different degree of success for each target. The number of targets
              you can Coerce in a single action increases to four if you’re an
              expert, 10 if you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Legendary parents",
    source: "Broken Promises",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity", "Charisma"],
    skillTraining: ["Intimidation", "Genealogy Lore"],
    feat: "Group Coercion",
    description: (
      <span>
        One or more of your parents (either biological or adoptive) were heroes
        of the Age of Ashes Adventure Path. Others tend to treat you with a bit
        more respect, or perhaps fear your connections to people of great power.
        <br />
        <br />
        Choose two ability boosts. One must be in Dexterity or Charisma, and the
        other is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Genealogy Lore skill.
        You gain the Group Coercion skill feat.
        <Feat
          id={0}
          name="Group Coercion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              When you Coerce, you can compare your Intimidation check result to
              the Will DCs of two targets instead of one. It’s possible to get a
              different degree of success for each target. The number of targets
              you can Coerce in a single action increases to four if you’re an
              expert, 10 if you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Lesser Scion",
    source: "Broken Promises",
    tags: ["rare"],
    abilityBoost: ["Free", "Dexterity", "Intelligence"],
    skillTraining: ["Diplomacy", "Heraldry Lore"],
    feat: "Hobnobber",
    description: (
      <span>
        You are the youngest child in a noble house (in Cheliax, Isger, or
        Andoran) and stand to inherit nothing from your family. Although you
        have a minor title, it affords you no lands or wealth, but it has
        garnered you a small amount of respect and deference in your travels.
        When play begins, you are riding in a caravan bound for Almas, where a
        cousin has promised to allow you to stay with them for a month.
        <br />
        <br />
        Choose two ability boosts. One must be to Dexterity or Intelligence, and
        one is a free ability boost.
        <br />
        <br />
        You are trained in the Diplomacy skill and the Heraldry Lore skill. You
        gain the Hobnobber skill feat.
        <Feat
          id={0}
          name="Hobnobber"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Diplomacy.
              </span>
              <br />
              You are skilled at learning information through conversation. The
              Gather Information exploration activity takes you half as long as
              normal (typically reducing the time to 1 hour). If you’re a master
              in Diplomacy and you Gather Information at the normal speed, when
              you attempt to do so and roll a critical failure, you get a
              failure instead. There is still no guarantee that a rumor you
              learn with Gather Information is accurate.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Local Brigand",
    source: "Kingmaker Adventure path",
    tags: ["rare"],
    abilityBoost: ["Free", "Strength", "Constitution"],
    skillTraining: ["Intimidation", "Banditry Lore"],
    feat: "Group Coercion",
    description: (
      <span>
        You hail from the River Kingdoms or the more lawless reaches of Brevoy.
        Your life has been hard. You know how to ambush travelers, bully
        traders, avoid the law, and camp where no one can find you. Recently,
        you’ve run into some trouble, either with the law or with other bandits,
        and you’re looking to get away to somewhere no one would ever think to
        look for you. An expedition into the rugged wilderness seems like a
        perfect way to lie low until the trouble blows over.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Constitution, and
        one is a free ability boost.
        <br />
        <br />
        You’re trained in the Intimidation skill and the Banditry Lore skill.
        You gain the Group Coercion skill feat.
        <Feat
          id={0}
          name="Group Coercion"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              When you Coerce, you can compare your Intimidation check result to
              the Will DCs of two targets instead of one. It’s possible to get a
              different degree of success for each target. The number of targets
              you can Coerce in a single action increases to four if you’re an
              expert, 10 if you’re a master, and 25 if you’re legendary.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Local Scion",
    source: "Age of Ashes: Player's Guide",
    tags: [""],
    abilityBoost: ["Free", "Constitution", "Charisma"],
    skillTraining: ["Crafting", "Breachill Lore"],
    feat: "Specialty Crafting",
    description: (
      <span>
        You’re from Breachill and have lived there most, if not all, of your
        life. You might be the son or daughter of a well-known local adventuring
        family, or a family with a storied tradition of military or other
        martial service. You likely also have some sort of skill with your
        hands, as the people of Breachill are very self-sufficient.
        <br />
        <br />
        The Call for Heroes is one of your hometown’s most iconic traditions,
        and you want to attend so you can prove your own merits to the
        council—beyond simply those of your family’s name.
        <br />
        <br />
        Choose two ability boosts. One must be Constitution or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You’re trained in the Crafting skill and the Breachill Lore skill. You
        gain the Specialty Crafting skill feat.
        <Feat
          id={0}
          name="Specialty Crafting"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Crafting.
              </span>
              <br />
              Your training focused on Crafting one particular kind of item.
              Select one of the specialties listed below; you gain a +1
              circumstance bonus to Crafting checks to Craft items of that type.
              If you are a master in Crafting, this bonus increases to +2. If
              it’s unclear whether the specialty applies, the GM decides. Some
              specialties might apply only partially. For example, if you were
              making a morningstar and had specialty in woodworking, the GM
              might give you half your bonus because the item requires both
              blacksmithing and woodworking.
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Specialty</th>
                    <th>Applicable items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alchemy*</td>
                    <td>Alchemical items such as elixirs</td>
                  </tr>
                  <tr>
                    <td>Artistry</td>
                    <td>Fine art, including jewelry</td>
                  </tr>
                  <tr>
                    <td>Blacksmithing</td>
                    <td>Durable metal goods, including metal armor</td>
                  </tr>
                  <tr>
                    <td>Bookmaking</td>
                    <td>Books and paper</td>
                  </tr>
                  <tr>
                    <td>Glassmaking</td>
                    <td>Glass, including glassware and windows</td>
                  </tr>
                  <tr>
                    <td>Leatherworking</td>
                    <td>Leather goods, including leather armor</td>
                  </tr>
                  <tr>
                    <td>Pottery</td>
                    <td>Ceramic goods</td>
                  </tr>
                  <tr>
                    <td>Shipbuilding</td>
                    <td>Ships and boats</td>
                  </tr>
                  <tr>
                    <td>Stonemasonry</td>
                    <td>Stone goods and structures</td>
                  </tr>
                  <tr>
                    <td>Tailoring</td>
                    <td>Clothing</td>
                  </tr>
                  <tr>
                    <td>Weaving</td>
                    <td>Textiles, baskets, and rugs</td>
                  </tr>
                  <tr>
                    <td>Woodworking</td>
                    <td>Wooden goods and structures</td>
                  </tr>
                  <tr>
                    <td>
                      * You must have the Alchemical Crafting skill feat to
                      Craft alchemical items
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Lost and Alone",
    source: "The Fall of Plaguestone",
    tags: [""],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Intimidate", "Warfare Lore"],
    feat: "Intimidating Glare",
    description: (
      <span>
        You were training to become a knight in Lastwall when the Whispering
        Tyrant escaped his imprisonment and destroyed the nation. It was only by
        dumb luck that you are alive at all, but the memories of that fateful
        day haunt your dreams. When play begins, you have boarded a caravan
        heading toward a new town, having worn out your welcome at the taverns
        and inns of Elidir.
        <br />
        <br />
        Choose two ability boosts. One must be to Strength or Charisma, and one
        is a free ability boost.
        <br />
        <br />
        You are trained in the Intimidate skill and the Warfare Lore skill. You
        gain the Intimidating Glare skill feat.
        <Feat
          id={0}
          name="Intimidating Glare"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Intimidation.
              </span>
              <br />
              You can Demoralize with a mere glare. When you do, Demoralize
              loses the auditory trait and gains the visual trait, and you don’t
              take a penalty if the creature doesn’t understand your language.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Lost loved one",
    source: "Gatewalker's Players Guide",
    tags: ["rare"],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Society", "Genealogy Lore"],
    feat: "Multilingual",
    description: (
      <span>
        You see your life as naturally divided into two chapters: in one, the
        love-limned, halcyon days of yesteryear, in the other, the day you lost
        the person most important to you, plus every aching moment thereafter.
        When you saw a vision of your lost loved one in a glowing portal on the
        night of the Missing Moment, you knew it was too good to be true. But
        you couldn’t help yourself, either, so you walked through the door, one
        grasping hand outstretched in anticipation. You don’t know what happened
        on the other side of the arch, but your hand seems to. Like a ghostly
        fragment of your missing loved one, you can summon an ethereal hand to
        reach out from your body. Though it’s a pale imitation of the warmth you
        once felt in your dearly departed’s presence, you do find this new hand
        somehow comforting, in a way.
        <br />
        <br />
        Your deviant abilities are of the wraith classification. You gain the
        Ghostly Grasp deviant feat. As a quirk, whenever you use a deviant
        ability, a low, rattling moan emanates from some unseen maw in your
        vicinity.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Genealogy Lore skill. You
        gain the Multilingual skill feat.
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
      </span>
    ),
  },
  {
    name: "Lumber consortium laborer",
    source: "Lost Omens: World Guide",
    tags: [""],
    abilityBoost: ["Free", "Wisdom", "Charisma"],
    skillTraining: ["Society", "Genealogy Lore"],
    feat: "Multilingual",
    description: (
      <span>
        You see your life as naturally divided into two chapters: in one, the
        love-limned, halcyon days of yesteryear, in the other, the day you lost
        the person most important to you, plus every aching moment thereafter.
        When you saw a vision of your lost loved one in a glowing portal on the
        night of the Missing Moment, you knew it was too good to be true. But
        you couldn’t help yourself, either, so you walked through the door, one
        grasping hand outstretched in anticipation. You don’t know what happened
        on the other side of the arch, but your hand seems to. Like a ghostly
        fragment of your missing loved one, you can summon an ethereal hand to
        reach out from your body. Though it’s a pale imitation of the warmth you
        once felt in your dearly departed’s presence, you do find this new hand
        somehow comforting, in a way.
        <br />
        <br />
        Your deviant abilities are of the wraith classification. You gain the
        Ghostly Grasp deviant feat. As a quirk, whenever you use a deviant
        ability, a low, rattling moan emanates from some unseen maw in your
        vicinity.
        <br />
        <br />
        Choose two ability boosts. One must be to Wisdom or Charisma, and one is
        a free ability boost.
        <br />
        <br />
        You’re trained in the Society skill and the Genealogy Lore skill. You
        gain the Multilingual skill feat.
        <Feat
          id={0}
          name="Multilingual"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Society.
              </span>
              <br />
              You easily pick up new languages. You learn two new languages,
              chosen from common languages, uncommon languages, and any others
              you have access to. You learn an additional language if you are or
              become a master in Society and again if you are or become
              legendary.
              <br />
              <br />
              <b>Special:</b> You can select this feat multiple times. Each
              time, you learn additional languages.
            </span>
          }
        />
      </span>
    ),
  },
];
