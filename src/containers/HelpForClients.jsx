import React from "react";
import ButtonComp from "../components/ButtonComp";
import TypeClient from "../components/TypeClient";
import './styles/HelpForClients.scss';


const HelpForClients = ({tittle, textButton}) => {
    return (
        <div className="help">
            <div className="help-title">
                <h1>{tittle}</h1>
            </div>
            <div className="help-targets">
                <TypeClient title={"Start-Ups de domicilios"} URLImage="https://www.unicentrocucuta.com/wp-content/uploads/2016/02/logo-frisby.png"/>
                <TypeClient title={"Resaurantes"} URLImage="https://www.unicentrocucuta.com/wp-content/uploads/2016/02/logo-frisby.png"/>
                <TypeClient title={"Última milla"} URLImage="https://www.unicentrocucuta.com/wp-content/uploads/2016/02/logo-frisby.png"/>
                <TypeClient title={"Bodegas ocultas"} URLImage="https://www.unicentrocucuta.com/wp-content/uploads/2016/02/logo-frisby.png"/>
            </div>
            
            <div className="help-button">
                <ButtonComp textButton={textButton}/>
            </div>
        </div >
    )
}

export default HelpForClients;
