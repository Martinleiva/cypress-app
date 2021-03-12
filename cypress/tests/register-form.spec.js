describe('testing on register form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    localStorage.setItem('first-time', true);
  });

  it('fill the fields and show them', () => {
    cy.get('#name_form').type('Walter');
    cy.get('#lastname_form').type('White');
    cy.get('#email_form').type('walter_white@gmail.com');
    cy.get('#phone_form').type('3834223344');
    const targetDate = Cypress.moment()
      .add(1, 'year')
      .add(1, 'month')
      .add(1, 'day')
      .format('MM/DD/YYYY');   // adjust format to suit the apps requirements

    cy.get('input[id="date-picker-inline"]')
      .clear()
      .type(`${targetDate}{enter}`);

    cy.get('#buttom_form').click();
    cy.get('#completed').should('exist');
  });

  it('fill the fields without Firstname and show error message', () => {
    cy.get('#lastname_form').type('White');
    cy.get('#email_form').type('walter_white@gmail.com');
    cy.get('#phone_form').type('3834223344');
    const targetDate = Cypress.moment()
      .add(1, 'year')
      .add(1, 'month')
      .add(1, 'day')
      .format('MM/DD/YYYY');   // adjust format to suit the apps requirements

    cy.get('input[id="date-picker-inline"]')
      .clear()
      .type(`${targetDate}{enter}`);

    cy.get('#buttom_form').click();
    cy.get('#error').should('exist').contains('Complete all fields');
    cy.get('#completed').should('not.exist');
  });

  it('should open tour', () => {
    cy.get('#open_tour').click();
  })
});