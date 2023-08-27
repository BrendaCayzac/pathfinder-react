import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { strixFeats } from "../middleware/StrixFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const StrixPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(strixFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(strixFeats);
  };

  function filterFeats(featLevel: string) {
    return strixFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="strix"
        book="Lost Omens: Ancestry Guide"
        tags={["rare", "strix", "humanoid"]}
        img="strix_icon.png"
        alt="Image of a strix"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Known as itarii in their own language, strix are reclusive avian
            humanoids devoted to their homelands and their tribes. They defend
            their precious communities with broad wingspans and razor talons.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Strix value ferocity, vengeance, and devotion above all else.
                Their dark, formidable wingspans and long history of taking
                revenge for their fallen family members have painted them as
                winged devils in the eyes of neighboring human populations. In
                contradiction to their misunderstood nature, strix boast a
                spiritual, artistic, and compassionate culture that is rarely
                seen outside of their roosts.
              </p>
              <p>
                As strix populations begin to resurge and spread beyond the
                mountainous region known as the Devil’s Perch, their tribes now
                speckle the landscape of Cheliax and surrounding nations.
                Soaring over mountains, forests, and beaches, strix are always
                brought home by the deep connections they share with their
                kinfolk.
              </p>
              <p>
                If you want a character who is loyal yet enigmatic, fierce yet
                artistic, and who yearns to soar above the world, you should
                play a strix.
              </p>

              <h2>You might...</h2>
              <ul>
                <li>
                  Dedicate and endear yourself to your family, friends, or
                  community.
                </li>
                <li>Harbor an inherited distrust of humans.</li>
                <li>
                  Keep strangers at arm’s length and perhaps exhibit naivete
                  about the world beyond your homeland.
                </li>
              </ul>
            </div>

            <figure>
              <img
                src={require("../assets/img/Strix_02.png")}
                alt="Strix image"
              />
            </figure>
          </div>

          <h2>Others probably...</h2>
          <ul>
            <li>
              Appreciate your dedicated friendship, even if they don’t grasp the
              cultural history behind it.
            </li>
            <li>
              Treat you on occasion like a carrier pigeon, asking you to deliver
              letters or other similar favors.
            </li>
            <li>
              Find your appearance frightening due to complete inexperience with
              strix.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Strix are avian-influenced humanoids with intimidating talons and
            feathered wings sprouting from their backs. With an average height
            of 6 feet, strix are taller than most humans but are very light for
            their size. Strix are considered mature at 14 years of age and have
            an average lifespan of 40 years. They have pointed ears and large
            eyes that are typically black from sclera to pupil, but occasionally
            appear as a piercing golden color. Strix lack the ability to move
            their eyes independently of their head, resulting in distinctive
            jerky movements as their gaze snaps between targets. Their bodies
            are usually taut with defined musculature—a result of the strength
            necessary to flex their wings.
          </p>

          <div className="flex-column reverse">
            <div>
              <h2>Society</h2>
              <p>
                Strix are rare and reclusive people who cling to their ancestral
                territories. They live in modest-sized tribes, but some reside
                in smaller bands of tight-knit individuals. The largest
                settlements of strix reside on Devil’s Perch, but a small number
                of their ilk have traveled far across Golarion. Strix feel an
                intense empathy and attachment to their family and other
                community members. They prioritize the needs of their community
                over their individual desires, and their bands and tribes
                benefit from an easy yet expertly organized division of labor.
                Strix tribes are led by a rokoa, a female tribal leader.
              </p>
              <p>
                A long history of conflict with the nearby nation of Cheliax has
                bred into most strix a deep fear and suspicion of humans—who
                they call kotaara. Strix have struggled to keep hold of their
                territories and maintain their numbers in the face of constant
                conflict with these enemies who, in addition to trying to
                destroy what they believe to be winged devils, vastly outnumber
                them. Due to their strongly bonded groups, the loss of a single
                tribe member is devastating.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Strix.png")}
                alt="Sprite image"
              />
            </figure>
          </div>

          <div className="featured">
            <h2>Strix settlements</h2>
            <p>
              Strix settlements, called roosts, are lofty dwellings at the
              highest point of the local landscape. Mountains are a particular
              favorite, especially if they provide tall spires that make foot
              traffic impossible. Strix living in forests build their
              communities around the largest trees available, and seaside
              dwellers prefer to nestle their dwellings along perilous cliffs.
              By far, the largest strix community resides at Ciricskree, which
              translates from the Strix language to “the Shrieking Spire.” This
              tribe of over 500 individuals is the cultural epicenter for the
              Devil’s Perch and the entire Avistani strix population. Additional
              settlements include the Ikaraka in the Barrowood forest at the
              base of the Menador Mountains, and the small Blackcove tribe along
              the shore, who have established a tolerant trading relationship
              with a nearby fishing village.
            </p>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            Due to their deep respect for the rules of a functioning society,
            strix are rarely chaotic, but some may be flexible on adopting the
            rules of outside societies. Strix are typically nonreligious and
            instead use stories from an epic known as the Korrsat Akra, or “The
            Scattered Nest,” to tell them of their origins and give them
            direction on their current place in the world. They have a deep
            investment in the lives of their fellows and experience intense
            grief at their passing. Pharasma is a common influence among
            religious strix due to the popularity of religious and spiritual
            practices honoring the lives and deaths in their beloved community.
            Gozreh is also an everyday influence for many strix, who beseech the
            Wind and the Waves to give them satisfying tailwinds for flight and
            protect their kin when the sky turns dark with fury. Erastil and
            even Torag represent two versions of social order and may be
            unifying deities across entire tribes.
          </p>

          <h2>Rokoas</h2>
          <p>
            Strix tribes are led by a spiritual, social, and military leader
            called a rokoa. Rokoas are elder female leaders who consult a
            council of other warriors and spiritualists to make decisions for
            the entirety of the community. Young female strix are selected early
            as potential successors to the tribe’s current rokoa. Often the
            rokoa herself chooses her favorite protégé to pass along her
            storytelling recitations, battle stratagems, and spiritual
            understanding.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              Strix names consist of sounds that are reminiscent of chirping,
              screeches, or trilling by various birds, and their naming
              conventions are influenced primarily by tradition and
              spirituality. Strix in small communities might share a common
              syllable among all their names to express their unity. Due to
              their deep affection for their family members, naming children
              after other loved ones is very common, occasionally with an
              additional syllable or slight change to the pronunciation.
            </p>
            <p>
              <b>Sample names:</b> Chiit-iir, Cicreeti, Ikatarii, Irkoata,
              Kaata, Kiilo, Kirii, Rahka, Roatatwiil, Turiilo, Turuk, Twilii
            </p>
          </div>

          <h2>Strix heritages</h2>
          <p>
            Strix fill a variety of roles in their tight communal groups and
            have adapted to provide the most they can for themselves and their
            community. Choose one of the following strix heritages at 1st level.
          </p>

          <div className="featured">
            <h2>Strix storytelling</h2>
            <p>
              Strix utilize storytelling to convey a verbal history of their
              people and perform poetic tales that sound like songs when sung in
              their native tongue. Nestling strix grow up hearing their
              histories sung to them as lullabies and serenades of daily life.
              Powerful moments are punctuated with screeches, and mournful
              recounts float in the air like soft cooing. One common story tells
              of a vengeful strix whose wings turned gloriously red, but who hid
              his face with a mask, ashamed of the actions that led to his
              glory. Another crooned to nestlings warns of a mysterious parasite
              that hides in filthy feathers.
            </p>
          </div>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Nightglider</label>
            <div className="content">
              <p className="text">
                You are a dedicated nocturnal avian, keeping watch and predating
                in the most lightless environments. You gain darkvision.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Predator</label>
            <div className="content">
              <p className="text">
                You come from a line of strix with exceptionally broad wings and
                lengthy talons. You gain a talon melee unarmed attack that deals
                1d4 slashing damage. Your talon attack is in the brawling group
                and has the agile, finesse, and unarmed traits.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Scavanger</label>
            <div className="content">
              <p className="text">
                Your ancestors originated from a land where food was scarce and
                threats were many. You are trained in Survival. You gain the
                Forager skill feat as a bonus feat. Your thoroughness when
                gathering food provides you a +1 circumstance bonus to Survival
                checks to Subsist.
                <Feat
                  id={0}
                  name="forager"
                  tags={["general", "skill"]}
                  action=""
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites</b> trained in Survival.
                      </span>
                      <br />
                      While using Survival to Subsist, if you roll any result
                      worse than a success, you get a success. On a success, you
                      can provide subsistence living for yourself and four
                      additional creatures, and on a critical success, you can
                      take care of twice as many creatures as on a success.
                      <br />
                      <br />
                      Each time your proficiency rank in Survival increases,
                      double the number of additional creatures you can take
                      care of on a success (to eight if you’re an expert, 16 if
                      you’re a master, or 32 if you’re legendary). You can
                      choose to care for half the number of additional creatures
                      and provide a comfortable living instead of subsistence
                      living.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Shoreline</label>
            <div className="content">
              <p className="text">
                You’re the descendant of strix who traveled to the coasts. Your
                feathers are especially water-repellent and sleekly angled for
                diving, allowing you to catch fish and other prey in the
                shallows. You are trained in Athletics, and you gain the
                Underwater Marauder skill feat as a bonus skill feat.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Nyktera</label>
            <div className="content">
              <p className="text">
                You’re the descendant of strix who traveled to the coasts. Your
                feathers are especially water-repellent and sleekly angled for
                diving, allowing you to catch fish and other prey in the
                shallows. You are trained in Athletics, and you gain the
                Underwater Marauder skill feat as a bonus skill feat.
                <Feat
                  id={0}
                  name="Underwater Marauder"
                  tags={["general", "skill"]}
                  action=""
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites</b> trained in Athletics.
                      </span>
                      <br />
                      You’ve learned to fight underwater. You are not
                      flat-footed while in water, and you don’t take the usual
                      penalties for using a bludgeoning or slashing melee weapon
                      in water.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Songbird</label>
            <div className="content">
              <p className="text">
                You descend from a talented line of strix storytellers. From the
                highest mountains and purest landscapes where your lungs fill
                with glorious clean air, you trill, whistle, and croon sweet
                songs. While natural sounds make you predisposed to sing, voices
                make you predisposed to mimicry. You receive a +1 circumstance
                bonus on Deception checks to Impersonate a mimicked voice, where
                the sound of the voice is the only factor; if you are a master
                in Deception, you gain a +2 circumstance bonus instead. You also
                gain a +1 circumstance bonus on Performance checks to sing; if
                you are a master in Performance, you gain a +2 circumstance
                bonus instead.
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
              <li>Strix</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Draconic, Giant, Gnome, Infernal, and any
                other languages to which you have access (such as the languages
                prevalent in your region).
              </li>
            </ul>

            <h2>Wings</h2>
            <p>
              All strix possess powerful wings. While not all strix focus on
              honing their flying skills, a strong flap of their wings allows
              strix to travel longer distances when jumping. When Leaping
              horizontally, you move an additional 5 feet. You don’t
              automatically fail your checks to High Jump or Long Jump if you
              don’t Stride at least 10 feet first. In addition, when you make a
              Long Jump, you can jump a distance up to 10 feet further than your
              Athletics check result, though still with the normal maximum of
              your Speed.
            </p>
            <h2>Low-light vision</h2>
            <p>
              You can see in dim light as though it were bright light, so you
              ignore the concealed condition due to dim light.
            </p>
          </div>

          <h2>Strix Adventurers</h2>
          <p>
            Adventuring strix most commonly take the emissary, hermit, nomad,
            scout, or street urchin backgrounds. Strix are agile combatants and
            prudent adventurers who excel as druids, fighters, monks, rangers,
            or rogues.
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

export default StrixPage;
