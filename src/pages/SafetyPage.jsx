import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

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

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Safety Rules" />

      <ProgressBar step={4} />

      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow">
        {/* TOP BOXES */}
        <div className="flex gap-5 mb-10">
          <Box
            title="Liste des risques identifiés"
            color="border-green-500"
            image={risqueImg}
            items={[
              "• Risque de chute de hauteur",
              "• Risque lié à la coactivité",
              "• Risque de chute d'objet",
              "• Risque incendie",
              "• Risque écrasement",
            ]}
          />

          <Box
            title="Liste des obligations"
            color="border-blue-500"
            image={obligationsImg}
            items={[
              "• Port des EPI obligatoire",
              "• Respect du sens de circulation",
              "• Respect des limitations",
              "• Priorité aux engins",
              "• Seul le conducteur descend",
            ]}
          />

          <Box
            title="Liste des interdictions"
            color="border-red-500"
            image={interdictionImg}
            items={[
              "• Échelles mobiles interdites",
              "• Interdiction de monter dans la remorque",
              "• Interdiction de fumer",
              "• Interdiction de courir",
              "• Alcool et drogue interdits",
            ]}
          />
        </div>

        {/* RULES */}
        <h2 className="text-center text-4xl font-bold mb-6">
          Consignes générales à respecter
        </h2>

        <div className="flex gap-4 flex-wrap mb-10">
          <Rule
            image={consigne1Img}
            text="Respecter la limitation de vitesse."
          />

          <Rule image={consigne2Img} text="Laisser la priorité aux engins." />

          <Rule
            image={consigne3Img}
            text="Seul le conducteur peut descendre."
          />

          <Rule
            image={consigne4Img}
            text="Respecter le sens de circulation."
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
            J'ai bien pris connaissance des règles de sécurité
          </label>

          <button
            onClick={() => navigate("/quiz")}
            disabled={!checked}
            className={`px-10 py-5 rounded-2xl text-white text-2xl font-bold transition
              ${checked ? "bg-[#07295f]" : "bg-gray-400"}`}
          >
            Continuer
          </button>
        </div>

        {/* FOOTER */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          NOTA 1 : Après chargement/déchargement, le chauffeur doit vérifier la
          propreté de la zone.
          <br />
          <br />
          NOTA 2 : L’entreprise d’accueil peut refuser l’opération si le
          comportement ou le véhicule présente un danger.
        </footer>
      </div>
    </div>
  );
}
