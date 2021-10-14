import React from 'react'
import { Container } from "react-bootstrap";

const Story = ({currentQuestion, questions, showScore}) => {

  return (
    <b>
      {showScore ? (
      <div className="score-section">
      <h1 class="custom-font-2">Well Done!!!</h1>
      </div>
      ) : (
      <>
        <div className="story-card">
        <Container>
          <div class="card bg-warning">
            <div class="card-body">
              <h4 class="custom-font-2 card-title">{questions[currentQuestion].storyTitle}</h4>
              <h6 class="custom-font-2 card-subtitle mb-2">You are learning about: {questions[currentQuestion].storySubtitle}</h6>
              {questions[currentQuestion].storyText.map((element) => (
                <p class="custom-font-2 card-text">{element.text}</p>
              ))}
          </div>
        </div>
        </Container>
        </div>
     </>) }
    </b>
  )
}
export default Story;
