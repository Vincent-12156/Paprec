import { useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";

import { quizQuestions } from "../data/quiz";
import { useApp } from "../context/AppContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import QuizQuestion from "../components/QuizQuestion";

export default function QuizPage() {
  const navigate = useNavigate();

  const { session, updateSession } = useApp();

  const quizAnswers = session.quizAnswers || [];
  const language = session.language;

  const speechLang = language?.speech_name || "en-GB";

  const [showErrors, setShowErrors] = useState(false);

  const randomQuestions = useMemo(() => {
    return [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
  }, []);

  useEffect(() => {
    updateSession({ quizAnswers: [] });
  }, []);

  const selectAnswer = (questionIndex, answerIndex) => {
    const updated = [...quizAnswers];
    updated[questionIndex] = answerIndex;
    updateSession({ quizAnswers: updated });
  };

  const validate = () => {
    const hasError = randomQuestions.some(
      (question, index) => Number(quizAnswers[index]) !== question.answer,
    );

    if (hasError) {
      setShowErrors(true);
      return;
    }

    navigate("/summary");
  };

  const allAnswered =
    quizAnswers.filter((a) => a !== undefined).length ===
    randomQuestions.length;

  const lireTexte = () => {
    const utterance = new SpeechSynthesisUtterance(document.body.innerText);

    utterance.lang = speechLang;
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
              showErrors && Number(quizAnswers[index]) !== question.answer
            }
          />
        ))}

        <button
          onClick={lireTexte}
          className="w-full mb-4 p-4 rounded-2xl bg-green-600 text-white font-bold"
        >
          🔊 Lire la page
        </button>

        <button
          disabled={!allAnswered}
          onClick={validate}
          className={`w-full p-6 rounded-3xl text-2xl font-bold transition ${
            !allAnswered
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#003B71] text-white hover:bg-[#002952]"
          }`}
        >
          Validate
        </button>
      </div>
    </div>
  );
}
