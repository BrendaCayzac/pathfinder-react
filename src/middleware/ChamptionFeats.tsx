import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const ChampionFeats: Array<ClassFeat> = [
  {
    id: 1,
    name: "Agile Shield Grip",
    action: "one_action",
    tags: ["uncommon", "champion", "fighter"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Lost Omens: Knights of Lastwall</i>
        <br />
        <br />
        <span className="frequency">
          <b>Requirements</b> You are wielding a shield with a shield boss or
          shield spikes in one hand.
        </span>
        <br />
        You change your grip on the shield, allowing you to combine rapid
        attacks with your shield boss or shield spikes and your main weapon’s
        Strikes in a series of swift motions. You reduce your shield boss and
        shield spikes weapon damage die to 1d4. As long as the weapon damage die
        is 1d4, your shield boss and shield spike Strikes gain the agile weapon
        trait. You can use Agile Shield Grip again to switch to a normal grip,
        returning the damage to the usual amount and removing the agile trait.
      </p>
    ),
  },
  {
    id: 2,
    name: "Deity's domain",
    action: "",
    tags: ["champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core Rulebook</i>
        <br />
        <br />
        You embody an aspect of your deity. Choose one of your deity’s domains
        from those listed in the Domains section. You gain the domain’s initial
        domain spell as a devotion spell.
      </p>
    ),
  },
  {
    id: 3,
    name: "Desperate prayer",
    action: "",
    tags: ["champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        <b>Frequency</b> once per day.
        <br />
        <span className="frequency">
          <b>Trigger</b> You begin your turn and have no Focus Points in your
          pool.
        </span>
        <br />
        You call out to your deity in a plea for their aid. You instantly
        recover 1 Focus Point.
      </p>
    ),
  },
  {
    id: 4,
    name: "Everstand stance",
    action: "one_action",
    tags: ["uncommon", "champion", "fighter", "stance"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Lost Omens: Character Guide</i>
        <br />
        <br />
        <span className="frequency">
          <b>Requirements</b> You are wielding a shield.
        </span>
        <br />
        You brace your shield with both hands, enhancing its potential for both
        offense and defense. When in this stance, you wield the shield with both
        hands. When wielding a shield this way, increase the weapon damage die
        of the shield’s boss or spikes by one step, and increase the shield’s
        Hardness by 2 when using the Shield Block reaction.
      </p>
    ),
  },
  {
    id: 5,
    name: "Iron Repercussions",
    action: "",
    tags: ["uncommon", "champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> tyrant cause.
        </span>
        <br />
        Disobeying your Iron Command has lasting consequences. If an enemy
        refuses to kneel to you, you can deal persistent mental damage instead
        of normal mental damage. You must decide whether the mental damage will
        be persistent before your enemy chooses whether to kneel or not. The
        amount of damage is unchanged.
      </p>
    ),
  },
  {
    id: 6,
    name: "Ongoing Selfishness",
    action: "",
    tags: ["uncommon", "champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Advanced Player's Guide</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> desecrator cause.
        </span>
        <br />
        Your powerful personality and incredible ego demand that you protect
        yourself above all else. After you use Selfish Shield, you gain
        resistance to all further damage from the triggering enemy until the end
        of the turn on which you used the reaction. This resistance is equal to
        half your Selfish Shield resistance.
      </p>
    ),
  },
  {
    id: 7,
    name: "Ranged reprisal",
    action: "",
    tags: ["champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <p>
        <i>Core Rulebook</i>
        <br />
        <br />
        <span className="frequency">
          <b>Prerequisites</b> paladin cause.
        </span>
        <br />
        You can use Retributive Strike with a ranged weapon. In addition, if the
        foe that triggered your reaction is within 5 feet of your reach but not
        in your reach, as part of your reaction you can Step to put the foe in
        your reach before making a melee Retributive Strike.
      </p>
    ),
  },
  {
    id: 8,
    name: "Splinter faith",
    action: "",
    tags: ["champion", "cleric"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Lost Omens: Gods & Magic</i>
          <br />
          <br />
          Your faith in your deity is represented in an extremely unusual way
          that some might call heretical. When you select this feat, you should
          detail the fundamental tenets of your splinter faith, though it
          shouldn’t affect the deity’s edicts or anathema. Choose four domains.
          These domains must be chosen from among your deity’s domains, your
          deity’s alternate domains, and up to one domain that isn’t on either
          list and isn’t anathematic to your deity. Any domain spell you cast
          from a domain that isn’t on either of your deity’s lists is always
          heightened to 1 level lower than usual for a focus spell. For the
          purpose of abilities that depend on your deity’s domains, the four
          domains you chose are your deity’s domains, and any of your deity’s
          domains you didn’t choose are now among your deity’s alternate
          domains.
        </p>
        <p>
          <b>Special</b> Unless you take this feat at 1st level, changing the
          way you relate to your deity requires retraining, as described in the
          Changing Faith section. If you take this feat and previously benefited
          from any effect that requires a domain your splinter faith doesn’t
          include, such as a domain spell from Domain Initiate, you lose that
          effect.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Unimpeded step",
    action: "",
    tags: ["champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> liberator cause.
          </span>
          <br />
          With a burst of divine liberation, your ally’s movement from your
          Liberating Step is unaffected by difficult terrain, greater difficult
          terrain, narrow surfaces, and uneven ground.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Vicious vengeance",
    action: "",
    tags: ["uncommon", "champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> antipaladin cause.
          </span>
          <br />
          While your vengeance is painful for both you and your foe, none can
          doubt that your enemies suffer more. You gain a circumstance bonus to
          the damage you deal from Destructive Vengeance equal to the number of
          damage dice from the reaction. This only applies to the damage the
          enemy takes, not the damage to yourself or the extra damage you gain
          after using the reaction.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Weight of guilt",
    action: "",
    tags: ["champion"],
    level: 1,
    feat: "Feat 1",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> redeemer cause.
          </span>
          <br />
          Guilt clouds the minds of those who ignore your Glimpse of Redemption.
          Instead of making the triggering creature enfeebled 2, you can make it
          stupefied 2 for the same duration.
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Conceited mindset",
    action: "",
    tags: ["uncommon", "champion"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of evil.
          </span>
          <br />
          Because you know your mind is superior, you scoff at anyone who would
          alter your mental state—but this hubris gets the better of you when
          you’re wrong. You gain a +2 circumstance bonus to saves against mental
          effects. If you succeed at a save against a mental effect, you
          critically succeed instead; similarly, if you fail at a save against a
          mental effect, you critically fail instead.
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Devoted guardian",
    action: "one_action",
    tags: ["uncommon", "champion", "fighter"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Your last action was to Raise a Shield.
          </span>
          <br />
          You adopt a wide stance, ready to defend both yourself and your chosen
          ward. Select one adjacent creature. As long as your shield is raised
          and the creature remains adjacent to you, the creature gains a +1
          circumstance bonus to their AC, or a +2 circumstance bonus if the
          shield you raised was a tower shield.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Divine grace",
    action: "reaction",
    tags: ["champion"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You attempt a save against a spell, before you roll.
          </span>
          <br />
          You call upon your deity’s grace, gaining a +2 circumstance bonus to
          the save.
        </p>
      </>
    ),
  },
  {
    id: 15,
    name: "Dragonslayer oath",
    action: "",
    tags: ["champion", "oath"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You’ve sworn to slay evil dragons. Add the following tenet to your
          code after the others: “You must slay evil dragons you encounter as
          long as you have a reasonable chance of success.”
        </p>
        <p>
          Your Retributive Strike gains a +4 circumstance bonus to damage
          against an evil dragon, or +6 if you have master proficiency with the
          weapon you used. Your Glimpse of Redemption’s resistance against
          damage from an evil dragon is 7 + your level. If you use Liberating
          Step triggered by an evil dragon, your ally gains a +4 circumstance
          bonus to checks granted by your Liberating Step, and the ally can Step
          twice afterward.
        </p>
        <p>
          You don’t consider evil dragons to be legitimate authorities, even in
          nations they rule.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Esoteric oath",
    action: "",
    tags: ["champion", "oath"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You’ve sworn an oath to slay the alien abominations that lurk in the
          remote corners of Golarion. Add the following tenet to your champion’s
          code, after the other tenets. “You must slay evil aberrations you
          encounter as long as you have a reasonable chance of success.”
        </p>
        <p>
          Your Retributive Strike gains a +4 circumstance bonus to damage
          against an evil aberration, or +6 if you have master proficiency with
          the weapon you used. The resistance you gain from Glimpse of
          Redemption against damage from an evil aberration is 7 + your level.
          If you use Liberating Step triggered by an evil aberration, your ally
          gains a +4 circumstance bonus to checks granted by your Liberating
          Step, and the ally can Step twice afterward.
        </p>
        <p>
          You don’t consider evil aberrations to be legitimate authorities, even
          in nations they rule.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Fiendsbane oath",
    action: "",
    tags: ["champion", "oath"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You’ve sworn an oath to banish the corruption of fiends to the dark
          planes they call home. Add the following tenet to your champion’s code
          after the other tenets: “You must banish or slay fiends you come
          across as long as you have a reasonable chance of success; in the
          incredibly unlikely event you find a good fiend, you don’t have to
          banish or kill it.”
        </p>
        <p>
          Your Retributive Strike gains a +4 circumstance bonus to damage
          against a fiend, or a +6 circumstance bonus if you have master
          proficiency with the weapon you used. Your Glimpse of Redemption’s
          resistance against damage from a fiend is 7 + your level. If you use
          Liberating Step triggered by a fiend, your ally gains a +4
          circumstance bonus to checks granted by your Liberating Step, and the
          ally can Step twice afterward.
        </p>
        <p>
          You don’t consider fiends to be legitimate authorities, even in
          nations ruled by fiends.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Lightslayer oath",
    action: "",
    tags: ["uncommon", "champion", "oath"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of evil.
          </span>
          <br />
          You’ve sworn to rid the world of the self-righteousness of celestial
          beings. Add the following tenet to your code, after the other tenets.
          “You must banish or slay celestials you encounter as long as you have
          a reasonable chance of success; in the incredibly unlikely event you
          find an evil celestial, you don’t have to banish or kill it.”
        </p>
        <p>
          When you use your champion’s reaction against a celestial, the extra
          damage you deal with Strikes increases by 1 (or by 2 at 9th level and
          by 3 at 16th level).
        </p>
      </>
    ),
  },
  {
    id: 19,
    name: "Reliable squire",
    action: "",
    tags: ["uncommon", "bard", "champion"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lasrwall</i>
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
    id: 20,
    name: "Resilient mind",
    action: "",
    tags: ["uncommon", "champion", "cleric"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          You’re firm in your convictions and have girded your mind against
          outside influence. You gain a +1 circumstance bonus to saves against
          mental effects. This bonus increases to +2 against mental effects
          originating from undead.
        </p>
      </>
    ),
  },
  {
    id: 21,
    name: "Shinning Oath",
    action: "",
    tags: ["champion", "oath"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You’ve sworn an oath to put the undead to rest. Add the following
          tenet to your champion’s code after the other tenets: “You must end
          the existence of undead you encounter as long as you have a reasonable
          chance of success; in the unlikely event you find a good undead, you
          can try to work out a more peaceful way to help it recover from its
          undead state rather than destroying it in combat, such as helping it
          complete its unfinished business and find peace.”
        </p>
        <p>
          Your Retributive Strike gains a +4 circumstance bonus to damage
          against an undead, or +6 if you have master proficiency with the
          weapon you used. Your Glimpse of Redemption’s resistance against
          damage from an undead is 7 + your level. If you use Liberating Step
          triggered by an undead, your ally gains a +4 circumstance bonus to
          checks granted by your Liberating Step, and the ally can Step twice
          afterward.
        </p>
        <p>
          You don’t consider undead to be legitimate authorities, even in
          nations ruled by undead.
        </p>
      </>
    ),
  },
  {
    id: 22,
    name: "Vengeful Oath",
    action: "",
    tags: ["champion", "oath"],
    level: 2,
    feat: "Feat 2",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> paladin cause.
          </span>
          <br />
          You’ve sworn an oath to hunt down wicked evildoers and bring them to
          judgment. Add the following tenet to your code after the others: “You
          must hunt down and exterminate evil creatures that have committed
          heinous atrocities as long as you have a reasonable chance of success
          and aren’t engaged in a mission that would prevent your doing so.”
        </p>
        <p>
          You can use lay on hands to damage a creature you witness harming an
          innocent or a good ally as if it were undead; in this case, lay on
          hands deals good damage instead of positive damage and gains the good
          trait. This good damage can affect non-evil creatures. This doesn’t
          prevent you from healing such a creature with lay on hands; you choose
          whether to heal or harm.
        </p>
      </>
    ),
  },
  {
    id: 23,
    name: "Accelerating touch",
    action: "",
    tags: ["champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spell (lay on hands).
          </span>
          <br />
          Your healing energies are infused with bounding energy. A creature
          that recovers Hit Points from your lay on hands gains a +10-foot
          status bonus to its Speed until the end of its next turn.
        </p>
      </>
    ),
  },
  {
    id: 24,
    name: "Aura of courage",
    action: "",
    tags: ["champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You stand strong in the face of danger and inspire your allies to do
          the same. Whenever you become frightened, reduce the condition value
          by 1 (to a minimum of 0). At the end of your turn when you would
          reduce your frightened condition value by 1, you also reduce the value
          by 1 for all allies within 15 feet.
        </p>
      </>
    ),
  },
  {
    id: 25,
    name: "Aura of despair",
    action: "",
    tags: ["uncommon", "champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of evil.
          </span>
          <br />
          Your presence as an avatar of evil makes your foes more susceptible to
          terror and makes it almost impossible for them to shake off fear when
          you are near. Enemies within 15 feet of you take a –1 circumstance
          penalty to saving throws against fear. In addition, an enemy that ends
          its turn within 15 feet of you can’t reduce the value of its
          frightened condition below 1.
        </p>
      </>
    ),
  },
  {
    id: 26,
    name: "Cruelty",
    action: "one_action",
    tags: ["uncommon", "champion", "concentrate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spell (touch of corruption).
          </span>
          <br />
          The harm you deal with your corrupting touch saps the strength from
          your enemy’s body. If your next action is to cast touch of corruption
          on a living creature, the target is also enfeebled 1 for 1 minute if
          it fails its save (enfeebled 2 if it critically fails).
        </p>
      </>
    ),
  },
  {
    id: 27,
    name: "Divine Health",
    action: "",
    tags: ["champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          Your faith makes you resistant to disease, protecting you as you offer
          succor to the ill. You gain a +1 status bonus to saves against
          diseases. In addition, if you roll a success on a save against a
          disease, you get a critical success instead.
        </p>
      </>
    ),
  },
  {
    id: 28,
    name: "Everstand strike",
    action: "one_action",
    tags: ["uncommon", "champion", "fighter", "press"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> Everstand Stance.
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield in two hands.
          </span>
          <br />
          Your follow-up blow leaves you an opening to set your shield. Make a
          Strike with the wielded shield. If the Strike hits and deals damage,
          you also Raise your Shield.
        </p>
      </>
    ),
  },
  {
    id: 29,
    name: "Inspiring Resilience",
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
    id: 30,
    name: "Knock sense",
    action: "one_action",
    tags: ["uncommon", "champion", "fighter"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          You attack carefully to knock some sense into a creature whose actions
          aren’t their own. Make a Strike against a confused ally. The Strike is
          nonlethal and doesn’t take a –2 penalty for using a weapon without the
          nonlethal trait; if you hit and deal damage, your ally automatically
          succeeds at the flat check to remove the confused condition when
          taking damage.
        </p>
      </>
    ),
  },
  {
    id: 31,
    name: "Light of Revelation",
    action: "",
    tags: ["uncommon", "champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          You’ve learned to call upon light to reveal what is hidden. You gain
          the light of revelation devotion spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 32,
    name: "Mercy",
    action: "one_action",
    tags: ["champion", "concentrate", "metamagic"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spell (lay on hands).
          </span>
          <br />
          You’ve learned to call upon light to reveal what is hidden. You gain
          the light of revelation devotion spell. Increase the number of Focus
          Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 33,
    name: "Sacral lord",
    action: "",
    tags: ["rare", "champion", "oracle"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Dark Archives</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> trained in Occultism or Religion.
          </span>
          <br />
          By right of ritual or sheer stubbornness, you have claimed rulership
          of the land. Claim a defined territory, such as a small section of
          forest or river, or a district of a larger city. Within its borders,
          you can cast detect magic, guidance, and sigil as innate divine
          cantrips, and you gain a +1 circumstance bonus to Make an Impression
          on creatures that have the celestial, fiend, fey, monitor, or spirit
          traits.
        </p>
        <p>
          <b>Special</b> You and your land are linked. Changes to one mirror
          themselves on the other—if you’re depressed, gray rain and clammy mist
          might set in. These effects have no immediate mechanical impact, but
          they might give clues about problems afflicting the land.
        </p>
      </>
    ),
  },
  {
    id: 34,
    name: "Sun blade",
    action: "",
    tags: ["uncommon", "champion"],
    level: 4,
    feat: "Feat 4",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          You can unleash burning sunlight from your sword or spear. You gain
          the sun blade devotion spell. Increase the number of Focus Points in
          your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 35,
    name: "Attack opportunity",
    action: "reaction",
    tags: ["champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> A creature within your reach uses a manipulate action
            or a move action, makes a ranged attack, or leaves a square during a
            move action it’s using.
          </span>
          <br />
          You lash out at a foe that leaves an opening. Make a melee Strike
          against the triggering creature. If your attack is a critical hit and
          the trigger was a manipulate action, you disrupt that action. This
          Strike doesn’t count toward your multiple attack penalty, and your
          multiple attack penalty doesn’t apply to this Strike.
        </p>
      </>
    ),
  },
  {
    id: 36,
    name: "Corrupted shield",
    action: "",
    tags: ["uncommon", "champion", "divine", "necromancy", "negative"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (shield), tenets of evil.
          </span>
          <br />
          Your shield ally is more than just a spirit of protection—it’s a
          conduit for deadly divine magic. When you use your shield ally to
          Shield Block a melee unarmed attack or a melee weapon Strike from an
          adjacent creature, the attacker takes 1d6 evil or negative damage
          (your choice). If the attack or Strike breaks or destroys your shield,
          double this additional damage.
        </p>
        <p>
          The damage the attacker takes increases to 2d6 at 11th level and 3d6
          at 16th level.
        </p>
      </>
    ),
  },
  {
    id: 37,
    name: "Invigoration Mercy",
    action: "",
    tags: ["champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Mercy.
          </span>
          <br />
          Your divine touch rejuvenates the weak and tired. When you use Mercy,
          you can instead attempt a counteract check to remove the clumsy or
          enfeebled conditions, using the source of that condition to determine
          the counteract level and DC. If the condition was caused by an ongoing
          effect and you don’t remove that effect, the condition returns at the
          end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 38,
    name: "Litany Against wrath",
    action: "",
    tags: ["champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spells, tenets of good.
          </span>
          <br />
          You excoriate a foe for its wrath against goodly creatures. You can
          cast the litany against wrath devotion spell. Increase the number of
          Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 39,
    name: "Loyal warhorse",
    action: "",
    tags: ["champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed).
          </span>
          <br />
          You and your mount have grown closer, and your loyalty to each other
          is unbreakable. The mount you gained through the divine ally class
          feature is now a mature animal companion. In addition, your mount
          never attacks you, even if it is magically compelled to do so.
        </p>
      </>
    ),
  },
  {
    id: 40,
    name: "Shield Wall",
    action: "reaction",
    tags: ["uncommon", "champion", "fighter"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> Your shield is raised and an adjacent ally Raises a
            Shield.
          </span>
          <br />
          You use your shield in tandem with an ally’s, forming a barricade.
          Both you and the triggering creature have standard cover as long as
          you remain adjacent to each other and you both have your shields
          raised; when this is no longer the case, the effect ends. You and your
          ally can’t use this cover to Hide, as it’s obvious you’re standing
          there holding your shields, but you and your ally can use it to Take
          Cover. Normally, if you and your ally don’t move, Shield Wall lasts
          until the beginning of your next turn, when your shield is no longer
          raised.
        </p>
      </>
    ),
  },
  {
    id: 41,
    name: "Shield Warden",
    action: "",
    tags: ["champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (shield), tenets of good.
          </span>
          <br />
          You use your shield to protect your allies as well as yourself. When
          you have a shield raised, you can use your Shield Block reaction when
          an attack is made against an ally adjacent to you. If you do, the
          shield prevents that ally from taking damage instead of preventing you
          from taking damage, following the normal rules for Shield Block.
        </p>
      </>
    ),
  },
  {
    id: 42,
    name: "Smite evil",
    action: "one_action",
    tags: ["champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (blade), tenets of good.
          </span>
          <br />
          Your blade ally becomes an even more powerful tool against evildoers.
          Select one foe you can see. Until the start of your next turn, your
          Strikes with the weapon your blade ally inhabits against that foe deal
          an extra 4 good damage, increasing to 6 if you have master proficiency
          with this weapon.
        </p>
        <p>
          If the foe attacks one of your allies, the duration extends to the end
          of that foe’s next turn. If the foe continues to attack your allies
          each turn, the duration continues to extend.
        </p>
      </>
    ),
  },
  {
    id: 43,
    name: "Smite good",
    action: "one_action",
    tags: ["uncommon", "champion"],
    level: 6,
    feat: "Feat 6",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (blade), tenets of evil.
          </span>
          <br />
          Your blade ally shares your lust for the blood of good creatures.
          Select one enemy you can see. Until the start of your next turn, your
          Strikes against that foe using the weapon your blade ally inhabits
          deal an extra 4 evil damage, increasing to 6 if you have master
          proficiency with this weapon.
        </p>
        <p>
          If the chosen enemy attacks you before the start of your next turn,
          the duration extends to the end of that enemy’s next turn. If the
          enemy continues to attack you each turn, the duration continues to
          extend.
        </p>
      </>
    ),
  },
  {
    id: 44,
    name: "Advanced deity's domain",
    action: "",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Cure Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Deity’s Domain.
          </span>
          <br />
          Through your conviction, you have glimpsed the deeper secrets of your
          deity’s domain. You gain an advanced domain spell from the domain you
          chose with Deity’s Domain. You can cast that spell as a devotion
          spell. Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 45,
    name: "Greater Cruelty",
    action: "",
    tags: ["uncommon", "champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Cruelty.
          </span>
          <br />
          The extent of the corruption within you does more than simply sap your
          foes’ strength, it devastates their minds and reflexes. When you use
          Cruelty, choose whether you want to make the creature enfeebled as
          normal, to make it clumsy 1 on a failed save (clumsy 2 on a critical
          failure), or to make it stupefied 1 on a failed save (stupefied 2 on a
          critical failure).
        </p>
      </>
    ),
  },
  {
    id: 46,
    name: "Greater Mercy",
    action: "",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Mercy.
          </span>
          <br />
          Your faith enhances your ability to remove conditions. When you use
          Mercy, you can instead attempt to counteract the blinded, deafened,
          sickened, or slowed conditions.
        </p>
      </>
    ),
  },
  {
    id: 47,
    name: "Heal Mount",
    action: "",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed), devotion spell (lay on
            hands).
          </span>
          <br />
          Your devotion to your mount manifests as a surge of positive energy.
          When you cast lay on hands on your mount, you can restore 10 Hit
          Points, plus 10 for each heightened level.
        </p>
      </>
    ),
  },
  {
    id: 48,
    name: "Impassable wall stance",
    action: "one_action",
    tags: ["uncommon", "champion", "fighter", "stance"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Lost Omens: Character Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Attack of Opportunity.
          </span>
          <br />
          You refuse to let foes past your guard. As long as you are in this
          stance, when you critically hit with an Attack of Opportunity
          triggered by a move action, you disrupt that move action.
        </p>
      </>
    ),
  },
  {
    id: 49,
    name: "Impassable wall stance",
    action: "",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Shield Block.
          </span>
          <br />
          You can bring your shield into place with hardly a thought. At the
          start of each of your turns, you gain an additional reaction that you
          can use only to Shield Block.
        </p>
      </>
    ),
  },
  {
    id: 50,
    name: "Sacrifice Armor",
    action: "reaction",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> You are hit by a Strike that deals physical damage.
          </span>
          <br />
          With divine awareness, you twist your body to lessen the impact of an
          attack. Reduce the damage you take by an amount equal to twice your
          armor’s level. Your armor becomes broken, reducing its Hit Points to
          its Broken Threshold. If your armor was already damaged, it is
          destroyed instead.
        </p>
      </>
    ),
  },
  {
    id: 51,
    name: "Second Ally",
    action: "",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> divine ally.
          </span>
          <br />
          Your inner grace attracts the attention of a second protective spirit.
          Choose a second type of divine ally and gain its benefits.
        </p>
      </>
    ),
  },
  {
    id: 52,
    name: "Sense Evil",
    action: "",
    tags: ["champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You sense evil as a queasy or foreboding feeling. When in the presence
          of an aura of evil that is powerful or overwhelming (see Alignment
          Aura section), you eventually detect the aura, though you might not do
          so instantly, and you can’t pinpoint the location. This acts as a
          vague sense, similar to humans’ sense of smell. An evil creature using
          a disguise or otherwise trying to hide its presence attempts a
          Deception check against your Perception DC to hide its aura from you.
          If the creature succeeds at its Deception check, it is then
          temporarily immune to your Sense Evil for 1 day.
        </p>
      </>
    ),
  },
  {
    id: 53,
    name: "Sense Good",
    action: "",
    tags: ["uncommon", "champion"],
    level: 8,
    feat: "Feat 8",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of evil.
          </span>
          <br />
          The presence of goodness sickens you with its saccharine
          self-righteousness. When in the presence of an aura of good that is
          powerful or overwhelming (see Alignment Aura section), you detect the
          aura, though you might not do so instantly, and you can’t pinpoint the
          location. This acts as a vague sense, similar to humans’ sense of
          smell. A good creature using a disguise or otherwise trying to hide
          its presence attempts a Deception check against your Perception DC to
          hide its aura from you. If the creature succeeds at its Deception
          check, it is then temporarily immune to your Sense Good for 1 day.
        </p>
      </>
    ),
  },
  {
    id: 54,
    name: "Devoted focus",
    action: "",
    tags: ["champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spells.
          </span>
          <br />
          Your devotion is strong enough to increase your focus to incredible
          heights. If you have spent at least 2 Focus Points since the last time
          you Refocused, you recover 2 Focus Points when you Refocus instead of
          1.
        </p>
      </>
    ),
  },
  {
    id: 55,
    name: "Elucidating mercy",
    action: "",
    tags: ["champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Mercy.
          </span>
          <br />
          Your mercy grants clarity to those around you just when they need it
          most. When you use Mercy, you can instead attempt a counteract check
          to remove the confused or stupefied conditions, using the source of
          that condition to determine the counteract level and DC. If the
          condition was caused by an ongoing effect and you don’t remove that
          effect, the condition returns at the end of your next turn.
        </p>
      </>
    ),
  },
  {
    id: 56,
    name: "Holy light",
    action: "two_action",
    tags: [
      "uncommon",
      "champion",
      "cleric",
      "concentrate",
      "divine",
      "evocation",
      "light",
    ],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> you follow a good-aligned deity.
          </span>
          <br />
          You raise your arms to the sky and pray fervently, surrounding
          yourself in a beacon of holy light. The beacon sheds bright light in a
          30-foot-radius, 100-foot-high cylinder centered on you until the
          beginning of your next turn. Evil creatures in the area must succeed
          at a Will save equal to your class DC or spell DC (whichever is
          higher) or become dazzled for 1 round.
        </p>
      </>
    ),
  },
  {
    id: 57,
    name: "Imposing destrier",
    action: "",
    tags: ["champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed), Loyal Warhorse.
          </span>
          <br />
          Under your care, your mount has realized its innate potential. The
          mount you gained through the divine ally class feature is now a nimble
          or savage animal companion. During an encounter, even if you don’t use
          the Command an Animal action, your mount can still use 1 action on
          your turn to Stride or Strike.
        </p>
      </>
    ),
  },
  {
    id: 58,
    name: "Litany against sloth",
    action: "",
    tags: ["champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spells, tenets of good.
          </span>
          <br />
          You rail against the sin of sloth, turning a foe’s laziness against
          it. You can cast the litany against sloth devotion spell. Increase the
          number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 59,
    name: "Litany of self-interest",
    action: "",
    tags: ["uncommon", "champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced player's guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spells, tenets of evil.
          </span>
          <br />
          You compel a creature to act toward its own ends rather than consider
          others. You can cast the litany of self-interest devotion spell.
          Increase the number of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 60,
    name: "Radiant blade spirit",
    action: "",
    tags: ["champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (blade).
          </span>
          <br />
          Your divine ally radiates power, enhancing your chosen weapon. When
          you choose the weapon for your blade ally during your daily
          preparations, add the following property runes to the list of effects
          you can choose from: flaming and any aligned properties (anarchic,
          axiomatic, holy, or unholy) that match your cause’s alignment.
        </p>
      </>
    ),
  },
  {
    id: 61,
    name: "Resilient touch",
    action: "",
    tags: ["champion"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spell (lay on hands).
          </span>
          <br />
          Your healing energies create an aura of protection that defends your
          allies against more than just blades and arrows. An ally that recovers
          Hit Points from your lay on hands gains a +1 status bonus to their
          saving throws until the end of their next turn.
        </p>
      </>
    ),
  },
  {
    id: 62,
    name: "Shield of reckoning",
    action: "",
    tags: ["champion", "flourish"],
    level: 10,
    feat: "Feat 10",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <b>Prerequisites</b> champion’s reaction, Shield Warden.
          <br />
          <span className="frequency">
            <b>Trigger</b> A foe’s attack against an ally matches the trigger
            for both your Shield Block reaction and your champion’s reaction.
          </span>
          <br />
          When you shield your ally against an attack, you call upon your power
          to protect your ally further. You use the Shield Block reaction to
          prevent damage to an ally and also use your champion’s reaction
          against the foe that attacked your ally.
        </p>
      </>
    ),
  },
  {
    id: 63,
    name: "Affliction mercy",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Mercy.
          </span>
          <br />
          The divine grace that flows through you grants reprieve from an
          affliction. When you use Mercy, you can instead attempt to counteract
          a curse, disease, or poison.
        </p>
      </>
    ),
  },
  {
    id: 64,
    name: "Amplifying touch",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spell (lay on hands).
          </span>
          <br />
          Your healing energies empower attacks. An ally that recovers Hit
          Points from your lay on hands gains a +1 status bonus to their attack
          rolls and deals 1 additional good damage on all their Strikes until
          the end of their next turn.
        </p>
      </>
    ),
  },
  {
    id: 65,
    name: "Aura of Faith",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You radiate an aura of pure belief that imbues your attacks and those
          of nearby allies with holy power. Your Strikes deal an extra 1 good
          damage against evil creatures. Also, each good-aligned ally within 15
          feet gains this benefit on their first Strike that hits an evil
          creature each round.
        </p>
      </>
    ),
  },
  {
    id: 66,
    name: "Blade of justice",
    action: "two_action",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You call upon divine power and make a weapon or unarmed Strike against
          a foe you have witnessed harming an ally or innocent. The Strike deals
          two extra weapon damage dice if the target of your Strike is evil.
          Whether or not the target is evil, you can convert all the physical
          damage from the attack into good damage, and if you are a paladin, the
          Strike applies all effects that normally apply on a Retributive Strike
          (such as divine smite).
        </p>
      </>
    ),
  },
  {
    id: 67,
    name: "Champion's sacrifice",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You can suffer so that others might live. You can cast the champion’s
          sacrifice devotion spell. Increase the number of Focus Points in your
          focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 68,
    name: "Divine Wall",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> You are wielding a shield.
          </span>
          <br />
          You use your shield to harry your enemies, preventing them from
          stepping away from or around you. All spaces adjacent to you are
          difficult terrain for your enemies.
        </p>
      </>
    ),
  },
  {
    id: 69,
    name: "Enforce oath",
    action: "one_action",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Frequency</b> once per hour.
          <br />
          <span className="frequency">
            <b>Prerequisites</b> You’ve sworn to an oath against a specific type
            of creature.
          </span>
          <br />
          You call on your oath to embolden you in combat. When you Enforce your
          Oath, select one creature you can see that you’ve sworn to defeat as
          part of your oath. You gain a +1 status bonus to AC and saves against
          attacks and effects by the chosen creature. You also gain a +1 status
          bonus to attack rolls against the chosen creature. However, your
          dedication to Enforcing your Oath draws your focus away from all other
          foes. While you are Enforcing your Oath, you take a –1 status penalty
          to AC, attack rolls, and saves against all other creatures until you
          stop Enforcing your Oath.
        </p>
        <p>
          You stop Enforcing your Oath once the chosen creature is reduced to 0
          Hit Points or offers a legitimate surrender to you or your allies. You
          immediately stop Enforcing your Oath if you are unconscious or if the
          chosen creature goes unnoticed by you for more than 1 minute. You can
          also stop Enforcing your Oath at any time during your turn as a free
          action.
        </p>
      </>
    ),
  },
  {
    id: 70,
    name: "Gruesome strike",
    action: "one_action",
    tags: ["uncommon", "champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <b>Prerequisites</b> tenets of evil, champion’s reaction that grants
          extra damage with your Strikes.
          <br />
          <span className="frequency">
            <b>Requirements</b> Your Strikes currently deal extra damage from
            your champion’s reaction.
          </span>
          <br />
          Make a Strike against the creature that triggered your champion’s
          reaction. If you hit, the target takes double the extra damage from
          your reaction and must succeed at a Fortitude save against your class
          DC or be drained 1. Regardless of the result, the creature is
          temporarily immune to your Gruesome Strike for 24 hours.
        </p>
      </>
    ),
  },
  {
    id: 71,
    name: "Lasting Doubt",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> redeemer cause.
          </span>
          <br />
          When you cast doubt upon your foes, the effect lasts longer than
          usual. After being enfeebled 2 by your Glimpse of Redemption, the foe
          is enfeebled 1 for 1 minute. If you have Weight of Guilt, after being
          stupefied 2 by your Glimpse of Redemption, the foe is stupefied 1 for
          1 minute or until the flat check from stupefied causes it to lose a
          spell, whichever comes first.
        </p>
      </>
    ),
  },
  {
    id: 72,
    name: "Liberating Stride",
    action: "",
    tags: ["champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> liberator cause.
          </span>
          <br />
          Instead of you taking a Step at the end of your Liberating Step, the
          triggering ally can Stride up to half their Speed. Even if you have
          exalt, only the triggering ally gains this benefit.
        </p>
      </>
    ),
  },
  {
    id: 73,
    name: "Miraculous intervention",
    action: "reaction",
    tags: ["uncommon", "champion", "cleric"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          <span className="frequency">
            <b>Trigger</b> An adjacent fiend or undead begins to use a reaction.
          </span>
          <br />
          Through divine intervention or whispered prayers, you foil an enemy’s
          response. If the triggering creature’s level is equal to or lower than
          yours, you disrupt the triggering reaction. If the triggering
          creature’s level is higher than yours, you must make an attack roll or
          spell attack roll against its AC (your choice). On a success, you
          disrupt the reaction.
        </p>
      </>
    ),
  },
  {
    id: 74,
    name: "Necromantic deflection",
    action: "",
    tags: ["uncommon", "champion", "druid"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Lost Omens: Knights of Lastwall</i>
          <br />
          <br />
          You imbue your shield with life-giving energy to deflect harmful
          necromantic magic. When you have your shield raised, you gain the
          shield’s circumstance bonus to your AC and saving throws against
          necromancy spells. If you have the Shield Block reaction, damage you
          take as a result of a necromancy spell can trigger that reaction, even
          if it isn’t physical damage.
        </p>
      </>
    ),
  },
  {
    id: 75,
    name: "Paler Horse",
    action: "",
    tags: ["uncommon", "champion"],
    level: 12,
    feat: "Feat 12",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed), tenets of evil.
          </span>
          <br />
          Your mount becomes a grotesque creature of foreboding when you ride
          it. Its appearance transforms as flames erupt from its skin, a whorl
          of negative energy surrounds it, or poison leaks from its flesh. When
          you Mount your steed ally, you can choose fire, negative, or poison.
          As long as you ride it, your steed gains resistance 10 to the chosen
          damage type, and any creature that touches your steed takes 1d6 damage
          of the chosen type; this includes hitting the steed with unarmed
          attacks or with a melee weapon Strike while adjacent to the steed.
          This damage increases to 2d6 at 16th level and 3d6 at 20th level.
        </p>
      </>
    ),
  },
  {
    id: 76,
    name: "Anchoring aura",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Fiendsbane Oath.
          </span>
          <br />
          Your aura hampers fiends’ teleportation. Your aura attempts to
          counteract teleportation spells cast by fiends within 15 feet, using
          the spell level and DC of your devotion spells.
        </p>
      </>
    ),
  },
  {
    id: 77,
    name: "Aura of Life",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Shining Oath.
          </span>
          <br />
          Your aura protects against necromantic effects. You and all allies
          within 15 feet gain resistance 5 to negative energy and a +1 status
          bonus to saves against necromancy effects.
        </p>
      </>
    ),
  },
  {
    id: 78,
    name: "Aura of Preservation",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Esoteric Oath.
          </span>
          <br />
          Your aura protects against the twisting powers of aberrations. You and
          all allies within 15 feet gain a +1 status bonus to Fortitude and Will
          saves against effects from aberrations. You also gain a +1 status
          bonus to Fortitude saves against morph or polymorph effects and Will
          saves against mental effects; this bonus increases to +2 against
          aberrations’ morph, polymorph, or mental effects.
        </p>
      </>
    ),
  },
  {
    id: 79,
    name: "Aura of Righteousness",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          Your righteous aura dampens evil’s might. You and all allies within 15
          feet gain evil resistance 5.
        </p>
      </>
    ),
  },
  {
    id: 80,
    name: "Aura of Vengance",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> exalt, Vengeful Oath.
          </span>
          <br />
          When you call upon others to take retribution, you also guide their
          aim. When you use Retributive Strike, your allies who make Strikes
          take only a –2 penalty, instead of a –5 penalty.
        </p>
      </>
    ),
  },
  {
    id: 81,
    name: "Divine Reflexes",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          At the start of each of your turns, you gain an additional reaction
          that you can use only for your champion’s reaction.
        </p>
      </>
    ),
  },
  {
    id: 82,
    name: "Greater interpose",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Sacrifice Armor.
          </span>
          <br />
          Your divine grace empowers you to avoid hits when you otherwise could
          not. You can use Sacrifice Armor to reduce any type of damage from an
          attack or effect requiring a Reflex save. When you use Sacrifice Armor
          against a critical hit or a critical failure on a Reflex save that
          would otherwise cause you to take double damage, you take the normal
          amount of damage instead.
        </p>
      </>
    ),
  },
  {
    id: 83,
    name: "Litany of depravity",
    action: "",
    tags: ["uncommon", "champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of evil.
          </span>
          <br />
          You undercut your enemy’s vain moralism, opening their heart to evil.
          You can cast the litany of depravity focus spell. Increase the number
          of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 84,
    name: "Litany of depravity",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You call upon righteousness to expose an evil foe’s weakness. You can
          cast the litany of righteousness devotion spell. Increase the number
          of Focus Points in your focus pool by 1.
        </p>
      </>
    ),
  },
  {
    id: 85,
    name: "Sacral monarch",
    action: "",
    tags: ["champion", "oracle"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Dark Archive</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Sacral Lord, master in Occultism or Religion.
          </span>
          <br />
          You have come into your full powers and are truly a monarch of your
          realm, by your own definition at least. While in your territory, you
          can cast banishment and inevitable disaster as innate divine spells,
          each once per day.
        </p>
      </>
    ),
  },
  {
    id: 86,
    name: "Wyrmbane aura",
    action: "",
    tags: ["champion"],
    level: 14,
    feat: "Feat 14",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Requirements</b> Dragonslayer Oath.
          </span>
          <br />
          Your aura protects against destructive energies and dragons’ breath.
          You and all allies within 15 feet gain resistance equal to your
          Charisma modifier to acid, cold, electricity, fire, and poison. If the
          source of one of these types of damage is a dragon’s breath, increase
          the resistance to half your level.
        </p>
      </>
    ),
  },
  {
    id: 87,
    name: "Auspicious mount",
    action: "",
    tags: ["champion"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed), Imposing Destrier.
          </span>
          <br />
          Guided by your ongoing care, your steed has developed incredible
          intelligence and skill. The mount you gained through the divine ally
          class feature is now a specialized animal companion. You can select
          one of the usual specializations or the auspice specialization.
        </p>
        <p>
          Auspice mounts gain the following benefits: Your companion is marked
          by your deity’s religious symbol as a sacred creature of your deity.
          Its proficiency rank in Religion increases to expert, it can speak the
          language associated with your deity’s servitors (Celestial for
          champions who follow the tenets of good), and its Intelligence
          modifier increases by 2 and its Wisdom modifier by 1.
        </p>
      </>
    ),
  },
  {
    id: 88,
    name: "Expand Aura",
    action: "one_action",
    tags: ["champion", "concentrate"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> You have at least one aura from a champion feat
            or feature.
          </span>
          <br />
          You focus your divine power to extend your influence. Select one aura
          you have from a champion feat or feature, such as Aura of Courage or
          Aura of Life. The radius of the aura is doubled until the start of
          your next turn.
        </p>
      </>
    ),
  },
  {
    id: 89,
    name: "Instrument of slaughter",
    action: "one_action",
    tags: ["uncommon", "champion"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (blade), tenets of evil.
          </span>
          <br />
          Your blade ally thirsts for the blood of your foes. Whenever you
          critically hit an enemy with the weapon inhabited by your blade ally
          while dealing extra damage from your champion’s reaction, the target
          takes persistent bleed damage equal to two of the weapon’s damage
          dice.
        </p>
      </>
    ),
  },
  {
    id: 90,
    name: "Instrument of Zeal",
    action: "",
    tags: ["champion"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (blade), tenets of good.
          </span>
          <br />
          Divine energy fills your weapon. Whenever you critically hit a foe
          with Blade of Justice or a Retributive Strike, your attack adds an
          extra damage die, and the target is slowed 1 on its next turn.
        </p>
      </>
    ),
  },
  {
    id: 91,
    name: "Shield of Grace",
    action: "",
    tags: ["champion"],
    level: 16,
    feat: "Feat 16",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Shield Warden.
          </span>
          <br />
          You protect an ally with both your shield and your body. Whenever you
          use the Shield Block reaction to prevent damage to an ally, you can
          evenly split the remaining damage after the Shield Block between the
          ally and yourself.
        </p>
      </>
    ),
  },
  {
    id: 92,
    name: "Celestial form",
    action: "",
    tags: ["champion"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You take on a celestial countenance, appearing like a type of
          celestial who serves your deity; for example, as an angel, you would
          gain a halo and feathery wings. You gain a fly Speed equal to your
          Speed. You gain darkvision if you don’t already have it, and you gain
          the celestial trait and the trait appropriate to the type of servitor
          you’ve become (archon, angel, or azata, for example).
        </p>
      </>
    ),
  },
  {
    id: 93,
    name: "Fiendish form",
    action: "",
    tags: ["uncommon", "champion"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of evil.
          </span>
          <br />
          Your features reshape into those of a type of fiend who serves your
          deity; for example, as a demon you might have putrid scales, twisted
          horns, and red eyes. You gain a fly Speed equal to your Speed. You
          gain darkvision if you don’t already have it, and you gain the fiend
          trait and the trait appropriate to the type of servitor you’ve become
          (such as daemon, demon, or devil).
        </p>
      </>
    ),
  },
  {
    id: 94,
    name: "Rejuvenating touch",
    action: "",
    tags: ["champion"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> devotion spell (lay on hands).
          </span>
          <br />
          Your healing energies linger after you cast, providing continual
          benefits. An ally that recovers Hit Points from your lay on hands
          gains 10 temporary Hit Points at the start of their turn during each
          of the next 10 rounds. This effect ends if the ally is knocked
          unconscious.
        </p>
      </>
    ),
  },
  {
    id: 95,
    name: "Ultimate Mercy",
    action: "",
    tags: ["champion"],
    level: 18,
    feat: "Feat 18",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> Mercy.
          </span>
          <br />
          Your mercy transcends the bounds of life and death. When you use
          Mercy, you can cast lay on hands on a creature that died since your
          last turn to return it to life. The target returns to life with 1 hit
          point and becomes wounded 1. You can’t use Ultimate Mercy if the
          triggering effect was disintegrate or a death effect.
        </p>
      </>
    ),
  },
  {
    id: 96,
    name: "Aura of unbreakable virtue",
    action: "",
    tags: ["uncommon", "champion"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Broken Promises</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> tenets of good.
          </span>
          <br />
          You are a paragon of all that is good, your overwhelming aura causing
          evildoers to cower. All evil creatures within 15 feet of you take a –1
          status penalty to checks and DCs that target you or your allies. This
          penalty is –2 against creatures you have taken an oath against (such
          as dragons if you have the Dragonslayer Oath feat). You can choose to
          suppress or resume this aura as an action, which has the concentrate
          trait.
        </p>
      </>
    ),
  },
  {
    id: 97,
    name: "Celestial Mount",
    action: "",
    tags: ["champion"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed), tenets of good.
          </span>
          <br />
          Your steed gains incredible celestial powers granted by your deity. It
          gains darkvision, its maximum Hit Points increase by 40, and it gains
          weakness 10 to evil damage.
        </p>
        <p>
          Additionally, it grows wings appropriate to a servitor of your deity
          (such as metallic wings for an archon), granting it a fly Speed equal
          to its Speed. It gains the celestial trait and the trait appropriate
          to the type of servitor it has become (archon, angel, or azata, for
          example).
        </p>
      </>
    ),
  },
  {
    id: 98,
    name: "Everdistant defense",
    action: "reaction",
    tags: ["uncommon", "abjuration", "champion", "divine"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Fists of the Ruby Phoenix Adventure</i>
          <br />
          <br />
          <b>Trigger</b> A creature within your aura is targeted by a ranged
          attack or a creature moves through your aura.
          <br />
          <span className="frequency">
            <b>Requirements</b> You have at least one aura from a champion feat
            or feature.
          </span>
          <br />
          The spatial barrier of Syndara’s Island has taught you that distance
          can foil enemies better than any armor. You warp space, causing each
          square within your aura that the attack or creature would move through
          to count as triple the distance. If this reaction is used on a ranged
          attack, the attack takes range increment penalties based on the
          adjusted range and fails if this would cause it to exceed its maximum
          range.
        </p>
      </>
    ),
  },
  {
    id: 99,
    name: "Fiendish mount",
    action: "",
    tags: ["uncommon", "champion"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (steed), tenets of evil.
          </span>
          <br />
          Your steed ally manifests a suite of powerful and sinister gifts
          granted to it by your deity. It gains darkvision, its maximum Hit
          Points increase by 40, and it gains weakness 10 to good damage.
        </p>
        <p>
          Additionally, it grows wings appropriate for a servitor of your deity
          (such as bat wings for a devil), granting it a fly Speed equal to its
          Speed. It gains the fiend trait and the trait appropriate to the type
          of servitor it has become (such as daemon, demon, or devil).
        </p>
      </>
    ),
  },
  {
    id: 100,
    name: "Radiant Blade Master",
    action: "",
    tags: ["champion"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (blade), Radiant Blade Spirit.
          </span>
          <br />
          Your divine ally turns your chosen weapon into a paragon of its type.
          When you choose the weapon for your blade divine ally during your
          preparations, add the following property runes to the list of effects
          you can choose from: dancing, greater disrupting, and keen.
        </p>
      </>
    ),
  },
  {
    id: 101,
    name: "Sacred Defender",
    action: "",
    tags: ["champion"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Advanced Player's Guide</i>
          <br />
          <br />
          You are a great warrior that can stand strong against the fiercest
          opponents to your cause. You gain resistance 10 to bludgeoning,
          piercing, and slashing damage caused by creatures and effects opposed
          to your tenets (evil creatures for tenets of good, good creatures for
          tenets of evil, and so on). In addition, creatures and effects that
          roll a natural 20 on an attack roll against you don’t improve their
          result by one degree of success.
        </p>
      </>
    ),
  },
  {
    id: 102,
    name: "Shield defender",
    action: "",
    tags: ["champion"],
    level: 20,
    feat: "Feat 20",
    description: (
      <>
        <p>
          <i>Core Rulebook</i>
          <br />
          <br />
          <span className="frequency">
            <b>Prerequisites</b> divine ally (shield).
          </span>
          <br />
          Your shield is a vessel of divine protection. When you’re wielding
          your chosen shield, it is always raised, even without you using the
          Raise a Shield action. Your chosen shield doubles its HP and BT,
          rather than increasing them by half. If it would be destroyed, it
          vanishes to your deity’s realm instead, where your divine ally repairs
          it. During your next daily preparations, the shield returns to you
          fully repaired.
        </p>
      </>
    ),
  },
];
