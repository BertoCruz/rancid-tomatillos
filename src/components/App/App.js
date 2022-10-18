import React, {Component} from 'react';
import './App.css';
import Navbar from '.././Navbar/Navbar';
// import movieData from '../../MockMovieData.js';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'
import ErrorHandle from '../ErrorHandle/ErrorHandle';



class App extends Component {
  constructor(){
    super(); 
    this.state = {
      movies: null, 
      individualMovie: null,
      error: null
    }
    this.isClicked = false;
    this.homepageView = true;
  }

componentDidMount(){
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => {
    if(!response.ok) {
      throw `${response.status} ${response.statusText}`;
    } else {
      return response.json();
    }
  })
  .then(data => this.setState({movies:data.movies}))
  .catch(err => {
    this.setState({error : err});
  })
}

getIndividualMovie = (id) => {
  this.setState({movies: null});
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => {
    if(!response.ok) {
      throw `${response.status} ${response.statusText}`;
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log(data.movie)
    this.setState({individualMovie: data.movie});
  })
  .catch(err => {
    this.setState({error : err});
  });
}

// showDetails = () => {
//   this.isClicked = true
//   this.homepageView = false
//   console.log('im working')
// }

hideDetails = () => {
  this.componentDidMount();
  this.setState({individualMovie: null});
  // this.isClicked = false
  // this.homepageView = true
  // console.log('hello')
}

render() {
  return (
    <div className="App">
        <Navbar hideDetails = {this.hideDetails}/>
        {console.log("OVER HERE====", this.state.error)}
        {this.state.error && 
          <ErrorHandle 
            errorStatus = {this.state.error}/>
        }

        {this.state.movies &&  
        <Movies 
          movieData = {this.state.movies} 
          getDetails ={this.getIndividualMovie}
          homepageView = {this.homepageView}
          // setTriggerPopup = {setButtonPopup} 
          />
        }

        {this.state.individualMovie &&
        <MovieInfo 
          movieDetails = {this.state.individualMovie}  
          // popup = {this.isClicked}
          // popup = {buttonPopup} 
          // setTriggerPopup = {setButtonPopup}
          />
        }
    </div>
  );
}
}


export default App;
