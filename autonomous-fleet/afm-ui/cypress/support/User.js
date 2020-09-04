export default class User {
  constructor(name, pass) {
    this.name = name;
    this.email = `${name}@email.org`;
    this.pass1 = pass;
    this.pass2 = pass;
  }
}
