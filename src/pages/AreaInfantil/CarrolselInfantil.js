import "./area_infantil.css";
import doubt_icon from "../../images/icon_doubt.svg";
import heart_icon from "../../images/icon_upload_heart.svg";
import box_icon from "../../images/icon_box_donation.svg";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function CarroselInfantil(props) {
  var items = [
    {
      img: <img src={doubt_icon} alt="ícone" className="imageCards" />,
      title: "O que posso doar?",
    },
    {
      img: <img src={heart_icon} alt="ícone" className="imageCards" />,
      title: "Cadastrar Doação",
    },
    {
      img: <img src={box_icon} alt="ícone" className="imageCards" />,
      title: "Doações Disponíves",
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
          backgroundColor: "#B2DECD",
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
            backgroundColor: "#0B6945",
            fontFamily: "Quicksand",
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
