import "./comoDoar.css";
import ProfileMenu from "../../components/Layout/Menu/AreaDoadora";
import titleInfographic from '../../images/tituloInfografico.png';
import infographic from '../../images/infografico.png';

const ComoDoar = () => {
  return (
    <div className="general_container">
      <ProfileMenu />
      <div className="containerComoDoar">
        <div className="imgTitle">
          <img src={titleInfographic} alt="Quer saber como doar?" className="titleConfig"/>
        </div>
        <div className="imgInfoGraphic">
          <img src={infographic} alt="Infrográfico da doação" className="infographicConfig"/>
        </div>
      </div>
    </div>
  );
};

export default ComoDoar;
