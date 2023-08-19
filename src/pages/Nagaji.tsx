import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { nagajiFeats } from "../middleware/NagajiFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const NagajiPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(nagajiFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(nagajiFeats);
  };

  function filterFeats(featLevel: string) {
    return nagajiFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="nagaji"
        book="Lost Omens: Impossible Lands"
        tags={["uncommon", "nagaji", "humanoid"]}
        img="nagaji_icon.png"
        alt="Image of a nagaji"
      />

      <section>
        <div className="content">
          <div className="flex-column">
            <div>
              <p className="introduction">
                With humanoid figures and serpentine heads, nagaji are heralds,
                companions, and servitors of powerful nagas. They hold a deep
                reverence for holy areas and spiritual truths, an aspect many
                others find as intimidating as a nagaji’s appearance.
              </p>
              <p>
                Nagaji are creations of the goddess Nalinivati, who was inspired
                by both humans and nagas. This inspiration, alongside nagaji’s
                devotion to nagas, has led many to claim nagaji were created to
                be servants. However, Nalinivati created nagaji simply for the
                sake of creating. She envisioned a world where nagas and nagaji
                worked together to succeed, with nagas serving as sacred
                guardians, and nagaji living as mortals upon Golarion,
                respecting nagas for their strength and wisdom. Nagaji live up
                to this expectation, forming nations, temples, and villages with
                as many varied governments, societies, and traditions as there
                are scales on a serpent’s back. If nagaji can be said to share
                any trait, it’s devotion, be it to a community, a temple, a
                concept, or a lifestyle. Most nagaji are also drawn to the
                spiritual in all its expressions, even the darker aspects of
                philosophies and religions.
              </p>
              <p>
                If you want a character who combines the crushing strength and
                the sinuous mystery of a serpent, you should play a nagaji.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Nagaji_02.png")}
                alt="Nagaji image"
              />
            </figure>
          </div>

          <h2>You might...</h2>
          <ul>
            <li>Enjoy the intersection of spirituality and everyday life.</li>
            <li>
              Have deep reserves of patience for tasks others might find boring.
            </li>
            <li>
              Adhere to strong beliefs and traditions about your place in the
              universe.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Assume you have no goals or interests beyond serving nagas.</li>
            <li>
              Find your unblinking eyes and serpentine features intimidating.
            </li>
            <li>
              Are awed by your connection and dedication to holy natural places.
            </li>
          </ul>

          <div className="featured">
            <h2>Nagaji backgrounds</h2>
            <p>
              As the backbone of naga-ruled societies, nagaji can have any
              background imaginable, reflecting their intended role in society.
              Outside naga realms, nagaji adventurers often have the acolyte,
              emissary, guard, or merchant backgrounds. A nagaji’s strength
              means they excel as fighters and champions, but they’re flexible
              enough that they can do well in any role they put their mind to,
              and clerics, sorcerers, and alchemists are popular professions.
            </p>
          </div>

          <h2>Physical Description</h2>
          <p>
            Nagaji are prone to sharp differences in appearance. Some have tails
            alongside legs, some have sharp claws on their hands and feet, and
            some are so unique from their kin that they’re mistaken for lamias
            rather than nagaji. The most common nagaji features are a serpentine
            head and a humanoid body. They usually have the unblinking eyes of a
            snake, though other peoples often claim a nagaji’s gaze is far more
            intense. Scales cover nagaji bodies, with patterns that resemble
            those of snakes or nagas. Depending on their heritage, a nagaji’s
            neck might be as long as a swan’s or as short as a human’s, and many
            have a frill of skin or scales down their back. Nagaji tend to
            possess crushing strength, but how it manifests can vary; some have
            bulky figures, while others have the slender yet powerful
            musculature of a snake.
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
                Nagaji communities widely vary, from ancient empires to tiny
                fishing villages. They tend to be isolated from other peoples,
                more as a matter of convenience than choice; nagaji have
                different physical needs than most ancestries, so even when
                integrated into mixed communities, they tend to live with other
                nagaji. Everything from marriage traditions, religion, social
                roles, valued arts, and methods of governance differs in
                specific nagaji communities. Within these communities, however,
                nagaji often have very strict and traditional views on these
                topics. Multiple instances of wars between nagaji have come
                about due to one group of nagaji finding another’s practices
                unacceptable. This perspective applies to relations with other
                peoples as well. For instance, most nagaji consider themselves
                rivals and enemies of garudas due to their historical legends,
                even if the nagaji involved have never even seen a garuda.
              </p>
              <p>
                Nagaji originated in the Tian Xia region of Nagajor. Though they
                have since spread across Golarion to regions such as Vudra and
                Jalmeray, many of them still carry traditions from their
                ancestral homeland. Tian and Vudrani concepts of elements,
                medicine, and spirituality are highly common among nagaji,
                especially given their tendency of seeing themselves as highly
                pious beings. Nagaji mostly eschew the human concept of castes,
                beyond the vague view of a “natural order” that sees nagas as
                holy guides to mortal nagaji, but they can see the appeal of the
                concept of karma and the righteousness of fulfilling their
                proper role in the universe. While they have little physical
                need for clothes, as they stick to hot and humid environments,
                nagaji wear them with pride and treat them as decorative
                elements in the same manner as jewelry.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Nagaji_03.png")}
                alt="Nagaji image"
              />
            </figure>
          </div>
          <p>
            As nagas are usually matriarchal, nagaji have a strong respect for
            women in leadership positions. Not all nagaji follow suit with
            matriarchal societies, but they tend to trace lineage through the
            mother, and almost no nagaji societies are strictly patriarchal.
          </p>

          <div className="featured">
            <h2>Nagaji enclaves</h2>
            <p>
              The original nagaji home is Nagajor, a hot and jungle-covered land
              in the south of Tian Xia. Here, polities of naga rulers and nagaji
              citizens dominate the area, each unique in its own right; a left
              turn might bring a traveler to an overbearing tyranny, while a
              right turn might take one to an idyllic paradise. Wherever nagas
              can be found, however, nagaji are quick to follow. Nagaji
              settlements are also found in Vudra, central and southern Tian
              Xia, and Jalmeray, with a few slipping into Garund and Casmaron
            </p>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Nagaji are most commonly neutral but otherwise don’t have any strong
            pull toward specific alignments. The presence of a naga can sway
            nagaji toward that naga’s ethos, but a nagaji’s view on life tends
            to be determined by the culture to which they belong.
          </p>

          <h2>Enclaves</h2>
          <p>
            Nagaji overwhelmingly worship Nalinivati, their creator, to the
            point that any nagaji who pay homage to a different god over
            Nalinivati provoke strong negative reactions from their kin. While
            nagaji believe reverence for Ravithra, the supposed mother of nagas,
            to be proper and accept it more readily than other faiths, most
            believe Ravithra shouldn’t be troubled with the requests of mortal
            adherents. A very small minority of nagaji in Jalmeray are drawn to
            the worship of the war god Diomazul; these adherents are tolerated
            by other nagaji, but seen as just as terrifying and dangerous as
            their patron god and usually avoided.
          </p>

          <h2>Nagaji travelers</h2>
          <p>
            Nagaji are very rarely found outside hot and humid climates. Their
            ophidian natures leave them sluggish in cold weather, and they
            require a certain amount of moisture to shed easily—excessive
            dryness can result in dead skin unpleasantly sticking to their
            scales. Areas that are unfamiliar with nagaji are also likely to
            mistake them for serpentfolk, a tragic misunderstanding that halts
            nagaji communities from spreading further.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Nagaji names vary depending on what region of the world they
              occupy, but they tend to possess short vowels when they have any
              at all. Nagaji usually name themselves or allow groups of siblings
              to name each other as children, a tradition that often sees nagaji
              eagerly shedding these names for new ones when they reach
              adulthood.
            </p>
            <p>
              <b>Sample names:</b> Adesha, Garija, Kaya, Kuwana, Onok, Paravata,
              Sheni, Takasha, Tasi, Ulu, Vaski, Yulbin
            </p>
          </div>

          <h2>Nagaji heritages</h2>
          <p>
            Nagaji physiology commonly varies between individuals. Choose one of
            the following nagaji heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Hooded</label>
            <div className="content">
              <p className="text">
                You bear the hooded head of a spitting cobra, and like such
                cobras, you can shoot streams of venom from your mouth. You gain
                a venomous spit ranged unarmed attack with a range increment of
                10 feet that deals 1d4 poison damage. On a critical hit, the
                target takes persistent poison damage equal to the number of
                weapon damage dice. Your spit doesn’t have a weapon group or a
                critical specialization effect.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Sacred</label>
            <div className="content">
              <p className="text">
                You stand out from most nagaji, with the upper body of a
                beautiful human and the lower body of a green or white snake.
                Legends claim your ancestors were faithful snakes uplifted by
                Nalinivati rather than nagaji created by the goddess. Instead of
                a fangs unarmed attack, you have a tail attack that deals 1d6
                bludgeoning damage, is in the brawling weapon group, and has the
                finesse and unarmed traits. You gain a +2 circumstance bonus to
                your Fortitude or Reflex DC against attempts to Grapple or Trip
                you. This bonus also applies to saving throws against effects
                that would grab you, restrain you, or knock you prone.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Titan</label>
            <div className="content">
              <p className="text">
                You were raised to be a warrior or a bodyguard, and your
                specialized diet and bulging muscles have made your scales as
                strong as armored plates. Your scales are medium armor in the
                plate armor group that grant a +4 item bonus to AC, a Dex cap of
                +1, a check penalty of –2, a Speed penalty of –5 feet, a
                Strength value of 16, and have the comfort trait. You can never
                wear other armor or remove your scales. You can etch armor runes
                onto your scales.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Unseen</label>
            <div className="content">
              <p className="text">
                You can change your skin color to blend in with your
                surroundings, making minor shifts with a single action and
                dramatic changes over the course of an hour. When you’re in an
                area where your coloration is roughly similar to the environment
                (for instance, forest green in a forest), you can use the minor,
                single-action application of this ability to make localized
                changes that help you blend into your surroundings, gaining a +2
                circumstance bonus to Stealth checks until your surroundings
                change in coloration or pattern.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Venomshield</label>
            <div className="content">
              <p className="text">
                Your intrinsic connection to nagas and mundane serpents grants
                you an innate resistance to toxins of every sort. You gain
                resistance to poison equal to half your level (minimum 1
                resistance), and you gain a +1 circumstance bonus to all saving
                throws against poison.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Whipfang</label>
            <div className="content">
              <p className="text">
                You have a long, flexible neck that can curl into a striking
                pose like that of a snake. Your deceptively powerful muscles
                allow you to bite with surprising distance and speed. You gain
                the Raise Neck action.
              </p>
              <Spell
                name="Raise neck"
                action="one_action"
                description="You raise your head into a striking position. The fangs Strike granted by your nagaji ancestry gains a reach of 10 feet until the end of your turn."
              />
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>10</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>25 feet</p>
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
              <li>Nagaji</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Amurrun, Aquan, Celestial,
                Draconic, Undercommon, Shadowtongue, Tengu, Vanaran, and any
                other languages to which you have access (such as the languages
                prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Fangs</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Nagaji adventurers</h2>
          <p>
            The most common reason for nagaji to adventure is at the behest of a
            naga superior or for the benefit of a nagaji community, but their
            reasons can be as varied as any other people on Golarion. Nagaji
            might set out seeking holy sites in the world, searching for
            enlightenment, looking for material treasures, or for personal
            reasons related to their background, family, or city.
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

export default NagajiPage;
