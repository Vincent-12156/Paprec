import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import { languages } from "../data/languages";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { setLanguage, setStartTime } = useApp();

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectLanguage = (lang) => {
    setLanguage(lang);
      localStorage.setItem("language", lang.code);
    setStartTime(new Date().toLocaleString());
    navigate("/search");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] p-6 md:p-10">
      <Header title="Select Language" />
      <ProgressBar step={1} />
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-10">
          <Search
            size={30}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-red-500"
          />

          <input
            type="text"
            placeholder="Search language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-16
              pr-6
              py-5
              rounded-3xl
              border-2
              border-gray-300
              bg-white
              text-2xl
              shadow-sm
              focus:outline-none
              focus:border-[#003B71]
            "
          />
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filtered.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className="
                relative
                overflow-hidden
                rounded-3xl
                shadow-xl
                min-h-[240px]
                hover:scale-105
                active:scale-95
                transition
                cursor-pointer
              "
            >
              {/* Background Flag */}
              <img
                src={lang.image}
                alt={lang.name}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Content */}
              <div className="relative z-10 flex items-end justify-center h-full">
                <span className="text-white text-3xl font-bold drop-shadow-lg">
                  {lang.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
