import {Link} from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import "./header.css";

const Header1 = () => {
  return (
    <header>
      <Link className="logo1" to="/">
        <img src={logo1} alt="Logo Mama Ativa" className="logo"/>
      </Link>
      <Link className="menu-options" to='/comodoar' >Quem Somos</Link>
      <Link className="menu-options" to='/' >Parcerias </Link>
      <Link className="menu-options"  to='/contato'>Contato </Link>
      <Link to='/'>
        <button className="register-button" >Entrar</button>
      </Link> 
    </header>
  );
};

export default Header1;
