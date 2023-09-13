/// <reference types="cypress" />

let baseTestAPIUrl = Cypress.env("baseTestAPIUrl");

describe("main-tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept(baseTestAPIUrl).as("baseApiCall");
  });

  it('checks the "Saiba mais" button leads to the correct ticket details page', () => {
    let homeTicketName;

    cy.get('[data-test="ticket-name"]')
      .first()
      .then(($value) => {
        homeTicketName = $value.text();
      });

    cy.contains("Saber mais").first().click();

    cy.get('[data-test="ticket-name-details"]').should(($value) => {
      const detailsPageTicketName = $value.text();
      expect(homeTicketName).equal(detailsPageTicketName);
    });
  });

  it("Add items to cart, remove one and proceed to checkout", () => {
    // Loads page info first time
    cy.wait("@baseApiCall");

    cy.contains("Saber mais").first().click();

    // Loads ticket info after searching by id
    cy.wait("@baseApiCall");
    // Loads ticket values for default date
    cy.wait("@baseApiCall");

    cy.contains("Comprar Ingresso").click();

    // Adds ticket to cart
    cy.wait("@baseApiCall");

    cy.get('[data-test="cart-button"]').click();

    cy.get('[data-test="remove-item"]').first().click();

    // Removes item from cart
    cy.wait("@baseApiCall");

    cy.contains("Ir para o check out").click();

    // Closes cart
    cy.wait("@baseApiCall");

    cy.get('[data-test="cart-counter"]').then(($value) => {
      const cartCounter = $value.text();
      expect(cartCounter).equal("0");
    });
  });
});
