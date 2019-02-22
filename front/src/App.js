import React, { Component } from "react";

import "./App.css";

import Comment from "./Comment.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    this.reloadData();
  }

  reloadData(){
    fetch("/api/getMessage")
      .then(res => res.json())
      .then(data => {
        console.log("got data!", data);
        this.setState({
          comments: data
        });
      });
  }

  renderComments() {
    return this.state.comments.map((c, i) => (
      <Comment key={i++} comment={c} />
    ));
  }

  render() {
    console.log("Rendering");
    return (
      <div className="App">
        <h1>Comments!</h1>

        {this.renderComments()}

        <form action="/api/createMessage" method="POST">
          <input type="text" name="text" />
        </form>
        <div>Working?!</div>
        <div>Made by Neil</div>
      </div>
    );
  }
}

export default App;
