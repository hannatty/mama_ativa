import './footer.css';
import { Link } from 'react-router-dom';
import faceIcon from '../../images/facebook.png';
import instagramIcon from '../../images/instagram.png';
import copyIcon from "../../images/copyright.png";


export default function Footer(){
  return(
    <footer className='footer-container'>
      <div className='footer-desktop'>
      <span> <img src={copyIcon} alt='copyright' id='copyright'/>2022 MAMA ATIVA</span>  
      <div>
        <Link className='link-footer' to="/">Política de Privacidade</Link>
        <Link className='link-footer' to="/contato">Contato</Link>
      </div> 
      <div>
        <Link to="/" className='config-icon'><img src={faceIcon} alt="logo facebook" className='media-icon'/></Link>
        <Link to="/" className='config-icon'><img src={instagramIcon} alt="logo instagram" className='media-icon'/></Link>
      </div>
      </div>
      
      <div className='footer-mobile'>
      <span> <img src={copyIcon} alt='copyright' id='copyright'/>2022 MAMA ATIVA</span>  
      <div>
        <Link to="/" className='config-icon'><img src={faceIcon} alt="logo facebook" className='media-icon'/></Link>
        <Link to="/" className='config-icon'><img src={instagramIcon} alt="logo instagram" className='media-icon'/></Link>
      </div>
      </div>
    </footer>

  );
}