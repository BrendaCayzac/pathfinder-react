import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { fetchlingFeats } from "../middleware/FetchlingFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const FetchlingPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(fetchlingFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(fetchlingFeats);
  };

  function filterFeats(featLevel: string) {
    return fetchlingFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="fetchling"
        book="Lost Omens: Ancestry Guide"
        tags={["uncommon", "fetchling", "humanoid"]}
        img="fetchling_icon.png"
        alt="Image of a fetling"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Once human and now something apart, fetchlings display the Shadow
            Plane’s ancient influence through monochrome complexions, glowing
            eyes, and the casting of supernatural shadows.
          </p>

          <p>
            Fetchlings are a striking people whose skin appears entirely drained
            of color. These lithe and shadowy beings seem to sink and vanish
            into the gloom. They see in darkness, exercise control over shadows,
            and have strange occult powers. Some fetchlings develop their powers
            enough to pass between the Shadow and Material Planes, leaving other
            ancestries to whisper about figures that emerge from shaded corners
            and then vanish without a trace. Through magic and other means,
            they’ve spread across Golarion and the planes beyond, as adaptable
            as the humans they once were.
          </p>

          <p>
            The first fetchlings were refugees. Ages ago, when Earthfall
            destroyed ancient Azlant and cast the world into darkness, one small
            group of Azlanti pleaded for rescue. A mysterious hooded figure
            known as the Widow answered their call, slicing open a passage into
            the Shadow Plane. The Azlanti stepped through, trading the darkness
            of Earthfall for a deep shadow. As they navigated the plane’s
            strange environs and dangerous inhabitants, its nature slowly worked
            monumental changes on the survivors.
          </p>
          <p>
            If you want a character more at home in a mirror world of shadow,
            infused with umbral gloom, and who embodies the dualities of light
            and darkness, you should play a fetchling.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Live and work in gloomy areas of dim light with plenty of shadows,
              only providing bright light when expecting visitors.
            </li>
            <li>
              Look to people’s shadows as a way of identifying them, alongside
              features like stature or facial structure.
            </li>
            <li>
              Maintain composure when faced with strange creatures and
              circumstances.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Believe you have shadowy powers, such as the ability to consume
              light as food, melt into darkness, or travel between planes.
            </li>
            <li>Expect you to be cautious, reserved, and a loner.</li>
            <li>
              Express interest in your ancestral physiological connection to the
              Shadow Plane.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Most of the Shadow Plane appears as an altered version of the
            Material Plane but leeched of color. These same forces in the Shadow
            Plane have touched fetchlings, whose skin tones fall on a
            monochromatic scale from stark white to deep black, and all the
            shades of gray between. Their bodies are just as diverse in shape
            and size as humans, though most display a certain fluidity of motion
            reminiscent of shifting shadows. Fetchlings’ reflective, pupilless
            eyes can pierce darkness. A fetchling’s most notable feature is
            their shadow, which almost never faithfully reflects their body.
            Instead, fetchling shadows might have incongruous shapes or sizes,
            while others flicker, move of their own accord, or imitate the
            shadow of another nearby creature.
          </p>

          <div className="featured">
            <h2>Fetchling settlements</h2>
            <p>
              <b>Beacon (Shadow Absalom):</b> Estlaris ignore their city’s
              official name on Golarion and instead call their home Beacon.
              Velstracs and intelligent undead prowl the city’s sparsely
              traveled streets, but business thrives behind closed doors and in
              towering d’ziriak hives. Ships cross the parched Bay of Dusk to
              bring diverse wares that fuel warring factions, while the Glare at
              Beacon’s heart can send visitors back to the exact spot from which
              they entered the Shadow Plane.
            </p>
            <p>
              <b>Candlease:</b> This island of terrace farms, natural spires,
              and colorful woven bridges floats in the sky beneath Shadow
              Golarion’s moon. In the Tallow amphitheater, the timely gleaming
              of obsidian standing stones helps predict the Lacrimosas that both
              take and replace Somal’s Tears. Candlease also hosts storytelling
              contests and Brightsorrow moots.
            </p>
            <p>
              <b>Sample names:</b> Aerel, Amrunelara, Caladrel, Dardlara,
              Faunra, Heldalel, Jathal, Lanliss, Oparal, Seldlon, Soumral,
              Talathel, Tessara, Variel, Yalandlara, Zordlon
            </p>
          </div>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Most fetchlings remain close to Golarion on either the Material
                or Shadow Planes, either forming majority-fetchling communities
                or forging solitary paths. Both planar groups tend to be
                insular; many fetchling cultures preserve memories of their
                early, perilous days confronting the Shadow Plane’s hostile or
                beguiling denizens. Their predilection for forming tight
                communal bonds and adapting to local customs has spread to
                become part of broader fetchling culture, reinforced by two
                major fetchling groups—the Estlaris and Sharedars—who live in
                the shadow of more powerful entities.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Fetchling_02.png")}
                alt="Fetchling image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            A culture of survival passed down through generations means many
            fetchlings prefer to maintain a cautious worldview and adapt to
            prevailing circumstances. As a result, many trend toward a neutral
            outlook on life. Some choose to join with local powers for personal
            or communal advancement, or to tear systems down from the inside.
            Others attempt to shatter what they see as fetters that bind them
            and their communities.
          </p>
          <div className="featured">
            <h2>Kayal</h2>
            <p>
              Many fetchlings refer to themselves as kayals, an Aklo-derived
              word with a meaning akin to “shadow people.” Most kayals reject
              the term fetchling, which they see as imposed on them by
              individuals bound too closely to the Material Plane. The word has
              uncertain origins, but its use is widespread in Nidal. To kayals
              in Nidal, their name grounds and uplifts them as a worthy people
              forging their own paths, not as servitors of darkness. Skeptics
              consider kayal to be a superficial affectation.
            </p>
          </div>
          <p>
            No small number of fetchlings are nonreligious, recognizing all
            gods’ powers but revering none. Faithful fetchlings prefer gods that
            offer protection and stability, be it the pastoral embrace of
            Erastil or the binding chains of Zon-Kuthon. Those who travel alone
            or pass between planes seek the comfort of Alseta, Desna, and
            Gozreh. Calistria appeals to ambitious fetchlings, while Grandmother
            Spider and Sivanah help those who wish to move through the world
            unnoticed or unfettered. Some worship these three as a pantheon
            called the Laughing Veil; a few even include Norgorber as a fourth
            member.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Fetchlings adapted to a new world, and their names do the same.
              These names commonly include phonetic qualities from multiple
              languages or are simply local cultural names that fetchling
              families find compelling. Other dominant naming conventions
              include flowing sounds, harsh or hissing consonants, and surnames
              that refer to important relatives or community traits.
            </p>
            <p>
              <b>Sample names:</b> Amelisce, Ashka, Drosil, Eitsanara, Eomva,
              Ikyamek, Inva, Jegan, Lirtae, Meotrai, Sorsul, Zokaratz
            </p>
          </div>

          <h2>Elven heritages</h2>
          <p>
            Fetchlings’ extraplanar past shaped them in many ways. Choose one of
            the following fetchling heritages at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Bright</label>
            <div className="content">
              Your body proves that shadow can’t exist without light. Perhaps
              your eyes glow brighter or your veins occasionally pulse with
              light. You emit dim light within 5 feet of you. You can activate
              or suppress this ability as an action, which has the concentrate
              trait. Additionally, you can force fragments of your shadow to
              glow and cast dancing lights and light as occult innate cantrips.
              Cantrips are heightened to a spell level equal to half your level
              rounded up.
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Depp</label>
            <div className="content">
              <p className="text">
                Your predecessors dwelled in the Shadow Plane’s deepest, most
                treacherous regions. You might cast a denser shadow, have a
                slower pulse, or find comfort in the embrace of darkness. You
                gain cold or negative resistance equal to half your level
                (minimum 1), chosen when you gain this heritage.
              </p>

              <div className="featured">
                <h2>The widow</h2>
                <p>
                  The Widow was one of the Forsaken—sinister demigods who once
                  watched over the Shadow Plane. It heard an Azlanti call for
                  rescue, lifted its shivering sickle, and tore a passage into
                  darkness; those it ushered into the Shadow Plane became the
                  first fetchlings. Few remember anything beyond the Widow’s
                  name, and fewer still offer it prayers. It grants power to no
                  fetchling priests.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Liminal</label>
            <div className="content">
              <p className="text">
                You come from a line of fetchlings with a closer connection to
                the Ethereal and Shadow Planes, and you share those realms’
                affinity with the in-between and unseen. You gain a +1
                circumstance bonus to locate undetected creatures within 60 feet
                when using the Seek action. Your flat check to target concealed
                creatures is DC 3 instead of DC 5, and your flat check to target
                undetected creatures is DC 9 instead of DC 11.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Resolute</label>
            <div className="content">
              <p className="text">
                Your ancestors have long dealt with the horrific—in the Shadow
                Plane or elsewhere—and you bear their mental fortitude. When you
                roll a success on a saving throw against an emotion effect, you
                get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Wisp</label>
            <div className="content">
              <p className="text">
                Your ancestors’ exposure to the Shadow Plane wrought great
                physical changes. Your hair or skin sometimes appears
                insubstantial, and you’re slighter and more agile than other
                fetchlings. You’re Small instead of Medium. You gain the trained
                proficiency rank in Acrobatics, the Quick Squeeze skill feat,
                and a +1 circumstance bonus to Acrobatics checks to Tumble
                Through. If you would automatically become trained in Acrobatics
                (from your background or class, for example), you instead become
                trained in a skill of your choice.
              </p>
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
              <li>Shadowtongue</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Draconic, D’ziriak, Necril,
                Undercommon, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>arkvision</h2>
            <p>
              You can see in darkness and dim light just as well as you can see
              in bright light.
            </p>
          </div>

          <h2>Fetchling Adventurers</h2>
          <p>
            Fetchlings have a well-earned reputation as travelers. Their
            merchants and emissaries ply many roads, while nomads and sailors
            seek what lies over the next horizon. Charlatans, criminals, and
            street urchins carve livelihoods from inhospitable environs. Many
            fetchlings leverage their natural litheness as swashbucklers or
            rogues. The Shadow Plane’s caress awakens hidden power in many
            fetchling bards or sorcerers (especially those of the shadow
            bloodline) or drives them to study deeper mysteries as witches or
            wizards.
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

export default FetchlingPage;
