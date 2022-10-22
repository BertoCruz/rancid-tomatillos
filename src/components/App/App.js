import React, {Component} from 'react';
import './App.css';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'
import ErrorHandle from '../ErrorHandle/ErrorHandle';
import { Route, NavLink, Switch} from 'react-router-dom'
import { fetchMoviesData, fetchIndividualMovie } from '../../api-calls'


class App extends Component {
  constructor(){
    super(); 
    this.state = {
      movies: [], 
      genres: {},
      error: null
    }
    this.isClicked = false;
    this.homepageView = true;
  }

  componentDidMount(){
    //here we will store all of the genres keys with an array of movies according 
    //to their genre.
    //at the end of the component did mount, we will setState to the original genres
    // to equal genresList/
    const genresList = []

    fetchMoviesData()
      .then(data => {
        this.setState({movies:data.movies})
        for(const movie of data.movies) {
          fetchIndividualMovie(movie.id)
            .then(details => {
              // console.log(".THEN=====", details)
              // genresList.push(...details.movie.genres)
              details.movie.genres.forEach(genre => {
                if(!genresList.includes(genre)){
                  genresList.push(genre);
                }
              })
              const movieIndex = this.state.movies.findIndex(oldMovie => oldMovie.id === movie.id)
              this.setState(prevState => {
                const newMovies = [...prevState.movies]
                newMovies.splice(movieIndex, 1, details.movie)
                return { 
                  ...prevState, 
                  movies: newMovies
                }
              })
            })
        }
                
      })
      .catch(err => {
        this.setState({error : err});
      })

    
  }

 

  // componentDidMount(){
  //   fetchMoviesData()
  //     .then(data => this.setState({movies:data.movies}))
  //     .catch(err => {
  //       this.setState({error : err});
  //     })
  // }
  
  // componentDidMount(){
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  //     .then(response => {
  //       if(!response.ok) {
  //         throw `${response.status} ${response.statusText}`;
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then(data => this.setState({movies:data.movies}))
  //     .catch(err => {
  //       this.setState({error : err});
  //     })
  // }

  render() {
    console.log("ALL OF OUR MOVIES===", this.state.movies);
    return (
      <div className="App">
        <header>
          <h1 className='title'>Rancid Tomatillos</h1>
          <nav className="Navbar"  >
            <NavLink to='/' >
                Home 
            </NavLink>
          </nav>
        </header>

        {this.state.error ? 
          <ErrorHandle errorStatus = {this.state.error}/>
          : 
          <Switch>
            <Route exact path='/'>
              <Movies movieData ={this.state.movies}/>
            </Route>
          
            <Route path='/:id' render={({match}) => {
              return <MovieInfo id ={match.params.id} />
            }} />
          </Switch>
        }


        {/* CONDITIONAL RENDERING - MOVIES RENDERING
        {this.state.movies &&  
        <Movies 
          movieData = {this.state.movies} 
          getDetails ={this.getIndividualMovie}
          homepageView = {this.homepageView}
          // setTriggerPopup = {setButtonPopup} 
          />
        } */}

        {/* CONDITIONAL RENDERING - INDIVIDUAL MOVIE'S DETAILS
        {this.state.individualMovie &&
        <MovieInfo 
          movieDetails = {this.state.individualMovie}  />
        } */}
      </div>
    );
  }
}

export default App;
