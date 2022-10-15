import React, {Component} from 'react';
import './App.css';
import Navbar from '.././Navbar/Navbar';
import movieData from '../../MockMovieData.js';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'

class App extends Component{
  constructor(){
    super(); 
    this.state = {
      movies:movieData.movies
    }
  }


render() {
console.log(this.state.movies)
  return (
    <div className="App">
      <header> 
        <h1>Rancid Tomatillos</h1>
        <Navbar />
      </header>
      <main >
        <Movies movieData = {this.state.movies} />
        <MovieInfo />
      </main>
    </div>
  );
}
}
export default App;
