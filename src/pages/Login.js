import React, { Component } from "react";

import logo from "../twitter.svg";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="login-wrapper">
        <img src={logo} alt="Twitter" />
        <form>
          <input
            value={username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
