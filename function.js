function modulus(number1, number2){
    
        if(number2 == 0){
            return 0
    }
    else{
        return number1%number2
    }
}
console.log(modulus(10,3))
function add(number1,number2){
    return number1+number2
}
function divide(number1,number2){
    if(number2==0){
    return 0
    }else{
        return number1/number2
    }
}
console.log("the sum is...."+add(14,3))
console.log("the quotient is..."+divide(15,3))