import { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Principal from "../../../components/Layout/Menu/Principal";
import axios from "axios";
import "./styles.css";
import ComponentBanco from "./ComponentBanco";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Aflitos",
  "Afogados",
  "Boa Viagem",
  "Boa Vista",
  "Campo Grande",
  "Casa Amarela",
  "Espinheiro",
  "Graças",
  "Ilha do Leite",
  "Jardim São Paulo",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
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
    <div>
      <Principal />
      <div className="d-flex">
        <div className="form-location-list">
          <FormControl sx={{ m: 1, width: 280 }}>
            <InputLabel id="demo-multiple-chip-label">Bairro</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <button align="center" className="button-list">
          Nova Busca
        </button>
      </div>
      <div className="containerListaBanco">
        <p className="tituloLista">Listagem Completa</p>
        <div className="listaCarrossel" ref={carrosel}>
          {listaBanco.map((banco, index) => (
            <ComponentBanco banco={banco} />
          ))}
        </div>
        <div className="buttonListaBanco">
          <button onClick={next}>Proximo</button>
          <button onClick={previous}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
