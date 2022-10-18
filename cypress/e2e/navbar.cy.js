describe('empty spec', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('Should be able to view the navbar', () => {
    cy.get('h1').contains('Rancid Tomatillos')
    cy.get('button').contains('Home')
  })
})