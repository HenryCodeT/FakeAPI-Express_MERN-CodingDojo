const { faker } = require('@faker-js/faker');

class Company {
  constructor() {
    this._id = Company.incrementId();
    // this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = {
        street:faker.address.streetAddress(),
        city:faker.address.city(),
        state:faker.address.state(),
        postalCode:faker.address.zipCode(),
        country:faker.address.country()
    }
  }
  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      this.latestId++;
    }
    return this.latestId;
  }
}

module.exports=Company;