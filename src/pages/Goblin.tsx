import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { goblinFeats } from "../middleware/GoblinFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const GoblinPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(goblinFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(goblinFeats);
  };

  function filterFeats(featLevel: string) {
    return goblinFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="goblin"
        book="Core Rulebook, Pathfinder Primer"
        tags={["goblin", "humanoid"]}
        img="goblin_icon.png"
        alt="Image of a goblin"
      />

      <section>
        <div className="content">
          <p className="introduction">
            The convoluted histories other people cling to don’t interest
            goblins. These small folk live in the moment, and they prefer tall
            tales over factual records. The wars of a few decades ago might as
            well be from the ancient past. Misunderstood by other people,
            goblins are happy how they are. Goblin virtues are about being
            present, creative, and honest. They strive to lead fulfilled lives,
            rather than worrying about how their journeys will end. To tell
            stories, not nitpick the facts. To be small, but dream big.
          </p>
          <p>
            Goblins have a reputation as simple creatures who love songs, fire,
            and eating disgusting things and who hate reading, dogs, and
            horses—and there are a great many for whom this description fits
            perfectly. However, great changes have come to goblinkind, and more
            and more goblins resist conformity to these stereotypes. Even among
            goblins that are more worldly, many still exemplify their old ways
            in some small manner, just to a more sensible degree. Some goblins
            remain deeply fascinated with fire or fearlessly devour a meal that
            might turn others’ stomachs. Others are endless tinkerers and view
            their companions’ trash as the components of gadgets yet to be made.
          </p>
          <p>
            Though goblins’ culture has splintered radically, their reputation
            has changed little. As such, goblins who travel to larger cities are
            frequently subjected to derision, and many work twice as hard at
            proving their worth.
          </p>
          <p>
            If you want a character who is eccentric, enthusiastic, and
            fun-loving, you should play a goblin.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Strive to prove that you have a place among other civilized
              peoples, perhaps even to yourself.
            </li>
            <li>
              Fight tooth and nail—sometimes literally—to protect yourself and
              your friends from danger.
            </li>
            <li>
              Lighten the heavy emotional burdens others carry (and amuse
              yourself) with antics and pranks.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Work to ensure you don’t accidentally (or intentionally) set too
              many things on fire.
            </li>
            <li>Assume you can’t—or won’t—read.</li>
            <li>
              Wonder how you survive given your ancestry’s typical gastronomic
              choices, reckless behavior, and love of fire.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Goblins are stumpy humanoids with large bodies, scrawny limbs, and
            massively oversized heads with large ears and beady red eyes. Their
            skin ranges from green to gray to blue, and they often bear scars,
            boils, and rashes. Goblins average 3 feet tall. Most are bald, with
            little or no body hair. Their jagged teeth fall out and regrow
            constantly, and their fast metabolism means they eat constantly and
            nap frequently. Mutations are also more common among goblins than
            other peoples, and goblins usually view particularly salient
            mutations as a sign of power or fortune.
          </p>
          <p>
            Goblins reach adolescence by the age of 3 and adulthood 4 or 5 years
            later. Goblins can live 50 years or more, but without anyone to
            protect them from each other or themselves, few live past 20 years
            of age.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Goblins tend to flock to strong leaders, forming small tribes.
                These tribes rarely number more than a hundred, though the
                larger a tribe is, the more diligent the leader must be to keep
                order—a notoriously difficult task. As new threats rise across
                the Inner Sea region, many tribal elders have put aside their
                reckless ways in the hope of forging alliances that offer their
                people a greater chance at survival. Play and creativity matter
                more to goblins than productivity or study, and their
                encampments erupt with songs and laughter.
              </p>
              <p>
                Goblins bond closely with their allies, fiercely protecting
                those companions who have protected them or offered a
                sympathetic ear. Goblins tend to assume for their own protection
                that members of taller ancestries, which goblins often refer to
                colloquially as “longshanks,” won’t treat them kindly. Learning
                to trust longshanks is difficult for a goblin, and it’s been
                only in recent years that such a partnership has even been an
                option. However, their attitude as a people is changing rapidly,
                and their short lifespans and poor memories help them adapt
                quickly.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Goblin_02.png")}
                alt="Goblin image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Even well-intentioned goblins have trouble following the rules,
            meaning they’re rarely lawful. Most goblin adventurers are chaotic
            neutral or chaotic good. Organized worship confounds goblins, and
            most of them would rather pick their own deities, choosing powerful
            monsters, natural wonders, or anything else they find fascinating.
            Longshanks might have books upon books about the structures of
            divinity, but to a goblin, anything can be a god if you want it to.
            Goblins who spend time around people of other ancestries might adopt
            some of their beliefs, though, and many goblin adventurers adopt the
            worship of Cayden Cailean.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Goblins keep their names simple. A good name should be easy to
              pronounce, short enough to shout without getting winded, and taste
              good to say. The namer often picks a word that rhymes with
              something they like so that writing songs is easier. Since there
              aren’t any real traditions regarding naming in goblin culture,
              children often name themselves once they’re old enough to do
              something resembling talking.
            </p>
            <p>
              <b>Sample names:</b> Ak, Bokker, Frum, Guzmuk, Krobby, Loohi,
              Mazmord, Neeka, Omgot, Ranzak, Rickle, Tup, Wakla, Yonk, Zibini
            </p>
          </div>
          <h2>Goblin heritages</h2>
          <p>
            Goblins, especially those of different tribes, have all sorts of
            physiological differences, which they often discover only through
            hazardous “experiments.” Choose one of the following goblin
            heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Charhide</label>
            <div className="content">
              Your ancestors have always had a connection to fire and a thicker
              skin, which allows you to resist burning. You gain fire resistance
              equal to half your level (minimum 1). You can also recover from
              being on fire more easily. Your flat check to remove persistent
              fire damage is DC 10 instead of DC 15, which is reduced to DC 5 if
              another creature uses a particularly appropriate action to help.
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Irongut</label>
            <div className="content">
              <p className="text">
                You can subsist on food that most folks would consider spoiled.
                You can keep yourself fed with poor meals in a settlement as
                long as garbage is readily available, without using the Subsist
                downtime activity. You can eat and drink things when you are
                sickened.
                <br />
                <br />
                You gain a +2 circumstance bonus to saving throws against
                afflictions, against gaining the sickened condition, and to
                remove the sickened condition. When you roll a success on a
                Fortitude save affected by this bonus, you get a critical
                success instead. All these benefits apply only when the
                affliction or condition resulted from something you ingested.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Razortooth</label>
            <div className="content">
              <p className="text">
                Your family’s teeth are formidable weapons. You gain a jaws
                unarmed attack that deals 1d6 piercing damage. Your jaws are in
                the brawling group and have the finesse and unarmed traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Snow</label>
            <div className="content">
              <p className="text">
                You are acclimated to living in frigid lands and have skin
                ranging from sky blue to navy in color, as well as blue fur. You
                gain cold resistance equal to half your level (minimum 1). You
                treat environmental cold effects as if they were one step less
                extreme (incredible cold becomes extreme, extreme cold becomes
                severe, and so on).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Unbreakable</label>
            <div className="content">
              <p className="text">
                You’re able to bounce back from injuries easily due to an
                exceptionally thick skull, cartilaginous bones, or some other
                mixed blessing. You gain 10 Hit Points from your ancestry
                instead of 6. When you fall, reduce the falling damage you take
                as though you had fallen half the distance.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Tailed</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                You have a powerful tail, likely because you descend from a
                community of monkey goblins. You gain a +2 circumstance bonus to
                Athletics checks to Climb, you gain Combat Climber as a bonus
                feat, and you reduce the number of free hands required to Climb
                or Trip by one.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Treedweller</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                You have adapted particularly well to living in forested
                environments. As long as you are in a forest or jungle, you gain
                a +2 circumstance bonus to Stealth checks to Hide and Sneak,
                Survival checks to Subsist, and your Survival DC to Cover
                Tracks.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>6</p>
            <h2>Size</h2>
            <p>Small</p>
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
              <li>Goblin</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Dwarven, Gnoll, Gnomish,
                Halfling, Orcish, and any other languages to which you have
                access (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Darkvision</h2>
            <p>
              You can see in darkness and dim light just as well as you can see
              in bright light, though your vision in darkness is in black and
              white.
            </p>
          </div>
          <h2>Goblin Adventurers</h2>
          <p>
            To some degree, almost every goblin is an adventurer, surviving life
            on the edge using skill and wits. Goblins explore and hunt for
            treasures by nature, though some become true adventurers in their
            own rights, often after being separated from their group or tribe.
            <br />
            <br />
            Goblins often have the acrobat, criminal, entertainer, gladiator,
            hunter, and street urchin backgrounds. Consider playing an
            alchemist, since many goblins love fire, or a bard, since many
            goblins love songs. As scrappy survivors, goblins are often rogues
            who dart about the shadows, though their inherently charismatic
            nature also draws them to the pursuit of magical classes such as
            sorcerer.
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

export default GoblinPage;
