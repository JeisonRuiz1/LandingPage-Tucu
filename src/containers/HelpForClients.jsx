import React from "react";
import ButtonComp from "../components/ButtonComp";
import TypeClient from "../components/TypeClient";
import './styles/HelpForClients.scss';


const HelpForClients = ({tittle, textButton}) => {
    return (
        <div className="container">
            <div className="container-title">
                <h1>{tittle}</h1>
            </div>
            <div className="container-targets">
                <TypeClient title={"Start-Ups de domicilios"} URLImage="https://play-lh.googleusercontent.com/vRLWGhlYqVLxi6OCaFp2TVoma_RxvVpSojLMdymje2JSfKoK7ZJqNsyM_SjMVGkzB6w"/>
                <TypeClient title={"Resaurantes"} URLImage="https://play-lh.googleusercontent.com/vRLWGhlYqVLxi6OCaFp2TVoma_RxvVpSojLMdymje2JSfKoK7ZJqNsyM_SjMVGkzB6w"/>
                <TypeClient title={"Última milla"} URLImage="https://play-lh.googleusercontent.com/vRLWGhlYqVLxi6OCaFp2TVoma_RxvVpSojLMdymje2JSfKoK7ZJqNsyM_SjMVGkzB6w"/>
                <TypeClient title={"Bodegas ocultas"} URLImage="https://play-lh.googleusercontent.com/vRLWGhlYqVLxi6OCaFp2TVoma_RxvVpSojLMdymje2JSfKoK7ZJqNsyM_SjMVGkzB6w"/>
            </div>
            <div className="container-button">
                <ButtonComp textButton={textButton}/>
            </div>
        </div >
    )
}

export default HelpForClients;