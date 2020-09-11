const username = 'empsfp';
const password = 'VYkosvdun7YLsWz8nH7zLtbzZ';

describe('The show orders button', () => {
  it('is clickable', function () {
    cy.visit('/');
    cy.signIn(username, password);
    cy.wait(1000);
    cy.get('[data-cy=orders]').click();
    cy.url().should('include', '/transport-orders');
    cy.get('[data-cy=orders-btn]').should('be.visible').click();
  });
  it('displays the order details', function () {
    for (let i = 2; i <= 14; i++) {
      cy.get(`:nth-child(${i}) > strong`).should('be.visible');
    }
  });
});
