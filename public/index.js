var num = 0;
var socket = io()
var btn = document.getElementById("demo");

btn.addEventListener("click", btnClick);

function btnClick() {
  if (num == 0){
    document.getElementById("demo").className = "btn btn-success btn-lg";
    socket.emit("light", Number(this.checked))
    num += 1;
  } else {
    document.getElementById("demo").className = "btn btn-primary btn-lg";
    num = 0;
  }
}
