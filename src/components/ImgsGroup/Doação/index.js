import './imgsGroup2.css';
import { Link } from 'react-router-dom';
import childPicture from "../../../images/fotoCrianca.jpg";


export default function ImgsGroup(){
  return(
    <div className='container3'>
      <div className='imgGroup'>
        <h2 className="picture-text">
          Sabe aquela roupa que tá novinha<br/> e não cabe mais na tua criança?<br/>
          Aquele brinquedo bonzinho <br/> que ela já nem olha?<br/><br/>
          <Link className="link_cadastro" to="/Cadastro">Cadastra ele no Mama Ativa!</Link>
          </h2>
        <img src={childPicture} alt='Mulher com bebê' className='img-config' id='childPicId'/> 
    </div>
   </div>

  );
}