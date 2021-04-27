function Person(fname,lname,work,gender,email,age){
    this.fname=fname;
    this.lname=lname;
    this.work=work;
    this.gender=gender;
    this.email=email;
    this.age=age;
    this.occupation= function(){
        console.log("I am "+this.fname+" "+this.lname+" and I am "+this.work+" in RCA.");
    }
}
function Student(fname,lname,work,gender,email,age,intake){
    Person.call(this,fname,lname,work,gender,email,age);
    this.intake=intake;

    this.learning=function(){
        console.log("I am "+this.fname+" "+this.lname+" and I study in class "+this.intake+".");
    }
}
function Teacher(fname,lname,work,gender,subject,email,age){
    Person.call(this,fname,lname,work,gender,email,age);
    this.subject=subject;

    this.teaching=function(){
        console.log("I am teacher "+this.fname+" "+this.lname+", I teach "+this.subject+".");
        console.log("My email is "+this.email+",contact me any time you need help.");
        }
}
let person1=new Person("Impano","Alliance","Programmer","Female","alliekook03@gmail.com","15");
person1.occupation();

let student1=new Student("Impano","Alliance","Developer","Female","alliekook03@gmail.com","15","4A");
student1.learning();

let teacher1=new Teacher("Bizy","Henriette","Developer","Female","Database","bizy@gmail.com","20");
teacher1.teaching();

let student2= new Student("Iliza","Micheline","Developer","Female","ilizamichella@gmail.com","15","4C");
student2.learning();

let teacher2=new Teacher("Ihirwe","Teta","Developer","Female","Mathematics","tetahirwe@gmail.com","39");
teacher2.teaching();