import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { hobgoblinFeats } from "../middleware/HobgoblinFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const HobgolbinPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(hobgoblinFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(hobgoblinFeats);
  };

  function filterFeats(featLevel: string) {
    return hobgoblinFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="hobgoblin"
        book="Lost Omens: Character Guide"
        tags={["uncommon", "hobgoblin", "humanoid"]}
        img="hobgoblin_icon.png"
        alt="Image of a hobgoblin"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Taller and stronger than their goblin kin, hobgoblins are equals in
            strength and size to humans, with broad shoulders and long, powerful
            arms.
          </p>
          <p>
            The reputation of hobgoblins in the Inner Sea region has been
            upended by Oprak, the hobgoblin nation established recently in the
            mountains between Nidal and Nirmathas. The Ironfang Legion that
            stormed through Molthune and Nirmathas only a few years ago made a
            calculated decision to cease fighting, claim Oprak as a new
            homeland, and seek peace with its neighbors. Now under strict orders
            to not start conflicts with other nations, the hobgoblins of Oprak
            have begun to cautiously investigate Avistan in the spirit of
            cooperation rather than conquest. Many people, especially those that
            suffered terrible cruelties under the Ironfang Legion, fear that
            this is simply a pause in aggression while Oprak gains enough
            strength to crush its rivals. Others hope these bold soldiers might
            prove to be allies against the endless hordes of the Whispering
            Tyrant.
          </p>
          <h2>You might...</h2>
          <ul>
            <li>
              Seek out the most effective and practical solutions to any
              problem.
            </li>
            <li>
              Encourage a clear chain of command among any group you travel
              with, following orders even if you disagree with them.
            </li>
            <li>
              Look for opportune alliances with other creatures, even if you
              don’t fully understand or trust them.
            </li>
          </ul>
          <h2>Others probably...</h2>
          <ul>
            <li>
              Consider you dangerous, due to your reputation and intimidating
              appearance.
            </li>
            <li>Assume you hate magic and other mystical arts.</li>
            <li>
              Recognize your incredible endurance, dedication, and discipline.
            </li>
          </ul>
          <h2>Physical Description</h2>
          <p>
            Hobgoblins stand nearly as tall as humans, though they tend to have
            shorter legs and longer arms and torsos. They have the bald, wide
            heads and beady eyes, and gray skin that becomes steely blue when
            tanned. Hobgoblins are remarkably hardy; they recover from illnesses
            quickly and are able to exert themselves for long periods of time
            with little difficulty.
          </p>
          <p>
            Hobgoblins mature quickly, and most can walk, talk, and hold a
            weapon by the time they are 1 year old, reaching adolescence by the
            age of 8 to 12 and adulthood around 14. Hobgoblins typically live up
            to 70 years of age.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                Hobgoblins structure their society after military hierarchies.
                Even civilian groups such as farming collectives or trading
                houses organize into regiments, companies, and divisions. Most
                hobgoblins fixate on social status, and many constantly strive
                to advance their social position. Hobgoblin punishments are
                primarily social demotions, although execution or slavery are
                common for serious crimes, such as arson or desertion.
              </p>
              <p>
                Hobgoblin veterans hold a high place in their society, usually
                becoming leaders or advisors. Magic is rarely practiced and
                often derided, as most hobgoblins don’t trust it over the
                strength of their own sword arms. Their arts tend to have a
                military bent; many hobgoblins consider stirring marches and
                weaponsmithing the only artistic endeavors worth pursuing,
                though Oprak’s enforced era of peace is beginning to change
                this.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Hobgoblin_02.png")}
                alt="Hobgoblin image"
              />
            </figure>
          </div>
          <h2>Alignment and Religion</h2>
          <p>
            Though familiar with the chaos of war, most hobgoblins have orderly
            minds and prefer to live within established hierarchies. While many
            hobgoblins consider sentimentality weak, those with mild
            temperaments have recently found success in diplomacy and
            international outreach. As a result, hobgoblin adventurers are
            usually lawful neutral, with only those rejecting or raised outside
            of their militaristic society chaotic. Faith has little place in
            hobgoblin society, as many feel it is impractical, though religious
            hobgoblins can gain a begrudging modicum of acceptance due to their
            useful healing magic.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Like goblins, hobgoblin names tend to be simple, though hobgoblin
              names usually sound more guttural and forceful. On rare occasions,
              hobgoblins will alter their names, keeping the core but adding
              aspects, usually in response to an extreme trauma or a
              life-altering event. Hobgoblins have no surnames, considering them
              both pointless and presumptuous; an individual’s merits and
              demerits are to be earned by their actions, not by an association
              with a particular lineage.
            </p>
            <p>
              <b>Sample names:</b> Aze, Druknar, Ghargam, Hathkren, Imakra,
              Kralaeng, Mazkol, Olzu, Rezal, Sivkrag, Volmak, Zornum
            </p>
          </div>
          <h2>Hobgoblin heritages</h2>
          <p>
            Hobgoblins have a wide range of physiological differences based
            primarily on their family lineage. Choose one of the following
            hobgoblin heritages at 1st level.
          </p>
          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Elfbane</label>
            <div className="content">
              <p className="text">
                Hobgoblins were engineered long ago from the unreliable and
                fecund goblins, to be used as an army against the elves.
                Although the elves ultimately freed the hobgoblins from their
                bondage, some hobgoblins retain ancestral resistance to magic,
                which they refer to as “elf magic.” You gain the Resist Elf
                Magic reaction.
              </p>
              <Spell
                name="resist elf magic"
                action="reaction"
                tags={[]}
                description={
                  <span>
                    <span className="frequency">
                      <b>Trigger:</b> You attempt a saving throw against a
                      magical effect but haven’t rolled yet.
                    </span>
                    <br />
                    Your ancestral resistance to magic protects you. You gain a
                    +1 circumstance bonus to the triggering saving throw. If the
                    triggering effect is arcane, you gain a +2 circumstance
                    bonus instead.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Runtboss</label>
            <div className="content">
              <p className="text">
                You come from a long line of hobgoblins who commanded goblins.
                You are smaller than other hobgoblins, but goblins still listen
                to any commands you bellow. You gain the Group Coercion skill
                feat. If you roll a success on an Intimidation check to Coerce a
                goblin (but not other creatures with the goblin trait), you get
                a critical success instead; if you roll a critical failure, you
                get a failure instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Smokeworker</label>
            <div className="content">
              <p className="text">
                Your family have been alchemists, engineers, and scientists for
                generations, on projects bringing smoke and fire to the field of
                battle. You gain fire resistance equal to half your level
                (minimum 1). You automatically succeed at the DC 5 flat check to
                target a concealed creature if that creature is concealed only
                by smoke.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Warmarch</label>
            <div className="content">
              <p className="text">
                You come from a line of wandering mercenaries, constantly on the
                march and scavenging food on the trail. If you fail, but not
                critically fail, to Subsist in the wilderness, you can still
                keep yourself fed with poor meals. When exploring, you can
                Hustle twice as long before you have to stop.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Warrenbred</label>
            <div className="content">
              <p className="text">
                Your ancestors lived underground. Your ears are larger than
                those of other hobgoblins and sensitive to echoes. When you are
                underground, you can use the Seek action to sense undetected
                creatures within a 30-foot burst instead of a 15-foot burst. In
                addition, if you roll a success on an Acrobatics check to
                Squeeze, you get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Shortshanks</label>
            <div className="content">
              <p className="text">
                You have a longer torso and broader shoulders than most
                hobgoblins, making your legs seem short by comparison. This
                gives you a strong, muscular core and lowers your center of
                gravity—features that assist you in riding and climbing—and
                you’ve trained at riding in a saddle from an extremely early
                age. You gain the Ride feat. Additionally, you are not
                flat-footed while you Climb.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Steelskin</label>
            <div className="content">
              <p className="text">
                When you are cut or burned, your body responds by forming tough
                but flexible callouses over the site of the injury. Over time,
                this makes the most vulnerable sections of your body harder and
                more resistant to damage. Many steelskin hobgoblins
                intentionally use blades and flame to scar themselves in
                intricate patterns, though this isn’t universal. Your flat check
                to recover from persistent physical (including bleed), energy,
                or poison damage is DC 13 (rather than DC 15), or DC 8 when
                provided particularly effective assistance.
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
              <li>Constitution</li>
              <li>Intelligence</li>
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
                positive): Choose from Draconic, Dwarven, Gnoll, Jotun,
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
          <h2>Hobgoblin Adventurers</h2>
          <p>
            Hobgoblin society’s rigid militaristic hierarchy produces excellent
            adventurers, as hobgoblins reach adulthood trained for combat. Due
            to their upbringing, many hobgoblins have the warrior background.
            The laborer, martial disciple, miner, and scout backgrounds are also
            common. Hobgoblins raised away from their people often have the
            criminal, hermit, or nomad backgrounds instead. Hobgoblins are most
            often fighters, rangers, or rogues, although hobgoblin rogues
            approach their class with a disciplined mindset. Hobgoblins hold an
            ancestral grudge against elves and a distrust of arcane magic, which
            they call “elf magic.” Hobgoblin practitioners of arcane magic are
            exceedingly rare and usually shunned by other hobgoblins.
            Particularly clever hobgoblins usually become alchemists.
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

export default HobgolbinPage;
