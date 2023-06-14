import babyIcon from '../../images/baby_icon.png';
import breastIcon from '../../images/breast_icon.png';
import vaccineIcon from '../../images/vaccine_icon.png';
import freezeIcon from  '../../images/freeze_icon.png';
import { Link } from 'react-router-dom';
import "./styles.css";



export default function Mitos() {
  return (
 
    <div className="mitos_container">
      <h1>Doação sem Mitos</h1>
      <div className="mito_cards_container">
        <div className="mitos_card">
          <img src={babyIcon} alt="ícone" className='icon_config'/>
          <h2 className='card_title'>Doar não faz faltar</h2>
          <p> Quanto mais a mãe estimular o peito a produzir leite, mais ela o terá e não faltará para o bebê. </p>
        </div>
        <div className="mitos_card">
          <img src={breastIcon} alt="ícone" className='icon_config'/>
          <h2 className='card_title'>Tamanho não limita leite</h2>
          <p> A glândula produtora de leite, em nada é afetada  pelo tamanho ou formato da mama. </p>
        </div>
        <div className="mitos_card">
          <img src={vaccineIcon} alt="ícone" className='icon_config'/>
          <h2 className='card_title'>Tá liberado se vacinar</h2>
          <p> A mamãe pode tomar vacina e seguir amamentando seu bebê e doando seu leite normalmente. </p>
        </div>
        <div className="mitos_card">
          <img src={freezeIcon} alt="ícone" className='icon_config'/>
          <h2 className='card_title'>Congelou, Conservou!</h2>
          <p> O leite pode ficar por até 10 dias no congelador ou no freezer sem perder seus nutrientes. </p>
        </div>
      </div>
      <Link to='/areadoadora'>
          <button className="register-button">Saber mais</button>
      </Link>
    </div>
  );
}