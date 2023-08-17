import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { ghoranFeats } from "../middleware/GhoranFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const GhoranPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(ghoranFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(ghoranFeats);
  };

  function filterFeats(featLevel: string) {
    return ghoranFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="ghoran"
        book="Lost Omens: Impossible Lands"
        tags={["rare", "ghoran", "humanoid", "plant"]}
        img="ghoran_icon.png"
        alt="Image of a ghoran"
      />

      <section>
        <div className="content">
          <p className="introduction">
            These intelligent plant people, created by a long-dead druid,
            possess a sort of immortality through their seeds—unless these are
            destroyed by external events other than merely the ravages of time.
          </p>
          <p>
            During the height of the wars between Geb and Nex long ago, the
            archmage Nex asked the renegade druid Ghorus to create a plant that
            would feed his people even in the most inhospitable land. Ghorus did
            so, developing a flower that would adapt to every environment and
            withstand every sort of magecraft and spellworking. He succeeded too
            well. In the strange soil of the Impossible Lands, the flower grew
            and soon began to think—and then to walk and speak. These were the
            first ghorans. Despite their new awareness, ghorans found that many
            other peoples were adept at ignoring inconvenient truths, especially
            those involving where their next meal might come from. Bit by bit,
            seed by seed, ghorans grew themselves into humanoid forms, hoping to
            engender sympathy by mirroring the appearance of humanoids. It
            eventually worked, and the ghorans won citizenship and protected
            status in the nation of Nex. Even so, time and predation has taken
            its toll; the population of ghorans is small and ever dwindling.
          </p>
          <p>
            If you want a character who’s an ancient and alien soul, trying to
            survive and thrive in a strange and hostile world, you should play a
            ghoran.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>Offhandedly mention events from thousands of years ago.</li>
            <li>Find “animal” behaviors strange.</li>
            <li>Constantly make small changes to your body.</li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Have a hard time recognizing you after not seeing you for a while.
            </li>
            <li>
              Are either intimidated or fascinated by how long you’ve lived and
              how much you know.
            </li>
            <li>Have heard you’re delicious.</li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Roughly humanoid in size and shape, a ghoran’s body is mostly made
            up of a fibrous plant material resembling a woody vine, with a face
            like an enormous, colorful flower. Ghorans have a great deal of
            control over the shape and structure of their bodies: with a few
            hours of effort, a ghoran might make themselves taller or shorter,
            long-limbed or barrel-chested. They have a reputation for tasting
            deliciously sweet and herbaceous. Most people merely find this
            quality a curiosity and don’t attempt to take a bite, but animals in
            the wild will sometimes seek them out and attack them. Though they
            can learn to smile or laugh to fit in with other ancestries, they
            tend to use a different set of emotional signifiers, fluttering
            their face-petals to show happiness and making a rustling sound when
            agitated or upset.
          </p>
          <p>
            Every ghoran has a large cavity within their torso that contains a
            large seed. When a ghoran’s body becomes too decrepit to function,
            they impart their memories into the seed and plant it into the
            ground. Within 1 to 2 months, a new ghoran body finishes growing
            from the seed, and the original ghoran collapses into a pile of
            inert organic matter. This curious method of propagation leaves a
            ghoran vulnerable, and many ghorans are defensive about the process
            among non-ghoran peoples.
          </p>
          <p>
            Being plants, ghorans have no innate understanding of gender in the
            human sense. Ghorans who find themselves in the company of other
            ancestries sometimes adopt a more masculine or feminine form, though
            just as many don’t bother.
          </p>
          <div className="featured">
            <h2>Ghoran backgrounds</h2>
            <p>
              Born of magic and hailing from a magical land, acolytes (of the
              Green Faith, typically) and fortune-tellers are both common
              backgrounds for adventuring ghorans. Rural- or forest-dwelling
              ghorans might be farmhands, herbalists, or hermits, while those
              who reside in Nex’s great cities might be artisans, artists, or
              scholars.
            </p>
          </div>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Ghorans originated in Nex, and most reside as a tiny minority
                population in that land. In its major cities, they have built
                little enclaves of their own in neighborhoods featuring sweeping
                parks and massive trees, with the largest of these enclaves
                being in Quantium. While they don’t possess the magical ability
                to enter an extradimensional home within a tree like dryads,
                ghorans live among the trees, typically making their homes
                within the neighborhoods’ big parks. They are extremely skilled
                at building their abodes so that they don’t disrupt the lives of
                the local flora. Visitors to a ghoran enclave might not realize
                initially that they’ve entered a home, assuming instead that
                they’re in a recreational public space. Ghorans don’t typically
                mind the unexpected company so long as the visitors are
                respectful of the park, of their homes, and of any ghorans they
                meet. The ghorans who live in major cities are relatively social
                and accepting of other ancestries, and they tend to be eager to
                interact, learn about others, and engage in trade.
              </p>
              <p>
                Outside of these cities, ghorans inhabit small, remote
                communities in the foothills of the Shattered Range and dwell in
                secluded forests, and they tend to be much more isolationist.
                Remembering well that Ghorus originally created their ancestry
                as food for the “animals,” they generally have no great desire
                to get to know other ancestries. However, as each new
                incarnation slightly shifts a ghoran’s personality, they
                sometimes develop a wanderlust that spurs them to leave an
                isolated home and travel into the wider world. Often, such
                ghorans hold bits—or even troves—of ancient lore lost to the
                outside world for many years, so their journeys can sometimes
                lead to important new discoveries for others in the Impossible
                Lands and beyond.
              </p>
              <p>
                Among themselves, ghorans cooperate easily and instinctively,
                with no need for a formal government. Work is apportioned by a
                silent consensus derived from thousands of years of experience,
                as everyone does what they’re best at to cover necessary tasks.
                This silent consensus is already practiced at determining how to
                adjust and adapt when one ghoran falls ill or changes in a new
                incarnation. The addition of new ghorans traveling from afar or
                of members of other ancestries can sometimes throw off this
                natural rhythm. The new addition is an unknown quantity, so the
                entire community keeps tabs on the newcomers, to a potentially
                unsettling extent, for a short period of analysis. This practice
                isn’t out of any distrust or desire for harm, but rather out of
                curiosity and a need to understand what the newcomers do well
                and where they need assistance. Once the ghoran community has
                drawn a conclusion, they adjust their actions
                accordingly—everyone simply begins to perform tasks differently
                to allow newcomers to fit in and contribute, with no official
                meeting or declaration. In most cases, one of the members of the
                community realizes they should tell non-ghoran newcomers what
                the community expects of them, but sometimes no one realizes
                there’s a need to communicate. When this happens, it can leave
                the ghoran community and the newcomers perplexed at the others’
                actions and choices, as the community expects the newcomers to
                simply pitch in and fill the need while the newcomers wait to be
                told what the community expects of them.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Ghoran_02.png")}
                alt="Ghoran image"
              />
            </figure>
          </div>
          <p>
            Ghoran communities, operating on this ancient consensus, generally
            don’t have anything resembling leaders. Nonetheless, a community
            will sometimes appoint a single ghoran as an envoy to outsiders and
            even give them a title to make the “animals” more comfortable when
            receiving a message from the whole community.
          </p>
          <h2>Alignment and Religion</h2>
          <p>
            Ghorans typically lack driving forces toward good or evil, though
            their plant-derived values can sometimes make them come across as
            amoral to people who are not likewise plant based. They have a
            slight tendency toward law, especially in their own communities.
          </p>
          <div className="featured">
            <h2>Ghoran enclaves</h2>
            <p>
              Ghorans were created in Nex, and the bulk of their population
              still resides there. The single largest ghoran population in the
              world is in Quantium, where ghorans have an entire
              park-neighborhood, flanked by ancient trees planted thousands of
              years ago, to call their own. Other ghorans live in remote
              villages in the foothills of the Shattered Range, as far away from
              outsiders as they can contrive.
            </p>
          </div>
          <p>
            While most ghorans aren’t particularly religious, spiritually
            oriented ones tend to worship nature by means of the Green Faith or,
            less commonly, Gozreh or one of the Eldest (such as the plantlike
            Green Mother). They rarely find interest in human-centric deities,
            as ghorans have distinctly different thought processes and
            priorities. Faith is a matter that usually doesn’t change much from
            seed to seed and incarnation to incarnation, and that means that the
            newer deities, especially those ascended in the last few millennia
            (“recently,” from the ghoran perspective) have almost no foothold in
            ghoran communities.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Most ghorans pick a new name with each incarnation, usually
              selecting a name or concept that they found pleasing in a past
              life. Occasionally, a ghoran might reuse a name for several
              incarnations in a row, especially if remaining in a community of
              other peoples, though each incarnation is still a distinct person.
            </p>
            <p>
              <b>Sample names:</b> Amsalu, Ash, Emnet, Sieri, Ooniel,
              Arshmarish, Velt, Delphinium, Hach, Emerald, Sable
            </p>
          </div>
          <h2>Ghoran heritages</h2>
          <p>
            Created with the express purpose of adapting to their environment,
            ghorans display several distinct physical morphs. Choose one of the
            following ghoran heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Ancient Ash</label>
            <div className="content">
              Your memory is sharp and clear, and you remember so much. You
              remember the calm before the storm and the soil after the rain,
              the acrid tang of magic and the whisper of a song. You remember it
              all. You become trained in one skill of your choice. At 5th level,
              you become an expert in that skill.
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Enchanting Lily</label>
            <div className="content">
              <p className="text">
                You smell ever so sweet—a delicate, floral scent like the
                intoxicating fragrance of lilies and the soft scent of lilacs.
                You’re trained in Diplomacy (or another skill if you were
                already trained in Diplomacy). You also gain a +1 circumstance
                bonus to checks to Make an Impression if the target can smell
                your fragrance.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Strong Oak</label>
            <div className="content">
              <p className="text">
                Most ghorans have bodies of pliable vines and tough stems, but
                you’re covered in sturdy, rough bark and your legs are stable as
                roots. You gain a +2 circumstance bonus on your Fortitude or
                Reflex DC against attempts to Grapple or Trip you. This bonus
                also applies to saving throws against effects that would grab
                you, restrain you, or knock you prone. You also gain a +2
                circumstance bonus on Acrobatics checks to Balance.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Thorned Rose</label>
            <div className="content">
              <p className="text">
                Your beautiful petals and seemingly smooth skin hide silent
                barbs to pierce the unwary. Your body is covered with wickedly
                sharp thorns to discourage those that might prey upon you. You
                gain the Wicked Thorns reaction.
              </p>

              <Spell
                name="Wicked thorns"
                action="reaction"
                description={
                  <span>
                    <span>
                      <b>Trigger:</b> You’re hit with an unarmed Strike or a
                      Strike with a non-reach melee weapon.
                    </span>
                    <br />
                    <br />
                    <span className="frequency">
                      <b>Frequency:</b>
                      once per day
                    </span>
                    <br />
                    Several of your thorns break off and hook into your
                    attacker’s body. You deal 1d8 piercing damage to the
                    triggering creature. It attempts a basic Reflex save against
                    the higher of your class DC or spell DC. On a critical
                    failure, the creature also takes 1d4 persistent bleed damage
                    as your thorns embed in its flesh.
                    <br />
                    <br />
                    At 3rd level, and every 2 levels thereafter, this damage
                    increases by 1d8, and the persistent piercing damage
                    increases by 1.
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
              <li>Constitution</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Draconic, Dwarven, Elven, Goblin,
                Undercommon, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Unusual anatomy</h2>
            <p>
              Your unorthodox body resists physical afflictions meant for other
              creatures. You gain a +1 circumstance bonus to saves against
              diseases and poisons.
            </p>
          </div>
          <h2>Ghorans Adventurers</h2>
          <p>
            While many ghorans learn a bit of magic, some become wizards or
            druids. Others are sorcerers with an elemental bloodline dating back
            to the moment of creation or an imperial bloodline recalling a
            particularly masterful past life. More martial ghorans become
            fighters or rangers, and some careful and methodical living plants
            make excellent alchemists and investigators.
          </p>
          <div className="featured">
            <h2>Fleshforges</h2>
            <p>
              In the city of Ecanus, the archmage Nex created the
              Fleshforges—massive edifices that churn and tremble with the birth
              sequences’ roar of smelting flesh and printing bone—to produce
              fleshwarp soldiers to fuel his war against Geb. The Fleshforgers
              still engineer a bedazzling array of fleshwarps here, from
              chimeric messengers, who meld house pet and golem, to disciplined
              scale-sheathed cataphracts and stupendous dreadnoughts, whose
              fists and footsteps bend steel and pulverize stone. Recently, the
              Fleshforges have experienced uninitiated activations with alarming
              frequency, delivering atypical fleshwarps unconfined by design
              purviews or production schedules. Ecanus’s authorities fervently
              hunt these unlicensed creations, but some escape, lurching into
              the night to hide in the city’s recesses or venturing afield into
              the Mana Wastes.
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

export default GhoranPage;
