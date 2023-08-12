import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { androidFeats } from "../middleware/AndroidFeats";
import { featsButtons } from "../middleware/FeatsButtons";

const AndroidPage = () => {
  const [filteredFeats, setFilteredFeats] = useState(null);
  useEffect(() => {
    setFilteredFeats(androidFeats);
  }, []);

  function handleFeats(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFilteredFeats(filterFeats(typePokemon))
      : setFilteredFeats(androidFeats);
  }

  function filterFeats(featLevel) {
    return androidFeats.filter((type) => type.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="android"
        book="Lost Omens: Ancestry Guide"
        tags={["rare", "humanoid", "android"]}
        img="android_icon.png"
        alt="Image of an Android"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Technological wonders from another world, androids have synthetic
            bodies and living souls. Their dual nature makes them quick-thinking
            and calm under pressure, but comfortable in stillness and solitude.
          </p>
          <p>
            Androids first arrived on Golarion during the Rain of Stars, when an
            interstellar vessel from the far-off planet of Androffa
            crash-landed, scattering debris across Numeria. While some android
            survivors of this crash still walk Golarion today, most were created
            from the technological pods, known as foundries, that operate
            sporadically amid the starship’s wreckage. Androids birthed from
            these mechanical wombs possess mature bodies and newborn souls, both
            organic and synthetic; they emerge knowing only their creators’
            language and the motor skills necessary for survival. They have no
            understanding of their surroundings, origin, or purpose. Most learn
            how to behave through keen observation while wandering Numeria.
          </p>

          <p>
            Androids tend to be logical introverts, rational and contemplative.
            Insatiably curious, with an urge to understand themselves and the
            world around them, androids place great value on intellectual
            pursuits. They have difficulty interpreting and expressing emotions,
            both in themselves and in others, which makes them seem distant and
            uncaring. While androids can forge emotional bonds, they find it
            more difficult to connect with non-androids.
          </p>

          <p>
            If you want a character that’s a synthetic foreigner in a fantastic
            world, forced to learn the nuances of reality and society through
            the powers of observation and logic alone, you should play an
            android.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Keep your identity a secret, assuming others want to exploit or
              harm you.
            </li>
            <li>
              Plan ahead, preparing multiple contingencies for even simple
              tasks.
            </li>
            <li>
              Calculate the repercussions of your actions, inventions, and
              thoughts before sharing them.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Assume you understand how to operate technology and that you can
              capably communicate with constructs and robots.
            </li>
            <li>
              Believe you to be immortal and envy your eternal youth and vigor.
            </li>
            <li>
              Think you have no feelings and that you can’t form emotional
              connections with others.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Androids were created in humanity’s image; thus, foundries produce
            androids that represent all humankind. Androids display great
            diversity in coloration and ethnicity, height and body shape, and
            gender identity. Androids breathe, eat, and sleep like a human,
            although they’re incapable of biological procreation. Their bodies
            contain microscopic nanites, transported by fluid too watery to be
            blood, that manage their organic processes. These nanites are
            controlled through biological circuitry that resembles tattoos and
            is typically located along an android’s hands, forearms, face, or
            neck. Many androids can harness their nanites to increase their
            bodies’ efficiency, causing the circuitry to glow.
          </p>
          <p>
            Androids don’t grow old. Instead, their organic appearance becomes
            less convincing over time, causing them to look more artificial.
            After a century, most androids feel their time coming to an end and
            willingly release their souls to the Boneyard to face Pharasma’s
            judgment. Their bodies then shut down, entering a lifeless
            hibernation as their nanites begin restoration protocol and reset
            their synthetic bodies to their original manufactured state. After a
            few weeks, a new soul enters the android’s form, triggering
            reinitialization. This process, called Renewal, is an event to be
            celebrated, akin to bearing a child. Those that die by violence
            can’t Renew, so androids go to great lengths to protect themselves
            and their brethren from harm.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Androids adopt the naming conventions of their surrounding
              societies, while those raised among their own kind instead select
              a single name that utilizes Androffan phonology. Occasionally,
              such androids add a numerical designation to their names, denoting
              how many generations their body has hosted life as a kind of
              homage to their bloodline.
            </p>
            <p>
              <b>Sample names:</b>Anati, Daniv, Era-4, Feralia, Gelegor,
              Ilgos-5, Koresh, Oris, Prime, Urdun, Verity-3, Ymry
            </p>
          </div>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Androids have a history of being exploited, enslaved, and
                destroyed by their Numerian neighbors, so they hide in order to
                survive. Most choose to keep their ancestry secret by
                integrating into human society or by adapting to a nomadic
                lifestyle. Some androids eschew humanity to live among their
                kind. Such groups often remain small by necessity; while a pair
                of androids can avoid danger through careful secrecy, large
                groups attract too much attention.
              </p>
              <p>
                Android communities are efficient and highly organized. Each
                citizen understands their role and takes pride in filling it
                effectively. Debates and lectures frequently occur, as androids
                seek to understand themselves and their world through education
                and inquiry. These insular and secretive enclaves relocate when
                discovered.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Android_02.png")}
                alt="Anadi image"
              />
            </figure>
          </div>

          <div className="featured">
            <h2>Android settlements</h2>
            <p>
              Androids are primarily found in Numeria, where they hide among
              humans or travel as nomads. A large number live openly in Starfall
              under the protection of the Black Sovereign. The slopes of Silver
              Mount house multiple android enclaves and archaeological teams,
              including Enseffa, the center of Androffan society. In the town of
              Hajoth Hakados, the locals help androids secretly flee Numeria for
              lands where they face less hatred. Hidden in a series of tunnels
              and caverns beneath the Numerian Plains, the androids of Szamrak’s
              Haven believe androids are a superior life-form. They hunt for
              foundries with the intent of liberating all androids, conquering
              Numeria to found an android-only nation, and eventually returning
              their people to their home amongst the stars.
            </p>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Most androids are neutral. They care for their own safety and that
            of their companions and their kind. Androids interested in religion
            usually worship Casandalee or Brigh, goddesses that unite invention
            and life. Other popular deities include Desna, Irori, and Gozreh.
          </p>
          <div className="featured">
            <h2>CASANDALEE AND ANDROIDS</h2>
            <p>
              Once an artificial intelligence cloned from the mind of an alien
              android, Casandalee recently ascended as the goddess of artificial
              life, free thinking, and intellectual apotheosis. Despite the
              small size and relative obscurity of her religion, the androids of
              Numeria have embraced Casandalee as their own. They seek to better
              bridge the gap between artificial and organic lifeforms, thereby
              improving the lives of androids.
            </p>
          </div>

          <h2>Android heritages</h2>
          <p>
            An android’s heritage reflects the purpose for which they were
            originally created. Choose one of the following android heritages at
            1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Artisan</label>
            <div className="content">
              <p className="text">
                Your body was originally designed to create works of art,
                complex tools, or maintain advanced machinery. You become
                trained in Crafting (or another skill if you’re already trained
                in Crafting), and you gain the Specialty Crafting skill feat in
                a specialty of your choice.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Impersonator</label>
            <div className="content">
              <p className="text">
                Your body was augmented with processes and an appearance
                intended to blend in with humans more easily. You become trained
                in Deception (or another skill if you’re already trained in
                Deception). You don’t require a disguise kit when attempting
                Deception checks to Impersonate a human. In addition, you gain a
                +4 circumstance bonus to Impersonate checks to pretend that
                you’re a human version of yourself, rather than an android. This
                bonus doesn’t apply to other checks to Impersonate humans.
              </p>
              <h3>Thoughts on androids</h3>
              <p className="text-two">
                Other people view androids through a lens of magic and
                superstition. Most consider androids eccentric spellcasters,
                often confusing them with tattooed Thassilonian wizards. Others
                see an android’s glowing circuitry and assume they’re planar
                scions. In the River Kingdoms, androids are often thought to be
                fey that imperfectly took on human form and thus can’t stand the
                touch of cold iron. Peoples in Ustalav frequently confuse
                androids for spirits, believing they can be held back by salt
                circles or banished through pious prayers.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Laborer</label>
            <div className="content">
              <p className="text">
                Your body is adapted to endure physical hardships or perform
                hard labor for long periods of time. You become trained in
                Athletics (or another skill if you’re already trained in
                Athletics), and you gain the Hefty Hauler skill feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Polyglot</label>
            <div className="content">
              <p className="text">
                You were preprogrammed with a multitude of linguistic
                proficiencies, likely to act as a translator. You learn two new
                languages, chosen from common languages and any uncommon
                languages you have access to. These languages take the same form
                (signed or spoken) as your other languages. If you select the
                Multilingual feat, you learn three new languages instead of two.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Warrior</label>
            <div className="content">
              <p className="text">
                Your body was originally created to function as a security
                officer or soldier. You’re a naturally gifted warrior
                preprogrammed for combat. You’re trained in all simple and
                martial weapons.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>25 feet</h2>
            <p>Medium</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Dexterity</li>
              <li>Intelligence</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Charisma</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Androffan</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Abyssal, Celestial, Draconic, Dwarven,
                Undercommon, Utopian, and any other languages to which you have
                access (such as the languages prevalent in your region).
              </li>
            </ul>

            <h2>Constructed</h2>
            <p>
              Your synthetic body resists ailments better than those of purely
              biological organisms. You gain a +1 circumstance bonus to saving
              throws against diseases, poisons, and radiation.
            </p>
            <h2>Emotionally unaware</h2>
            <p>
              You find it difficult to understand and express complex emotions.
              You take a –1 circumstance penalty to Diplomacy and Performance
              checks, and on Perception checks to Sense Motive.
            </p>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Android Adventurers</h2>
          <p>
            Most androids become adventurers to protect their kin from harm or
            to research the history of their people, typically by exploring
            technological ruins. Androids survive through deception, stealth,
            and subterfuge, which leads many down the path of the rogue. Others
            embrace their thirst for knowledge and understanding by becoming
            alchemists, monks, or wizards. Typical android backgrounds include
            hermit, nomad, scholar, and tinker.
          </p>

          <h2>Feats</h2>
          <p>
            At 1st level, you gain one ancestry feat, and you gain an additional
            ancestry feat every 4 levels thereafter (at 5th, 9th, 13th, and 17th
            levels). As an android, you select from among the following ancestry
            feats.
          </p>
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

export default AndroidPage;
