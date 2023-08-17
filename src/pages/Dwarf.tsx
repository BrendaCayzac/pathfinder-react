import React, { useState, useEffect } from "react";
import "../assets/styles/AncestryPage.scss";
import Header from "../components/Header";
import Feat from "../components/Feat";
import Spell from "../components/Spell";
import { dwarfFeats } from "../middleware/DwarfFeats";
import { featsButtons, AncestryFeat } from "../middleware/FeatsButtons";

const DwarfPage: React.ComponentType = () => {
  const [filteredFeats, setFilteredFeats] =
    useState<Array<AncestryFeat> | null>(null);
  useEffect(() => {
    setFilteredFeats(dwarfFeats);
  }, []);

  const handleFeats = (e: React.MouseEvent) => {
    let level = (e.target as HTMLButtonElement).value;
    level !== "all"
      ? setFilteredFeats(filterFeats(level))
      : setFilteredFeats(dwarfFeats);
  };

  function filterFeats(featLevel: string) {
    return dwarfFeats.filter((feat) => feat.level === parseInt(featLevel));
  }

  return (
    <div className="ancestry-page">
      <Header
        name="dwarf"
        book="Core rulebook"
        tags={["dwarf", "humanoid"]}
        img="dwarf_icon.png"
        alt="Image of a dwarf"
      />

      <section>
        <div className="content">
          <p className="introduction">
            Dwarves have a well-earned reputation as a stoic and stern people,
            ensconced within citadels and cities carved from solid rock. While
            some see them as dour and humorless crafters of stone and metal,
            dwarves and those who have spent time among them understand their
            unbridled zeal for their work, caring far more about quality than
            quantity. To a stranger, they can seem untrusting and clannish, but
            to their friends and family, they are warm and caring, their halls
            filled with the sounds of laughter and hammers hitting anvils.
          </p>

          <p>
            Dwarves are slow to trust those outside their kin, but this wariness
            is not without reason. Dwarves have a long history of forced exile
            from ancestral holds and struggles against the depredations of
            savage foes, especially giants, goblinoids, orcs, and the horrors
            that dwell deep below the surface. While trust from a dwarf is
            hard-won, once gained it is as strong as iron.
          </p>

          <p>
            If you want to play a character who is as hard as nails, a stubborn
            and unrelenting adventurer, with a mix of rugged toughness and deep
            wisdom—or at least dogged conviction—you should play a dwarf.
          </p>

          <h2>You might...</h2>
          <ul>
            <li>
              Strive to uphold your personal honor, no matter the situation.
            </li>
            <li>
              Appreciate quality craftsmanship in all forms and insist upon it
              for all your gear.
            </li>
            <li>
              Refuse to waver or back down once you’ve set your mind to
              something.
            </li>
          </ul>

          <h2>Others probably...</h2>
          <ul>
            <li>
              See you as stubborn, though whether they see this as an asset or a
              detriment changes from one person to the next.
            </li>
            <li>
              Assume you are an expert in matters related to stonework, mining,
              precious metals, and gems.
            </li>
            <li>
              Recognize the deep connection you have with your family, heritage,
              and friends.
            </li>
          </ul>

          <h2>Physical Description</h2>
          <p>
            Dwarves are short and stocky, standing about a foot shorter than
            most humans. They have wide, compact bodies and burly frames.
            Dwarves of all genders pride themselves on the length of their hair,
            which they often braid into intricate patterns, some of which
            represent specific clans. A long beard is a sign of masculinity and
            honor among the dwarves, and thus a clean-shaven male dwarf is
            considered weak, untrustworthy, or worse.
          </p>
          <p>
            Dwarves typically reach physical adulthood around the age of 25,
            though their traditionalist culture places more value on completing
            coming of age ceremonies unique to each clan than reaching a certain
            age. A typical dwarf can live to around 350 years old.
          </p>
          <div className="flex-column">
            <div>
              <h2>Society</h2>
              <p>
                The ancient surface empire the dwarves once ruled fell long ago,
                overwhelmed by orc and goblinoid enemies. Today’s dwarves retain
                many of the qualities that propelled their people to greatness
                in ancient times: fierceness, gumption, and stubbornness in
                endeavors ranging from battle and craftsmanship to forging ties
                with family and friends.
              </p>
              <p>
                While the distance between their mountain Sky Citadels can
                create vast cultural divides between various dwarf clans, most
                dwarven societies share a number of similarities. Nearly all
                dwarven peoples share a passion for stonework, metalwork, and
                gem-cutting. Most are highly skilled at architecture and mining,
                and many share a hatred of giants, orcs, and goblinoids.
              </p>
              <p>
                Few dwarves are seen without their clan dagger strapped to their
                belt. This dagger is forged just before a dwarf’s birth and
                bears the gemstone of their clan. A parent uses this dagger to
                cut the infant’s umbilical cord, making it the first weapon to
                taste their blood.
              </p>
            </div>
            <figure>
              <img
                src={require("../assets/img/Dwarf_02.png")}
                alt="Dwarf image"
              />
            </figure>
          </div>

          <h2>Alignment and Religion</h2>
          <p>
            Dwarves tend to value honor and closely follow the traditions of
            their clans and kingdoms. They have a strong sense of friendship and
            justice, though they are often very particular about who they
            consider a friend. They work hard and play harder—especially when
            strong ale is involved.
          </p>
          <p>
            The typical dwarf is lawful good or lawful neutral and prefers to
            worship deities of those alignments. Torag, god of dwarvenkind, is
            the dwarves’ primary deity, though worship of Torag’s family members
            is also common.
          </p>
          <div className="featured">
            <h2>Names</h2>
            <p>
              Dwarves honor their children with names taken from ancestors or
              dwarven heroes, and it’s quite rare to invent a new name or to
              borrow a name from another culture for a child. When introducing
              themselves, dwarves tend to list their family and clan, plus any
              number of other familial connections and honorifics. Dwarven names
              usually contain hard consonants and are rarely more or fewer than
              two syllables.
            </p>
            <p>
              <b>Sample names:</b> Agna, Bodill, Dolgrin, Edrukk, Grunyar,
              Ingra, Kazmuk, Kotri, Lupp, Morgrym, Rogar, Rusilka, Torra,
              Yangrit
            </p>
          </div>

          <h2>Dwarf heritages</h2>
          <p>
            With their long family lines and hardy physiologies, dwarves take
            great pride in the resilience their bloodlines provide. Choose one
            of the following dwarven heritages at 1st level.
          </p>

          <div className="accordion">
            <input type="checkbox" id="heritage-1" />
            <label htmlFor="heritage-1">Ancient-blooded</label>
            <div className="content">
              <p className="text">
                Dwarven heroes of old could shrug off their enemies’ magic, and
                some of that resistance manifests in you. You gain the Call on
                Ancient Blood reaction.
              </p>

              <Spell
                name="Call on ancient blood"
                action=""
                description={
                  <span>
                    <span className="frequency">
                      <b>Trigger:</b>
                      You attempt a saving throw against a magical effect, but
                      you haven’t rolled yet.
                    </span>
                    <br />
                    Your ancestors’ innate resistance to magic surges, before
                    slowly ebbing down. You gain a +1 circumstance bonus until
                    the end of this turn. This bonus also applies to the
                    triggering save.
                  </span>
                }
              />
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-2" />
            <label htmlFor="heritage-2">Death wardent</label>
            <div className="content">
              <p className="text">
                Your ancestors have been tomb guardians for generations, and the
                power they cultivated to ward off necromancy has passed on to
                you. If you roll a success on a saving throw against a
                necromancy effect, you get a critical success instead.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-3" />
            <label htmlFor="heritage-3">Forge</label>
            <div className="content">
              <p className="text">
                You have a remarkable adaptation to hot environments from
                ancestors who inhabited blazing deserts or volcanic chambers
                beneath the earth. This grants you fire resistance equal to half
                your level (minimum 1), and you treat environmental heat effects
                as if they were one step less extreme (incredible heat becomes
                extreme, extreme heat becomes severe, and so on).
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-4" />
            <label htmlFor="heritage-4">Rock</label>
            <div className="content">
              <p className="text">
                Your ancestors lived and worked among the great ancient stones
                of the mountains or the depths of the earth. This makes you
                solid as a rock when you plant your feet. You gain a +2
                circumstance bonus to your Fortitude or Reflex DC against
                attempts to Shove or Trip you. This bonus also applies to saving
                throws against spells or effects that attempt to knock you
                prone.
                <br />
                <br />
                In addition, if any effect would force you to move 10 feet or
                more, you are moved only half the distance.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-5" />
            <label htmlFor="heritage-5">Strong-blooded</label>
            <div className="content">
              <p className="text">
                Your blood runs hearty and strong, and you can shake off toxins.
                You gain poison resistance equal to half your level (minimum 1),
                and each of your successful saving throws against a poison
                affliction reduces its stage by 2, or by 1 for a virulent
                poison. Each critical success against an ongoing poison reduces
                its stage by 3, or by 2 for a virulent poison.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-6" />
            <label htmlFor="heritage-6">Anvil</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                You are a descendant of a famed crafter and have your own
                amazing talent. Other dwarves might consider this a blessing
                from your ancestors or from the Forgefather himself, depending
                on where you grew up. You become trained in Crafting (or another
                skill if you were already trained in Crafting) and gain the
                Specialty Crafting skill feat, but you can pick two different
                specialties instead of one.
              </p>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="heritage-7" />
            <label htmlFor="heritage-7">Elemental Heart</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                Whether through a connection to Torag’s forge, the azers of the
                Plane of Fire, or another source, you can exude a burst of
                energy. Mbe’ke and Taralu dwarves of the Mwangi Expanse believe
                this heritage is a gift from dragons or elemental spirits.
                Choose one of the following damage types: acid, cold,
                electricity, or fire. Once chosen, this can’t be changed. You
                gain the Energy Emanation activity.
              </p>

              <Spell
                name="Energy emanation"
                action="two_action"
                tags={["evocation", "primal"]}
                description={
                  <span>
                    <span className="frequency">
                      <b>Frequency:</b> once per day
                    </span>
                    <br />
                    Energy bursts forth from your body. You deal 1d6 damage of
                    your chosen type to all adjacent creatures (basic Reflex
                    save using your class DC or spell DC, whichever is higher).
                    At 3rd level, and every 2 levels thereafter, this damage
                    increases by 1d6.
                  </span>
                }
              />
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="heritage-8" />
            <label htmlFor="heritage-8">Oath keeper</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                Growing up, you never tried to lie to get what you wanted, and
                even when necessary, lying makes you uncomfortable. The
                especially faithful might even have thought that you were
                blessed by the dwarven god of duty, Kols. You gain a +1
                circumstance bonus to Perception checks to Sense Motive and to
                Perception DCs against attempts to Lie to you. Furthermore, you
                gain a +2 circumstance bonus to Diplomacy checks to convince
                others you speak the truth when you are telling the truth, and
                you take a –4 circumstance penalty to Lie and to your Deception
                DC against Sense Motive.
              </p>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="heritage-9" />
            <label htmlFor="heritage-9">Forge-blessed</label>
            <div className="content">
              <p className="text">
                Lost Omens: Character Guide
                <br />
                <br />
                You are from a family in Highhelm that venerates a particular
                dwarven deity above all others. Your birth was blessed by your
                family’s patron deity, granting you a fraction of their power.
                Choose one deity from the dwarven pantheon. You can cast the
                1st-level spell they grant clerics (such as soothe if your
                family’s patron is Bolka) as an innate divine spell once per
                week.
              </p>
            </div>
          </div>

          <div className="relevant">
            <h2>Hit Points</h2>
            <p>10</p>
            <h2>Size</h2>
            <p>Medium</p>
            <h2>Speed</h2>
            <p>20 feet</p>
            <h2>Ability Boosts</h2>
            <ul>
              <li>Constitution</li>
              <li>Wisdom</li>
              <li>Free</li>
            </ul>

            <h2>Ability Flaw</h2>
            <ul>
              <li>Charisma</li>
            </ul>

            <h2>Languages</h2>
            <ul>
              <li>Common</li>
              <li>Dwarven</li>
              <li>
                Additional languages equal to your Intelligence modifier (if
                positive): Choose from Gnomish, Goblin, Jotun, Orcish, Terran,
                Undercommon, and any other languages to which you have access
                (such as the languages prevalent in your region).
              </li>
            </ul>
          </div>

          <h2>Dwarven Adventurers</h2>
          <p>
            Dwarven adventurers tend to work as treasure hunters or sellswords.
            They often leave their citadels and subterranean cities in search of
            wealth to enrich their homeland or to reclaim long-lost dwarven
            treasures or lands taken by the enemies of their kin.
          </p>

          <p>
            Typical dwarven backgrounds include acolyte, artisan, merchant,
            miner, and warrior. Dwarves excel at many of the martial classes,
            such as barbarian, fighter, monk, and ranger, but they also make
            excellent clerics and druids.
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

export default DwarfPage;
