const express= require('express');
var router = express.Router();
var assert = require('assert');
const app = express();
var mongoose=require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

mongoose.connect(newFunction(),function(err, db){
console.log("connected to db")
//var myobj = { name: "patil" };

app.get('/', function(req,res){

  res.sendfile('index.html');
});


app.get('/login', function(req,res){

  res.sendfile('login.html');

});

var Schema = new mongoose.Schema({
  name : String,
  pass : String
});

var user = mongoose.model('students',Schema);

    app.post('/new', function(req, res){
    new user({
    name : req.body.name,
    pass : req.body.pass
}).save({});
    console.log("added");
    res.send("added successfully");
  });


    app.post('/login', function(req,res){
    var query = { name: req.body.name ,
                  pass : req.body.pass
  };
    users = db.collection("students").find(query).toArray(function(err, result) {
    if(result.length > 0){
    res.send("Yow are welcome");
  }
    else 
  {
    res.send("incorrect username or password");
  }
    
});
});
});
















app.listen(3000);

function newFunction() {
  return 'mongodb://localhost:27017/firstapp';
}
