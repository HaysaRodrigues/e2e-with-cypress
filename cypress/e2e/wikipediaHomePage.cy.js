describe('wikipedia home page', () => {
  it('will access wikipedia home page with success', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
  })
})