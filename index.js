const inquirer = require("inquirer");
var fs = require("fs");
const jest = require("jest");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
var teamProfileArray = [];

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
            choices: ["Engineer", "Intern", "Manager"]
        }
        ])
            .then(addManager);
            
}
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the manager's employee ID?"
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
        var newManager = new Manager(managerRes.name, managerRes.email, ID, managerRes.officeNumber);
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
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "Enter the engineer's name, please:"
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the engineer's employee ID:"
        },
        {
            type: "input",
            name: "Email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "GitHub",
            message: "Enter the engineer's GitHub Username:"
        }
    ]).then(function (engineerRes) {
        var newEngineer = new Engineer(engineerRes.name, engineerRes.email, ID, engineerRes.github);
        ID = ID;
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
            name: "school",
            type: "input",
            message: "Where did the intern attend college/university?"
        }   
    ]).then(function (internRes) {
        var newIntern = new Intern(internRes.name, internRes.email, ID, internRes.school);
        ID = ID;
        console.log(newIntern);
        teamProfileArray.push(newIntern);
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
    console.log("Success! Your team rota has now been generated as an html file.")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${teamProfileArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < teamProfileArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamProfileArray[i].name}</h2>
                <h2>${teamProfileArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamProfileArray[i].id}</p>
                <p>Email: <a href="mailto:${teamProfileArray[i].email}">${teamProfileArray[i].email}</a>></p>
        `
    fs.writeFile(`.dist/renderedTeamProfile/${teamProfileArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}
}
promptUser()