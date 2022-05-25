import React from "react";
import './styles/ChooseUs.scss';
import chooseUsImage from '../icons/logoTucu.png';

const ChooseUs = () => {
    return (
        <div className="main">
            <div className="main-title">
                <h1>¿Por que nos eligen?</h1>
            </div>
            <div className="main-content">
                <div className="main-text">
                    <div className="main-text_paragraph">
                        <p>Somos una startup que brinda soluciones tecnologicas en logistica de ultima milla, cambiando el
                            concepto de delivery en LATAM para empresas y comercios locales.</p>
                    </div>
                    <button type="button" className="primary-button moreInformation-button">Quiero saber mas</button>
                </div>
                <div className="main-image">
                    <img src={chooseUsImage} alt="logo" className="logo-image" />
                </div>
            </div>

        </div>
    )
}

export default ChooseUs;