function calculate(){
    var km=document.getElementById("km").value;
    var lt=document.getElementById("lt").value;
    var result=(lt/km);
    document.getElementById("output").innerHTML=result;
}
var element= document.getElementById("button");
element.addEventListener('click',calculate,false)