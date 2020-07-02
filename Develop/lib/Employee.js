// TODO: Write code to define and export the Employee class
// Parent Class
// 18-Ins-Classes
class Employee {
  constructor(name, id, email, employee) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.employee = `Employee`;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.employee;
  }
}

module.exports = Employee;
