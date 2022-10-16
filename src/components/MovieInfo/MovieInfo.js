import React from "react";
import './MovieInfo.css'

const MovieInfo = (movieDetails) => {
    // const move = movieDetails.movieDetails.map(detail => detail.movie)
    console.log("MOVIE DETAILS=====", movieDetails.movieDetails.title);
    // return (movieDetails.popup) ? (
    return (
        <main>
            <div className="movie-detail-container">
                <section className="movie-detail-section">
                    <div className="backdrop-img-container">
                        <img src= {movieDetails.movieDetails.backdrop_path}></img>
                    </div>
                    <div className="movie-info-container">
                        <div className="movie-poster-container">
                            <img src={movieDetails.movieDetails.poster_path}></img>
                        </div>
                        <div className="movie-description-container">
                            <h2 className="movie-title"> {movieDetails.movieDetails.title}</h2>
                            <p className="release-date">{movieDetails.movieDetails.release_date}</p>
                            <p className="overview">{movieDetails.movieDetails.overview}</p>
                            <p className="avg-rating">{movieDetails.movieDetails.average_rating}</p>
                            <p className="genre">{movieDetails.movieDetails.genres}</p>
                            <p className="budget">{movieDetails.movieDetails.budget}</p>
                            <p className="revenue">{movieDetails.movieDetails.revenue}</p>
                            <p className="runtime">{movieDetails.movieDetails.runtime}</p>
                            <p className="tagline">{movieDetails.movieDetails.tagline}</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    ); 
    // ) : " "; 

}

export default MovieInfo;

