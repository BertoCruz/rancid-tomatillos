import React from "react";
import Card from '../Cards/Card.js'
import './Movies.css'

const Movies = ({movieData}) => {
    const movieCards = movieData.map(movie => {
        return (
            <Card 
                title= {movie.title}
                poster= {movie.poster_path}
                key= {movie.id}
                id= {movie.id}
                averageRating= {movie.average_rating.toFixed(0)}
            />
        )
    }) 
    
    return ( 
        <main>
            <section className='movie-container' >
                {movieCards}
            </section>
        </main>
    )
}

export default Movies