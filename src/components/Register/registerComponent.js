import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/authService";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-input" >
        Este campo é obrigatório!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-input" >
        Este não é um e-mail válido.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 100) {
    return (
      <div className="invalid-input" >
        O nome de usuário deve ter entre 3 e 100 caracteres.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 8 || value.length > 16) {
    return (
      <div className="invalid-input" >
        A senha deve ter entre 8 e 16 caracteres.
      </div>
    );
  }
};

const isEqual = (value, props, components) => {
  const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
  const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;

  if (bothChanged && bothUsed && components.password[0].value !== components.confirm[0].value) {
    return (
      <div className="invalid-input" >
        As senhas não são iguais!
      </div>
    )
  }
};

const clickPhotoProfile = () => {
  const fileUpload = document.querySelector(".file_upload");

  fileUpload.click()
};

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFileImg = this.onChangeFileImg.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeCEP = this.onChangeCEP.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onBlurCheckCEP = this.onBlurCheckCEP.bind(this);

    this.state = {
      fileImg: "",
      profile_photo: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      cep: "",
      city: "",
      state: "",
      street: "",
      district: "",
      birth_date: "",
      successful: false,
      message: ""
    };
  }

  onChangeFileImg(e) {
    var reader = new FileReader();
    var self = this;

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function (e) {
      self.setState({
        profile_photo: e.target.result
      });
    };

    this.setState({
      fileImg: URL.createObjectURL(e.target.files[0])
    });
  }

  onBlurCheckCEP(e) {
    const cepValue = e.target.value.replace(/\D/g, '');
    let self = this;

    getCEP();

    async function getCEP() {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);

        self.setState({ city: response.data.localidade });
        self.setState({ state: response.data.uf });
        self.setState({ street: response.data.logradouro });
        self.setState({ district: response.data.bairro });
      } catch {
        self.setState({ city: "" });
        self.setState({ state: "" });
        self.setState({ street: "" });
        self.setState({ district: "" });
      }
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
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

  onChangePhone(e) {
    this.setState({
      phone: e.target.value.replace(/\D/g, "")
    });
  }

  onChangeBirthDate(e) {
    this.setState({
      birth_date: e.target.value
    });
  }

  onChangeCEP(e) {
    this.setState({
      cep: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeStreet(e) {
    this.setState({
      street: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.phone,
        this.state.birth_date,
        this.state.profile_photo,
        this.state.cep,
        this.state.city,
        this.state.state,
        this.state.street,
        this.state.district
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid register">
          <Form onSubmit={this.handleRegister} ref={c => { this.form = c }} >
            {!this.state.successful && (
              <div className="form row g-3 shadow p-5 mb-5 bg-body rounded">
                <div className="avatar-wrapper shadow">
                  <div className="avatar-add-photo">
                    <img src="./cam_profile.png" alt="Adicionar Foto do Perfil" id="img-add-photo-profile" aria-hidden="true" />
                    <p>ADICIONAR</p>
                    <p>FOTO</p>
                  </div>
                  <img className="profile-pic" src={this.state.fileImg} alt="" aria-hidden="true" />
                  <div className="upload-button" onClick={clickPhotoProfile}></div>
                  <input
                    type="file"
                    className="form-control file_upload"
                    accept=".jpg, .jpeg, .png"
                    name="profile_photo"
                    onChange={this.onChangeFileImg}
                    multiple
                    hidden
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">Nome Completo:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    minLength="3"
                    maxLength="100"
                    placeholder="Digite seu nome completo!"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">E-mail:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="nome@email.com.br"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="birth_date" className="form-label">Data de Nascimento:</label>
                  <Input
                    type="date"
                    className="form-control"
                    name="birth_date"
                    value={this.state.birth_date}
                    onChange={this.onChangeBirthDate}
                    validations={[required]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Número para Contato:</label>
                  <Input
                    type="text"
                    className="form-control"
                    maxLength="15"
                    placeholder="(__) _____-____"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    validations={[required]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="password" className="form-label" id="password">Senha:</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    minLength="8"
                    maxLength="16"
                    placeholder="Digite sua senha!"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword, isEqual]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="confirm" className="form-label">Confirmar Senha:</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="confirm"
                    minLength="8"
                    maxLength="16"
                    placeholder="Confirme a senha!"
                    validations={[required, isEqual]}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="cep" className="form-label">CEP:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="cep"
                    maxLength="9"
                    value={this.state.cep}
                    onBlur={this.onBlurCheckCEP}
                    onChange={this.onChangeCEP}
                    validations={[required]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">Cidade:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChangeCity}
                    validations={[required]}
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="state" className="form-label">Estado:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="state"
                    value={this.state.state}
                    onChange={this.onChangeState}
                    validations={[required]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="street" className="form-label">Rua:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="street"
                    value={this.state.street}
                    onChange={this.onChangeStreet}
                    validations={[required]}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="district" className="form-label">Bairro:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="district"
                    value={this.state.district}
                    onChange={this.onChangeDistrict}
                    validations={[required]}
                  />
                </div>

                <div className="col-12 checkbox">
                  <div className="checkbox-input">
                    <Input
                      type="checkbox"
                      name="cbox-doar-leite"
                      id="ipt_cbox"
                    />
                    <label className="form-label">Desejo doar leite materno</label>
                  </div>

                  <div className="checkbox-input">
                    <Input
                      type="checkbox"
                      name="cbox-doar-produtos"
                      id="ipt_cbox"
                    />
                    <label className="form-label">Desejo doar e/ou receber produtos infantis</label>
                  </div>

                  <p>* Se desejar, pode marcar ambos ok?</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn my-primary btn-block shadow-sm">
                    Cadastrar
                  </button>

                  {this.state.message && (
                    <div className="form-group">
                      <div
                        className={
                          this.state.successful
                            ? "alert alert-success"
                            : "invalid-input"
                        }
                      >
                        {this.state.message}
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <Link className="link back" to="/">
                    Voltar
                  </Link>
                </div>

              </div>
            )}

            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

          </Form>
        </div>
      </div>
    );
  }
}
