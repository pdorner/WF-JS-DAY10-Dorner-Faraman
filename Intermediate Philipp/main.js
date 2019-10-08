function liter(){
	 lit = document.getElementById("kilometer").value;
	 km = document.getElementById("liter").value;
	 sum = lit/km;
	document.getElementById("summe").innerHTML = sum + " Liter werden verbraucht";

}
var elementNode1 = document.getElementById('liter');
      elementNode1.addEventListener('input', liter, false);

 var elementNode2 = document.getElementById('kilometer');
      elementNode2.addEventListener('input', liter, false);