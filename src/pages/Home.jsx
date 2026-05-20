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

  const { updateSession } = useApp();

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectLanguage = (lang) => {
    updateSession({
      language: lang,
      startTime: new Date().toLocaleString(),
      sessionType: "entry",
    });

    navigate("/session-type");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] p-6 md:p-10">
      <Header title="Select Language" />
      <ProgressBar step={1} />

      <div className="max-w-6xl mx-auto">
        <div className="relative mb-10">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search language..."
            className="w-full pl-16 py-5 rounded-3xl border bg-white text-2xl"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filtered.map((lang) => (
            <div
              key={lang.name}
              onClick={() => selectLanguage(lang)}
              className="relative overflow-hidden cursor-pointer aspect-[16/9] rounded-3xl shadow"
            >
              <img
                src={lang.image}
                className="absolute inset-0 w-full h-full object-cover brightness-95"
              />

              <div className="relative z-10 h-full flex items-end justify-center p-4 bg-black/10">
                <span className="text-white text-3xl font-bold">
                  {lang.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
