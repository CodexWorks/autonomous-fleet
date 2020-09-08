import Company from '../support/Company';
import { dateTime as now } from '../support/dateTime.js';
import {
  randomString,
  lowerCharString,
  upperCharString,
  numString,
} from '../support/stringGenerator';

let username = 'LDX';
let password = 'bm9ov3FiNmJnSqGh7zlkx2AJ8';

describe('All sidebar buttons', () => {
  it("doesn't throw errors when logging in", function () {
    cy.signIn(username, password);
    cy.get('[data-cy=username]').should('contain', username);
  });
  it("clicks the 'Add company' button", function () {
    cy.get('[data-cy=companies]').click();
    cy.url().should('include', '/companies');
    cy.get('[data-cy=addCompany]').click();
  });
  it('fills form fields', function () {
    let company = new Company(
      randomString(10),
      randomString(10),
      randomString(10),
      numString(10),
      false
    );
    cy.get('input[name=name]').type(company.name);
    cy.get('input[name=vat]').type(company.vat);
    if (!company.isClient) {
      cy.get('input[name=supplier]').click();
    } else {
      cy.get('input[name=client]').click();
    }
    cy.get('input[name=address]').type(company.address);
    cy.get('input[name=country]').type(company.country);
    cy.get('input[name=reg-number]').type(company.regNo);
    cy.get('[data-cy=orders-btn]').click();
  });
});
