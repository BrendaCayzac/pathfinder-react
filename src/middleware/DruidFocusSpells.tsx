import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const DruidFocusSpells: Array<FocusSpell> = [
  {
    id: 1,
    level: 1,
    name: "Goodberry",
    action: "two_action",
    tags: ["uncommon", "druid", "healing", "necromancy"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> touch.
          <br />
          <b>Targets</b> 1 ripe berry.
          <br />
          <span className="frequency">
            <b>Duration</b> 10 minutes.
          </span>
          <br />
          You imbue the target berry with the bounty of nature. A creature can
          eat the berry with an Interact action to regain 1d6+4 HP. A berry not
          consumed during the duration withers away. Every six goodberries
          consumed gives as much nourishment as one square meal for a typical
          human.
        </p>
        <p>
          <b>Heightened (+1)</b> You can target an additional berry. A creature
          can consume any number of goodberries from the same casting with a
          single Interact action.
        </p>
      </>
    ),
  },
  {
    id: 2,
    level: 1,
    name: "Healing Animal",
    action: "one_action",
    tags: ["uncommon", "druid", "healing", "necromancy", "positive"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> touch or 30 feet (see text).
          <br />
          <span className="frequency">
            <b>Targets</b> 1 willing living animal creature.
          </span>
          <br />
          You heal an animal’s wounds, restoring 1d8 Hit Points to the target.
          The number of actions spent Casting this Spell determines its effect.
        </p>
        <ul>
          <li>
            <img
              src={require("../assets/img/one_action.png")}
              alt="one action icon"
            />{" "}
            <b>somatic</b> The spell has a range of touch.
          </li>
          <li>
            <img
              src={require("../assets/img/two_action.png")}
              alt="two action icon"
            />{" "}
            <b>somatic, verbal</b> The spell has a range of 30 feet and restores
            an additional 8 Hit Points to the target.
          </li>
        </ul>
        <p>
          <b>Heightened (+1)</b> The amount of healing increases by 1d8, and the
          additional healing for the 2-action version increases by 8.
        </p>
      </>
    ),
  },
  {
    id: 3,
    level: 1,
    name: "Tempest Surge",
    action: "one_action",
    tags: ["uncommon", "druid", "air", "electricity", "evocation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 creature.
          <br />
          <span className="frequency">
            <b>Saving Throw</b> Reflex.
          </span>
          <br />
          You surround a foe in a swirling storm of violent winds, roiling
          clouds, and crackling lightning. The storm deals 1d12 electricity
          damage. The target must attempt a basic Reflex save. On a failure, the
          target also is clumsy 2 for 1 round and takes 1 persistent electricity
          damage.
        </p>
        <p>
          <b>Heightened (+1)</b> The initial damage increases by 1d12, and the
          persistent electricity damage on a failure increases by 1.
        </p>
      </>
    ),
  },
  {
    id: 4,
    level: 1,
    name: "Wild Morph",
    action: "one_action",
    tags: ["uncommon", "druid", "morph", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          You morph your body based on your training, choosing one of the
          following effects based on your wild order feats.
        </p>
        <ul>
          <li>
            If you have Wild Shape, you can morph your hands into wild claws.
            Your hands transform into incredibly sharp claws. These claws are an
            unarmed attack you’re trained in and deal 1d6 slashing damage each
            (agile, finesse). You can still hold and use items with your hands
            while they’re transformed by this spell, but you cannot hold an item
            while attacking. If you have Insect Shape, you can instead transform
            your mouth into wild jaws, an unarmed attack you’re trained in that
            deals 1d8 piercing damage.
          </li>
          <li>
            If you have Elemental Shape, you can morph your body to be partially
            composed of elemental matter, granting you resistance 5 to critical
            hits and precision damage.
          </li>
          <li>
            If you have Plant Shape, you can morph your arms into long vines,
            increasing your reach to 10 feet (or 15 feet with a reach weapon).
          </li>
          <li>
            If you have Soaring Shape, you can cast the spell as a two-action
            activity (
            <img
              src={require("../assets/img/two_action.png")}
              alt="two action icon"
            />{" "}
            somatic, verbal) to grow wings from your back. These wings allow you
            to fly with a fly Speed of 30 feet.
          </li>
        </ul>
        <p>
          <b>Heightened (6th)</b> You can choose up to two of the effects from
          the list. Wild claws leave terrible, ragged wounds that also deal 2d6
          persistent bleed damage on a hit, and wild jaws are envenomed, also
          dealing 2d6 persistent poison damage on a hit.
        </p>
        <p>
          <b>Heightened (10th)</b> You can choose up to three of the effects
          from the list. Wild claws deal 4d6 persistent bleed damage on a hit,
          and wild jaws deal 4d6 persistent poison damage on a hit.
        </p>
      </>
    ),
  },
  {
    id: 5,
    level: 1,
    name: "Wild Shape",
    action: "two_action",
    tags: ["uncommon", "druid", "polymorph", "transmutation"],
    type: "Focus 1",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute (or longer).
          </span>
          <br />
          You infuse yourself with primal essence and transform into another
          form. You can polymorph into any form listed in pest form, which lasts
          10 minutes. All other wild shape forms last 1 minute. You can add more
          forms to your wild shape list with druid feats; your feat might grant
          you some or all of the forms from a given polymorph spell. When you
          transform into a form granted by a spell, you gain all the effects of
          the form you chose from a version of the spell heightened to wild
          shape’s level. Wild shape allows you to use your own shapeshifting
          training more easily than most polymorph spells. When you choose to
          use your own attack modifier while polymorphed instead of the form’s
          default attack modifier, you gain a +2 status bonus to your attack
          rolls.
        </p>
        <p>
          <b>Heightened (2nd)</b> You can also wild shape into the forms listed
          in animal form.
        </p>
      </>
    ),
  },
  {
    id: 6,
    level: 4,
    name: "Stormwind Flight",
    action: "two_action",
    tags: ["uncommon", "druid", "air", "transmutation"],
    type: "Focus 4",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <span className="frequency">
            <b>Duration</b> 1 minute.
          </span>
          <br />
          Powerful winds carry you smoothly through the air, giving you a fly
          Speed equal to your Speed. When this spell’s duration would end, if
          you’re still flying, you float to the ground, as feather fall.
        </p>
        <p>
          <b>Heightened (6th)</b> When you fly using stormwind flight, you don’t
          count flying against the wind as difficult terrain.
        </p>
      </>
    ),
  },
  {
    id: 7,
    level: 6,
    name: "Stormwind Flight",
    action: "one_action",
    tags: ["uncommon", "druid", "air", "transmutation"],
    type: "Focus 6",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Cast</b> verbal.
          </span>
          <br />
          You enhance a summoned creature with the power of the elements. If
          your next action is to cast either summon animal or summon plant or
          fungus, choose air, earth, fire, or water, and the creature you summon
          gains the corresponding abilities.
        </p>
        <ul>
          <li>
            <b>Air</b> The creature gains a fly Speed of 60 feet.
          </li>
          <li>
            <b>Earth</b> The creature gains a burrow Speed of 20 feet, reduces
            its land Speed by 10 feet (minimum 5 feet), and gains resistance 5
            to physical damage.
          </li>
          <li>
            <b>Fire</b> The creature’s attacks deal 1d6 extra fire damage, and
            it gains resistance 10 to fire and weakness 5 to cold and water.
          </li>
          <li>
            <b>Water</b> The creature gains a swim Speed of 60 feet, can spend 1
            action after a melee attack to attempt a Shove (ignoring multiple
            attack penalty), and gains resistance 5 to fire.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    level: 8,
    name: "Impaling Briars",
    action: "two_action",
    tags: ["uncommon", "druid", "conjuration", "plant"],
    type: "Focus 8",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Area</b> ground within a 100-foot emanation.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          The ground within the area transforms into a mass of dangerous briars
          that assault and impede your foes. The first time each round you
          Sustain the Spell, you can select one of the following effects to
          occur in the area.
        </p>
        <ul>
          <li>
            <b>Ensnare</b> The briars clump around your foes, attempting to hold
            them in place. A foe within the area (or flying at most 20 feet
            above the area) must attempt a Reflex save. On a failure, it takes a
            –10-foot circumstance penalty to all Speeds for 1 round, and on a
            critical failure, it is immobilized for 1 round unless it Escapes.
          </li>
          <li>
            <b>Impede</b> The briars twist and writhe, making the entire area
            difficult terrain.
          </li>
          <li>
            <b>Wall</b> A wall of thorns appears in the area, lasting for 1
            round. The wall is greater difficult terrain instead of difficult
            terrain.
          </li>
        </ul>
        <p>
          In addition, once per round you can direct the briars to impale any
          target in the area (or flying up to 20 feet above the area) that you
          can see by using a single action, which has the concentrate and
          manipulate traits. Make a spell attack roll. On a success, the target
          takes 10d6 piercing damage and takes a –10-foot circumstance penalty
          to all Speeds for 1 round; on a critical success, the target is
          immobilized for 1 round unless it Escapes.
        </p>
      </>
    ),
  },
  {
    id: 9,
    level: 9,
    name: "Storm Lord",
    action: "two_action",
    tags: ["uncommon", "druid", "air", "electricity", "evocation"],
    type: "Focus 9",
    description: (
      <>
        <p>
          <i>Core rulebook</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Requirements</b> You are outdoors and aboveground.
          <br />
          <b>Area</b> 100-foot emanation, which affects you.
          <br />
          <span className="frequency">
            <b>Duration</b> sustained up to 1 minute.
          </span>
          <br />
          The sky above you darkens in a matter of moments, swirling with
          ominous clouds punctuated by flashes of lighting. The first time each
          round you Sustain the Spell, you can select one of the following
          effects to occur in the area.
        </p>
        <ul>
          <li>
            <b>Calm</b> No additional effect.
          </li>
          <li>
            <b>Fog</b> Heavy fog rolls in, concealing the area with the effects
            of obscuring mist.
          </li>
          <li>
            <b>Rain</b> Torrential rain falls from the sky, dousing ordinary
            flames. Creatures in the area take a –2 circumstance penalty to
            Acrobatics and Perception checks.
          </li>
          <li>
            <b>Wind</b> Powerful winds buffet the area in all directions. Ranged
            attacks take a –4 circumstance penalty, and all flying is against
            the wind and counts as moving through difficult terrain.
          </li>
        </ul>
        <p>
          In addition, once per round you can use a single action, which has the
          concentrate and manipulate traits, to call down a bolt of lightning,
          striking any target in range that you can see. You deal 10d6
          electricity damage to the target; it must attempt a basic Reflex save.
          On a failure, it is also deafened for 1 round.
        </p>
      </>
    ),
  },
  {
    id: 10,
    level: 10,
    name: "Apex companion",
    action: "two_action",
    tags: ["uncommon", "druid", "polymorph", "transmutation"],
    type: "Focus 10",
    description: (
      <>
        <p>
          <i>Broken Promises</i>
          <br />
          <br />
          <b>Cast</b> somatic, verbal.
          <br />
          <b>Range</b> 30 feet.
          <br />
          <b>Targets</b> 1 animal companion in your service.
          <br />
          <span className="frequency">
            <b>Duration</b> minute.
          </span>
          <br />
          You focus on the energies of all members of your animal companion’s
          species, transforming your animal companion into its apex battle form.
          Your animal companion gains the following statistics and abilities
          while in its apex form.
        </p>
        <ul>
          <li>
            Your animal companion becomes Huge and its attacks have 15-foot
            reach. It must have enough space to expand into or the spell is
            lost.
          </li>
          <li>30 temporary Hit Points.</li>
          <li>Darkvision.</li>
          <li>
            Your animal companion’s attack’s damage dice increase by one step,
            and its attack gains the deadly d12 trait.
          </li>
          <li>+10-foot status bonus to its Speeds.</li>
          <li>Ignores difficult terrain and greater difficult terrain.</li>
        </ul>
      </>
    ),
  },
];
