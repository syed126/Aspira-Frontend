import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Mylearnings from "./pages/Mylearnings";
import AspirantProgress from "./pages/AspirantProgress";
import NewAspirant from "./pages/NewAspirant";
import Events from "./pages/Events";
import MasterData from "./pages/MasterData";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mylearnings" element={<Mylearnings />} />
            <Route path="/aspirant-progress" element={<AspirantProgress />} />
            <Route path="/new-aspirant" element={<NewAspirant />} />
            <Route path="/events" element={<Events />} />
            <Route path="/master-data" element={<MasterData />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);