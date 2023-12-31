import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { kashrishiFeats } from "../middleware/KashrishiFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const KashrishiPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(kashrishiFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(kashrishiFeats);
  };

  function filterFeats(featLevel: string) {
    return kashrishiFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="kashrishi"
        book="Lost Omens: Impossible Lands"
        tags={["rare", "kashrishi", "humanoid"]}
        img="kashrishi_icon.png"
        alt="Image of a kashrishi"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Kashrishi make their homes in remote areas of the world. These quiet
            beings have stout, durable frames and distinctive crystalline horns.
            Their inherent psychic abilities make them natural empaths but also
            occasionally burden them with the unceasing thoughts of their
            neighbors.
          </p>
          <p>
            Kashrishi occupy a unique evolutionary branch native to the lands
            bordering the northern stretches of the Obari Ocean. Resembling
            halfling-sized bipedal rhinoceroses with the occasional odd
            insectile feature, kashrishi adapt to their environs with unusual
            efficiency, using a combination of rapid physical evolutions and
            inherent psychic powers. Kashrishi are often mistakenly referred to
            as having hive minds, though they’re actually natural empaths,
            capable of discerning a creature’s emotional state and impulses
            through proximity. This near-oracular behavior occasionally leads to
            misunderstandings with humanoids who think a kashrishi is reading
            their thoughts or otherwise magically influencing the conversation,
            though peoples more familiar with kashrishi come to value their
            unique insights and intuitive diplomacy.
          </p>
          <p>
            Kashrishi have an atypical level of control over their physical
            forms, thanks to their psychic powers, and can evolve new features
            over the course of a single generation. Typically, these features
            are intentionally cultivated to help deal with a particular
            environmental obstacle, such as a change in weather patterns, or if
            an invasive species affects available food supplies near their
            settlements.
          </p>
          <p>
            Kashrishi often tailor their evolutions to match the most successful
            creatures in their environment. Whether a testament to the
            resilience of insects or simply a quirk of their environment, many
            kashrishi evolutions are directly inspired by creatures like the
            rhinoceros beetle or giant water bug.
          </p>
          <p>
            If you want a character that’s visually distinct, able to naturally
            access the occult powers of the mind, and great at quickly making
            friends wherever they go, you should play a kashrishi.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Be easily taken aback by people who are particularly loud,
              expressive, or emotional.
            </li>
            <li>
              Prefer the peaceful quiet of remote islands, treetops, and
              caverns.
            </li>
            <li>
              Act as a parental figure for the more excitable among your
              companions.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Underestimate your strength and resilience.</li>
            <li>
              Mistake you for being unsociable when you’re actually taking time
              to process mental and physical cues of which they’re completely
              unaware.
            </li>
            <li>Value you for your patience and insights.</li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Kashrishi have short but wide frames with remarkable strength for
            their size. All have signature crystalline horns, though these can
            grow in a variety of configurations. The most common kashrishi,
            xyloshis, have a large primary horn and between one and three
            smaller horns, typically arranged linearly from the tip of their
            nose and spanning along their nose and brow.
          </p>
          <p>
            While most kashrishi have light sandy or gray skin tones, their
            coloration can also echo the tones of their crystalline horns;
            sapphire, ruby, or emerald patterns aren’t so uncommon as to cause
            another kashrishi to take notice. Kashrishi with strong connections
            to specific creatures with whom they share their home environments
            might take on skin patterns or colorations that mirror those
            creatures. Some stories even talk about kashrishi with wings and
            butterfly patterns that cover their bodies, though no such kashrishi
            has been seen in the Impossible Lands for at least a century.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Despite their small stature, kashrishi tend to be terrible at
                hiding. Their crystalline horns are likely to flare with magical
                light when they exercise their innate magical powers, and
                they’re raised in an environment where their parents or
                guardians can almost always find them by feeling for their
                emotions. As a result, kashrishi tend to be excessively honest
                and kind, avoiding harmful deceptions but also employing enough
                tact to ensure they don’t evoke unpleasant emotional reactions
                from others.
              </p>
              <p>
                Kashrishi lack a clear concept of charity, not because they’re
                cruel or inconsiderate, but rather because their worldview is
                inherently inclusive of the people around them. Rare indeed is
                the kashrishi who exercises casual cruelty or who leaves another
                member of the community in need. Such actions lead to emotional
                reactions that cause turmoil for all kashrishi in the vicinity.
              </p>
              <p>
                Kashrishi enjoy various team games, employing games of trivia as
                measures of both knowledge and psychic ability. They also
                appreciate games that involve bluffs and double-bluffs with
                blind cards, testing their abilities to keep their minds clear
                and their thoughts organized. Kashrishi don’t generally condone
                the act of gambling with outsiders, as many find it challenging
                to deal with the implications of their psychic abilities, even
                if they strive to keep their powers secret.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Kashrishi_02.png")}
                alt="Kashrishi image"
              />
            </figure>
          </div>
          <p>
            Kashrishi generally engage in monogamous relationships with no real
            preference toward any particular gender pairing. The height of
            intimacy for a kashrishi is opening their mind fully to the psychic
            link of another kashrishi, an act much more personal than anything
            physical. This act doesn’t let kashrishi know whether someone is
            perfectly compatible with them or that the two mesh entirely—simply
            that from moment to moment, their inner feelings are more accessible
            and open, so communication becomes not a guessing game but an
            entirely wholesome, true experience. Some kashrishi believe that
            psychic communication should be held exclusively for these intimate
            moments.
          </p>
          <p>
            Kashrishi can be found in small groups on the island of Jalmeray and
            in larger communities occupying the many smaller islands surrounding
            it. Kashrishi in the Inner Sea region rarely venture beyond the
            Impossible Lands, though some of their oldest stories speak of a
            harrowing voyage across the Obari Ocean when their kind fled some
            long-past disaster.
          </p>
          <p>
            Kashrishi have no natural enemies. They host pirates and merchants
            with equal hospitality, so long as that hospitality is respected by
            their guests. While kashrishi are exceptionally tolerant of the
            quirks and foibles of other species, they draw a hard line at anyone
            bringing outside conflicts into their communities. More than one
            canny pirate captain docks their ship at a kashrishi island after a
            particularly heated conflict, knowing the pirate hunters and
            military vessels seeking them won’t encroach on kashrishi lands.
            Escaped criminals hoping to find a new lease on life might also hide
            in a kashrishi community, doing whatever they can to assist their
            hosts until whoever is hunting them gives up the chase.
          </p>

          <div className="featured">
            <h2>Kashrishi guests</h2>
            <p>
              Kashrishi communities welcome visitors and happily host all kinds
              of guests. Despite their welcoming nature, kashrishi settlements
              are often relieved when visits from larger groups, such as
              merchant ships and other trading vessels, end. Most humanoids take
              few precautions to conceal their thoughts and emotions, so a
              kashrishi might hardly distinguish even the politest ship crew
              from a barge full of rowdy pirates.
            </p>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Most kashrishi are good, and almost instinctively kind because of
            their empathic abilities and tight-knit communities. Kashrishi are
            rarely interested in religion, though a few deities are more likely
            to be worshipped by kashrishi than others. Desna is known to
            kashrishi as “The Crystal Butterfly,” and when a kashrishi child
            goes missing, their parents might pray the Crystal Butterfly uses
            the light of her wings to guide the child home. Besmara is also
            unusually likely to be worshipped by kashrishi, though her dogma
            among them is essentially a splinter faith that focuses on her
            primacy over sea monsters and storms with little regard to the
            piratical teachings for which most other ancestries know the
            goddess.
          </p>

          <p>
            Kashrishi can worship any god, and they often lean toward deities
            most commonly worshipped in Jalmeray (page 180), but most kashrishi
            don’t feel the need for religion. Kashrishi communities are so
            deeply connected through their empathic and psychic links that
            religion is often considered superfluous. Religion tends to have
            specific benefits in a community: care for the poor, unifying and
            teaching community morals, providing gathering spaces, and such.
            Almost all of these functions come inherently to kashrishi, thanks
            to the hive-like nature of their empathic communication.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              The empathic sense of a kashrishi has its own “mental fingerprint”
              that’s unique to each member of the species, and this mental
              fingerprint can be conveyed through psychic communications as a
              name. Kashrishi who adventure with non-kashrishi often adopt
              descriptive names that their companions can more easily speak and
              remember.
            </p>
            <p>
              <b>Sample names:</b> Climber, Firehorn, Guardian, Healer, Lantern,
              Mother, Scout, Softhand, Tempest, Warrior
            </p>
          </div>

          <h2>Thoughts on Kashrishi</h2>
          <p>
            Most people on Golarion beyond the island of Jalmeray aren’t aware
            kashrishi exist. Jalmeri humans might trade with kashrishi, and they
            might hire athamasi scouts to staff the crow’s nests of their ships
            or xyloshi warriors to serve as guards; however, people beyond
            Jalmeray’s borders and shipping lanes are likely to mistake a
            kashrishi as a magical experiment or even an extraplanar visitor.
            While such misunderstandings can make kashrishi targets for ignorant
            villagers afraid of the unknown, the halfling-sized rhinos usually
            have the diplomatic skills to safely extricate themselves before
            situations turn violent.
          </p>

          <h2>Kashrishi heritages</h2>
          <p>
            A kashrishi’s heritage reflects the unique evolutionary qualities
            they’ve adapted for their chosen environments. Choose one of the
            following kashrishi heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Athamasi</label>
            <div className="content">
              <p className="text">
                You have a set of small secondary arms adapted for climbing and
                hanging from trees. You can’t hold or retrieve objects with
                these limbs, but you can Climb or Grab an Edge even if one or
                both of your primary hands are full. You aren’t flat-footed
                while Climbing.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Lethoci</label>
            <div className="content">
              <p className="text">
                You come from a kashrishi family adapted to coastal shores, or
                inland ponds and lakes. You gain a +2 circumstance bonus to
                Athletics checks to Swim. If you critically fail an Athletics
                check to Swim, you get a failure instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Nascent</label>
            <div className="content">
              <p className="text">
                While most kashrishi are fully adapted to their environment by
                the time they reach adulthood, some retain unrealized potential
                well into adulthood before unlocking it. You gain a 1st-level
                kashrishi ancestry feat for which you meet the prerequisites, if
                any.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Trogloshi</label>
            <div className="content">
              <p className="text">
                You’re adapted to the sunless regions of dense jungle forests
                and deep caves, with soft flesh lacking pigment and unusually
                clear crystalline horns. You gain the Crystal Luminescence
                ancestry feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Xyloshi</label>
            <div className="content">
              <p className="text">
                You have prominent neck muscles that allow you to use your
                facial horn as a tool or weapon. You gain a horn unarmed attack
                that deals 1d6 piercing damage. Your horn is in the brawling
                group, and has the finesse and unarmed traits.
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
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>—</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Kashrishi</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aquan, Celestial, Draconic, Sylvan,
                Terran, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Empathic sense</h2>
            <p>
              Kashrishi are able to get a vague sense of the current emotional
              state of others within 15 feet of them. This manifests as a
              general feeling of happiness, anger, or fear, without any specific
              details. For those with whom kashrishi have an emotional
              connection, physical touch can heighten this sense to greater
              degrees of detail and understanding, increasing with the strength
              of their bond. This also functions as an imprecise sense alerting
              you to the presence, but not the precise location, of non-mindless
              creatures within the area. You gain a +2 circumstance bonus on
              Perception checks to Sense Motive against non-mindless creatures
              within the area of your empathic sense.
            </p>
            <h2>Glowing horn</h2>
            <p>
              Your horn reacts to psychic energy by softly glowing. The horn
              emanates dim light in a 10-foot emanation until the start of your
              next turn whenever you use an occult action you gained from an
              ancestry feat, cast an innate occult spell, or Cast a Spell that
              has the mental trait.
            </p>
          </div>
          <h2>Kashrishi Adventurers</h2>
          <p>
            Most kashrishi never become adventurers, content in their remote
            homes. Those kashrishi who do become adventurers often do so from
            necessity after being conscripted by pirates or washed away to
            distant locales by tropical storms. Occasionally, more adventurous
            lethoci and trogloshi kashrishi intentionally leave their islands to
            either found new colonies or to seek adventure. Any kashrishi might
            also take on the adventuring lifestyle in response to overcrowding
            on their home island.
          </p>
          <p>
            Kashrishi rely on their inherent occult powers to ward off monsters,
            and they use their inherent empathic abilities to form bonds with
            allies. Kashrishi make natural bards, champions, and psychics.
            Typical kashrishi backgrounds include the artist, emissary, fortune
            teller, and herbalist backgrounds.
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

export default KashrishiPage;
