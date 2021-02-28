
let inquirer = require('inquirer');
var fs = require('fs');
const jest = require("jest");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
var ID = 0;
var teamArray = [];

//index.js

// let fs = require('fs');
const util = require('util');
// const generateHTML = require('./src/generateHTML');
// const promisify = require('util.promisify');

// TODO: Create an array of questions for user input
// const writeFileAsync = util.promisify(fs.writeFile);

// fs.writeFile('renderedTeamProfile.html', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

function promptUser (answers)  {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is the employee's role? Please select one using the up or down arrow keys and hit enter.",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function (res) {
        console.log(res)
        if (res.role === "Manager") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is the employee's name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is the employee's email?"
                },
                {
                    name: "officeNumber",
                    type: "input",
                    message: "What is the manager's office number?"
                }
            ]).then(function (managerRes) {
                var newManager = new Manager(managerRes.name, managerRes.email, ID, managerRes.officeNumber);
                ID = ID + 1; // could be "ID++"
                console.log(newManager);
                teamArray.push(newManager);
                addUser();
                
            });
        } else if (res.role === "Engineer") {
            inquirer.prompt([
            {
                type: "input",
                message: "Enter the engineer's name, please:",
                name: "Name"
            },
            {
                type: "input",
                message: "Enter the engineer's employee ID:",
                name: "ID"
            },
            {
                type: "input",
                message: "Enter the engineer's email address:",
                name: "Email"
            },
        {
            type: "input",
            message: "Enter the engineer's GitHub Username:",
            name: "GitHub"
        }
    ]).then(function (engineerRes) {
        var newEngineer = new Engineer(engineerRes.name, engineerRes.email, ID, engineerRes.github);
        ID = ID + 1; // could be "ID++"
        console.log(newEngineer);
        // run promptUser (called recursion) so that you can add multiple Engineers and id changes incrementally
        teamArray.push(newEngineer);
        addUser();
        
    });
} else if (res.role === "Intern") {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the intern's name?",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "What is the intern's email address?"
        },
        {
            name: "school",
            type: "input",
            message: "Where did the intern attend college/university?"
        }
    ]).then(function (internRes) {
        var newIntern = new Intern(internRes.name, internRes.email, ID, internRes.school);
        ID = ID + 1; // could be "ID++"
        console.log(newIntern)
        teamArray.push(newIntern);
        addUser();
    });
    };
})
    .catch(function (err) {
        console.log(err);
    });

};
promptUser();
