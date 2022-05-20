import React from "react";
import '../styles/Benefits.scss';
import serviceImage from '../icons/logoTucu.svg';

const Benefits = () => {
    return (
        <div className="container">
            <div className="container-tittle">
                <h1>Beneficios</h1>
            </div>
            <div className="container-targets">
                <div className="container-targets__target">
                    <img src={serviceImage} alt="" />
                    <h3>Entregas</h3>
                    <p>Vive una experiencia de compra mucho mas agil y
                        eficaz, recibiendo tus productos el mismo dia que los
                        solicitas con un servicio inmediato y de calidad.
                    </p>
                </div>
                <div className="container-targets__target">
                    <img src={serviceImage} alt="" />
                    <h3>Gestion</h3>
                    <p>Vive una experiencia de compra mucho mas agil y
                        eficaz, recibiendo tus productos el mismo dia que los
                        solicitas con un servicio inmediato y de calidad.
                    </p>
                </div>
                <div className="container-targets__target">
                    <img src={serviceImage} alt="" />
                    <h3>Software logistico</h3>
                    <p>Vive una experiencia de compra mucho mas agil y
                        eficaz, recibiendo tus productos el mismo dia que los
                        solicitas con un servicio inmediato y de calidad.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Benefits;