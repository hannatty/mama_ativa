import React, { Component } from "react";
import "../../style.css";
import "./cadastro.css"
import MenuPrincipal from "../../components/Layout/Menu/Principal";
import RegisterComponent from "../../components/Register/registerComponent";

export default class Login extends Component {
    render() {
        return (
            <div class="cadastro">
                <MenuPrincipal />
                <div>
                    <RegisterComponent />
                </div>
            </div>
        );
    }
};
