var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var gpio = require('onoff').Gpio;
var button = new gpio(21, 'out');


server.listen(8080, function () {
  console.log('server running on port 8080');
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
res.sendFile(__dirname + '/public/socket.io.js');
});

io.sockets.on('connection',function (socket){
	var lightvalue = 0;
	socket.on('toggleDoor', function(data) {
    button.writeSync(1);
    console.log(button.readSync());
    sleep(250);
    button.writeSync(0);
		}
	});
});
