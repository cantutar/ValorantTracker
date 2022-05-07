import { Navigate, Route, Routes } from "react-router-dom";
import AgentsModal from "./components/AgentsModal/AgentsModal";
import AgentsVideoBack from "./components/AgentsVideoBack/AgentsVideoBack";
import Navi from "./components/Navbar/Navi";
import Agents from "./pages/Agents/Agents";
import Homepage from "./pages/Homepage/Homepage";
import Maps from "./pages/Maps/Maps";
import NotFound from "./pages/NotFound/NotFound";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import WeaponPage from "./pages/Weapons/Weapon";
import WeaponsModal from "./pages/Weapons/WeaponsModalPage";

function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ValorantTracker" element={<Navigate to="/" replace />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<WeaponPage />} />
        <Route path="/weaponsmodal" element={<WeaponsModal />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/modal" element={<AgentsModal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
