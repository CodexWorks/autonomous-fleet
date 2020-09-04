// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import User from '../support/User';
import { dateTime as now } from '../support/dateTime.js';

//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

// SIGN UP
Cypress.Commands.add('signUp', (username, password) => {
  let user = new User(username, password);
  cy.visit('/sign-up');
  cy.contains('Sign Up');
  cy.url().should('include', '/sign-up');
  cy.get('input[name=username]').type(user.name);
  cy.get('input[name=email]').type(user.email);
  cy.get('input[name=password1]').type(user.pass1);
  cy.get('input[name=password2]').type(user.pass2);
  cy.get('input[type=button]').click();
  cy.writeFile(
    '../logs/userLogs.json',
    {
      entryTime: now(),
      username: user.name,
      email: user.email,
      password: user.pass1,
    },
    { flag: 'a+' }
  );
  cy.writeFile('../logs/logs.json', ',\n', { flag: 'a+' });
});

// SIGN IN
Cypress.Commands.add('signIn', (username, password) => {
  cy.visit('/sign-in');
  cy.contains('Sign In');
  cy.url().should('include', '/sign-in');
  cy.get('input[name=username]').type(username);
  cy.get('input[name=password]').type(password);
  cy.get('input[type=button]').click();
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
