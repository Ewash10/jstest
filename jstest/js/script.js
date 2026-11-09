
let message = document.getElementById("message");
let button = document.getElementById("colorButton");


function changeMessage() {
  message.textContent = "You clicked the button!";
  message.style.color = "blue";
}


button.addEventListener("click", changeMessage);