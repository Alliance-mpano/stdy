let phraseSplitter=phrase=>phrase.split("").reverse().join("");
console.log(phraseSplitter("Alliance"))
let multiply=(x,y)=>x*y;
console.log(multiply(3,4))
let setName=(id,name)=>({id:id,name:name})
console.log(setName(4,"Impano"))
const smartPhones=[
    {name:"iphone",price:649},
    {name:"Galaxy s6",price:576},
    {name:"Galaxy Note 5",price:489}
]
// let prices=smartPhones.map(function(smartPhone){
//     return smartPhone.price
// })
let prices=smartPhones.map(smartPhone=>smartPhone.price)
console.log(prices)
let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let divisibleByThree=array.filter(function(v){
//     return v%3===0
// })
let divisibleByThree=array.filter(v=>v%3==0)
console.log(divisibleByThree)