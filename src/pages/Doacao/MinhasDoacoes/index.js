import Title from "./Title";
import TableDonation from "./TableDonation";
import ProfileMenu from "../../../components/Layout/Menu/AreaDoadora";
import "./styles.css"

const MinhasDoacoes = () => {
  return (
    <div className="areaDoadora">
      <ProfileMenu />
      <Title />
      <TableDonation />
    </div>
  );
};

export default MinhasDoacoes;
