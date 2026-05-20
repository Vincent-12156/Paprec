import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function VehiclePage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const merchandiseOptions = [
    "Plastic",
    "Metal",
    "Paper / Cardboard",
    "Glass",
    "Wood",
    "Mixed",
  ];

  const validate = () => {
    if (!session.vehicle || !session.merchandise || !session.material) return;
    navigate("/safety");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Vehicle Information" />
      <ProgressBar step={3} />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Vehicle</h2>

        <div className="grid grid-cols-2 gap-6 mb-10">
          {["Truck", "Big Truck"].map((v) => (
            <button
              key={v}
              onClick={() => updateSession({ vehicle: v })}
              className={`p-10 rounded-3xl text-2xl font-bold shadow ${
                session.vehicle === v ? "bg-[#8DC63F] text-white" : "bg-white"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Packaging Type</h2>

        <div className="grid grid-cols-2 gap-6 mb-10">
          {["Bale", "Bulk"].map((m) => (
            <button
              key={m}
              onClick={() => updateSession({ merchandise: m })}
              className={`p-10 rounded-3xl text-2xl font-bold shadow ${
                session.merchandise === m
                  ? "bg-[#8DC63F] text-white"
                  : "bg-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Material Type</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {merchandiseOptions.map((m) => (
            <button
              key={m}
              onClick={() => updateSession({ material: m })}
              className={`p-8 rounded-3xl text-xl font-bold shadow ${
                session.material === m ? "bg-[#8DC63F] text-white" : "bg-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <button
          onClick={validate}
          disabled={
            !session.vehicle || !session.merchandise || !session.material
          }
          className="w-full p-6 rounded-3xl text-2xl font-bold bg-[#003B71] text-white disabled:bg-gray-300"
        >
          Validate
        </button>
      </div>
    </div>
  );
}
