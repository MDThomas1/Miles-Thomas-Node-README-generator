// The page requirements (fs, inquirer and the markdown template file)
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// The questions used to fill in the template
const questions = [
    'What is the name of your project?', 
    'What is your email address?', 
    'What is your github username?', 
    'Please select a license for your project',
    'Please add a short description of your project.', 
    'Please add any installation requirements that your project has.', 
    'Please enter any information relating to usage of your project.',
    'Please enter any contribution guidelines relating to your project.',
    'Please enter any test conditions relating to your project.'
];

// Renaming the questions in the array so they can be easily added to the prompts
const [name, email, username, license, description, installation, usage, contribution, testing] = questions;

// The function calling each question on the command line
inquirer
.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: name
    },

    {
        type: 'input',
        name: 'creatorEmail',
        message: email
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: username
    },

    {
        type: 'list',
        name: 'projectLicense',
        message: license,
        choices: [
            'License 1', new inquirer.Separator(),
            'License 2', new inquirer.Separator(),
            'License 3', new inquirer.Separator(),
            'License 4', new inquirer.Separator(),
            'N/A', new inquirer.Separator(),
        ]
    },

    {
        type: 'input',
        name: 'projectDescription',
        message: description
    },

    {
        type: 'input',
        name: 'projectInstallation',
        message: installation,
        default: 'N/A'
    },

    {
        type: 'input',
        name: 'projectUsage',
        message: usage
    },

    {
        type: 'input',
        name: 'projectContribution',
        message: contribution,
        default: 'N/A'
    },
    
    {
        type: 'input',
        name: 'projectTesting',
        message: testing,
        default: 'N/A'
    }
])
.then((answers) => {
    //Attaches answers provided to the README template and creates a new markdown file
    const READMEFile = generateMarkdown(answers)

    fs.writeFile('README.md', READMEFile, (err) => 
    err ? console.error('README file creation has been unsuccessful') : console.log('README file has successfully been created')) 
})
