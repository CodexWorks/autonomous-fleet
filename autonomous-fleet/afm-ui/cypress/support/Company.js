export default class User {
  constructor(name, vat, address, regNo, isClient) {
    this.name = name;
    this.vat = vat;
    this.address = address;
    this.country = 'Romania';
    this.regNo = regNo;
    this.isClient = isClient;
  }
}
