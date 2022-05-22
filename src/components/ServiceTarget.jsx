import React from "react";
import './styles/ServiceTarget.scss';

const ServiceTarget = ({ title, text, URLImage }) => {
    return (
        <div className="container-targets__target">
            <img src={URLImage} alt="image-target" className="image-target" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default ServiceTarget;