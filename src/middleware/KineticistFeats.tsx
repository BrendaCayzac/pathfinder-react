import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const KineticistFeats: Array<ClassFeat> = [
	{
		id: 1,
		name: "Aerial boomerang",
		action: "two_action",
		tags: ["kineticist", "air", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A blade of shearing wind races away from you in a 60-foot
					line. Each creature in the area takes 2d4 slashing damage
					with a basic Reflex save against your class DC. In the final
					square of the line, the boomerang whirls in place until the
					end of your next turn. Any creature that ends its turn in
					that square has to save against the boomerang.
				</p>
				<p>
					On your next turn, you can use a single action, which has
					the concentrate trait, to return the boomerang to you. It
					returns in a line from its square to your current location,
					with the same effect as the initial line, then the impulse
					ends. You must have line of effect to the boomerang and be
					within 60 feet of it.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d4.
				</p>
			</>
		),
	},
	{
		id: 2,
		name: "Air cushion",
		action: "reaction",
		tags: ["kineticist", "air", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> A creature within 60 feet is falling.
					</span>
					<br />
					Air currents flow upward to slow the target’s fall to 60
					feet per round. The cushion ends when the target reaches the
					ground, and the creature takes no damage from the fall. The
					cushion expires if the creature doesn’t reach the ground
					within 1 minute, but any distance it fell during that minute
					doesn’t count for any damage the creature would take from
					the fall. You can’t use Air Cushion again while you have one
					in effect.
				</p>
				<p>
					<b>Level (8th)</b> The range is 120 feet, and you can create
					                   cushions for up to 5 falling creatures
					                   with one reaction.
				</p>
			</>
		),
	},
	{
		id: 3,
		name: "Armor in earth",
		action: "one_action",
		tags: ["kineticist", "earth", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Stone encases you like armor. The stone armor is medium
					armor but uses your highest armor proficiency. The stone
					armor’s statistics are: AC Bonus +4; Dex Cap +1; Check
					Penalty –2; Speed Penalty –10 feet; Strength 16; Bulk 1;
					Group plate. You gain its armor specialization effect. Any
					bonuses, runes, and magical abilities of your actual armor
					are suppressed, but any runes that could apply to the stone
					armor are replicated onto it. The stone armor lasts for 10
					minutes, and you can Dismiss this impulse. If you use this
					impulse again, any existing one ends.
				</p>
				<p>
					<b>Level (3rd)</b> The armor becomes heavy armor. Its AC
					                   Bonus becomes +5, and it gains the
					                   bulwark armor trait.
				</p>
			</>
		),
	},
	{
		id: 4,
		name: "Burning jet",
		action: "two_action",
		tags: ["kineticist", "fire", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A condensed burst of flame shoots behind you, propelling you
					forward with its sheer force. Stride up to 40 feet in a
					straight line. Movement from this impulse ignores difficult
					terrain and doesn’t trigger reactions.
				</p>
				<p>
					<b>Level (6th)</b> The maximum distance of the Stride is 60
					                   feet. You can choose to Leap up to 40
					                   feet in any direction instead of
					                   Striding. If you’re in the air at the end
					                   of this Leap, you fall normally.
				</p>
				<p>
					<b>Level (10th)</b> As 6th level, but you hover briefly
					                    after leaping into the air. If you Leap,
					                    you don’t fall until the end of your
					                    next turn. If you use Burning Jet again
					                    on a subsequent turn, you remain
					                    airborne.
				</p>
			</>
		),
	},
	{
		id: 5,
		name: "Deflecting wave",
		action: "reaction",
		tags: ["kineticist", "water", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<b>Trigger</b> You would take acid, bludgeoning, fire, or
					               slashing damage from an enemy’s attack,
					               spell, or other hostile effect.
					<br />
					<span className="frequency">
						<b>Requirements</b> You’re aware of the hostile effect, and you aren’t off-guard against it.
					</span>
					<br />
					               A cascade of water blunts or disperses the
					               incoming attack.
					               You gain resistance to damage from the
					               triggering effect
					               equal to your level if it’s bludgeoning or
					               slashing, or
					               double your level if it’s acid or fire
					               damage. If the effect
					               deals more than one applicable type of
					               damage, apply the
					               highest resistance, but apply it only once.
				</p>
			</>
		),
	},
	{
		id: 6,
		name: "Elemental familiar",
		action: "",
		tags: ["kineticist"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A small creature made of elemental matter springs forth from
					your kinetic gate. This elemental familiar appears to be
					made of one of your kinetic elements, though it might have
					unusual or distinguishing aspects. Like other familiars,
					your elemental familiar can assist you in various tasks and
					on adventures. You gain an elemental familiar with the trait
					of one of your kinetic elements. If you have more than one
					kinetic element, you can change the element you’ve selected
					for your familiar to a different one of your kinetic
					elements each time you make your daily preparations. The
					familiar uses your Constitution modifier to determine its
					Perception, Acrobatics, and Stealth modifiers.
				</p>
			</>
		),
	},
	{
		id: 7,
		name: "Eternal torch",
		action: "one_action",
		tags: ["kineticist", "fire", "impulse", "light", "manipulate", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You open a connection to your kinetic gate, large enough for
					a torch flame to flow. You create a magical, torch-like
					flame within 120 feet in any color you choose. It’s as
					bright and hot as a torch. You can have it orbit a target
					willing creature or emit from a target object that’s
					unattended or attended by a willing creature. If you create
					a flame on a weapon, you still need to use it as an
					improvised weapon to attack with the flame, just as with a
					torch.
				</p>
				<p>
					The flame has an unlimited duration. You can have a maximum
					number of Eternal Torches equal to your Constitution
					modifier, and you can Dismiss each torch individually.
				</p>
				<p>
					<b>Level (8th)</b> All your torches—even ones you already
					                   created—shed bright light in a 60-foot
					                   radius (and dim light for the next 60
					                   feet).
				</p>
			</>
		),
	},
	{
		id: 8,
		name: "Extended kinesis",
		action: "",
		tags: ["kineticist"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Base Kinesis.
					</span>
					<br />
					You’ve refined the control you can exert over your elements.
					Add the following options to Base Kinesis.
				</p>
				<ul>
					<li>
						<b>Proliferate</b> You cause an existing element to
						                   expand. This works like the generate
						                   option, except that you can either
						                   create an equal quantity of the
						                   element in the same square as its
						                   source or in an adjacent square, or
						                   cause the element to expand to fill
						                   its square (making a flame bigger or
						                   turning a twig into a small tree, for
						                   example). After you proliferate an
						                   element, it reacts to the environment
						                   naturally—water you proliferated into
						                   thin air would splash back down, for
						                   example. This affects only natural
						                   forms of the element, not durable,
						                   crafted goods.
					</li>
					<li>
						<b>Regulate</b> (air, fire, metal, or water only) You
						                change the temperature of an existing
						                element, making it colder or warmer.
						                This can snuff out a flame or turn water
						                to ice or steam. After this change, the
						                element cools or warms naturally unless
						                you Sustain the impulse. An item that
						                gets cold or hot enough (as determined
						                by the GM) can be used as an improvised
						                weapon that deals 1 cold damage or 1
						                fire damage in addition to the damage
						                the GM determines for the improvised
						                weapon.
					</li>
					<li>
						<b>Sculpt</b> (earth, metal, or wood only) Reshape an
						              existing element into a small object of a
						              design you choose. It looks crude and
						              artificial on close examination. The
						              sculpted element can be shaped into a
						              functional short tool (or a long tool if
						              your Base Kinesis can affect 1 Bulk or
						              greater). It’s too fragile and artificial
						              to be used as a weapon or have any
						              monetary value.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 9,
		name: "Flashforge",
		action: "two_action",
		tags: ["kineticist", "impulse", "metal", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					An artificial metal object forms in the hands of you or a
					willing ally within 30 feet. You can choose a level 0,
					common, handheld weapon or piece of adventuring gear of 1
					Bulk or less. The item is entirely made from metal, making
					some items impossible or impractical to use (if it’s
					unclear, the GM decides). You can make items with simple
					moving parts or magnetism, like a compass, poor lock, or
					merchant’s scale. The item lasts for 10 minutes, but each
					time it’s used, the user must succeed at a DC 5 flat check
					or the item is destroyed after the action is completed.
				</p>
			</>
		),
	},
	{
		id: 10,
		name: "Flying flame",
		action: "two_action",
		tags: ["kineticist", "impulse", "fire", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A Tiny shape of flame appears, taking a form of your
					choice—such as a bird, an arrow, or a simple sphere. It
					Flies from you up to 30 feet in a path you choose. Each
					creature it passes through takes 1d6 fire damage with a
					basic Reflex save against your class DC. A creature attempts
					only one save, even if the flame passes through it multiple
					times.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
];
