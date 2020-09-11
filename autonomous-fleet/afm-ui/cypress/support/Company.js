/**
 * Custom Cypress command that registeres a new user into the application, and stores the credentials into logs.json file.
 * @typedef {Object} Company
 * @property {string} name The name of the company.
 * @property {string} vat The VAT of the company.
 * @property {string} address The address of the company.
 * @property {string} country The country of the company.
 * @property {string} regNo The registration number of the company.
 * @property {boolean} isClient Determines if the company is a client or a supplyer.

 */
export default class Company {
  constructor(name, vat, address, regNo, isClient) {
    this.name = name;
    this.vat = vat;
    this.address = address;
    this.country = 'Romania';
    this.regNo = regNo;
    this.isClient = isClient;
  }
}
