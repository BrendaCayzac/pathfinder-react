import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { AncestriesPage } from "./pages/Ancestries";
import AnadiPage from "./pages/Anadi";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ancestries" element={<AncestriesPage />}></Route>
        <Route path="/anadi" element={<AnadiPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
