var x=Math.floor(Math.random()*100);
var a=Math.floor(Math.random()*100);
var b=Math.floor(Math.random()*100);
var c=Math.floor(Math.random()*100);
var d=Math.floor(Math.random()*100);
var f=Math.floor(Math.random()*100);
var sum = x+a+b+c+d+f;
var i=0;
while(i<101)
{
    i++;
    if ( (x*1)<=sum && (a*2)<=sum && (b*5)<=sum && (c*10)<=sum && (d*2)<=sum && (f*2)<sum){
        console.log( x , a, b, c, d, f)

    }
}

