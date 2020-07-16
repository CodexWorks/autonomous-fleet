describe('The login process', function () {
  it("doesn't throw errors when logging in 10 times", function () {
    for (let n = 0; n < 10; n++) {
      cy.visit('/sign-in');
      cy.get('[data-cy=login-username]').type(`userx${n}`);
      cy.get('[data-cy=login-password]').type(`mynewpassx${n}`);
      cy.get('[data-cy=login-submit]').click();
      cy.get("[data-cy='orders-btn']").contains('Show Orders');
    }
  });
});
