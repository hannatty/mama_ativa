import "./styles.css";
import foto1 from "../../images/foto1.png"
import foto2 from "../../images/foto2.png";
import foto3 from "../../images/foto3.png";
import foto4 from "../../images/foto4.png";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";


export default function CarroselLactantes(props) {
  var items = [
    {
      img: <img src={foto1} alt="ícone" className="imagemaes" />,
   
    },
    {
      img: <img src={foto2} alt="ícone" className="imagemaes" />,
     
    },
    {
      img: <img src={foto3} alt="ícone" className="imagemaes"/>,
    
    },
    {
      img: <img src={foto4} alt="ícone" className="imagemaes"/>,
     
    },
  ];

  

  return (
    <Carousel className="carrosel">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="carrosel_mobile">
      <Paper
      className="paper"
        style={{
          backgroundColor: "#C7CBF3",
          width: "50%",
          height: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
       
         
        }}
      >
        <div style={{ paddingTop: "30px" 
          }}>{props.item.img}</div>
       
      </Paper>
    </div>
  );
}
