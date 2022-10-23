import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Mousewheel, Keyboard } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import Card from '../Cards/Card.js'
import './Movies.css'

const Movies = ({movieData, genres}) => {
    //run a reduce on all this.state.genres to add all movie objects 
    // console.log("MOVIE DATA IN MOVIES,JS", movieData);
    const genreMovies = genres.reduce((acc, genre) => {
        const filteredMovies = movieData.filter(movie => {
            // console.log("MOVIE.GENRES*****", movie.genres)
            // console.log("GENRE*****", genre)
            return movie.genres.includes(genre)
        })
        // console.log("MOVIES.JS DATA HEREEE====", filteredMovies);
        if(!acc[genre]) {
            acc[genre] = []
        }
        acc[genre].push(filteredMovies)
        // movie.genres.includes(genres)
        return acc
    }, {});
    console.log("GENRE MOVIES======", genreMovies);



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