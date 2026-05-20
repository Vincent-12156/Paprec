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
          function Box({ title, color, image, items }) {
  return (
    <div className={`flex-1 bg-white rounded-[20px] p-5 border-4 ${color} flex flex-col`}>

      <h2 className="text-4xl font-bold text-left leading-tight mb-6 min-h-[96px]">
        {title}
      </h2>

      <div className="h-[180px] flex justify-center items-center mb-6">
        <img
          src={image}
          alt=""
          className="w-40 object-contain"
        />
      </div>

      <ul className="pl-6 space-y-3 text-left w-full">
        {items.map((item, index) => 
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

function Rule({ image, text }) {
  return (
    <div className="flex-1 min-w-[180px] bg-white rounded-[20px] border-2 border-gray-300 p-4 text-center">
      <img
        src={image}
        alt=""
        className="w-24 mx-auto mb-3"
      />

      <p className="font-bold">
        {text}
      </p>
    </div>
  );
}

function App() {
  const [checked, setChecked] =
    React.useState(false);

  return (
    <div className="bg-gray-100 p-5">

      <div className="bg-white rounded-[30px] shadow-xl overflow-hidden">

        <div className="bg-[#07295f] text-white text-center text-6xl font-bold p-8 rounded-b-[px]">
          PAPREC
        </div>

        <div className="flex gap-5 p-6">

          <Box
            title="Liste des risques identifiés"
            color="border-green-500"
            image="Risque identifiés.png"
            items={[
              "• Risque de chute de hauteur",
              "• Risque lié à la coactivité (camion, piétons)",
              "• Risque de chute d'objet",
              "• Risque incendie",
              "• Risque écrasement"
            ]}
          />

          <Box
            title="Liste des obligations"
            color="border-blue-500"
            image="Obligations.png"
            items={[
              "Obligation de l’entreprise d’accueil : ",
              "• Port des EPI obligatoire",
              "Obligation de l’entreprise de transport :",
              "• Respect du sens de circulation et les limitations de vitesses.",
              "• Le port des EPI est obligatoire",
              "• Laisser la priorité aux engins sur le site.",
              "• Seul le conducteur est autorisé à descendre du véhicule.",
              "• Le conducteur est isolé à proximité de sa cabine pendant les opérations de manutention."
            ]}
          />

          <Box
            title="Liste des interdictions"
            color="border-red-500"
            image="Interdiction1.png"
            items={[
              "• Les échelles mobiles sont interdites",
              "• Interdiction de monter dans la remorque.",
              "• Interdiction de faire du feu et de fumer/vapoter.",
              "• Interdiction de courir",
              "• Interdiction de consommer de l’alcool ou de la drogue.",
              "• Interdiction de se déplacer sur de longues distances avec l’arrière de la BOM levée."
            ]}
          />

        </div>

        <h2 className="text-center text-5xl font-bold mt-3">
          Consignes générales à respecter
        </h2>

        <div className="flex gap-4 p-6 flex-wrap">

          <Rule
            image="Consignes1.png"
            text="Respecter la limitation de vitesse."
          />

          <Rule
            image="Consignes2.png"
            text="Laisser la priorité aux engins sur site"
          />

          <Rule
            image="Consignes3.png"
            text="Seul le conducteur est autorisé à descendre du véhicule."
          />

          <Rule
            image="Consignes4.png"
            text="Respecter le sens de circulation."
          />

        </div>

        <div className="m-5 p-6 bg-gray-100 rounded-[20px] text-center">

          <label className="flex justify-center items-center gap-4 text-2xl font-bold mb-5">

            <input
              type="checkbox"
              checked={checked}
              onChange={() =>
                setChecked(!checked)
              }
              className="w-6 h-6"
            />

            J'ai bien pris connaissance des règles de sécurité

          </label>

          <button
            disabled={!checked}
            className={`px-8 py-4 rounded-2xl text-white text-xl
            ${
              checked
                ? "bg-[#07295f]"
                : "bg-gray-400"
            }`}
          >
            Continuer
          </button>

        </div>
            <footer className="mt-auto text-center text-sm text-gray-500 py-4">
        NOTA 1 : Après l’opération de chargement / déchargement, le chauffeur de l’entreprise de transport doit s’assurer qu’il ne reste pas de déchets accrochés aux
        véhicules et/ou sur la zone de chargement / déchargement, le cas échant il devra procéder / contribuer au nettoyage.
        NOTA 2 : L’entreprise d’accueil se réserve le droit de décider de l’interdiction de décharger ou charger le véhicule si le comportement du chauffeur ou l’état du
        véhicule génèrent des risques pour l’opération ou l’entreprise.
      </footer>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);

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
