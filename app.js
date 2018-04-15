var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var gpio = require('onoff').Gpio;
var button = new(gpio(21, 'out'))


server.listen(8080, function () {
  console.log(‘server running on port 8080’);
});
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

function open() {
  button.writeSync(1)
}

function close() {
  button.writeSync(0)
}
