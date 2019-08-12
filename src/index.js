import React from "react";
import ReactDOM from "react-dom";
import "./Quiz.css"
import Quiz from "./Quiz"
class App extends React.Component {
  state = {
    // move these questions to an external json file
    questions: [
      {
        id: 1,
        text: "What is 2 + 2?",
        type: "radio",
        answer: "",
        options: [{ id: 1, value: 1 }, {id: 2, value: 2}, {id: 3, value: 3}, {id: 4, value: 4 }]
      },
      {
        id: 2,
        text: "What is 3 + 9?",
        type: "radio",
        answer: "",
        options: [{ id: 5, value: 12 }, {id: 6, value: 13}, {id: 7, value: 14}, {id: 8, value: 15 }]
      },
      {
        id: 3,
        text: "What is 200 + 1?",
        type: "radio",
        answer: "",
        options: [{ id: 9, value: 200 }, {id: 10, value: 201 }, {id: 11, value: 202}, {id: 12, value: 203 }]
      }
    ],
  };

  render() {
    return (
      <Quiz questions={this.state.questions} />
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
