import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { vanaraFeats } from "../middleware/VanaraFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const VanaraPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(vanaraFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(vanaraFeats);
  };

  function filterFeats(featLevel: string) {
    return vanaraFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="vanara"
        book="Lost Omens: Impossible Lands"
        tags={["uncommon", "vanara", "humanoid"]}
        img="vanara_icon.png"
        alt="Image of a vanara"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Vanaras are inquisitive and mischievous monkey-like humanoids with
            short, soft fur, expressive eyes, and long, prehensile tails. Their
            handlike feet and agile builds serve them well in the jungle realms
            where most vanaras live.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Vanaras were born of the monkey god Ragdya’s ambitious folly
                ages ago, to spread and applaud his mischief and to serve as
                ba-sadhak, blessed seekers of fortune who would draw their
                creator’s eye to the cruelly hoarded treasure of mortal lords
                and immortal fiends. They earned the enmity of ancient rakshasa
                maharajahs for their derring-do, the scorn of the naga empire
                for their valor, and the friendship of many rural Vudrani who
                viewed them as a wild folk of deep divine portent. Such is the
                history of vanaras and their long survival against their many
                foes, from within the mahajanapadas of the deep jungle lands,
                the mountain ghats of Vudra, and the Impossible Lands.
              </p>
              <p>
                If you want to play a character who embodies the struggle
                between self-betterment and self-expression, you should play a
                vanara.
              </p>

              <h2>You might...</h2>
              <ul>
                <li>
                  Find it difficult to avoid pursuing a mystery or exploring a
                  hidden area.
                </li>
                <li>
                  Thoughtfully consider the consequences of your pranks or
                  actions.
                </li>
                <li>
                  Enjoy sharing the knowledge of things you’ve discovered with
                  your friends.
                </li>
              </ul>
              <h2>Others probably...</h2>
              <ul>
                <li>Assume you have an animalistic demeanor and habits.</li>
                <li>Take a dismissive or hostile view of your pranks.</li>
                <li>Covet your easy grace and unquenchable curiosity.</li>
              </ul>
            </div>

            <figure>
              <img
                src={require("../assets/img/Vanara_02.png")}
                alt="Vanara image"
              />
            </figure>
          </div>

          <br />
          <br />
          <div className="featured">
            <h2>Vanara backgrounds</h2>
            <p>
              Vanara society, and its complex relationship with Ragdya, produces
              many adventurers who journey in search of greater insight into
              their nature of being and into other means that might provide them
              peace and enlightenment. Nearly all children are raised on the
              many embellished tales of their ancestors, vanara folk heroes, and
              their progenitor deity, and they emulate those stories as soon as
              they can. Thus, many vanaras have a background that evokes a
              colorful life prior to adventuring, such as criminal, entertainer,
              gambler, sailor, or scout.
            </p>
          </div>

          <h2>Physical Description</h2>
          <p>
            Vanaras are humanoids with simian features, including a long,
            prehensile tail and handlike feet. They’re rarely much taller than 5
            feet, but they usually look smaller because of their slight, nimble
            builds. Vanaras are covered with a thin layer of soft fur over their
            entire bodies. This fur can be tan, brown, or golden and rarely has
            spots or stripes. The hair on a vanara’s head grows thicker and more
            luxurious; it’s easy to arrange into elaborate hairstyles, and many
            vanaras like to do so. This hair is nearly always of the same color
            as the vanara’s body fur, with the exception of rare “whitecape”
            vanaras with manes of fine, pale hair, who might be born into any
            vanara family. Vanaras have large, expressive eyes and mouths with
            blunt teeth and pointed incisors. Vanaras are adults at 13 years old
            and usually live about 60 years.
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
                Vanaras are a varied folk who seek balance and comfort in their
                lives. Many are devout without being fanatics, tricksters
                without being malicious, daring without being foolish, and
                curious without being obsessive. Although aware of their deep
                ancestral connection to Ragdya, many vanaras feel a powerful
                desire to live beyond the grace of their god and his weight in
                their history, pursuing their own paths to enlightenment. Those
                vanaras who live in Vudra feel this need the most strongly, as
                they want to pursue virtue and self-knowledge to be fulfilled
                when their souls are next reborn into the world.
              </p>
              <p>
                Although created by Ragdya, vanaras feel themselves apart from
                him in a way some find uncomfortable. Ragdya is the eternal
                trickster with supreme recklessness yet unchanging in his
                immortal permanence. Though most vanaras cherish Ragdya’s
                mischief and feats of folly on religious holidays, they also
                know he shall never fade from this world or find himself
                reincarnated into forms other than that from which the vanaras
                were shaped. Yet, vanaras aren’t so immutable. A vanara must
                reflect on their own impermanent nature and consider its effect
                on their soul and their soul’s quest for enlightenment. For all
                the mischief and daring Ragdya might enjoy without consequence,
                vanaras know recklessness and harmful tricks can impede their
                personal pursuit of enlightenment. The drive toward mischief and
                spontaneity instilled within them by their creator is hard for
                many vanaras to overcome and can create a lifetime of internal
                turmoil. This source of conflict has colored their development
                as a people who seek balance and virtue.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Vanara.png")}
                alt="Sprite image"
              />
            </figure>
          </div>

          <p>
            Vanaras look to the legends of heroic vanaras of the past for
            lessons on how to live their lives. The most notable and lauded
            accomplishment of these legendary vanaras, that which has them known
            even in the most far-flung ashram in the snow-capped border
            mountains of Vudra, was their grand act of trickery against Ravana,
            the greatest of all the rakshasa immortals. Ravana had tyrannically
            forced many noble souls, vanara and human alike, to construct a
            resplendent bridge of azure stones that would cross the planes from
            Vudra to the rakshasa’s realm. Ravana demanded that each stone be
            carved to display a mewling visage of the mortal who toiled to cut
            and shape it. Through mischief and artifice, vanaras altered the
            carvings so that, when assembled, they subtly displayed components
            of a prayer to all the Vudrani pantheon. When the bridge was finally
            finished and Ravana marched across it with his army of fiends in a
            profligate parade, the shuddering of the stones beneath their
            footsteps mimicked the movements of the communal prayer. Deities
            drawn by this display toppled the immortal maharajah, and he still
            blames mischief-making vanaras for this humiliation. Many vanaras
            thus see it as their legacy to bring shame to the wicked and
            powerful by means of clever tricks and communal effort.
          </p>

          <div className="featured">
            <h2>Vanara Enclaves</h2>
            <p>
              Outside Vudra, where their numbers are plentiful and their
              presence relatively high, vanaras are typically seen only in the
              city of Niswan in Jalmeray, where they dwell as any other citizen
              under the thakur’s influence. They’ve accompanied various Vudrani
              settlers to coastal settlements and communities in deep jungles or
              forests.
            </p>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            Vanaras are tricksters who love pranks, but they temper this
            tendency toward mischief with good intentions and a love of their
            community—however they personally define that community. They’re
            rarely agitators or troublemakers simply for the sake of causing
            chaos; they do so to encourage humility among the inflexible or
            humorless. Most vanaras are mindful of the virtues necessary to
            elevate their immortal souls and try to act accordingly. Vanaras are
            thus most likely to be neutral good.
          </p>
          <p>
            Most vanaras live in Vudra, where they’re exposed to the dizzyingly
            abundant array of Vudran deities. Nevertheless, devout vanaras
            nearly always venerate Ragdya above all others. Priests of Ragdya
            lead most vanara villages. Even vanaras who aren’t religious might
            call upon Ragdya to help them make wise decisions in times of danger
            or for guidance when an unlucky prank has caused them trouble
            they’re unsure how to escape. Vanaras interested in developing
            self-control might worship Irori instead, and regions with local
            vanara hero-gods or avatars might engender faithful sects of
            worshippers on a small scale. Some vanaras revere the evil simian
            hunter Lahkgya, but almost never openly, as this deity of ferocious
            and sudden violence is unwelcome in most vanara communities. Some
            communities instead make offerings to turn Lahkgya’s attention from
            them.
          </p>

          <h2>Natural explorers</h2>
          <p>
            Vanaras might be found anywhere throughout the Impossible Lands.
            Those who seek discipline and greater insight into the arcane
            mysteries of existence have been known to gather within Nex’s city
            of Quantium, where they trade knowledge of fiends and ancient koans
            as easily as others trade coins.
            <br />
            <br />
            Vanaras are a known, albeit quite unusual, sight within the
            metropolis of Absalom. From there, a vanara’s journey to find
            enlightenment and self-knowledge—or to escape the relentless cycles
            of their past—might take them anywhere in the world.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Newborn vanaras aren’t given names other than descriptors of their
              infant personalities or habits, like “Grip-Hand” or “Wailer.” When
              they learn to speak, vanaras are given another name based on
              important historical or mythological figures, or they’re given the
              name of a specific ancestor they resemble in appearance or
              attitude (or whom their community hopes they’ll grow to resemble).
              The chosen name usually contains consonants or vowels the young
              vanara frequently uses, as vanaras don’t see a lot of use in
              giving someone a name they can’t easily pronounce.
            </p>
            <p>
              <b>Sample names:</b> Ashpaka, Chichipi, Haangeno, Hasa, Huanu,
              Kana, Nammem, Roprutu, Thathona, Unulu, Vivatu
            </p>
          </div>

          <h2>Vanara heritages</h2>
          <p>
            Both within and outside Vudra, vanaras have a variety of heritages.
            Choose one of the following vanara heritages at 1st level.
          </p>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Jinxed</label>
            <div className="content">
              <p className="text">
                Your lineage has been exposed to curse after curse, and now,
                they slide off your feathers like rain. If you succeed at a
                saving throw against a curse or misfortune effect, you get a
                critical success instead. When you would gain the doomed
                condition, attempt a DC 17 flat check. On a success, reduce the
                value of the doomed condition you would gain by 1.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Bandaagee</label>
            <div className="content">
              <p className="text">
                Your family is one of many who claims to be descended from the
                regal vanara peacekeeping family called the Bandaagee. Bandaagee
                are the most common kind of vanaras. You’re very familiar with
                the trappings of civilization and move easily through the most
                crowded communities. You ignore difficult terrain from crowds.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Lahkgyan</label>
            <div className="content">
              <p className="text">
                Your vanara ancestors might have been born in Ragdya’s image,
                but they found survival only in service to his enemy: the
                red-faced Lahkgya. You have sharp teeth meant for gnashing and
                ripping into flesh. You can subsist on raw meat alone. You have
                a jaws unarmed attack that deals 1d6 piercing damage. Your jaws
                are in the brawling group and have the finesse and unarmed
                traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Ragdyan</label>
            <div className="content">
              <p className="text">
                Keepers of traditions and tellers of ancient tales, your family
                traces its lineage to those born directly from Ragdya’s whims.
                When you speak, others are inclined to listen to you, perhaps
                due to the divine spark of your connection to Ragdya. You gain
                one cantrip from the divine spell list; this cantrip can’t deal
                damage or otherwise cause direct harm. You can cast this spell
                as a divine innate spell at will. A cantrip is heightened to a
                spell level equal to half your level rounded up.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Wajaghand</label>
            <div className="content">
              <p className="text">
                Your ancestors were forced into labor by the rakshasa immortal
                Ravana, the First and the Last. Although their cleverness while
                in captivity saved countless lives, and they’re bound no longer,
                the time marked your family with scars upon the mind that will
                never truly heal, even across the generations. You gain a +1
                circumstance bonus to saving throws against emotion effects, and
                whenever you roll a success on a saving throw against an emotion
                effect, you get a critical success instead.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>6</p>
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
              <li>Vanaran</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Elven, Gnome, Infernal, Goblin, Sylvan,
                and any other languages to which you have access (such as the
                languages prevalent in your region).
              </li>
            </ul>

            <h2>Prehensile tail</h2>
            <p>
              You can use your long, flexible tail to perform Interact actions
              requiring a free hand, even if both hands are otherwise occupied.
              Your tail can’t perform actions that require fingers or
              significant manual dexterity, including any action that would
              require a check to accomplish, and you can’t use it to hold items.
            </p>
          </div>

          <h2>Vanara Adventurers</h2>
          <p>
            Vanaras found afield are often champions, rangers, or rogues, but
            vanaras of every class view themselves as aligning with their
            beliefs, often with a special focus on their relationship with
            Ragdya and other gods. Vanaras who rely upon magic often find
            themselves serving as witches under the patronage of distant karmic
            entities or ancient spiritual allies to the gods, or oracles with
            unusual curses and mysteries.
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

export default VanaraPage;
