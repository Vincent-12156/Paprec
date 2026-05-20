import { useNavigate } from "react-router-dom";
import { LogIn, LogOut } from "lucide-react";

import { useApp } from "../context/AppContext";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function SessionTypePage() {
  const navigate = useNavigate();
  const { updateSession } = useApp();

  const selectEntry = () => {
    updateSession({ sessionType: "entry" });
    navigate("/search");
  };

  const selectExit = () => {
    updateSession({ sessionType: "exit" });
    navigate("/departure");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] p-6 md:p-10">
      <Header title="Select Action" />
      <ProgressBar step={2} />

      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 mt-20">
        <div
          onClick={selectEntry}
          className="bg-white p-16 rounded-3xl cursor-pointer"
        >
          <LogIn size={80} />
          <h2 className="text-4xl font-bold">Entry</h2>
        </div>

        <div
          onClick={selectExit}
          className="bg-white p-16 rounded-3xl cursor-pointer"
        >
          <LogOut size={80} />
          <h2 className="text-4xl font-bold">Exit</h2>
        </div>
      </div>
    </div>
  );
}
