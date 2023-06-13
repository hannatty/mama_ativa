import React from "react"
import ProfileMenu from "../../../components/Layout/Menu/AreaDoadora"
import "./styles.css"
import location from "../../../images/marcador.png";
import hora from "../../../images/relogio-tres.png";
import phone from "../../../images/chamada-telefonica.png";
import verificar from "../../../images/verificar.png";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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
    'Aflitos',
    'Afogados',
    'Boa Viagem',
    'Boa Vista',
    'Campo Grande',
    'Casa Amarela',
    'Espinheiro',
    'Graças',
    'Ilha do Leite',
    'Jardim São Paulo',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
export default function Bank(props) {

    const bankList = [
        {
            id: 1,
            name: "BANCO DE LEITE HUMANO E INCENTIVO AO ALEITAMENTO MATERNO DO IMIP",
            location: "R. dos Coelhos, 300 - Boa Vista - Recife/PE",
            dia: "Segunda a Sexta",
            hora: "Manhã: de 07h às 11:55h Tarde: 13h às 17h",
            phone: "81-2122-4719",
            coleta: "conta com coleta domiciliar"
        }
    ]

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>

            <ProfileMenu />
            <div className="container" >
                <div>
                    {bankList.map((e) =>
                        <div>
                            <div className="card-bank">
                                <div>
                                    <h2 className="bank-name">{e.name}</h2>
                                </div>
                                <div align="center" className="d-flex">
                                    <div className="card-location">
                                        <span>{e.location}</span>
                                    </div>
                                    <div align="center">
                                        <img className="icon"
                                            src={location} />
                                    </div>
                                </div>
                                <div align="center" className="d-flex">
                                    <div className="card-infor">
                                        <span>{e.dia}</span>
                                        <br />
                                        <span>{e.hora}</span>
                                    </div>
                                    <div>
                                        <img className="icon"
                                            src={hora} />
                                    </div>
                                </div>
                                <div align="center" className="d-flex">
                                    <div className="card-infor">
                                        <span>Telefone: {e.phone}</span>
                                    </div>
                                    <div><img className="icon"
                                        src={phone} /> </div>
                                </div>
                                <div align="center" className="d-flex">
                                    <div className="card-infor">
                                        <span>{e.coleta}</span>
                                    </div>
                                    <div>
                                        <img className="icon"
                                            src={verificar} />
                                    </div>
                                </div>
                                <div className="form-location">
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
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
                                    <button align="center" className="button-bairro">Nova Busca</button>
                                </div>
                            </div>
                        </div>)}


                </div>


                <div align="center" className="litros-bank">
                    <h1 className="litros">14,5L</h1>
                    <h3 className="description-litros">Esse é o estoque do banco de leite selecionado.
                        Essa quantidade é suficiente para apenas 4 dias de suporteà recém-nascidos hospitalizados.</h3>
                </div>
            </div>




        </div>
    )
}