// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// The template used for generated READMEs
function generateMarkdown(data) {
  return `# ${data.projectName}

## Description
${data.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

## Installation
${data.projectInstallation}

## Usage 
${data.projectUsage}

## License
${data.projectLicense}

## Contributing 
${data.projectContribution}

## Testing 
${data.projectTesting}

## Questions
If you have any questions about this project, you can reach me at:
* ${data.creatorEmail}
* https://github.com/${data.guthubUsername}
`;
}

module.exports = generateMarkdown;
