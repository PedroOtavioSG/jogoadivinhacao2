var correctNumber = Math.floor(Math.random() * 101); 
var guessCount = 0; 

function checkGuess(){ 
	var guess = parseInt(document.getElementById("guess").value); 
	guessCount++;
	if (guess === correctNumber){
		var points = 100 - (guessCount - 1);
		document.getElementById("result").innerHTML = "Parab�ns, voc� acertou! Pontua��o: " + points;
		document.getElementById("guessButton").disabled = true; 
}
	else if (guess < correctNumber){
		document.getElementById("result").innerHTML = "Tente um n�mero maior.";
} 
	else {
		document.getElementById("result").innerHTML = "Tente um n�mero menor."; 
} 
}
