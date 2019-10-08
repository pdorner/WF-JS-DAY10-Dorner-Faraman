class Hotel{
	constructor(name, rooms){
		this.name = name;
       this.rooms = rooms;
       this.booked;
	}
	checkStaus(){
		let random = Math.floor(Math.random()*length*10+1);
		let nights = document.getElementById("night").value;
		if (nights > random){
			document.getElementById("status").innerHTML = "Sorry, no free room for the " + this.name + " "+ nights + " nights";
		}else{
	document.getElementById("status").innerHTML = "I'll reserve";

		}
   }
   
}
var hiltonHotel = new Hotel('Hilton', '80');
var mariottHotel = new Hotel('Marriott', '78');
var holidayInnHotel = new Hotel('Holiday Inn', '48');

function check(){
	hiltonHotel.checkStaus();
}
var elementNode1 = document.getElementById('button');
      elementNode1.addEventListener('click', check, false);



function check1(){
	mariottHotel.checkStaus();
}
var elementNode1 = document.getElementById('button1');
      elementNode1.addEventListener('click', check1, false);
function check2(){
	holidayInnHotel.checkStaus();
}
var elementNode2 = document.getElementById('button2');
      elementNode2.addEventListener('click', check2, false);