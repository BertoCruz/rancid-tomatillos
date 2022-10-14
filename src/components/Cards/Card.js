import React from "react";
import './Card.css'

const Card = ({poster, title }) => {
    return (
        <div className ="movie-card">
            <div className="poster-container">
                <img src = {poster}></img>
            </div>
            <p> {title} </p>
        </div>
    )
    
}

export default Card