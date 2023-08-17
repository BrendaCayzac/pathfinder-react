import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import Navbar from "./components/Navbar";

const AncestriesPage = React.lazy(() => import("./pages/Ancestries"));
const AnadiPage = React.lazy(() => import("./pages/Anadi"));
const AndroidPage = React.lazy(() => import("./pages/Android"));
const AutomatonPage = React.lazy(() => import("./pages/Automaton"));
const AzarketiPage = React.lazy(() => import("./pages/Azarketi"));
const CatfolkPage = React.lazy(() => import("./pages/Catfolk"));
const ConrasuPage = React.lazy(() => import("./pages/Conrasu"));
const DwarfPage = React.lazy(() => import("./pages/Dwarf"));
const ElfPage = React.lazy(() => import("./pages/Elf"));
const FetchlingPage = React.lazy(() => import("./pages/Fetchling"));

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
        </Routes>
      </div>
    </>
  );
};

export default App;
