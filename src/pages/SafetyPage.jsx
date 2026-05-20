import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import safetyLanguages from "../data/safetyLanguages";

import risqueImg from "../assets/picto/Risque identifiés.png";
import obligationsImg from "../assets/picto/Obligations.png";
import interdictionImg from "../assets/picto/Interdiction1.png";

import consigne1Img from "../assets/picto/Consignes1.png";
import consigne2Img from "../assets/picto/Consignes2.png";
import consigne3Img from "../assets/picto/Consignes3.png";
import consigne4Img from "../assets/picto/Consignes4.png";

function Box({ title, color, image, items }) {
  return (
    <div
      className={`flex-1 bg-white rounded-[20px] p-5 border-4 ${color} flex flex-col`}
    >
      <h2 className="text-3xl font-bold mb-6 min-h-[90px]">{title}</h2>

      <div className="h-[180px] flex justify-center items-center mb-6">
        <img src={image} alt="" className="w-40 object-contain" />
      </div>

      <ul className="space-y-3 text-lg">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Rule({ image, text }) {
  return (
    <div className="flex-1 min-w-[180px] bg-white rounded-[20px] border-2 border-gray-300 p-4 text-center">
      <img src={image} alt="" className="w-24 mx-auto mb-3" />

      <p className="font-bold">{text}</p>
    </div>
  );
}

export default function SafetyPage() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

   const currentLanguage =
    localStorage.getItem("language") || "fr";

  const content =
    safetyLanguages[currentLanguage] ||
    safetyLanguages.fr;

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title={content.pageTitle} />

      <ProgressBar step={4} />

      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow">
        {/* TOP BOXES */}
        <div className="flex gap-5 mb-10">
  <Box
    title={content.boxes.risks.title}
    color="border-green-500"
    image={risqueImg}
    items={content.boxes.risks.items}
  />

  <Box
    title={content.boxes.obligations.title}
    color="border-blue-500"
    image={obligationsImg}
    items={content.boxes.obligations.items}
  />

  <Box
    title={content.boxes.prohibitions.title}
    color="border-red-500"
    image={interdictionImg}
    items={content.boxes.prohibitions.items}
  />
</div>
        </div>

        {/* RULES */}
<h2 className="text-center text-4xl font-bold mb-6">
  {content.rulesTitle}
</h2>

<div className="flex gap-4 flex-wrap mb-10">
  <Rule
    image={consigne1Img}
    text={content.rules[0]}
  />

  <Rule
    image={consigne2Img}
    text={content.rules[1]}
  />

  <Rule
    image={consigne3Img}
    text={content.rules[2]}
  />

  <Rule
    image={consigne4Img}
    text={content.rules[3]}
  />
</div>

        {/* CHECKBOX */}
        <div className="p-6 bg-gray-100 rounded-[20px] text-center">
          <label className="flex justify-center items-center gap-4 text-2xl font-bold mb-5">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-6 h-6"
            />
            {content.checkboxText}
          </label>

          <button
            onClick={() => navigate("/quiz")}
            disabled={!checked}
            className={`px-10 py-5 rounded-2xl text-white text-2xl font-bold transition
              ${checked ? "bg-[#07295f]" : "bg-gray-400"}`}
          >
            {content.buttonText}
          </button>
        </div>

        {/* FOOTER */}
        <footer className="mt-10 text-center text-sm text-gray-500">
         {content.footer.nota1}
<br />
<br />
{content.footer.nota2}
        </footer>
      </div>
  );
}
