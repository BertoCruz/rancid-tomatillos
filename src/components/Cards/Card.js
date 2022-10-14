import React from "react";
import './Card.css'

const Card = ({poster, title }) => {
    return (
        <div className ="card">
            <img src = {poster}></img>
            <h1> {title} </h1>
        </div>
    )
    
}

export default Card