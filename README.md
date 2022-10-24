
# Rancid Tomatillos

## Abstract
  - This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor is it IMDB. It’s R A N C I D T O M A T I L L O S. Very different! In this App, we exercised our React muscles, we started by creating a React app and followed the modular/component file-structure. We integrated third party libraries like React-Player and Swiper. We also used  the third party library React-Routing V5 to insure that our urls are consistent with the page being rendered. We used Cypress testing to test our applications UI/UX functionality. We hope you enjoy navigating our application! 

## Technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Features
- The homepage features a list of cards displaying movie information from an external API. 
- When a user clicks a card the url updates to display the change and you are taken to a movie information page. The movie information page contains all of the movies details as well as video trailers for each movie. 
- At any point in the experience a user can navigate back to home using the "Home" button located in the top of the page. 
- A user can bookmark any movie info page and share it. 
## Screenshots 
![Homepage](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Homepage.png)![MovieInfo Page](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Movie-info.png)
![giphy](https://user-images.githubusercontent.com/102885322/197645864-8c346f54-1edf-45f7-94a5-df2350790ea3.gif)


## Possible Future Extensions
- A possible future extension would navigating a homepage where all the movies will be organized by genre. This would have a scrollable feature so that all the movies, via a specific genre, would display in one row.
- Creating a search bar that would allow users to quickly find a specific movie in the database. 
- Creating a login and allowing users to save and rate movies. 

## Milestones
- Getting data from fetch calls and setting it to the state. 
- Getting our components routed by using React-Router. 
- Integrating React-Player. 
- Integrating Swiper React Components. 
- Implementing Cypress. 

## Challenges
- When trying to implement a 'sort movies' by genre carousels for our home page, we ran into the problems of asynchronous javascript (our code written below). While our React application runs a render every time we `setState()`, we found that passing data down to our `Movies.js` component too early would be a problem in order for us to sort our movies by genre, to then iterate through every movie object in order to add JSX code for rendering (which included adding `<Swiper>` functionality on top of it). The problems with asynchronous fetch calls is where we have gotten stuck and would appreciate if anyone could help us out restructuring this part of our application. The Asynchronous (and nested) fetch calls live in the `componentDidMount()` declaration in our `App.js` file, and our sorting method, originally, lived inside of our `Movies.js` component. We have pondered over (and are open to) the possibility of reworking our component architecture as this could be a way to restructure our genres array to take in JSX syntax for rendering.
You will find this code living in our `Feat/Scrollable-Genres` branch.

`App.js`
```
componentDidMount() {
  const genresList = [];
  let holdMovies = [];

  fetchMoviesData()
    .then((data) => {
      this.setState({ movies: data.movies });
      // A different route is to just declare a variable to hold all of
      //the movie objects before we setState?
      // holdMovies = data.movies;

      for (const movie of data.movies) {
        fetchIndividualMovie(movie.id)
          .then((details) => {
            details.movie.genres.forEach((genre) => {
              if (!genresList.includes(genre)) {
                genresList.push(genre);
              }
            });
            const movieIndex = this.state.movies.findIndex(
              (oldMovie) => oldMovie.id === movie.id
            );
            this.setState((prevState) => {
              const newMovies = [...prevState.movies];
              newMovies.splice(movieIndex, 1, details.movie);
              return {
                ...prevState,
                movies: newMovies,
              };
            });

            // Possible work around is to just push in every individual movie from this fetch loop
            // into it’s own movie container so as to setState to our movies in the end?
            // holdMovies.push(details.movie);
            // this.setState({ movies: holdMovies });
          })
          .catch((err) => {
            this.setState({ error: err });
          });
      }
    })
    .catch((err) => {
      this.setState({ error: err });
    });
  this.setState({ genres: genresList });
}
```

`Movies.js`
```
//Run a reduce iterator to iterate through all genres and movieData props
// in order to sort movie objects into an array, by the key of genres
const genreMovies = genres.reduce((acc, genre) => {
        const filteredMovies = movieData.filter(movie => {
            return movie.genres.includes(genre)
        })
        if(!acc[genre]) {
            acc[genre] = []
        }
        acc[genre].push(filteredMovies)
        return acc
    }, {});
```

### Set Up
1. Clone the following repos
   ```sh
   git clone git@github.com:BertoCruz/rancid-tomatillos 
   ```
2. Install  and run NPM packages 
   ```sh
   npm install
   npm start
   ``` 
3. Install dependencies
  npm install react-router-dom@5.2.0 Version“2.11.0” 
  npm install swiper Version“8.4.4”
  npm install react-player Version "2.11.0"
  npm install cypress --save-dev  Version “10.10.0”
    "cypress": "cypress open"
     - npm run cypress
      - You will visit the following pages: 
![Welcome to Cypress](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Screen%20Shot%202022-10-24%20at%204.27.54%20PM.png)![Choose a browser](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Screen%20Shot%202022-10-24%20at%204.28.39%20PM.png)![Navigate through specs](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Screen%20Shot%202022-10-24%20at%204.29.45%20PM.png)


4. Enter the following url in your browser: http://localhost:3000/
5. Explore the website


## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [YouTube](https://www.youtube.com/)
  - [React-Router](https://reactrouter.com/en/main)
  - [Cypress-Docs](https://docs.cypress.io/api/table-of-contents)
  - [React-player](https://www.npmjs.com/package/react-player)
  - [React-Docs](https://reactjs.org/docs/react-api.html)
  - [Swiper](https://swiperjs.com/react)
## DTR/Planning
  - [Excalidraw](https://excalidraw.com/#json=Xfd4Y98CexYSyuzuelnVR,VB8d9qCcewxLisXyr0Vr3g)
  - [DTR](https://docs.google.com/document/d/1l-cgbyDXRRAsCEIqtg_q1_i-p84oiqwTgP11uF8cR98/edit)
  - [ProjectBoard](https://github.com/BertoCruz/rancid-tomatillos/projects?query=is%3Aopen)
  - [DesignInspo](https://docs.google.com/document/d/17tk_nKESW7fUIKtiwEsKQRpcerEgZ-4HB7PdPBCIAv4/edit?usp=sharing)
## Contributors
  - [Hunter Monroe](https://github.com/Hmonroe2) 
  - [Hunter's LinkedIn Page](https://www.linkedin.com/in/hunter-monroe-035ab0188/)
  - [R. Dani Lopez-Cruz](https://github.com/BertoCruz) 
  - [Dani's LinkedIn Page](https://www.linkedin.com/in/roberto-dani-lopez-cruz-84a03989/)


## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)




