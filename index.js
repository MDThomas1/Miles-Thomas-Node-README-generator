// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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

const [name, email, username, license, description, installation, usage, contribution, testing] = questions;

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
        message: license
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEFile = generateMarkdown(data)

    fs.writeFile('README.md', READMEFile, (err) => 
    err ? console.error('README file creation has been unsuccessful') : console.log('README file has successfully been created')) 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
