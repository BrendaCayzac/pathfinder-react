import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const magusFeats: Array<ClassFeat> = [
	{
		id: 1,
		name: "Arcane fists",
		action: "",
		tags: ["magus"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					Your physical training encompasses unarmed combat forms. The
					damage die for your fist changes to 1d6 instead of 1d4. You
					don’t take the normal –2 circumstance penalty when making a
					lethal attack with your fist or any other unarmed attacks.
					Your unarmed attacks gain the arcane trait, making them
					magical. At 5th level, you also gain the critical
					specialization effects of unarmed attacks in the brawling
					group and weapons in the brawling group.
				</p>
			</>
		),
	},
	{
		id: 2,
		name: "Familiar",
		action: "",
		tags: ["magus"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					You make a pact with a creature that helps you with your
					martial endeavors and assists your spellcasting. You gain a
					familiar (see Familiar section of the Core Rulebook).
				</p>
			</>
		),
	},
	{
		id: 3,
		name: "Magus's Analysis",
		action: "one_action",
		tags: ["magus"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Spellstrike.
					</span>
					<br />
					You make an assessment informed by your knowledge of how a
					creature fights. Attempt a check to Recall Knowledge about a
					creature. You gain a +1 circumstance bonus to your check if
					you previously hit the creature with a Strike this turn. If
					your check is successful, recharge your Spellstrike. The
					subject of your check is temporarily immune to Magus’s
					Analysis for 1 day.
				</p>
			</>
		),
	},
	{
		id: 4,
		name: "Raise a tome",
		action: "one_action",
		tags: ["magus"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re holding a book.
					</span>
					<br />
					You raise up the book you’re holding and flip it open to
					defend yourself and expedite your studies. The book remains
					raised until the start of your next turn. While you have a
					book raised, you gain a +2 circumstance bonus to AC and a +1
					circumstance bonus to Recall Knowledge to identify creatures
					using a skill related to the subject of the book (Arcana if
					you’re using your spellbook). This bonus is in addition to
					any item bonus the book normally gives to the check.
				</p>
				<p>
					If you have Shield Block, you can use the tome for that feat
					(Hardness 3, HP 12, BT 6) as though it were a shield.
					Whenever you use an ability that allows you to Raise a
					Shield, such as Emergency Targe, you can Raise a Tome
					instead, changing any requirements that normally require a
					shield to apply to your book.
				</p>
			</>
		),
	},
	{
		id: 5,
		name: "Cantrip expansion",
		action: "",
		tags: ["magus"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					Dedicated study allows you to prepare a wider range of
					simple spells. You can prepare two additional cantrips each
					day.
				</p>
			</>
		),
	},
	{
		id: 6,
		name: "Enhanced familiar",
		action: "",
		tags: ["magus"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> a familiar.
					</span>
					<br />
					You infuse your familiar with more magical energy. You can
					select four familiar or master abilities each day, instead
					of two.
				</p>
			</>
		),
	},
	{
		id: 7,
		name: "Expansive spellstrike",
		action: "",
		tags: ["magus"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Spellstrike.
					</span>
					<br />
					You’ve adapted a wider array of spells to work with your
					attacks. Rather than needing to use a spell that has a spell
					attack roll for a Spellstrike, you can use a harmful spell
					that can target a creature or that has an area of a burst,
					cone, or line (abiding by any other restrictions of
					Spellstrike). When you Cast a Spell that doesn’t have a
					spell attack roll as part of a Spellstrike, it works in the
					following ways.
				</p>
				<ul>
					<li>
						If your Strike critically fails, the spell is lost with
						no effect.
					</li>
					<li>
						Creatures use their normal defenses against the spell,
						such as saving throws.
					</li>
					<li>
						If the spell lets you select a number of targets, it
						instead targets only the creature you attacked with your
						Strike.
					</li>
					<li>
						If the spell has an area, the target must be in that
						area. A burst is centered on a corner of the target’s
						square, or the square corner closest to the center of
						the target, if the target is Large or larger; you choose
						the corner if more than one is eligible. A cone or line
						emits from you and must include the target; if you’re
						not adjacent to the target (using a reach weapon or
						starlit span, for example), choose any square adjacent
						to the target as the source. The spell affects all
						creatures in the area as normal, but the Strike still
						targets only one creature.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 8,
		name: "Force fang",
		action: "",
		tags: ["magus"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> focus pool.
					</span>
					<br />
					You can turn your attack into an unerring blur of force. You
					learn the force fang conflux spell. Increase the number of
					Focus Points in your focus pool by 1.
				</p>
			</>
		),
	},
	{
		id: 9,
		name: "Spell parry",
		action: "one_action",
		tags: ["magus"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Requirements</b> You have one or more hands free.
					</span>
					<br />
					You infuse magical power into your body or armaments to
					parry both physical and magical assaults. You raise your
					guard, gaining a +1 circumstance bonus to AC and to saving
					throws against spells that target you until the start of
					your next turn, as long as you continue to meet the
					requirements.
				</p>
			</>
		),
	},
	{
		id: 10,
		name: "Spirit sheath",
		action: "",
		tags: ["magus", "arcane", "conjuration", "extradimensional"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					You’ve magically constructed an extradimensional sheath for
					your weapon that you access through your clothing, typically
					through a pocket, sleeve, or seam. This sheath is hard to
					notice, granting a +2 circumstance bonus to your Stealth
					checks to Conceal an Item within it. A spirit sheath can
					hold only one weapon at a time, and the weapon must be 1
					Bulk or less.
				</p>
				<p>
					During a Spellstrike, you can Interact to draw the weapon
					before you Cast the Spell. You can draw or return a weapon
					in a spirit sheath as an Interact action, as can anyone else
					holding or wearing the clothing that contains the sheath. A
					dispel magic spell or similar effect can be used against the
					spirit sheath to expel the weapon. The counteract check is
					made against your spell DC and uses the sheath’s counteract
					level of 1. The weapon is also expelled if you become
					unconscious.
				</p>
			</>
		),
	},
	{
		id: 11,
		name: "Devastating spellstrike",
		action: "two_action",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Arcane Cascade, inexorable iron hybrid
					                     study, Spellstrike.
					<br />
					<span className="frequency">
						<b>Requirements</b> You are in Arcane Cascade stance and your Spellstrike is charged.
					</span>
					<br />
					                     Your Spellstrike sweeps are so wide and
					                     devastating, they
					                     splash onto nearby foes. Make a
					                     Spellstrike. Foes adjacent
					                     to the target take splash damage equal
					                     to 2 + the extra
					                     damage from Arcane Cascade. The damage
					                     type is the same as
					                     Arcane Cascade; if the spell already
					                     deals splash damage of
					                     the same type, combine the damage
					                     together before applying
					                     weaknesses or resistances.
				</p>
			</>
		),
	},
	{
		id: 12,
		name: "Distracting spellstrike",
		action: "two_action",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> laughing shadow hybrid study,
					                     Spellstrike.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re in Arcane Cascade stance and have a hand free.
					</span>
					<br />
					                     You weave distracting magic with one
					                     hand to enhance your Spellstrike. Make
					                     a Spellstrike and Feint against the
					                     target of your Strike. Do this
					                     immediately before making the Strike,
					                     but after choosing your target. The
					                     Feint gains the arcane, illusion, and
					                     visual traits, and it always has the
					                     basic effects of a Feint, rather than
					                     applying any adjustments or alternate
					                     effects from other feats or abilities.
				</p>
			</>
		),
	},
	{
		id: 13,
		name: "Emergency targe",
		action: "reaction",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> sparkling targe hybrid study.
					<br />
					<b>Trigger</b> An enemy hits you with a melee Strike or a
					                     melee spell attack roll, or you fail a
					                     save against an enemy’s spell.
					<br />
					<span className="frequency">
						<b>Requirements</b> You are wielding a shield or have the shield spell prepared.
					</span>
					<br />
					                     You immediately Raise a Shield or cast
					                     shield. The circumstance bonus applies
					                     to your defenses when determining the
					                     outcome of the triggering attack or
					                     spell.
				</p>
			</>
		),
	},
	{
		id: 14,
		name: "Starlit eyes",
		action: "",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Arcane Cascade, starlit span hybrid study.
					</span>
					<br />
					Starlight shines in your sight, enhancing your perception
					and range. When you make a ranged Strike while in Arcane
					Cascade stance, you lower the DC of your flat check to
					target a creature that’s concealed or hidden from you. The
					DC is reduced to 3 instead of 5 against a concealed creature
					and to 9 instead of 11 against a hidden one. When you cast
					shooting star and target a hidden creature, you don’t have
					to attempt the flat check for targeting a hidden creature
					with a ranged Strike.
				</p>
			</>
		),
	},
	{
		id: 15,
		name: "Steady spellcasting",
		action: "",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					Confident in your technique, you don’t easily lose your
					concentration when you Cast a Spell. If a reaction would
					disrupt your spellcasting action, attempt a DC 15 flat
					check. If you succeed, your action isn’t disrupted.
				</p>
			</>
		),
	},
	{
		id: 16,
		name: "Striker's scroll",
		action: "",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Spellstrike.
					</span>
					<br />
					You can attach a scroll to your weapon or handwraps of
					mighty blows to blend its spell into an attack, carefully
					folding it around a part of the weapon or sealing it to the
					weapon’s surface. Attaching a scroll requires using the
					Affix a Talisman action. You can have only one scroll
					affixed to a weapon at a time, and you can’t have both a
					talisman and scroll attached.
				</p>
				<p>
					You can Cast the Spell from the scroll as part of a
					Spellstrike, assuming the spell is one you could normally
					use with Spellstrike. You can’t Cast the Spell in any other
					way while it’s affixed, though you can use Affix a Talisman
					again to remove the scroll and use it as a normal—if a bit
					crumpled—scroll.
				</p>
			</>
		),
	},
	{
		id: 17,
		name: "Student of the staff",
		action: "",
		tags: ["magus"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Arcane Cascade, twisting tree hybrid study.
					</span>
					<br />
					You’ve studied the staff extensively to learn the hidden
					capabilities of your chosen weapon. When you critically
					succeed at an attack roll using a staff, you apply the
					critical specialization effect of the club group. While
					you’re in Arcane Cascade stance, your staff gains the deadly
					d6 trait, with the damage from the deadly die being the same
					damage type as the extra damage from Arcane Cascade.
				</p>
				<p>
					In addition, you can place property runes into a magic staff
					you prepare, even though a magic staff can’t typically hold
					property runes. You must first inscribe the property runes
					into your spellbook, using the same process as transferring
					a rune (see Runes section of the Core Rulebook). The rune
					takes the form of a specialized diagram in your spellbook,
					occupying one page. You can’t inscribe runes that can’t be
					placed on a non-magical staff, nor can you inscribe the
					shifting rune. When you prepare a staff, you can impart any
					number of property runes from your spellbook into the staff,
					up to the limit imposed by the staff’s weapon potency rune.
				</p>
			</>
		),
	},
	{
		id: 18,
		name: "Attack of opportunity",
		action: "reaction",
		tags: ["magus"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it’s using.
					</span>
					<br />
					You lash out at a vulnerable foe. Make a melee Strike
					against the triggering creature. If your attack is a
					critical hit and the trigger was a manipulate action, you
					disrupt that action. This Strike doesn’t count toward your
					multiple attack penalty, and your multiple attack penalty
					doesn’t apply to this Strike.
				</p>
			</>
		),
	},
	{
		id: 19,
		name: "Cascade countermeasure",
		action: "",
		tags: ["magus"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Arcane Cascade, focus pool.
					</span>
					<br />
					When in Arcane Cascade, you can make yourself resistant to
					magic. You learn the cascade countermeasure conflux spell.
					Increase the number of Focus Points in your focus pool by 1.
				</p>
			</>
		),
	},
	{
		id: 20,
		name: "Knowledge is power",
		action: "",
		tags: ["magus"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					When you critically succeed at a Recall Knowledge check
					about a creature, you gain a +1 circumstance bonus to your
					next attack roll against the creature, to your AC against
					its next attack roll, and to your save against its next
					effect requiring a save. If you share this information with
					your allies, they gain the benefits as well. If not used,
					these bonuses end after 1 minute.
				</p>
			</>
		),
	},
	{
		id: 21,
		name: "Shielded tome",
		action: "",
		tags: ["magus", "arcane", "transmutation"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Raise a Tome.
					</span>
					<br />
					During your daily preparations, you can magically fuse a
					shield into your favorite book, where it appears as an
					elaborate bookmark. While the two are fused, the book shares
					the Hardness, Hit Points, and Broken Threshold of the
					shield, and it can be used to Shield Block if you have that
					reaction, with a requirement of “You have Raised the Tome”
					instead of the usual requirements.
				</p>
				<p>
					You can switch the fused item’s form from a book to a shield
					with a book-shaped motif as a single action, which has the
					concentrate trait. When the item is in book form, you can
					read the book and Raise the Tome, and when it’s in shield
					form, you can Raise the Shield, Activate it, and gain any
					other benefits or effects the shield normally has (such as a
					spellguard shield’s bonus to saving throws against magic).
					The fusion lasts until your next daily preparations.
				</p>
			</>
		),
	},
	{
		id: 22,
		name: "Capture magic",
		action: "reaction",
		tags: ["magus"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Arcane Cascade.
					<br />
					<span className="frequency">
						<b>Trigger</b> You succeed at your save against a foe’s harmful spell, or a foe fails a spell attack roll against you from a harmful spell.
					</span>
					<br />
					                     When you resist a spell, you capture
					                     some of its magic for your own use. You
					                     enter your Arcane Cascade stance, using
					                     the triggering spell to determine what
					                     damage type your Arcane Cascade deals.
					                     Alternatively, if you’re already in
					                     Arcane Cascade, you can instead amplify
					                     its effects temporarily. Until the end
					                     of your next turn, you gain a +2 status
					                     bonus to the damage from your Arcane
					                     Cascade.
				</p>
			</>
		),
	},
	{
		id: 23,
		name: "Fused staff",
		action: "",
		tags: ["magus", "arcane", "transmutation"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Spellstrike.
					</span>
					<br />
					When you prepare a staff, you can hold it up to a weapon to
					merge the two items. You can switch the fused item’s form
					from the weapon to the staff or vice versa as a single
					action, which has the concentrate trait. When the item is in
					staff form, you can Cast the Spells from the staff and
					benefit from any other abilities the staff grants. The staff
					and the weapon share their fundamental runes, using
					whichever weapon potency and whichever striking rune is
					higher level. They don’t share any other runes or specific
					abilities.
				</p>
				<p>
					You can Cast Spells from the staff as part of a Spellstrike
					even when the staff is in weapon form. Otherwise, you can’t
					cast the staff’s spells while it’s in weapon form.
				</p>
				<p>
					The fusion lasts until your next daily preparations, though
					you can spend 10 minutes to separate the two items and meld
					the staff into a different weapon. The melding works for you
					alone. A different wielder can use the staff in its current
					form but can’t transform it, get the benefit of the shared
					runes, or use its spells for a Spellstrike if it’s in weapon
					form.
				</p>
			</>
		),
	},
	{
		id: 24,
		name: "Runic impression",
		action: "",
		tags: ["magus"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> focus pool.
					</span>
					<br />
					You can temporarily replicate the effects of a property rune
					for your weapon or unarmed attacks. You learn the runic
					impression conflux spell. Increase the number of Focus
					Points in your focus pool by 1.
				</p>
			</>
		),
	},
	{
		id: 25,
		name: "Spell swipe",
		action: "three_action",
		tags: ["magus"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike.
					<br />
					<span className="frequency">
						<b>Requirements</b> Your Spellstrike is charged.
					</span>
					<br />
					                     You attack in an arc and enact your
					                     spell against everyone you hit. Make a
					                     Spellstrike, but roll separate Strikes
					                     to attack two creatures, each of whom
					                     must be within your melee reach and
					                     adjacent to each other. If your spell
					                     could affect two or more targets, your
					                     spell affects whichever foes you hit,
					                     not just the first target; otherwise,
					                     choose one target to affect with the
					                     spell. A Spell Swipe counts as two
					                     attacks for your multiple attack
					                     penalty, but the penalty doesn’t
					                     increase until after you make both
					                     attacks.
				</p>
				<p>
					If you’re using a weapon that has the sweep trait, its
					circumstance bonus applies against both targets. You can use
					this activity with only melee Strikes, even if you have the
					starlit span hybrid study or a similar ability.
				</p>
				<p>
					If you use Expansive Spellstrike to Spellstrike with an area
					spell, apply the area as described in Expansive Spellstrike,
					choosing one of the creatures you Strike to determine the
					area and whether the spell fails due to a critically failed
					Strike. If you use Expansive Spellstrike to Spellstrike with
					a targeted spell, the spell is lost completely only if both
					Strikes are critical failures.
				</p>
			</>
		),
	},
	{
		id: 26,
		name: "Standby spell",
		action: "",
		tags: ["magus"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Spellstrike.
					</span>
					<br />
					You’ve honed one spell as your favored combat technique, and
					you’ve practiced it enough that you no longer need to
					prepare it to cast it. Choose a spell in your spellbook that
					you could use with Spellstrike and that has a level no
					higher than the highest-level magus spell slot you have. You
					can Cast this Spell without having it prepared ahead of time
					by expending a spell slot of a sufficient level to cast your
					chosen spell. You can change this spell whenever you add new
					spells to your spellbook, or by studying your spellbook for
					1 hour.
				</p>
			</>
		),
	},
	{
		id: 27,
		name: "Cascading ray",
		action: "one_action",
		tags: ["magus", "attack"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike.
					<br />
					<span className="frequency">
						<b>Requirements</b> Your last action was a successful Spellstrike, and the spell you cast dealt energy damage (acid, cold, electricity, fire, force, negative, positive, or sonic).
					</span>
					<br />
					                     Magical energy spills out to extend
					                     beyond the creature you struck. The
					                     flowing energy forms a ray with a range
					                     of 60 feet from the creature you
					                     damaged. You can’t target any of the
					                     creatures you damaged with your
					                     Spellstrike with the ray. Make a spell
					                     attack roll against the new target’s
					                     AC, at the same multiple attack penalty
					                     as the Strike. On a hit, the target of
					                     the ray takes 1d4 damage per spell
					                     level of the same type of energy damage
					                     the spell deals (double damage on a
					                     critical hit). If you cast the spell in
					                     your Spellstrike from a spell slot, the
					                     damage from Cascading Ray increases to
					                     1d8 damage per spell level.
				</p>
				<p>
					If the spell deals more than one type of energy damage, you
					choose only one for the ray. This ray has the attack trait,
					the school and tradition traits of the original spell, and
					the trait matching the damage type.
				</p>
			</>
		),
	},
	{
		id: 28,
		name: "Dazzling block",
		action: "",
		tags: ["magus", "evocation", "light", "visual"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Arcane Cascade, sparkling targe hybrid
					                     study.
					<br />
					<span className="frequency">
						<b>Requirements</b> You are in Arcane Cascade stance.
					</span>
					<br />
					                     When you use Shield Block, you can
					                     create a flash of brilliant,
					                     multicolored light in a 15-foot cone.
					                     Each creature in the area must attempt
					                     a Fortitude save, with the following
					                     effects.
				</p>
				<p>
					<b>Critical Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Success</b> The creature is dazzled for 1 round.
				</p>
				<p>
					<b>Failure</b> The creature is blinded for 1 round and
					               dazzled for 1 minute. The creature can spend
					               an Interact action rubbing its eyes to end
					               this blinded condition.
				</p>
				<p>
					<b>Critical Failure</b> The creature is blinded for 1 round
					                        and dazzled for 1 hour.
				</p>
			</>
		),
	},
	{
		id: 29,
		name: "Dimensional disappearance",
		action: "",
		tags: ["magus"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> dimensional assault focus spell, laughing shadow hybrid study.
					</span>
					<br />
					You take advantage of teleportation to better hide your
					position. When you cast dimensional assault, you’re affected
					by an invisibility spell at the end of the teleport. You can
					choose not to make the Strike that is normally part of
					dimensional assault. If you do make the Strike, your
					invisibility ends after the Strike, as normal for
					invisibility.
				</p>
			</>
		),
	},
	{
		id: 30,
		name: "Lunging spellstrike",
		action: "two_action",
		tags: ["magus", "arcane", "transmutation"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike, twisting tree hybrid
					                     study.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re wielding a staff.
					</span>
					<br />
					                     Your spell unwinds the structure of
					                     your staff to make it exceptionally
					                     long, or even separate it into shards
					                     held together by magical power. Make a
					                     Spellstrike with a staff, with a spell
					                     that isn’t a cantrip or focus spell.
					                     Increase the staff’s reach by 5 feet ×
					                     the spell’s level.
				</p>
			</>
		),
	},
	{
		id: 31,
		name: "Meteoric spellstrike",
		action: "two_action",
		tags: ["magus", "arcane", "transmutation"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike, starlit span hybrid study.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re wielding a ranged or thrown weapon, or have a ranged unarmed attack.
					</span>
					<br />
					                     A trail of energy flows from your
					                     target back to you. Make a Spellstrike
					                     with a ranged weapon or ranged unarmed
					                     attack against a target within the
					                     ranged weapon or unarmed attack’s first
					                     range increment. The spell you cast for
					                     the Spellstrike can’t be a cantrip or
					                     focus spell. Each creature in a line
					                     between you and the target, excluding
					                     you and the targer, takes damage equal
					                     to double the spell's level.Determine
					                     the damage type as described in Arcane
					                     Cascade.
				</p>
			</>
		),
	},
	{
		id: 32,
		name: "Rapid recharge",
		action: "",
		tags: ["magus"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike.
					<br />
					<span className="frequency">
						<b>Frequency</b> once per day.
					</span>
					<br />
					                     You tap into an arcane trick to recover
					                     your ability to meld spells and
					                     attacks. You recharge your Spellstrike.
				</p>
			</>
		),
	},
	{
		id: 33,
		name: "Sustaining steel",
		action: "",
		tags: ["magus", "arcane", "healing", "necromancy", "positive"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Arcane Cascade, inexorable iron hybrid
					                     study.
					<br />
					<b>Trigger</b> You Cast a Spell using a spell slot.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re in Arcane Cascade stance.
					</span>
					<br />
					                     You pull magic into your weapon, using
					                     its substance to transform the magic
					                     into restorative energy. You regain Hit
					                     Points equal to double the spell’s
					                     level and roll to end any persistent
					                     negative damage you have.
				</p>
				<p>
					If the spell was of the necromancy school, any persistent
					negative damage you have ends automatically, and you can
					change the damage type from Arcane Cascade to positive if
					you wish. (Positive damage typically damages only undead or
					other creatures with negative healing.)
				</p>
			</>
		),
	},
	{
		id: 34,
		name: "Conflux focus",
		action: "",
		tags: ["magus"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> conflux spells.
					</span>
					<br />
					You imagine how you’ll weave magic and combat into future
					battles, improving your focus. If you have spent at least 2
					Focus Points since the last time you Refocused, you recover
					2 Focus Points when you Refocus instead of 1.
				</p>
			</>
		),
	},
	{
		id: 35,
		name: "Magic sense",
		action: "",
		tags: ["magus", "arcane", "detection", "divination"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					You have a literal sixth sense for ambient magic in your
					vicinity. You can sense the presence of magic auras as
					though you were always using a 1st-level detect magic spell.
					This detects magic in your field of vision only. When you
					Seek, you gain the benefits of a 3rd-level detect magic
					spell on things you see (in addition to the normal benefits
					of Seeking). You can turn this sense off and on with a free
					action at the start or the end of your turn.
				</p>
			</>
		),
	},
	{
		id: 36,
		name: "Overwhelming strike",
		action: "two_action",
		tags: ["magus"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike.
					<br />
					<span className="frequency">
						<b>Requirements</b> Your Spellstrike is charged.
					</span>
					<br />
					                     You pierce through your foe’s
					                     resistance. Make a
					                     Spellstrike. The spell you cast as part
					                     of the Spellstrike
					                     ignores an amount of the target’s
					                     resistance to acid, cold,
					                     electricity, fire, or sonic damage
					                     equal to your level. This
					                     applies to all damage the spell deals,
					                     including persistent
					                     damage and damage caused by an ongoing
					                     effect of the spell.
					                     A creature’s immunities are unaffected.
				</p>
			</>
		),
	},
	{
		id: 37,
		name: "Arcane shroud",
		action: "one_action",
		tags: ["magus"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Arcane Cascade, Spellstrike.
					<br />
					<b>Frequency</b> once per turn.
					<br />
					<span className="frequency">
						<b>Requirements</b> Your most recent action was to Cast a Spell from a spell slot or make a Spellstrike with a spell from a spell slot.
					</span>
					<br />
					                     Your spell has a powerful aftereffect,
					                     briefly granting you a certain spell
					                     depending on the spell you cast. You
					                     use Arcane Cascade and are subject to
					                     an additional aftereffect spell
					                     depending on the school of your most
					                     recent spell. This aftereffect spell’s
					                     duration lasts until the end of your
					                     next turn or its normal duration,
					                     whichever is longer. Using Arcane
					                     Shroud again ends any existing spell
					                     you gained from Arcane Shroud.
				</p>
				<ul>
					<li>
						<b>Abjuration</b> stoneskin
					</li>
					<li>
						<b>Conjuration</b> blink
					</li>
					<li>
						<b>Divination</b> see invisibility
					</li>
					<li>
						<b>Enchantment</b> heroism
					</li>
					<li>
						<b>Evocation</b> fire shield
					</li>
					<li>
						<b>Illusion</b> invisibility (ends after a hostile
						                action, as normal)
					</li>
					<li>
						<b>Necromancy</b> false life
					</li>
					<li>
						<b>Transmutation</b> fleet step
					</li>
				</ul>
			</>
		),
	},
	{
		id: 38,
		name: "Hasted assault",
		action: "",
		tags: ["magus"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> focus pool.
					</span>
					<br />
					You can speed yourself up to move and attack more swiftly.
					You learn the hasted assault conflux spell. Increase the
					number of Focus Points in your focus pool by 1.
				</p>
			</>
		),
	},
	{
		id: 39,
		name: "Preternatural parry",
		action: "reaction",
		tags: ["magus"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spell Parry.
					<br />
					<b>Trigger</b> You’re targeted by a Strike or a spell attack
					                     roll, or you’re about to roll a saving
					                     throw against a spell effect.
					<br />
					<span className="frequency">
						<b>Requirements</b> You have one or more hands free.
					</span>
					<br />
					                     You snap your weapon or limb into place
					                     to ward off harm at the last second.
					                     You gain a +2 circumstance bonus to AC
					                     and saving throws against the
					                     triggering effect until the start of
					                     your next turn.
				</p>
			</>
		),
	},
	{
		id: 40,
		name: "Dispelling spellstrike",
		action: "three_action",
		tags: ["magus"],
		level: 16,
		feat: "Feat 16",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Prerequisites</b> Spellstrike.
					<br />
					<span className="frequency">
						<b>Requirements</b> Your Spellstrike is charged.
					</span>
					<br />
					                     The spell you deliver tries to force
					                     out magic affecting your enemy. Make a
					                     Spellstrike. If it hits, you also
					                     attempt to counteract a single spell
					                     (of your choice) active on the target.
					                     The counteract level is half your level
					                     rounded up, and the counteract check
					                     modifier is the standard modifier for
					                     counteracting with a spell (your
					                     Intelligence modifier plus your
					                     spellcasting proficiency bonus, plus
					                     any bonuses or penalties that
					                     specifically apply to counteract
					                     checks).
				</p>
			</>
		),
	},
];
