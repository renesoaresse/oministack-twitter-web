import React, { Component } from "react";

import logo from "../twitter.svg";
import "./Timeline.css";

export default class TimeLine extends Component {
  state = {
    newTweet: ""
  };

  handleNewTweet = e => {
    if (e.keyCode !== 13) return;

    const { newTweet: content } = this.state;
    const author = localStorage.getItem("@Twitter:username");

    console.log(content, author);

    this.setState({ newTweet: "" });
  };

  handleTextChange = e => {
    this.setState({ newTweet: e.target.value });
  };

  render() {
    const { newTweet } = this.state;

    return (
      <div className="timeline-wrapper">
        <img height={24} src={logo} alt="Twitter" />

        <form>
          <textarea
            value={newTweet}
            onChange={this.handleTextChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está pensando?"
          />
        </form>
      </div>
    );
  }
}
