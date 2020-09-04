import {
  randomString,
  lowerCharString,
  upperCharString,
  numString,
} from '../support/stringGenerator';

describe('The signup process', function () {
  // all chars string for username
  it('accepts 1-3 all chars for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 random chars for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  // lowercase chars string for username
  it('accepts 1-3 lowercase chars for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 lowercase chars for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(lowerCharString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  // uppercase chars string for username
  it('accepts 1-3 uppercase chars for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(upperCharString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 uppercase chars for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(upperCharString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  // num string for username
  it('accepts 1-3 numbers for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(numString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 numbers for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(numString(n), randomString(25));
      cy.contains('LOGOUT');
    }
  });
  // all chars string for password
  it('accepts 1-3 all chars for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 random chars for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  // lowercase chars string for password
  it('accepts 1-3 lowercase chars for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 lowercase chars for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  // uppercase chars string for password
  it('accepts 1-3 uppercase chars for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 uppercase chars for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  // num string for password
  it('accepts 1-3 numbers for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 numbers for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(randomString(10), randomString(n));
      cy.contains('LOGOUT');
    }
  });
});
