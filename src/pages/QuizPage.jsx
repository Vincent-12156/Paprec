import { useNavigate } from "react-router-dom";

import { quizQuestions } from "../data/quiz";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import QuizQuestion from "../components/QuizQuestion";

export default function QuizPage() {
  const navigate = useNavigate();

  const { quizAnswers, setQuizAnswers } = useApp();

  const selectAnswer = (questionIndex, answerIndex) => {
    const updated = [...quizAnswers];
    updated[questionIndex] = answerIndex;
    setQuizAnswers(updated);
  };

  const validate = () => {
    navigate("/summary");
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Safety Quiz" />

      <ProgressBar step={5} />

      <div className="max-w-5xl mx-auto">
        {quizQuestions.map((question, index) => (
          <QuizQuestion
            key={index}
            question={question}
            selected={quizAnswers[index]}
            onSelect={(answer) => selectAnswer(index, answer)}
          />
        ))}

        <button
          onClick={validate}
          className="w-full bg-[#003B71] text-white p-6 rounded-3xl text-2xl font-bold"
        >
          Validate
        </button>
      </div>
    </div>
  );
}
