// Intern code
// The other three classes will extend `Employee`.
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

// const Employee = require('./Employee');

// module.exports = Intern;

// Engineer code
// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
        this.title = "Intern";
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return this.title;
    }
}
module.exports = Intern;

