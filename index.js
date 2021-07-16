const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fileName = "./dist/teamProfile.html";
const employees = [];

function addManagerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team manager's name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter team manager's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter team manager's email",
        name: "email",
      },
      {
        type: "input",
        message: "Enter team manager's office number",
        name: "officeNumber",
      },
    ])
    .then(function ({ name, id, email, officeNumber }) {
      newEmployee = new Manager(name, id, email, officeNumber);
      employees.push(newEmployee);
      addEmployeePrompt();
    });
}

function addEmployeePrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to: ",
        name: "choice",
        choices: ["Add an engineer", "Add an intern", "Finish building team"],
      },
    ])
    .then(function ({ choice }) {
      switch (choice) {
        case "Add an engineer":
          addEngineerPrompt();
          break;
        case "Add an intern":
          addInternPrompt();
          break;
        default:
          const html = generateHtml(employees);
          writeToFile(fileName, html);
          break;
      }
    });
}

function addEngineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineer's name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter engineer's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter engineer's email",
        name: "email",
      },
      {
        type: "input",
        message: "Enter engineer's GitHub username",
        name: "github",
      },
    ])
    .then(function ({ name, id, email, github }) {
      newEmployee = new Engineer(name, id, email, github);
      employees.push(newEmployee);
      addEmployeePrompt();
    });
}

function addInternPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern's name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter intern's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter intern's email",
        name: "email",
      },
      {
        type: "input",
        message: "Enter intern's school name",
        name: "school",
      },
    ])
    .then(function ({ name, id, email, school }) {
      newEmployee = new Intern(name, id, email, school);
      employees.push(newEmployee);
      addEmployeePrompt();
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`File Created:\t ${fileName}`)
  );
}

//function to initialize app
function init() {
  addManagerPrompt();
}

// Function call to initialize app
init();
