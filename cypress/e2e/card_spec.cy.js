describe('card component', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  })

  it('it should display a movie card', () => {
    cy.get('img')
  })
})