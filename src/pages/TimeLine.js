import React, { Component } from "react";
import api from "../services/api";
import Tweet from "../components/Tweet";

import logo from "../twitter.svg";
import "./Timeline.css";

export default class TimeLine extends Component {
  state = {
    newTweet: "",
    tweets: []
  };

  async componentDidMount() {
    const { data } = await api.get("tweets");

    this.setState({ tweets: data });
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const { newTweet: content } = this.state;
    const author = localStorage.getItem("@Twitter:username");

    await api.post("tweets", { author, content });

    this.setState({ newTweet: "" });
  };

  handleTextChange = e => {
    this.setState({ newTweet: e.target.value });
  };

  render() {
    const { newTweet, tweets } = this.state;

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
        <ul className="tweet-list">
          {tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    );
  }
}
