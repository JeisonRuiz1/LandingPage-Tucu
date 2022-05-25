import React from "react";
import ButtonComp from '../components/ButtonComp';
import ServiceTarget from '../components/ServiceTarget';
import './styles/Media.scss';

const Media = () => {
    return (
        <div className="media">
            <div className="media-title">
                <h1>Medios</h1>
            </div>

            <div className="media-targets">
                <ServiceTarget URLImage={"https://caracoltv.brightspotcdn.com/dims4/default/fe305b8/2147483647/strip/true/crop/315x314+0+0/resize/1200x1196!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fbf%2F7e%2F3970272b49a4b5fa943fc505a9d1%2Fblu-radio-logo-2019-rgb.png"}
                    title={"Blue Radio"}
                    text={"efectividad en poco tiempo"} />

                <ServiceTarget URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"}
                    title={"Ultima Hora"}
                    text={"Lorem ipsum dolor sit amet,consectetuer adi piscing elit, sed diam nonummy nibhect."} />

                <ServiceTarget URLImage={"https://media-exp1.licdn.com/dms/image/C4E0BAQGn9m_7zPLWmw/company-logo_200_200/0/1587392761418?e=2147483647&v=beta&t=6mGiulEIVevFIKeWz2Rbrhmw3gH0o5uCWDZ3DYH46kg"}
                    title={"Positiva"}
                    text={"Lorem ipsum dolor sit amet,consectetuer adi piscing elit, sed diam nonummy nibhect."} />

                <ServiceTarget URLImage={"https://cdn.forbes.co/2019/11/76608817_124825865599098_1729314821628755968_n-1.jpg"}
                    title={"Forbes"}
                    text={"efectividad en poco tiempo"} />

                <ServiceTarget URLImage={"https://pbs.twimg.com/profile_images/585177324636676096/y4RXEMK__400x400.jpg"}
                    title={"Sieten Dias"}
                    text={"Lorem ipsum dolor sit amet,consectetuer adi piscing elit, sed diam nonummy nibhect."} />

                <ServiceTarget URLImage={"https://yt3.ggpht.com/TWE63l37E8I7ijrJyDqrL9HLHJ2dgbDK3gvQ4OsRjjOf62Ac1_5UWTaWxpvDFMe2OOjlkyD8ew=s900-c-k-c0x00ffffff-no-rj"}
                    title={"La Republica"}
                    text={"Lorem ipsum dolor sit amet,consectetuer adi piscing elit, sed diam nonummy nibhect."} />
            </div>

            <div className="media-button">
                <ButtonComp textButton={"Ver más"} />
            </div>
        </div>
    )
}

export default Media;