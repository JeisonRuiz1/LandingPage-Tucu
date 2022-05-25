import React from "react";
import './styles/AboutUs.scss';
import aboutUsImage from '../icons/aboutUs.png';
import ButtonComp from "../components/ButtonComp";

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
                <ButtonComp textButton={"¡Contactanos!"} />
            </div>
            <div className="about-image">
                <img src={aboutUsImage} alt="logo" className="logo"/>
            </div>
        </div>
    )
}

export default AboutUs;