import React from 'react'
import { Link } from "react-router-dom";
import Style from "./home.module.css"


const Card = ({ image, name, description, path }) => {

    return (
        <ul className={Style.cardContainer}>
            <li>
                <img src={image} alt="todo" />
                <span>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link to={path}><button>Go</button></Link>
                </span>
            </li>
        </ul>
    )
}

export default Card