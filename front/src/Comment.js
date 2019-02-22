import React, { Component } from "react";
import propTypes from "prop-types";
export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };

    this.onClick = this.onClick.bind(this);
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
          onClick = {this.onClick}>
          <span role="img" aria-label="vote for this comment">😱</span>
        </button>
        <span>{this.state.votes}</span>
        <div>{this.props.comment.text}</div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: propTypes.object.isRequired
};