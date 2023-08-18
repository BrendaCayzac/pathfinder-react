import React from "react";

export const gnomeFeats = [
  {
    id: 1,
    name: "Animal accomplice",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description:
      "You build a rapport with an animal, which becomes magically bonded to you. You gain a familiar using the Rules for Familiars. The type of animal is up to you, but most gnomes choose animals with a burrow Speed.",
  },
  {
    id: 2,
    name: "Burrow elocutionist",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description:
      "You recognize the chittering of ground creatures as its own peculiar language. You can ask questions of, receive answers from, and use the Diplomacy skill with animals that have a burrow Speed, such as badgers, ground squirrels, moles, and prairie dogs. The GM determines which animals count for this ability.",
  },
  {
    id: 3,
    name: "Empathetic plea",
    action: "reaction",
    tags: ["auditory", "emotion", "gnome", "mental", "visual"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> trained in Diplomacy
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You are attacked by a creature that you haven’t yet
          acted hostile toward. You must use this reaction before the creature
          rolls its attack.
        </span>
        <br />
        The way you cringe or use those puppy-dog eyes you’ve been practicing
        elicits an empathetic response in the attacker. Attempt a Diplomacy
        check against your attacker’s Will DC.
        <br />
        <br />
        <b>Critical Success:</b> The creature pulls its attack, wasting its
        action, and can’t use hostile actions against you until the beginning of
        its next turn.
        <br />
        <br />
        <b>Success:</b> The creature takes a –2 circumstance penalty to damage
        on the triggering Strike and all its Strikes against you until the
        beginning of its next turn. The penalty is –4 if you’re an expert in
        Diplomacy, –6 if you’re a master, and –8 if you’re legendary.
        <br />
        <br />
        <b>Failure:</b> The creature’s attack is unaffected, and the creature is
        temporarily immune to your Empathic Pleas for 24 hours.
      </span>
    ),
  },
  {
    id: 4,
    name: "Fey fellowship",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your enhanced fey connection affords you a warmer reception from
        creatures of the First World as well as tools to foil their tricks. You
        gain a +2 circumstance bonus to both Perception checks and saving throws
        against fey.
        <br />
        <br />
        In addition, whenever you meet a fey creature in a social situation, you
        can immediately attempt a Diplomacy check to Make an Impression on that
        creature rather than needing to converse for 1 minute. You take a –5
        penalty to the check. If you fail, you can engage in 1 minute of
        conversation and attempt a new check at the end of that time rather than
        accepting the failure or critical failure result.
        <br />
        <br />
        <b>Special:</b> If you have the Glad-Hand skill feat, you don’t take the
        penalty on your immediate Diplomacy check if the target is a fey.
      </span>
    ),
  },
  {
    id: 5,
    name: "First world magic",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your connection to the First World grants you a primal innate spell, much like those of the fey. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
  },
  {
    id: 6,
    name: "Gnome obsession",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description:
      "You might have a flighty nature, but when a topic captures your attention, you dive into it headfirst. Pick a Lore skill. You gain the trained proficiency rank in that skill. At 2nd level, you gain expert proficiency in the chosen Lore as well as the Lore granted by your background, if any. At 7th level you gain master proficiency in these Lore skills, and at 15th level you gain legendary proficiency in them.",
  },
  {
    id: 7,
    name: "Gnome polyglot",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description:
      "Your extensive travels, curiosity, and love of learning help you to learn languages quickly. You learn three new languages, chosen from common languages and uncommon languages you have access to. These languages take the same form (signed or spoken) as your other languages. When you select the Multilingual feat, you learn three new languages instead of two.",
  },
  {
    id: 8,
    name: "Gnome weapon familiarity",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You favor unusual weapons tied to your people, such as blades with
        curved and peculiar shapes. You are trained with the glaive and kukri.
        <br />
        <br />
        In addition, you gain access to kukris and all uncommon gnome weapons.
        For the purpose of determining your proficiency, martial gnome weapons
        are simple weapons and advanced gnome weapons are martial weapons.
      </span>
    ),
  },
  {
    id: 9,
    name: "Grim insight",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> umbral gnome heritage
        </span>
        <br />
        Others’ attempts to scare you often grant you insights about your
        would-be bullies that you can then exploit. If you roll a success on a
        saving throw against a fear effect, you get a critical success instead,
        and the source of the fear effect is flat-footed to you until the end of
        your next turn.
      </span>
    ),
  },
  {
    id: 10,
    name: "Illusion sense",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your ancestors spent their days cloaked and cradled in illusions, and as
        a result, sensing illusion magic is second nature to you. You gain a +1
        circumstance bonus to both Perception checks and Will saves against
        illusions.
        <br />
        <br />
        When you come within 10 feet of an illusion that can be disbelieved, the
        GM rolls a secret check for you to disbelieve it, even if you didn’t
        spend an action to Interact with the illusion.
      </span>
    ),
  },
  {
    id: 11,
    name: "Inventive offensive",
    action: "three_action",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> trained in Crafting
        </span>
        <br />
        You can jury-rig your weapons to perform in unexpected ways. When you
        use this ability, add one of the following weapon traits to a melee
        weapon you wield: deadly d6, disarm, nonlethal, shove, trip, versatile
        B, versatile P, or versatile S. You cannot add a trait that the weapon
        already has. The weapon retains this trait until you a successfully hit
        and deal damage with the weapon. The weapon retains this trait only
        while you wield it, and you can have only one weapon modified in this
        way at any time.
        <br />
        <br />
        If you have expert proficiency in Crafting, you can use this feat as a
        2-action activity. If you have legendary proficiency in Crafting, you
        can apply two weapon traits from the list when using this feat.
      </span>
    ),
  },
  {
    id: 12,
    name: "life-giving magic",
    action: "reaction",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per minute
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You cast an innate spell from a gnome heritage or
          ancestry feat.
        </span>
        <br />
        The upwelling of innate magic refreshes your body. You gain a number of
        temporary Hit Points equal to half your level (minimum 1) that last
        until the end of your next turn.
      </span>
    ),
  },
  {
    id: 13,
    name: "Natural preformer",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description:
      "Entertainment comes naturally to you. You become trained in Performance and gain one 1st-level Performance skill feat.",
  },
  {
    id: 14,
    name: "Razzle-dazzle",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per hour
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You blind or dazzle a creature.
        </span>
        <br />
        You’ve spent considerable time practicing the manipulation of light,
        weaponizing your blade’s reflection or bolstering the luminosity of
        magical displays to unconventional heights. Extend the duration of the
        blinded or dazzled condition you give the target by 1 round.
      </span>
    ),
  },
  {
    id: 15,
    name: "Theoretical acumen",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You succeed at a skill check to Recall Knowledge to
          identify a creature.
        </span>
        <br />
        You study a creature’s form and behavior to hypothesize likely means of
        overcoming its strengths. Once before the end of your next turn, you can
        use the skill modifier from the triggering check in place of your saving
        throw modifier against one of the creature’s abilities, in place of your
        Perception modifier to Seek the creature, in place of your Deception
        modifier to Feint against the creature, or in place of your Intimidation
        modifier to Demoralize the creature. Alternatively, against one of the
        creature’s attacks, you can use your DC for the skill used in the
        triggering check in place of your AC.
      </span>
    ),
  },
  {
    id: 16,
    name: "Unexpected shift",
    action: "reaction",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span className="frequency">
          <b>Trigger:</b> You would take damage from an attack, spell, or other
          effect.
        </span>
        <br />
        Your supernatural connection sometimes causes you to phase from reality
        when under threat, disappearing for split seconds before
        reappearing—often surprising you as much as your enemies. Roll a DC 16
        flat check. On a success, you gain resistance to all damage equal to
        your level against the triggering effect, you gain a +2 circumstance
        bonus to saving throws against that effect until the start of your turn,
        and you gain the dazzled condition for 1 round.
      </span>
    ),
  },
  {
    id: 17,
    name: "Vibrant display",
    action: "",
    tags: ["gnome"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> chameleon gnome heritage
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once every 10 minutes
        </span>
        <br />
        Whereas most gnomes’ coloration is static or changes slowly, you can
        cause your hair, eye, and skin color to scintillate in brief and
        disorienting bursts. Once every 10 minutes, when you use the Feint
        action, you can compare your Deception check result to the Perception
        DCs of all adjacent creatures rather than just one creature within melee
        reach. It’s possible to get a different degree of success for each
        target.
        <br />
        <br />
        These changes are imprecise and usually short-lived, so while they allow
        you to periodically change your appearance in unpredictable ways, they
        are of little use in providing camouflage or aiding a disguise.
      </span>
    ),
  },
  {
    id: 18,
    name: "Animal elocutionist",
    action: "",
    tags: ["gnome"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Burrow Elocutionist
        </span>
        <br />
        You hear animal sounds as conversations instead of unintelligent noise,
        and can respond in turn. You can speak to all animals, not just animals
        with a burrow Speed. You gain a +1 circumstance bonus to Make an
        Impression on animals (which usually uses the Diplomacy skill).
      </span>
    ),
  },
  {
    id: 19,
    name: "Eclectic obsession",
    action: "one_action",
    tags: ["gnome"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Gnome Obsession
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        Your desire for stimulation has led you from one pursuit to another and
        granted you a smattering of expertise with myriad crafts and
        professions. You reflect on snippets you’ve learned to temporarily
        become trained in one Lore skill of your choice. This proficiency lasts
        for 10 minutes or until you critically fail a check with that skill.
        Since this training is temporary, you can’t use it as a prerequisite for
        a permanent character option like a feat or a skill increase.
      </span>
    ),
  },
  {
    id: 20,
    name: "Energized font",
    action: "one_action",
    tags: ["gnome"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> focus pool, at least one innate spell from a
          gnome heritage or ancestry feat that shares a tradition with at least
          one of your focus spells
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Frequency:</b> once per day
        </span>
        <br />
        The magic within you provides increased energy you can use to focus. You
        regain 1 Focus Point, up to your usual maximum.
      </span>
    ),
  },
  {
    id: 21,
    name: "Gnome weapon innovator",
    action: "",
    tags: ["gnome"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Gnome Weapon Familiarity
        </span>
        <br />
        You produce outstanding results when wielding unusual weapons. Whenever
        you critically hit using a glaive, kukri, or gnome weapon, you apply the
        weapon’s critical specialization effect.
      </span>
    ),
  },
  {
    id: 22,
    name: "Intuitive illusions",
    action: "",
    tags: ["gnome"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> Illusion Sense
        </span>
        <br />
        <br />
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> Your turn begins.
        </span>
        <br />
        Illusion magic comes to you so naturally that you can effortlessly
        sustain your magical ruses. You immediately gain the effects of a
        Sustain a Spell action to extend the duration of one of your active
        illusion spells.
      </span>
    ),
  },
  {
    id: 23,
    name: "Natural illusionist",
    action: "",
    tags: ["gnome"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Illusion Sense
        </span>
        <br />
        By drawing upon the First World’s magic, you can siphon a portion of
        that malleable world to create a convincing illusion. Once per day, you
        can cast illusory disguise, item facade, or ventriloquism. At 7th level,
        the spell is heightened to 2nd level, and every 2 levels thereafter, the
        spell is heightened an additional spell level.
      </span>
    ),
  },
  {
    id: 24,
    name: "Project persona",
    action: "one_action",
    tags: ["concentrate", "gnome", "illusion", "primal", "visual"],
    level: 5,
    feat: "Feat 5",
    description:
      "Where others etch their armor to serve as a conduit for their imaginations, your vivid mind and bold personality allow you to project a more fitting persona over your lackluster armor. You change the shape and appearance of your armor to appear as ordinary or fine clothes of your imagining. The armor’s statistics don’t change. This effect lasts as long as you remain conscious and are wearing the armor. A creature can disbelieve the illusion by Seeking or touching your armor. The DC equals your Will DC.",
  },
  {
    id: 25,
    name: "Cautions curiosity",
    action: "",
    tags: ["gnome"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least one arcane or occult innate spell
          gained from a gnome heritage or gnome ancestry feat.
        </span>
        <br />
        You’ve learned a few magical techniques for getting yourself both into
        and out of trouble unnoticed. You gain misdirection and silence as
        2nd-level arcane or occult innate spells. The tradition of these spells
        must match the tradition you use for your gnome ancestry options. You
        can cast each spell once per day and can target only yourself.
      </span>
    ),
  },
  {
    id: 26,
    name: "First world adept",
    action: "",
    tags: ["gnome"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> at least one primal innate spell
        </span>
        <br />
        Over time your fey magic has grown stronger. You gain faerie fire and
        invisibility as 2nd-level primal innate spells. You can cast each of
        these primal innate spells once per day.
      </span>
    ),
  },
  {
    id: 27,
    name: "Fortuitous shift",
    action: "",
    tags: ["gnome"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Unexpected Shift
        </span>
        <br />
        You have grown more comfortable with your penchant for supernatural
        disappearance. The flat check DC of your Fortuitous Shift feat decreases
        to 11, and you are no longer dazzled if you succeed.
      </span>
    ),
  },
  {
    id: 28,
    name: "life leap",
    action: "one_action",
    tags: ["gnome", "move", "necromancy", "teleportation"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> You must be adjacent to a living creature.
        </span>
        <br />
        You phase through a space that a living creature occupies in a flash,
        spontaneously appearing on the opposite side of it in a vibrant display
        of colorful light. You move from your current location to another
        location that’s still adjacent to the same living creature, but on the
        opposite side or corner of the creature’s space. To determine whether a
        position is valid, use the same rules as for flanking: a line through
        the center of the two spaces must pass through opposite sides or corners
        of the creature’s space.
        <br />
        <br />
        You pass through the creature’s life force, appearing in the selected
        location; this doesn’t trigger reactions based on movement. You must be
        able to see your destination, and you can’t move farther than your Speed
        would allow.
      </span>
    ),
  },
  {
    id: 29,
    name: "Vivacious conduit",
    action: "",
    tags: ["gnome"],
    level: 9,
    feat: "Feat 9",
    description:
      "Your connection to the First World has grown, and its positive energy flows into you rapidly. If you rest for 10 minutes, you gain Hit Points equal to your Constitution modifier × half your level. This is cumulative with any healing you receive from Treat Wounds.",
  },
  {
    id: 30,
    name: "Gnome weapon expertise",
    action: "",
    tags: ["gnome"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Gnome Weapon Familiarity.
        </span>
        <br />
        Your gnome affinity blends with your class training, granting you great
        skill with gnome weapons. Whenever you gain a class feature that grants
        you expert or greater proficiency in a given weapon or weapons, you also
        gain that proficiency in the glaive, kukri, and all gnome weapons in
        which you are trained.
      </span>
    ),
  },
  {
    id: 31,
    name: "Instinctive obfuscation",
    action: "",
    tags: ["gnome"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span>
          <b>Prerequisites:</b> at least one arcane or occult innate spell
          gained from a gnome heritage or gnome ancestry feat
        </span>
        <br />
        <br />
        <span>
          <b>Frequency:</b> once per day
        </span>
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You are attacked by a foe.
        </span>
        <br />
        The magic within you manifests as a natural reaction to threats. You
        gain the effects of mirror image but with two images instead of three.
        The tradition of this action matches the tradition of your gnome
        ancestry options.
      </span>
    ),
  },
  {
    id: 32,
    name: "Homeward bound",
    action: "",
    tags: ["uncommon", "gnome"],
    level: 17,
    feat: "Feat 17",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> twice per week
        </span>
        <br />
        The connection between you and the First World resonates within your
        body stronger than it does for most gnomes, allowing you to cross the
        threshold between the Material Plane and the First World. You gain plane
        shift as a primal innate spell. You can cast it twice per week. This can
        be used only to travel back and forth between the First World and the
        Material Plane. Due to your body’s natural resonance, you can act as the
        spell focus, and you don’t require a tuning fork.
      </span>
    ),
  },
];
