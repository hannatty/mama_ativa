import "../ComoDoar/comoDoar.css";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import { useRef } from "react";
const CarouselComponent = () => {
  const carousel = useRef(null);

  const previousClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const nextClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <div className="div3"
    style={{marginTop : '90px'}}
    >
      <h2 className="donate-instructions">
        Coletando o leite de forma correta{" "}
      </h2>
      <div className="carousel-container">
        <div className="button" onClick={previousClick}>
          <img src={leftArrow} alt="" />
        </div>
        <div className="carousel" ref={carousel}>
          <div className="carousel-item">
            {/* <image src={passo1} alt="Ilustração Frasco de Vidro" className='imagePassos'/> */}
            <p className="steps-text">
              O frasco que armazenará o leite deve ser de vidro com tampa de
              plástico, como os de café solúvel. Antes de utilizá-lo,
              esterelize-o em água fervente por 15 minutos.
            </p>
          </div>

          <div className="carousel-item">
            {/* <image src={passo2} alt="Ilustração Mama" className='imagePassos'/> */}
            <p className="steps-text">
              A doadora deve estar de cabelos presos e idealmente máscara no
              rosto. Massageie as mamas em movimentos circulares para que o
              leite seja retirado de todas as regiões do peito. Inicie a coleta
              no frasco previamente esterelizado.
            </p>
          </div>
          <div className="carousel-item">
            {/* <image src={passo3} alt="Ilustração termômetro" className='imagePassos'/> */}
            <p className="steps-text">
              Após o fim da coleta, tampe o frasco, armazene-o no congelador e
              entre em contato com o banco de leite que desejar. O leite pode
              ficar armazenado por até 15 dias.
            </p>
          </div>
        </div>
        <div className="button" onClick={nextClick}>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
