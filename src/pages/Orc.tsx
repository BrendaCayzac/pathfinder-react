import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { orcFeats } from "../middleware/OrcFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const OrcPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(orcFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(orcFeats);
  };

  function filterFeats(featLevel: string) {
    return orcFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="orc"
        book="Advanced Players Guide"
        tags={["uncommon", "orc", "humanoid"]}
        img="orc_icon.png"
        alt="Image of a orc"
      />

      <section>
        <div className="content">
          <div className="flex-column">
            <div>
              <p className="introduction">
                Orcs are forged in the fires of violence and conflict, often
                from the moment they are born. As they live lives that are
                frequently cut brutally short, orcs revel in testing their
                strength against worthy foes, whether by challenging a
                higher-ranking member of their community for dominance or
                raiding a neighboring settlement. Many orcs seek glory as soon
                as they can walk and carry a blade or club, taming wild beasts
                or hunting deadly monsters.
              </p>
              <p>
                Orcs often struggle to gain acceptance among other communities,
                who frequently see them as brutes. Those who earn the loyalty of
                an orc friend, however, soon learn that an orc’s fidelity and
                honesty are unparalleled. Orc barbarians, fighters, and rangers
                are prized as gladiators and mercenaries. While some human
                settlements might be hesitant to accept an entire orc community
                into their midst, a small handful of orc mercenaries can do the
                job of an entire squad of human conscripts, so long as the orcs
                are well fed and well paid. Though the belief that orcs are only
                suited for battle is pervasive among other humanoids, the harsh
                orc mentality comes from a long history of conflict rather than
                a lack of ability in other areas.
              </p>
              <p>
                Orc culture teaches that they are shaped by the challenges they
                survive, and the most worthy survive the most hardships. Orcs
                who attain both a long life and great triumphs command immense
                respect.
              </p>
            </div>
            <figure>
              <img src={require("../assets/img/Orc_02.png")} alt="Orc image" />
            </figure>
          </div>

          <p>
            If you want a character who is hardy, fearsome, and excels at feats
            of physical prowess, you should play an orc.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Eagerly meet any chance to prove your strength in a physical
              contest.
            </li>
            <li>
              Believe that lies and treachery are for those who lack the
              strength to seize what they want.
            </li>
            <li>
              View dying in glorious combat as preferable to a mundane death
              from old age or illness.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>See you as violent or lacking in discipline.</li>
            <li>Underestimate your intellect, cunning, and knowledge.</li>
            <li>Admire your forthrightness and blunt honesty.</li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Orcs are tall and powerfully built, with long arms and stocky legs.
            Many orcs top 7 feet in height, though they tend to adopt broad,
            almost bow-legged stances and slouch forward at the shoulders. The
            combination makes for a seeming contradiction, sharing an eye level
            with most humanoids while simultaneously towering over them. Orcs
            have rough skin, thick bones, and rock-hard muscles, making them
            suited to war and other physically demanding tasks. Despite the
            roughness of their skin, orcs scar easily, and most orcs take great
            pride in the scars they have accumulated. Orc skin color is
            typically green and occasionally gray, though some orcs have other
            skin colors that reflect adaptations to their environments.
          </p>
          <p>
            Orcs consider powerful builds and heavily scarred skin attractive,
            regardless of gender. A powerful orc makes the hold stronger, and
            scars are signs of victories won or hardships survived. Similarly,
            many orcs consider large, jutting tusks to be more attractive than
            smaller tusks, since the former make more effective weapons. Many
            orcs also find tattoos to be attractive, particularly large or
            painful ones that cover a significant amount of skin.
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
                Most orc communities define themselves through two things: pain
                and glory. Each earns respect in near equal measure, so long as
                the pain is borne with stoicism. An orc with many scars who
                walks uncomplaining with a broken leg draws as much admiration
                as one who wins a great victory on the battlefield.
              </p>
              <p>
                Power in an orc hold comes from strength or family lineage. The
                structure tends to be feudal, with weaker orcs working at the
                behest of the strong. The Hold of Belkzen is the largest such
                society, and power changes hands there quickly. One mighty orc
                dying in battle can shake up an entire power structure, leading
                to squabbling and duels to decide control. Many orcs who tire of
                being subservient split off to form their own warbands,
                traveling to new territory.
              </p>
              <p>
                Young orcs are typically raised by the entire community. Indeed,
                it would be almost impossible for orcs to raise their young any
                other way, since twins, triplets, and even quadruplets are quite
                common in orc families, as are deaths among orcs in their
                child-rearing years. Many orc holds conduct ceremonies when a
                young orc comes of age, typically around their tenth or eleventh
                birthday, during which the new adults are told what their role
                in the hold will be. For communities that practice ritual
                scarification or tattooing, this is often when the young orcs
                receive their first hold-scar or tattoo as well.
              </p>
            </div>
            <figure>
              <img src={require("../assets/img/Orc_03.png")} alt="Orc image" />
            </figure>
          </div>

          <p>
            Orcs fear very little, but most distrust magic. Magic is seen as a
            tool that bypasses the physical and allows the weak to contend with
            the strong, a belief that runs at odds with orc values. While they
            respect the physical might of Gorumite warpriests, and even druids
            who take on the forms of great beasts, they find arcane and occult
            magic questionable at best and unethical on the whole. All but the
            most depraved orc communities see necromancy as a foul art that
            steals glory from the dead, and their growing struggles against the
            undead have given them newfound common ground with their humanoid
            neighbors.
          </p>

          <h2>Alignment and religion</h2>
          <p>
            A common orc saying is, “You are the scars that shape you.” Violent,
            chaotic lives in violent, chaotic lands mean that most orcs tend
            heavily toward chaotic alignments. Gorum, Lamashtu, and Rovagug are
            all commonly worshiped among orc communities, though less violent
            holds worship nature deities like Gozreh or gods like Sarenrae,
            whose tenets of fire, redemption, and glory all hold some appeal to
            orc sensibilities.
          </p>
          <p>
            While there are orc deities, their worship is surprisingly uncommon
            among orcs. Orcs believe that if a creature has a face and a name,
            it can be killed, and so their own deities are targets, rather than
            objects of reverence. Some orc holds teach that the greatest members
            of the hold can earn a chance to challenge the orc deities for a
            place amid the pantheon. Most orcs don’t waste their dying moments
            praising the divine or praying for a place in the afterlife, but
            spitting a blood-flecked warning at their deities, promising a new
            challenger through broken teeth.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Orcs have a harsh, guttural language, and their naming conventions
              are no exception. Many orc names are simply the Orcish word for a
              particularly desirable trait, such as great strength, height, or
              ferocity. Orcs commonly use either their hold name or a name
              referencing a particularly memorable accomplishment as their
              surname.
            </p>
            <p>
              <b>Sample names:</b> Arkus, Ausk, Durra, Grask, Grillgiss, Krugga,
              Mahja, Murdut, Ollak, Onyat, Thurk, Uirch, Unach
            </p>
          </div>

          <h2>Orc heritages</h2>
          <p>
            Orcs have a long history on the surface of the world, and a far
            longer history underground. Their hardy physiques and demanding
            lifestyles have led to various adaptations. Choose one of the
            following orc heritages at 1st level.
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
            <label htmlFor="heritage-2">Badlands</label>
            <div className="content">
              <p className="text">
                You come from sun-scorched badlands, where long legs and an
                ability to withstand the elements helped you thrive. You can
                Hustle twice as long while exploring before you have to stop,
                and you treat environmental heat effects as if they were one
                step less extreme (incredible heat becomes extreme, extreme heat
                becomes severe, and so on).
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
            <label htmlFor="heritage-4">Deep</label>
            <div className="content">
              <p className="text">
                Your calloused hands and red eyes speak to a life spent in the
                deep darkness of mountain caverns, where you learned to battle
                on rocky cliffs and survive with minimal resources. You gain the
                Terrain Expertise skill feat for underground terrain and the
                Combat Climber skill feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Hold-scarred</label>
            <div className="content">
              <p className="text">
                You are part of an orc community that participates in ritual
                scarification or tattooing. The marks on your skin show your
                exceptional hardiness and vitality. You gain 12 Hit Points from
                your ancestry instead of 10. You also gain the Diehard feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Rainfall</label>
            <div className="content">
              <p className="text">
                You were born in a rain forest with only tangles of trees
                providing protection from torrential rainstorms and flash
                floods. You’ve learned to move adeptly through jungle terrain
                and resist the various ailments common in humid environs. You
                gain a +2 circumstance bonus to Athletics checks to Climb or
                Swim and a +1 circumstance bonus to saving throws against
                diseases.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Battle-ready</label>
            <div className="content">
              <p className="text">
                You descend from a line of terrifying battlefield commanders.
                You become trained in Intimidation, and you gain the
                Intimidating Glare skill feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-8" />
            <label htmlFor="heritage-8">Grave</label>
            <div className="content">
              <p className="text">
                You were exposed to powerful necromantic energies that should
                have killed you—but you survived. Your skin is cold, clammy, and
                gray. You gain resistance to negative damage equal to half your
                level (minimum 1). You also gain a +1 circumstance bonus to
                saving throws against necromancy effects.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-9" />
            <label htmlFor="heritage-9">Winter</label>
            <div className="content">
              <p className="text">
                Your ancestors survived in cold climates. You become trained in
                Survival, and you treat environmental cold effects as if they
                were one step less extreme (incredible cold becomes extreme,
                extreme cold becomes severe, and so on).
              </p>
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
              <li>Orcish</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Goblin, Jotun, Terran, Undercommon and
                any other languages to which you have access (such as the
                languages prevalent in your region).
              </li>
            </ul>
            <h2>Darkvision</h2>
            <p>
              You can see in darkness and dim light just as well as you can see
              in bright light, though your vision in darkness is in black and
              white.
            </p>
          </div>

          <h2>Orc adventurers</h2>
          <p>
            An orc’s drive to overcome challenges and prove themself spurs many
            orcs to become adventurers, though orcs are more likely to set out
            on their own or with other orcs than alongside adventurers of other
            ancestries.
            <br />
            <br />
            Common orc backgrounds include gladiator, hunter, martial disciple,
            nomad, and warrior from the Core Rulebook, plus bandit, outrider,
            and refugee from this source. Orcs thrive in martial classes like
            barbarian and fighter.
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

export default OrcPage;
