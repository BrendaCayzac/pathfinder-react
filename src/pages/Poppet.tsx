import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { poppetFeats } from "../middleware/PoppetFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const PoppetPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(poppetFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(poppetFeats);
  };

  function filterFeats(featLevel: string) {
    return poppetFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="poppet"
        book="Lost Omens: The Grand Bazaar"
        tags={["rare", "poppet", "humanoid"]}
        img="poppet_icon.png"
        alt="Image of a poppet"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Poppets are small, basic constructs that typically help their owners
            with simple tasks. Occasionally, poppets gain sapience,
            independence, and a spark of life. Elevated beyond mere helpers or
            playthings, these poppets are free to chart their own destinies.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Poppets are small, basic constructs that typically help their
                owners with simple tasks. Occasionally, poppets gain sapience,
                independence, and a spark of life. Elevated beyond mere helpers
                or playthings, these poppets are free to chart their own
                destinies
              </p>
              <p>
                Most commonly made of cloth, wicker, and wood, poppets are among
                the simplest of constructs. They serve as helpers to fetch
                tools, clean dishes, tidy rooms, or perform other light tasks.
                Their size and appearance vary, but nearly all poppets appear
                humanoid in shape and between 1 to 3 feet tall. They’re usually
                roughly made with button eyes sewn onto blank faces, strings of
                yarn in place of hair, and a simple dress or tunic made from
                coarse, cheap cloth. Wealthy families sometimes purchase poppets
                as toys, with their squishy bodies and stitched smiles, to keep
                their children company. Most poppets can’t speak and lack the
                intellect to understand speech beyond preprogrammed orders.
                Poppets can become familiars, as presented in the Pathfinder
                Society Familiars section of the Lost Omens Pathfinder Society
                Guide.
              </p>

              <p>
                Very, very rarely, a common poppet spontaneously manifests a
                spark of life—a tiny bit of life essence—and becomes a thinking,
                independent creature. These events are exceedingly rare; fewer
                than one in a thousand gain this spark. A poppet might manifest
                this life essence through a magical fluke in its construction, a
                brush with ephemeral spirits, or even the fervent wish of a
                loving child. Whatever their origin, the poppets described here
                as an ancestry have their own life and free will. They might
                consider their creators or former owners to be friends, but they
                acknowledge no one as their master and often leave comfortable
                homes or workshops to seek their place in the world.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Poppet_02.png")}
                alt="Poppet image"
              />
            </figure>
          </div>

          <p>
            Sapient living poppets usually refer to themselves as “awakened” to
            indicate the moment they gained clear and true self-awareness.
            Poppets might talk about this event as the time they “popped up,”
            “woke up,” or “sparked alive.” Most poppets celebrate two special
            anniversaries each year: the day of their initial creation (which,
            for most poppets, they must learn secondhand or by studying their
            creator’s records) and the day they awoke to true consciousness.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Like surprising others with your unexpected cleverness and
              eloquence.
            </li>
            <li>
              Seek out other self-aware beings that most people might overlook.
            </li>
            <li>Rely on your harmless appearance to trick others.</li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>Mistake you for a toy.</li>
            <li>
              Doubt your ability to handle tasks that require any dexterity or
              complex thought.
            </li>
            <li>
              Wonder whether your mundane form conceals other magical marvels.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Living poppets are both humanoids and constructs, which gives them
            some of the benefits and drawbacks of each category. Their bodies
            are usually made of wood and wicker, but they can be made of cloth,
            leather, tin, stuffing, or delicate clockwork. Either way, poppets
            burn or melt quickly and must take care to avoid fire. They
            virtually never look alike, as each is created from unique and
            unusual circumstances.
          </p>
          <p>
            Poppets are fully alert and self-aware when they awaken to
            sentience; although they might not know much at first, they
            instantly gain intelligence and consciousness. They must breathe and
            sleep, and they must consume food and water each day; through a sort
            of magical digestion they can restore rips, tears, or scuffs in
            their physical form. Poppets don’t age the same way fleshy creatures
            do, but they slowly wear down in physical form as well as in mental
            acuity. A poppet that tends to their body and mind (and takes care
            to avoid fire) can live up to 30 years.
          </p>

          <div className="featured">
            <h2>Poppet settlements</h2>
            <p>
              Poppets don’t often meet another of their kind, much less settle
              down together. Poppet-only settlements simply don’t exist or are
              so remote as to be wholly unknown. Instead, poppets are most
              common in large cities, surrounded by the bustle of crowds. Any
              place where people appreciate skilled artisans, whether in cloth
              or clockworks, is a good place to find simple poppets, and thus
              awakened poppets are more likely to be found in bigger cities like
              Absalom, Katapesh, and Quantium. Poppets usually have a network of
              allies to draw upon in their communities; for many poppets, this
              network includes their creator and their creator’s associates, but
              even poppets who don’t know their creator tend to make themselves
              useful and liked.
            </p>
          </div>
          <div
            className="flex-column"
            style={{
              flexDirection: "row-reverse",
            }}
          >
            <div>
              <h2>Society</h2>
              <p>
                Free-willed poppets are so rare that almost no such poppet has
                met another. Poppets normally live with larger creatures, though
                not always their creators, and tend to get along well in
                societies sized for larger creatures. Most live in cities
                because that’s where toy makers, clockwork crafters, and other
                specialists have their shops, but poppets created by lonely
                hermits or reclusive inventors might prefer a life in the
                wilderness.
              </p>

              <div className="featured">
                <h2>Poppet in society</h2>
                <p>
                  It might seem strange to picture a poppet walking into a
                  general store to buy rope and jerky, but such occurrences
                  aren’t uncommon in urban areas. Poppets are, after all,
                  designed to handle mundane tasks, so people aren’t likely to
                  call attention to a poppet going about routine business in
                  such communities. People might even help the poppet out by
                  leaning a plank so it can reach a counter or adjusting a heavy
                  load—thinking that, by doing so, they’re aiding a powerful or
                  influential owner. Talk is likely to circulate, however, if
                  the poppet is active in a small settlement where such helper
                  constructs are unknown, or if the poppet is engaged in some
                  truly unusual tasks, like giving a speech or dragging in a
                  slain monster for a bounty.
                </p>
              </div>
            </div>
            <figure>
              <img
                src={require("../assets/img/Poppet.png")}
                alt="Poppet image"
              />
            </figure>
          </div>

          <p>
            Poppets often stay on the lookout for other creatures who, like
            them, have stumbled into self-awareness. They might have regular
            conversations with animated objects, golems, houseplants, statues,
            or toys, in which they’re deeply polite out of a desire to leave a
            good impression for the time when the object “wakes up.”
          </p>

          <h2>Alignment and religion</h2>
          <p>
            Ordinary poppets are built as helpers and companions, and awakened
            poppets tend to retain this drive to aid others. They’re therefore
            generally good, and more poppets are lawful than chaotic. Some spend
            their time trying to uncover secrets of their creation, find others
            like them, or keep out of trouble; these poppets are generally
            neutral in alignment. Poppets aren’t typically religious unless a
            particular faith defined their creation, such as being made from
            scraps of Iomedaean altar cloth or woven from reeds around a sacred
            Gozren pool. These poppets tend to be vocally religious, even
            zealous, in their faith. Poppets who find religion later in their
            lives often revere Brigh, Casandalee, or Nethys.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Poppets generally choose their own names, usually descriptive
              nicknames based on their materials, patterns, size, or demeanor.
              They tend to pick up and shed nicknames throughout their lives,
              and they happily adopt nicknames given to them by people they
              like. A poppet fashioned to look like a particular person, such as
              a doll sewn to resemble a deceased child, might proudly take the
              name of that person.
            </p>
            <p>
              <b>Sample names:</b> Burlap, Buttoneyes, Checker, Clockwhirr,
              Fivestitch, Nettle, Scramble, Stuffing, Taffeta, Tattercap
            </p>
          </div>

          <h2>Poppet heritages</h2>
          <p>
            Although each poppet’s origin is unique, the fundamental nature of
            their origin provides them with a heritage. Choose one of the
            following poppet heritages at 1st level.
          </p>

          <div className="featured">
            <h2>Poppet motives</h2>
            <p>
              Nearly all poppets are interested in helping others and finding
              more creatures like themselves, and both these motivations are
              excellent for adventure. Yet, a poppet might have any number of
              other, more personal motives. A poppet might adventure to find a
              cure for a terminally ill creator, carry out the dying wish of a
              deceased friend, or complete the life’s goal of a spirit that
              awakened within them, even if the poppet doesn’t know who that
              person was in life. A poppet might take up arms to rescue
              kidnapped friends or save endangered children. Poppets aren’t
              often greedy, but some might adventure to adorn their simple forms
              with gemstone eyes, golden thread, or other flashy accoutrements.
            </p>
          </div>
          <br />
          <br />
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
            <label htmlFor="heritage-2">Ghost</label>
            <div className="content">
              <p className="text">
                You awakened when a bit of another person’s life force and a
                fragment of their soul—possibly, but not always, at the moment
                of their death—found its way into your constructed body. You
                don’t remember anything more than vague flashes of your “before
                life,” but that life essence still protects you. You gain
                resistance to negative damage equal to half your level (minimum
                1).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Stuffed</label>
            <div className="content">
              <p className="text">
                You have little inside you other than cotton, sawdust, or dried
                leaves. You take no damage from falling, regardless of the
                distance you fall.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Toy</label>
            <div className="content">
              <p className="text">
                YYou have the form of a child’s tiny toy or doll, but you don’t
                let your small size impede your joy of life. Instead of Small,
                your size is Tiny. Like other Tiny creatures, you don’t
                automatically receive lesser cover from being in a larger
                creature’s space, but circumstances might allow you to Take
                Cover. You can purchase weapons, armor, and other items for your
                size with the same statistics as normal gear, except that melee
                weapons have a reach of 0 for you (or a reach 5 feet shorter
                than normal if they have the reach trait). You can enter another
                creature’s space, which is important because you must usually
                enter a creature’s space to attack it with melee Strikes!
                Remember to adjust the Bulk of items and your Bulk limit for
                Tiny size (see Bulk of Creatures section in the Core Rulebook).
                The information on how to handle Tiny PCs, including rules for
                attempting to ride on other characters, appears in the Special
                Rules section of the Pathfinder Lost Omens Ancestry Guide.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Windup</label>
            <div className="content">
              <p className="text">
                You’re made primarily of soft metals, such as tin or silver, and
                your life force dwells within an exceptional array of clockworks
                deep in your body. Provided you wind metal tabs on your body a
                few times each day, you don’t need food or water to survive. You
                must still breathe to ventilate your internal mechanisms and
                sleep to give your mechanisms rest, just like other poppets.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Wishborn</label>
            <div className="content">
              <p className="text">
                You were wished to life, either by a powerful spellcaster or by
                the earnest desire of an innocent person who loved you very
                much. You’re living proof that a hopeful spirit can overcome any
                obstacle. If you roll a success on a saving throw against an
                emotion or fear effect, you get a critical success instead.
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
              <li>Constitution</li>
              <li>Charisma</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Dexterity</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Dwarven, Elven, Gnomish,
                Goblin, Sylvan, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Darkvision</h2>
            <p>
              You can see in darkness and dim light just as well as you can see
              in bright light, though your vision in darkness is in black and
              white.
            </p>
            <h2>Constructed</h2>
            <p>
              The materials of your body resist ailments that assail the flesh.
              You gain a +1 circumstance bonus to saving throws against death
              effects, disease, and poison as well as to saving throws against
              effects that would give you the drained, paralyzed, or sickened
              conditions. Your spark of life means that you’re a living
              creature, and you can be healed by positive energy and harmed by
              negative energy as normal.
            </p>
            <h2>Flammable</h2>
            <p>
              You have weakness to fire damage equal to one-third your level
              (minimum 1).
            </p>
          </div>

          <h2>Poppet adventurers</h2>
          <p>
            Poppets like helping others and experiencing new things; both of
            these motivations lead naturally into the life of an adventurer.
            They aren’t generally driven by a lust for treasure, but they like
            adorning themselves with pretty accoutrement and using their finds
            to better the lives of others. The acolyte, entertainer, and laborer
            backgrounds are good choices for many poppets, as are cook,
            scavenger, and servant. Poppets who watched their creator work might
            have the artist, hermit, or tinker background to reflect what
            they’ve seen. Because poppets like to help others, they gravitate
            toward becoming bards or champions. Some might think that poppets’
            small size and general clumsiness make them poor fighters or
            rangers, but certain poppets embrace these classes out of a drive to
            display their bravery and prove the naysayers wrong.
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

export default PoppetPage;
