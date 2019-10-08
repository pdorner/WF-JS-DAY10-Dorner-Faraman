var dt = new Date();
year = dt.getFullYear();
console.log(dt);
console.log(year);


function calcAge() {

    let calc = year - document.getElementById("birthday").value;
    document.getElementById("age").innerHTML = calc;

}
var elementNode = document.getElementById('birthday');
elementNode.addEventListener('input', calcAge, false);


//Basic 2

function short() {
    arg1 = document.getElementById("argu1").value;
    arg2 = document.getElementById("argu2").value;
    document.getElementById("shortString").innerHTML = arg1.slice(0, arg2);

}
var elementNode1 = document.getElementById('argu2');
elementNode1.addEventListener('input', short, false);

var elementNode2 = document.getElementById('argu1');
elementNode2.addEventListener('input', shortString, false);

//Basic 3


class person {
    constructor(name, surename, age) {
        this.name = name,
        this.surename = surename,
        this.age = age,
    }
    checkPerson: function() {
        return ("Hi I am" + this.name + " " + this.surename + " I am " + this.age + " years old and I am a future programmer.");
    }

}
var print_Person = document.getElementById("me").innerHTML = person.checkPerson();