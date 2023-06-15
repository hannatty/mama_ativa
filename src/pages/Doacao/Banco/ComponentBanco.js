import { Home } from "@mui/icons-material";
import "./styles.css";

const ComponentBanco = ({ banco }) => {
  return (
    <div className="containerComponentListaBanco" key={banco.id}>
      <p>
        {banco?.type} {banco.name}
      </p>
      <p>{banco.location_complete}</p>
      {banco.home_collect && <p>Conta com coleta domiciliar</p>}
    </div>
  );
};

export default ComponentBanco;