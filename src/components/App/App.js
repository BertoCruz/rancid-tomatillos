import React, {Component} from 'react';
import './App.css';
import Navbar from '.././Navbar/Navbar';
// import movieData from '../../MockMovieData.js';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'
import {useState} from "react"


class App extends Component{
  constructor(){
    super(); 
    this.state = {
      movies:[], 
      individualMovie:[]
        // {"movie": {
        // id: 1, 
        // title: "Fake Movie Title", 
        // poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
        // backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
        // release_date: "2019-12-04", 
        // overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
        // average_rating: 6, 
        // genres: ["Drama"], 
        // budget:63000000, 
        // revenue:100853753, 
        // runtime:139, 
        // tagline: "It's a movie!" 
        // }}
    }
    this.isClicked = false;
    // let [buttonPopup, setButtonPopup] = useState(false);
  }

componentDidMount(){
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => this.setState({movies:data.movies}))
}

getIndividualMovie = (id) => {
  // let [buttonPopup, setButtonPopup] = useState(false);
  this.isClicked = true;
  console.log(id)
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => response.json())
  .then(data => this.setState({individualMovie:data.movie}))
  .then(data => console.log(data.movie))
  .catch(error => console.log(error))
  // setButtonPopup(true);
}

render() {
  console.log("over here", this.state.individualMovie)
  return (
    <div className="App">
      <header> 
        <h1>Rancid Tomatillos</h1>
        <Navbar />
      </header>
      <main >
        <Movies 
          movieData = {this.state.movies} 
          getDetails ={this.getIndividualMovie}
          // setTriggerPopup = {setButtonPopup} 
          />
      </main>
        <MovieInfo 
          movieDetails = {this.state.individualMovie}  
          popup = {this.isClicked}
          // popup = {buttonPopup} 
          // setTriggerPopup = {setButtonPopup}
          />
    </div>
  );
}
}


export default App;
