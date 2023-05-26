import React, { Component } from "react";
import "../../style.css";
import "./index.css";
import Header1 from "../../components/Header1";
import RegisterComponent from "../../components/Register/RegisterComponent";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <div>
          <RegisterComponent />
        </div>
      </div>
    );
  }
}
