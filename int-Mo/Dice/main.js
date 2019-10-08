class Player{
	constructor(name, result){
		this.name= name; 
		this.result= Number(result);

	}
	rollDice(){
		for (var i = 0;i<3;i++){
			let random = Math.floor(Math.random()*6+1);
			this.result += random;
		}
	}
}


var p1 = new Player("player1", '0');
var p2 = new Player("player2", '0');

var roll_Player1 = document.getElementById('p1-button');
      roll_Player1.addEventListener('click', p1.rollDice, false);
console.log(p1.result);