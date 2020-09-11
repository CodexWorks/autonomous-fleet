const username = 'empsfp';
const password = 'VYkosvdun7YLsWz8nH7zLtbzZ';

describe('The toggle button', function () {
  it('is clickable', function () {
    cy.visit('/');
    cy.signIn(username, password);
    cy.wait(1000);
    cy.get('#sidebarCollapse').should('be.visible').click();
  });
  it('shrinks the sidebar', function () {
    cy.get('#sidebar').should('have.class', 'active');
  });
  it('extends sidebar', function () {
    cy.get('#sidebarCollapse').click();
    cy.get('#sidebar').should('not.have.class', 'active');
  });
  it("doesn't throw errors when spammed 20 times", function () {
    for (let n = 0; n < 20; n++) {
      cy.get('#sidebarCollapse').click({ force: true });
    }
  });
});
