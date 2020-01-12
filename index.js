const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const electron = require("electron");
const electronHTML = require("electron-html-to");
const generateHTML = require("./generateHTML")
const api = require("./api")
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "bio",
        message: "Who are you?"
      },
      {
        type: "input",
        name: "LinkedIn",
        message: "What is your LinkedIn URL?"
      },
      {
        type: "input",
        name: "GitHub",
        message: "What is your Github name?"
      },
    ]).then(function(data){
        console.log(data);
        const html = ` 
         
        <!DOCTYPE html>
        <html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">                
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <title>Document</title>
        </head>
        <body>
                <div class=" container jumbotron">
                
                        <h1 class="display-4" id="name">${data.name}</h1>
                        <p class="lead" id="location">${data.location}</p>
                        <hr class="my-4">
                        <p id="bio">${data.bio}</p>
                        <p id="linked">${data.LinkedIn}</p>
                        <p id="github">${data.GitHub}</p>
                        
                      </div>
                
        </body>
       
        </html>
           
           
    
    `
fs.writeFile("index.html", html, function(err){
    if (err){
        return console.log(err);
        
    }
    console.log("Success");
    
    // const data = data
    
    // const element = document.getElementsByClassName("name")
    // element.innerHTML = html
    // console.log(html);
})
    })
