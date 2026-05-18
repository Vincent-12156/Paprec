import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function VehiclePage() {
  const navigate = useNavigate();

  const { vehicle, setVehicle, merchandise, setMerchandise } = useApp();

  const validate = () => {
    if (!vehicle || !merchandise) return;

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
              onClick={() => setVehicle(v)}
              className={`p-10 rounded-3xl text-2xl font-bold shadow
              ${vehicle === v ? "bg-[#8DC63F] text-white" : "bg-white"}`}
            >
              {v}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Merchandise</h2>

        <div className="grid grid-cols-2 gap-6">
          {["Bulk", "Bale"].map((m) => (
            <button
              key={m}
              onClick={() => setMerchandise(m)}
              className={`p-10 rounded-3xl text-2xl font-bold shadow
              ${merchandise === m ? "bg-[#8DC63F] text-white" : "bg-white"}`}
            >
              {m}
            </button>
          ))}
        </div>

        <button
          onClick={validate}
          className="mt-12 w-full bg-[#003B71] text-white p-6 rounded-3xl text-2xl font-bold"
        >
          Validate
        </button>
      </div>
    </div>
  );
}
