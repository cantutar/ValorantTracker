/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import AgentsVideoBack from "./components/AgentsVideoBack/AgentsVideoBack";
import Navi from "./components/Navbar/Navi";
import Agents from "./pages/Agents/Agents";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound/NotFound";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import Weapons from "./pages/Weapons/Weapons";

function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/video" element={<AgentsVideoBack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
