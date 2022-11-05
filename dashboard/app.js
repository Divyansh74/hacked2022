const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.set('views');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/public', express.static('public'));
app.use('/views',express.static("views"));

app.get("/", function(req,res){
  res.render("me");
});
app.get('./views/me.ejs', function(req,res,next){
  res.render('me')
});
// app.get('/', (req,res) => res.render('index.html'));


app.get("/next.ejs",(req,res) => res.render('next'));
app.get("/data.ejs",(req,res) => res.render('data'));
// app.get("/graphical-data.ejs",(req,res) => res.render('graphical-data'));
app.get("/contact.ejs",(req,res) => res.render('contact'));


app.listen(3001,function(){
  console.log("server is running on port 3001");
});
