import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { ratfolkFeats } from "../middleware/RatfolkFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const RatfolkPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(ratfolkFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(ratfolkFeats);
  };

  function filterFeats(featLevel: string) {
    return ratfolkFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="ratfolk"
        book="Advanced Players Guide"
        tags={["uncommon", "ratfolk", "humanoid"]}
        img="ratfolk_icon.png"
        alt="Image of a ratfolk"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Ysoki—as ratfolk call themselves—are a clever, adaptable, and
            fastidious ancestry who happily crowd their large families into the
            smallest of living spaces.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Most surface-dwelling humanoids call ysoki “ratfolk” and know
                them as a communal people who prefer cramped conditions, with up
                to 100 individuals living in a given house. If they can’t find
                homes in town, ysoki may instead live in caves and cavern
                complexes, as these provide great storage for the many and
                varied goods they bring back from trading expeditions.
              </p>
              <p>
                Ratfolk love to travel, and they can often be found on the road
                in merchant caravans. They’re good with their hands and have a
                keen eye for spotting anything out of the ordinary, from threats
                to treasures. They’re also inveterate hoarders; ysoki warrens
                are crammed full of unusual odds and ends gathered by previous
                generations and stowed away in preparation for some future
                emergency.
              </p>
              <p>
                If you want a character who is smart, fast, well-traveled, and
                adaptable, try playing a ysoki!
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Ratfolk_02.png")}
                alt="Ratfolk image"
              />
            </figure>
          </div>

          <h2>You might...</h2>
          <ul>
            <li>
              Have pride in your large extended family, and stay in contact with
              everyone in it.
            </li>
            <li>
              Like to travel near and far in search of new experiences, likely
              collecting trinkets along the way.
            </li>
            <li>Work well with others.</li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Mistake you for a wererat or another monster.</li>
            <li>
              Are surprised by your careful grooming and other fastidious
              habits.
            </li>
            <li>
              Think you’re crowding them and invading their personal space.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Ratfolk have whiskered snouts, large ears, and hairless tails, and
            typically have red eyes and short brown or black fur. A common ysoki
            is 4 feet tall and weighs around 80 pounds. Ratfolk vary
            considerably, however; even a single family group can exhibit
            substantial variation in hair color, eye color, or size.
          </p>
          <p>
            Instinct drives ysoki to maintain cleanliness, though this is also
            reinforced through their strong social structures. Other
            condescending humanoids often presume ratfolk are dirty or diseased,
            but in actuality, they are meticulous about personal hygiene.
            Because their appearance is often considered unnatural—and other
            people mistake them for wererats—ysoki often conceal their physical
            features with hoods, gloves, shoes, long-sleeved tunics, robes, and
            other layers of clothing when moving through spaces dominated by
            other ancestries.
          </p>

          <div
            className="flex-column"
            style={{
              flexDirection: "row-reverse",
            }}
          >
            <div>
              <h2>Society</h2>
              <p>
                Ysoki culture values cooperation and community. Every ysoki
                learns—through communal games, social occasions, and sports—to
                forge fast friendships and connections with ysoki outside their
                family. You may never know whose help you’re going to need, but
                when you do, you’re going to need it now.
              </p>
              <p>
                With a long tradition of working as traders and tinkers, ysoki
                travel frequently from one town to another. Their wagons are
                usually grouped into caravans of up to half a dozen vehicles.
                Ysoki wagons are pulled by exceptionally large giant rats; many
                ysoki can speak to such animals.
              </p>
              <p>
                Discrimination against ysoki has shaped their culture, prompting
                them to rely on each other and strengthening their family and
                communal bonds. Ysoki are very good at differentiating between
                bad actors and those who are simply acting out of ignorance,
                modeling good behavior and slowly working to reverse generations
                of discrimination for those willing to learn. They are always on
                the lookout for members of other ancestries who don’t judge them
                for their appearance, embracing these individuals as true
                friends and welcoming them into their communities. But they also
                can quickly spot determined bigots prone to violence and steer
                clear of such individuals, minimizing any opportunity for
                tragedy.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Ratfolk.png")}
                alt="Ratflok image"
              />
            </figure>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            Ysoki care more about their family than abstract concepts of good
            and evil. Their warrens might be chaotic dens filled with hoarded
            knickknacks, but they also obey strict social codes. Most ysoki are
            neutral.
          </p>
          <p>
            Though ysoki revere their ancestors and tend to acknowledge whatever
            deity is prevalent in their local area, Lao Shu Po has a special
            role in ysoki culture. Grandmother Rat, as she is sometimes known,
            embodies many things that are otherwise antithetical to ratfolk—she
            urges followers to put their own interests above others, and she
            encourages deceit and trickery. To most ysoki, Grandmother Rat
            accomplishes all those things ratfolk need done, but which no
            reasonable ratfolk would wish to do. For more information about Lao
            Shu Po, see page 132 of Lost Omens Gods and Magic.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Every ysoki family has perhaps two dozen names that have been
              passed down from generation to generation, sometimes with minor
              alterations or alternative nicknames. A grandfather might be
              Grivver, for example, while his daughter goes by Griva and her son
              is simply Griv. Ratfolk are often assigned nicknames and
              sobriquets by humanoids they interact with, but most ysoki find
              these names distasteful and endure them only when outside ysoki
              communities.
            </p>
            <p>
              <b>Sample names:</b> Barnan, Chikis, Chonan, Deto, Jass, Jix,
              Knagi, Kubi, Lolo, Ninnec, Nos, Rak, Renzi, Skigim, Tali, Zess
            </p>
          </div>

          <h2>Ratfolk heritages</h2>
          <p>
            Ysoki are native to underground regions, but they are a highly
            adaptable ancestry that has been found in almost every environment.
            Choose one of the following ratfolk heritages at 1st level.
          </p>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Deep rat</label>
            <div className="content">
              <p className="text">
                Your ancestors lived deeper underground than other ratfolk,
                granting you the ability to see in the dark. You gain
                darkvision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Desert rat</label>
            <div className="content">
              <p className="text">
                You are native to arid plains and likely grew up traveling the
                roads. You have a leaner build than other ratfolk, with longer
                limbs and short fur. If you have both hands free, you can
                increase your Speed to 30 feet as you run on all fours. In
                addition, environmental heat effects are one step less extreme
                for you, and you can go 10 times as long as normal before you
                are affected by starvation or thirst. However, unless you wear
                protective gear or take shelter, environmental cold effects are
                one step more extreme for you.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Longsnout rat</label>
            <div className="content">
              <p className="text">
                The long snouts that run in your family give you a keener sense
                of smell than most ratfolk. You gain imprecise scent with a
                range of 30 feet. This means you can use your sense of smell to
                determine a creature’s location, as explained in the Detecting
                Creatures section of the Core Rulebook. The GM will usually
                double the range if you’re downwind from the creature or halve
                the range if you’re upwind.
                <br />
                <br />
                In addition, you gain a +2 circumstance bonus to Perception
                checks to Seek a creature or object within the range of your
                scent.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Sewer rat</label>
            <div className="content">
              <p className="text">
                You come from a long line of ysoki from a community based in the
                sewers beneath a large settlement. You are immune to the disease
                filth fever. Each of your successful saving throws against a
                disease or poison reduces its stage by 2, or by 1 for a virulent
                disease or poison. Each critical success against an ongoing
                disease or poison reduces its stage by 3, or by 2 for a virulent
                disease or poison.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Shadow rat</label>
            <div className="content">
              <p className="text">
                Your ancestors lived in dark spaces underground, granting you
                dark fur and a vaguely unnatural mien that unnerves sapient
                creatures and frightens animals. You gain the trained
                proficiency rank in Intimidation and can use Intimidation to
                Coerce animals. When you Demoralize an animal, you don’t take a
                penalty for not sharing a language with it. If you would
                automatically become trained in Intimidation (from your
                background or class, for example), you become trained in another
                skill of your choice.
                <br />
                <br />
                Animals’ attitudes toward you begin one degree worse than
                normal, usually starting at unfriendly instead of indifferent
                for domesticated animals, and hostile instead of unfriendly for
                wild animals.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Snow rat</label>
            <div className="content">
              <p className="text">
                You have a thicker coat and bulkier frame to defend against the
                cold, granting you cold resistance equal to half your level
                (minimum 1). You treat environmental cold effects as if they
                were one step less extreme (incredible cold becomes extreme,
                extreme cold becomes severe, and so on).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Tunnel rat</label>
            <div className="content">
              <p className="text">
                Your incredibly small bones allow you to easily compress your
                body and squeeze through gaps. You gain the Quick Squeeze feat
                as a bonus feat, even if you aren’t trained in Acrobatics. Tight
                spaces not tight enough to require the Squeeze action aren’t
                difficult terrain for you.
                <Feat
                  id={0}
                  name="Quick squeeze"
                  tags={["general", "skill"]}
                  action=""
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites:</b> trained in Acrobatics
                      </span>
                      <br />
                      You Squeeze 5 feet per round (10 feet on a critical
                      success). If you’re legendary in Acrobatics, you Squeeze
                      at full Speed.
                    </span>
                  }
                />
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>6</p>
            <h2>Size</h2>
            <p>Small</p>
            <h2>Speed</h2>
            <p>25 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Dexterity</li>
              <li>Intelligence</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Strength</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Ysoki</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Draconic, Dwarven, Gnoll, Gnomish,
                Goblin, Halfling, Orcish, Undercommon or any other languages to
                which you have access (such as the languages prevalent in your
                region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Ratfolk adventurers</h2>
          <p>
            Ratfolk might take up the adventuring life to explore and travel, to
            defend their family or community, or for any number of other
            reasons.
            <br />
            <br />
            Their natural wit and nimble fingers make ratfolk excellent
            alchemists and rogues, while some specialize in ranged weapons as
            fighters or rangers.
            <br />
            <br />
            Typical ratfolk backgrounds include animal whisperer, artisan,
            merchant, medic, nomad, scout, and tinker from the Core Rulebook,
            plus bandit, barber, scavenger, and teacher from this source.
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

export default RatfolkPage;
