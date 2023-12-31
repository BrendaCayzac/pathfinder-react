import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat, FocusSpell } from "../middleware/CutsomTypes";
import { magusFeats } from "../middleware/MagusFeats";
import { magusFocusSpells } from "../middleware/MagusFocusSpells";

const MagusPage: React.ComponentType = () => {
	const [filteredList, setFilteredList] = useState<Array<ClassFeat> | null>(
		magusFeats,
	);

	const [filteredSpellList, setFilteredSpellList] =
		useState<Array<FocusSpell> | null>(magusFocusSpells);

	const filterBySearch = (e: React.ChangeEvent) => {
		// Input value
		const query = (e.target as HTMLInputElement).value;
		// Filtered list
		let updatedList = [...magusFeats];
		// Update list with elements containing the query
		updatedList = updatedList.filter((feats) => {
			return feats.name.indexOf(query.toLowerCase()) !== -1;
		});
		// Trigger render with updated list
		setFilteredList(updatedList);
	};

	const filterSpellsBySearch = (e: React.ChangeEvent) => {
		// Input value
		const query = (e.target as HTMLInputElement).value;
		// Filtered list
		let updatedList = [...magusFocusSpells];
		// Update list with elements containing the query
		updatedList = updatedList.filter((feats) => {
			return feats.name.indexOf(query.toLowerCase()) !== -1;
		});
		// Trigger render with updated list
		setFilteredSpellList(updatedList);
	};

	return (
		<div className="class">
			<header>
				<h1>Magus</h1>
				<i>Secrets of Magic</i>
				<p className="introduction">
					Combining the physicality and technique of a warrior with
					the ability to cast arcane magic, you seek to perfect the
					art of fusing spell and strike. While the hefty tome you
					carry reflects hours conducting arcane research, your
					enemies need no reminder of your training. They recognize it
					as you take them down.
				</p>
				<figure>
					<img
						src={require("../assets/img/magus_icon.png")}
						alt="Magus icon"
					/>
				</figure>
			</header>
			<div className="featured">
				<div className="column">
					<h2>Key Ability</h2>
					<b>Strength or Dexterity</b>
					<p>
						At 1st level, your class gives you an ability boost to
						your choice of Strength or Dexterity.
					</p>
				</div>
				<div className="column">
					<h2>Hit points</h2>
					<b>8 plus your Constitution Modifier</b>
					<p>
						You increase your maximum number of HP by this number at
						1st level and every level thereafter.magu
					</p>
				</div>
			</div>

			<figure className="figure-one">
				<img
					src={require("../assets/img/magus_01.webp")}
					alt="Magus image"
				/>
			</figure>
			<h2 id="initial-proficiencies">Initial Proficiencies</h2>
			<p>
				At 1st level, you gain the listed proficiency ranks in the
				following statistics. You’re untrained in anything that is not
				listed unless you gain a better proficiency rank in some other
				way.
			</p>

			<div className="featured-two">
				<h2>Perception</h2>
				<p>Trained in Perception</p>
				<h2>Saving Throws</h2>
				<ul>
					<li>Expert in Fortitude</li>
					<li>Trained in Reflex</li>
					<li>Expert in Will</li>
				</ul>
				<h2>Skills</h2>
				<ul>
					<li>Trained in Arcana</li>
					<li>
						Trained in a number of additional skills equal to 2 plus
						your Intelligence modifier
					</li>
				</ul>
				<h2>Attacks</h2>
				<ul>
					<li>Trained in simple weapons</li>
					<li>Trained in martial weapons</li>
					<li>Trained in unarmed attacks</li>
				</ul>
				<h2>Defences</h2>
				<ul>
					<li>Trained in light armor</li>
					<li>Trained in medium armor</li>
					<li>Trained in unarmored defense</li>
				</ul>
				<h2>Spells</h2>
				<p>Trained in arcane spell attacks</p>
				<p>Trained in arcane spell DCs</p>
			</div>

			<div className="columns">
				<div className="column-actions">
					<h2>During combat encounters...</h2>
					<p>
						You channel spells through your weapon or body to hit
						enemies with a powerful attack and spell combination.
						Because your spells per day are limited, you often rely
						on trusty, carefully chosen cantrips and focus spells.
						When necessary, you know how to win a fight without
						magic.
					</p>
				</div>
				<div className="column-actions">
					<h2>During social encounters...</h2>
					<p>
						Your education and breadth of experience make you
						knowledgeable about many subjects. You can contribute
						information related to your scholarly pursuits,
						especially about magic.
					</p>
				</div>
				<div className="column-actions">
					<h2>While exploring...</h2>
					<p>
						Your education and breadth of experience make you
						knowledgeable about many subjects. You can contribute
						information related to your scholarly pursuits,
						especially about magic.
					</p>
				</div>
				<div className="column-actions">
					<h2>In downtime...</h2>
					<p>
						You split your time between magical pursuits, like
						researching spells and crafting items, and martial
						practice, such as retraining combat abilities to learn
						new techniques.
					</p>
				</div>
			</div>

			<h2>You might...</h2>
			<ul>
				<li>
					Continually refine your spell and item selections to suit
					your personal style, or prepare battle plans and spell lists
					for a variety of situations.
				</li>
				<li>
					Socialize with scholars of magic and veteran combatants
					alike, seeking out masters to teach you new techniques.
				</li>
				<li>
					Overreach with ambitious plans that pull you in too many
					directions at once.
				</li>
			</ul>
			<h2>Others probably...</h2>
			<ul>
				<li>
					Wonder how you can keep on top of two disparate disciplines
					at the same time.
				</li>
				<li>
					Believe you have a broad enough skill set to take care of
					yourself in most situations.
				</li>
			</ul>

			<h2>Class Features</h2>
			<p>
				You gain these abilities as a magus. Abilities gained at higher
				levels list the level at which you gain them next to the
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
						<a href="#arcane-spellcasting">arcane
						                               spellcasting</a>,{" "}
						<a href="#arcane-cascade">arcane cascade</a>,{" "}
						<a href="#conflux-spells">conflux spells</a>,{" "}
						<a href="#hybrid-study">hybrid study</a>,{" "}
						<a href="#spellstrike">spellstrike</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>
						2nd-level spells,{" "}
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
						3rd-level spells,,{" "}
						<a href="#ability-boosts">ability boosts</a>,{" "}
						<a href="#ancestry-feat">ancestry feat</a>,{" "}
						<a href="#lightning-reflexes">lightning
						                              reflexes</a>,{" "}
						<a href="#weapon-expertise">weapon expertise</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>

				<tr>
					<td>6</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>7</td>
					<td>
						4th-level spells,
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#studious-spells">studious spells</a>,{" "}
						<a href="#weapon-specialization">weapon
						                                 specialization</a>
					</td>
				</tr>
				<tr>
					<td>8</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>9</td>
					<td>
						5th-level spells
						<a href="#alertness">alertness</a>,{" "}
						<a href="#ancestry-feat">ancestry feat</a>,{" "}
						<a href="#expert-spellcaster">expert
						                              spellcaster</a>,{" "}
						<a href="#resolve">resolve</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>10</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#magus-feat">magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>11</td>
					<td>
						6th-level spells,
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#medium-armor-expertise">medium armor
						                                  expertise</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>12</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>13</td>
					<td>
						7th-level spells,
						<a href="#ancestry-feat">ancestry feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#weapon-mastery">weapon mastery</a>
					</td>
				</tr>
				<tr>
					<td>14</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>15</td>
					<td>
						8th-level spells,
						<a href="#ability-boost">ability boost</a>,{" "}
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#greater-weapon-specialization">
							greater weapon specialization
						</a>
						, <a href="#juggernaut">juggernaut</a>
						, <a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>16</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>17</td>
					<td>
						9th-level spells,
						<a href="#ancestry-feat">ancestry feat</a>,{" "}
						<a href="#master-spellcaster">master
						                              spellcaster</a>,{" "}
						<a href="#medium-armor-mastery">medium armor
						                                mastery</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>18</td>
					<td>
						<a href="#magus-feat">Magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>19</td>
					<td>
						<a href="#double-spellstrike">Double
						                              spellstrike</a>,{" "}
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>

				<tr>
					<td>20</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#magus-feat">magus feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				</tbody>
			</table>

			<h3>Key Terms</h3>
			<p>You’ll see the following key term in many magus class
			   features.</p>
			<p>
				<b>Stance:</b>A stance is a general combat strategy that you
				              enter by using an action with the stance trait,
				              and you remain in that stance for some time. A
				              stance lasts until you get knocked out, until its
				              requirements (if any) are violated, until the
				              encounter ends, or until you enter a new stance,
				              whichever comes first. After you use an action
				              with the stance trait, you can’t use another one
				              for 1 round. You can enter or be in a stance only
				              in encounter mode.
			</p>

			<h3 id="ancestry-and-background">Ancestry and background</h3>
			<p>
				In addition to what you get from your class at 1st level, you
				have the benefits of your selected ancestry and background.
			</p>

			<h3 id="initial-proficiencies">Initial proficiencies</h3>
			<p>
				At 1st level, you gain a number of proficiencies that represent
				your basic training. These proficiencies are noted at the start
				of this class.
			</p>

			<h3 id="arcane-spellcasting">Arcane spellcasting</h3>
			<p>
				You study spells so you can combine them with your attacks or
				solve problems that strength of arms alone can’t handle. You can
				cast arcane spells using the Cast a Spell activity, and you can
				supply material, somatic, and verbal components when casting
				spells. Because you’re a magus, you can draw replacement sigils
				with the tip of your weapon or your free hand for spells
				requiring material components, replacing them with somatic
				components instead of needing a material component pouch.
			</p>
			<p>
				At 1st level, you can prepare one 1st-level spell and five
				cantrips each morning from the spells in your spellbook (see
				below). Prepared spells remain available to you until you cast
				them or until you prepare your spells again. The number of
				spells you can prepare is called your spell slots.
			</p>
			<p>
				As you increase in level as a magus, your number of spell slots
				and the highest level of spells you can cast from spell slots
				increase, shown in Table 2–2: Magus Spells per Day. Because you
				split your focus between physical training and magical
				scholarship, you have no more than two spell slots of your
				highest level and, if you can cast 2nd-level spells or higher,
				two spell slots of 1 level lower than your highest spell level.
			</p>
			<p>
				Some of your spells require you to attempt a spell attack roll
				to see how effective they are, or have your enemies roll against
				your spell DC (typically by attempting a saving throw). Your
				spell attack rolls and spell DCs use your Intelligence modifier.
				Details on calculating these statistics appear in the Spell
				Attack Rolls section of the Core Rulebook.
			</p>

			<div className="flex reverse">
				<div className="flex-column">
					<h4>Heightening spells</h4>
					<p>
						When you get spell slots of 2nd level and higher, you
						can fill those slots with stronger versions of
						lower-level spells. This increases the spell’s level,
						heightening it to match the spell slot. Many spells have
						specific improvements when they’re heightened to certain
						levels.
					</p>

					<h4>Cantrips</h4>
					<p>
						A cantrip is a special type of spell that doesn’t use
						spell slots. You can cast a cantrip at will, any number
						of times per day. A cantrip is always automatically
						heightened to half your level rounded up—this is usually
						equal to the highest level of spell you can cast as a
						magus. For example, as a 1st-level magus, your cantrips
						are 1st-level spells, and as a 5th-level magus, your
						cantrips are 3rd-level spells.
					</p>
				</div>

				<figure>
					<img
						src={require("../assets/img/magus_00.webp")}
						alt="Magus example"
					/>
				</figure>
			</div>

			<h4>Spellbook</h4>
			<p>
				Every arcane spell has a written version, usually
				recorded in a spellbook. You start with a spellbook
				worth 10 sp or less (as detailed in the Adventuring Gear
				section of the Core Rulebook), which you receive for
				free and must study to prepare your spells each day. The
				spellbook contains your choice of eight arcane cantrips
				and four 1st-level arcane spells. You choose these from
				the common spells on the arcane spell list or from other
				arcane spells you gain access to. Your spellbook’s form
				and name are up to you. It might be anything from a
				sturdy book with a secure latch entitled Theses on the
				Stratagems of Supernatural Warfare to a tattered
				collection of training pamphlets with your name scrawled
				on the cover.
			</p>
			<p>
				Each time you gain a level, you add two more arcane
				spells to your spellbook, of any level of spell you can
				cast. You can also use the Arcana skill to add other
				spells that you find in your adventures, as described in
				the Arcana section of the Core Rulebook. Though you lose
				some lower spell slots as you increase in level, you
				keep the spells in your spellbook and can prepare them
				in your higher-level slots as normal.
			</p>
			<p>
				If you have a spellbook from multiple sources (such as
				being a magus with the Wizard Dedication feat), you can
				use the same spellbook for all your spells.
			</p>

			<h3 id="spell-strike">Spell strike</h3>
			<p>
				You’ve learned the fundamental magus technique that lets you
				combine magical and physical attacks together. You gain the
				Spellstrike activity.
			</p>

			<Spell
				name="Spellstrike"
				action="two_action"
				tags={["magus"]}
				description={(
					<>
						<p>
			              <span className="frequency">
			                <b>Frequency</b> until recharged (see below).
			              </span>
							<br />
							You channel a spell into a punch or sword thrust to
							deliver a combined attack. You Cast a Spell that
							takes 1 or 2 actions to cast and requires a spell
							attack roll. The effects of the spell don’t occur
							immediately but are imbued into your attack instead.
							Make a melee Strike with a weapon or unarmed attack.
							Your spell is coupled with your attack, using your
							attack roll result to determine the effects of both
							the Strike and the spell. This counts as two attacks
							for your multiple attack penalty, but you don’t
							apply the penalty until after you’ve completed the
							Spellstrike. The infusion of spell energy grants
							your Strike the arcane trait, making it magical.
						</p>
						<p>
							After you use Spellstrike, you can’t do so again
							until you recharge your Spellstrike as a single
							action, which has the concentrate trait. You also
							recharge your Spellstrike when you cast a conflux
							spell that takes at least 1 action to cast; casting
							a focus spell of another type doesn’t recharge your
							Spellstrike.
						</p>
					</>
				)}
			/>

			<h4>Spell strike specifics</h4>
			<p>
				Though the base Spellstrike rules cover most spells, various
				modifications apply to more complicated spells when loaded into
				your fist, blade, or other attack.
			</p>
			<p>
				<b>One Target:</b> The spell targets only the target of your
				                   Strike, even if it normally allows more
				                   targets. Some feats let you affect more
				                   creatures.
			</p>
			<p>
				<b>Reach:</b> The coupled spell affects the target using the
				              reach of the weapon or unarmed attack you make
				              your Spellstrike with. For instance, shocking
				              grasp would affect a creature beyond the reach of
				              your hand if you used a weapon with reach, and ray
				              of frost would affect only a creature in your
				              weapon’s reach, even though the spell’s range is
				              longer.
			</p>
			<p>
				<b>Ancillary Effects:</b> Your spell still has any non-targeted
				                          effects that might affect creatures
				                          other than the target, as well as any
				                          ongoing effects starting from the
				                          moment you hit with the Strike. For
				                          example, acid splash would still deal
				                          its splash damage to creatures other
				                          than the target and tanglefoot’s
				                          circumstance penalty would last for
				                          its normal duration. The spell takes
				                          effect after the Strike deals damage;
				                          if the Strike has other special
				                          effects, the GM determines whether
				                          they happen before or after the spell.
			</p>
			<p>
				<b>Multiple Defenses:</b> Any additional rolls after the initial
				                          spell attack still happen normally,
				                          such as the Fortitude save attempted
				                          by the target of a disintegrate spell.
				                          Similarly, a spell that allows you to
				                          attack with it again on subsequent
				                          rounds would only combine a Strike
				                          with its initial attack roll, not with
				                          any later ones.
			</p>
			<p>
				<b>Invalid or Immune Target:</b> If the target you hit wouldn’t
				                                 be a valid target for the
				                                 spell, the spell is still
				                                 expended but doesn’t affect the
				                                 target. If the target is immune
				                                 to your attack but not the
				                                 spell, it can still be affected
				                                 by the spell.
			</p>
			<p>
				<b>Variable Actions:</b> Some spells have different effects
				                         based on the number of actions you
				                         spend to cast them. You choose whether
				                         to use the effects of the 1- or
				                         2-action version of the spell when you
				                         use Spellstrike. A spell has to take
				                         exactly 1 or 2 actions; you can’t use
				                         Spellstrike with a spell that takes a
				                         free action, reaction, or 3 or more
				                         actions.
			</p>
			<p>
				<b>Metamagic:</b> You typically can’t use metamagic with
				                  Spellstrike because metamagic requires the
				                  next action you take to be Cast a Spell, and
				                  Spellstrike is a combined activity that
				                  doesn’t qualify.
			</p>

			<div className="featured-two">
				<h4>Combining your abilities</h4>
				<p>
					As a magus, you have multiple special actions and abilities
					that can be used in combination with your spells. You can
					enter your Arcane Cascade stance with either Spellstrike or
					a normally cast spell, so it could be in your best interest
					to cast a spell to buff yourself at the beginning of a fight
					and enter Arcane Cascade, rather than going for an early
					Spellstrike. You can usually stay in Arcane Cascade for a
					long time, though if you find out an enemy has a weakness to
					a certain damage type, such as fire, you might want to
					refresh your stance with a fire spell to take advantage of
					the bonus damage. It’s often worth it to cast your conflux
					spells and make a Strike either on a turn where you can’t
					make a Spellstrike, or as the last action on your turn after
					a Spellstrike. Sometimes, it might be worth it to cast a
					conflux spell even if you think you’ll miss, because it can
					still recharge your Spellstrike for your next turn. Since a
					lot can ride on your Spellstrike, which uses your multiple
					attack penalty, it’s much better if used as the first attack
					of the turn!
				</p>
			</div>

			<h3 id="arcane-cascade">Arcane cascade</h3>
			<p>
				After you wield magic, you can enter a special stance to make
				your attacks more effective.
			</p>

			<Spell name="Arcane cascade" action="one_action"
			       tags={["concentrate", "magus", "stance"]} description={(
				<>
					<p>
						<span className="frequency">
							<b>Requirements:</b> You used your most recent action to Cast a Spell or make a Spellstrike.
						</span>
						<br />
						You divert a portion of the spell’s magical power and
						keep it cycling through your body and weapon using
						specialized forms, breathing, or footwork. While you’re
						in the stance, your melee Strikes deal 1 extra damage.
						This damage increases to 2 if you have weapon
						specialization and 3 if you have greater weapon
						specialization. Any Strike that benefits from this
						damage gains the arcane trait, making it magical.
					</p>
					<p>
						If your most recent spell before entering the stance was
						one that can deal damage, the damage from the stance is
						the same type that spell could deal (or one type of your
						choice if the spell could deal multiple types of
						damage). If the spell couldn’t deal damage, this
						stance’s bonus damage depends on the spell’s school.
					</p>
					<ul>
						<li>
							<b>Abjuration or Evocation</b> force
						</li>
						<li>
							<b>Conjuration or Transmutation</b> same type as
							                                    your weapon or
							                                    unarmed attack
						</li>
						<li>
							<b>Divination, Enchantment, or Illusion</b> mental
						</li>
						<li>
							<b>Necromancy</b> negative
						</li>
					</ul>
				</>
			)} />
			<table>
				<thead>
				<tr>
					<th>Your Level</th>
					<th>Cantrips</th>
					<th>1st</th>
					<th>2nd</th>
					<th>3rd</th>
					<th>4th</th>
					<th>5th</th>
					<th>6th</th>
					<th>7th</th>
					<th>8th</th>
					<th>9th</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1</td>
					<td>5</td>
					<td>1</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>2</td>
					<td>5</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>3</td>
					<td>5</td>
					<td>2</td>
					<td>1</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>4</td>
					<td>5</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>5</td>
					<td>5</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>6</td>
					<td>5</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>7</td>
					<td>5</td>
					<td>—</td>
					<td>—*</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>8</td>
					<td>5</td>
					<td>—</td>
					<td>—*</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>9</td>
					<td>5</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>10</td>
					<td>5</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>11</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>12</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>13</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>14</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
					<td>—</td>
				</tr>
				<tr>
					<td>15</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
				</tr>
				<tr>
					<td>16</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
					<td>—</td>
				</tr>
				<tr>
					<td>17</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<td>18</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<td>19</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<td>20</td>
					<td>5</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—*</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<td colSpan={12}>
						* The studious spells class feature gives you extra
						slots of this level for specific spells.
					</td>
				</tr>
				</tbody>
			</table>

			<h3 id="hybrid-study">Hybrid study</h3>
			<p>
				Your extensive physical training and carefully chosen magic
				combine to form a unique and dangerous fighting style that’s
				more than the sum of its parts. You choose one field of hybrid
				study to represent your particular combination of skills. Your
				hybrid study gives you a special ability, usually tied to
				Spellstrike or Arcane Cascade, and it determines your initial
				conflux spell. The hybrid studies presented in this book are as
				follows.
			</p>

			<br />
			<br />
			<BaseAccordion
				title="Inexorable iron"
				number={1}
				text={
					<>
						<p>
							Once you begin along a path, nothing can stop you
							from reaching its end. You transform the mass of a
							greataxe, greatsword, or polearm into an unstoppable
							force to augment your own striking power or keep you
							standing on the battlefield.
						</p>
						<p>
							When you enter Arcane Cascade stance and at the
							start of each of your turns while you’re in that
							stance, if you’re wielding a melee weapon in two
							hands, you gain temporary Hit Points equal to half
							your level (minimum 1 temporary HP).
						</p>
						<p>
							<b>Conflux Spell</b> thunderous strike
						</p>
						<p>
							<b>Studious Spells</b> 7th: enlarge; 11th:
							                       earthbind; 13th:
							                       dimensional anchor
						</p>
					</>
				}
			/>
			<BaseAccordion
				title="Kaughing shadow"
				number={2}
				text={
					<>
						<p>
							Magic is freeing, a means to your ends, and you can
							use it to go where you want, do as you please, and
							avoid the consequences. You are a laughing shadow of
							spell and blade, always one step ahead of your foes,
							always with a trick up your sleeve.
						</p>
						<p>
							While in Arcane Cascade stance, you gain a +5-foot
							status bonus to your Speeds, or a +10-foot bonus if
							you’re unarmored. If you have a free hand while in
							the stance and are attacking a flat-footed creature,
							you increase the extra damage to 3, to 5 if you have
							weapon specialization, or to 7 if you have greater
							weapon specialization. You must have your other hand
							completely free; the extra damage doesn’t apply if
							you have a free-hand weapon or other item in that
							hand, even if you would normally be able to use the
							hand for other things.
						</p>
						<p>
							<b>Conflux Spell</b> dimensional assault
						</p>
						<p>
							<b>Studious Spells</b> 7th: mirror image; 11th:
							                       shift blame; 13th:
							                       dimension door
						</p>
					</>
				}
			/>
			<BaseAccordion
				title="Sparkling targe"
				number={3}
				text={
					<>
						<p>
							You’ve studied the applications of magic, training
							yourself to perform not just offensive maneuvers but
							defensive tactics as well. When magic flows through
							you, your shield can block impossible things, even a
							dragon’s breath or a magic missile.
						</p>
						<p>
							You gain the Shield Block general feat.
						</p>
						<p>
							When you’re in Arcane Cascade stance with your
							shield raised, your circumstance bonus to AC from
							your shield also applies to your saves against
							spells and other magical effects. In addition,
							damage you take as a result of a spell or magical
							effect while you’re in Arcane Cascade can trigger
							your Shield Block reaction, even if the damage isn’t
							physical. When blocking damage in this way, increase
							your shield’s Hardness by an amount equal to the
							extra damage from Arcane Cascade (typically 1, but 2
							if you have weapon specialization, or 3 if you have
							greater weapon specialization). These benefits apply
							whether you’re using an actual shield, the shield
							spell, or something else that works like a shield
							(such as a raised tome if you have the Raise a Tome
							feat).
						</p>
						<p>
							<b>Conflux Spell</b> shielding strike
						</p>
						<p>
							<b>Studious Spells</b> 7th: resist energy; 11th:
							                       warding aggression; 13th:
							                       stoneskin
						</p>
					</>
				}
			/>
			<BaseAccordion
				title="Starlit span"
				number={4}
				text={
					<>
						<p>
							With magic, the sky’s the limit, and you can’t be
							bound by the confines of physical proximity. Your
							power reaches as far as your senses can perceive,
							transcending the space between you and your target
							even with spells that normally require direct
							physical contact.
						</p>
						<p>
							When you use Spellstrike, you can make a ranged
							weapon or ranged unarmed Strike, as long as the
							target is within the first range increment of your
							ranged weapon or ranged unarmed attack. You can
							deliver the spell even if its range is shorter than
							the range increment of your ranged attack.
						</p>
						<p>
							<b>Conflux Spell</b> shooting star
						</p>
						<p>
							<b>Studious Spells</b> 7th: darkvision; 11th: wall
							                       of wind; 13th: freedom of
							                       movement
						</p>

						<h4>Spellstrike options</h4>
						<p>
							The following cantrips and 1st-level spells require
							spell attack rolls and can therefore be used with
							Spellstrike. This list can get you started picking
							your spells.
						</p>
						<p>
							<b>Cantrips:</b> acid splash, gouging claw, produce
							                 flame, ray of frost, tanglefoot,
							                 telekinetic projectile
						</p>
						<p>
							<b>1st-Level Spells:</b> horizon thunder sphere,
							                         hydraulic push, ray of
							                         enfeeblement, shocking
							                         grasp, snowball
						</p>
					</>
				}
			/>
			<BaseAccordion
				title="Twisting tree"
				number={5}
				text={
					<>
						<p>
							The staff is perhaps one of the simplest of weapons,
							but this simplicity belies its elegance and
							versatility. To you, a staff is casting implement
							and martial weapon alike—the foundation of a
							fighting style.
						</p>
						<p>
							While you wield a staff in one hand, the staff
							adjusts in shape and weight, gaining the agile trait
							and increasing its damage die size to 1d6. While you
							wield a staff in both hands, it lengthens, twists,
							and reshapes, gaining the parry, reach, and trip
							traits. While you’re in Arcane Cascade stance, you
							can Interact or Release to change your grip on the
							weapon as a free action when you Strike with your
							staff, including Strikes made in a Spellstrike. This
							happens before you roll your attack roll. You can
							also Interact to change your grip on the staff as a
							free action triggered at the end of your turn.
						</p>
						<p>
							<b>Conflux Spell</b> spinning staff
						</p>
						<p>
							<b>Studious Spells</b> 7th: magic mouth; 11th: slow;
							                       13th: blink
						</p>
					</>
				}
			/>

			<h3 id="conflux-spells">Conflux spells</h3>
			<p>
				You learn a conflux spell from your hybrid study, and you can
				cast additional conflux spells by selecting certain feats.
				Conflux spells are magus-specific spells created for combat and
				are a type of focus spell. It costs 1 Focus Point to cast a
				focus spell, and you start with a focus pool of 1 Focus Point.
				You refill your focus pool during your daily preparations, and
				you can regain 1 Focus Point by spending 10 minutes using the
				Refocus activity to both study your spellbook and perform a
				physical regimen. Magus conflux spells appear in the Focus
				Spells section.
			</p>
			<p>
				Focus spells are automatically heightened to half your level
				rounded up. Focus spells don’t require spell slots, nor can you
				cast them using spell slots. Taking feats can give you more
				focus spells and increase the size of your focus pool, though
				your focus pool can never hold more than 3 points. The full
				rules can be found in the Focus Spells section of the Core
				Rulebook.
			</p>

			<h3 id="magus-feat">Magus Feats</h3>
			<p>
				At 2nd level and every even-numbered level thereafter, you gain
				a magus class feat.
			</p>

			<h3 id="skill-feat">Skill Feats</h3>
			<p>
				At 2nd level and every 2 levels thereafter, you gain a skill
				feat. You must be trained or better in the corresponding skill
				to select a skill feat.
			</p>

			<h3 id="general-feat">General Feats</h3>
			<p>
				At 3rd level and every 4 levels thereafter, you gain a general
				feat.
			</p>

			<h3 id="skill-increase">Skill Increases</h3>
			<p>
				At 3rd level and every 2 levels thereafter, you gain a skill
				increase. You can use this skill increase to become trained in
				one skill you’re untrained in, or become an expert in one skill
				in which you are already trained.
			</p>
			<p>
				At 7th level, you can use skill increases to become a master in
				a skill in which you’re already an expert, and at 15th level,
				you can use them to become legendary in a skill in which you’re
				already a master.
			</p>

			<div className="flex">
				<div className="flex-column">
					<h3 id="ability-boosts">Ability Boosts</h3>
					<p>
						At 5th level and every 5 levels thereafter, you boost
						four different ability scores. You can use these ability
						boosts to increase your ability scores above 18.
						Boosting an ability score increases it by 1 if it’s
						already 18 or above, or by 2 if it starts out below 18.
					</p>

					<h3 id="ancestry-feat">Ancestry Feats</h3>
					<p>
						In addition to the ancestry feat you started with, you
						gain an ancestry feat at 5th level and every 4 levels
						thereafter.
					</p>

					<h3 id="lighting-reflexes">Lighting reflexes</h3>
					<p>
						Your reflexes are lightning fast. Your proficiency rank
						for Reflex saves increases to expert.
					</p>

					<h3 id="weapon-expertise">Weapon expertise</h3>
					<p>
						You’ve dedicated yourself to learning the intricacies of
						your weapons. Your proficiency ranks for simple weapons,
						martial weapons, and unarmed attacks increase to expert.
					</p>
				</div>

				<figure>
					<img
						src={require("../assets/img/magus_02.webp")}
						alt="magus example"
					/>
				</figure>
			</div>

			<h3 id="studious-spells">Studious spells</h3>
			<p>
				Your hybrid study grants you additional spells that can enhance
				your power in combat. You gain two special 2nd-level studious
				spell slots, which can be used to prepare spider climb, true
				strike, water breathing, and an additional spell depending on
				your hybrid study. You add any spells from this class feature to
				your spellbook. At 11th level, the extra slots increase to 3rd
				level and you add haste and an additional spell depending on
				your hybrid study. At 13th level, the extra slots increase to
				4th level and you add fly and an additional spell depending on
				your hybrid study.
			</p>

			<div className="flex reverse">
				<div className="flex-column">
					<h3 id="weapon-specialization">Weapon specialization</h3>
					<p>
						You can inflict greater injuries with your favored
						weapons. You deal 2 additional damage with weapons and
						unarmed attacks in which you’re an expert. This damage
						increases to 3 if you’re a master, and 4 if you’re
						legendary.
					</p>

					<h3 id="alertness">Alertness</h3>
					<p>
						You remain alert to threats around you. Your proficiency
						rank for Perception increases to expert.
					</p>

					<h3 id="expert-spellcaster">Expert spellcaster</h3>
					<p>
						Your fundamental understanding of magic improves, making
						your spells harder to resist. Your proficiency ranks for
						arcane spell attack rolls and spell DCs increase to
						expert.
					</p>

					<h3 id="resolve">Resolve</h3>
					<p>
						You’ve steeled your mind with resolve. Your proficiency
						rank for Will saves increases to master. When you roll a
						success on a Will save, you get a critical success
						instead.
					</p>
				</div>

				<figure>
					<img
						src={require("../assets/img/magus_03.webp")}
						alt="Magus example"
					/>
				</figure>
			</div>

			<h3 id="medium-armor-expertise">Medium armor expertise</h3>
			<p>
				You’ve learned to defend yourself better against incoming
				attacks. Your proficiency ranks for light armor, medium armor,
				and unarmored defense increase to expert.
			</p>

			<h3 id="weapon-mastery">Weapon mastery</h3>
			<p>
				You fully understand your weapons. Your proficiency ranks for
				simple weapons, martial weapons, and unarmed attacks increase to
				master.
			</p>

			<h3 id="medium-armor-expertise">Medium armor expertise</h3>
			<p>
				You’ve learned to better defend yourself against attacks. Your
				proficiency ranks for light armor, medium armor, and unarmored
				defense
				increase to expert.
			</p>

			<h3 id="greater-weapon-specialization">Greater weapon
			                                       specialization</h3>
			<p>
				Your damage from weapon specialization increases to 4 with
				weapons and unarmed attacks in which you’re an expert, 6 if
				you’re a master, and 8 if you’re legendary.
			</p>

			<h3 id="juggernaut">Juggernaut</h3>
			<p>
				Your body is accustomed to physical hardship and resistant to a
				wide range of ailments. Your proficiency rank for Fortitude
				saves increases to master. When you roll a success on a
				Fortitude save, you get a critical success instead.
			</p>

			<h3 id="master-spellcaster">Master spellcaster</h3>
			<p>
				You fortify your spells with masterful prowess. Your proficiency
				ranks for arcane spell attack rolls and spell DCs increase to
				master.
			</p>

			<h3 id="medium-armor-mastery">Medium armor mastery</h3>
			<p>
				Your skill with light and medium armor improves, increasing your
				ability to avoid blows. Your proficiency ranks for light and
				medium armor, as well as for unarmed defense, increase to
				master.
			</p>

			<h3 id="double-spellstrike">Double spellstrike</h3>
			<p>
				You can extend the magic of spells you store with Spellstrike.
				After you make a Spellstrike with a spell cast from a spell
				slot, you retain an echo of the spell, stored in your body. The
				next time you Spellstrike, you can cast the same spell again
				without expending a spell slot.
			</p>

			<h2>Feats</h2>
			<p>
				At every level that you gain a magus feat, you can select one of
				the following feats. You must satisfy any prerequisites before
				selecting the feat.
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

			<br />
			<br />
			<h2 id="focus-spells">Focus Spells</h2>
			<p>
				You learn a conflux spell from your hybrid study, and you can
				cast additional conflux spells by selecting certain feats.
				Conflux spells are magus-specific spells created for combat and
				are a type of focus spell. It costs 1 Focus Point to cast a
				focus spell, and you start with a focus pool of 1 Focus Point.
				You refill your focus pool during your daily preparations, and
				you can regain 1 Focus Point by spending 10 minutes using the
				Refocus activity to both study your spellbook and perform a
				physical regimen. Magus conflux spells appear in the Focus
				Spells section.
			</p>
			<form>
				<label className="visually-hidden" htmlFor="search">
					Search
				</label>
				<input
					name="search"
					type="search"
					className="search"
					placeholder="Search in spells"
					onChange={filterSpellsBySearch}
				/>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</form>
			<div className="spell-list">
				{filteredSpellList && Object.keys(filteredSpellList).length === 0 ? (
					<p>No spells to show</p>
				) : (
					 filteredSpellList &&
					 filteredSpellList.map((focusSpell) => (
						 <Spell
							 level={focusSpell.level}
							 name={focusSpell.name}
							 type={focusSpell.type}
							 action={focusSpell.action}
							 tags={focusSpell.tags}
							 description={focusSpell.description}
						 />
					 ))
				 )}
			</div>
		</div>
	);
};

export default MagusPage;
