import React, { Component } from "react";

import logo from "../twitter.svg";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <img src={logo} alt="Twitter" />
        <form>
          <input placeholder="Nome de usuário" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
