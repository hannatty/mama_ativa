import "./comoDoar.css";
import ProfileMenu from "../../components/Layout/Menu/AreaDoadora";
import titleInfographic from '../../images/leitecaindo2.png';
import infographic from '../../images/infografico.png';

const ComoDoar = () => {
  return (
    <div className="general_container">
      <ProfileMenu />
      <div className="containerComoDoar">
        <div className="imgTitle">
          <div align="center">
            <h1 className="sub-title">QUER DOAR LEITE</h1>
            <h1 className="sub-title">MAS NÃO SABE COMO?</h1>
          </div>
          <div align="center" className="card-title"></div>
          <p>Confira aqui tudo o que você precisa saber para realizar sua doação!</p>
         
        </div>
       
        <div className="imgInfoGraphic">
        <img src={titleInfographic} alt="Quer saber como doar?" className="titleConfig" />
          <img src={infographic} alt="Infrográfico da doação" className="infographicConfig" />
        </div>
      </div>
    </div>
  );
};

export default ComoDoar;
