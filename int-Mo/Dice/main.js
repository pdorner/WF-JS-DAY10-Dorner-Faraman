sum = 0;
class Player {
    constructor(name, result) {
        this.name = name;
        this.result = Number(result);
        console.log(this.result);

    }
    rollDice() {



        random = Math.floor(Math.random() * 6 + 1);
        console.log(this.result);

        this.result += Number(random);





        console.log(this.result);

    }
}

var p1 = new Player("player1", 0)
var p2 = new Player("player2", 0);

var roll_Player1 = document.getElementById('p1-button');
roll_Player1.addEventListener('click', p1.rollDice, false);
var roll_Player2 = document.getElementById('p2-button');
roll_Player2.addEventListener('click', p2.rollDice, false);
console.log(p1.result);