import "../../style.css";
import { Link } from "react-router-dom";
import banner from "../../images/banner.svg";
import ImgsGroup from "../../components/ImgsGroup/Lactantes";
import Principal from "../../components/Layout/Menu/Principal";
import CarroselLactantes from "../../components/Carousel/CarroselLactantes";
import Mitos from "../../components/Mitos";
import Depoimento from "../../components/Depoimento";
import Doacao from "../../components/ImgsGroup/Doacao";
import Footer from "../../components/Layout/Footer";




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
        <Mitos />
      </div>
      <div>
        <Doacao />
      </div>
   
    </>
  );
};

export default Home;
