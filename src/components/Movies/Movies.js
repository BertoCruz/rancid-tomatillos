import React from "react";
import App from "../App/App.js";
import Card from '../Cards/Card.js'
import './Movies.css'

const Movies = ({movieData, getDetails, homepageView }) => {
    const movieCards = movieData.map(movie => {
        return (
             <Card 
            //  onClick = {getDetails(movie.id)}
                getDetails = {getDetails}
                title= {movie.title}
                poster= {movie.poster_path}
                key= {movie.id}
                id= {movie.id}
                averageRating= {movie.average_rating.toFixed(0)}
                
             />
        )
    }) 
    
    return (homepageView) ? ( 
        <section className='movie-container' >
            {movieCards}
        </section>
        ) : " "
}



export default Movies