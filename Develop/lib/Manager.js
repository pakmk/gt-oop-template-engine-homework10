// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Subclass
// 20-Ins-Subclasses
const Employee = require(`./employee`);

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
