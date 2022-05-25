import React from "react";
import './styles/OurServices.scss';
import serviceImage from '@icons/logoTucu.png';
import ServiceTarget from "../components/ServiceTarget";
import ButtonComp from '../components/ButtonComp';

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
                    URLImage={"https://supplychaingamechanger.com/wp-content/uploads/2021/09/car-438029_1280.webp"}
                />
                <ServiceTarget
                    title={"Software logistico"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz.Vive una experiencia de compra mucho mas agil y eficaz."}
                    URLImage={"https://supplychaingamechanger.com/wp-content/uploads/2021/09/car-438029_1280.webp"}
                />
            </div>
            <div>
                <ButtonComp textButton={"Mas servicios"}/>;
            </div>
        </div >
    )
}

export default OurServices;