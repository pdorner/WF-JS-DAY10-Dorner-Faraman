

class Person{
	constructor(name, surename, age){
		this.name = name;
		this.surename = surename;
		this.age = age;
	}
	checkPerson1(){
	   	return("Hi I am" + this.name + " "+ this.surename + " I am " + this.age + " years old and I am a future programmer.");
   }
   beHappy(){
   	console.log("beHappy");
   }
}
var per = new Person("Philipp", "Dorner", "35");
var per2 = new Person("Wolfgang", "Figl", "29");

document.getElementById("me").innerHTML = per.checkPerson1();
per.beHappy();
document.getElementById("you").innerHTML = per2.checkPerson1();



