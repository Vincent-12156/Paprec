import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";

export default function EditDriverPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { setProfile } = useApp();

  const [firstName, setFirstName] = useState(state?.profile?.firstName || "");
  const [lastName, setLastName] = useState(state?.profile?.lastName || "");
  const [company, setCompany] = useState(state?.profile?.company || "");

  const save = () => {
    const updated = {
      ...state.profile,
      firstName,
      lastName,
      company,
    };

    setProfile(updated);
    navigate("/search");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Edit Driver" />

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow space-y-6">
        <input
          className="w-full p-5 text-xl border rounded-2xl"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="w-full p-5 text-xl border rounded-2xl"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="w-full p-5 text-xl border rounded-2xl"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button
          onClick={save}
          className="w-full bg-[#003B71] text-white p-6 rounded-2xl text-2xl font-bold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
