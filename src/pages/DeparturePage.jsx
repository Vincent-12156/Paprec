import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";

export default function DeparturePage() {
  const navigate = useNavigate();
  const { updateSession } = useApp();

  const confirmDeparture = () => {
    updateSession({
      endTime: new Date().toLocaleString(),
    });

    navigate("/summary");
  };

  return (
    <div className="min-h-screen p-10">
      <Header title="Departure" />

      <button
        onClick={confirmDeparture}
        className="mt-10 w-full bg-[#003B71] text-white p-6 rounded-3xl text-2xl"
      >
        Confirm Departure
      </button>
    </div>
  );
}
