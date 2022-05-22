import {Link } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import "./header.css";

const Header1 = () => {
  return (
    <header>
      <Link className="logo1" to="/">
        <img src={logo1} alt="Logo Mama Ativa" className="logo"/>
      </Link>
      <Link className="menu-options" >Quem Somos</Link>
      <Link className="menu-options" >Parcerias </Link>
      <Link className="menu-options" >Contato </Link>
      <Link>
        <button className="register-button" to="">Entrar</button>
      </Link> 
    </header>
  );
};

export default Header1;
