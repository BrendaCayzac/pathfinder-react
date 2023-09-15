import React from "react";
import "../assets/styles/ClassPage.scss";
import BaseAccordion from "../components/BaseAccordion";
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

      <figure className="figure-one">
        <img
          src={require("../assets/img/alchemist_01.webp")}
          alt="Alchemist explosion"
        />
      </figure>
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
              <a href="#alchemy">alchemy</a>,{" "}
              <a href="formula-book">formula book</a>,{" "}
              <a href="#research-field">research field</a>,{" "}
              <a href="#alchemist-feat">alchemist feat</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#ability-boosts">Ability boosts</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#field-discovery">field discovery</a>,{" "}
              <a href="#powerful-alchemy">powerful alchemy</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="#alchemical-weapon-expertise">
                Alchemical weapon expertise
              </a>
              , <a href="#general-feat">general feat</a>,{" "}
              <a href="#iron-will">iron will</a>,{" "}
              <a href="#perpetual-infusions">perpetual infusions</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="#alchemical-expertise">Alchemical expertise</a>,{" "}
              <a href="#alertness">alertness</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#double-brew">double brew</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#alchemist-feat">alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#">juggernaut</a>, <a href="#">perpetual potency</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="#ancestry-feat">Ancestry feat</a>,{" "}
              <a href="#field-discovery">greater field discovery</a>,{" "}
              <a href="#">medium armor expertise</a>,{" "}
              <a href="#skill-increase">skill increase</a>,{" "}
              <a href="#">weapon specialization</a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#alchemical-alacrity">alchemical alacrity</a>,{" "}
              <a href="#evasion">evasion</a>,{" "}
              <a href="#general-feat">general feat</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="#alchemical-mastery">Alchemical mastery</a>,{" "}
              <a href="#ancestry-feat">ancestry feat</a>,{" "}
              <a href="#perpetual-perfection">perpetual perfection</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <a href="#alchemist-feat">Alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <a href="#general-feat">General feat</a>,{" "}
              <a href="#medium-armor-mastery">medium armor mastery</a>,{" "}
              <a href="#skill-increase">skill increase</a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <a href="#ability-boost">Ability boost</a>,{" "}
              <a href="#alchemist-feat">alchemist feat</a>,{" "}
              <a href="#skill-feat">skill feat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Key Terms</h3>
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
      <h3 id="ancestry-and-background">Ancestry and background</h3>
      <p>
        In addition to the abilities provided by your class at 1st level, you
        have the benefits of your selected ancestry and background, as described
        in Chapter 2.
      </p>

      <h3>Initial proficiencies</h3>
      <p>
        At 1st level, you gain a number of proficiencies that represent your
        basic training. These proficiencies are noted at the start of this
        class.
      </p>

      <h3 id="alchemy">Alchemy</h3>
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

      <h3>Advanced Alchemy</h3>
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

      <h3>Quick Alchemy</h3>
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

      <h3 id="formula-book">Formula book</h3>
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

      <h3 id="research-field">Research field</h3>
      <p>
        Your inquiries into the alchemical nature of the universe have led you
        to focus on a particular field of research. You might have a degree from
        a scientific institute, correspond with other researchers in your field,
        or work as a genius loner. Choose a field of research.
      </p>
      <p>
        Your research field adds a number of formulas to your formula book;
        these are your signature items. When using a batch of infused reagents
        to create your signature items using advanced alchemy, you create three
        items instead of two. Each time you gain a level, you can swap one of
        your signature items with another formula in your formula book. This new
        signature item must be on your research field’s list of possible
        signature items.
      </p>
      <p>The research fields in this source are as follows:</p>

      <BaseAccordion
        title="Bomber"
        number={1}
        text={
          <span>
            You specialize in explosions and other violent alchemical reactions.
            You start with the formulas for two 1st-level alchemical bombs in
            your formula book, in addition to your other formulas.
            <br />
            <br />
            When throwing an alchemical bomb with the splash trait, you can deal
            splash damage to only your primary target instead of the usual
            splash area.
          </span>
        }
      />
      <BaseAccordion
        title="Chirurgeon"
        number={2}
        text={
          <span>
            You specialize in explosions and other violent alchemical reactions.
            You start with the formulas for two 1st-level alchemical bombs in
            your formula book, in addition to your other formulas.
            <br />
            <br />
            You can use your proficiency rank in Crafting for anything that
            requires a proficiency rank in Medicine (such as prerequisites), and
            use your Crafting modifier in place of your Medicine modifier for
            all Medicine checks.
          </span>
        }
      />
      <BaseAccordion
        title="Mutagenist"
        number={3}
        text={
          <span>
            You focus on bizarre mutagenic transformations that sacrifice one
            aspect of a creature’s physical or psychological being in order to
            strengthen another. You start with the formulas for two 1st-level
            mutagens in your formula book, in addition to your other formulas.
            <br />
            <br />
            You also gain the following free action.
            <Feat
              id={0}
              name="Mutagenic Flashback"
              action="one_action"
              level={1}
              feat="Feat 1"
              description={
                <span>
                  <span className="frequency">
                    <b>Frequency:</b> once per day.
                  </span>
                  <br />
                  You experience a brief resurgence of a mutagen. Choose one
                  mutagen you’ve consumed since your last daily preparations.
                  You gain the effects of that mutagen for 1
                </span>
              }
            />
          </span>
        }
      />
      <BaseAccordion
        title="Toxicologist"
        number={3}
        text={
          <span>
            <i>Advanced Player's Guide</i>
            <br />
            <br />
            You specialize in toxins and venoms of all types. You start with the
            formulas for two common 1st-level alchemical poisons in your formula
            book, in addition to your other formulas. You can apply an injury
            poison you’re holding to a weapon you’re wielding as a single
            action, rather than as a 2-action activity, and you can change the
            DCs of your infused poisons to your class DC if it’s higher.
          </span>
        }
      />

      <h3 id="alchemist-feat">Alchemist Feats</h3>
      <p>
        At 1st level and every even-numbered level thereafter, you gain an
        alchemist class feat. These are in the Alchemist Feats section.
      </p>

      <h3 id="skill-feat">Skill Feats</h3>
      <p>
        At 2nd level and every 2 levels thereafter, you gain a skill feat. Skill
        feats are in Chapter 5 and have the skill trait. You must be trained or
        better in the corresponding skill to select a skill feat.
      </p>

      <h3 id="general-feat">General Feats</h3>
      <p>
        At 3rd level and every 4 levels thereafter, you gain a general feat.
        General feats are listed in Chapter 5.
      </p>

      <h3 id="skill-increase">Skill Increases</h3>
      <p>
        At 3rd level and every 2 levels thereafter, you gain a skill increase.
        You can use this increase either to increase your proficiency rank to
        trained in one skill you’re untrained in, or to increase your
        proficiency rank in one skill in which you’re already trained to expert.
      </p>
      <p>
        At 7th level, you can use skill increases to increase your proficiency
        rank to master in a skill in which you’re already an expert, and at 15th
        level, you can use them to increase your proficiency rank to legendary
        in a skill in which you’re already a master.
      </p>

      <h3 id="ability-boosts">Ability Boosts</h3>
      <p>
        At 5th level and every 5 levels thereafter, you boost four different
        ability scores. You can use these ability boosts to increase your
        ability scores above 18. Boosting an ability score increases it by 1 if
        it’s already 18 or above, or by 2 if it starts out below 18.
      </p>

      <h3 id="ancestry-feat">Ancestry Feats</h3>
      <p>
        In addition to the ancestry feat you started with, you gain an ancestry
        feat at 5th level and every 4 levels thereafter. The list of ancestry
        feats available to you can be found in your ancestry’s entry in Chapter
        2.
      </p>
      <div className="flex">
        <div className="flex-column">
          <h3 id="field-discovery">Field Discovery</h3>
          <p>You learn a special discovery depending on your field.</p>
          <p>
            <b>Bomber:</b> When using advanced alchemy to make bombs during your
            daily preparations, you can use a batch of reagents to create any
            three bombs instead of just two of the same bomb.
          </p>
          <p>
            <b>Chirurgeon:</b> When using advanced alchemy to make elixirs with
            the healing trait during your daily preparations, you can create
            three elixirs with each batch of reagents instead of two.
          </p>
          <p>
            <b>Mutagenist:</b> When using advanced alchemy to make mutagens
            during your daily preparations, you can use a batch of reagents to
            create any three mutagens instead of just two of the same mutagen.
          </p>
          <p>
            <b>Toxicologist:</b> When using advanced alchemy to make poisons
            during your daily preparations, you can spend one batch of reagents
            to create three poisons in any combination, instead of just two of
            the same poison.
          </p>

          <h3 id="powerful-alchemy">Powerful alchemy</h3>
          <p>
            Alchemical items you create on the fly are particularly potent. When
            you use Quick Alchemy to create an infused alchemical item that
            allows a saving throw, you can change its DC to your class DC.
          </p>

          <h2 id="alchemical-weapon-expertise">Alchemical Weapon Expertise</h2>
          <p>
            You’ve trained to more effectively wield the weapons you find in
            your lab. Your proficiency ranks for simple weapons, alchemical
            bombs, and unarmed attacks increase to expert.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/alchemist_02.webp")}
            alt="Alchemist example"
          />
        </figure>
      </div>

      <h3 id="iron-will">Iron will</h3>
      <p>
        Your mental defenses are an iron fortress. Your proficiency rank for
        Will saves increases to expert.
      </p>

      <h3 id="perpetual-infusions">Perpetual Infusions</h3>
      <p>
        You have learned how to create perpetual alchemical infusions that can
        provide a near-infinite supply of certain simple items. You gain the
        ability to create two 1st-level alchemical items using Quick Alchemy
        without spending a batch of infused reagents. The items you can select
        depend on your research field and must be in your formula book. Each
        time you gain a level, you can swap any number of your perpetual
        infusions with other eligible infusions.
      </p>

      <p>
        <b>Bomber:</b> Choose two 1st-level bombs.
      </p>
      <p>
        <b>Chirurgeon:</b> Choose two 1st-level elixirs with the healing trait.
        If a creature heals Hit Points from a perpetual infusion, that creature
        is temporarily immune to healing Hit Points from subsequent perpetual
        infusions for 10 minutes (but not immune to any other effects of those
        infusions).
      </p>
      <p>
        <b>Mutagenist:</b> Choose two 1st-level mutagens.
      </p>
      <p>
        <b>Toxicoligist:</b> Choose two common 1st-level alchemical poisons.
      </p>

      <h3 id="alchemical-expertise">Alchemical Expertise</h3>
      <p>
        Constant practice has increased the effectiveness of your concoctions.
        Your proficiency rank for your alchemist class DC increases to expert.
      </p>

      <div className="flex reverse">
        <div className="flex-column">
          <h3 id="alertness">Alertness</h3>
          <p>
            You remain alert to threats around you. Your proficiency rank for
            Perception increases to expert.
          </p>

          <h3 id="double-brew">Double brew</h3>
          <p>
            You know your formulas so well that you can concoct two items at
            once. When using the Quick Alchemy action, instead of spending one
            batch of infused reagents to create a single item, you can spend up
            to two batches of infused reagents to make up to two alchemical
            items as described in that action. These items do not have to be the
            same.
          </p>

          <h3>Juggernaut</h3>
          <p>
            Your body has become accustomed to physical hazards and resistant to
            pathogens and ailments. Your proficiency rank for Fortitude saves
            increases to master. When you roll a success on a Fortitude save,
            you get a critical success instead.
          </p>

          <h3>Perpetual Potency</h3>
          <p>
            Your perpetual infusions improve, allowing you to use Quick Alchemy
            to create more powerful items with no cost. The items you can select
            depend on your research field and must be in your formula book.
          </p>
          <p>
            <b>Bomber: Choose two 3rd-level or lower bombs.</b>
          </p>
          <p>
            <b>Chirurgeon:</b> Choose two 6th-level or lower elixirs with the
            healing trait.
          </p>
          <p>
            <b>Mutagenist:</b> Choose two 3rd-level or lower mutagens.
          </p>
          <p>
            <b>Toxicologist:</b> Choose two common 5th-level or lower alchemical
            poisons.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/alchemist_03.webp")}
            alt="Alchemist example"
          />
        </figure>
      </div>

      <h3>Greater Field Dicovery</h3>
      <p>
        You learn an incredible discovery that advances your understanding of
        your field.
      </p>
      <p>
        <b>Bomber:</b>
        You can increase the splash on your bombs to damage creatures within 10
        feet, or 15 feet if you have Expanded Splash.
      </p>
      <p>
        <b>Chirurgeon:</b> When you use Quick Alchemy to create any type of
        elixir of life, the creature drinking the elixir gains the maximum Hit
        Points possible for that elixir, instead of rolling to determine the
        number of Hit Points regained.
      </p>
      <p>
        <b>Mutagenist:</b> If you imbibe another mutagen while you are under the
        effects of a mutagen, you can gain the benefits and the drawbacks of
        both mutagens at once, despite the fact that they both have the
        polymorph trait and would not normally function together. If you come
        under the effects of any further mutagens while benefiting from two
        mutagens, you lose the benefit of one of the former mutagens of your
        choice, while retaining the drawbacks of all the mutagens. If you are
        under the effects of two mutagens and you come under the effect of a
        non-mutagen polymorph effect, you lose the benefits of the mutagens
        while retaining the drawbacks of both.
      </p>
      <p>
        <b>Toxicologist:</b> You can apply two different injury poisons to the
        same weapon, though not to a piece of ammunition. The two poisons can be
        up to six levels lower than your level, and you can’t use the poisons
        made without spending a batch of infused reagents via perpetual
        infusions. Applying the two poisons requires a separate action to apply
        each poison. Once completed, you combine the two poisons on the weapon
        into a double poison with the lower of the two poisons’ DCs. This double
        poison is only virulent if both poisons were virulent, and if the
        poisons have a different number of stages, the double poison has a
        number of stages equal to the poison with the lower number of stages.
        The target takes the effects of both poisons for its current stage.
      </p>

      <h3>Medium Armor Expertise</h3>
      <p>
        You’ve learned how to dodge while wearing light, medium, or no armor.
        Your proficiency ranks for light armor, medium armor, and unarmored
        defense increase to expert.
      </p>

      <h3>Weapon specialization</h3>
      <p>
        You’ve learned how to inflict greater injuries with the weapons you know
        best. You deal 2 additional damage with weapons and unarmed attacks in
        which you are an expert. This damage increases to 3 if you’re a master,
        and to 4 if you’re legendary.
      </p>

      <h3 id="alchemical-alacrity">Alchemy Alacrity</h3>
      <p>
        Your comfort in concocting items is such that you can create three at a
        time. When using the Quick Alchemy action, you can spend up to three
        batches of infused reagents to make up to three alchemical items as
        described in that action. These items do not have to be the same, and
        you automatically stow one of these new items as you create them.
      </p>

      <div className="flex">
        <div className="flex-column">
          <h3 id="evasion">Evasion</h3>
          <p>
            You’ve learned to move quickly to avoid explosions, dragon’s breath,
            and worse. Your proficiency rank for Reflex saves increases to
            master. When you roll a success on a Reflex save, you get a critical
            success instead.
          </p>

          <h3 id="alchemical-mastery">Alchemical Mastery</h3>
          <p>
            Your alchemical concoctions are incredibly effective. Your
            proficiency rank for your alchemist class DC increases to master.
          </p>

          <h3 id="perpetual-perfection">Perpetual Perfection</h3>
          <p>
            You have perfected your perpetual infusions, allowing you to use
            Quick Alchemy to create even more powerful items at no cost. The
            items you can select depend on your research field and must be in
            your formula book.
          </p>
          <p>
            <b>Bomber:</b> Choose two 11th-level or lower bombs.
          </p>
          <p>
            <b>Chirurgeon:</b> Choose two 11th-level or lower elixirs with the
            healing trait.
          </p>
          <p>
            <b>Mutagenist:</b> Choose two 11th-level or lower mutagens.
          </p>
          <p>
            <b>Toxocologist:</b> Choose two common 11th-level or lower
            alchemical poisons.
          </p>

          <h3 id="medium-armor-mastery">Medium Armor Mastery</h3>
          <p>
            Your skill with light and medium armor improves, increasing your
            ability to dodge blows. Your proficiency ranks for light armor,
            medium armor, and unarmored defense increase to master.
          </p>
        </div>

        <figure>
          <img
            src={require("../assets/img/alchemist_04.webp")}
            alt="Alchemist example"
          />
        </figure>
      </div>

      <h2>Alchemist Class Kit</h2>
      <ul>
        <li>
          <b>Price:</b> 8gp.
        </li>
        <li>
          <b>Bulk:</b> 3 Bulk, 7 light.
        </li>
        <li>
          <b>Money Left Over:</b> 6 gp, 5 sp, 8 cp.
        </li>
        <li>
          <b>Armor:</b> studded leather armor.
        </li>
        <li>
          <b>Weapons:</b> dagger, sling with 20 sling bullets.
        </li>
        <li>
          <b>Gear:</b> adventurer’s pack, alchemist’s tools, basic crafter’s
          book, 2 sets of caltrops.
        </li>
        <li>
          <b>Options:</b> repair kit (2 gp).
        </li>
      </ul>

      <h2>Feats</h2>
    </div>
  );
};

export default AlchemistPage;
