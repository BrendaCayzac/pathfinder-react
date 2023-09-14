import React from "react";
import "../assets/styles/ClassPage.scss";

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
      <h2>Initial Proficiencies</h2>
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
              <a href="#">Ancestry and background</a>,
              <a href="#">initial proficiencies</a>, <a href="#">alchemy</a>,
              <a href="#">formula book</a>, <a href="#">research field</a>,
              <a href="#">alchemist feat</a>
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
    </div>
  );
};

export default AlchemistPage;
