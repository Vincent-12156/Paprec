import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { profiles } from "../data/profiles";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProgressBar from "../components/ProgressBar";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { setProfile } = useApp();

  const filtered = profiles.filter((p) =>
    `${p.firstName} ${p.lastName} ${p.company}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const selectProfile = (profile) => {
    setProfile(profile);
    navigate("/vehicle");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Search Driver" />

      <ProgressBar step={2} />

      <div className="max-w-5xl mx-auto">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name, first name or company..."
        />

        <div className="mt-8 space-y-4">
          {filtered.map((profile) => (
            <button
              key={profile.id}
              onClick={() => selectProfile(profile)}
              className="w-full bg-white p-6 rounded-3xl shadow text-left hover:bg-[#003B71] hover:text-white transition"
            >
              <div className="text-2xl font-bold">
                {profile.firstName} {profile.lastName}
              </div>

              <div className="text-lg opacity-80">{profile.company}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
