import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Spell from "../components/Spell";
import Feat from "../components/Feat";
import { anadiFeats } from "../middleware/AnadiFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const AnadiPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(anadiFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(anadiFeats);
  };

  function filterFeats(featLevel: string) {
    return anadiFeats.filter((type) => type.level === parseInt(featLevel));
  }

  const [visible, setVisible] = useState(false);

  const revealImage = () => {
    setVisible((visible) => !visible);
  };

  return (
    <div className="ancestry-page">
      <Header
        name="anadi"
        book="The Mwangi Expanse"
        tags={["rare", "humanoid"]}
        img="anadi_icon.png"
        alt="Image of an Anadi"
        key="anadi-header"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Anadi people are reclusive, sapient spiders who hail from the
            jungles of southern Garund. Though they act in many ways like
            natural-born shapeshifters, their twin forms actually stem from
            carefully developed magic.
          </p>
          <p>
            As a communal and peaceful people, anadi ancestors endeavored to
            establish trade with the neighbors of their homeland. However, these
            anadi soon learned that most others found their appearance to be
            extremely objectionable. Wishing to avoid conflict, ancient anadi
            retreated into isolation until they could find a solution. The
            answer came when their greatest scholars innovated a fusion of
            transmutation and illusion magic that allowed them to assume a
            humanoid form. The technique was developed, perfected, and
            eventually taught to the overwhelming majority of anadi.
          </p>

          <p>
            Early efforts with their new approach to diplomacy have yielded much
            better results, though sporadic contact means that some outsiders
            whisper false legends about anadi, such as claims that they are
            humans who transform into monstrous spiders at moonrise. Even
            contemporary explorers have reported anadi as human-spider hybrids.
            The anadi people of the current day strive to slowly but surely
            create a world where they no longer need to hide their true nature.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Only reveal your true form to people who have earned your trust.
            </li>
            <li>
              Openly express sympathy for misrepresented and unfairly
              stigmatized cultures.
            </li>
            <li>
              Provide for those you hold dear and defend them from danger
              without hesitation.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Appreciate your willingness to seek nonviolent solutions to
              complicated problems.
            </li>
            <li>Have a strong reaction to seeing your natural form.</li>
            <li>
              Assume you have an affinity for druidic magic, given your ability
              to transform.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Anadi in their true form resemble <b>human-sized spiders</b>
            with a variety of colorations. Some tones look simple or muted while
            other remain striking and vibrant, with most patterns inherited from
            an anadi's parentage.{" "}
            <b>A typical anadi measures five feet in length </b>
            from their front legs to their rear legs when standing comfortably.
          </p>
          <p>
            All anadi possesses the ability to transform into a human guise.
            This form can resemble any human ethnicity, but it's usually one
            that blends in with the region of an anadi's hatching.{" "}
            <b>Anadi reach physical maturity after 13 years</b>, going through
            multiple phases of molting along the way. A typical anadi lives to
            be about <b>80 years old</b>.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Anadi names are given by the members of the web marriage that
              raised them. Each parent contributes a single syllable, usually
              the first, from their own name. Older anadi who feel their
              identity has settled often take on or are given a phrase-title to
              honor them as well. Anadi who live among human populations rarely
              take a cover name, but some might adopt one if their given name
              strongly contrasts the norm in the local culture.
            </p>
            <p>
              <b>Sample names:</b> Altava, Anavachti, Strings-On-The-River
              Inkeelah, Kerialnamu, Maracha, Leaves-Shelter-Her-Feet Naiala,
              Orvasa, Reloana, Rivuken, Velachamon
            </p>
          </div>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Anadi live in a communal society, sharing peaceful lives farming
                mushrooms or weaving warm blankets. Their culture places great
                value on cooperation and mutual respect. Due to this cultural
                upbringing, anadi often have issues facing severe conflict and
                often come off to other ancestries as very shy. Their history of
                dealing with arachnophobia in other peoples—which anadi
                understand is often instinctual and very difficult to
                control—likewise means that anadi do their best to be
                accommodating and comforting, even in situations that aren't
                necessarily fair to them.
              </p>
            </div>
            <figure className={visible ? "" : "censored"}>
              <img
                src={require("../assets/img/Anadi_02.png")}
                alt="Anadi image"
              />
              <figcaption>Content warning: arachnophobia</figcaption>
              <button onClick={revealImage}>Show image</button>
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            The cooperative nature of anadi society and their dislike of
            violence means many <b>anadi lean toward good alignments</b>.{" "}
            <b>They're more often neutral than chaotic or lawful</b>, though the
            latter aren't unheard of. Legends say Grandmother Spider rescued
            anadi people from servitude and brought them to Golarion, becoming
            their patron deity in the process. Her values of mutual care and
            playful trickery interweave into anadi culture, and even those who
            don't worship her tell tales of her adventures.
          </p>

          <h2>Anadi heritages</h2>
          <p>
            Anadi are well-suited to survive in the wild, having developed
            diverse heritages even before the widespread use of transformation
            magic. Choose one of the following anadi heritages at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Adaptive</label>
            <div className="content">
              <p className="text">
                You descend from a line of anadi who worked to perfect their
                transformation magic, allowing them to integrate into a wider
                variety of cultures. Choose a common, Medium humanoid ancestry.
                Your human form is replaced with a form that matches this
                choice. You also gain the Adopted Ancestry feat for your chosen
                humanoid ancestry.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Polychromatic</label>
            <div className="content">
              <p className="text">
                Your body is covered with exceptionally colorful hairs that
                create vibrant, eye-catching patterns, some of which might even
                show in your human form. You become trained in Performance (or
                another skill if you were already trained in Performance), and
                you gain the Impressive Performance feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Snaring</label>
            <div className="content">
              <p className="text">
                You were hatched with hooked fangs that give you an edge when
                hunting in your true form. Your fangs attack gains the grapple
                and trip traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Spindly</label>
            <div className="content">
              <p className="text">
                Your limbs are exceptionally long in both forms, allowing you to
                skitter about with surprising agility. Your Speed increases from
                25 to 30 feet.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Venomous</label>
            <div className="content">
              <p className="text">
                Your natural form’s fangs are capable of injecting foes with
                venom. You gain the <b>Anadi Venom</b> ability.
              </p>

              <Spell
                name="Anadi venom"
                action="one_action"
                description={
                  <span>
                    <span className="frequency">
                      <b>Frequency:</b>a number of times per day equal to your
                      level
                    </span>
                    <br />
                    You envenom your fangs. If the next fangs Strike you make
                    before the end of your turn hits and deals damage, the
                    Strike deals an additional 1d6 poison damage. On a critical
                    failure, the poison is wasted as normal. At 12th level, this
                    poison damage increases to 2d6.
                  </span>
                }
              />
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
              <li>Wisdom</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Constitution</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Anadi</li>
              <li>Mwangi</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): choose from Draconic, Elven, Gnoll, Iruxi, Orcish,
                Sylvan, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>

            <h2>Actions</h2>
            <Spell
              name="Change Shape"
              action="one_action"
              tags={[
                "anadi",
                "arcane",
                "concentrate",
                "polymorph",
                "transmutation",
              ]}
              description="You change into your human or spider shape. Each shape has a specific, persistent appearance. In your human shape, you can’t use unarmed attacks granted by your ancestry. In your spider shape, you aren’t flat-footed when climbing, but you can’t use weapons, shields, or other held items of any sort nor can you take any action that has the manipulate trait."
            />
            <Spell
              name="Fangs"
              action="one_action"
              description="You were born with a natural means for hunting and self-defense. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the finesse and unarmed traits."
            />
          </div>

          <h2>Anadi Adventurers</h2>
          <p>
            Anadi who answer the call to adventure often do so to learn more
            about the world at large. Common anadi backgrounds include artisan,
            emissary, herbalist, hunter, and scholar. Anadi adventurers who want
            to support their communities often become clerics or druids. Rogue
            remains a popular choice among those who seek to hide their true
            form. Anadi who wish to continue their magical traditions tend to
            become wizards or sorcerers.
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

export default AnadiPage;
