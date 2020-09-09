/**
 * Custom Cypress command that registeres a new user into the application, and stores the credentials into logs.json file.
 * @typedef {Object} User
 * @property {string} name The name of the user.
 * @property {string} email The email of the user.
 * @property {string} pass The password of the user.
 */
export default class User {
  constructor(name, pass) {
    this.name = name;
    this.email = `${name}@email.org`;
    this.pass = pass;
  }
}
