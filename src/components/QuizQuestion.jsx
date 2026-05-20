export default function QuizQuestion({
  question,
  selected,
  onSelect,
  showError,
  locked,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl mb-6 shadow">
      <h2 className="text-2xl font-bold mb-4">
        {question.question}
      </h2>

      <div className="flex flex-col gap-4">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            disabled={locked}
            onClick={() => onSelect(index)}
            className={`p-4 rounded-xl border text-left ${
              selected === index
                ? "bg-[#8DC63F] text-white"
                : "bg-gray-100"
            }`}
          >
            {choice}
          </button>
        ))}
      </div>

        {showError && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 p-4 rounded-2xl">
          <strong>Why ?</strong>
          <p>{question.why}</p>
        </div>
      )}
    </div>
  );
}