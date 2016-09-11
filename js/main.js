$(document).ready(function(){

$("#zAquarius").click(function(){
	myFunction()
	$("#Aquarius").toggle()
})
$("#zAries").click(function(){
	myFunction()
	$("#Aries").toggle()
})

$("#zCancer").click(function(){
	myFunction()
	$("#Cancer").toggle()
})
$("#zCapricorn").click(function(){
	myFunction()
	$("#Capricorn").toggle()
})
$("#zGemini").click(function(){
	myFunction()
	$("#Gemini").toggle()
})
$("#zLeo").click(function(){
	myFunction()
	$("#Leo").toggle()
})
$("#zLibra").click(function(){
	myFunction()
	$("#Libra").toggle()
})
$("#zPisces").click(function(){
	myFunction()
	$("#Pisces").toggle()
})
$("#zSagittarius").click(function(){
	myFunction()
	$("#Sagittarius").toggle()
})
$("#zScorpio").click(function(){
	myFunction()
	$("#Scorpio").toggle()
})
$("#zTaurus").click(function(){
	myFunction()
	$("#Taurus").toggle()
})
$("#zVirgo").click(function(){
	myFunction()
	$("#Virgo").toggle()
})

// moves the bottom icons down the page when a sign is clicked
$(".dropdown-link").click(function(){
	$(".row").animate({bottom:"-80%"},5)
})

var tags = document.getElementsByClassName("initiallyHidden")

document.getElementsByClassName("dropdown-link").onclick = function() {
myFunction()}

function myFunction() {
	// loop through all tags with class initiallyHidden
	for (var i = 0; i < tags.length; i++) {
		// check for any tag that has display:block
		if(tags[i].style.display == "block"){
			// change that tag to display:none
			tags[i].style.display = "none"
		}
	}
}

}) //End Document.ready






