const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);




function promptUser() {
   return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of your project?"

        },
        {
            type: "input",
            name: "installation",
            message: "Please describe installation instructions."

        },
        {
            type: "input",
            name: "usage",
            message: "Please describe usage of your project."

        },
        {
            type: "input",
            name: "license",
            message: "Please include licensing information."

        },
        {
            type: "input",
            name: "contributors",
            message: "Please include others who have contributed to your project."

        },
        {
            type: "input",
            name: "tests",
            message: "Please provide an example for how to run your code."

        }]);

 
}
function generateHTML(answers) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>README</title>
            </head>
            <body>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                      <h1 class="display-4">${answers.title}</h1>
                      <p class="lead">${answers.description}</p>
                    </div>
                  </div>
                  <div class="list-group">
                      <ul>
                      <h2>Table of Contents</h2>
                    <li><a href="#Installation" class="list-group-item list-group-item-action"style="text-decoration: none;">
                      Installation
                    </a></li>
                    <li><a href="#Usage" class="list-group-item list-group-item-action" style="text-decoration: none;">Usage</a></li>
                    <li><a href="#License" class="list-group-item list-group-item-action"style="text-decoration: none;">License</a></br></li>
                    <li><a href="#Contributors" class="list-group-item list-group-item-action"style="text-decoration: none;">Contributors</a></li>
                    <li><a href="#Tests" class="list-group-item list-group-item-action"style="text-decoration: none;">Tests</a></li>
                    <li><a href="#Questions" class="list-group-item list-group-item-action"style="text-decoration: none;">Questions</a></li>
                      </ul>
                  </div>
                  <div>
                    <h3><span class="badge badge-secondary" id="Installation">Installation</span></h3>
                    <p>${answers.installation}</p>
                  </div>
                  <div>
                    <h3><span class="badge badge-secondary" id="Usage">Usage</span></h3>
                    <p>${answers.usage}</p>
                  </div>
                  <div>
                    <h3><span class="badge badge-secondary" id="License">License</span></h3>
                    <p>${answers.license}</p>
                  </div>
                  <div>
                    <h3><span class="badge badge-secondary" id="Contributors">Contributors</span></h3>
                    <p>${answers.contributors}</p>
                  </div>
                  <div>
                    <h3><span class="badge badge-secondary" id="Tests">Tests</span></h3>
                    <p>${answers.tests}</p>
                  </div>
                  <div>
                    <h3><span class="badge badge-secondary" id="Questions">Questions</span></h3>
                    <p>{gitHub photo}</p>
                    <p>For any questions, please feel free to reach out. I can be reached at: {github email}</p>
                  </div>
            </body>
            </html>`;
}
// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index2.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

async function init() {
    console.log("hi"); 
    try {
        const answers = await promptUser();

        const html = generateHTML(answers);

        await writeFileAsync("index.html", html);

        console.log("Successfully wrote to index.html");
    } catch (err) {
        console.log(err);
    };
};

init();





// axios 
// .get()


