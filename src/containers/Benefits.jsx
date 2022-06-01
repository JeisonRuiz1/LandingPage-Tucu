import React from "react";
import './styles/Benefits.scss';
import ServiceTarget from "../components/ServiceTarget";
import entregasIMG from '../icons/ENTREGAS.png';
import gestionIMG from '../icons/GESTION.png';
import softwareIMG from '../icons/SOFTWARE LOGISTICO.png';

const Benefits = () => {
    return (
        <div className="benefit">
            <div className="benefit-tittle">
                <h1>Beneficios</h1>
            </div>
            <div className="benefit-targets">

                <ServiceTarget
                    title={"Entregas"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={entregasIMG}
                />

                <ServiceTarget
                    title={"Gestion"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={gestionIMG}
                />

                <ServiceTarget
                    title={"Software logistico"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={softwareIMG}
                />
                
            </div>
        </div >
    )
}

export default Benefits;