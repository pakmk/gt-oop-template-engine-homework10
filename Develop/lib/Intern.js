// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Subclass
// 20-Ins-Subclasses
const Employee = require(`./employee`);

class Intern extends Employee {
  constructor(name, id, email, school, intern) {
    super(name, id, email);
    this.school = school;
    this.intern = `Intern`;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.intern;
  }
}

module.exports = Intern;
