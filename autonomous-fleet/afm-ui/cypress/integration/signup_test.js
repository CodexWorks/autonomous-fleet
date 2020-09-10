import { stringGenerator } from '../support/stringGenerator';

// it('does something', function() {
//   for (let n = 1; n <= 3; n++) {
//     //...
//   }
//   for (let n = 4; n <= 6; n++) {
//     //...
//   }
//   for  (let n = 148; n <= 151; n++) {
//     //...
//   }
// })

// const usernamePasswordTest = (usernameCharCount, passwordCharCount, isTesting) => {
//   if (isTesting === 'username') {
//     let index = usernameCharCount;
//   } else if (isTesting === 'password') {
//     let index = passwordCharCount;
//   } else {
//     alert("Attribution Error: the isTesting flag can only take on the values of 'username' or 'password'.")
//   }
//   for (n = )
//   cy.log(`For ${index} chars:`);
//   cy.signUp(stringGenerator(usernameCharCount), stringGenerator(passwordCharCount));
//   cy.wait(2000);
//   cy.contains('LOGOUT');
// }

const usernameTestConditions = (n) => {
  it(`accepts ${n} random chars for username`, function () {
    cy.signUp(stringGenerator(n), stringGenerator(25));
  });
  it(`accepts ${n} lowercase chars for username`, function () {
    cy.signUp(stringGenerator(n, 'a-z'), stringGenerator(25));
  });
  it(`accepts ${n} uppercase chars for username`, function () {
    cy.signUp(stringGenerator(n, 'A-Z'), stringGenerator(25));
  });
  it(`accepts ${n} numbers for username`, function () {
    cy.signUp(stringGenerator(n, '0-9'), stringGenerator(25));
  });
};

const passwordTestConditions = (n) => {
  it(`accepts ${n} random chars for password`, function () {
    cy.signUp(stringGenerator(10), stringGenerator(n));
  });
  it(`accepts ${n} lowercase chars for password`, function () {
    cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
  });
  it(`accepts ${n} uppercase chars for password`, function () {
    cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
  });
  it(`accepts ${n} numbers for password`, function () {
    cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
  });
};

describe('The signup process', function () {
  for (let n = 6; n <= 6; n++) {
    usernameTestConditions(n);
    passwordTestConditions(n);
  }
  for (let n = 146; n <= 151; n++) {
    usernameTestConditions(n);
    passwordTestConditions(n);
  }
});

//   // all chars string for password
//   it('accepts 1-3 random chars for password', function () {
//     for (let n = 1; n <= 3; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 4-6 random chars for username', function () {
//     for (let n = 4; n <= 6; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(n), stringGenerator(25));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 148-151 random chars for password', function () {
//     for (let n = 148; n <= 151; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   // lowercase chars string for password
//   it('accepts 1-3 lowercase chars for password', function () {
//     for (let n = 1; n <= 3; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 4-6 lowercase chars for username', function () {
//     for (let n = 4; n <= 6; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 148-151 lowercase chars for password', function () {
//     for (let n = 148; n <= 151; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, 'a-z'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   // uppercase chars string for password
//   it('accepts 1-3 uppercase chars for password', function () {
//     for (let n = 1; n <= 3; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 4-6 uppercase chars for username', function () {
//     for (let n = 4; n <= 6; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 148-151 uppercase chars for password', function () {
//     for (let n = 148; n <= 151; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, 'A-Z'));
//       cy.contains('LOGOUT');
//     }
//   });
//   // num string for password
//   it('accepts 1-3 numbers for password', function () {
//     for (let n = 1; n <= 3; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 4-6 uppercase chars for username', function () {
//     for (let n = 4; n <= 6; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
//   it('accepts 148-151 numbers for password', function () {
//     for (let n = 148; n <= 151; n++) {
//       cy.log(`For ${n} chars:`);
//       cy.signUp(stringGenerator(10), stringGenerator(n, '0-9'));
//       cy.wait(2000);
//       cy.contains('LOGOUT');
//     }
//   });
// });
