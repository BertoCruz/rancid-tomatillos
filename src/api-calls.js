const fetchMoviesData = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
        .then((response) => {
            if(!response.ok) {
                throw `${response.status} ${response.statusText}`;
              } else {
                return response.json();
              }            
        })
}

const fetchIndividualMovie = (endpoint) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${endpoint}`)
        .then((response) => {
            if(!response.ok) {
                throw `${response.status} ${response.statusText}`;
              } else {
                return response.json();
              }
        })
}

const fetchMovieTrailer = (filePath) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${filePath}/videos`)
    .then((response) => {
      if(!response.ok) {
          throw `${response.status} ${response.statusText}`;
        } else {
          return response.json();
        }
  })
}
export { fetchMoviesData, fetchIndividualMovie, fetchMovieTrailer };




