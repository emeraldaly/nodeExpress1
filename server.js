var express = require('express');
var omdb = require('omdb');
var github = require('github');
var GitHubApi = require('node-github');
var github = new GitHubApi({
    version: "3.0.0"
    });

var app = express();
var PORT = process.env.PORT || 8090;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() +  "/views/home.html");
});

app.get("/register", function(req, res) {
  res.sendFile(process.cwd() + "/views/register.html");
});

app.get("/dashboard", function(req, res) {
  res.sendFile(process.cwd() + "/views/dashboard.html")
});

// app.get('/movies/:movieName', function(req, res) {
//   omdb.search(req.params.movieName, function(err, movies) {
//     if(movies.length > 0){

//     var firstMovie = movies[0];
//   } else {
//     res.send(404)("not found");
//   }


//     res.send(JSON.stringify(firstMovie));

//   });
// });


//route that accepts github usernames
//github api wrapper - to get data back
app.get('/dashboard/:githubname', function(req, res) {
  console.log(req, params, githubname)
github.user.getFrom({
      user: "emeraldaly"
  }, function(err, gitResponse){
    // console.log(gitResponse);
      res.send(JSON.stringify(gitResponse))
  });
});

app.listen(PORT, function() {
  console.log("listening on port %s", PORT);
});