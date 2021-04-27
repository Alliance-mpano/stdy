 // function Person(fName,lName, age,gender,interests){
//     this.fName=fName
//     this.lName=lName
//     this.age = age
//     this.gender = gender
//     this.interests = interests

//     this.greeting  = function(){
//         console.log("Hi I am "+this.fName+" "+this.lName)
//     }
// }
// console.log(Person.prototype)
function Person(name, job, yearOfBirth){    
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
}
Person.prototype.calculateAge=function(){
    console.log("My current age is "+(2020-this.yearOfBirth))
    Person.prototype.greeting=function(){
        console.log("My name is "+this.name+".")
    }
} 
// console.log(Person.prototype)
let Alliance=new Person("Impano","Teacher","2005")
// console.log(Alliance)
// Alliance.calculateAge()
// let Impano=new Person("Alliance","Instructor","2004")
// console.log(Impano)
// Impano.calculateAge()
function Teacher(name,job,yearOfBirth,subject,salary){
    Person.call(this,name,job,yearOfBirth)
    this.subject=subject
    this.salary=salary
}

Teacher.prototype=Object.create(Person.prototype)
// console.log(Teacher.prototype)
// Alliance.greeting()
let Impano=new Teacher("Alliance","Instructor","2004")
Impano.calculateAge()
// console.log(Object.getOwnPropertyNames(Person.prototype))
// console.log(Person.prototype.calculateAge())
// console.log(Teacher.prototype.calculateAge())
console.log(Object.getOwnPropertyNames(Teacher.prototype))
// this will show Person's prototype property. 
// console.log(Person.prototype); 
// Person.prototype.bio = function(){
//     console.log("Testing inheritance")
// }
// function Teacher(fName,lName, age,gender,interests,subject){
//     Person.call(this,fName,lName, age,gender,interests)
//     this.subject = subject
// }
// Teacher.prototype=Object.create(Person.prototype)

// let teacherBill =  new Teacher("Bill","Benono",15,
// "Male","Basketball","JS")
// //teacherBill.greeting()
// teacherBill.bio()

// let esther = new Person("Esther",16,"Female")
// esther.greeting();

// let stanley = new Person("Stanley")
// stanley.greeting();

// let burigo= new Person("Jabeth Burigo")
// burigo.greeting();









// function HumanBeing(){
//     this.name;
//     this.greeting  = function(){
//         console.log("Hi I am "+this.name)
//     }
// }
// let teta = new HumanBeing()
// teta.name="Teta"
// teta.greeting()
