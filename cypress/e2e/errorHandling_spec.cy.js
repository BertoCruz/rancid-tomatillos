describe('empty spec', () => {

  it('As a user, when I visit a broken Home page, I should see a spinning tomatello', () => {
    cy.visit('http://localhost:3000/movie')
    cy.get('.error-handling').find('img')
    cy.get('.error-handling').find('h2')
    cy.get('.error-handling').find('p')
  })

  it('As a user, when I visit a broken movie details page, I should see a spinning tomatello', () => {
    cy.visit('http://localhost:3000/movie')
    cy.get('.error-handling').find('img')
    cy.get('.error-handling').find('h2')
    cy.get('.error-handling').find('p')
  })


})