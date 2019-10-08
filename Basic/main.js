var dt = new Date();
year = dt.getFullYear();
console.log(dt);
console.log(year);


function calcAge(){

	let calc = year - document.getElementById("birthday").value;
	document.getElementById("age").innerHTML = calc;

}
var elementNode = document.getElementById('birthday');
      elementNode.addEventListener('input', calcAge, false);