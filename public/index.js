var num = 0;
var socket = io.connect('http://localhost');
var btn = document.getElementById("demo");

btn.addEventListener("click", btnClick);

function btnClick() {
  if (num == 0){
    document.getElementById("demo").className = "btn btn-success btn-lg";

    socket.on('news', function (data) {
        console.log('test');
});
    num += 1;
  } else {
    document.getElementById("demo").className = "btn btn-primary btn-lg";
    num = 0;
  }
}
