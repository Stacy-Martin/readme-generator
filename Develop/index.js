// TODO: Include packages needed for this application
// these top two look into the node modules folder by default
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')



// *************************************************************************************

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Plese enter your email address: ',
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Title of your project: ',
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What is your file named?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Include the project description here: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'How is your project licensed?',
        choices: ["The Unlicense", "The zlib/libpng License", "Eclipse Public License 1.0", "The Artistic License 2.0", "none"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What packages do you use to install your project?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do users need to know about operating your project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can users contribute to your project?',    
    },
];

// *************************************************************************************

// TODO: Create a function to write README file
 
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

  
// *************************************************************************************

// TODO: Create a function to initialize app
function init() {
    // the call back function then receives a response from the question prompt 
    // the inquirer.prompt returns an object which is the response
    // the response is never saved and the function is asynchronous, .then is the promise of a response and generate the readme
    inquirer.prompt(questions).then(function(response){
        const markdown = generateMarkdown(response)
        writeToFile('README.md', markdown)
    })
}


// *************************************************************************************

// Function call to initialize app 
init();
