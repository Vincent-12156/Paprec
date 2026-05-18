export default function LanguageCard({ language, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition w-full"
    >
      <div className="text-7xl">{language.flag}</div>

      <div className="mt-4 text-2xl font-bold text-[#003B71]">
        {language.name}
      </div>
    </button>
  );
}
