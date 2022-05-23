import React from "react";
import './styles/AboutUs.scss';

const AboutUs = () => {
    return (
        <div className="about">
            <div className="about-text">
                <div className="about-text_title">
                    <h1>¿Quienes somos?</h1>
                </div>
                <div className="about-text_paragraph">
                    <p>Somos una startup que brinda soluciones tecnologicas en logistica de ultima milla, cambiando el
                        concepto de delivery en LATAM para empresas y comercios locales.</p>
                </div>
                <button type="button" className="btn btn-warning about-button">¡Contactanos!</button>
            </div>
            <div className="about-image">
                <img src="https://img.freepik.com/vector-gratis/servicio-entrega-ilustrado_23-2148505081.jpg?t=st=1653321353~exp=1653321953~hmac=a38fae00d0445872bfef5cb589f3f4f59d4b8e4fabb0613f17fcbcf20a9b271b&w=826" alt="logo" className="logo"/>
            </div>
        </div>
    )
}

export default AboutUs;