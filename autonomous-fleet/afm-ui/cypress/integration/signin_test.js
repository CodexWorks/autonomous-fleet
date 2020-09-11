username = 'empsfp';
password = 'VYkosvdun7YLsWz8nH7zLtbzZ';

describe('The signin process', function () {
  it("doesn't throw errors when signing in", function () {
    cy.singIn(username, password);
  });
});
