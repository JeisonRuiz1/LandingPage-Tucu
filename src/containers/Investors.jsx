import React from "react";
import TypeClient from "../components/TypeClient";
import './styles/HelpForClients.scss';

const Investors = ({title}) => {
    return (
        <div className="container">
            <div className="container-title">
                <h1>{title}</h1>
            </div>
            <div className="container-targets">
                <TypeClient title={"Pedro"} URLImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU  " />
                <TypeClient title={"María"} URLImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" />
                <TypeClient title={"Pablo"} URLImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" />
                <TypeClient title={"Juan"} URLImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" />
            </div>
        </div >
    )
}

export default Investors;