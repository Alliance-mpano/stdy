function add(x,y){ 
    return x+y 
}

console.log(add(4,5))
function divide(a,b){
    if(b==0){
        return 0
    }else{
   return a/b 
}
}
console.log(divide(5,0))
function multiply(nm1,nm2){
   return nm1*nm2
}
console.log(multiply(4,0))
function modulus(f,g){
    return f%g
}
console.log("The remainder is "+modulus(5,1))
var weight=29
if(weight<60){
    console.log("Not allowed to apply for Miss Rwanda")
}
else if(weight<=75){
    console.log("Allowed to apply for Miss Rwanda")
}else{
    console.log("Sorry, you are not allowed to apply for miss Rwanda")
}
var age=2
if(age>=18){
    console.log("Allowed to participate in elections")
}else{
    console.log("Not allowed to participate in elections")
}
var grades=8
switch(grades){
    case 8 :console.log("First grade, excellent")
    break
    case 9 :console.log("Second grade")
    break
    default: console.log("Last grades, work hard and improve")
    
}
for(x=0;x<=19;++x){
    console.log("The number is "+x)
}
var y=0
while(y<25){
    console.log("The current y is "+y);
    y++
}
var count=4
do{
    console.log("The number is "+count);
    count++;
}
while(count<5);
var meals= ["rice","meat","ugali"]
for(meal in meals) {
    console.log(meals[meal]);
}
var y=29
do{
    console.log("The number is "+y);
    y++;
}
while(y<29);
console.log("The counting has ended")
console.log("The number is "+modulus(5,3))
function ms(h,g){
    if(h%g==0){
        console.log("The number is even")
    }else{
        return h%g
    }
}
console.log(ms(7,3))