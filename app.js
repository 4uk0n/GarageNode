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

app.listen(80, function () {
  console.log(‘server running on port 3000’);
})

io.sockets.on('connection', function (socket) {// WebSocket Connection
  var lightvalue = 0; //static variable for current status
  socket.on('light', function(data) { //get light switch status from client
    lightvalue = data;
    if (lightvalue) {
      console.log(lightvalue); //turn LED on or off, for now we will just show it in console.log
    }
  });
});
