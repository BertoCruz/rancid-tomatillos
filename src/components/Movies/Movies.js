import React from "react";
import Card from '../Cards/Card.js'
import './Movies.css'

const Movies = ({movieData}) => {
    const movieCards = movieData[0].map(movie => {
        return (
             <Card 
                title= {movie.title}
                poster= {movie.poster_path}
                key= {movie.id}
                id= {movie.id}
             />
        )
    }) 

    return (
        <div className='movie-container'>
            {movieCards}
        </div>
        )
}



export default Movies