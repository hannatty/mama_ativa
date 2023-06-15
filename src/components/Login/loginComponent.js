import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "./login.css";

import AuthService from "../../services/authService";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-input" role="alert">
        Este campo é obrigatório!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-input" role="alert">
        Este não é um e-mail válido.
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          window.location.href = "/areadoadora"
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div id="wrap1">
        <div id="wrap2">
          <Form onSubmit={this.handleLogin} ref={c => { this.form = c; }}>
            <div className="shadow p-5 mb-5 bg-body rounded">
              <div className="form row g-3">
                <div className="container-loogo-mamativa">
                  <img src="./logo_mama_ativa.png" tagname="Testes" alt="Logo marca Mama Ativa" className="login-img-logo" />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">E-mail:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">Senha:</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn my-primary btn-block shadow-sm"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span className="px-2">Login</span>
                  </button>

                  <Link className="link recover-pwd" to="/">
                    Esqueceu a senha?
                  </Link>
                  <br></br>
                  <Link className="link" to="/cadastro">
                    CADASTRE-SE
                  </Link>
                  <br></br>
                </div>

                <Link className="link back" to="/">
                  Voltar
                </Link>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
