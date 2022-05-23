import React from "react";
//import './styles/HelpForClients.scss';


const HelpForClients = () => {
    return (
        <div className="container">
            <div className="container-tittle">
                <h1>Nuestros servicios</h1>
            </div>
            <div className="container-targets">
                <div className="container-targets__target">
                    <img src="" alt=""/>
                        <h3>Same day delivery</h3>
                </div>
                <div className="container-targets__target">
                    <img src="" alt=""/>
                        <h3>Fast delivery</h3>
                </div>
                <div className="container-targets__target">
                    <img src="" alt=""/>
                        <h3>Software logistico</h3>
                </div>
            </div>
            <div>
                <button type="button" className="primary-button information-button">Mas servicios</button>
            </div>
        </div >
    )
}

export default HelpForClients;