const fs = require("fs");
const inquirer = require("inquirer");
const open = require("open");
const convertFactory = require("electron-html-to");
// const axios = require("axios");
const electron = require("electron");
const generateHTML = require("./generateHTML")
const api = require("./api")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile)

let data = {}
let username ={}
// let path = {}
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
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init(){
    inquirer.prompt(questions).then(({ github, color}) =>{
    
        api
        .getUser(github)
        .then((res)=>{
            data.username = res.data.login;
            data.numOfRepos = res.data.public_repos;
            data.name = res.data.name;
            data.followers = res.data.followers;
            data.following = res.data.following;
            data.portPic = res.data.avatar_url;
            data.location = res.data.location;
            data.blog = res.data.blog;
            data.company = res.data.company;
            data.bio = res.data.bio
        }).then(html => {
            const conversion = convertFactory({
              converterPath: convertFactory.converters.PDF
            });
            conversion({ html }, function(err, result) {
              if (err) {
                return console.error(err);
              }
              result.stream.pipe(
                fs.createWriteStream(path.join(__dirname, "resume.pdf")),
                
              );
              conversion.kill();
            });
            open(path.join(process.cwd(), "resume.pdf"));
          });
      });
    
    }
// fs.writeFile("index.html", function(err){
//     if (err){
//         return console.log(err);}
//     })
init();