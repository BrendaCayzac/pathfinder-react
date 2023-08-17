import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { elfFeats } from "../middleware/ElfFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const ElfPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(elfFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(elfFeats);
  };

  function filterFeats(featLevel: string) {
    return elfFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="elf"
        book="Core rulebook"
        tags={["elf", "humanoid"]}
        img="elf_icon.png"
        alt="Image of an elf"
      />

      <section>
        <div className="content">
          <p className="introduction">
            As an ancient people, elves have seen great change and have the
            perspective that can come only from watching the arc of history. To
            some, the elves are objects of awe—graceful and beautiful, with
            immense talent and knowledge. Among themselves, however, the elves
            place far more importance on personal freedom than on living up to
            these ideals.
          </p>

          <p>
            Elves combine otherworldly grace, sharp intellect, and mysterious
            charm in a way that is practically magnetic to members of other
            ancestries. They are often voraciously intellectual, though their
            studies delve into a level of detail that most shorter-lived peoples
            find excessive or inefficient. Valuing kindness and beauty, elves
            ever strive to improve their manners, appearance, and culture.
          </p>

          <p>
            Elves are often rather private people, steeped in the secrets of
            their groves and kinship groups. They’re slow to build friendships
            outside their kinsfolk, but for a specific reason: they subtly and
            deeply attune to their environment and their companions. There’s a
            physical element to this attunement, but it isn’t only superficial.
            Elves who spend their lives among shorter-lived peoples often
            develop a skewed perception of their own mortality and tend to
            become morose after watching generation after generation of
            companions age and die. These elves are called the Forlorn.
          </p>
          <p>
            If you want a character who is magical, mystical, and mysterious,
            you should play an elf.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Carefully curate your relationships with people with shorter
              lifespans, either keeping a careful emotional distance or
              resigning yourself to outliving them.
            </li>
            <li>
              Adopt specialized or obscure interests simply for the sake of
              mastering them.
            </li>
            <li>
              Have features such as eye color, skin tone, hair, or mannerisms
              that reflect the environment in which you live.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Focus on your appearance, either admiring your grace or treating
              you as if you’re physically fragile.
            </li>
            <li>
              Assume you practice archery, cast spells, fight demons, and have
              perfected one or more fine arts.
            </li>
            <li>
              Worry that you privately look down on them, or feel like you’re
              condescending and aloof.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            While generally taller than humans, elves possess a fragile grace,
            accentuated by long features and sharply pointed ears. Their eyes
            are wide and almond-shaped, featuring large and vibrant-colored
            pupils that make up the entire visible portion of the eye. These
            pupils give them an alien look and allow them to see sharply even in
            very little light.
          </p>
          <p>
            Elves gradually adapt to their environment and their companions, and
            they often take on physical traits reflecting their surroundings. An
            elf who has dwelled in primeval forests for centuries, for example,
            might exhibit verdant hair and gnarled fingers, while one who’s
            lived in a desert might have golden pupils and skin. Elven fashion,
            like the elves themselves, tends to reflect their surroundings.
            Elves living in the forests and other wilderness locales wear
            clothing that plays off the terrain and flora of their homes, while
            those who live in cities tend to wear the latest fashions.
          </p>
          <p>
            Elves reach physical adulthood around the age of 20, though they
            aren’t considered to be fully emotionally mature by other elves
            until closer to the passing of their first century, once they’ve
            experienced more, held several occupations, and outlived a
            generation of shorter-lived people. A typical elf can live to around
            600 years old.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Elven culture is deep, rich, and on the decline. Their society
                peaked millennia ago, long before they fled the world to escape
                a great calamity. They’ve since returned, but rebuilding is no
                easy task. Their inborn patience and intellectual curiosity make
                elves excellent sages, philosophers, and wizards, and their
                societies are built upon their inherent sense of wonder and
                knowledge. Elven architecture displays their deep appreciation
                of beauty, and elven cities are wondrous works of art.
              </p>
              <p>
                Elves hold deeply seated ideals of individualism, allowing each
                elf to explore multiple occupations before alighting on a
                particular pursuit or passion that suits her best. Elves bear
                notorious grudges against rivals, which the elves call ilduliel,
                but these antagonistic relationships can sometimes blossom into
                friendships over time.
              </p>
            </div>
            <figure>
              <img src={require("../assets/img/Elf_02.png")} alt="Elf image" />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Elves are often emotional and capricious, yet they hold high ideals
            close to their hearts. As such, many are chaotic good. They prefer
            deities who share their love of all things mystic and artistic.
            Desna and Shelyn are particular favorites, the former for her sense
            of wonder and the latter for her appreciation of artistry. Calistria
            is the most notorious of elven deities, as she represents many of
            the elven ideals taken to the extreme.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              An elf keeps their personal name secret among their family, while
              giving a nickname when meeting other people. This nickname can
              change over time, due to events in the elf’s life or even on a
              whim. A single elf might be known by many names by associates of
              different ages and regions. Elven names consist of multiple
              syllables and are meant to flow lyrically—at least in the Elven
              tongue. They so commonly end in “-el” or “-ara” that other
              cultures sometimes avoid names ending in these syllables to avoid
              sounding too elven.
            </p>
            <p>
              <b>Sample names:</b> Aerel, Amrunelara, Caladrel, Dardlara,
              Faunra, Heldalel, Jathal, Lanliss, Oparal, Seldlon, Soumral,
              Talathel, Tessara, Variel, Yalandlara, Zordlon
            </p>
          </div>

          <h2>Elven heritages</h2>
          <p>
            Elves live long lives and adapt to their environment after dwelling
            there for a long time. Choose one of the following elven heritages
            at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Arctic</label>
            <div className="content">
              You dwell deep in the frozen north and have gained incredible
              resilience against cold environments, granting you cold resistance
              equal to half your level (minimum 1). You treat environmental cold
              effects as if they were one step less extreme (incredible cold
              becomes extreme, extreme cold becomes severe, and so on).
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Cavern</label>
            <div className="content">
              <p className="text">
                You were born or spent many years in underground tunnels or
                caverns where light is scarce. You gain darkvision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Seer</label>
            <div className="content">
              <p className="text">
                You have an inborn ability to detect and understand magical
                phenomena. You can cast the detect magic cantrip as an arcane
                innate spell at will. A cantrip is heightened to a spell level
                equal to half your level rounded up.
                <br />
                <br />
                In addition, you gain a +1 circumstance bonus to checks to
                Identify Magic and to Decipher Writing of a magical nature.
                These skill actions typically use the Arcana, Nature, Occultism,
                or Religion skill.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">RWhisperock</label>
            <div className="content">
              <p className="text">
                Your ears are finely tuned, able to detect even the slightest
                whispers of sound. As long as you can hear normally, you can use
                the Seek action to sense undetected creatures in a 60-foot cone
                instead of a 30-foot cone. You also gain a +2 circumstance bonus
                to locate undetected creatures that you could hear within 30
                feet with a Seek action.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Woodland</label>
            <div className="content">
              <p className="text">
                You’re adapted to life in the forest or the deep jungle, and you
                know how to climb trees and use foliage to your advantage. When
                Climbing trees, vines, and other foliage, you move at half your
                Speed on a success and at full Speed on a critical success (and
                you move at full Speed on a success if you have Quick Climb).
                This doesn’t affect you if you’re using a climb Speed.
                <br />
                <br />
                You can always use the Take Cover action when you are within
                forest terrain to gain cover, even if you’re not next to an
                obstacle you can Take Cover behind.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Ancient</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                In your long life, you’ve dabbled in many paths and many styles.
                A typical ancient elf is at least 100 years old, though you
                might be younger at the GM’s discretion. Choose a class other
                than your own. You gain the multiclass dedication feat for that
                class, even though you don’t meet its level prerequisite. You
                must still meet its other prerequisites to gain the feat.
              </p>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Desert</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                You live under the desert’s blazing heat, gaining incredible
                resilience to warm environments. You gain fire resistance equal
                to half your level (minimum 1), and environmental heat effects
                are one step less extreme for you (incredible heat becomes
                extreme, extreme heat becomes severe, and so on).
              </p>
            </div>
          </div>
          <div className="relevant">
            <h2>Hit Points</h2>
            <p>6</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>30 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Dexterity</li>
              <li>Intelligence</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Constitution</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Elven</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Celestial, Draconic, Gnoll, Gnomish,
                Goblin, Orcish, Sylvan, and any other languages to which you
                have access (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Elven Adventurers</h2>
          <p>
            Many elves adventure to find beauty and discover new things. Typical
            backgrounds for an elf include emissary, hunter, noble, scholar, or
            scout. Elves often become rangers or rogues, taking advantage of
            their dexterity, or alchemists or wizards, exploring their
            intellectual curiosity.
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

export default ElfPage;
