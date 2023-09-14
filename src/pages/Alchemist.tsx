import React from "react";
import "../assets/styles/ClassPage.scss";
import Feat from "../components/Feat";
import Spell from "../components/Spell";

const AlchemistPage: React.ComponentType = () => {
  return (
    <div className="class">
      <header>
        <h1>Alchemist</h1>
        <i>Core Rulebook</i>
        <p className="introduction">
          The alchemist uses their skill at crafting to create alchemical
          items—such as bombs, elixirs, and poisons—that they use to defeat foes
          and aid allies. Smart and resourceful, an alchemist often has just the
          right tool for the job and esoteric knowledge to help their friends
          get out of a jam.
        </p>
        <figure>
          <img
            src={require("../assets/img/alchemist_icon.png")}
            alt="alchemist icon"
          />
        </figure>
      </header>
      <p>
        There’s no sight more beautiful to you than a strange brew bubbling in a
        beaker, and you consume your ingenious elixirs with abandon. You’re
        fascinated by uncovering the secrets of science and the natural world,
        and you’re constantly experimenting in your lab or on the go with
        inventive concoctions for every eventuality. You are fearless in the
        face of risk, hurling explosive or toxic creations at your foes. Your
        unique path toward greatness is lined with alchemical brews that push
        your mind and body to their limits.
      </p>
      <div className="featured">
        <div className="column">
          <h2>Key Ability</h2>
          <b>Intelligence</b>
          <p>
            At 1st level, your class gives you an ability boost to Intelligence.
          </p>
        </div>
        <div className="column">
          <h2>Hit points</h2>
          <b>8 plus your Constitution Modifier</b>
          <p>
            You increase your maximum number of HP by this number at 1st level
            and every level thereafter.
          </p>
        </div>
      </div>
      <h2 id="initial-proficiencies">Initial Proficiencies</h2>
      <p>
        At 1st level, you gain the listed proficiency ranks in the following
        statistics. You are untrained in anything not listed unless you gain a
        better proficiency rank in some other way.
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
          <li>Trained in Crafting</li>
          <li>
            Trained in a number of additional skills equal to 3 plus your
            Intelligence modifier
          </li>
        </ul>
        <h2>Attacks</h2>
        <ul>
          <li>Trained in simple weapons</li>
          <li>Trained in alchemical bombs</li>
          <li>Trained in unarmed attacks</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>Trained in light armor</li>
          <li>Trained in medium armor</li>
          <li>Trained in unarmored defense </li>
        </ul>
        <h2>Class DC</h2>
        <p>Trained in alchemist class DC</p>
      </div>
      <div className="columns">
        <div className="column-actions">
          <h2>During combat encounters...</h2>
          <p>
            You lob bombs at your foes, harry your enemies, and support the rest
            of your party with potent elixirs. At higher levels, your mutagens
            warp your body into a resilient and powerful weapon.
          </p>
        </div>
        <div className="column-actions">
          <h2>During social encounters...</h2>
          <p>
            You provide knowledge and experience about alchemical items and
            related secrets, such as poisons and diseases.
          </p>
        </div>
        <div className="column-actions">
          <h2>While exploring...</h2>
          <p>
            You keep an eye out for trouble with your bombs at the ready, while
            giving advice on all things alchemical and mysterious.
          </p>
        </div>
        <div className="column-actions">
          <h2>In downtime...</h2>
          <p>
            You experiment in an alchemical lab, brewing elixirs, making bombs,
            and furthering your alchemical knowledge.
          </p>
        </div>
      </div>
      <h2>You might...</h2>
      <ul>
        <li>
          Enjoy tinkering with strange formulas and alchemical reagents, often
          with a single-minded dedication and recklessness that gives others
          pause.
        </li>
        <li>
          Get a kick out of wreaking havoc with the alchemical concoctions
          you’ve made, and enjoy watching things burn, dissolve, freeze, and
          jolt.
        </li>
        <li>
          Endlessly experiment to discover new, more potent alchemical tools.
        </li>
      </ul>
      <h2>Others probably...</h2>
      <ul>
        <li>
          Think you’re some kind of sorcerer or an eccentric wizard and don’t
          understand that you don’t cast spells; spellcasters who clumsily
          dabble in alchemy only heighten this misconception.
        </li>
        <li>
          Don’t understand your zeal for alchemy, creativity, and invention.
        </li>
        <li>
          Assume that if you haven’t caused a catastrophe with your
          experimentations, you inevitably will.
        </li>
      </ul>
      <h2>Class Features</h2>
      <p>
        You gain these abilities as an alchemist. Abilities gained at higher
        levels list the levels at which you gain them next to the features’
        names.
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
              <a href="#ancestry-and-background">Ancestry and background</a>,{" "}
              <a href="#initial-proficiencies">initial proficiencies</a>,{" "}
              <a href="#">alchemy</a>, <a href="#">formula book</a>,{" "}
              <a href="#">research field</a>, <a href="#">alchemist feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#">General feat</a>, <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#">Ability boosts</a>, <a href="#">ancestry feat</a>,{" "}
              <a href="#">field discovery</a>, <a href="#">powerful alchemy</a>,{" "}
              <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#">Alchemical weapon expertise</a>,{" "}
              <a href="#">general feat</a>, <a href="#">iron will</a>,{" "}
              <a href="#">perpetual infusions</a>,{" "}
              <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#">Alchemist expertise</a>, <a href="#">alertness</a>,{" "}
              <a href="#">ancestry feat</a>, <a href="#">double brew</a>,{" "}
              <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#">Ability boost</a>, <a href="#">alchemist feat</a>,{" "}
              <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#">General feat</a>, <a href="#">juggernaut</a>,{" "}
              <a href="#">perpetual potency</a>, <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#">Ancestry feat</a>,{" "}
              <a href="#">greater field discovery</a>,{" "}
              <a href="#">medium armor expertise</a>,{" "}
              <a href="#">skill increase</a>,{" "}
              <a href="#">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#">Ability boost</a>, <a href="#">alchemical alacrity</a>
              , <a href="#">evasion</a>, <a href="#">general feat</a>,{" "}
              <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#">Alchemical mastery</a>, <a href="#">ancestry feat</a>,{" "}
              <a href="#">perpetual perfection</a>,{" "}
              <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#">Alchemist feat</a>, <a href="#">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#">General feat</a>, <a href="#">medium armor mastery</a>
              , <a href="#">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#">Ability boost</a>, <a href="#">alchemist feat</a>,{" "}
              <a href="#">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Key Terms</h2>
      <p>You’ll see the following key terms in many alchemist abilities.</p>
      <p>
        <b>Additive:</b> Feats with the additive trait allow you to spend
        actions to add special substances to bombs or elixirs. You can add only
        one additive to a single alchemical item, and attempting to add another
        spoils the item. You can typically use actions with the additive trait
        only when you’re creating an infused alchemical item, and some can be
        used only with the Quick Alchemy action. The additive trait is always
        followed by a level, such as additive 2. An additive adds its level to
        the level of the alchemical item you’re modifying; the result is the new
        level of the mixture. The mixture’s item level must be no higher than
        your advanced alchemy level.
      </p>
      <p>
        <b>Infused:</b> You created an alchemical item with the infused trait
        using your infused reagents, and it has a limited time before it becomes
        inert. Any nonpermanent effects from your infused alchemical items, with
        the exception of afflictions such as slow-acting poisons, end when you
        make your daily preparations again.
      </p>
      <h2 id="ancestry-and-background">Ancestry and background</h2>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>
      <h2>Initial proficiencies</h2>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>
      <h2>Alchemy</h2>
      <p>
        You understand the complex interactions of natural and unnatural
        substances and can concoct alchemical items to meet your needs. You can
        do this using normal reagents and the Craft activity, or you can use
        special infused reagents that allow you to craft temporary items quickly
        and at no cost. Over time, you can create more and more alchemical items
        for free, and since each of them becomes more and more powerful, you
        advance in power dramatically, leaving behind those who don’t understand
        your strange science.
      </p>
      <p>
        You gain the <b>Alchemical Crafting</b> feat, even if you don’t meet
        that feat’s prerequisites, and you gain the four common 1st-level
        alchemical formulas granted by that feat. The catalog of alchemical
        items is in Chapter 11. You can use this feat to create alchemical items
        as long as you have the items’ formulas in your formula book.
      </p>

      <Feat
        id={0}
        name="Alchemical Crafting"
        tags={["general", "skill"]}
        action=""
        level={1}
        feat="Feat 1"
        description={
          <span>
            <span className="frequency">
              <b>Prerequisites:</b> trained in Crafting.
            </span>
            <br />
            You can use the Craft activity to create alchemical items. When you
            select this feat, you immediately add the formulas for four common
            1st-level alchemical items to your formula book.
          </span>
        }
      />
      <h2>Advanced Alchemy</h2>
      <p>
        During your daily preparations, after producing new infused reagents,
        you can spend batches of those infused reagents to create infused
        alchemical items. You don’t need to attempt a Crafting check to do this,
        and you ignore both the number of days typically required to create the
        items and any alchemical reagent requirements. Your advanced alchemy
        level is equal to your level. For each batch of infused reagents you
        spend, choose an alchemical item of your advanced alchemy level or lower
        that’s in your formula book, and make a batch of two of that item. These
        items have the infused trait and remain potent for 24 hours or until
        your next daily preparations, whichever comes first.
      </p>
      <h2>Quick Alchemy</h2>
      <p>
        If you need a specific alchemical item on the fly, you can use your
        infused reagents to quickly create it with the Quick Alchemy action.
      </p>
      <Spell
        name="Quick alchemy"
        action="one_action"
        tags={["alchemist", "manipulate"]}
        description={
          <span>
            <b>Cost:</b> 1 batch of infused reagents.
            <br />
            <span className="frequency">
              <b>Requirements:</b> You have the formula for the alchemical item
              you’re creating, and you’re either holding or wearing alchemist’s
              tools.
            </span>
            <br />
            You swiftly mix up a short-lived alchemical item to use at a
            moment’s notice. You create a single alchemical consumable item of
            your advanced alchemy level or lower that’s in your formula book
            without having to spend the normal monetary cost in alchemical
            reagents or needing to attempt a Crafting check. This item has the
            infused trait, but it remains potent only until the start of your
            next turn.
          </span>
        }
      />
      <h2>Formula book</h2>
      <p>
        An alchemist keeps meticulous formulas for every item they can create.
        You start with a standard formula book worth 10 sp or less for free. The
        formula book contains the formulas for two common 1st-level alchemical
        items of your choice, in addition to those you gained from Alchemical
        Crafting and your research field. The catalog of alchemical items is in
        Chapter 11.
      </p>
      <p>
        Each time you gain a level, you can add the formulas for two common
        alchemical items to your formula book. These new formulas can be for any
        level of item you can create. You learn these formulas automatically,
        but it’s also possible to find or buy additional formulas in settlements
        or from other alchemists, or to invent them with the Inventor feat.
      </p>

      <div className="featured-two">
        <h2>Sample formula book</h2>
        <p>
          You can choose any 1st-level common alchemical items for your formula
          book, but the list below contains a good selection of starter
          formulas. A beginner’s book with these formulas called The
          Fundamentals of Alchemy has become popular among mainstream alchemists
          by staying away from controversial topics like mutagens, though it has
          drawn criticism from fringe alchemists for guiding fledgling
          alchemists away from more innovative experiments.
        </p>
        <p>
          <b>Alchemical Item Formulas:</b> Lesser acid flask, lesser alchemist’s
          fire, lesser antidote, lesser antiplague, lesser cheetah’s elixir,
          lesser elixir of life, lesser tanglefoot bag, lesser smokestick.
        </p>
      </div>
    </div>
  );
};

export default AlchemistPage;
