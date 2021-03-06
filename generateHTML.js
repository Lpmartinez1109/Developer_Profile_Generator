function generateHTML(data){
        return `<!DOCTYPE html>
         <html lang="en">
         
         <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
                 <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
                         integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                         crossorigin="anonymous">
                 <script src="https://kit.fontawesome.com/ba01d065f2.js" crossorigin="anonymous"></script>
                 <title>Profile Generator</title>
         </head>
         
         <body style="background-color: blueviolet;">
                 <div class=" container jumbotron" style="background-color: dimgray; z-index: 2;">
                         <img src="http://via.placeholder.com/200x200
                                 " class="rounded-circle mx-auto d-block" alt="Profile Of Luis Martinez"
                                 style="border-radius: 50%; border: darkblue; border-style: solid; z-index: 2;">
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
                                 <div class="col-3"></div>
                                 <div class="card col-3" style="width: 18rem;">
                                         <div class="card-body">
                                                 <h2> Repositories: </h1>
                                                 ${data.numOfRepos}
                                         </div>
                                 </div>
                                 <div class="card col-3" style="width: 18rem;">
                                         <div class="card-body">
                                                 <h2>Followers: </h2>
                                                 ${data.followers}
                                         </div>
                                 </div>
                                 <div class="col-3"></div>
                         </div>
                         <div class="row">
                                 <div class="col-3"></div>
                                 <div class="card col-3" style="width: 18rem;">
                                 <div class="card-body">
                                         <h2> Stars: </h2>
                                         ${data.stars}
                                         </div>
                                 </div>
                         <div class="card col-3" style="width: 18rem;">
                                 <div class="card-body">
                                         <h2>Following: </h2>
                                         ${data.followers}
                                         </div>
                                 </div>
                                 <div class="col-3"></div>
                         </div>
                 </div>
                 </div>
         
         </body>
         
         </html>`
     }
module.exports = generateHTML;