import React from "react";
import App from "../App/App.js";
import Card from '../Cards/Card.js'
import './Movies.css'

const Movies = ({movieData}) => {
    const movieCards = movieData.map(movie => {
        return (
             <Card 
                // onclick = {App.getIndividualMovie()}
                title= {movie.title}
                poster= {movie.poster_path}
                key= {movie.id}
                id= {movie.id}
             />
        )
    }) 
    
    return (
        <section className='movie-container'>
            {movieCards}
        </section>
        )
}



export default Movies