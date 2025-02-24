export default function Results({
    results,
    currentQuiz,
    currentDifficulty,
    totalQuizzes,
    onNextQuiz,
    onReattempt,
    quizUnlocked,
  }) {
    const difficulties = ["Basic", "Medium", "Hard"]
    const currentQuizResults = results[currentQuiz] || {}
    const currentScore = currentQuizResults[difficulties[currentDifficulty]] || 0
  
    return (
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <div className="space-y-2">
          {Object.entries(currentQuizResults).map(([difficulty, score]) => (
            <div key={difficulty} className="flex justify-between">
              <span>{difficulty}:</span>
              <span className="font-semibold">{score}/10</span>
            </div>
          ))}
        </div>
        <div className="mt-4 font-semibold">Current Score: {currentScore}/10</div>
        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" onClick={onReattempt}>
            Reattempt Quiz
          </button>
          {currentQuiz < totalQuizzes - 1 && (
            <button
              className={`px-4 py-2 rounded ${
                quizUnlocked[currentQuiz + 1]
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={onNextQuiz}
              disabled={!quizUnlocked[currentQuiz + 1]}
            >
              {quizUnlocked[currentQuiz + 1] ? "Start Next Quiz" : "Next Quiz Locked"}
            </button>
          )}
        </div>
      </div>
    )
  }
  
  