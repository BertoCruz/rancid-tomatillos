import React, {Component} from 'react';
import './App.css';
// import Navbar from '.././Navbar/Navbar';
// import movieData from '../../MockMovieData.js';
import Movies from '.././Movies/Movies'
import MovieInfo from '.././MovieInfo/MovieInfo'
import ErrorHandle from '../ErrorHandle/ErrorHandle';
import { Route, NavLink} from 'react-router-dom'


class App extends Component {
  constructor(){
    super(); 
    this.state = {
      movies: [], 
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

// render() {
//   return (
//     <div className="App">
//         <header>
//           <h1>Rancid Tomatillos</h1>
//           <nav className="Navbar"  >
//             <NavLink 
//                 to='/' 
//                 onClick={() => this.hideDetails()}> 
//                 Home 
//             </NavLink>
//           </nav>
//         </header>
//         {console.log("OVER HERE====", this.state.error)}
//         {this.state.error && 
//           <ErrorHandle 
//             errorStatus = {this.state.error}/>
//         }
//         <Route exact path='/' render={() => <Movies movieData= {this.state.movies} getDetails = {this.getIndividualMovie}/>} /> */}
//        {this.state.movies &&   
//         <Movies 
//           movieData = {this.state.movies} 
//           getDetails ={this.getIndividualMovie}
//           homepageView = {this.homepageView}
//           // setTriggerPopup = {setButtonPopup} 
//           /> }
        
//         {/* <Route path='/movieInfo' render={() => <MovieInfo movieDetail = {this.state.individualMovie}/>} /> */}
//       {this.state.individualMovie &&
//         <MovieInfo 
//           movieDetails = {this.state.individualMovie}  
//           // popup = {this.isClicked}
//           // popup = {buttonPopup} 
//           // setTriggerPopup = {setButtonPopup}
//       /> }
//     </div>
//   );
// }



render() {
  return (
    <div className="App">
        {/* <Navbar hideDetails = {this.hideDetails}/>
        {console.log("OVER HERE====", this.state.error)} */}
          <header>
             <h1>Rancid Tomatillos</h1>
          <nav className="Navbar"  >
            <NavLink 
                to='/' 
                 onClick={() => this.hideDetails()}> 
                Home 
            </NavLink>
          </nav>
        </header>

        {this.state.error && 
          <ErrorHandle 
            errorStatus = {this.state.error}/>
        }

     <Route path='/'>
        <Movies movieData ={this.state.movies} getDetails ={this.getIndividualMovie}/>
     </Route>
     {/* <Route path='/' component={Movies}/>   */}
      {/* getDetails ={this.getIndividualMovie} */}

        {/* {this.state.movies &&  
        <Movies 
          movieData = {this.state.movies} 
          getDetails ={this.getIndividualMovie}
          homepageView = {this.homepageView}
          // setTriggerPopup = {setButtonPopup} 
          />
        } */}

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
