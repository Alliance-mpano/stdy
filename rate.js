function modulus(p1,p2){
return p1 % p2
}
console.log("the remainder is "+modulus(3,2))
function divide(x,y){
if(y==0){
    return 0
}else{
    return x/y
}
}
console.log("The quotient is "+divide(15,3))
var x= myFunction(3,5)
function myFunction(a,b){
    return a*b
}

/*function home(j,k){
    var s= document.getElementsByTagName("button")
      return j*k
}
var x=home(3,4)
//var s= document.getElementById("demo").innerText=home(4,5)*/


function toCelsius(f){
    return (5/9)* (f-32);
}
console.log("To change celsius to farenheit you " + toCelsius)
console.log("45 degrees f in celsius are equal to "+toCelsius(45)+" in c")