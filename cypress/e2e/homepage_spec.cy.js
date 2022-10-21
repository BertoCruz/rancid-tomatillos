describe('card component', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  })

  it('As a user, when I load the application, I should see a title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  } )


  it('As a user, I should have a home link that take me to homepage', () => {
    cy.contains('Home').click().location().should((loc) => 
    expect(loc.pathname).to.eq('/') )
  })

  it('As a user, when I load the application, it should display movie cards on the main page', () => {
    cy.get('.movie-container')
    cy.get('.movie-container').find('.movie-card')
  })

  it('As a user, when I load the application,it should display movie cards ', () => {
    cy.get('.movie-container').find('.movie-card')
   
  })

  it('As a user, when I load the application, a card should display an image', () => {
    cy.get('.movie-container').find(".movie-card:nth-child(1)").find('.poster-container').find('img')
  })

  it('As a user, when I load the application, it should display a movie title', () => {
    cy.get('.movie-container').find(".movie-card:nth-child(1)").find('p')
  })

  it('As a user, when I load the application,should have a movie rating', () => {
    cy.get('.movie-container').find('.movie-card:nth-child(1)').find('p')
  })


})