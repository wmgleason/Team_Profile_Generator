var fs = require('fs');

fs.writeFile('renderedTeamProfile.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
//index.js
let inquirer = require('inquirer');
// let fs = require('fs');
const util = require('util');
const generateHTML = require('./src/generateHTML');
// const promisify = require('util.promisify');
// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

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

function promptUser()  {
    return inquirer.prompt(answers)[
        {
            type: "input",
            message: "Enter the team manager's name, please:",
            name: "Name"
        },
        {
            type: "input",
            message: "Enter the manager's employee's ID:",
            name: "ID"
        },
        {
            type: "input",
            message: "Enter the manager's email address:",
            name: "Email"
        },
        {
            type: "number",
            message: "Enter manager's office number:",
            name: "OfficeNumber"
        },
        {
            type: "list",
            message: "Please add additional employees to complete your team; what is the role of the next new employee?",
            name: "Role",
            choices: [
                "Engineer",
		        "Intern"
            ]
        }
    ]};
    then(answers => {
        console.info('Answer:', answers.Role);
        if (answers.Role ==  "Engineer") {
        inquirer
          .prompt ([
        {
            type: "input",
            message: "Enter engineer's employee ID:",
            name: "ID"
        },

        {
            type: "input",
            message: "Enter contribution guidelines for your project:",
            name: "Contributing"
        },
        {
            type: "input",
            message: "Enter test information for your project:",
            name: "Tests"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "GitHub"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "Email"
        },
        ]);
        }
    }


        async () => {
            try {
                // Ask the user questions and use the responses they entered
                const answers = await promptUser();
                const generateContent = generateHTML(answers);
                // Write new README.md which overwrites old in this directory
                await writeFileAsync('./dist/teamROTA.html', generateContent);
                console.log("✔️  Success! Your Team Rota HTML file has been generated.");
            } catch (err) {
                console.log(err);
            }
        }
}
  // function call to initialize program
init();