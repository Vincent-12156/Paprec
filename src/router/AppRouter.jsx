import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import VehiclePage from "../pages/VehiclePage";
import SafetyPage from "../pages/SafetyPage";
import QuizPage from "../pages/QuizPage";
import SummaryPage from "../pages/SummaryPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/vehicle" element={<VehiclePage />} />
      <Route path="/safety" element={<SafetyPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  );
}
