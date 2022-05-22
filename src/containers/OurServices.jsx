import React from "react";
import '../styles/OurServices.scss';
import serviceImage from '@icons/logoTucu.png';
import ServiceTarget from "../components/ServiceTarget";


const OurServices = () => {
    return (
        <div className="container">
            <div className="container-tittle">
                <h1>Nuestros servicios</h1>
            </div>
            <div className="container-targets">
                <ServiceTarget
                    title={"Same day delivery"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={"https://supplychaingamechanger.com/wp-content/uploads/2021/09/car-438029_1280.webp"}
                />
                <ServiceTarget
                    title={"Fast delivery"}
                    text={"Vive una experiencia de compra mucho mas agil."}
                    URLImage={"https://img.myloview.es/fotomurales/fast-delivery-logo-design-template-vector-illustration-400-242200578.jpg"}
                />
                <ServiceTarget
                    title={"Software logistico"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz.Vive una experiencia de compra mucho mas agil y eficaz."}
                    URLImage={"https://asersa.com/wp-content/uploads/2016/06/Meme_3.png"}
                />
            </div>
            <div>
                <button type="button" className="primary-button information-button">Mas servicios</button>
            </div>
        </div >
    )
}

export default OurServices;