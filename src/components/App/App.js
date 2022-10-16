import React, {Component} from 'react';
import './App.css';
import Navbar from '.././Navbar/Navbar';
// import movieData from '../../MockMovieData.js';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'



class App extends Component {
  constructor(){
    super(); 
    this.state = {
      movies: null, 
      individualMovie: null
    }
    this.isClicked = false;
    this.homepageView = true;
  }

componentDidMount(){
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => this.setState({movies:data.movies}))
}

getIndividualMovie = (id) => {
  // this.showDetails()
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  // .then(response => console.log(response))
  .then(response => response.json())
  .then(data => 
    this.setState({individualMovie: data.movie}),
    this.setState({movies: null}))

  // .then(data => console.log(data.movie))
  .catch(error => console.log('there is an error', error))
  // setButtonPopup(true);
  // this.showDetails()
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
      <header> 
        <h1>Rancid Tomatillos</h1>
        <Navbar hideDetails = {this.hideDetails}/>
      </header>
      <main >
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
      </main>
    </div>
  );
}
}


export default App;
