const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
