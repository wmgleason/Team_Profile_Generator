const inquirer = require("inquirer");
var fs = require("fs");
const jest = require("jest");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js")
const style = require("./dist/styles.css")
let teamProfileArray = [];
const id = 0

const util = require("util");
// const teamProfile = require('./src/teamProfile.html');
// const promisify = require('util.promisify');

// TODO: Create an array of questions for user input
// const writeFileAsync = util.promisify(fs.writeFile);

// fs.writeFile('teamProfile.html', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

function promptUser ()  {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select the employee's role using the up or down arrow keys and hit enter.",
            choices: ["Manager", "Engineer", "Intern"]
        }
        ])
            .then(addManager);
            
}
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
    ])
    .then(function (managerRes) {
        var newManager = new Manager(managerRes.name, managerRes.email, managerRes.officeNumber, managerRes.id);
        console.log(newManager);
        teamProfileArray.push(newManager);
        addEmployee();
        });

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add an additional team member?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addEmployeeRole"
        }
    ])
            
        .then(function (res) {
            
            switch (res.addEmployeeRole) {
                case "Yes, please add an engineer.":
                    addEngineer();
                    break;
            
                case "Yes, please add an intern.":
                    addIntern();
                    break;
                case "No, my team is perfect.":
                    completeTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name, please:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter the engineer's GitHub Username:"
        }
    ]).then(function (engineerRes) {
        var newEngineer = new Engineer(engineerRes.name, engineerRes.email, engineerRes.id, engineerRes.gitHub);
        console.log(newEngineer);
        teamProfileArray.push(newEngineer);
        addEmployee();  
    });
}
    
function addIntern(){
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
            type: "input",
            name: "id",
            message: "Enter the intern's employee id?"
        },
        {
            name: "school",
            type: "input",
            message: "Where did the intern attend college/university?"
        }   
    ]).then(function (internRes) {
        var newIntern = new Intern(internRes.name, internRes.email, internRes.id, internRes.school);
        console.log(newIntern);
        teamProfileArray.push(newIntern);
        console.log(teamProfileArray);
        addEmployee();
    });
}
        // .catch(function (err) {
        // console.log(err);
        // });

function addEmployee(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberRes"
        }
    ])
        .then(function (res) {
    
            switch (res.addMemberRes) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;
    
                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    completeTeam();
                    break;
            }
        })
}
function completeTeam() {
    console.log("  Success! Your team rota has now been generated as an html file.  ")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Your Team Profile</title>
    <link href="https://fonts.googleapis.com/css?family=JetBrains+Mono&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>Your Team Profile!</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 0; i < teamProfileArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamProfileArray[i].name}</h2>
                <h2>${teamProfileArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee id: ${teamProfileArray[i].id}</p>
                <p>Email: <a href="mailto:${teamProfileArray[i].email}">${teamProfileArray[i].email}</a>></p>
        `
        if (teamProfileArray[i].officeNumber) {
            object += `
            <p>${teamProfileArray[i].officeNumber}</p>
            `
        }
        if (teamProfileArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamProfileArray[i].github}">${teamProfileArray[i].github}</a></p>
            `
        }
        if (teamProfileArray[i].school) {
            object += `
            <p>School: ${teamProfileArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/renderedTeamProfile.html`, htmlArray.join(""), function (err) {
        
    })
}

}
promptUser()