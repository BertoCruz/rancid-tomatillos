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
        <section className='movie-container'>
            {movieCards}
        </section>
        )
}



export default Movies