import React from "react";
import './styles/Benefits.scss';
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
                    URLImage={"https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2021/ESTRATEGIA-DELIVERY/3d9e236d14/RyB_DELIVERY_T_1024x512__FillWzEyMDAsNjMwXQ.jpg"}
                />

                <ServiceTarget
                    title={"Gestion"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={"https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2021/ESTRATEGIA-DELIVERY/3d9e236d14/RyB_DELIVERY_T_1024x512__FillWzEyMDAsNjMwXQ.jpg"}
                />

                <ServiceTarget
                    title={"Software logistico"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={"https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2021/ESTRATEGIA-DELIVERY/3d9e236d14/RyB_DELIVERY_T_1024x512__FillWzEyMDAsNjMwXQ.jpg"}
                />
                
            </div>
        </div >
    )
}

export default Benefits;