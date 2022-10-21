import React, {Component} from "react";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import './MovieInfo.css'

class MovieInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            movie : null,
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

    checkForGenre = () => {
        if(this.state.movie.genres.length){
            return this.state.movie.genres.join(', ')
        } else {
            return "No genre available"
        }
    }

    formatDollarFigure = (property) => {
        const amount = parseInt(property)
        const numFor = Intl.NumberFormat('en-US')
        const formattedAmount = numFor.format(amount)
        
        if(property === 0){
            return 'No public record'
        } else {
            return `$${formattedAmount}`
        } 
    }

    render = () => {
        if(!this.state.movie){
            return <main>
                <p>{this.state.error}</p>
            </main>
        }
        if(this.state.error){
            return <ErrorHandle errorStatus = {this.state.error}/>
        }

        let backdropStyling = {
            backgroundImage: `url(${this.state.movie.backdrop_path})`,
            backgroundSize:'cover',
            backgroundPosition:'center center',
            backgroundRepeat: 'no-repeat'
        }
       
        return (
            <main>
                <div className="movie-detail-container" style={backdropStyling} >
                    <section className="movie-detail-section" >
                        <div className="movie-info-container">
                           <div className="movie-poster-container">
                                <div className="movie-poster">
                                    <img src={this.state.movie.poster_path}></img>
                                </div>
                            </div>
                            <div className="movie-description-container">
                                <h2 className="movie-title"> {this.state.movie.title}</h2>
                                <p className="release-date"> Release Date: {this.state.movie.release_date}</p>
                                <p className="overview">{this.state.movie.overview}</p>
                                <p className="avg-rating"> Rancid Rating: {parseInt(this.state.movie.average_rating).toFixed(0)} </p>
                                <p className="genre"> Genre: {this.checkForGenre()}</p>
                                <p className="budget"> Budget: {this.formatDollarFigure(this.state.movie.budget)}</p>
                                <p className="revenue"> Revenue: {this.formatDollarFigure(this.state.movie.revenue)}</p>
                                <p className="runtime"> Runtime: {this.state.movie.runtime} Minutes </p>
                                <p className="tagline">{this.state.movie.tagline}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default MovieInfo;

