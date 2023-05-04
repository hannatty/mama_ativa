import ProfileMenu from "../../components/Layout/Menu/AreaDoadora";
import CarroselDoadora from "../../components/Carousel/CarroselDoadora";
import "./areaDoadora.css";

const AreaDoadora = () => {
  return (
    <div className="areaDoadora">
      <ProfileMenu/>
      <CarroselDoadora />
    </div>
  );
};

export default AreaDoadora;
