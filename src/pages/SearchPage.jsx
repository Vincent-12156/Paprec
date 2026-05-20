import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Pencil } from "lucide-react";

import { profiles } from "../data/profiles";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProgressBar from "../components/ProgressBar";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { updateSession } = useApp();

  const filtered = profiles.filter((p) =>
    `${p.firstName} ${p.lastName} ${p.company}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const selectProfile = (profile) => {
    updateSession({ profile });
    navigate("/vehicle");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Search Driver" />
      <ProgressBar step={2} />

      <div className="max-w-5xl mx-auto">
        <div className="flex gap-6">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, first name or company..."
          />

          <button
            onClick={() => navigate("/new-driver")}
            className="bg-[#8DC63F] text-white px-6 py-5 rounded-3xl text-2xl font-bold"
          >
            + New Driver
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {filtered.map((profile) => (
            <div
              key={profile.id}
              onClick={() => selectProfile(profile)}
              className="w-full bg-white p-6 rounded-3xl shadow flex justify-between cursor-pointer"
            >
              <div>
                <div className="text-2xl font-bold flex items-center gap-3">
                  <User size={26} />
                  {profile.firstName} {profile.lastName}
                </div>
                <div className="text-lg opacity-80 ml-9">{profile.company}</div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/edit-driver", { state: { profile } });
                }}
                className="p-4 rounded-2xl bg-gray-100"
              >
                <Pencil size={26} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
