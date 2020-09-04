import * as appConfig from '../../src/utils/appConfig.json';

const sidebarItems = appConfig.routes;

let username = 'LDX';
let password = 'bm9ov3FiNmJnSqGh7zlkx2AJ8';

describe('All sidebar buttons', () => {
  it("doesn't throw errors when logging in", function () {
    cy.signIn(username, password);
    cy.get('[data-cy=username]').should('contain', username);
  });
  it('clicks all the buttons in sidebar', function () {
    sidebarItems.map((item, i) => {
      cy.get(
        `[data-cy=${item.text.split(' ').join('').toLowerCase()}]`
      ).click();
      cy.url().should(
        'include',
        `${item.route.split(' ').join('').toLowerCase()}`
      );
      cy.log(`${item.text}: OK`);
    });
  });
});

// beforeEach(() => {
//     it('logs the user in programmatically without using the UI', function () {
//         cy.request('POST', '/sign-in', {
//             username: 'LDX',
//             password: 'bm9ov3FiNmJnSqGh7zlkx2AJ8'
//         })
//     })
// })
