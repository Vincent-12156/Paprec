import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function SafetyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Safety Rules" />

      <ProgressBar step={4} />

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow">
        <div className="space-y-6 text-2xl">
          <div>✔ Wear safety helmet</div>
          <div>✔ Wear safety vest</div>
          <div>✔ Respect speed limits</div>
          <div>✔ Follow site instructions</div>
        </div>

        <button
          onClick={() => navigate("/quiz")}
          className="mt-12 w-full bg-[#003B71] text-white p-6 rounded-3xl text-2xl font-bold"
        >
          Validate
        </button>
      </div>
    </div>
  );
}
