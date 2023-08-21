import React from "react";
import Feat from "../components/Feat";
import { AncestryFeat } from "./FeatsButtons";

export const strixFeats: Array<AncestryFeat> = [
  {
    id: 1,
    name: "Nesting fall",
    action: "",
    tags: ["strix"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You trust the strength of your wings and can spread them to glide safely
        to the ground. As long as you can act, you take no damage from falling,
        no matter what distance you fall.
      </span>
    ),
  },
  {
    id: 2,
    name: "Story Crooner",
    action: "",
    tags: ["strix"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re a talented story weaver and use your voice effectively. You are
        trained in Performance. If you would automatically become trained in
        Performance, you instead become trained in a skill of your choice. You
        also gain the Impressive Performance skill feat and gain a +1
        circumstance bonus when Performing for an audience of strix.
        <br />
        <Feat
          id={0}
          name="Impressive Performance"
          tags={["general", "skill"]}
          action=""
          level={1}
          feat="Feat 1"
          description={
            <span>
              <span className="frequency">
                <b>Prerequisites:</b> trained in Performance.
              </span>
              <br />
              Your performances inspire admiration and win you fans. You can
              Make an Impression using Performance instead of Diplomacy.
            </span>
          }
        />
      </span>
    ),
  },
  {
    id: 3,
    name: "Strix defender",
    action: "",
    tags: ["strix"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        Your ancestral feud with humans gives you experience dealing with
        vicious foes, and your vengeance knows no bounds. You gain a +1
        circumstance bonus to Intimidation, Perception, and Survival checks
        against humans, as well as on damage rolls against humans with weapons
        and unarmed attacks. However, your hatred of humans is immediately
        obvious, giving you a –2 circumstance penalty to Diplomacy checks
        against them and usually starting their attitude one step worse towards
        you.
      </span>
    ),
  },
  {
    id: 4,
    name: "Strix lore",
    action: "",
    tags: ["strix"],
    level: 1,
    feat: "Feat 1",
    description: (
      <span>
        You’re well connected to your tribe and perhaps even strix communities
        beyond your own, where you’ve learned about the land and techniques of
        graceful movement. You gain the trained proficiency rank in Acrobatics
        and Nature. If you would automatically become trained in one of those
        skills (from your background or class, for example), you instead become
        trained in a skill of your choice. You also become trained in Strix
        Lore.
      </span>
    ),
  },
  {
    id: 5,
    name: "Feathered cloak",
    action: "",
    tags: ["strix"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        To blend in with the grounded and wingless, you fold your wings just so
        on your back, creating the illusion of a feathered cloak. You receive a
        +2 circumstance bonus to Deception checks to Impersonate a version of
        yourself who is not a strix.
        <br />
        <br />
        Additionally, your folded wings help you obscure objects on your person,
        providing a +2 circumstance bonus to Stealth checks to Conceal an
        Object.
      </span>
    ),
  },
  {
    id: 6,
    name: "Fledgling flight",
    action: "one_action",
    tags: ["strix"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per round.
        </span>
        <br />
        You can fly through the air in short bursts at half your land Speed. If
        you don’t end your movement on solid ground, you fall at the end of your
        turn.
      </span>
    ),
  },
  {
    id: 7,
    name: "Strix vengance",
    action: "reaction",
    tags: ["emtoion", "mental", "strix"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        <b>Frequency:</b> once per 10 minutes.
        <br />
        <br />
        <span className="frequency">
          <b>Trigger:</b> You, or a strix ally you can see, are damaged by an
          enemy’s critical hit.
        </span>
        <br />
        You dedicate yourself to destroying those who harm your kin. Until the
        end of your next turn, you deal an additional +1d6 damage on Strikes
        against the triggering enemy. The bonus increases to +2d6 if you use a
        striking weapon or unarmed attack and +3d6 if you use a major striking
        weapon or unarmed attack.
      </span>
    ),
  },
  {
    id: 8,
    name: "Thrown voice",
    action: "",
    tags: ["strix"],
    level: 5,
    feat: "Feat 5",
    description: (
      <span>
        You’ve learned how to throw your voice through the winds, tricking
        others as to your location. You can cast ventriloquism as a primal
        innate spell once per day. If you’re a songbird strix, you can cast it
        twice per day instead.
      </span>
    ),
  },
  {
    id: 9,
    name: "Ferocious gust",
    action: "two_action",
    tags: ["air", "concentrate", "manipulate", "strix"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per 10 minutes.
        </span>
        <br />
        With heavy wing beats, you whip up a furious gust and direct it at your
        opponents. This air blast has the effects of gust of wind with a DC
        equal to your class DC or spell DC, whichever is higher
      </span>
    ),
  },
  {
    id: 10,
    name: "Juvenile flight",
    action: "two_action",
    tags: ["strix"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        <span className="frequency">
          <b>Frequency:</b> once per day.
        </span>
        <br />
        You unfold your wings for travel and can keep them unfolded for 10
        minutes. You gain a fly Speed equal to your land Speed while your wings
        are unfurled. If you have Fledgling Flight, you gain a +10-foot status
        bonus to your fly Speed with Juvenile Flight. As normal, since your fly
        Speed is derived from your land Speed, this status bonus isn’t
        cumulative with a status bonus to your land Speed, if you have one.
      </span>
    ),
  },
  {
    id: 11,
    name: "Rokoan arts",
    action: "",
    tags: ["strix"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        Ancestral spirits have begun to bond themselves to you, granting you
        powers characteristic of a rokoa. You can cast speak with animals and
        status as primal innate spells once per day each.
      </span>
    ),
  },
  {
    id: 12,
    name: "Wing step",
    action: "one_action",
    tags: ["strix"],
    level: 9,
    feat: "Feat 9",
    description: (
      <span>
        With a sharp flap of your wings, you stay light on your feet as you
        move. You Step 5 feet twice.
      </span>
    ),
  },
  {
    id: 13,
    name: "Ancestor's transformation",
    action: "",
    tags: ["strix"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        You can commune with ancestor spirits to assume the form of an enormous
        primeval strix. You can cast 5th-level aerial form as a primal innate
        spell once per day, but you take the form of a primeval strix, using the
        statistics for a bird form.
      </span>
    ),
  },
  {
    id: 14,
    name: "Fully flighted",
    action: "",
    tags: ["strix"],
    level: 13,
    feat: "Feat 13",
    description: (
      <span>
        <span className="frequency">
          <b>Prerequisites:</b> Juvenile Flight.
        </span>
        <br />
        You gain the effects of Juvenile Flight at all times, rather than just
        once per day for 10 minutes. This includes the status bonus to your
        Speed if you have Fledgling Flight.
      </span>
    ),
  },
];
