const inquirer = require("inquirer");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
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
      validate: function (value) {
        var digitsOnly = /\d+/;
        if (digitsOnly.test(value)) { return true; }
        return 'Invalid ID! Must be a number!';
      }
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
      validate: function (value) {
        var digitsOnly = /\d+/;
        if (digitsOnly.test(value)) { return true; }
        return 'Invalid Office! Must be a number!';
      }
    },
    {
      type: "recursive",
      name: "add",
      message: "Would you like to add an engineer?",
      prompts: [
          {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's employee email address?"
          },
          {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's employee ID?"
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's employee email address?"
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github profile name?"
          },
        ]
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
