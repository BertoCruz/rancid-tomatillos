describe('card component', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  })

  it('it should display movie cards on a the main page', () => {
    cy.get('.movie-container')
    cy.get('.movie-container').find('.movie-card')
  })

  it('it should display movie cards ', () => {
    cy.get('.movie-container').find('.movie-card')
   
  })

  it('card should display an image', () => {
    cy.get('.movie-container').find(".movie-card:nth-child(1)").find('.poster-container').find('img')
  })

  it('should display a movie title', () => {
    cy.get('.movie-container').find(".movie-card:nth-child(1)").find('p')
  })

  it('should have a movie rating', () => {
    cy.get('.movie-container').find('.movie-card:nth-child(1)').find('p')
  })


})