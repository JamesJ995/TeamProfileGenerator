const inquirer = require("inquirer");
const fs = require("fs");

function questions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the team manager's employee ID?",
    },
    {
      type: "input",
      name: "mangerEmail",
      message: "What is the team manager's employee email address?",
    },
    {
      type: "input",
      name: "mangerOffice",
      message: "What is the team manager's office number?",
    },
    {
      type: "list",
      name: "add",
      message: "Would you like to: ",
      choices: ["Add an engineer", "Add an intern", "Finish building team"],
    },
  ]);
}

//function to initialize app
async function init() {
  const userInput = await questions();
  const fileName = "index.html";
  const teamHTML = await generateMarkdown(userInput);
  writeToFile(fileName, teamHTML);
}

// Function call to initialize app
init();
