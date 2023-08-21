import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import { skeletonFeats } from "../middleware/SkeletonFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const SkeletonPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(skeletonFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(skeletonFeats);
  };

  function filterFeats(featLevel: string) {
    return skeletonFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="skeleton"
        book="Book of the Dead"
        tags={["rare", "skeleton", "undead"]}
        img="skeleton_icon.png"
        alt="Image of a skeleton"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Skeletons are considered among the lowest types of undead. They’re
            typically mindless creatures, lacking many of the abilities that
            make other undead a serious threat. However, the animated bones of
            dragons, giants, and other great beasts make for dangerous foes.
            Powerful living creatures can retain some of their might and
            intellect upon returning as a skeleton. Some necromancers turn their
            strongest enemies into skeletal undead servants, assuming they can
            keep control of them.
          </p>
          <div className="flex-column">
            <div>
              <p>
                Skeleton adventurers were usually skilled and powerful in their
                former lives. Through unremitting force of will or extraordinary
                circumstances, their ego and ideals persist even in death.
                However, the very act of rising as a skeletal undead is
                traumatic. Memories of one’s former life are usually fractured
                or hazy, if anything can be remembered at all. For some, these
                memories return with time; for others, they’re gone forever. For
                the most part, this comes down to how the skeleton views
                themself: either as a continuation of the person they once were,
                or an entirely new being.
              </p>
              <p>
                Skeleton adventurers often set themselves apart from other
                skeletons by dressing as flamboyantly as their station allows.
                Large, feathered caps, ornate armor, embroidered silks, or
                glittering jewelry are likely staples of their wardrobe. Some
                carve intricate “tattoos” into their bones or paint their skulls
                to maintain a sense of self that simple skeletons lack, and to
                signal to the living they’re not like other undead.
              </p>
              <p>
                Skeleton adventurers must come to terms with their new identity.
                They aren’t bound by the limitations of the living and are often
                underestimated.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Skeleton_02.png")}
                alt="Skeleton image"
              />
            </figure>
          </div>

          <h2>You might...</h2>
          <ul>
            <li>
              Work harder than most to prove you’re a capable and distinct
              individual.
            </li>
            <li>
              Wade into danger with little regard for the safety of your undead
              body.
            </li>
            <li>
              Desperately seek the acceptance of the society you once moved
              through with ease.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Assume you’re the servant of a necromancer, working to advance
              their agenda.
            </li>
            <li>Have difficulty empathizing with you.</li>
            <li>Regard your undeath with either pity or envy.</li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Aside from their complete lack of flesh and organs, skeletons vary
            widely in appearance, reflecting the broad diversity of all living
            beings. They can be tall, short, or anywhere in between. Skeletons
            of creatures with horns, wings, or tails retain them, although they
            are usually useless in their skeletal state. Skeletons raised from
            fresh remains tend to have stark white bones, while older ones tend
            to be gray or yellowed. Skeletons who adventure for a while often
            possess faint lines crisscrossing their bones like scars, indicating
            where they were injured in previous battles.
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
                Across Golarion, intelligent skeletons rarely gather in large
                enough numbers to constitute any kind of settlement. Even in
                Geb, where their numbers are highest, they typically mingle with
                other undead rather than band together. Many skeletons would
                rather keep company with those who remind them of their former
                life (although such reminders can just as easily lead to
                revulsion derived by the negative energy infused within them).
                Gebbite skeletons are usually treated as members of the servant
                class and rarely have any upward social mobility.
              </p>
              <p>
                Outside Geb, skeletons are far more solitary. Some might hide on
                the outskirts of society or move about in disguise, but it’s
                difficult for them to find acceptance among the living. While
                they may not be feared in places like Nidal or Sekamina, they’re
                also not likely to be respected.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Skeleton.png")}
                alt="Skeleton image"
              />
            </figure>
          </div>

          <h2>Alignment and religion</h2>
          <p>
            While undead are almost always evil, some intelligent skeletons
            manage to stave off the corruption of the negative energy that
            powers them. Other than the tendency to become twisted toward evil
            over time, skeletons typically lean toward the alignments of their
            creators or their former selves. Skeletons without any particular
            loyalty or allegiance trend toward neutral evil alignment, or
            neutral if they can stave off evil.
          </p>
          <p>
            Skeletons who embrace their undeath often worship gods of death,
            such as Urgathoa, while those who resent it typically look toward
            gods of life and redemption. Accepting deities without particularly
            zealous anti-undead dogma, such as Shelyn, are popular among those
            who wish to fight against their destructive influences and become
            something greater than the purpose for which they were created.
          </p>

          <div className="featured">
            <h2>Names</h2>
            <p>
              No widespread naming convention exists for skeletons. When
              necromancers bother to name skeletons they’ve raised, they
              typically choose names that suit their own tastes, the way one
              would name a pet. Others might be named for their role or job.
              Skeletons with their memories intact might choose to keep their
              name from when they were alive, but others might choose new names
              based on their undead experiences.
            </p>
            <p>
              <b>Sample names:</b> Clatterjaw, Creaker, Doorstop, Final
              Sacrifice, Gochiyo, Lectern, Macefodder, Sixth Lancer, Skulldyr,
              Xelim
            </p>
          </div>

          <h2>Skeleton heritages</h2>
          <p>
            Any creature that has bones in its body can potentially be raised as
            a skeleton, so skeleton adventurers reflect the full diversity of
            living beings in the world. Choose one of the following skeleton
            heritages at 1st level.
          </p>

          <br />
          <br />
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Bloodhound</label>
            <div className="content">
              <p className="text">
                Your ancestors were famous trackers, and you carry in your blood
                that same gift of the hunt. You gain a special sense: imprecise
                scent with a range of 30 feet. This means you can use your sense
                of smell to determine the location of a creature, but it remains
                hidden. In addition, you gain a +2 circumstance bonus to
                Survival checks to Track creatures that you have previously
                sensed with your scent.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Fodder</label>
            <div className="content">
              <p className="text">
                Humans, and those who are physically closest to them, are the
                favored material of necromancers. They are readily available,
                and their physiology has been studied the most extensively, so
                these skeletons can be easily mass-produced. Despite their name,
                fodder skeletons make rather mobile foot soldiers due to how
                efficiently they transfer necromantic energy within their
                bodies. You have a base Speed of 30 feet, instead of 25 feet.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Compact</label>
            <div className="content">
              <p className="text">
                For tasks that require a lighter touch, gnome, goblin, and
                halfling remains are more suitable than a larger creature’s.
                These smaller, nimbler skeletons fit well in a traveling chest,
                can be forced through tight spaces, and more easily avoid
                detection. Your size is Small instead of Medium. You gain the
                Quick Squeeze feat, even if you aren’t trained in Acrobatics.
                Tight spaces not tight enough to require the Squeeze activity
                aren’t difficult terrain for you.
                <Feat
                  id={0}
                  name="Quick squeeze"
                  action=""
                  tags={["general", "skill"]}
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      <span className="frequency">
                        <b>Prerequisites:</b> rained in Acrobatics.
                      </span>
                      <br />
                      You Squeeze 5 feet per round (10 feet on a critical
                      success). If you’re legendary in Acrobatics, you Squeeze
                      at full Speed.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Sturdy</label>
            <div className="content">
              <p className="text">
                Certain hazardous conditions are not suitable for the average
                skeleton, so a necromancer might choose to reanimate the bones
                of a dwarf, orc, or other creature with a reputation for
                sturdiness. You have 10 Hit Points instead of 6 and gain the
                Diehard feat.
                <Feat
                  id={0}
                  name="Diehard"
                  action=""
                  tags={["general"]}
                  level={1}
                  feat="Feat 1"
                  description={
                    <span>
                      It takes more to kill you than most. You die from the
                      dying condition at dying 5, rather than dying 4.
                    </span>
                  }
                />
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Monstrous</label>
            <div className="content">
              <p className="text">
                Inhuman skeletons are often created for both their deadly
                physical attacks and their terrifying appearances. Beasts and
                monstrous humanoids with the strangest skeletons tend to be the
                centerpiece of the collection of a necromancer skilled enough to
                raise one. You gain a claw, horn, tail, or wing unarmed attack
                that deals 1d6 damage. A claw deals slashing damage, a horn
                deals piercing damage, and a tail or wing deals bludgeoning
                damage. This unarmed attack is in the brawling group and has the
                finesse and unarmed traits.
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
              <li>Charisma</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Intelligence</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Necril</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Aklo, Dwarven, Elven, Infernal, Orcish,
                Undercommon, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
            <h2>Undeath</h2>
            <p>
              You have the basic undead benefits. For your undead hunger, you
              don't eat flesh like ghouls or drink blood like vampires, but you
              do collect bones you can use to help yourself mend.
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

export default SkeletonPage;
