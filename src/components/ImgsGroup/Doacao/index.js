import './styles.css';
import girl_pic from '../../../images/1girl_pic.png';
import boy_pic from '../../../images/2boy_pic.png';

export default function Doacao(){
  return(
    <div className='doacao_container'>
      <div className='images_container'>
        <img src={girl_pic} alt='menina receptora de leite' className='img_style' />
        <h1 className='sentence_text'>Para você, é uma doação. Para as famílias de Sofia e Rafael foi a esperança de vê-los crescer.</h1>
        <img src={boy_pic} alt='menino receptor de leite' className='img_style'/>
      </div>
      <span>Fonte: Ministério da Saúde</span>
    </div>
  )
}