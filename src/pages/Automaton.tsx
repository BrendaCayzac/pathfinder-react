import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Spell from "../components/Spell";
import Feat from "../components/Feat";
import { automatonFeats } from "../middleware/AutomatonFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const AutomatonPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    return setFilteredFeats(automatonFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(automatonFeats);
  };

  function filterFeats(featLevel: string) {
    return automatonFeats.filter((type) => type.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        key="automaton"
        name="automaton"
        book="Guns & Gears"
        tags={["rare", "automaton", "construct"]}
        img="automaton_icon.png"
        alt="Image of an Automaton"
      />

      <section>
        <div className="content">
          <p className="introduction">
            These intelligent constructs house actual souls and represent what
            remains of a dying empire’s last attempt at greatness. Automatons
            combine technological ingenuity with magical power, creating a
            blended being wholly unique to Golarion.
          </p>
          <p>
            The Jistka Imperium was the first major human civilization to emerge
            after Earthfall, arising around the area that would later become
            Rahadoum and enduring for seven centuries thanks to great
            advancements in civics and the sciences. However, Jistka’s leaders
            often favored aggressive uses of technology, and early advances
            paved the way for arrogance, petty infighting, and corruption. The
            Jistka Imperium’s expansionist tendencies and lack of diplomacy
            earned the Imperium many enemies over the course of its existence.
            The most notable of these foes was the empire of Ancient Osirion.
          </p>

          <p>
            Osirion’s enmity ultimately sealed the Imperium’s fate, as they
            employed clever and depraved magic that proved more than a match for
            Jistka’s legendary golem army, even when the Jistkans began to cut
            corners and bind fiends into their golems. In a desperate attempt to
            fight back against internal corruption and external pressures, a
            cabal of concerned Jistkans formed the Artificer Conclave to develop
            new technologies to stave off the Imperium’s collapse and return
            Jistka to its former glory. The most successful of these
            developments were automatons, which the Conclave believed to be the
            pinnacle of Jistkan constructs—or at least, the last hope for
            Jistka’s salvation. Conclave creators transplanted the mind, life
            force, and soul of Jistkan individuals into these constructs,
            creating magical and technological marvels powered by the life
            energy of the greatest warriors and scholars the organization could
            recruit. Unfortunately, despite the Conclave’s best efforts, the
            automatons’ arrival happened too late to save the already doomed
            Imperium. The empire collapsed, leaving automatons to fend for
            themselves.
          </p>
          <p>
            The exceptional and forward-thinking construction of automatons
            means that a fair number remain today, millennia later, scattered to
            the winds. However, the passage of time has revealed one of
            automatons’ greatest weaknesses: their mortal psyches. Only the
            strongest willed have managed to retain their memories, sense of
            self, and lucidity after all this time. As each automaton remains as
            unique as any living person on Golarion; a given automaton has their
            own personality, shaped by countless experiences. Most automatons
            behave reclusively, preferring to avoid others due to fear of
            attachment or misunderstanding. Even automatons who are more willing
            to live in the open understand that their unique nature makes them a
            prime target for hunters, scholars, or worse. Rare is the automaton
            that lives without the regular occurrence of distrust or worry.
          </p>

          <p>
            If you want to play a character who is a living construct with
            powerful potential and ties to ancient magic, you should play an
            automaton.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Have lived for several centuries and through many significant
              events.
            </li>
            <li>Be hesitant to trust others until they’ve earned it.</li>
            <li>Remember little of your life before becoming an automaton.</li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Mistake you for a mindless construct when they first see you.
            </li>
            <li>
              Assume you have secret knowledge about magic and technology.
            </li>
            <li>Look upon you with awe.</li>
          </ul>

          <div className="featured">
            <h2>Enhancements</h2>
            <p>
              Automatons are built to receive enhancements and modifications to
              their bodies. Many automaton ancestry feats have an “Enhancement”
              line that represents a possible augmentation you can acquire. You
              don’t gain the benefits of the enhancement unless you take a feat
              that grants you those benefits, such as Lesser Augmentation. You
              can only gain the enhancements of a given feat once.
            </p>
          </div>

          <h2>Physical Description</h2>
          <p>
            Automatons share a common construction—a blend of magically treated
            metals and stone. This design allows automatons to withstand the
            rigors of direct combat and makes them particularly hardy. Their
            heavy bodies can move just as quickly as other combatants, making
            automatons intimidating foes. The design of an automaton varies
            depending on the needs of its role. Most automatons have a basic
            humanoid shape, though some instead have shapes that closely
            resemble animals. The majority of automatons have a single eye that
            glows with a dim, magical light. Each also contains a powerful
            artifact that both houses its individual soul and uses a combination
            of life and planar energy for power. These automaton cores are
            marvels of magical engineering whose method of creation has been
            lost to time.
          </p>
          <p>
            As constructs, automatons typically don’t need to breathe, eat, or
            sleep; however, the body of an automaton needs to vent an
            imperceivable magical exhaust at a constant rate. This venting
            process requires breathable air to prevent a buildup of exhaust that
            can clog the automaton’s systems, sometimes to fatal effect. Thus,
            automatons can still suffocate much like living creatures. Though
            they don’t sleep, automatons require a period of magical
            recalibration and restoration which stabilizes the energies within
            their core. Without this process, an automaton core is incapable of
            fully powering the automaton and they enter an inefficient state
            (similar to a humanoid who doesn’t get 8 hours of sleep).
          </p>

          <p>
            Automatons don’t age and the design of their cores grants them a
            seemingly endless power source. Many automatons that exist today are
            thousands of years old, their bodies as efficient as the day of
            their creation, even if their minds might have deteriorated with the
            strain of the ages. Automatons lost over time typically met violent
            ends. An automaton’s body is just as vulnerable to destruction as
            any other construct, though destroying an automaton core is more
            difficult. As such, an automaton’s soul might remain trapped within
            its core for years after the destruction of its body. This was the
            intent of the original creators, who hoped to provide functional
            immortality. However, in reality, the destruction of the body more
            often leads to a malfunction, requiring magical intervention such as
            resurrection magic to restore the automaton completely. In the case
            of the core’s destruction, or if it malfunctions catastrophically
            enough that it can no longer hold the soul, the core releases the
            spirit to the River of Souls.
          </p>

          <p>
            In some cases, an automaton can learn how to consciously or
            subconsciously influence its core. These automatons eventually learn
            how to release their souls from their cores, allowing their souls to
            move on when they feel they have achieved a satisfying life. This
            act leaves the automaton as a mindless construct, typically still
            active but no longer capable of anything but aimless wandering and
            occasional acts of self-defense.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              An automaton typically keeps the name they had before their
              transformation into a construct, if they can remember it. Even
              when other memories fade, memory of their name often remains. As
              such, many automatons have names with Jistkan origins. Second most
              common are automatons who had to give themselves a new name, as
              they lost their memories of the old one at some point. Those
              automatons that particularly believed in the cause of the
              Artificer Conclave might instead take the name of one of the
              conclave’s members in honor of the cause that they gave their body
              to support. Some automatons prefer to change their names over
              their lifetimes, either selecting a new name from a culture they
              encountered or adding a title to represent a significant moment in
              their lives. In some cases an automaton will use a particularly
              cherished title in place of any other name.
            </p>
            <p>
              <b>Sample names:</b> Alnhaman, Busmin, The Doleful, Enoh, Himar,
              Kantral, The Kindred, Numinar, Scholar, Tehkis, Wayfarer, Yulmian
            </p>
          </div>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Due to the disparate fates of automatons, many of them lead
                solitary lives. There are a few cases of automatons originally
                designed to work together, such as groups of warriors, who
                remain as a team and dwell together in hideouts or travel
                together as wanderers. These groups are few and far between,
                however, and automaton settlements are even rarer. The only
                pockets of automatons that begin to resemble settlements
                typically hide among the ruins of Jistka. These groups can hold
                dozens of automatons, but any attempts to contact or visit them
                tend to be fruitless. Such gatherings are especially secretive,
                and the resident automatons will protect their homes at any
                cost.
              </p>
              <p>
                Automatons are far more likely to encounter other ancestries.
                Depending on the automaton’s personality, this encounter could
                go a number of ways, ranging from extreme secrecy to open
                visitation. An automaton’s unique appearance makes them stand
                out regardless of where they’re found, but most others look upon
                them with awe or curiosity rather than fear. Magical constructs
                aren’t an alien concept across Golarion, but many of them are
                mindless. After making it past the initial shock of a thinking
                construct, it’s often not difficult for most grasp how to engage
                with an automaton. However, automatons are more likely to find
                the semblance of an everyday life in large cities like Absalom,
                Azir, or Quantium. Regardless of where they go, an automaton
                must remain on the lookout for those who would attempt to take
                their body for study or to access their core.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Automaton_02.png")}
                alt="Automaton image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            The people of the Jistka Imperium saw the aeons of Axis as ideal
            beings whose behavior was worthy of emulation, so many Jistkans were
            lawful neutral. Since many automatons contain Jistkan souls, most
            automatons are lawful neutral, or at least lawful in some capacity.
            Over the centuries, however, a fair number of automatons have
            drifted toward neutral alignments as their outlooks change without a
            primary society or set of ideals upon which to cling. Automatons
            tend to worship gods of technology or magic like Brigh and Nethys,
            or various monitor demigods. Worship of Irori and Pharasma are
            somewhat common among automatons as well. Pharasmin automatons
            likely learn how to release their souls from their cores, and often
            choose to do so. Though they are ancient beings from long before the
            time of Casandalee, a small number of automatons have recognized the
            new artificial goddess as a kindred spirit.
          </p>

          <div className="featured">
            <h2>Origins</h2>
            <p>
              The method of creating automatons as the Artificer Conclave did
              millennia ago has been lost to time. As such, most automatons who
              remain on Golarion were created during Jistka’s existence.
              However, there are a few rare automatons that have different
              origins. Anquira, herself an automaton and a high-ranking member
              of the Artificer Conclave, resides in Axis and seems to be nearing
              the point of recreating the Jistkan process. She’s created a few
              promising prototype automatons with her techniques. There are also
              rumors of another automaton doing similar research somewhere in
              the deserts of the Golden Road, though the new automatons emerging
              from the desert appear somewhat incomplete.
            </p>
            <p>
              Of significant note are the increased reports of automatons in
              southern Garund, originating from the nation of Eihlona. The
              nation is famous for its inhabitants’ skill in mixing magic with
              technology, particularly the remnants of Shory technology that
              crashed within the nation’s borders in ages past. Eihlonan mage
              crafters have managed to recreate automatons using their vast
              knowledge, magical prowess, and access to ancient technology,
              alongside insights from a few friendly automaton immigrants who
              found a respectful and welcoming home there. Though the process is
              long and arduous, Eihlona seems to be on the verge of recreating
              the success of the Artificer Conclave. If they do, they could
              someday produce hundreds, if not thousands of automatons.
            </p>
          </div>

          <h2>Automaton heritages</h2>
          <p>
            Every automaton has a unique body based on the original roles
            intended to aid the people of Jistka. Choose one of the following
            automaton heritages at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Hunter</label>
            <div className="content">
              <p className="text">
                You were designed to serve as a scout or assassin and have a
                body resembling a pack hunter like a large cat or wolf. Though
                you typically move like a quadruped, you can still stand and
                fight like a biped, allowing you to use all equipment normally.
                Your quadruped design allows you to move quickly; if you have
                both hands free, you can increase your Speed to 30 feet as you
                run on all fours.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Mage</label>
            <div className="content">
              <p className="text">
                The chamber housing your core has a more direct connection to
                the rest of your humanoid shape, allowing you to tap into your
                core’s magical energy. You gain one cantrip from the arcane
                spell list. You can cast this spell as an arcane innate spell at
                will. A cantrip is heightened to a spell level equal to half
                your level rounded up.
              </p>
              <h3>Versatile heritages</h3>
              <p className="text-two">
                Since automatons have artificial bodies, they don’t manifest the
                features of versatile heritages, even if the soul within their
                core did so in life. As a result, most automatons don’t have a
                versatile heritage. However, players who are interested in
                taking a versatile heritage are encouraged to speak with their
                GM to best determine an explanation for the versatile heritage.
                Since an automaton core draws on planar energy, there is a
                chance that said energy manifests in a versatile heritage, such
                as a tiefling automaton with an overabundance of Hell’s planar
                energy. Alternatively, a powerful soul might still be able to
                manifest the features of their heritage they had prior to
                transfer to an automaton body. An automaton with a versatile
                heritage will have minimal physical changes if any, though the
                color of energy that courses through their core and the rest of
                their body might change to properly represent the versatile
                heritage.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Sharpshooter</label>
            <div className="content">
              <p className="text">
                Your lithe, humanoid shape is designed for speed and accuracy
                suitable for ranged combat. You gain the Automaton Aim action.
              </p>
              <Spell
                name="automaton aim"
                action="one_action"
                description="You steady your body and observe the events of the battlefield to maximize the range of your next shot. You reduce the penalty for firing into your weapon’s second range increment from –2 to 0 for the next ranged attack you make this turn. You can use this action a second time in the same turn to reduce the penalty from firing into your weapon’s third range increment from –4 to 0 for the next ranged attack you make this turn."
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Warrior</label>
            <div className="content">
              <p className="text">
                Sporting a bulkier, powerful design, your body has been designed
                for combat. You have a bulky, humanoid shape. The damage die for
                your fist increases to 1d6 instead of 1d4. You don’t take a
                penalty when making a lethal attack with your fist or any other
                unarmed attack.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Medium or Small</p>
            <h2>25 feet</h2>
            <p>Medium</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Strength</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Utopian, the language of the plane of Axis</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Abyssal, Aquan, Auran, Celestial,
                Dwarven, Elven, Ignan, Infernal, Terran, and any other languages
                to which you have access (such as the languages prevalent in
                your region). At the GM's discretion, if you still have memories
                from your time in Jistka, you might speak Jistka instead of
                Common.
              </li>
            </ul>

            <h2>Automaton core</h2>
            <p>
              Your body contains an automaton core infused with planar
              quintessence that grants you power to perform various tasks and
              houses your soul and life energy. This life energy flows through
              you much like the blood of humanoids. As a result, you are a
              living creature. You don't have the typical construct immunities,
              can be affected by effects that target a living creature, and can
              recover Hit Points normally via positive energy. Additionally, you
              are not destroyed when reduced to 0 Hit Points. Instead, your life
              energy attempts to keep you active even in dire straits; you are
              knocked out and begin dying when reduced to 0 Hit Points (see Hit
              Points, Healing, and Dying section in the Core Rulebook).
            </p>

            <h2>Constructed body</h2>
            <p>
              Your physiological needs are different than those of living
              creatures. You don’t need to eat or drink. You don’t need to
              sleep, but you still need a daily period of rest. During this
              period of rest, you must enter a recuperating standby state for 2
              hours, which is similar to sleeping except you are aware of your
              surroundings and don’t take penalties for being unconscious. Much
              like with sleeping, if you go too long without entering your
              standby state, you become fatigued and can’t recover until you
              enter standby for 2 hours.
            </p>

            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Feats</h2>
          <div className="feat-section">
            <div className="feat-filter">
              {featsButtons &&
                featsButtons.map((type, index) => (
                  <button key={index} value={type.value} onClick={handleFeats}>
                    {type.name}
                  </button>
                ))}
            </div>
            <div className="feat-list">
              {filteredFeats &&
                filteredFeats.length !== 0 &&
                filteredFeats.map((feat, index) => (
                  <Feat
                    id={index}
                    key={index}
                    name={feat.name}
                    feat={feat.feat}
                    action={feat.action}
                    tags={feat.tags}
                    description={feat.description}
                    level={feat.level}
                  />
                ))}
              {filteredFeats && filteredFeats.length === 0 ? (
                <p className="no-feats">No feats match level</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomatonPage;
