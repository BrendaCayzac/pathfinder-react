import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { azarketiFeats } from "../middleware/AzarketiFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const AnadiPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(azarketiFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(azarketiFeats);
  };

  function filterFeats(featLevel: string) {
    return azarketiFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="azarketi"
        book="Absalom, City of Lost Omens"
        tags={["uncommon", "amphibious", "azarketi", "humanoid"]}
        img="azarketi_icon.png"
        alt="Image of an Azarketi"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Azarketis, inheritors of a shattered empire's legacy, hold their
            proud traditions close but still surface to interact with the rest
            of the world.
          </p>
          <p>
            Azarketis, inheritors of a shattered empire’s legacy, hold their
            proud traditions close but still surface to interact with the rest
            of the world.
          </p>

          <p>
            The aquatic humanoids of the Inner Sea share a somber and burdened
            history. Most refer to these aquatic peoples as gillmen, or
            sometimes Low Azlanti, though they typically refer to themselves as
            azarketis, an Azlanti word that translates roughly to “people of the
            seas.” After Earthfall, these proud humans were mutated into aquatic
            servants by their alghollthu foes. Feeling like they don’t fully
            belong with their human brethren nor with the sea that binds them,
            many azarketis struggle for a sense of identity and purpose. Though
            they remain distrusted by the surface dwellers, azarketis celebrate
            their unique lineage and their descent from the venerated Azlanti
            culture.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Ambitiously seek to defy negative perceptions and prejudice laid
              against you.
            </li>
            <li>Be reclusive and skeptical of strangers.</li>
            <li>
              Regard the water as your home, but be intrigued by societies along
              the shore.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Assume you are an ambassador to the sea and ask for your advice on
              nautical matters.
            </li>
            <li>Misunderstand your gentle gestures and mild expressions.</li>
            <li>
              Treat you with distrust or suspicion and anticipate betrayal from
              you.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <div className="featured">
            <h2>A place undersea</h2>
            <p>
              Due to their association with the alghollthu, azarketi often face
              discrimination on the surface. Below, however, they are just
              another ocean denizen. Many revel in the isolation from their
              human ancestors, finding true peace in the depths.
            </p>
          </div>

          <p>
            Azarketis appear as regal, athletic humans. Their soft, hydrophilic
            skin ranges from pearlescent white to pinkish, greenish, or brown
            tones reminiscent of coral. Azarketis with hair are somewhat rare;
            many sport fins or scaled ridges on their heads instead. Like the
            Azlanti people from which they descend, they often have violet eyes.
            Their aquatic lineage is obvious thanks to the sets of three gills
            on either side of their necks, as well as their webbed hands and
            feet. Azarketis have been known to live longer than humans, although
            they mature at about the same rate.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Azarketis often take the names of nautical, weather, or
              geographical features important to the azarketi’s family. Other
              azarketi groups will choose human names in order to encourage
              conformity with surface cultures. Some azarketi names have been
              passed down through so many generations that they still use
              ancient Azlanti roots or refer to bodies of water that no longer
              exist.
            </p>
            <p>
              <b>Sample names:</b> Aft, Aliz, Cascade, Delta, Harbor, Ilani,
              Inkua, Jib, Lagoon, Lobay, Marine, Tidal, Windward, Zarket
            </p>
          </div>

          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Azarketis lack the center for combined culture that helps other
                groups maintain a cohesive identity. The vastness of the oceans
                and waterways spread these swift-swimming people across the
                Inner Sea and beyond. Many azarketis rely only on the small
                familial groups in their immediate community and prefer smaller
                populations with comrades they trust and know intimately.
              </p>
              <p>
                Some azarketis prefer to foster connections with their
                surface-dwelling brethren. Living in ports, river towns and
                along the shore allows azarketis a greater scope of
                opportunities not afforded to exclusively land or sea peoples.
                Although integrating with land society can be difficult,
                azarketis manage by forming bonded communities. Members will
                often have fond familial names for one another, regardless of
                actual relation.
              </p>
              <p>
                If they have the means, some azarketis dress in attire
                reflecting their Azlanti heritage. More commonly, azarketis do
                their best to remain inconspicuous when they emerge from the
                water. Many will wear shemaghs or other head wrappings, which
                both hide their gills and provide a few extra comfortable hours
                out of water if soaked before donning.
              </p>

              <div className="featured">
                <h2>Azarketi enclaves</h2>
                <p>
                  Azarketis are mostly concentrated around the Inner Sea region.
                  The Isle of Kortos hosts several pockets of azarketi
                  settlements, helped by the presence of the azarketi city
                  Kienek-Li to the north of Starstone Isle. Gilltown is the
                  largest azarketi community in Absalom, but azarketis are also
                  prevalent in the city’s seaside districts.
                </p>
              </div>
            </div>
            <figure>
              <img
                src={require("../assets/img/Azarketi_02.png")}
                alt="Azarketi image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            As they are typically outsiders to the domains of surface life,
            azarketis tend toward deities with an affinity for the ocean or
            other forms of water, the most popular being Gozreh. They are also
            likely to give reverence to other deities of nature or navigation,
            such as Desna.
          </p>

          <p>
            Some azarketis are tempted toward the call of the deep and serve
            their old alghollthu masters as gods. These individuals are enticed
            by eldritch entities such as the mysterious veiled masters—powerful
            beings of the deep ocean responsible for both uplifting and
            destroying the Azlanti people.
          </p>

          <p>
            Azarketis vary wildly in beliefs and values, as evidenced by their
            broad divergence in allegiance; thus, azarketis can be of any
            alignment.
          </p>

          <h2>Anadi heritages</h2>
          <p>
            An azarketi’s heritage represents the waters they call home, and how
            the individual combines their human and aquatic origins. Choose one
            of the following azarketi heritages at 1st level.
          </p>

          <div className="featured">
            <h2>Azarketi types</h2>
            <p>
              Some azarketis live near the ruins of Old Azlant or in the deepest
              trenches of the ocean and lead isolated and mysterious lives.
            </p>
            <p>
              River azarketis settle at the bases of waterfalls, or hidden away
              in the caves behind them. Small nomadic azarketi groups have taken
              to land in rainy or marshy locations, though such groups are rare.
            </p>
          </div>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Ancient scale</label>
            <div className="content">
              <p className="text">
                our lineage stems from azarketis who remain dedicated to their
                deep-sea roots. Divorced from land society, you’re a foreigner
                to any world above a thousand fathoms deep. You gain darkvision.
                Your body is dotted with phosphorescent spots that emit a
                guiding light and help you communicate. The spots—located
                primarily on your face, arms, and hands—illuminate a 10-foot
                radius around you with dim light. You can activate, deactivate,
                or change the arrangement of lights as an action, which has the
                concentration trait.
              </p>

              <div className="featured">
                <h2>Fighting spirit</h2>
                <p>
                  Surface azarketis often keep to the margins of human society,
                  working menial jobs or filling roles that allow them isolation
                  when necessary. Many consequently have a chip on their
                  shoulder and are only too eager to prove themselves in the
                  face of skeptics. Such azarketis often take up the life of a
                  mercenary or adventurer.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Benthic</label>
            <div className="content">
              <p className="text">
                Your heritage traces to azarketis living deep beneath the sea,
                and you can handle the chilling depths more easily than most.
                You gain resistance to cold equal to half your level, and you
                don’t treat environmental cold as one degree more severe when
                you are wet. You adapt to pressure changes from being deep
                underwater automatically without ill effect.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Mistbreath</label>
            <div className="content">
              <p className="text">
                You descend from azarketis who migrated to land environments
                that could support their need for water. Over time, your people
                adapted to life on land culturally and physically, even
                resulting in azarketis born with human hair like their Azlanti
                ancestors. You no longer need to be immersed in water every 24
                hours to maintain your skin and can instead mist or wipe your
                skin with water to live comfortably. Your land Speed
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">River</label>
            <div className="content">
              <p className="text">
                You come from azarketis who abandoned the oceans for the fresh
                water of inland life. The varied geography of rivers required
                you to develop advanced physical skills to swim against rapids,
                leap through cascading waters, and deftly navigate shallow and
                narrow channels. When you succeed at an Athletics check to Swim,
                you get a critical success instead.
              </p>

              <div className="featured">
                <h2>Legacy of Azlant</h2>
                <p>
                  Directly descended from the people of Azlant, azarketis have
                  preserved their ancestors’ culture through art, oral
                  traditions, songs, and stories. Azarketi scholars study the
                  history of Azlant and Earthfall, elders recite tales of
                  Azlanti legends, and musicians sing songs to long-lost gods.
                  Most azarketis know the location of the nearest Azlanti ruin,
                  and many possess a piece of Azlanti jewelry.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Spined</label>
            <div className="content">
              <p className="text">
                Your fins conceal launchable toxic spines. You have a spine
                ranged unarmed attack with the unarmed trait that deals 1d4
                poison damage, has a range increment of 10 feet, and is in the
                dart weapon group.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Ractile</label>
            <div className="content">
              <p className="text">
                Your skin can detect the slightest changes in ocean currents.
                You gain imprecise wavesense with a range of 30 feet, allowing
                you to sense motion in the water around you. You also gain a +1
                circumstance bonus to Survival checks to Sense Direction in
                aquatic environments.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>8</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>20 feet</p>
            <p>Swim 30 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Constitution</li>
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
              <li>Alghollthu</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Aquan, Azlanti, Draconic, Elven,
                and Undercommon and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light and you
              ignore the concealed condition due to dim light.
            </p>
            <h2>Hydration</h2>
            <p>
              While you are an amphibious being equally as capable on land as in
              the water, your body requires you to return to aquatic
              environments at least once in a 24-hour period. You must submerge
              in water in order to rehydrate your water-acclimated skin. If you
              fail to do this, your skin begins to crack and your gills become
              painful. After the first 24 hours outside of water, you take a –1
              status penalty to Fortitude saves. After 48 hours, you struggle to
              breathe air and begin to suffocate until returned to water.
            </p>
          </div>

          <h2>Azarketi Adventurers</h2>
          <p>
            With their affinity to water, nautical navigation skills, and
            athletic capabilities, azarketis make ideal rangers. Azarketis’
            versatility both on land and in water make them particularly
            formidable fighters, while their direct connection to the sea leads
            others to become druids. As many azarketis have a connection to
            alghollthus’ occult magic, it’s not uncommon for azarketis to be
            sorcerers, though studious individuals sometimes become bards or
            wizards instead.
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

export default AnadiPage;
