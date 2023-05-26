import "./styles.css";
import location_icon from "../../images/icon_location.svg";
import pump_icon from "../../images/icon_pump.svg";
import note_icon from "../../images/icon_note.svg";
import media_icon from "../../images/icon_media.svg";
import trofeu_icon from "../../images/icon_trofeu.svg";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

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
        <h2 style={{ paddingTop: "40px" }}>{props.item.img}</h2>
        <button className="button" style={{}}>
          {props.item.title}
        </button>
      </Paper>
    </div>
  );
}
