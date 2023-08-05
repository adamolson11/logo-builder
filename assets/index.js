import fs from 'fs'
import inquirer from "inquirer"
import {getGitHubReadmemd} from './helpers.js'


inquirer.prompt([

    {

        type: 'input',
        name: 'name',
        message: 'What do you think of this project so far?',
    },

   
])
    .then(answers => {
        const md = getGitHubReadmemd(answers)
        fs.writeFile(`./newFiles/${answers.name}.md`, md, err => {
            if (err) {
                throw err
            }

            console.log(`${answers.name}.md saved!`)
        })
    })
    .catch(error => console.log(error))