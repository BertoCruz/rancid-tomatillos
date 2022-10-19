import React, {Component} from "react";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import './MovieInfo.css'

class MovieInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            movie : [],
            id : props.id,
            error : null
        }
    }

    componentDidMount = () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
            .then(response => {
            if(!response.ok) {
                throw `${response.status} ${response.statusText}`;
            } else {
                return response.json();
            }
            })
            .then(data => {
            this.setState({movie: data.movie});
            })
            .catch(err => {
            this.setState({error : err});
            });
    }

    render = () => {
        if(!this.state.movie){
            return <p>Movie details couldn't be found. Sowwy.</p>
        }
        return (
            <main>
                {this.state.error && 
                    <ErrorHandle 
                    errorStatus = {this.state.error}/>
                }
                <div className="movie-detail-container">
                    <section className="movie-detail-section">
                        <div className="backdrop-img-container">
                            <img src= {this.state.movie.backdrop_path}></img>
                        </div>
                        <div className="movie-info-container">
                            <div className="movie-poster-container">
                                <img src={this.state.movie.poster_path}></img>
                            </div>
                            <div className="movie-description-container">
                                <h2 className="movie-title"> {this.state.movie.title}</h2>
                                <p className="release-date">{this.state.movie.release_date}</p>
                                <p className="overview">{this.state.movie.overview}</p>
                                <p className="avg-rating">{this.state.movie.average_rating}</p>
                                <p className="genre">{this.state.movie.genres}</p>
                                <p className="budget">{this.state.movie.budget}</p>
                                <p className="revenue">{this.state.movie.revenue}</p>
                                <p className="runtime">{this.state.movie.runtime}</p>
                                <p className="tagline">{this.state.movie.tagline}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        ); 
    }
}

export default MovieInfo;

