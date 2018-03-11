var express = require('express');
var app = express();
var http = require('http').createServer(handler);
var router = express.Router();


//ROUTES
// Redirects to index.html when root level requested
app.get('/',function(req,res,next){
res.sendFile(__dirname + '/public/index.html');
});

app.get('/index',function(req,res,next){
res.sendFile(__dirname + '/public/index.html');  
});


app.listen(8080);