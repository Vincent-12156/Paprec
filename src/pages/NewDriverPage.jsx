import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";

export default function NewDriverPage() {
  const navigate = useNavigate();
  const { updateSession } = useApp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");

  const saveDriver = () => {
    const newDriver = {
      id: Date.now(),
      firstName,
      lastName,
      company,
    };

    updateSession({ profile: newDriver });
    navigate("/vehicle");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="New Driver" />

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow space-y-6">
        <input
          className="w-full p-5 text-xl border rounded-2xl"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="w-full p-5 text-xl border rounded-2xl"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="w-full p-5 text-xl border rounded-2xl"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button
          onClick={saveDriver}
          className="w-full bg-[#003B71] text-white p-6 rounded-2xl text-2xl font-bold"
        >
          Validate Driver
        </button>
      </div>
    </div>
  );
}
