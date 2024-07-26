import { useState } from "react";
import Answers from "./Answers";
import Timer from "./Timer";
import QUESTIONS from "../questions.js";


const Question = ({ index, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null
  });

  let timer = 10000;

  if(answer.selectedAnswer) {
    timer = 1000;
  }

  if(answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: QUESTIONS[index].answers[0] === answer
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: null
      })

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);

    }, 1000);
  }

  let answerState = "";

  if(answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return(
    <div id="question">
      <div id='question'>
        <Timer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  )
}

export default Question;