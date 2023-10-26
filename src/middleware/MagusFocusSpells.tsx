import React from "react";
import { FocusSpell } from "./CutsomTypes";

export const magusFocusSpells: Array<FocusSpell> = [
	{
		id: 1,
		level: 1,
		name: "Dimensional assault",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"conjuration",
			"teleportation",
		],
		type: "Focus 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> verbal.
					<br />
					<span className="frequency">
						<b>Range</b> half your Speed.
					</span>
				</p>
				<p>
					You tumble through space, making a short dimensional hop to
					better position yourself for an attack. Teleport to any
					square in range that’s within reach of a creature, and then
					make a melee Strike against one creature within your reach.
				</p>
			</>
		),
	},
	{
		id: 2,
		level: 1,
		name: "Force fang",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"evocation",
			"force",
		],
		type: "Focus 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> somatic.
					<br />
					<b>Range</b> varies.
					<br />
					<span className="frequency">
						<b>Targets</b> 1 creature.
					</span>
				</p>
				<p>
					You briefly turn your attack into pure force to bypass your
					opponent’s defenses. Choose a target within your reach, or
					within the reach of a melee weapon you’re wielding. If you
					can use Spellstrike with a ranged weapon (with the starlit
					span hybrid study, for example), you can target a creature
					in the first range increment of your ranged weapon. For an
					instant, you transform your weapon or unarmed attack into a
					spike of pure force, replacing all its normal statistics and
					abilities. The force fang automatically deals 1d4+1 force
					damage to the target.
				</p>
				<p>
					<b>Heightened (+2)</b> The damage increases by 1d4+1.
				</p>
			</>
		),
	},
	{
		id: 3,
		level: 1,
		name: "Shielding strike",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"abjuration",
		],
		type: "Focus 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<span className="frequency">
						<b>Cast</b> verbal.
					</span>
				</p>
				<p>
					As you attack a foe, warding magic transforms your momentum
					into action and lifts your shield. Make a melee Strike. You
					can then either Raise your Shield if you’re wielding one or
					cast shield if you have the spell.
				</p>
			</>
		),
	},
	{
		id: 4,
		level: 1,
		name: "Shooting strike",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"divination",
		],
		type: "Focus 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> verbal.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re wielding a ranged weapon or a thrown weapon.
					</span>
				</p>
				<p>
					You let loose a projectile that flies true and leaves the
					blazing trail of a meteor behind it. Make a ranged Strike,
					ignoring the target’s concealment and reducing the target’s
					cover by one degree for this Strike only (greater to
					standard, standard to lesser, and lesser to none). If the
					Strike hits, the meteor trail hangs in the air. This gives
					the benefits of concealment negation and cover reduction to
					any attacks made against the creature (by anyone) until the
					start of your next turn.
				</p>
			</>
		),
	},
	{
		id: 5,
		level: 1,
		name: "Spinning staff",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"evocation",
		],
		type: "Focus 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> verbal.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re wielding a staff.
					</span>
				</p>
				<p>
					You spin your staff with a twirling flourish, attacking two
					foes and transforming the momentum into magical energy to
					charge for your next Spellstrike. Make a melee Strike with
					your staff against one foe and then a second melee Strike
					with your staff against a different foe. Your multiple
					attack penalty applies to both of these attacks as normal.
				</p>
			</>
		),
	},
	{
		id: 6,
		level: 1,
		name: "Thunderous strike",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"evocation",
			"sonic",
		],
		type: "Focus 1",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> verbal.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re wielding a melee weapon in two hands.
					</span>
				</p>
				<p>
					You swing your massive weapon, creating a wave of sonic
					vibrations that topples creatures. Make a melee Strike with
					your two-handed weapon. Each creature in a 15-foot cone from
					you must attempt a basic Fortitude save against your spell
					DC or take 2 sonic damage. On a critical failure, the
					creature is knocked prone. The target of your Strike must be
					within the cone or the effect fails.
				</p>
				<p>
					<b>Heightened (+1)</b> The damage increases by 1.
				</p>
			</>
		),
	},
	{
		id: 7,
		level: 3,
		name: "Cascade countermeasure",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"abjuration",
		],
		type: "Focus 3",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> somatic.
					<br />
					<b>Requirements</b> You’re benefiting from Arcane Cascade.
					<br />
					<span className="frequency">
						<b>Duration</b> until the Arcane Cascade stance ends.
					</span>
				</p>
				<p>
					You quickly adjust your Arcane Cascade to offer magical
					protection. You gain resistance 5 against damage from
					spells. As normal, using Arcane Cascade again means you’ve
					ended the stance, and the spell ends.
				</p>
				<p>
					<b>Heightened (+1)</b> The resistance increases by 5.
				</p>
			</>
		),
	},
	{
		id: 8,
		level: 4,
		name: "Runic impression",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"evocation",
		],
		type: "Focus 4",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> somatic.
					<br />
					<b>Range</b> touch.
					<br />
					<b>Targets</b> you or one weapon you’re wielding.
					<br />
					<span className="frequency">
						<b>Duration</b> 1 minute.
					</span>
				</p>
				<p>
					Your unarmed attacks or weapon gain the benefits of a weapon
					rune you choose when you cast this spell: corrosive,
					flaming, frost, ghost touch, returning, shock, or
					thundering. If you cast runic impression on a weapon, this
					spell ends if you cease holding the weapon.
				</p>
				<p>
					If this spell would give a weapon more property runes than
					its normal maximum, one of the existing property runes (you
					choose) is suppressed until the spell ends. For unarmed
					attacks, if this spell would give you more property runes
					than you could have from handwraps of mighty blows, one of
					the existing property runes is similarly suppressed.
				</p>
				<p>
					<b>Heightened (8th)</b> Add keen to the list of runes you
					                        can choose as well as the greater
					                        types of corrosive, flaming, frost,
					                        shock, and thundering.
				</p>
			</>
		),
	},
	{
		id: 9,
		level: 7,
		name: "Hasted assault",
		action: "one_action",
		tags: [
			"uncommon",
			"magus",
			"transmutation",
		],
		type: "Focus 7",
		description: (
			<>
				<p>
					<i>Secrets of Magic</i>
					<br />
					<br />
					<b>Cast</b> somatic.
					<br />
					<span className="frequency">
						<b>Duration</b> 1 minute.
					</span>
				</p>
				<p>
					You call upon your magic to speed up your attacks. You gain
					the quickened condition and can use the extra action each
					round for only Strike actions.
				</p>
			</>
		),
	},
];
