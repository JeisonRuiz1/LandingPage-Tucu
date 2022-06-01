import React from "react";
import './styles/OurServices.scss';
import ServiceTarget from "../components/ServiceTarget";
import ButtonComp from '../components/ButtonComp';
import fastDeliveryImage from '../icons/FASTA DELIVERY.png';
import sameDayImage from '../icons/SAME DAY DELIVERY.png';
import sfLogisticoImage from '../icons/SOFTWARELOGISTICO.png';

const OurServices = () => {
    return (
        
        <div className="our-service">
            <div className="our-service-tittle">
                <h1>Nuestros servicios</h1>
            </div>

            <div className="our-service-targets">
                <ServiceTarget
                    title={"Same day delivery"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz, recibiendo tus productos el mismo dia que los solicitas con un servicio inmediato y de calidad."}
                    URLImage={sameDayImage}/>

                <ServiceTarget
                    title={"Fast delivery"}
                    text={"Vive una experiencia de compra mucho mas agil."}
                    URLImage={fastDeliveryImage}/>

                <ServiceTarget
                    title={"Software logistico"}
                    text={"Vive una experiencia de compra mucho mas agil y eficaz.Vive una experiencia de compra mucho mas agil y eficaz."}
                    URLImage={sfLogisticoImage}/>

            </div>
            <div>
                <ButtonComp textButton={"Mas servicios"}/>
            </div>
        </div >
    )
}

export default OurServices;