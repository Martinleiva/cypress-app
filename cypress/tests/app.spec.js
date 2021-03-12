/// <reference types="cypress" />

describe('App test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be first time', () => {
    expect(localStorage.getItem('first-time')).to.eq('true');
  });

  it('should exist and contains title Register', () => {
    cy.get('h2')
      .eq(0)
      .should('exist')
      .contains('Register');
  });

  it('should exist form', () => {
    cy.get('#form_register').should('exist');
  });

  it('should exist and contains title Disclaimer', () => {
    cy.get('h2')
      .eq(1)
      .should('exist')
      .contains('Disclaimer');
  });

  it('should exist paragraphs', () => {
    cy.get('#first-p').should('exist');
    cy.get('#second-p').should('exist');
  });

  it('should exist dinosaurs', () => {
    cy.get('#dinosaur').should('exist');
    cy.get('#dinosaur2').should('exist');
  });

});