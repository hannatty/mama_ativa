import { Home } from "@mui/icons-material";
import "./styles.css";
import location from "../../../images/marcador.png";
import verificar from "../../../images/verificar.png";
const ComponentBanco = ({ banco }) => {
    return (
        <div className="containerComponentListaBanco" key={banco.id}>
            <span className="bank-name-list" >

                {banco?.type} {banco.name}
            </span>
            <span className="d-flex" style={{marginBottom:"30px"}}>   <img src={location} className="bank-location" alt="localização"></img>{banco.location_complete}</span>
            {banco.home_collect && <span className="d-flex" style={{fontWeight:"bold", marginBottom:"30px"}}>  <img src={verificar} className="bank-verificar" alt="verificar"></img>Conta com coleta domiciliar</span>}
        </div>
    );
};

export default ComponentBanco;