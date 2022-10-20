import React from "react";
import { NavLink } from "react-router-dom";
import './Card.css'


const Card = ( props ) => {
    return (
        <NavLink to={`/${props.id}`}>
            <div className ="movie-card">
                <div className="poster-container">
                    <img src = {props.poster}></img>
                </div>
                <div className="movie-card-description">
                    <p className="movie-card-title"> {props.title} </p>
                    <p className="movie-card-rating"> {props.averageRating}/10
                        <img className="tomatillo-rating" src="../../images/tomatillo.png" alt="tomatillo"></img>
                    </p>
                </div>
            </div>
        </NavLink>
    )   
}

export default Card