var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
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

// app.listen(80, function () {
//   console.log(‘server running on port 3000’);
// })

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
