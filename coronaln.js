var x="3"
var age=23
var voteable=(age<18)? "Too young":"Able to vote"
console.log(voteable)
console.log(typeof "age")
var cars=["BMW","Saab","Volvo"]
console.log("Saab" in cars)
console.log(1 in cars)
console.log(4 in cars)
console.log(cars instanceof Array)
function makeColorRed(){

}
function addNumber(x,y){
    return x+y;
}
function multiply(a,b){
    return a*b;
}
function myFunction() {   var carName = "Volvo"; 
 // code here CAN use carName
 return carName
 
 } 
 console.log(myFunction())
 // code here can NOT use carName 
console.log("The sum is "+addNumber(4,49))
var myArray=new Array(0,2,4)
console.log(myArray[1])