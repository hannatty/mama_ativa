import React, { useState } from "react"
import ProfileMenu from "../../../components/Layout/Menu/AreaDoadora"
import group from "../../../images/Group.svg"
import "./styles.css"
import location from "../../../images/marcador.png";
import hora from "../../../images/relogio-tres.png";
import phone from "../../../images/chamada-telefonica.png";
import verificar from "../../../images/verificar.png";
export default function Bank(props) {

    const bankList = [
        {
            id: 1,
            name: "Banco de Leite Humano Imip",
            location: "R. dos Coelhos, 300 - Boa Vista - Recife/PE",
            dia: "Segunda a Sexta",
            hora: "Manhã: de 07h às 11:55h Tarde: 13h às 17h",
            phone: "81-2122-4719",
            coleta: "conta com coleta domiciliar"
        }
    ]

    return (
        <div>

            <ProfileMenu />
            <div className="container">
                <div className="card-bank">
                    {bankList.map((e) =>
                        <div>
                            <div>
                                <h2>{e.name}</h2>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div className="card-location">
                                        <span>{e.location}</span>
                                    </div>
                                    <div>
                                        <img className="icon"
                                            src={location} />
                                    </div>
                                </div>
                                <div className="d-flex">
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
                                <div className="d-flex">
                                    <div className="card-infor">
                                        <span>Telefone: {e.phone}</span>
                                    </div>
                                    <div><img className="icon"
                                        src={phone} /> </div>
                                </div>
                                <div className="d-flex">
                                    <div className="card-infor">
                                        <span>{e.coleta}</span>
                                    </div>
                                    <div>
                                        <img className="icon"
                                            src={verificar} />
                                    </div>
                                </div>
                            </div>
                        </div>)}



                </div>
                <div>
                    <h2>aaaaa</h2>
                </div>
            </div>




        </div>
    )
}