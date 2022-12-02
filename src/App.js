import { LandingPage } from "./pages/LandingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ManagedWorkoutCard from "./components/ManagedWorkoutCard";

function App() {
  return (
    <Routes>
      <Route path="/add" element={<ManagedWorkoutCard />} />
      <Route path="/*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
