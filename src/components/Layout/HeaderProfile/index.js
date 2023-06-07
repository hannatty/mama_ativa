import * as React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import "./headerProfile.css";
import UserMenu from "../../components/UserMenu";

const HeaderProfile = () => {
  return (
    <header lassName="header2">
      <Link className="logo1" to="/">
        <img src={logo1} alt="Logo Mama Ativa" className="logo" />
      </Link>
      <h1 className="menu-options"> Perfil do Usuário </h1>
      <UserMenu />
    </header>
  );
};

export default HeaderProfile;

