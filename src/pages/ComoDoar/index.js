import "./comoDoar.css";
import saude from "../../images/icon1heart.png";
import producao from "../../images/icon2breast.png";
import remedios from "../../images/icon3drugs.png";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import ProfileMenu from "../../components/Layout/Menu/AreaDoadora";

const ComoDoar = () => {
  return (
    <div>
      <ProfileMenu />
      <div className="contComoDoar">
        <div className="divTituloComoDoar">
          <h1>O QUE PRECISO PARA SER DOADORA? </h1>
        </div>
        <div className="requisitos">
          <div>
            <img src={saude} alt="" className="imageRequisitos" />
            <span>Saúde</span>
            <p>
              Para doar leite materno,
              <br /> a lactante em questão precisa possuir boa saúde.
            </p>
          </div>
          <div>
            <img src={producao} alt="" className="imageRequisitos" />
            <span>Produção</span>
            <p>
              Produzir leite excedente, para que não comprometa a amamentação do
              seu bebê.
            </p>
          </div>
          <div>
            <img src={remedios} alt="" className="imageRequisitos" />
            <span>Remédios</span>
            <p>Não estar usando medicamentos que impeçam a doação.</p>
          </div>
        </div>
        
        <CarouselComponent />
      </div>
    </div>
  );
};

export default ComoDoar;
