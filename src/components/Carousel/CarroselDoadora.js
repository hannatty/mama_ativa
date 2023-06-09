import "./styles.css";
import location_icon from "../../images/icon_location.svg";
import pump_icon from "../../images/icon_pump.svg";
import note_icon from "../../images/icon_note.svg";
import media_icon from "../../images/icon_media.svg";
import trofeu_icon from "../../images/icon_trofeu.svg";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { PropaneRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CarroselDoadora(props) {
  var items = [
    {
      img: <img src={pump_icon} alt="ícone" className="imageCards" />,
      title: "Como Doar",
      src: <button className="button-item"><Link className="button-item"to='/comodoar'>Como Doar</Link></button>
    },
    {
      img: <img src={location_icon} alt="ícone" className="imageCards" />,
      title: "Bancos de Leite",
      src: <button className="button-item"><Link className="button-item"to='/banco'>Bancos de Leite</Link></button>
    },
    {
      img: <img src={note_icon} alt="ícone" className="imageCards" />,
      title: "Minhas Doações",
      src: <button className="button-item"><Link className="button-item"to='/minhasdoacoes'>Minhas Doações</Link></button>
    },
    {
      img: <img src={trofeu_icon} alt="ícone" className="imageCards" />,
      title: "Minhas Conquistas",
      src: <button className="button-item"><Link className="button-item"to='/'>Minhas Conquistas</Link></button>
    },
    {
      img: <img src={media_icon} alt="ícone" className="imageCards" />,
      title: "Mama Mídia",
      src: <button className="button-item"><Link className="button-item"to='/'>Mama Mídia</Link></button>
    },
  ];

  

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="carrosel_position">
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
          marginTop: "120px",
        }}
      >
        <h2 style={{ paddingTop: "40px" ,
          }}>{props.item.img}</h2>
        <button
          className="button"
          style={{
           
          }}
         
        >
          {props.item.src}
        </button>
      </Paper>
    </div>
  );
}
