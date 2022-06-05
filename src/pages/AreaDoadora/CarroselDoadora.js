import "./areaDoadora.css";
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
    },
    {
      img: <img src={location_icon} alt="ícone" className="imageCards" />,
      title: "Bancos de Leite",
    },
    {
      img: <img src={note_icon} alt="ícone" className="imageCards" />,
      title: "Minhas Doações",
    },
    {
      img: <img src={trofeu_icon} alt="ícone" className="imageCards" />,
      title: "Minhas Conquistas",
    },
    {
      img: <img src={media_icon} alt="ícone" className="imageCards" />,
      title: "Mama Mídia",
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
        <h2 style={{ paddingTop: "40px" }}>{props.item.img}</h2>
        <Button
          className="CheckButton"
          style={{
            backgroundColor: "#9098E0",
            fontFamily: 'Quicksand',
            fontSize: "1.5rem",
            color: "#FFF",
            width: "100%",
            height: "4rem",
          }}
        >
          {props.item.title}
        </Button>
      </Paper>
    </div>
  );
}
