import React from "react";
import './MovieInfo.css'

const MovieInfo = (movieDetails) => {
    const move = movieDetails.movieDetails.map(detail => detail.movie)
    console.log(move[0].title, 'this')
    return (movieDetails.popup) ? (
        <div className="movie-detail-container">
            <section className="movie-detail-section">
                <div className="backdrop-img-container">
                    <img src= {move[0].backdrop_path}></img>
                </div>
                <div className="movie-info-container">
                    <div className="movie-poster-container">
                        <img src={move[0].poster_path}></img>
                    </div>
                    <div className="movie-description-container">
                        <h2 className="movie-title"> {move[0].title}</h2>
                        <p className="release-date">{move[0].release_date}</p>
                        <p className="overview">{move[0].overview}</p>
                        <p className="avg-rating">{move[0].average_rating}</p>
                        <p className="genre">{move[0].genres}</p>
                        <p className="budget">{move[0].budget}</p>
                        <p className="revenue">{move[0].revenue}</p>
                        <p className="runtime">{move[0].runtime}</p>
                        <p className="tagline">{move[0].tagline}</p>
                    </div>
                </div>
            </section>
        </div>
    ) : " "; 

}

export default MovieInfo;

