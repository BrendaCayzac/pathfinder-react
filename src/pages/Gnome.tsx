import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { gnomeFeats } from "../middleware/GnomeFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const GnomePage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(gnomeFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(gnomeFeats);
  };

  function filterFeats(featLevel: string) {
    return gnomeFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="gnome"
        book="Core Rulebook"
        tags={["gnome", "humanoid"]}
        img="gnome_icon.png"
        alt="Image of a gnome"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Long ago, early gnome ancestors emigrated from the First World,
            realm of the fey. While it’s unclear why the first gnomes wandered
            to Golarion, this lineage manifests in modern gnomes as bizarre
            reasoning, eccentricity, obsessive tendencies, and what some see as
            naivete. These qualities are further reflected in their physical
            characteristics, such as spindly limbs, brightly colored hair, and
            childlike and extremely expressive facial features that further
            reflect their otherworldly origins.
          </p>
          <p>
            Always hungry for new experiences, gnomes constantly wander both
            mentally and physically, attempting to stave off a terrible ailment
            that threatens all of their people. This affliction—the
            Bleaching—strikes gnomes who fail to dream, innovate, and take in
            new experiences, in the gnomes’ absence of crucial magical essence
            from the First World. Gnomes latch onto a source of localized magic
            where they live, typically primal magic, as befits their fey
            lineage, but this isn’t enough to avoid the Bleaching unless they
            supplement this magic with new experiences. The Bleaching slowly
            drains the color—literally—from gnomes, and it plunges those
            affected into states of deep depression that eventually claim their
            lives. Very few gnomes survive this scourge, becoming deeply morose
            and wise survivors known as bleachlings.
          </p>
          <p>
            If you want a character with boundless enthusiasm and an alien, fey
            outlook on morality and life, you should play a gnome.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Embrace learning and hop from one area of study to another without
              warning.
            </li>
            <li>
              Rush into action before fully taking stock of the entire
              situation.
            </li>
            <li>
              Speak, think, and move quickly, and lose patience with those who
              can’t keep up.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Appreciate your enthusiasm and the energy with which you approach
              new situations.
            </li>
            <li>
              Struggle to understand your motivations or adapt to your rapid
              changes of direction.
            </li>
            <li>
              See you as unpredictable, flighty, unreliable, or even reckless.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Most gnomes stand just over 3 feet in height and weigh little more
            than a human child. They exhibit a wide range of natural skin, hair,
            and eye colors. For gnomes that haven’t begun the Bleaching, nearly
            any hair and eye color other than white is possible, with vibrant
            colors most frequent, while skin tones span a slightly narrower
            spectrum and tend toward earthy tones and pinkish hues, though
            occasionally green, black, or pale blue. Gnomes’ large eyes and
            dense facial muscles allow them to be particularly expressive in
            their emotions.
          </p>
          <p>
            Gnomes typically reach physical maturity at the age of 18, though
            many gnomes maintain a childlike curiosity about the world even into
            adulthood. A gnome can theoretically live to any age if she can
            stave off the Bleaching indefinitely, but in practice gnomes rarely
            live longer than around 400 years.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                While most gnomes adopt some of the cultural practices of the
                region in which they live, they tend to pick and choose,
                adjusting their communities to fit their own fey logic. This
                often leads to majority gnome communities eventually consisting
                almost entirely of gnomes, as other people, bewildered by
                gnomish political decisions, choose to move elsewhere. Gnomes
                have little culture that they would consider entirely their own.
                No gnome kingdoms or nations exist on the surface of Golarion,
                and gnomes wouldn’t know what to do with such a state if they
                had one.
              </p>
              <p>
                By necessity, few gnomes marry for life, instead allowing
                relationships to run their course before amicably moving on, the
                better to stave off the Bleaching with new experiences. Though
                gnome families tend to be small, many gnome communities raise
                children communally, with fluid family boundaries. As adults
                depart the settlement, unrelated adolescents sometimes tag
                along, creating adopted families to journey together.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Gnome_02.png")}
                alt="Gnome image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Though gnomes are impulsive tricksters with inscrutable motives and
            confusing methods, many at least attempt to make the world a better
            place. They are prone to fits of powerful emotion, and they are
            often good but rarely lawful. Gnomes most commonly worship deities
            that value individuality and nature, such as Cayden Cailean, Desna,
            Gozreh, and Shelyn.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Gnome names can get quite complex and polysyllabic. They have
              little interest in familial names, and most children receive their
              names purely on a parent’s whim. Gnomes rarely concern themselves
              with how easy their names are to pronounce, and they often go by
              shorter nicknames. Some even collect and chronicle these
              nicknames. Among gnomes, the shorter the name, the more feminine
              it’s considered to be.
            </p>
            <p>
              <b>Sample names:</b> Abroshtor, Bastargre, Besh, Fijit,
              Halungalom, Krolmnite, Neji, Majet, Pai, Poshment, Queck, Trig,
              Zarzuket, Zatqualmie
            </p>
          </div>
          <h2>Gnome heritages</h2>
          <p>
            A diverse collection of oddballs, gnomes have all sorts of peculiar
            strains among their bloodlines. Choose one of the following gnome
            heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Chameleon</label>
            <div className="content">
              The color of your hair and skin is mutable, possibly due to latent
              magic. You can slowly change the vibrancy and the exact color, and
              the coloration can be different across your body, allowing you to
              create patterns or other colorful designs. It takes a single
              action for minor localized shifts and up to an hour for dramatic
              shifts throughout your body. While you’re asleep, the colors shift
              on their own in tune with your dreams, giving you an unusual
              coloration each morning. When you’re in an area where your
              coloration is roughly similar to the environment (for instance,
              forest green in a forest), you can use the single action to make
              minor localized shifts designed to help you blend into your
              surroundings. This grants you a +2 circumstance bonus to Stealth
              checks until your surroundings shift in coloration or pattern.
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Fey-touched</label>
            <div className="content">
              <p className="text">
                The blood of the fey is so strong within you that you’re truly
                one of them. You gain the fey trait, in addition to the gnome
                and humanoid traits. Choose one cantrip from the primal spell
                list. You can cast this spell as a primal innate spell at will.
                A cantrip is heightened to a spell level equal to half your
                level rounded up. You can change this cantrip to a different one
                from the same list once per day by meditating to realign
                yourself with the First World; this is a 10-minute activity that
                has the concentrate trait.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Sensate</label>
            <div className="content">
              <p className="text">
                You see all colors as brighter, hear all sounds as richer, and
                especially smell all scents with incredible detail. You gain a
                special sense: imprecise scent with a range of 30 feet. This
                means you can use your sense of smell to determine the exact
                location of a creature (as explained in the Detecting Creatures
                section in Chapter 9). The GM will usually double the range if
                you’re downwind from the creature or halve the range if you’re
                upwind.
                <br />
                <br />
                In addition, you gain a +2 circumstance bonus to Perception
                checks whenever you’re trying to locate an undetected creature
                that is within the range of your scent.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Umbral</label>
            <div className="content">
              <p className="text">
                Whether from a connection to dark or shadowy fey, from the
                underground deep gnomes also known as svirfneblin, or another
                source, you can see in complete darkness. You gain darkvision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Wellspring</label>
            <div className="content">
              <p className="text">
                Some other source of magic has a greater hold on you than the
                primal magic of your fey lineage does. This connection might
                come from an occult plane or an ancient occult song; a deity,
                celestial, or fiend; magical effluent left behind by a mage war;
                or ancient rune magic.
                <br />
                <br />
                Choose arcane, divine, or occult. You gain one cantrip from that
                magical tradition’s spell list. You can cast this spell as an
                innate spell at will, as a spell of your chosen tradition. A
                cantrip is heightened to a spell level equal to half your level
                rounded up. Whenever you gain a primal innate spell from a gnome
                ancestry feat, change its tradition from primal to your chosen
                tradition.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Vivacious</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                You have an incredibly strong connection to the positive energy
                that flows through the First World, making it harder to attack
                your life force with negative energy. You gain negative
                resistance equal to half your level (minimum 1). When you have
                the doomed condition, the condition affects you as if its value
                was 1 lower than it actually is (doomed 1 has no effect, doomed
                2 causes you to die at dying 3, and so on).
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Small</p>
            <h2>Speed</h2>
            <p>25 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Constitution</li>
              <li>Charisma</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Strength</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Gnomish</li>
              <li>Sylvan</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Dwarven, Elven, Goblin, Jotun,
                Orcish, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
          </div>
          <h2>Gnome Adventurers</h2>
          <p>
            Adventure is not so much a choice as a necessity for most gnomes.
            Adventuring gnomes often claim mementos, allowing them to remember
            and relive their most exciting stories.
            <br />
            <br />
            Gnomes often consider the entertainer, merchant, or nomad
            backgrounds. In addition, the animal whisperer, barkeep, gambler,
            and tinker backgrounds are particularly appropriate.
            <br />
            <br />
            Gnomes’ connection to magic makes spellcasting classes particularly
            thematic for you, especially classes that match the tradition of
            your primal innate spells, such as druid or primal sorcerer, though
            wellspring gnomes might choose others.
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

export default GnomePage;
