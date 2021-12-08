describe('Navigation', () => {
  it('should navigate to the software page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "software" and click it
    cy.get('a[href*="software"]').click()

    // The new url should include "/software"
    cy.url().should('include', '/software')

    // The new page should contain an h1 with "Software"
    cy.get('h1').contains('Software')
  })
})
