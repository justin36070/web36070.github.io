function fn1() {
    var str = document.getElementById("text1").value;
    var clear = ' ';
    var output = document.getElementById('output');
    output.innerHTML = str; 
document.getElementById("myForm").reset();
}
var input = document.getElementById("text1");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn1").click();
  }
});

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});