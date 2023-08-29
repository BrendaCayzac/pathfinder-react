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
    tags: [""],
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
    tags: [""],
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
    feat: "",
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
    feat: "",
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    feat: "",
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    feat: "",
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    feat: "",
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
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
    tags: [""],
    abilityBoost: ["Free", "Strength", "Charisma"],
    skillTraining: ["Deception", "Mzali Lore"],
    feat: "Haughty Obstinacy",
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
];
