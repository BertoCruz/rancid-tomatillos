import React from "react";
import './MovieInfo.css'

const MovieInfo = () => {
    return (
        <div className="movie-detail-container">
            <section className="movie-detail-section">
                <div className="backdrop-img-container">
                    <img src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg"></img>
                </div>
                <div className="movie-info-container">
                    <div className="movie-poster-container">
                        <img src="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"></img>
                    </div>
                    <div className="movie-description-container">
                        <h2 className="movie-title">Fake Movie Title</h2>
                        <p className="release-date">2019-12-04</p>
                        <p className="overview">Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!</p>
                        <p className="avg-rating">6</p>
                        <p className="genre">Drama</p>
                        <p className="budget">63000000</p>
                        <p className="revenue">100853753</p>
                        <p className="runtime">139</p>
                        <p className="tagline">`It's a movie!`</p>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default MovieInfo;

// {"movie": {
//     id: 1, title: "Fake Movie Title", 
//     poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
//     backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
//     release_date: "2019-12-04", 
//     overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
//     average_rating: 6, 
//     genres: ["Drama"], 
//     budget:63000000, 
//     revenue:100853753, 
//     runtime:139, 
//     tagline: "It's a movie!" 
// }}