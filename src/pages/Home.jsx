import React from "react";
import OurServices from "../containers/OurServices";
import InformationComponent from "../components/InformationComponent";
import Benefits from "../containers/Benefits";
import HelpForClients from "../containers/HelpForClients";
import AboutUs from "../containers/AboutUs";
import Media from "../containers/Media";
import AmountServices from "../containers/AmountServices";
import Investors from "../containers/Investors";


const Home = () => {
    return (
        <div>
            <AboutUs />
            <OurServices />
            <InformationComponent
                tittle={"¿Por qué nos eligen?"}
                content={"Las entregas a domicilio de manera informal, son la opción para subsistir de miles de personas en LATAM, sin embargo el trabajo informal crece en la misma medida que se multiplican el número de pedidos; convirtiéndose en uno de los grandes males tanto para clientes finales, plataformas de delivery o empresas que ofrecen a su cliente final este tipo de servicios y los mismos repartidores. "}
                urlImage={"https://imagenes.elpais.com/resizer/foHCFTsj0w2hTr1UKNm8daBbkCM=/414x0/filters:focal(2065x1485:2075x1495)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KTPTNNRTFFAE7NNA73UWLWF26Y.jpg"}
                textButton={"Quiero saber más"}
            />
            <Benefits />
            <HelpForClients tittle={"Clientes que podemos ayudar"} textButton={"Contáctanos"} />
            <Media />
            <InformationComponent
                tittle={"Quiero ser repartidor TUCU"}
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vel consequatur tempore itaque, voluptatum veritatis nam id, dolor provident vitae eum corporis repellat perspiciatis nostrum doloremque, sunt perferendis! Ipsam, ducimus?"}
                urlImage={"https://imagenes.elpais.com/resizer/foHCFTsj0w2hTr1UKNm8daBbkCM=/414x0/filters:focal(2065x1485:2075x1495)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KTPTNNRTFFAE7NNA73UWLWF26Y.jpg"}
                textButton={"Me interesa"} />
            <AmountServices title={"Cifras"} />
            <Investors title={"Nuestros inversionistas"} />
            <InformationComponent
                tittle={"Conoce nuestras tarifas"}
                content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda, dolore nemo animi, voluptatum aliquam a blanditiis dolorem voluptatibus numquam possimus, sapiente labore accusantium vel. Itaque id ex odit dolores."}
                urlImage={"https://static.vecteezy.com/system/resources/previews/005/602/784/large_2x/chart-and-graph-color-icons-set-horizontal-and-vertical-histogram-with-interest-rates-function-curve-venn-diagram-with-letter-indexes-trigonometry-study-business-isolated-illustrations-vector.jpg"}
                textButton={"Quiero saber más"} />
        </div>
    )
}

export default Home;