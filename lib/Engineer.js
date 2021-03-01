// Engineer code
// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
    }
        getRole() {
            return "Engineer";
        }

    getGithub(){
        return this.gitHub;
    }
    }

module.exports = Engineer;