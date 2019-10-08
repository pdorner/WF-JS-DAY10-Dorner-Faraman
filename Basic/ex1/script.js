var dob = '19920706';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
console.log(year , month , day , age);



function shorttxt(){
    var str = document.getElementById("txt1").value; 
    var x= document.getElementById("num").value;
    var res = str.slice(0, x); 
    document.getElementById("output").innerHTML = res;
    console.log(res);
}
var dom= document.getElementById("num");
dom.addEventListener('input', shorttxt, false);

    
