// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.projectDescription}

## Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests 
* Questions

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
* ${data.githubUsername}
`;
}

module.exports = generateMarkdown;
