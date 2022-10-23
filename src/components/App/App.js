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
      movieID: [], 
      genres: [],
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
    let holdMovies = [];

    fetchMoviesData()
      .then(data => {
        // this.setState({movies:data.movies})
        // holdMovies = data.movies;
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
              // const movieIndex = this.state.movies.findIndex(oldMovie => oldMovie.id === movie.id)
              // console.log("HOLD MOVIES", holdMovies)
              // const movieIndex = holdMovies.findIndex(oldMovie => oldMovie.id === movie.id)
              // this.setState(prevState => {
              //   const newMovies = [...prevState.movies]
              //   newMovies.splice(movieIndex, 1, details.movie)
              //   return { 
              //     ...prevState, 
              //     movies: newMovies
              //   }
              // })
              
              // holdMovies.splice(movieIndex, 1, details.movie)
              // console.log("HOLDMOVIES ======", holdMovies);
              holdMovies.push(details.movie);
              this.setState({movies: holdMovies})
            })
            .catch(err => {
              this.setState({error : err});
            })
        }
      })
      .catch(err => {
        this.setState({error : err});
      })
    this.setState({genres: genresList})
    console.log("GENRESLIST ======", genresList);
    console.log("HOLDMOVIES ======", holdMovies);
  } 
 

  // componentDidMount(){
  //   fetchMoviesData()
  //     .then(data => this.setState({movies:data.movies}))
  //     .catch(err => {
  //       this.setState({error : err});
  //     })
  // }

  findIndividualMovie = (id) => {
    const individual = this.state.movies.find(movie => {
      return movie.id === parseInt(id)
    })
    return individual;
  }

  render() {
    // console.log("ALL OF OUR MOVIES FROM APP===", this.state.movies);
    // console.log("state of genres IN APP===", this.state.genres);
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
              <Movies movieData={this.state.movies} genres={this.state.genres} />
            </Route>
          
            <Route path='/:id' render={({match}) => {
              return <MovieInfo id={match.params.id} /> }} />
                {/* // movie={this.findIndividualMovie(match.params.id)} 
                // error={this.state.error}/>
            }} /> */}
          </Switch>
        }
      </div>
    );
  }
}

export default App;
