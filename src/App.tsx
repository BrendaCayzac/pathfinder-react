import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import Navbar from "./components/Navbar";

const AncestriesPage = React.lazy(() => import("./pages/Ancestries"));
const BackgroundsPage = React.lazy(() => import("./pages/Backgrounds"));
const ClassesPage = React.lazy(() => import("./pages/Classes"));

/* Ancestries */
const AnadiPage = React.lazy(() => import("./pages/Anadi"));
const AndroidPage = React.lazy(() => import("./pages/Android"));
const AutomatonPage = React.lazy(() => import("./pages/Automaton"));
const AzarketiPage = React.lazy(() => import("./pages/Azarketi"));
const CatfolkPage = React.lazy(() => import("./pages/Catfolk"));
const ConrasuPage = React.lazy(() => import("./pages/Conrasu"));
const DwarfPage = React.lazy(() => import("./pages/Dwarf"));
const ElfPage = React.lazy(() => import("./pages/Elf"));
const FetchlingPage = React.lazy(() => import("./pages/Fetchling"));
const FleshwarpPage = React.lazy(() => import("./pages/Fleshwarp"));
const GhoranPage = React.lazy(() => import("./pages/Ghoran"));
const GnollPage = React.lazy(() => import("./pages/Gnoll"));
const GnomePage = React.lazy(() => import("./pages/Gnome"));
const GoblinPage = React.lazy(() => import("./pages/Goblin"));
const GolomaPage = React.lazy(() => import("./pages/Goloma"));
const GrippliPage = React.lazy(() => import("./pages/Grippli"));
const HalflingPage = React.lazy(() => import("./pages/Halfling"));
const HobgolbinPage = React.lazy(() => import("./pages/Hobgoblin"));
const HumanPage = React.lazy(() => import("./pages/Human"));
const KashrishiPage = React.lazy(() => import("./pages/Kashrishi"));
const KitsunePage = React.lazy(() => import("./pages/Kitsune"));
const KoboldPage = React.lazy(() => import("./pages/Kobold"));
const LeshyPage = React.lazy(() => import("./pages/Leshy"));
const LizardfolkPage = React.lazy(() => import("./pages/Lizardfolk"));
const NagajiPage = React.lazy(() => import("./pages/Nagaji"));
const OrcPage = React.lazy(() => import("./pages/Orc"));
const PoppetPage = React.lazy(() => import("./pages/Poppet"));
const RatfolkPage = React.lazy(() => import("./pages/Ratfolk"));
const ShiskPage = React.lazy(() => import("./pages/Shisk"));
const ShoonyPage = React.lazy(() => import("./pages/Shoony"));
const SkeletonPage = React.lazy(() => import("./pages/Skeleton"));
const SpritePage = React.lazy(() => import("./pages/Sprite"));
const StrixPage = React.lazy(() => import("./pages/Strix"));
const TenguPage = React.lazy(() => import("./pages/Tengu"));
const VanaraPage = React.lazy(() => import("./pages/Vanara"));
const VishkanyaPage = React.lazy(() => import("./pages/Vishkanya"));

/* Classes */
const AlchemistPage = React.lazy(() => import("./pages/Alchemist"));
const AnimistPage = React.lazy(() => import("./pages/Animist"));
const BarbarianPage = React.lazy(() => import("./pages/Barbarian"));
const BardPage = React.lazy(() => import("./pages/Bard"));
const ChampionPage = React.lazy(() => import("./pages/Champion"));
const ClericPage = React.lazy(() => import("./pages/Cleric"));
const DruidPage = React.lazy(() => import("./pages/Druid"));
const ExemplarPage = React.lazy(() => import("./pages/Exemplar"));
const FighterPage = React.lazy(() => import("./pages/Fighter"));
const GunslingerPage = React.lazy(() => import("./pages/Gunslinger"));
const InventorPage = React.lazy(() => import("./pages/Inventor"));
const InvestigatorPage = React.lazy(() => import("./pages/Investigator"));
const KineticistPage = React.lazy(() => import("./pages/Kineticist"));
const MagusPage = React.lazy(() => import("./pages/Magus"));
const MonkPage = React.lazy(() => import("./pages/Monk"));
const OraclePage = React.lazy(() => import("./pages/Oracle"));
const PsychicPage = React.lazy(() => import("./pages/Psychic"));
const RangerPage = React.lazy(() => import("./pages/Ranger"));

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div id="page">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route
            path="/ancestries"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <AncestriesPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/backgrounds"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <BackgroundsPage />
              </React.Suspense>
            }
          ></Route>

          {/* Classes */}
          <Route
            path="/classes"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <ClassesPage />
              </React.Suspense>
            }
          >
            <Route
              path="/classes/alchemist"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <AlchemistPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/animist"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <AnimistPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/barbarian"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <BarbarianPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/bard"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <BardPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/champion"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <ChampionPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/cleric"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <ClericPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/druid"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <DruidPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/exemplar"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <ExemplarPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/fighter"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <FighterPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/gunslinger"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <GunslingerPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/inventor"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <InventorPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/investigator"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <InvestigatorPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/kineticist"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <KineticistPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/magus"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <MagusPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/monk"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <MonkPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/oracle"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <OraclePage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/psychic"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <PsychicPage />
                </React.Suspense>
              }
            />
            <Route
              path="/classes/ranger"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <RangerPage />
                </React.Suspense>
              }
            />
          </Route>

          {/* Ancestries */}
          <Route
            path="/anadi"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <AnadiPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/android"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <AndroidPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/automaton"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <AutomatonPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/azarketi"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <AzarketiPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/catfolk"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <CatfolkPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/conrasu"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <ConrasuPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/dwarf"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <DwarfPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/elf"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <ElfPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/fetchling"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <FetchlingPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/fleshwarp"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <FleshwarpPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/ghoran"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <GhoranPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/gnoll"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <GnollPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/gnome"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <GnomePage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/goblin"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <GoblinPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/goloma"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <GolomaPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/grippli"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <GrippliPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/halfling"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <HalflingPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/hobgoblin"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <HobgolbinPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/human"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <HumanPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/kashrishi"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <KashrishiPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/kitsune"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <KitsunePage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/kobold"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <KoboldPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/leshy"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <LeshyPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/lizardfolk"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <LizardfolkPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/nagaji"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <NagajiPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/orc"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <OrcPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/poppet"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <PoppetPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/ratfolk"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <RatfolkPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/shisk"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <ShiskPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/shoony"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <ShoonyPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/skeleton"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <SkeletonPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/sprite"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <SpritePage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/strix"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <StrixPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/tengu"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <TenguPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/vanara"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <VanaraPage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/vishkanya"
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <VishkanyaPage />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
