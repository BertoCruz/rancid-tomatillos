import React from "react";
import { NavLink } from "react-router-dom";
import './Card.css'


const Card = ( props ) => {
    return (
        <NavLink to={`/movie-info/${props.id}`}>
            <div className ="movie-card">
                <div className="poster-container">
                    <img src = {props.poster}></img>
                </div>
                <p> {props.title} </p>
                <p> {props.averageRating}/10</p>
            </div>
        </NavLink>
    )   
}

export default Card