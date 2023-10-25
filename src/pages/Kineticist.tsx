import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat } from "../middleware/CutsomTypes";
import { InvestigatorFeats } from "../middleware/InvestigatorFeats";

const KineticistPage: React.ComponentType = () => {
	const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
		InvestigatorFeats,
	);
	const filterBySearch = (e: React.ChangeEvent) => {
		// Input value
		const query = (e.target as HTMLInputElement).value;
		// Filtered list
		let updatedList = [...InvestigatorFeats];
		// Update list with elements containing the query
		updatedList = updatedList.filter((feats) => {
			return feats.name.indexOf(query.toLowerCase()) !== -1;
		});
		// Trigger render with updated list
		setFilteredList(updatedList);
	};

	return (
		<div className="class">
			<header>
				<h1>Kineticist</h1>
				<i>Rage of Elements</i>
				<p className="introduction">
					The power of the elements flows from within you. Roaring
					fire, pure water, fleeting air, steadfast earth, twisting
					wood, slicing metal. A kinetic gate inextricably tied to
					your body channels power directly from the elemental planes,
					causing elements to leap to your hand, whirl around your
					body, and blast foes at your whim. As your connection to the
					planes grows, you attain true mastery over your chosen
					elements.
				</p>
				<figure>
					<img
						src={require("../assets/img/kineticist_icon.png")}
						alt="kineticist icon"
					/>
				</figure>
			</header>
			<div className="featured">
				<div className="column">
					<h2>Key Ability</h2>
					<b>Constitution</b>
					<p>
						At 1st level, your class gives you an attribute boost to
						Constitution.
					</p>
				</div>
				<div className="column">
					<h2>Hit points</h2>
					<b>8 plus your Constitution Modifier</b>
					<p>
						You increase your maximum number of HP by this number at
						1st level and every level thereafter.
					</p>
				</div>
			</div>

			<h2 id="initial-proficiencies">Initial Proficiencies</h2>
			<p>
				At 1st level, you gain the listed proficiency ranks in the
				following statistics. You’re untrained in anything not listed
				unless you gain a better proficiency rank in some other way.
			</p>

			<div className="featured-two">
				<h2>Perception</h2>
				<p>Trained in Perception</p>
				<h2>Saving Throws</h2>
				<ul>
					<li>Expert in Fortitude</li>
					<li>Expert in Reflex</li>
					<li>Trained in Will</li>
				</ul>
				<h2>Skills</h2>
				<ul>
					<li>Trained in Nature</li>
					<li>
						Trained in a number of additional skills equal to 3 plus
						your Intelligence modifier
					</li>
				</ul>
				<h2>Attacks</h2>
				<ul>
					<li>Trained in simple weapons</li>
					<li>Trained in martial weapons</li>
				</ul>
				<h2>Defences</h2>
				<ul>
					<li>Trained in light armor</li>
					<li>Trained in unarmored defense</li>
				</ul>
				<h2>Class DC</h2>
				<p>Trained in kineticist class DC</p>
			</div>

			<div className="columns">
				<div className="column-actions">
					<h2>During combat encounters...</h2>
					<p>
						Elemental magic surges from you throughout the fight.
						Without any restrictions on how often you can use your
						abilities, you become a reliable slinger of magic. You
						can develop powers you can use in a variety of
						situations... or you can choose just a few favorite
						attacks you use repeatedly.
					</p>
				</div>
				<div className="column-actions">
					<h2>During social encounters...</h2>
					<p>
						The elements you channel might guide or even influence
						how you carry yourself in social situations. You might
						leap to anger like a raging fire, stand your ground as
						solid as a mountain, keep your motives elusive as the
						wind, go with the flow like water, make cutting remarks
						sharp as metal, or exhibit the slow patience of the
						forest.
					</p>
				</div>
				<div className="column-actions">
					<h2>While exploring...</h2>
					<p>
						Your innate connection to the elements hones your
						awareness of the natural world. In an environment full
						of an element you can channel, you’re unparalleled, with
						the ability to repeatedly manipulate the element around
						you.
					</p>
				</div>
				<div className="column-actions">
					<h2>In downtime...</h2>
					<p>
						You could commune with the elements or practice your
						control over your kineticist powers. Through retraining,
						you can realign the flow of your kinetic gate to perfect
						different manifestations of your element.
					</p>
				</div>
			</div>

			<h2>You might...</h2>
			<ul>
				<li>
					Have a conflicted relationship with the kinetic gate that
					fuels your kineticist magic, possibly because it manifested
					at a traumatic point in your past.
				</li>
				<li>
					Struggle with controlling and understanding your elemental
					powers.
				</li>
				<li>
					Form a kinship with elemental creatures or feel at home in
					areas strong with your element.
				</li>
			</ul>
			<h2>Others probably...</h2>
			<ul>
				<li>
					Find your ability to keep calling on more and more elemental
					power truly astonishing.
				</li>
				<li>
					Defer to you in all matters related to your element, from
					the smallest tasks to the politics of the elemental planes.
				</li>
				<li>
					Worry you’ll consume yourself with elemental magic or lose
					control of its primal forces.
				</li>
			</ul>

			<h2>Class Features</h2>
			<p>
				You gain these abilities as a kineticist. Abilities gained at
				higher levels list the level at which you gain them next to the
				features’ names.
			</p>

			<table>
				<thead>
				<tr>
					<th>Level</th>
					<th>Class Features</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1</td>
					<td>
						<a href="#ancestry-and-background">Ancestry and
						                                   background</a>,{" "}
						<a href="#initial-proficiencies">initial
						                                 proficiencies</a>,{" "}
						<a href="#attribute-boosts">attribute boosts</a>,{" "}
						<a href="#kinetic-gate">kinetic gate</a>,{" "}
						<a href="#kinetic-aura">kinetic aura</a>,{" "}
						<a href="#impulses">impulses (Elemental Blast, Base
						                    Kinesis)</a>,{" "}
						<a href="#inventor-kineticist">kineticist feat</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#extract-element">extract element</a>,{" "}
						<a href="#will-expertise">will expertise</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
						<a href="#attribute-boosts">Attribute boosts</a>,{" "}
						<a href="#ancestry-feat">ancestry feat</a>,{" "}
						<a href="#gates-threshold">gate’s threshold</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>7</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#kinetic-durability">kinetic
						                              durability</a>,{" "}
						<a href="#kinetic-expertises">kinetic expertise</a>
					</td>
				</tr>
				<tr>
					<td>8</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>9</td>
					<td>
						<a href="#ancestry-feat">Ancestry feat</a>,{" "}
						<a href="#gates-threshold">gate’s threshold</a>,{" "}
						<a href="#perception-expertise">perception
						                                expertise</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>10</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#kineticist-feat">kineticist feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>11</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#kinetic-quickness">kinetic quickness</a>,{" "}
						<a href="#reflow-elements">reflow elements</a>,{" "}
						<a href="#weapon-expertise">weapon expertise</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>12</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>13</td>
					<td>
						<a href="#ancestry-feat">Ancestry feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#gates-threshold,">gate’s threshold,</a>,{" "}
						<a href="#light-armor-expertise">light armor
						                                 expertise</a>,{" "}
						<a href="#weapon-specialization">weapon
						                                 specialization</a>
					</td>
				</tr>
				<tr>
					<td>14</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>15</td>
					<td>
						<a href="#attribute-boost">Attribute boost</a>,{" "}
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#greater-kinetic-durability">greater kinetic
						                                      durability</a>,{" "}
						<a href="#kinetic-mastery">kinetic mastery</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>16</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>17</td>
					<td>
						<a href="#ancestry-feat">Ancestry feat</a>,{" "}
						<a href="#double-reflow">double reflow</a>,{" "}
						<a href="#gates-threshold">gate’s threshold</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>18</td>
					<td>
						<a href="#kineticist-feat">Kineticist feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>19</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#final-gate">final gate</a>,{" "}
						<a href="#kinetic-legend">kinetic legend</a>,{" "}
						<a href="#light-armor-mastery">light armor
						                               mastery</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>20</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#kineticist-feat">kineticist feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				</tbody>
			</table>

			<h3 id="ancestry-and-background">Ancestry and background</h3>
			<p>
				In addition to what you get from your class at 1st level, you
				have the benefits of your selected ancestry and background.
			</p>

			<h3 id="initial-proficiencies">Initial proficiencies</h3>
			<p>
				At 1st level, you gain a number of proficiencies that represent
				your basic training. These are noted at the start of this class.
			</p>

			<h3 id="attribute-boosts">Attribute boosts</h3>
			<p>
				In addition to what you get from your class at 1st level, you
				have four free boosts to different attribute modifiers.
			</p>
			<p>
				At 5th level and every 5 levels thereafter, you get four free
				boosts to different attribute modifiers. If an attribute
				modifier is already +4 or higher, it takes two boosts to
				increase it; you get a partial boost, and you must boost that
				attribute again at a later level to increase it by 1.

			</p>

			<h3 id="kinetic-gate">Kinetic gate</h3>
			<p>
				As a kineticist, you’ve awakened or opened a kinetic gate, a
				supernatural conduit within your body that can channel elemental
				forces straight from the elemental planes. You can choose either
				a single gate (one element) or dual gate (two elements) at 1st
				level.
			</p>
			<p>
				When selecting an element for your kinetic gate, you can pick
				from six elements—air, earth, fire, metal, water, and wood.
				Elements you can channel are referred to as your kinetic
				elements. Your kinetic elements function even in environments
				where they normally wouldn’t. For example, you could use fire
				actions underwater even though that’s normally not possible, and
				you could create air in a vacuum.
			</p>
			<p>
				Your kinetic gate gives you impulse feats, magical actions that
				let you shape and control your elements in awesome ways. You can
				select more impulse feats using your kineticist class feats, as
				described under Impulses. At higher levels, the gate’s threshold
				class feature gives you more impulse feats and lets you choose
				whether to improve with one element or access new kinetic
				elements.
			</p>

			<BaseAccordion
				title="Single gate"
				number={1}
				text={
					<>
						<p>
							Your kinetic gate links to a single elemental plane,
							starting you with a single element but giving you
							greater power with it. Choose one element to be your
							kinetic element, and select two 1st-level impulse
							feats that have that element’s trait.
						</p>
						<p>
							In addition, you gain an impulse junction, a benefit
							that occurs when you use an impulse of the chosen
							element that takes 2 actions or more. This happens
							before the other effects of the impulse, unless
							noted otherwise. You can gain only one impulse
							junction per round; they are described in full
							below.
						</p>
						<p>
							<b>Air</b> Before or after the other effects of the
							           impulse, you can either Stride up to half
							           your Speed or Step. If you have a fly
							           Speed, you can Fly up to half your fly
							           Speed instead.
						</p>
						<p>
							<b>Earth</b> Fragments of stone float around you,
							             granting you a +1 circumstance bonus to
							             AC until the start of your next turn.
						</p>
						<p>
							<b>Fire</b> Increase the damage die size of fire
							            damage dealt by the impulse by one step.
						</p>
						<p>
							<b>Metal</b> Choose acid, electricity, or piercing.
							             Until the start of your next turn, each
							             time a creature touches you or damages
							             you with an unarmed melee attack or
							             non-reach melee weapon, it takes damage
							             of the chosen type equal to half your
							             level (minimum 1 damage).
						</p>
						<p>
							<b>Water</b> After the impulse’s other effects, you
							             can move one creature targeted by the
							             impulse or in its area 5 feet in any
							             direction, or 10 feet if it’s in a body
							             of water. This can’t move the creature
							             into the air. You can choose only a
							             creature that’s willing to be moved,
							             that failed its save against the
							             impulse, or that you succeeded at an
							             impulse attack roll against.
						</p>
						<p>
							<b>Wood</b> You gain temporary Hit Points equal to
							            your level that last until the start of
							            your next turn.
						</p>
					</>
				}
			/>

			<BaseAccordion
				title="Dual gate"
				number={2}
				text={
					<>
						<p>
							Your kinetic gate is a harmonious conduit between
							two planes, allowing you to combine their elements
							to give you a versatile set of abilities. Select two
							elements to be your kinetic elements. Then, select
							two 1st-level impulse feats, one with the trait of
							the first element and one with the trait of the
							other.
						</p>
					</>
				}
			/>

			<h3 id="kinetic-aura">Kinetic aura</h3>
			<p>
				Through your kinetic gate, elements flow from an elemental plane
				to orbit your person. The form and appearance of this kinetic
				aura are unique to you. Examples include a chaotic wind orbiting
				the body, fragments of floating gravel, colorful wicks of flame,
				stars of raw metal always changing shape, floating snowflakes,
				or splinters dancing in the air. If you can channel more than
				one element, pieces of all your kinetic elements appear in the
				aura.
			</p>
			<p>
				You have the Channel Elements action, which lets you activate
				your kinetic aura.
			</p>

			<Spell name="Channel elements" action="one_action"
			       tags={["aura", "kineticist", "orimal"]} description={(
				<>
					<p>
						<span className="frequency">
							<b>Requirements</b> Your kinetic gate isn’t active.
						</span>
						<br />
						You tap into your kinetic gate to make elements flow
						around you. Your kinetic aura activates, and as a part
						of this action, you can use a 1-action Elemental Blast
						or a 1-action stance impulse. Your kinetic aura is a
						10-foot emanation where pieces of your kinetic element
						(or all your kinetic elements, if you can channel more
						than one) flow around you. The kinetic aura can’t damage
						anything or affect the environment around you unless
						another ability allows it to. Channel Elements has the
						traits of all your kinetic elements.
					</p>
					<p>
						Your kinetic aura automatically deactivates if you’re
						knocked out, you use an impulse with the overflow trait,
						or you Dismiss the aura. Though you can’t use new
						impulses while your kinetic aura is deactivated, ones
						you already used remain, and you can still Sustain any
						that can be sustained. Stance impulses are linked to
						your kinetic aura and end when the aura deactivates.
					</p>
				</>
			)} />

			<h3 id="impulses">Impulses</h3>
			<p>
				An impulse is a special type of magical action available to
				kineticists, allowing them to wield or shape their element into
				diverse and powerful forms. To wield an element, you must have
				your kinetic aura active and have a free hand, as described in
				the impulse trait (see the Key Terms sidebar). You automatically
				gain the Elemental Blast and Base Kinesis impulses, and your
				kinetic gate selection gives you additional impulse feats. You
				can select more impulse feats with kineticist class feats, and
				at higher levels, you’ll automatically get more with the gate’s
				threshold class feature. You can select an impulse feat only if
				it matches one of your kinetic elements.
			</p>
			<p>
				Impulses are magical, and though they aren’t spells, some things
				that affect spells also affect impulses. Abilities that restrict
				you from casting spells (such as being polymorphed into a battle
				form) or protect against spells (such as a spell that protects
				against other spells or a creature’s bonus to saves against
				spells) also apply to impulses.
			</p>

			<h3>Key Terms</h3>
			<p>
				The following new key traits appear in many kineticist class
				features and feats.
			</p>
			<p>
				<b>Composite:</b> A composite impulse combines multiple
				                  elements. You can gain an impulse with the
				                  composite trait only if your kinetic elements
				                  include all the elements listed in the
				                  impulse’s traits.
			</p>
			<p>
				<b>Impulse:</b> The primary magical actions kineticists use are
				                called impulses. You can use an impulse only if
				                your kinetic aura is active and channeling that
				                element, and only if you have a hand free to
				                shape the elemental flow. The impulse trait
				                means the action has the concentrate trait
				                unless another ability changes this. If an
				                impulse allows you to choose an element, you can
				                choose any element you’re channeling, and the
				                impulse gains that element’s trait.
			</p>
			<p>
				<b>Infusion:</b> Actions with the infusion trait tweak your
				                 kineticist impulses. You must use an infusion
				                 action directly before the impulse action you
				                 want to alter. If you use any action (including
				                 free actions and reactions) other than an
				                 impulse action directly after, you waste the
				                 benefits of the infusion action. Any additional
				                 effects added by an infusion action are part of
				                 the impulse’s effect, not of the infusion
				                 action itself.
			</p>
			<p>
				<b>Overflow:</b> Powerful impulses temporarily overdraw the
				                 energy of your kinetic gate. When you use an
				                 impulse that has the overflow trait, your
				                 kinetic aura deactivates until you revitalize
				                 it (typically with Channel Elements).
				                 Extinguishing your element this severely is
				                 taxing, and consequently, you can use only one
				                 overflow impulse per round, even if you
				                 reactivate your kinetic gate.
			</p>
			<p>
				<b>Stance:</b> A stance is a general combat strategy that you
				               enter by using an action with the stance trait
				               and that you remain in for some time. A stance
				               lasts until you get knocked out, until its
				               requirements (if any) are violated, until the
				               encounter ends, or until you enter a new stance,
				               whichever comes first. After you use an action
				               with the stance trait, you can’t use another one
				               for 1 round. You can enter or be in a stance only
				               in encounter mode.
			</p>

			<div className="flex">
				<div className="flex-column">
					<h4>Impulse levels</h4>
					<p>
						Any impulse you use is the same level you are. For
						instance, if you’re 5th level, your Elemental Blast
						would be 5th level (and its counteract rank would be 3rd
						rank), even though you gained the action at 1st level.
					</p>
					<p>
						Similar to spells, many impulses get more powerful as
						you increase in level. In these cases, the impulse ends
						with one or more “Level” entries. This either lists the
						levels at which the impulse gets an upgrade or has an
						entry with a plus sign that describes a benefit that
						increases on a regular basis. For instance, a 1st-level
						impulse with a “Level (+4)” entry would get stronger at
						5th, 9th, 13th, and 17th levels.
					</p>
				</div>

				<figure>
					<img width={200}
					     src={require("../assets/img/kineticist_01.webp")}
					     alt="kineticist example"
					/>
				</figure>
			</div>

			<h4>Impulse attacks and DCs</h4>
			<p>
				An impulse that requires a saving throw uses your
				kineticist class DC. Some of your impulses require you
				to attempt an impulse attack roll to see how effective
				they are. Your impulse attack roll uses the same
				proficiency and attribute modifier as your kineticist
				class DC. Like a spell attack modifier, your impulse
				attack modifier uses the following formula: d20 roll +
				attribute modifier + proficiency bonus + other bonuses +
				penalties. This means your impulse attack roll is
				typically 10 lower than your class DC. The drained
				condition can reduce your impulse attack rolls and class
				DCs. You can acquire a gate attenuator to gain a bonus
				to your impulse attack modifier.
			</p>

			<h4>Elemental blast</h4>
			<p>
				The Elemental Blast impulse is a simple expression of
				your power, allowing you to attack with the pure matter
				of your kinetic element. Though each element has its own
				strengths and weaknesses, the basic principles to using
				them are the same. You can customize the appearance of
				your Elemental Blast and can even choose a different
				form each time you use the impulse.
			</p>

			<Spell name="elemental blast" action="one_action"
			       tags={["attack", "impulse", "kineticist", "primal"]}
			       description={(
				       <>
					       <p>With a wave of your hand, you collect elemental
					          matter from your aura and swing or hurl it. Choose
					          one of your kinetic elements and a damage type
					          listed for that element, then make a melee or
					          ranged impulse attack against the AC of one
					          creature. Add your Strength modifier to the damage
					          roll for a melee Elemental Blast. If you make a
					          2-action Elemental Blast, you gain a status bonus
					          to the damage roll equal to your Constitution
					          modifier.</p>
					       <p>
						       The element determines the damage die, damage
						       type, and range (for a ranged blast). A damage
						       type other than a physical damage type adds its
						       trait to the blast.
					       </p>
					       <ul>
						       <li>
							       <b>Air</b> 1d6 electricity or slashing, 60
							                  feet
						       </li>
						       <li>
							       <b>Earth</b> 1d8 bludgeoning or piercing, 30
							                    feet
						       </li>
						       <li>
							       <b>Fire</b> 1d6 fire, range 60 feet
						       </li>
						       <li>
							       <b>Metal</b> 1d8 piercing or slashing, 30
							                    feet
						       </li>
						       <li>
							       <b>Water</b> 1d8 bludgeoning or cold, 30 feet
						       </li>
						       <li>
							       <b>Wood</b> 1d8 bludgeoning or vitality, 30
							                   feet
						       </li>
					       </ul>
					       <p>
						       <b>Critical Success</b> The target takes double
						                               damage.
					       </p>
					       <p>
						       <b>Success</b> The target takes full damage.
					       </p>
					       <p>
						       <b>Level (+4)</b> The damage increases by one
						                         die.
					       </p>
				       </>
			       )} />

			<h4>Base kinesis</h4>
			<p>The Base Kinesis impulse lets you perform simple alterations to
			   an element.</p>
			<Spell name="base kinesis" action="two_action"
			       tags={["impulse", "kinecist", "primal"]} description={(
				<>
					<p>
						It’s trivial for you to create some of your element or
						alter a portion of it that already exists. Choose one of
						your kinetic elements to affect. This impulse has a
						range of 30 feet, and the Bulk of the target must be
						negligible or light. The GM decides what Bulk the
						element is. You can’t affect an element that’s magical,
						secured in place (like a stone mortared in a wall), or
						attended by a creature unwilling to let you.
					</p>
					<p>
						Choose one of the following options, though the GM might
						allow you to make similar small alterations. Base
						Kinesis can’t deal damage or cause conditions unless
						otherwise noted.
					</p>
					<ul>
						<li>
							<b>Generate</b> You bring an ordinary, non-magical
							                piece of the chosen element from its
							                elemental plane. The element can be
							                used for any of its normal uses. For
							                example, air can be breathed by an
							                air-breathing creature, and fire
							                casts light and can ignite flammable
							                substances.
						</li>
						<li>
							<b>Move</b> Move an existing piece of the element up
							            to 20 feet in any direction. If you
							            bring it into your space, you can catch
							            it in an open hand. You can Sustain the
							            impulse to keep moving the element.
						</li>
						<li>
							<b>Suppress</b> You destroy an existing piece of
							                element, such as snuffing out a
							                flame or evaporating water from a
							                cup. This affects only natural forms
							                of the element, not durable, crafted
							                goods like a stone statue, metal
							                lock, or wooden door.
						</li>
					</ul>
					<p>
						<b>Level (+4)</b> The range increases by 15 feet, and
						                  the maximum Bulk increases by 1
						                  (allowing Bulk 1 at 5th level).
					</p>
				</>
			)} />

			<h3 id="kineticist-feat">Kineticist Feats</h3>
			<p>
				At 1st level and every even-numbered level, you gain a
				kineticist class feat.
			</p>

			<h3 id="skill-feat">Skill Feats</h3>
			<p>
				At 2nd level and every 2 levels thereafter, you gain a skill
				feat. You must be trained or better in the corresponding skill
				to select a skill feat.
			</p>

			<h3 id="extract-element">Extract element</h3>
			<p>
				Creatures with a strong tie to your element might be troublesome
				for you to deal with, at least until you’ve learned to turn
				their elemental nature to your advantage. You gain the Extract
				Element action.
			</p>
			<Spell name="extract element" action="one_action"
			       tags={["impulse", "kineticist", "primal"]} description={(
				<>
					<p>
						You extract elemental matter from a creature’s body to
						weaken it and take its power for your own. Target a
						creature within 30 feet that has a trait matching one of
						your kinetic elements or is made of one of your kinetic
						elements. The target takes 2d4 damage (with no damage
						type) and becomes susceptible to your impulses,
						depending on its Fortitude save against your class DC.
					</p>
					<p>
						<b>Critical Success</b> The creature is unaffected.
					</p>
					<p>
						<b>Success</b> The creature takes half damage, and you
						               add some of its elemental matter to your
						               kinetic aura. Your impulses bypass any
						               immunity the creature has to their
						               elemental trait or traits, and the target
						               takes a –1 circumstance penalty to its
						               saves and AC against your impulses. If
						               the target normally has a resistance that
						               would apply to damage from one of your
						               impulses, ignore that resistance; if it
						               normally would be immune to that damage
						               type, it instead has resistance equal to
						               its level to damage from the impulse. You
						               can’t target a creature with Extract
						               Element if elemental matter you extracted
						               from it is already in your kinetic aura.
						               These effects last for 5 minutes or until
						               your kinetic aura ends, whichever comes
						               first.
					</p>
					<p>
						<b>Failure</b> As success, but the creature takes full
						               damage.
					</p>
					<p>
						<b>Critical Failure</b> As failure, but the creature
						                        takes double damage.
					</p>
					<p>
						<b>Level (+2)</b> The damage increases by 1d4.
					</p>
				</>
			)} />

			<div className="featured-two">
				<h4>Special rules</h4>
				<p>
					Some rules don’t come up that often but can be vital to
					understand when they do.
				</p>
				<p>
					<b>Made of an Element:</b> Some kineticist abilities work on
					                           creatures made of an element. A
					                           creature made of rock, sand, or
					                           dirt is made of earth, but a
					                           creature wearing metal armor
					                           wouldn’t be considered a metal
					                           creature. If it’s unclear whether
					                           a creature is made of an element,
					                           the GM decides.
				</p>
				<p>
					<b>Overlapping Kinetic Auras:</b> A creature that’s in
					                                  multiple kinetic auras at
					                                  the same time is subject
					                                  to the special effects of
					                                  all of them. As normal for
					                                  duplicate effects, a
					                                  creature can’t be affected
					                                  by multiple copies of the
					                                  same effect. For instance,
					                                  if an enemy were in two
					                                  fire kineticists’ auras,
					                                  and both kineticists had
					                                  the fire kinetic aura gate
					                                  junction, the creature
					                                  would gain only the higher
					                                  weakness from the two
					                                  auras.
				</p>
				<p>
					<b>Precious Materials:</b> Elements you create (using Base
					                           Kinesis to generate an element,
					                           for example) must typically be
					                           ordinary materials of negligible
					                           value. You can’t create precious
					                           or valuable materials like
					                           silver, gemstones, or duskwood
					                           unless otherwise noted.
				</p>
			</div>

			<h3 id="general-feat">General Feats</h3>
			<p>
				At 3rd level and every 4 levels thereafter, you gain a general
				feat.
			</p>

			<h3 id="skill-increase">Skill Increases</h3>
			<p>
				At 3rd level and every 2 levels thereafter, you gain a skill
				increase. You can use this increase to either become trained in
				one skill you’re untrained in or become an expert in one skill
				in which you’re already trained.
			</p>
			<p>
				At 7th level, you can use skill increases to become a master in
				a skill in which you’re already an expert, and at 15th level,
				you can use them to become legendary in a skill in which you’re
				already a master.
			</p>

			<h3 id="ancestry-feat">Ancestry Feats</h3>
			<p>
				In addition to the ancestry feat you started with, you gain an
				ancestry
				feat at 5th level and every 4 levels thereafter.
			</p>

			<h3 id="will-expertise">Will expertise</h3>
			<p>
				Your mental defenses grow stronger. Your proficiency rank for
				Will saves increases to expert.
			</p>

			<h3 id="gates-threshold">Gate's threshold</h3>
			<p>
				You reach a new milestone in your odyssey to become in tune with
				your kinetic gate and must decide how to expand the gate’s
				power. At 5th level and every 4 levels thereafter, you choose to
				either expand the portal or fork the path.
			</p>
			<ul>
				<li>
					<b>Expand the Portal:</b> Your gate attunes more precisely
					                          to one of your elements. Gain an
					                          impulse feat of your level or
					                          lower for one of your kinetic
					                          elements; if you have more than
					                          one element, you can choose a
					                          composite impulse. You also gain a
					                          gate junction for one of your
					                          kinetic elements. If you have no
					                          valid options for the
					                          feat—typically because you have
					                          one kinetic element and devoted
					                          your class feats to gaining that
					                          element’s impulses—you can instead
					                          select any kineticist class feat
					                          of your level or lower for which
					                          you meet the prerequisites.
				</li>
				<li>
					<b>Fork the Path:</b> Your gate reaches to another elemental
					                      plane. Add a new element of your
					                      choice to your kinetic elements. Gain
					                      an impulse feat of your level or lower
					                      with the trait of that element. You
					                      can’t select a composite impulse feat
					                      with this feat selection.
				</li>
			</ul>

			<h4>Gate junctions</h4>
			<p>
				When you gain a gate junction, you develop a specialized kinetic
				technique. Choose one benefit from the gate junction table for
				one of your kinetic elements.
			</p>
			<ul>
				<li>
					A <b>critical blast</b> junction happens when you get a
					critical success with an Elemental Blast of the kinetic
					element.
				</li>
				<li>
					An <b>elemental resistance</b> grants you resistance to
					damage while your kinetic aura is active. This resistance is
					equal to your level, and it applies to damage of any listed
					type or that comes from a creature or effect that has any of
					the listed traits. At 17th level, you gain immunity to
					effects with any of the listed traits. This doesn’t make you
					immune to creatures with such a trait. You can voluntarily
					forgo this resistance, immunity, or both if you want an
					effect to work on you.
				</li>
				<li>
					You can choose an <b>impulse junction</b> instead of one of
					the listed junctions. Impulse junctions are listed under
					Single Gate.
				</li>
				<li>
					An <b>aura junction</b> adds an effect to your kinetic aura
					when you Channel Elements.
				</li>
				<li>
					A <b>skill junction</b> makes you trained in the listed
					skill and grants you the listed skill feat. If you were
					already trained in the listed skill, you instead become
					trained in a skill of your choice. While your kinetic aura
					is active, you gain a +1 status bonus to the listed skill;
					the bonus increases to +2 at 10th level and +3 at 17th
					level.
				</li>
			</ul>
			<p>
				You can select each gate junction only once, unless noted
				otherwise, but you can have the same type of junction for
				multiple elements. You can always choose not to use a gate
				junction when it would normally occur. If you have multiple
				junctions that would apply at the same time—such as kinetic aura
				junctions for different elements—you can apply any number of
				them. (Though note that you can use only one impulse junction
				per round.)
			</p>

			<table>
				<thead>
				<tr>
					<th colSpan={2}>Air Gate Junctions</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><b>Critical Blast</b></td>
					<td>Push the target up to 10 feet.</td>
				</tr>
				<tr>
					<td><b>Elemental Resistance</b></td>
					<td> air, electricity</td>
				</tr>
				<tr>
					<td><b>Aura Junction</b></td>
					<td>You and any ally that starts its turn in the aura gets a
					    +10-foot status bonus to land Speed until the end of
					    that turn, and to fly Speed if applicable.
					</td>
				</tr>
				<tr>
					<td><b>Skill Junction</b></td>
					<td>Stealth, Experienced Smuggler.</td>
				</tr>
				</tbody>
			</table>
			<table>
				<thead>
				<tr>
					<th colSpan={2}>Earth Gate Junctions</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><b>Critical Blast</b></td>
					<td>If the target is on the ground, it’s knocked prone; if
					    it isn’t on the ground, it descends up to 20 feet (you
					    choose the distance).
					</td>
				</tr>
				<tr>
					<td><b>Elemental Resistance</b></td>
					<td>earth, poison</td>
				</tr>
				<tr>
					<td><b>Aura Junction</b></td>
					<td>Squares in the aura are difficult terrain for your
					    enemies, but only if moving into the square would make
					    the enemy farther away from you.
					</td>
				</tr>
				<tr>
					<td><b>Skill Junction</b></td>
					<td>Athletics, Hefty Hauler</td>
				</tr>
				</tbody>
			</table>
			<table>
				<thead>
				<tr>
					<th colSpan={2}>Fire Gate Junctions</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><b>Critical Blast</b></td>
					<td>The target takes 1d6 persistent fire damage. You gain an
					    item bonus to this persistent damage equal to your item
					    bonus to impulse attack rolls, such as from a gate
					    attenuator.
					</td>
				</tr>
				<tr>
					<td><b>Elemental Resistance</b></td>
					<td>cold, fire</td>
				</tr>
				<tr>
					<td><b>Aura Junction</b></td>
					<td>Enemies in your kinetic aura gain weakness to fire from
					    your fire impulses. The weakness is equal to half your
					    level (minimum weakness 1).
					</td>
				</tr>
				<tr>
					<td><b>Skill Junction</b></td>
					<td>Intimidation, Intimidating Glare</td>
				</tr>
				</tbody>
			</table>
			<table>
				<thead>
				<tr>
					<th colSpan={2}>Metal Gate Junctions</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><b>Critical Blast</b></td>
					<td>The target takes 1d6 persistent bleed damage; if the
					    creature has the metal trait or is made of metal, it
					    instead takes 1d6 persistent damage with no type from
					    rust. You gain an item bonus to this persistent damage
					    equal to your item bonus to impulse attack rolls, such
					    as from a gate attenuator.
					</td>
				</tr>
				<tr>
					<td><b>Elemental Resistance</b></td>
					<td>electricity, metal</td>
				</tr>
				<tr>
					<td><b>Aura Junction</b></td>
					<td>Your enemies in the aura take a –1 status penalty to
					    attacks with metal objects, and they take a –1 status
					    penalty to AC if they’re wearing metal armor, have the
					    metal trait, or are made of metal.
					</td>
				</tr>
				<tr>
					<td><b>Skill Junction</b></td>
					<td>Crafting, Quick Repair</td>
				</tr>
				</tbody>
			</table>
			<table>
				<thead>
				<tr>
					<th colSpan={2}>Water Gate Junctions</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><b>Critical Blast</b></td>
					<td>The blast deals 2 splash damage per damage die of the
					    blast, with the same damage type.
					</td>
				</tr>
				<tr>
					<td><b>Elemental Resistance</b></td>
					<td>fire, water</td>
				</tr>
				<tr>
					<td><b>Aura Junction</b></td>
					<td>The aura becomes saturated with humidity, and water
					    moves as you please. Non-magical fires in the aura are
					    extinguished, and creatures in the aura gain fire
					    resistance equal to half your level.
					</td>
				</tr>
				<tr>
					<td><b>Skill Junction</b></td>
					<td>Athletics, Underwater Marauder</td>
				</tr>
				</tbody>
			</table>
			<table>
				<thead>
				<tr>
					<th colSpan={2}>Wood Gate Junctions</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><b>Critical Blast</b></td>
					<td> If the target of the critical hit is adjacent to a
					     surface, roots entangle it. The target is immobilized
					     and must spend an Interact action to attempt a DC 10
					     Athletics check to pull itself free. The target doesn’t
					     become stuck if it is incorporeal, is liquid, or could
					     otherwise escape without effort.
					</td>
				</tr>
				<tr>
					<td><b>Elemental Resistance</b></td>
					<td>poison, wood</td>
				</tr>
				<tr>
					<td><b>Aura Junction</b></td>
					<td>
						Life-giving blossoms spring up around you. Any ally that
						begins its turn in the aura gains 1 temporary Hit Point
						that lasts until the start of its next turn. This
						increases to 2 temporary Hit Points if you’re 10th level
						or higher and to 3 temporary Hit Points if you’re 15th
						level or higher.
					</td>
				</tr>
				<tr>
					<td><b>Skill Junction</b></td>
					<td>Survival, Terrain Expertise (forest)</td>
				</tr>
				</tbody>
			</table>

			<h3 id="kinetic-durability">Kinetic durability</h3>
			<p>
				The sustenance of your inner gate counters harm that would come
				to your body. Your proficiency rank for Fortitude saves
				increases to master. When you roll a success on a Fortitude
				save, you get a critical success instead.
			</p>

			<h3 id="kinetic-expertise">Kinetic expertise</h3>
			<p>
				Your kinetic gate grows stronger, making your elements harder to
				resist. The power flowing from you is even harder to resist.
				Your proficiency rank for your kineticist class DC increases to
				expert.
			</p>

			<h3 id="perception-expertise">Perception expertise</h3>
			<p>
				You remain alert to threats around you. Your proficiency rank
				for Perception increases to expert.
			</p>

			<h3 id="kinetic-quickness">Kinetic quickness</h3>
			<p>
				Your body flows with the elegance of a flame, a wave, a breeze.
				Your proficiency rank for Reflex saves increases to master. When
				you roll a success on a Reflex save, you get a critical success
				instead.
			</p>

			<h3 id="reflow-elements">Reflow elements</h3>
			<p>
				You twist one of the impulses you’ve learned into a different
				but still similar magic. When you make your daily preparations,
				you can replace one of your impulse feats with a different
				impulse feat that has the same elemental trait. You can reflow
				only impulse feats that have exactly one elemental trait, not
				composite impulse feats or feats that vary by element. This
				follows the same rules as retraining; you can replace impulse
				feats gained through your class feats or through class features
				that grant you impulse feats.
			</p>

			<h3 id="weapon-expertise">Weapon expertise</h3>
			<p>
				You’ve improved your combat skill. Your proficiency rank for simple weapons and unarmed attacks increase to expert.
			</p>

			<h3 id="light-armor-expertise">Light armor expertise</h3>
			<p>
				You’ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.
			</p>

			<h3 id="weapon-specialization">Weapon specialization</h3>
			<p>
				You’ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you’re an expert. This damage increases to 3 if you’re a master, and 4 if you’re legendary.
			</p>

			<h3 id="greater-kinetic-durability">Greater kinetic durability</h3>
			<p>
				Your gate protects you even more. Your proficiency rank for Fortitude saves increases to legendary. When you roll a critical failure on a Fortitude save, you get a failure instead. When you fail a Fortitude save against an effect that deals damage, you halve the damage you take.
			</p>

			<h3 id="kinetic-master">Kinetic master</h3>
			<p>
				The power flowing from you grows even difficult to resist. Your proficiency rank for your kineticist class DC increases to master.
			</p>

			<h3 id="double-reflow">Double reflow</h3>
			<p>
				Your kinetic gate becomes even more adaptable. When you use reflow elements, you can replace two impulse feats instead of one.
			</p>

			<h3 id="final-gate">Final gate</h3>
			<p>
				Your kinetic gate reaches a perfect form, its power constantly fighting to be released. If your kinetic aura is inactive, you automatically use the first action of your turn to Channel Elements as a free action. You can deliberately suppress the effect. If you’re unable to act, final gate still functions, but you don’t get to use the Elemental Blast or stance impulse you normally do from using Channel Elements.
			</p>

			<h3 id="kinetic-legend">Kinetic legend</h3>
			<p>
				Your elements become almost impossible to resist. Your proficiency rank for your kineticist class DC increases to legendary.
			</p>

			<h3 id="light-armor-mastery">Light armor mastery</h3>
			<p>
				Your skill with light armor improves, increasing your ability to dodge blows. Your proficiency ranks for light armor and unarmored defense increase to master.
			</p>

			<h2>Feats</h2>
			<p>
				At 1st level and every even-numbered level, you gain a kineticist class feat.
			</p>
			<form>
				<label className="visually-hidden" htmlFor="search">
					Search
				</label>
				<input
					name="search"
					type="search"
					className="search"
					placeholder="Search in feats"
					onChange={filterBySearch}
				/>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</form>
			<div className="feat-list">
				{filteredList && Object.keys(filteredList).length === 0 ? (
					<p>No feats to show</p>
				) : (
					 filteredList &&
					 filteredList.map((ClassFeat) => (
						 <Feat
							 key={ClassFeat.id}
							 id={ClassFeat.id}
							 name={ClassFeat.name}
							 action={ClassFeat.action}
							 tags={ClassFeat.tags}
							 level={ClassFeat.level}
							 feat={ClassFeat.feat}
							 description={ClassFeat.description}
						 />
					 ))
				 )}
			</div>
		</div>
	);
};

export default KineticistPage;
