// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Subclass
// 20-Ins-Subclasses
const Employee = require(`./employee`);

class Engineer extends Employee {
  constructor(name, id, email, github, engineer) {
    super(name, id, email);
    this.github = github;
    this.engineer = `Engineer`;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.engineer;
  }
}

module.exports = Engineer;
