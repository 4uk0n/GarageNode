var num = 0;
var socket = io.connect('http://garagenode.local:8080');
var btn = document.getElementById("demo");

btn.addEventListener("click", btnClick);

function btnClick() {
  if (num == 0){
    document.getElementById("demo").className = "btn btn-success btn-lg";
	  num += 1;
	  socket.emit("toggleDoor", 1);
  } else {
    document.getElementById("demo").className = "btn btn-primary btn-lg";
	  num = 0;
	  socket.emit("toggleDoor", 0);
  }
}
