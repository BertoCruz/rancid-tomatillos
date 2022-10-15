import React, {Component} from 'react';
import './App.css';
import Navbar from '.././Navbar/Navbar';
// import movieData from '../../MockMovieData.js';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'


class App extends Component{
  constructor(){
    super(); 
    this.state = {
      movies:[], 
      individualMovie: [
        {"movie": {
        id: 1, 
        title: "Fake Movie Title", 
        poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
        backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
        release_date: "2019-12-04", 
        overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
        average_rating: 6, 
        genres: ["Drama"], 
        budget:63000000, 
        revenue:100853753, 
        runtime:139, 
        tagline: "It's a movie!" 
        }}
      ]
    }
  }

componentDidMount(){
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => this.setState({movies:data.movies}))
}

getIndividualMovie(id){
  console.log(id)
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => response.json())
  // .then(data => this.setState({individualMovie:data.movie}))
  .then(data => console.log(data.movie))
  .catch(error => console.log(error))
}


render() {
  // console.log(this.state.movies)
  return (
    <div className="App">
      <header> 
        <h1>Rancid Tomatillos</h1>
        <Navbar />
      </header>
      <main >
        <Movies movieData = {this.state.movies} getDetails ={this.getIndividualMovie} />
        <MovieInfo movieDetails = {this.state.individualMovie} popup = {true}/>
      </main>
    </div>
  );
}
}


export default App;
