import "../../style.css";
import { Link } from "react-router-dom";
import banner from "../../images/banner.svg";
import ImgsGroup from "../../components/ImgsGroup/Lactantes";
import ImgsGroup2 from "../../components/ImgsGroup/Doação";
import Principal from "../../components/Layout/Menu/Principal";
import CarroselLactantes from "../../components/Carousel/CarroselLactantes";




const Home = () => {
  return (
    <>
      <Principal />
      <Link className='banner' to='/'>
        <img src={banner} alt='Banner Mama Ativa' className='bannerprincipal' />
      </Link>
      <div className="container2">
        <h2 className='info-home'>Aqui tem lugar para todo mundo <br /> que se preocupa com o próximo!</h2>
      </div>
      <div>
        <ImgsGroup />
      </div>
      <div>
      <CarroselLactantes/>
      </div>
      <div>
        <br/>
        <h2 className='info-home'>Aqui também tem lugar para<br /> quem entende a importância <br /> de um consumo consciente.</h2>
      </div>
      <div>
        <ImgsGroup2 />
      </div>

    </>
  );
};

export default Home;
