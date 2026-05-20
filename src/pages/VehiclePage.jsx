import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function VehiclePage() {
  const merchandiseOptions = [
    "Plastic",
    "Metal",
    "Paper / Cardboard",
    "Glass",
    "Wood",
    "Mixed",
  ];

  const navigate = useNavigate();
  const {
    vehicle,
    setVehicle,
    merchandise,
    setMerchandise,
    material,
    setMaterial,
  } = useApp();

  const validate = () => {
    if (!vehicle || !merchandise || !material) return;

    navigate("/safety");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Vehicle Information" />

      <ProgressBar step={3} />

      <div className="max-w-4xl mx-auto">
        {/* VEHICLE */}
        <h2 className="text-2xl font-bold mb-4">Vehicle</h2>

        <div className="grid grid-cols-2 gap-6 mb-10">
          {["Truck", "Big Truck"].map((v) => (
            <button
              key={v}
              onClick={() => setVehicle(v)}
              className={`p-10 rounded-3xl text-2xl font-bold shadow transition
        ${vehicle === v ? "bg-[#8DC63F] text-white" : "bg-white"}`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* PACKAGING */}
        <h2 className="text-2xl font-bold mb-4">Packaging Type</h2>

        <div className="grid grid-cols-2 gap-6 mb-10">
          {["Bale", "Bulk"].map((m) => (
            <button
              key={m}
              onClick={() => setMerchandise(m)}
              className={`p-10 rounded-3xl text-2xl font-bold shadow transition
        ${merchandise === m ? "bg-[#8DC63F] text-white" : "bg-white"}`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* MATERIAL TYPE */}
        <h2 className="text-2xl font-bold mb-4">Material Type</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {merchandiseOptions.map((m) => (
            <button
              key={m}
              onClick={() => setMaterial(m)}
              className={`p-8 rounded-3xl text-xl font-bold shadow transition
        ${material === m ? "bg-[#8DC63F] text-white" : "bg-white"}`}
            >
              {m}
            </button>
          ))}
        </div>
        {/*  VALIDATE BUTTON */}
        <button
          onClick={validate}
          disabled={!vehicle || !merchandise || !material}
          className={`w-full p-6 rounded-3xl text-2xl font-bold transition
            ${
              vehicle && merchandise && material
                ? "bg-[#003B71] text-white"
                : "bg-gray-300 text-gray-500"
            }`}
        >
          Validate
        </button>
      </div>
    </div>
  );
}
