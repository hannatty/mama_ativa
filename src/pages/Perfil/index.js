import React, { Component } from "react";
import HeaderProfile from "../../components/Layout/HeaderProfile";
import ProfileComponent from "../../components/Profile/profileComponent";

export default class Perfil extends Component {
    render() {
        return (
            <div>
                <HeaderProfile />
                <div>
                    <ProfileComponent />
                </div>
            </div>
        );
    }
};
