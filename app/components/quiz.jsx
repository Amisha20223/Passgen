"use client"

import { useState } from "react"
import Question from "./question"

export default function Quiz({ quiz, difficulty, questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0))
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">
        {quiz.title} - {difficulty}
      </h2>
      <div className="mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <Question question={questions[currentQuestion]} onAnswer={handleAnswer} />
    </div>
  )
}

