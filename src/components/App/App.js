import React, {Component} from 'react';
import './App.css';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'
import ErrorHandle from '../ErrorHandle/ErrorHandle';
import { Route, NavLink, Switch} from 'react-router-dom'
import { fetchMoviesData } from '../../api-calls'


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
    fetchMoviesData('')
      .then(data => this.setState({movies:data.movies}))
      .catch(err => {
        this.setState({error : err});
      })
  }

  findIndividualMovie = (id) => {
    const individual = this.state.movies.find(movie => {
      return movie.id === parseInt(id)
    })
    return individual;
  }

  render() {

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
          </Switch>
        }
      </div>
    );
  }
}

export default App;
