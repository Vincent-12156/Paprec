import { useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";

import { quizQuestions } from "../data/quiz";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import QuizQuestion from "../components/QuizQuestion";

export default function QuizPage() {
  const navigate = useNavigate();

  const { quizAnswers, setQuizAnswers } = useApp();
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    setQuizAnswers([]);
  }, []);

  const selectAnswer = (questionIndex, answerIndex) => {
    const updated = [...quizAnswers];
    updated[questionIndex] = answerIndex;
    setQuizAnswers(updated);
  };

  const validate = () => {
    const hasError = randomQuestions.some(
      (question, index) =>
        Number(quizAnswers[index]) !== question.answer
    );

    if (hasError) {
      setShowErrors(true);
      return;
    }

    window.alert("You passed the quiz ! You can now sign.");
    navigate("/summary");
  };

  const randomQuestions = useMemo(() => {
    return [...quizQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Safety Quiz" />

      <ProgressBar step={5} />

      <div className="max-w-5xl mx-auto">
        {randomQuestions.map((question, index) => (
          <QuizQuestion
            key={index}
            question={question}
            selected={quizAnswers[index]}
            onSelect={(answer) => selectAnswer(index, answer)}
            showError={
              showErrors &&
              Number(quizAnswers[index]) !==
                question.answer
            }
            locked={showErrors}
          />
        ))}

        <button
          onClick={() => {
            if (showErrors) {
              navigate("/safety");
            } else {
              validate();
            }
          }}
          className="w-full bg-[#003B71] text-white p-6 rounded-3xl text-2xl font-bold"
        >
          {showErrors
            ? "Return to safety rules"
            : "Validate"}
        </button>
      </div>
    </div>
  );
}
