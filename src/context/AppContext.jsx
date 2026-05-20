import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const useApp = () => useContext(AppContext);

const defaultSession = {
  language: null,
  profile: null,
  vehicle: null,
  merchandise: null,
  material: null,
  quizAnswers: [],
  startTime: null,
  endTime: null,
  sessionType: "",
};

export function AppProvider({ children }) {
  const [session, setSession] = useState(defaultSession);

  // LOAD
  useEffect(() => {
    const saved = localStorage.getItem("paprec-session");
    if (saved) {
      try {
        setSession(JSON.parse(saved));
      } catch {
        setSession(defaultSession);
      }
    }
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("paprec-session", JSON.stringify(session));
  }, [session]);

  const updateSession = (updates) => {
    setSession((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        session,
        updateSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
