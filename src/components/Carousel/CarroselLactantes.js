import "./styles.css";
import foto1 from "../../images/foto1.png"
import foto2 from "../../images/foto2.png";
import foto3 from "../../images/foto3.png";
import foto4 from "../../images/foto4.png";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { PropaneRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CarroselLactantes(props) {
  var items = [
    {
      img: <img src={foto1} alt="ícone"  />,
   
    },
    {
      img: <img src={foto2} alt="ícone"  />,
     
    },
    {
      img: <img src={foto3} alt="ícone"/>,
    
    },
    {
      img: <img src={foto4} alt="ícone" />,
     
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
          width: "45%",
          height: "28rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
         
        }}
      >
        <div style={{ paddingTop: "40px" 
          }}>{props.item.img}</div>
       
      </Paper>
    </div>
  );
}
