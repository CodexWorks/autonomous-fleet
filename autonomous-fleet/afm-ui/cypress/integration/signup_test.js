import { stringGenerator } from '../support/stringGenerator';

describe('The signup process', function () {
  // random chars string for username
  it('accepts 1-3 random chars for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 random chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 random chars for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  // lowercase chars string for username
  it('accepts 1-3 lowercase chars for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, 'a-z'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 lowercase chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, 'a-z'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 lowercase chars for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, 'a-z'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  // uppercase chars string for username
  it('accepts 1-3 uppercase chars for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, 'A-Z'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 uppercase chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, 'A-Z'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 uppercase chars for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, 'A-Z'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  // num string for username
  it('accepts 1-3 numbers for username', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, '0-9'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 numbers chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, '0-9'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 numbers for username', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n, '0-9'), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  // all chars string for password
  it('accepts 1-3 random chars for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 random chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(n), stringGenerator(25));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 random chars for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  // lowercase chars string for password
  it('accepts 1-3 lowercase chars for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 lowercase chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 lowercase chars for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  // uppercase chars string for password
  it('accepts 1-3 uppercase chars for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 uppercase chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 uppercase chars for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
      cy.contains('LOGOUT');
    }
  });
  // num string for password
  it('accepts 1-3 numbers for password', function () {
    for (let n = 1; n <= 3; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 4-6 uppercase chars for username', function () {
    for (let n = 4; n <= 6; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
  it('accepts 148-151 numbers for password', function () {
    for (let n = 148; n <= 151; n++) {
      cy.log(`For ${n} chars:`);
      cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
      cy.wait(2000);
      cy.contains('LOGOUT');
    }
  });
});
