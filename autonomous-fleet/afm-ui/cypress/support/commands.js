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

/**
 * Custom Cypress command that registeres a new user into the application, and stores the credentials into logs.json file.
 * @param {string} username The name of the user.
 * @param {string} password The password of the user.
 * @returns {User} object with properties name, email, password
 */
Cypress.Commands.add('signUp', (username, password) => {
  cy.clearCookies();
  let user = new User(username, password);
  cy.visit('/sign-up');
  cy.contains('Sign Up');
  cy.url().should('include', '/sign-up');
  cy.get('input[name=username]').type(user.name);
  cy.get('input[name=email]').type(user.email);
  cy.get('input[name=password1]').type(user.pass);
  cy.get('input[name=password2]').type(user.pass);
  cy.get('input[type=button]').click();
  cy.wait(1000);
  cy.get('[data-cy=username]');
  cy.writeFile(
    '../logs/userLogs.json',
    {
      entryTime: now(),
      username: user.name,
      email: user.email,
      password: user.pass,
    },
    { flag: 'a+' }
  );
  cy.writeFile('../logs/userLogs.json', ',\n', { flag: 'a+' });
});

/**
 * Custom Cypress command that registeres logs a user into the application
 * @param {string} username
 * @param {string} password
 */
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

Cypress.Commands.add('clickIfExist', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).click();
      cy.log('succesful log in');
      cy.pause();
    }
  });
});

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
