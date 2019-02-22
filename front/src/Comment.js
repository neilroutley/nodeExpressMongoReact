import React, { Component } from "react";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };
  }

  onClick(){
    this.setState({
      votes: this.state.votes+1
    });
  }

  render() {
    return (
      <div className="Comment">
        <button className="btn btn-info"
          onClick = {this.onClick.bind(this)}>
          <span role="img" aria-label="vote for this comment">😱</span>
        </button>
        <span>{this.state.votes}</span>
        <div>{this.props.comment.text}</div>
      </div>
    );
  }
}
