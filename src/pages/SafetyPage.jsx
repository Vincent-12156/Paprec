import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function SafetyPage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const [checked, setChecked] = useState(false);

  const validateSafety = () => {
    if (!checked) return;

    // optional: mark safety done
    updateSession({ safetyAccepted: true });

    navigate("/quiz"); // or next step in your flow
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Safety Instructions" />
      <ProgressBar step={4} />

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow space-y-6">
        <h2 className="text-3xl font-bold">
          Safety rules for {session.vehicle || "vehicle"}
        </h2>

        <ul className="text-xl space-y-3 list-disc pl-6">
          <li>Wear safety equipment at all times</li>
          <li>Follow site instructions</li>
          <li>Do not exit marked areas</li>
          <li>Respect loading/unloading zones</li>
        </ul>

        <label className="flex items-center gap-4 text-xl mt-6">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          I confirm I have read and understood safety rules
        </label>

        <button
          onClick={validateSafety}
          disabled={!checked}
          className={`w-full p-6 rounded-3xl text-2xl font-bold transition ${
            checked ? "bg-[#003B71] text-white" : "bg-gray-300 text-gray-500"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
