describe('testing on Tour component', () => {
  it('should open Tour', () => {
    cy.visit('http://localhost:3000');
    localStorage.setItem('first-time', true);

    cy.get('#open_tour').click();
  });

  it('shuold close Tour', () => {
    cy.get('.sc-bxivhb > svg > path').click();
  })
});