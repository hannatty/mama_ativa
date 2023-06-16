import "./styles.css"
import ProfileMenu from "../../components/Layout/Menu/AreaDoadora"
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import card5 from '../../images/card5.png'
import card6 from '../../images/card6.png'
import downloadIcon from '../../images/download_icon.png'


export default function MamaMidia() {
  return (
    <>
    <ProfileMenu />
    <div className="mm_container">
      <div className="title_section">
        <h1>Mama Mídia</h1>
        <h3>Olha quanta coisa legal disponível para download! <br /> Que tal baixar e nos ajuda a aumentar essa corrente?</h3>
      </div>
      <div class="divider"></div>
      <div className="cards_section">
        <div className="single_card">
          <img src={card1} alt="passo 1" className="card_config"/>
          <a href={card1} download>
            <button className="meuBotao">Download <img  className="iconfig" src={downloadIcon} alt="download icon"/></button>
          </a>
        </div>
        <div className="single_card">
          <img src={card2} alt="passo 1" className="card_config"/>
          <a href={card2} download>
            <button className="meuBotao">Download <img  className="iconfig" src={downloadIcon} alt="download icon"/></button>
          </a>
        </div>
        <div className="single_card">
          <img src={card3} alt="passo 1" className="card_config"/>
          <a href={card3} download>
            <button className="meuBotao">Download <img  className="iconfig" src={downloadIcon} alt="download icon"/></button>
          </a>
        </div>
        <div className="single_card">
          <img src={card4} alt="passo 1" className="card_config"/>
          <a href={card4} download>
            <button className="meuBotao">Download <img  className="iconfig" src={downloadIcon} alt="download icon"/></button>
          </a>
        </div>
        <div className="single_card">
          <img src={card5} alt="passo 1" className="card_config"/>
          <a href={card5} download>
            <button className="meuBotao">Download <img  className="iconfig" src={downloadIcon} alt="download icon"/></button>
          </a>
        </div>
        <div className="single_card">
          <img src={card6} alt="passo 1" className="card_config"/>
          <a href={card6} download>
            <button className="meuBotao">Download <img  className="iconfig" src={downloadIcon} alt="download icon"/></button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}