import "./erro.css";
import errorImg from "../../images/404.png";
import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div className="container-erro">
      <img src={errorImg} alt="erro 404" id="erro-img-config" />
      <h2 id="erro-msg">Huuum... A página que você digitou não existe.</h2>
      <Link to={"/"}>Retornar para a página principal</Link>
    </div>
  );
}
