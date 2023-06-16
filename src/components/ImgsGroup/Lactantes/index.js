import "./styles.css";
import { Link } from "react-router-dom";
import foto1 from "../../../images/foto1.png";
import foto2 from "../../../images/foto2.png";
import foto3 from "../../../images/foto3.png";
import foto4 from "../../../images/foto4.png";
import colagem from "../../../images/colagem.jpg";
export default function ImgsGroup() {
  return (

    <div className="container1">
      <h2 className="subtitlConfig" id="tituloAmamentando"> Está amamentando?</h2>
      <h3>Que tal doar um pouquinho do seu leite e se juntar a esse time?</h3>
      <Link className="link_cadastro" to={"/cadastro"}>
        Cadastre-se!
      </Link>
      <div className="imgGroup">
        <img src={foto4} alt="Mulher com bebê" className="img-config" />
        <img src={foto2} alt="Mulher com bebê" className="img-config" />
        <img src={foto1} alt="Mulher com bebê" className="img-config" />
        <img src={foto3} alt="Mulher com bebê" className="img-config" />
      </div>
      <div>
        <img className="imgGroupmobile" src={colagem} alt="mobile"></img>
      </div>

    </div>


  );
}
