describe('Movie Info Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    let movieDetails = {
      id: 694919,
      title: "Money Plane",
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      release_date: "2020-09-29",
      overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
      genres: [
      "Action"
      ],
      budget: 0,
      revenue: 0,
      runtime: 82,
      tagline: "",
      average_rating: 6.875
    };
  })

  //come back to this when we have routing working
  it('should be directed to the movie details component when card is clicked', () => {
    cy.intercept({method: 'GET', url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919'}, {
        id: 694919,
        title: "Money Plane",
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date: "2020-09-29",
        overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres: [
        "Action"
        ],
        budget: 0,
        revenue: 0,
        runtime: 82,
        tagline: "",
        average_rating: 6.875
      })
      
  });

  it(`Should display a movie's detail`, () => {
    cy.get('.movie-container').find('.movie-card:nth-child(1)').click()
    cy.get('.movie-detail-container').find('.movie-title').contains('Money Plane')
    cy.get('.movie-detail-container').find('.release-date').contains("2020-09-29")
    cy.get('.movie-detail-container').find('.overview').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.get('.movie-detail-container').find('.avg-rating').contains("6.875")
    cy.get('.movie-detail-container').find('.genre').contains('Action')
    cy.get('.movie-detail-container').find('.budget').contains('0')
    cy.get('.movie-detail-container').find('.revenue').contains('0')
    cy.get('.movie-detail-container').find('.runtime').contains('82')
  });
})