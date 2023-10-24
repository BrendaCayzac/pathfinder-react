import React from "react";
import { ClassFeat } from "./CutsomTypes";

export const InvestigatorFeats: Array<ClassFeat> = [
	{
		id: 1,
		name: "Flexible studies",
		action: "",
		tags: ["investigator"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You’ve collected a cross-section of information on various
					disciplines you can refer to when preparing for various
					tasks. During your daily preparations, you can cram on a
					certain subject to become temporarily trained in one skill
					of your choice. This proficiency lasts until you prepare
					again. As this proficiency is temporary, you can’t use it as
					a prerequisite for a skill increase or a permanent character
					option like a feat.
				</p>
			</>
		),
	},
	{
		id: 2,
		name: "Known weaknesses",
		action: "",
		tags: ["investigator"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					Whenever you Devise a Stratagem, you can also attempt a
					check to Recall Knowledge as part of that action. If you
					critically succeed at the Recall Knowledge check, you notice
					a weakness and gain a +1 circumstance bonus to your attack
					roll from Devise a Stratagem. If you immediately convey this
					information to your allies as part of the check, each ally
					gains a +1 circumstance bonus to their next attack roll
					against the subject, as long as their attack is made before
					the beginning of your next turn.
				</p>
			</>
		),
	},
	{
		id: 3,
		name: "Takedown Expert",
		action: "",
		tags: ["investigator"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You’ve mastered combat practices that let you get up close
					and bring down perpetrators alive. You can use your
					Intelligence modifier on attack rolls when you Devise a
					Stratagem if you’re using a weapon of the club group in one
					hand (like a club, staff, or sap), in addition to the usual
					weapons, and those Strikes qualify for your strategic
					strike. Additionally, you can make any of your Strikes
					nonlethal without taking the normal –2 penalty.
				</p>
			</>
		),
	},
	{
		id: 4,
		name: "That's odd",
		action: "",
		tags: ["investigator"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					When you enter a new location, such as a room or corridor,
					you immediately notice one thing out of the ordinary. The GM
					determines what it is, or whether there’s nothing reasonable
					to pick up, skipping obvious clues that can be easily
					noticed without a check or specifically looking for them.
					You learn only that an area or object is suspicious, but not
					why it’s suspicious. For example, if you entered a study
					with a large bloodstain on the ground, the bloodstain is so
					obviously suspicious it’s evident to you already, so the GM
					might note that there’s something suspicious about the desk
					drawer instead. You would then need to investigate the
					drawer further to find out what specifically is out of the
					ordinary. That’s Odd doesn’t reveal whether creatures are
					suspicious.
				</p>
				<p>
					You don’t typically get any benefit when you leave and come
					back to a place, though if a major change has happened there
					and time has passed, the GM might determine that you do.
				</p>
			</>
		),
	},
	{
		id: 5,
		name: "Trap finder",
		action: "",
		tags: ["investigator"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You have an intuitive sense that alerts you to the dangers
					and presence of traps. You gain a +1 circumstance bonus to
					Perception checks to find traps, to AC against attacks made
					by traps, and to saves against traps. Even if you aren’t
					Searching, you get a check to find traps that normally
					require you to be Searching. You still need to meet any
					other requirements to find the trap.

				</p>
			</>
		),
	},
	{
		id: 6,
		name: "Underworld Investigator",
		action: "",
		tags: ["investigator"],
		level: 1,
		feat: "Feat 1",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					Your work as an investigator makes you familiar with the
					criminal element. You might be a criminal yourself, or you
					might have gained an understanding of how they operate from
					the outside. You become trained in Underworld Lore, and you
					gain your Pursue a Lead circumstance bonus to Thievery
					checks to investigate the subject of your lead (such as
					checks to Steal a clue from a suspect or Pick a Lock to open
					a safe with damning documents).
				</p>
			</>
		),
	},
	{
		id: 7,
		name: "Athletic strategist",
		action: "",
		tags: ["investigator"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> trained in Athletics.
					</span>
					<br />
					You know how to calculatedly manipulate joints and body
					weight. In addition to using Devise a Stratagem to modify a
					Strike, you can use it to modify a Disarm, Grapple, Shove,
					or Trip attempt, substituting your Devise a Stratagem roll
					for the Athletics check. You must apply the substitution to
					the first eligible attack you make, whether it’s a Strike or
					one of the Athletics actions.
				</p>
				<p>
					You can also use your Intelligence modifier instead of
					Strength for the Athletics check when you substitute your
					Devise a Stratagem roll, unless you’re using a weapon for
					the maneuver and the weapon doesn’t fit the restrictions for
					using Intelligence with a stratagem.
				</p>
			</>
		),
	},
	{
		id: 8,
		name: "Red Herring",
		action: "",
		tags: ["investigator"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You have a keen sense for avoiding spurious lines of
					inquiry. When you Pursue a Lead, the GM tells you if the
					lead you chose is inconsequential. For example, if you found
					a splatter of gray mud on the wall, thought it was
					suspicious, and Pursued it as a Lead, the GM would tell you
					if there was no greater mystery related to it. When the GM
					tells you a lead is inconsequential, you can decline to
					Pursue the Lead, keeping any leads you were already
					pursuing. You still can’t use Pursue a Lead again for 10
					minutes, as normal.
				</p>
			</>
		),
	},
	{
		id: 9,
		name: "Shared stratagem",
		action: "",
		tags: ["investigator"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					The plans you make include your allies as well as yourself.
					When you hit a creature with an attack on which you
					substituted your attack roll due to Devising a Stratagem,
					designate one ally. The creature you hit is flat-footed to
					that ally on the next attack the designated ally makes
					against that creature before the start of your next turn.
				</p>
			</>
		),
	},
	{
		id: 10,
		name: "Solid lead",
		action: "",
		tags: ["investigator"],
		level: 2,
		feat: "Feat 2",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					Sometimes your case splinters into smaller mysteries, but
					you never lose sight of the big picture. Once per day when
					you give up on the subject of a lead due to using Pursue a
					Lead again, you can designate the lead you stopped pursuing
					as your solid lead for the day. Even though you stopped
					following the solid lead, you can change back to your solid
					lead any number of times by using a single action, which has
					the concentrate trait. Doing so ends one of your current
					leads as normal.
				</p>
				<p>
					During your next daily preparations, you can maintain your
					solid lead or you can remove it; removing it allows you to
					designate a new solid lead later that day.
				</p>
			</>
		),
	},
	{
		id: 11,
		name: "Alchemical discoveries",
		action: "",
		tags: ["investigator"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> alchemical sciences methodology.
					</span>
					<br />
					You’ve devoted extra time in the lab to improve your
					knowledge of alchemy. You learn the formulas for two
					alchemical items each time you level up instead of one;
					these must still be elixirs or tools. The number of
					versatile vials you can create each day increases by 1 if
					you’re an expert in Crafting, 2 if you’re a master, or 3 if
					you’re legendary.
				</p>
			</>
		),
	},
	{
		id: 12,
		name: "Detective's readiness",
		action: "",
		tags: ["investigator"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					When you’re on a case, you stay watchful and resolute to
					avoid tricks your suspect might pull. You gain your
					circumstance bonus from Pursue a Lead on saving throws (and
					their DCs, as normal) against the subject of a lead, and you
					can use Clue In to assist an ally’s saving throw against
					that subject.
				</p>
			</>
		),
	},
	{
		id: 13,
		name: "Greenwatch initiate",
		action: "",
		tags: ["rare", "investigator", "gunslinger", "ranger"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Lost Omens: Impossible lands</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> trained in Survival.
					</span>
					<br />
					You’ve received the basic training developed for all
					Greenwatch recruits. You become an expert in Survival and
					gain the Experienced Tracker and Survey Wildlife skill
					feats.
				</p>
			</>
		),
	},
	{
		id: 14,
		name: "Lie detector",
		action: "",
		tags: ["investigator"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> empiricism or interrogation methodology.
					</span>
					<br />
					You’re adept at noticing the tells of a liar—sweat,
					flushing, a quavering voice, a quickening pulse. You gain a
					+1 circumstance bonus to Perception checks to Sense Motive
					and to Perception DCs against attempts to Lie to you. When
					you determine someone is lying to you, you can use their
					deceit to your advantage to gain a +1 circumstance bonus to
					the next Deception, Diplomacy, Intimidation, or Performance
					check you attempt against that creature within the next
					minute.
				</p>
			</>
		),
	},
	{
		id: 15,
		name: "Ongoing investigation",
		action: "",
		tags: ["investigator"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You’re always investigating what’s around you, even as you
					perform other activities. You can move at full Speed while
					using the Investigate exploration activity, and you can use
					another exploration activity while Investigating.
				</p>
			</>
		),
	},
	{
		id: 16,
		name: "Scalpel's point",
		action: "",
		tags: ["investigator"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> forensic medicine methodology.
					</span>
					<br />
					Your stratagems benefit from your precise knowledge of
					anatomy. When you critically hit with an attack on which you
					substituted your attack roll due to Devising a Stratagem, if
					your attack dealt piercing or slashing damage, you also deal
					1d6 persistent bleed damage to your target.
				</p>
			</>
		),
	},
	{
		id: 17,
		name: "Strategic assessment",
		action: "",
		tags: ["investigator"],
		level: 4,
		feat: "Feat 4",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You learn your foes’ strengths and weaknesses by watching
					them move. When you critically hit a creature with a Strike
					on which you substituted your attack roll due to Devising a
					Stratagem, the GM chooses one of the following pieces of
					information about the enemy to tell you.
				</p>
				<ul>
					<li>Which of the enemy’s weaknesses is highest</li>
					<li>Which of the enemy’s resistances is highest</li>
					<li>Which of the enemy’s saving throws is lowest</li>
					<li>One immunity the enemy has</li>
				</ul>
				<p>
					The GM can choose deliberately or at random, but they can’t
					choose information that doesn’t apply (such as choosing an
					immunity for an enemy that has no immunities). This applies
					only the first time you critically hit a given creature.
				</p>
			</>
		),
	},
	{
		id: 18,
		name: "Connect the dots",
		action: "",
		tags: ["uncommon", "investigator", "concentrate", "secret"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Requirements:</b> You must be pursuing at least two leads.
					</span>
					<br />
					Ephemeral connections between people, places, and concepts
					are invisible to most, but seeing them is your stock and
					trade. You spend 10 minutes considering two different leads
					you’re pursuing. You then attempt a check to investigate how
					connected the two are. Unless the GM determines otherwise,
					this is a Crafting check if they’re both items or a Society
					check for other combinations of leads. If any subjects are
					creatures, this check usually uses the highest DC among
					their Deception and Will DCs. If no subjects are creatures,
					but at least one is an item, the DC is usually a hard DC for
					the level of the highest-level item. If neither case
					applies, the DC is usually a hard expert or hard master DC
					(22 or 32). Once you try to Connect the Dots between two
					particular leads, you can never try to Connect the Dots
					between those same leads again unless the GM allows it after
					you’ve learned a substantial amount of new information.
				</p>
				<p>
					<b>Critical Success</b> The GM tells you how connected the
					                        two leads are to one another: highly
					                        connected, somewhat connected,
					                        tangentially connected, or not
					                        connected. The GM also tells you one
					                        specific way in which they’re
					                        connected, if they are.
				</p>
				<p>
					<b>Success</b> As critical success, but the GM doesn’t tell
					               you a specific connection.
				</p>
				<p>
					<b>Failure</b> Your results are inconclusive.
				</p>
				<p>
					<b>Critical Failure</b> You misconstrue the information. As
					                        success, but the GM provides an
					                        incorrect degree of connection.
				</p>
			</>
		),
	},
	{
		id: 19,
		name: "Defy fey",
		action: "",
		tags: ["rare", "investigator", "gunslinger", "ranger"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Lost Omens: Impossible lands</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> Greenwatch Initiate.
					</span>
					<br />
					You are keen to the wiles of the fey and can usually shake
					off their magic. Whenever you fail, but don’t critically
					fail, a save against a spell with a duration of at least 1
					round cast by a fey creature, you can attempt a second save
					against the original DC at the start of your next turn to
					end any lingering effects the spell might have. This can end
					persistent damage caused by a spell but can’t reverse any
					effects that have been resolved already (such as damage
					dealt when the spell was cast).
				</p>
			</>
		),
	},
	{
		id: 20,
		name: "Fey tracker",
		action: "",
		tags: ["rare", "investigator", "gunslinger", "ranger"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Lost Omens: Impossible lands</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> Greenwatch Initiate.
					</span>
					<br />
					You are exceptionally skilled at noticing the subtle
					techniques fey use to avoid notice. You gain a +2
					circumstance bonus to Survival checks to Track fey
					creatures, to Perception checks to Seek for hidden fey, and
					to your Perception DC to resist a fey creature’s attempt to
					Create a Diversion.
				</p>
			</>
		),
	},
	{
		id: 21,
		name: "Predictive purchase",
		action: "",
		tags: ["investigator"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You have just the thing for the situation. You gain the
					Prescient Planner and Prescient Consumable feats. When using
					Prescient Planner, you can pull out the item as a 2-action
					activity to remove your backpack (or a similar container)
					and draw the item, rather than taking 1 minute.
				</p>
			</>
		),
	},
	{
		id: 22,
		name: "Thorough research",
		action: "",
		tags: ["investigator"],
		level: 6,
		feat: "Feat 6",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					When you succeed at a Recall Knowledge check, you learn an
					additional fact about the subject. When you critically
					succeed at a Recall Knowledge check, you can gain even more
					additional information or context than normal, at the GM’s
					discretion.
				</p>
			</>
		),
	},
	{
		id: 23,
		name: "Blind-fight",
		action: "",
		tags: ["investigator"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> master in Perception.
					</span>
					<br />
					Your battle insights make you more aware of concealed and
					invisible opponents. You don’t need to succeed at a flat
					check to target concealed creatures. You’re not flat-footed
					to creatures that are hidden from you (unless you’re
					flat-footed to them for reasons other than the hidden
					condition), and you need only a successful DC 5 flat check
					to target a hidden creature.
				</p>
				<p>
					While you’re adjacent to an undetected creature of your
					level or lower, it is instead only hidden from you.
				</p>
			</>
		),
	},
	{
		id: 24,
		name: "Clue them all in",
		action: "",
		tags: ["investigator"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You can clue in all your allies at once. When you use the
					Clue In reaction, any of your allies who are attempting the
					same check to investigate a lead receive the circumstance
					bonus from Clue In. If you use this ability during an
					encounter, they must attempt their check within 1 round of
					when you Clued them In.
				</p>
			</>
		),
	},
	{
		id: 25,
		name: "Greenwatch veteran",
		action: "",
		tags: ["rare", "investigator", "gunslinger", "ranger"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Lost Omens: Impossible Lands</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger:</b> Your turn starts, and you’re in combat against a creature you spent at least 10 minutes Tracking.
					</span>
					<br />
					Your time spent tracking your target allows you to quickly
					identify its weaknesses and relay them to your allies.
					Attempt a Recall Knowledge check against the creature you
					were Tracking. On a success, you always know the creature’s
					greatest weakness and highest resistance or immunity, in
					addition to any other information the check would typically
					provide. You immediately use a quick series of hand gestures
					to signal this information to any allies who can see you.
				</p>
			</>
		),
	},
	{
		id: 26,
		name: "Unseen passage",
		action: "",
		tags: ["rare", "investigator", "gunslinger", "ranger"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Lost Omens: Impossible Lands</i>
					<br />
					<br />
					<span className="frequency">
						<b>Frequency:</b> once per day.
					</span>
					<br />
					You have mastered a magical technique for moving through
					dangerous woodlands unseen. You can cast pass without trace
					as an innate primal spell heightened to a spell level equal
					to half your level rounded up.
				</p>
			</>
		),
	},
	{
		id: 27,
		name: "Whodunnit?",
		action: "",
		tags: ["uncommon", "investigator"],
		level: 8,
		feat: "Feat 8",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Frequency:</b> once per day.
					</span>
					<br />
					You carefully consider your case and narrow down some of the
					details. When you Pursue a Lead, you can spend 10 minutes
					instead of 1 minute to ask two questions of the GM as you
					complete the activity. The GM must answer truthfully with
					“yes” or “no,” though if the answer would be misleading or
					have no practical application to your investigation the GM
					can answer “immaterial.” You can’t use Whodunnit? more than
					once for the same lead, even across different days.
				</p>
				<p>
					Your questions must come from the following list, applying
					to either the creature or the clue you found:
				</p>
				<ul>
					<li>Was the clue left by a [creature trait]? (Choose a
					    creature trait such as humanoid, undead, or dwarf; this
					    trait must be accurate as of the time the clue was
					    left.)
					</li>
					<li>
						Was this clue left within the last hour?
					</li>
					<li>
						Was this clue left within the last day?
					</li>
					<li>
						Was the creature that left the clue in a heightened
						emotional state when it left the clue?
					</li>
					<li>
						Did the creature attempt to conceal this clue?
					</li>
				</ul>
			</>
		),
	},
	{
		id: 28,
		name: "Greenwatcher",
		action: "",
		tags: ["rare", "investigator", "gunsliunger", "ranger"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Lost Omens: Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> Defy Fey.
					</span>
					<br />
					Your experience fighting against and alongside fey creatures
					is nearly unrivaled. Any weapon you wield or unarmed attack
					you make against a fey creature is treated as cold iron.
					Whenever you critically fail a save against a spell cast by
					a fey creature, it’s instead treated as a normal failure.
					Whenever you critically succeed on a Strike against a fey
					creature, the target is immediately subject to the effects
					of a faerie fire spell. For the purposes of counteracting
					this effect, it’s an innate 2nd-level primal spell.
				</p>
			</>
		),
	},
	{
		id: 29,
		name: "Just one more thing",
		action: "one_action",
		tags: ["investigator", "fortune"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Requirements:</b> Your most recent action was to Feint, Request, or Demoralize, and you failed but didn’t critically fail.
					</span>
					<br />
					After your attempt to influence someone goes poorly, you add
					another bit of information or ask a pointed question,
					possibly salvaging your previous attempt. Reroll the failed
					check and use the new result. If the target of the failed
					check is the subject of a lead you’re pursuing, double your
					bonus from Pursue a Lead on the rerolled check. That
					creature is temporarily immune to Just One More Thing for 1
					day.
				</p>
				<p>
					You can also use this action if you failed, but didn’t
					critically fail, at a check to Lie, Gather Information, Make
					an Impression, or Coerce. In this case, rather than spending
					1 action, adding Just One More Thing takes you half the
					amount of time you initially spent on the check, to a
					minimum of 1 more round.
				</p>
			</>
		),
	},
	{
		id: 30,
		name: "Ongoing strategy",
		action: "",
		tags: ["investigator"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites:</b> strategic strike.
					</span>
					<br />
					You’re constantly studying small aspects of everyone’s
					movements, even if you don’t have a stratagem in place ahead
					of time. On any Strike for which you didn’t Devise a
					Stratagem, you still deal precision damage equal to your
					number of strategic strike damage dice so long as the weapon
					or unarmed attack you used is one that would have let you
					use your Intelligence modifier had you Devised a Stratagem.
				</p>
			</>
		),
	},
	{
		id: 31,
		name: "Suspect of opportunity",
		action: "reaction",
		tags: ["investigator"],
		level: 10,
		feat: "Feat 10",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<b>Frequency:</b> once per hour.
					<br />
					<span className="frequency">
						<b>Trigger:</b> A foe takes a hostile action against you in combat.
					</span>
					<br />
					                  Sometimes something intrudes upon your
					                  case unexpectedly,
					                  such as an ambush sent to bring your
					                  investigation to a
					                  close. You’ve learned how to
					                  compartmentalize your main lead
					                  and pursue a new one for your current
					                  predicament. You
					                  Pursue a Lead against the triggering foe,
					                  setting aside but
					                  not ending one of your currently active
					                  leads, if you have
					                  two leads. At the end of the combat
					                  encounter, you stop
					                  Pursuing the Lead against the triggering
					                  foe and return to
					                  the original lead, if you have one.
				</p>
			</>
		),
	},
	{
		id: 32,
		name: "Foresee danger",
		action: "reaction",
		tags: ["investigator", "concentrate"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger:</b> A creature targets you with an attack and you can see the attacker.
					</span>
					<br />
					You perceive every possible way your foe’s attack could land
					and attempt to avoid them all. The triggering attack roll
					targets your Perception DC instead of your AC. Though this
					allows you to avoid taking penalties to your AC, it doesn’t
					remove any conditions or other effects causing such
					penalties. For example, an enemy with sneak attack would
					still deal extra damage to you for being flat-footed, even
					though you wouldn’t take the –2 circumstance penalty when
					defending against the attack.
				</p>
			</>
		),
	},
	{
		id: 33,
		name: "Reason rapidly",
		action: "one_action",
		tags: ["investigator"],
		level: 12,
		feat: "Feat 12",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					Your mind works through clues at an unbelievable speed. You
					instantly use up to five Recall Knowledge actions. If you
					have any special abilities or free actions that would
					normally be triggered when you Recall Knowledge, you can’t
					use them for these actions.
				</p>
			</>
		),
	},
	{
		id: 34,
		name: "Plot the future",
		action: "",
		tags: ["uncommon", "investigator", "concentrate", "prediction"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You spend 10 minutes in contemplation to uncannily predict
					how events will play out. Choose a particular goal or
					activity you plan to engage in within 1 week, or an event
					you expect might happen within 1 week. You analyze whether
					it’s likely to come to pass, learning whether it’s highly
					likely, somewhat likely, somewhat unlikely, or highly
					unlikely. You also gain a piece of advice suggesting a
					course of action you or your allies could take that might
					make the chosen event more or less likely, whichever you
					prefer. The GM determines the likeliness of the event and
					the piece of advice you learn.
				</p>
			</>
		),
	},
	{
		id: 35,
		name: "Sense the unseen",
		action: "reaction",
		tags: ["investigator"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Trigger:</b> You fail a check to Seek.
					</span>
					<br />
					When you look for foes, you notice the slightest of cues.
					Even though you failed at the triggering check, you
					automatically sense any undetected creatures in the area
					where you’re Seeking, making them merely hidden to you.
				</p>
			</>
		),
	},
	{
		id: 36,
		name: "Strategic bypass",
		action: "",
		tags: ["investigator"],
		level: 14,
		feat: "Feat 14",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					Your plans account for your foes’ resistances, enabling you
					to strike a telling blow. When you hit with a Strike on
					which you substituted your attack roll due to Devising a
					Stratagem, you ignore an amount of resistance equal to your
					Intelligence modifier for each resistance that applies
					against your attack.
				</p>
			</>
		),
	},
	{
		id: 37,
		name: "Didactic strike",
		action: "",
		tags: ["investigator"],
		level: 16,
		feat: "Feat 16",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Shared Stratagem.
					</span>
					<br />
					When you find a glaring weakness, you can set your allies up
					to annihilate your foe. When you use Shared Stratagem, you
					can designate up to 10 allies instead of just one. The foe
					is flat-footed against the first attack from each designated
					ally before your next turn, and each ally’s first attack
					deals an extra 2d6 precision damage to the target if it
					hits.
				</p>
			</>
		),
	},
	{
		id: 38,
		name: "Implausible purchase",
		action: "",
		tags: ["investigator"],
		level: 16,
		feat: "Feat 16",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Predictive Purchase.
					</span>
					<br />
					It seems impossible, but you’ve analyzed every angle and are
					able to just keep pulling out exactly the item you need,
					even in far-flung locations. You can use Prescient Planner
					even if you have already used it after purchasing goods, and
					you can use it as a single action instead of a 2-action
					activity, during which you Interact to draw the item. In
					addition, five times per day, you can use Prescient Planner
					to pull out a common consumable item up to 6 levels lower
					than your level.
				</p>
			</>
		),
	},
	{
		id: 39,
		name: "Reconstruct the scene",
		action: "",
		tags: ["investigator", "concentrate"],
		level: 16,
		feat: "Feat 16",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You spend 1 minute surveying a small location (such as a
					single room) to get an impression of events that occurred
					there in the last day. This involves moving about the area
					and studying footprints, the placement of objects, spilled
					drinks or blood, and so forth. You get an indistinct mental
					impression of significant events that happened there. This
					gives you clues and details of the past, including the
					overall events and their time frame, but it’s not a perfect
					record. This also isn’t enough to identify who was involved
					in these events if you weren’t already aware the person was
					there. As determined by the GM, you also pick out various
					seemingly small details that could serve as important clues,
					like a memorable weapon someone used for a murder or the
					type of cloak someone wore when passing through.
				</p>
			</>
		),
	},
	{
		id: 40,
		name: "Lead investigator",
		action: "",
		tags: ["investigator", "exploration"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Clue Them All In.
					</span>
					<br />
					You spend 1 minute briefing up to four allies about one lead
					you’re pursuing. Those allies gain the same circumstance
					bonus you do from Pursue a Lead to checks to investigate
					that lead. This bonus lasts until you cease pursing that
					lead or for 1 day, whichever comes first. This doesn’t
					confer any other benefits of pursuing a lead, such as adding
					the circumstance bonus to your saves with Detective’s
					Readiness.
				</p>
			</>
		),
	},
	{
		id: 41,
		name: "Trickster's ace",
		action: "reaction",
		tags: ["investigator", "concentrate"],
		level: 18,
		feat: "Feat 18",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<b>Trigger</b> You specify the trigger when you make your
					               daily preparations (see Requirements below).
					<br />
					<span className="frequency">
						<b>Requirements</b> When you make your daily preparations, you must specify a trigger for this reaction using the same restrictions as the triggers for the Ready action. You also choose a single spell from the arcane, divine, occult, or primal list of 4th level or lower. The spell can’t have a cost, nor can its casting time be more than 10 minutes. The spell must be able to target a single creature, and you must be a valid target for it.
					</span>
					<br />
					               Whether from jury-rigged magic items,
					               deduction from the
					               study of magical interactions, or other
					               means, you have a
					               contingency in your back pocket for desperate
					               situations.
					               When the trigger occurs, you cause the spell
					               to come into
					               effect. The spell targets only you, no matter
					               how many
					               creatures it would affect normally. If you
					               define
					               particularly complicated conditions, as
					               determined by the
					               GM, the trigger might fail. Once the
					               contingency is
					               triggered, the spell is expended until your
					               next daily
					               preparations.
				</p>
			</>
		),
	},
	{
		id: 42,
		name: "All the time in the world",
		action: "three_action",
		tags: ["uncommon", "investigator"],
		level: 20,
		feat: "Feat 20",
		description: (
			<>
				<p>
					<i>Fists of the Ruby Phoenix Adventure Path</i>
					<br />
					<br />
					<span className="frequency">
						<b>Frequency</b> once per hour.
					</span>
					<br />
					Your firsthand experience of the subjective nature of time
					and space has given you new observational insights. Your
					mind processes information so quickly that time appears to
					stop for all creatures but you. You can take up to 9 actions
					in 3 sets of up to 3 actions each. During this time, you can
					use purely mental and observational abilities such as Recall
					Knowledge, Seek, and Devise a Stratagem, and you can use an
					action to move a mental projection of yourself to a location
					within a 60-foot radius to observe objects more closely and
					from different angles, though you can’t affect your
					surroundings in any way (for instance, you could move your
					mental projection more closely to a distant door to read a
					minute inscription on its handle, but you could not open it
					to observe the other side). When the duration elapses, time
					resumes its normal flow.
				</p>
			</>
		),
	},
	{
		id: 43,
		name: "Everyone's a suspect",
		action: "",
		tags: ["investigator"],
		level: 20,
		feat: "Feat 20",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					You are so suspicious of everyone you meet that you keep
					mental notes on how to defeat them all—even your own allies.
					After interacting with a creature for at least 1 minute, you
					automatically Pursue a Lead with that creature as the
					subject. You can have any number of such leads at any given
					time, and when you Pursue a Lead again, you don’t give up
					any of these automatic subjects.
				</p>
			</>
		),
	},
	{
		id: 44,
		name: "Just the facts",
		action: "",
		tags: ["investigator"],
		level: 20,
		feat: "Feat 20",
		description: (
			<>
				<p>
					<i>Advanced Player's Guide</i>
					<br />
					<br />
					<span className="frequency">
						<b>Prerequisites</b> Thorough Research.
					</span>
					<br/>
					You fundamentally understand everything to the point where
					your research can’t possibly be wrong. You are permanently
					quickened and can use the extra action to Recall Knowledge.
					Your checks to Recall Knowledge are no longer secret. When
					you Recall Knowledge, you use the outcome for one degree of
					success better than the result of your check, and if an
					effect (such as Dubious Knowledge) would give you inaccurate
					information from your Recall Knowledge check, you know which
					information is inaccurate. When one of your allies Recalls
					Knowledge and gains false information, you also know that
					information is inaccurate if they share it with you.
				</p>
			</>
		),
	},
];
