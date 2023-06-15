import React, { useState, useEffect,useRef } from "react";
import { useTheme } from "@mui/material/styles";
import direito from "../../../images/angulo-direito.png"
import esquerdo from "../../../images/angulo-esquerdo.png"
import Principal from "../../../components/Layout/Menu/Principal";
import axios from "axios";
import "./styles.css";
import ComponentBanco from "./ComponentBanco";


export default function ListBank() {
  const [listaBanco, setListaBanco] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-mamativa.azurewebsites.net/api/banksmilk")
      .then((res) => {
        setListaBanco(res.data);
      });
  }, []);
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const carrosel = useRef(null);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  console.log(carrosel);

  const next = (e) => {
    e.preventDefault();
    carrosel.current.scrollTop += carrosel.current.offsetHeight;
  };

  const previous = (e) => {
    e.preventDefault();
    carrosel.current.scrollTop -= carrosel.current.offsetHeight;
  };
  return (
    <div className="containerLista">
      <Principal />
      
      <div className="containerListaBanco">
        <p className="tituloLista">Listagem Completa</p>
        <div className="listaCarrossel" ref={carrosel}>
          {listaBanco.map((banco, index) => (
            <ComponentBanco banco={banco} />
          ))}
        </div>
        <div className="buttonListaBanco">
          <button   className=" d-flex button-list" onClick={previous}> <img alt="botão esquerdo" src={esquerdo}></img>Anterior</button>
          <button  className=" d-flex button-list" onClick={next}>Proximo <img alt="botão direito" src={direito}></img></button>
        </div>
      </div>
    </div>
  );
}