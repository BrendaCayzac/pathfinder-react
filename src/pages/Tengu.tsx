import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { tenguFeats } from "../middleware/TenguFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const TenguPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(tenguFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(tenguFeats);
  };

  function filterFeats(featLevel: string) {
    return tenguFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="tengu"
        book="Advanced Players Guide"
        tags={["uncommon", "tengu", "humanoid"]}
        img="tengu_icon.png"
        alt="Image of a tengu"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Tengus are a gregarious and resourceful people that have spread far
            and wide from their ancestral home in Tian Xia, collecting and
            combining whatever innovations and traditions they happen across
            with those from their own long history.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Tengus are survivalists and conversationalists, equally at home
                living off the wilderness and finding a niche in dense cities.
                They accumulate knowledge, tools, and companions, adding them to
                their collection as they travel.
              </p>
              <p>
                The tengu diaspora has spread across Golarion in search of a
                better life, bringing their skill with blade crafting to lands
                far from their home. In maritime regions, tengus notably work as
                fishers, blacksmiths, and “jinx eaters”—members of ships’ crews
                who are believed, accurately or otherwise, to absorb misfortune.
                Having lived in a variety of conditions and locations, tengus
                tend to be nonjudgmental, especially with regard to social
                station, though their willingness to associate with lawbreakers
                has often led some to look at them with suspicion.
              </p>
              <p>
                If you want to play a character hailing from a rich history of
                artisanship and tradition, but who happily picks up new
                practices, companions, words, and items as needed, you should
                play a tengu.
              </p>
            </div>

            <figure>
              <img
                src={require("../assets/img/Tengu_02.png")}
                alt="Tengu image"
              />
            </figure>
          </div>

          <h2>You might...</h2>
          <ul>
            <li>Be gregarious and eager to find a flock of your own.</li>
            <li>
              Voraciously absorb the practices of those around you, sometimes
              even forgetting where they came from.
            </li>
            <li>
              Be willing to take on any task or job, no matter what others
              think.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Look to you as a source of eclectic skills and knowledge,
              especially relating to languages.
            </li>
            <li>
              Get confused by your simultaneous respect for and disregard of
              tradition.
            </li>
            <li>
              Have trouble reading your expressions or regard you with suspicion
              and superstition.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Tengus have many avian characteristics. Their faces are tipped with
            sharp beaks and their scaled forearms and lower legs end in talons.
            As closed footwear tends to fit poorly unless custom made, many
            tengus wear open sandals or simply go barefoot. Tengus are rarely
            more than 5 feet tall, and they are even lighter than their smaller
            frames would suggest, as they have hollow bones. A small number of
            tengus have vestigial wings incapable of true flight.
          </p>
          <p>
            Tengus hatch from eggs and are featherless for their first year of
            life, during which they rarely leave home. They soon grow a downy
            gray coat, which is replaced by a dark covering of adult feathers by
            the time they come of age at around 15 years. Tengus use their shed
            feathers in a variety of tools, from simple writing quills to
            magical fans to focus their ancestral magic. Many tengus modify
            their appearance by dyeing patterns into their feathers or talons,
            which amplifies their body language and has the added benefit of
            aiding other humanoids in understanding their expressions.
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
                Tengus are extremely social, banding together in extended
                communities with many families living in adjacent houses and
                sharing the work of the household. In cities, a community may
                also contain members of other ancestries. Tengu children raised
                in the same unit consider each other siblings, usually
                forgetting which of them share a biological connection.
              </p>
              <p>
                The greatest divide in tengu society is between tengus remaining
                in their ancestral home and those who have dispersed across the
                world. Tengus refer to these two groups as those “in the roost”
                and those “migrating,” respectively. Roosted tengus tend to be
                more traditionalist and conservative and are especially
                concerned with preserving their culture in the face of years of
                erosion from oppression. Migrating tengus, on the other hand,
                voraciously absorb the culture of the various nations and
                settlements that they now call home.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Tengu.png")}
                alt="Sprite image"
              />
            </figure>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            Tengus often follow the faith of the region in which they were
            raised, though the tengu ancestral deity is the storm god Hei Feng.
            This god’s notorious drunken carousing and emotional swings causes
            many tengus to instead focus their attention on gods of freedom and
            travel, such as Desna or Cayden Cailean, or deities of nature, such
            as Gozreh. Besmara is also a common subject of tengu worship,
            especially among tengus who live on the sea. More about Besmara and
            Hei Feng can be found in Lost Omens Gods and Magic (pages 55 and
            63).
          </p>
          <p>
            Before their diaspora, tengus practiced a syncretic faith that
            blended a polytheistic worship of the deities responsible for
            creating the natural world. As tengu folklore posits that tengus
            long ago descended from the night sky on shooting stars to rest upon
            Golarion’s highest peaks, animist rites were practiced on mountains
            and other great natural features. Even today, tengus rarely
            differentiate between divine and primal worship.
          </p>
          <p>
            Tengus are far more concerned with the balance between
            traditionalism and adaptability than they are with good and evil,
            with lawful tengus more common among the roosted and chaotic tengus
            more common among the migratory.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Though roosted tengus tend toward more traditional names with the
              hard consonants often seen in the Tengu language, migrating
              tengus’ tendency to readily absorb and repurpose the culture of
              those around them has led to names that combine elements of
              whatever languages suited the namer’s fancy.
            </p>
            <p>
              <b>Sample names:</b> Arkkak, Chuko, Dolgra, Dorodara, Kakkariel,
              Kora, Marrak, Mossarah, Pularrka, Rarorel, Ruk, Tak-Tak,
              Tsukotarra
            </p>
          </div>

          <h2>Tengu heritages</h2>
          <p>
            As a fluid people scattered from their original homes, there are a
            wide variety of tengus on Golarion. Choose one of the following
            tengu heritages at 1st level.
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
            <label htmlFor="heritage-2">Mountainkeeper</label>
            <div className="content">
              <p className="text">
                You come from a line of tengu ascetics, leaving you with a link
                to the spirits of the world and the Great Beyond. You can cast
                the disrupt undead cantrip as a primal innate spell at will. A
                cantrip is heightened to a spell level equal to half your level
                rounded up. Each time you cast a spell from a tengu heritage or
                ancestry feat, you can decide whether it’s a divine or primal
                spell.
              </p>
              <Spell
                name="disrupt undead"
                tags={["cantrip", "necromancy", "positive"]}
                action="two_action"
                description={
                  <span>
                    <b>Range:</b> 30 feet; Targets 1 undead creature.
                    <br />
                    <br />
                    <span className="frequency">
                      <b>Saving Throw:</b> Fortitude.
                    </span>
                    <br />
                    You lance the target with energy. You deal 1d6 positive
                    damage plus your spellcasting ability modifier. The target
                    must attempt a basic Fortitude save. If the creature
                    critically fails the save, it is also enfeebled 1 for 1
                    round.
                    <br />
                    <br />
                    Heightened (+1) The damage increases by 1d6.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Skyborn</label>
            <div className="content">
              <p className="text">
                Your bones may be especially light, you may be a rare tengu with
                wings, or your connection to the spirits of wind and sky might
                be stronger than most, slowing your descent through the air. You
                take no damage from falling, regardless of the distance you
                fall.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Stormtossed</label>
            <div className="content">
              <p className="text">
                Whether due to a blessing from Hei Feng or hatching from your
                egg during a squall, you are resistant to storms. You gain
                electricity resistance equal to half your level (minimum 1). You
                automatically succeed at the flat check to target a concealed
                creature if that creature is concealed only by rain or fog.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Taloned</label>
            <div className="content">
              <p className="text">
                Your talons are every bit as sharp and strong as your beak. You
                gain a talons unarmed attack that deals 1d4 slashing damage.
                Your talons are in the brawling group and have the agile,
                finesse, unarmed, and versatile piercing traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Dogtooth</label>
            <div className="content">
              <p className="text">
                In addition to a beak, your mouth also features a number of
                vicious, pointed teeth. Some legends claim your powerful jaws
                can even bite through steel. While you aren’t that strong yet,
                your fangs can still leave terrible wounds. Your beak unarmed
                attack gains the deadly d8 trait.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Wavediver</label>
            <div className="content">
              <p className="text">
                You’re one of the rare tengu who can cut through water like a
                bird through air, and you often lurk in rivers or oceans where
                few expect you. You gain a swim Speed of 15 feet.
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
              <li>Tengu</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Dwarven, Elven, Halfling, Gnomish,
                Goblin, Sylvan, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>

            <h2>Sharp beak</h2>
            <p>
              With your sharp beak, you are never without a weapon. You have a
              beak unarmed attack that deals 1d6 piercing damage. Your beak is
              in the brawling weapon group and has the finesse and unarmed
              traits.
            </p>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Tengu Adventurers</h2>
          <p>
            A tengu that leaves the ancestral homeland feels an intense pull
            toward adventure, to cross vast distances, collect beautiful
            treasures, and brave the challenges of combat or the rolling sea.
            <br />
            <br />
            Tengu backgrounds might reflect their place in the homeland or the
            tengu diaspora. These could include acrobat, barkeep, charlatan,
            emissary, entertainer, fortune teller, gambler, merchant, nomad, or
            sailor from the Core Rulebook, plus bandit, courier, insurgent,
            refugee, and scavenger from this source.
            <br />
            <br />
            Tengus often become rogues, bards, oracles, rangers, or
            swashbucklers.
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

export default TenguPage;
