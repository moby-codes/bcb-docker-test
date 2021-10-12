import React from 'react'
import { useState, useEffect } from "react";
import Story from "./Story";
import Question from "./Question";
import {dummyQ} from '../dummyQ.js'
import fetchData from '../dbquestions.js'

export const QuizPage = ({currentQuiz, quizTitle, currentQuestion, setCurrentQuestion}) => {

  const [questions, setQuestions] = useState([dummyQ]);
  
  useEffect(() => {
    fetchData(currentQuiz).then(res => {
      setQuestions(res.data)
    })
  }, [] )

  return (
    <>
      <div className="title"> <h1> {quizTitle} </h1> </div>
 
      <Story currentQuestion={currentQuestion}
      questions={questions} />

      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        questions={questions}/>
    </>
  )
}

export default QuizPage;
