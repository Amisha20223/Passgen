export default function Question({ question, onAnswer }) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full text-left p-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => onAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  