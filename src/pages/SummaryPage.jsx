import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";
import { useApp } from "../context/AppContext";
import Header from "../components/Header";

export default function SummaryPage() {
  const navigate = useNavigate();

  const {
    language,
    profile,
    vehicle,
    merchandise,
    startTime,
    endTime,
    setEndTime,
    setLanguage,
    setProfile,
    setVehicle,
    setMerchandise,
    setQuizAnswers,
    setStartTime,
    setMaterial,
  } = useApp();

  // first button
  const registerDeparture = () => {
    const departureTime = new Date().toLocaleString();
    setEndTime(departureTime);
  };

  // second button
  const finishSession = () => {
    console.log({
      language,
      profile,
      vehicle,
      merchandise,
      startTime,
      endTime,
    });

    // clear storage
    localStorage.removeItem("paprec-session");

    // reset context
    setLanguage(null);
    setProfile(null);
    setVehicle("");
    setMerchandise("");
    setQuizAnswers([]);
    setStartTime(null);
    setEndTime(null);
    setMaterial("");

    // return home
    navigate("/");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Session Complete" />
      {/* Waring message */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="bg-yellow-400 text-black p-6 rounded-3xl shadow border-l-8 border-yellow-600">
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
      </div>

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow">
        <div className="space-y-5 text-2xl">
          <p>
            <strong>Language:</strong> {language?.name}
          </p>

          <p>
            <strong>Name:</strong> {profile?.lastName}
          </p>

          <p>
            <strong>First Name:</strong> {profile?.firstName}
          </p>

          <p>
            <strong>Company:</strong> {profile?.company}
          </p>

          <p>
            <strong>Vehicle:</strong> {vehicle}
          </p>

          <p>
            <strong>Merchandise:</strong> {merchandise}
          </p>

          <p>
            <strong>Arrival:</strong> {startTime}
          </p>

          <p>
            <strong>Departure:</strong>{" "}
            {endTime ? endTime : "Not registered yet"}
          </p>
        </div>

        {!endTime && (
          <button
            onClick={registerDeparture}
            className="mt-12 w-full bg-[#8DC63F] text-white p-6 rounded-3xl text-2xl font-bold hover:opacity-90 transition"
          >
            Confirm departure
          </button>
        )}

        {endTime && (
          <button
            onClick={finishSession}
            className="mt-12 w-full bg-[#003B71] text-white p-6 rounded-3xl text-2xl font-bold hover:opacity-90 transition"
          >
            Close session
          </button>
        )}
      </div>
    </div>
  );
}
