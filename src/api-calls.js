const fetchMoviesData = (endpoint) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${endpoint}`)
        .then((response) => {
            if(!response.ok) {
                throw `${response.status} ${response.statusText}`;
              } else {
                return response.json();
              }            
        })
}

export { fetchMoviesData };