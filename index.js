const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const electron = require("electron");
const electronHTML = require("electron-html-to");
const generateHTML = require("./generateHTML")
const api = require("./api")
const util = require("util")
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
                <script src="https://kit.fontawesome.com/ba01d065f2.js" crossorigin="anonymous"></script>
                <title>Profile Generator</title>
        </head>
        <body style="background-color: blueviolet;">
                <div class=" container jumbotron" style="background-color: dimgray;">
                        <img src="http://via.placeholder.com/200x200
                        " class="rounded-circle mx-auto d-block" alt="Profile Of Luis Martinez" style="border-radius: 50%; border: darkblue; border-style: solid;">
                        <h1 class="display-4 " style="text-align: center;" id="name">Luis Martinez</h1>
                        <p class="lead" id="location">Chicago, Illinois</p>
                        <hr class="my-4">
                        <p id="bio">A new web developer looking to start in the computer business.</p>
                        <p id="linked">linkedin.com</p>
                        <p id="github">Lpmartinez1109</p>
                        <i class="fab fa-github medium"></i>
                        <i class="fas fa-rss medium"></i>


                        
                      </div>
                      <div class="jumbotron">
                              <div class="row">
                                <div class="card" style="width: 18rem;">
                                        
                                        <div class="card-body">
                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                      <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                              </div>
                              <div class="row">
                                <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                      <div class="card" style="width: 18rem;">

                                        <div class="card-body">
                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                              </div>
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
    
    // const data = data
    
    // const element = document.getElementsByClassName("name")
    // element.innerHTML = html
    // console.log(html);

    
