function person (name,surename,age){
    
        this.name = name;
        this.surename = surename;
        this.age = age;
    


}

var myp=new person( Muhammed,faraman,27);
document.getElementById("me1").innerHTML =
"sssss " + myp.age + "." + myp.name + myp.surename; 

