const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

const postDetails = [];

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    postDetails:postDetails
  })
})

app.get("/about", function(req, res){
  res.render("about", {abt: contactContent})
})  

app.get("/contact", function(req, res){
  res.render("contact", {cntc: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const postInfo = {
    titel: req.body.cmpos1,
    detail: req.body.cmpos2
  };
  postDetails.push(postInfo); 
  res.redirect("/")
});

app.get("/post/:word", function(req, res){
  const urlParam = _.lowerCase(req.params.word); 

  postDetails.forEach(function(postItem){
    const titelCompose = _.lowerCase(postItem.titel);

    if(urlParam === titelCompose){
      res.render("post",{
        titel: postItem.titel, 
        detail: postItem.detail
      }); 
    }
  }); 
});

 

app.listen(3000, function() {
  console.log("Server started on port 3000");
})














// //jshint esversion:6

// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const _ = require("lodash")
// // const home = require(__dirname + "/home.ejs")

// const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
// const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
// const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// const postDetails = [];

// // app.get("/post/:word", function(req, res){
// //   console.log(req.params.word);
// // })

// app.get("/", function(req, res){
//   res.render("home", {
//     startingContent: homeStartingContent,
//     postDetails:postDetails
//   })
// })

// app.get("/about", function(req, res){
//   res.render("about", {abt: contactContent})
// })  

// app.get("/contact", function(req, res){
//   res.render("contact", {cntc: contactContent});
// });

// app.get("/compose", function(req, res){
//   res.render("compose");
// });

// app.post("/compose", function(req, res){
//   const postInfo = {
//     titel: req.body.cmpos1,
//     detail: req.body.cmpos2
//   };
//   postDetails.push(postInfo); 
//   res.redirect("/")
// });

// // app.get("/post/:word/add/:ad/input/:new", function(req, res){
// //   console.log(req.params.new); 
// //   console.log(req.params.ad);
// //   console.log(req.params.word);  
// // })

// app.get("/post/:word", function(req, res){
//   const urlParam = _.lowerCase(req.params.word); 

//   postDetails.forEach(function(postItem){
//     const titelCompose = _.lowerCase(postItem.titel);

//     if(urlParam === titelCompose){
//       res.render("post",{
//         titel: postItem.titel, 
//         detail: postItem.detail
//       }); 
//     }
//   }); 
// });

// // app.get("/post/:word", function(req, res){
// //   (req.params.word )
// //     if(req.params.word === req.body.cmpos1){
// //       console.log("Match found!")
// //     } else (console.log("Not Match"))    
// //   })   


// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// })
