function Person(fname,lname,age,gender,interests){

    this.name={
        first:fname,
        last:lname
    }
    
    this.age=age;
    this.gender=gender;

    this.interests=interests;
    this.greeting=function(){

        console.log('Hello my name is '+this.name.first+" "+this.name.last+' and I am '+this.gender+'. I am interested in '+this.interests)
    }
    this.leave=function(){

        console.log('Goodbye')
    }
}
class Teacher extends Person{
    constructor(fname,lname,age,gender,interests,subject,occupation,grade){
        super(fname,lname,age,gender,interests);
this._subject=subject;
        this.occupation=occupation;
        this.grade=grade;
        this.teaching=function(){
            console.log("I am teacher "+this.name.first+" "+this.name.last+" I teach in Grade "+this.grade+".")
        }
    }
    get subject(){
        return this._subject;
    }
    set subject(newSubject){
        return this._subject=newSubject;
    }
}

let Alliance=new Person('Impano','Alliance','12','Female','Sleeping')

let Henriette=new Teacher("Bizzy","Henriette","24","Female","Reading","English","educating","12")
Henriette.teaching()
console.log(Henriette.subject)
Henriette.subject="Biology"
console.log(Henriette.subject)
Alliance.greeting()
Alliance.leave()
console.log(Henriette.interests)