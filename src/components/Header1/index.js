import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import "./index.css";

export default class Header1 extends Component {
  render() {
    return (
      <header>
        <Link className="logo1" to="/">
          <img src={logo1} alt="Logo Mama Ativa" className="logo" />
        </Link>
        <Link className="menu-options" to="/quemsomos">
          Quem Somos
        </Link>
        <Link className="menu-options" to="/">
          Parcerias{" "}
        </Link>
        <Link className="menu-options" to="/contato">
          Contato{" "}
        </Link>
        <Link to="/login">
          <button className="register-button">Entrar</button>
        </Link>
      </header>
    );
  }
}
