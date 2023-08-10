const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG } = require('../assets/helpers.js');

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the file?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'what shape would you like the logo to be?',
    choices: ["triangle", "circle", "square"], // Shape
  },
  {
    type: 'maxlength-input',
    name: 'title',
    message: 'Enter a title',
    maxLength: 3,
  },
  {
    type: 'list',
    name: 'color',
    message: 'please select the color you want to use',
    choices: ["blue", "red", "yellow"], // Color
  },
])
  .then(answers => {
    const svg = generateSVG(answers);
    fs.writeFile(`../examples/${answers.name}.svg`, svg, err => {
      if (err) {
        throw err;
      }

      console.log(`${answers.name}.svg saved!`);
    });
  })
  .catch(error => console.log(error));
