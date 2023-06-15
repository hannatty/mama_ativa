import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Buffer } from 'buffer';
import AuthService from "../../services/authService";
import "./profile.css"

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Link to={this.state.redirect} />
    };

    const { currentUser } = this.state;

    return (
      <div className="div-perfil">
        {(this.state.userReady) ?
          <div>
            <div className="div-card-avatar">
              <div className="card-avatar">
                <div className="radius-avatar">
                  <img src={Buffer.from(currentUser.profile_photo.data).toString("ascii")} alt="Foto do perfil" className="profile-img-card" />
                </div>
              </div>
              <h3>
                <strong>Profile: {currentUser.username[0].toUpperCase() + currentUser.username.substring(1)}</strong>
              </h3>
            </div>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
            <p>
              <strong>Phone:</strong>{" "}
              {currentUser.phone}
            </p>
            <p>
              <strong>Birth date:</strong>{" "}
              {currentUser.birth_date}
            </p>
            <p>
              <strong>Created at:</strong>{" "}
              {currentUser.createdAt}
            </p>
            <p>
              <strong>Updated at:</strong>{" "}
              {currentUser.updatedAt}
            </p>
            <strong>Address:</strong>
            <ul>
              <li><strong>CEP: </strong> {currentUser.address.cep}</li>
              <li><strong>Street: </strong> {currentUser.address.street}</li>
              <li><strong>District: </strong> {currentUser.address.district}</li>
              <li><strong>City: </strong> {currentUser.address.city}</li>
              <li><strong>State: </strong> {currentUser.address.state}</li>
            </ul>
          </div> : null}
      </div>
    );
  }
}
