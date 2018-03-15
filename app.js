var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//ROUTES
app.get('/',function(req,res,next){
res.sendFile(__dirname + '/public/index.html');
});

app.get('/index',function(req,res,next){
res.sendFile(__dirname + '/public/index.html');
});

app.get('/index.js',function(req,res,next){
res.sendFile(__dirname + '/public/index.js');
});

app.get('/socket.io.js',function(req,res,next){
res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
});

app.listen(8080);
