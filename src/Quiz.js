import React from "react";
import Question from "./Question";

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    questions: this.props.questions
  };

  isFirstQuestion = () => {
    return this.state.currentQuestion == 0;
  };

  isLastQuestion = () => {
    return this.state.currentQuestion == this.state.questions.length - 1;
  };

  onNextClicked = () => {
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
  };

  onPrevClicked = () => {
    if (this.state.currentQuestion > 0) {
      this.setState({ currentQuestion: this.state.currentQuestion - 1 });
    }
  };

  onOptionClicked = event => {
    // Set user's answer
    var question = this.state.questions[this.state.currentQuestion];
    question.answer = event.target.value;

    // Update the questions array
    var questions = this.state.questions;
    questions[this.state.currentQuestion] = question;
    this.setState({ questions: questions });
  };

  getNextQuestion() {
    var question = this.state.questions[this.state.currentQuestion];
    return (
      <Question
        question={question}
        handleOptionClicked={this.onOptionClicked}
      />
    );
  }

  render() {
    return (
      <div id="quiz">
        <div className="question">
          <div className="question-contents">{this.getNextQuestion()}</div>
          <div className="buttons d-flex justify-content-center">
          {!this.isFirstQuestion() && (
            <button
              className="btn btn-primary float-left"
              onClick={this.onPrevClicked}
            >
              Prev
            </button>
          )}
          {!this.isLastQuestion() && (
            <button
              className="btn btn-primary float-right"
              onClick={this.onNextClicked}
            >
              Next
            </button>
          )}
        </div>
        </div>

      </div>
    );
  }
}

export default Quiz;
