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
	{
		id: 11,
		name: "Four winds",
		action: "two_action",
		tags: ["kineticist", "impulse", "air", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Mimicking the anemoi—monarchs of the four winds—you propel
					four creatures. Target up to four willing creatures within
					30 feet of you. Each of those creatures can Stride up to
					half its Speed. If it has a fly Speed, it can instead Fly up
					to half its fly Speed.
				</p>
				<p>
					<b>Level (10th)</b> The targets move up to full Speed
					                    instead of half.
				</p>
			</>
		),
	},
	{
		id: 12,
		name: "Fresh produce",
		action: "one_action",
		tags: ["kineticist", "healing", "impulse", "plant", "primal", "vitality", "wood"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You grow a nourishing nut, vegetable, seed, or fruit. Choose
					a creature in your kinetic aura. The produce grows in their
					open hand, or at their feet if they have no open hands. The
					produce has light Bulk. A creature can eat it with an
					Interact action to regain 1d4 + 1 HP; this is a healing
					vitality effect. The creature feels full for 10 minutes,
					during which it has resistance 2 to void damage and can’t
					eat another piece of produce. Produce not consumed by the
					start of your next turn withers away.
				</p>
				<p>
					<b>Level (+2)</b> The healing increases by 1d4+5, and the
					                  resistance increases by 2.
				</p>
			</>
		),
	},
	{
		id: 13,
		name: "Geologic attunement",
		action: "one_action",
		tags: ["kineticist", "earth", "impulse", "primal", "stance"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You tune to the earth and stone around you, extending your
					senses through it in rippling waves. You gain tremorsense
					(imprecise) in your kinetic aura. Once per round, you can
					Point Out a creature you can sense with tremorsense as a
					free action.
				</p>
				<p>
					<b>Level (13th)</b> The tremorsense becomes precise.
				</p>
			</>
		),
	},
	{
		id: 14,
		name: "Hail of splinters",
		action: "two_action",
		tags: ["kineticist", "wood", "impulse", "primal", "overflow"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A fusillade of jagged splinters flies from you. Creatures in
					a 30-foot cone take 1d4 piercing damage and 1d4 persistent
					bleed damage with a basic Reflex save against your class DC.
				</p>
				<p>
					<b>Level (+2)</b> Each type of damage increases by 1d4.
				</p>
			</>
		),
	},
	{
		id: 15,
		name: "Hardwood armor",
		action: "one_action",
		tags: ["kineticist", "wood", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Wood and bark grow over your body like armor. This hardwood
					armor is medium armor but uses your highest armor
					proficiency. The wooden armor’s statistics are: AC Bonus +3;
					Dex Cap +2; Check Penalty –2; Speed Penalty –5 feet;
					Strength 14; Bulk 1; Group wood TV. Any bonuses, runes, and
					magical abilities of your actual armor are suppressed, but
					any runes that could apply to the hardwood armor are
					replicated onto it.
				</p>
				<p>
					When you use this impulse, you can also create a wooden
					shield in a free hand. You can Shield Block with this shield
					even if you don’t have that feat. The hand wielding this
					shield counts as a free hand for using impulses. The shield
					decays in an instant if it becomes broken or leaves your
					grasp.
				</p>
				<p>
					The armor lasts for 10 minutes, and you can Dismiss this
					impulse. If you use this impulse again, any existing one
					ends.
				</p>
				<p>
					<b>Level (+3)</b> The shield’s Hardness increases by 1, its
					                  HP by 4, and its BT by 2.
				</p>
			</>
		),
	},
	{
		id: 16,
		name: "Magnetic pinions",
		action: "three_action",
		tags: ["kineticist", "metal", "impulse", "primal", "overflow"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Small pieces of metal fly from you, propelled with magnetism
					at great velocity. Make ranged impulse attack rolls against
					up to three creatures within 60 feet of you; you gain a +1
					circumstance bonus to your attack roll against any target
					wearing metal armor or made of metal. All three attacks
					count toward your multiple attack penalty, but it doesn’t
					increase until after all the attacks. The metal pieces deal
					1d4 bludgeoning damage and 1d4 piercing damage on a hit (or
					double damage on a critical hit).
				</p>
				<p>
					<b>Level (+2)</b> Each type of damage increases by 1d4.
				</p>
			</>
		),
	},
	{
		id: 17,
		name: "Metal carapace",
		action: "one_action",
		tags: ["kineticist", "metal", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Sheets of bent and rusted metal cover you in an armored
					shell. The carapace is medium armor but uses your highest
					armor proficiency. The carapace’s statistics are: AC Bonus
					+3; Dex Cap +2; Check Penalty –2; Speed Penalty –5 feet;
					Strength 14; Bulk 2; Group plate; Armor Traits noisy. Any
					bonuses, runes, and magical abilities of your actual armor
					are suppressed, but any that could apply to the metal
					carapace are replicated onto it.
				</p>
				<p>
					When you use this impulse, you can also create a rusty steel
					shield in a free hand, which uses the statistics of a
					regular steel shield. You can Shield Block with this shield
					even if you don’t have that feat. The hand wielding this
					shield counts as a free hand for using impulses. The shield
					crumbles to flakes of rust if it becomes broken or leaves
					your grasp.
				</p>
				<p>
					The impulse lasts for 10 minutes, and you can Dismiss this
					impulse. If you use this impulse again, any existing one
					ends. The metal is rusted and fragile. If you take damage
					from a critical hit, the metal shatters and the impulse
					ends.
				</p>
				<p>
					<b>Level (+3)</b> The shield’s Hardness increases by 1, its
					                  HP by 4, and its BT by 2.
				</p>
			</>
		),
	},
	{
		id: 18,
		name: "Ocean's balm",
		action: "one_action",
		tags: ["kineticist", "water", "impulse", "primal", "healing", "manipulate", "vitality"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A blessing of the living sea salves wounds and douses
					flames. Touch a willing living creature. It regains 1d8 Hit
					Points and gains resistance 2 to fire for 1 minute. If it
					has persistent fire damage, it can attempt a flat check to
					remove it with especially appropriate help. The target is
					temporarily immune to healing from Ocean’s Balm for 10
					minutes.
				</p>
				<p>
					<b>Level (+2)</b> The healing increases by 1d8, and the
					                  resistance increases by 1.
				</p>
			</>
		),
	},
	{
		id: 19,
		name: "Scorching column",
		action: "three_action",
		tags: ["kineticist", "fire", "impulse", "primal", "overflow"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					With an upward gesture, you shape a vertical column of
					extreme heat. The cylinder is 10 feet in diameter and 30
					feet high, and the bottom must be within 60 feet of you.
					Each creature in the area takes 1d6 fire damage with a basic
					Reflex save against your class DC.
				</p>
				<p>
					The flame remains briefly, making all squares in the column
					hazardous terrain until the end of your next turn, and you
					can Sustain the impulse up to 1 minute. A creature takes 1
					fire damage each time it moves into one of these squares.
				</p>
				<p>
					<b>Level (+2)</b> The initial damage increases by 1d6, and
					                  the hazardous terrain damage increases by
					                  2.
				</p>
			</>
		),
	},
	{
		id: 20,
		name: "Shard strike",
		action: "two_action",
		tags: ["kineticist", "metal", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Jagged metal shards form in the air and lash out from you.
					You choose shards or spines, which changes the area, damage
					type, and critical failure effect. Each creature in the area
					attempts a basic Reflex save against your class DC. Shards
					deal 1d6 slashing damage in a 15-foot cone, and a creature
					that critically fails takes 1d6 persistent bleed damage.
					Spines deal 1d6 piercing damage in a 30-foot line, and a
					creature that critically fails is clumsy 1 until the start
					of your next turn.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 21,
		name: "Stepping stones",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "primal", "manipulate"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Disks of rock fly to points that you designate to make a new
					path. You can set them horizontally to make a path across
					the ground or atop a liquid, or anchor them into a vertical
					surface to make steps. The path can be up to 20 feet (4
					squares) long, and steps can extend up to 10 feet up the
					side of the surface. All squares must be contiguous and
					within 60 feet of you. Moving across the path lets a
					creature ignore difficult terrain and hazardous terrain from
					the ground beneath it. The disks last until the end of your
					next turn, but you can Sustain the impulse.
				</p>
				<p>
					<b>Level (+2)</b> Increase the length of the path by 10 feet
					                  or the height of the steps by 5 feet, and
					                  increase the maximum distance away from
					                  you a square can be by 10 feet.
				</p>
			</>
		),
	},
	{
		id: 22,
		name: "Tidal hands",
		action: "two_action",
		tags: ["kineticist", "water", "impulse", "primal", "overflow"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					With an emphatic gesture, you create waves that rush out
					from you in the shape of your hands. You either form two
					15-foot cones that don’t overlap or you combine the hands
					into one 30-foot cone. Each creature in a wave takes 1d8
					bludgeoning damage with a basic Reflex save against your
					class DC. If a creature critically fails, you also push that
					creature 5 feet.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 23,
		name: "Timber sentinel",
		action: "two_action",
		tags: ["kineticist", "wood", "impulse", "primal", "plant"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A slim, symmetrical tree travels from the Plane of Wood. You
					conjure a tree within 30 feet, as a protector tree SoM spell
					of a rank equal to half your level rounded up. If you use
					this impulse again, any previous one ends, and an ordinary
					tree remains.
				</p>
			</>
		),
	},
	{
		id: 24,
		name: "Tremor",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "primal", "overflow"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You unleash a small, localized tremor in a 10-foot burst
					within 30 feet. Each creature in the area takes 1d8
					bludgeoning damage with a basic Fortitude save against your
					class DC. A creature that critically fails is knocked prone.
					Earth and stone in the area is difficult terrain until the
					start of your next turn.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d10.
				</p>
			</>
		),
	},
	{
		id: 25,
		name: "Versatile blasts",
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
					Accessing a wider realm of elemental manifestations, you can
					make blasts with rare forms of your elements. Add the
					following damage types to those you can choose for Elemental
					Blasts of that element: air cold, earth poison, fire cold,
					metal electricity, water acid, wood poison.
				</p>
			</>
		),
	},
	{
		id: 26,
		name: "Weapon infusion",
		action: "",
		tags: ["kineticist", "infusion"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					With a signature flair, you shape blasts of elemental power
					into the form of a weapon, such as a sword made of whirling
					wind or a bow that shoots flames. If your next action is an
					Elemental Blast, choose a weapon shape for it to take. You
					can choose to change the blast’s damage type to bludgeoning,
					piercing, or slashing—whichever suits the weapon shape—and
					you can choose other alterations depending on whether you
					make a melee or ranged blast.
				</p>
				<p>
					<b>Melee</b> Add one of the following traits of your choice:
					             agile, backswing, forceful, reach, sweep.
				</p>
				<p>
					<b>Ranged</b> Choose one of three options: range increment
					              100 feet and the volley 30 feet trait, range
					              increment 50 feet and the propulsive trait, or
					              range increment 20 feet and the thrown trait.
				</p>
			</>
		),
	},
	{
		id: 27,
		name: "Whisper on the wind",
		action: "one_action",
		tags: ["kineticist", "air", "auditory", "illusion", "impulse", "linguistic", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You speak in a whisper, a soft wind carrying your words far
					away. This has the effect of the message spell with a range
					of 500 feet, and it can target only a creature surrounded by
					air. If you start your message with the target’s name, you
					and the target don’t need to be able to see each other, nor
					do you need line of effect.
				</p>
				<p>
					<b>Level (4th)</b> The range is 1 mile.
				</p>
				<p>
					<b>Level (14th)</b> The range is planetary plus the Plane of
					                    Air.
				</p>
			</>
		),
	},
	{
		id: 28,
		name: "Winter's clutch",
		action: "two_action",
		tags: ["kineticist", "water", "cold", "impulse", "primal"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Gleaming flakes of chilling snow fall in a 10-foot burst
					within 60 feet. Each creature in the area takes 2d4 cold
					damage with a basic Reflex save against your class DC. The
					ground in the area is covered in a snow drift, which is
					difficult terrain. Each square of the drift lasts until it
					melts, either naturally or until fire damage is dealt in
					that square.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d4.
				</p>
			</>
		),
	},
	{
		id: 29,
		name: "Kinetic activation",
		action: "",
		tags: ["kineticist"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Rather than incantations and gestures, you can use your
					kinetic gate to directly unlock the potential of elementally
					empowered magic items. You can Activate magic items that
					require you to be able to Cast a Spell, provided you
					activate them to Cast a Spell with the same trait as one of
					your kinetic elements; for example, if you can channel fire,
					you could Activate a scroll of fireball. For any effects of
					these items that use a spell attack roll or spell DC, you
					can substitute your impulse attack roll or class DC.
				</p>
				<p>
					Rather than incantations and gestures, you can use your
					kinetic gate to directly unlock the potential of elementally
					empowered magic items. You can Activate magic items that
					require you to be able to Cast a Spell, provided you
					activate them to Cast a Spell with the same trait as one of
					your kinetic elements; for example, if you can channel fire,
					you could Activate a scroll of fireball. For any effects of
					these items that use a spell attack roll or spell DC, you
					can substitute your impulse attack roll or class DC.
				</p>
			</>
		),
	},
	{
		id: 30,
		name: "Voice of elements",
		action: "",
		tags: ["kineticist"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You can speak with the secret tones of elements you channel,
					finding words in the crackle of flame, the grinding of
					stone. Your kinetic aura grants you these three benefits
					while active.
				</p>
				<ul>
					<li>You can speak all the languages of your kinetic elements
					    (Sussuran for air, Petran for earth, Pyric for fire,
					    Talican for metal, Thalassic for water, Muan for wood).
					</li>
					<li>
						You can communicate with mindless elementals on a basic
						level if they have a trait that matches one of your
						kinetic elements or are made of one of those elements.
						This allows you to use Diplomacy to Make an Impression
						on them and to make very simple Requests.
					</li>
					<li>
						You gain a +2 circumstance bonus to Charisma-based skill
						checks you attempt against elementals of one of your
						kinetic elements.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 31,
		name: "Air shroud",
		action: "one_action",
		tags: ["kineticist", "air", "impulse", "primal", "stance"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Turbulent air suffuses your kinetic aura. This doesn’t
					displace other matter but provides air for creatures in your
					kinetic aura that need air to breathe. Attacks with ranged
					weapons take a –1 circumstance penalty to their attack rolls
					if their paths pass through your kinetic aura. Air in your
					kinetic aura is difficult terrain for flying creatures other
					than yourself.
				</p>
			</>
		),
	},
	{
		id: 32,
		name: "Ambush bladderwort",
		action: "three_action",
		tags: ["kineticist", "water", "wood", "composite", "impulse", "plant", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You plant the seed of a giant bladderwort in an unoccupied
					square of ground or water within 30 feet. It lasts for 10
					minutes. Using this impulse again ends any previous one. If
					a creature enters its square, the seed erupts into a
					voluminous, translucent plant that seals tight around the
					triggering creature and fills with water. Unless the
					creature succeeds at a Reflex save against your class DC,
					it’s immobilized within the bladderwort and must hold its
					breath or begin drowning. The Escape DC is also your class
					DC. The plant has AC 10 and 50 Hit Points.
				</p>
				<p>
					If a creature dies inside it, the plant shrinks down,
					converting itself and the remains into a watery fruit. A
					creature can eat this consumable to regain 1d8+4 HP, after
					which that creature is temporarily immune for 10 minutes.
					This fruit rots after 1 hour.
				</p>
				<p>
					<b>Level (+4)</b> The bladderwort’s HP increase by 25 and
					                  the fruit’s healing increases by 1d8+4.
				</p>
			</>
		),
	},
	{
		id: 33,
		name: "Blazing wave",
		action: "two_action",
		tags: ["kineticist", "fire", "impulse", "overflow", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Flames flow out of you in a cascade, engulfing everyone in a
					30-foot cone. Each creature in the area takes 4d6 fire
					damage with a basic Reflex save against your class DC. A
					creature that critically fails its save is knocked prone.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 34,
		name: "Calcifying sand",
		action: "reaction",
		tags: ["kineticist", "earth", "incapacitation", "overflow", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> A creature damages you with an attack using an unarmed attack or a non-reach melee weapon.
					</span>
					<br />
					Your flesh gives way as you’re struck, becoming coarse sand
					that can magically turn your enemy to stone. You gain
					resistance equal to your level to physical damage from the
					triggering attack. The attacking creature must attempt a
					Fortitude save against your class DC. Regardless of the
					result, that creature can’t trigger Calcifying Sand again
					for 1 hour.
				</p>
				<p>
					<b>Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Failure</b> The creature is slowed 1 until the end of its
					               next turn.
				</p>
				<p>
					<b>Critical Failure</b> The creature is petrified until the
					                        end of its next turn.
				</p>
			</>
		),
	},
	{
		id: 35,
		name: "Command elemental",
		action: "two_action",
		tags: ["kineticist", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You grasp the animating force within an elemental creature
					and bend it to your will. Choose a trait matching one of
					your kinetic elements and target an elemental creature
					within 30 feet that has the chosen trait. The elemental
					becomes controlled by you if its level is equal to or lower
					than your level — 3, or slowed 1 for as long as you Sustain
					the effect if its level is equal to your level — 2 or
					higher. It can attempt a Will saving throw against your
					class DC to resist being controlled by you or to end the
					slowed effect. If the target is already under someone else’s
					command, it can’t be slowed by this ability, and the
					controlling creature also rolls a saving throw, with the
					elemental using the better result.
				</p>
				<p>
					<b>Critical Success</b> The target is unaffected and is
					                        temporarily immune for 24 hours.
				</p>
				<p>
					<b>Success</b> The target is unaffected.
				</p>
				<p>
					<b>Failure</b> The elemental creature is controlled or
					               slowed as long as you Sustain the impulse, up
					               to 1 minute. This effect ends if you or an
					               ally attacks the elemental.
				</p>
				<p>
					<b>Critical Failure</b> As failure, but you can Sustain the
					                        impulse up to 1 hour.
				</p>
			</>
		),
	},
	{
		id: 36,
		name: "Igneogenesis",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "manipulate", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You can create a permanent stone object, either sculpting
					stone pulled directly from your kinetic gate or manipulating
					earth and stone around you. It must fit within one 5-foot
					cube that’s adjacent to you and on solid ground, and you can
					make the object large enough to occupy the square. If you
					create the object underneath you or another willing
					creature, you cause the target to rise on top of the object;
					you can’t create it under an unwilling creature. This
					impulse has an unlimited duration, but if you use
					Igneogenesis again, the object returns to its original
					location or form. You can spend 1 hour to use Igneogenesis
					as an exploration activity; in this case, the object is
					permanent and non-magical.
				</p>
				<p>
					The object can’t include any intricate parts or moving
					pieces. You can attempt a Crafting skill check as part of
					using this impulse to add details to your creation, such as
					a symbol, short message, or pattern (with the DC determined
					by the GM).
				</p>
				<p>
					<b>Level (+3)</b> You can add an additional 5-foot cube to
					                  the object. Each cube must be contiguous.
				</p>
			</>
		),
	},
	{
		id: 37,
		name: "Lava leap",
		action: "two_action",
		tags: ["kineticist", "earth", "fire", "composite", "impulse", "overflow", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You wreath yourself in molten stone and hurtle toward your
					enemy. Leap up to your Speed. At the end of your Leap, a
					wave of lava crashes onto all creatures in a 10-foot
					emanation. Each creature in the area takes 1d6 bludgeoning
					damage and 2d6 fire damage, with a basic Reflex save against
					your class DC.
				</p>
				<p>
					The cooling remains of the lava form a temporary protective
					shell around you, granting you a +2 circumstance bonus to AC
					until the start of your next turn.
				</p>
				<p>
					<b>Level (+3)</b> Each type of damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 38,
		name: "Lightning dash",
		action: "two_action",
		tags: ["kineticist", "air", "electricity", "impulse", "move", "overflow", "polymorph", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					For an instant, you transform yourself into a being of pure
					lightning and fly forward, shocking anyone in your way. You
					propel yourself forward in a 30-foot line. You can move
					through creatures during this movement, and this movement
					doesn’t trigger reactions that are triggered by movement.
					Each creature you move through takes 2d12 electricity damage
					with a basic Reflex save against your class DC. You return
					to your normal form in the final square of the line. If
					you’re in the air, you fall unless you have a fly Speed.
				</p>
				<p>
					<b>Level (+3)</b> The length of the line increases by 5
					                  feet, and the damage increases by 1d12.
				</p>
			</>
		),
	},
	{
		id: 39,
		name: "Living bonfire",
		action: "two_action",
		tags: ["kineticist", "fire", "wood", "composite", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Roots and branches of living wood writhe in elemental fire
					at your command, forming a bonfire fearsome enough to scare
					off predators in the night. You conjure a bonfire in an
					unoccupied 10-foot-square space within 30 feet. The bonfire
					burns for 10 hours, providing all the benefits of a normal
					campfire. If you use this impulse again, any previous one
					ends.
				</p>
				<p>
					When you make a wood ranged Elemental Blast, you can have it
					come from the bonfire instead of you, flinging burning logs.
					This blast deals an additional 1d6 fire damage. Each time
					you do this, the size of the bonfire is reduced by one
					5-foot square. If all the squares are removed, the impulse
					ends.
				</p>
				<p>
					<b>Level (+5)</b> The fire damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 40,
		name: "Magnetic field",
		action: "one_action",
		tags: ["kineticist", "metal", "impulse", "stance", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A magnetic field surrounds you. Choose a polarity when you
					take this action. You can switch the polarity as a free
					action at the start of each of your turns while you remain
					in this stance.
				</p>
				<p>
					<b>Attract</b> A creature that is wearing metal armor, has
					               the metal trait, or is made of metal treats
					               squares in your kinetic aura as difficult
					               terrain when moving away from you. You pull
					               unattended metal objects of light Bulk or
					               less in your kinetic aura to you. They gather
					               in your space and move with you.
				</p>
				<p>
					<b>Repel</b> A creature that is wearing metal armor, has the
					             metal trait, or is made of metal treats squares
					             in your kinetic aura as difficult terrain when
					             moving closer to you. You push unattended metal
					             objects of light Bulk or less in your kinetic
					             aura away. They stop moving once they’re
					             outside your aura.
				</p>
			</>
		),
	},
	{
		id: 41,
		name: "Plate in treasure",
		action: "one_action",
		tags: ["kineticist", "metal", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Precious metal flows from your fingers to plate an object.
					This has the effects of a clad in metal spell with a rank
					equal to half your level rounded up. While you’re wearing or
					holding an item of light Bulk or greater that’s Plated in
					Treasure, any metal created by one of your impulses is
					plated with the metal. If you use Plate in Treasure again,
					any previous one ends.
				</p>
			</>
		),
	},
	{
		id: 42,
		name: "Rain of rust",
		action: "three_action",
		tags: ["kineticist", "metal", "water", "composite", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You conjure a red raincloud in a 10-foot burst within 60
					feet, which pours rust-colored rain directly below it. Any
					creature in the rain with the metal trait, that is made of
					metal, or is wearing metal armor is covered in corrosive
					build-up. Any such creature is clumsy 1 as long as it
					remains in the area. If such a creature is in the rain at
					the start of its turn, it takes 3d6 damage with a basic
					Fortitude save against your class DC, plus 1d6 persistent
					damage if it fails. Damage from this impulse ignores
					Hardness.
				</p>
				<p>
					<b>Level (+2)</b> The initial damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 43,
		name: "Ravel of thorns",
		action: "one_action",
		tags: ["kineticist", "wood", "plant", "impulse", "primal", "stance"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Thorny vines grow in geometric patterns on surfaces in your
					kinetic aura. A creature that starts its turn in the thorns
					takes a –10-foot circumstance penalty to its Speeds until it
					leaves the area. The thorns are hazardous terrain. A
					creature takes 2 piercing damage each time it moves into one
					of these squares. If any square the thorns grow on is water
					or soil, double the hazardous terrain damage for all thorns.
					If you move, the thorns disappear; new thorns grow at the
					end of your turn.
				</p>
				<p>
					<b>Level (+4)</b> The damage increases by 1.
				</p>
			</>
		),
	},
	{
		id: 44,
		name: "Return to the sea",
		action: "two_action",
		tags: ["kineticist", "water", "morph", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You adapt a creature to living and moving in water. Target a
					willing creature within 30 feet. For 10 minutes, it gains
					the effects of a feet to fins spell, can breathe water, and
					gets a +1 status bonus to AC and saves against any creature
					with the amphibious, aquatic, or water trait. In addition,
					its attacks ignore the effects water normally has on
					bludgeoning and slashing attacks. If you use Return to the
					Sea again, any existing one ends.
				</p>
				<p>
					<b>Level (6th)</b> You can target up to 5 willing creatures.
				</p>
			</>
		),
	},
	{
		id: 45,
		name: "Safe elements",
		action: "",
		tags: ["kineticist"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Elements are wild and dangerous, but you’ve found ways to
					reduce their risk. When you Channel Elements or use a stance
					impulse that affects your kinetic aura, you can designate a
					number of creatures up to your Constitution modifier
					(minimum 1 creature). Choose whether they are immune to the
					benefits of your kinetic aura or immune to its damage and
					drawbacks. You don’t have to be able to see a creature to
					designate it, nor does it need to be in your kinetic aura,
					but you can’t designate a creature that’s unnoticed by you.
				</p>
				<p>
					In addition, you gain the Pacifying Infusion action.
				</p>
				<p>
					<b>Pacifying Infusion</b>
					<img src={require("../assets/img/one_action.png")}
					     alt="one action icon" />
					(infusion) If your next action is an impulse, it gains the
					nonlethal trait. If it has an area, you can exclude
					creatures you’ve designated with Safe Elements from its
					effects.
				</p>
			</>
		),
	},
	{
		id: 46,
		name: "Thermal nimbus",
		action: "one_action",
		tags: ["kineticist", "fire", "impulse", "primal", "stance"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You direct waves of warmth into or out of your kinetic gate
					to drastically shift the temperature around you. Choose cold
					or fire. You and allies in your kinetic aura gain resistance
					equal to your level to damage of that type. Any creature
					that starts its turn in your kinetic aura or moves into your
					aura during its turn takes damage equal to half your level
					of the chosen type. Elemental resistance from a gate
					junction is cumulative with resistance from Thermal Nimbus.
				</p>
			</>
		),
	},
	{
		id: 47,
		name: "Tumbling limber",
		action: "two_action",
		tags: ["kineticist", "wood", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A slew of logs eject from the Plane of Wood and slam into
					your enemies. They roll in a 10-foot-wide, 30-foot-long
					line. Non-magical difficult terrain on any ground the logs
					roll over is smashed flat; greater difficult terrain
					remains. Each creature in the area takes 2d8 bludgeoning
					damage and might be moved by the logs, depending on its
					Reflex save against your class DC.
				</p>
				<p>
					<b>Critical Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Success</b> The creature takes half damage.
				</p>
				<p>
					<b>Failure</b> The creature takes full damage and is pushed
					               out of the line in the most direct path
					               available.
				</p>
				<p>
					<b>Critical Failure</b> The creature takes double damage and
					                        is knocked prone.
				</p>
				<p>
					<b>Level (+3)</b> The damage increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 48,
		name: "Whirling grindstone",
		action: "two_action",
		tags: ["kineticist", "metal", "attack", "composite", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A whirling grindstone made of flint appears in an unoccupied
					square within 30 feet. The grindstone shreds flesh and
					shoots sparks. Attempt an impulse attack roll against the AC
					of a creature adjacent to the grindstone. On a hit, the
					creature takes 2d6 slashing damage and 1d6 fire damage (or
					double damage on a critical hit). The grindstone lasts until
					the end of your next turn, and you can Sustain the impulse
					up to 1 minute. On subsequent turns, the first time you
					Sustain the impulse that turn, you can roll the grindstone
					up to 20 feet and can repeat the attack.
				</p>
				<p>
					A creature within reach of the grindstone can Interact with
					it to sharpen a metal weapon. This grants a +2 circumstance
					bonus to the next damage roll made with that weapon within 1
					minute.
				</p>
				<p>
					<b>Level (+5)</b> The grindstone’s damage increases by 1d6
					                  slashing and 1d6 fire, and the bonus to
					                  weapons increases by 1.
				</p>
			</>
		),
	},
	{
		id: 49,
		name: "Winter sleet",
		action: "one_action",
		tags: ["kineticist", "water", "cold", "stance", "impulse", "primal"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Bone-chilling, swirling sleet surrounds you, cruel as
					deepest winter. Surfaces in your kinetic aura are coated in
					slippery ice. A creature that moves on this uneven ground
					immediately falls unless it Balances (DC 15). A creature is
					off-guard on the ice, as normal for uneven ground. You’re
					immune to these effects.
				</p>
				<p>
					If a creature on the ice is critically hit by one of your
					water impulses or critically fails at a save against one,
					that creature is slowed 1 until the end of its next turn.
				</p>
			</>
		),
	},
	{
		id: 50,
		name: "Ash strider",
		action: "two_action",
		tags: ["kineticist", "air", "fire", "impulse", "overflow", "polymorph", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You discorporate into a cloud of whirling ash and Stride. If
					you have a fly Speed, you can Fly instead. This movement
					doesn’t trigger reactions, you can move through occupied
					spaces and tiny cracks, and you ignore any difficult terrain
					and greater difficult terrain that wouldn’t impede smoke.
					The first creature you pass through during this movement
					takes 3d6 fire damage with a basic Reflex save against your
					class DC. Ash lingers around you after your movement is
					complete, granting you concealment until the start of your
					next turn.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 51,
		name: "Clear as air",
		action: "two_action",
		tags: ["kineticist", "air", "illusion", "impulse", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Compact layers of air diffract and bend light around your
					body, making you appear as clear as the sky on a perfect
					day. You become invisible until the end of your next turn.
					You can Sustain the impulse. If you use a hostile action,
					the impulse ends after that action is completed. If you
					activate your kinetic aura, the impulse conceals its
					elements, though any special effects of your aura might give
					away your location.
				</p>
				<p>
					This impulse weakens if you use it too frequently. Using it
					again within 10 minutes makes you concealed instead of
					invisible.
				</p>
				<p>
					<b>Level (10th)</b> The impulse doesn’t end if you take a
					                    hostile action, but if you’re invisible,
					                    you become concealed instead of
					                    invisible until the start of your next
					                    turn.
				</p>
				<p>
					<b>Level (16th)</b> Taking a hostile action has no effect on
					                    the impulse.
				</p>
			</>
		),
	},
	{
		id: 52,
		name: "Consume power",
		action: "reaction",
		tags: ["kineticist", "metal", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> You would take acid, electricity, fire, or sonic damage.
					</span>
					<br />
					You absorb energy and hold it in your kinetic gate. You gain
					resistance equal to your level to the triggering
					damage—choose one eligible type of resistance. If this
					reaction prevents any damage, you gain a status bonus equal
					to half your level to the damage roll of the next metal
					impulse you use before the end of your next turn.
				</p>
			</>
		),
	},
	{
		id: 53,
		name: "Counter element",
		action: "reaction",
		tags: ["kineticist", "impulse"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<b>Prerequisites</b> exactly one kinetic element.
					<br />
					<span className="frequency">
						<b>Trigger</b> You’re targeted by or in the area of an effect that has the trait matching your kinetic element and originates from an enemy or hazard.
					</span>
					<br />
					                     Your absolute dedication to a single
					                     element lets you attempt to gain
					                     control over it, even when the element
					                     is in service to another entity. You
					                     attempt to counteract the effect, using
					                     your kineticist class DC – 10 as your
					                     counteract check modifier and half this
					                     impulse’s level rounded up as the
					                     counteract rank. If you counteract the
					                     effect, you protect only yourself
					                     unless you got a critical success on
					                     your counteract check.
				</p>
				<p>
					<b>Level (12th)</b> If you successfully counteract the
					                    effect, you can have it target or affect
					                    a different creature within 30 feet of
					                    you. If you got a critical success on
					                    the counteract check, you can choose the
					                    effect’s targets or entire area.
				</p>
			</>
		),
	},
	{
		id: 54,
		name: "Crawling fire",
		action: "two_action",
		tags: ["kineticist", "fire", "impulse", "manipulate", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You mimic the motions of a beast of your devising, and it
					becomes real, with a flaming pelt and searing claws. It is
					Small and appears in an unoccupied space within 30 feet. You
					can sense from the crawling fire’s space as well as your
					own, using your senses. When you use a fire impulse, you can
					have it originate from the crawling fire instead of you
					(with the exception of impulses that affect your kinetic
					aura).
				</p>
				<p>
					The creation lasts until the end of your next turn, but you
					can Sustain it up to 1 minute. Each time you Sustain it, you
					can have the crawling fire Stride up to 40 feet. The
					crawling fire can be attacked. It uses your statistics for
					defenses but is immune to fire. Any damage that would be
					dealt to the crawling fire is dealt to you instead, though
					you take damage only once from any ability that includes
					both you and the creation in the area of effect. If you use
					Crawling Fire again, any previous one ends.
				</p>
				<p>
					<b>Level (8th)</b> The fire can be Small or Medium.
				</p>
				<p>
					<b>Level (10th)</b> The fire can be Small, Medium, or Large.
				</p>
				<p>
					<b>Level (14th)</b> The fire can be Small, Medium, Large, or
					                    Huge.
				</p>
			</>
		),
	},
	{
		id: 55,
		name: "Dash of herbs",
		action: "two_action",
		tags: ["kineticist", "wood", "healing", "impulse", "plant", "primal", "vitality"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A small cloud of medicinal herbs heal a creature. The type
					of herbs depends on which malady you decide to treat:
					confused, disease, poison, sickened, or injuries. Target one
					living creature within 30 feet, who regains 2d8+4 HP and can
					attempt a new save against one malady of the chosen kind. If
					you chose injuries, instead increase the healing dice to
					d10s. The creature becomes temporarily immune to Dash of
					Herbs for 10 minutes.
				</p>
				<p>
					Alternatively, you can add the herbs to a dish of food being
					prepared for up to six people. Creatures who partake in the
					meal gain the benefits. The herbs’ healing effects wear off
					if not eaten within an hour, though their flavor remains.
				</p>
				<p>
					<b>Level (+2)</b> The healing increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 56,
		name: "Desert wind",
		action: "one_action",
		tags: ["kineticist", "air", "earth", "composite", "impulse", "primal", "stance"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A vortex of sand and dust surrounds you. Each creature
					inside your kinetic aura (including you) is concealed from
					any creature outside your kinetic aura, and creatures
					outside the aura are concealed from creatures inside the
					aura other than you.

				</p>
				<p>
					Your air impulses carry sands that cut at great speed. When
					you use a damaging air impulse that affects at least one
					creature in your kinetic aura, that impulse deals 1
					additional slashing damage, or 2 if the impulse has a single
					target.
				</p>
				<p>
					<b>Level (+2)</b> The extra damage increases by 1, or 2 if
					                  the impulse has a single target.
				</p>
			</>
		),
	},
	{
		id: 57,
		name: "Driving rain",
		action: "three_action",
		tags: ["kineticist", "water", "impulse", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Heavy drops of rain batter down, hitting like sling stones
					and impeding vision. Each creature in a 15-foot burst within
					120 feet takes 3d8 bludgeoning damage with a basic Reflex
					save against your class DC. Until the start of your next
					turn, all creatures are concealed while in the area, and all
					creatures outside the area are concealed to creatures within
					it.
				</p>
				<p>
					<b>Level (+2)</b> The extra damage increases by 1, or 2 if
					                  the impulse has a single target.
				</p>
			</>
		),
	},
	{
		id: 58,
		name: "Elemental artillery",
		action: "three_action",
		tags: ["kineticist", "wood", "metal", "composite", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Spinning wood and metal together, you create a rugged wooden
					ballista. The ballista is Medium and appears in an
					unoccupied space within 30 feet. It immediately shoots a
					bolt with a jagged tip of elemental metal. Make an impulse
					attack roll against the AC of a target within 120 feet. The
					target takes 3d12 piercing damage on a hit (or double damage
					on a critical hit).
				</p>
				<p>
					The ballista can be shot again, but it must first be
					reloaded with two Interact actions. The ballista lasts until
					the end of your next turn, and you can Sustain the impulse.
					Each time you Sustain it, you can roll the ballista up to 20
					feet, shoot it if it’s loaded, or contribute 1 action toward
					reloading it.
				</p>
				<p>
					<b>Level (+3)</b> The damage increases by 1d12.
				</p>
			</>
		),
	},
	{
		id: 59,
		name: "Fearsome familiar",
		action: "three_action",
		tags: ["kineticist", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> a familiar.
					</span>
					<br />
					Your elemental familiar trades places with an elemental from
					its elemental plane. Summon a common creature that has the
					elemental trait and a level no greater than your level – 4.
					This creature appears in the same space as your familiar,
					which disappears for the duration of this impulse. You can
					Sustain this impulse up to 1 minute. When the impulse ends,
					the familiar appears in the space the summoned elemental
					occupied. A familiar can endure this process only so
					often—if you use this impulse on your familiar more than
					once per day, it dies as soon as it returns the second time.
				</p>
			</>
		),
	},
	{
		id: 60,
		name: "Flinging updraft",
		action: "two_action",
		tags: ["kineticist", "air", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> a familiar.
					</span>
					<br />
					A speeding wind heeds your call, picking someone up and
					depositing them nearby. Choose a creature within 60 feet of
					you. The target jumps in any direction, up to a maximum of
					30 feet. If the target doesn’t land on a space of solid
					ground within 30 feet of where it started, it falls unless
					it has a fly Speed but doesn’t take any damage from the
					fall. You choose the distance and direction of the jump.
				</p>
				<p>
					If you target an unwilling creature, it attempts a Reflex
					save against your class DC with the following results.
				</p>
				<p>
					<b>Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Failure</b> You make the creature jump up to half the
					               maximum distance.
				</p>
				<p>
					<b>Critical Failure</b> You make the creature jump up to the
					                        maximum distance.
				</p>
				<p>
					<b>Level (+2)</b> The maximum distance increases by 15 feet.
				</p>
			</>
		),
	},
];
