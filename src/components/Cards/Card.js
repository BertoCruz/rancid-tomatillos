import React from "react";
import App from "../App/App";
import './Card.css'


const Card = ( props ) => {
    // console.log("props.details" ,props.getDetails)
    return (
        <div className ="movie-card" onClick={() => props.getDetails(props.id)}>
            <div className="poster-container">
                <img src = {props.poster}></img>
            </div>
            <p> {props.title} </p>
            <p> {props.averageRating}/10</p>
        </div>
    )   
}

// // ›
// function getMovieDetails (id) {
// //    console.log(id)
  
// // }

export default Card