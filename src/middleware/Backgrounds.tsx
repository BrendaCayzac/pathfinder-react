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
];
