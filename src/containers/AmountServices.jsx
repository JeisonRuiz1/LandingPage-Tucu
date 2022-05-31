import React from 'react';
import TypeClient from "../components/TypeClient";
import './styles/HelpForClients.scss';


const AmountServices = ({title}) =>{
    return(
        <div className="container">
            <div className="container-title">
                <h1>{title}</h1>
            </div>
            <div className="container-targets">
                <TypeClient title={"Empleos"} URLImage="https://www.mubis.es/media/users/7708/50768/ding-ding-ding-100-ediciones-original.png  "/>
                <TypeClient title={"Entregas"} URLImage="https://www.mubis.es/media/users/7708/50768/ding-ding-ding-100-ediciones-original.png"/>
                <TypeClient title={"Afiliados"} URLImage="https://www.mubis.es/media/users/7708/50768/ding-ding-ding-100-ediciones-original.png"/>
                <TypeClient title={"Integraciones"} URLImage="https://www.mubis.es/media/users/7708/50768/ding-ding-ding-100-ediciones-original.png"/>
            </div>
        </div >
    )
}


export default AmountServices;