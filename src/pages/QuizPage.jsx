import { useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";

import { quizQuestions } from "../data/quiz";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import QuizQuestion from "../components/QuizQuestion";

export default function QuizPage() {
  const navigate = useNavigate();

  const { quizAnswers, setQuizAnswers, language } = useApp();
  const speechLang = language?.speech_name || "en-GB";
  console.log("language object:", language);
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

    navigate("/summary");
  };

  const randomQuestions = useMemo(() => {
    return [...quizQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, []);

  const allAnswered =
    quizAnswers.filter(
      (answer) => answer !== undefined
    ).length === randomQuestions.length;

  const lireTexte = () => {
  const texte = document.body.innerText;

  const utterance = new SpeechSynthesisUtterance(texte);

  utterance.lang = speechLang;
  console.log("language:", speechLang);
  utterance.rate = 1;
  utterance.pitch = 1;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
};

  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F4F7FA]">
      <Header title="Safety quiz" />

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
        onClick={lireTexte}
        className="w-full mb-4 p-4 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-700"
      >
        🔊 Lire la page
      </button>

        <button
          disabled={!allAnswered && !showErrors}
          onClick={() => {
            if (showErrors) {
              navigate("/safety");
            } else {
              validate();
            }
          }}
          className={`w-full p-6 rounded-3xl text-2xl font-bold transition ${
            !allAnswered && !showErrors
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-[#003B71] text-white hover:bg-[#002952]"
          }`}
        >
          {showErrors
            ? "Return to safety rules"
            : "Validate"}
        </button>
      </div>
    </div>
  );
}
