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
	{
		id: 61,
		name: "Jagged berms",
		action: "three_action",
		tags: ["kineticist", "earth", "wood", "composite", "impulse", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You conjure up to six cube-shaped mounds of packed earth.
					Each appears in an unoccupied square within 120 feet, fills
					its square, and provides cover. A mound has AC 10, Hardness
					10, and 20 HP, and is immune to critical hits and precision
					damage. If destroyed, a mound becomes difficult terrain. The
					mounds last for an unlimited duration, but if you use the
					impulse again, any previous one ends.
				</p>
				<p>
					Sharpened wooden stakes protrude from each mound into
					adjacent squares. They can project from any of its sides;
					you choose which sides for each mound. For each square of
					wooden stakes a creature enters, that creature takes 2d6
					piercing damage. Destroying a mound also destroys its
					stakes.
				</p>
				<p>
					<b>Level (+2)</b> The HP of each section of the wall
					                  increases by 10, and the piercing damage
					                  increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 62,
		name: "Lightning rod",
		action: "three_action",
		tags: ["kineticist", "air", "metal", "composite", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You smash a metal rod into your foe and call lightning to
					it. Attempt a 1-action melee Elemental Blast using the metal
					element. On a hit, the target is skewered with a metal rod,
					which gives it a –1 circumstance penalty to AC and saves
					against electricity; the penalty is –2 if the creature also
					has the metal trait, is made of metal, or is wearing metal
					armor. A hit creature immediately takes 1d12 electricity
					damage with a basic Reflex save against your class DC. The
					creature can Interact to attempt a DC 10 Athletics check to
					pull the lightning rod free.
				</p>
				<p>
					<b>Level (+6)</b> The electricity damage increases by 1d12.
				</p>
			</>
		),
	},
	{
		id: 63,
		name: "Molten wire",
		action: "two_action",
		tags: ["kineticist", "fire", "metal", "composite", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Spinning molten iron through a vortex of fire, you trap your
					foe in searing wires. Make an impulse attack roll against a
					creature within 15 feet. On a success, the target takes 2d6
					slashing damage and is wrapped in molten wire for 1 minute.
					It is clumsy 1 and takes 2d4 fire damage at the start of
					each of its turns, with a basic Reflex save. The wire’s
					Escape DC is your class DC. The wire has AC 10 and 75 HP.
					The impulse ends if the creature Escapes or the wire is
					destroyed.
				</p>
				<p>
					<b>Level (+4)</b> The slashing damage increases by 1d6, the
					                  fire damage increases by 1d4, and the
					                  wire’s HP increases by 25.
				</p>
			</>
		),
	},
	{
		id: 64,
		name: "Rising hurricane",
		action: "three_action",
		tags: ["kineticist", "air", "water", "composite", "impulse", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A hurricane lifts your enemies into the air before bringing
					them crashing down in a bloody rain. Your hurricane appears
					in a cylinder that’s 40 feet tall, has a 30-foot diameter,
					and is within 120 feet. All creatures in the area take 2d6
					bludgeoning damage with a basic Fortitude save against your
					class DC. Lift any creature that fails its save to any
					height you choose within the area, move it up to 5 feet in
					any direction, then drop it. It takes falling damage
					normally unless it has a fly Speed.
				</p>
				<p>
					<b>Level (+3)</b> The rain damage increases by 1d6, and the
					                  cylinder’s height increases by 5 feet.
				</p>
			</>
		),
	},
	{
		id: 65,
		name: "Roiling mudslide",
		action: "two_action",
		tags: ["kineticist", "earth", "water", "composite", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You form water and earth into a mudslide that smashes your
					opponents and coats them in mud. Each creature in the area
					takes 2d8 bludgeoning damage with a basic Fortitude save
					against your class DC. A creature that fails is also pushed
					5 feet (or 10 feet on a critical failure) and coated in mud
					until the end of its next turn. While coated in mud, the
					creature falls prone at the end of its movement any time it
					ends a move action other than a Crawl or Step. The creature
					can attempt an Acrobatics check or Reflex save against your
					class DC, avoiding the fall if it succeeds.
				</p>
				<p>
					<b>Level (+4)</b> The damage increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 66,
		name: "Sand snatcher",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A figure of sand with grasping arms arises in an unoccupied
					square within 30 feet. You can choose to make it Small or
					Medium size, and it can flank. When the sand snatcher
					appears, you can have it attempt to Grapple one creature
					adjacent to it that’s no more than one size larger than it.
					This Grapple uses your impulse attack roll instead of an
					Athletics check and shares your multiple attack penalty. The
					sand snatcher lasts until the end of your next turn, and you
					can Sustain the impulse up to 1 minute. Each time you
					Sustain the impulse, you can have the sand snatcher either
					Grapple again or Burrow, Climb, or Stride up to 20 feet.
					Attempts to Escape its grasp use your class DC.
				</p>
				<p>
					<b>Level (10th)</b> You can also choose Large size.
				</p>
				<p>
					<b>Level (14th)</b> You can also choose Large or Huge size.
				</p>
			</>
		),
	},
	{
		id: 67,
		name: "Scrap barricade",
		action: "three_action",
		tags: ["kineticist", "metal", "impulse", "manipulate", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Ragged pieces of metal weld together into a ramshackle
					structure. The barricade is up to 30 feet long, 15 feet
					high, and 1/2 inch thick. It must form in a straight line in
					an unbroken open space that doesn’t pass through any
					creatures or objects, or the impulse fails. Each
					10-foot-by-10-foot section of the wall has AC 10, Hardness
					10, and 20 Hit Points, and it’s immune to critical hits and
					precision damage. If any section is destroyed, the entire
					wall collapses, and each creature adjacent to the wall takes
					2d8 slashing damage with a basic Reflex save against your
					class DC. The wall lasts until the end of your next turn,
					but you can Sustain it up to 1 minute.
				</p>
				<p>
					<b>Level (+2)</b> The maximum length of the wall increases
					                  by 10 feet, the HP of each section
					                  increases by 10, and the damage when it’s
					                  destroyed increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 68,
		name: "Steam knight",
		action: "one_action",
		tags: ["kineticist", "fire", "water", "composite", "impulse", "primal", "stance"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You shape your kinetic aura into swirling armor of steam
					that scalds your enemies and propels you on super-heated jet
					streams. A creature can take damage from Steam Knight only
					once per round. Your steam armor has the following effects.
				</p>
				<ul>
					<li>
						You gain a +10-foot status bonus to your Speed.
					</li>
					<li>
						When you Leap, you can jump up to your Speed. You don’t
						immediately fall at the end of a jump, provided you Leap
						again with your next action. If you Leap over a creature
						and come within 10 feet, that creature takes 2d6 fire
						damage with a basic Reflex save against your class DC.
					</li>
					<li>
						At the start of each of your turns, you can emit steam
						as a free action. It deals 2d6 fire damage to each
						creature in your kinetic aura with a basic Reflex save
						against your class DC. A creature that fails is also
						pushed 5 feet.
					</li>
				</ul>
				<p>
					<b>Level (+5)</b> The fire damage from a jump or blast of
					                  steam increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 69,
		name: "Torrent in the blood",
		action: "two_action",
		tags: ["kineticist", "water", "healing", "impulse", "manipulate", "overflow", "primal", "vitality"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A healing wave splashes across creatures in a 30-foot cone,
					its cleansing water driving afflictions from the body. Each
					creature in the area regains 3d8 Hit Points and can attempt
					a new save against one poison or disease affliction
					affecting it; on a failed save, the condition doesn’t
					worsen.
				</p>
				<p>
					Each creature that benefited from this impulse becomes
					temporarily immune to Torrent in the Blood for 10 minutes.
				</p>
				<p>
					<b>Level (+2)</b> The healing increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 70,
		name: "Tree of duality",
		action: "three_action",
		tags: ["kineticist", "air", "wood", "composite", "impulse", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					An ephemeral tree bursts forth, floating on air in an
					unoccupied square of your choice within 60 feet. Blooming
					flowers and fungal growths shed pollen and spores, which a
					swirling gust of air spreads in a 10-foot emanation around
					it. The tree lasts until the end of your next turn, and you
					can Sustain it up to 1 minute.
				</p>
				<ul>
					<li>
						<b>Cleansing Pollen</b> (healing, vitality) Each living
						                        ally that’s in the area or
						                        enters it regains 3d4 HP and is
						                        then temporarily immune to
						                        regaining HP from Tree of
						                        Duality for 10 minutes.
					</li>
					<li>
						<b>Hallucinogenic Spores</b> (mental) Enemies in the
						                             area are dazzled. An enemy
						                             that leaves the area
						                             remains dazzled until the
						                             start of its next turn.
					</li>
				</ul>
				<p>
					<b>Level (+2)</b> The healing increases by 1d4.
				</p>
			</>
		),
	},
	{
		id: 71,
		name: "two-element infusion",
		action: "",
		tags: ["kineticist", "infusion"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> two or more kinetic elements.
					</span>
					<br />
					Slamming one element into another, you combine their
					strengths. If the next action you use is an Elemental Blast,
					choose two of your kinetic elements instead of one. The
					blast gains the traits of both elements and uses the highest
					range and damage die among the two elements. Half the
					blast’s damage is the damage type of one element, and the
					other half is the damage type of the other element. If the
					total damage is an odd number, you choose which element
					deals the higher damage. Determine the damage amounts before
					altering the amount due to halving, doubling, resistances,
					weaknesses, and other calculations. If either element can
					deal more than one type of damage, you can still choose
					which damage type to use. You gain any added effects of both
					elements, such as their critical blast junction effects.
				</p>
			</>
		),
	},
	{
		id: 72,
		name: "Volcanic escape",
		action: "reaction",
		tags: ["kineticist", "fire", "impulse", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> An enemy in your kinetic aura damages you.
					</span>
					<br />
					Lava reflexively explodes underneath you and the creature
					that hurt you. The triggering enemy takes 1d6 fire damage
					with a basic Reflex save against your class DC. You Leap up
					to half your Speed in any direction; this movement doesn’t
					trigger reactions.
				</p>
				<p>
					<b>Level (+4)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 73,
		name: "Weight of stone",
		action: "three_action",
		tags: ["kineticist", "earth", "impulse", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A packed cloud of thundering boulders descends from the sky,
					beating down everyone in its path. The rain of stone falls
					in a cylinder 20 feet in diameter and 80 feet high, and the
					bottom must be within 120 feet of you. Each creature in the
					area takes 4d8 bludgeoning damage and might be pushed
					downward, depending on its Reflex save against your class
					DC.
				</p>
				<p>
					<b>Critical Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Success</b> The creature takes half damage.
				</p>
				<p>
					<b>Failure</b> The creature takes full damage and is pushed
					               downward 40 feet without taking falling
					               damage. If it reaches the bottom of the
					               cylinder or the ground, the push ends. If the
					               creature is pushed to the ground, it can’t
					               Fly, levitate, or otherwise leave the ground
					               for 1 round.
				</p>
				<p>
					<b>Critical Failure</b> As failure, but double damage and
					                        the distance the creature is pushed
					                        is 80 feet.
				</p>
				<p>
					<b>Level (+2)</b> The damage increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 74,
		name: "Wooden palisade",
		action: "three_action",
		tags: ["kineticist", "wood", "impulse", "manipulate", "overflow", "primal"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Planks of wood, embellished with carvings, spring forth to
					form a wall. The palisade is up to 30 feet long, 20 feet
					high, and 1 inch thick. It must form in a straight line in
					an unbroken open space that doesn’t pass through any
					creatures or objects, or the impulse fails. When you create
					the wall, you can choose to create ledges on one side of the
					wall, 4 feet from the top, with ladders reaching to them
					from the bottom of the wall.

				</p>
				<p>
					Each 10-foot-by-10-foot section of the wall has AC 10,
					Hardness 10, and 20 Hit Points, and is immune to critical
					hits and precision damage. The wall lasts until the end of
					your next turn, but you can Sustain it up to 1 minute.
				</p>
				<p>
					<b>Level (+2)</b> The maximum length of the wall increases
					                  by 10 feet, and the HP of each section
					                  increase by 10.
				</p>
			</>
		),
	},
	{
		id: 75,
		name: "Call the hurricane",
		action: "two_action",
		tags: ["kineticist", "water", "impulse", "overflow", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Massive waves spiral around you, with you as the eye of the
					hurricane. The waves appear in a 20-foot emanation, or a
					30-foot emanation if you’re in a body of water. Each
					creature in the area takes 6d8 bludgeoning damage with a
					basic Reflex save against your class DC. A creature that
					fails its save is battered by the waves and pushed 10 feet
					(or 20 feet on a critical failure).
				</p>
				<p>
					<b>Level (+2)</b> Level (+2) The damage increases by 1d8.
				</p>
			</>
		),
	},
	{
		id: 76,
		name: "Conductive sphere",
		action: "two_action",
		tags: ["kineticist", "metal", "electricity", "impulse", "manipulate", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A floating metal ball forms in a space within 30 feet,
					flashing with electricity. It can’t be targeted or damaged.
					Any of your allies adjacent to it gain resistance to
					electricity equal to your level and add the shock rune to
					all their Strikes with metal objects. The sphere lasts until
					the end of your next turn, but you can Sustain it up to 1
					minute.
				</p>
				<p>
					When you conjure the sphere and the first time you Sustain
					the impulse on subsequent rounds, you can either have it Fly
					up to 20 feet or deal 1d12 electricity damage to an adjacent
					creature with a basic Reflex save against your class DC.
				</p>
			</>
		),
	},
	{
		id: 77,
		name: "Cyclonic ascent",
		action: "two_action",
		tags: ["kineticist", "air", "impulse", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Whorls of wind surround your lower body, forming a cyclone
					that lifts you into the air. You gain a fly Speed equal to
					your land Speed or 30 feet, whichever is greater, for 10
					minutes. Unlike with a normal fly Speed, you can move upward
					without treating it as difficult terrain. In addition, you
					can remain in the air at the end of your turn if you used an
					air impulse during that turn, even if you didn’t use a Fly
					action that turn.
				</p>
				<p>
					<b>Level (14th)</b> You can target up to five additional
					                    creatures, each of which gains a fly
					                    Speed equal to its land Speed or 30
					                    feet, whichever is greater. They don’t
					                    gain the other benefits
				</p>
			</>
		),
	},
	{
		id: 78,
		name: "Drifting pollen",
		action: "one_action",
		tags: ["kineticist", "wood", "impulse", "plant", "primal", "stance"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A haze of pollen floats around you. A creature in your
					kinetic aura when you enter the stance, or who later enters
					the aura or ends its turn in the aura, attempts at a
					Fortitude save against your class DC. On a failure, it’s
					sickened 1 (sickened 2 on a critical failure) and dazzled
					until it’s no longer sickened. A creature attempts this save
					no more than once per round and doesn’t attempt a new save
					if already affected.
				</p>
			</>
		),
	},
	{
		id: 79,
		name: "Elemental overlap",
		action: "",
		tags: ["kineticist"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> exactly one kinetic element.
					</span>
					<br />
					Though you’ve dedicated yourself to one element, you learn
					to mix that element with another. Gain a composite impulse
					feat that includes your kinetic element. You can use that
					impulse even though you can’t channel all its elements. The
					feat’s level must be lower than the level at which you
					selected Elemental Overlap.
				</p>
				<p>
					<b>Special</b> You can select this feat more than once,
					               choosing a different impulse feat each time.
				</p>
			</>
		),
	},
	{
		id: 80,
		name: "Impenetrable fog",
		action: "three_action",
		tags: ["kineticist", "water", "impulse", "manipulate", "overflow", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Fog condenses in a chaotic, swirling pattern, thick enough
					that it seems to push back against you. You call forth a fog
					bank in a 10-foot burst within 120 feet. All creatures in
					the fog are concealed, and all creatures outside the fog
					become concealed to creatures within it. The fog is so
					magically dense it impedes movement, making the area
					difficult terrain. The fog lasts until the end of your next
					turn, and you can Sustain the impulse up to 1 minute.
				</p>
				<p>
					<b>Level (+3)</b> You can make the radius of the burst
					                  larger. Increase its maximum size by 5
					                  feet.
				</p>
			</>
		),
	},
	{
		id: 81,
		name: "Kindle inner flames",
		action: "one_action",
		tags: ["kineticist", "fire", "impulse", "primal", "stance"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					As a candle can light another, you awaken the latent
					potential to channel fire in other creatures. You shed
					faint, glowing embers, as do your allies while they’re in
					your kinetic aura. Anyone shedding these embers gains a +1
					status bonus to Reflex saves and Acrobatics checks and can
					Step as a free action once per round. When an affected
					creature takes a move action, its Strikes deal an extra 2
					fire damage until the end of its turn.
				</p>
				<p>
					<b>Level (12th)</b> The status bonus to Reflex saves and
					                    Acrobatics checks is +2, and the Strikes
					                    gain the flaming rune instead of the
					                    extra 2 fire damage.
				</p>
			</>
		),
	},
	{
		id: 82,
		name: "Purify element",
		action: "two_action",
		tags: ["kineticist", "impulse", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You turn an element into its purest form. Choose one of your
					kinetic elements and target up to 1 cubic foot of that
					element within 30 feet. (One cubic foot of liquid is roughly
					8 gallons.) You remove toxins and pollutants from the
					element as well as anything intruding into the element, such
					as plant roots in soil. This can’t change the grade of a
					material, alter the form of a manufactured object, or change
					the structural integrity of the element. If the purification
					would remove an alchemical or magical pollutant (such as a
					poison or curse), Purify Element attempts to counteract that
					impurity, using your class DC — 10 for the counteract check.
					If it fails to counteract a particular impurity, any further
					attempt you make to counteract that impurity with Purify
					Element fails as well.
				</p>
			</>
		),
	},
	{
		id: 83,
		name: "Retch rust",
		action: "two_action",
		tags: ["kineticist", "metal", "impulse", "overflow", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You exhale tendrils formed from flakes of rusted metal. All
					creatures in a 30-foot cone take 4d10 slashing damage with a
					basic Fortitude save against your class DC. A metal creature
					that fails its save also takes 2d4 persistent slashing
					damage.
				</p>
				<p>
					<b>Heightened (+2)</b> The cloud’s slashing damage increases
					                       by 1d10 and the persistent damage
					                       increases by 1d4.
				</p>
			</>
		),
	},
	{
		id: 84,
		name: "Sanguivolent roots",
		action: "three_action",
		tags: ["kineticist", "wood", "impulse", "overflow", "plant", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Blood-drinking vines grow from the ground in a 15-foot burst
					within 120 feet. Each living enemy in the area has its blood
					drained, taking 3d6 piercing damage with a basic Fortitude
					save against your class DC. Each time the vines drink blood,
					living creatures in the area who aren’t your enemies regain
					HP equal to half the damage a single creature took;
					calculate this using the highest damage a single creature
					took. This is a healing vitality effect. Your enemies with
					void healing in the area take vitality damage in the same
					amount as the healing.
				</p>
				<p>
					The vines last until the end of your next turn, and you can
					Sustain the impulse. The first time you Sustain the impulse
					on subsequent turns, you can repeat the effect.
				</p>
				<p>
					<b>Heightened (+2)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 85,
		name: "Solar detonation",
		action: "three_action",
		tags: ["kineticist", "fire", "impulse", "incapacitation", "overflow", "primal", "vitality"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Blinding flames explode in a swirling sphere! The detonation
					fills a 20-foot burst within 60 feet of you. Each creature
					in the area takes 6d6 fire damage, plus 2d6 vitality damage
					if it has void healing, and can become dazzled or blinded
					depending on the result of its Reflex save. The light from
					Solar Detonation is sunlight for creatures with a particular
					vulnerability to sunlight. Each creature that attempts a
					save becomes temporarily immune to being dazzled or blinded
					by Solar Detonation for 10 minutes, but not the impulse’s
					other effects.
				</p>
				<p>
					<b>Critical Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Success</b> The creature takes half damage and is dazzled
					               until the start of your next turn.
				</p>
				<p>
					<b>Failure</b> The creature takes full damage and is blinded
					               until the start of your next turn.
				</p>
				<p>
					<b>Critical Failure</b> The creature takes double damage and
					                        is blinded for 1 minute.
				</p>
				<p>
					<b>Heightened (+2)</b> Increase the fire damage by 1d6 and
					                       the vitality damage by 1d6.
				</p>
			</>
		),
	},
	{
		id: 86,
		name: "Spike skin",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You touch a willing creature, causing its skin to harden and
					form spiky protrusions. The target gains resistance 4 to all
					physical damage (except adamantine). Whenever a creature
					damages the target with an unarmed attack or non-reach melee
					weapon, the attacking creature takes 2 piercing damage.
				</p>
				<p>
					This impulse lasts for 10 minutes, but each time the target
					takes physical damage, the duration decreases by 1 minute.
					The target is temporarily immune to this impulse for 1 hour.
					If you use Spike Skin again, any previous one ends.
				</p>
				<p>
					<b>Level (+2)</b> The resistance and damage each increase by
					                  2.
				</p>
			</>
		),
	},
	{
		id: 87,
		name: "Storm spiral",
		action: "three_action",
		tags: ["kineticist", "air", "electricity", "impulse", "overflow", "primal", "sonic"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Dark thunderclouds swirl in a miniature storm, crisscrossed
					with lightning bolts; a tremendous thunderclap fills the
					air. The storm appears in a 20-foot burst within 60 feet.
					Each creature in the area takes 3d12 electricity damage and
					1d10 sonic damage, with a basic Reflex save against your
					class DC. A creature that fails its save is deafened until
					the end of its next turn (or for 1 minute on a critical
					failure). A creature wearing metal armor or made of metal
					takes a –1 circumstance penalty to its save.
				</p>
				<p>
					<b>Level (+3)</b> The electricity damage increases by 1d12.
				</p>
			</>
		),
	},
	{
		id: 88,
		name: "Swim through earth",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "primal"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					The earth parts before you, letting you swim through it. You
					gain a burrow Speed equal to your land Speed and can
					immediately Burrow once. You don’t gain the ability to
					breathe while in the earth, so you must hold your breath.
					The impulse ends at the end of your next turn, but you can
					Sustain it up to 1 minute. If you’re inside the earth when
					the impulse ends, you immediately return to the surface
					directly above you, fall prone when you reach the surface,
					and are slowed 1 until the end of your next turn.
				</p>
				<p>
					<b>Level (14th)</b> You can burrow through rock and similar
					                    dense earthen matter, leaving no tunnels
					                    or signs of your passing.
				</p>
			</>
		),
	},
	{
		id: 89,
		name: "Aura shaping",
		action: "",
		tags: ["kineticist"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You control the size of your kinetic aura. You can make your
					kinetic aura’s emanation any size from a 5-foot emanation to
					a 20-foot emanation (you must choose a multiple of 5). You
					choose the size when you Channel Elements and can change it
					when you use a stance impulse that affects your kinetic
					aura. Increase the maximum size you can choose by 5 feet at
					15th and 20th levels.
				</p>
			</>
		),
	},
	{
		id: 90,
		name: "Chain confusion",
		action: "one_action",
		tags: ["kineticist", "infusion"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					The elemental matter in your blast keeps reconstituting
					itself to travel onward, no matter how many bodies it
					collides with. If your next action is an Elemental Blast and
					it hits, attempt a new ranged Elemental Blast from the
					target against a different creature that’s within the
					blast’s range, measuring from the creature you hit. You can
					keep chaining the blast in this way each time you hit. Your
					multiple attack penalty applies normally to any blasts in
					the chain after the first. You can make up to five blasts
					total, but you can’t target the same creature more than
					once. Roll damage only once and apply it to each creature
					you hit. (If you start with a melee blast, you still add
					your Strength to only that blast, not the successive ranged
					blasts.)
				</p>
			</>
		),
	},
	{
		id: 91,
		name: "Elemental transformation",
		action: "one_action",
		tags: ["kineticist", "polymorph", "primal"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<b>Prerequisites</b> exactly one kinetic element.
					<br />
					<b>Frequency</b> once per day.
					<br />
					<span className="frequency">
						<b>Requirements</b> Your kinetic gate is deactivated.
					</span>
					<br />
					                     You open your kinetic gate, but rather
					                     than activating your kinetic aura, you
					                     instead become overwhelmed with
					                     transformative elemental energy. You’re
					                     affected by an elemental form spell
					                     with the same trait as your kinetic
					                     element. You can heighten it to any
					                     spell rank up to half your level
					                     rounded up.
				</p>
			</>
		),
	},
	{
		id: 92,
		name: "Architect of flames",
		action: "three_action",
		tags: ["kineticist", "fire", "impulse", "manipulate", "overflow", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Flames rise and shape to your will, forming a wall or dome
					of your design. You create a wall of fire. In addition to
					the normal choices, you can make the wall up to 10 feet long
					and 60 feet high. The wall lasts until the end of your next
					turn, but you can Sustain it up to 1 minute.
				</p>
				<p>
					<b>Level (+3)</b> The damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 93,
		name: "Effortless impulse",
		action: "",
		tags: ["kineticist"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> Your turn begins.
					</span>
					<br />
					A steady ripple from your kinetic gate maintains one of your
					impulses. You immediately Sustain one of your active
					impulses that can be sustained.
				</p>
			</>
		),
	},
	{
		id: 94,
		name: "Furnace form",
		action: "two_action",
		tags: ["kineticist", "fire", "manipulate", "polymorph", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Opening your kinetic gate, you allow flames to consume your
					form and leave you a living flame. You gain the benefits of
					the fiery body spell (except the ability to cast ignition)
					until the end of your next turn. You can Sustain the impulse
					up to 1 minute, and when you do, you can Fly up to half your
					fly Speed. Your fire Elemental Blasts deal an additional die
					of damage.
				</p>
				<p>
					<b>Level (16th)</b> This duration is 1 minute, you can’t
					                    Sustain the impulse, and you can Dismiss
					                    the impulse.
				</p>
			</>
		),
	},
	{
		id: 95,
		name: "Ghosts in the storm",
		action: "one_action",
		tags: ["kineticist", "air", "electricity", "impulse", "primal", "stance"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Clouds, like eager pets, are drawn to you and to those in
					your good graces. Fast-moving gray clouds surround you, as
					well as your allies while they’re in your kinetic aura.
					Anyone surrounded by these clouds gains a +2 status bonus to
					Reflex saves and Acrobatics checks. When an affected
					creature uses a move action, clouds dance around it. Until
					the start of its next turn, it’s concealed, and its Strikes
					gain the shock rune.
				</p>
			</>
		),
	},
	{
		id: 96,
		name: "Glacial prison",
		action: "two_action",
		tags: ["kineticist", "water", "cold", "impulse", "overflow", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Intense cold swirls around your foe, covering it in frost
					that slows it down and turns its body to ice. Target a
					creature you can observe within 120 feet. It must attempt a
					Fortitude save against your class DC. The creature is then
					temporarily immune for 24 hours.
				</p>
				<p>
					<b>Critical Success</b> The target is unaffected.
				</p>
				<p>
					<b>Success</b> The target is slowed 1 until the end of its
					               next turn.
				</p>
				<p>
					<b>Failure</b> The target is frozen solid. It can’t act, its
					               AC is 9, it has Hardness 5, and it’s immune
					               to other cold effects, critical hits, and
					               precision damage. This lasts until the end of
					               your next turn, but if the target is affected
					               by a hostile action, this effect ends
					               immediately after that action.
				</p>
				<p>
					<b>Critical Failure</b> As failure, but after becoming
					                        unfrozen, the creature is slowed 1
					                        until the end of its next turn.
				</p>
			</>
		),
	},
	{
		id: 97,
		name: "Hedge maze",
		action: "three_action",
		tags: ["kineticist", "wood", "impulse", "overflow", "plant", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You sculpt a manicured maze of hedges. You create a wall of
					shrubs in a square 30 feet on a side, with 15-foot-high
					walls. You can place up to four more walls inside, each 10
					feet wide and 15 feet high. The hedge lasts until the end of
					your next turn, and you can Sustain the impulse up to 1
					minute.
				</p>
				<p>
					You can spend 10 minutes using this impulse as an
					exploration activity to instead create a cozy cabin with
					hedges for walls. It lasts for 12 hours, but ends if you use
					the impulse again.
				</p>
			</>
		),
	},
	{
		id: 98,
		name: "Rain of razors",
		action: "three_action",
		tags: ["kineticist", "metal", "impulse", "overflow", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Razor-sharp slivers of metal fall from the sky. Each
					creature in a 20-foot burst within 60 feet takes 9d6
					slashing damage with a basic Reflex save against your class
					DC. The razors embed in all surfaces in the area, making
					them hazardous terrain for 1 minute. A creature that moves
					through this hazardous terrain takes 3 slashing damage for
					every square of the area it moves into.
				</p>
				<p>
					<b>Level (+2)</b> The initial damage increases by 1d6 and
					                  the hazardous terrain damage increases by
					                  1.
				</p>
			</>
		),
	},
	{
		id: 99,
		name: "Rattle the earth",
		action: "two_action",
		tags: ["kineticist", "earth", "impulse", "overflow", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Striking the ground with the gravity of the deepest rocks,
					you cause an earthquake. This has the effects of earthquake
					but comes from you, with an area of a 60-foot cone or an
					emanation with the same size as your kinetic aura. You and
					your space are unaffected by the quake. The fissures are
					only 10 feet deep, and the DC of the flat check for a
					collapse is 4 higher.
				</p>
				<p>
					<b>Level (16th)</b> Fissures are 20 feet deep, and the DC of
					                    the flat check is 2 higher.
				</p>
				<p>
					<b>Level (20th)</b> The fissures and flat check are
					                    unchanged from the spell.
				</p>
			</>
		),
	},
	{
		id: 100,
		name: "Rock rampart",
		action: "three_action",
		tags: ["kineticist", "earth", "impulse", "overflow", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Drawing on your connection to the Plane of Earth, you form a
					wall of rock and earth. This has the effect of wall of
					stone, but the wall’s maximum length is 40 feet. The wall
					lasts until the end of your next turn, but you can Sustain
					it up to 1 minute.
				</p>
				<p>
					<b>Level (+4)</b> The maximum length of the wall increases
					                  by 10 feet, and the Hit Points of each
					                  section increase by 5.
				</p>
			</>
		),
	},
	{
		id: 101,
		name: "Sea glass guardians",
		action: "one_action",
		tags: ["kineticist", "water", "impulse", "primal", "stance"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Eerily beautiful elemental water beings race around you,
					eager to protect and heal you and your allies. Their forms
					vary and might include eels formed of undulating water or
					ice crystals whirling in the shape of a jellyfish. The
					guardians flow around combatants and don’t occupy a space.
					They attempt to intercept all dangers, granting you and your
					allies within your kinetic aura a +1 status bonus to AC and
					saving throws.
				</p>
				<p>
					If any creature affected is critically hit or critically
					fails at a saving throw against an attack, effect from an
					enemy, or hazard and remains above 0 HP, the guardians reach
					out to heal that creature. The creature regains 4d8+8 Hit
					Points, and the impulse ends. If the creature is in water,
					the healing dice are d10s instead of d8s.
				</p>
				<p>
					<b>Level (+3)</b> If any creature affected is critically hit
					                  or critically fails at a saving throw
					                  against an attack, effect from an enemy,
					                  or hazard and remains above 0 HP, the
					                  guardians reach out to heal that creature.
					                  The creature regains 4d8+8 Hit Points, and
					                  the impulse ends. If the creature is in
					                  water, the healing dice are d10s instead
					                  of d8s.
				</p>
			</>
		),
	},
	{
		id: 102,
		name: "Shattershields",
		action: "one_action",
		tags: ["kineticist", "metal", "impulse", "primal", "stance"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Four plates of pitted metal float around you to intercept
					attacks. You and allies in your kinetic aura gain a +1
					circumstance bonus to AC. When any creature with this bonus
					would take damage from a physical attack, one of the plates
					reduces the damage by its Hardness of 5. If the damage
					exceeds the Hardness, that plate is destroyed. You can
					replenish all destroyed plates as a single action that has
					the concentrate trait.
				</p>
				<p>
					<b>Level (+2)</b> The Hardness increases by 1.
				</p>
			</>
		),
	},
	{
		id: 103,
		name: "Wiles on the wind",
		action: "two_action",
		tags: ["kineticist", "air", "auditory", "illusion", "impulse", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Speaking lies, you set them loose upon a drifting wind. You
					create an auditory illusion that comes from a square within
					500 feet and can be as loud as four normal humans talking.
					The sound can be intricate, including speech or music,
					though the GM might require you to attempt a check or know a
					language for it to be convincing. The illusion lasts until
					the end of your next turn, and you can Sustain the impulse.
				</p>
				<p>
					You can have any creature within 40 feet of the illusion, or
					that comes within 40 feet of it during the duration, attempt
					a Will save against your class DC. This is a mental effect.
				</p>
				<p>
					<b>Success</b> The creature is unaffected, disbelieves the
					               illusion, and is temporarily immune for 1
					               hour.
				</p>
				<p>
					<b>Failure</b> The creature is fascinated with the source of
					               the sound until the end of its next turn.
					               When the fascination ends, the creature is
					               temporarily immune for 1 hour.
				</p>
				<p>
					<b>Critical Failure</b> As failure, but the creature is
					                        fascinated for 1 minute or until it
					                        disbelieves.
				</p>
			</>
		),
	},
	{
		id: 104,
		name: "Witchwood seed",
		action: "two_action",
		tags: ["kineticist", "wood", "impulse", "overflow", "plant", "polymorph", "primal"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You touch a creature to implant a malignant seed in its
					body. The creature takes 5d10 piercing damage and other
					effects depending on its Fortitude save against your class
					DC. The creature is then temporarily immune for 24 hours.
					Creatures with the fungus, plant, or wood trait are immune.
				</p>
				<p>
					<b>Critical Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Success</b> The creature takes half damage and takes a
					               –10-foot status penalty to all its Speeds
					               until the end of its next turn.
				</p>
				<p>
					<b>Failure</b> The target takes full damage and is clumsy 2
					               and immobilized until the end of its next
					               turn.
				</p>
				<p>
					<b>Critical Failure</b> The target takes double damage and
					                        is clumsy 2 and immobilized. It
					                        attempts a new save at the end of
					                        each of its turns, ending the effect
					                        if it succeeds.
				</p>
				<p>
					<b>Level (+4)</b> The damage increases by 1d10.
				</p>
			</>
		),
	},
	{
		id: 105,
		name: "Alloy flesh and steel",
		action: "two_action",
		tags: ["kineticist", "metal", "impulse", "manipulate", "polymorph", "primal"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Elemental energy replaces every cell of your body with raw
					metal. You gain the benefits of the ferrous form spell
					(except you can’t cast needle darts) until the end of your
					next turn. You can Sustain the impulse up to 1 minute, and
					when you do, you can Raise a metal Shield if you’re wielding
					one. Your metal Elemental Blasts deal an additional die of
					damage. If you suspend any conditions with Alloy Flesh and
					Steel, when it ends, you’re temporarily immune to Alloy
					Flesh and Steel for 1 hour.
				</p>
				<p>
					<b>Level (16th)</b> The resistance is 15.
				</p>
			</>
		),
	},
	{
		id: 106,
		name: "Assume Earth's mantle",
		action: "one_action",
		tags: ["kineticist", "earth", "impulse", "primal", "stance"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Enormous pieces of rock cluster around your body. You can
					Dismiss this impulse.
				</p>
				<ul>
					<li>
						You become Large if you were smaller. This increases
						your reach by 5 feet (or by 10 feet if you started out
						Tiny).
					</li>
					<li>
						You gain a climb Speed equal to your land Speed, but you
						can use it only to climb surfaces of earthen matter.
					</li>
					<li>
						The armor grants you a +1 circumstance bonus to your
						Fortitude saves and a +2 circumstance bonus to your
						Fortitude or Reflex DCs against attempts to Shove you,
						Trip you, or knock you prone.
					</li>
					<li>
						If your Strength is below +4, this armor raises your
						Strength to +4. If your Strength is +4 or higher, this
						armor grants you a +1 item bonus to your Strength.
					</li>
					<li>
						If you have the Armor in Earth impulse, you can add its
						effects to Assume Earth’s Mantle.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 107,
		name: "Barrier of boreal frost",
		action: "three_action",
		tags: ["kineticist", "water", "cold", "impulse", "manipulate", "overflow", "primal"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You form an intricate structure of ice, such as a wall of
					bricks made of packed snow or a screen of enormous icicles.
					This has the effect of a wall of ice spell with a spell rank
					equal to half your level rounded up. It can only be a wall
					(not a hemisphere), and you choose whether the ice is
					transparent or opaque. The wall lasts until the end of your
					next turn, but you can Sustain it up to 1 minute.
				</p>
			</>
		),
	},
	{
		id: 108,
		name: "Body of air",
		action: "react",
		tags: ["kineticist", "air", "impulse", "overflow", "polymorph", "primal"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger</b> An enemy you can observe targets you with an attack or other damaging effect.
					</span>
					<br />
					Your gathered air consumes your body, leaving only a cloud
					of living vapor. This has the same effects on you as vapor
					form. The effect lasts until the end of your next turn, but
					you can Sustain the form up to 5 minutes. If you activate
					your kinetic aura, Body of Air ends.
				</p>
				<p>
					You can use Body of Air as a reaction only when the trigger
					is met, but you can use it as a 2-action activity without
					the trigger being met.
				</p>
				<p>
					<b>Level (+1)</b> The resistance increases by 1.
				</p>
			</>
		),
	},
	{
		id: 109,
		name: "Nourishing gare",
		action: "",
		tags: ["kineticist"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You can sustain yourself on a single drop of elemental dew
					or the slightest spark from the Plane of Fire. You gain a +2
					status bonus to saving throws against poisons, sleep, and
					effects that would make you paralyzed. You don’t need to
					breathe, eat, or sleep, though you must still take a full
					night’s rest every 24 hours to be able to make your daily
					preparations. During this time, you remain awake and alert,
					but you must spend the time meditating or attuning to your
					kinetic gate rather than engaging in other complex
					activities. Each kineticist attunes in their own individual
					way.
				</p>
			</>
		),
	},
	{
		id: 110,
		name: "Orchard's endurance",
		action: "one_action",
		tags: ["kineticist", "wood", "impulse", "plant", "primal", "stance"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Patches of bark appear on the skin of you and your nearby
					allies. You and your allies in your kinetic aura gain
					resistance 5 to bludgeoning and piercing damage. In
					addition, you and your affected allies roll flat checks to
					recover from persistent damage twice and take the higher
					result; this is a fortune effect.
				</p>
				<p>
					<b>Level (+4)</b> The resistance increases by 2.
				</p>
			</>
		),
	},
	{
		id: 111,
		name: "Rapid reattunement",
		action: "",
		tags: ["kineticist", "concentrate", "exploration"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> reflow elements.
					</span>
					<br />
					You spend 10 minutes realigning your elemental connections
					in an elemental trance. Replace one of your impulse feats
					using the same process as reflow elements. If you have
					double reflow, you can replace two impulse feats instead of
					one.
				</p>
			</>
		),
	},
	{
		id: 112,
		name: "Walk through the conflagration",
		action: "two_action",
		tags: ["kineticist", "fire", "impulse", "overflow", "primal", "teleportation"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You fall through your own kinetic gate, leaving behind an
					effigy of flame and reappearing majestically near another
					fire. You instantly transport yourself, and any items you’re
					wearing and holding, from your current space to a clear
					space within 120 feet you can observe that’s adjacent to an
					open flame or a creature taking persistent fire damage. If
					this would bring another creature with you—even if you’re
					carrying it in an extradimensional container—the action
					fails.
				</p>
				<p>
					A whorl of fire surrounds you in a 5-foot emanation either
					before you depart or after you arrive. Each creature in the
					area takes 4d6 fire damage with a basic Reflex save against
					your class DC.
				</p>
				<p>
					<b>Level (+3)</b> The fire damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 113,
		name: "Imperious aura",
		action: "",
		tags: ["kineticist", "impulse", "primal"],
		level: 16,
		feat: "Feat 16",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<b>Prerequisites</b> one or more stance impulses that affect
					                     your kinetic aura.
					<br />
					<span className="frequency">
						<b>Trigger</b> Your turn begins.
					</span>
					<br />
					                     Your glowing and majestic kinetic aura
					                     marks you as a true child of the
					                     elements. Use a stance impulse that
					                     affects your kinetic aura.
				</p>
				<p>
					<b>Level (+3)</b> The fire damage increases by 1d6.
				</p>
			</>
		),
	},
	{
		id: 114,
		name: "All shall end in flames",
		action: "three_action",
		tags: ["kineticist", "fire", "death", "impulse", "overflow", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					White-hot fire consumes everything in a cataclysmic sphere
					of death. The fire fills your choice of a 30-foot burst
					within 500 feet or a 30-foot emanation. This deals 13d6 fire
					damage with a basic Reflex save against your class DC. Any
					creature dropped to 0 HP by this fire dies, reduced to a
					pile of ash.
				</p>
				<p>
					If you die to this impulse, you return to life at the start
					of your next turn in the same space. When you return, you
					have Hit Points equal to double your level.
				</p>
				<p>
					<b>Level (20th)</b> The damage is 15d6.
				</p>
			</>
		),
	},
	{
		id: 115,
		name: "Beasts of slumbering steel",
		action: "three_action",
		tags: ["kineticist", "metal", "impulse", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You conjure metal elemental mounts made of interlocking
					metal pieces. Target up to 5 Medium or smaller willing
					creatures within 30 feet. Large mounts appear underneath
					them, and the targets can immediately Mount the creatures.
					Each mount can take four different forms. One form has only
					a land Speed of 80 feet, and the other forms each have a
					land Speed of 30 feet with a climb, fly, or swim Speed of 60
					feet. Each rider chooses the initial form and can change the
					form as a single action, which has the concentration trait.
				</p>
				<p>
					The mounts have AC 40, Fortitude +30, Reflex +30, Will +25,
					and 180 Hit Points. They’re mindless and immune to bleed,
					healing, paralyzed, poison, and sleep. They can’t attack.
					They remain for 1 minute or until you use this impulse
					again. You can use this impulse as a 1-minute exploration
					activity to make the duration 1 hour, but this halves the
					mounts’ defenses and HP.
				</p>
			</>
		),
	},
	{
		id: 116,
		name: "Crowned in tempest's fury",
		action: "one_action",
		tags: ["kineticist", "air", "electricity", "impulse", "primal", "stance"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					You become one with a devastating thunderstorm from the
					Plane of Air, placing a crown of lightning upon your brow.
					Sparks flash in your eyes, and lightning strikes constantly
					in the air around you as howling winds lift you from the
					ground.
				</p>
				<ul>
					<li>
						Any creature that enters your kinetic aura or ends its
						turn there takes 2d12 electricity damage.
					</li>
					<li>
						If you don’t have a fly Speed, you gain a 20-foot fly
						Speed. If you have the Cyclonic Ascent impulse, you
						instead gain that fly Speed and the extra benefits.
					</li>
					<li>
						You gain a +10-foot status bonus to all your Speeds.
					</li>
					<li>
						Your air Elemental Blasts deal an additional 1d12
						electricity damage.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 117,
		name: "Elemental apotheosis",
		action: "",
		tags: ["kineticist"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Nourishing Gate, exactly one kinetic element.
					</span>
					<br />
					You take on an elemental countenance, appearing like a type
					of elemental of your element. You gain any Speeds listed in
					the elemental form spell for your element and gain
					darkvision if you don’t already have it. You also gain the
					elemental trait and the trait of your chosen element.
				</p>
			</>
		),
	},
	{
		id: 118,
		name: "Hell of 1,000,000 needles",
		action: "three_action",
		tags: ["kineticist", "metal", "impulse", "overflow", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					The landscape fills with monumental filaments of metal. The
					needles lance into a cube 30 feet on a side within 500 feet.
					Each creature in the area takes 13d6 piercing damage, with a
					basic Reflex save against your class DC. Each creature that
					fails its save is impaled, becoming immobilized until it
					Escapes (the DC is your class DC); a creature that
					critically failed is also off-guard as long as it’s impaled.
				</p>
				<p>
					The hell remains until the end of your next turn, but you
					can Sustain it up to 1 minute. Using this impulse again ends
					any previous one. The first time you Sustain it each round,
					lightning crisscrosses the needles. Each creature in the
					area takes 3d12 electricity damage with a basic Reflex save
					against your class DC. Squares in the area are hazardous
					terrain. A creature takes 6 piercing damage for every square
					of the area it moves through.
				</p>
				<p>
					<b>Level (20th)</b> The initial damage is 17d6, and the
					                    hazardous terrain damage is 7.
				</p>
			</>
		),
	},
	{
		id: 119,
		name: "Ignite the sun",
		action: "two_action",
		tags: ["kineticist", "fire", "impulse", "light", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					The fires of creation become yours to control. You create a
					miniature sun in a 5-foot burst within 500 feet. A creature
					takes 7d6 fire damage any time it’s in the miniature sun,
					with a basic Reflex save against your class DC. A creature
					can take this damage no more than once per round. The sun
					sheds bright light in a 500-foot emanation (and dim light
					for another 500 feet); this is sunlight for creatures with a
					particular vulnerability to sunlight.
				</p>
				<p>
					The sun lasts until the end of your next turn, but you can
					Sustain it up to 1 minute. The first time you Sustain the
					impulse each round, you can choose to increase the size of
					the sun’s burst by 5 feet, then make it Fly up to 30 feet.
					The sun can move through creatures, damaging them as
					described above.
				</p>
				<p>
					The sun continually channels fire into you and your allies.
					You and each of your allies within the sun’s light deal an
					additional 1d6 fire damage with all Strikes, spells that
					deal fire damage, and impulses that deal fire damage (except
					for Ignite the Sun itself). These aren’t cumulative with
					multiple suns.
				</p>
			</>
		),
	},
	{
		id: 120,
		name: "Infinite expanse of bluest heaven",
		action: "three_action",
		tags: ["kineticist", "air", "illusion", "impulse", "mental", "overflow", "primal", "visual"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					An illusion of a limitless expanse with an impossibly blue
					sky makes all within feel the sensation of falling...
					forever. The vision appears in a 20-foot burst within 100
					feet. The illusion lasts until the end of your next turn,
					but you can Sustain it up to 1 minute. Using this impulse
					again ends any previous one.
				</p>
				<p>
					Each creature in the area or that later enters it must
					attempt a Will save against your class DC. Creatures with
					the air trait are immune. Any effect of the illusion ends
					for a creature as soon as it leaves the illusion’s area or
					the impulse ends, and the creature then becomes temporarily
					immune for 1 hour.
				</p>
				<p>
					<b>Critical Success</b> The creature is unaffected.
				</p>
				<p>
					<b>Success</b> The creature is off-guard.
				</p>
				<p>
					<b>Failure</b> The creature is off-guard. It is fleeing from
					               the illusory sky but is also disoriented; any
					               time it uses an action to attempt to flee, it
					               must succeed at a DC 11 flat check or flee to
					               a space that’s still within the illusion. The
					               GM determines where the creatures ends up,
					               but the creature can’t stay stationary if
					               it’s able to move.
				</p>
			</>
		),
	},
	{
		id: 121,
		name: "Rebirth in living stone",
		action: "one_action",
		tags: ["kineticist", "earth", "impulse", "polymorph", "primal", "stance"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Rock overflows from within you to consume your form before
					cracking open to reveal your body transformed into living
					stone. You gain 40 temporary Hit Points. You’re immune to
					critical hits and precision damage. You can’t be pushed,
					pulled, or tripped while you’re standing on earth or stone.
					Your earth Elemental Blasts deal an additional 1d10 damage
					of their normal type. These benefits last until the end of
					your next turn, but you can Sustain them up to 1 minute.
					After you gain temporary Hit Points from this impulse, you
					can’t do so again for 10 minutes.
				</p>
				<p>
					<b>Level (20th)</b> You gain 50 temporary Hit Points.
				</p>
			</>
		),
	},
	{
		id: 122,
		name: "Ride the tsunami",
		action: "three_action",
		tags: ["kineticist", "water", "impulse", "overflow", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Booming, crashing walls of water, enough to fill a harbor,
					smash out ahead of you, overwhelming all in their path. The
					waves move forward in your choice of a 60-foot cone or
					120-foot line. If you’re in water, you can increase these
					waves to a 90-foot cone or 180-foot line. Each creature in
					the area takes 10d10 bludgeoning damage with a basic Reflex
					save against your class DC. A creature that fails its save
					is pushed 20 feet (or 40 feet on a critical failure). Any
					unattended object of 1 Bulk or less in the area is pushed to
					the far edge of the area. The sheer mass of water
					extinguishes all non-magical flames in the area.
				</p>
				<p>
					As the wave crashes down, you can catch it to your
					destination. After the impulse deals damage, you can Swim in
					a straight line to any point in its area before the water
					disappears.
				</p>
			</>
		),
	},
	{
		id: 123,
		name: "Rouse the forest's fury",
		action: "three_action",
		tags: ["kineticist", "wood", "impulse", "overflow", "plant", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					Terrifying trees attack your enemies. Three Large trees
					appear in unoccupied spaces within 500 feet, at least 15
					feet from one another. Each tree has AC 40, Fortitude +33,
					Reflex +24, Will +30, and 200 HP. The trees can flank, but
					are unable to move. When the trees appear, each makes a
					Strike; they share a multiple attack penalty. The tree’s
					melee Strike is a branch that has reach 10 feet; on a hit,
					the target is grabbed by the tree (Escape DC 40). The ranged
					Strike is a hurled fruit, gourd, seed, or stone with a range
					increment of 60 feet. Either Strike has a +30 attack
					modifier and deals 4d10+9 bludgeoning damage.
				</p>
				<p>
					The trees last until the end of your next turn, and you can
					Sustain the impulse. Each time you Sustain the impulse, you
					can have one tree make a Strike.
				</p>
				<p>
					<b>Level (20th)</b> The attack modifier is +32 and the
					                    Strike damage is 5d10+9.
				</p>
			</>
		),
	},
	{
		id: 124,
		name: "The shattered mountain weeps",
		action: "three_action",
		tags: ["kineticist", "earth", "impulse", "overflow", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					A massive sphere of rock explodes, unleashing a cataclysm of
					falling debris and deadly shrapnel. Its destruction falls in
					a 20-foot burst within 120 feet. Creatures in the area take
					9d10 bludgeoning damage with a basic Fortitude save against
					your class DC. Those who fail are knocked prone. For the
					next minute, rocks continue to fall, making the area
					difficult terrain and dealing 3d10 bludgeoning damage to any
					creature that ends its turn in the area. If you use this
					impulse again, any previous one ends.
				</p>
				<p>
					<b>Level (20th)</b> The initial damage is 10d10, and the
					                    area damage is 4d10.
				</p>
			</>
		),
	},
	{
		id: 125,
		name: "Turn the wheel of seasons",
		action: "three_action",
		tags: ["kineticist", "wood", "impulse", "overflow", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					The seasons shift rapidly. This impulse affects a cube 100
					feet in each dimension within 1,000 feet. Choose the
					starting season. The impulse lasts for 4 rounds, proceeding
					to the next season at the start of each of your turns. You
					can’t use this impulse again until the previous one ends.
				</p>
				<p>
					<b>Spring</b> Each ally in the cube gains 20 temporary HP
					              that last until the start of your next turn.
					              Any dying ally rolls a recovery check, but
					              can’t get worse than a success.
				</p>
				<p>
					<b>Summer</b> (light) Each enemy in the area is exposed to
					              sunlight and must attempt a Reflex save
					              against your class DC. It’s unaffected on a
					              critical success, dazed until the start of
					              your next turn on a success, or blinded until
					              the start of your next turn on a failure.
				</p>
				<p>
					<b>Autumn</b> Leaves and rain make everything in the area
					              concealed until the start of your next turn,
					              and a cold wind makes each enemy in the area
					              slowed 1 until the start of your next turn
					              unless it succeeds at a Fortitude save against
					              your class DC.
				</p>
				<p>
					<b>Winter</b> Each enemy in the aura takes 5d6 cold damage
					              with a basic Reflex save against your class
					              DC. A creature that fails its save also takes
					              2d6 persistent cold damage.
				</p>
			</>
		),
	},
	{
		id: 126,
		name: "Usurp the lunar reins",
		action: "three_action",
		tags: ["kineticist", "water", "impulse", "overflow", "primal"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					The moon has always been connected to the tides, and now you
					can grasp that connection. You can create massive amounts of
					water and control these tides, subverting even the moon’s
					sovereignty over the oceans and seas. Choose an area 50 feet
					long by 50 feet wide within 500 feet, and choose two
					different effects from the options provided below. The
					effects take place in the listed order.
				</p>
				<ul>
					<li>
						<b>Flood</b> You create a pool of pure, clean water in
						             the area, which coalesces from ambient
						             moisture. This water must be created on a
						             surface—not in air—and flows normally.
					</li>
					<li>
						<b>Control</b> You tug on the moon to raise or lower the
						               level of bodies of water in the area by
						               10 feet. If you control a portion of a
						               larger body of water, the water then
						               equalizes normally.
					</li>
					<li>
						<b>Modulate</b> With a wave of your hand, you create or
						                smooth ripples, making all bodies of
						                water in the area either calm or
						                turbulent. Making it calm turns
						                difficult terrain or greater difficult
						                terrain to calm water, and making it
						                turbulent turns calm water into
						                difficult terrain.
					</li>
					<li>
						<b>Slow</b> By exercising your rightful control over all
						            water, each creature with the water trait in
						            the area must succeed at a Fortitude save
						            against your class DC or be slowed 1 (or
						            slowed 2 on a critical failure).
					</li>
				</ul>
				<p>
					Flood and control are permanent and non-magical. Modulate
					and slow last until the end of your next turn, but you can
					Sustain the impulse to continue them.
				</p>
			</>
		),
	},
	{
		id: 127,
		name: "Kinetic pinnacle",
		action: "",
		tags: ["kineticist"],
		level: 20,
		feat: "Feat 20",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					No one can match the pace at which elements flow from you.
					You’re permanently quickened. You can use your extra action
					only to Channel Elements, use a 1-action Elemental Blast, or
					use a 1-action stance impulse.
				</p>
			</>
		),
	},
	{
		id: 128,
		name: "Omnikinesis",
		action: "one_action",
		tags: ["kineticist"],
		level: 20,
		feat: "Feat 20",
		description: (
			<>
				<p>
					<i>Rage of elements</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> reflow elements.
					</span>
					<br />
					You can realign your kinetic gate with a thought. Replace
					one of your impulse feats using the same process as reflow
					elements. You can replace only one, even if you have double
					reflow.
				</p>
			</>
		),
	},
];
