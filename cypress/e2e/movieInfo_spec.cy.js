describe('Movie Info Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('.movie-container').find('a:nth-child(1)').click()
  })

  it('As a user, when I click on a movie card it should take you to a movie detail page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.movie-container').find('a:nth-child(1)').click()
    cy.location().should((loc) => 
    expect(loc.pathname).to.eq('/694919')
    )
   })
          
  it('As a user, I should be able to click on a home link that takes you to homepage', () => {
    cy.contains('Home').click().location().should((loc) => 
    expect(loc.pathname).to.eq('/') )
  })

  it('As a user, when I am load the movie details, I should see a movie poster', () => {
    cy.get('.movie-detail-container').find('.movie-poster-container').find('img')
  })

  it(`As a user, when I am load the movie details, I should see more movie details`, () => {
    cy.get('.movie-detail-container').find('.movie-title').contains('Money Plane')
    cy.get('.movie-detail-container').find('.release-date').contains("2020-09-29")
    cy.get('.movie-detail-container').find('.overview').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.get('.movie-detail-container').find('.avg-rating').contains("6")
    cy.get('.movie-detail-container').find('.genre').contains('Action')
    cy.get('.movie-detail-container').find('.budget').contains('No public record')
    cy.get('.movie-detail-container').find('.revenue').contains('No public record')
    cy.get('.movie-detail-container').find('.runtime').contains('82')
  });
})