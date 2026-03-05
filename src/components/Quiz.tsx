import { useState } from "react";
import { questions } from "../data/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[current].correctAnswer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div>
        <h2>Resultado final</h2>
        <p>
          Acertaste {score} de {questions.length} <br />
          Clasificación: {score > 7? " Verdadero fan!" : score > 4? " Buen conocedor" : score > 1? "Puedes mejorar!" : "Necesitas mejorar"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>{questions[current].question}</h2>

      {questions[current].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(index)}>
          {option}
        </button>
      ))}
    </div>
  );
}