var num = 0;

document.getElementById("demo").addEventListener("click", btnClick);

function btnClick() {
  if (num == 0){
    document.getElementById("demo").className = "btn btn-success btn-lg";
    num += 1;
  } else {
    document.getElementById("demo").className = "btn btn-primary btn-lg";
    num = 0;
  }
}
