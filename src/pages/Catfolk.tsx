import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { catfolkFeats } from "../middleware/CatfolkFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const CatfolkPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(catfolkFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(catfolkFeats);
  };

  function filterFeats(featLevel: string) {
    return catfolkFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="catfolk"
        book="Advanced Players Guide"
        tags={["uncommon", "humanoid", "catfolk"]}
        img="catfolk_icon.png"
        alt="Image of a catfolk"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Curious and gregarious wanderers, catfolk combine features of
            felines and humanoids in both appearance and temperament. They enjoy
            learning new things, collecting new tales and trinkets, and ensuring
            their loved ones are safe and happy. Catfolk view themselves as
            chosen guardians of natural places in the world and are often
            recklessly brave, even in the face of overwhelming opposition.
          </p>

          <p>
            Catfolk are outgoing, active humanoids who delight in discovery,
            whether of hidden ruins or a comfortable place to nap. They are
            exceptionally social, both within their tight-knit communities and
            with other creatures they meet. Remarkably brave, catfolk see
            themselves as guardians of the world against forces that would
            assail it, and they believe that strong communities, breadth of
            experience, and continual self-improvement aid them in this fight.
          </p>

          <p>
            Catfolk have fast reflexes and are even able to twist themselves in
            the air while falling to land on their feet. As quick as these
            reflexes are, catfolk have quicker tempers, shifting from effusive
            glee to aggrieved fury in an instant. Like mundane felines, catfolk
            involuntarily purr when pleased and growl when surprised or angry.
          </p>

          <p>
            If you want a character who is curious, brave, friendly, and nimble
            in body and mind, you should play a catfolk.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Demonstrate genuine interest by asking a lot of enthusiastic
              questions.
            </li>
            <li>
              Avoid interpersonal conflict by giving someone a cold shoulder or
              by simply leaving the area.
            </li>
            <li>
              Carefully scout a target or problem before striking at it quickly.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Think you monopolize conversations with your incessant queries or
              opinions.
            </li>
            <li>Consider you haughty or prideful.</li>
            <li>
              Ascribe more emotion than you feel to your involuntary purrs or
              growling.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Although all catfolk walk upright and have soft fur, a long tail,
            large ears, and vertical pupils, they show at least as much variety
            as ordinary felines. Catfolk have nimble fingers with short claws
            that are usually retractable. Most catfolk take great pride in
            maintaining their appearance and rarely suffer the indignity of
            being wet or dirty if they can avoid it.
          </p>
          <p>
            Catfolk mature quickly and are able to walk at only a few months
            old, but they otherwise start their careers at roughly the same age
            as humans do and live to be 60 or 70 years of age. Catfolk are
            rarely taller than the average human and, because of their lean
            builds, almost never weigh as much as a human of similar height.
          </p>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Catfolk call themselves amurruns, although many consider this
                name to be private. They raise their children in large extended
                families, where they are given what many other humanoids see as
                a distressing latitude to explore and get into trouble from a
                remarkably young age. Catfolk learn a trade in a loose
                apprenticeship, and the majority learn several trades over their
                lives.
              </p>
              <p>
                Catfolk societies are often led by an appointed leader who
                speaks on behalf of the community and mediates disputes. A
                catfolk leader is most often a spellcaster and usually female.
                Catfolk prefer to deal with grievances by making an elaborate
                showing of disinterest, or even leaving a community for a time
                so the problem can die away or work itself out.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Catfolk_02.png")}
                alt="Catfolk image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Catfolk aren’t a particularly religious people, but most do believe
            they were uplifted from great primeval cats to confront the evil
            abominations despoiling natural places and laboring to unmake
            reality. The gods blessed catfolk with language, the use of tools
            and weapons, and a strong sense of community.
          </p>

          <div className="featured">
            <h2>Murraseth</h2>
            <p>
              Murraseth is the largest of several remote catfolk-majority
              city-states in central Garund. Even distant catfolk take pride in
              its guilds and its Houses of Names—labyrinthine, live-in galleries
              for artists and performers who retell catfolk discoveries and
              tales. Many catfolk consider visiting a House of Names an
              important life milestone.
            </p>

            <p>
              Guilds dominate Murraseth. Perhaps the most distinctive of these
              groups is the Circle of Lifeshapers, comprised of polymorph
              specialists and healers.
            </p>
          </div>

          <p>
            Most catfolk are good. They enjoy the freedom to travel and like to
            set their own paths in life, so more catfolk are chaotic than
            lawful. Religious catfolk most often practice a nebulous form of
            animism, appeasing the spirits of the land and the creatures they
            hunt to preserve the natural order.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Catfolk are given short names in their youth. Adolescent catfolk
              are free to choose a different name when they first leave home,
              though some simply keep the name they’ve gotten used to. Catfolk
              love to add titles and honorifics to their names. Some catfolk use
              their titles exclusively among non-catfolk, and so become known by
              epithets like Six Fates, Fiend Killer, or Mistcloak.
            </p>
            <p>
              <b>Sample names:</b> Alyara, Crinto, Drewan, Espes, Ferrus,
              Gerran, Halhat, Hoya, Ruun, Sevastin, Tespa, Yonsol, Zakkar,
              Zathra
            </p>
          </div>

          <h2>Catfolk heritages</h2>
          <p>
            Catfolk have ancestors as varied as any felines. Choose one of the
            following catfolk heritages at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Clawed</label>
            <div className="content">
              <p className="text">
                Your family has particularly long, sharp claws capable of
                delivering bleeding wounds with a wicked swipe. You gain a claw
                unarmed attack that deals 1d6 slashing damage. Your claws are in
                the brawling group and have the agile, finesse, and unarmed
                traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Hunting</label>
            <div className="content">
              <p className="text">
                You come from a long line of skilled hunters and trackers and
                have a particularly keen sense of smell. You gain imprecise
                scent with a range of 30 feet. This means you can use your sense
                of smell to determine a creature’s location, as explained in the
                Detecting Creatures section of the Core Rulebook. The GM will
                usually double the range if you’re downwind from the creature or
                halve the range if you’re upwind.
                <br />
                <br />
                In addition, you gain a +2 circumstance bonus to Track a
                creature or object if you’ve smelled it before.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Jungle</label>
            <div className="content">
              <p className="text">
                You’re descended from jungle stalkers and can move swiftly
                through scrub and underbrush. You ignore difficult terrain from
                undergrowth, and greater difficult terrain from undergrowth is
                only difficult terrain for you.
              </p>

              <div className="featured">
                <h2>Other catfolk</h2>
                <p>
                  Numerous catfolk ethnicities exist beyond the Inner Sea. The
                  black-spotted Guarrxil of southern Arcadia are renowned for
                  their principled mercenary companies and heroic rangers. The
                  mysterious Caimurru of the western Arcadian coast trade more
                  with First World caravans than with other mortals. The
                  Lyashtaki catfolk of the Valashmai Jungle sometimes make treks
                  far from the jungle via coast-hopping boats.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Nine lives</label>
            <div className="content">
              <p className="text">
                Your family has always seemed to bounce back from disaster, not
                through physical hardiness or specialized skill, but from sheer
                luck. Other catfolk whisper that you have nine lives. If you are
                reduced to 0 Hit Points by a critical hit on an attack roll, you
                become dying 1 instead of dying 2.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Winter</label>
            <div className="content">
              <p className="text">
                You have a thick coat of fur that protects you from the cold.
                You gain cold resistance equal to half your level (minimum 1).
                You treat environmental cold effects as if they were one step
                less extreme (incredible cold becomes extreme, extreme cold
                becomes severe, and so on).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Flexible</label>
            <div className="content">
              <p className="text">
                Lost Omens: Ancestry Guide
                <br /> <br />
                You’ve inherited flexibility beyond that of most humanoids. You
                don’t treat tight spaces that don’t require you to Squeeze as
                difficult terrain. In addition, you get a +1 circumstance bonus
                to checks when you attempt to Escape.
              </p>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Liminal</label>
            <div className="content">
              <p className="text">
                Lost Omens: Ancestry Guide
                <br /> <br />
                You’ve inherited flexibility beyond that of most humanoids. You
                don’t treat tight spaces that don’t require you to Squeeze as
                difficult terrain. In addition, you get a +1 circumstance bonus
                to checks when you attempt to Escape.
              </p>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="heritage-8" />
            <label htmlFor="heritage-8">Sharp-eared</label>
            <div className="content">
              <p className="text">
                Lost Omens: Ancestry Guide
                <br /> <br />
                You were born with big, expressive ears that move with your
                moods and perk up at any unexpected sound. You gain a +2
                circumstance bonus to locate undetected creatures that you could
                hear within 30 feet with a Seek action. As long as you’re aware
                of a creature via sound, once per round, your ears can help you
                Point Out the creature to all allies as a free action.
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
              <li>Charisma</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Wisdom</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Amurrun</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Elven, Gnomish, Halfling, Iruxi
                (the language of the lizardfolk), Jotun, Sylvan, and any other
                languages to which you have access (such as the languages
                prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light and you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Land on your feet</h2>
            <p>
              When you fall, you take only half the normal damage and don't land
              prone.
            </p>
          </div>

          <h2>Catfolk Adventurers</h2>
          <p>
            Catfolk delight in venturing into unexplored areas, whether
            untrammeled wildernesses or ancient dungeons. They like finding
            treasures and baubles, but for most catfolk, the experience of the
            journey itself is the true reward.
          </p>

          <p>
            Typical catfolk backgrounds include acrobat, artist, gambler,
            hunter, nomad, and scout from the Core Rulebook, plus bandit,
            courier, insurgent, outrider, and root worker from this source.
            Catfolk’s inherent curiosity and agility mean they excel as
            swashbucklers, bards, fighters, and rogues. Their love of the
            natural world and drive to puzzle out secrets of all types leads
            many to become investigators, druids, or sorcerers.
          </p>

          <div className="featured">
            <h2>Catfolk luck</h2>
            <p>
              Catfolk are known for their luck, which they traditionally draw
              from spirits of creation that they’ve pleased or emulated. Many
              catfolk tend to experience this luck as an insistent urge that
              feels like a warning from a benevolent presence they can’t
              perceive. Others experience it as a reflexive awareness of danger
              beyond their normal senses. More spiritual catfolk try to tune
              into the warnings from the spirits of fortune through an art known
              as serendipity reading.
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

export default CatfolkPage;
