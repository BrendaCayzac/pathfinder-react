import React from "react";
import { AncestryFeat } from "./FeatsButtons";

export const tenguFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Mariner's fire",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You conjure uncanny orbs of spiritual flame that float above or below
        the water’s surface. You can cast the produce flame cantrip as a primal
        innate spell at will, heightened to a spell level equal to half your
        level rounded up. You can cast this cantrip underwater.
      </span>
    ),
  },
  {
    id: 2,
    name: "Scavenger's search",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re always on the lookout for supplies and valuables. Each time you
        use the Seek action to search for objects (including secret doors and
        hazards), you can search for objects in your choice of a 10-foot
        emanation around you or an adjacent 15-foot-by-15-foot area, rather than
        a single adjacent 10-foot-by-10-foot area.
      </span>
    ),
  },
  {
    id: 3,
    name: "Squawk!",
    action: "reaction",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You critically fail a Deception, Diplomacy, or
          Intimidation check against a creature that doesn’t have the tengu
          trait.
        </span>
        <br />
        You let out an awkward squawk, ruffle your feathers, or fake some other
        birdlike tic to cover up a social misstep or faux pas. You get a failure
        on the triggering check, rather than a critical failure. All creatures
        that witnessed you Squawk are temporarily immune for 24 hours.
      </span>
    ),
  },
  {
    id: 4,
    name: "Storm lash",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Wind and lightning have always been close friends to you. You can cast
        the electric arc cantrip as a primal innate spell at will. A cantrip is
        heightened to a spell level equal to half your level rounded up.
      </span>
    ),
  },
  {
    id: 5,
    name: "Tengu lore",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You learned skills for surviving in the place where your people were
        dispersed. You gain the trained proficiency rank in Society and
        Survival. If you would automatically become trained in one of those
        skills (from your background or class, for example), you instead become
        trained in a skill of your choice. You also become trained in Tengu
        Lore.
      </span>
    ),
  },
  {
    id: 6,
    name: "Tengu weapon familiarity",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’ve trained with a blade and other tengu weapons ever since you
        hatched. You gain access to khakkaras. Additionally, choose two weapons
        from the sword group. You can choose from among all common martial
        swords, plus the katana, temple sword, and wakizashi. For the purpose of
        determining your proficiency, that weapon is a simple weapon, and if the
        weapon isn’t common, you gain access to it. If you are trained in all
        martial weapons, you add common advanced swords to the swords you can
        choose from.
        <br />
        <br />
        You also gain access to all uncommon tengu weapons. For the purpose of
        determining your proficiency, martial tengu weapons are simple weapons,
        and advanced tengu weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 7,
    name: "TUncanny agility",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have near-supernatural poise that lets you move swiftly across the
        most unsteady surfaces. You gain the Steady Balance skill feat. You can
        Step into difficult terrain caused by uneven ground, such as a rocky
        field or hilly incline.
      </span>
    ),
  },
  {
    id: 8,
    name: "Uncanny agility",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You have near-supernatural poise that lets you move swiftly across the
        most unsteady surfaces. You gain the Steady Balance skill feat. You can
        Step into difficult terrain caused by uneven ground, such as a rocky
        field or hilly incline.
      </span>
    ),
  },
  {
    id: 9,
    name: "Waxed feathers",
    action: "",
    tags: ["tengu"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> wavediver tengu heritage.
        </span>
        <br />
        Your feathers are coated in a waxy substance that repels water. You gain
        a +1 circumstance bonus to saving throws against effects that have the
        water trait. So long as you’re in a dry place, you can spend one action
        to shake off any water that clings to your clothing and feathers to
        instantly become dry.
      </span>
    ),
  },
  {
    id: 10,
    name: "Dogfang bite",
    action: "",
    tags: ["tengu"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> dogtooth tengu heritage.
        </span>
        <br />
        You can swing your beak to slash your foes when piercing attacks won’t
        do. Your beak unarmed attack gains the versatile S weapon trait.
      </span>
    ),
  },
  {
    id: 11,
    name: "Eat fortune",
    action: "reaction",
    tags: ["concentrate", "divination", "divine", "tengu"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature within 60 feet uses a fortune or misfortune
          effect.
        </span>
        <br />
        As someone tries to twist fate, you consume the interference. The
        triggering effect is disrupted. If it’s a misfortune effect, Eat Fortune
        gains the fortune trait; if it’s a fortune effect, Eat Fortune gains the
        misfortune trait. This fortune or misfortune applies to the same roll
        the triggering effect would have, so you couldn’t negate a fortune
        effect with Eat Fortune and then apply a misfortune effect to the same
        roll.
      </span>
    ),
  },
  {
    id: 12,
    name: "Long-nosed form",
    action: "one_action",
    tags: ["concentrate", "polymorph", "primal", "tengu", "transmutation"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You can transform into a specific, curious-looking human form. This
        human form is the same age and body type as your tengu form and has
        roughly analogous physical traits, such as height, though your nose
        remains as long as your beak and your complexion has red undertones, no
        matter the skin color of your human form. Using Long-Nosed Form counts
        as creating a disguise for the Impersonate use of Deception. Due to your
        imperfect transformation, your transformation doesn’t automatically
        defeat Perception DCs to determine whether you are human, though you may
        be able to explain away or hide your tengu traits. You lose your beak
        unarmed Strike in your human form, as well as any other unarmed Strikes
        you gained from a tengu heritage or ancestry feat. You can remain in
        your human form indefinitely, and you can shift back to your tengu form
        by using this action again.
      </span>
    ),
  },
  {
    id: 13,
    name: "Magpie snatch",
    action: "two_action",
    tags: ["tengu"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You move quickly, snatching a shiny item that catches your eye. Stride
        twice, and you can Interact to grab an unattended object at any point
        during your movement.
      </span>
    ),
  },
  {
    id: 14,
    name: "one-toed hop",
    action: "one_action",
    tags: ["tengu"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        Assuming a peculiar stance, you make a short hop on each toe. You make a
        vertical Leap without triggering reactions that can be triggered by move
        actions or upon leaving or entering a square.
      </span>
    ),
  },
  {
    id: 15,
    name: "Tengu feather fan",
    action: "",
    tags: ["tengu"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve learned to bind some of your feathers together into a fan to
        focus your ancestral magic. You gain a tengu feather fan: a magic item
        of light Bulk with a level equal to your level and the evocation and
        primal traits. You (and only you) can use the tengu feather fan to cast
        tengu magic. If your fan is lost or destroyed, you can create a
        replacement during your daily preparations; if you do so, your previous
        fan falls apart into mundane feathers. Further feats might grant you
        additional activations of your tengu feather fan, but you can never have
        more than three activations per day, no matter how many such feats you
        have. The DC for spells you cast with your tengu feather fan is your
        class DC or spell DC, whichever is higher.
        <br />
        <br />
        You can cast the 1st-level gust of wind spell by activating your tengu
        feather fan.
        <br />
        <br />
        <b>Activate:</b>Interact.
        <br />
        <br />
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <b>Effect:</b> You cast one of the spells contained in your tengu
        feather fan. Activating the fan takes the spell’s normal number of
        actions. You can also Activate the fan to cast a cantrip you’ve gained
        from a heritage or ancestry feat; this activation doesn’t count against
        the fan’s uses per day.
      </span>
    ),
  },
  {
    id: 16,
    name: "Tengu weapon study",
    action: "",
    tags: ["tengu"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Tengu Weapon Familiarity.
        </span>
        <br />
        You’ve learned techniques for using blades and other tengu weapons.
        Whenever you critically hit using one of the weapons from your Tengu
        Weapon Familiarity, you apply the weapon’s critical specialization
        effect.
      </span>
    ),
  },
  {
    id: 17,
    name: "Eclectic sword training",
    action: "",
    tags: ["tengu"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Tengu Weapon Familiarity.
        </span>
        <br />
        You were always taught that you needed to be able to use whatever weapon
        came your way. You can change any of the swords designated in your Tengu
        Weapon Familiarity to different swords that meet the same
        specifications. You have to practice with a sword during your daily
        preparations to designate it, and the designation only lasts until your
        next daily preparations. This changes only your proficiency; it doesn’t
        change your access.
      </span>
    ),
  },
  {
    id: 18,
    name: "Soaring flight",
    action: "two_action",
    tags: ["morph", "primal", "tengu", "transmutation"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <b>Prerequisites:</b> skyborn tengu heritage.
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        To be a tengu is to be unburdened by the concerns of the world below.
        You grow a pair of magical wings or expand your existing ones. For 5
        minutes, you gain a fly Speed equal to your land Speed or 20 feet,
        whichever is greater.
      </span>
    ),
  },
  {
    id: 19,
    name: "Wind god's fan",
    action: "",
    tags: ["tengu"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Tengu Feather Fan.
        </span>
        <br />
        Your fan can stir up even more powerful winds. You can Activate your
        tengu feather fan one additional time per day. Add the 3rd-level wall of
        wind spell to the spells contained within your fan.
      </span>
    ),
  },
  {
    id: 20,
    name: "Eclectic sword mastery",
    action: "two_action",
    tags: ["concentration", "tengu"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Eclectic Sword Training.
        </span>
        <br />
        You instinctively learn how to use a sword with just a few practice
        swings. You change one of the swords designated in your Tengu Weapon
        Familiarity to a new one that you’re wielding, provided the sword meets
        the specifications of Tengu Weapon Familiarity. You can Interact to draw
        a sword as part of this activity, designating the sword as part of
        drawing it; disrupting that Interact action prevents you from
        designating it as one of your swords. This designation lasts until your
        next daily preparations.
      </span>
    ),
  },
  {
    id: 21,
    name: "Harbringer's caw",
    action: "reaction",
    tags: ["auditory", "misfortune", "tengu"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> A creature within 60 feet is about to attempt an
          attack roll or skill check.
        </span>
        <br />
        You caw ominously, cursing the creature with misfortune. The target
        creature must roll the triggering check twice and take the lower result.
      </span>
    ),
  },
  {
    id: 22,
    name: "Jinx glutton",
    action: "",
    tags: ["tengu"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Eat Fortune.
        </span>
        <br />
        You can Eat Fortune once per hour, rather than once per day.
      </span>
    ),
  },
  {
    id: 23,
    name: "Tengu weapon expertise",
    action: "",
    tags: ["tengu"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Tengu Weapon Familiarity.
        </span>
        <br />
        Study has made you an expert with tengu weapons. Whenever you gain a
        class feature that grants you expert or greater proficiency in a given
        weapon or weapons, you also gain that proficiency for the weapons from
        your Tengu Weapon Familiarity.
      </span>
    ),
  },
  {
    id: 24,
    name: "Thunder god's fane",
    action: "",
    tags: ["tengu"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Wind God’s Fan.
        </span>
        <br />A wave of your fan unleashes the fury of the storm. You can
        Activate your tengu feather fan one additional time per day. Add the
        5th-level lightning bolt spell to the spells contained within your fan.
      </span>
    ),
  },
  {
    id: 25,
    name: "Favor's of heaven",
    action: "",
    tags: ["tengu"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You’re one of Hei Feng’s chosen people and have the authority of the
        Celestial Court on your side. Once per day, you can cast a 6th-level
        spirit blast as a divine innate spell. In addition, you gain resistance
        5 to both good and evil damage.
      </span>
    ),
  },
  {
    id: 26,
    name: "Great tengu form",
    action: "",
    tags: ["tengu"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Long-Nosed Form.
        </span>
        <br />
        You take on the imposing form of a large, winged oni. Once per day, as
        part of using Long-Nosed Form, you also gain the benefits of 4th-level
        enlarge and fly. This lasts for 5 minutes or until you shift out of your
        Long-Nosed Form, whichever happens first.
      </span>
    ),
  },
  {
    id: 27,
    name: "Hurricane swing",
    action: "reaction",
    tags: ["tengu"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <b>Frequency:</b> once per day.
        <br />
        <br />
        <b>Prerequisites:</b> Storm’s Lash.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You critically hit a foe with a Strike with a slashing
          weapon.
        </span>
        <br />
        Choose either lightning bolt or gust of wind. You Cast the chosen Spell
        as a 6th-level primal innate spell in the direction of the target of the
        triggering action.
      </span>
    ),
  },
  {
    id: 28,
    name: "Soaring form",
    action: "",
    tags: ["tengu"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Prerequisites Soaring Flight.
        </span>
        <br />
        Your wings grow stronger. You gain the effects of Soaring Flight at all
        times.
      </span>
    ),
  },
  {
    id: 29,
    name: "Trickster tengu",
    action: "",
    tags: ["tengu"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        You can transform yourself or the bodies of others to express your
        displeasure. Once per day, you can cast either aerial form or baleful
        polymorph as a 7th-level primal innate spell. You must take the form of
        a bird when using this aerial form.
      </span>
    ),
  },
];
