import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(null);
  const [profile, setProfile] = useState(null);
  const [vehicle, setVehicle] = useState("");
  const [merchandise, setMerchandise] = useState("");
  const [material, setMaterial] = useState("");

  const [quizAnswers, setQuizAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("paprec-session");

    if (saved) {
      const data = JSON.parse(saved);

      setLanguage(data.language);
      setProfile(data.profile);
      setVehicle(data.vehicle);
      setMerchandise(data.merchandise);
      setMaterial(data.material || "");
      setQuizAnswers(data.quizAnswers || []);
      setStartTime(data.startTime);
      setEndTime(data.endTime);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "paprec-session",
      JSON.stringify({
        language,
        profile,
        vehicle,
        merchandise,
        material,
        quizAnswers,
        startTime,
        endTime,
      }),
    );
  }, [
    language,
    profile,
    vehicle,
    merchandise,
    material,
    quizAnswers,
    startTime,
    endTime,
  ]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        profile,
        setProfile,
        vehicle,
        setVehicle,
        merchandise,
        setMerchandise,
        material,
        setMaterial,
        quizAnswers,
        setQuizAnswers,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
