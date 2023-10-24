import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ClassFeat } from "../middleware/CutsomTypes";
import { InvestigatorFeats } from "../middleware/InvestigatorFeats";

const InvestigatorPage: React.ComponentType = () => {
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
				<h1>Investigator</h1>
				<i>Advanced Player's Guide</i>
				<p className="introduction">
					Clever and insightful, the investigator solves mysteries and
					teems with knowledge. In battle, they play out every
					possibility in advance, striking true when the time is
					right. Their methodology grants them an edge, and their high
					Intelligence and number of skills mean they almost always
					have the right tool for the job.
				</p>
				<figure>
					<img
						src={require("../assets/img/investigator_icon.png")}
						alt="inventor icon"
					/>
				</figure>
			</header>
			<div className="featured">
				<div className="column">
					<h2>Key Ability</h2>
					<b>Intelligence</b>
					<p>
						At 1st level, your class gives you an ability boost to
						Intelligence.
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

			<figure className="figure-one">
				<img
					src={require("../assets/img/investigator_01.webp")}
					alt="Investigator image"
				/>
			</figure>
			<h2 id="initial-proficiencies">Initial Proficiencies</h2>
			<p>
				At 1st level, you gain the listed proficiency ranks in the
				following statistics. You are untrained in anything not listed
				unless you gain a better proficiency rank in some other way.
			</p>

			<div className="featured-two">
				<h2>Perception</h2>
				<p>Expert in Perception</p>
				<h2>Saving Throws</h2>
				<ul>
					<li>Trained in Fortitude</li>
					<li>Expert in Reflex</li>
					<li>Expert in Will</li>
				</ul>
				<h2>Skills</h2>
				<ul>
					<li>Trained in Society</li>
					<li>
						Trained in one or more skills determined by your
						methodology
					</li>
					<li>
						Trained in a number of additional skills equal to 4 plus
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
				<p>Trained in investigator class DC</p>
			</div>

			<div className="columns">
				<div className="column-actions">
					<h2>During combat encounters...</h2>
					<p>
						Your keen insights regarding your foes make you more
						dangerous than your physical strength would suggest.
						After spending a moment to study your enemies, your
						perceptiveness allows you to act quickly, striking them
						where it hurts most. You often assist tougher members of
						your party, wisely protecting yourself while providing
						vital aid.
					</p>
				</div>
				<div className="column-actions">
					<h2>During social encounters...</h2>
					<p>
						Few can stand up against your scrutiny. You might not be
						the most charming, but you see things for what they
						really are and develop an understanding of a social
						situation rapidly. Every conversation is an
						investigation, after all, and you never know what you
						might uncover!
					</p>
				</div>
				<div className="column-actions">
					<h2>While exploring...</h2>
					<p>
						You look for clues in your environment. You often prove
						yourself to be a valuable ally by serving as a party
						scout, analyzing the intricacies of puzzles or
						mysterious phenomena, and pursuing leads that could
						reveal beneficial information.
					</p>
				</div>
				<div className="column-actions">
					<h2>In downtime...</h2>
					<p>
						You study up on subjects new and old, make new allies
						you can share information with, and pursue hobbies that
						keep your active mind satisfied. You might make a bit of
						coin on the side working as a private detective or
						consulting with the local constabulary.
					</p>
				</div>
			</div>

			<h2>You might...</h2>
			<ul>
				<li>Start asking questions—including several that are quite
				    involved—immediately after you’re presented with a
				    conundrum.
				</li>
				<li>
					Strive to uncover the deeper meanings behind anything you
					encounter and to identify the social machinations that truly
					drive events behind the scenes.
				</li>
				<li>
					Get so involved in a case that you ignore other matters,
					deeming them trivial.
				</li>
			</ul>
			<h2>Others probably...</h2>
			<ul>
				<li>
					Find the cascades of information you spout forth extremely
					helpful, if difficult to fully comprehend.
				</li>
				<li>
					Get a bit annoyed that you’re such a know-it-all.
				</li>
				<li>Rely on you to solve mysteries, puzzles, or other challenges
				    requiring intellectual curiosity and reasoning.
				</li>
			</ul>

			<h2>Class Features</h2>
			<p>
				You gain these abilities as an investigator. Abilities gained at
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
						<a href="#on-the-case">on the case</a>,{" "}
						<a href="#devise-a-stratagem">devise a
						                              Stratagem</a>,{" "}
						<a href="#methodology">methodology</a>,{" "}
						<a href="#strategic-strike">strategic
						                            strike</a> 1d6,{" "}
						<a href="#inventor-feat">investigator feat</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#keen-recollection">keen recollection</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
						<a href="#ability-boosts">Ability boosts</a>,{" "}
						<a href="#ancestry-feat">ancestry feat</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#strategic-strike">strategic
						                            strike</a> 2d6,{" "}
						<a href="#weapon-expertise">weapon expertise</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>7</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#vigilant-senses">vigilant senses</a>,{" "}
						<a href="#weapon-specialization">weapon
						                                 specialization</a>
					</td>
				</tr>
				<tr>
					<td>8</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>9</td>
					<td>
						<a href="#ancestry-feat">Ancestry feat</a>,{" "}
						<a href="#great-fortitude">great fortitude</a>,{" "}
						<a href="#investigator-expertise">investigator
						                                  expertise</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#strategic-strike">strategic
						                            strike</a> 3d6,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>10</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#investigator-feat">investigator feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#skill-feat">skill feat</a>
					</td>
				</tr>
				<tr>
					<td>11</td>
					<td>
						<a href="#deductive-improvisation">Deductive
						                                   improvisation</a>,{" "}
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#resolve">resolve</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>12</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>13</td>
					<td>
						<a href="#ancestry-feat">Ancestry feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>,{" "}
						<a href="#incredible-senses">incredible senses</a>,{" "}
						<a href="#light-armor-expertise">light armor
						                                 expertise</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#strategic-strike">strategic
						                            strike</a> 4d6,{" "}
						<a href="#weapon-mastery">weapon mastery</a>
					</td>
				</tr>
				<tr>
					<td>14</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>15</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#general-feat">general feat</a>,{" "}
						<a href="#evasion">evasion</a>,{" "}
						<a href="#greater-weapon-specialization">
							greater weapon specialization
						</a>, <a
						href="#skillful-lesson">skillful lesson</a>, <a
						href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>16</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>17</td>
					<td>
						<a href="#ancestry-feat">Ancestry feat</a>,{" "}
						<a href="#greater-resolve">greater resolve</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#strategic-strike">strategic
						                            strike</a> 5d6,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>18</td>
					<td>
						<a href="#investigator-feat">Investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>19</td>
					<td>
						<a href="#general-feat">General feat</a>,{" "}
						<a href="#light-armor-mastery">light armor
						                               mastery</a>,{" "}
						<a href="#master-detective">master detective</a>,{" "}
						<a href="#skillful-lesson">skillful lesson</a>,{" "}
						<a href="#skill-increase">skill increase</a>
					</td>
				</tr>
				<tr>
					<td>20</td>
					<td>
						<a href="#ability-boost">Ability boost</a>,{" "}
						<a href="#investigator-feat">investigator feat</a>,{" "}
						<a href="#skill-feat">skill feat</a>,{" "}
						<a href="#skill-increase">skill increase</a>
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
				your basic training. These proficiencies are noted at the start
				of this class.
			</p>

			<h3 id="on-the-case">On the case</h3>
			<p>
				As an investigator, you think of your adventures as cases
				waiting to be solved. You gain one activity and one reaction you
				can use to investigate cases: Pursue a Lead and Clue In.

			</p>

			<Feat id={0} name="Pursue a lead" action=""
			      tags={["concentrate", "exploration", "investigator"]}
			      level={1} feat="" description={(<>
				<p>
					<span className="frequency">
						<b>Frequency:</b> once per 10 minutes.
					</span>
					<br />
					You spend 1 minute examining the details of one potential
					clue, designating the subject related to that clue as the
					target of your active investigation. This subject is
					typically a single creature, item, or small location (such
					as a room or corridor), but the GM might allow a different
					scope for your investigation. You don’t need to know the
					identity, purpose, or nature of the subject, but you do need
					to be aware of its existence. For instance, finding a
					footprint is enough to investigate the creature that left
					it, and seeing a hasty sketch of an item or location can be
					enough to start your investigation of that subject.
				</p>
				<p>
					Whenever you attempt a Perception or skill check to
					investigate a designated subject, you gain a +1 circumstance
					bonus to the check. The exact checks this applies to depend
					on the actions you use to investigate and are determined by
					the GM, but checks to investigate are typically Perception
					checks or skill checks that use Intelligence, Wisdom, or
					Charisma.
				</p>
				<p>
					You can maintain two active investigations at a time. If you
					Pursue another Lead after that, the subject must be
					different from any of your current investigations (or
					rather, they must be different as far as you know), and you
					give up on a current subject of your choice. Once you’ve
					given up pursuit of a subject, you can’t Pursue that Lead
					again until after the next time you make your daily
					preparations.
				</p>
			</>)} />

			<Spell name="Clue in" action="reaction"
			       tags={["concentrate", "investigator"]} description={(
				<>
					<p>
						<b>Frequency:</b> once per 10 minutes.
						<br />
						<span className="frequency">
					<b>Trigger:</b> Another creature attempts a check to investigate a lead you’re pursuing.
				</span>
						<br />
						                  You share information with the
						                  triggering
						                  creature. They gain a circumstance
						                  bonus
						                  to their check equal to your
						                  circumstance
						                  bonus to checks investigating your
						                  subject
						                  from Pursue a Lead. The GM can add any
						                  relevant traits to this reaction
						                  depending
						                  on the situation, such as auditory and
						                  linguistic if you’re conveying
						                  information
						                  verbally.
					</p>
				</>
			)} />

			<h3 id="devise-a-stratagem">Devise a stratagem</h3>
			<p>
				You can play out a battle in your head, using brains rather than
				brawn to execute an attack.
			</p>

			<Spell name="Device a stratagem" action="one_action"
			       tags={["concentrate", "fortune", "investigator"]}
			       description={(
				       <>
					       <p>
						<span className="frequency">
							<b>Frequency:</b> once per round.
						</span>
						       <br />
						       You assess a foe’s weaknesses in combat and use
						       them to formulate a plan of attack against your
						       enemy. Choose a creature you can see and roll a
						       d20. If you Strike the chosen creature later this
						       round, you must use the result of the roll you
						       made to Devise a Stratagem for your Strike’s
						       attack roll instead of rolling. You make this
						       substitution only for the first Strike you make
						       against the creature this round, not any
						       subsequent attacks.
					       </p>
					       <p>
						       When you make this substitution, you can also add
						       your Intelligence modifier to your attack roll
						       instead of your Strength or Dexterity modifier,
						       provided your Strike uses an agile or finesse
						       melee weapon, an agile or finesse unarmed attack,
						       a ranged weapon (which must be agile or finesse
						       if it’s a melee weapon with the thrown trait), or
						       a sap.
					       </p>
					       <p>
						       If you’re aware that the creature you choose is
						       the subject of a lead you’re pursuing, you can
						       use this ability as a free action.
					       </p>
				       </>
			       )} />

			<h3 id="methodology">Methodology</h3>
			<p>
				Your studies have made you savvy in many areas, but one in
				particular drew your intense interest. Choose a methodology. The
				methodologies presented in this book are as follows.
			</p>
			<BaseAccordion
				title="Alchemical Sciences"
				number={1}
				text={
					<>
						<p>
							Your methodology emphasizes chemical and alchemical
							analysis, collecting information from unusual
							particles and fluids found on the scene. You possess
							enough alchemical know-how to whip up a few
							tinctures to help you with your cases.
						</p>
						<p>
							You’re trained in Crafting and gain the Alchemical
							Crafting skill feat. In addition, you gain a
							standard formula book for free and learn the
							formulas for two additional common 1st-level
							alchemical items, which must be elixirs or tools.
							Each time you gain a level, you learn the formula
							for one common alchemical elixir or alchemical tool
							of any level of item you can create.
						</p>
						<p>
							During your daily preparations, you can create a
							number of versatile vials—alchemical concoctions
							that can quickly be turned into elixirs and
							tools—equal to your Intelligence modifier. You can
							use the Quick Tincture action to turn one of these
							vials into an elixir or alchemical tool for which
							you know the formula.
						</p>
						<Spell
							name="Quick tincture"
							action="one_action"
							tags={["investigator", "manipulate"]}
							description={(
								<>
									<p>
										<b>Cost:</b> 1 versatile vial.
										<br />
										<span className="frequency">
											<b>Requirements:</b> You know the formula for the alchemical item you’re creating, you are holding or wearing alchemist’s tools, and you have a free hand.
										</span>
										<br />
										             You quickly brew up a
										             short-lived tincture. You
										             create a single alchemical
										             elixir or tool of your
										             level or lower without
										             having to spend the normal
										             monetary cost in alchemical
										             reagents or needing to
										             attempt a Crafting check.
										             This item has the infused
										             trait, but it remains
										             potent only until the end
										             of the current turn.
									</p>
								</>
							)}
						/>
					</>
				}
			/>
			<BaseAccordion
				title="Empiricism"
				number={2}
				text={
					<>
						<p>
							Everything comes down to data. Calculating
							statistics, running numbers, and using inductive
							reasoning allows you to determine the most likely
							outcome of any scenario, and anything out of place
							draws your keen attention.
						</p>
						<p>
							You are trained in one Intelligence-based skill of
							your choice. You gain the That’s Odd investigator
							feat, and you gain the Expeditious Inspection free
							action.
						</p>
						<Spell
							name="Expeditious inspection"
							action="one_action"
							tags={["investigator"]}
							description={(
								<>
									<p>
										<span className="frequency">
											<b>Frequency:</b> once per 10 minutes.
										</span>
										<br />
										You observe and assess your surroundings
										with great speed. You Recall Knowledge,
										Seek, or Sense Motive.
									</p>
								</>
							)}
						/>
					</>
				}
			/>
			<BaseAccordion
				title="Forensic medicine"
				number={3}
				text={
					<>
						<p>
							You’ve learned that in most cases, especially
							murders, criminals tend to leave more evidence of
							the crime on the body than they’d like to believe.
							Information from bruising, bone fractures, blood
							spatters, and even the life cycle of carrion insects
							can provide valuable clues that help reconstruct the
							scene.
						</p>
						<p>
							You’re trained in Medicine and gain the Forensic
							Acumen and Battle Medicine skill feats. When you use
							Battle Medicine, on a success the target recovers
							additional Hit Points equal to your level, and the
							target becomes temporarily immune for only 1 hour,
							not 1 day.
						</p>
					</>
				}
			/>
			<BaseAccordion
				title="Interrogation"
				number={4}
				text={
					<>
						<p>
							People can’t help but trust you, whether through
							your inherent likableness or your firm insistence on
							sticking to the truth. You have a way about you that
							gets others talking, and you’ve developed
							interrogative techniques to help you get to the
							truth of your investigations.
						</p>
						<p>
							You are trained in Diplomacy. You gain the No Cause
							for Alarm skill feat. You can also Pursue a Lead
							over the course of a conversation rather than
							spending dedicated time looking into the lead,
							provided the conversation lasts 1 minute or longer.
							For example, while trying to Make an Impression, you
							could pursue the creature you’re conversing with as
							a lead, and you could Pursue a Lead about an object
							while someone is telling you information about that
							object. You also gain the Pointed Question action.
						</p>
						<Spell
							name="Pointed question"
							action="one_action"
							tags={["investigator", "auditory", "concentrate", "linguistic", "mental"]}
							description={(
								<>
									<p>
										You ask a question that charms or
										needles someone in just the right way.
										Ask a question of a non-allied creature
										that you can see and have been
										conversing with. Attempt a Diplomacy
										check against the creature’s Will DC.
										The creature is then temporarily immune
										for 1 hour.
									</p>
									<p>
										<b>Critical Success</b> The target must
										                        directly answer
										                        your question.
										                        It doesn’t have
										                        to answer
										                        truthfully, but
										                        you gain a +4
										                        circumstance
										                        bonus to your
										                        Perception DC if
										                        the creature
										                        attempts to Lie
										                        to you.
									</p>
									<p>
										<b>Success</b> As critical success, but
										               the circumstance bonus is
										               +2.
									</p>
									<p>
										<b>Failure</b> The target can refuse to
										               answer you as normal.
									</p>
									<p>
										<b>Critical Failure</b> The target can
										                        refuse to answer
										                        you as normal,
										                        and its attitude
										                        toward you
										                        decreases by one
										                        step due to your
										                        aggravating
										                        attention.
									</p>
								</>
							)}
						/>
					</>
				}
			/>

			<h3 id="investigator-feat">Investigator Feats</h3>
			<p>
				At 1st level and every even-numbered level, you gain an
				investigator class feat.
			</p>

			<h3 id="skill-feat">Skill Feats</h3>
			<p>
				At 2nd level and every 2 levels thereafter, you gain a skill
				feat. You
				must be trained or better in the corresponding skill to select a
				skill
				feat.
			</p>

			<h3 id="strategic-strike">Strategic strike</h3>
			<p>
				When you strike carefully and with forethought, you deal a
				telling blow. When making a Strike that adds your Intelligence
				modifier on your attack roll due to Devising a Stratagem, you
				deal an additional 1d6 precision damage.
			</p>
			<p>As your investigator level increases, so too does the deadliness
			   of your strategic strike. Increase the number of dice by one at
			   5th, 9th, 13th, and 17th levels.</p>

			<h3 id="general-feat">General Feats</h3>
			<p>
				At 3rd level and every 4 levels thereafter, you gain a general
				feat.
			</p>

			<h3 id="skill-increase">Skill Increases</h3>
			<p>
				At 3rd level and every 2 levels thereafter, you gain a skill
				increase.
				You can use this increase either to increase your proficiency
				rank to
				trained in one skill you’re untrained in, or to increase your
				proficiency rank in one skill in which you’re already trained to
				expert.
			</p>
			<p>
				At 7th level, you can use skill increases to become a master in
				a skill
				in which you’re already an expert, and at 15th level, you can
				use them
				to become legendary in a skill in which you’re already a master.
			</p>

			<div className="flex">
				<div className="flex-column">
					<h3 id="keen-recollection">Keen recollection</h3>
					<p>
						You can recall pertinent facts on topics that aren’t
						your specialty. Your proficiency bonus to untrained
						skill checks to Recall Knowledge is equal to your level
						instead of +0.
					</p>

					<h3 id="skillful-lessons">Skillful lessons</h3>
					<p>
						At 3rd level and every odd-numbered level thereafter,
						you gain a skill feat. This feat must be for an
						Intelligence-, Wisdom-, or Charisma-based skill, or for
						the skill you gained from your methodology.
					</p>

					<h3 id="ability-boosts">Ability Boosts</h3>
					<p>
						At 5th level and every 5 levels thereafter, you boost
						four different ability scores. You can use these ability
						boosts to increase your ability scores above 18.
						Boosting an ability score increases it by 1 if it’s
						already 18 or above, or by 2 if it starts out below 18.
					</p>
				</div>

				<figure>
					<img
						src={require("../assets/img/investigator_02.webp")}
						alt="Investigator example"
					/>
				</figure>
			</div>

			<h3 id="ancestry-feat">Ancestry Feats</h3>
			<p>
				In addition to the ancestry feat you started with, you gain an
				ancestry
				feat at 5th level and every 4 levels thereafter.
			</p>

			<h3 id="weapon-expertise">Weapon expertise</h3>
			<p>
				You’ve dedicated yourself to learning the intricacies of your
				weapons. Your proficiency ranks for simple weapons, martial
				weapons, and unarmed attacks increase to expert.
			</p>

			<div className="flex reverse">
				<div className="flex-column">
					<h3 id="vigilant-senses">Vigilant senses</h3>
					<p>
						Through your adventures, you’ve developed keen awareness
						and attention to detail. Your proficiency rank in
						Perception increases to master.
					</p>

					<h3 id="weapon-specialization">Weapon specialization</h3>
					<p>
						You can inflict greater injuries with the weapons you
						know best. You deal 2 additional damage with weapons and
						unarmed attacks in which you are an expert. This damage
						increases to 3 if you’re a master and 4 if you’re
						legendary.
					</p>

					<h3 id="wgreat-fortitude">Great fortitude</h3>
					<p>
						Your physique is incredibly hardy. Your proficiency rank
						for Fortitude saves increases to expert.
					</p>

					<h3 id="investigator-expertise">Investigator expertise</h3>
					<p>
						You’ve refined your investigative techniques to an
						exceptional degree. Your circumstance bonus from Pursue
						a Lead increases to +2. Your proficiency rank for your
						investigator class DC increases to expert.
					</p>

					<h3 id="deductive-improvisation">Deductive
					                                 improvisation</h3>
					<p>
						You use your skills at deduction to perform whatever
						task is necessary to solve the case. You can attempt any
						check that requires you to be trained in a skill, even
						if you’re untrained in it; you can attempt any check
						that requires you to have expert proficiency in a skill
						so long as you’re trained in it; and you can attempt any
						check that requires you to have master proficiency in a
						skill as long as you have expert proficiency in it.
					</p>
				</div>

				<figure>
					<img
						src={require("../assets/img/investigator_03.webp")}
						alt="Investigator example"
					/>
				</figure>
			</div>

			<h3 id="resolve">Resolve</h3>
			<p>
				You’ve steeled your mind with resolve. Your proficiency rank for
				Will
				saves increases to master. When you roll a success on a Will
				save, you
				get a critical success instead.
			</p>

			<h3 id="incredible-senses">Incredible senses</h3>
			<p>
				You notice things that are almost impossible for an ordinary
				person to detect. Your proficiency rank for Perception increases
				to legendary.
			</p>

			<h3 id="light-armor-expertise">Light armor expertise</h3>
			<p>
				You’ve learned how to dodge while wearing light or no armor.
				Your proficiency ranks for light armor and unarmored defense
				increase to expert.
			</p>

			<h3 id="weapon-mastery">Weapon mastery</h3>
			<p>
				You fully understand your weapons. Your proficiency ranks for
				simple weapons, martial weapons, and unarmed attacks increase to
				master.
			</p>

			<h3 id="evasion">Evasion</h3>
			<p>
				You’ve learned to move quickly to avoid explosions, a dragon’s
				breath, and worse. Your proficiency rank for Reflex saves
				increases to master. When you roll a success on a Reflex save,
				you get a critical success instead.
			</p>

			<h3 id="greater-weapon-specialization">Greater weapon
			                                       specialization</h3>
			<p>
				Your damage from weapon specialization increases to 4 with
				weapons and unarmed attacks in which you’re an expert, 6 if
				you’re a master, and 8 if you’re legendary.
			</p>

			<h3 id="greater-resolve">Greater resolve</h3>
			<p>
				Your unbelievable training grants you mental resiliency. Your
				proficiency rank for Will saves increases to legendary. When you
				roll a success on a Will save, you get a critical success. When
				you roll a critical failure on a Will save, you get a failure
				instead. When you fail a Will save against a damaging effect,
				you take half damage.
			</p>

			<h3 id="light-armor-mastery">Light armor mastery</h3>
			<p>
				Your skill with light armor improves, increasing your ability to
				dodge blows. Your proficiency ranks for light armor and
				unarmored defense increase to master.
			</p>

			<h3 id="master-detective">Master detective</h3>
			<p>
				As a master detective, you can solve any case and find all the
				clues available. If you’re pursuing the subject of a lead and
				you enter a new location that includes another clue toward
				solving the mystery, the GM informs you of the existence of the
				clue and its type: an object, person, spell effect, or the like.
				When you find the clue, the GM informs you that you’ve done so.
				If there is more than one clue in the location, the GM chooses
				one to inform you about. When you find any of the clues in that
				location, the GM informs you that you’ve done so, even if it
				wasn’t the clue they’d chosen or there are other clues you
				haven’t found. Your proficiency rank for your investigator class
				DC increases to master.
			</p>

			<h2>Investigator Class Kit</h2>
			<ul>
				<li>
					<b>Price:</b> 9 gp, 2 sp.
				</li>
				<li>
					<b>Bulk:</b> 3 Bulk, 5 light.
				</li>
				<li>
					<b>Money Left Over:</b> 5 gp, 8 sp.
				</li>
				<li>
					<b>Armor:</b> studded leather armor.
				</li>
				<li>
					<b>Weapons:</b> sap, short sword, crossbow with 20 bolts.
				</li>
				<li>
					<b>Gear:</b> adventurer’s pack, crowbar.
				</li>
				<li>
					<b>Options:</b> alchemist’s tools (3 gp), simple manacles (3 gp), writing set (1 gp).
				</li>
			</ul>

			<h2>Feats</h2>
			<p>
				At every level that you gain an investigator feat, you can select one of the following feats. You must satisfy any prerequisites before selecting the feat.
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

export default InvestigatorPage;
