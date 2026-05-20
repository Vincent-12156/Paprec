
import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

import { useApp } from "../context/AppContext";
import Header from "../components/Header";

export default function SummaryPage() {
  const navigate = useNavigate();
  const { session } = useApp();

  return (
    <div className="min-h-screen p-10 bg-[#F4F7FA]">
      <Header title="Summary" />

      <div className="max-w-4xl mx-auto">
        <div className="bg-yellow-400 text-black p-6 rounded-3xl shadow border-l-8 border-yellow-600 mb-6">
          <div className="flex items-center gap-4 mb-3">
            <TriangleAlert size={36} className="text-black" />

            <p className="text-2xl md:text-3xl font-bold uppercase">WARNING</p>
          </div>

          <p className="text-xl md:text-2xl font-semibold">
            Do not leave this area.
          </p>

          <p className="text-xl md:text-2xl mt-2">
            A company representative will come and guide you to the correct
            location.
          </p>

          <p className="text-lg md:text-xl mt-2 font-medium opacity-90">
            Please wait until you are instructed to move.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl text-2xl space-y-4">
          <p>Language: {session.language?.name}</p>
          <p>
            Name: {session.profile?.firstName} {session.profile?.lastName}
          </p>
          <p>Company: {session.profile?.company}</p>

          <p>Vehicle: {session.vehicle}</p>
          <p>Packaging: {session.merchandise}</p>
          <p>Material: {session.material}</p>

          <p>Arrival: {session.startTime || "Not set"}</p>
          <p>Departure: {session.endTime || "Not set"}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-10 w-full bg-[#003B71] text-white p-6 rounded-3xl"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}
