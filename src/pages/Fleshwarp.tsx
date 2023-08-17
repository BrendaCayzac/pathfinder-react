import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { fleshwrapFeats } from "../middleware/FleshwarpFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const FleshwarpPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(fleshwrapFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(fleshwrapFeats);
  };

  function filterFeats(featLevel: string) {
    return fleshwrapFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="fleshwarp"
        book="Lost Omens: Ancestry Guide"
        tags={["rare", "aberration", "humanoid"]}
        img="fleshwarp_icon.png"
        alt="Image of a fleshwarp"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Fleshwarps are people whose forms were created or radically
            transformed by magic, alchemy, or unnatural energies. Their
            unorthodox appearance can make it difficult for them to find a place
            for themselves in the world.
          </p>

          <p>
            Magic and science that can warp bone and twist sinew are all too
            common on Golarion. Fleshwarps are those who have been permanently
            altered by such methods—sometimes a sapient being created whole
            cloth from inanimate flesh, but often a victim unwillingly
            transformed by strange energies or sadistic creators.
          </p>

          <p>
            The ancestry name “fleshwarp” is an umbrella term, since on Golarion
            the actual fleshwarping process is more infamously well-known than
            are alterations caused by uncontrolled magic, technology, or fringe
            science. Whether practiced by Thassilonian wizards, Nexian
            fleshcrafters, or the drow of the Darklands, fleshwarping is the
            craft of reshaping flesh and mind in vats of foul magical reagents.
            This has led some scholars of monsters to argue that only those
            beings created by traditional fleshwarping should be considered
            fleshwarps. Regardless of the source of their altered forms,
            fleshwarps bear their new shape forever, transformed beings living a
            wild and strange existence beyond what was possible for their
            original ancestry.
          </p>
          <p>
            Although fleshwarps are humanoid, no two look the same. One might
            possess limbs in unusual places and skin as smooth as glass, while
            another might have a thick matting of spiny fur. Some might have
            animalistic features, like a boar snout, scales, or cloven hooves.
            Others have entirely alien appearances, such as bulging eyes on the
            backs of their hands. Some may have only subtly uncanny features
            that differentiate them, such as glowing teeth, smoking eyes, or
            fingernails made of bone. The only commonality among fleshwarps is
            their mismatched nature. Let your imagination run wild when creating
            a fleshwarp character!
          </p>
          <p>
            If you want a character who is tough and hardy, can change their
            form as they grow, and can use their wholly unique appearance to
            inspire awe or fear in others, you should play a fleshwarp.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>Embrace your unusual appearance to inspire respect or fear.</li>
            <li>Be used to relying on yourself.</li>
            <li>
              Distrust large groups of people, particularly mobs, based on past
              experiences.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>Find your physiology fascinating or terrifying.</li>
            <li>
              Assume you are an expert on strange creatures or occult phenomena.
            </li>
            <li>
              Consider you an enigmatic and unpredictable—and perhaps even
              dangerous—outsider.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Fleshwarps are humanoids, ranging from 5 to 7 feet tall and from
            just under 100 pounds to more than 300 pounds. The proportion and
            appearance of their limbs and features differ widely, but fleshwarps
            functionally have two legs, two arms, and a single head; a fleshwarp
            with more limbs than this should consider an appropriate ancestry
            feat to reflect this variance, or one of their limbs might be
            vestigial and mostly nonfunctional. Fleshwarps differ widely in
            their appearance due to the unique circumstances of their creation.
            Even fleshwarp siblings or two people transformed through the same
            procedure might look wildly different.
          </p>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Fleshwarps are so few in number that congregations of them are
                rare. They most often live on their own, with a small family
                group, or at the outskirts of a community. Some thrive in
                cities, however, where they can remain anonymous among the
                crowds while pursuing careers that allow them to avoid contact
                with people who might fear or persecute them.
              </p>
              <p>
                Fleshwarps value endurance and are quick to learn from others,
                so those who come into contact with others of their kind usually
                share stories that help each other survive, hide, or thrive more
                effectively. How a fleshwarp formed can be a painful or
                horrifying subject, one they consider rude to discuss with
                anyone besides close friends or loved ones.
              </p>

              <div className="featured">
                <h2>Fleshwarps settlements</h2>
                <p>
                  No settlements consisting entirely of fleshwarps exist openly
                  outside of the Mana Wastes; elsewhere, citizens keep the
                  secret so well that their community’s existence isn’t known to
                  the world at large. Fleshwarps are more likely to live on the
                  fringes of other settlements, working in industries where
                  their hardy constitution is an advantage and their uncanny
                  appearance isn’t a liability. Some are herbalists or trappers,
                  working in the wilderness and interacting with others only
                  rarely. Locals might come to consider a fleshwarp their equal
                  or friend, and take umbrage at outsiders who make a big deal
                  out of the “monster” in their midst. Sentiment might turn
                  quickly upon supernatural events or strange attacks, however,
                  and, tragically, more than a few fleshwarps have been turned
                  out of homes they’ve occupied for decades when faced with a
                  misguided mob.
                </p>
              </div>
            </div>
            <figure>
              <img
                src={require("../assets/img/Fleshwarp_02.png")}
                alt="Fleshwarp image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <div className="featured">
            <h2>Fleshwarp motives</h2>
            <p>
              Fleshwarps have a variety of reasons for taking up the life of an
              adventurer. Some are turned out of their homes by an uncaring
              parent or a suspicious mob. Other fleshwarps travel to learn more
              about their own transformation or to seek out others of their
              kind. A few even actively seek the means—either technological or
              magical—to undo their transformations or adopt a new form that
              won’t incite repulsion or fear in common people. Still others
              understand that a good way to earn respect is to solve a
              community’s problems—then quickly leave the area—and therefore
              fall into the role of itinerant adventurers-for-hire.
            </p>
          </div>
          <p>
            Fleshwarps have little to gain from the broader society, and
            therefore rarely work to support society in turn, beyond perhaps
            helping other fleshwarps. They need to be able to adapt quickly to
            survive on their own. As a consequence, few fleshwarps are lawful.
            Although bigoted or short-sighted people view fleshwarps as
            monsters, fleshwarps are no more or less prone to evil than any
            other people, and most seek only to live their lives without
            trouble. Most are neutral in alignment, for while alienation doesn’t
            force a fleshwarp to feel contempt for others, neither does it
            encourage a fleshwarp to avoid it. This is especially true for
            fleshwarps living in the societies that gave birth to their
            traumatic transformation. Fleshwarps aren’t often casually
            religious; most either have little to do with faith at all (viewing
            themselves as scorned by the gods or simply seeing faith as
            impractical for survival) or are exceptionally devout. Religious
            fleshwarps often revere Arazni, Calistria, Desna, or Gozreh; evil
            fleshwarps typically turn to Lamashtu, finding consolation in the
            Mother of Monsters.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Fleshwarps can come from—and thus have names from—any culture or
              ancestry, but some give themselves new names after being
              transformed, whether to celebrate the change, recognize a new
              phase of their lives, or conceal their past identity. Many
              fleshwarps also carry a descriptive nickname granted to them by
              others, such as “Triple Handed,” “Barkfoot,” or “Many-Mouth.”
              Fleshwarps don’t keep nicknames they find personally offensive,
              but they tend to keep ones that describe their distinctive
              appearances or that are given by people they care about.
            </p>
            <p>
              <b>Sample names:</b> Borble, Dag, Feff, Hurn, Kemp, Omber, Ostro,
              Shurni, Surm, Wumpin
            </p>
          </div>

          <h2>In the Impossible lands</h2>
          <p>
            Beyond their transformations, little binds these people into a
            shared identity: some, especially those who experience their
            corporeal changes later in life, reject identifying as fleshwarps
            and cling to the ancestries of their birth, while others, often
            those who were born into these states of transfiguration, are more
            accepting of the fleshwarp identity. Adding to these disparate
            origins, scant uniformity exists for fleshwarps’ physical features,
            except for those literally built to certain designs. One fleshwarp
            might have limbs swathed in brilliantly plumed patagia to glide on
            the surge winds. Another fleshwarp might look like the rest of their
            battle batch, their prodigious frame crisscrossed symmetrically with
            thousands of tiny hook quills to facilitate rigging armored plates.
          </p>
          <p>
            Fleshwarps in the Impossible Lands face a slew of widespread
            discrimination that arises largely from ingrained cultural
            assumptions. Battle-scarred Alkenstar associates all fleshwarps with
            the Mana Wastes’ mutants; countless florid broadsheets and matinees
            scapegoat fleshwarps as monstrous villains. At best, Nexian
            fleshwarps are treated as state property; at worst, they are written
            off as arcane accidents that merit destruction. In Geb, fleshwarps
            face violent persecution from the undead authorities, who assume
            them to be Nexian bio-weapon spies.
          </p>
          <p>
            These bio-essentialist cultural attitudes have begotten another
            transformation. Under the prevailing ethno-chauvinism, fleshwarps
            began to dream of a world where they didn’t have to run, hide,
            suffer, or apologize for their features and forms. In the wilds of
            the Mana Wastes, fleshwarp enclaves have formed, offering and
            defending communal shelters for other mutants and outcasts. In the
            great cities of the Impossible Lands, some fleshwarp adventurers
            seek coin and glory to empower themselves or carve out a space for
            other fleshwarps.
          </p>

          <div className="featured">
            <h2>Mana wastes</h2>
            <p>
              Fleshwarps can come from—and thus have names from—any culture or
              ancestry, but some give themselves new names after being
              transformed, whether to celebrate the change, recognize a new
              phase of their lives, or conceal their past identity. Many
              fleshwarps also carry a descriptive nickname granted to them by
              others, such as “Triple Handed,” “Barkfoot,” or “Many-Mouth.”
              Fleshwarps don’t keep nicknames they find personally offensive,
              but they tend to keep ones that describe their distinctive
              appearances or that are given by people they care about.
            </p>
          </div>

          <h2>Fleshwarp heritages</h2>
          <p>
            The circumstances of each fleshwarp’s creation are different, but
            they can be grouped into heritages based on the nature of their
            origin. Choose one of the following fleshwarp heritages at 1st
            level. Although any fleshwarp may have any appearance you desire,
            each heritage provides typical characteristics.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Created</label>
            <div className="content">
              You were created through occult or alchemical processes, such as
              being grown in a vat or stitched together from the body parts of
              other creatures by a scientist in Ustalav. Your manufactured body
              is durable; you don’t need to eat and can’t starve. You gain a +2
              circumstance bonus to saving throws against diseases.
              <div className="featured">
                <h2>Fleshwarp legends</h2>
                <p>
                  Legends of famous fleshwarps travel quickly amid fleshwarp
                  communities.
                  <br /> <br />
                  <b>Lady Kedley:</b> A wealthy noble in a life she doesn’t
                  remember, Kedley emerged transformed from deep below
                  Westcrown. She uses her family’s vast fortune to aid other
                  fleshwarps.
                  <br /> <br />
                  <b>Spinhead Vanluk:</b> This Mana Wastes warlord brings
                  mutants and fleshwarps under his banner. He (literally) has
                  eyes in the back of his head.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Mutated</label>
            <div className="content">
              <p className="text">
                Transformed by uncontrolled magic, you originated in a the Mana
                Wastes or another region similarly devastated by uncontrolled
                magic. Due to your toughened or redundant organs, the DC for
                your checks to recover from persistent bleed damage is 10
                instead of 15, and it’s reduced to 5 instead of 10 if you have
                particularly effective assistance recovering from the persistent
                damage.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Shapewrought</label>
            <div className="content">
              <p className="text">
                A victim of fleshwarping, you likely bear loose flesh, bony
                spurs, or features of inhuman creatures sprouting from your
                skin. You have nevertheless turned the psychic toll of your
                transformation into a strength. You gain resistance to mental
                damage equal to half your level (minimum 1).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Technological</label>
            <div className="content">
              <p className="text">
                Your transformation is due to manipulation by advanced
                technology, like that found in Numeria. Your emotions are dulled
                and hard to influence. When you roll a success on a saving throw
                against an emotion effect, you get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Cataphract</label>
            <div className="content">
              <p className="text">
                Your battle-hardened skeleton is laced with additional cartilage
                and muscle to help bear armor across vast areas of operation,
                and your skin is bedecked with tiny spurs of pliable, resilient
                keratin to optimize the grip and weight distribution of your
                armor. You gain the Armor Proficiency feat.
                <br />
                <br />
                If your class makes you trained in all types of armor, you
                instead become trained in Athletics (or a skill of your choice
                if you’re already trained in Athletics) and gain the Armor
                Assist skill feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Discarded</label>
            <div className="content">
              <p className="text">
                The biomancers and mutagenists who warped your form labeled you
                a “discard on discovery”—a euphemism for destroying you on
                sight. An anomaly among anomalies, your body stubbornly
                repudiates the efforts of fleshcrafters seeking to mold you to
                their grandiose visions, and your immune responses blunt the
                worst effects of unwanted fleshwarping attempts. If you roll a
                success on a saving throw against a transmutation effect, you
                get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Surgewise</label>
            <div className="content">
              <p className="text">
                The undulations of your body’s cilia are hyper-attuned to
                wellsprings of magic; they trill and thrum with insights into
                occult energies, and their vibrations alert you to the presence
                of secrets. You gain the trained proficiency rank in Occultism.
                If you’re trained in Occultism, you instead become trained in
                another skill of your choice. You also gain the Oddity
                Identification skill feat.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>10</p>
            <h2>Size</h2>
            <p>Medium or small</p>
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

          <h2>Fleshwarp Adventurers</h2>
          <p>
            Fleshwarps often live on the margins of society. The hermit, hunter,
            nomad, or street urchin backgrounds work well for many fleshwarps;
            others might be criminals, entertainers, or prisoners. The need to
            defend themselves leads many fleshwarps to become barbarians,
            fighters, rogues, or rangers. Champions and druids are common
            callings among fleshwarps who seek to defend and better the lot of
            others of their kind.
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

export default FleshwarpPage;
