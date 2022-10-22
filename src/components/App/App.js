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
      error: null
    }
    this.isClicked = false;
    this.homepageView = true;
  }

  componentDidMount(){
    fetchMoviesData()
      .then(data => this.setState({movies:data.movies}))
      .catch(err => {
        this.setState({error : err});
      })
  }
  
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
