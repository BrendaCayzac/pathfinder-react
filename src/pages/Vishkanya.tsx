import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { vishkanyaFeats } from "../middleware/VishkanyaFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const VishkanyaPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(vishkanyaFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(vishkanyaFeats);
  };

  function filterFeats(featLevel: string) {
    return vishkanyaFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="vishkanya"
        book="Lost Omens: Impossible Lands"
        tags={["rare", "vishkanya", "humanoid"]}
        img="vishkanya_icon.png"
        alt="Image of a vishkanya"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Vishkanyas are ophidian humanoids who carry potent venom within
            their blood and saliva. Largely misunderstood due to old tales of
            their toxicity and natural finesse, vishkanyas work to grow into
            more than just what stories paint them to be.
          </p>
          <div className="flex-column">
            <div>
              <p>
                The true nature of vishkanyas’ origin is a matter of debate.
                Some vishkanyas believe they are rejected spawn of Ravithra,
                which explains the animosity between vishkanyas and nagas.
                Others believe themselves the stolen offspring of a forgotten
                progenitor whose name was excised from history. Regardless, one
                thing is quite clear: vishkanyas are survivors. Throughout
                history, fear of their deadly abilities forced vishkanyas to
                experience subjugation, exploitation, and ostracizing. Yet
                through it all, they endured. Now free of chains to bind them,
                vishkanyas live in close-knit groups, and use their love of
                storytelling and the arts to keep a detailed history of their
                people while they determine how best to proceed in a world ripe
                with opportunity.
              </p>

              <h2>You might...</h2>
              <ul>
                <li>Have a powerful sense of community.</li>
                <li>
                  Find peace and fulfillment in having a creative pursuit.
                </li>
                <li>
                  Be adept at matching the environment around you to fit into
                  any number of diverse situations.
                </li>
              </ul>
            </div>

            <figure>
              <img
                src={require("../assets/img/Vishkanya_02.png")}
                alt="Vishkanya image"
              />
            </figure>
          </div>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Initially mistake you for having a tiefling or draconic heritage.
            </li>
            <li>Think you are an expert in poisons, toxins, and espionage.</li>
            <li>
              Misunderstand the nature of your venom and fear physical contact.
            </li>
          </ul>

          <div className="featured">
            <h2>Vishkanya backgrounds</h2>
            <p>
              Vishkanyan backgrounds commonly reflect the individual’s or their
              family’s role in the community, which can include artist, hunter,
              acolyte, or emissary. Those who leave to explore the world outside
              might be entertainers, gamblers, or guards. Their natural grace
              and agility make vishkanyas excellent rogues, monks, or rangers,
              although bards, swashbucklers, and alchemists are not unusual to
              see.
            </p>
          </div>

          <h2>Physical Description</h2>
          <p>
            Vishkanyas are humanlike in appearance with ophidian features that
            become clear in close proximity. They are naturally tall and lithe
            with bright golden eyes, vertical pupils, and a forked tongue. Their
            small, smooth scales range from earthy tones of browns and greens to
            bright displays of colored patterns. Hair color is typically of
            darker shades, though there are occasional instances of brighter
            colors through parts of the hair. Vishkanyan women are usually
            taller than the men, though neither ever truly stops growing. As
            such, vishkanyas can reach heights of 7 feet or taller in old age.
          </p>
          <p>
            Mixed vishkanya families aren’t unknown. Vishkanya offspring from
            this background sometimes strongly resemble their non-vishkanya
            parent, with only a few stray tells, such as sharp canine teeth, to
            indicate their heritage. Vishkanyas sometimes refer to these
            children as “scaleless” or “subtle” but otherwise welcome them as
            any other among their kin, though sadly their appearance can fuel
            paranoia among other ancestries toward a people who are already
            misunderstood.
          </p>

          <div className="flex-column reverse">
            <div>
              <h2>Society</h2>
              <p>
                Vishkanyas live in small, tight-knit communities between 50 and
                100 individuals who assimilate discreetly into larger societies,
                with many such groups scattered within a larger area. At the
                head of these groups is a selection of women chosen for their
                wisdom and knowledge. Vishkanyas often have multiple partners,
                give birth in multiples, and adhere to maternal inheritances.
                Children are generally free to choose their occupation and the
                nature of their contribution to the larger community, with many
                vishkanyas pursuing some sort of craft or art. Some roles are
                burdened with the responsibility of cultural and historical
                record-keeping, however, and these important tasks continue
                across generations. Traditionally, these culturally minded
                vishkanyas regularly meet in secret congregations for the
                purpose of sharing stories, information, and resources,
                providing support for youth and creating advisory bodies to help
                make large-scale decisions for vishkanyas of a given area. The
                desire to preserve vishkanyan culture has kept this practice
                going for centuries, yet recently, some have called for more
                open interaction with the world in an attempt to proudly share
                vishkanyan culture.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Vishkanya.png")}
                alt="Vishkanya image"
              />
            </figure>
          </div>
          <p>
            Vishkanyas are often mischaracterized as indiscriminately venomous
            or inherently malicious by other ancestries, which has led to them
            having very strong concepts of their own ethnicity and their
            separation from those they consider “outsiders.” While most
            vishkanyas are gracious and hospitable to non-vishkanya visitors, a
            large stir often arises around the concept of allowing such people
            into their communities in a more involved capacity. Parents
            carefully watch any children who seem too attached to non-vishkanya
            friends, and talk of romance and marriage with another ancestry will
            inevitably provoke many a long family discussion—though not
            necessarily hostile ones.
          </p>

          <div className="featured">
            <h2>Vishkanya Enclaves</h2>
            <p>
              Vishkanya homes can be found wherever a community decides to
              settle, usually in or around other major settlements. Some
              reclusive groups can be found in the jungles or wetlands of Vudra.
              Those who traveled to Jalmeray typically make their homes in
              Niswan, as the Niswan community has slowly become more open. Other
              vishkanyas decided instead to settle in the forests or coasts of
              the island to create their own ideal communities.
            </p>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            Concerned mainly with the preservation of their communities,
            vishkanyas tend to adopt neutral alignments. Vishkanyas who take to
            individualistic travel to teach others about their ancestry, or
            simply to experience the world, might be neutral or chaotic good.
            The topic of faith can be quite different among vishkanyan groups,
            with some sticking to old vishkanyan beliefs, and some to Vudrani
            deities like Likha or Ashukharma. Other groups outside Vudra might
            embrace local gods with tenets of freedom or the arts, such as
            Arazni, Cayden Cailean, or Shelyn, or divinities more specific to
            individual pursuits.
          </p>

          <h2>Vishkanya travelers</h2>
          <p>
            Outside Jalmeray, vishkanyas are rare. A small number found their
            way into the Mwangi Expanse, the Shackles, and even Absalom. Only a
            handful are known to have gone past that, as intercommunity
            communication covers only so much. Even so, vishkanyas might find
            their way anywhere that has need of a skilled blade or a talented
            artist.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Vishkanyan names often include short vowel sounds in the middle of
              the name, with a large number of fricative consonants pronounced
              most accurately with a forked tongue. Names are often chosen from
              momentous events in vishkanyan history or from matters related to
              the maternal line of the child. When they go through significant
              life events, vishkanyas may choose new names for themselves, and
              many often do so multiple times. Each name represents an important
              part of the individual’s story—who they were, and who they have
              become.
            </p>
            <p>
              <b>Sample names:</b> Ashath, Casuthis of Guiding Hands, Enysi,
              Izith, Othasee, Riddle of Esaviz, Salthazar, Thasi the Ragebreaker
            </p>
          </div>

          <h2>Vishkanya venom</h2>
          <p>
            All vishkanya carry toxins in their veins, which manifest as
            follows.
          </p>

          <h2>Innate venom</h2>
          <p>
            Your blood carries toxins deadly to all but yourself. You gain the
            Envenom action, which can deliver minor vishkanyan venom. The save
            DC for your venom is equal to the higher of your class DC or spell
            DC.
          </p>

          <Spell
            name="envenom"
            tags={["manipulate"]}
            action="one_action"
            description={
              <span>
                <span className="frequency">
                  <b>Frequency:</b> once per day.
                </span>
                <br />
                Through use of either saliva or blood, you use your innate
                toxins to apply vishkanyan venom to your weapon or a piece of
                ammunition. To use your blood, you must be injured, or you can
                deal 1 slashing damage to yourself as part of the action. The
                vishkanyan venom remains potent until the end of your next turn,
                or until you expend it as normal for an injury poison by either
                hitting a target or critically failing an attack roll.
                <br />
                <br />
                <b>Minor Vishkanyan Venom </b>(injury, poison){" "}
                <b>Saving Throw</b>
                Fortitude; <b>Maximum Duration</b> 6 rounds; Stage 1 1d4 poison
                damage (1 round); Stage 2 1d4 poison damage (1 round); Stage 3
                1d4 poison damage (1 round)
              </span>
            }
          />

          <h2>Vishkanya heritages</h2>
          <p>Choose one of the following vishkanya heritages at 1st level.</p>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Elusive</label>
            <div className="content">
              <p className="text">
                Your flexible body seems unnaturally fluid to some, though they
                can rarely put a finger on what seems strange about you. You can
                escape foes with ease. You gain a +1 circumstance bonus to
                checks to Escape. Additionally, you move twice as fast when
                Squeezing.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Keen-venom</label>
            <div className="content">
              <p className="text">
                You’re practiced with using your venom in combat, allowing you
                to employ your venom at a moment’s notice. Your Envenom action
                doesn’t trigger reactions that normally trigger on a manipulate
                action. Additionally, you gain the Venom Draw action.
              </p>
              <Spell
                name="Venom draw"
                action="one_action"
                description={
                  <span>
                    <span className="frequency">
                      <b>Requirements:</b> Your Envenom action hasn’t been
                      expended.
                    </span>
                    <br />
                    You quickly envenom poisonous saliva on your weapon as you
                    draw it. Interact to draw a weapon, and then Envenom it.
                    This uses up your daily use of Envenom.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Old venom</label>
            <div className="content">
              <p className="text">
                You have a direct matrilineal line to the original group of
                vishkanyas upon the Vudrani ships that came to reclaim Jalmeray.
                Since then, your family has adjusted well to a new life in the
                Inner Sea. You become trained in Society (or another skill of
                your choice if you’re already trained in Society), and you gain
                your choice of the Courtly Graces or Streetwise feat.
                <Feat
                  id={0}
                  name="Courtly graces"
                  tags={["general", "skill"]}
                  action=""
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites:</b> trained in Society.
                      </span>
                      <br />
                      You were raised among the nobility or have learned proper
                      etiquette and bearing, allowing you to present yourself as
                      a noble and play games of influence and politics. You can
                      use Society to Make an Impression on a noble, as well as
                      with Impersonate to pretend to be a noble if you aren’t
                      one. If you want to impersonate a specific noble, you
                      still need to use Deception to Impersonate normally, and
                      to Lie when necessary.
                    </span>
                  }
                />
                <Feat
                  id={0}
                  name="Streetwise"
                  tags={["general", "skill"]}
                  action=""
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites:</b> trained in Society.
                      </span>
                      <br />
                      You know about life on the streets and feel the pulse of
                      your local settlement. You can use your Society modifier
                      instead of your Diplomacy modifier to Gather Information.
                      In any settlement you frequent regularly, you can use the
                      Recall Knowledge action with Society to know the same
                      sorts of information that you could discover with
                      Diplomacy to Gather Information. The DC is usually
                      significantly higher, but you know the information without
                      spending time gathering it. If you fail to recall the
                      information, you can still subsequently attempt to Gather
                      Information normally.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Prismatic</label>
            <div className="content">
              <p className="text">
                Your scales shimmer and catch the light in an intoxicating
                display of colors. You become trained in Performance (or another
                skill of your choice if you’re already trained in Performance)
                and gain the Fascinating Performance feat.
                <Feat
                  id={0}
                  name="Fascinating performance"
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
                      When you Perform, compare your result to the Will DC of
                      one observer. If you succeed, the target is fascinated by
                      you for 1 round. If the observer is in a situation that
                      demands immediate attention, such as combat, you must
                      critically succeed to fascinate it and the Perform action
                      gains the incapacitation trait. You must choose which
                      creature you’re trying to fascinate before you roll your
                      check, and the target is then temporarily immune for 1
                      hour.
                      <br />
                      <br />
                      If you’re an expert in Performance, you can fascinate up
                      to four observers; if you’re a master, you can fascinate
                      up to 10 observers; and if you’re legendary, you can
                      fascinate any number of observers at the same time.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Scalekeeper</label>
            <div className="content">
              <p className="text">
                You are part of the family of vishkanyas in your community
                tasked with keeping records of the history and experiences of
                your people. Your scholarly skill affords you a quick mind. Once
                per day, you can attempt to Recall Knowledge as a free action.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Venom resistant</label>
            <div className="content">
              <p className="text">
                Your body contains not just venom but numerous antivenoms. You
                gain poison resistance equal to half your level (minimum 1), and
                each of your successful saving throws against a poison
                affliction reduces its stage by 2, or by 1 for a virulent
                poison. Each critical success against an ongoing poison reduces
                its stage by 3, or by 2 for a virulent poison.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>25 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Dexterity</li>
              <li>Free</li>
            </ul>
            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>
            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Vishkanya</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): hoose from Aklo, Aquan, Draconic, Elven, Goblin,
                Undercommon, Vanaran, and any other languages to which you have
                access (such as the languages prevalent in your region).
              </li>
            </ul>

            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Innate venom</h2>
            <p>See Vishkanya Venom, below.</p>
          </div>

          <h2>Vishkanya Adventurers</h2>
          <p>
            Vishkanyas may answer the call of adventure for many reasons:
            providing income for their community, developing self-expression and
            fulfillment, spreading knowledge and understanding of vishkanyas,
            accumulating stories of other peoples, or simply experiencing the
            world outside their family.
          </p>

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
                    key={index}
                    name={feat.name}
                    feat={feat.feat}
                    action={feat.action}
                    tags={feat.tags}
                    description={feat.description}
                    level={feat.level}
                    id={index}
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

export default VishkanyaPage;
