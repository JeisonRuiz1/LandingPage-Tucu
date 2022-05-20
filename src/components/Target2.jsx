import React from "react";
import './styles/Target2.scss';
const Target2 = ({ tittle, content, urlImage, textButton }) => {
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
                    <button type="button" className="btn btn-warning moreInformation-button">{textButton}</button>
                </div>
                <div className="main-image">
                    <img src={urlImage} alt="logo" className="logo-image" />
                </div>
            </div>

        </div>
    )
}
export default Target2;