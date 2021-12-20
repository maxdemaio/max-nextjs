describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page (uses baseurl)
    cy.visit('');

    // Find a link with an href attribute containing "/" and click it
    cy.get('#home-nav').click();

    // The new url should include "/"
    cy.url().should('include', '');

    // The new page should contain an h1 with "Software"
    cy.get('h1').contains('Maxwell DeMaio');
  });
});
