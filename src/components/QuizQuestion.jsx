export default function QuizQuestion({ question, selected, onSelect }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow mb-6">
      <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-full p-5 rounded-2xl text-left text-xl transition
            ${selected === index ? "bg-[#8DC63F] text-white" : "bg-gray-100"}`}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
