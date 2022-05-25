import React from "react";
import Header from "../components/Header";
import OurServices from "../containers/OurServices";
import InformationComponent from "../components/InformationComponent";
import Benefits from "../containers/Benefits";
import HelpForClients from "../containers/HelpForClients";
import AboutUs from "../containers/AboutUs";


const Home = () => {
    return (
    <div>
        <AboutUs/>
        <OurServices/>
        <InformationComponent
        tittle={"¿Por qué nos eligen?"}
        content={"Las entregas a domicilio de manera informal, son la opción para subsistir de miles de personas en LATAM, sin embargo el trabajo informal crece en la misma medida que se multiplican el número de pedidos; convirtiéndose en uno de los grandes males tanto para clientes finales, plataformas de delivery o empresas que ofrecen a su cliente final este tipo de servicios y los mismos repartidores. "}
        urlImage={"https://imagenes.elpais.com/resizer/foHCFTsj0w2hTr1UKNm8daBbkCM=/414x0/filters:focal(2065x1485:2075x1495)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KTPTNNRTFFAE7NNA73UWLWF26Y.jpg"}
        textButton={"Quiero saber más"}
         />
        <Benefits/>

        <HelpForClients tittle={"Clientes que podemos ayudar"} textButton={"Contáctanos"} />
        
    </div>
    )
}

export default Home;