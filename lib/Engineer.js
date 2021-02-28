// Engineer code
// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, ID, email, gitHubName) {
        super(name, ID, email);
        this.gitHub = gitHubName;
    }
        getRole() {
            return "Engineer";
        }
        }

module.exports = Engineer;