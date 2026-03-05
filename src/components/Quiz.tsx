import { useState } from "react";
import { questions } from "../data/questions";
import "../styles/Quiz.css";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  const handleAnswer = (index: number) => {
    
    if (index === questions[current].correctAnswer) {
      setScore(score + 1);
    }
    

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
      setFinished(false);
    }else{setFinished(true);}
  };

  if (finished) {
  return (
    <div className="quiz-container">
      <h1>One-Punch Man - Quiz</h1>
      <div className="quiz-card">

        <h2>Quiz Finished</h2>

        <p className="score">
          Score: {score} / {questions.length}
        </p>

        <p className="rank">
          {score > 7
            ? "🔥 True One Punch Man Fan!"
            : score > 4
            ? "👍 Good knowledge!"
            : score > 1
            ? "🙂 You can improve!"
            : "💀 Watch the anime again!"
          }
        </p>

        <button className="restart" onClick={restartQuiz}>
          Restart Quiz
        </button>

        </div>
      </div>
    );
  }

  return (
  <div className="quiz-container">
    <h1>One-Punch Man - Quiz</h1>
    <div className="quiz-card">

      <p className="progress">
        Question {current + 1} / {questions.length}
      </p>

      <h2 className="question">
        {questions[current].question}
      </h2>

      <div className="options">
        {questions[current].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  </div>
);
}