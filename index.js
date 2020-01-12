const fs = require("fs");
const inquirer = require("inquirer");
const open = require("open");
const convertFactory = require("electron-html-to");
// const axios = require("axios");
const electron = require("electron");
const generateHTML = require("./generateHTML")
const api = require("./api")
const util = require("util")

const questions =[
    {
        type: "input",
        name: "github",
        message: "what is your Github username?"
    },
    {
        type: "list",
        name: "color",
        message: "what is your favorite color?",
        choices:["red", "blue", "green", "pink"]
    }
]
function writeToFile(filename, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init(){
    inquirer.prompt(questions).then(({ github, color}) =>{
    
        api
        .getUser(github)
        .then((res)=>{
            data.username = username;
            data.numOfRepos = res.data.public_repos;
            data.name = res.data.name;
            data.followers = res.data.followers;
            data.following = res.data.following;
            data.portPic = res.data.avatar_url;
            data.location = res.data.location;
            data.blog = res.data.blog;
            data.company = res.data.company;
            data.bio = res.data.bio
        })
        api.
        
    })
// }.then(html => {
//         const conversion = convertFactory({
//             converterPath: convertFactory.converters.PDF
//         });
//         conversion({html}, function(err, result){
//             if (err){
//                 console.log("Error!");
                
//             }
//         })
//     })

    
    // const data = data
    
    // const element = document.getElementsByClassName("name")
    // element.innerHTML = html
    // console.log(html);

    
    // const data = data
    
    // const element = document.getElementsByClassName("name")
    // element.innerHTML = html
    // console.log(html);

}
