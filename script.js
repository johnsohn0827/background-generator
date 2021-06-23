// Selecting h3
var css = document.querySelector("h3")

// Selecting colors
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

// Selecting the body
var body = document.getElementById("gradient")
//Selecting the random button
var random = document.getElementById("random")

//Function to set diff background colors
function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value +")"

    css.textContent = body.style.background + ";"
}

//Function to set random background colors
function setRandomColor(){
    var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;

}

function randomColors(){
    color1.value = setRandomColor()
    color2.value = setRandomColor()

    setGradient()
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

random.addEventListener('click', randomColors)






