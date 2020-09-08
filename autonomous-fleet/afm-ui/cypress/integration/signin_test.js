username = 'LDX';
password = 'bm9ov3FiNmJnSqGh7zlkx2AJ8';

describe('The signin process', function () {
  it("doesn't throw errors when signing in", function () {
    cy.singIn(username, password);
  });
});
