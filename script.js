var color1 = document.getElementById("first-color");
var color2 = document.getElementById("second-color");
var body = document.querySelector("body");
var div = document.querySelector("p");

setGradientColors();

function setGradientColors(){
  body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
  div.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradientColors);
color2.addEventListener("input",setGradientColors);

