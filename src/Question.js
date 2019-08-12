import React from "react";
import "./Question.css";
class Question extends React.Component {
  render() {
    return (
      <div>
        <div className="text">{this.props.question.text}</div>
        <div className="options">
          {this.props.question.options.map(op => {
            return (
              <label key={op.id}>
                <input
                  onClick={this.props.handleOptionClicked}
                  name={this.props.question.id}
                  type={this.props.question.type}
                  value={op.value}
                  defaultChecked={op.value == this.props.question.answer}
                />
                {op.value}
              </label>
            );
          })}
        </div>
      </div>
    );
  }

};

export default Question;
