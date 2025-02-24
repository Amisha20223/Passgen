"use client"

import { useState, useEffect } from "react"
import Quiz from "./components/quiz"
import Results from "./components/results"

const difficulties = ["Basic", "Medium", "Hard"]

const quizzes = [
  {
    id: 1,
    title: "DSA Concepts",
    questions: {
      Basic: [
        {
          question: "What does DSA stand for?",
          options: [
            "Data Structures and Algorithms",
            "Dynamic System Analysis",
            "Digital Signal Analysis",
            "Data Science Applications",
          ],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is not a linear data structure?",
          options: ["Array", "Linked List", "Stack", "Tree"],
          correctAnswer: 3,
        },
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
          correctAnswer: 1,
        },
        {
          question: "Which sorting algorithm has the best average-case time complexity?",
          options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary advantage of using a hash table?",
          options: [
            "Ordered data storage",
            "Constant time complexity for insertion and lookup",
            "Memory efficiency",
            "Ease of implementation",
          ],
          correctAnswer: 1,
        },
        {
          question: "Which data structure uses LIFO (Last In First Out) principle?",
          options: ["Queue", "Stack", "Linked List", "Array"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of a heap data structure?",
          options: ["Efficient sorting", "Priority queue implementation", "Graph traversal", "String matching"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is not an in-place sorting algorithm?",
          options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Quick Sort"],
          correctAnswer: 2,
        },
        {
          question: "What is the time complexity of inserting an element at the end of an array?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is best for implementing a dictionary?",
          options: ["Array", "Linked List", "Hash Table", "Stack"],
          correctAnswer: 2,
        },
      ],
      Medium: [
        {
          question: "What is the time complexity of the best case scenario for Quicksort?",
          options: ["O(n log n)", "O(n)", "O(log n)", "O(1)"],
          correctAnswer: 1,
        },
        {
          question:
            "Which data structure is most suitable for implementing a cache with a Least Recently Used (LRU) eviction policy?",
          options: ["Array", "Linked List", "Hash Table + Doubly Linked List", "Binary Search Tree"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary difference between a stack and a queue?",
          options: ["Data types they can store", "Memory allocation", "Order of operations", "Time complexity"],
          correctAnswer: 2,
        },
        {
          question: "In graph theory, what does DFS stand for?",
          options: ["Data Flow Search", "Depth First Search", "Direct Functional Search", "Discrete Fourier Series"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is NOT a balanced binary search tree?",
          options: ["AVL Tree", "Red-Black Tree", "B-Tree", "Binary Tree"],
          correctAnswer: 3,
        },
        {
          question: "What is the time complexity of finding the kth smallest element in a min-heap?",
          options: ["O(1)", "O(log n)", "O(k log n)", "O(n)"],
          correctAnswer: 2,
        },
        {
          question:
            "Which sorting algorithm is used by most modern programming languages for their built-in sort functions?",
          options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary advantage of using a trie data structure?",
          options: ["Efficient sorting", "Fast prefix searching", "Constant time element access", "Memory efficiency"],
          correctAnswer: 1,
        },
        {
          question: "In the context of graph algorithms, what does 'MST' stand for?",
          options: ["Most Significant Tree", "Minimum Spanning Tree", "Maximum Search Time", "Multi-Source Traversal"],
          correctAnswer: 1,
        },
        {
          question: "Which data structure would you use to efficiently find the median in a stream of integers?",
          options: ["Array", "Linked List", "Two Heaps", "Binary Search Tree"],
          correctAnswer: 2,
        },
      ],
      Hard: [
        {
          question:
            "What is the time complexity of the Floyd-Warshall algorithm for finding all-pairs shortest paths in a weighted graph?",
          options: ["O(V^2)", "O(V^3)", "O(VE)", "O(V^2 log V)"],
          correctAnswer: 1,
        },
        {
          question: "Which data structure is most efficient for implementing a union-find (disjoint set) algorithm?",
          options: ["Array", "Linked List", "Tree with path compression and union by rank", "Hash Table"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary use of a segment tree?",
          options: ["Sorting", "Range queries and updates", "Graph traversal", "Memory management"],
          correctAnswer: 1,
        },
        {
          question: "In the context of string matching algorithms, what does KMP stand for?",
          options: ["Knuth-Morris-Pratt", "Key-Match Pattern", "Kinetic Memory Process", "Kernel Method Pattern"],
          correctAnswer: 0,
        },
        {
          question: "What is the time complexity of the best known algorithm for matrix multiplication?",
          options: ["O(n^2)", "O(n^2.37)", "O(n^3)", "O(n log n)"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is NOT a use case for a Bloom filter?",
          options: ["Spell checkers", "Caching", "Exact element counting", "Duplicate detection"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary advantage of using a B+ tree over a B-tree?",
          options: [
            "Faster search operations",
            "More efficient space utilization",
            "Easier implementation",
            "Better for in-memory databases",
          ],
          correctAnswer: 0,
        },
        {
          question: "In the context of graph theory, what does the term 'chromatic number' refer to?",
          options: [
            "Number of edges",
            "Number of vertices",
            "Minimum number of colors needed to color the graph",
            "Maximum degree of any vertex",
          ],
          correctAnswer: 2,
        },
        {
          question:
            "What is the time complexity of finding the longest common subsequence of two strings of length m and n using dynamic programming?",
          options: ["O(m+n)", "O(mn)", "O(m log n)", "O(2^(m+n))"],
          correctAnswer: 1,
        },
        {
          question:
            "Which of the following data structures is most suitable for implementing a trie with minimal memory usage?",
          options: ["Array of linked lists", "Hash table of arrays", "Ternary search tree", "Array of hash tables"],
          correctAnswer: 2,
        },
      ],
    },
  },
  // Add more quizzes here with similar structure
]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function Home() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [currentDifficulty, setCurrentDifficulty] = useState(0)
  const [quizResults, setQuizResults] = useState([])
  const [quizUnlocked, setQuizUnlocked] = useState([true, ...Array(quizzes.length - 1).fill(false)])
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  useEffect(() => {
    if (quizzes[currentQuiz] && difficulties[currentDifficulty]) {
      setShuffledQuestions(shuffleArray([...quizzes[currentQuiz].questions[difficulties[currentDifficulty]]]))
    }
  }, [currentQuiz, currentDifficulty])

  const handleQuizComplete = (score) => {
    const newResults = [...quizResults]
    newResults[currentQuiz] = newResults[currentQuiz] || {}
    newResults[currentQuiz][difficulties[currentDifficulty]] = score
    setQuizResults(newResults)

    if (score >= 9) {
      if (currentDifficulty < difficulties.length - 1) {
        setCurrentDifficulty(currentDifficulty + 1)
      } else if (currentQuiz < quizzes.length - 1) {
        const newUnlocked = [...quizUnlocked]
        newUnlocked[currentQuiz + 1] = true
        setQuizUnlocked(newUnlocked)
      }
    }
  }

  const startNextQuiz = () => {
    if (currentQuiz < quizzes.length - 1 && quizUnlocked[currentQuiz + 1]) {
      setCurrentQuiz(currentQuiz + 1)
      setCurrentDifficulty(0)
    }
  }

  const reattemptQuiz = () => {
    setShuffledQuestions(shuffleArray([...quizzes[currentQuiz].questions[difficulties[currentDifficulty]]]))
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">DSA Quiz Series</h1>
        {currentQuiz < quizzes.length ? (
          quizUnlocked[currentQuiz] ? (
            <Quiz
              quiz={quizzes[currentQuiz]}
              difficulty={difficulties[currentDifficulty]}
              questions={shuffledQuestions}
              onComplete={handleQuizComplete}
            />
          ) : (
            <div className="text-center text-xl font-semibold">
              Complete the previous quiz with a score of 9 or higher to unlock this quiz.
            </div>
          )
        ) : (
          <div className="text-center text-xl font-semibold">Congratulations! You've completed all quizzes.</div>
        )}
        {quizResults.length > 0 && (
          <Results
            results={quizResults}
            currentQuiz={currentQuiz}
            currentDifficulty={currentDifficulty}
            totalQuizzes={quizzes.length}
            onNextQuiz={startNextQuiz}
            onReattempt={reattemptQuiz}
            quizUnlocked={quizUnlocked}
          />
        )}
      </div>
    </main>
  )
}

