import React from "react";
import '../styles/OurServices.scss';
import serviceImage from '@icons/logoTucu.png';


const OurServices = () => {
    return (
        <div className="container">
            <div className="container-tittle">
                <h1>Nuestros servicios</h1>
            </div>
            <div className="container-targets">
                <div className="container-targets__target">
                    <img src="https://supplychaingamechanger.com/wp-content/uploads/2021/09/car-438029_1280.webp" alt="image-target" className="image-target"/>
                        <h2>Same day delivery</h2>
                        <p>Vive una experiencia de compra mucho mas agil y
                            eficaz, recibiendo tus productos el mismo dia que los
                            solicitas con un servicio inmediato y de calidad.
                        </p>
                </div>
                <div className="container-targets__target">
                    <img src="https://img.myloview.es/fotomurales/fast-delivery-logo-design-template-vector-illustration-400-242200578.jpg"  alt="image-target" className="image-target"/>
                        <h2>Fast delivery</h2>
                        <p>Vive una experiencia de compra mucho mas agil.
                          
                        </p>
                </div>
                <div className="container-targets__target">
                    <img src="https://asersa.com/wp-content/uploads/2016/06/Meme_3.png" alt="image-target" className="image-target"/>
                        <h2>Software logistico</h2>
                        <p>Vive una experiencia de compra mucho mas agil y
                            eficaz.Vive una experiencia de compra mucho mas agil y
                            eficaz.
                        </p>
                </div>
            </div>
            <div>
                <button type="button" className="primary-button information-button">Mas servicios</button>
            </div>
        </div >
    )
}

export default OurServices;