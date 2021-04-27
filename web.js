function myFunction() { 
    document.getElementById("myId").innerHTML = "This is  javascript at work."; 
  } 
  
  function fuction() { 
   document.getElementById("demo").innerHTML = "Paragraph changed."; 
  } 
  function makeFieldYellow(){
      document.getElementById("inp").style.backgroundColor='yellow'
  }
  function makeFieldBlack(){
      document.getElementById("inp").style.backgroundColor='black'
  }
  var gat = 3;
  var bar = 6;
  
     var friends=["Shekinah", "Annie", "Gizzo", "Christelle"]
function nameSake(){
     var name="Jennifer";
 if (name=="Jennifer"){
     alert("That's my name too!")
 }else{
     alert("Not my namesake,")
 }
}
/*var myVariable=2;
if(myVariable>5){
    alert("upper")
}else{
    alert("lower")
}*/
/*for(i=0;i<=10;i++){
    alert(i)   
}*/
/*var items = ["foo", "bar", "baz"]; // First we create an array.
for(  i = 0; i <= items.length; i++ ) {
alert( items[i] ); 
}*/
/*var cars = ["Saab", "Volvo", "BMW"]; 
for( i = 0; i <= cars.length; i++){
    alert( cars[i] );
alert(cars.length)
}*/
//setTimeout(cars,60000)
function foo(){
    alert("My function just ran")
}
function getLength(x){
    console.log( x.length)
}
var test = [1,2,3,4,5];
console.log(getLength(test.length));

  function getEmail(){
    var email = document.getElementById("email").value
      console.log("This is email entered")
}