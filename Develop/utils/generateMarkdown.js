// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "The Unlicense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  else if (license === "The zlib/libpng License"){
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  }
  else if (license === "Eclipse Public License 1.0"){
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (license === "The Artistic License 2.0"){
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "The Unlicense"){
    return "[License: Unlicense](http://unlicense.org/)"
  }
  else if (license === "The zlib/libpng License"){
    return "[License: Zlib](https://opensource.org/licenses/Zlib)"
  }
  else if (license === "Eclipse Public License 1.0"){
    return "[License: WTFPL](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (license === "The Artistic License 2.0"){
    return "[License: Artistic-2.0](https://opensource.org/licenses/Artistic-2.0)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return '[License](#license)';
  }else{
    return ""
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseSection(data.license)}
* [Contributions](#contributions)
* [Questions](#questions)

## Installation
Some dependencies are necessary, execute the following command for proper functioning:
~~~
${data.installation}
~~~

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributions
${data.contributions}

## Questions
* I am always grateful for feedback! Contact me at ${data.email}.
* If you have questions feel free to contact me directly or create an issue. 
* To see more of my work, check out [${data.username}](https://github.com/${data.username}).`
}

// exports the function generateMarkdown to be seen by other 
module.exports = generateMarkdown;
