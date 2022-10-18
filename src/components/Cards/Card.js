import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App/App";
import './Card.css'


const Card = ( props ) => {
    // console.log("props.details" ,props.getDetails)
    return (
        <NavLink to={`/MovieInfo/${props.id}`}>
            <div className ="movie-card" onClick={() => props.getDetails(props.id)}>
                <div className="poster-container">
                    <img src = {props.poster}></img>
                </div>
                <p> {props.title} </p>
                <p> {props.averageRating}/10</p>
            </div>
        </NavLink>
    )   
}

// // ›
// function getMovieDetails (id) {
// //    console.log(id)
  
// // }

export default Card