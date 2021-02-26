// Engineer code
// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
        super(name, id, email);
        this.gitHubName = gitHubName;
        this.role = "Engineer";
        this.getGithub = function() {
            return this.gitHubName;
        }
    }
};
module.exports = Engineer;