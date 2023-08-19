import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { kistuneFeats } from "../middleware/KitsuneFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const KitsunePage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(kistuneFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(kistuneFeats);
  };

  function filterFeats(featLevel: string) {
    return kistuneFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="kitsune"
        book="Lost Omens: Ancestry Guide"
        tags={["uncommon", "kitsune", "humanoid"]}
        img="kitsune_icon.png"
        alt="Image of a kitsune"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Kitsune are a charismatic and witty people with a connection to the
            spiritual that grants them many magical abilities, chiefly the power
            to shapechange into other forms. Whether they pass unseen among
            other peoples or hold their tails high, kitsune are clever observers
            of the societies around them.
          </p>
          <p>
            Kitsune are shapechangers with two forms: one of a fox-headed
            humanoid and one largely depending on where they were raised. Those
            raised in populated areas typically have what’s called a tailless
            form—a humanoid body without any fox features that resembles a more
            common ancestry, such as an elf or a human. In wooded or rural
            areas, their second form is more likely to be that of a fox. Though
            all-kitsune settlements exist, most live among people of other
            ancestries, granting them a degree of external insight into social
            rules or dynamics that others process only subconsciously. Kitsune
            enjoy subverting expectations as much as they do going along with
            them. Their fondness for jokes, stories, and wordplay, especially
            when the twist of a riddle hinges on the listener’s assumptions,
            reinforces their reputation as tricksters.
          </p>
          <p>
            With dual forms and a connection to both the material and spiritual
            worlds, kitsune have diverse concepts of self and identity. Some
            even view their forms as separate individuals altogether, using them
            to explore different aspects of their personality.
          </p>
          <p>
            If you want to play a character with innate magical talents and
            countless hidden facets, each revealed with a glint of the eye and a
            twisting grin, you should play a kitsune.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Studiously observe the habits of those around you, taking mental
              notes on how to imitate them better.
            </li>
            <li>
              Delight in jokes, clever wordplay, pranks, or unnecessarily
              complex plots.
            </li>
            <li>
              Present a different, but authentic, side of yourself in each new
              situation.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Are taken in by your magnetic personality and enigmatic nature.
            </li>
            <li>Marvel at your many supernatural abilities.</li>
            <li>Wonder what you aren’t telling them.</li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Kitsune have alert vulpine ears, pointed snouts, and short,
            semi-retractable claws on their fingers and toes. Their fur is
            dense, countershaded, and most often red, tan, black, or white in
            color. Kitsune have bushy tails that grow in number as they hone
            their innate magical abilities, to as many as nine.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Kitsune are rarely the majority in whatever communities they
                inhabit, and many go their whole lives without meeting another
                kitsune beyond their family. Their society, as much as it
                exists, centers primarily around the commonalities that kitsune
                find as they pass among other peoples. The same social
                perspective that helps them imitate others also makes them quick
                to notice signs that someone may need help or a kind word. Due
                to this, kitsune often form strong interpersonal relationships
                and tend to anchor their social circles.
              </p>
              <p>
                When two kitsune do meet, they may find themselves exchanging
                light verbal repartee, enjoying the sport of trying to outwit
                each other. While it’s considered a grave offense to outright
                give away another kitsune’s shapechanging nature, kitsune relish
                surreptitiously forcing another to “break character,” shocking
                the other into disrupting their transformation through a
                well-placed comment.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Kitsune_02.png")}
                alt="Kitsune image"
              />
            </figure>
          </div>
          <div className="featured">
            <h2>Kitsune settlements</h2>
            <p>
              Though kitsune live all around the world, two major kitsune
              settlements exist on Golarion: Kihime in Tian Xia, and Angen in
              the Inner Sea region. Kihime, the central settlement for Souko
              kitsune, is located in the Forest of Spirits and consists of low,
              thatched buildings in an intentionally ancient, though effective,
              design. Rather than torches, star orbs line the streets and glow
              with soft foxfire to light the darkness—legends state that these
              star orbs can be unified to cloak Kihime in illusions and
              abjurations in times of peril. Angen, in the Verduran Forest of
              Taldor, represents a more modern and cosmopolitan kitsune town,
              with buildings made in a variety of styles. Angen customs
              emphasize unity and collectivism, one of the best known being the
              Foxes’ Wedding. In this yearly festival, which occurs
              spontaneously on the first autumn day that rain falls from a blue
              sky, all kitsune who became betrothed in the last year are
              considered married. In celebration, rainbows formed from the mixed
              sunlight and raindrops are enhanced by kitsune illusions, becoming
              truly a sight to behold.
            </p>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Kitsune often have neutrality in their alignment from balancing
            their dual natures, though their instinct for stirring up trouble
            leads many to lean slightly toward chaos. Some possess the ability
            to control or bend the will of others, but even among those that do,
            only the evilest use these arts flippantly or selfishly.
          </p>

          <div className="featured">
            <h2>Fox families</h2>
            <p>
              Due to their shifting nature, kitsune often have mixed-ancestry
              family units. The children of a kitsune and a non-kitsune can
              inherit either of their parent’s lineages, though many assume that
              a human baby born to a kitsune is simply a kitsune that has yet to
              reveal their true form. This has led to the widespread
              misconception that all offspring of kitsune are themselves
              kitsune.
            </p>
          </div>

          <p>
            The patron kitsune deity is Daikitsu, the goddess of crafting and
            agriculture. Though not all kitsune necessarily worship Daikitsu,
            most respect her as the purported source of their powers. Kitsune in
            Tian Xia often revere both Shizuru and Tsukiyo, seeing the duality
            of the sun and moon in their own multifaceted nature. A small sect
            of Avistani kitsune worship Sivanah, the goddess of illusion,
            respecting her position between perception and reality and believing
            the goddess’s true form to be that of a kitsune—hidden behind not
            seven veils, but nine.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              While kitsune have some traditional names, they’re more likely to
              use names that are unremarkable in their local society, the better
              to pass unnoticed. Some have different names for each form: a
              kitsune name for their kitsune form, a regional name for a
              tailless form, and possibly no name at all for a fox form.
            </p>
            <p>
              <b>Sample names:</b> Hamako, Haohiko, Kitsukou, Kon, Kwan-la,
              Talaro
            </p>
          </div>

          <h2>Kitsune heritages</h2>
          <p>
            The form kitsune take varies between individuals, with tales stating
            that their alternate form represents their connection to magical and
            spiritual influences. Choose one of the following kitsune heritages
            at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Celestial envoy</label>
            <div className="content">
              <p className="text">
                Whether due to Daikitsu’s grace or faithful forebears, you have
                a strong connection to the divine, affording you certain
                protections. You gain the Invoke Celestial Privilege reaction.
                Your alternate form is a common Medium humanoid ancestry
                prevalent where you grew up (typically human), called a tailless
                form.
              </p>

              <Spell
                name="invoke celestial priviledge"
                action="reaction"
                description={
                  <span>
                    <span className="frequency">
                      <b>Trigger:</b> You attempt a saving throw against a
                      divine effect, but you haven’t rolled yet.
                    </span>
                    <br />
                    You rise above the triggering effect, refusing to be harmed
                    by it. You gain a +1 circumstance bonus to the triggering
                    saving throw and to any other saving throws you attempt
                    against divine effects until the start of your next turn.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Dark fields</label>
            <div className="content">
              <p className="text">
                You can exert your unsettling presence to subtly Demoralize
                others. When you do, Demoralize loses the auditory trait and
                gains the visual trait, and you don’t take a penalty when you
                attempt to Demoralize a creature that doesn’t understand your
                language. You also gain the Invigorating Fear reaction. Your
                alternate form is a fox, which has the statistics of 1st-level
                pest form.
              </p>
              <Spell
                name="invigorating fear"
                action="reaction"
                description={
                  <span>
                    <b>Trigger:</b> once per hour
                    <br />
                    <br />
                    <span className="frequency">
                      <b>Trigger:</b> A creature within 60 feet gains the
                      frightened condition.
                    </span>
                    <br />
                    You are invigorated by the shock of a prank or the thrum of
                    terror. You gain temporary Hit Points equal to the
                    creature’s level or 3, whichever is higher. You lose any
                    temporary Hit Points after 1 minute.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Earthly winds</label>
            <div className="content">
              <p className="text">
                You are a creature of the material world, with an affinity
                closer to the wilds than urban society. You gain a jaws unarmed
                attack that deals 1d6 piercing damage. Your jaws are in the
                brawling group and have the finesse and unarmed traits. Your
                alternate form is a fox, which has the statistics of 1st-level
                pest form.
                <h2>The lady of foxes</h2>
                Though usually referred to with she/her pronouns, the goddess
                Daikitsu’s nature is fluid; her gender, age, and appearance
                change at her whim. Kitsune’s legends state that they were
                created when Daikitsu granted her original attendants, fox
                spirits known as the Nine Bright Grains, one of her own
                abilities: the power to dance between shapes.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Empty sky</label>
            <div className="content">
              <p className="text">
                Your spirit is open to the secrets of beyond, granting you
                greater access to kitsune magic. You gain the Kitsune Spell
                Familiarity ancestry feat. Your alternate form is a common
                Medium humanoid ancestry prevalent where you grew up (typically
                human), called a tailless form.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Frozen wind</label>
            <div className="content">
              <p className="text">
                Your ancestors crossed the Crown of the World or resided on
                snowy peaks. You gain cold resistance equal to half your level
                (minimum 1). You treat environmental cold effects as if they
                were one step less extreme (incredible cold becomes extreme,
                extreme cold becomes severe, and so on). Your alternate form is
                a common Medium humanoid ancestry prevalent where you grew up
                (typically human), called a tailless form.
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
              <li>Charisma</li>
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
                positive):Choose from Elven, Gnomish, Goblin, Halfling, Dwarven,
                Sylvan, and any other languages to which you have access (such
                as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, and you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Change shape</h2>
            <p>
              As a kitsune, you gain the Change Shape ability.
              <br />
              <br />
              <Spell
                name="Change shape"
                action="one_action"
                tags={[
                  "concentrate",
                  "divine",
                  "kitsune",
                  "polymorph",
                  "transmutation",
                ]}
                description={
                  <span>
                    You transform into a specific alternate form determined by
                    your heritage. If your heritage doesn’t list a form, your
                    alternate form is a tailless form, which is a common Medium
                    humanoid ancestry prevalent where you grew up (typically
                    human). This form is the same age and body type as your true
                    form and has roughly analogous physical traits, such as hair
                    color. Using Change Shape counts as creating a disguise for
                    the Impersonate use of Deception. You lose any unarmed
                    Strikes you gained from a kitsune heritage or ancestry feat
                    in this form. You can remain in your alternate form
                    indefinitely, and you can shift back to your true kitsune
                    form by using this action again.
                  </span>
                }
              />
            </p>
          </div>
          <h2>Kitsune Adventurers</h2>
          <p>
            Kitsune who live among others often have the charlatan, emissary,
            entertainer, fortune teller, merchant, noble, or nomad backgrounds.
            Those kitsune who strike out alone favor the acolyte, bandit, or
            hermit backgrounds. Kitsune often excel as rogues, investigators
            APG, and bards. Kitsune who hone their magical abilities lean more
            toward sorcerers or oracles, and those who forge a stronger
            connection to the spirits may become witches.
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

export default KitsunePage;
