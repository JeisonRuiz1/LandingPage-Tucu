import React from "react";
import '../styles/Benefits.scss';
import serviceImage from '../icons/logoTucu.svg';
import ServiceTarget from "../components/ServiceTarget";

const Benefits = () => {
    return (
        <div className="container">
            <div className="container-tittle">
                <h1>Beneficios</h1>
            </div>
            <div className="container-targets">

                <ServiceTarget
                    title={"Entregas"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={"https://img.icons8.com/color/344/delivery--v1.png"}
                />

                <ServiceTarget
                    title={"Gestion"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={"https://img.icons8.com/color/344/delivery--v1.png"}
                />

                <ServiceTarget
                    title={"Software logistico"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={"https://img.icons8.com/color/344/delivery--v1.png"}
                />
                
            </div>
        </div >
    )
}

export default Benefits;