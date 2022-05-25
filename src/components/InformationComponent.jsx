import React from "react";
import ButtonComp from "./ButtonComp";
import './styles/InformationTarget.scss';
const InformationTarget = ({ tittle, content, urlImage, textButton }) => {
    return (
        <div className="main">
            <div className="main-title">
                <h1>{tittle}</h1>
            </div>
            <div className="main-content">
                <div className="main-text">
                    <div className="main-text_paragraph">
                        <p>{content}</p>
                    </div>
                    <ButtonComp textButton={textButton}/>
                </div>
                <div className="main-image">
                    <img src={urlImage} alt="logo" className="logo-image" />
                </div>
            </div>

        </div>
    )
}
export default InformationTarget;